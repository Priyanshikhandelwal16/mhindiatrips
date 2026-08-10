"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Check } from "lucide-react";

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const footerTranslations: Record<string, any> = {
    en: {
      tagline: "CURATING LIFETIME TRAVEL ENCOUNTERS",
      aboutText: "MH India Trips designs luxury private journeys and heritage monument tours across the Indian subcontinent. Founded in 2010 with a passion for quality and authentic local story-telling.",
      quickLinks: "Discover More",
      destinations: "Regions",
      newsletterTitle: "Private Dispatch",
      newsletterDesc: "Join our exclusive travel circle for seasonal offers, local insights, and curated private tours announcements.",
      newsletterPlaceholder: "Enter your email address",
      newsletterSuccess: "Subscription confirmed.",
      copyright: "© 2026 MH India Trips. Crafted for luxury.",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      faq: "FAQs",
      subscribe: "Subscribe"
    },
    es: {
      tagline: "DISEÑANDO ENCUENTROS DE VIAJE DE POR VIDA",
      aboutText: "MH India Trips diseña viajes privados de lujo y tours de monumentos históricos en todo el subcontinente indio. Fundada en 2010 con pasión por la calidad.",
      quickLinks: "Descubrir Más",
      destinations: "Regiones",
      newsletterTitle: "Despacho Privado",
      newsletterDesc: "Únase a nuestro círculo de viajes exclusivo para recibir ofertas de temporada e ideas locales.",
      newsletterPlaceholder: "Introduzca su correo electrónico",
      newsletterSuccess: "Suscripción confirmada.",
      copyright: "© 2026 MH India Trips. Creado para el lujo.",
      terms: "Términos de Servicio",
      privacy: "Política de Privacidad",
      faq: "Preguntas Frecuentes",
      subscribe: "Suscribirse"
    },
    pt: {
      tagline: "CRIANDO ENCONTROS DE VIAGEM DE UMA VIDA",
      aboutText: "A MH India Trips desenha viagens primeiras de luxo e passeios de monumentos históricos em todo o subcontinente indiano. Fundada em 2010 com paixão pela qualidade.",
      quickLinks: "Descubra Mais",
      destinations: "Regiões",
      newsletterTitle: "Boletim Privado",
      newsletterDesc: "Participe do nosso círculo de viagens exclusivo para ofertas sazonais e descobertas locais.",
      newsletterPlaceholder: "Introduza o seu endereço de e-mail",
      newsletterSuccess: "Subscrição confirmada.",
      copyright: "© 2026 MH India Trips. Feito para o luxo.",
      terms: "Termos de Serviço",
      privacy: "Política de Privacidade",
      faq: "FAQs",
      subscribe: "Inscrever"
    }
  };

  const labels = footerTranslations[locale] || footerTranslations.en;

  const quickLinks = [
    { name: locale === "es" ? "Inicio" : locale === "pt" ? "Início" : "Home", url: "" },
    { name: locale === "es" ? "Tours" : locale === "pt" ? "Tours" : "Tours", url: "/packages" },
    { name: locale === "es" ? "Gastronomía" : locale === "pt" ? "Gastronomia" : "Food Guide", url: "/food" },
    { name: locale === "es" ? "Nosotros" : locale === "pt" ? "Sobre Nós" : "About", url: "/about" },
    { name: locale === "es" ? "Contacto" : locale === "pt" ? "Contato" : "Plan Trip", url: "/contact" }
  ];

  const destinationsList = [
    { name: "Rajasthan", url: "/destinations/rajasthan" },
    { name: "Kerala", url: "/destinations/kerala" },
    { name: "Varanasi", url: "/destinations/varanasi" },
    { name: "Delhi & Agra", url: "/destinations/delhi-agra" },
    { name: "Goa", url: "/destinations/goa" }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-charcoal-900 text-ivory-200 pt-20 pb-10 border-t border-ivory-100/5 font-sans relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#C3AB85_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative z-10 editorial-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-ivory-100/10">
        
        {/* Brand details */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <Link href={`/${locale}`} className="flex flex-col text-left group">
              <span className="font-serif text-2xl font-bold tracking-widest uppercase text-ivory-100">
                MH India Trips
              </span>
              <span className="text-[10px] tracking-widest uppercase text-sand-400 mt-0.5 font-semibold">
                Curated Discovery
              </span>
            </Link>
            <p className="text-xs text-ivory-200/50 mt-6 leading-relaxed font-light">
              {labels.aboutText}
            </p>
          </div>
          
          <div className="mt-8 flex space-x-4">
            {/* Social media icons */}
            <a href="#" className="text-ivory-200/50 hover:text-sand-400 transition-colors p-1" aria-label="Instagram">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="text-ivory-200/50 hover:text-sand-400 transition-colors p-1" aria-label="Facebook">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="text-ivory-200/50 hover:text-sand-400 transition-colors p-1" aria-label="Twitter">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="lg:col-span-2">
          <h4 className="text-[10px] font-bold tracking-widest uppercase text-sand-400 mb-6">
            {labels.quickLinks}
          </h4>
          <ul className="space-y-3.5 text-xs">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={`/${locale}${link.url}`}
                  className="text-ivory-200/60 hover:text-ivory-100 transition-colors font-light"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Regions */}
        <div className="lg:col-span-2">
          <h4 className="text-[10px] font-bold tracking-widest uppercase text-sand-400 mb-6">
            {labels.destinations}
          </h4>
          <ul className="space-y-3.5 text-xs">
            {destinationsList.map((dest) => (
              <li key={dest.name}>
                <Link
                  href={`/${locale}${dest.url}`}
                  className="text-ivory-200/60 hover:text-ivory-100 transition-colors font-light"
                >
                  {dest.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Private Dispatch Newsletter */}
        <div className="lg:col-span-4 space-y-6">
          <h4 className="text-[10px] font-bold tracking-widest uppercase text-sand-400 mb-6">
            {labels.newsletterTitle}
          </h4>
          <p className="text-xs text-ivory-200/55 leading-relaxed font-light">
            {labels.newsletterDesc}
          </p>
          
          {subscribed ? (
            <div className="flex items-center space-x-2 text-xs text-earthgreen-500 font-semibold mt-4">
              <Check size={14} />
              <span>{labels.newsletterSuccess}</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex border-b border-ivory-100/20 pb-1 mt-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={labels.newsletterPlaceholder}
                required
                className="bg-transparent border-0 text-xs text-ivory-100 placeholder-ivory-100/30 py-2 w-full focus:ring-0 focus:outline-none"
              />
              <button 
                type="submit" 
                className="text-xs font-bold uppercase tracking-widest text-sand-400 hover:text-ivory-100 transition-colors px-2 cursor-pointer"
              >
                {labels.subscribe}
              </button>
            </form>
          )}

          {/* Contact details */}
          <div className="pt-6 space-y-3.5 text-[11px] text-ivory-200/50">
            <div className="flex items-start space-x-2.5">
              <Mail size={13} className="text-sand-400 mt-0.5" />
              <span>info@mhindiatrips.com</span>
            </div>
            <div className="flex items-start space-x-2.5">
              <Phone size={13} className="text-sand-400 mt-0.5" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-start space-x-2.5">
              <MapPin size={13} className="text-sand-400 mt-0.5" />
              <span>Heritage Plaza, Jaipur, India</span>
            </div>
          </div>

        </div>

      </div>

      {/* Copyright footer bar */}
      <div className="relative z-10 editorial-container pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-ivory-200/35 uppercase tracking-widest gap-4">
        <span>{labels.copyright}</span>
        <div className="flex space-x-6">
          <Link href={`/${locale}/privacy`} className="hover:text-ivory-100 transition-colors">
            {labels.privacy}
          </Link>
          <Link href={`/${locale}/terms`} className="hover:text-ivory-100 transition-colors">
            {labels.terms}
          </Link>
        </div>
      </div>
    </footer>
  );
}
