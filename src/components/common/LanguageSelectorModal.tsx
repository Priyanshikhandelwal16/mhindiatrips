"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Globe, X, Check, Sparkles } from "lucide-react";
import { setGoogleTranslateCookie } from "@/components/common/GoogleTranslateWidget";

interface LanguageSelectorModalProps {
  currentLocale: string;
}

export default function LanguageSelectorModal({ currentLocale }: LanguageSelectorModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Show popup on site load if user hasn't selected a language preference yet
    const hasPrompted = localStorage.getItem("mh_lang_selected");
    if (!hasPrompted) {
      // Small delay for smooth entry after initial page render
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSelectLanguage = (langCode: "en" | "es" | "pt") => {
    localStorage.setItem("mh_lang_selected", langCode);
    document.cookie = `NEXT_LOCALE=${langCode}; path=/; max-age=31536000; SameSite=Lax`;
    
    // Set Google Translate cookie for automatic page-wide translation
    setGoogleTranslateCookie(langCode);

    setIsOpen(false);

    // Compute target path
    let newPath = `/${langCode}`;
    if (pathname) {
      const segments = pathname.split("/").filter(Boolean);
      if (segments[0] === "en" || segments[0] === "es" || segments[0] === "pt") {
        segments[0] = langCode;
        newPath = "/" + segments.join("/");
      } else {
        newPath = `/${langCode}` + pathname;
      }
    }

    if (pathname !== newPath) {
      router.push(newPath);
    } else {
      window.location.reload();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0A2A1E] text-white border-2 border-gold/40 rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl relative overflow-hidden space-y-6">
        
        {/* Background Decorative Glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full text-white/70 hover:text-gold hover:bg-white/10 transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2 pt-2">
          <div className="w-12 h-12 mx-auto rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center text-gold mb-3">
            <Globe className="w-6 h-6 text-gold animate-pulse" />
          </div>
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Select Your Language</span>
          </span>
          <h2 className="text-xl md:text-2xl font-serif font-bold text-white leading-tight">
            Seleccione su Idioma / Choose Language
          </h2>
          <p className="text-xs text-white/70 font-light max-w-xs mx-auto">
            Experience MH India Trips in your preferred language with automatic translation.
          </p>
        </div>

        {/* 3 Main Language Cards */}
        <div className="space-y-3 pt-2">
          
          {/* English Option */}
          <button
            onClick={() => handleSelectLanguage("en")}
            className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
              currentLocale === "en"
                ? "bg-gold/20 border-gold text-white shadow-lg"
                : "bg-white/5 border-white/10 hover:border-gold/50 hover:bg-white/10 text-white/90"
            }`}
          >
            <div className="flex items-center gap-3.5">
              <span className="text-2xl">🇬🇧</span>
              <div className="text-left">
                <span className="block font-bold text-sm text-white">English</span>
                <span className="block text-[10px] text-white/60">Default Language</span>
              </div>
            </div>
            {currentLocale === "en" && <Check className="w-5 h-5 text-gold" />}
          </button>

          {/* Spanish Option */}
          <button
            onClick={() => handleSelectLanguage("es")}
            className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
              currentLocale === "es"
                ? "bg-gold/20 border-gold text-white shadow-lg"
                : "bg-white/5 border-white/10 hover:border-gold/50 hover:bg-white/10 text-white/90"
            }`}
          >
            <div className="flex items-center gap-3.5">
              <span className="text-2xl">🇪🇸</span>
              <div className="text-left">
                <span className="block font-bold text-sm text-white">Español</span>
                <span className="block text-[10px] text-white/60">Traducción Completa al Español</span>
              </div>
            </div>
            {currentLocale === "es" && <Check className="w-5 h-5 text-gold" />}
          </button>

          {/* Portuguese Option */}
          <button
            onClick={() => handleSelectLanguage("pt")}
            className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
              currentLocale === "pt"
                ? "bg-gold/20 border-gold text-white shadow-lg"
                : "bg-white/5 border-white/10 hover:border-gold/50 hover:bg-white/10 text-white/90"
            }`}
          >
            <div className="flex items-center gap-3.5">
              <span className="text-2xl">🇵🇹</span>
              <div className="text-left">
                <span className="block font-bold text-sm text-white">Português</span>
                <span className="block text-[10px] text-white/60">Tradução Completa para Português</span>
              </div>
            </div>
            {currentLocale === "pt" && <Check className="w-5 h-5 text-gold" />}
          </button>

        </div>

        {/* Footer info */}
        <div className="text-center pt-2">
          <button
            onClick={() => setIsOpen(false)}
            className="text-xs text-gold/80 hover:text-gold underline cursor-pointer"
          >
            Continue with current language
          </button>
        </div>

      </div>
    </div>
  );
}
