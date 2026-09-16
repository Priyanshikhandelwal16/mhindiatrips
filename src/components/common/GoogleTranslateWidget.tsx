"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

export function setGoogleTranslateCookie(targetLang: string) {
  if (typeof document === "undefined") return;
  const domain = window.location.hostname;

  if (targetLang === "en") {
    // Clear googtrans cookies completely to restore original English text
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`;
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${domain};`;

    const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (combo && combo.value !== "en" && combo.value !== "") {
      combo.value = "en";
      combo.dispatchEvent(new Event("change"));
    }
    return;
  }

  const cookieValue = `/en/${targetLang}`;
  document.cookie = `googtrans=${cookieValue}; path=/;`;
  document.cookie = `googtrans=${cookieValue}; path=/; domain=${domain};`;
  document.cookie = `googtrans=${cookieValue}; path=/; domain=.${domain};`;

  const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement;
  if (combo) {
    if (combo.value !== targetLang) {
      combo.value = targetLang;
      combo.dispatchEvent(new Event("change"));
    }
  }
}

export default function GoogleTranslateWidget() {
  const pathname = usePathname();

  useEffect(() => {
    // Extract active locale segment (en / es / pt)
    const segments = (pathname || "").split("/").filter(Boolean);
    const firstSeg = segments[0] || "en";
    const targetLang = ["es", "pt", "fr", "de", "it"].includes(firstSeg) ? firstSeg : "en";

    // Set or clear Google Translate cookie automatically on page load
    setGoogleTranslateCookie(targetLang);

    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,es,pt,fr,de,it,ru,ja,zh-CN,hi,ar",
            autoDisplay: false,
            multilanguagePage: true,
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
          },
          "google_translate_element"
        );

        // Periodically verify translation on initial load to override React hydration
        let count = 0;
        const interval = setInterval(() => {
          count++;
          if (targetLang !== "en") {
            setGoogleTranslateCookie(targetLang);
          }
          if (count > 25) clearInterval(interval);
        }, 300);
      }
    };

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.googleTranslateElementInit) {
      window.googleTranslateElementInit();
    }

    // MutationObserver to automatically translate small detail points, activities, key points, and accordions on DOM updates
    let observer: MutationObserver | null = null;
    if (targetLang !== "en" && typeof MutationObserver !== "undefined") {
      let debounceTimer: NodeJS.Timeout | null = null;
      observer = new MutationObserver((mutations) => {
        let hasRelevantMutation = false;
        for (const m of mutations) {
          if (m.type === "childList" || m.type === "characterData") {
            const targetEl = m.target as HTMLElement;
            if (targetEl && (targetEl.classList?.contains("goog-te-banner-frame") || targetEl.id === "google_translate_element" || targetEl.tagName === "SCRIPT")) {
              continue;
            }
            hasRelevantMutation = true;
            break;
          }
        }
        if (hasRelevantMutation) {
          if (debounceTimer) clearTimeout(debounceTimer);
          debounceTimer = setTimeout(() => {
            setGoogleTranslateCookie(targetLang);
          }, 350);
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
      });
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [pathname]);

  return (
    <div id="google_translate_element" className="google-translate-container" />
  );
}
