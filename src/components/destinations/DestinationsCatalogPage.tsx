import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/home/Reveal";
import { getLocalizedDestinationsPath } from "@/lib/utils";

interface DestinationsCatalogPageProps {
  locale: string;
  states: any[];
}

export default function DestinationsCatalogPage({ locale, states }: DestinationsCatalogPageProps) {
  const lang = (locale === "es" || locale === "pt") ? locale : "en";

  const t: Record<string, any> = {
    en: {
      home: "Home",
      destinations: "Destinations in India",
      title: "Destinations in India",
      subtitle: "Explore the most magical states, royal cities, and tropical backwaters of India.",
      cardCta: "Explore State"
    },
    es: {
      home: "Inicio",
      destinations: "Destinos en India",
      title: "Destinos en la India",
      subtitle: "Explore los estados más mágicos, ciudades reales y remansos tropicales de la India.",
      cardCta: "Explorar Estado"
    },
    pt: {
      home: "Inicio",
      destinations: "Destinos na Índia",
      title: "Destinos na Índia",
      subtitle: "Explore os estados mais mágicos, cidades imperiais e canais tropicais da Índia.",
      cardCta: "Explorar Estado"
    }
  };

  const text = t[locale] || t.en;

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      {/* Hero Banner */}
      <section className="relative h-[45vh] min-h-[380px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/rajasthan_fort_sunset.png"
          alt={text.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" /> {/* Dark gradient/overlay */}
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center flex flex-col items-center justify-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight drop-shadow-md">
            {text.title}
          </h1>
          <p className="text-sm md:text-base text-white/80 max-w-2xl font-light">
            {text.subtitle}
          </p>

          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-white/80 text-xs font-light bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <Link href={`/${locale}`} className="hover:text-[#C3AB85] transition-colors">
              {text.home}
            </Link>
            <span className="text-white/40 font-light">→</span>
            <span className="text-white/60 font-light">{text.destinations}</span>
          </nav>
        </div>
      </section>

      {/* States Catalog Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {states.map((state: any, i: number) => {
            const stateTitle = state.name?.[lang] || state.name?.en || state.id;
            const stateDesc = state.description?.[lang] || state.description?.en || "";
            const stateSlug = state.slug?.[lang] || state.slug?.en || state.id;
            
            const statePath = getLocalizedDestinationsPath(locale, stateSlug);

            return (
              <Reveal key={state.id} delay={i * 100}>
                <Link href={statePath} className="group block h-full">
                  <div className="bg-white border border-[#C3AB85]/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col justify-between">
                    <div className="h-80 overflow-hidden relative">
                      <img
                        src={state.image || "/images/destination_fallback.jpg"}
                        alt={stateTitle}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />
                    </div>

                    <div className="p-8 flex-grow flex flex-col justify-between space-y-5">
                      <div className="space-y-3">
                        <h3 className="font-serif text-2xl font-bold text-[#0B0D0C] group-hover:text-[#C3AB85] transition-colors leading-tight">
                          {stateTitle}
                        </h3>
                        <p className="text-xs md:text-sm text-[#1B1B1B]/60 leading-relaxed font-light line-clamp-3">
                          {stateDesc}
                        </p>
                      </div>

                      <div className="pt-2">
                        <span className="inline-flex items-center gap-1.5 text-[9px] font-bold text-[#0A2A1E] uppercase tracking-wider bg-[#C3AB85] hover:bg-[#b59a72] px-4 py-2.5 rounded-full shadow-sm transition-all group-hover:scale-105 duration-300">
                          <span>{text.cardCta}</span>
                          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
