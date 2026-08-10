"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Send, Compass } from "lucide-react";

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const footerTranslations: Record<string, any> = {
    en: {
      tagline: "CURATING LIFETIME TRAVEL ENCOUNTERS",
      aboutText: "MH India Trips designs luxury private journeys and heritage monument tours across the Indian subcontinent. Founded in 2010 with a passion for quality and authentic local story-telling.",
      quickLinks: "Discover More",
      destinations: "Regions",
      contactDetails: "The Travel Desk",
      newsletterTitle: "Private Dispatch",
      newsletterDesc: "Join our exclusive travel circle for seasonal offers, local insights, and curated private tours announcements.",
      newsletterPlaceholder: "Enter your email address",
      newsletterSuccess: "Subscription confirmed.",
      copyright: "2026 MH India Trips. Crafted for luxury.",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      faq: "FAQs"
    },
    es: {
      tagline: "DISEÑANDO ENCUENTROS DE VIAJE DE POR VIDA",
      aboutText: "MH India Trips diseña viajes privados de lujo y tours de monumentos históricos en todo el subcontinente indio. Fundada en 2010 con pasión por la calidad.",
      quickLinks: "Descubrir Más",
      destinations: "Regiones",
      contactDetails: "Mesa de Viaje",
      newsletterTitle: "Despacho Privado",
      newsletterDesc: "Únase a nuestro círculo de viajes exclusivo para recibir ofertas de temporada e ideas locales.",
      newsletterPlaceholder: "Introduzca su dirección de correo electrónico",
      newsletterSuccess: "Suscripción confirmada.",
      copyright: "2026 MH India Trips. Creado para el lujo.",
      terms: "Términos de Servicio",
      privacy: "Política de Privacidad",
      faq: "Preguntas Frecuentes"
    },
    pt: {
      tagline: "CRIANDO ENCONTROS DE VIAGEM DE UMA VIDA",
      aboutText: "A MH India Trips desenha viagens primeiras de luxo e passeios de monumentos históricos em todo o subcontinente indiano. Fundada em 2010 com paixão pela qualidade.",
      quickLinks: "Descubra Mais",
      destinations: "Regiões",
      contactDetails: "Balcão de Viagens",
      newsletterTitle: "Boletim Privado",
      newsletterDesc: "Participe do nosso círculo de viagens exclusivo para ofertas sazonais e descobertas locais.",
      newsletterPlaceholder: "Introduza o seu endereço de e-mail",
      newsletterSuccess: "Subscrição confirmada.",
      copyright: "2026 MH India Trips. Feito para o luxo.",
      terms: "Termos de Serviço",
      privacy: "Política de Privacidade",
      faq: "FAQs"
    }
  };

  const labels = footerTranslations[locale] || footerTranslations.en;

  const quickLinks = [
    { name: locale === "es" ? "Inicio" : locale === "pt" ? "Início" : "Home", url: "" },
    { name: locale === "es" ? "Paquetes" : locale === "pt" ? "Pacotes" : "Packages", url: "/packages" },
    { name: locale === "es" ? "Gastronomía" : locale === "pt" ? "Gastronomia" : "Food Guide", url: "/food" },
    { name: locale === "es" ? "Blog" : locale === "pt" ? "Blog" : "Blog", url: "/blog" },
    { name: locale === "es" ? "Nosotros" : locale === "pt" ? "Sobre Nós" : "About Us", url: "/about" },
    { name: locale === "es" ? "Contacto" : locale === "pt" ? "Contato" : "Contact Us", url: "/contact" }
  ];

  const destinationsList = [
    { name: "Rajasthan", url: "/destinations/rajasthan" },
    { name: "Kerala", url: "/destinations/kerala" },
    { name: "Varanasi", url: "/destinations/varanasi" },
    { name: "Delhi & Agra", url: "/destinations/delhi-and-agra" },
    { name: "Goa", url: "/destinations/goa" }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#FAF8F5] text-[#1B1B1B]/80 font-sans relative overflow-hidden border-t border-[#C5A862]/20">
      
      {/* Subtle luxury pattern */}
      <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#C5A862_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

      {/* Main Footer layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12">

          {/* Logo & Intro Column (Spans 5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <Image
                src="/images/logo-transparent.png"
                alt="MH India Trips"
                width={280}
                height={84}
                loading="lazy"
                className="h-14 md:h-18 w-auto brightness-0 invert opacity-95"
              />
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
                {labels.tagline}
              </p>
            </div>
            <p className="text-sm leading-relaxed text-[#1B1B1B]/60 max-w-sm font-light">
              {labels.aboutText}
            </p>
            
            {/* Social Grid */}
            <div className="flex items-center gap-4 pt-2 text-[#0A2A1E]">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-[#0A2A1E] text-gold transition-all duration-300 shadow-md border border-white/10" aria-label="Facebook">
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-[#0A2A1E] text-gold transition-all duration-300 shadow-md border border-white/10" aria-label="Instagram">
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-[#0A2A1E] text-gold transition-all duration-300 shadow-md border border-white/10" aria-label="WhatsApp">
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-[#0A2A1E] text-gold transition-all duration-300 shadow-md border border-white/10" aria-label="YouTube">
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation Columns (Spans 2 + 2) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-bold pb-2.5 border-b border-white/10">
              {labels.quickLinks}
            </h4>
            <ul className="space-y-3.5 text-sm">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={`/${locale}${link.url}`}
                    className="hover:text-gold text-[#1B1B1B]/60 flex items-center gap-2 transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-bold pb-2.5 border-b border-white/10">
              {labels.destinations}
            </h4>
            <ul className="space-y-3.5 text-sm">
              {destinationsList.map((st, i) => (
                <li key={i}>
                  <Link
                    href={`/${locale}${st.url}`}
                    className="hover:text-gold text-[#1B1B1B]/60 flex items-center gap-2 transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span>{st.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column (Spans 3) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-bold pb-2.5 border-b border-white/10">
              {labels.newsletterTitle}
            </h4>
            <p className="text-sm text-[#1B1B1B]/50 leading-relaxed font-light">
              {labels.newsletterDesc}
            </p>
            {submitted ? (
              <div className="flex items-center gap-2 text-gold text-sm font-semibold py-2">
                <span className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center text-gold">&bull;</span>
                <span>{labels.newsletterSuccess}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex bg-white/5 border border-white/20 rounded-full p-1.5 focus-within:border-gold transition-colors shadow-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={labels.newsletterPlaceholder}
                  className="bg-transparent text-xs pl-4 outline-none w-full text-[#1B1B1B] placeholder-[#1B1B1B]/40 font-light"
                  required
                  suppressHydrationWarning={true}
                />
                <button type="submit" className="bg-gold hover:bg-gold-light text-[#0A2A1E] rounded-full p-3 transition-transform duration-200 hover:scale-105 shrink-0" aria-label="Subscribe" suppressHydrationWarning={true}>
                  <Send className="w-3.5 h-3.5 text-[#0A2A1E]" />
                </button>
              </form>
            )}

            {/* Support info */}
            <div className="space-y-3.5 pt-4 border-t border-white/10 text-sm">
              <a href={`tel:${labels.phone}`} className="flex items-center gap-2.5 text-white/70 hover:text-gold transition-colors">
                <Phone className="w-4 h-4 text-gold" />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:hello@mhindiatrips.com" className="flex items-center gap-2.5 text-white/70 hover:text-gold transition-colors">
                <Mail className="w-4 h-4 text-gold" />
                <span>hello@mhindiatrips.com</span>
              </a>
            </div>

          </div>

        </div>

        {/* Bottom copyright details bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40 font-light">
          <p>&copy; {labels.copyright}</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href={`/${locale}/terms`} className="hover:text-gold transition-colors">{labels.terms}</Link>
            <Link href={`/${locale}/privacy`} className="hover:text-gold transition-colors">{labels.privacy}</Link>
            <Link href={`/${locale}/faq`} className="hover:text-gold transition-colors">{labels.faq}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
