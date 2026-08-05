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
      destinations: "Destinations",
      packages: "Packages",
      food: "Food Guide",
      blog: "Blog",
      about: "About Us",
      contact: "Contact",
      cta: "Inquire Now"
    },
    es: {
      home: "Inicio",
      destinations: "Destinos",
      packages: "Paquetes",
      food: "Gastronomía",
      blog: "Blog",
      about: "Nosotros",
      contact: "Contacto",
      cta: "Planificar Viaje"
    },
    pt: {
      home: "Início",
      destinations: "Destinos",
      packages: "Pacotes",
      food: "Gastronomia",
      blog: "Blog",
      about: "Sobre Nós",
      contact: "Contato",
      cta: "Fale Conosco"
    }
  };

  const labels = menuTranslations[locale] || menuTranslations.en;

  const statesList = [
    { name: "Rajasthan", path: "/destinations/rajasthan" },
    { name: "Kerala", path: "/destinations/kerala" },
    { name: "Varanasi", path: "/destinations/varanasi" },
    { name: "Delhi & Agra", path: "/destinations/delhi-and-agra" },
    { name: "Goa", path: "/destinations/goa" }
  ];

  const menuItems = [
    { name: labels.packages, path: "/packages" },
    { name: labels.food, path: "/food" },
    { name: labels.blog, path: "/blog" },
    { name: labels.about, path: "/about" },
    { name: labels.contact, path: "/contact" }
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
      <div className="bg-royal text-gold text-[9px] uppercase tracking-[0.25em] font-bold py-2 px-6 flex items-center justify-between border-b border-gold/15 relative z-20">
        <span className="animate-pulse">MH India Trips &bull; Curated Luxury Journeys</span>
        <div className="hidden md:flex gap-6">
          <span>Private Guided Tours</span>
          <span>Heritage Palace Escapes</span>
          <span>Ayurvedic Retreats</span>
        </div>
      </div>

      {/* Main Premium Navigation Header */}
      <div 
        className={`w-full bg-[#FAF8F5]/98 border-b border-gold/15 transition-all duration-300 ${
          scrolled ? "py-2.5 shadow-lg shadow-royal/5" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link href={`/${locale}`} className="relative block shrink-0 z-20">
            <Image
              src="/images/logo-transparent.png"
              alt="MH India Trips"
              width={260}
              height={78}
              priority
              className="h-16 md:h-18 w-auto transition-transform duration-300 hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            
            {/* Home Link */}
            <Link
              href={`/${locale}`}
              className={`text-[11px] font-bold uppercase tracking-[0.18em] hover:text-gold transition-colors duration-300 relative py-1 ${
                isActive("/") ? "text-gold" : "text-royal"
              }`}
            >
              <span>{labels.home || "Home"}</span>
              {isActive("/") && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
              )}
            </Link>

            {/* Destinations Hover Dropdown */}
            <div className="relative group py-1">
              <Link
                href={`/${locale}/destinations`}
                className={`text-[11px] font-bold uppercase tracking-[0.18em] hover:text-gold transition-colors duration-300 flex items-center gap-1 ${
                  isActive("/destinations") ? "text-gold" : "text-royal"
                }`}
              >
                <span>{labels.destinations}</span>
                <ChevronDown className="w-3.5 h-3.5 text-gold transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              
              {/* Dropdown Container */}
              <div className="absolute left-0 mt-2 w-52 bg-[#FAF8F5] border border-gold/15 rounded-2xl shadow-xl py-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50">
                <Link
                  href={`/${locale}/destinations`}
                  className="block px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider text-royal/60 hover:text-gold hover:bg-gold/5 transition-colors border-b border-gold/5 mb-1.5"
                >
                  All Regions
                </Link>
                {statesList.map((st) => (
                  <Link
                    key={st.path}
                    href={`/${locale}${st.path}`}
                    className="block px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-royal hover:bg-gold/10 hover:text-gold transition-colors"
                  >
                    {st.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Other Menu Items */}
            {menuItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  href={`/${locale}${item.path}`}
                  className={`text-[11px] font-bold uppercase tracking-[0.18em] hover:text-gold transition-colors duration-300 relative py-1 ${
                    active ? "text-gold" : "text-royal"
                  }`}
                >
                  <span>{item.name}</span>
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Menu */}
          <div className="hidden lg:flex items-center gap-6 z-20">
            
            {/* Globe Language Toggle */}
            <div className="relative">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-royal hover:text-gold transition-colors border border-gold/25 px-3 py-1.5 rounded-full"
                aria-label="Language Selector"
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
              className="bg-gold hover:bg-gold-light text-royal text-[10px] font-bold uppercase tracking-[0.18em] px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center gap-1.5 shadow-md shadow-gold/10 border border-gold/10"
            >
              <span>{labels.cta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="flex lg:hidden items-center gap-4 z-20">
            
            {/* Lang Button */}
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="p-2 border border-gold/15 rounded-full text-royal"
              aria-label="Language Mobile Menu"
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
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#FAF8F5] z-10 flex flex-col justify-center px-8 space-y-8 animate-fade-in lg:hidden">
          <nav className="flex flex-col space-y-6 text-center">
            
            <Link
              href={`/${locale}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-royal hover:text-gold transition-colors"
            >
              {labels.home || "Home"}
            </Link>

            {/* Mobile Destinations Sublinks */}
            <div className="space-y-3">
              <span className="text-sm font-bold uppercase tracking-wider text-gold block">
                {labels.destinations}
              </span>
              <div className="flex flex-wrap justify-center gap-2.5">
                {statesList.map((st) => (
                  <Link
                    key={st.path}
                    href={`/${locale}${st.path}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-semibold text-royal/70 hover:text-gold border border-gold/10 px-3 py-1 rounded-full bg-white"
                  >
                    {st.name}
                  </Link>
                ))}
              </div>
            </div>

            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={`/${locale}${item.path}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-royal hover:text-gold transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="text-center pt-8 border-t border-gold/10">
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
