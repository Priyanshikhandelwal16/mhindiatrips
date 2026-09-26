"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Mail } from "lucide-react";
import { getLocalizedDestinationsPath } from "@/lib/utils";

interface FooterProps {
  locale: string;
  contactDetails?: {
    phone: string;
    email: string;
    whatsapp: string;
    address?: string;
    hours?: string;
    gstin?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    logoHeightMobile?: string;
    logoHeightDesktop?: string;
    copyright?: string;
    designedBy?: string;
  };
}

function formatFooterUrl(rawUrl: string, locale: string) {
  if (!rawUrl) return `/${locale}`;
  let clean = rawUrl.trim();
  clean = clean.replace(/^https?:\/\/[^/]+/, '');
  clean = clean.replace(/^\/(en|es|pt)(\/|$)/, '/');
  if (!clean.startsWith('/')) clean = '/' + clean;
  if (clean === '/') return `/${locale}`;
  return `/${locale}${clean}`;
}

export default function Footer({ locale, contactDetails }: FooterProps) {
  const pathname = usePathname();
  if (pathname?.includes("/admin")) {
    return null;
  }

  const footerTranslations: Record<string, any> = {
    en: {
      tagline: "",
      aboutText: "Crafting extraordinary private odysseys and bespoke heritage journeys across India and beyond. Architecting unforgettable, high-end travel memories with personal concierges and unparalleled local mastery.",
      quickLinks: "Discover More",
      destinations: "India Regions",
      outboundTitle: "Outbound Trips",
      contactDetails: "The Travel Desk",
      copyright: "2026 MH India Trips. Crafted for luxury.",
      designedBy: "Designed & Developed by",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      disclaimer: "Disclaimer",
      faq: "FAQs"
    },
    es: {
      tagline: "",
      aboutText: "Diseñando odiseas privadas extraordinarias y viajes patrimoniales a medida en toda la India. Creando recuerdos de viaje inolvidables con servicio de concierge personalizado y una maestría local sin igual.",
      quickLinks: "Descubrir Más",
      destinations: "Regiones de India",
      outboundTitle: "Viajes Internacionales",
      contactDetails: "Mesa de Viaje",
      copyright: "2026 MH India Trips. Creado para el lujo.",
      designedBy: "Diseñado y Desarrollado por",
      terms: "Términos de Servicio",
      privacy: "Política de Privacidad",
      disclaimer: "Aviso Legal",
      faq: "Preguntas Frecuentes"
    },
    pt: {
      tagline: "",
      aboutText: "Criando odisseias privadas extraordinárias e viagens de patrimônio sob medida na Índia. Arquitetando memórias de viagem inesquecíveis com serviço de concierge personalizado e maestria local incomparável.",
      quickLinks: "Descubra Mais",
      destinations: "Regiões da Índia",
      outboundTitle: "Viagens Internacionais",
      contactDetails: "Balcão de Viagens",
      copyright: "2026 MH India Trips. Feito para o luxo.",
      designedBy: "Design e Desenvolvimento por",
      terms: "Termos de Serviço",
      privacy: "Política de Privacidade",
      disclaimer: "Aviso Legal",
      faq: "FAQs"
    }
  };

  const labels = footerTranslations[locale] || footerTranslations.en;
  const displayEmail = contactDetails?.email || "info@mhindiatrips.com";

  const tagline = (contactDetails as any)?.footerTagline?.[locale] || (contactDetails as any)?.footerTagline?.en || labels.tagline;
  const aboutText = (contactDetails as any)?.footerAboutText?.[locale] || (contactDetails as any)?.footerAboutText?.en || labels.aboutText;

  const defaultQuickLinks = [
    { name: locale === "es" ? "Inicio" : locale === "pt" ? "Início" : "Home", url: "/" },
    { name: locale === "es" ? "Paquetes" : locale === "pt" ? "Pacotes" : "Packages", url: "/packages" },
    { name: locale === "es" ? "Parques Nacionales" : locale === "pt" ? "Parques Nacionais" : "National Parks", url: "/national-parks" },
    { name: locale === "es" ? "Viajes Internacionales" : locale === "pt" ? "Viagens Internacionais" : "International Trips", url: "/international-trips" },
    { name: locale === "es" ? "Blog" : locale === "pt" ? "Blog" : "Blog", url: "/blog" },
    { name: locale === "es" ? "Nosotros" : locale === "pt" ? "Sobre Nós" : "About Us", url: "/about" },
    { name: locale === "es" ? "Contacto" : locale === "pt" ? "Contato" : "Contact Us", url: "/contact" }
  ];

  const quickLinks = (contactDetails as any)?.customFooterQuickLinks && (contactDetails as any).customFooterQuickLinks.length > 0
    ? (contactDetails as any).customFooterQuickLinks.map((item: any) => ({
        name: typeof item.name === 'string' ? item.name : (item.name?.[locale] || item.name?.en || item.name?.es || item.name?.pt || ""),
        url: item.url || item.path || ""
      }))
    : defaultQuickLinks;

  const defaultDestinationsList = [
    { name: "Rajasthan", url: getLocalizedDestinationsPath(locale, "rajasthan") },
    { name: "Kerala", url: getLocalizedDestinationsPath(locale, "kerala") },
    { name: "Varanasi", url: getLocalizedDestinationsPath(locale, "uttar-pradesh", "varanasi") },
    { name: "Delhi & Agra", url: getLocalizedDestinationsPath(locale, "uttar-pradesh", "agra") },
    { name: "Goa", url: getLocalizedDestinationsPath(locale, "goa") },
    { name: "Himachal Pradesh", url: getLocalizedDestinationsPath(locale, "himachal-pradesh") },
    { name: "Madhya Pradesh", url: getLocalizedDestinationsPath(locale, "madhya-pradesh") },
  ];

  const destinationsList = (contactDetails as any)?.customFooterDestinations && (contactDetails as any).customFooterDestinations.length > 0
    ? (contactDetails as any).customFooterDestinations.map((item: any) => ({
        name: typeof item.name === 'string' ? item.name : (item.name?.[locale] || item.name?.en || item.name?.es || item.name?.pt || ""),
        url: item.url || item.path || ""
      }))
    : defaultDestinationsList;

  const defaultOutboundList = [
    { name: locale === "es" ? "Dubái y Emiratos" : locale === "pt" ? "Dubai e Emirados" : "Dubai & UAE", url: "/international-trips/dubai" },
    { name: locale === "es" ? "Bali y Indonesia" : locale === "pt" ? "Bali e Indonésia" : "Bali & Indonesia", url: "/international-trips/bali" },
    { name: locale === "es" ? "Tailandia e Islas" : locale === "pt" ? "Tailândia e Ilhas" : "Thailand & Islands", url: "/international-trips/thailand" },
    { name: locale === "es" ? "Resorts de Maldivas" : locale === "pt" ? "Resorts das Maldivas" : "Maldives Overwater", url: "/international-trips/maldives" },
    { name: locale === "es" ? "Vietnam y Camboya" : locale === "pt" ? "Vietnã e Camboja" : "Vietnam & Cambodia", url: "/international-trips/vietnam" },
    { name: locale === "es" ? "Sri Lanka y Nepal" : locale === "pt" ? "Sri Lanka e Nepal" : "Sri Lanka & Nepal", url: "/international-trips/sri-lanka" },
  ];

  const outboundList = (contactDetails as any)?.customFooterOutbound && (contactDetails as any).customFooterOutbound.length > 0
    ? (contactDetails as any).customFooterOutbound.map((item: any) => ({
        name: typeof item.name === 'string' ? item.name : (item.name?.[locale] || item.name?.en || item.name?.es || item.name?.pt || ""),
        url: item.url || item.path || ""
      }))
    : defaultOutboundList;

  return (
    <footer className="bg-[#FAF8F5] text-royal/75 font-sans relative overflow-hidden border-t border-gold/30">
      
      {/* Subtle luxury pattern */}
      <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#0A2A1E_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

      {/* Main Footer layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8 md:pt-20 md:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* Logo & Intro Column (Spans 4) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Custom style block to support live footer logo height customization */}
            <style dangerouslySetInnerHTML={{__html: `
              .footer-logo-custom-height {
                height: ${contactDetails?.logoHeightMobile || "48"}px !important;
              }
              @media (min-width: 768px) {
                .footer-logo-custom-height {
                  height: ${contactDetails?.logoHeightDesktop || "64"}px !important;
                }
              }
            `}} />
            <div className="space-y-4">
              <img
                src="/images/logo-transparent.png"
                alt="MH India Trips"
                className="footer-logo-custom-height w-auto"
              />
              {tagline && (
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A862] font-bold">
                  {tagline}
                </p>
              )}
            </div>
            <p className="text-sm leading-relaxed text-royal/65 max-w-sm font-light">
              {aboutText}
            </p>
            
            {/* Social Grid */}
            <div className="flex items-center gap-3 pt-2 text-royal">
              <a href={contactDetails?.facebook || "https://www.facebook.com/mhindiatrips"} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-royal/5 flex items-center justify-center hover:bg-gold hover:text-white text-royal transition-all duration-300 shadow-md border border-royal/10" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href={contactDetails?.instagram || "https://www.instagram.com/mhindiatrips"} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-royal/5 flex items-center justify-center hover:bg-gold hover:text-white text-royal transition-all duration-300 shadow-md border border-royal/10" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href={contactDetails?.twitter || "https://x.com/mhindiatrips"} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-royal/5 flex items-center justify-center hover:bg-gold hover:text-white text-royal transition-all duration-300 shadow-md border border-royal/10" aria-label="Twitter X">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href={"https://www.youtube.com/@mhindiatrips"} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-royal/5 flex items-center justify-center hover:bg-gold hover:text-white text-royal transition-all duration-300 shadow-md border border-royal/10" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href={`https://wa.me/${contactDetails?.whatsapp || "919314635830"}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-royal/5 flex items-center justify-center hover:bg-gold hover:text-white text-royal transition-all duration-300 shadow-md border border-royal/10" aria-label="WhatsApp">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column (Spans 2) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A862] font-bold pb-2.5 border-b border-royal/10 h-8 flex items-center shrink-0">
              {labels.quickLinks}
            </h4>
            <ul className="space-y-3.5 text-xs md:text-sm pt-1">
              {quickLinks.map((link: any, i: number) => (
                <li key={i}>
                  <Link
                    href={formatFooterUrl(link.url, locale)}
                    className="hover:text-gold text-royal/70 flex items-center gap-2 transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span className="truncate">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* India Regions Column (Spans 2) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A862] font-bold pb-2.5 border-b border-royal/10 h-8 flex items-center shrink-0">
              {labels.destinations}
            </h4>
            <ul className="space-y-3.5 text-xs md:text-sm pt-1">
              {destinationsList.map((st: any, i: number) => (
                <li key={i}>
                  <Link
                    href={formatFooterUrl(st.url, locale)}
                    className="hover:text-gold text-royal/70 flex items-center gap-2 transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span className="truncate">{st.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Outbound Trips Column (Spans 2 - Perfectly Aligned, Clean Header) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A862] font-bold pb-2.5 border-b border-royal/10 h-8 flex items-center shrink-0">
              {labels.outboundTitle}
            </h4>
            <ul className="space-y-3.5 text-xs md:text-sm pt-1">
              {outboundList.map((st: any, i: number) => (
                <li key={i}>
                  <Link
                    href={formatFooterUrl(st.url, locale)}
                    className="hover:text-gold text-royal/70 flex items-center gap-2 transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span className="truncate">{st.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column (Spans 2) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A862] font-bold pb-2.5 border-b border-royal/10 h-8 flex items-center shrink-0">
              {labels.contactDetails}
            </h4>
            <div className="space-y-3.5 text-xs md:text-sm font-semibold pt-1">
              <a href={`tel:${contactDetails?.phone || "+91 9314635830"}`} className="flex items-center gap-2.5 text-royal/70 hover:text-gold transition-colors">
                <Phone className="w-4 h-4 text-[#C5A862] shrink-0" />
                <span className="truncate">{contactDetails?.phone || "+91 9314635830"}</span>
              </a>
              <a href={`mailto:${displayEmail}`} className="flex items-center gap-2.5 text-royal/70 hover:text-gold transition-colors">
                <Mail className="w-4 h-4 text-[#C5A862] shrink-0" />
                <span className="break-all">{displayEmail}</span>
              </a>
              <a href={`https://wa.me/${contactDetails?.whatsapp || "919314635830"}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-royal/70 hover:text-gold transition-colors">
                <svg className="w-4 h-4 fill-current text-[#C5A862] shrink-0" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright details bar */}
        <div className="border-t border-royal/10 mt-12 pt-6 flex flex-col gap-4 text-sm text-royal/60 font-light">
          {/* Main Info Row (Copyright left, GSTIN & Legal Links right) */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left space-y-1">
              <span>&copy; {contactDetails?.copyright || labels.copyright}</span>
              {(contactDetails?.gstin || "08ACIFM3516H1Z7") && (
                <div className="text-[11px] font-mono text-royal/50 uppercase font-semibold">
                  <span>GSTIN: </span>
                  <span className="text-gold font-bold">{contactDetails?.gstin || "08ACIFM3516H1Z7"}</span>
                </div>
              )}
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href={`/${locale}/terms`} className="hover:text-gold transition-colors">{labels.terms}</Link>
              <Link href={`/${locale}/privacy`} className="hover:text-gold transition-colors">{labels.privacy}</Link>
              <Link href={`/${locale}/disclaimer`} className="hover:text-gold transition-colors">{labels.disclaimer}</Link>
              <Link href={`/${locale}/faq`} className="hover:text-gold transition-colors">{labels.faq}</Link>
            </div>
          </div>
          
          {/* Dedicated Credits Line (Centered below, won't break/wrap awkwardly) */}
          <div className="text-center pt-3 border-t border-royal/5">
            <span className="text-[11px] uppercase tracking-wider text-royal/40">{labels.designedBy} </span>
            <a 
              href="https://jainup.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#C5A862] hover:text-[#C5A862]/80 hover:underline font-semibold transition-colors duration-200 text-xs tracking-wide"
            >
              {contactDetails?.designedBy || "JAINUP | Growth System"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
