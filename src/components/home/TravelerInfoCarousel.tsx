"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CardItem {
  id: string;
  image: string;
  title: { en: string; es: string; pt: string };
  path: string;
}

interface TravelerInfoCarouselProps {
  locale: string;
}

export default function TravelerInfoCarousel({ locale }: TravelerInfoCarouselProps) {
  const [activeIdx, setActiveIdx] = useState(2); // Center on card index 2 initially

  const cards: CardItem[] = [
    {
      id: "visa",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600",
      title: {
        en: "Visa and Customs Formalities",
        es: "Trámites de visado para la India",
        pt: "Trâmites de visto para a Índia"
      },
      path: "/faq"
    },
    {
      id: "climate",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=600",
      title: {
        en: "Best Time to Visit & Weather",
        es: "Cuándo viajar y Clima en la India",
        pt: "Quando viajar e Clima na Índia"
      },
      path: "/faq"
    },
    {
      id: "solo-travel",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=600",
      title: {
        en: "Solo Female Travel Safety",
        es: "Mujer viajando sola por la India",
        pt: "Mulher viajando sozinha na Índia"
      },
      path: "/faq"
    },
    {
      id: "vaccines",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600",
      title: {
        en: "Vaccinations and Health Advice",
        es: "Las vacunas para viajar a la India",
        pt: "As vacinas para viajar para a Índia"
      },
      path: "/faq"
    },
    {
      id: "packing",
      image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=600",
      title: {
        en: "Currency and Packing Guidelines",
        es: "Moneda y Equipaje recomendado",
        pt: "Moeda e Bagagem recomendada"
      },
      path: "/faq"
    }
  ];

  const labels: Record<string, any> = {
    en: {
      title: "Traveler Information",
      subtitle: "Concierge Guide"
    },
    es: {
      title: "Información para Viajeros",
      subtitle: "Guía de Conserjería"
    },
    pt: {
      title: "Informações para Viajantes",
      subtitle: "Guia de Concierge"
    }
  };

  const text = labels[locale] || labels.en;

  const nextSlide = () => {
    setActiveIdx((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setActiveIdx((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <section className="relative py-28 bg-[#FAF8F5] border-b border-gold/10 overflow-hidden select-none">
      
      {/* Background Floating Travel Sketch SVGs (Screenshot 3 Theme) */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none z-0">
        <svg className="absolute top-10 left-10 w-24 h-24 text-royal" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Compass Sketch */}
          <circle cx="50" cy="50" r="35" />
          <path d="M50 15 L50 85 M15 50 L85 50 M32 32 L68 68 M32 68 L68 32" strokeDasharray="3 3" />
          <polygon points="50,25 58,50 50,75 42,50" fill="currentColor" />
        </svg>
        <svg className="absolute bottom-12 right-16 w-32 h-32 text-royal" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Anchor Sketch */}
          <path d="M50 10 L50 75 M50 25 C40 25 35 35 35 45 M50 25 C60 25 65 35 65 45" />
          <circle cx="50" cy="18" r="8" />
          <path d="M20 50 C20 80 80 80 80 50" strokeWidth="3" />
          <path d="M15 48 L25 48 M75 48 L85 48" />
        </svg>
        <svg className="absolute top-20 right-28 w-28 h-20 text-royal" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Paper Plane Path Sketch */}
          <path d="M10 50 C 30 10, 70 10, 90 30" strokeDasharray="4 4" />
          <polygon points="90,30 80,32 87,22" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* Title */}
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold block">{text.subtitle}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-royal tracking-tight font-serif">
            {text.title}
          </h2>
          <div className="h-[2px] w-20 bg-gold/30 mx-auto mt-2" />
        </div>

        {/* 3D Overlapping Card Deck Stack */}
        <div className="relative flex justify-center items-center h-[460px] w-full max-w-5xl mx-auto px-12">
          
          {cards.map((card, idx) => {
            // Calculate distance from center active index
            let offset = idx - activeIdx;
            // Handle circular loop offset mapping
            if (offset < -2) offset += cards.length;
            if (offset > 2) offset -= cards.length;

            const isCenter = offset === 0;
            const isLeft = offset === -1 || offset === cards.length - 1;
            const isRight = offset === 1 || offset === -(cards.length - 1);
            const isFarLeft = offset === -2;
            const isFarRight = offset === 2;

            // Define scale, z-index, translate and opacity properties based on positioning offset
            let scale = 0.8;
            let zIndex = 0;
            let translateX = 0;
            let opacity = 0;
            let blur = "blur(4px)";

            if (isCenter) {
              scale = 1.05;
              zIndex = 30;
              translateX = 0;
              opacity = 1;
              blur = "none";
            } else if (isLeft) {
              scale = 0.9;
              zIndex = 20;
              translateX = -140;
              opacity = 0.75;
            } else if (isRight) {
              scale = 0.9;
              zIndex = 20;
              translateX = 140;
              opacity = 0.75;
            } else if (isFarLeft) {
              scale = 0.75;
              zIndex = 10;
              translateX = -260;
              opacity = 0.4;
            } else if (isFarRight) {
              scale = 0.75;
              zIndex = 10;
              translateX = 260;
              opacity = 0.4;
            }

            const titleText = card.title[locale as "en" | "es" | "pt"] || card.title.en;

            return (
              <div
                key={card.id}
                onClick={() => setActiveIdx(idx)}
                className="absolute w-[240px] md:w-[280px] h-[380px] rounded-3xl overflow-hidden shadow-2xl border border-gold/10 transition-all duration-700 ease-out cursor-pointer"
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  zIndex: zIndex,
                  opacity: opacity,
                  filter: blur,
                }}
              >
                <img
                  src={card.image}
                  alt={titleText}
                  className="w-full h-full object-cover"
                />
                {/* Text Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-6 text-center">
                  <h3 className="text-sm md:text-base font-bold text-white font-serif tracking-wide leading-snug">
                    {titleText}
                  </h3>
                  {isCenter && (
                    <Link
                      href={`/${locale}${card.path}`}
                      className="mt-3 text-[9px] font-bold uppercase tracking-wider text-gold hover:text-white transition-colors"
                    >
                      Read Detail →
                    </Link>
                  )}
                </div>
              </div>
            );
          })}

        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-6 pt-4 relative z-20">
          <button
            onClick={prevSlide}
            aria-label="Previous card"
            className="w-12 h-12 rounded-full border border-gold/25 bg-white text-royal hover:bg-gold hover:text-royal transition-all duration-300 flex items-center justify-center shadow"
            suppressHydrationWarning
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next card"
            className="w-12 h-12 rounded-full border border-gold/25 bg-white text-royal hover:bg-gold hover:text-royal transition-all duration-300 flex items-center justify-center shadow"
            suppressHydrationWarning
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
