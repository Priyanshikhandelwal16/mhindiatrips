"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

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
      food: "Food",
      blog: "Journal",
      about: "About",
      contact: "Contact",
      cta: "Plan Your Trip",
      phone: "+91 98765 43210",
      email: "hello@mhindiatrips.com"
    },
    es: {
      home: "Inicio",
      destinations: "Destinos",
      packages: "Paquetes",
      food: "Comida",
      blog: "Diario",
      about: "Nosotros",
      contact: "Contacto",
      cta: "Planear Viaje",
      phone: "+91 98765 43210",
      email: "hello@mhindiatrips.com"
    },
    pt: {
      home: "Início",
      destinations: "Destinos",
      packages: "Pacotes",
      food: "Comida",
      blog: "Diário",
      about: "Sobre",
      contact: "Contacto",
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
        { name: "Delhi & Agra", slug: "delhi-agra" },
        { name: "Varanasi", slug: "varanasi" },
        { name: "Kashmir", slug: "kashmir" },
        { name: "Himachal Pradesh", slug: "himachal-pradesh" },
      ]
    },
    {
      region: locale === "es" ? "India del Sur" : locale === "pt" ? "Sul da Índia" : "South India",
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=400",
      states: [
        { name: "Kerala", slug: "kerala" },
        { name: "Tamil Nadu", slug: "tamil-nadu" },
        { name: "Karnataka", slug: "karnataka" },
        { name: "Goa", slug: "goa" },
      ]
    },
    {
      region: locale === "es" ? "India del Este" : locale === "pt" ? "Leste da Índia" : "East & Northeast",
      image: "https://images.unsplash.com/photo-1593693411515-c202e974fe08?q=80&w=400",
      states: [
        { name: "Darjeeling", slug: "west-bengal" },
        { name: "Sikkim", slug: "sikkim" },
        { name: "Meghalaya", slug: "meghalaya" },
        { name: "Odisha", slug: "odisha" },
      ]
    }
  ];

  return (
    <>
      {/* Top Bar - Contact Info (hidden on scroll) */}
      <div className={`hidden lg:block fixed top-0 left-0 w-full z-[60] transition-all duration-500 ${scrolled ? "h-0 opacity-0 -translate-y-full overflow-hidden" : "h-auto opacity-100 translate-y-0"}`}>
        <div className="bg-royal text-white/80 py-2.5">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[11px]">
            <div className="flex items-center gap-7">
              <a href={`tel:${labels.phone}`} className="flex items-center gap-2 hover:text-gold transition-colors duration-200">
                <Phone className="w-3 h-3 text-gold/70" />
                <span className="font-medium">{labels.phone}</span>
              </a>
              <a href={`mailto:${labels.email}`} className="flex items-center gap-2 hover:text-gold transition-colors duration-200">
                <Mail className="w-3 h-3 text-gold/70" />
                <span className="font-medium">{labels.email}</span>
              </a>
            </div>
            <div className="flex items-center gap-5">
              {/* Language Switcher */}
              <div className="flex items-center gap-2.5">
                <Globe className="w-3 h-3 text-gold/70" />
                {locales.map((loc, i) => (
                  <React.Fragment key={loc}>
                    <button
                      onClick={() => changeLanguage(loc)}
                      className={`uppercase font-semibold tracking-wider transition-colors duration-200 ${locale === loc ? "text-gold" : "text-white/60 hover:text-white"}`}
                    >
                      {loc}
                    </button>
                    {i < locales.length - 1 && <span className="text-white/20">|</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        ref={headerRef}
        className={`fixed left-0 w-full z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "top-0 bg-white/95 backdrop-blur-xl border-b border-gold/10 shadow-[0_1px_20px_rgba(0,0,0,0.04)] py-2.5"
            : "lg:top-[38px] top-0 bg-gradient-to-b from-black/60 via-black/10 to-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2 group relative z-10">
            <Image
              src="/images/logo-transparent.png"
              alt="MH India Trips"
              width={280}
              height={84}
              priority
              className={`w-auto transition-all duration-400 ${
                scrolled ? "h-16 brightness-100" : "h-22 brightness-0 invert"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            <Link
              href={`/${locale}`}
              className={`nav-link px-4 py-2 rounded-lg transition-all duration-300 ${
                scrolled ? "text-foreground/80 hover:text-gold" : "text-white/90 hover:text-gold"
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
                className={`nav-link flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                  scrolled ? "text-foreground/80 hover:text-gold" : "text-white/90 hover:text-gold"
                }`}
              >
                <span>{labels.destinations}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === "destinations" ? "rotate-180" : ""}`} />
              </button>

              {/* Mega Menu Dropdown */}
              <div className={`mega-menu absolute top-full left-1/2 -translate-x-1/2 w-[820px] mt-3 ${activeDropdown === "destinations" ? "active" : ""}`}>
                <div className="bg-white rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.12)] border border-sand/50 p-8">
                  <div className="grid grid-cols-4 gap-8">
                    {destinationRegions.map((reg) => (
                      <div key={reg.region} className="space-y-4">
                        <h4 className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] pb-2 border-b border-sand/70">
                          {reg.region}
                        </h4>
                        <ul className="space-y-2.5">
                          {reg.states.map((st) => (
                            <li key={st.slug}>
                              <Link
                                href={`/${locale}/destinations/${st.slug}`}
                                className="text-sm text-foreground/65 hover:text-forest font-medium flex items-center gap-2 group/link transition-all duration-200"
                              >
                                <span className="w-1 h-1 rounded-full bg-gold/30 group-hover/link:bg-gold group-hover/link:scale-125 transition-all" />
                                <span>{st.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {/* Featured Image */}
                    <div className="relative rounded-xl overflow-hidden h-full min-h-[200px]">
                      <Image
                        src="/images/taj_mahal_sunrise.png"
                        alt="Taj Mahal Travel"
                        fill
                        loading="lazy"
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        sizes="200px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-royal/80 via-royal/20 to-transparent flex items-end p-4">
                        <div className="text-white">
                          <p className="text-[9px] uppercase tracking-widest text-gold font-bold">Featured</p>
                          <p className="text-sm font-serif font-bold mt-0.5">Golden Triangle</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-sand/60 flex justify-between items-center">
                    <Link
                      href={`/${locale}/destinations`}
                      className="text-xs font-semibold text-forest hover:text-gold uppercase tracking-wider flex items-center gap-1.5 transition-colors duration-200"
                    >
                      <span>{locale === "es" ? "Ver Todos los Destinos" : locale === "pt" ? "Ver Todos os Destinos" : "View All Destinations"}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-[10px] text-foreground/35 italic font-light">100+ destinations across India</span>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href={`/${locale}/packages`}
              className={`nav-link px-4 py-2 rounded-lg transition-all duration-300 ${
                scrolled ? "text-foreground/80 hover:text-gold" : "text-white/90 hover:text-gold"
              }`}
            >
              {labels.packages}
            </Link>

            <Link
              href={`/${locale}/food`}
              className={`nav-link px-4 py-2 rounded-lg transition-all duration-300 ${
                scrolled ? "text-foreground/80 hover:text-gold" : "text-white/90 hover:text-gold"
              }`}
            >
              {labels.food}
            </Link>

            <Link
              href={`/${locale}/blog`}
              className={`nav-link px-4 py-2 rounded-lg transition-all duration-300 ${
                scrolled ? "text-foreground/80 hover:text-gold" : "text-white/90 hover:text-gold"
              }`}
            >
              {labels.blog}
            </Link>

            <Link
              href={`/${locale}/about`}
              className={`nav-link px-4 py-2 rounded-lg transition-all duration-300 ${
                scrolled ? "text-foreground/80 hover:text-gold" : "text-white/90 hover:text-gold"
              }`}
            >
              {labels.about}
            </Link>

            <Link
              href={`/${locale}/contact`}
              className={`nav-link px-4 py-2 rounded-lg transition-all duration-300 ${
                scrolled ? "text-foreground/80 hover:text-gold" : "text-white/90 hover:text-gold"
              }`}
            >
              {labels.contact}
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language - compact on scrolled */}
            <div className={`flex items-center gap-1.5 transition-all duration-300 ${scrolled ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
              <Globe className="w-3.5 h-3.5 text-gold" />
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => changeLanguage(loc)}
                  className={`text-[11px] uppercase font-semibold tracking-wider px-1 transition-colors duration-200 ${
                    locale === loc ? "text-gold" : "text-foreground/35 hover:text-foreground"
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>

            <Link
              href={`/${locale}#inquire-now`}
              className={`text-[11px] font-semibold uppercase tracking-[0.1em] py-3 px-7 rounded-full transition-all duration-400 ${
                scrolled
                  ? "bg-forest hover:bg-forest-light text-white shadow-md shadow-forest/15"
                  : "bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md"
              }`}
            >
              {labels.cta}
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
              scrolled ? "text-foreground hover:bg-sand/40" : "text-white hover:bg-white/10"
            }`}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Full Screen Menu */}
      <div className={`fixed inset-0 z-[100] lg:hidden transition-all duration-500 ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
        {/* Backdrop */}
        <div className={`absolute inset-0 bg-royal/20 backdrop-blur-sm transition-opacity duration-500 ${mobileMenuOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setMobileMenuOpen(false)} />
        
        {/* Menu Panel */}
        <div className={`absolute right-0 top-0 h-full w-full max-w-[380px] bg-ivory flex flex-col transition-transform duration-500 ease-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          {/* Menu Header */}
          <div className="flex justify-between items-center p-6 border-b border-sand/50">
            <Image
              src="/images/logo-transparent.png"
              alt="MH India Trips"
              width={220}
              height={66}
              className="h-16 w-auto"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 text-foreground/60 hover:text-foreground hover:bg-sand/40 rounded-xl transition-all duration-200"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex-grow overflow-y-auto py-6 px-4">
            <div className="space-y-1">
              {[
                { label: labels.home, href: `/${locale}` },
                { label: labels.destinations, href: `/${locale}/destinations` },
                { label: labels.packages, href: `/${locale}#popular-packages` },
                { label: labels.food, href: `/${locale}/food` },
                { label: labels.blog, href: `/${locale}/blog` },
                { label: labels.about, href: `/${locale}/about` },
                { label: labels.contact, href: `/${locale}/contact` },
              ].map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3.5 px-5 text-[15px] font-medium text-foreground/80 hover:text-gold hover:bg-gold/5 rounded-xl transition-all duration-200"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-foreground/20" />
                </Link>
              ))}
            </div>

            {/* Mobile Language Switcher */}
            <div className="mt-8 pt-6 border-t border-sand/50 px-4">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold/80 mb-4">
                {locale === "es" ? "Idioma" : locale === "pt" ? "Idioma" : "Language"}
              </p>
              <div className="flex gap-2">
                {locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => { changeLanguage(loc); setMobileMenuOpen(false); }}
                    className={`flex-1 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-200 ${
                      locale === loc
                        ? "bg-forest text-white shadow-sm"
                        : "bg-sand/40 text-foreground/50 hover:bg-sand/70 hover:text-foreground"
                    }`}
                  >
                    {loc === "en" ? "English" : loc === "es" ? "Español" : "Português"}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Contact Info */}
            <div className="mt-6 pt-6 border-t border-sand/50 px-4 space-y-3.5">
              <a href={`tel:${labels.phone}`} className="flex items-center gap-3 text-sm text-foreground/60 hover:text-gold transition-colors">
                <div className="w-8 h-8 rounded-lg bg-gold/8 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-gold" />
                </div>
                <span className="font-medium">{labels.phone}</span>
              </a>
              <a href={`mailto:${labels.email}`} className="flex items-center gap-3 text-sm text-foreground/60 hover:text-gold transition-colors">
                <div className="w-8 h-8 rounded-lg bg-gold/8 flex items-center justify-center">
                  <Mail className="w-3.5 h-3.5 text-gold" />
                </div>
                <span className="font-medium">{labels.email}</span>
              </a>
            </div>
          </nav>

          {/* Mobile CTA */}
          <div className="p-6 border-t border-sand/50">
            <Link
              href={`/${locale}#inquire-now`}
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center btn-primary py-4 text-sm"
            >
              {labels.cta}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
