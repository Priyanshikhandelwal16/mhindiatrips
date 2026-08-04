"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const t: Record<string, any> = {
    en: {
      aboutTitle: "About MH India Trips",
      aboutText: "We craft bespoke luxury journeys across India for discerning international travelers. Heritage palace stays, private expert guides, and authentic cultural immersion — since 2010.",
      destinations: "Destinations",
      quickLinks: "Quick Links",
      contact: "Get in Touch",
      newsletterTitle: "Travel Inspiration",
      newsletterDesc: "Subscribe for curated itineraries, insider tips, and exclusive travel offers.",
      newsletterPlaceholder: "Your email address",
      newsletterBtn: "Subscribe",
      newsletterSuccess: "Thank you for subscribing!",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
      faq: "FAQ",
      copyright: "2026 MH India Trips. All Rights Reserved.",
      tagline: "Crafting Extraordinary Indian Journeys",
      aboutPage: "About Us",
      contactPage: "Contact Us",
      gallery: "Gallery",
    },
    es: {
      aboutTitle: "Sobre MH India Trips",
      aboutText: "Diseñamos viajes privados de lujo por toda la India para viajeros internacionales exigentes. Palacios, guías privados e inmersión cultural auténtica — desde 2010.",
      destinations: "Destinos",
      quickLinks: "Enlaces Rápidos",
      contact: "Contacto",
      newsletterTitle: "Inspiración de Viaje",
      newsletterDesc: "Suscríbase para recibir itinerarios exclusivos y consejos de viaje.",
      newsletterPlaceholder: "Su correo electrónico",
      newsletterBtn: "Suscribirse",
      newsletterSuccess: "¡Gracias por suscribirse!",
      terms: "Términos y Condiciones",
      privacy: "Política de Privacidad",
      faq: "Preguntas Frecuentes",
      copyright: "2026 MH India Trips. Todos los derechos reservados.",
      tagline: "Creando Viajes Extraordinarios por la India",
      aboutPage: "Nosotros",
      contactPage: "Contacto",
      gallery: "Galería",
    },
    pt: {
      aboutTitle: "Sobre MH India Trips",
      aboutText: "Desenhamos viagens privadas de luxo pela Índia para viajantes internacionais exigentes. Palácios, guias privados e imersão cultural autêntica — desde 2010.",
      destinations: "Destinos",
      quickLinks: "Links Rápidos",
      contact: "Contacte-nos",
      newsletterTitle: "Inspiração de Viagem",
      newsletterDesc: "Subscreva para receber itinerários exclusivos e dicas de viagem.",
      newsletterPlaceholder: "O seu e-mail",
      newsletterBtn: "Subscrever",
      newsletterSuccess: "Obrigado por subscrever!",
      terms: "Termos e Condições",
      privacy: "Política de Privacidade",
      faq: "Perguntas Frequentes",
      copyright: "2026 MH India Trips. Todos os direitos reservados.",
      tagline: "Criando Viagens Extraordinárias pela Índia",
      aboutPage: "Sobre Nós",
      contactPage: "Contacto",
      gallery: "Galeria",
    }
  };

  const labels = t[locale] || t.en;

  const quickLinks = [
    { name: labels.aboutPage, url: "/about" },
    { name: labels.destinations, url: "/destinations" },
    { name: locale === "es" ? "Gastronomía" : locale === "pt" ? "Gastronomia" : "Food Guide", url: "/food" },
    { name: locale === "es" ? "Blog de Viaje" : locale === "pt" ? "Blog de Viagem" : "Travel Blog", url: "/blog" },
    { name: labels.contactPage, url: "/contact" },
    { name: labels.gallery, url: "/gallery" },
  ];

  const destinationsList = [
    { name: "Rajasthan", url: "/destinations/rajasthan" },
    { name: "Kerala", url: "/destinations/kerala" },
    { name: "Goa", url: "/destinations/goa" },
    { name: "Varanasi", url: "/destinations/varanasi" },
    { name: "Kashmir", url: "/destinations/kashmir" },
    { name: "Delhi & Agra", url: "/destinations/delhi-agra" },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#0D1B2A] text-white/70 font-sans relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#B8964B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      
      {/* Decorative gold line at top */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-14 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Column 1: Brand - spans 4 cols */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-xl font-bold tracking-[0.1em] text-white block">
                MH<span className="text-gold font-serif italic tracking-normal">India</span>Trips
              </span>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/25 mt-1.5 font-medium">
                {labels.tagline}
              </p>
            </div>
            <p className="text-[13px] leading-relaxed text-white/45 max-w-[300px]">
              {labels.aboutText}
            </p>
            {/* Real Social Media Icons */}
            <div className="flex gap-3 pt-3">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/8 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-[#0D1B2A] transition-all duration-300 text-white/50 group" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/8 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-[#0D1B2A] transition-all duration-300 text-white/50 group" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/8 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-[#0D1B2A] transition-all duration-300 text-white/50 group" aria-label="WhatsApp">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/8 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-[#0D1B2A] transition-all duration-300 text-white/50 group" aria-label="YouTube">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/8 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-[#0D1B2A] transition-all duration-300 text-white/50 group" aria-label="X (Twitter)">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links - spans 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold pb-3 border-b border-white/6">
              {labels.quickLinks}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={`/${locale}${link.url}`}
                    className="text-[13px] text-white/50 hover:text-gold flex items-center gap-2 transition-colors duration-200 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/25 group-hover:bg-gold transition-colors" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Destinations - spans 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold pb-3 border-b border-white/6">
              {labels.destinations}
            </h3>
            <ul className="space-y-3">
              {destinationsList.map((st, i) => (
                <li key={i}>
                  <Link
                    href={`/${locale}${st.url}`}
                    className="text-[13px] text-white/50 hover:text-gold flex items-center gap-2 transition-colors duration-200 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/25 group-hover:bg-gold transition-colors" />
                    <span>{st.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter + Contact - spans 4 cols */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold pb-3 border-b border-white/6">
              {labels.newsletterTitle}
            </h3>
            <p className="text-[13px] text-white/40 leading-relaxed">
              {labels.newsletterDesc}
            </p>
            {submitted ? (
              <div className="flex items-center gap-2 text-gold text-sm font-medium py-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>{labels.newsletterSuccess}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex bg-white/5 border border-white/8 rounded-full p-1.5 focus-within:border-gold/40 transition-colors duration-300">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={labels.newsletterPlaceholder}
                  className="bg-transparent text-[13px] pl-4 outline-none w-full text-white placeholder-white/25"
                  required
                />
                <button type="submit" className="bg-gold hover:bg-gold/90 text-[#0D1B2A] rounded-full p-3 transition-all duration-200 hover:scale-105 shrink-0" aria-label="Subscribe">
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            {/* Contact Info */}
            <div className="space-y-3.5 pt-5 border-t border-white/5">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-[13px] text-white/45 hover:text-gold transition-colors duration-200">
                <div className="w-8 h-8 rounded-lg bg-gold/8 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 text-gold/70" />
                </div>
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:hello@mhindiatrips.com" className="flex items-center gap-3 text-[13px] text-white/45 hover:text-gold transition-colors duration-200">
                <div className="w-8 h-8 rounded-lg bg-gold/8 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-gold/70" />
                </div>
                <span>hello@mhindiatrips.com</span>
              </a>
              <div className="flex items-start gap-3 text-[13px] text-white/45">
                <div className="w-8 h-8 rounded-lg bg-gold/8 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-gold/70" />
                </div>
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/6 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-white/30">&copy; {labels.copyright}</p>
          <div className="flex flex-wrap justify-center gap-6 text-[12px] text-white/30">
            <Link href={`/${locale}/terms`} className="hover:text-gold transition-colors duration-200">{labels.terms}</Link>
            <Link href={`/${locale}/privacy`} className="hover:text-gold transition-colors duration-200">{labels.privacy}</Link>
            <Link href={`/${locale}/faq`} className="hover:text-gold transition-colors duration-200">{labels.faq}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
