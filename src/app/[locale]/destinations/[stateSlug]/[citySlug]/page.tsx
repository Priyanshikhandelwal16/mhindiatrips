import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getStateBySlugAction } from "@/app/actions/queries";
import InquiryForm from "@/components/common/InquiryForm";
import { Calendar, Landmark, Sparkles, MapPin, Compass, Clock, Info, ArrowRight } from "lucide-react";

interface CityPageProps {
  params: Promise<{ locale: string; stateSlug: string; citySlug: string }>;
}

export default async function CityDetailPage({ params }: CityPageProps) {
  const { locale, stateSlug, citySlug } = await params;
  const state = await getStateBySlugAction(stateSlug) as any;
  if (!state) notFound();
  const city = state.cities?.find((c: any) => c.slug === citySlug);
  if (!city) notFound();

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      
      {/* SECTION 1: Editorial Header Banner */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={city.image} alt={city.title?.[locale] || city.title?.en} className="absolute inset-0 w-full h-full object-cover object-[center_35%] animate-kenburns" loading="eager" />
        <div className="absolute inset-0 bg-black/45" />
        
        <div className="relative z-10 text-center text-white space-y-6 px-6 mt-20 max-w-4xl">
          <span className="bg-gold text-royal text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full inline-block">
            {state.title?.[locale] || state.title?.en} Exploration
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white">
            {city.title?.[locale] || city.title?.en}
          </h1>
          <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            {city.tagline?.[locale] || city.tagline?.en}
          </p>
        </div>
      </section>

      {/* SECTION 2: Dynamic Column Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Core content details */}
        <div className="lg:col-span-2 space-y-12">
          
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-gold flex items-center gap-1.5">
              <Compass className="w-4 h-4" />
              <span>OVERVIEW</span>
            </span>
            <h2 className="text-2xl font-serif font-bold text-royal">
              The Charm of {city.title?.[locale] || city.title?.en}
            </h2>
            <p className="text-sm text-foreground/60 leading-relaxed font-light">
              {city.overview?.[locale] || city.overview?.en}
            </p>
          </div>

          {/* Timeline details */}
          {city.suggestedItinerary && (
            <div className="space-y-6 pt-10 border-t border-gold/10">
              <h3 className="text-lg font-serif font-bold text-royal flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gold" />
                <span>{locale === "es" ? "Itinerario Recomendado" : locale === "pt" ? "Itinerário Recomendado" : "Bespoke Suggestions"}</span>
              </h3>
              <div className="relative border-l border-gold/30 ml-3.5 pl-6 py-1">
                <div className="relative">
                  <span className="absolute -left-[30px] top-1 w-3 h-3 rounded-full bg-gold border border-[#FAF8F5]" />
                  <h4 className="text-xs font-bold text-royal uppercase tracking-wider">Suggested Exploration Plan</h4>
                  <p className="text-xs text-foreground/60 mt-3 leading-relaxed bg-white border border-gold/10 p-6 rounded-2xl font-light shadow-sm">
                    {city.suggestedItinerary?.[locale] || city.suggestedItinerary?.en}
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Postcard essentials box */}
        <div className="bg-white border border-gold/25 p-8 rounded-3xl h-fit space-y-6 shadow-xl shadow-royal/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[4px] bg-gold" />
          <h3 className="text-[10px] uppercase tracking-[0.25em] font-black text-royal border-b border-gold/10 pb-4">
            Travel Essentials
          </h3>
          <div className="space-y-5 text-xs">
            <div>
              <span className="text-[9px] uppercase tracking-wider font-bold text-foreground/40 block mb-1">Optimal Season</span>
              <span className="text-foreground/75 font-semibold">{city.bestTime?.[locale] || city.bestTime?.en}</span>
            </div>
            {city.localFood && (
              <div className="pt-4 border-t border-gold/10">
                <span className="text-[9px] uppercase tracking-wider font-bold text-foreground/40 block mb-1">Local Culinary Guide</span>
                <span className="text-foreground/75 font-light leading-relaxed block">{city.localFood?.[locale] || city.localFood?.en}</span>
              </div>
            )}
            {city.shopping && (
              <div className="pt-4 border-t border-gold/10">
                <span className="text-[9px] uppercase tracking-wider font-bold text-foreground/40 block mb-1">Signature Handlooms & Shopping</span>
                <span className="text-foreground/75 font-light leading-relaxed block">{city.shopping?.[locale] || city.shopping?.en}</span>
              </div>
            )}
          </div>
        </div>

      </section>

      {/* SECTION 3: Sights Grid */}
      {city.attractions?.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-gold/10 space-y-12">
          <div className="text-center space-y-3 max-w-lg mx-auto">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold block">SIGNATURE LANDMARKS</span>
            <h2 className="text-3xl font-serif font-bold text-royal tracking-tight">Key Monument Diaries</h2>
            <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {city.attractions.map((att: any, idx: number) => (
              <Link key={att.slug || idx} href={`/${locale}/destinations/${stateSlug}/${citySlug}/${att.slug}`} className="group block">
                <div className="bg-white border border-gold/10 rounded-2xl overflow-hidden flex flex-col md:flex-row h-72 shadow-md transition-transform duration-500 hover:-translate-y-1 hover:border-gold/25">
                  <div className="md:w-5/12 h-48 md:h-full shrink-0 overflow-hidden relative">
                    <img src={att.image} alt={att.name?.en} loading="lazy" className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105" />
                  </div>
                  <div className="md:w-7/12 p-6 flex flex-col justify-between bg-white">
                    <div className="space-y-2">
                      <h3 className="text-base font-serif font-bold text-royal group-hover:text-gold transition-colors leading-snug">{att.name?.[locale] || att.name?.en}</h3>
                      <p className="text-sm text-foreground/55 line-clamp-3 leading-relaxed font-light">{att.desc?.[locale] || att.desc?.en}</p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold flex items-center gap-1.5 mt-2 group-hover:text-royal transition-colors">
                      <span>View Monument details</span><Landmark className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 4: Inquire Now */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center space-y-6 border-t border-gold/10">
        <h2 className="text-2xl md:text-3xl font-bold text-royal">Interested in {city.title?.[locale] || city.title?.en}?</h2>
        <p className="text-sm text-foreground/50 font-light leading-relaxed max-w-md mx-auto">Let our luxury destination designers craft the perfect custom itinerary for you.</p>
        <Link href={`/${locale}/contact`} className="bg-gold hover:bg-gold-light text-royal text-xs font-bold uppercase tracking-widest px-8 py-4.5 rounded-full inline-flex items-center gap-1.5 shadow-md">
          <span>Inquire About City</span>
          <ArrowRight className="w-4 h-4 text-royal" />
        </Link>
      </section>
    </div>
  );
}
