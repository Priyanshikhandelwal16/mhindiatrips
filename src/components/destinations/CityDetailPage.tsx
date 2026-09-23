import React from "react";
import Link from "next/link";
import { ChevronRight, Clock, HelpCircle, Phone, Mail, MapPin, Utensils, Hotel, Bus, Lightbulb, HelpCircle as FAQ } from "lucide-react";
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
  const lang = (locale === "es" || locale === "pt") ? locale : "en";
  const stateTitle = extractLocalizedString(state.name, lang) || extractLocalizedString(state.title, lang) || state.id;
  const cityTitle = extractLocalizedString(city.name, lang) || extractLocalizedString(city.title, lang) || city.id;
  const cityShortDesc = extractLocalizedString(city.shortDescription, lang) || extractLocalizedString(city.description, lang);
  const cityOverview = extractLocalizedString(city.fullDescription, lang) || extractLocalizedString(city.overview, lang);
  const cityContent = extractLocalizedString(city.content, lang);
  const cityImage = city.image || city.hero?.image || "/images/destination_fallback.jpg";

  const t: Record<string, any> = {
    en: {
      home: "Home",
      destinations: "Destinations in India",
      overview: "About This Destination",
      highlights: "Destination Highlights",
      thingsToDo: "Things To Do",
      experiences: "Experiences",
      hotels: "Where To Stay",
      travelTips: "Travel Tips",
      faqs: "Frequently Asked Questions",
      gettingAround: "Getting Around",
      localFood: "Local Food & Cuisine",
      travelInfo: "Travel Information",
      relatedToursTitle: "Suggested Travel Packages",
      ctaTitle: "Need Help? We Are Here To Help You",
      ctaDesc: "We Can Tailor-Make a Special Itinerary For You. Contact our specialists directly.",
      phone: "+91 9314635830",
      email: "info@mhindiatrips.com",
      readMore: "Read More",
      recommended: "Recommended"
    },
    es: {
      home: "Inicio",
      destinations: "Destinos en India",
      overview: "Sobre Este Destino",
      highlights: "Aspectos Destacados",
      thingsToDo: "Qué Hacer",
      experiences: "Experiencias",
      hotels: "Dónde Alojarse",
      travelTips: "Consejos de Viaje",
      faqs: "Preguntas Frecuentes",
      gettingAround: "Cómo Moverse",
      localFood: "Gastronomía Local",
      travelInfo: "Información de Viaje",
      relatedToursTitle: "Paquetes de Viajes Sugeridos",
      ctaTitle: "¿Necesitas Ayuda? Estamos Aquí Para Ti",
      ctaDesc: "Podemos crear un itinerario especial para ti. Contacta con nuestros especialistas.",
      phone: "+91 9314635830",
      email: "info@mhindiatrips.com",
      readMore: "Leer Más",
      recommended: "Recomendado"
    },
    pt: {
      home: "Início",
      destinations: "Destinos na Índia",
      overview: "Sobre Este Destino",
      highlights: "Destaques",
      thingsToDo: "O Que Fazer",
      experiences: "Experiências",
      hotels: "Onde Se Hospedar",
      travelTips: "Dicas de Viagem",
      faqs: "Perguntas Frequentes",
      gettingAround: "Como Se Locomover",
      localFood: "Gastronomia Local",
      travelInfo: "Informações de Viagem",
      relatedToursTitle: "Pacotes Sugeridos",
      ctaTitle: "Precisa de Ajuda? Estamos Aqui Para Você",
      ctaDesc: "Podemos criar um roteiro especial para você. Fale com nossos especialistas.",
      phone: "+91 9314635830",
      email: "info@mhindiatrips.com",
      readMore: "Leia Mais",
      recommended: "Recomendado"
    }
  };

  const text = t[locale] || t.en;
  const stateSlug = state.slug?.[lang] || state.slug?.en || state.slug || state.id;

  // Helper to get localized text from various formats
  const getLocText = (field: any): string => extractLocalizedString(field, lang);

  // Parse highlights
  const highlights = Array.isArray(city.highlights) ? city.highlights : [];
  // Parse thingsToDo
  const thingsToDo = Array.isArray(city.thingsToDo) ? city.thingsToDo : [];
  // Parse experiences
  const experiences = Array.isArray(city.experiences) ? city.experiences : [];
  // Parse hotels
  const hotels = Array.isArray(city.hotels) ? city.hotels : [];
  // Parse travelTips
  const travelTips = Array.isArray(city.travelTips) ? city.travelTips : [];
  // Parse faqs
  const faqs = Array.isArray(city.faqs) ? city.faqs : [];
  // Parse gettingAround
  const gettingAround = Array.isArray(city.gettingAround) ? city.gettingAround : [];
  // Parse localFoodDishes
  const localFoodDishes = Array.isArray(city.localFoodDishes) ? city.localFoodDishes : [];

  // Build slider slides for City
  const cleanCityDesc = cityShortDesc.length > 90 ? cityShortDesc.slice(0, 87) + "..." : cityShortDesc;
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

  experiences.forEach((exp: any) => {
    const img = exp.image || exp.img;
    if (img && sliderSlides.length < 5) {
      const rawExpDesc = getLocText(exp.description);
      const cleanExpDesc = rawExpDesc.length > 90 ? rawExpDesc.slice(0, 87) + "..." : rawExpDesc;
      sliderSlides.push({
        image: img,
        title: getLocText(exp.title) || cityTitle,
        subtitle: text.experiences,
        location: `${cityTitle}, ${stateTitle}`,
        description: cleanExpDesc,
        objectPosition: "center 25%"
      });
    }
  });

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      {/* Hero Header */}
      <PageHeroSlider locale={locale} slides={sliderSlides} showBreadcrumb={`${stateTitle} / ${cityTitle}`} />

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

          {/* Left Column */}
          <div className="lg:col-span-8 space-y-10">

            {/* Cover Image */}
            {cityImage && (
              <div className="h-[350px] md:h-[420px] w-full rounded-2xl overflow-hidden shadow-md">
                <img src={cityImage} alt={cityTitle} loading="lazy" className="w-full h-full object-cover" />
              </div>
            )}

            {/* Overview Section */}
            {cityOverview && (
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1a5c5a]">
                  {text.overview}
                </h2>
                <div className="text-sm md:text-base text-[#1B1B1B]/75 leading-[1.85] font-light whitespace-pre-line">
                  {cityOverview}
                </div>
              </div>
            )}

            {/* Tourist Places Section (Added requirement #4) */}
            {(Array.isArray(city.touristPlaces) && city.touristPlaces.length > 0) && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-[#C3AB85]" />
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1a5c5a]">
                    {locale === "es" ? "Lugares Turísticos Destacados" : locale === "pt" ? "Locais Turísticos em Destaque" : `Top Tourist Places in ${cityTitle}`}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {city.touristPlaces.map((place: any, pIdx: number) => {
                    const pName = getLocText(place.name) || place.title || `Place ${pIdx + 1}`;
                    const pDesc = getLocText(place.description) || getLocText(place.desc);
                    const pImg = place.image || place.img || cityImage;
                    return (
                      <div key={pIdx} className="bg-white border border-[#C3AB85]/20 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all group">
                        {pImg && (
                          <div className="h-48 overflow-hidden relative">
                            <img src={pImg} alt={pName} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                        )}
                        <div className="p-5 space-y-2">
                          <h3 className="font-serif font-bold text-[#0B0D0C] text-lg group-hover:text-[#1a5c5a] transition-colors">{pName}</h3>
                          {pDesc && <p className="text-xs sm:text-sm text-[#1B1B1B]/70 leading-relaxed font-light">{pDesc}</p>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Highlights */}
            {highlights.length > 0 && (
              <div className="space-y-5">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1a5c5a]">
                  {text.highlights}
                </h2>
                <div className="space-y-4">
                  {highlights.map((hl: any, i: number) => {
                    const title = getLocText(hl.title);
                    const desc = getLocText(hl.desc);
                    return (
                      <div key={i} className="border-l-4 border-[#C3AB85] pl-4 py-2">
                        <h3 className="font-bold text-[#0B0D0C] text-base md:text-lg">{title}</h3>
                        {desc && <p className="text-sm text-[#1B1B1B]/70 mt-1 leading-relaxed font-light">{desc}</p>}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}


            {/* Things To Do */}
            {thingsToDo.length > 0 && (
              <div className="space-y-5">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1a5c5a]">
                  {text.thingsToDo}
                </h2>
                <div className="space-y-4">
                  {thingsToDo.map((todo: any, i: number) => {
                    const name = getLocText(todo.name) || getLocText(todo);
                    const desc = getLocText(todo.desc);
                    return (
                      <div key={i} className="flex gap-3 items-start">
                        <span className="flex-shrink-0 w-7 h-7 bg-[#1a5c5a] text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                          {i + 1}
                        </span>
                        <div>
                          <h3 className="font-bold text-[#0B0D0C] text-sm md:text-base">{name}</h3>
                          {desc && <p className="text-sm text-[#1B1B1B]/70 mt-0.5 leading-relaxed font-light">{desc}</p>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Experiences */}
            {experiences.length > 0 && (
              <div className="space-y-5">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1a5c5a]">
                  {text.experiences}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {experiences.map((exp: any, i: number) => {
                    const name = getLocText(exp.name);
                    const desc = getLocText(exp.desc);
                    return (
                      <div key={i} className="bg-white border border-[#C3AB85]/15 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-[#1a5c5a] text-sm">{name}</h3>
                        {desc && <p className="text-xs text-[#1B1B1B]/65 mt-2 leading-relaxed font-light">{desc}</p>}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Getting Around */}
            {gettingAround.length > 0 && (
              <div className="space-y-5">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1a5c5a]">
                  {text.gettingAround}
                </h2>
                <div className="space-y-3">
                  {gettingAround.map((transport: any, i: number) => {
                    const title = getLocText(transport.title) || transport.transportType || "";
                    const desc = getLocText(transport.desc);
                    return (
                      <div key={i} className="flex items-start gap-3 bg-white border border-[#C3AB85]/10 rounded-lg px-4 py-3">
                        <Bus className="w-4 h-4 text-[#C3AB85] mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <span className="font-bold text-[#0B0D0C] text-sm">{title}</span>
                          {transport.recommended && (
                            <span className="ml-2 text-[9px] bg-[#1a5c5a]/10 text-[#1a5c5a] px-2 py-0.5 rounded font-bold uppercase">
                              {text.recommended}
                            </span>
                          )}
                          {desc && <p className="text-xs text-[#1B1B1B]/65 mt-0.5 font-light">{desc}</p>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Travel Tips */}
            {travelTips.length > 0 && (
              <div className="space-y-5">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1a5c5a]">
                  {text.travelTips}
                </h2>
                <ul className="space-y-3">
                  {travelTips.map((tip: any, i: number) => {
                    const tipText = getLocText(tip);
                    return (
                      <li key={i} className="flex items-start gap-3">
                        <Lightbulb className="w-4 h-4 text-[#C3AB85] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#1B1B1B]/75 leading-relaxed font-light">{tipText}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Hotels */}
            {hotels.length > 0 && (
              <div className="space-y-5">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1a5c5a]">
                  {text.hotels}
                </h2>
                <div className="space-y-4">
                  {hotels.map((hotel: any, i: number) => {
                    const desc = getLocText(hotel.desc);
                    return (
                      <div key={i} className="flex items-start gap-4 bg-white border border-[#C3AB85]/10 rounded-xl p-4 shadow-sm">
                        <Hotel className="w-5 h-5 text-[#C3AB85] mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-bold text-[#0B0D0C] text-sm">{hotel.name}</h3>
                            {hotel.tier && (
                              <span className="text-[9px] bg-[#C3AB85]/15 text-[#8B7340] px-2 py-0.5 rounded font-bold uppercase">
                                {hotel.tier}
                              </span>
                            )}
                          </div>
                          {desc && <p className="text-xs text-[#1B1B1B]/65 mt-1 leading-relaxed font-light">{desc}</p>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Local Food */}
            {localFoodDishes.length > 0 && (
              <div className="space-y-5">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1a5c5a]">
                  {text.localFood}
                </h2>
                <div className="space-y-4">
                  {localFoodDishes.map((dish: any, i: number) => {
                    const name = getLocText(dish.name);
                    const desc = getLocText(dish.desc);
                    return (
                      <div key={i} className="flex items-start gap-3 bg-white border border-[#C3AB85]/10 rounded-xl p-4 shadow-sm">
                        <Utensils className="w-4 h-4 text-[#C3AB85] mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-[#0B0D0C] text-sm">{name}</h3>
                            {dish.isVeg && (
                              <span className="w-3 h-3 border border-green-600 rounded-sm flex items-center justify-center">
                                <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                              </span>
                            )}
                          </div>
                          {desc && <p className="text-xs text-[#1B1B1B]/65 mt-1 leading-relaxed font-light">{desc}</p>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* FAQs */}
            {faqs.length > 0 && (
              <div className="space-y-5">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1a5c5a]">
                  {text.faqs}
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq: any, i: number) => {
                    const question = getLocText(faq.q) || getLocText(faq.question);
                    const answer = getLocText(faq.a) || getLocText(faq.answer);
                    return (
                      <div key={i} className="bg-white border border-[#C3AB85]/10 rounded-xl p-5 shadow-sm">
                        <h3 className="font-bold text-[#0B0D0C] text-sm flex items-start gap-2">
                          <span className="text-[#C3AB85] font-bold">Q.</span>
                          {question}
                        </h3>
                        {answer && (
                          <p className="text-sm text-[#1B1B1B]/70 mt-2 leading-relaxed font-light pl-5">
                            {answer}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Legacy HTML Content (if no structured data but has old content) */}
            {cityContent && !cityOverview && highlights.length === 0 && thingsToDo.length === 0 && (
              <div className="bg-white border border-[#C3AB85]/10 rounded-2xl p-6 md:p-8 shadow-sm">
                <div
                  className="city-rich-content"
                  dangerouslySetInnerHTML={{ __html: cityContent }}
                />
              </div>
            )}

            {/* Gallery */}
            {city.gallery && city.gallery.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1a5c5a]">
                  {locale === "es" ? "Galería de Fotos" : locale === "pt" ? "Galeria de Fotos" : "Photo Gallery"}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {city.gallery.map((img: string, idx: number) => (
                    <div key={idx} className="h-36 rounded-xl overflow-hidden shadow-sm">
                      <img
                        src={img}
                        alt={`${cityTitle} ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Booking Form */}
            <SidebarInquiryForm locale={locale} defaultDestination={cityTitle} />

            {/* CTA Block */}
            <div className="bg-[#1a5c5a] p-6 rounded-2xl shadow-lg text-white space-y-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[4px] bg-[#C3AB85]" />
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#C3AB85]" />
                <h4 className="font-serif text-base font-bold text-white">{text.ctaTitle}</h4>
              </div>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                {text.ctaDesc}
              </p>
              <div className="pt-2 space-y-2.5">
                <a href={`tel:${text.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-sm font-bold text-[#C3AB85] hover:text-white transition-colors">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>{text.phone}</span>
                </a>
                <a href={`mailto:${text.email}`} className="flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>{text.email}</span>
                </a>
              </div>
            </div>

            {/* Related Packages */}
            {relatedPackages && relatedPackages.length > 0 && (
              <div className="bg-white border border-[#C3AB85]/15 p-6 rounded-2xl shadow-sm space-y-4">
                <h4 className="text-sm font-serif font-bold text-[#1a5c5a] uppercase tracking-wider">
                  {text.relatedToursTitle}
                </h4>
                <div className="space-y-3">
                  {relatedPackages.map((pkg: any) => {
                    const pkgTitle = extractLocalizedString(pkg.title, lang) || extractLocalizedString(pkg.name, lang) || pkg.id;
                    const pkgDuration = extractLocalizedString(pkg.duration, lang);
                    return (
                      <Link
                        key={pkg.slug || pkg.id}
                        href={`/${locale}/tours/${pkg.slug || pkg.id}`}
                        className="group flex items-center gap-3 border-b border-[#C3AB85]/10 pb-3 last:border-0 last:pb-0"
                      >
                        {pkg.image && (
                          <div className="w-14 h-11 rounded-lg overflow-hidden shrink-0 bg-stone-100">
                            <img
                              src={pkg.image}
                              alt={pkgTitle}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <h5 className="text-xs font-bold text-[#0B0D0C] group-hover:text-[#1a5c5a] transition-colors truncate">
                            {pkgTitle}
                          </h5>
                          {pkgDuration && (
                            <p className="text-[10px] text-[#1B1B1B]/40 flex items-center gap-1 mt-0.5">
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
      </section>
    </div>
  );
}
