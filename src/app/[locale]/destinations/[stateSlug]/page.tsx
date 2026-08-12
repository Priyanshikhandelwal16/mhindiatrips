import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getStatesAction, getStateBySlugAction, getTourPackagesAction } from "@/app/actions/queries";
import { Calendar, Clock, MapPin, ArrowRight, ArrowLeft, Star, Compass } from "lucide-react";
import Reveal from "@/components/home/Reveal";
import SidebarInquiryForm from "@/components/common/SidebarInquiryForm";

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
      back: "Back to Destinations",
      subRegion: "Discover Heritage",
      introTitle: "An Introduction to",
      quickStats: "Travel Intelligence",
      regionLabel: "Geographic Region",
      seasonLabel: "Best Time to Visit",
      whyVisitTitle: "Why Experience",
      destinationsTitle: "Destinations & Key Cities",
      toursTitle: "Curated Travel Itineraries",
      exploreCTA: "Explore Guide",
      contactCTA: "Plan Your Tailored Journey",
      regionVal: "India"
    },
    es: {
      back: "Volver a Destinos",
      subRegion: "Descubrir Patrimonio",
      introTitle: "Una Introducción a",
      quickStats: "Información Práctica",
      regionLabel: "Región Geográfica",
      seasonLabel: "Mejor Época para Viajar",
      whyVisitTitle: "Por Qué Experimentar",
      destinationsTitle: "Destinos y Ciudades Clave",
      toursTitle: "Rutas de Viaje Seleccionadas",
      exploreCTA: "Explorar Guía",
      contactCTA: "Planifique su Viaje a Medida",
      regionVal: "India"
    },
    pt: {
      back: "Voltar para Destinos",
      subRegion: "Descobrir Patrimônio",
      introTitle: "Uma Introdução a",
      quickStats: "Informações de Viagem",
      regionLabel: "Região Geográfica",
      seasonLabel: "Melhor Época para Viajar",
      whyVisitTitle: "Por Que Vivenciar",
      destinationsTitle: "Destinos e Cidades Principais",
      toursTitle: "Roteiros de Viagem Sugeridos",
      exploreCTA: "Explorar Guia",
      contactCTA: "Planeje sua Viagem Personalizada",
      regionVal: "Índia"
    }
  };
  const text = t[locale] || t.en;

  const stateName = state.title[lang] || state.title.en;
  const stateTagline = state.tagline[lang] || state.tagline.en;
  const stateDesc = state.description[lang] || state.description.en;
  const bestTimeStr = state.bestTime[lang] || state.bestTime.en;

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-royal font-sans relative overflow-hidden">
      {/* Soft background grid texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#C5A862_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Cinematic Hero Header */}
      <section className="relative h-[70vh] min-h-[480px] w-full flex items-end justify-start overflow-hidden pt-28">
        <div className="absolute inset-0 z-0">
          <img 
            src={state.image} 
            alt={stateName} 
            className="w-full h-full object-cover filter brightness-[0.6] contrast-[1.05]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-royal/90 via-transparent to-black/35" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12 text-left text-white space-y-6">
          <Link 
            href={`/${locale}/destinations`} 
            className="inline-flex items-center gap-2 text-white/75 hover:text-gold text-[10px] uppercase tracking-wider font-bold transition-colors bg-royal/40 backdrop-blur-sm border border-white/10 px-4 py-2.5 rounded-xl shadow-lg w-fit"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{text.back}</span>
          </Link>
          <Reveal className="space-y-3">
            <span className="text-[10px] font-bold tracking-widest text-gold uppercase block">
              {text.subRegion} • {state.region}ern {text.regionVal}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight">
              {stateName}
            </h1>
            <p className="text-xs md:text-sm text-white/70 tracking-wider uppercase font-semibold max-w-xl leading-relaxed">
              {stateTagline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Split Details Section */}
      <section className="py-20 md:py-28 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Detailed Intro Text (Left Column) */}
          <Reveal className="lg:col-span-7 text-left space-y-6">
            <span className="text-[9px] uppercase tracking-widest text-gold font-extrabold block">Editorial Log</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-royal leading-tight">
              {text.introTitle} <br />
              <span className="italic font-light text-gold">{stateName}</span>
            </h2>
            <p className="text-sm md:text-base text-royal/70 leading-relaxed font-light">
              {stateDesc}
            </p>
            
            {/* Quick stats board */}
            <div className="p-6 bg-white border border-beige/40 rounded-2xl grid grid-cols-2 gap-6 text-xs mt-8 shadow-sm">
              <div className="space-y-1">
                <span className="text-royal/40 font-bold block uppercase tracking-wider text-[9px]">{text.regionLabel}</span>
                <span className="text-royal uppercase tracking-wider font-extrabold text-sm">{state.region} {text.regionVal}</span>
              </div>
              <div className="space-y-1">
                <span className="text-royal/40 font-bold block uppercase tracking-wider text-[9px]">{text.seasonLabel}</span>
                <span className="text-royal font-bold text-sm">{bestTimeStr}</span>
              </div>
            </div>
          </Reveal>

          {/* Highlights checklist (Right Column) */}
          <Reveal className="lg:col-span-5 text-left border-l border-gold/15 pl-8 lg:pl-12 space-y-6">
            <h3 className="font-serif text-xl font-bold text-royal">
              {text.whyVisitTitle} {stateName}?
            </h3>
            {(!state.travelTips || state.travelTips.length === 0) ? (
              <p className="text-xs text-royal/40 italic">Cultural highlights documentation details are being loaded.</p>
            ) : (
              <ul className="space-y-6">
                {state.travelTips.map((reason: any, idx: number) => {
                  let reasonTitle = "";
                  let reasonDesc = "";

                  if (reason && typeof reason === "object") {
                    if (reason.title) {
                      reasonTitle = reason.title[lang] || reason.title.en || "";
                      reasonDesc = reason.desc?.[lang] || reason.desc?.en || "";
                    } else {
                      reasonTitle = reason[lang] || reason.en || "";
                    }
                  } else if (typeof reason === "string") {
                    reasonTitle = reason;
                  }

                  return (
                    <li key={idx} className="flex items-start space-x-4 text-xs text-royal/70 leading-relaxed">
                      <span className="font-serif text-sm font-bold text-gold shrink-0">0{idx + 1}.</span>
                      <div className="space-y-1">
                        <span className="font-bold text-royal block">{reasonTitle}</span>
                        {reasonDesc && <span className="font-light block text-royal/60">{reasonDesc}</span>}
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </Reveal>

        </div>
      </section>

      {/* Cities Catalog */}
      {state.cities && state.cities.length > 0 && (
        <section className="py-24 bg-white border-y border-beige/45 relative z-10 shadow-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-left mb-16">
              <span className="text-[9px] font-bold tracking-widest text-gold uppercase block mb-2">
                Landmarks Directory
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-royal">
                {text.destinationsTitle}
              </h2>
              <div className="w-16 h-[2px] bg-gold mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {state.cities.map((dest: any) => {
                const destTitle = dest.title[lang] || dest.title.en;
                const destTagline = dest.tagline[lang] || dest.tagline.en;
                const destBestTime = dest.bestTime?.[lang] || dest.bestTime?.en;
                const attrCount = dest.attractions?.length || 0;

                return (
                  <div 
                    key={dest.slug}
                    className="bg-white border border-beige/45 rounded-3xl overflow-hidden group hover:shadow-xl hover:border-gold/30 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Polaroid card photo */}
                      <div className="h-64 overflow-hidden relative">
                        <img 
                          src={dest.image} 
                          alt={destTitle} 
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1200ms]"
                          loading="lazy"
                        />
                        <div className="absolute bottom-4 left-4 bg-royal/95 text-gold text-[9px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-lg border border-gold/15">
                          {attrCount} {attrCount === 1 ? "Attraction" : "Attractions"}
                        </div>
                      </div>
                      
                      {/* Info body */}
                      <div className="p-6 text-left space-y-3">
                        <h3 className="font-serif text-xl font-bold text-royal group-hover:text-gold transition-colors duration-300">
                          {destTitle}
                        </h3>
                        <p className="text-xs text-royal/60 leading-relaxed font-light line-clamp-3">
                          {destTagline}
                        </p>
                        
                        {destBestTime && (
                          <div className="flex items-center gap-1.5 text-[9px] font-bold text-royal/40 uppercase tracking-widest pt-2">
                            <Calendar size={12} className="text-gold" />
                            <span>Best: {destBestTime}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* CTA button */}
                    <div className="p-6 pt-0 text-left">
                      <Link
                        href={`/${locale}/destinations/${stateSlug}/${dest.slug}`}
                        className="w-full block text-center py-3 border border-royal/20 hover:border-royal hover:bg-royal hover:text-white text-royal text-[10px] tracking-wider uppercase font-bold transition-all rounded-xl cursor-pointer"
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

      {/* Suggested Packages */}
      {relatedPackages.length > 0 && (
        <section className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-left mb-16">
              <span className="text-[9px] font-bold tracking-widest text-gold uppercase block mb-2">
                Featured Routes
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-royal">
                {text.toursTitle}
              </h2>
              <div className="w-16 h-[2px] bg-gold mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {relatedPackages.map((pkg: any) => {
                const pkgTitle = pkg.title[lang] || pkg.title.en;
                const pkgTagline = pkg.tagline[lang] || pkg.tagline.en;

                return (
                  <div 
                    key={pkg.slug}
                    className="bg-white border border-beige/45 rounded-3xl overflow-hidden group hover:shadow-xl hover:border-gold/30 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-56 overflow-hidden relative">
                        <img 
                          src={pkg.image} 
                          alt={pkgTitle} 
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1200ms]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-royal/40 to-transparent pointer-events-none" />
                      </div>
                      <div className="p-6 text-left space-y-3">
                        <div className="flex justify-between items-center text-[9px] font-bold text-gold uppercase tracking-wider">
                          <span className="flex items-center gap-1"><Clock size={11} /> {pkg.durationDays} Days</span>
                          <span className="bg-royal/5 text-royal px-2.5 py-0.5 rounded border border-beige/40">{pkg.category}</span>
                        </div>
                        <h3 className="font-serif text-base font-bold text-royal group-hover:text-gold transition-colors duration-300 leading-snug line-clamp-1">
                          {pkgTitle}
                        </h3>
                        <p className="text-xs text-royal/60 leading-relaxed font-light line-clamp-2">
                          {pkgTagline}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0 text-left">
                      <Link
                        href={`/${locale}/packages#${pkg.slug}`}
                        className="w-full block text-center py-3 bg-royal hover:bg-gold hover:text-royal text-white text-[10px] tracking-wider uppercase font-bold transition-all rounded-xl cursor-pointer"
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

      {/* Plan Trip Call to Action Form */}
      <section className="py-24 bg-royal text-white relative overflow-hidden border-t border-gold/15">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#C5A862_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-[9px] font-bold tracking-widest uppercase text-gold block">
              Bespoke Travel Designers
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
              Design your voyage <br />
              <span className="italic font-light text-gold">through {stateName}.</span>
            </h2>
            <p className="text-xs md:text-sm text-white/70 leading-relaxed font-light max-w-xl">
              Speak to a regional travel planner to build a custom private tour matching your personal interests, pacing, and hotel standards.
            </p>
          </div>

          <div className="lg:col-span-5">
            <SidebarInquiryForm locale={locale} defaultDestination={stateName} />
          </div>

        </div>
      </section>

    </div>
  );
}
