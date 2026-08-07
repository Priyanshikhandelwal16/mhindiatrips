"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface MonumentItem {
  id: string;
  slug: string;
  image: string;
  title: { en: string; es: string; pt: string };
  verticalTitle: { en: string; es: string; pt: string };
  city: string;
  state: string;
  path: string;
}

interface MonumentsAccordionProps {
  locale: string;
}

export default function MonumentsAccordion({ locale }: MonumentsAccordionProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  const items: MonumentItem[] = [
    {
      id: "chittorgarh",
      slug: "chittorgarh",
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=800",
      title: {
        en: "Monumentos Chittorgarh",
        es: "Monumentos Chittorgarh",
        pt: "Monumentos Chittorgarh",
      },
      verticalTitle: {
        en: "Monuments of Chittorgarh",
        es: "Monumentos Chittorgarh",
        pt: "Monumentos Chittorgarh",
      },
      city: "Chittorgarh",
      state: "Rajasthan",
      path: "/destinations/rajasthan/chittorgarh"
    },
    {
      id: "bundi",
      slug: "bundi",
      image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800",
      title: {
        en: "Monumentos en Bundi",
        es: "Monumentos en Bundi",
        pt: "Monumentos em Bundi",
      },
      verticalTitle: {
        en: "Monuments in Bundi",
        es: "Monumentos en Bundi",
        pt: "Monumentos em Bundi",
      },
      city: "Bundi",
      state: "Rajasthan",
      path: "/destinations/rajasthan"
    },
    {
      id: "udaipur",
      slug: "udaipur",
      image: "https://images.unsplash.com/photo-1602643072447-63ec27153372?q=80&w=800",
      title: {
        en: "Monumentos de Udaipur",
        es: "Monumentos de Udaipur",
        pt: "Monumentos de Udaipur",
      },
      verticalTitle: {
        en: "Monuments of Udaipur",
        es: "Monumentos de Udaipur",
        pt: "Monumentos de Udaipur",
      },
      city: "Udaipur",
      state: "Rajasthan",
      path: "/destinations/rajasthan/udaipur"
    },
    {
      id: "jaipur",
      slug: "jaipur",
      image: "https://images.unsplash.com/photo-1477584308802-e9c37c0f1676?q=80&w=800",
      title: {
        en: "Monumentos de Jaipur",
        es: "Monumentos de Jaipur",
        pt: "Monumentos de Jaipur",
      },
      verticalTitle: {
        en: "Monuments of Jaipur",
        es: "Monumentos de Jaipur",
        pt: "Monumentos de Jaipur",
      },
      city: "Jaipur",
      state: "Rajasthan",
      path: "/destinations/rajasthan/jaipur"
    }
  ];

  const labels: Record<string, any> = {
    en: {
      sectionTitle: "Monuments of India",
      moreInfo: "More Info"
    },
    es: {
      sectionTitle: "Monumentos de la India",
      moreInfo: "Más Info"
    },
    pt: {
      sectionTitle: "Monumentos da Índia",
      moreInfo: "Mais Info"
    }
  };

  const text = labels[locale] || labels.en;

  return (
    <section className="py-24 bg-white border-b border-gold/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-royal tracking-tight font-serif">
            {text.sectionTitle}
          </h2>
          <div className="h-[2px] w-20 bg-gold/30 mx-auto mt-4" />
        </div>

        {/* Expanding Row Container */}
        <div className="flex flex-col md:flex-row gap-4 h-[550px] w-full items-stretch">
          {items.map((item, idx) => {
            const isActive = idx === activeIdx;
            const titleText = item.title[locale as "en" | "es" | "pt"] || item.title.en;
            const verticalTitleText = item.verticalTitle[locale as "en" | "es" | "pt"] || item.verticalTitle.en;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveIdx(idx)}
                className={`relative overflow-hidden rounded-[2rem] transition-all duration-700 ease-out cursor-pointer shadow-lg border border-gold/5 flex flex-col justify-end p-8 ${
                  isActive ? "flex-grow-[4.5]" : "flex-grow-[1]"
                }`}
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minWidth: isActive ? "320px" : "100px"
                }}
              >
                {/* Dark shading gradient overlay for readable text */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent transition-opacity duration-700 ${
                  isActive ? "opacity-100" : "opacity-60"
                }`} />

                {/* Content Block */}
                <div className="relative z-10 w-full flex flex-col md:flex-row items-end justify-between gap-4">
                  {isActive ? (
                    // Active Item Text
                    <div className="animate-fade-in space-y-2 w-full md:w-auto text-left">
                      <span className="text-[10px] font-bold tracking-widest text-gold uppercase block">
                        {item.city}, {item.state || "India"}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white font-serif tracking-wide leading-none">
                        {titleText}
                      </h3>
                    </div>
                  ) : (
                    // Inactive Rotated Vertical Title
                    <h4 
                      className="absolute bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-white/90 font-serif font-bold text-base md:text-lg tracking-wider pointer-events-none uppercase transition-opacity duration-300"
                      style={{ 
                        writingMode: "vertical-rl", 
                        transform: "rotate(180deg)" 
                      }}
                    >
                      {verticalTitleText}
                    </h4>
                  )}

                  {isActive && (
                    // Outline "Más Info" Button
                    <Link
                      href={`/${locale}${item.path}`}
                      className="shrink-0 bg-transparent hover:bg-white text-white hover:text-royal font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full border border-white hover:border-white transition-all duration-300 flex items-center gap-2 mb-1"
                    >
                      <span>{text.moreInfo}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
