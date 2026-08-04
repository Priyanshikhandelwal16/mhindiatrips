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
      <div className="relative h-[45vh] min-h-[320px] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1920" alt="India Destinations" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#FAF8F5]" />
        <div className="relative z-10 text-center text-white space-y-4 px-6 mt-16">
          <span className="editorial-subheading block text-gold">{text.sub}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold">{text.title}</h1>
          <p className="text-white/75 max-w-xl mx-auto text-sm leading-relaxed">{text.desc}</p>
        </div>
      </div>

      {/* Regions */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {regions.map((reg) => {
          const regionStates = states.filter((s: any) => s.region?.toLowerCase() === reg.toLowerCase());
          if (regionStates.length === 0) return null;
          return (
            <div key={reg} className="space-y-8">
              <div className="flex items-center gap-3 border-b border-sand pb-4">
                <Layers className="w-5 h-5 text-gold" />
                <h2 className="text-lg font-semibold tracking-wider uppercase text-gold">{reg} India</h2>
                <span className="text-xs text-foreground/40 ml-auto">{regionStates.length} {locale === "es" ? "destinos" : locale === "pt" ? "destinos" : "destinations"}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {regionStates.map((state: any) => (
                  <Link key={state.slug} href={`/${locale}/destinations/${state.slug}`} className="group block">
                    <div className="card-elevated overflow-hidden h-[400px] flex flex-col">
                      <div className="h-52 overflow-hidden relative shrink-0">
                        <img src={state.image} alt={state.title[locale as "en"|"es"|"pt"] || state.title.en} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105" />
                        <div className="absolute top-4 left-4">
                          <span className="badge-gold">{state.region}</span>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow justify-between">
                        <div className="space-y-2">
                          <h3 className="text-xl font-serif font-bold text-royal group-hover:text-gold transition-colors">
                            {state.title[locale as "en"|"es"|"pt"] || state.title.en}
                          </h3>
                          <p className="text-xs text-foreground/60 leading-relaxed line-clamp-3">
                            {state.description?.[locale as "en"|"es"|"pt"] || state.description?.en || ""}
                          </p>
                        </div>
                        <div className="pt-4 border-t border-sand/50 mt-4">
                          <span className="text-xs font-semibold uppercase tracking-wider text-forest group-hover:text-gold flex items-center gap-1.5 transition-colors">
                            <span>{text.cta}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
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
