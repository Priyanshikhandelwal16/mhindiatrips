import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getStateBySlugAction } from "@/app/actions/queries";
import { Calendar, Landmark, Compass, Clock, ArrowRight } from "lucide-react";

interface CityPageProps {
  params: Promise<{ locale: string; stateSlug: string; citySlug: string }>;
}

export default async function CityDetailPage({ params }: CityPageProps) {
  const { locale, stateSlug, citySlug } = await params;
  const state = await getStateBySlugAction(stateSlug) as any;
  if (!state) notFound();
  const city = state.cities?.find((c: any) => c.slug === citySlug);
  if (!city) notFound();

  const lang = (locale === "es" || locale === "pt") ? locale : "en";

  const cityTitle = city.title?.[lang] || city.title?.en;
  const cityTagline = city.tagline?.[lang] || city.tagline?.en;
  const cityOverview = city.overview?.[lang] || city.overview?.en;
  const stateTitle = state.title?.[lang] || state.title?.en;

  return (
    <div className="bg-ivory-100 min-h-screen font-sans text-charcoal-800">
      
      {/* SECTION 1: Banner Header */}
      <section className="relative h-[65vh] min-h-[480px] flex items-center justify-center overflow-hidden pt-28 md:pt-36">
        <img 
          src={city.image} 
          alt={cityTitle} 
          className="absolute inset-0 w-full h-full object-cover object-[center_35%] filter brightness-[0.70] contrast-[1.05]" 
          loading="eager" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/65 via-transparent to-charcoal-900/40" />
        
        <div className="relative z-10 text-center text-ivory-100 space-y-6 px-6 max-w-4xl">
          <span className="bg-charcoal-900/80 border border-sand-300/30 text-sand-300 text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full inline-block">
            {stateTitle} Exploration
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-normal tracking-tight leading-tight text-white">
            {cityTitle}
          </h1>
          <p className="text-sm md:text-base text-ivory-100/90 max-w-2xl mx-auto font-light leading-relaxed">
            {cityTagline}
          </p>
        </div>
      </section>

      {/* SECTION 2: Dynamic Column Grid */}
      <section className="editorial-container py-24 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Core content details */}
        <div className="lg:col-span-2 space-y-12 text-left">
          
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-widest font-bold text-sand-500 flex items-center gap-1.5">
              <Compass className="w-4 h-4" />
              <span>OVERVIEW</span>
            </span>
            <h2 className="text-2xl md:text-4xl font-serif font-normal text-charcoal-800">
              The Charm of <span className="italic">{cityTitle}</span>
            </h2>
            <p className="text-sm text-charcoal-800/70 leading-relaxed font-sans font-light">
              {cityOverview}
            </p>
          </div>

          {/* Suggested Itinerary */}
          {city.suggestedItinerary && (
            <div className="space-y-6 pt-10 border-t border-sand-300">
              <h3 className="text-lg font-serif font-bold text-charcoal-800 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-sand-500" />
                <span>{locale === "es" ? "Itinerario Recomendado" : locale === "pt" ? "Itinerário Recomendado" : "Bespoke Suggestions"}</span>
              </h3>
              <div className="relative border-l border-sand-400 ml-3.5 pl-6 py-1">
                <div className="relative">
                  <span className="absolute -left-[29px] top-1 w-2.5 h-2.5 rounded-full bg-sand-400 border border-ivory-100" />
                  <h4 className="text-xs font-bold text-charcoal-800 uppercase tracking-wider">Suggested Exploration Plan</h4>
                  <p className="text-xs text-charcoal-800/70 mt-3 leading-relaxed bg-white border border-sand-300/40 p-6 font-sans font-light shadow-sm">
                    {city.suggestedItinerary?.[lang] || city.suggestedItinerary?.en}
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Sidebar travel essentials */}
        <div className="bg-white border border-sand-300 p-8 h-fit space-y-6 shadow-sm relative overflow-hidden text-left">
          <div className="absolute top-0 left-0 w-full h-[4px] bg-sand-400" />
          <h3 className="text-[10px] uppercase tracking-widest font-bold text-charcoal-800 border-b border-sand-200 pb-4">
            Travel Essentials
          </h3>
          <div className="space-y-5 text-xs">
            <div>
              <span className="text-[9px] uppercase tracking-wider font-bold text-charcoal-800/40 block mb-1">Optimal Season</span>
              <span className="text-charcoal-800/75 font-semibold">{city.bestTime?.[lang] || city.bestTime?.en}</span>
            </div>
            {city.localFood && (
              <div className="pt-4 border-t border-sand-200">
                <span className="text-[9px] uppercase tracking-wider font-bold text-charcoal-800/40 block mb-1">Local Culinary Guide</span>
                <span className="text-charcoal-800/75 font-light leading-relaxed block">{city.localFood?.[lang] || city.localFood?.en}</span>
              </div>
            )}
            {city.shopping && (
              <div className="pt-4 border-t border-sand-200">
                <span className="text-[9px] uppercase tracking-wider font-bold text-charcoal-800/40 block mb-1">Handlooms & Shopping</span>
                <span className="text-charcoal-800/75 font-light leading-relaxed block">{city.shopping?.[lang] || city.shopping?.en}</span>
              </div>
            )}
          </div>
        </div>

      </section>

      {/* SECTION 3: Sights Grid */}
      {city.attractions?.length > 0 && (
        <section className="editorial-container py-20 border-t border-sand-300 space-y-12">
          <div className="text-center space-y-3 max-w-lg mx-auto">
            <span className="text-[10px] uppercase tracking-widest text-sand-500 font-bold block">SIGNATURE LANDMARKS</span>
            <h2 className="text-3xl font-serif font-normal text-charcoal-800 tracking-tight">Key Monument Diaries</h2>
            <div className="h-px w-20 bg-sand-300 mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {city.attractions.map((att: any, idx: number) => {
              const attName = att.name?.[lang] || att.name?.en;
              const attDesc = att.desc?.[lang] || att.desc?.en;

              return (
                <Link key={att.slug || idx} href={`/${locale}/destinations/${stateSlug}/${citySlug}/${att.slug}`} className="group block">
                  <div className="bg-white border border-sand-300/40 overflow-hidden flex flex-col md:flex-row h-72 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-sand-400">
                    <div className="md:w-5/12 h-48 md:h-full shrink-0 overflow-hidden relative">
                      <img 
                        src={att.image} 
                        alt={attName} 
                        loading="lazy" 
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-115" 
                      />
                    </div>
                    <div className="md:w-7/12 p-6 flex flex-col justify-between bg-white text-left">
                      <div className="space-y-2">
                        <h3 className="text-base font-serif font-bold text-charcoal-800 group-hover:text-sand-500 transition-colors leading-snug">
                          {attName}
                        </h3>
                        <p className="text-xs text-charcoal-800/60 line-clamp-3 leading-relaxed font-sans font-light">
                          {attDesc}
                        </p>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-sand-500 flex items-center gap-1.5 mt-2 group-hover:text-charcoal-800 transition-colors">
                        <span>View Details</span>
                        <Landmark className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* SECTION 4: Inquire Now */}
      <section className="editorial-container py-20 text-center space-y-6 border-t border-sand-300">
        <h2 className="text-2xl md:text-3xl font-serif font-normal text-charcoal-800">
          Interested in exploring {cityTitle}?
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
