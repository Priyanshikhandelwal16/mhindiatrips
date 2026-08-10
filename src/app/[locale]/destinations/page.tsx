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
  const regions = ["North", "South", "East", "West", "Central", "North East", "Islands"];

  return (
    <div className="bg-ivory-100 min-h-screen font-sans text-charcoal-800">
      {/* Hero Banner */}
      <section className="relative h-[65vh] min-h-[480px] flex items-center justify-center overflow-hidden pt-28 md:pt-36">
        <img 
          src="/images/rajasthan_fort_sunset.png" 
          alt="India Destinations" 
          className="absolute inset-0 w-full h-full object-cover object-[center_35%] filter brightness-[0.75] contrast-[1.05]" 
          loading="eager" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/65 via-transparent to-charcoal-900/40" />
        <div className="relative z-10 text-center text-ivory-100 space-y-6 px-6 max-w-4xl">
          <span className="bg-charcoal-900/80 border border-sand-300/30 text-sand-300 text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full inline-block">
            {text.sub}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-normal tracking-tight leading-tight text-white">
            {text.title}
          </h1>
          <p className="text-sm md:text-base text-ivory-100/90 max-w-2xl mx-auto font-light leading-relaxed">
            {text.desc}
          </p>
        </div>
      </section>

      {/* Regions */}
      <div className="editorial-container py-24 space-y-24">
        {regions.map((reg) => {
          const regionStates = states.filter((s: any) => s.region?.toLowerCase() === reg.toLowerCase());
          if (regionStates.length === 0) return null;
          return (
            <div key={reg} className="space-y-12" id={reg.toLowerCase()}>
              <div className="flex items-center gap-3 border-b border-sand-300 pb-4">
                <Layers className="w-5 h-5 text-sand-500" />
                <h2 className="text-sm font-sans font-bold tracking-widest uppercase text-sand-500">{reg} India</h2>
                <span className="text-[10px] text-charcoal-800/40 ml-auto font-bold uppercase tracking-widest">{regionStates.length} Destinations</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {regionStates.map((state: any) => (
                  <Link key={state.slug} href={`/${locale}/destinations/${state.slug}`} className="group block h-full">
                    <div className="bg-white border border-sand-300/40 rounded-[2rem] overflow-hidden shadow-md flex flex-col h-full transition-all duration-500 hover:-translate-y-2.5 hover:border-sand-400 hover:shadow-xl">
                      <div className="h-72 overflow-hidden relative shrink-0">
                        <img 
                          src={state.image} 
                          alt={state.title[locale as "en"|"es"|"pt"] || state.title.en} 
                          loading="lazy" 
                          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-65" />
                        <div className="absolute top-5 left-5 bg-charcoal-900 text-sand-400 text-[9px] uppercase tracking-widest font-semibold px-3.5 py-1.5 rounded-full border border-sand-300/20">
                          {state.region === "Islands" ? "Islands" : `${state.region}ern`}
                        </div>
                      </div>
                      <div className="p-8 flex flex-col flex-grow justify-between bg-white">
                        <div className="space-y-3">
                          <h3 className="text-xl md:text-2xl font-serif font-bold text-charcoal-800 group-hover:text-sand-500 transition-colors leading-snug">
                            {state.title[locale as "en"|"es"|"pt"] || state.title.en}
                          </h3>
                          <p className="text-xs md:text-sm text-charcoal-800/60 leading-relaxed line-clamp-3 font-light">
                            {state.description?.[locale as "en"|"es"|"pt"] || state.description?.en || ""}
                          </p>
                        </div>
                        <div className="pt-4 border-t border-sand-300/35 mt-6 flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-widest text-sand-500 group-hover:text-charcoal-800 transition-colors flex items-center gap-1.5">
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
