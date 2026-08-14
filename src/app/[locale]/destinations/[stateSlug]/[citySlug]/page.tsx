import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getStateBySlugAction, getTourPackagesAction } from "@/app/actions/queries";
import SidebarInquiryForm from "@/components/common/SidebarInquiryForm";
import { 
  Calendar, Landmark, Compass, Clock, ArrowRight, ArrowLeft, MapPin, 
  Utensils, ShoppingBag, Sun, Users, Hotel, HelpCircle, Navigation,
  Phone, MessageSquare, Shield, Info, Activity, List, DollarSign,
  Image as ImageIcon
} from "lucide-react";
import Reveal from "@/components/home/Reveal";
import { db } from "@/lib/db";

interface CityPageProps {
  params: Promise<{ locale: string; stateSlug: string; citySlug: string }>;
}

export async function generateMetadata({ params }: CityPageProps) {
  const { locale, stateSlug, citySlug } = await params;
  const state = await getStateBySlugAction(stateSlug) as any;
  if (!state) return {};
  const city = state.cities?.find((c: any) => c.slug === citySlug);
  if (!city) return {};
  const lang = (locale === "es" || locale === "pt") ? locale : "en";

  const title = city.seo?.title?.[lang] || city.seo?.title?.en || city.title?.[lang] || city.title?.en || "";
  const description = city.seo?.description?.[lang] || city.seo?.description?.en || city.tagline?.[lang] || city.tagline?.en || "";
  const keywords = city.seo?.keywords?.[lang] || city.seo?.keywords?.en || "";

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: city.seo?.ogTitle || title,
      description: city.seo?.ogDescription || description,
      images: city.seo?.ogImage ? [{ url: city.seo?.ogImage }] : [{ url: city.image }],
    },
    alternates: {
      canonical: city.seo?.canonicalUrl || `/${locale}/destinations/${stateSlug}/${citySlug}`,
    },
    robots: {
      index: city.seo?.indexRule !== "noindex",
      follow: city.seo?.followRule !== "nofollow",
    }
  };
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

  // Get related packages
  const allPackages = await getTourPackagesAction() as any[];
  const relatedPackages = allPackages?.filter((pkg: any) => {
    // If relatedTours list is explicitly configured in city CMS
    if (city.relatedTours && city.relatedTours.length > 0) {
      return city.relatedTours.includes(pkg.slug);
    }
    const pkgTitle = (pkg.title?.en || "").toLowerCase();
    const pkgDesc = (pkg.tagline?.en || "").toLowerCase();
    return pkgTitle.includes(citySlug) || pkgTitle.includes(stateSlug) || pkgDesc.includes(cityTitle?.toLowerCase()) || pkgDesc.includes(stateTitle?.toLowerCase());
  }).slice(0, 6) || [];

  // Calculate days needed
  const daysNeeded = city.statistics?.recommendedDays || (city.attractions?.length <= 2 ? "1-2" : "2-3");

  const text = {
    backToState: locale === "es" ? `Volver a ${stateTitle}` : locale === "pt" ? `Voltar para ${stateTitle}` : `Back to ${stateTitle}`,
    destinations: locale === "es" ? "Destinos" : locale === "pt" ? "Destinos" : "Destinations",
    overview: locale === "es" ? "Descripción General" : locale === "pt" ? "Visão Geral" : "Overview",
    placesToVisit: locale === "es" ? "Lugares para Visitar" : locale === "pt" ? "Lugares para Visitar" : "Places to Visit",
    thingsToDo: locale === "es" ? "Qué Hacer (Actividades)" : locale === "pt" ? "O que Fazer (Atividades)" : "Things to Do (Activities)",
    daysNeeded: locale === "es" ? "Días Recomendados" : locale === "pt" ? "Dias Recomendados" : "Recommended Days",
    bestTime: locale === "es" ? "Mejor Época" : locale === "pt" ? "Melhor Época" : "Best Time to Visit",
    food: locale === "es" ? "Gastronomía Local" : locale === "pt" ? "Gastronomia Local" : "Local Food",
    shopping: locale === "es" ? "Compras" : locale === "pt" ? "Compras" : "Shopping Guide",
    weather: locale === "es" ? "Clima" : locale === "pt" ? "Clima" : "Weather & Climate",
    itinerary: locale === "es" ? "Itinerario Sugerido" : locale === "pt" ? "Itinerário Sugerido" : "Suggested Itinerary",
    history: locale === "es" ? "Historia" : locale === "pt" ? "História" : "History & Heritage",
    culture: locale === "es" ? "Cultura" : locale === "pt" ? "Cultura" : "Culture & Arts",
    packages: locale === "es" ? "Paquetes de Viajes Relacionados" : locale === "pt" ? "Pacotes de Viagens Relacionados" : "Related Tour Packages",
    nearby: locale === "es" ? "Lugares Cercanos" : locale === "pt" ? "Lugares Próximos" : "Nearby Excursions",
    faqs: locale === "es" ? "Preguntas Frecuentes" : locale === "pt" ? "Perguntas Frequentes" : "FAQs",
    tips: locale === "es" ? "Consejos de Viaje" : locale === "pt" ? "Dicas de Viagem" : "Travel Tips",
    hotels: locale === "es" ? "Dónde Alojarse" : locale === "pt" ? "Onde se Hospedar" : "Where to Stay (Hotels)",
    inquireCta: locale === "es" ? "Planificar Viaje" : locale === "pt" ? "Planejar Viagem" : "Plan Your Journey",
    days: locale === "es" ? "días" : locale === "pt" ? "dias" : "days",
    whyVisit: locale === "es" ? "Por Qué Visitar" : locale === "pt" ? "Por Que Visitar" : "Why Visit (Highlights)",
    experiences: locale === "es" ? "Experiencias Recomendadas" : locale === "pt" ? "Experiências Recomendadas" : "Recommended Experiences",
    gettingAround: locale === "es" ? "Cómo Moverse" : locale === "pt" ? "Como se Locomover" : "Getting Around (Transport)",
    travelInfo: locale === "es" ? "Información de Viaje" : locale === "pt" ? "Informações de Viagem" : "Travel Information",
    gallery: locale === "es" ? "Galería de Fotos" : locale === "pt" ? "Galeria de Fotos" : "Photo Gallery",
    ctaTitle: locale === "es" ? "¿Listo para Descubrir " + cityTitle + "?" : locale === "pt" ? "Pronto para Descobrir " + cityTitle + "?" : "Ready to Discover " + cityTitle + "?"
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-royal font-sans relative overflow-hidden">
      {/* Soft background grid texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#C5A862_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* 1. Hero Section */}
      <section className="relative h-[65vh] min-h-[440px] lg:h-[70vh] flex items-end overflow-hidden pt-28">
        <img 
          src={city.hero?.image || city.image} 
          alt={cityTitle} 
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.80] contrast-[1.02]" 
          loading="eager" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />
        
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
            {city.hero?.title?.[lang] || city.hero?.title?.en || cityTitle}
          </h1>
          <p className="text-xs md:text-sm text-white/80 max-w-xl font-light leading-relaxed">
            {city.hero?.subtitle?.[lang] || city.hero?.subtitle?.en || cityTagline}
          </p>
          
          {/* Quick Info Tags */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-sm">
              <Clock className="w-3.5 h-3.5 text-gold" /> {daysNeeded}
            </span>
            <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-sm">
              <Landmark className="w-3.5 h-3.5 text-gold" /> {(city.attractions || []).length} {locale === "es" ? "Lugares" : locale === "pt" ? "Lugares" : "Attractions"}
            </span>
            {city.bestTime && (
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-sm">
                <Sun className="w-3.5 h-3.5 text-gold" /> {city.bestTimeToVisit?.bestTime?.[lang] || city.bestTimeToVisit?.bestTime?.en || city.bestTime?.[lang] || city.bestTime?.en}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Split Details Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Core Editorial Details */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* 2. Overview Section */}
            <Reveal className="space-y-4">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-gold" />
                <h2 className="text-[10px] font-bold uppercase tracking-widest text-gold">{text.overview}</h2>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-royal">
                {cityTitle} - Guide Overview
              </h3>
              <div className="text-sm md:text-base text-royal/70 leading-relaxed font-light whitespace-pre-wrap space-y-4">
                {city.fullDescription?.[lang] || city.fullDescription?.en || cityOverview}
              </div>
            </Reveal>

            {/* 3. Why Visit (Destination Highlights) */}
            {city.highlights && city.highlights.length > 0 && (
              <section className="space-y-8">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-gold" />
                  <h2 className="text-[10px] font-bold uppercase tracking-widest text-gold">{text.whyVisit}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {city.highlights.map((hl: any, i: number) => (
                    <div key={i} className="bg-white border border-beige/45 p-6 rounded-3xl space-y-3 shadow-sm">
                      <h4 className="font-serif font-bold text-base text-royal">{hl.title?.[lang] || hl.title?.en}</h4>
                      <p className="text-xs text-royal/70 leading-relaxed font-light">{hl.desc?.[lang] || hl.desc?.en}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 4. Places to Visit (Attractions) */}
            {city.attractions && city.attractions.length > 0 && (
              <section className="space-y-8">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold" />
                  <h2 className="text-[10px] font-bold uppercase tracking-widest text-gold">{text.placesToVisit}</h2>
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-royal">
                  Explore Monument Landmarks & Historic Places
                </h3>
                <div className="space-y-6">
                  {city.attractions.map((att: any, idx: number) => (
                    <div key={idx} className="bg-white border border-beige/45 overflow-hidden flex flex-col sm:flex-row hover:border-gold/30 hover:shadow-xl transition-all duration-300 rounded-3xl shadow-sm">
                      {att.image && (
                        <div className="sm:w-44 md:w-52 h-44 sm:h-auto shrink-0 overflow-hidden relative">
                          <img src={att.image} alt={att.name?.[lang] || att.name?.en} className="w-full h-full object-cover" />
                          {att.isUNESCO && (
                            <span className="absolute top-3 left-3 bg-gold text-royal text-[8px] font-extrabold uppercase px-2 py-0.5 rounded tracking-wider shadow-md">UNESCO Heritage</span>
                          )}
                        </div>
                      )}
                      <div className="p-6 flex flex-col justify-between flex-grow space-y-4 text-xs">
                        <div className="space-y-2">
                          <h4 className="text-base font-bold text-royal font-serif">{att.name?.[lang] || att.name?.en}</h4>
                          {att.location && (
                            <span className="text-[9px] text-[#C3AB85] font-semibold uppercase tracking-wider block">{att.location}</span>
                          )}
                          <p className="text-xs text-royal/75 leading-relaxed font-light">{att.desc?.[lang] || att.desc?.en}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 border-t border-beige/25 pt-3 text-[9px] font-bold uppercase text-royal/40 tracking-wider">
                          {att.openingHours && (
                            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-gold" /> Hours: {att.openingHours}</span>
                          )}
                          {att.entryFee && (
                            <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5 text-gold" /> Fee: {att.entryFee}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 5. Things to Do */}
            {city.thingsToDo && city.thingsToDo.length > 0 && (
              <section className="space-y-8">
                <div className="flex items-center gap-2">
                  <List className="w-5 h-5 text-gold" />
                  <h2 className="text-[10px] font-bold uppercase tracking-widest text-gold">{text.thingsToDo}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {city.thingsToDo.map((todo: any, idx: number) => {
                    const isObj = typeof todo === "object" && todo !== null && todo.name;
                    const todoName = isObj ? (todo.name?.[lang] || todo.name?.en) : (todo?.[lang] || todo?.en || todo);
                    const todoDesc = isObj ? (todo.desc?.[lang] || todo.desc?.en) : "";
                    
                    return (
                      <div key={idx} className="bg-white border border-beige/45 p-6 rounded-3xl space-y-3 shadow-sm hover:border-gold/30 hover:shadow-md transition-all">
                        {isObj && todo.image && (
                          <div className="h-32 w-full overflow-hidden rounded-2xl mb-2">
                            <img src={todo.image} alt={todoName} className="w-full h-full object-cover" />
                          </div>
                        )}
                        <h4 className="font-serif font-bold text-base text-royal">{todoName}</h4>
                        {todoDesc && <p className="text-xs text-royal/70 leading-relaxed font-light">{todoDesc}</p>}
                        {isObj && (todo.duration || todo.price) && (
                          <div className="flex justify-between items-center text-[9px] uppercase tracking-wider text-royal/40 pt-2 border-t border-beige/25">
                            <span>Duration: {todo.duration || "N/A"}</span>
                            <span className="font-bold text-royal">{todo.price}</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* 6. Curated Experiences */}
            {city.experiences && city.experiences.length > 0 && (
              <section className="space-y-8">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-gold" />
                  <h2 className="text-[10px] font-bold uppercase tracking-widest text-gold">{text.experiences}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {city.experiences.map((exp: any, idx: number) => (
                    <div key={idx} className="bg-white border border-beige/45 p-6 rounded-3xl space-y-4 shadow-sm hover:shadow-md transition-all">
                      {exp.image && (
                        <div className="h-36 w-full overflow-hidden rounded-2xl">
                          <img src={exp.image} alt={exp.title?.[lang] || exp.title?.en} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <h4 className="font-serif font-bold text-base text-royal">{exp.title?.[lang] || exp.title?.en}</h4>
                      <p className="text-xs text-royal/70 leading-relaxed font-light">{exp.desc?.[lang] || exp.desc?.en}</p>
                      <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-wider text-royal/40 pt-2 border-t border-beige/25">
                        <span>{exp.duration || "N/A"} • {exp.location || "Local"}</span>
                        <span className="text-royal">{exp.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 7. Best Time to Visit Season Details */}
            {city.bestTimeToVisit && (
              <section className="bg-white border border-beige/45 p-8 rounded-3xl space-y-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <Sun className="w-5 h-5 text-gold" />
                  <h2 className="text-[10px] font-bold uppercase tracking-widest text-gold">{text.bestTime}</h2>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-serif font-bold text-royal">Best seasons to explore {cityTitle}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs border-b border-beige/35 pb-4">
                    <div className="space-y-1">
                      <span className="font-bold text-gold uppercase tracking-wider">Peak Season</span>
                      <p className="text-royal/80">{city.bestTimeToVisit.peakSeason || "Winter months"}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-bold text-[#C3AB85] uppercase tracking-wider">Shoulder Season</span>
                      <p className="text-royal/80">{city.bestTimeToVisit.shoulderSeason || "October, March"}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-bold text-royal/40 uppercase tracking-wider">Off Season</span>
                      <p className="text-royal/80">{city.bestTimeToVisit.offSeason || "Monsoon & Summer"}</p>
                    </div>
                  </div>
                  {city.bestTimeToVisit.weatherDesc && (
                    <div className="space-y-2 pt-2 text-xs">
                      <span className="font-bold text-royal uppercase tracking-wider block">Climate Insights</span>
                      <p className="text-royal/70 font-light leading-relaxed">{city.bestTimeToVisit.weatherDesc[lang] || city.bestTimeToVisit.weatherDesc.en}</p>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* 8. Local Food Dishes */}
            {city.localFoodDishes && city.localFoodDishes.length > 0 && (
              <section className="space-y-8">
                <div className="flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-gold" />
                  <h2 className="text-[10px] font-bold uppercase tracking-widest text-gold">{text.food}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {city.localFoodDishes.map((food: any, idx: number) => (
                    <div key={idx} className="bg-white border border-beige/45 p-6 rounded-3xl space-y-4 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                      <div className="space-y-3">
                        {food.image && (
                          <div className="h-32 w-full overflow-hidden rounded-2xl">
                            <img src={food.image} alt={food.name?.[lang] || food.name?.en} className="w-full h-full object-cover" />
                          </div>
                        )}
                        <div className="flex items-center justify-between">
                          <h4 className="font-serif font-bold text-base text-royal">{food.name?.[lang] || food.name?.en}</h4>
                          <span className={`text-[8px] font-extrabold uppercase px-2 py-0.5 rounded border ${food.isVeg ? "bg-emerald-50 text-emerald-600 border-emerald-200" : "bg-red-50 text-red-600 border-red-200"}`}>
                            {food.isVeg ? "Veg" : "Non-Veg"}
                          </span>
                        </div>
                        <p className="text-xs text-royal/70 leading-relaxed font-light">{food.desc?.[lang] || food.desc?.en}</p>
                      </div>
                      {food.whereToTry && (
                        <div className="text-[9px] uppercase tracking-wider text-royal/40 pt-2 border-t border-beige/25 mt-3">
                          Where to try: <span className="font-bold text-royal">{food.whereToTry}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 9. Where to Stay (Hotels catalog) */}
            {city.hotels && city.hotels.length > 0 && (
              <section className="space-y-8">
                <div className="flex items-center gap-2">
                  <Hotel className="w-5 h-5 text-gold" />
                  <h2 className="text-[10px] font-bold uppercase tracking-widest text-gold">{text.hotels}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {city.hotels.map((hotel: any, idx: number) => (
                    <div key={idx} className="bg-white border border-beige/45 p-6 rounded-3xl space-y-4 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                      <div className="space-y-3">
                        {hotel.image && (
                          <div className="h-36 w-full overflow-hidden rounded-2xl">
                            <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                          </div>
                        )}
                        <div className="flex items-center justify-between">
                          <h4 className="font-serif font-bold text-base text-royal">{hotel.name}</h4>
                          <span className="text-[8px] bg-royal/10 text-royal px-2.5 py-0.5 rounded font-extrabold border border-gold/15 uppercase">{hotel.tier}</span>
                        </div>
                        {hotel.location && (
                          <span className="text-[9px] text-[#C3AB85] font-semibold uppercase tracking-wider block">{hotel.location}</span>
                        )}
                        <p className="text-xs text-royal/70 leading-relaxed font-light">{hotel.desc?.[lang] || hotel.desc?.en}</p>
                      </div>
                      <div className="flex justify-between items-center text-[9px] uppercase tracking-wider text-royal/40 pt-2 border-t border-beige/25 mt-4">
                        <span>Price Standard: {hotel.priceRange || "$$"}</span>
                        {hotel.url && (
                          <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="font-bold text-gold hover:underline">Book Online</a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 10. Getting Around (Transportation) */}
            {city.gettingAround && city.gettingAround.length > 0 && (
              <section className="space-y-8">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-gold" />
                  <h2 className="text-[10px] font-bold uppercase tracking-widest text-gold">{text.gettingAround}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {city.gettingAround.map((trans: any, idx: number) => (
                    <div key={idx} className="bg-white border border-beige/45 p-6 rounded-3xl space-y-3 shadow-sm">
                      <div className="flex justify-between items-center pb-2 border-b border-beige/20">
                        <span className="font-serif font-bold text-base text-royal">{trans.transportType}</span>
                        {trans.recommended && (
                          <span className="text-[8px] bg-emerald-50 text-emerald-600 border border-emerald-200 px-2 py-0.5 rounded font-bold uppercase">Recommended</span>
                        )}
                      </div>
                      <h5 className="font-bold text-xs text-royal/80">{trans.title?.[lang] || trans.title?.en}</h5>
                      <p className="text-xs text-royal/70 leading-relaxed font-light">{trans.desc?.[lang] || trans.desc?.en}</p>
                      <div className="text-[9px] uppercase tracking-wider text-royal/40 pt-2">
                        Fare Standard: <span className="font-bold text-royal">{trans.priceRange || "$$"}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 11. Travel Information */}
            {city.travelInfo && (
              <section className="bg-white border border-beige/45 p-8 rounded-3xl space-y-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-gold" />
                  <h2 className="text-[10px] font-bold uppercase tracking-widest text-[#C3AB85]">{text.travelInfo}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                  {city.travelInfo.howToReach && (
                    <div className="space-y-1 col-span-full">
                      <span className="font-bold uppercase tracking-wider block text-royal/40">How to Reach</span>
                      <p className="text-royal/80 leading-relaxed font-light">{city.travelInfo.howToReach[lang] || city.travelInfo.howToReach.en}</p>
                    </div>
                  )}
                  {city.travelInfo.nearestAirport && (
                    <div className="space-y-1">
                      <span className="font-bold uppercase tracking-wider block text-royal/40">Nearest Airport</span>
                      <p className="text-royal font-medium">{city.travelInfo.nearestAirport}</p>
                    </div>
                  )}
                  {city.travelInfo.nearestRailway && (
                    <div className="space-y-1">
                      <span className="font-bold uppercase tracking-wider block text-royal/40">Nearest Railway</span>
                      <p className="text-royal font-medium">{city.travelInfo.nearestRailway}</p>
                    </div>
                  )}
                  {city.travelInfo.localLanguage && (
                    <div className="space-y-1">
                      <span className="font-bold uppercase tracking-wider block text-royal/40">Local Language</span>
                      <p className="text-royal font-medium">{city.travelInfo.localLanguage}</p>
                    </div>
                  )}
                  {city.travelInfo.currency && (
                    <div className="space-y-1">
                      <span className="font-bold uppercase tracking-wider block text-royal/40">Local Currency</span>
                      <p className="text-royal font-medium">{city.travelInfo.currency}</p>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* 12. Travel Tips */}
            {city.travelTips && city.travelTips.length > 0 && (
              <section className="space-y-6">
                <div className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-gold" />
                  <h2 className="text-[10px] font-bold uppercase tracking-widest text-gold">{text.tips}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {city.travelTips.map((tip: any, idx: number) => {
                    const tipTitle = tip.title?.[lang] || tip.title?.en || tip;
                    const tipDesc = tip.desc?.[lang] || tip.desc?.en || "";
                    
                    return (
                      <div key={idx} className="bg-white border border-beige/45 p-6 rounded-3xl shadow-sm space-y-2">
                        <h4 className="font-serif font-bold text-sm text-royal flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-gold/10 text-gold flex items-center justify-center font-serif text-[10px]">!</span>
                          {tipTitle}
                        </h4>
                        {tipDesc && <p className="text-xs text-royal/70 leading-relaxed font-light">{tipDesc}</p>}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* 13. Gallery Grid */}
            {city.gallery && city.gallery.length > 0 && (
              <section className="space-y-8">
                <div className="flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-gold" />
                  <h2 className="text-[10px] font-bold uppercase tracking-widest text-[#C3AB85]">{text.gallery}</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {city.gallery.map((img: any, i: number) => {
                    const imgUrl = typeof img === 'string' ? img : img.url;
                    return (
                      <div key={i} className="h-44 overflow-hidden rounded-2xl border border-beige/40 shadow-sm relative group cursor-pointer">
                        <img src={imgUrl} alt={cityTitle} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* 15. FAQs Accordion */}
            {city.faqs && city.faqs.length > 0 && (
              <section className="space-y-6">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-gold" />
                  <h2 className="text-[10px] font-bold uppercase tracking-widest text-[#C3AB85]">{text.faqs}</h2>
                </div>
                <div className="space-y-3">
                  {city.faqs.map((faq: any, idx: number) => (
                    <details key={idx} className="group bg-white border border-beige/45 overflow-hidden rounded-2xl shadow-sm" open={idx === 0}>
                      <summary className="flex items-center justify-between p-5 cursor-pointer text-[13px] md:text-sm font-bold text-royal hover:bg-[#FAF8F5] transition-colors list-none">
                        <span>{faq.q?.[lang] || faq.q?.en}</span>
                        <ArrowRight className="w-4 h-4 text-gold transition-transform group-open:rotate-90 shrink-0 ml-2" />
                      </summary>
                      <div className="px-5 pb-5 text-xs text-royal/75 leading-relaxed font-light border-t border-beige/25 pt-4">
                        {faq.a?.[lang] || faq.a?.en}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* Right Column: Sticky Sidebar Info & Enquiry Form */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 h-fit">
            
            {/* Sidebar Contact Enquiry Form at the very top */}
            <SidebarInquiryForm locale={locale} defaultDestination={`${stateTitle} - ${cityTitle}`} />

            {/* 14. Related Tours Links catalog */}
            {relatedPackages.length > 0 && (
              <div className="bg-white border border-beige/45 p-6 rounded-3xl shadow-sm space-y-4">
                <h3 className="text-[10px] uppercase tracking-wider font-extrabold text-[#C3AB85] border-b border-beige/25 pb-3">
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

            {/* 16. Bottom Call To Action */}
            <div className="bg-royal border border-gold/15 p-6 rounded-3xl shadow-lg relative overflow-hidden text-white space-y-5">
              <div className="absolute top-0 left-0 w-full h-[4px] bg-gold" />
              <div className="space-y-2">
                <h4 className="text-lg font-serif font-bold text-white tracking-tight">{text.ctaTitle}</h4>
                <p className="text-[11px] text-white/70 font-light leading-relaxed">
                  We customize the itinerary to fit your travel style, boutique hotels standards, activities pace and group size.
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
                href={`/${locale}/contact?destination=${stateSlug}-${citySlug}`}
                className="w-full text-center bg-gold hover:bg-gold-light text-royal font-bold text-[10px] uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{text.inquireCta}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
