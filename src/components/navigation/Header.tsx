"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, ArrowRight, ChevronDown, Phone, Mail } from "lucide-react";

interface HeaderProps {
  locale: string;
  contactDetails?: {
    phone: string;
    email: string;
    whatsapp: string;
  };
}

export default function Header({ locale, contactDetails }: HeaderProps) {
  const pathname = usePathname();
  if (pathname?.includes("/admin")) {
    return null;
  }
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      destinations: "Destinations in India",
      monuments: "Monuments",
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
      monuments: "Monumentos",
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
      monuments: "Monumentos",
      food: "Gastronomia",
      info: "Info Viagem",
      contact: "Contato",
      blog: "Blog",
      cta: "Planejar"
    }
  };

  const labels = menuTranslations[locale] || menuTranslations.en;

  const packagesList = [
    // Heritage & Culture
    { name: { en: "Imperial Golden Triangle", es: "Triángulo de Oro Imperial", pt: "Triângulo de Ouro Imperial" }, path: "/packages/golden-triangle-luxury" },
    { name: { en: "Royal Rajasthan Heritage", es: "Rajastán Real y Patrimonial", pt: "Rajastão Real e Patrimonial" }, path: "/packages/rajasthan-heritage-royal-palaces-tour" },
    { name: { en: "India Luxury Palace Circuit", es: "Circuito de Palacios de Lujo", pt: "Circuito de Palácios de Luxo" }, path: "/packages/india-luxury-palace-hotel-circuit" },
    { name: { en: "North India Heritage & Spiritual", es: "Patrimonio Espiritual del Norte", pt: "Patrimônio Espiritual do Norte" }, path: "/packages/north-india-grand-heritage-spiritual-tour" },
    { name: { en: "Golden Triangle + Rajasthan Combo", es: "Triángulo de Oro + Rajastán", pt: "Triângulo de Ouro + Rajastão" }, path: "/packages/golden-triangle-royal-rajasthan-combo" },
    // South India
    { name: { en: "Complete South India Circuit", es: "Circuito Completo del Sur", pt: "Circuito Completo do Sul" }, path: "/packages/complete-south-india-cultural-circuit" },
    { name: { en: "South India Temples & Monuments", es: "Templos y Monumentos del Sur", pt: "Templos e Monumentos do Sul" }, path: "/packages/south-india-monuments-temples" },
    { name: { en: "Karnataka Heritage & Coffee", es: "Patrimonio y Café de Karnataka", pt: "Patrimônio e Café de Karnataka" }, path: "/packages/karnataka-heritage-coffee-country" },
    // Nature & Wellness
    { name: { en: "Kerala Ayurveda & Wellness", es: "Ayurveda y Bienestar en Kerala", pt: "Ayurveda e Bem-Estar em Kerala" }, path: "/packages/kerala-ayurveda-wellness-retreat" },
    { name: { en: "Uttarakhand Yoga & Himalayan Adventure", es: "Yoga e Himalaya en Uttarakhand", pt: "Yoga e Himalaia em Uttarakhand" }, path: "/packages/uttarakhand-yoga-himalayan-adventure" },
    { name: { en: "Sikkim & Darjeeling Himalayan Heights", es: "Sikkim y Darjeeling", pt: "Sikkim e Darjeeling" }, path: "/packages/sikkim-darjeeling-himalayan-heights" },
    { name: { en: "Himalayan Escape Ladakh", es: "Escapada Himalaya Ladakh", pt: "Escapada Himalaia Ladakh" }, path: "/packages/himalayan-escape-scenic-ladakh-tour" },
    { name: { en: "Northeast India Hidden Gems", es: "Gemas del Noreste de India", pt: "Joias do Nordeste da Índia" }, path: "/packages/northeast-india-hidden-gems-explorer" },
    // Wildlife & Adventure
    { name: { en: "Wildlife & Royal Tiger Safaris", es: "Safari de Tigres Reales", pt: "Safáris de Tigre Real" }, path: "/packages/wildlife-royal-tiger-safaris" },
    { name: { en: "Royal Gujarat Heritage Safari", es: "Safari y Patrimonio de Gujarat", pt: "Safári e Patrimônio de Gujarat" }, path: "/packages/royal-gujarat-heritage-safari" },
    // Beach & Islands
    { name: { en: "Goa Luxury Beach Vacation", es: "Vacaciones de Lujo en Goa", pt: "Férias de Luxo em Goa" }, path: "/packages/goa-luxury-beach-vacation" },
    { name: { en: "Andaman Islands Tropical Escape", es: "Escapada Tropical a las Andamán", pt: "Refúgio Tropical nas Andamão" }, path: "/packages/andaman-islands-tropical-escape" },
    // Special Interest
    { name: { en: "Grand Indian Culinary Trail", es: "Gran Ruta Gastronómica", pt: "Grande Rota Gastronômica" }, path: "/packages/grand-indian-culinary-trail" },
    { name: { en: "India Photography Expedition", es: "Expedición Fotográfica", pt: "Expedição Fotográfica" }, path: "/packages/india-photography-expedition" },
    { name: { en: "India Family Adventure", es: "Aventura Familiar en India", pt: "Aventura Familiar na Índia" }, path: "/packages/india-family-adventure-package" },
    { name: { en: "India Honeymoon Luxury", es: "Luna de Miel de Lujo en India", pt: "Lua de Mel de Luxo na Índia" }, path: "/packages/india-honeymoon-luxury-experience" },
    { name: { en: "Punjab & Golden Temple Experience", es: "Punjab y Templo Dorado", pt: "Punjab e Templo Dourado" }, path: "/packages/punjab-cultural-golden-temple-experience" },
    { name: { en: "Spiritual India — Varanasi & Bodh Gaya", es: "India Espiritual — Varanasi", pt: "Índia Espiritual — Varanasi" }, path: "/packages/spiritual-india-varanasi-bodh-gaya-pilgrimage" },
  ];

  const destinationsList = [
    { name: { en: "Rajasthan", es: "Rajastán", pt: "Rajastão" }, path: "/destinations/rajasthan" },
    { name: { en: "Uttar Pradesh", es: "Uttar Pradesh", pt: "Uttar Pradesh" }, path: "/destinations/uttar-pradesh" },
    { name: { en: "Kerala", es: "Kerala", pt: "Kerala" }, path: "/destinations/kerala" },
    { name: { en: "Goa", es: "Goa", pt: "Goa" }, path: "/destinations/goa" },
    { name: { en: "Himachal Pradesh", es: "Himachal Pradesh", pt: "Himachal Pradesh" }, path: "/destinations/himachal-pradesh" },
    { name: { en: "Tamil Nadu", es: "Tamil Nadu", pt: "Tamil Nadu" }, path: "/destinations/tamil-nadu" },
    { name: { en: "Karnataka", es: "Karnataka", pt: "Karnataka" }, path: "/destinations/karnataka" },
    { name: { en: "Maharashtra", es: "Maharashtra", pt: "Maharashtra" }, path: "/destinations/maharashtra" },
    { name: { en: "Gujarat", es: "Gujarat", pt: "Gujarat" }, path: "/destinations/gujarat" },
    { name: { en: "Madhya Pradesh", es: "Madhya Pradesh", pt: "Madhya Pradesh" }, path: "/destinations/madhya-pradesh" },
    { name: { en: "Punjab", es: "Punjab", pt: "Punjab" }, path: "/destinations/punjab" },
    { name: { en: "Uttarakhand", es: "Uttarakhand", pt: "Uttarakhand" }, path: "/destinations/uttarakhand" },
  ];

  const infoList = [
    { name: { en: "Solo Female Traveler", es: "Mujer viajando sola por la India", pt: "Mulher viajando sozinha na Índia" }, path: "/travel-info/solo-female-travel" },
    { name: { en: "Visa & Entry Requirements", es: "Requisitos de Visa y Entrada", pt: "Visto e Requisitos de Entrada" }, path: "/travel-info/visa-entry-requirements" },
    { name: { en: "Best Time to Visit", es: "Cuando viajar a la India", pt: "Quando viajar para a Índia" }, path: "/travel-info/best-time-climate" },
    { name: { en: "Health & Vaccinations", es: "Salud y Vacunas", pt: "Saúde e Vacinas" }, path: "/travel-info/vaccinations-health" },
    { name: { en: "Packing & Currency Guide", es: "Guía de Equipaje y Moneda", pt: "/travel-info/packing-currency" }, path: "/travel-info/packing-currency" },
    { name: { en: "Frequently Asked Questions", es: "Preguntas Frecuentes", pt: "Perguntas Frequentes" }, path: "/faq" }
  ];

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "pt", name: "Português" }
  ];

  const switchLocalePath = (targetLocale: string) => {
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split("/");
    if (segments[1] === "en" || segments[1] === "es" || segments[1] === "pt") {
      segments[1] = targetLocale;
    } else {
      segments.splice(1, 0, targetLocale);
    }
    return segments.join("/");
  };

  const isActive = (path: string) => {
    if (!pathname) return false;
    const currentPath = pathname.replace(`/${locale}`, "") || "/";
    if (path === "/" && currentPath === "/") return true;
    return path !== "/" && currentPath.startsWith(path);
  };

  const textColor = scrolled ? "text-white/80 hover:text-gold" : "text-royal hover:text-gold";

  const linkClass = (path: string) => {
    const base = "text-[8px] xl:text-[9px] 2xl:text-[11px] font-bold uppercase tracking-[0.02em] xl:tracking-[0.08em] 2xl:tracking-[0.12em] whitespace-nowrap transition-all duration-300 relative py-1";
    const activeColor = "text-gold";
    const inactiveColor = "text-royal hover:text-gold";
    return `${base} ${isActive(path) ? activeColor : inactiveColor}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full font-sans transition-all duration-300 animate-fade-in"
      style={{ animationDuration: "0.6s", animationFillMode: "both" }}>
      
      {/* Elegant Top Bar (viajeaindia.com style) */}
      <div 
        className={`bg-[#0A2A1E] text-white/90 text-[10px] md:text-xs py-2.5 px-6 border-b border-gold/10 relative z-20 transition-all duration-300 ${
          scrolled ? "h-0 py-0 border-0 opacity-0 overflow-hidden" : "h-auto opacity-100"
        }`}
      >
        <div className="max-w-[1400px] w-full mx-auto px-6 xl:px-10 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <a href={`tel:${contactDetails?.phone || "+91 9782001006"}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>{contactDetails?.phone || "+91 9782001006"}</span>
            </a>
            <a href={`mailto:${contactDetails?.email || "info@mhindiatrips.com"}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Mail className="w-3.5 h-3.5 text-gold" />
              <span>{contactDetails?.email || "info@mhindiatrips.com"}</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <a href="https://www.facebook.com/viajeaindiaconindiasinvitation/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" aria-label="Facebook">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://x.com/abhilash01" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" aria-label="Twitter">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.instagram.com/viajeaindia/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" aria-label="Instagram">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.youtube.com/channel/UCiV4lAtakOtzaf3akF6r0eQ" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" aria-label="YouTube">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Premium Sticky Header (Full-width, clean white background, viajeaindia.com style) */}
      <div 
        className={`w-full transition-all duration-300 border-b relative z-50 ${
          mobileMenuOpen
            ? "bg-[#FCFAF6] border-gold/15 py-4"
            : scrolled 
              ? "bg-white/95 backdrop-blur-lg border-gold/15 shadow-md py-2" 
              : "bg-white border-gold/10 py-4"
        }`}
      >
        <div className="max-w-[1400px] w-full mx-auto px-2 md:px-6 xl:px-10 flex items-center justify-between gap-2 xl:gap-4">
          
          {/* Logo */}
          <Link href={`/${locale}`} className="relative block shrink z-20">
            <img
              src="/images/logo-transparent.png"
              alt="MH India Trips"
              className="h-8 md:h-10 xl:h-12 w-auto transition-all duration-300 hover:scale-[1.01]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2.5 2xl:gap-4 shrink">
            
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
              <div className="absolute left-0 top-full w-64 bg-white border border-gold/15 shadow-2xl py-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50">
                <Link
                  href={`/${locale}/packages`}
                  className="block px-5 py-2 text-[10px] font-bold uppercase tracking-wider text-royal/60 border-b border-gold/5 hover:text-gold hover:bg-gold/5 mb-1.5 pb-2"
                >
                  All Packages
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

            {/* Destinations Dropdown */}
            <div className="relative group py-2.5">
              <Link
                href={`/${locale}/destinations`}
                className={linkClass("/destinations")}
              >
                <span className="flex items-center gap-1">
                  {labels.destinations}
                  <ChevronDown className="w-3 h-3 text-gold" />
                </span>
              </Link>
              
              {/* Dropdown Container */}
              <div className="absolute left-0 top-full w-64 bg-white border border-gold/15 shadow-2xl py-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50">
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
                  } else {
                    formattedName = `${rawName} Travel Guide`;
                  }
                  return (
                    <Link
                      key={idx}
                      href={`/${locale}${dest.path}`}
                      className="block px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-royal hover:text-gold hover:bg-gold/5 transition-colors"
                    >
                      {formattedName}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Monuments */}
            <Link
              href={`/${locale}/monuments`}
              className={linkClass("/monuments")}
            >
              <span>{labels.monuments}</span>
              {isActive("/monuments") && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
              )}
            </Link>

            {/* Food Guide */}
            <Link
              href={`/${locale}/food`}
              className={linkClass("/food")}
            >
              <span>{labels.food}</span>
              {isActive("/food") && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
              )}
            </Link>

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
              <div className="absolute left-0 top-full w-64 bg-white border border-gold/15 shadow-2xl py-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50">
                {infoList.map((info, idx) => (
                  <Link
                    key={idx}
                    href={`/${locale}${info.path}`}
                    className="block px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-royal hover:text-gold hover:bg-gold/5 transition-colors"
                  >
                    {info.name[locale as 'en'|'es'|'pt'] || info.name.en}
                  </Link>
                ))}
              </div>
            </div>

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

          </nav>

          {/* Right Action Menu */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 2xl:gap-4 z-20">
            
            {/* Globe Language Toggle */}
            <div className="relative">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1 text-[9px] xl:text-[10px] font-bold uppercase tracking-wider text-royal border border-gold/25 hover:border-gold hover:text-gold px-2.5 py-1.5 xl:px-4 xl:py-2 rounded-full cursor-pointer transition-all duration-300"
                aria-label="Language Selector"
                suppressHydrationWarning={true}
              >
                <Globe className="w-3.5 h-3.5 text-gold" />
                <span>{locale}</span>
              </button>
              
              {langMenuOpen && (
                <>
                  <div className="fixed inset-0 z-30" onClick={() => setLangMenuOpen(false)} />
                  <div className="absolute right-0 mt-3 w-40 bg-white border border-gold/15 shadow-2xl z-40 py-2.5 overflow-hidden animate-scale-up">
                    {languages.map((lang) => (
                      <Link
                        key={lang.code}
                        href={switchLocalePath(lang.code)}
                        onClick={() => setLangMenuOpen(false)}
                        className={`block px-5 py-2 text-[11px] font-semibold tracking-wider uppercase text-royal hover:bg-gold/5 hover:text-gold transition-colors ${
                          locale === lang.code ? "text-gold font-extrabold bg-gold/5" : ""
                        }`}
                      >
                        {lang.name}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Inquire CTA Button */}
            <Link 
              href={`/${locale}/contact`}
              className="bg-[#0A2A1E] hover:bg-[#C5A862] hover:text-[#0A2A1E] text-white text-[9px] xl:text-[10px] font-bold uppercase tracking-[0.05em] xl:tracking-[0.15em] px-3 py-2 xl:px-5 xl:py-3.5 rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center gap-1.5 shadow-md border border-royal/10 whitespace-nowrap"
            >
              <span>{labels.cta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="flex lg:hidden items-center gap-2 z-20">
            
            {/* Lang Button */}
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className={`p-2 border rounded-full transition-colors ${
                mobileMenuOpen 
                  ? "border-gold/25 text-royal hover:border-gold" 
                  : "border-gold/15 text-royal hover:border-gold"
              }`}
              aria-label="Language Mobile Menu"
              suppressHydrationWarning={true}
            >
              <Globe className="w-4 h-4 text-gold" />
            </button>

            {langMenuOpen && (
              <>
                <div className="fixed inset-0 z-30" onClick={() => setLangMenuOpen(false)} />
                <div className="absolute right-16 mt-32 w-36 bg-white border border-gold/15 shadow-xl z-40 py-2 overflow-hidden animate-scale-up">
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={switchLocalePath(lang.code)}
                      onClick={() => setLangMenuOpen(false)}
                      className="block px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-royal hover:text-gold hover:bg-gold/5"
                    >
                      {lang.name}
                    </Link>
                  ))}
                </div>
              </>
            )}

            {/* Mobile Nav Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 border rounded-full transition-colors ${
                mobileMenuOpen 
                  ? "border-gold/25 text-royal hover:border-gold" 
                  : "border-gold/15 text-royal hover:border-gold"
              }`}
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
        <div className="fixed inset-0 bg-[#FCFAF6]/98 backdrop-blur-xl z-40 flex flex-col justify-start pt-28 px-8 pb-10 space-y-6 animate-fade-in lg:hidden text-royal overflow-y-auto overscroll-contain">
          <nav className="flex flex-col space-y-4 text-center">
            
            <Link
              href={`/${locale}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-royal hover:text-gold transition-colors"
            >
              {labels.home}
            </Link>

            <Link
              href={`/${locale}/packages`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-royal hover:text-gold transition-colors"
            >
              {labels.packages}
            </Link>

            <Link
              href={`/${locale}/about`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-royal hover:text-gold transition-colors"
            >
              {labels.about}
            </Link>

            <Link
              href={`/${locale}/destinations`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-royal hover:text-gold transition-colors"
            >
              {labels.destinations}
            </Link>

            <Link
              href={`/${locale}/monuments`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-royal hover:text-gold transition-colors"
            >
              {labels.monuments}
            </Link>

            <Link
              href={`/${locale}/food`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-royal hover:text-gold transition-colors"
            >
              {labels.food}
            </Link>

            <Link
              href={`/${locale}/faq`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-royal hover:text-gold transition-colors"
            >
              {labels.info}
            </Link>

            <Link
              href={`/${locale}/contact`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-royal hover:text-gold transition-colors"
            >
              {labels.contact}
            </Link>

            <Link
              href={`/${locale}/blog`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-royal hover:text-gold transition-colors"
            >
              {labels.blog}
            </Link>

          </nav>
          <div className="text-center pt-6 border-t border-gold/15">
            <Link
              href={`/${locale}/contact`}
              onClick={() => setMobileMenuOpen(false)}
              className="bg-gold text-[#0A2A1E] text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-md"
            >
              <span>{labels.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}

    </header>
  );
}
