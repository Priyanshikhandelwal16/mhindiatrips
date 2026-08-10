"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, ChevronDown, Compass, MapPin, Search } from "lucide-react";

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menus on pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
    setLangMenuOpen(false);
  }, [pathname]);

  // Track scroll position
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
      packages: "Tours",
      about: "About",
      destinations: "Destinations",
      contact: "Plan Trip",
      blog: "Blog",
      cta: "Plan Your Journey",
      whyUs: "Why Choose Us"
    },
    es: {
      home: "Inicio",
      packages: "Tours",
      about: "Sobre Nosotros",
      destinations: "Destinos",
      contact: "Planificar",
      blog: "Blog",
      cta: "Planifique Su Viaje",
      whyUs: "Por Qué Elegirnos"
    },
    pt: {
      home: "Início",
      packages: "Tours",
      about: "Sobre Nós",
      destinations: "Destinos",
      contact: "Planejar",
      blog: "Blog",
      cta: "Planejar Viagem",
      whyUs: "Por Que Escolher-Nos"
    }
  };

  const labels = menuTranslations[locale] || menuTranslations.en;

  const destinationsList = [
    { name: "Rajasthan", path: "/destinations/rajasthan", region: "West" },
    { name: "Kerala", path: "/destinations/kerala", region: "South" },
    { name: "Goa", path: "/destinations/goa", region: "West" },
    { name: "Varanasi", path: "/destinations/varanasi", region: "North" },
    { name: "Delhi & Agra", path: "/destinations/delhi-agra", region: "North" }
  ];

  const experiencesList = [
    { name: { en: "Luxury Palaces", es: "Palacios de Lujo", pt: "Palácios de Luxo" }, path: "/#experiences" },
    { name: { en: "Wildlife Tiger Safari", es: "Safari de Tigres", pt: "Safari de Tigres" }, path: "/#experiences" },
    { name: { en: "Spiritual Wellness", es: "Bienestar Espiritual", pt: "Bem-Estar Espiritual" }, path: "/#experiences" },
    { name: { en: "Culinary Feast", es: "Festín Culinario", pt: "Banquete Culinário" }, path: "/food" }
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
      return segments.join("/");
    }
    return `/${targetLocale}${pathname}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory-100/90 backdrop-blur-md border-b border-charcoal-800/5 shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="editorial-container flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href={`/${locale}`} className="flex flex-col text-left group">
          <span className="font-serif text-lg md:text-xl font-bold tracking-widest uppercase text-charcoal-800 transition-colors duration-300">
            MH India Trips
          </span>
          <span className="text-[9px] tracking-widest uppercase text-sand-500 font-sans font-medium -mt-1 group-hover:text-charcoal-800 transition-colors duration-300">
            Curated Discovery
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10 text-[11px] font-medium uppercase tracking-widest text-charcoal-800/80">
          <Link href={`/${locale}`} className="hover:text-charcoal-800 transition-colors py-2">
            {labels.home}
          </Link>

          <button
            onMouseEnter={() => setMegaMenuOpen(true)}
            onClick={() => setMegaMenuOpen(!megaMenuOpen)}
            className="flex items-center space-x-1 hover:text-charcoal-800 transition-colors py-2 cursor-pointer uppercase"
          >
            <span>{labels.destinations}</span>
            <ChevronDown size={11} className={`transition-transform duration-300 ${megaMenuOpen ? "rotate-180" : ""}`} />
          </button>

          <Link href={`/${locale}/packages`} className="hover:text-charcoal-800 transition-colors py-2">
            {labels.packages}
          </Link>

          <Link href={`/${locale}/food`} className="hover:text-charcoal-800 transition-colors py-2">
            {labels.blog}
          </Link>

          <Link href={`/${locale}/about`} className="hover:text-charcoal-800 transition-colors py-2">
            {labels.about}
          </Link>
        </nav>

        {/* Action Triggers */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center space-x-1.5 text-charcoal-800 hover:text-sand-500 transition-colors text-[11px] font-semibold uppercase tracking-widest p-2 cursor-pointer"
            >
              <Globe size={13} />
              <span>{locale}</span>
            </button>
            
            {langMenuOpen && (
              <div
                className="absolute right-0 mt-2 w-32 bg-ivory-50 border border-charcoal-800/10 shadow-lg py-1 z-50 rounded-md"
                onMouseLeave={() => setLangMenuOpen(false)}
              >
                {languages.map((lang) => (
                  <Link
                    key={lang.code}
                    href={switchLocalePath(lang.code)}
                    onClick={() => setLangMenuOpen(false)}
                    className={`w-full text-left block px-4 py-2.5 text-[10px] uppercase tracking-widest hover:bg-sand-100 transition-colors ${
                      locale === lang.code ? "text-sand-500 font-bold" : "text-charcoal-800"
                    }`}
                  >
                    {lang.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Plan Trip CTA */}
          <Link href={`/${locale}/contact`} className="magnetic-btn">
            {labels.cta}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center space-x-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-charcoal-800 p-2 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* DESKTOP MEGA MENU */}
      {megaMenuOpen && (
        <div
          className="hidden lg:block absolute left-0 w-full bg-ivory-50 border-b border-charcoal-800/10 shadow-xl py-10 z-40 transition-all duration-300"
          onMouseLeave={() => setMegaMenuOpen(false)}
        >
          <div className="editorial-container grid grid-cols-4 gap-8">
            {/* Column 1: North & West destinations */}
            <div>
              <h3 className="text-[10px] font-sans font-bold tracking-widest text-sand-500 uppercase mb-4 flex items-center">
                <MapPin size={10} className="mr-1.5" /> North & West
              </h3>
              <ul className="space-y-3">
                {destinationsList
                  .filter((d) => d.region === "North" || d.name === "Rajasthan" || d.name === "Goa")
                  .map((dest) => (
                    <li key={dest.name}>
                      <Link
                        href={`/${locale}${dest.path}`}
                        className="text-sm font-serif hover:text-sand-500 text-charcoal-800 block transition-colors"
                      >
                        {dest.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Column 2: South & Central */}
            <div>
              <h3 className="text-[10px] font-sans font-bold tracking-widest text-sand-500 uppercase mb-4 flex items-center">
                <MapPin size={10} className="mr-1.5" /> South & Coastal
              </h3>
              <ul className="space-y-3">
                {destinationsList
                  .filter((d) => d.region === "South")
                  .map((dest) => (
                    <li key={dest.name}>
                      <Link
                        href={`/${locale}${dest.path}`}
                        className="text-sm font-serif hover:text-sand-500 text-charcoal-800 block transition-colors"
                      >
                        {dest.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Column 3: Curated Experiences */}
            <div>
              <h3 className="text-[10px] font-sans font-bold tracking-widest text-sand-500 uppercase mb-4 flex items-center">
                <Compass size={10} className="mr-1.5" /> Experiences
              </h3>
              <ul className="space-y-3">
                {experiencesList.map((exp, idx) => (
                  <li key={idx}>
                    <Link
                      href={`/${locale}${exp.path}`}
                      className="text-xs hover:text-sand-500 text-charcoal-800 block transition-colors tracking-wide"
                    >
                      {exp.name[locale as "en"|"es"|"pt"] || exp.name.en}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Card Block */}
            <div className="bg-sand-50 p-6 border border-sand-200/50 flex flex-col justify-between rounded-lg">
              <div>
                <h4 className="font-serif text-sm text-charcoal-800 font-bold mb-2">
                  MH India Trips
                </h4>
                <p className="text-[11px] text-charcoal-800/60 leading-relaxed font-sans font-light">
                  Bespoke luxury itineraries, palace hotels, and private guide services since 2010.
                </p>
              </div>
              <Link
                href={`/${locale}/contact`}
                className="mt-6 inline-block text-center bg-charcoal-800 text-ivory-100 hover:bg-sand-500 transition-colors text-[9px] tracking-widest uppercase font-semibold py-2.5 px-4 rounded-md"
              >
                {labels.cta}
              </Link>
            </div>

          </div>
        </div>
      )}

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[64px] left-0 w-full h-[calc(100vh-64px)] bg-ivory-100 z-50 flex flex-col justify-between px-6 py-8 overflow-y-auto border-t border-charcoal-800/5">
          <nav className="flex flex-col space-y-6 text-base font-serif font-bold text-charcoal-800">
            <div className="border-b border-charcoal-800/10 pb-4">
              <span className="text-[10px] font-sans font-bold tracking-widest text-sand-500 uppercase block mb-3">
                {labels.destinations}
              </span>
              <div className="grid grid-cols-2 gap-3 pl-2">
                {destinationsList.map((dest) => (
                  <Link
                    key={dest.name}
                    href={`/${locale}${dest.path}`}
                    className="text-xs font-medium font-sans text-charcoal-800 hover:text-sand-500"
                  >
                    {dest.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href={`/${locale}`} className="text-base hover:text-sand-500 transition-colors font-serif font-normal">
              {labels.home}
            </Link>

            <Link href={`/${locale}/packages`} className="text-base hover:text-sand-500 transition-colors font-serif font-normal">
              {labels.packages}
            </Link>

            <Link href={`/${locale}/food`} className="text-base hover:text-sand-500 transition-colors font-serif font-normal">
              {labels.blog}
            </Link>

            <Link href={`/${locale}/about`} className="text-base hover:text-sand-500 transition-colors font-serif font-normal">
              {labels.about}
            </Link>
          </nav>

          <div className="border-t border-charcoal-800/10 pt-6 mt-8 flex flex-col space-y-5">
            {/* Languages */}
            <div className="flex items-center space-x-3">
              <Globe size={14} className="text-sand-500" />
              <span className="text-[10px] uppercase tracking-widest text-charcoal-800/60 font-semibold font-sans">
                Languages:
              </span>
              <div className="flex space-x-3 text-[10px] uppercase font-bold tracking-widest">
                {languages.map((lang) => (
                  <Link
                    key={lang.code}
                    href={switchLocalePath(lang.code)}
                    className={`${locale === lang.code ? "text-sand-500 font-extrabold underline" : "text-charcoal-800/60"}`}
                  >
                    {lang.code}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Plan Button */}
            <Link
              href={`/${locale}/contact`}
              className="w-full text-center bg-charcoal-800 text-ivory-100 py-3.5 text-xs font-semibold tracking-widest uppercase font-sans hover:bg-sand-500 transition-colors rounded-md"
            >
              {labels.cta}
            </Link>
          </div>

        </div>
      )}

    </header>
  );
}
