import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getStatesAction, getStateBySlugAction, getTourPackagesAction } from "@/app/actions/queries";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

interface StatePageProps {
  params: Promise<{ locale: string; stateSlug: string }>;
}

export default async function StateDetailPage({ params }: StatePageProps) {
  const { locale, stateSlug } = await params;
  const state = await getStateBySlugAction(stateSlug) as any;
  if (!state) notFound();

  const lang = (locale === "es" || locale === "pt") ? locale : "en";

  // Fetch related packages
  const allPackages = await getTourPackagesAction();
  const relatedPackages = allPackages.filter((p: any) => {
    const titleText = (p.title?.en || "").toLowerCase();
    const stateName = (state.title?.en || "").toLowerCase();
    return titleText.includes(stateName) || p.category?.toLowerCase() === state.region?.toLowerCase();
  }).slice(0, 3);

  // Translations
  const t: Record<string, any> = {
    en: {
      subRegion: "Discover",
      introTitle: "An Introduction to",
      quickStats: "Quick Insights",
      regionLabel: "Geographic Region",
      seasonLabel: "Best Travel Months",
      whyVisitTitle: "Why Visit",
      destinationsTitle: "Destinations & Key Cities",
      toursTitle: "Curated Travel Routes",
      exploreCTA: "Explore Guide",
      contactCTA: "Plan Your Custom Journey"
    },
    es: {
      subRegion: "Descubrir",
      introTitle: "Una Introducción a",
      quickStats: "Datos Rápidos",
      regionLabel: "Región Geográfica",
      seasonLabel: "Mejores Meses de Viaje",
      whyVisitTitle: "Por Qué Visitar",
      destinationsTitle: "Destinos y Ciudades Clave",
      toursTitle: "Rutas de Viaje Seleccionadas",
      exploreCTA: "Explorar Guía",
      contactCTA: "Planifique su Viaje a Medida"
    },
    pt: {
      subRegion: "Descobrir",
      introTitle: "Uma Introdução a",
      quickStats: "Dados Rápidos",
      regionLabel: "Região Geográfica",
      seasonLabel: "Melhores Meses de Viagem",
      whyVisitTitle: "Por Que Visitar",
      destinationsTitle: "Destinos e Cidades Principais",
      toursTitle: "Rotas de Viagem Curadas",
      exploreCTA: "Explorar Guia",
      contactCTA: "Planeje sua Viagem Personalizada"
    }
  };
  const text = t[locale] || t.en;

  const stateName = state.title[lang] || state.title.en;
  const stateTagline = state.tagline[lang] || state.tagline.en;
  const stateDesc = state.description[lang] || state.description.en;
  const bestTimeStr = state.bestTime[lang] || state.bestTime.en;

  return (
    <div className="bg-ivory-100 min-h-screen text-charcoal-800 font-sans">
      
      {/* 1. STATE CINEMATIC HERO */}
      <section className="relative h-[70vh] w-full flex items-end justify-start overflow-hidden pt-28">
        <div className="absolute inset-0 z-0">
          <img 
            src={state.image} 
            alt={stateName} 
            className="w-full h-full object-cover filter brightness-[0.70] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 editorial-container w-full pb-12 text-left text-ivory-100">
          <span className="text-[10px] font-sans font-bold tracking-widest text-sand-400 uppercase block mb-2">
            {text.subRegion} {state.region}ern India
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-normal tracking-tight">
            {stateName}
          </h1>
          <p className="mt-4 text-xs md:text-sm text-ivory-100/70 tracking-widest uppercase font-medium max-w-xl">
            {stateTagline}
          </p>
        </div>
      </section>

      {/* 2. STATS & WHY VISIT */}
      <section className="py-16 md:py-24">
        <div className="editorial-container grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Detailed Intro */}
          <div className="lg:col-span-7 text-left space-y-6">
            <h2 className="font-serif text-2xl md:text-4xl font-normal text-charcoal-800 leading-tight">
              {text.introTitle} <br />
              <span className="italic font-normal">{stateName}</span>
            </h2>
            <p className="text-sm md:text-base text-charcoal-800/70 leading-relaxed font-sans font-light">
              {stateDesc}
            </p>
            
            {/* Quick stats box */}
            <div className="p-6 bg-sand-50/50 border border-sand-300 grid grid-cols-2 gap-6 text-xs mt-8">
              <div>
                <span className="text-sand-500 font-bold block mb-1 uppercase tracking-wider">{text.regionLabel}</span>
                <span className="text-charcoal-800 uppercase tracking-wider font-semibold">{state.region} India</span>
              </div>
              <div>
                <span className="text-sand-500 font-bold block mb-1 uppercase tracking-wider">{text.seasonLabel}</span>
                <span className="text-charcoal-800 font-medium">{bestTimeStr}</span>
              </div>
            </div>
          </div>

          {/* Why Visit lists */}
          <div className="lg:col-span-5 text-left border-l border-sand-300 pl-8 lg:pl-12">
            <h3 className="font-serif text-lg font-bold text-charcoal-800 mb-6">
              {text.whyVisitTitle} {stateName}?
            </h3>
            <ul className="space-y-6">
              {state.travelTips && state.travelTips.map((reason: any, idx: number) => {
                const reasonStr = reason[lang] || reason.en;
                return (
                  <li key={idx} className="flex items-start space-x-3.5 text-xs text-charcoal-800/75 leading-relaxed font-sans">
                    <span className="font-serif text-sm font-bold text-sand-500">0{idx+1}.</span>
                    <span>{reasonStr}</span>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>
      </section>

      {/* 3. POPULAR DESTINATIONS / CITIES */}
      {state.cities && state.cities.length > 0 && (
        <section className="py-20 bg-sand-50/30 border-y border-charcoal-800/5">
          <div className="editorial-container">
            <div className="text-left mb-16">
              <span className="text-[10px] font-sans font-bold tracking-widest text-sand-500 uppercase block mb-3">
                Atlas Mapping
              </span>
              <h2 className="font-serif text-2xl md:text-4xl font-normal text-charcoal-800 leading-tight">
                {text.destinationsTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {state.cities.map((dest: any) => {
                const destTitle = dest.title[lang] || dest.title.en;
                const destTagline = dest.tagline[lang] || dest.tagline.en;
                const destBestTime = dest.bestTime[lang] || dest.bestTime.en;
                const destWeather = dest.weather[lang] || dest.weather.en;

                return (
                  <div 
                    key={dest.slug}
                    className="bg-white border border-sand-300 overflow-hidden group hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-64 overflow-hidden relative">
                        <img 
                          src={dest.image} 
                          alt={destTitle} 
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1200ms]"
                        />
                      </div>
                      <div className="p-6 text-left space-y-3">
                        <h3 className="font-serif text-lg font-bold text-charcoal-800 group-hover:text-sand-500 transition-colors">
                          {destTitle}
                        </h3>
                        <p className="text-xs text-charcoal-800/60 leading-relaxed font-sans font-light line-clamp-2">
                          {destTagline}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-[10px] font-sans font-bold text-charcoal-800/50 uppercase tracking-widest pt-2">
                          <span className="flex items-center"><Calendar size={10} className="mr-1" /> {destBestTime}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 pt-0 text-left">
                      <Link
                        href={`/${locale}/destinations/${stateSlug}/${dest.slug}`}
                        className="w-full block text-center py-2.5 border border-charcoal-800 hover:bg-charcoal-800 hover:text-ivory-100 text-[10px] tracking-widest uppercase font-semibold transition-all font-sans rounded-md"
                      >
                        {text.exploreCTA}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 4. CURATED JOURNEYS */}
      {relatedPackages.length > 0 && (
        <section className="py-20">
          <div className="editorial-container">
            <div className="text-left mb-16">
              <span className="text-[10px] font-sans font-bold tracking-widest text-sand-500 uppercase block mb-3">
                Signature Routes
              </span>
              <h2 className="font-serif text-2xl md:text-4xl font-normal text-charcoal-800 leading-tight">
                {text.toursTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPackages.map((pkg: any) => {
                const pkgTitle = pkg.title[lang] || pkg.title.en;
                const pkgTagline = pkg.tagline[lang] || pkg.tagline.en;

                return (
                  <div 
                    key={pkg.slug}
                    className="bg-white border border-sand-300 overflow-hidden group hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-56 overflow-hidden relative">
                        <img 
                          src={pkg.image} 
                          alt={pkgTitle} 
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1200ms]"
                        />
                      </div>
                      <div className="p-6 text-left space-y-2">
                        <div className="flex justify-between items-center text-[10px] font-sans font-bold text-sand-500 uppercase tracking-widest">
                          <span>{pkg.durationDays} Days</span>
                          <span>{pkg.category}</span>
                        </div>
                        <h3 className="font-serif text-base font-bold text-charcoal-800 group-hover:text-sand-500 transition-colors">
                          {pkgTitle}
                        </h3>
                        <p className="text-xs text-charcoal-800/60 leading-relaxed font-sans font-light line-clamp-2">
                          {pkgTagline}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0 text-left">
                      <Link
                        href={`/${locale}/packages#${pkg.slug}`}
                        className="w-full block text-center py-2.5 bg-charcoal-800 hover:bg-sand-500 text-ivory-100 text-[10px] tracking-widest uppercase font-semibold transition-all font-sans rounded-md"
                      >
                        Explore Route
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 5. PLAN TRIP CALL TO ACTION */}
      <section className="py-24 bg-charcoal-900 text-ivory-100 relative overflow-hidden text-center">
        <div className="relative z-10 editorial-container max-w-2xl">
          <span className="text-[10px] font-sans font-bold tracking-widest uppercase text-sand-400 mb-4 block">
            Custom Itinerary Builder
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Design your voyage <br />
            <span className="italic font-normal text-sand-300">through {stateName}.</span>
          </h2>
          <p className="text-xs md:text-sm text-ivory-200/60 leading-relaxed font-sans font-light mb-10 max-w-md mx-auto">
            Contact our travel design desk to construct a private, customized tour matching your personal pace.
          </p>
          <Link
            href={`/${locale}/contact`}
            className="px-10 py-4 bg-sand-400 hover:bg-sand-500 text-charcoal-900 text-xs font-semibold tracking-widest uppercase transition-all font-sans text-center inline-block rounded-md"
          >
            {text.contactCTA}
          </Link>
        </div>
      </section>

    </div>
  );
}
