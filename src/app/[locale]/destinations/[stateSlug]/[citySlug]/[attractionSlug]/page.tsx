import React from "react";
import { notFound } from "next/navigation";
import { getStateBySlugAction } from "@/app/actions/queries";
import InquiryForm from "@/components/common/InquiryForm";
import Link from "next/link";
import { Landmark, Clock, Info, BookOpen, ArrowRight } from "lucide-react";

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

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      
      {/* SECTION 1: Monument Title Banner */}
      <section className="relative h-[78vh] min-h-[540px] flex items-center justify-center overflow-hidden pt-28 md:pt-36">
        <img src={attraction.image} alt={attraction.name?.[locale] || attraction.name?.en} className="absolute inset-0 w-full h-full object-cover object-[center_35%] animate-kenburns" loading="eager" />
        <div className="absolute inset-0 bg-black/45" />
        
        <div className="relative z-10 text-center text-white space-y-6 px-6 max-w-4xl">
          <span className="bg-gold text-royal text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full inline-block">
            {city.title?.[locale] || city.title?.en} Heritage Site
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white">
            {attraction.name?.[locale] || attraction.name?.en}
          </h1>
        </div>
      </section>

      {/* SECTION 2: Split columns details */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Left Column: Descriptive sections */}
        <div className="lg:col-span-2 space-y-12">
          
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-gold flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>{locale === "es" ? "HISTORIA Y ANÁLISIS" : locale === "pt" ? "HISTÓRIA E ANÁLISE" : "Historical Insight"}</span>
            </span>
            <h2 className="text-2xl font-serif font-bold text-royal">Heritage Introduction</h2>
            <p className="text-xs md:text-sm text-foreground/60 leading-relaxed font-light">{attraction.desc?.[locale] || attraction.desc?.en}</p>
          </div>

          {attraction.history && (
            <div className="space-y-4 pt-10 border-t border-gold/10">
              <h3 className="text-xl font-serif font-bold text-royal">Legacy & Timeline</h3>
              <p className="text-xs md:text-sm text-foreground/60 leading-relaxed font-light">{attraction.history?.[locale] || attraction.history?.en}</p>
            </div>
          )}

          {attraction.architecture && (
            <div className="space-y-4 pt-10 border-t border-gold/10">
              <h3 className="text-xl font-serif font-bold text-royal">Architectural Marvel</h3>
              <p className="text-xs md:text-sm text-foreground/60 leading-relaxed font-light">{attraction.architecture?.[locale] || attraction.architecture?.en}</p>
            </div>
          )}

        </div>

        {/* Right Column: Postcard Essentials Box */}
        <div className="bg-white border border-gold/25 p-8 rounded-3xl h-fit space-y-6 shadow-xl shadow-royal/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[4px] bg-gold" />
          <h3 className="text-[10px] uppercase tracking-[0.25em] font-black text-royal border-b border-gold/10 pb-4">Visitor Dossier</h3>
          <div className="space-y-6 text-xs">
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <span className="text-[9px] uppercase tracking-wider font-bold text-foreground/40 block mb-1">Gate Hours</span>
                <span className="text-foreground/75 font-semibold leading-relaxed block">{attraction.timings?.[locale] || attraction.timings?.en}</span>
              </div>
            </div>
            {attraction.info && (
              <div className="flex items-start gap-3 pt-5 border-t border-gold/10">
                <Info className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="text-[9px] uppercase tracking-wider font-bold text-foreground/40 block mb-1">Advisor Tip</span>
                  <span className="text-foreground/75 font-light leading-relaxed block">{attraction.info?.[locale] || attraction.info?.en}</span>
                </div>
              </div>
            )}
          </div>
        </div>

      </section>

      {/* SECTION 3: Book Travel */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center space-y-6 border-t border-gold/10">
        <h2 className="text-2xl md:text-3xl font-bold text-royal">Interested in {attraction.name?.[locale] || attraction.name?.en}?</h2>
        <p className="text-sm text-foreground/50 font-light leading-relaxed max-w-md mx-auto">Let our luxury destination designers craft the perfect custom itinerary for you.</p>
        <Link href={`/${locale}/contact`} className="bg-gold hover:bg-gold-light text-royal text-xs font-bold uppercase tracking-widest px-8 py-4.5 rounded-full inline-flex items-center gap-1.5 shadow-md">
          <span>Inquire About Monument</span>
          <ArrowRight className="w-4 h-4 text-royal" />
        </Link>
      </section>
    </div>
  );
}
