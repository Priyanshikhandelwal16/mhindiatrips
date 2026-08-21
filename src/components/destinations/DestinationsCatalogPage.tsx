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
      <section className="bg-[#0A2A1E] pt-28 pb-16 md:pt-36 md:pb-20 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center space-y-3">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
            {text.title}
          </h1>

          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-white/80 text-xs font-light">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {states.map((state: any, i: number) => {
            const stateTitle = state.name?.[lang] || state.name?.en || state.id;
            const stateDesc = state.description?.[lang] || state.description?.en || "";
            const stateSlug = state.slug?.[lang] || state.slug?.en || state.id;
            
            const statePath = getLocalizedDestinationsPath(locale, stateSlug);

            return (
              <Reveal key={state.id} delay={i * 100}>
                <Link href={statePath} className="group block h-full">
                  <div className="bg-white border border-[#C3AB85]/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col justify-between">
                    <div className="h-64 overflow-hidden relative">
                      <img
                        src={state.image || "/images/destination_fallback.jpg"}
                        alt={stateTitle}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />
                    </div>

                    <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-serif text-2xl font-bold text-[#0B0D0C] group-hover:text-[#C3AB85] transition-colors leading-tight">
                          {stateTitle}
                        </h3>
                        <p className="text-xs text-[#1B1B1B]/60 leading-relaxed font-light line-clamp-3">
                          {stateDesc}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#C3AB85] uppercase tracking-widest pt-2">
                        <span>{text.cardCta}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
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
