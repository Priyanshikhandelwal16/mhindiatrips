import React from "react";
import Link from "next/link";
import { getStatesAction } from "@/app/actions/queries";
import { MapPin, ArrowRight, Layers } from "lucide-react";

interface DestinationsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function DestinationsPage({ params }: DestinationsPageProps) {
  const { locale } = await params;
  const states = await getStatesAction();

  const t: Record<string, any> = {
    en: { sub: "Explore India", title: "Destinations by Region", desc: "Each state is a gateway to a unique cultural world. Discover their heritage, cuisine, and handcrafted travel experiences.", cta: "Explore Guide" },
    es: { sub: "Explorar India", title: "Destinos por Región", desc: "Cada estado es una puerta a un mundo cultural único. Descubra su patrimonio, gastronomía y experiencias de viaje.", cta: "Explorar Guía" },
    pt: { sub: "Explorar Índia", title: "Destinos por Região", desc: "Cada estado é uma porta para um mundo cultural único. Descubra seu patrimônio, gastronomia e experiências de viagem.", cta: "Explorar Guia" }
  };
  const text = t[locale] || t.en;
  const regions = ["North", "South", "East", "West", "Central", "Islands"];

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      {/* Hero Banner */}
      <section className="relative h-[75vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img src="/images/taj_mahal_sunrise.png" alt="India Destinations" className="absolute inset-0 w-full h-full object-cover animate-kenburns" loading="eager" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white space-y-6 px-6 mt-20 max-w-5xl">
          <span className="bg-gold text-royal text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full inline-block">{text.sub}</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none text-white">{text.title}</h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto font-light leading-relaxed">{text.desc}</p>
        </div>
      </section>

      {/* Regions */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
        {regions.map((reg) => {
          const regionStates = states.filter((s: any) => s.region?.toLowerCase() === reg.toLowerCase());
          if (regionStates.length === 0) return null;
          return (
            <div key={reg} className="space-y-12">
              <div className="flex items-center gap-3 border-b border-gold/15 pb-4">
                <Layers className="w-5 h-5 text-gold" />
                <h2 className="text-sm font-bold tracking-wider uppercase text-gold">{reg} India</h2>
                <span className="text-[10px] text-foreground/40 ml-auto font-bold uppercase tracking-wider">{regionStates.length} Destinations</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {regionStates.map((state: any) => (
                  <Link key={state.slug} href={`/${locale}/destinations/${state.slug}`} className="group block h-full">
                    <div className="bg-white border border-gold/10 rounded-[2rem] overflow-hidden shadow-lg flex flex-col h-full transition-all duration-500 hover:-translate-y-3 hover:border-gold/25 hover:shadow-2xl">
                      <div className="h-60 overflow-hidden relative shrink-0">
                        <img src={state.image} alt={state.title[locale as "en"|"es"|"pt"] || state.title.en} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute top-5 left-5 bg-royal text-gold text-[9px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full shadow-sm">{state.region}</div>
                      </div>
                      <div className="p-8 flex flex-col flex-grow justify-between bg-white">
                        <div className="space-y-3">
                          <h3 className="text-xl md:text-2xl font-bold text-royal group-hover:text-gold transition-colors leading-snug">
                            {state.title[locale as "en"|"es"|"pt"] || state.title.en}
                          </h3>
                          <p className="text-sm text-foreground/50 leading-relaxed line-clamp-3 font-light">
                            {state.description?.[locale as "en"|"es"|"pt"] || state.description?.en || ""}
                          </p>
                        </div>
                        <div className="pt-4 border-t border-gold/10 mt-6 flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-gold group-hover:text-royal transition-colors flex items-center gap-1.5">
                            <span>{text.cta}</span>
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
