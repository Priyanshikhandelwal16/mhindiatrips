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
  const cookieValue = `/en/${targetLang}`;
  
  document.cookie = `googtrans=${cookieValue}; path=/;`;
  document.cookie = `googtrans=${cookieValue}; path=/; domain=${domain};`;
  document.cookie = `googtrans=${cookieValue}; path=/; domain=.${domain};`;

  const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement;
  if (combo) {
    combo.value = targetLang;
    combo.dispatchEvent(new Event("change"));
  }
}

export default function GoogleTranslateWidget() {
  const pathname = usePathname();

  useEffect(() => {
    // Extract active locale segment (en / es / pt)
    const segments = (pathname || "").split("/").filter(Boolean);
    const firstSeg = segments[0] || "en";
    const targetLang = ["es", "pt", "fr", "de", "it"].includes(firstSeg) ? firstSeg : "en";

    // Set Google Translate cookie automatically on page load
    if (targetLang !== "en") {
      setGoogleTranslateCookie(targetLang);
    }

    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,es,pt,fr,de,it,ru,ja,zh-CN,hi,ar",
            autoDisplay: false,
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
          },
          "google_translate_element"
        );

        // Auto trigger translation after Google Translate finishes loading
        setTimeout(() => {
          if (targetLang !== "en") {
            setGoogleTranslateCookie(targetLang);
          }
        }, 600);
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
    <div id="google_translate_element" className="google-translate-container" />
  );
}
