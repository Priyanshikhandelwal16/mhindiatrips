import React from "react";
import Link from "next/link";
import { getStatesAction } from "@/app/actions/queries";
import { MapPin, ArrowRight, Layers, Globe, Compass } from "lucide-react";
import Reveal from "@/components/home/Reveal";

interface DestinationsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function DestinationsPage({ params }: DestinationsPageProps) {
  const { locale } = await params;
  const states = await getStatesAction();

  const t: Record<string, any> = {
    en: { sub: "Explore India", title: "Destinations by Region", desc: "Each state is a gateway to a unique cultural world. Discover their heritage, cuisine, and handcrafted travel experiences.", cta: "Explore Guide", totalLabel: "regions across India", ctaBtn: "Plan Custom Trip" },
    es: { sub: "Explorar India", title: "Destinos por Región", desc: "Cada estado es una puerta a un mundo cultural único. Descubra su patrimonio, gastronomía y experiencias de viaje.", cta: "Explorar Guía", totalLabel: "regiones en la India", ctaBtn: "Planificar Viaje" },
    pt: { sub: "Explorar Índia", title: "Destinos por Região", desc: "Cada estado é uma porta para um mundo cultural único. Descubra seu patrimônio, gastronomia e experiências de viagem.", cta: "Explorar Guia", totalLabel: "regiões na Índia", ctaBtn: "Planejar Viagem" }
  };
  const text = t[locale] || t.en;
  const regions = ["North", "South", "East", "West", "Central", "North East", "Islands"];

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">

      {/* Hero Banner - Full screen with animated entrance */}
      <section className="relative h-[75vh] min-h-[520px] flex items-center justify-center overflow-hidden pt-28 md:pt-36">
        <img 
          src="/images/rajasthan_fort_sunset.png" 
          alt="India Destinations" 
          className="absolute inset-0 w-full h-full object-cover object-[center_35%] filter brightness-[0.7] contrast-[1.05] animate-kenburns" 
          loading="eager" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0C]/70 via-transparent to-[#0B0D0C]/40" />
        <div className="relative z-10 text-center text-white space-y-7 px-6 max-w-4xl">
          <span className="bg-[#0B0D0C]/80 border border-[#C3AB85]/30 text-[#C3AB85] text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full inline-flex items-center gap-2 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            <Globe className="w-3.5 h-3.5" />
            {text.sub}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
            {text.title}
          </h1>
          <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
            {text.desc}
          </p>
          <div className="flex items-center justify-center gap-6 pt-4 animate-fade-in" style={{ animationDelay: "0.8s", animationFillMode: "both" }}>
            <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 bg-[#C3AB85] hover:bg-[#D5C49A] text-[#0B0D0C] font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
              <span>{text.ctaBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-white/50 text-xs font-light">
              {states.length}+ {text.totalLabel}
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-white/40 animate-fade-in" style={{ animationDelay: "1s", animationFillMode: "both" }}>
          <span className="text-[9px] uppercase tracking-[0.35em] mb-3 font-medium">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/50 to-transparent relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#C3AB85] to-transparent animate-pulse-gentle" />
          </div>
        </div>
      </section>

      {/* Quick region navigation pills */}
      <Reveal className="max-w-7xl mx-auto px-6 py-8 -mt-6 relative z-20">
        <div className="bg-white/90 backdrop-blur-xl border border-[#C3AB85]/15 rounded-2xl p-4 shadow-xl flex flex-wrap justify-center gap-3">
          {regions.map((reg) => {
            const count = states.filter((s: any) => s.region?.toLowerCase() === reg.toLowerCase()).length;
            if (count === 0) return null;
            return (
              <a key={reg} href={`#${reg.toLowerCase().replace(" ", "-")}`} className="px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider border border-[#C3AB85]/20 hover:bg-[#C3AB85] hover:text-[#0B0D0C] text-[#0B0D0C]/70 transition-all duration-300 hover:scale-105">
                {reg} <span className="text-[#C3AB85] ml-1">{count}</span>
              </a>
            );
          })}
        </div>
      </Reveal>

      {/* Regions */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-28">
        {regions.map((reg, regIdx) => {
          const regionStates = states.filter((s: any) => s.region?.toLowerCase() === reg.toLowerCase());
          if (regionStates.length === 0) return null;
          return (
            <div key={reg} className="space-y-12" id={reg.toLowerCase().replace(" ", "-")}>
              <Reveal className="flex items-center gap-4 border-b border-[#C3AB85]/20 pb-5">
                <div className="w-10 h-10 rounded-full bg-[#C3AB85]/10 flex items-center justify-center">
                  <Compass className="w-5 h-5 text-[#C3AB85]" />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-bold tracking-tight text-[#0B0D0C]">{reg} India</h2>
                  <span className="text-[10px] text-[#0B0D0C]/40 font-bold uppercase tracking-widest">{regionStates.length} Destinations</span>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regionStates.map((state: any, i: number) => (
                  <Reveal key={state.slug} delay={i * 100}>
                    <Link href={`/${locale}/destinations/${state.slug}`} className="group block h-full perspective-1000">
                      <div className="card-3d bg-white border border-[#C3AB85]/10 overflow-hidden shadow-md flex flex-col h-full transition-all duration-500 hover:shadow-2xl">
                        <div className="h-64 md:h-72 overflow-hidden relative shrink-0">
                          <img 
                            src={state.image} 
                            alt={state.title[locale as "en"|"es"|"pt"] || state.title.en} 
                            loading="lazy" 
                            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                          {/* 3D floating badge */}
                          <div className="absolute top-5 left-5 bg-[#0B0D0C]/85 backdrop-blur-sm text-[#C3AB85] text-[9px] uppercase tracking-widest font-bold px-3.5 py-1.5 rounded-full border border-[#C3AB85]/20 shadow-lg">
                            {state.region === "Islands" ? "Islands" : state.region === "North East" ? "Northeast" : `${state.region}ern`}
                          </div>
                          {/* Hover reveal arrow */}
                          <div className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-[#C3AB85] flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 shadow-xl">
                            <ArrowRight className="w-5 h-5 text-[#0B0D0C]" />
                          </div>
                          {/* Bottom overlay text on image */}
                          <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-xl md:text-2xl font-bold text-white leading-snug drop-shadow-lg">
                              {state.title[locale as "en"|"es"|"pt"] || state.title.en}
                            </h3>
                          </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow justify-between bg-white">
                          <div className="space-y-3">
                            <p className="text-xs md:text-sm text-[#0B0D0C]/55 leading-relaxed line-clamp-3 font-light">
                              {state.description?.[locale as "en"|"es"|"pt"] || state.description?.en || state.tagline?.[locale as "en"|"es"|"pt"] || state.tagline?.en || ""}
                            </p>
                          </div>
                          <div className="pt-5 border-t border-[#C3AB85]/10 mt-5 flex items-center justify-between">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#C3AB85] group-hover:text-[#0B0D0C] transition-colors flex items-center gap-1.5">
                              <span>{text.cta}</span>
                              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                            <MapPin className="w-4 h-4 text-[#0B0D0C]/20 group-hover:text-[#C3AB85] transition-colors" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <section className="bg-[#0B0D0C] text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#C3AB85_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <Reveal className="relative z-10 max-w-2xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            {locale === "es" ? "¿No puede decidir? Nosotros le ayudamos." : locale === "pt" ? "Não consegue decidir? Nós ajudamos." : "Can't Decide? We'll Help You Choose."}
          </h2>
          <p className="text-sm text-white/50 font-light leading-relaxed max-w-md mx-auto">
            {locale === "es" ? "Nuestros expertos diseñarán el viaje perfecto basado en sus intereses." : locale === "pt" ? "Nossos especialistas projetarão a viagem perfeita com base nos seus interesses." : "Our destination experts will design the perfect multi-state journey based on your interests, pace, and travel style."}
          </p>
          <div className="pt-4">
            <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 bg-[#C3AB85] hover:bg-[#D5C49A] text-[#0B0D0C] font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
              <span>{text.ctaBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
