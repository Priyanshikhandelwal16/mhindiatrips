"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, ArrowRight, ChevronDown } from "lucide-react";

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const pathname = usePathname();
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

  const menuTranslations: Record<string, any> = {
    en: {
      home: "Home",
      packages: "Travel Packages",
      about: "About Us",
      destinations: "Destinations in India",
      monuments: "Monuments",
      info: "Traveler Info",
      contact: "Contact",
      blog: "Blog",
      cta: "Inquire Now"
    },
    es: {
      home: "Inicio",
      packages: "Paquetes de Viajes",
      about: "Sobre Nosotros",
      destinations: "Destinos en India",
      monuments: "Monumentos",
      info: "Información para viajeros",
      contact: "Contacto",
      blog: "Blog",
      cta: "Planificar Viaje"
    },
    pt: {
      home: "Início",
      packages: "Pacotes de Viagens",
      about: "Sobre Nós",
      destinations: "Destinos na Índia",
      monuments: "Monumentos",
      info: "Informações para viajantes",
      contact: "Contato",
      blog: "Blog",
      cta: "Fale Conosco"
    }
  };

  const labels = menuTranslations[locale] || menuTranslations.en;

  const packagesList = [
    { name: { en: "Imperial Golden Triangle", es: "Triángulo de Oro Imperial", pt: "Triângulo de Ouro Imperial" }, path: "/packages#golden-triangle-luxury" },
    { name: { en: "Royal Rajasthan Heritage", es: "Rajastán Real y Patrimonial", pt: "Rajastão Real e Patrimonial" }, path: "/packages#royal-rajasthan-heritage" },
    { name: { en: "Kerala Tropical Escape", es: "Escapada Tropical a Kerala", pt: "Escapada Tropical a Kerala" }, path: "/packages#kerala-tropical-escape" },
    { name: { en: "Spiritual India Journey", es: "Viaje Espiritual por la India", pt: "Viagem Espiritual pela Índia" }, path: "/packages#spiritual-india-varanasi" },
    { name: { en: "Wildlife & Tiger Safari", es: "Safari de Vida Silvestre y Tigres", pt: "Safari de Vida Selvagem e Tigres" }, path: "/packages#wildlife-tiger-safari" },
    { name: { en: "Goa Beach & Heritage Luxury", es: "Lujo de Playa y Patrimonio en Goa", pt: "Luxo de Praia e Patrimônio em Goa" }, path: "/packages#goa-beach-luxury" }
  ];

  const destinationsList = [
    { name: { en: "Rajasthan", es: "Rajastán", pt: "Rajastão" }, path: "/destinations/rajasthan" },
    { name: { en: "Delhi & Agra", es: "Delhi y Uttar Pradesh (Agra)", pt: "Deli e Uttar Pradesh (Agra)" }, path: "/destinations/delhi-agra" },
    { name: { en: "Kerala", es: "Kerala", pt: "Kerala" }, path: "/destinations/kerala" },
    { name: { en: "Goa", es: "Goa", pt: "Goa" }, path: "/destinations/goa" },
    { name: { en: "Varanasi", es: "Benarés", pt: "Varanasi" }, path: "/destinations/varanasi" },
    { name: { en: "Mumbai & Maharashtra", es: "Bombay y Maharashtra", pt: "Mumbai e Maharashtra" }, path: "/destinations/mumbai-maharashtra" }
  ];

  const infoList = [
    { name: { en: "Solo Female Traveler", es: "Mujer viajando sola por la India", pt: "Mulher viajando sozinha na Índia" }, path: "/faq" },
    { name: { en: "Frequently Asked Questions", es: "Preguntas Frecuentes", pt: "Perguntas Frequentes" }, path: "/faq" },
    { name: { en: "Best Time to Visit", es: "Cuando viajar a la India", pt: "Quando viajar para a Índia" }, path: "/faq" },
    { name: { en: "Currency Guide", es: "Moneda en India", pt: "Moeda na Índia" }, path: "/faq" },
    { name: { en: "Luggage & Packing", es: "Equipaje en India", pt: "Bagagem na Índia" }, path: "/faq" }
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full font-sans transition-all duration-500">
      
      {/* Luxury Top Marquee Announcement */}
      <div className="bg-royal text-gold text-[9px] uppercase tracking-[0.25em] font-bold py-2.5 border-b border-gold/15 relative z-20 overflow-hidden select-none">
        <div className="flex w-max min-w-full gap-12 animate-marquee">
          <div className="flex justify-around min-w-full shrink-0 gap-12">
            <span>MH India Trips &bull; Curated Luxury Journeys</span>
            <span>Private Guided Tours &bull; Heritage Palace Escapes</span>
            <span>Ayurvedic Retreats &bull; Custom Itineraries</span>
          </div>
          <div className="flex justify-around min-w-full shrink-0 gap-12" aria-hidden="true">
            <span>MH India Trips &bull; Curated Luxury Journeys</span>
            <span>Private Guided Tours &bull; Heritage Palace Escapes</span>
            <span>Ayurvedic Retreats &bull; Custom Itineraries</span>
          </div>
        </div>
      </div>

      {/* Main Premium Navigation Header */}
      <div 
        className={`w-full bg-[#FAF8F5]/98 border-b border-gold/15 transition-all duration-300 ${
          scrolled ? "py-2.5 shadow-lg shadow-royal/5" : "py-4"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link href={`/${locale}`} className="relative block shrink-0 z-20">
            <Image
              src="/images/logo-transparent.png"
              alt="MH India Trips"
              width={220}
              height={65}
              priority
              className="h-10 md:h-14 lg:h-16 w-auto transition-transform duration-300 hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 shrink-0">
            
            {/* Home Link */}
            <Link
              href={`/${locale}`}
              className={`text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.1em] xl:tracking-[0.16em] whitespace-nowrap hover:text-gold transition-colors duration-300 relative py-1 ${
                isActive("/") ? "text-gold" : "text-royal"
              }`}
            >
              <span>{labels.home}</span>
              {isActive("/") && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
              )}
            </Link>

            {/* 1. Paquetes de Viajes Hover Dropdown */}
            <div className="relative group py-1">
              <Link
                href={`/${locale}/packages`}
                className={`text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.1em] xl:tracking-[0.16em] whitespace-nowrap hover:text-gold transition-colors duration-300 flex items-center gap-1 ${
                  isActive("/packages") ? "text-gold" : "text-royal"
                }`}
              >
                <span>{labels.packages}</span>
                <ChevronDown className="w-3.5 h-3.5 text-gold transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              
              {/* Dropdown Container */}
              <div className="absolute left-0 mt-2 w-64 bg-[#FAF8F5] border border-gold/15 rounded-2xl shadow-xl py-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50">
                <Link
                  href={`/${locale}/packages`}
                  className="block px-5 py-2 text-[10px] font-bold uppercase tracking-wider text-royal/60 hover:text-gold hover:bg-gold/5 transition-colors border-b border-gold/5 mb-1.5 pb-2"
                >
                  All Packages
                </Link>
                {packagesList.map((pkg, idx) => (
                  <Link
                    key={idx}
                    href={`/${locale}${pkg.path}`}
                    className="block px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-royal hover:bg-gold/10 hover:text-gold transition-colors"
                  >
                    {pkg.name[locale as 'en'|'es'|'pt'] || pkg.name.en}
                  </Link>
                ))}
              </div>
            </div>

            {/* 2. Sobre Nosotros Link */}
            <Link
              href={`/${locale}/about`}
              className={`text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.1em] xl:tracking-[0.16em] whitespace-nowrap hover:text-gold transition-colors duration-300 relative py-1 ${
                isActive("/about") ? "text-gold" : "text-royal"
              }`}
            >
              <span>{labels.about}</span>
              {isActive("/about") && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
              )}
            </Link>

            {/* 3. Destinos Hover Dropdown */}
            <div className="relative group py-1">
              <Link
                href={`/${locale}/destinations`}
                className={`text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.1em] xl:tracking-[0.16em] whitespace-nowrap hover:text-gold transition-colors duration-300 flex items-center gap-1 ${
                  isActive("/destinations") ? "text-gold" : "text-royal"
                }`}
              >
                <span>{labels.destinations}</span>
                <ChevronDown className="w-3.5 h-3.5 text-gold transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              
              {/* Dropdown Container */}
              <div className="absolute left-0 mt-2 w-64 bg-[#FAF8F5] border border-gold/15 rounded-2xl shadow-xl py-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50">
                <Link
                  href={`/${locale}/destinations`}
                  className="block px-5 py-2 text-[10px] font-bold uppercase tracking-wider text-royal/60 hover:text-gold hover:bg-gold/5 transition-colors border-b border-gold/5 mb-1.5 pb-2"
                >
                  All Destinations
                </Link>
                {destinationsList.map((dest, idx) => (
                  <Link
                    key={idx}
                    href={`/${locale}${dest.path}`}
                    className="block px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-royal hover:bg-gold/10 hover:text-gold transition-colors"
                  >
                    {dest.name[locale as 'en'|'es'|'pt'] || dest.name.en}
                  </Link>
                ))}
              </div>
            </div>

            {/* 3.5 Monumentos Link */}
            <Link
              href={`/${locale}/monuments`}
              className={`text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.1em] xl:tracking-[0.16em] whitespace-nowrap hover:text-gold transition-colors duration-300 relative py-1 ${
                isActive("/monuments") ? "text-gold" : "text-royal"
              }`}
            >
              <span>{labels.monuments}</span>
              {isActive("/monuments") && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
              )}
            </Link>

            {/* 4. Información para viajeros Dropdown */}
            <div className="relative group py-1">
              <Link
                href={`/${locale}/faq`}
                className={`text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.1em] xl:tracking-[0.16em] whitespace-nowrap hover:text-gold transition-colors duration-300 flex items-center gap-1 ${
                  isActive("/faq") ? "text-gold" : "text-royal"
                }`}
              >
                <span>{labels.info}</span>
                <ChevronDown className="w-3.5 h-3.5 text-gold transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              
              {/* Dropdown Container */}
              <div className="absolute left-0 mt-2 w-64 bg-[#FAF8F5] border border-gold/15 rounded-2xl shadow-xl py-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50">
                {infoList.map((info, idx) => (
                  <Link
                    key={idx}
                    href={`/${locale}${info.path}`}
                    className="block px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-royal hover:bg-gold/10 hover:text-gold transition-colors"
                  >
                    {info.name[locale as 'en'|'es'|'pt'] || info.name.en}
                  </Link>
                ))}
              </div>
            </div>

            {/* 5. Contact Link */}
            <Link
              href={`/${locale}/contact`}
              className={`text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.1em] xl:tracking-[0.16em] whitespace-nowrap hover:text-gold transition-colors duration-300 relative py-1 ${
                isActive("/contact") ? "text-gold" : "text-royal"
              }`}
            >
              <span>{labels.contact}</span>
              {isActive("/contact") && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
              )}
            </Link>

            {/* 6. Blog Link */}
            <Link
              href={`/${locale}/blog`}
              className={`text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.1em] xl:tracking-[0.16em] whitespace-nowrap hover:text-gold transition-colors duration-300 relative py-1 ${
                isActive("/blog") ? "text-gold" : "text-royal"
              }`}
            >
              <span>{labels.blog}</span>
              {isActive("/blog") && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
              )}
            </Link>

          </nav>

          {/* Right Action Menu */}
          <div className="hidden lg:flex items-center gap-6 z-20">
            
            {/* Globe Language Toggle */}
            <div className="relative">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-royal hover:text-gold transition-colors border border-gold/25 px-3 py-1.5 rounded-full"
                aria-label="Language Selector"
                suppressHydrationWarning={true}
              >
                <Globe className="w-3.5 h-3.5 text-gold" />
                <span>{locale}</span>
              </button>
              
              {langMenuOpen && (
                <>
                  <div className="fixed inset-0 z-30" onClick={() => setLangMenuOpen(false)} />
                  <div className="absolute right-0 mt-3 w-40 bg-[#FAF8F5] border border-gold/15 rounded-2xl shadow-xl z-40 py-2.5 overflow-hidden animate-scale-up">
                    {languages.map((lang) => (
                      <Link
                        key={lang.code}
                        href={switchLocalePath(lang.code)}
                        onClick={() => setLangMenuOpen(false)}
                        className={`block px-5 py-2 text-[11px] font-semibold tracking-wider uppercase text-royal hover:bg-gold/10 hover:text-gold transition-colors ${
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
              className="bg-gold hover:bg-gold-light text-royal text-[10px] font-bold uppercase tracking-[0.18em] px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center gap-1.5 shadow-md shadow-gold/10 border border-gold/10 whitespace-nowrap"
            >
              <span>{labels.cta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="flex lg:hidden items-center gap-3 z-20">
            
            {/* Lang Button */}
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="p-2 border border-gold/15 rounded-full text-royal"
              aria-label="Language Mobile Menu"
              suppressHydrationWarning={true}
            >
              <Globe className="w-4 h-4 text-gold" />
            </button>

            {langMenuOpen && (
              <>
                <div className="fixed inset-0 z-30" onClick={() => setLangMenuOpen(false)} />
                <div className="absolute right-16 mt-32 w-36 bg-[#FAF8F5] border border-gold/15 rounded-xl shadow-xl z-40 py-2 overflow-hidden animate-scale-up">
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={switchLocalePath(lang.code)}
                      onClick={() => setLangMenuOpen(false)}
                      className="block px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-royal hover:text-gold"
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
              className="p-2 border border-gold/15 rounded-full text-royal"
              aria-label="Toggle Mobile Menu"
              suppressHydrationWarning={true}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#FAF8F5] z-10 flex flex-col justify-center px-8 space-y-6 animate-fade-in lg:hidden">
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
          <div className="text-center pt-6 border-t border-gold/10">
            <Link
              href={`/${locale}/contact`}
              onClick={() => setMobileMenuOpen(false)}
              className="bg-gold text-royal text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded-full inline-flex items-center gap-2"
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
