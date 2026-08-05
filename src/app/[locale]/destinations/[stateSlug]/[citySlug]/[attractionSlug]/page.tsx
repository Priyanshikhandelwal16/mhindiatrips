import React from "react";
import { notFound } from "next/navigation";
import { getStateBySlugAction } from "@/app/actions/queries";
import InquiryForm from "@/components/common/InquiryForm";
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

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[380px] flex items-center justify-center overflow-hidden">
        <img src={attraction.image} alt={attraction.name?.[locale] || attraction.name?.en} className="absolute inset-0 w-full h-full object-cover animate-kenburns" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/75" />
        <div className="relative z-10 text-center text-white space-y-4 px-6 mt-16 max-w-3xl">
          <span className="editorial-subheading block text-gold flex items-center justify-center gap-1.5 text-[10px] tracking-[0.2em] font-bold">
            <Landmark className="w-4 h-4" />{city.title?.en} Landmark
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-tight">{attraction.name?.[locale] || attraction.name?.en}</h1>
        </div>
      </div>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-10">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-wider font-bold text-gold flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{locale === "es" ? "SOBRE EL MONUMENTO" : locale === "pt" ? "SOBRE O MONUMENTO" : "Heritage Overview"}</span>
            </span>
            <h2 className="text-2xl font-serif font-bold text-royal">{locale === "es" ? "Sobre" : locale === "pt" ? "Sobre" : "Introduction"}</h2>
            <p className="text-sm text-foreground/60 leading-relaxed font-light">{attraction.desc?.[locale] || attraction.desc?.en}</p>
          </div>
          <div className="space-y-4 pt-8 border-t border-sand/65">
            <h3 className="text-xl font-serif font-bold text-royal">{locale === "es" ? "Historia" : locale === "pt" ? "História" : "Chronicle & Historical Context"}</h3>
            <p className="text-sm text-foreground/60 leading-relaxed font-light">{attraction.history?.[locale] || attraction.history?.en}</p>
          </div>
          <div className="space-y-4 pt-8 border-t border-sand/65">
            <h3 className="text-xl font-serif font-bold text-royal">{locale === "es" ? "Arquitectura" : locale === "pt" ? "Arquitetura" : "Architectural Marvels"}</h3>
            <p className="text-sm text-foreground/60 leading-relaxed font-light">{attraction.architecture?.[locale] || attraction.architecture?.en}</p>
          </div>
        </div>
        
        {/* Sidebar Info */}
        <div className="glass-panel border border-gold/15 p-8 rounded-3xl h-fit space-y-6 shadow-xl shadow-royal/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gold" />
          <h3 className="editorial-subheading border-b border-sand/70 pb-3 text-[10px] tracking-[0.2em] font-bold text-royal">Visitor Essentials</h3>
          <div className="space-y-5 text-sm">
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <span className="text-[9px] uppercase tracking-wider font-bold text-foreground/40 block mb-1">Visiting Hours</span>
                <span className="text-foreground/75 font-medium leading-relaxed block">{attraction.timings?.[locale] || attraction.timings?.en}</span>
              </div>
            </div>
            <div className="flex items-start gap-3 pt-5 border-t border-sand/40">
              <Info className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <span className="text-[9px] uppercase tracking-wider font-bold text-foreground/40 block mb-1">Key Advice & Tips</span>
                <span className="text-foreground/75 font-light leading-relaxed block">{attraction.info?.[locale] || attraction.info?.en}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-sand/50">
        <InquiryForm locale={locale} />
      </section>
    </div>
  );
}
