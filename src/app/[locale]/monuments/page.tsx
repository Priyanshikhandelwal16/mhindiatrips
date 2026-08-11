import React from "react";
import Link from "next/link";
import { getStatesAction, getPageByIdAction } from "@/app/actions/queries";
import Reveal from "@/components/home/Reveal";
import { MapPin, ArrowRight, Landmark, Clock, Camera, Calendar, Compass } from "lucide-react";

interface MonumentsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function MonumentsPage({ params }: MonumentsPageProps) {
  const { locale } = await params;
  const states = await getStatesAction();
  const pageData = await getPageByIdAction("monuments");

  // Extract all attractions from all cities under all states
  const monuments = states.flatMap((state: any) =>
    (state.cities || []).flatMap((city: any) =>
      (city.attractions || []).map((attraction: any) => ({
        ...attraction,
        stateSlug: state.slug,
        citySlug: city.slug,
        stateName: state.title?.[locale as "en" | "es" | "pt"] || state.title?.en || state.slug,
        cityName: city.title?.[locale as "en" | "es" | "pt"] || city.title?.en || city.slug,
      }))
    )
  );

  const t: Record<string, any> = {
    en: {
      heroSub: "Heritage & Architecture",
      heroTitle: "Iconic Monuments of India",
      heroDesc: "Discover centuries-old palaces, grand Mughal forts, ancient temples, and UNESCO World Heritage sites that tell India's extraordinary story.",
      sectionSub: "Explore Heritage",
      sectionTitle: "Architectural Masterpieces",
      sectionDesc: "Each monument is a chapter in India's living history book. Private guided tours available for every site.",
      viewDetails: "Explore Monument",
      exploreCity: "View City Guide",
      noMonuments: "More monuments coming soon. We are expanding our heritage catalogue.",
      ctaTitle: "Include These in Your Journey",
      ctaDesc: "Our heritage specialists can build a custom itinerary around India's most iconic monuments with private guided access.",
      ctaBtn: "Plan Heritage Tour",
      featured: "Featured Heritage",
    },
    es: {
      heroSub: "Patrimonio y Arquitectura",
      heroTitle: "Monumentos Icónicos de la India",
      heroDesc: "Descubra palacios centenarios, grandes fuertes mogoles, templos antiguos y sitios del Patrimonio Mundial de la UNESCO.",
      sectionSub: "Explorar Patrimonio",
      sectionTitle: "Obras Maestras Arquitectónicas",
      sectionDesc: "Cada monumento es un capítulo en el libro de la historia viva de la India. Tours privados guiados disponibles.",
      viewDetails: "Explorar Monumento",
      exploreCity: "Ver Guía de Ciudad",
      noMonuments: "Más monumentos próximamente. Estamos ampliando nuestro catálogo.",
      ctaTitle: "Incluya Estos en Su Viaje",
      ctaDesc: "Nuestros especialistas en patrimonio pueden crear un itinerario personalizado con acceso privado guiado.",
      ctaBtn: "Planear Tour de Patrimonio",
      featured: "Patrimonio Destacado",
    },
    pt: {
      heroSub: "Patrimônio e Arquitetura",
      heroTitle: "Monumentos Icônicos da Índia",
      heroDesc: "Descubra palácios centenários, grandes fortes mogóis, templos antigos e locais do Patrimônio Mundial da UNESCO.",
      sectionSub: "Explorar Patrimônio",
      sectionTitle: "Obras-Primas Arquitetônicas",
      sectionDesc: "Cada monumento é um capítulo no livro da história viva da Índia. Tours privados guiados disponíveis.",
      viewDetails: "Explorar Monumento",
      exploreCity: "Ver Guia da Cidade",
      noMonuments: "Mais monumentos em breve. Estamos expandindo nosso catálogo.",
      ctaTitle: "Inclua Estes na Sua Viagem",
      ctaDesc: "Nossos especialistas em patrimônio podem criar um itinerário personalizado com acesso privado guiado.",
      ctaBtn: "Planejar Tour de Patrimônio",
      featured: "Patrimônio em Destaque",
    }
  };

  const dbContent = pageData?.content || {};
  const mergedT: Record<string, any> = {};
  for (const lang of ["en", "es", "pt"]) {
    mergedT[lang] = { ...t[lang] };
    for (const key in dbContent) {
      if (dbContent[key]?.[lang] !== undefined) {
        mergedT[lang][key] = dbContent[key][lang];
      }
    }
  }
  const text = mergedT[locale] || mergedT.en;

  // Featured monuments data (hardcoded iconic ones)
  const featuredMonuments = [
    { name: "Taj Mahal", city: "Agra", state: "Uttar Pradesh", era: "1632 AD", image: "/images/taj_mahal_sunrise.png", desc: "A UNESCO World Heritage ivory-white marble mausoleum, widely considered the finest example of Mughal architecture and one of the New Seven Wonders of the World." },
    { name: "Amber Fort", city: "Jaipur", state: "Rajasthan", era: "1592 AD", image: "/images/Jaipur.jpg", desc: "A majestic sandstone and marble fortress perched on a hillside, featuring stunning mirror work, elephant rides, and panoramic views of Maota Lake." },
    { name: "Mehrangarh Fort", city: "Jodhpur", state: "Rajasthan", era: "1459 AD", image: "/images/rajasthan_fort_sunset.png", desc: "One of India's largest forts towering 125 meters above the Blue City, with intricate carvings, expansive courtyards, and a museum of royal artifacts." },
    { name: "Hawa Mahal", city: "Jaipur", state: "Rajasthan", era: "1799 AD", image: "/images/Jaipur.jpg", desc: "The iconic Palace of Winds with 953 small windows designed for royal women to observe street festivals without being seen from outside." },
    { name: "Mysore Palace", city: "Mysore", state: "Karnataka", era: "1912 AD", image: "/images/karanataka.jpg", desc: "A grand Indo-Saracenic palace illuminated by 97,000 lights on Sundays and public holidays, home to the Wadiyar royal family's treasures." },
    { name: "Hampi Ruins", city: "Hampi", state: "Karnataka", era: "14th Century", image: "/images/hampi-ruins.jpg", desc: "The sprawling UNESCO ruins of the Vijayanagara Empire, featuring over 1,600 surviving monuments including temples, royal enclosures, and market streets." },
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      
      {/* Hero Banner */}
      <section className="relative h-[75vh] min-h-[520px] flex items-center justify-center overflow-hidden pt-28 md:pt-36">
        <img
          src="/images/rajasthan_fort_sunset.png"
          alt="Monuments of India"
          className="absolute inset-0 w-full h-full object-cover object-[center_40%] animate-kenburns"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0C]/75 via-[#0B0D0C]/25 to-[#0B0D0C]/40" />
        <div className="relative z-10 text-center text-white space-y-7 px-6 max-w-4xl">
          <span className="bg-[#C3AB85] text-[#0B0D0C] text-[10px] font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full inline-flex items-center gap-2 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            <Landmark className="w-3.5 h-3.5" />
            {text.heroSub}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
            {text.heroTitle}
          </h1>
          <p className="text-sm md:text-base text-white/85 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
            {text.heroDesc}
          </p>
        </div>
      </section>

      {/* Featured Monuments - Large Editorial Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-16">
        <Reveal className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#C3AB85] font-bold block">{text.featured}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B0D0C] tracking-tight">{text.sectionTitle}</h2>
          <p className="text-sm text-[#1B1B1B]/50 leading-relaxed font-light">{text.sectionDesc}</p>
          <div className="h-px w-20 bg-[#C3AB85]/25 mx-auto mt-2" />
        </Reveal>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredMonuments.map((mon, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className={`perspective-1000 ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
                <div className="card-3d group relative bg-white border border-[#C3AB85]/10 rounded-2xl overflow-hidden shadow-md h-full flex flex-col">
                  <div className={`relative overflow-hidden shrink-0 ${i === 0 ? "h-80 md:h-[450px]" : "h-56 md:h-64"}`}>
                    <img
                      src={mon.image}
                      alt={mon.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                    
                    {/* Era badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#0B0D0C] text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#C3AB85]" />
                      {mon.era}
                    </div>

                    {/* Bottom overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-3.5 h-3.5 text-[#C3AB85]" />
                        <span className="text-[10px] text-white/70 font-medium uppercase tracking-wider">{mon.city}, {mon.state}</span>
                      </div>
                      <h3 className={`font-bold text-white leading-snug ${i === 0 ? "text-2xl md:text-3xl" : "text-lg md:text-xl"}`}>
                        {mon.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <p className="text-xs md:text-sm text-[#1B1B1B]/55 leading-relaxed font-light line-clamp-3">
                      {mon.desc}
                    </p>
                    <div className="flex items-center justify-between pt-5 mt-4 border-t border-[#C3AB85]/10">
                      <div className="flex items-center gap-3">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-[#C3AB85] flex items-center gap-1">
                          <Camera className="w-3 h-3" /> Photo Worthy
                        </span>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-[#C3AB85] flex items-center gap-1">
                          <Clock className="w-3 h-3" /> 2-3 Hours
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Dynamic Monuments from Data */}
      {monuments.length > 0 && (
        <section className="bg-[#0B0D0C] py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#C3AB85_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 space-y-16 relative z-10">
            <Reveal className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C3AB85] font-bold block">{text.sectionSub}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">More Heritage Sites</h2>
              <div className="h-px w-20 bg-[#C3AB85]/25 mx-auto mt-2" />
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {monuments.map((mon: any, i: number) => {
                const attractionName = mon.name?.[locale as "en" | "es" | "pt"] || mon.name?.en;
                const attractionDesc = mon.desc?.[locale as "en" | "es" | "pt"] || mon.desc?.en;

                return (
                  <Reveal key={mon.slug || i} delay={i * 80}>
                    <div className="perspective-1000">
                      <div className="card-3d group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#C3AB85]/30 transition-all duration-500">
                        <div className="relative h-52 overflow-hidden">
                          <img
                            src={mon.image}
                            loading="lazy"
                            alt={attractionName}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          <div className="absolute top-4 left-4">
                            <span className="bg-[#C3AB85] text-[#0B0D0C] text-[8px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {mon.cityName}
                            </span>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-lg font-bold text-white leading-snug">{attractionName}</h3>
                          </div>
                        </div>
                        <div className="p-5 space-y-3">
                          <p className="text-xs text-white/50 leading-relaxed font-light line-clamp-2">{attractionDesc}</p>
                          <div className="flex justify-between items-center pt-3 border-t border-white/10">
                            <Link
                              href={`/${locale}/destinations/${mon.stateSlug}/${mon.citySlug}`}
                              className="text-[9px] font-bold uppercase tracking-wider text-[#C3AB85] hover:text-white transition-colors"
                            >
                              {text.exploreCity}
                            </Link>
                            <Link
                              href={`/${locale}/destinations/${mon.stateSlug}/${mon.citySlug}/${mon.slug}`}
                              className="text-[10px] font-bold uppercase tracking-wider text-white/70 hover:text-[#C3AB85] flex items-center gap-1 transition-colors"
                            >
                              <span>{text.viewDetails}</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Empty state if no dynamic monuments */}
      {monuments.length === 0 && (
        <section className="max-w-2xl mx-auto px-6 py-16 text-center">
          <p className="text-sm text-[#1B1B1B]/40 font-light">{text.noMonuments}</p>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-24 text-center relative overflow-hidden">
        <Reveal className="max-w-2xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B0D0C] leading-tight">
            {text.ctaTitle}
          </h2>
          <p className="text-sm text-[#1B1B1B]/50 font-light leading-relaxed max-w-md mx-auto">
            {text.ctaDesc}
          </p>
          <div className="pt-4">
            <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 bg-[#0B0D0C] hover:bg-[#C3AB85] text-white hover:text-[#0B0D0C] font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
              <span>{text.ctaBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
