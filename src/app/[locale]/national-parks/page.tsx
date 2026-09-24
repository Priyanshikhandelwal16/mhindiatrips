import React from "react";
import Link from "next/link";
import { Trees, MapPin, ArrowRight, ShieldCheck, Calendar, Sparkles } from "lucide-react";
import Reveal from "@/components/home/Reveal";
import PageHeroSlider from "@/components/common/PageHeroSlider";
import { extractLocalizedString } from "@/lib/utils";

import { getNationalParksAction } from "@/app/actions/queries";

interface NationalParksPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: NationalParksPageProps) {
  const { locale } = await params;
  return {
    title: locale === "es" ? "Parques Nacionales de la India | Safaris de Vida Silvestre" : locale === "pt" ? "Parques Nacionais da Índia | Safáris de Vida Selvagem" : "National Parks of India | Tiger Safaris & Wildlife Tours",
    description: locale === "es" ? "Explore los mejores parques nacionales y reservas de tigres de la India" : locale === "pt" ? "Explore os melhores parques nacionais e reservas de tigres da Índia" : "Discover India's top National Parks, tiger reserves, and wildlife sanctuaries.",
  };
}

export default async function NationalParksPage({ params }: NationalParksPageProps) {
  const { locale } = await params;

  const t: Record<string, any> = {
    en: {
      heroTitle: "National Parks of India",
      heroSub: "WILDLIFE RESERVES & TIGER SAFARIS",
      heroDesc: "Journey into India's premier national parks, tiger reserves, and UNESCO wildlife sanctuaries guided by expert naturalists.",
      exploreBtn: "Inquire Safari",
      bestTime: "Best Time to Visit: Oct - April",
      heading: "Explore India's Wildest Sanctuaries",
      subheading: "All safari packages are 100% private, managed by expert naturalists with pre-booked Jeep permits and luxury jungle lodge stays.",
      feautredNE: "Featured North-East Region"
    },
    es: {
      heroTitle: "Parques Nacionales de la India",
      heroSub: "RESERVAS DE VIDA SILVESTRE Y SAFARIS",
      heroDesc: "Explore los principales parques nacionales, reservas de tigres y santuarios de la UNESCO en la India.",
      exploreBtn: "Consultar Safari",
      bestTime: "Mejor Época: Octubre a Abril",
      heading: "Explore los Santuarios Más Salvajes de la India",
      subheading: "Todos los paquetes de safari son 100% privados, gestionados por naturalistas expertos con permisos de Jeep reservados.",
      feautredNE: "Región Destacada del Noreste"
    },
    pt: {
      heroTitle: "Parques Nacionais da Índia",
      heroSub: "RESERVAS DE VIDA SELVAGEM E SAFÁRIS",
      heroDesc: "Viaje pelos principais parques nacionais, reservas de tigres e santuários da UNESCO na Índia.",
      exploreBtn: "Consultar Safári",
      bestTime: "Melhor Época: Outubro a Abril",
      heading: "Explore os Santuários Mais Selvagens da Índia",
      subheading: "Todos os pacotes de safári são 100% privados, gerenciados por naturalistas especializados com autorizações de Jeep pré-reservadas.",
      feautredNE: "Região em Destaque do Nordeste"
    }
  };

  const text = t[locale] || t.en;

  const nationalParks = await getNationalParksAction();

  const heroSlides = [
    {
      image: "/images/ranthambore_tiger_safari.png",
      title: text.heroTitle,
      subtitle: text.heroSub,
      location: "India Wildlife Reserves",
      description: text.heroDesc,
      objectPosition: "center 25%"
    }
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      {/* Hero Banner */}
      <PageHeroSlider locale={locale} slides={heroSlides} showBreadcrumb={text.heroTitle} />

      {/* Main Parks Catalog */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-16">
        
        {/* Header Intro */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="bg-emerald-800/10 text-emerald-900 border border-emerald-800/20 text-xs font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full inline-block">
            {text.heroSub}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-royal tracking-tight">
            {text.heading}
          </h2>
          <p className="text-sm md:text-base text-foreground/75 font-light leading-relaxed">
            {text.subheading}
          </p>
          <div className="h-px w-24 bg-gold mx-auto mt-2" />
        </div>

        {/* National Parks Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {nationalParks.map((park: any, i: number) => {
            const name = extractLocalizedString(park.name, locale);
            const tagline = extractLocalizedString(park.tagline, locale);
            const desc = extractLocalizedString(park.desc, locale);
            const state = extractLocalizedString(park.state, locale);
            const bestMonths = extractLocalizedString(park.bestMonths, locale);
            const highlights = (park.highlights || []).map((h: any) => extractLocalizedString(h, locale));

            return (
              <Reveal key={park.id || park.slug} delay={i * 80}>
                <Link href={`/${locale}/contact?subject=National+Park+Safari+${encodeURIComponent(name)}`} className="group block h-full">
                  <div className="bg-white border border-gold/20 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between group-hover:-translate-y-1">
                    
                    {/* Image */}
                    <div className="h-64 overflow-hidden relative">
                      <img 
                        src={park.image} 
                        alt={name} 
                        loading="lazy" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      <span className="absolute bottom-4 left-4 text-white text-xs font-semibold flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-gold" />
                        <span>{state}</span>
                      </span>

                      {park.isNorthEast && (
                        <span className="absolute top-4 right-4 bg-emerald-700 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-gold" />
                          <span>{text.feautredNE}</span>
                        </span>
                      )}
                    </div>

                    {/* Body Content */}
                    <div className="p-7 space-y-4 flex-grow flex flex-col justify-between">
                      <div className="space-y-2">
                        {tagline && (
                          <span className="text-[10px] uppercase font-bold tracking-widest text-gold block">
                            {tagline}
                          </span>
                        )}
                        <h3 className="text-2xl font-serif font-bold text-royal group-hover:text-emerald-800 transition-colors">
                          {name}
                        </h3>
                        <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed font-light">
                          {desc}
                        </p>
                      </div>

                      {/* Highlights Tags */}
                      <div className="pt-4 border-t border-gold/15 space-y-3">
                        {highlights.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {highlights.map((h: string, hIdx: number) => (
                              <span key={hIdx} className="bg-[#FAF8F5] border border-gold/20 text-royal text-[10px] font-semibold px-2.5 py-1 rounded-full">
                                • {h}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center justify-between pt-2">
                          <span className="text-[10px] uppercase font-bold text-foreground/50">
                            {bestMonths}
                          </span>
                          <span className="text-xs font-bold uppercase tracking-wider text-gold group-hover:text-royal flex items-center gap-1">
                            <span>{text.exploreBtn}</span>
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>

                    </div>

                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

      </section>
    </div>
  );
}
