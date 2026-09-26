"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, X, Globe, ArrowRight, ChevronDown, Phone, Mail, Plus, Minus,
  Landmark, Crown, Trees, Palmtree, Building2, Building, Sun, Mountain,
  Compass, MapPin, Plane, Sparkles, Waves
} from "lucide-react";
import { getLocalizedDestinationsPath } from "@/lib/utils";
import GoogleTranslateWidget, { setGoogleTranslateCookie } from "@/components/common/GoogleTranslateWidget";

interface HeaderProps {
  locale: string;
  contactDetails?: {
    phone: string;
    email: string;
    whatsapp: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    logoHeightMobile?: string;
    logoHeightDesktop?: string;
    copyright?: string;
    designedBy?: string;
  };
  states?: any[];
  packages?: any[];
}

export default function Header({ locale, contactDetails, states = [], packages = [] }: HeaderProps) {
  const pathname = usePathname();
  if (pathname?.includes("/admin")) {
    return null;
  }
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobilePackagesOpen, setMobilePackagesOpen] = useState(false);
  const [mobileDestinationsOpen, setMobileDestinationsOpen] = useState(false);
  const [mobileInfoOpen, setMobileInfoOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) {
      setMobilePackagesOpen(false);
      setMobileDestinationsOpen(false);
      setMobileInfoOpen(false);
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.height = "unset";
      document.documentElement.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.height = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const menuTranslations: Record<string, any> = {
    en: {
      home: "Home",
      packages: "Travel Packages",
      about: "About Us",
      destinations: "Destinations",
      indiaDestinations: "India Destinations",
      outboundTrips: "International Trips",
      attractions: "Attractions",
      food: "Food Guide",
      info: "Traveler Info",
      contact: "Contact",
      blog: "Blog",
      cta: "Inquire Now"
    },
    es: {
      home: "Inicio",
      packages: "Paquetes",
      about: "Sobre Nosotros",
      destinations: "Destinos",
      indiaDestinations: "Destinos en India",
      outboundTrips: "Viajes Internacionales",
      attractions: "Atracciones",
      food: "Comida",
      info: "Info Viaje",
      contact: "Contacto",
      blog: "Blog",
      cta: "Planificar"
    },
    pt: {
      home: "Início",
      packages: "Pacotes",
      about: "Sobre Nós",
      destinations: "Destinos",
      indiaDestinations: "Destinos na Índia",
      outboundTrips: "Viagens Internacionais",
      attractions: "Atrações",
      food: "Gastronomia",
      info: "Info Viagem",
      contact: "Contato",
      blog: "Blog",
      cta: "Planejar"
    }
  };

  const labels = menuTranslations[locale] || menuTranslations.en;
  const displayEmail = contactDetails?.email || "info@mhindiatrips.com";

  const packagesList = (packages || []).map((p: any) => ({
    name: {
      en: p.title?.en || p.id,
      es: p.title?.es || p.id,
      pt: p.title?.pt || p.id
    },
    path: `/packages/${p.slug}`
  }));

  const destinationsList = states.map((s: any) => ({
    name: {
      en: s.name?.en || s.id,
      es: s.name?.es || s.id,
      pt: s.name?.pt || s.id
    },
    path: getLocalizedDestinationsPath(locale, s.slug?.[locale as "en" | "es" | "pt"] || s.id)
  }));

  const defaultOutboundList = [
    { name: { en: "Dubai & UAE", es: "Dubái y Emiratos", pt: "Dubai e Emirados" }, path: "/international-trips/dubai" },
    { name: { en: "Bali, Indonesia", es: "Bali, Indonesia", pt: "Bali, Indonésia" }, path: "/international-trips/bali" },
    { name: { en: "Thailand", es: "Tailandia", pt: "Tailândia" }, path: "/international-trips/thailand" },
    { name: { en: "Maldives", es: "Maldivas", pt: "Maldivas" }, path: "/international-trips/maldives" },
    { name: { en: "Vietnam", es: "Vietnam", pt: "Vietnã" }, path: "/international-trips/vietnam" },
    { name: { en: "Singapore & Malaysia", es: "Singapur y Malasia", pt: "Cingapura e Indonésia" }, path: "/international-trips/singapore" },
    { name: { en: "Nepal & Bhutan", es: "Nepal y Bután", pt: "Nepal e Butão" }, path: "/international-trips/nepal" },
    { name: { en: "Sri Lanka", es: "Sri Lanka", pt: "Sri Lanka" }, path: "/international-trips/sri-lanka" },
    { name: { en: "Laos", es: "Laos", pt: "Laos" }, path: "/international-trips/laos" }
  ];

  const outboundList = (contactDetails as any)?.customOutboundNav && (contactDetails as any).customOutboundNav.length > 0
    ? (contactDetails as any).customOutboundNav
    : defaultOutboundList;

  const defaultInfoList = [
    { name: { en: "Solo Female Traveler", es: "Mujer viajando sola por la India", pt: "Mulher viajando sozinha na Índia" }, path: "/travel-info/solo-female-travel" },
    { name: { en: "Visa & Entry Requirements", es: "Requisitos de Visa y Entrada", pt: "Visto e Requisitos de Entrada" }, path: "/travel-info/visa-entry-requirements" },
    { name: { en: "Best Time to Visit", es: "Cuando viajar a la India", pt: "Quando viajar para a Índia" }, path: "/travel-info/best-time-climate" },
    { name: { en: "Health & Vaccinations", es: "Salud y Vacunas", pt: "Saúde e Vacinas" }, path: "/travel-info/vaccinations-health" },
    { name: { en: "Packing & Currency Guide", es: "Guía de Equipaje y Moneda", pt: "Guia de Bagagem e Moeda" }, path: "/travel-info/packing-currency" },
    { name: { en: "Frequently Asked Questions", es: "Preguntas Frecuentes", pt: "Perguntas Frequentes" }, path: "/faq" }
  ];

  const infoList = (contactDetails as any)?.customInfoNav && (contactDetails as any).customInfoNav.length > 0
    ? (contactDetails as any).customInfoNav
    : defaultInfoList;

  const ctaText = (contactDetails as any)?.headerCta?.[locale] || (contactDetails as any)?.headerCta?.en || labels.cta;
  const rawCtaUrl = (contactDetails as any)?.headerCtaUrl || "/contact";
  const ctaUrl = rawCtaUrl.startsWith("/") ? `/${locale}${rawCtaUrl.replace(/^\/(en|es|pt)/, "")}` : rawCtaUrl;

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "pt", name: "Português", flag: "🇵🇹" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
    { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
    { code: "zh-CN", name: "中文", flag: "🇨🇳" },
    { code: "ar", name: "العربية", flag: "🇦🇪" }
  ];

  const handleSelectLanguage = (targetLocale: string) => {
    if (typeof document !== "undefined") {
      document.cookie = `NEXT_LOCALE=${targetLocale}; path=/; max-age=31536000; SameSite=Lax`;
      setGoogleTranslateCookie(targetLocale);
    }
    setLangMenuOpen(false);

    // If target is a core route locale (en, es, pt), navigate to its URL path
    if (targetLocale === "en" || targetLocale === "es" || targetLocale === "pt") {
      const nextPath = switchLocalePath(targetLocale);
      if (typeof window !== "undefined" && window.location.pathname !== nextPath) {
        window.location.href = nextPath;
      }
    } else {
      // Force instant Google Translate DOM refresh for external languages
      setTimeout(() => {
        setGoogleTranslateCookie(targetLocale);
      }, 100);
    }
  };

  const switchLocalePath = (targetLocale: string) => {
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split("/");
    if (segments[1] === "en" || segments[1] === "es" || segments[1] === "pt") {
      segments[1] = targetLocale;
    } else {
      segments.splice(1, 0, targetLocale);
    }

    if (segments[2] === "destinations-in-india" || segments[2] === "destinos-en-india" || segments[2] === "destinos-na-india") {
      if (targetLocale === "es") segments[2] = "destinos-en-india";
      else if (targetLocale === "pt") segments[2] = "destinos-na-india";
      else segments[2] = "destinations-in-india";
    }

    return segments.join("/") || `/${targetLocale}`;
  };

  const isActive = (path: string) => {
    if (!pathname) return false;
    const currentPath = pathname.replace(`/${locale}`, "") || "/";
    if (path === "/" && currentPath === "/") return true;
    if (path === "/destinations") {
      return currentPath.startsWith("/destinations-in-india") || 
             currentPath.startsWith("/destinos-en-india") || 
             currentPath.startsWith("/destinos-na-india") ||
             currentPath.startsWith("/destinations") ||
             currentPath.startsWith("/international-trips");
    }
    return path !== "/" && currentPath.startsWith(path);
  };

  const linkClass = (path: string) => {
    const base = "text-[11px] xl:text-xs 2xl:text-[13px] font-bold uppercase tracking-wide transition-all duration-300 relative py-1.5 shrink-0";
    const activeColor = "text-gold";
    const inactiveColor = "text-royal hover:text-gold";
    return `${base} ${isActive(path) ? activeColor : inactiveColor}`;
  };

  const renderStateIcon = (name: string) => {
    const lowerName = (name || "").toLowerCase();
    if (lowerName.includes("rajasthan")) return <Crown className="w-3.5 h-3.5 text-[#C5A862] shrink-0" />;
    if (lowerName.includes("kerala")) return <Palmtree className="w-3.5 h-3.5 text-[#C5A862] shrink-0" />;
    if (lowerName.includes("madhya")) return <Trees className="w-3.5 h-3.5 text-[#C5A862] shrink-0" />;
    if (lowerName.includes("tamil")) return <Landmark className="w-3.5 h-3.5 text-[#C5A862] shrink-0" />;
    if (lowerName.includes("uttar")) return <Building2 className="w-3.5 h-3.5 text-[#C5A862] shrink-0" />;
    if (lowerName.includes("maharashtra")) return <Building className="w-3.5 h-3.5 text-[#C5A862] shrink-0" />;
    if (lowerName.includes("goa")) return <Sun className="w-3.5 h-3.5 text-[#C5A862] shrink-0" />;
    if (lowerName.includes("karnataka")) return <Landmark className="w-3.5 h-3.5 text-[#C5A862] shrink-0" />;
    if (lowerName.includes("delhi")) return <Building2 className="w-3.5 h-3.5 text-[#C5A862] shrink-0" />;
    if (lowerName.includes("himachal") || lowerName.includes("ladakh") || lowerName.includes("kashmir")) return <Mountain className="w-3.5 h-3.5 text-[#C5A862] shrink-0" />;
    return <MapPin className="w-3.5 h-3.5 text-[#C5A862] shrink-0" />;
  };

  const renderOutboundIcon = (name: string) => {
    const lowerOut = (name || "").toLowerCase();
    if (lowerOut.includes("dubai")) return <Building2 className="w-3.5 h-3.5 text-[#C5A862] shrink-0" />;
    if (lowerOut.includes("bali") || lowerOut.includes("maldives")) return <Palmtree className="w-3.5 h-3.5 text-[#C5A862] shrink-0" />;
    if (lowerOut.includes("thailand") || lowerOut.includes("vietnam") || lowerOut.includes("laos")) return <Compass className="w-3.5 h-3.5 text-[#C5A862] shrink-0" />;
    if (lowerOut.includes("nepal") || lowerOut.includes("bhutan")) return <Mountain className="w-3.5 h-3.5 text-[#C5A862] shrink-0" />;
    return <Plane className="w-3.5 h-3.5 text-[#C5A862] shrink-0" />;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] w-full font-sans border-b border-gold/10 overflow-x-clip transition-all duration-300">
      
      {/* Elegant Top Bar (Hides cleanly on scroll) */}
      <div 
        className={`bg-[#0A2A1E] text-white/90 text-[10px] md:text-xs border-b border-gold/10 relative z-20 transition-all duration-300 ease-in-out ${
          (scrolled || mobileMenuOpen) ? "max-h-0 py-0 opacity-0 overflow-hidden border-0" : "max-h-20 md:max-h-12 py-2 px-3 md:py-2.5 md:px-6 opacity-100"
        }`}
      >
        <div className="max-w-[1600px] w-full mx-auto px-2 sm:px-4 xl:px-8 flex flex-row flex-wrap sm:flex-nowrap justify-between items-center gap-2 text-[9px] sm:text-[10px] md:text-xs">
          <div className="flex items-center gap-3 sm:gap-6 shrink-0">
            <a href={`tel:${contactDetails?.phone || "+91 9314635830"}`} className="flex items-center gap-1 hover:text-gold transition-colors shrink-0">
              <Phone className="w-3 h-3 text-gold shrink-0" />
              <span className="whitespace-nowrap">{contactDetails?.phone || "+91 9314635830"}</span>
            </a>
            <a href={`mailto:${displayEmail}`} className="flex items-center gap-1 hover:text-gold transition-colors shrink-0">
              <Mail className="w-3 h-3 text-gold shrink-0" />
              <span className="whitespace-nowrap">{displayEmail}</span>
            </a>
          </div>
          <div className="flex items-center gap-3 text-white/80 shrink-0">
            <a href={contactDetails?.facebook || "https://www.facebook.com/viajeaindiaconindiasinvitation/"} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors p-1" aria-label="Facebook">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href={contactDetails?.twitter || "https://x.com/abhilash01"} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors p-1" aria-label="Twitter">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href={contactDetails?.instagram || "https://www.instagram.com/mhindiatrips/"} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors p-1" aria-label="Instagram">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.youtube.com/channel/UCiV4lAtakOtzaf3akF6r0eQ" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors p-1" aria-label="YouTube">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Premium Sticky Header */}
      <div 
        className={`w-full border-b border-gold/10 relative z-50 bg-white transition-all duration-300 ${
          scrolled ? "py-2 shadow-md bg-white/95 backdrop-blur-md" : "py-3 2xl:py-4"
        }`}
      >
        <div className="max-w-[1700px] w-full mx-auto px-4 xl:px-6 2xl:px-8 flex items-center justify-between gap-3 xl:gap-5 flex-nowrap">
          
          <style dangerouslySetInnerHTML={{__html: `
            .logo-custom-height {
              height: ${contactDetails?.logoHeightMobile || "44"}px !important;
            }
            @media (min-width: 768px) {
              .logo-custom-height {
                height: ${contactDetails?.logoHeightDesktop ? Number(contactDetails.logoHeightDesktop) : "54"}px !important;
              }
            }
            @media (min-width: 1536px) {
              .logo-custom-height {
                height: ${contactDetails?.logoHeightDesktop ? Math.max(Number(contactDetails.logoHeightDesktop), 60) : "62"}px !important;
              }
            }
          `}} />

          {/* Logo */}
          <Link href={`/${locale}`} className="relative block shrink-0 z-20">
            <img
              src="/images/logo-transparent.png"
              alt="MH India Trips"
              className="logo-custom-height w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center flex-nowrap gap-2.5 xl:gap-3.5 2xl:gap-5 shrink-0">
            
            {/* Home Link */}
            <Link
              href={`/${locale}`}
              className={linkClass("/")}
            >
              <span>{labels.home}</span>
              {isActive("/") && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
              )}
            </Link>

            {/* Travel Packages Dropdown */}
            <div className="relative group py-2.5">
              <Link
                href={`/${locale}/packages`}
                className={linkClass("/packages")}
              >
                <span className="flex items-center gap-1">
                  {labels.packages}
                  <ChevronDown className="w-3 h-3 text-gold" />
                </span>
              </Link>
              
              {/* Dropdown Container */}
              <div className="absolute left-0 top-full w-64 bg-white border border-gold/15 shadow-2xl py-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50 rounded-b-xl">
                <Link
                  href={`/${locale}/packages`}
                  className="block px-5 py-2 text-[10px] font-bold uppercase tracking-wider text-royal/60 border-b border-gold/5 hover:text-gold hover:bg-gold/5 mb-1.5 pb-2"
                >
                  All Packages
                </Link>
                <Link
                  href={`/${locale}/packages?category=Outbound`}
                  className="block px-5 py-2 text-[10px] font-bold uppercase tracking-wider text-gold bg-gold/5 border-b border-gold/10 hover:bg-gold/10 mb-1.5 pb-2 flex items-center justify-between"
                >
                  <span className="flex items-center gap-1.5">
                    <Plane className="w-3.5 h-3.5 text-gold" />
                    <span>Outbound International</span>
                  </span>
                  <span className="text-[8px] bg-gold text-royal px-1.5 py-0.5 rounded font-black">NEW</span>
                </Link>
                {packagesList.map((pkg, idx) => (
                  <Link
                    key={idx}
                    href={`/${locale}${pkg.path}`}
                    className="block px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-royal hover:text-gold hover:bg-gold/5 transition-colors"
                  >
                    {pkg.name[locale as 'en'|'es'|'pt'] || pkg.name.en}
                  </Link>
                ))}
              </div>
            </div>

            {/* About Us */}
            <Link
              href={`/${locale}/about`}
              className={linkClass("/about")}
            >
              <span>{labels.about}</span>
              {isActive("/about") && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
              )}
            </Link>

            {/* Destinations Super-Dropdown (India + Outbound) */}
            <div className="relative group py-2.5">
              <Link
                href={getLocalizedDestinationsPath(locale)}
                className={linkClass("/destinations")}
              >
                <span className="flex items-center gap-1">
                  <span>{labels.destinations}</span>
                  <ChevronDown className="w-3 h-3 text-gold" />
                </span>
              </Link>
              
              {/* Wide 2-Column Super Dropdown Container */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-[560px] xl:w-[640px] bg-white border-2 border-[#C5A862] shadow-2xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50 rounded-2xl overflow-hidden">
                
                {/* Header Banner */}
                <div className="bg-[#0A2A1E] text-white p-3.5 px-6 font-serif flex items-center justify-between text-xs border-b border-[#C5A862]/30">
                  <span className="flex items-center gap-2 font-bold text-[#C5A862]">
                    <Sparkles className="w-4 h-4 text-[#C5A862]" />
                    <span>Explore Tailor-Made Luxury Destinations</span>
                  </span>
                  <span className="text-[10px] uppercase font-sans tracking-widest text-white/70">PAN India & Outbound</span>
                </div>

                <div className="p-5 grid grid-cols-2 gap-6 bg-[#FAF8F5]">
                  
                  {/* Column 1: India Destinations */}
                  <div className="flex flex-col border-r border-[#C5A862]/20 pr-4 space-y-2">
                    <Link
                      href={getLocalizedDestinationsPath(locale)}
                      className="flex items-center justify-between font-serif font-extrabold text-sm text-[#0A2A1E] pb-2 border-b border-[#C5A862]/20 hover:text-[#C5A862] transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#C5A862]" />
                        <span>{labels.indiaDestinations}</span>
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C5A862]" />
                    </Link>
                    <div className="flex flex-col space-y-1 max-h-[300px] overflow-y-auto pr-1">
                      {destinationsList.map((dest, idx) => {
                        const rawName = dest.name[locale as 'en'|'es'|'pt'] || dest.name.en;
                        let formattedName = rawName;
                        if (locale === "es") {
                          if (["kerala", "goa", "maharashtra", "karnataka"].includes(dest.name.en.toLowerCase())) {
                            formattedName = `Viaje a ${rawName}`;
                          } else {
                            formattedName = `Turismo en ${rawName}`;
                          }
                        } else if (locale === "pt") {
                          if (["kerala", "goa", "maharashtra", "karnataka"].includes(dest.name.en.toLowerCase())) {
                            formattedName = `Viajar para ${rawName}`;
                          } else {
                            formattedName = `Turismo em ${rawName}`;
                          }
                        }

                        return (
                          <Link
                            key={idx}
                            href={dest.path}
                            className="text-[11px] font-semibold text-[#0A2A1E] hover:text-[#0A2A1E] hover:translate-x-1 transition-all py-1.5 px-3 rounded-xl hover:bg-white hover:border hover:border-[#C5A862]/40 shadow-none hover:shadow-md flex items-center justify-between group/item"
                          >
                            <span className="flex items-center gap-2">
                              {renderStateIcon(dest.name.en)}
                              <span>{formattedName}</span>
                            </span>
                            <ArrowRight className="w-3 h-3 text-[#C5A862] opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Column 2: International / Outbound Trips */}
                  <div className="flex flex-col space-y-2">
                    <Link
                      href={`/${locale}/international-trips`}
                      className="flex items-center justify-between font-serif font-extrabold text-sm text-[#0A2A1E] pb-2 border-b border-[#C5A862]/20 hover:text-[#C5A862] transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Plane className="w-4 h-4 text-[#C5A862]" />
                        <span>{labels.outboundTrips}</span>
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C5A862]" />
                    </Link>
                    <div className="flex flex-col space-y-1 max-h-[300px] overflow-y-auto pr-1">
                      {outboundList.map((out: any, idx: number) => {
                        const outName = typeof out.name === 'string' ? out.name : (out.name?.[locale] || out.name?.en || out.name?.es || out.name?.pt || "");
                        const outPath = out.path || out.url || "";
                        const fullPath = outPath.startsWith("/") ? `/${locale}${outPath.replace(/^\/(en|es|pt)/, "")}` : outPath;

                        return (
                          <Link
                            key={idx}
                            href={fullPath}
                            className="text-[11px] font-semibold text-[#0A2A1E] hover:text-[#0A2A1E] hover:translate-x-1 transition-all py-1.5 px-3 rounded-xl hover:bg-white hover:border hover:border-[#C5A862]/40 shadow-none hover:shadow-md flex items-center justify-between group/item"
                          >
                            <span className="flex items-center gap-2">
                              {renderOutboundIcon(outName)}
                              <span>{outName}</span>
                            </span>
                            <ArrowRight className="w-3 h-3 text-[#C5A862] opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                </div>

                {/* Luxury Bottom Banner inside Dropdown */}
                <div className="bg-[#0A2A1E] text-white p-3 px-6 border-t border-[#C5A862]/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C5A862] animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/90">Need Custom Circuit Planning?</span>
                  </div>
                  <Link
                    href={`/${locale}/contact`}
                    className="bg-[#C5A862] text-[#0A2A1E] hover:bg-white text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full transition-colors flex items-center gap-1"
                  >
                    <span>Talk to Concierge</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Traveler Info Dropdown */}
            <div className="relative group py-2.5">
              <Link
                href={`/${locale}/faq`}
                className={linkClass("/faq")}
              >
                <span className="flex items-center gap-1">
                  {labels.info}
                  <ChevronDown className="w-3 h-3 text-gold" />
                </span>
              </Link>
              
              {/* Dropdown Container */}
              <div className="absolute left-0 top-full w-64 bg-white border border-gold/15 shadow-2xl py-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50 rounded-b-xl">
                {infoList.map((info: any, idx: number) => {
                  const infoName = typeof info.name === 'string' ? info.name : (info.name?.[locale] || info.name?.en || info.name?.es || info.name?.pt || "");
                  const infoPath = info.path || info.url || "";
                  const fullPath = infoPath.startsWith("/") ? `/${locale}${infoPath.replace(/^\/(en|es|pt)/, "")}` : infoPath;
                  return (
                    <Link
                      key={idx}
                      href={fullPath}
                      className="block px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-royal hover:text-gold hover:bg-gold/5 transition-colors"
                    >
                      {infoName}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* National Parks (Requirement #5) */}
            <Link
              href={`/${locale}/national-parks`}
              className={linkClass("/national-parks")}
            >
              <span>{locale === "es" ? "Parques Nacionales" : locale === "pt" ? "Parques Nacionais" : "National Parks"}</span>
              {isActive("/national-parks") && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
              )}
            </Link>

            {/* Blog */}
            <Link
              href={`/${locale}/blog`}
              className={linkClass("/blog")}
            >
              <span>{labels.blog}</span>
              {isActive("/blog") && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
              )}
            </Link>

            {/* Contact */}
            <Link
              href={`/${locale}/contact`}
              className={linkClass("/contact")}
            >
              <span>{labels.contact}</span>
              {isActive("/contact") && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
              )}
            </Link>


          </nav>

          {/* Right Action Menu */}
          <div className="hidden xl:flex items-center gap-2 2xl:gap-3 z-20 shrink-0">

            {/* Globe Locale Route Switcher */}
            <div className="relative">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 text-[8.5px] 2xl:text-[10px] font-bold uppercase tracking-wider text-royal border border-gold/25 hover:border-gold hover:text-gold px-3 py-1.5 2xl:px-4 2xl:py-2 rounded-full cursor-pointer transition-all duration-300 bg-white/50"
                aria-label="Language Selector"
                suppressHydrationWarning={true}
              >
                <span>{locale === "es" ? "🇪🇸 ES" : locale === "pt" ? "🇵🇹 PT" : "🇬🇧 EN"}</span>
                <ChevronDown className="w-2.5 h-2.5 text-gold" />
              </button>
              
              {langMenuOpen && (
                <>
                  <div className="fixed inset-0 z-30" onClick={() => setLangMenuOpen(false)} />
                  <div className="absolute right-0 mt-3 w-44 bg-white border border-gold/15 shadow-2xl z-40 py-2.5 overflow-hidden animate-scale-up rounded-xl">
                    <div className="px-3 py-1 text-[8px] font-black uppercase text-gold tracking-widest border-b border-gold/10 mb-1">
                      Featured Languages
                    </div>
                    {languages.map((lang) => (
                      <Link
                        key={lang.code}
                        href={switchLocalePath(lang.code)}
                        onClick={() => handleSelectLanguage(lang.code)}
                        className={`flex items-center justify-between px-4 py-2 text-[11px] font-semibold tracking-wider uppercase text-royal hover:bg-gold/5 hover:text-gold transition-colors ${
                          locale === lang.code ? "text-gold font-extrabold bg-gold/10" : ""
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{lang.flag}</span>
                          <span>{lang.name}</span>
                        </span>
                        {locale === lang.code && <span className="w-2 h-2 rounded-full bg-gold" />}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Inquire CTA Button */}
            <Link 
              href={ctaUrl}
              className="group bg-[#0A2A1E] hover:bg-[#C5A862] hover:text-[#0A2A1E] text-white text-[8.5px] 2xl:text-[10px] font-bold uppercase tracking-[0.03em] 2xl:tracking-[0.1em] px-3.5 py-2 2xl:px-5 2xl:py-3 rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center gap-1 2xl:gap-1.5 shadow-md border border-royal/10 whitespace-nowrap"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-3 h-3 text-gold group-hover:text-[#0A2A1E]" />
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="flex xl:hidden items-center gap-2 z-20 relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="px-3 py-1.5 border border-gold/20 text-royal hover:border-gold rounded-full transition-colors flex items-center gap-1 text-[10px] font-bold uppercase bg-white/60"
              aria-label="Language Mobile Menu"
              suppressHydrationWarning={true}
            >
              <span>{locale === "es" ? "🇪🇸 ES" : locale === "pt" ? "🇵🇹 PT" : "🇬🇧 EN"}</span>
              <ChevronDown className="w-3 h-3 text-gold" />
            </button>

            {langMenuOpen && (
              <>
                <div className="fixed inset-0 z-30" onClick={() => setLangMenuOpen(false)} />
                <div className="absolute right-0 top-12 w-48 bg-white border border-gold/20 shadow-2xl z-50 py-2.5 overflow-hidden animate-scale-up rounded-2xl max-h-80 overflow-y-auto">
                  <div className="px-4 py-1 text-[8px] font-black uppercase text-gold tracking-widest border-b border-gold/10 mb-1">
                    Select Language
                  </div>
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={switchLocalePath(lang.code)}
                      onClick={() => handleSelectLanguage(lang.code)}
                      className={`flex items-center justify-between px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-royal hover:text-gold hover:bg-gold/5 ${
                        locale === lang.code ? "text-gold font-extrabold bg-gold/10" : ""
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </span>
                      {locale === lang.code && <span className="text-[8px] bg-gold/20 text-royal px-1.5 py-0.5 rounded font-black">ACTIVE</span>}
                    </Link>
                  ))}
                </div>
              </>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-gold/15 text-royal hover:border-gold rounded-full transition-colors"
              aria-label="Toggle Mobile Menu"
              suppressHydrationWarning={true}
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-royal" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#FCFAF6]/98 backdrop-blur-xl z-40 flex flex-col justify-start pt-24 px-6 pb-10 space-y-4 animate-fade-in xl:hidden text-royal overflow-y-auto overscroll-contain">
          
          {/* Mobile Quick Language Bar */}
          <div className="bg-white border border-gold/20 p-3 rounded-2xl space-y-2 shadow-sm">
            <span className="text-[9px] font-bold uppercase tracking-widest text-gold block">
              🌐 Select Language / Idioma:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  href={switchLocalePath(lang.code)}
                  onClick={() => {
                    handleSelectLanguage(lang.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-[9.5px] font-extrabold uppercase tracking-wider transition ${
                    locale === lang.code
                      ? "bg-[#0A2A1E] text-gold border border-gold/30 shadow-sm"
                      : "bg-beige/30 text-royal/80 hover:bg-gold/10"
                  }`}
                >
                  {lang.name}
                </Link>
              ))}
            </div>
          </div>

          <nav className="flex flex-col space-y-1 pt-2 text-left">
            
            {/* Home Link */}
            <Link
              href={`/${locale}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[12px] font-extrabold uppercase tracking-widest text-royal hover:text-gold transition-colors py-2.5 px-4 block border-b border-gold/5"
            >
              {labels.home}
            </Link>

            {/* Travel Packages Collapsible Dropdown */}
            <div className="flex flex-col border-b border-gold/5">
              <button
                onClick={() => setMobilePackagesOpen(!mobilePackagesOpen)}
                className="flex items-center justify-between w-full text-[12px] font-extrabold uppercase tracking-widest text-royal hover:text-gold py-2.5 px-4 focus:outline-none"
              >
                <span>{labels.packages}</span>
                {mobilePackagesOpen ? (
                  <Minus className="w-3.5 h-3.5 text-gold shrink-0" />
                ) : (
                  <Plus className="w-3.5 h-3.5 text-gold shrink-0" />
                )}
              </button>
              
              {mobilePackagesOpen && (
                <div className="flex flex-col bg-gold/5 border-l-2 border-gold/25 pl-4 py-2 space-y-2.5 text-left animate-fade-in">
                  <Link
                    href={`/${locale}/packages`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[11px] font-bold uppercase tracking-wider text-royal/60 hover:text-gold py-1 block"
                  >
                    All Packages
                  </Link>
                  {packagesList.map((pkg, idx) => (
                    <Link
                      key={idx}
                      href={`/${locale}${pkg.path}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-[11px] font-bold uppercase tracking-wider text-royal hover:text-gold py-1 block"
                    >
                      {pkg.name[locale as 'en'|'es'|'pt'] || pkg.name.en}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Destinations Collapsible Dropdown (India + Outbound) */}
            <div className="flex flex-col border-b border-gold/5">
              <button
                onClick={() => setMobileDestinationsOpen(!mobileDestinationsOpen)}
                className="flex items-center justify-between w-full text-[12px] font-extrabold uppercase tracking-widest text-royal hover:text-gold py-2.5 px-4 focus:outline-none"
              >
                <span>{labels.destinations}</span>
                {mobileDestinationsOpen ? (
                  <Minus className="w-3.5 h-3.5 text-gold shrink-0" />
                ) : (
                  <Plus className="w-3.5 h-3.5 text-gold shrink-0" />
                )}
              </button>
              
              {mobileDestinationsOpen && (
                <div className="flex flex-col bg-gold/5 border-l-2 border-gold/25 pl-4 py-2 space-y-3 text-left animate-fade-in">
                  {/* India Destinations Section */}
                  <div>
                    <span className="text-[10px] font-black uppercase text-gold tracking-widest flex items-center gap-1 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-gold" />
                      <span>{labels.indiaDestinations}</span>
                    </span>
                    <Link
                      href={getLocalizedDestinationsPath(locale)}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-[11px] font-bold uppercase text-royal/60 hover:text-gold py-0.5 block pl-2"
                    >
                      All India Destinations
                    </Link>
                    {destinationsList.map((dest, idx) => (
                      <Link
                        key={idx}
                        href={dest.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-[11px] font-medium tracking-wider text-royal hover:text-gold py-0.5 flex items-center gap-1.5 pl-2"
                      >
                        {renderStateIcon(dest.name.en)}
                        <span>{dest.name[locale as 'en'|'es'|'pt'] || dest.name.en}</span>
                      </Link>
                    ))}
                  </div>

                  {/* Outbound Trips Section */}
                  <div className="pt-2 border-t border-gold/10">
                    <span className="text-[10px] font-black uppercase text-gold tracking-widest flex items-center gap-1 mb-1">
                      <Plane className="w-3.5 h-3.5 text-gold" />
                      <span>{labels.outboundTrips}</span>
                    </span>
                    <Link
                      href={`/${locale}/international-trips`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-[11px] font-bold uppercase text-royal/60 hover:text-gold py-0.5 block pl-2"
                    >
                      All International Trips
                    </Link>
                    {outboundList.map((out: any, idx: number) => {
                      const outName = typeof out.name === 'string' ? out.name : (out.name?.[locale] || out.name?.en || out.name?.es || out.name?.pt || "");
                      const outPath = out.path || out.url || "";
                      const fullPath = outPath.startsWith("/") ? `/${locale}${outPath.replace(/^\/(en|es|pt)/, "")}` : outPath;
                      return (
                        <Link
                          key={idx}
                          href={fullPath}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-[11px] font-medium tracking-wider text-royal hover:text-gold py-0.5 flex items-center gap-1.5 pl-2"
                        >
                          {renderOutboundIcon(outName)}
                          <span>{outName}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* About Us Link */}
            <Link
              href={`/${locale}/about`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[12px] font-extrabold uppercase tracking-widest text-royal hover:text-gold transition-colors py-2.5 px-4 block border-b border-gold/5"
            >
              {labels.about}
            </Link>

            {/* National Parks Link */}
            <Link
              href={`/${locale}/national-parks`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[12px] font-extrabold uppercase tracking-widest text-royal hover:text-gold transition-colors py-2.5 px-4 block border-b border-gold/5"
            >
              {locale === "es" ? "Parques Nacionales" : locale === "pt" ? "Parques Nacionais" : "National Parks"}
            </Link>

            {/* Blog Link */}
            <Link
              href={`/${locale}/blog`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[12px] font-extrabold uppercase tracking-widest text-royal hover:text-gold transition-colors py-2.5 px-4 block border-b border-gold/5"
            >
              {labels.blog}
            </Link>


            {/* Contact Link */}
            <Link
              href={`/${locale}/contact`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[12px] font-extrabold uppercase tracking-widest text-royal hover:text-gold transition-colors py-2.5 px-4 block border-b border-gold/5"
            >
              {labels.contact}
            </Link>

          </nav>
          <div className="text-center pt-6 border-t border-gold/15 space-y-4">
            <Link
              href={`/${locale}/contact`}
              onClick={() => setMobileMenuOpen(false)}
              className="bg-gold text-[#0A2A1E] text-[10px] font-bold uppercase tracking-widest px-8 py-3 rounded-full inline-flex items-center gap-2 shadow-md hover:bg-gold-light"
            >
              <span>{labels.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Mobile Drawer Social Icons */}
            <div className="flex items-center justify-center gap-5 pt-2 text-royal/60">
              <a href={contactDetails?.facebook || "https://www.facebook.com/viajeaindiaconindiasinvitation/"} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors p-2" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href={contactDetails?.twitter || "https://x.com/abhilash01"} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors p-2" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href={contactDetails?.instagram || "https://www.instagram.com/mhindiatrips/"} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors p-2" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.youtube.com/channel/UCiV4lAtakOtzaf3akF6r0eQ" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors p-2" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
