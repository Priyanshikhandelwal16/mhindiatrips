import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getStateBySlugAction, getTourPackagesAction } from "@/app/actions/queries";
import { Calendar, Landmark, Compass, Clock, ArrowRight, MapPin, Utensils, ShoppingBag, Sun, Users, Hotel, HelpCircle, Navigation } from "lucide-react";

interface CityPageProps {
  params: Promise<{ locale: string; stateSlug: string; citySlug: string }>;
}

export default async function CityDetailPage({ params }: CityPageProps) {
  const { locale, stateSlug, citySlug } = await params;
  const state = await getStateBySlugAction(stateSlug) as any;
  if (!state) notFound();
  const city = state.cities?.find((c: any) => c.slug === citySlug);
  if (!city) notFound();

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
  }).slice(0, 3) || [];

  // Calculate days needed based on attractions count
  const attractionsCount = city.attractions?.length || 0;
  const daysNeeded = attractionsCount <= 2 ? "1-2" : attractionsCount <= 4 ? "2-3" : attractionsCount <= 6 ? "3-4" : "4-5";

  const text = {
    overview: locale === "es" ? "Descripci\u00f3n General" : locale === "pt" ? "Vis\u00e3o Geral" : "Overview",
    placesToVisit: locale === "es" ? "Lugares para Visitar" : locale === "pt" ? "Lugares para Visitar" : "Places to Visit",
    thingsToDo: locale === "es" ? "Qu\u00e9 Hacer" : locale === "pt" ? "O que Fazer" : "Things to Do",
    daysNeeded: locale === "es" ? "D\u00edas Necesarios" : locale === "pt" ? "Dias Necess\u00e1rios" : "Days Needed",
    bestTime: locale === "es" ? "Mejor \u00c9poca" : locale === "pt" ? "Melhor \u00c9poca" : "Best Time to Visit",
    food: locale === "es" ? "Gastronom\u00eda Local" : locale === "pt" ? "Gastronomia Local" : "Local Food",
    shopping: locale === "es" ? "Compras" : locale === "pt" ? "Compras" : "Shopping Guide",
    weather: locale === "es" ? "Clima" : locale === "pt" ? "Clima" : "Weather & Climate",
    itinerary: locale === "es" ? "Itinerario Sugerido" : locale === "pt" ? "Itiner\u00e1rio Sugerido" : "Suggested Itinerary",
    history: locale === "es" ? "Historia" : locale === "pt" ? "Hist\u00f3ria" : "History & Heritage",
    culture: locale === "es" ? "Cultura" : locale === "pt" ? "Cultura" : "Culture & Arts",
    packages: locale === "es" ? "Paquetes Recomendados" : locale === "pt" ? "Pacotes Recomendados" : "Recommended Packages",
    nearby: locale === "es" ? "Lugares Cercanos" : locale === "pt" ? "Lugares Pr\u00f3ximos" : "Nearby Places",
    faqs: locale === "es" ? "Preguntas Frecuentes" : locale === "pt" ? "Perguntas Frequentes" : "FAQs",
    tips: locale === "es" ? "Consejos de Viaje" : locale === "pt" ? "Dicas de Viagem" : "Travel Tips",
    hotels: locale === "es" ? "D\u00f3nde Alojarse" : locale === "pt" ? "Onde Ficar" : "Where to Stay",
    inquireCta: locale === "es" ? "Planificar Viaje" : locale === "pt" ? "Planejar Viagem" : "Plan Your Journey",
    days: locale === "es" ? "d\u00edas" : locale === "pt" ? "dias" : "days",
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1A1E1D]">
      
      {/* HERO BANNER */}
      <section className="relative h-[60vh] min-h-[420px] lg:h-[70vh] flex items-end overflow-hidden">
        <img 
          src={city.image} 
          alt={cityTitle} 
          className="absolute inset-0 w-full h-full object-cover" 
          loading="eager" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-10 md:pb-16 space-y-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[10px] text-white/60 uppercase tracking-wider font-medium">
            <Link href={`/${locale}/destinations`} className="hover:text-white transition">Destinations</Link>
            <span>/</span>
            <Link href={`/${locale}/destinations/${stateSlug}`} className="hover:text-white transition">{stateTitle}</Link>
            <span>/</span>
            <span className="text-white/90">{cityTitle}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-white leading-tight">
            {cityTitle}
          </h1>
          <p className="text-sm md:text-base text-white/80 max-w-2xl font-light leading-relaxed">
            {cityTagline}
          </p>
          {/* Quick Stats */}
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {daysNeeded} {text.days}
            </span>
            <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2 flex items-center gap-1.5">
              <Landmark className="w-3.5 h-3.5" /> {attractionsCount} {locale === "es" ? "Lugares" : locale === "pt" ? "Lugares" : "Attractions"}
            </span>
            {city.bestTime && (
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2 flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5" /> {city.bestTime?.[lang] || city.bestTime?.en}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* LEFT: Main Content */}
          <div className="lg:col-span-2 space-y-12 md:space-y-16">
            
            {/* Overview */}
            <section className="space-y-5">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#C5A862]" />
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#C5A862]">{text.overview}</h2>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-[#1A1E1D]">
                Discover {cityTitle}
              </h3>
              <p className="text-sm md:text-base text-[#1A1E1D]/70 leading-relaxed font-light">
                {cityOverview}
              </p>
            </section>

            {/* History & Culture */}
            {(cityHistory || cityCulture) && (
              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cityHistory && (
                  <div className="bg-white border border-[#C5A862]/10 p-6 md:p-8 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A862]">{text.history}</h4>
                    <p className="text-xs text-[#1A1E1D]/70 leading-relaxed font-light">{cityHistory}</p>
                  </div>
                )}
                {cityCulture && (
                  <div className="bg-white border border-[#C5A862]/10 p-6 md:p-8 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A862]">{text.culture}</h4>
                    <p className="text-xs text-[#1A1E1D]/70 leading-relaxed font-light">{cityCulture}</p>
                  </div>
                )}
              </section>
            )}

            {/* Places to Visit */}
            {city.attractions?.length > 0 && (
              <section className="space-y-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#C5A862]" />
                  <h2 className="text-xs font-bold uppercase tracking-widest text-[#C5A862]">{text.placesToVisit}</h2>
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-[#1A1E1D]">
                  {attractionsCount} Must-Visit Places in {cityTitle}
                </h3>
                <div className="space-y-4">
                  {city.attractions.map((att: any, idx: number) => {
                    const attName = att.name?.[lang] || att.name?.en;
                    const attDesc = att.desc?.[lang] || att.desc?.en;
                    const attTimings = att.timings?.[lang] || att.timings?.en;
                    const attInfo = att.info?.[lang] || att.info?.en;
                    return (
                      <Link key={att.slug || idx} href={`/${locale}/destinations/${stateSlug}/${citySlug}/${att.slug}`} className="group block">
                        <div className="bg-white border border-[#C5A862]/10 overflow-hidden flex flex-col sm:flex-row hover:border-[#C5A862]/30 hover:shadow-md transition-all duration-300">
                          <div className="sm:w-40 md:w-48 h-40 sm:h-auto shrink-0 overflow-hidden">
                            <img src={att.image} alt={attName} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                          <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow space-y-2">
                            <div>
                              <div className="flex items-center justify-between gap-2">
                                <h4 className="text-sm md:text-base font-bold text-[#1A1E1D] group-hover:text-[#C5A862] transition-colors">{attName}</h4>
                                <span className="text-[9px] bg-[#C5A862]/10 text-[#C5A862] px-2 py-0.5 font-bold uppercase shrink-0">#{idx + 1}</span>
                              </div>
                              <p className="text-xs text-[#1A1E1D]/60 leading-relaxed mt-1.5 line-clamp-2">{attDesc}</p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-[#C5A862]/10 text-[10px]">
                              {attTimings && (
                                <span className="flex items-center gap-1 text-[#1A1E1D]/50 font-medium">
                                  <Clock className="w-3 h-3" /> {attTimings}
                                </span>
                              )}
                              {attInfo && (
                                <span className="flex items-center gap-1 text-[#1A1E1D]/50 font-medium">
                                  <HelpCircle className="w-3 h-3" /> {attInfo}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Things to Do */}
            {city.thingsToDo?.length > 0 && (
              <section className="space-y-5">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#C5A862]" />
                  <h2 className="text-xs font-bold uppercase tracking-widest text-[#C5A862]">{text.thingsToDo}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {city.thingsToDo.map((item: any, idx: number) => (
                    <div key={idx} className="bg-white border border-[#C5A862]/10 p-5 flex items-start gap-3">
                      <span className="text-[#C5A862] text-lg font-serif font-bold shrink-0">{idx + 1}.</span>
                      <p className="text-xs text-[#1A1E1D]/75 leading-relaxed font-light">{item?.[lang] || item?.en}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Suggested Itinerary */}
            {city.suggestedItinerary && (
              <section className="space-y-5">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#C5A862]" />
                  <h2 className="text-xs font-bold uppercase tracking-widest text-[#C5A862]">{text.itinerary}</h2>
                </div>
                <div className="bg-white border border-[#C5A862]/15 p-6 md:p-8 space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-[#C5A862]/10">
                    <span className="bg-[#C5A862]/10 text-[#C5A862] text-[10px] font-bold uppercase tracking-wider px-3 py-1.5">{daysNeeded} {text.days}</span>
                    <span className="text-xs text-[#1A1E1D]/50 font-light">Recommended duration</span>
                  </div>
                  <p className="text-sm text-[#1A1E1D]/75 leading-relaxed font-light whitespace-pre-line">
                    {(city.suggestedItinerary?.[lang] || city.suggestedItinerary?.en)?.replace(/Day /g, "\nDay ").replace(/D\u00eda /g, "\nD\u00eda ").replace(/Dia /g, "\nDia ").trim()}
                  </p>
                </div>
              </section>
            )}

            {/* Where to Stay */}
            {city.hotels?.length > 0 && (
              <section className="space-y-5">
                <div className="flex items-center gap-2">
                  <Hotel className="w-5 h-5 text-[#C5A862]" />
                  <h2 className="text-xs font-bold uppercase tracking-widest text-[#C5A862]">{text.hotels}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {city.hotels.map((hotel: any, idx: number) => (
                    <div key={idx} className="bg-white border border-[#C5A862]/10 p-5 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-[#1A1E1D]">{hotel.name}</h4>
                        <span className="text-[9px] bg-[#C5A862]/10 text-[#C5A862] px-2 py-0.5 font-bold uppercase">{hotel.tier}</span>
                      </div>
                      <p className="text-xs text-[#1A1E1D]/60 font-light">{hotel.desc?.[lang] || hotel.desc?.en}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Recommended Packages */}
            {relatedPackages.length > 0 && (
              <section className="space-y-5">
                <div className="flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-[#C5A862]" />
                  <h2 className="text-xs font-bold uppercase tracking-widest text-[#C5A862]">{text.packages}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedPackages.map((pkg: any) => (
                    <Link key={pkg.slug} href={`/${locale}/packages/${pkg.slug}`} className="group block">
                      <div className="bg-white border border-[#C5A862]/10 overflow-hidden hover:border-[#C5A862]/30 transition-all">
                        <div className="h-32 overflow-hidden">
                          <img src={pkg.image} alt={pkg.title?.en} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-4 space-y-1.5">
                          <h4 className="text-xs font-bold text-[#1A1E1D] group-hover:text-[#C5A862] transition-colors line-clamp-1">{pkg.title?.[lang] || pkg.title?.en}</h4>
                          <div className="flex items-center gap-2 text-[10px] text-[#1A1E1D]/50">
                            <span>{pkg.durationDays} {text.days}</span>
                            <span className="w-1 h-1 rounded-full bg-[#C5A862]/40" />
                            <span>{pkg.category}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* FAQs */}
            {city.faqs?.length > 0 && (
              <section className="space-y-5">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#C5A862]" />
                  <h2 className="text-xs font-bold uppercase tracking-widest text-[#C5A862]">{text.faqs}</h2>
                </div>
                <div className="space-y-3">
                  {city.faqs.map((faq: any, idx: number) => (
                    <details key={idx} className="group bg-white border border-[#C5A862]/10 overflow-hidden" open={idx === 0}>
                      <summary className="flex items-center justify-between p-5 cursor-pointer text-sm font-bold text-[#1A1E1D] hover:bg-[#FAF8F5] transition-colors list-none">
                        <span>{faq.q?.[lang] || faq.q?.en}</span>
                        <ArrowRight className="w-4 h-4 text-[#C5A862] transition-transform group-open:rotate-90 shrink-0 ml-2" />
                      </summary>
                      <div className="px-5 pb-5 text-xs text-[#1A1E1D]/70 leading-relaxed font-light border-t border-[#C5A862]/5 pt-4">
                        {faq.a?.[lang] || faq.a?.en}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* RIGHT: Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-24 h-fit">
            
            {/* Quick Info Card */}
            <div className="bg-white border border-[#C5A862]/15 p-6 space-y-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[4px] bg-[#C5A862]" />
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-[#1A1E1D] border-b border-[#C5A862]/10 pb-3">
                Quick Guide
              </h3>
              
              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-[9px] uppercase tracking-wider font-bold text-[#1A1E1D]/40 block mb-1">{text.daysNeeded}</span>
                  <span className="text-[#1A1E1D]/80 font-semibold">{daysNeeded} {text.days}</span>
                </div>
                <div className="border-t border-[#C5A862]/10 pt-3">
                  <span className="text-[9px] uppercase tracking-wider font-bold text-[#1A1E1D]/40 block mb-1">{text.bestTime}</span>
                  <span className="text-[#1A1E1D]/80 font-semibold">{city.bestTime?.[lang] || city.bestTime?.en}</span>
                </div>
                {city.weather && (
                  <div className="border-t border-[#C5A862]/10 pt-3">
                    <span className="text-[9px] uppercase tracking-wider font-bold text-[#1A1E1D]/40 block mb-1">{text.weather}</span>
                    <span className="text-[#1A1E1D]/70 font-light leading-relaxed block">{city.weather?.[lang] || city.weather?.en}</span>
                  </div>
                )}
                {city.localFood && (
                  <div className="border-t border-[#C5A862]/10 pt-3">
                    <span className="text-[9px] uppercase tracking-wider font-bold text-[#1A1E1D]/40 block mb-1 flex items-center gap-1"><Utensils className="w-3 h-3" /> {text.food}</span>
                    <span className="text-[#1A1E1D]/70 font-light leading-relaxed block">{city.localFood?.[lang] || city.localFood?.en}</span>
                  </div>
                )}
                {city.shopping && (
                  <div className="border-t border-[#C5A862]/10 pt-3">
                    <span className="text-[9px] uppercase tracking-wider font-bold text-[#1A1E1D]/40 block mb-1 flex items-center gap-1"><ShoppingBag className="w-3 h-3" /> {text.shopping}</span>
                    <span className="text-[#1A1E1D]/70 font-light leading-relaxed block">{city.shopping?.[lang] || city.shopping?.en}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Travel Tips */}
            {city.travelTips?.length > 0 && (
              <div className="bg-white border border-[#C5A862]/15 p-6 space-y-4">
                <h3 className="text-[10px] uppercase tracking-widest font-bold text-[#1A1E1D]">{text.tips}</h3>
                <ul className="space-y-2.5">
                  {city.travelTips.map((tip: any, idx: number) => (
                    <li key={idx} className="text-xs text-[#1A1E1D]/70 font-light leading-relaxed flex gap-2">
                      <span className="text-[#C5A862] font-bold shrink-0">&bull;</span>
                      <span>{tip?.[lang] || tip?.en}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Nearby Places */}
            {city.nearbyPlaces?.length > 0 && (
              <div className="bg-white border border-[#C5A862]/15 p-6 space-y-4">
                <h3 className="text-[10px] uppercase tracking-widest font-bold text-[#1A1E1D]">{text.nearby}</h3>
                <div className="space-y-2.5">
                  {city.nearbyPlaces.map((place: any, idx: number) => (
                    <div key={idx} className="flex items-center justify-between text-xs border-b border-[#C5A862]/5 pb-2 last:border-0 last:pb-0">
                      <span className="text-[#1A1E1D]/75 font-medium">{place.name}</span>
                      <span className="text-[#1A1E1D]/40 text-[10px]">{place.distance}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="bg-[#0A2A1E] p-6 space-y-4 text-white">
              <h4 className="text-sm font-bold">Explore {cityTitle}?</h4>
              <p className="text-[11px] text-white/60 font-light leading-relaxed">
                Let us craft a personalized itinerary for your visit to {cityTitle} and {stateTitle}.
              </p>
              <Link 
                href={`/${locale}/contact`} 
                className="block w-full text-center bg-[#C5A862] text-[#0A2A1E] text-[10px] font-bold uppercase tracking-wider py-3 hover:bg-[#D8BE83] transition-colors"
              >
                {text.inquireCta}
              </Link>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
