"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ChevronRight, Clock, HelpCircle, Phone, Mail, MapPin, 
  Utensils, Hotel, Bus, Lightbulb, Sparkles, Compass, 
  Calendar, Star, ArrowRight, Award, ShieldCheck, Heart
} from "lucide-react";
import SidebarInquiryForm from "@/components/common/SidebarInquiryForm";
import PageHeroSlider from "@/components/common/PageHeroSlider";
import { getLocalizedDestinationsPath, extractLocalizedString } from "@/lib/utils";

interface CityDetailPageProps {
  locale: string;
  state: any;
  city: any;
  relatedPackages: any[];
}

export default function CityDetailPage({ locale, state, city, relatedPackages }: CityDetailPageProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const lang = (locale === "es" || locale === "pt") ? locale : "en";

  const stateTitle = extractLocalizedString(state.name, lang) || extractLocalizedString(state.title, lang) || state.id;
  const cityTitle = extractLocalizedString(city.name, lang) || extractLocalizedString(city.title, lang) || city.id;
  const cityShortDesc = extractLocalizedString(city.shortDescription, lang) || extractLocalizedString(city.description, lang);
  const cityOverview = extractLocalizedString(city.fullDescription, lang) || extractLocalizedString(city.overview, lang) || extractLocalizedString(city.content, lang);
  const cityContent = extractLocalizedString(city.content, lang);
  const cityImage = city.image || city.hero?.image || "/images/destination_fallback.jpg";

  const t: Record<string, any> = {
    en: {
      home: "Home",
      destinations: "Destinations in India",
      overview: "About Destination",
      highlights: "Destination Highlights",
      thingsToDo: "Things To Do",
      experiences: "Curated Experiences",
      hotels: "Where To Stay",
      travelTips: "Essential Travel Tips",
      faqs: "Frequently Asked Questions",
      gettingAround: "Getting Around",
      localFood: "Local Cuisine & Delicacies",
      travelInfo: "Travel Information",
      relatedToursTitle: "Suggested Travel Packages",
      ctaTitle: "Need Help Planning Your Trip?",
      ctaDesc: "We specialize in tailor-made luxury itineraries tailored specifically to your budget and interests.",
      phone: "+91 9314635830",
      email: "info@mhindiatrips.com",
      readMore: "Read More",
      recommended: "Recommended",
      topPlacesTitle: `Top Attractions in ${cityTitle}`,
      topPlacesSubtitle: "Handpicked historical, cultural, and natural landmarks you must visit.",
      bestTime: "Best Time to Visit",
      bestTimeVal: "October to March",
      idealDuration: "Ideal Duration",
      idealDurationVal: "2 - 4 Days",
      popularFor: "Popular For",
      popularForVal: "Culture, Heritage & Scenery",
      inquireNow: "Inquire Now",
      viewPackage: "View Package",
      tagsLabel: "Tags:"
    },
    es: {
      home: "Inicio",
      destinations: "Destinos en India",
      overview: "Sobre el Destino",
      highlights: "Aspectos Destacados",
      thingsToDo: "Qué Hacer",
      experiences: "Experiencias Curadas",
      hotels: "Dónde Alojarse",
      travelTips: "Consejos Esenciales de Viaje",
      faqs: "Preguntas Frecuentes",
      gettingAround: "Cómo Moverse",
      localFood: "Gastronomía Local",
      travelInfo: "Información de Viaje",
      relatedToursTitle: "Paquetes de Viaje Sugeridos",
      ctaTitle: "¿Necesitas Ayuda para Planificar?",
      ctaDesc: "Nos especializamos en itinerarios de lujo a medida adaptados a tu presupuesto e intereses.",
      phone: "+91 9314635830",
      email: "info@mhindiatrips.com",
      readMore: "Leer Más",
      recommended: "Recomendado",
      topPlacesTitle: `Lugares Turísticos Destacados en ${cityTitle}`,
      topPlacesSubtitle: "Lugares históricos, culturales y naturales imprescindibles que debes visitar.",
      bestTime: "Mejor Época para Visitar",
      bestTimeVal: "Octubre a Marzo",
      idealDuration: "Duración Ideal",
      idealDurationVal: "2 - 4 Días",
      popularFor: "Famoso Por",
      popularForVal: "Cultura, Patrimonio y Paisajes",
      inquireNow: "Consultar Ahora",
      viewPackage: "Ver Paquete",
      tagsLabel: "Etiquetas:"
    },
    pt: {
      home: "Início",
      destinations: "Destinos na Índia",
      overview: "Sobre o Destino",
      highlights: "Destaques do Destino",
      thingsToDo: "O Que Fazer",
      experiences: "Experiências Selecionadas",
      hotels: "Onde Se Hospedar",
      travelTips: "Dicas Essenciais de Viagem",
      faqs: "Perguntas Frequentes",
      gettingAround: "Como Se Locomover",
      localFood: "Gastronomia Local",
      travelInfo: "Informações de Viagem",
      relatedToursTitle: "Pacotes de Viagem Sugeridos",
      ctaTitle: "Precisa de Ajuda para Planejar?",
      ctaDesc: "Especializamo-nos em roteiros de luxo personalizados sob medida para o seu orçamento e interesse.",
      phone: "+91 9314635830",
      email: "info@mhindiatrips.com",
      readMore: "Leia Mais",
      recommended: "Recomendado",
      topPlacesTitle: `Principais Atrações em ${cityTitle}`,
      topPlacesSubtitle: "Locais históricos, culturais e naturais imperdíveis para sua viagem.",
      bestTime: "Melhor Época para Visitar",
      bestTimeVal: "Outubro a Março",
      idealDuration: "Duração Ideal",
      idealDurationVal: "2 - 4 Dias",
      popularFor: "Famoso Por",
      popularForVal: "Cultura, Patrimônio e Paisagens",
      inquireNow: "Solicitar Orçamento",
      viewPackage: "Ver Pacote",
      tagsLabel: "Tags:"
    }
  };

  const text = t[locale] || t.en;
  const stateSlug = state.slug?.[lang] || state.slug?.en || state.slug || state.id;

  // Helper to extract localized text
  const getLocText = (field: any): string => extractLocalizedString(field, lang);

  // Lists
  const touristPlaces = Array.isArray(city.touristPlaces) ? city.touristPlaces : (Array.isArray(city.famousPlacesToVisit) ? city.famousPlacesToVisit : []);
  const highlights = Array.isArray(city.highlights) ? city.highlights : [];
  const thingsToDo = Array.isArray(city.thingsToDo) ? city.thingsToDo : [];
  const experiences = Array.isArray(city.experiences) ? city.experiences : [];
  const hotels = Array.isArray(city.hotels) ? city.hotels : [];
  const travelTips = Array.isArray(city.travelTips) ? city.travelTips : [];
  const faqs = Array.isArray(city.faqs) ? city.faqs : [];
  const gettingAround = Array.isArray(city.gettingAround) ? city.gettingAround : [];
  const localFoodDishes = Array.isArray(city.localFoodDishes) ? city.localFoodDishes : [];

  // Build slider slides
  const cleanCityDesc = cityShortDesc.length > 120 ? cityShortDesc.slice(0, 117) + "..." : cityShortDesc;
  const sliderSlides: any[] = [
    {
      image: cityImage,
      title: cityTitle,
      subtitle: `${stateTitle}, India`,
      location: `${cityTitle}, ${stateTitle}`,
      description: cleanCityDesc,
      objectPosition: "center 25%"
    }
  ];

  highlights.forEach((h: any) => {
    const img = h.image || h.img;
    if (img && sliderSlides.length < 5) {
      const rawHDesc = getLocText(h.description);
      const cleanHDesc = rawHDesc.length > 90 ? rawHDesc.slice(0, 87) + "..." : rawHDesc;
      sliderSlides.push({
        image: img,
        title: getLocText(h.title) || cityTitle,
        subtitle: text.highlights,
        location: `${cityTitle}, ${stateTitle}`,
        description: cleanHDesc,
        objectPosition: "center 25%"
      });
    }
  });

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B] selection:bg-[#C3AB85]/30">
      
      {/* 1. Hero Header Slider */}
      <PageHeroSlider locale={locale} slides={sliderSlides} showBreadcrumb={`${stateTitle} / ${cityTitle}`} />

      {/* 2. Floating Quick-Anchor Navigation Bar */}
      <div className="sticky top-[64px] z-30 bg-white/90 backdrop-blur-md border-b border-[#C3AB85]/20 shadow-sm transition-all hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-6 overflow-x-auto py-3 text-xs font-medium no-scrollbar">
            {cityOverview && (
              <a href="#overview" className="text-[#1A5C5A] hover:text-[#C3AB85] font-semibold whitespace-nowrap transition-colors">
                {text.overview}
              </a>
            )}
            {touristPlaces.length > 0 && (
              <a href="#top-places" className="text-[#1A5C5A] hover:text-[#C3AB85] font-semibold whitespace-nowrap transition-colors">
                {locale === "es" ? "Lugares Turísticos" : locale === "pt" ? "Pontos Turísticos" : "Top Attractions"}
              </a>
            )}
            {thingsToDo.length > 0 && (
              <a href="#things-to-do" className="text-[#1A5C5A] hover:text-[#C3AB85] font-semibold whitespace-nowrap transition-colors">
                {text.thingsToDo}
              </a>
            )}
            {experiences.length > 0 && (
              <a href="#experiences" className="text-[#1A5C5A] hover:text-[#C3AB85] font-semibold whitespace-nowrap transition-colors">
                {text.experiences}
              </a>
            )}
            {hotels.length > 0 && (
              <a href="#hotels" className="text-[#1A5C5A] hover:text-[#C3AB85] font-semibold whitespace-nowrap transition-colors">
                {text.hotels}
              </a>
            )}
            {localFoodDishes.length > 0 && (
              <a href="#local-food" className="text-[#1A5C5A] hover:text-[#C3AB85] font-semibold whitespace-nowrap transition-colors">
                {text.localFood}
              </a>
            )}
            {travelTips.length > 0 && (
              <a href="#travel-tips" className="text-[#1A5C5A] hover:text-[#C3AB85] font-semibold whitespace-nowrap transition-colors">
                {text.travelTips}
              </a>
            )}
            {faqs.length > 0 && (
              <a href="#faqs" className="text-[#1A5C5A] hover:text-[#C3AB85] font-semibold whitespace-nowrap transition-colors">
                {text.faqs}
              </a>
            )}
          </nav>
        </div>
      </div>

      {/* 3. Main Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Left Column (Main Content) */}
          <div className="lg:col-span-8 space-y-12 md:space-y-16">

            {/* Destination Meta Stats Card */}
            <div className="bg-white border border-[#C3AB85]/25 rounded-2xl p-6 shadow-sm grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#C3AB85]/15">
                <div className="flex justify-center mb-1 text-[#C3AB85]">
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#1A5C5A]/60 block">{text.bestTime}</span>
                <span className="text-xs sm:text-sm font-bold text-[#1A5C5A] mt-0.5 block">{text.bestTimeVal}</span>
              </div>
              <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#C3AB85]/15">
                <div className="flex justify-center mb-1 text-[#C3AB85]">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#1A5C5A]/60 block">{text.idealDuration}</span>
                <span className="text-xs sm:text-sm font-bold text-[#1A5C5A] mt-0.5 block">{text.idealDurationVal}</span>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3 bg-[#FAF8F5] rounded-xl border border-[#C3AB85]/15">
                <div className="flex justify-center mb-1 text-[#C3AB85]">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#1A5C5A]/60 block">{text.popularFor}</span>
                <span className="text-xs sm:text-sm font-bold text-[#1A5C5A] mt-0.5 block">{text.popularForVal}</span>
              </div>
            </div>

            {/* Overview / About Destination Section */}
            {cityOverview && (
              <div id="overview" className="bg-white border border-[#C3AB85]/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#1A5C5A]" />
                <div className="flex items-center gap-3 border-b border-[#C3AB85]/15 pb-4">
                  <Compass className="w-7 h-7 text-[#C3AB85]" />
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#C3AB85] font-bold block">{stateTitle}, INDIA</span>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A5C5A]">
                      {text.overview} {cityTitle}
                    </h2>
                  </div>
                </div>

                {/* HTML or Plaintext overview rendering */}
                {typeof cityOverview === 'string' && cityOverview.includes('<') ? (
                  <div 
                    className="prose max-w-none text-sm sm:text-base text-[#2D3748] leading-[1.9] font-light space-y-4 [&_h2]:text-2xl [&_h2]:font-serif [&_h2]:font-bold [&_h2]:text-[#1A5C5A] [&_h2]:mt-6 [&_h2]:mb-3 [&_h3]:text-xl [&_h3]:font-serif [&_h3]:font-semibold [&_h3]:text-[#1A5C5A] [&_h3]:mt-4 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:text-[#2D3748] [&_strong]:font-semibold [&_strong]:text-[#1A5C5A] [&_p]:mb-3"
                    dangerouslySetInnerHTML={{ __html: cityOverview }} 
                  />
                ) : (
                  <div className="text-sm sm:text-base text-[#2D3748] leading-[1.9] font-light whitespace-pre-line space-y-3">
                    {cityOverview}
                  </div>
                )}
              </div>
            )}

            {/* Top Tourist Places Section (Ultra-Premium Card Grid) */}
            {touristPlaces.length > 0 && (
              <div id="top-places" className="space-y-6 pt-2">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#C3AB85]/20 pb-4 gap-2">
                  <div>
                    <div className="flex items-center gap-2 text-[#C3AB85]">
                      <MapPin className="w-5 h-5" />
                      <span className="text-[11px] font-bold uppercase tracking-widest">{cityTitle} Tourism</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A5C5A] mt-1">
                      {text.topPlacesTitle}
                    </h2>
                  </div>
                  <span className="text-xs text-[#1A5C5A]/60 font-medium">
                    {touristPlaces.length} Places Listed
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {touristPlaces.map((place: any, pIdx: number) => {
                    const pName = getLocText(place.name) || place.title || `Place ${pIdx + 1}`;
                    const pDesc = getLocText(place.description) || getLocText(place.desc);
                    const pImg = place.image || place.img || cityImage;
                    const pAddress = place.address;
                    const pPhone = place.phone;

                    // Tags parsing
                    let placeTags: string[] = [];
                    if (place.tags) {
                      if (Array.isArray(place.tags)) {
                        placeTags = place.tags.map((t: any) => typeof t === "string" ? t : getLocText(t));
                      } else if (typeof place.tags === "object") {
                        const locTags = place.tags[lang] || place.tags.en;
                        if (Array.isArray(locTags)) placeTags = locTags;
                        else if (typeof locTags === "string") placeTags = locTags.split(",").map(t => t.trim());
                      }
                    }

                    return (
                      <div 
                        key={pIdx} 
                        className="bg-white border border-[#C3AB85]/25 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group hover:-translate-y-1"
                      >
                        {/* Image banner with index pill */}
                        <div className="h-52 sm:h-60 overflow-hidden relative bg-stone-100">
                          <img 
                            src={pImg} 
                            alt={pName} 
                            loading="lazy" 
                            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                          
                          {/* Top-left Number badge */}
                          <div className="absolute top-4 left-4 bg-[#1A5C5A] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-white/20">
                            <span>#{String(pIdx + 1).padStart(2, "0")}</span>
                          </div>

                          {/* Bottom title overlay */}
                          <div className="absolute bottom-4 left-4 right-4 text-white">
                            <h3 className="font-serif font-bold text-xl sm:text-2xl text-white drop-shadow-md leading-snug">
                              {pName}
                            </h3>
                          </div>
                        </div>

                        {/* Content Body */}
                        <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                          <div className="space-y-3">
                            {/* Address Badge if available */}
                            {pAddress && (
                              <div className="flex items-start gap-2 text-xs text-[#1A5C5A] bg-[#FAF8F5] border border-[#C3AB85]/20 p-2.5 rounded-xl font-medium">
                                <MapPin className="w-4 h-4 text-[#C3AB85] shrink-0 mt-0.5" />
                                <span className="line-clamp-2">{pAddress}</span>
                              </div>
                            )}

                            {/* Phone badge if available */}
                            {pPhone && (
                              <div className="flex items-center gap-2 text-xs text-[#1A5C5A]/80 font-medium">
                                <Phone className="w-3.5 h-3.5 text-[#C3AB85]" />
                                <span>{pPhone}</span>
                              </div>
                            )}

                            {/* Description */}
                            {pDesc && (
                              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed font-light">
                                {pDesc}
                              </p>
                            )}
                          </div>

                          {/* Tags Pills */}
                          {placeTags.length > 0 && (
                            <div className="pt-3 border-t border-[#C3AB85]/15 flex items-center flex-wrap gap-1.5">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C3AB85] mr-1">{text.tagsLabel}</span>
                              {placeTags.map((tagStr, tIdx) => (
                                <span 
                                  key={tIdx} 
                                  className="bg-[#FAF6EE] text-[#8B7340] border border-[#C3AB85]/30 rounded-full px-2.5 py-0.5 text-[10px] font-medium"
                                >
                                  {tagStr}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Things To Do Section */}
            {thingsToDo.length > 0 && (
              <div id="things-to-do" className="bg-white border border-[#C3AB85]/20 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex items-center gap-3 border-b border-[#C3AB85]/15 pb-4">
                  <Sparkles className="w-6 h-6 text-[#C3AB85]" />
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A5C5A]">
                    {text.thingsToDo}
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {thingsToDo.map((todo: any, i: number) => {
                    const name = getLocText(todo.name) || getLocText(todo);
                    const desc = getLocText(todo.desc);
                    return (
                      <div key={i} className="flex gap-3.5 items-start bg-[#FAF8F5] border border-[#C3AB85]/15 p-4 rounded-2xl">
                        <span className="shrink-0 w-8 h-8 bg-[#1A5C5A] text-white rounded-xl flex items-center justify-center text-xs font-bold shadow-sm">
                          {i + 1}
                        </span>
                        <div>
                          <h3 className="font-bold text-[#1A5C5A] text-sm sm:text-base">{name}</h3>
                          {desc && <p className="text-xs text-[#4A5568] mt-1 leading-relaxed font-light">{desc}</p>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Curated Experiences */}
            {experiences.length > 0 && (
              <div id="experiences" className="space-y-6">
                <div className="border-b border-[#C3AB85]/20 pb-4">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A5C5A]">
                    {text.experiences}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {experiences.map((exp: any, i: number) => {
                    const name = getLocText(exp.name);
                    const desc = getLocText(exp.desc);
                    return (
                      <div key={i} className="bg-white border border-[#C3AB85]/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-[#1A5C5A] text-base mb-2">{name}</h3>
                        {desc && <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed font-light">{desc}</p>}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Where To Stay (Hotels) */}
            {hotels.length > 0 && (
              <div id="hotels" className="space-y-6">
                <div className="flex items-center gap-3 border-b border-[#C3AB85]/20 pb-4">
                  <Hotel className="w-6 h-6 text-[#C3AB85]" />
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A5C5A]">
                    {text.hotels}
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {hotels.map((hotel: any, i: number) => {
                    const desc = getLocText(hotel.desc);
                    return (
                      <div key={i} className="bg-white border border-[#C3AB85]/20 rounded-2xl p-5 shadow-sm space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-[#1A5C5A] text-base">{hotel.name}</h3>
                          {hotel.tier && (
                            <span className="text-[10px] bg-[#FAF6EE] text-[#8B7340] border border-[#C3AB85]/30 px-2.5 py-0.5 rounded-full font-bold uppercase">
                              {hotel.tier}
                            </span>
                          )}
                        </div>
                        {desc && <p className="text-xs text-[#4A5568] leading-relaxed font-light">{desc}</p>}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Local Food & Cuisine */}
            {localFoodDishes.length > 0 && (
              <div id="local-food" className="space-y-6">
                <div className="flex items-center gap-3 border-b border-[#C3AB85]/20 pb-4">
                  <Utensils className="w-6 h-6 text-[#C3AB85]" />
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A5C5A]">
                    {text.localFood}
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {localFoodDishes.map((dish: any, i: number) => {
                    const name = getLocText(dish.name);
                    const desc = getLocText(dish.desc);
                    return (
                      <div key={i} className="bg-white border border-[#C3AB85]/20 rounded-2xl p-5 shadow-sm space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-[#1A5C5A] text-base">{name}</h3>
                          {dish.isVeg && (
                            <span className="w-3.5 h-3.5 border border-green-600 rounded-sm flex items-center justify-center shrink-0">
                              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                            </span>
                          )}
                        </div>
                        {desc && <p className="text-xs text-[#4A5568] leading-relaxed font-light">{desc}</p>}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Essential Travel Tips */}
            {travelTips.length > 0 && (
              <div id="travel-tips" className="bg-white border border-[#C3AB85]/20 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
                <div className="flex items-center gap-3 border-b border-[#C3AB85]/15 pb-4">
                  <Lightbulb className="w-6 h-6 text-[#C3AB85]" />
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A5C5A]">
                    {text.travelTips}
                  </h2>
                </div>
                <ul className="space-y-3.5">
                  {travelTips.map((tip: any, i: number) => {
                    const tipText = getLocText(tip);
                    return (
                      <li key={i} className="flex items-start gap-3 bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#C3AB85]/15">
                        <ShieldCheck className="w-5 h-5 text-[#C3AB85] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#2D3748] leading-relaxed font-light">{tipText}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* FAQs Section */}
            {faqs.length > 0 && (
              <div id="faqs" className="space-y-6">
                <div className="flex items-center gap-3 border-b border-[#C3AB85]/20 pb-4">
                  <HelpCircle className="w-6 h-6 text-[#C3AB85]" />
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A5C5A]">
                    {text.faqs}
                  </h2>
                </div>
                <div className="space-y-3.5">
                  {faqs.map((faq: any, i: number) => {
                    const question = getLocText(faq.q) || getLocText(faq.question);
                    const answer = getLocText(faq.a) || getLocText(faq.answer);
                    const isOpen = activeFaq === i;
                    return (
                      <div 
                        key={i} 
                        className="bg-white border border-[#C3AB85]/20 rounded-2xl overflow-hidden shadow-sm transition-all"
                      >
                        <button
                          onClick={() => setActiveFaq(isOpen ? null : i)}
                          className="w-full px-6 py-4 text-left font-bold text-[#1A5C5A] text-sm sm:text-base flex justify-between items-center gap-4 cursor-pointer"
                        >
                          <span className="flex items-center gap-2">
                            <span className="text-[#C3AB85] font-serif text-lg">Q.</span>
                            {question}
                          </span>
                          <ChevronRight className={`w-5 h-5 text-[#C3AB85] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`} />
                        </button>
                        {isOpen && answer && (
                          <div className="px-6 pb-5 pt-1 border-t border-[#C3AB85]/10 text-xs sm:text-sm text-[#4A5568] leading-relaxed font-light">
                            {answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Sticky Inquiry Form */}
            <div className="sticky top-28 space-y-8">
              <SidebarInquiryForm locale={locale} defaultDestination={cityTitle} />

              {/* Directly Contact Us CTA Card */}
              <div className="bg-[#1A5C5A] p-6 sm:p-8 rounded-3xl shadow-xl text-white space-y-5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[5px] bg-[#C3AB85]" />
                <div className="flex items-center gap-2.5">
                  <Heart className="w-5 h-5 text-[#C3AB85]" />
                  <h4 className="font-serif text-lg font-bold text-white">{text.ctaTitle}</h4>
                </div>
                <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                  {text.ctaDesc}
                </p>
                <div className="pt-2 space-y-3 border-t border-white/10">
                  <a 
                    href={`tel:${text.phone.replace(/\s+/g, '')}`} 
                    className="flex items-center gap-3 text-sm font-bold text-[#C3AB85] hover:text-white transition-colors bg-white/10 px-4 py-3 rounded-2xl"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    <span>{text.phone}</span>
                  </a>
                  <a 
                    href={`mailto:${text.email}`} 
                    className="flex items-center gap-3 text-xs text-white/80 hover:text-white transition-colors px-4 py-2"
                  >
                    <Mail className="w-4 h-4 shrink-0 text-[#C3AB85]" />
                    <span>{text.email}</span>
                  </a>
                </div>
              </div>

              {/* Related Tour Packages Widget */}
              {relatedPackages && relatedPackages.length > 0 && (
                <div className="bg-white border border-[#C3AB85]/20 p-6 rounded-3xl shadow-sm space-y-4">
                  <h4 className="text-xs font-serif font-bold text-[#1A5C5A] uppercase tracking-wider border-b border-[#C3AB85]/15 pb-3">
                    {text.relatedToursTitle}
                  </h4>
                  <div className="space-y-4">
                    {relatedPackages.slice(0, 4).map((pkg: any) => {
                      const pkgTitle = extractLocalizedString(pkg.title, lang) || extractLocalizedString(pkg.name, lang) || pkg.id;
                      const pkgDuration = extractLocalizedString(pkg.duration, lang);
                      return (
                        <Link
                          key={pkg.slug || pkg.id}
                          href={`/${locale}/tours/${pkg.slug || pkg.id}`}
                          className="group flex items-center gap-3 border-b border-[#C3AB85]/10 pb-3 last:border-0 last:pb-0"
                        >
                          {pkg.image && (
                            <div className="w-16 h-12 rounded-xl overflow-hidden shrink-0 bg-stone-100">
                              <img
                                src={pkg.image}
                                alt={pkgTitle}
                                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <div className="min-w-0 flex-1">
                            <h5 className="text-xs font-bold text-[#1B1B1B] group-hover:text-[#1A5C5A] transition-colors truncate">
                              {pkgTitle}
                            </h5>
                            {pkgDuration && (
                              <p className="text-[10px] text-[#4A5568] flex items-center gap-1 mt-0.5 font-light">
                                <Clock className="w-3 h-3 text-[#C3AB85]" />
                                <span>{pkgDuration}</span>
                              </p>
                            )}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
