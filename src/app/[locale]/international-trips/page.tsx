import React from "react";
import Link from "next/link";
import { Globe, ArrowRight, MapPin, Compass, Sparkles } from "lucide-react";
import { getOutboundDestinationsAction } from "@/app/actions/queries";
import PageHeroSlider from "@/components/common/PageHeroSlider";
import Reveal from "@/components/home/Reveal";

interface InternationalTripsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function InternationalTripsPage({ params }: InternationalTripsPageProps) {
  const { locale } = await params;
  const destinations = await getOutboundDestinationsAction();
  const lang = (locale === "es" || locale === "pt") ? locale : "en";

  const t: Record<string, any> = {
    en: {
      sub: "International Journeys",
      title: "Outbound & Exotic Destinations",
      desc: "Curated luxury safaris, private tropical retreats, and golden heritage odysseys beyond India.",
      viewDestination: "Explore Destination",
      heroTitle: "Bespoke Outbound Luxury Trips",
      heroDesc: "Handcrafted journeys to Dubai, Bali, Thailand, Maldives, Nepal, Sri Lanka, Singapore, Malaysia, Laos, Vietnam, and Bhutan.",
      highlightsTitle: "Featured World Destinations",
      ctaTitle: "Dreaming of an International Journey?",
      ctaDesc: "Contact our international travel specialists to craft your personalized custom itinerary.",
      ctaBtn: "Inquire Now"
    },
    es: {
      sub: "Viajes Internacionales",
      title: "Destinos Internacionales y Exóticos",
      desc: "Safaris de lujo seleccionados, retiros tropicales privados y odiseas históricas más allá de la India.",
      viewDestination: "Explorar Destino",
      heroTitle: "Viajes Internacionales de Lujo a Medida",
      heroDesc: "Itinerarios artesanales a Dubái, Bali, Tailandia, Maldivas, Nepal, Sri Lanka, Singapur, Malasia, Laos, Vietnam y Bután.",
      highlightsTitle: "Destinos Mundiales Destacados",
      ctaTitle: "¿Soñando con un Viaje Internacional?",
      ctaDesc: "Contacte a nuestros asesores internacionales para diseñar su itinerario personalizado.",
      ctaBtn: "Consultar Ahora"
    },
    pt: {
      sub: "Viagens Internacionais",
      title: "Destinos Internacionais e Exóticos",
      desc: "Safáris de luxo selecionados, refúgios tropicais privados e odisséias de patrimônio além da Índia.",
      viewDestination: "Explorar Destino",
      heroTitle: "Viagens Internacionais de Luxo Sob Medida",
      heroDesc: "Roteiros artesanais para Dubai, Bali, Tailândia, Maldivas, Nepal, Sri Lanka, Singapura, Malásia, Laos, Vietnã e Butão.",
      highlightsTitle: "Destinos Mundiais em Destaque",
      ctaTitle: "Sonhando com uma Viagem Internacional?",
      ctaDesc: "Entre em contato com nossos especialistas internacionais para criar seu roteiro personalizado.",
      ctaBtn: "Solicitar Agora"
    }
  };

  const text = t[locale] || t.en;

  const getLoc = (obj: any): string => {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    return obj[lang] || obj.en || "";
  };

  const heroSlides = destinations.slice(0, 5).map((d: any) => ({
    image: d.image,
    title: getLoc(d.title),
    subtitle: text.sub,
    location: d.region || "International",
    description: getLoc(d.tagline),
    ctaText: text.viewDestination,
    ctaLink: `/international-trips/${d.slug}`
  }));

  if (heroSlides.length === 0) {
    heroSlides.push({
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600",
      title: text.title,
      subtitle: text.sub,
      location: "International",
      description: text.desc
    });
  }

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      
      {/* Hero Slider */}
      <PageHeroSlider locale={locale} slides={heroSlides} showBreadcrumb={`MH India Trips / ${text.sub}`} />

      {/* Intro Banner */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#C5A862]/15 text-center space-y-4">
        <Reveal className="space-y-3 max-w-3xl mx-auto">
          <span className="bg-[#C5A862] text-[#0A2A1E] text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block">
            {text.sub}
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#0A2A1E]">
            {text.title}
          </h1>
          <p className="text-sm md:text-base text-[#1B1B1B]/75 leading-relaxed font-light">
            {text.desc}
          </p>
          <div className="h-px w-24 bg-[#C5A862] mx-auto mt-4" />
        </Reveal>
      </section>

      {/* Outbound Destinations Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-12">
        <Reveal className="space-y-2 text-center md:text-left">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A862] font-bold flex items-center justify-center md:justify-start gap-1.5">
            <Compass className="w-4 h-4 text-[#C5A862]" />
            <span>GLOBAL DISCOVERIES</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#0A2A1E]">
            {text.highlightsTitle}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest: any, idx: number) => {
            const destTitle = getLoc(dest.title);
            const destTagline = getLoc(dest.tagline);
            const destDesc = getLoc(dest.description);

            return (
              <Reveal key={dest.slug} delay={idx * 70}>
                <Link href={`/${locale}/international-trips/${dest.slug}`} className="group block h-full">
                  <div className="bg-white border border-[#C5A862]/20 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
                    {/* Image Header */}
                    <div className="h-64 overflow-hidden relative shrink-0">
                      <img
                        src={dest.image}
                        alt={destTitle}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <span className="absolute top-4 left-4 bg-[#0A2A1E] text-[#C5A862] border border-[#C5A862]/40 text-[10px] uppercase font-extrabold tracking-widest px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1">
                        <Globe className="w-3 h-3 text-[#C5A862]" />
                        <span>{dest.region}</span>
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-7 flex flex-col flex-grow justify-between space-y-4 bg-white">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-serif font-bold text-[#0A2A1E] group-hover:text-[#C5A862] transition-colors leading-snug">
                          {destTitle}
                        </h3>
                        <p className="text-xs text-[#C5A862] font-semibold tracking-wide block">
                          {destTagline}
                        </p>
                        <p className="text-xs sm:text-sm text-[#1B1B1B]/70 leading-relaxed font-light line-clamp-3 pt-1">
                          {destDesc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#C5A862]/15 flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#0A2A1E] group-hover:text-[#C5A862] flex items-center gap-1.5 transition-colors">
                          <span>{text.viewDestination}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#C5A862]" />
                        </span>
                        <span className="text-[10px] text-[#1B1B1B]/50 font-medium">
                          {getLoc(dest.bestTime)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-[#0A2A1E] text-white py-24 border-t border-[#C5A862]/30 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A862] font-bold block">
              WORLDWIDE LUXURY
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
              {text.ctaTitle}
            </h2>
            <p className="text-sm md:text-base text-white/80 max-w-xl mx-auto font-light leading-relaxed">
              {text.ctaDesc}
            </p>
            <div className="pt-4">
              <Link
                href={`/${locale}/contact`}
                className="bg-[#C5A862] hover:bg-white text-[#0A2A1E] text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center gap-2 shadow-xl hover:scale-105"
              >
                <span>{text.ctaBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
