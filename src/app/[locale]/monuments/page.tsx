import React from "react";
import Link from "next/link";
import { getStatesAction } from "@/app/actions/queries";
import Reveal from "@/components/home/Reveal";
import { MapPin, Compass, ArrowRight, Landmark } from "lucide-react";

interface MonumentsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function MonumentsPage({ params }: MonumentsPageProps) {
  const { locale } = await params;
  const states = await getStatesAction();

  // Extract all attractions from all cities under all states
  const monuments = states.flatMap((state) =>
    state.cities.flatMap((city) =>
      city.attractions.map((attraction) => ({
        ...attraction,
        stateSlug: state.slug,
        citySlug: city.slug,
        stateName: state.title[locale as "en" | "es" | "pt"] || state.title.en,
        cityName: city.title[locale as "en" | "es" | "pt"] || city.title.en,
      }))
    )
  );

  const t: Record<string, any> = {
    en: {
      heroSub: "Architectural Wonders",
      heroTitle: "Monuments of India",
      heroDesc: "Explore India's most iconic historical landmarks, grand Mughal structures, and ancient dravidian temples built through centuries of heritage.",
      title: "Discover the Heritage",
      desc: "An outline of historic palaces, forts, and monuments currently in our private tour catalogue.",
      viewDetails: "View History & Details",
      exploreCity: "Explore City",
      region: "Region"
    },
    es: {
      heroSub: "Maravillas Arquitectónicas",
      heroTitle: "Monumentos de la India",
      heroDesc: "Explore los monumentos históricos más emblemáticos de la India, grandes estructuras mogoles y antiguos templos construidos a lo largo de siglos de patrimonio.",
      title: "Descubra el Patrimonio",
      desc: "Una lista de palacios históricos, fortalezas y monumentos actualmente en nuestro catálogo de viajes privados.",
      viewDetails: "Ver Historia y Detalles",
      exploreCity: "Explorar Ciudad",
      region: "Región"
    },
    pt: {
      heroSub: "Maravilhas Arquitetônicas",
      heroTitle: "Monumentos da Índia",
      heroDesc: "Explore os monumentos históricos mais emblemáticos da Índia, grandes estruturas mogóis e templos antigos construídos ao longo de séculos de patrimônio.",
      title: "Descubra o Patrimônio",
      desc: "Uma lista de palácios históricos, fortalezas e monumentos atualmente em nosso catálogo de viagens particulares.",
      viewDetails: "Ver História e Detalhes",
      exploreCity: "Explorar Cidade",
      region: "Região"
    }
  };

  const text = t[locale] || t.en;

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/Jaipur.jpg"
          alt="Monuments of India"
          className="absolute inset-0 w-full h-full object-cover object-center scale-100 animate-kenburns"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white space-y-6 px-6 mt-20 max-w-4xl">
          <span className="bg-gold text-royal text-[10px] font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full inline-block">
            {text.heroSub}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white font-serif">
            {text.heroTitle}
          </h1>
          <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            {text.heroDesc}
          </p>
        </div>
      </section>

      {/* Monuments Grid */}
      <section className="max-w-7xl mx-auto px-6 py-28 space-y-16">
        <Reveal className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold block">{text.heroSub}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-royal tracking-tight">{text.title}</h2>
          <p className="text-sm text-foreground/50 leading-relaxed font-light">{text.desc}</p>
          <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {monuments.map((mon, i) => {
            const attractionName = mon.name[locale as "en" | "es" | "pt"] || mon.name.en;
            const attractionDesc = mon.desc[locale as "en" | "es" | "pt"] || mon.desc.en;

            return (
              <Reveal key={mon.slug} delay={i * 80}>
                <div className="bg-white border border-gold/10 rounded-[2rem] overflow-hidden shadow-lg flex flex-col h-full transition-all duration-500 hover:-translate-y-2 hover:border-gold/25 hover:shadow-2xl">
                  
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden shrink-0">
                    <img
                      src={mon.image}
                      loading="lazy"
                      alt={attractionName}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/95 backdrop-blur-sm text-royal text-[9px] uppercase tracking-wider font-extrabold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-gold" />
                        {mon.cityName}, {mon.stateName}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-8 flex flex-col flex-grow bg-white justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="bg-gold/10 text-gold text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded">
                          UNESCO Heritage
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-royal leading-snug">
                        {attractionName}
                      </h3>
                      <p className="text-xs md:text-sm text-foreground/55 leading-relaxed font-light line-clamp-3">
                        {attractionDesc}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-gold/15 flex justify-between items-center bg-white">
                      <Link
                        href={`/${locale}/destinations/${mon.stateSlug}/${mon.citySlug}`}
                        className="text-[10px] font-extrabold tracking-wider uppercase text-gold hover:text-royal transition-colors"
                      >
                        {text.exploreCity}
                      </Link>
                      <Link
                        href={`/${locale}/destinations/${mon.stateSlug}/${mon.citySlug}/${mon.slug}`}
                        className="text-xs font-bold uppercase tracking-wider text-forest hover:text-gold flex items-center gap-1 transition-colors"
                      >
                        <span>{text.viewDetails}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

    </div>
  );
}
