"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send, Phone, Mail, MapPin, ArrowUpRight, Globe, MessageCircle, Rss } from "lucide-react";

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const t: Record<string, any> = {
    en: {
      aboutTitle: "About MHIndiaTrips",
      aboutText: "We craft bespoke luxury journeys across India for discerning international travelers. Heritage stays, private guides, and authentic cultural immersion.",
      destinations: "Destinations",
      quickLinks: "Quick Links",
      contact: "Get in Touch",
      newsletterTitle: "Travel Inspiration",
      newsletterDesc: "Subscribe for curated itineraries and insider travel tips.",
      newsletterPlaceholder: "Your email address",
      newsletterBtn: "Subscribe",
      newsletterSuccess: "Thank you for subscribing!",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
      copyright: "2026 MHIndiaTrips. All Rights Reserved.",
      tagline: "Crafting Extraordinary Indian Journeys"
    },
    es: {
      aboutTitle: "Sobre MHIndiaTrips",
      aboutText: "Diseñamos viajes privados de lujo por toda la India para viajeros internacionales exigentes. Palacios, guías privados e inmersión cultural auténtica.",
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
      copyright: "2026 MHIndiaTrips. Todos los derechos reservados.",
      tagline: "Creando Viajes Extraordinarios por la India"
    },
    pt: {
      aboutTitle: "Sobre MHIndiaTrips",
      aboutText: "Desenhamos viagens privadas de luxo pela Índia para viajantes internacionais exigentes. Palácios, guias privados e imersão cultural autêntica.",
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
      copyright: "2026 MHIndiaTrips. Todos os direitos reservados.",
      tagline: "Criando Viagens Extraordinárias pela Índia"
    }
  };

  const labels = t[locale] || t.en;

  const quickLinks = [
    { name: locale === "es" ? "Destinos" : locale === "pt" ? "Destinos" : "Destinations", url: "/destinations" },
    { name: locale === "es" ? "Gastronomía" : locale === "pt" ? "Gastronomia" : "Food Guide", url: "/food" },
    { name: locale === "es" ? "Blog de Viaje" : locale === "pt" ? "Blog de Viagem" : "Travel Blog", url: "/blog" },
    { name: locale === "es" ? "Planear Viaje" : locale === "pt" ? "Planejar Viagem" : "Plan Your Trip", url: "#inquire-now" },
  ];

  const destinationsList = [
    { name: "Rajasthan", url: "/destinations/rajasthan" },
    { name: "Kerala", url: "/destinations/kerala" },
    { name: "Goa", url: "/destinations/goa" },
    { name: "Varanasi", url: "/destinations/varanasi" },
    { name: "Kashmir", url: "/destinations/srinagar" },
    { name: "Delhi & Agra", url: "/destinations/delhi" },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#1B1B1B] text-white/70 font-sans relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#B8964B_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-12 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1: Brand */}
          <div className="space-y-6 lg:pr-8">
            <div>
              <span className="text-xl font-bold tracking-[0.12em] text-white block">
                MH<span className="text-gold font-serif italic">India</span>Trips
              </span>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mt-1 font-medium">
                {labels.tagline}
              </p>
            </div>
            <p className="text-sm leading-relaxed text-white/50">
              {labels.aboutText}
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-[#1B1B1B] transition-all duration-300 text-white/50" aria-label="Social">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-[#1B1B1B] transition-all duration-300 text-white/50" aria-label="WhatsApp">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-[#1B1B1B] transition-all duration-300 text-white/50" aria-label="Blog">
                <Rss className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold pb-2 border-b border-white/8">
              {labels.quickLinks}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={`/${locale}${link.url}`}
                    className="text-sm text-white/55 hover:text-gold flex items-center gap-1.5 transition-colors duration-200 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/30 group-hover:bg-gold transition-colors" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Destinations */}
          <div className="space-y-6">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold pb-2 border-b border-white/8">
              {labels.destinations}
            </h3>
            <ul className="space-y-3">
              {destinationsList.map((st, i) => (
                <li key={i}>
                  <Link
                    href={`/${locale}${st.url}`}
                    className="text-sm text-white/55 hover:text-gold flex items-center gap-1.5 transition-colors duration-200 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/30 group-hover:bg-gold transition-colors" />
                    <span>{st.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter + Contact */}
          <div className="space-y-6">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold pb-2 border-b border-white/8">
              {labels.newsletterTitle}
            </h3>
            <p className="text-sm text-white/45 leading-relaxed">
              {labels.newsletterDesc}
            </p>
            {submitted ? (
              <p className="text-gold text-sm font-medium">{labels.newsletterSuccess}</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex bg-white/5 border border-white/10 rounded-full p-1 focus-within:border-gold/50 transition-colors">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={labels.newsletterPlaceholder}
                  className="bg-transparent text-xs pl-4 outline-none w-full text-white placeholder-white/30"
                  required
                />
                <button type="submit" className="bg-gold hover:bg-gold/90 text-[#1B1B1B] rounded-full p-2.5 transition-colors shrink-0">
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            {/* Contact Info */}
            <div className="space-y-3 pt-4 border-t border-white/5">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-xs text-white/50 hover:text-gold transition-colors">
                <Phone className="w-3.5 h-3.5 text-gold/60" />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:hello@mhindiatrips.com" className="flex items-center gap-2 text-xs text-white/50 hover:text-gold transition-colors">
                <Mail className="w-3.5 h-3.5 text-gold/60" />
                <span>hello@mhindiatrips.com</span>
              </a>
              <div className="flex items-start gap-2 text-xs text-white/50">
                <MapPin className="w-3.5 h-3.5 text-gold/60 shrink-0 mt-0.5" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/35">&copy; {labels.copyright}</p>
          <div className="flex gap-6 text-xs text-white/35">
            <a href="#" className="hover:text-gold transition-colors">{labels.terms}</a>
            <a href="#" className="hover:text-gold transition-colors">{labels.privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
