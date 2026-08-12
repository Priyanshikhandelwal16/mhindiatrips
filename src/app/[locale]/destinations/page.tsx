import React from "react";
import Link from "next/link";
import { getStatesAction } from "@/app/actions/queries";
import { ChevronRight, Compass, Calendar, ArrowRight, Sparkles } from "lucide-react";
import Reveal from "@/components/home/Reveal";

interface DestinationsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function DestinationsPage({ params }: DestinationsPageProps) {
  const { locale } = await params;
  const states = await getStatesAction();

  const lang = (locale === "es" || locale === "pt") ? locale : "en";

  const t: Record<string, any> = {
    en: {
      heroTitle: "Our Destinations",
      heroSub: "Select a state to start planning your bespoke journey",
      breadcrumbHome: "Home",
      breadcrumbDest: "Destinations",
      readMore: "Explore Guide",
      totalText: "states offering heritage routes"
    },
    es: {
      heroTitle: "Destinos en India",
      heroSub: "Seleccione un estado para comenzar a planificar su viaje a medida",
      breadcrumbHome: "Inicio",
      breadcrumbDest: "Destinos",
      readMore: "Ver Más",
      totalText: "estados con rutas patrimoniales"
    },
    pt: {
      heroTitle: "Nossos Destinos",
      heroSub: "Selecione um estado para começar a planejar seu roteiro personalizado",
      breadcrumbHome: "Início",
      breadcrumbDest: "Destinos",
      readMore: "Explorar Guia",
      totalText: "estados com rotas históricas"
    }
  };

  const text = t[locale] || t.en;

  // Prefix formatting function matching Header.tsx dropdown list logic
  const getFormattedStateName = (rawName: string, englishName: string) => {
    if (locale === "es") {
      if (["kerala", "goa", "maharashtra", "karnataka"].includes(englishName.toLowerCase())) {
        return `Viaje a ${rawName}`;
      } else {
        return `Turismo en ${rawName}`;
      }
    } else if (locale === "pt") {
      if (["kerala", "goa", "maharashtra", "karnataka"].includes(englishName.toLowerCase())) {
        return `Viajar para ${rawName}`;
      } else {
        return `Turismo em ${rawName}`;
      }
    } else {
      return `${rawName} Travel Guide`;
    }
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-royal font-sans relative overflow-hidden">
      
      {/* Background textures */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#C5A862_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* BREADCRUMB BANNER SECTION START */}
      <section className="relative h-[55vh] min-h-[380px] flex items-center justify-center overflow-hidden pt-28">
        <img 
          src="/images/rajasthan_fort_sunset.png" 
          alt="Luxury India Destinations" 
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.55] contrast-[1.05]" 
          loading="eager" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-royal/90 via-royal/40 to-black/35" />

        <div className="relative z-10 text-center text-white space-y-4 px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-serif drop-shadow-md">
            {text.heroTitle}
          </h1>
          
          <ul className="inline-flex items-center gap-2.5 font-medium text-xs md:text-sm text-white/80 tracking-wide uppercase">
            <li className="hover:text-gold transition-colors">
              <Link href={`/${locale}`}>{text.breadcrumbHome}</Link>
            </li>
            <li><ChevronRight size={14} className="text-gold/60" /></li>
            <li className="text-gold font-bold">{text.breadcrumbDest}</li>
          </ul>

          <p className="text-xs md:text-sm text-white/60 font-light max-w-xl mx-auto pt-2">
            {text.heroSub}
          </p>
        </div>
      </section>
      {/* BREADCRUMB BANNER SECTION END */}

      {/* MAIN STATES GRID */}
      <section className="py-24 max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-beige/65 pb-6">
          <div className="space-y-1">
            <span className="text-[9px] font-bold tracking-widest text-gold uppercase block mb-1">
              {locale === "es" ? "DIRECTORIO DE VIAJE" : "TRAVEL DIRECTORY"}
            </span>
            <h2 className="font-serif text-3xl font-bold text-royal">
              {locale === "es" ? "Estados de la India" : locale === "pt" ? "Estados da Índia" : "Explore States of India"}
            </h2>
          </div>
          <span className="text-[10px] text-royal/45 font-bold uppercase tracking-wider mt-2 md:mt-0">
            {states.length} {text.totalText}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {states.map((state: any) => {
            const rawName = state.title[lang] || state.title.en;
            const formattedName = getFormattedStateName(rawName, state.title.en);
            const tagline = state.tagline?.[lang] || state.tagline?.en || "";
            const bestTime = state.bestTime?.[lang] || state.bestTime?.en || "";
            const citiesCount = state.cities?.length || 0;

            return (
              <Reveal 
                key={state.slug}
                className="bg-white border border-gold/15 rounded-3xl overflow-hidden group shadow-md hover:shadow-2xl hover:border-gold/45 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* cover image */}
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={state.image} 
                      alt={rawName} 
                      className="w-full h-full object-cover transform group-hover:scale-105 group-hover:rotate-0.5 transition-transform duration-[1500ms]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-royal/70 via-transparent to-black/20 opacity-90 pointer-events-none" />
                    <div className="absolute bottom-4 left-4 bg-royal/95 text-gold text-[9px] uppercase tracking-wider font-extrabold px-3 py-1.5 rounded-lg border border-gold/20 shadow-md">
                      {citiesCount} {citiesCount === 1 ? (locale === "es" ? "Ciudad" : "City") : (locale === "es" ? "Ciudades" : "Cities")}
                    </div>
                  </div>
                  
                  {/* card body */}
                  <div className="p-6 text-left space-y-4">
                    <h3 className="font-serif text-2xl font-bold text-royal group-hover:text-gold transition-colors duration-300 leading-snug">
                      {formattedName}
                    </h3>
                    <p className="text-xs text-royal/60 leading-relaxed font-light line-clamp-3">
                      {tagline}
                    </p>
                    
                    {bestTime && (
                      <div className="inline-flex items-center gap-1.5 text-[9px] font-bold text-gold uppercase tracking-wider bg-gold/10 px-3.5 py-1.5 rounded-full border border-gold/20">
                        <Calendar size={11} />
                        <span>Best: {bestTime}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* read more button */}
                <div className="p-6 pt-0 text-left">
                  <Link
                    href={`/${locale}/destinations/${state.slug}`}
                    className="w-full block text-center py-3.5 bg-royal text-white hover:bg-gold hover:text-royal text-[10px] tracking-widest uppercase font-extrabold transition-all duration-300 rounded-xl cursor-pointer shadow-md hover:shadow-lg"
                  >
                    {text.readMore}
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>

      </section>

    </div>
  );
}
