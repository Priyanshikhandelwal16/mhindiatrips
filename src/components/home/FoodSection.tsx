import React from "react";
import Link from "next/link";
import { Utensils, ArrowRight, MapPin } from "lucide-react";
import Reveal from "./Reveal";

interface FoodSectionProps {
  locale: string;
  foods: any[];
  labels: {
    sub: string;
    title: string;
    desc: string;
    cta: string;
    viewAll: string;
  };
}

// Local image paths for foods
const foodImageMap: Record<string, string> = {
  "butter-chicken": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800",
  "masala-dosa": "/images/masala dosa.jpg",
  "hyderabadi-biryani": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800",
  "dal-baati-churma": "/images/churma bati.jpg",
  "pav-bhaji": "/images/pav bhaji.jpg",
  "goan-fish-curry": "/images/goan fish curry.jpg",
  "momos": "/images/momos.jpg",
  "dhokla": "/images/dhokla.jpg",
  "rasgulla": "/images/rasgulla.jpg",
  "appam-steamed-rice-crepe": "/images/appam idli.jpg",
  "dal-makhani": "/images/dal makhani.jpg",
  "chole-bhature": "/images/chhole bhature.jpg",
  "tandoori-chicken": "/images/tandoori chicken.jpg",
  "laal-maas": "/images/laal maas.jpg",
  "idli-sambar": "/images/idli sambhar.jpg",
  "kerala-fish-curry": "/images/kerala fish curry.jpg",
  "puttu-kadala": "/images/puttu kadala curry.jpg",
  "vada-pav": "/images/vada pav.jpg",
  "thali-gujarati": "/images/gujarati thali.jpg",
  "misal-pav": "/images/pav bhaji.jpg",
  "machher-jhol": "/images/macher jhol.jpg",
  "litti-chokha": "/images/litti chokha.jpg",
  "sandesh": "/images/sandesh.jpg",
};

export default function FoodSection({ locale, foods, labels }: FoodSectionProps) {
  const featured = foods.slice(0, 6);

  return (
    <section className="relative section-spacing overflow-hidden bg-royal text-white">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#B8964B_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-14">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col items-center text-center gap-6">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.2em] text-gold font-semibold">
                <Utensils className="w-4 h-4" />
                <span>{labels.sub}</span>
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight">{labels.title}</h2>
              <p className="text-[15px] text-white/55 max-w-lg leading-relaxed mx-auto">{labels.desc}</p>
            </div>
            <div>
              <Link
                href={`/${locale}/food`}
                className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gold hover:text-white border border-gold/30 hover:border-gold px-7 py-3.5 rounded-full transition-all duration-300"
              >
                <span>{labels.viewAll}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Food cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((food: any, idx: number) => {
            const imageUrl = foodImageMap[food.slug] || food.image;
            return (
              <Reveal key={food.slug} delay={idx * 80}>
                <Link
                  href={`/${locale}/food/${food.slug}`}
                  className="group relative block h-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
                >
                  <img
                    src={imageUrl}
                    alt={food.title[locale as "en" | "es" | "pt"] || food.title.en}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  <div className="absolute bottom-0 p-7 text-white space-y-2.5">
                    <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] text-gold font-semibold">
                      <MapPin className="w-3 h-3" />
                      <span>{food.region}</span>
                    </span>
                    <h3 className="text-xl font-serif font-bold leading-tight">
                      {food.title[locale as "en" | "es" | "pt"] || food.title.en}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/60 group-hover:text-gold transition-colors duration-300">
                      <span>{labels.cta}</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
