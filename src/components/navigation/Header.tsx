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
      packages: "Packages",
      food: "Food Guide",
      blog: "Blog",
      about: "About Us",
      contact: "Contact",
      phone: "+91 98765 43210",
      email: "hello@mhindiatrips.com",
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
      phone: "+91 98765 43210",
      email: "hello@mhindiatrips.com",
      cta: "Consúltanos"
    },
    pt: {
      home: "Início",
      destinations: "Destinos",
      packages: "Pacotes",
      food: "Guia de Comida",
      blog: "Blog",
      about: "Sobre Nós",
      contact: "Contato",
      phone: "+91 98765 43210",
      email: "hello@mhindiatrips.com",
      cta: "Consultar"
    }
  };

  const labels = navTranslations[locale] || navTranslations.en;

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname.startsWith(`/${locale}${path}`);
  };

  const getLinkClass = (path: string) => {
    const active = isActive(path);
    return `relative px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 flex flex-col items-center justify-center ${
      active ? "text-gold" : "text-[#1B1B1B]/80 hover:text-gold"
    }`;
  };

  const destinationRegions = [
    {
      region: locale === "es" ? "India del Norte" : locale === "pt" ? "Norte da Índia" : "North India",
      states: [
        { name: "Delhi & Agra", slug: "delhi-and-agra" },
        { name: "Rajasthan", slug: "rajasthan" },
        { name: "Varanasi", slug: "varanasi" },
        { name: "Kashmir", slug: "kashmir" },
      ]
    },
    {
      region: locale === "es" ? "India del Sur" : locale === "pt" ? "Sul da Índia" : "South India",
      states: [
        { name: "Kerala", slug: "kerala" },
        { name: "Tamil Nadu", slug: "tamil-nadu" },
        { name: "Karnataka", slug: "karnataka" },
        { name: "Goa", slug: "goa" },
      ]
    },
    {
      region: locale === "es" ? "India del Este" : locale === "pt" ? "Leste da Índia" : "East & Northeast",
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
        <div className="bg-[#FAF8F5] border-b border-gold/10 text-foreground/70 py-2">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider">
            <div className="flex items-center gap-7">
              <a href={`tel:${labels.phone}`} className="flex items-center gap-2 hover:text-gold transition-colors duration-200">
                <Phone className="w-3 h-3 text-gold" />
                <span>{labels.phone}</span>
              </a>
              <a href={`mailto:${labels.email}`} className="flex items-center gap-2 hover:text-gold transition-colors duration-200">
                <Mail className="w-3 h-3 text-gold" />
                <span>{labels.email}</span>
              </a>
            </div>
            <div className="text-gold/80 italic font-light lowercase">
              Journeys that stay with you
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        ref={headerRef}
        className={`fixed left-0 w-full z-50 transition-all duration-300 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-gold/10 shadow-[0_1px_15px_rgba(0,0,0,0.02)] ${
          scrolled ? "top-0 py-2" : "lg:top-[34px] top-0 py-4.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo - Colored logo always, no inversion filter */}
          <Link href={`/${locale}`} className="flex items-center gap-2 group relative z-10">
            <Image
              src="/images/logo-transparent.png"
              alt="MH India Trips"
              width={260}
              height={78}
              priority
              className="w-auto transition-all duration-400 brightness-100 h-16"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            <Link href={`/${locale}`} className={getLinkClass("/")}>
              <span>{labels.home}</span>
              {isActive("/") && <span className="absolute bottom-0 w-8 h-[2.5px] bg-gold rounded-full" />}
            </Link>

            {/* Destinations Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("destinations")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 relative ${
                  isActive("/destinations") ? "text-gold" : "text-[#1B1B1B]/80 hover:text-gold"
                }`}
              >
                <span>{labels.destinations}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === "destinations" ? "rotate-180" : ""}`} />
                {isActive("/destinations") && <span className="absolute bottom-0 left-4 right-4 h-[2.5px] bg-gold rounded-full" />}
              </button>

              {/* Mega Menu Dropdown */}
              <div className={`mega-menu absolute top-full left-1/2 -translate-x-1/2 w-[820px] mt-3 transition-all ${activeDropdown === "destinations" ? "active" : ""}`}>
                <div className="bg-[#FAF8F5] rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.12)] border border-gold/15 p-8">
                  <div className="grid grid-cols-4 gap-8">
                    {destinationRegions.map((reg) => (
                      <div key={reg.region} className="space-y-4">
                        <h4 className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] pb-2 border-b border-gold/10">
                          {reg.region}
                        </h4>
                        <ul className="space-y-2.5">
                          {reg.states.map((st) => (
                            <li key={st.slug}>
                              <Link
                                href={`/${locale}/destinations/${st.slug}`}
                                className="text-xs text-foreground/65 hover:text-gold font-bold uppercase tracking-wider flex items-center gap-2 group/link transition-all duration-200"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-gold/30 group-hover/link:bg-gold group-hover/link:scale-125 transition-all" />
                                <span>{st.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {/* Featured Image */}
                    <div className="relative rounded-xl overflow-hidden h-full min-h-[200px] border border-gold/10 shadow-sm">
                      <Image
                        src="/images/taj_mahal_sunrise.png"
                        alt="Taj Mahal Travel"
                        fill
                        loading="lazy"
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        sizes="200px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-royal/85 via-royal/15 to-transparent flex items-end p-4">
                        <div className="text-white">
                          <p className="text-[8px] uppercase tracking-widest text-gold font-bold">Featured</p>
                          <p className="text-xs font-serif font-bold mt-0.5">Golden Triangle Luxury</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gold/10 flex justify-between items-center">
                    <Link
                      href={`/${locale}/destinations`}
                      className="text-[10px] font-bold text-royal hover:text-gold uppercase tracking-wider flex items-center gap-1.5 transition-colors duration-200"
                    >
                      <span>{locale === "es" ? "Ver Todos los Destinos" : locale === "pt" ? "Ver Todos os Destinos" : "View All Destinations"}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-[9px] text-foreground/45 uppercase tracking-wider font-medium">100+ private routes available</span>
                  </div>
                </div>
              </div>
            </div>

            <Link href={`/${locale}/packages`} className={getLinkClass("/packages")}>
              <span>{labels.packages}</span>
              {isActive("/packages") && <span className="absolute bottom-0 w-8 h-[2.5px] bg-gold rounded-full" />}
            </Link>

            <Link href={`/${locale}/food`} className={getLinkClass("/food")}>
              <span>{labels.food}</span>
              {isActive("/food") && <span className="absolute bottom-0 w-8 h-[2.5px] bg-gold rounded-full" />}
            </Link>

            <Link href={`/${locale}/blog`} className={getLinkClass("/blog")}>
              <span>{labels.blog}</span>
              {isActive("/blog") && <span className="absolute bottom-0 w-8 h-[2.5px] bg-gold rounded-full" />}
            </Link>

            <Link href={`/${locale}/about`} className={getLinkClass("/about")}>
              <span>{labels.about}</span>
              {isActive("/about") && <span className="absolute bottom-0 w-8 h-[2.5px] bg-gold rounded-full" />}
            </Link>

            <Link href={`/${locale}/contact`} className={getLinkClass("/contact")}>
              <span>{labels.contact}</span>
              {isActive("/contact") && <span className="absolute bottom-0 w-8 h-[2.5px] bg-gold rounded-full" />}
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Premium Language Dropdown - Always visible */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("language")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => setActiveDropdown(activeDropdown === "language" ? null : "language")}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-gold/10 hover:border-gold/30 hover:bg-gold/5 transition-all text-[11px] font-bold uppercase tracking-wider text-royal"
              >
                <Globe className="w-3.5 h-3.5 text-gold" />
                <span>{locale}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === "language" ? "rotate-180" : ""}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute right-0 top-full mt-2 w-32 bg-[#FAF8F5] rounded-xl shadow-[0_15px_50px_rgba(0,0,0,0.08)] border border-gold/15 p-1.5 transition-all duration-300 ${activeDropdown === "language" ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"}`}>
                {locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => {
                      changeLanguage(loc);
                      setActiveDropdown(null);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors ${
                      locale === loc ? "bg-gold/10 text-gold" : "text-foreground/70 hover:bg-gold/5 hover:text-royal"
                    }`}
                  >
                    {loc === "en" ? "English" : loc === "es" ? "Español" : "Português"}
                  </button>
                ))}
              </div>
            </div>

            <Link
              href={`/${locale}/contact`}
              className="bg-royal hover:bg-gold text-white hover:text-royal text-[10px] font-bold uppercase tracking-widest px-5 py-3 rounded-full transition-all shadow-md shadow-royal/10 hover:shadow-lg"
            >
              {labels.cta}
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2.5 rounded-xl text-foreground hover:bg-sand/40 transition-all duration-300"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Full Screen Menu */}
      <div className={`fixed inset-0 z-[100] lg:hidden transition-all duration-500 ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
        {/* Backdrop */}
        <div className={`absolute inset-0 bg-royal/30 backdrop-blur-sm transition-opacity duration-500 ${mobileMenuOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setMobileMenuOpen(false)} />
        
        {/* Menu Panel */}
        <div className={`absolute right-0 top-0 h-full w-full max-w-[380px] bg-[#FAF8F5] flex flex-col transition-transform duration-500 ease-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          {/* Menu Header */}
          <div className="flex justify-between items-center p-6 border-b border-gold/10">
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
                { label: labels.packages, href: `/${locale}/packages` },
                { label: labels.food, href: `/${locale}/food` },
                { label: labels.blog, href: `/${locale}/blog` },
                { label: labels.about, href: `/${locale}/about` },
                { label: labels.contact, href: `/${locale}/contact` },
              ].map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3.5 px-5 text-[12px] font-bold uppercase tracking-wider text-foreground/80 hover:text-gold hover:bg-gold/5 rounded-xl transition-all duration-200"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-foreground/20" />
                </Link>
              ))}
            </div>

            {/* Mobile Language Switcher */}
            <div className="mt-8 pt-6 border-t border-gold/10 px-4">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold mb-4">
                {locale === "es" ? "Idioma" : locale === "pt" ? "Idioma" : "Language"}
              </p>
              <div className="flex gap-2">
                {locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => { changeLanguage(loc); setMobileMenuOpen(false); }}
                    className={`flex-1 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                      locale === loc
                        ? "bg-royal text-white shadow-sm"
                        : "bg-gold/5 text-foreground/55 border border-gold/10 hover:bg-gold/10 hover:text-royal"
                    }`}
                  >
                    {loc === "en" ? "English" : loc === "es" ? "Español" : "Português"}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Contact Info */}
            <div className="mt-8 pt-6 border-t border-gold/10 px-4 space-y-3.5">
              <a href={`tel:${labels.phone}`} className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-foreground/60 hover:text-gold transition-colors">
                <div className="w-8 h-8 rounded-lg bg-gold/5 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-gold" />
                </div>
                <span>{labels.phone}</span>
              </a>
              <a href={`mailto:${labels.email}`} className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-foreground/60 hover:text-gold transition-colors">
                <div className="w-8 h-8 rounded-lg bg-gold/5 flex items-center justify-center">
                  <Mail className="w-3.5 h-3.5 text-gold" />
                </div>
                <span>{labels.email}</span>
              </a>
            </div>
          </nav>

          {/* Mobile CTA */}
          <div className="p-6 border-t border-gold/10">
            <Link
              href={`/${locale}/contact`}
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-royal hover:bg-gold text-white hover:text-royal text-xs font-bold uppercase tracking-widest py-4 rounded-full transition-all shadow-md"
            >
              {labels.cta}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
