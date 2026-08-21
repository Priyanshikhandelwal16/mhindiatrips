import React from "react";
import Link from "next/link";
import { MapPin, ChevronRight } from "lucide-react";
import Reveal from "@/components/home/Reveal";
import { getLocalizedDestinationsPath } from "@/lib/utils";

interface StateListingPageProps {
  locale: string;
  state: any;
  cities: any[];
}

export default function StateListingPage({ locale, state, cities }: StateListingPageProps) {
  const lang = (locale === "es" || locale === "pt") ? locale : "en";
  const stateTitle = state.name?.[lang] || state.name?.en || state.id;

  const t: Record<string, any> = {
    en: {
      home: "Home",
      destinations: "Destinations in India",
      exploreCities: "Explore Cities in",
      exploreCitiesDesc: "Discover the heritage, landmarks, and highlights of each city",
      readMore: "Read More",
      noCities: "No cities available for this state yet."
    },
    es: {
      home: "Inicio",
      destinations: "Destinos en India",
      exploreCities: "Explorar Ciudades en",
      exploreCitiesDesc: "Descubre el patrimonio, puntos de interés e historia de cada ciudad",
      readMore: "Leer Más",
      noCities: "No hay ciudades disponibles para este estado todavía."
    },
    pt: {
      home: "Inicio",
      destinations: "Destinos na Índia",
      exploreCities: "Explorar Cidades em",
      exploreCitiesDesc: "Descubra o patrimônio, pontos de interesse e história de cada cidade",
      readMore: "Ler Mais",
      noCities: "Nenhuma cidade disponível para este estado ainda."
    }
  };

  const text = t[locale] || t.en;

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      {/* Hero Banner */}
      <section className="relative h-[45vh] min-h-[380px] flex items-center justify-center overflow-hidden">
        <img
          src={state.image || "/images/destination_fallback.jpg"}
          alt={stateTitle}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" /> {/* Dark overlay */}
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center flex flex-col items-center justify-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight drop-shadow-md">
            {stateTitle}
          </h1>

          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-white/80 text-xs font-light bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <Link href={`/${locale}`} className="hover:text-[#C3AB85] transition-colors">
              {text.home}
            </Link>
            <span className="text-white/40 font-light">→</span>
            <span className="text-white/60 font-light">{stateTitle}</span>
          </nav>
        </div>
      </section>

      {/* Cities Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-12">
        <Reveal className="text-center space-y-2">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#0B0D0C]">
            {text.exploreCities} {stateTitle}
          </h2>
          <p className="text-sm text-[#1B1B1B]/50 font-light">
            {text.exploreCitiesDesc}
          </p>
        </Reveal>

        {cities.length === 0 ? (
          <div className="text-center py-12 text-[#1B1B1B]/50 font-light">
            {text.noCities}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {cities.map((city: any, i: number) => {
              const cityTitle = city.name?.[lang] || city.name?.en || city.id;
              const cityDesc = city.description?.[lang] || city.description?.en || "";
              const citySlug = city.slug?.[lang] || city.slug?.en || city.id;
              const stateSlug = state.slug?.[lang] || state.slug?.en || state.id;
              
              const cityPath = getLocalizedDestinationsPath(locale, stateSlug, citySlug);

              return (
                <Reveal key={city.id} delay={i * 80}>
                  <Link href={cityPath} className="group block h-full">
                    <div className="bg-white border border-[#C3AB85]/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col justify-between">
                      {/* Image container */}
                      <div className="h-80 overflow-hidden relative">
                        <img
                          src={city.image || "/images/destination_fallback.jpg"}
                          alt={cityTitle}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-3 left-3 bg-[#0B0D0C]/80 text-[#C3AB85] text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{stateTitle}</span>
                        </div>
                      </div>

                      {/* Content container */}
                      <div className="p-8 flex-grow flex flex-col justify-between space-y-5">
                        <div className="space-y-3">
                          <h3 className="font-serif text-2xl font-bold text-[#0B0D0C] group-hover:text-[#C3AB85] transition-colors leading-tight">
                            {cityTitle}
                          </h3>
                          <p className="text-xs md:text-sm text-[#1B1B1B]/60 leading-relaxed font-light line-clamp-3">
                            {cityDesc}
                          </p>
                        </div>

                        <div className="pt-2">
                          <span className="inline-flex items-center gap-1.5 text-[9px] font-bold text-[#0A2A1E] uppercase tracking-wider bg-[#C3AB85] hover:bg-[#b59a72] px-4 py-2.5 rounded-full shadow-sm transition-all group-hover:scale-105 duration-300">
                            <span>{text.readMore}</span>
                            <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
