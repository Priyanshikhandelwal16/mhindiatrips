import React from "react";
import { notFound } from "next/navigation";
import { getStateBySlugAction } from "@/app/actions/queries";
import InquiryForm from "@/components/common/InquiryForm";
import { Landmark, Clock, Info } from "lucide-react";

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
      <div className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img src={attraction.image} alt={attraction.name?.[locale] || attraction.name?.en} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#FAF8F5]" />
        <div className="relative z-10 text-center text-white space-y-4 px-6 mt-16">
          <span className="editorial-subheading block text-gold flex items-center justify-center gap-1.5">
            <Landmark className="w-4 h-4" />{city.title?.en} Landmark
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold">{attraction.name?.[locale] || attraction.name?.en}</h1>
        </div>
      </div>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-royal">{locale === "es" ? "Sobre" : locale === "pt" ? "Sobre" : "About"}</h2>
            <p className="text-sm text-foreground/65 leading-relaxed">{attraction.desc?.[locale] || attraction.desc?.en}</p>
          </div>
          <div className="space-y-4 pt-6 border-t border-sand">
            <h3 className="text-xl font-serif font-bold text-royal">{locale === "es" ? "Historia" : locale === "pt" ? "História" : "History"}</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">{attraction.history?.[locale] || attraction.history?.en}</p>
          </div>
          <div className="space-y-4 pt-6 border-t border-sand">
            <h3 className="text-xl font-serif font-bold text-royal">{locale === "es" ? "Arquitectura" : locale === "pt" ? "Arquitetura" : "Architecture"}</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">{attraction.architecture?.[locale] || attraction.architecture?.en}</p>
          </div>
        </div>
        <div className="card-elevated p-8 h-fit space-y-6">
          <h3 className="editorial-subheading border-b border-sand pb-3">Visitor Info</h3>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-foreground/40 block">Timings</span>
                <span className="text-foreground/70">{attraction.timings?.[locale] || attraction.timings?.en}</span>
              </div>
            </div>
            <div className="flex items-start gap-3 pt-3 border-t border-sand/50">
              <Info className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-foreground/40 block">Tips</span>
                <span className="text-foreground/70">{attraction.info?.[locale] || attraction.info?.en}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-sand">
        <InquiryForm locale={locale} />
      </section>
    </div>
  );
}
