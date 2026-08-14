// Dynamic City Detail Page Template
import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getStateBySlugAction, getTourPackagesAction } from "@/app/actions/queries";
import SidebarInquiryForm from "@/components/common/SidebarInquiryForm";
import { 
  Calendar, Landmark, Compass, Clock, ArrowRight, ArrowLeft, MapPin, 
  Utensils, ShoppingBag, Sun, Users, Hotel, HelpCircle, Navigation,
  Phone, MessageSquare
} from "lucide-react";
import Reveal from "@/components/home/Reveal";
import { db } from "@/lib/db";

interface CityPageProps {
  params: Promise<{ locale: string; stateSlug: string; citySlug: string }>;
}

export default async function CityDetailPage({ params }: CityPageProps) {
  const { locale, stateSlug, citySlug } = await params;
  const state = await getStateBySlugAction(stateSlug) as any;
  if (!state) notFound();
  const city = state.cities?.find((c: any) => c.slug === citySlug);
  if (!city) notFound();

  const contactDetails = (await db.settings.findUnique("contact_details")) || {
    phone: "+91 9782001006"
  };

  const lang = (locale === "es" || locale === "pt") ? locale : "en";

  const cityTitle = city.title?.[lang] || city.title?.en;
  const cityTagline = city.tagline?.[lang] || city.tagline?.en;
  const cityOverview = city.overview?.[lang] || city.overview?.en;
  const stateTitle = state.title?.[lang] || state.title?.en;
  const cityHistory = city.history?.[lang] || city.history?.en;
  const cityCulture = city.culture?.[lang] || city.culture?.en;

  // Get related packages
  const allPackages = await getTourPackagesAction() as any[];
  const relatedPackages = allPackages?.filter((pkg: any) => {
    const pkgTitle = (pkg.title?.en || "").toLowerCase();
    const pkgDesc = (pkg.tagline?.en || "").toLowerCase();
    return pkgTitle.includes(citySlug) || pkgTitle.includes(stateSlug) || pkgDesc.includes(cityTitle?.toLowerCase()) || pkgDesc.includes(stateTitle?.toLowerCase());
  }).slice(0, 6) || [];

  // Calculate days needed based on attractions count
  const attractionsCount = city.attractions?.length || 0;
  const daysNeeded = attractionsCount <= 2 ? "1-2" : attractionsCount <= 4 ? "2-3" : attractionsCount <= 6 ? "3-4" : "4-5";

  const text = {
    backToState: locale === "es" ? `Volver a ${stateTitle}` : locale === "pt" ? `Voltar para ${stateTitle}` : `Back to ${stateTitle}`,
    destinations: locale === "es" ? "Destinos" : locale === "pt" ? "Destinos" : "Destinations",
    overview: locale === "es" ? "Descripción General" : locale === "pt" ? "Visão Geral" : "Overview",
    placesToVisit: locale === "es" ? "Lugares para Visitar" : locale === "pt" ? "Lugares para Visitar" : "Places to Visit",
    thingsToDo: locale === "es" ? "Qué Hacer" : locale === "pt" ? "O que Fazer" : "Things to Do",
    daysNeeded: locale === "es" ? "Días Necesarios" : locale === "pt" ? "Dias Necessários" : "Days Needed",
    bestTime: locale === "es" ? "Mejor Época" : locale === "pt" ? "Melhor Época" : "Best Time to Visit",
    food: locale === "es" ? "Gastronomía Local" : locale === "pt" ? "Gastronomia Local" : "Local Food Highlight",
    shopping: locale === "es" ? "Compras" : locale === "pt" ? "Compras" : "Shopping Guide",
    weather: locale === "es" ? "Clima" : locale === "pt" ? "Clima" : "Weather & Climate",
    itinerary: locale === "es" ? "Itinerario Sugerido" : locale === "pt" ? "Itinerário Sugerido" : "Suggested Itinerary",
    history: locale === "es" ? "Historia" : locale === "pt" ? "História" : "History & Heritage",
    culture: locale === "es" ? "Cultura" : locale === "pt" ? "Cultura" : "Culture & Arts",
    packages: locale === "es" ? "Paquetes de Viajes" : locale === "pt" ? "Pacotes de Viagens" : "Recommended Tour Packages",
    nearby: locale === "es" ? "Lugares Cercanos" : locale === "pt" ? "Lugares Próximos" : "Nearby Places",
    faqs: locale === "es" ? "Preguntas Frecuentes" : locale === "pt" ? "Perguntas Frequentes" : "FAQs",
    tips: locale === "es" ? "Consejos de Viaje" : locale === "pt" ? "Dicas de Viagem" : "Travel Tips",
    hotels: locale === "es" ? "Hoteles sugeridos en " + cityTitle : locale === "pt" ? "Hotéis sugeridos em " + cityTitle : "Recommended Boutique Hotels",
    inquireCta: locale === "es" ? "Planificar Viaje" : locale === "pt" ? "Planejar Viagem" : "Plan Your Journey",
    days: locale === "es" ? "días" : locale === "pt" ? "dias" : "days",
  };

  // Helper to parse text itinerary into structured steps
  const parseItineraryDays = (itineraryText: string) => {
    if (!itineraryText) return [];
    const normalized = itineraryText
      .replace(/Day (\d+):/gi, "||Day $1:")
      .replace(/Día (\d+):/gi, "||Día $1:")
      .replace(/Dia (\d+):/gi, "||Dia $1:");
    
    return normalized
      .split("||")
      .map(dayStr => dayStr.trim())
      .filter(Boolean)
      .map(dayStr => {
        const match = dayStr.match(/^(Day \d+|Día \d+|Dia \d+):(.*)$/i);
        if (match) {
          return {
            dayTitle: match[1].trim(),
            dayDesc: match[2].trim()
          };
        }
        return {
          dayTitle: "Itinerary Plan",
          dayDesc: dayStr
        };
      });
  };

  const itineraryDays = parseItineraryDays(city.suggestedItinerary?.[lang] || city.suggestedItinerary?.en || "");

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-royal font-sans relative overflow-hidden">
      {/* Soft background grid texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#C5A862_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Hero Banner Section */}
      <section className="relative h-[65vh] min-h-[440px] lg:h-[70vh] flex items-end overflow-hidden pt-28">
        <img 
          src={city.image} 
          alt={cityTitle} 
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.80] contrast-[1.02]" 
          loading="eager" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12 space-y-6">
          <Link 
            href={`/${locale}/destinations/${stateSlug}`} 
            className="inline-flex items-center gap-2 text-white/75 hover:text-gold text-[10px] uppercase tracking-wider font-bold transition-colors bg-royal/50 backdrop-blur-md border border-white/15 px-4 py-2.5 rounded-xl shadow-lg w-fit animate-fade-in"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{text.backToState}</span>
          </Link>
          <div className="flex items-center gap-2 text-[10px] text-white/60 uppercase tracking-widest font-bold">
            <Link href={`/${locale}/destinations`} className="hover:text-gold transition-colors">{text.destinations}</Link>
            <span>/</span>
            <Link href={`/${locale}/destinations/${stateSlug}`} className="hover:text-gold transition-colors">{stateTitle}</Link>
            <span>/</span>
            <span className="text-white">{cityTitle}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
            {cityTitle}
          </h1>
          <p className="text-xs md:text-sm text-white/80 max-w-xl font-light leading-relaxed">
            {cityTagline}
          </p>
          
          {/* Quick Info Tags */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-sm">
              <Clock className="w-3.5 h-3.5 text-gold" /> {daysNeeded} {text.days}
            </span>
            <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-sm">
              <Landmark className="w-3.5 h-3.5 text-gold" /> {attractionsCount} {locale === "es" ? "Lugares" : locale === "pt" ? "Lugares" : "Attractions"}
            </span>
            {city.bestTime && (
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-sm">
                <Sun className="w-3.5 h-3.5 text-gold" /> {city.bestTime?.[lang] || city.bestTime?.en}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Workspace Split */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left: Main Editorial Content */}
          <div className="lg:col-span-8 space-y-12 md:space-y-16">
            
            {/* Overview */}
            <Reveal className="space-y-4">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-gold" />
                <h2 className="text-[10px] font-bold uppercase tracking-widest text-gold">{text.overview}</h2>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-royal">
                {cityTitle} - Overview
              </h3>
              <p className="text-sm md:text-base text-royal/70 leading-relaxed font-light whitespace-pre-wrap">
                {cityOverview}
              </p>
            </Reveal>

            {/* History & Culture columns */}
            {(cityHistory || cityCulture) && (
              <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {cityHistory && (
                  <div className="bg-white border border-beige/45 p-6 md:p-8 space-y-3 rounded-3xl shadow-sm">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-gold">{text.history}</h4>
                    <p className="text-[13px] md:text-sm text-royal/85 leading-relaxed font-light">{cityHistory}</p>
                  </div>
                )}
                {cityCulture && (
                  <div className="bg-white border border-beige/45 p-6 md:p-8 space-y-3 rounded-3xl shadow-sm">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-gold">{text.culture}</h4>
                    <p className="text-[13px] md:text-sm text-royal/85 leading-relaxed font-light">{cityCulture}</p>
                  </div>
                )}
              </Reveal>
            )}

            {/* Attractions Vertical Timeline Stepper */}
            {city.attractions?.length > 0 && (
              <section className="space-y-8 pt-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold" />
                  <h2 className="text-[10px] font-bold uppercase tracking-widest text-gold">{text.placesToVisit}</h2>
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-royal">
                  {attractionsCount} Landmark Sights in {cityTitle}
                </h3>
                
                {/* Timeline connector line */}
                <div className="relative border-l border-gold/25 ml-4 md:ml-6 pl-8 md:pl-10 space-y-12 py-2">
                  {city.attractions.map((att: any, idx: number) => {
                    const attName = att.name?.[lang] || att.name?.en || att.name;
                    const attDesc = att.desc?.[lang] || att.desc?.en;
                    const attTimings = att.timings?.[lang] || att.timings?.en;
                    const attInfo = att.info?.[lang] || att.info?.en;
                    
                    return (
                      <div key={att.slug || idx} className="relative group">
                        {/* Timeline Step Badge */}
                        <div className="absolute -left-[45px] md:-left-[53px] top-1.5 w-8 h-8 rounded-full bg-gold border border-gold/15 text-royal flex items-center justify-center font-bold text-xs shadow-md group-hover:bg-gold-light transition-colors z-10">
                          {idx + 1}
                        </div>
                        
                        <div className="bg-white border border-beige/45 overflow-hidden flex flex-col sm:flex-row hover:border-gold/30 hover:shadow-xl transition-all duration-300 rounded-3xl">
                          {att.image && (
                            <div className="sm:w-44 md:w-52 h-44 sm:h-auto shrink-0 overflow-hidden relative">
                              <img src={att.image} alt={attName} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                          )}
                          <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                            <div className="space-y-2">
                              <h4 className="text-base font-bold text-royal font-serif">{attName}</h4>
                              {att.era && (
                                <span className="text-[9px] font-bold uppercase tracking-wider text-gold block">
                                  {locale === "es" ? "Época" : locale === "pt" ? "Época" : "Era"}: {att.era}
                                </span>
                              )}
                              <p className="text-[13px] md:text-sm text-royal/85 leading-relaxed font-light">{attDesc}</p>
                            </div>
                            {(attTimings || attInfo) && (
                              <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-beige/25 text-[9px] font-bold text-royal/40 uppercase tracking-wider">
                                {attTimings && (
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-3.5 h-3.5 text-gold" /> {attTimings}
                                  </span>
                                )}
                                {attInfo && (
                                  <span className="flex items-center gap-1">
                                    <HelpCircle className="w-3.5 h-3.5 text-gold" /> {attInfo}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Things to Do activity cards */}
            {city.thingsToDo?.length > 0 && (
              <section className="space-y-6 pt-4">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-gold" />
                  <h2 className="text-[10px] font-bold uppercase tracking-widest text-gold">{text.thingsToDo}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {city.thingsToDo.map((item: any, idx: number) => (
                    <div key={idx} className="bg-white border border-beige/45 p-6 flex items-start gap-3.5 rounded-3xl shadow-sm">
                      <span className="text-gold text-xl font-serif font-extrabold shrink-0">0{idx + 1}.</span>
                      <p className="text-[13px] md:text-sm text-royal/85 leading-relaxed font-light">{item?.[lang] || item?.en}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Suggested Itinerary Timeline Stepper */}
            {itineraryDays.length > 0 && (
              <section className="space-y-8 pt-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gold" />
                  <h2 className="text-[10px] font-bold uppercase tracking-widest text-gold">{text.itinerary}</h2>
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-royal">
                  Day Package Itinerary for {cityTitle}
                </h3>
                
                {/* Stepper timeline line */}
                <div className="relative border-l border-gold/25 ml-4 md:ml-6 pl-8 md:pl-10 space-y-8 py-2">
                  {itineraryDays.map((item, idx) => (
                    <div key={idx} className="relative group text-left">
                      {/* Step circle */}
                      <div className="absolute -left-[41px] md:-left-[49px] top-1.5 w-6 h-6 rounded-full bg-royal border border-gold/45 text-gold flex items-center justify-center font-bold text-[9px] shadow-md z-10">
                        D{idx + 1}
                      </div>
                      
                      <div className="space-y-1.5">
                        <h4 className="text-sm font-bold text-royal font-serif tracking-tight">{item.dayTitle}</h4>
                        <p className="text-[13px] md:text-sm text-royal/85 leading-relaxed font-light bg-white border border-beige/35 p-5 rounded-2xl shadow-sm">
                          {item.dayDesc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Boutique & Heritage Hotels stays */}
            {city.hotels?.length > 0 && (
              <section className="space-y-6 pt-4">
                <div className="flex items-center gap-2">
                  <Hotel className="w-5 h-5 text-gold" />
                  <h2 className="text-[10px] font-bold uppercase tracking-widest text-gold">{text.hotels}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {city.hotels.map((hotel: any, idx: number) => (
                    <div key={idx} className="bg-white border border-beige/45 p-6 space-y-3 rounded-3xl shadow-sm">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-royal font-serif">{hotel.name}</h4>
                        <span className="text-[8px] bg-royal/10 text-royal px-2.5 py-0.5 rounded font-extrabold border border-gold/15 uppercase">{hotel.tier}</span>
                      </div>
                      <p className="text-[13px] md:text-sm text-royal/85 font-light leading-relaxed">{hotel.desc?.[lang] || hotel.desc?.en}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* City FAQs */}
            {city.faqs?.length > 0 && (
              <section className="space-y-6 pt-4">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-gold" />
                  <h2 className="text-[10px] font-bold uppercase tracking-widest text-gold">{text.faqs}</h2>
                </div>
                <div className="space-y-3">
                  {city.faqs.map((faq: any, idx: number) => (
                    <details key={idx} className="group bg-white border border-beige/45 overflow-hidden rounded-2xl shadow-sm" open={idx === 0}>
                      <summary className="flex items-center justify-between p-5 cursor-pointer text-[13px] md:text-sm font-bold text-royal hover:bg-[#FAF8F5] transition-colors list-none">
                        <span>{faq.q?.[lang] || faq.q?.en}</span>
                        <ArrowRight className="w-4 h-4 text-gold transition-transform group-open:rotate-90 shrink-0 ml-2" />
                      </summary>
                      <div className="px-5 pb-5 text-[13px] md:text-sm text-royal/85 leading-relaxed font-light border-t border-beige/25 pt-4">
                        {faq.a?.[lang] || faq.a?.en}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* Right Column: Sticky Sidebar metadata */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 h-fit">
            
            {/* 1. Sidebar Contact Enquiry Form (Book Now) at the very top */}
            <SidebarInquiryForm locale={locale} defaultDestination={`${stateTitle} - ${cityTitle}`} />

            {/* 2. "Paquetes de Viajes" (Recommended Tour Packages) links list */}
            {relatedPackages.length > 0 && (
              <div className="bg-white border border-beige/45 p-6 rounded-3xl shadow-sm space-y-4">
                <h3 className="text-[10px] uppercase tracking-wider font-extrabold text-royal border-b border-beige/25 pb-3">
                  {text.packages}
                </h3>
                <ul className="space-y-3">
                  {relatedPackages.map((pkg: any) => {
                    const pkgTitle = pkg.title?.[lang] || pkg.title?.en;
                    return (
                      <li key={pkg.slug}>
                        <Link 
                          href={`/${locale}/packages/${pkg.slug}`}
                          className="flex items-start gap-2.5 text-xs text-royal/70 hover:text-gold transition-colors font-serif leading-relaxed"
                        >
                          <Compass className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          <span className="hover:underline">{pkgTitle}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* 3. Need Help Support Callout widget */}
            <div className="bg-royal border border-gold/15 p-6 rounded-3xl shadow-lg relative overflow-hidden text-white space-y-5">
              <div className="absolute top-0 left-0 w-full h-[4px] bg-gold" />
              <div className="space-y-2">
                <h4 className="text-lg font-serif font-bold text-white tracking-tight">
                  {locale === "es" ? "¿Necesitas Ayuda?" : locale === "pt" ? "Precisa de Ajuda?" : "Need Help?"}
                </h4>
                <p className="text-[11px] text-white/70 font-light leading-relaxed">
                  {locale === "es" 
                    ? "Estamos aquí para asistirte en línea las 24 horas." 
                    : locale === "pt" 
                    ? "Estamos aqui para ajudá-lo online 24 horas por dia." 
                    : "We are here to help you. Online support is available 24/7."}
                </p>
              </div>

              <a 
                href={`tel:${contactDetails.phone || "+91 9782001006"}`} 
                className="flex items-center gap-3 bg-white/10 border border-white/20 px-4 py-3 rounded-xl hover:bg-white/20 transition-all text-xs font-bold"
              >
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>{contactDetails.phone || "+91 9782001006"}</span>
              </a>

              <a 
                href={`/${locale}/contact`}
                className="w-full text-center bg-gold hover:bg-gold-light text-royal font-bold text-[10px] uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{locale === "es" ? "Contactar" : locale === "pt" ? "Contate-nos" : "Contact Support"}</span>
              </a>
            </div>

            {/* 4. Quick Intel Guide card */}
            <div className="bg-white border border-beige/45 p-6 space-y-5 rounded-3xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[4px] bg-gold" />
              <h3 className="text-[10px] uppercase tracking-wider font-extrabold text-royal border-b border-beige/25 pb-3">
                Quick Intel Guide
              </h3>
              
              <div className="space-y-4 text-xs text-royal">
                <div>
                  <span className="text-[9px] uppercase tracking-wider font-bold text-royal/40 block mb-1">{text.daysNeeded}</span>
                  <span className="text-royal font-extrabold text-sm">{daysNeeded} {text.days}</span>
                </div>
                <div className="border-t border-beige/25 pt-3">
                  <span className="text-[9px] uppercase tracking-wider font-bold text-royal/40 block mb-1">{text.bestTime}</span>
                  <span className="text-royal font-bold">{city.bestTime?.[lang] || city.bestTime?.en}</span>
                </div>
                {city.weather && (
                  <div className="border-t border-beige/25 pt-3">
                    <span className="text-[9px] uppercase tracking-wider font-bold text-royal/40 block mb-1">{text.weather}</span>
                    <span className="text-royal/70 font-light leading-relaxed block">{city.weather?.[lang] || city.weather?.en}</span>
                  </div>
                )}
                {city.localFood && (
                  <div className="border-t border-beige/25 pt-3">
                    <span className="text-[9px] uppercase tracking-wider font-bold text-royal/40 block mb-1 flex items-center gap-1"><Utensils className="w-3.5 h-3.5 text-gold" /> {text.food}</span>
                    <span className="text-royal/70 font-light leading-relaxed block">{city.localFood?.[lang] || city.localFood?.en}</span>
                  </div>
                )}
                {city.shopping && (
                  <div className="border-t border-beige/25 pt-3">
                    <span className="text-[9px] uppercase tracking-wider font-bold text-royal/40 block mb-1 flex items-center gap-1"><ShoppingBag className="w-3.5 h-3.5 text-gold" /> {text.shopping}</span>
                    <span className="text-royal/70 font-light leading-relaxed block">{city.shopping?.[lang] || city.shopping?.en}</span>
                  </div>
                )}
              </div>
            </div>

            {/* 5. Travel tips */}
            {city.travelTips?.length > 0 && (
              <div className="bg-white border border-beige/45 p-6 space-y-4 rounded-3xl shadow-sm">
                <h3 className="text-[10px] uppercase tracking-wider font-extrabold text-royal border-b border-beige/25 pb-3">{text.tips}</h3>
                <ul className="space-y-3">
                  {city.travelTips.map((tip: any, idx: number) => (
                    <li key={idx} className="text-xs text-royal/75 font-light leading-relaxed flex gap-2">
                      <span className="text-gold font-bold shrink-0">•</span>
                      <span>{tip?.[lang] || tip?.en}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 6. Nearby Places */}
            {city.nearbyPlaces?.length > 0 && (
              <div className="bg-white border border-beige/45 p-6 space-y-4 rounded-3xl shadow-sm">
                <h3 className="text-[10px] uppercase tracking-wider font-extrabold text-royal border-b border-beige/25 pb-3">{text.nearby}</h3>
                <div className="space-y-3">
                  {city.nearbyPlaces.map((place: any, idx: number) => (
                    <div key={idx} className="flex items-center justify-between text-xs border-b border-beige/25 pb-2 last:border-0 last:pb-0 font-light text-royal">
                      <span className="font-medium text-royal/80">{place.name}</span>
                      <span className="text-royal/40 text-[9px] font-bold">{place.distance}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

    </div>
  );
}
