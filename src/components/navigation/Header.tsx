"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, ArrowRight, ChevronDown, Phone, Mail } from "lucide-react";

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
    { name: { en: "Solo Female Traveler", es: "Mujer viajando sola por la India", pt: "Mulher viajando sozinha na Índia" }, path: "/faq#solo-female" },
    { name: { en: "Frequently Asked Questions", es: "Preguntas Frecuentes", pt: "Perguntas Frequentes" }, path: "/faq#questions" },
    { name: { en: "Best Time to Visit", es: "Cuando viajar a la India", pt: "Quando viajar para a Índia" }, path: "/faq#best-time" },
    { name: { en: "Currency Guide", es: "Moneda en India", pt: "Moeda na Índia" }, path: "/faq#currency" },
    { name: { en: "Luggage & Packing", es: "Equipaje en India", pt: "Bagagem na Índia" }, path: "/faq#packing" }
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
    const base = "text-[11px] font-bold uppercase tracking-[0.12em] xl:tracking-[0.18em] whitespace-nowrap transition-all duration-300 relative py-1";
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
            <a href="tel:+919782001006" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>+91 9782001006</span>
            </a>
            <a href="mailto:info@indiasinvitation.com" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Mail className="w-3.5 h-3.5 text-gold" />
              <span>info@indiasinvitation.com</span>
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
        className={`w-full transition-all duration-300 border-b ${
          scrolled 
            ? "bg-white/95 backdrop-blur-lg border-gold/15 shadow-md py-2" 
            : "bg-white border-gold/10 py-4"
        }`}
      >
        <div className="max-w-[1400px] w-full mx-auto px-6 xl:px-10 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link href={`/${locale}`} className="relative block shrink-0 z-20">
            <Image
              src="/images/logo-transparent.png"
              alt="MH India Trips"
              width={280}
              height={80}
              priority
              className="h-14 md:h-16 w-auto transition-all duration-300 hover:scale-[1.01]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 shrink-0">
            
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
            <div className="relative group py-1">
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
              <div className="absolute left-0 mt-3 w-64 bg-white border border-gold/15 rounded-2xl shadow-2xl py-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50">
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
            <div className="relative group py-1">
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
              <div className="absolute left-0 mt-3 w-64 bg-white border border-gold/15 rounded-2xl shadow-2xl py-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50">
                <Link
                  href={`/${locale}/destinations`}
                  className="block px-5 py-2 text-[10px] font-bold uppercase tracking-wider text-royal/60 border-b border-gold/5 hover:text-gold hover:bg-gold/5 mb-1.5 pb-2"
                >
                  All Destinations
                </Link>
                {destinationsList.map((dest, idx) => (
                  <Link
                    key={idx}
                    href={`/${locale}${dest.path}`}
                    className="block px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-royal hover:text-gold hover:bg-gold/5 transition-colors"
                  >
                    {dest.name[locale as 'en'|'es'|'pt'] || dest.name.en}
                  </Link>
                ))}
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

            {/* Traveler Info Dropdown */}
            <div className="relative group py-1">
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
              <div className="absolute left-0 mt-3 w-64 bg-white border border-gold/15 rounded-2xl shadow-2xl py-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50">
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
          <div className="hidden lg:flex items-center gap-5 z-20">
            
            {/* Globe Language Toggle */}
            <div className="relative">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-royal border border-gold/25 hover:border-gold hover:text-gold px-4 py-2 rounded-full cursor-pointer transition-all duration-300"
                aria-label="Language Selector"
                suppressHydrationWarning={true}
              >
                <Globe className="w-3.5 h-3.5 text-gold" />
                <span>{locale}</span>
              </button>
              
              {langMenuOpen && (
                <>
                  <div className="fixed inset-0 z-30" onClick={() => setLangMenuOpen(false)} />
                  <div className="absolute right-0 mt-3 w-40 bg-white border border-gold/15 rounded-2xl shadow-2xl z-40 py-2.5 overflow-hidden animate-scale-up">
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
              className="bg-[#0A2A1E] hover:bg-[#C5A862] hover:text-[#0A2A1E] text-white text-[10px] font-bold uppercase tracking-[0.18em] px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center gap-1.5 shadow-md border border-royal/10 whitespace-nowrap"
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
              className="p-2 border border-gold/15 text-royal hover:border-gold rounded-full transition-colors"
              aria-label="Language Mobile Menu"
              suppressHydrationWarning={true}
            >
              <Globe className="w-4 h-4 text-gold" />
            </button>

            {langMenuOpen && (
              <>
                <div className="fixed inset-0 z-30" onClick={() => setLangMenuOpen(false)} />
                <div className="absolute right-16 mt-32 w-36 bg-white border border-gold/15 rounded-xl shadow-xl z-40 py-2 overflow-hidden animate-scale-up">
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
              className="p-2 border border-gold/15 text-royal hover:border-gold rounded-full transition-colors"
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
        <div className="fixed inset-0 bg-[#0A2A1E]/98 backdrop-blur-xl z-10 flex flex-col justify-center px-8 space-y-6 animate-fade-in lg:hidden text-white">
          <nav className="flex flex-col space-y-4 text-center">
            
            <Link
              href={`/${locale}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-white hover:text-gold transition-colors"
            >
              {labels.home}
            </Link>

            <Link
              href={`/${locale}/packages`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-white hover:text-gold transition-colors"
            >
              {labels.packages}
            </Link>

            <Link
              href={`/${locale}/about`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-white hover:text-gold transition-colors"
            >
              {labels.about}
            </Link>

            <Link
              href={`/${locale}/destinations`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-white hover:text-gold transition-colors"
            >
              {labels.destinations}
            </Link>

            <Link
              href={`/${locale}/monuments`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-white hover:text-gold transition-colors"
            >
              {labels.monuments}
            </Link>

            <Link
              href={`/${locale}/faq`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-white hover:text-gold transition-colors"
            >
              {labels.info}
            </Link>

            <Link
              href={`/${locale}/contact`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-white hover:text-gold transition-colors"
            >
              {labels.contact}
            </Link>

            <Link
              href={`/${locale}/blog`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-white hover:text-gold transition-colors"
            >
              {labels.blog}
            </Link>

          </nav>
          <div className="text-center pt-6 border-t border-white/10">
            <Link
              href={`/${locale}/contact`}
              onClick={() => setMobileMenuOpen(false)}
              className="bg-gold text-[#0A2A1E] text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded-full inline-flex items-center gap-2"
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
