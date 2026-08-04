"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Globe, Menu, X, ChevronDown, ChevronRight, Phone, Mail, MapPin } from "lucide-react";
import { locales } from "@/lib/i18n";

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = useCallback((newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  }, [pathname, router]);

  const navTranslations: Record<string, any> = {
    en: {
      home: "Home",
      destinations: "Destinations",
      packages: "Tour Packages",
      food: "Cuisine",
      blog: "Journal",
      cta: "Plan Your Trip",
      phone: "+91 98765 43210",
      email: "hello@mhindiatrips.com"
    },
    es: {
      home: "Inicio",
      destinations: "Destinos",
      packages: "Paquetes",
      food: "Gastronomía",
      blog: "Diario",
      cta: "Planear Viaje",
      phone: "+91 98765 43210",
      email: "hello@mhindiatrips.com"
    },
    pt: {
      home: "Início",
      destinations: "Destinos",
      packages: "Pacotes",
      food: "Gastronomia",
      blog: "Diário",
      cta: "Planejar Viagem",
      phone: "+91 98765 43210",
      email: "hello@mhindiatrips.com"
    }
  };

  const labels = navTranslations[locale] || navTranslations.en;

  const destinationRegions = [
    {
      region: locale === "es" ? "India del Norte" : locale === "pt" ? "Norte da Índia" : "North India",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=400",
      states: [
        { name: "Rajasthan", slug: "rajasthan" },
        { name: "Delhi & Agra", slug: "delhi" },
        { name: "Varanasi", slug: "varanasi" },
        { name: "Kashmir", slug: "srinagar" },
        { name: "Himachal Pradesh", slug: "shimla" },
      ]
    },
    {
      region: locale === "es" ? "India del Sur" : locale === "pt" ? "Sul da Índia" : "South India",
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=400",
      states: [
        { name: "Kerala", slug: "kerala" },
        { name: "Tamil Nadu", slug: "chennai" },
        { name: "Karnataka", slug: "hampi" },
        { name: "Goa", slug: "goa" },
      ]
    },
    {
      region: locale === "es" ? "India del Este" : locale === "pt" ? "Leste da Índia" : "East & Northeast",
      image: "https://images.unsplash.com/photo-1593693411515-c202e974fe08?q=80&w=400",
      states: [
        { name: "Darjeeling", slug: "darjeeling" },
        { name: "Sikkim", slug: "gangtok" },
        { name: "Meghalaya", slug: "shillong" },
        { name: "Odisha", slug: "puri" },
      ]
    }
  ];

  return (
    <>
      {/* Top Bar - Contact Info */}
      <div className={`hidden lg:block transition-all duration-500 ${scrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"}`}>
        <div className="bg-[#1B1B1B] text-white/70 py-2">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[11px]">
            <div className="flex items-center gap-6">
              <a href={`tel:${labels.phone}`} className="flex items-center gap-1.5 hover:text-white transition">
                <Phone className="w-3 h-3 text-gold" />
                <span>{labels.phone}</span>
              </a>
              <a href={`mailto:${labels.email}`} className="flex items-center gap-1.5 hover:text-white transition">
                <Mail className="w-3 h-3 text-gold" />
                <span>{labels.email}</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white/40">|</span>
              {/* Language Switcher */}
              <div className="flex items-center gap-2">
                <Globe className="w-3 h-3 text-gold" />
                {locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => changeLanguage(loc)}
                    className={`uppercase font-medium transition ${locale === loc ? "text-gold" : "text-white/60 hover:text-white"}`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.06)] py-3"
            : "bg-transparent py-5"
        } ${!scrolled ? "lg:top-[34px]" : "lg:top-0"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2 group">
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-[0.15em] transition-colors duration-300 ${
                scrolled ? "text-[#1B1B1B]" : "text-white"
              }`}>
                MH<span className="text-gold font-serif italic">India</span>Trips
              </span>
              <span className={`text-[8px] tracking-[0.3em] uppercase font-medium transition-colors ${
                scrolled ? "text-foreground/40" : "text-white/50"
              }`}>
                Luxury Travel Specialists
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href={`/${locale}`}
              className={`nav-link px-4 py-2 rounded-lg transition-colors ${
                scrolled ? "text-[#1B1B1B] hover:text-gold" : "text-white hover:text-gold"
              }`}
            >
              {labels.home}
            </Link>

            {/* Destinations Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("destinations")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`nav-link flex items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                  scrolled ? "text-[#1B1B1B] hover:text-gold" : "text-white hover:text-gold"
                }`}
              >
                <span>{labels.destinations}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === "destinations" ? "rotate-180" : ""}`} />
              </button>

              {/* Mega Menu Dropdown */}
              <div className={`mega-menu absolute top-full left-1/2 -translate-x-1/2 w-[800px] mt-2 ${activeDropdown === "destinations" ? "active" : ""}`}>
                <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-sand/60 p-8">
                  <div className="grid grid-cols-4 gap-8">
                    {destinationRegions.map((reg) => (
                      <div key={reg.region} className="space-y-4">
                        <h4 className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] pb-2 border-b border-sand">
                          {reg.region}
                        </h4>
                        <ul className="space-y-2.5">
                          {reg.states.map((st) => (
                            <li key={st.slug}>
                              <Link
                                href={`/${locale}/destinations/${st.slug}`}
                                className="text-sm text-foreground/70 hover:text-forest font-medium flex items-center gap-1.5 group/link transition-all"
                              >
                                <span className="w-1 h-1 rounded-full bg-gold/40 group-hover/link:bg-gold transition-colors" />
                                <span>{st.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {/* Featured Image */}
                    <div className="relative rounded-xl overflow-hidden h-full min-h-[200px]">
                      <img
                        src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=400"
                        alt="India Travel"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                        <div className="text-white">
                          <p className="text-[9px] uppercase tracking-widest text-gold font-bold">Featured</p>
                          <p className="text-sm font-serif font-bold mt-0.5">Golden Triangle</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-sand flex justify-between items-center">
                    <Link
                      href={`/${locale}/destinations`}
                      className="text-xs font-semibold text-forest hover:text-gold uppercase tracking-wider flex items-center gap-1 transition-colors"
                    >
                      <span>{locale === "es" ? "Ver Todos los Destinos" : locale === "pt" ? "Ver Todos os Destinos" : "View All Destinations"}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-[10px] text-foreground/40 italic">100+ destinations across India</span>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href={`/${locale}#popular-packages`}
              className={`nav-link px-4 py-2 rounded-lg transition-colors ${
                scrolled ? "text-[#1B1B1B] hover:text-gold" : "text-white hover:text-gold"
              }`}
            >
              {labels.packages}
            </Link>

            {/* Food Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("food")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`nav-link flex items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                  scrolled ? "text-[#1B1B1B] hover:text-gold" : "text-white hover:text-gold"
                }`}
              >
                <span>{labels.food}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === "food" ? "rotate-180" : ""}`} />
              </button>
              <div className={`mega-menu absolute top-full left-0 w-64 mt-2 ${activeDropdown === "food" ? "active" : ""}`}>
                <div className="bg-white rounded-xl shadow-[0_16px_48px_rgba(0,0,0,0.1)] border border-sand/60 p-5 space-y-3">
                  <Link href={`/${locale}/food`} className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] block pb-2 border-b border-sand hover:text-forest transition-colors">
                    {locale === "es" ? "Guía Completa" : locale === "pt" ? "Guia Completo" : "Full Food Guide"}
                  </Link>
                  {[
                    { name: "Butter Chicken", slug: "butter-chicken" },
                    { name: "Hyderabadi Biryani", slug: "hyderabadi-biryani" },
                    { name: "Masala Dosa", slug: "masala-dosa" },
                    { name: "Dal Makhani", slug: "dal-makhani" },
                  ].map((food) => (
                    <Link
                      key={food.slug}
                      href={`/${locale}/food/${food.slug}`}
                      className="text-sm text-foreground/70 hover:text-forest font-medium flex items-center gap-2 transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-gold/40" />
                      <span>{food.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href={`/${locale}/blog`}
              className={`nav-link px-4 py-2 rounded-lg transition-colors ${
                scrolled ? "text-[#1B1B1B] hover:text-gold" : "text-white hover:text-gold"
              }`}
            >
              {labels.blog}
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language - compact on scrolled */}
            <div className={`flex items-center gap-1.5 transition-all ${scrolled ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
              <Globe className="w-3.5 h-3.5 text-gold" />
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => changeLanguage(loc)}
                  className={`text-[11px] uppercase font-semibold tracking-wider px-1 transition ${
                    locale === loc ? "text-gold" : "text-foreground/40 hover:text-foreground"
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>

            <Link
              href={`/${locale}#inquire-now`}
              className={`text-xs font-semibold uppercase tracking-wider py-3 px-7 rounded-full transition-all duration-300 ${
                scrolled
                  ? "bg-forest hover:bg-forest/90 text-white shadow-sm"
                  : "bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm"
              }`}
            >
              {labels.cta}
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-[#1B1B1B]" : "text-white"
            }`}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Full Screen Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#FAF8F5] flex flex-col lg:hidden animate-fade-in">
          <div className="flex justify-between items-center p-6 border-b border-sand">
            <span className="text-xl font-bold tracking-[0.15em] text-[#1B1B1B]">
              MH<span className="text-gold font-serif italic">India</span>Trips
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-foreground hover:bg-sand/40 rounded-lg transition"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-grow overflow-y-auto p-6">
            <div className="space-y-1">
              {[
                { label: labels.home, href: `/${locale}` },
                { label: labels.destinations, href: `/${locale}/destinations` },
                { label: labels.packages, href: `/${locale}#popular-packages` },
                { label: labels.food, href: `/${locale}/food` },
                { label: labels.blog, href: `/${locale}/blog` },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-4 px-4 text-lg font-medium text-foreground hover:text-gold hover:bg-sand/30 rounded-xl transition-all"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-foreground/30" />
                </Link>
              ))}
            </div>

            {/* Mobile Language Switcher */}
            <div className="mt-8 pt-6 border-t border-sand">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold mb-4 px-4">
                {locale === "es" ? "Idioma" : locale === "pt" ? "Idioma" : "Language"}
              </p>
              <div className="flex gap-2 px-4">
                {locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => { changeLanguage(loc); setMobileMenuOpen(false); }}
                    className={`flex-1 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all ${
                      locale === loc
                        ? "bg-forest text-white"
                        : "bg-sand/50 text-foreground/60 hover:bg-sand"
                    }`}
                  >
                    {loc === "en" ? "English" : loc === "es" ? "Español" : "Português"}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Contact Info */}
            <div className="mt-8 pt-6 border-t border-sand px-4 space-y-3">
              <a href={`tel:${labels.phone}`} className="flex items-center gap-3 text-sm text-foreground/70">
                <Phone className="w-4 h-4 text-gold" />
                <span>{labels.phone}</span>
              </a>
              <a href={`mailto:${labels.email}`} className="flex items-center gap-3 text-sm text-foreground/70">
                <Mail className="w-4 h-4 text-gold" />
                <span>{labels.email}</span>
              </a>
            </div>
          </nav>

          {/* Mobile CTA */}
          <div className="p-6 border-t border-sand">
            <Link
              href={`/${locale}#inquire-now`}
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center btn-primary py-4"
            >
              {labels.cta}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
