import React from "react";
import { notFound } from "next/navigation";
import { getStateBySlugAction } from "@/app/actions/queries";
import Link from "next/link";
import { Landmark, Clock, Info, BookOpen } from "lucide-react";

interface AttractionPageProps {
  params: Promise<{ locale: string; stateSlug: string; citySlug: string; attractionSlug: string }>;
}

export default async function AttractionDetailPage({ params }: AttractionPageProps) {
  const { locale, stateSlug, citySlug, attractionSlug } = await params;
  const state = await getStateBySlugAction(stateSlug) as any;
  if (!state) notFound();
  const city = state.cities?.find((c: any) => c.slug === citySlug);
  if (!city) notFound();
  const attraction = city.attractions?.find((a: any) => a.slug === attractionSlug);
  if (!attraction) notFound();

  const lang = (locale === "es" || locale === "pt") ? locale : "en";

  const attName = attraction.name?.[lang] || attraction.name?.en;
  const attDesc = attraction.desc?.[lang] || attraction.desc?.en;
  const cityTitle = city.title?.[lang] || city.title?.en;

  return (
    <div className="bg-ivory-100 min-h-screen font-sans text-charcoal-800">
      
      {/* SECTION 1: Monument Title Banner */}
      <section className="relative h-[65vh] min-h-[480px] flex items-center justify-center overflow-hidden pt-28 md:pt-36">
        <img 
          src={attraction.image} 
          alt={attName} 
          className="absolute inset-0 w-full h-full object-cover object-[center_35%] filter brightness-[0.80] contrast-[1.02]" 
          loading="eager" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15" />
        
        <div className="relative z-10 text-center text-ivory-100 space-y-6 px-6 max-w-4xl">
          <span className="bg-charcoal-900/80 border border-sand-300/30 text-sand-300 text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full inline-block">
            {cityTitle} Heritage Site
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-normal tracking-tight leading-tight text-white">
            {attName}
          </h1>
        </div>
      </section>

      {/* SECTION 2: Split columns details */}
      <section className="editorial-container py-24 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Left Column: Descriptive sections */}
        <div className="lg:col-span-2 space-y-12 text-left">
          
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-widest font-bold text-sand-500 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>{locale === "es" ? "HISTORIA Y ANÁLISIS" : locale === "pt" ? "HISTÓRIA E ANÁLISE" : "Historical Insight"}</span>
            </span>
            <h2 className="text-2xl md:text-4xl font-serif font-normal text-charcoal-800">
              Heritage Introduction
            </h2>
            <p className="text-sm text-charcoal-800/70 leading-relaxed font-sans font-light">
              {attDesc}
            </p>
          </div>

          {attraction.history && (
            <div className="space-y-4 pt-10 border-t border-sand-300">
              <h3 className="text-lg font-serif font-bold text-charcoal-800">Legacy & Timeline</h3>
              <p className="text-sm text-charcoal-800/70 leading-relaxed font-sans font-light">
                {attraction.history?.[lang] || attraction.history?.en}
              </p>
            </div>
          )}

          {attraction.architecture && (
            <div className="space-y-4 pt-10 border-t border-sand-300">
              <h3 className="text-lg font-serif font-bold text-charcoal-800">Architectural Marvel</h3>
              <p className="text-sm text-charcoal-800/70 leading-relaxed font-sans font-light">
                {attraction.architecture?.[lang] || attraction.architecture?.en}
              </p>
            </div>
          )}

        </div>

        {/* Right Column: Postcard Essentials Box */}
        <div className="bg-white border border-sand-300 p-8 h-fit space-y-6 shadow-sm relative overflow-hidden text-left">
          <div className="absolute top-0 left-0 w-full h-[4px] bg-sand-400" />
          <h3 className="text-[10px] uppercase tracking-widest font-bold text-charcoal-800 border-b border-sand-200 pb-4">
            Visitor Dossier
          </h3>
          <div className="space-y-6 text-xs">
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-sand-500 shrink-0 mt-0.5" />
              <div>
                <span className="text-[9px] uppercase tracking-wider font-bold text-charcoal-800/40 block mb-1">Gate Hours</span>
                <span className="text-charcoal-800/75 font-semibold leading-relaxed block">
                  {attraction.timings?.[lang] || attraction.timings?.en}
                </span>
              </div>
            </div>
            {attraction.info && (
              <div className="flex items-start gap-3 pt-5 border-t border-sand-200">
                <Info className="w-4 h-4 text-sand-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[9px] uppercase tracking-wider font-bold text-charcoal-800/40 block mb-1">Advisor Tip</span>
                  <span className="text-charcoal-800/75 font-light leading-relaxed block">
                    {attraction.info?.[lang] || attraction.info?.en}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

      </section>

      {/* SECTION 3: Book Travel */}
      <section className="editorial-container py-20 text-center space-y-6 border-t border-sand-300">
        <h2 className="text-2xl md:text-3xl font-serif font-normal text-charcoal-800">
          Interested in {attName}?
        </h2>
        <p className="text-xs md:text-sm text-charcoal-800/50 font-sans font-light leading-relaxed max-w-md mx-auto">
          Let our luxury destination designers craft the perfect custom itinerary for you.
        </p>
        <Link 
          href={`/${locale}/contact`} 
          className="magnetic-btn"
        >
          {locale === "es" ? "Contactar" : locale === "pt" ? "Contatar" : "Plan Your Journey"}
        </Link>
      </section>
      
    </div>
  );
}
