"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

/**
 * Wipes out all googtrans cookies across root domain, subdomains, and locale paths
 * so Google Machine Translate never interferes with human-translated pages (en, es, pt).
 */
export function clearGoogleTranslateCookies() {
  if (typeof document === "undefined") return;
  const domain = window.location.hostname;
  const domainVariations = ["", domain, `.${domain}`, `www.${domain}`];
  const paths = ["/", "/en", "/es", "/pt"];

  for (const d of domainVariations) {
    for (const p of paths) {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${p};${d ? ` domain=${d};` : ""}`;
    }
  }

  const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement;
  if (combo && combo.value !== "") {
    combo.value = "";
    combo.dispatchEvent(new Event("change"));
  }
}

export function setGoogleTranslateCookie(targetLang: string) {
  if (typeof document === "undefined") return;
  const domain = window.location.hostname;

  // For native supported human locales (English, Spanish, Portuguese), ALWAYS wipe Google Translate cookies completely!
  if (targetLang === "en" || targetLang === "es" || targetLang === "pt") {
    clearGoogleTranslateCookies();
    return;
  }

  const cookieValue = `/en/${targetLang}`;
  document.cookie = `googtrans=${cookieValue}; path=/;`;
  document.cookie = `googtrans=${cookieValue}; path=/; domain=${domain};`;
  document.cookie = `googtrans=${cookieValue}; path=/; domain=.${domain};`;

  const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement;
  if (combo && combo.value !== targetLang) {
    combo.value = targetLang;
    combo.dispatchEvent(new Event("change"));
  }
}

export default function GoogleTranslateWidget() {
  const pathname = usePathname();

  useEffect(() => {
    const segments = (pathname || "").split("/").filter(Boolean);
    const firstSeg = (segments[0] || "").toLowerCase();

    // Core native human-translated locales: en, es, pt
    const isNativeLocale = firstSeg === "en" || firstSeg === "es" || firstSeg === "pt" || firstSeg === "";

    if (isNativeLocale) {
      clearGoogleTranslateCookies();
      if (typeof document !== "undefined" && firstSeg) {
        document.documentElement.lang = firstSeg;
      }
      return;
    }

    const autoSupportedLangs = ["fr", "de", "it", "ru", "ja", "zh-CN", "hi", "ar"];
    const targetLang = autoSupportedLangs.includes(firstSeg) ? firstSeg : "en";

    if (targetLang === "en") {
      clearGoogleTranslateCookies();
      return;
    }

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
  }, [pathname]);

  return (
    <div id="google_translate_element" className="google-translate-container hidden opacity-0 pointer-events-none" />
  );
}
