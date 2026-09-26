"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Shield, MapPin, Heart, Briefcase, Leaf, Clock } from "lucide-react";
import { getHighResImageUrl } from "@/lib/image-utils";

interface TravelerInfoCarouselProps {
  locale: string;
  cardImages?: Record<string, string>; // map of card id → image URL from admin
}

export default function TravelerInfoCarousel({ locale, cardImages = {} }: TravelerInfoCarouselProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const labels: Record<string, any> = {
    en: {
      subtitle: "Concierge Knowledge Hub",
      title: "Your India Journey Guide",
      desc: "Everything you need to know before, during, and after your private luxury travel experience across India.",
      learnMore: "Learn More",
    },
    es: {
      subtitle: "Centro de Conocimiento Concierge",
      title: "Guía Esencial para su Viaje a la India",
      desc: "Todo lo que necesitas saber antes, durante y después de tu experiencia de viaje de lujo privado por la India.",
      learnMore: "Más Información",
    },
    pt: {
      subtitle: "Centro de Conhecimento Concierge",
      title: "Guia Essencial para a sua Viagem à Índia",
      desc: "Tudo o que você precisa saber antes, durante e após a sua experiência de viagem de luxo privado pela Índia.",
      learnMore: "Saiba Mais",
    }
  };

  const text = labels[locale] || labels.en;

  const cards = [
    {
      id: "visa",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=900&auto=format",
      icon: Briefcase,
      title: { en: "Visa & Entry Requirements", es: "Visa y Requisitos de Entrada", pt: "Visto e Requisitos de Entrada" },
      desc: { en: "e-Visa applications, processing time, and what documentation you need for a seamless India entry.", es: "Solicitudes de e-Visa, tiempo de procesamiento y documentación necesaria.", pt: "Solicitações de e-Visto, tempo de processamento e documentação necessária." },
      path: "/travel-info/visa-entry-requirements",
      tag: { en: "Visa Info", es: "Visado", pt: "Visto" }
    },
    {
      id: "climate",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=900&auto=format",
      icon: Clock,
      title: { en: "Best Time to Visit & Climate", es: "Mejor Época para Visitar", pt: "Melhor Época para Visitar" },
      desc: { en: "October to March is prime season for heritage travel. Understand monsoons, temperatures, and region-specific advice.", es: "De octubre a marzo es la temporada principal. Comprende monzones y climas regionales.", pt: "De outubro a março é a temporada principal. Entenda monções e climas regionais." },
      path: "/travel-info/best-time-climate",
      tag: { en: "Travel Season", es: "Temporada", pt: "Temporada" }
    },
    {
      id: "solo-travel",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=900&auto=format",
      icon: Heart,
      title: { en: "Solo Female Travel Safety", es: "Mujer Viajando Sola por India", pt: "Mulher Viajando Sozinha na Índia" },
      desc: { en: "India is welcoming and safe. Our private guides, verified drivers, and 24/7 concierge ensure complete safety for solo women.", es: "La India es acogedora. Nuestros guías privados y conserjería 24/7 garantizan seguridad total.", pt: "A Índia é acolhedora. Nossos guias privados e concierge 24/7 garantem segurança total." },
      path: "/travel-info/solo-female-travel",
      tag: { en: "Safety Guide", es: "Seguridad", pt: "Segurança" }
    },
    {
      id: "vaccines",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=900&auto=format",
      icon: Shield,
      title: { en: "Vaccinations & Health Advice", es: "Vacunas y Salud en la India", pt: "Vacinação e Saúde na Índia" },
      desc: { en: "Recommended vaccinations, medicines to carry, and how to stay healthy on your private India journey.", es: "Vacunas recomendadas, medicamentos y cómo mantenerse saludable en la India.", pt: "Vacinas recomendadas, medicamentos e como se manter saudável na Índia." },
      path: "/travel-info/vaccinations-health",
      tag: { en: "Health Guide", es: "Salud", pt: "Saúde" }
    },
    {
      id: "packing",
      image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=900&auto=format",
      icon: Leaf,
      title: { en: "Packing List & Currency Tips", es: "Lista de Equipaje y Moneda", pt: "Lista de Mala e Moeda" },
      desc: { en: "What to pack for each India season, INR currency exchange tips, and best cards to use across the regions.", es: "Qué empacar por temporada, cambio de rupias y mejores tarjetas para usar.", pt: "O que empacotar por estação, câmbio de rúpias e melhores cartões para usar." },
      path: "/travel-info/packing-currency",
      tag: { en: "Packing", es: "Equipaje", pt: "Bagagem" }
    },
    {
      id: "culture",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=900&auto=format",
      icon: MapPin,
      title: { en: "Cultural Etiquette & Customs", es: "Etiqueta Cultural en India", pt: "Etiqueta Cultural na Índia" },
      desc: { en: "Temple dress codes, greetings, dining etiquette, and essential dos and don'ts to respect Indian culture.", es: "Códigos de vestimenta en templos, saludos y comportamientos respetuosos en la India.", pt: "Códigos de vestimenta em templos, saudações e comportamentos respeitosos na Índia." },
      path: "/faq#culture",
      tag: { en: "Culture", es: "Cultura", pt: "Cultura" }
    }
  ];

  return (
    <section className="relative py-28 bg-[#0A2A1E] border-b border-gold/10 overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#C5A862_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold flex items-center gap-2">
              <Shield className="w-4 h-4" />
              {text.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-white">
              {text.title}
            </h2>
            <p className="text-sm md:text-base text-white/60 leading-relaxed font-light">
              {text.desc}
            </p>
          </div>
          <Link
            href={`/${locale}/faq`}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-royal text-[11px] font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <span>Full Travel Guide</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Large Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const title = card.title[locale as "en" | "es" | "pt"] || card.title.en;
            const desc = card.desc[locale as "en" | "es" | "pt"] || card.desc.en;
            const tag = card.tag[locale as "en" | "es" | "pt"] || card.tag.en;
            const isHovered = hoveredIdx === idx;

            return (
              <Link
                key={card.id}
                href={`/${locale}${card.path}`}
                className="group block relative overflow-hidden shadow-xl border border-white/5 transition-all duration-500 hover:border-gold/30 hover:-translate-y-2 hover:shadow-2xl"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={getHighResImageUrl(cardImages[card.id] || card.image)}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
                  {/* Tag badge */}
                  <span className="absolute top-4 left-4 bg-gold text-royal text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                </div>

                {/* Content */}
                <div className="bg-white/5 backdrop-blur-sm p-6 space-y-3 border-t border-white/5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-gold" />
                    </div>
                    <h3 className="text-base font-bold text-white leading-snug" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                      {title}
                    </h3>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed font-light pl-12">
                    {desc}
                  </p>
                  <div className="flex items-center gap-1.5 text-gold text-[10px] font-bold uppercase tracking-wider pl-12 pt-1 transition-all duration-300 group-hover:gap-2.5">
                    <span>{text.learnMore}</span>
                    <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
