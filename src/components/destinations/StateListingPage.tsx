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

import PageHeroSlider from "@/components/common/PageHeroSlider";

export default function StateListingPage({ locale, state, cities }: StateListingPageProps) {
  const lang = (locale === "es" || locale === "pt") ? locale : "en";
  const stateTitle = state.name?.[lang] || state.name?.en || state.id;
  const stateDesc = state.description?.[lang] || state.description?.en || "";

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

  // Build slider slides from cities and state image
  const sliderSlides: any[] = [];
  if (state.image) {
    const cleanStateDesc = stateDesc.length > 90 ? stateDesc.slice(0, 87) + "..." : stateDesc;
    sliderSlides.push({
      image: state.image,
      title: stateTitle,
      subtitle: `${text.destinations} / ${stateTitle}`,
      location: stateTitle,
      description: cleanStateDesc,
      objectPosition: "center 25%"
    });
  }

  cities.slice(0, 5).forEach((city: any) => {
    const cTitle = city.name?.[lang] || city.name?.en || city.id;
    const rawCDesc = city.description?.[lang] || city.description?.en || "";
    const cleanCDesc = rawCDesc.length > 90 ? rawCDesc.slice(0, 87) + "..." : rawCDesc;
    const citySlug = city.slug?.[lang] || city.slug?.en || city.id;
    const stateSlug = state.slug?.[lang] || state.slug?.en || state.id;
    if (city.image) {
      sliderSlides.push({
        image: city.image,
        title: cTitle,
        subtitle: stateTitle,
        location: `${cTitle}, ${stateTitle}`,
        description: cleanCDesc,
        objectPosition: "center 25%",
        ctaText: text.readMore,
        ctaLink: getLocalizedDestinationsPath(locale, stateSlug, citySlug)
      });
    }
  });

  if (sliderSlides.length === 0) {
    sliderSlides.push({
      image: "/images/destination_fallback.jpg",
      title: stateTitle,
      subtitle: text.destinations,
      location: stateTitle,
      description: stateDesc
    });
  }

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      {/* Hero Header */}
      <PageHeroSlider locale={locale} slides={sliderSlides} showBreadcrumb={stateTitle} />

      {/* Overview & Highlights Banner */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <Reveal className="bg-white p-8 sm:p-12 rounded-3xl border border-[#C5A862]/30 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="bg-[#C5A862] text-[#0A2A1E] text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block">
              {stateTitle} Heritage & Culture
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0A2A1E]">
              Discover the Wonders of {stateTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#1B1B1B]/75 leading-relaxed font-light">
              {stateDesc || `Explore the royal palaces, historic monuments, spiritual temples, and vibrant markets of ${stateTitle}. Handcrafted luxury itineraries with private chauffeurs.`}
            </p>
          </div>
          <div className="lg:col-span-4 bg-[#0A2A1E] text-white p-6 rounded-2xl border border-[#C5A862]/40 space-y-3">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C5A862] block">Travel Concierge Specs</span>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-white/70">Best Time:</span>
                <span className="font-bold text-[#C5A862]">{state.bestTime?.[lang] || state.bestTime?.en || "October to March"}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-white/70">Highlights:</span>
                <span className="font-bold text-white">Palaces, Culture & Wildlife</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-white/70">Chauffeur:</span>
                <span className="font-bold text-white">Private Luxury Chauffeur</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Cities Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        <Reveal className="text-center space-y-2">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#0A2A1E]">
            {text.exploreCities} {stateTitle}
          </h2>
          <p className="text-sm text-[#1B1B1B]/60 font-light">
            {text.exploreCitiesDesc}
          </p>
          <div className="h-px w-20 bg-[#C5A862] mx-auto mt-2" />
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
                    <div className="bg-white border border-[#C5A862]/20 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 h-full flex flex-col justify-between hover:-translate-y-1">
                      {/* Image container */}
                      <div className="h-80 overflow-hidden relative">
                        <img
                          src={city.image || "/images/destination_fallback.jpg"}
                          alt={cityTitle}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 bg-[#0A2A1E] text-[#C5A862] border border-[#C5A862]/30 text-[10px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                          <MapPin className="w-3.5 h-3.5 text-[#C5A862]" />
                          <span>{stateTitle}</span>
                        </div>
                      </div>

                      {/* Content container */}
                      <div className="p-8 flex-grow flex flex-col justify-between space-y-5">
                        <div className="space-y-3">
                          <h3 className="font-serif text-2xl font-bold text-[#0A2A1E] group-hover:text-[#C5A862] transition-colors leading-tight">
                            {cityTitle}
                          </h3>
                          <p className="text-xs md:text-sm text-[#1B1B1B]/70 leading-relaxed font-light line-clamp-3">
                            {cityDesc}
                          </p>
                        </div>

                        <div className="pt-2">
                          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#0A2A1E] uppercase tracking-wider bg-[#C5A862] hover:bg-[#D8BE83] px-5 py-3 rounded-full shadow-md transition-all group-hover:scale-105 duration-300">
                            <span>{text.readMore}</span>
                            <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 text-[#0A2A1E]" />
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
