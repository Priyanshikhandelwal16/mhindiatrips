import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  Globe, ArrowRight, MapPin, Calendar, Clock, ShieldCheck, 
  Sparkles, CheckCircle2, ChevronRight, HelpCircle, Phone, Mail,
  Hotel, Utensils, Compass, FileText, Star, Lightbulb, Landmark
} from "lucide-react";
import { getOutboundDestinationBySlugAction, getOutboundDestinationsAction } from "@/app/actions/queries";
import PageHeroSlider from "@/components/common/PageHeroSlider";
import Reveal from "@/components/home/Reveal";
import SidebarInquiryForm from "@/components/common/SidebarInquiryForm";

interface OutboundDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function OutboundDetailPage({ params }: OutboundDetailPageProps) {
  const { locale, slug } = await params;
  const dest = await getOutboundDestinationBySlugAction(slug);

  if (!dest) notFound();

  const lang = (locale === "es" || locale === "pt") ? locale : "en";
  const allDestinations = await getOutboundDestinationsAction();

  const getLoc = (obj: any): string => {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    return obj[lang] || obj.en || "";
  };

  const title = getLoc(dest.title);
  const tagline = getLoc(dest.tagline);
  const description = getLoc(dest.description) || getLoc(dest.overview);
  const history = getLoc(dest.history);
  const culture = getLoc(dest.culture);
  const localFood = getLoc(dest.localFood);
  const bestTime = getLoc(dest.bestTime);
  const itinerary = getLoc(dest.suggestedItinerary);

  const t: Record<string, any> = {
    en: {
      back: "All International Destinations",
      overview: "About Destination",
      historyTitle: "History & Royal Heritage",
      cultureTitle: "Culture & Local Lifestyle",
      foodTitle: "Local Food & Culinary Heritage",
      bestTimeLabel: "Best Season to Visit",
      attractionsTitle: "Key Highlights & Sightseeing",
      thingsTitle: "Signature Experiences & Things To Do",
      hotelsTitle: "Where To Stay — Recommended Luxury Hotels",
      itineraryTitle: "Suggested Luxury Itinerary",
      tipsTitle: "Essential Travel Tips",
      faqsTitle: "Frequently Asked Questions",
      relatedTitle: "Other International Destinations",
      inquireBtn: "Inquire About This Trip",
      inquireDesc: "Customize your dates, hotels, and activities with our dedicated advisors."
    },
    es: {
      back: "Todos los Destinos Internacionales",
      overview: "Sobre el Destino",
      historyTitle: "Historia y Patrimonio Real",
      cultureTitle: "Cultura y Estilo de Vida Local",
      foodTitle: "Gastronomía Local y Sabores",
      bestTimeLabel: "Mejor Época para Visitar",
      attractionsTitle: "Puntos Destacados y Atracciones",
      thingsTitle: "Experiencias Exclusivas y Actividades",
      hotelsTitle: "Dónde Alojarse — Hoteles de Lujo Recomendados",
      itineraryTitle: "Itinerario Sugerido de Lujo",
      tipsTitle: "Consejos Esenciales de Viaje",
      faqsTitle: "Preguntas Frecuentes",
      relatedTitle: "Otros Destinos Internacionales",
      inquireBtn: "Consultar Sobre Este Viaje",
      inquireDesc: "Personalice sus fechas, hoteles y actividades con nuestros asesores."
    },
    pt: {
      back: "Todos os Destinos Internacionais",
      overview: "Sobre o Destino",
      historyTitle: "História e Patrimônio Real",
      cultureTitle: "Cultura e Estilo de Vida Local",
      foodTitle: "Gastronomia Local e Sabores",
      bestTimeLabel: "Melhor Época para Visitar",
      attractionsTitle: "Principais Destaques e Atrações",
      thingsTitle: "Experiências Exclusivas e Atividades",
      hotelsTitle: "Onde Se Hospedar — Hotéis de Luxo Recomendados",
      itineraryTitle: "Roteiro Sugerido de Luxo",
      tipsTitle: "Dicas Essenciais de Viagem",
      faqsTitle: "Perguntas Frequentes",
      relatedTitle: "Outros Destinos Internacionais",
      inquireBtn: "Solicitar Sobre Esta Viagem",
      inquireDesc: "Personalize suas datas, hotéis e atividades com nossos consultores."
    }
  };

  const text = t[locale] || t.en;

  // Build Hero Slider images
  const sliderSlides = [
    {
      image: dest.image,
      title: title,
      subtitle: `MH India Trips / International / ${dest.region}`,
      location: dest.region || "International",
      description: tagline,
      objectPosition: "center 25%"
    },
    ...(dest.gallery || []).map((imgUrl: string) => ({
      image: imgUrl,
      title: title,
      subtitle: tagline,
      location: dest.region || "International",
      description: title,
      objectPosition: "center 25%"
    }))
  ];

  const attractions = Array.isArray(dest.attractions) ? dest.attractions : [];
  const experiences = Array.isArray(dest.experiences) ? dest.experiences : [];
  const thingsToDo = Array.isArray(dest.thingsToDo) ? dest.thingsToDo : [];
  const hotels = Array.isArray(dest.hotels) ? dest.hotels : [];
  const travelTips = Array.isArray(dest.travelTips) ? dest.travelTips : [];
  const faqs = Array.isArray(dest.faqs) ? dest.faqs : [];

  const otherDestinations = allDestinations.filter((d: any) => d.slug !== slug).slice(0, 3);

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      
      {/* Hero Header */}
      <PageHeroSlider locale={locale} slides={sliderSlides} showBreadcrumb={`MH India Trips / International / ${title}`} />

      {/* Main Container - Wide Luxury Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-12 md:py-20 space-y-12">
        
        {/* Back Button & Title Header */}
        <Reveal className="space-y-4">
          <Link
            href={`/${locale}/international-trips`}
            className="inline-flex items-center gap-2 text-xs uppercase font-extrabold tracking-widest text-[#C5A862] hover:text-[#0A2A1E] transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span>{text.back}</span>
          </Link>
          
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#0A2A1E] leading-tight">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-[#C5A862] font-semibold">
            {tagline}
          </p>
        </Reveal>

        {/* Quick Specs Badges */}
        <Reveal>
          <div className="bg-white p-6 rounded-2xl border border-[#C5A862]/20 shadow-md grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#0A2A1E]/10 text-[#0A2A1E] flex items-center justify-center shrink-0 border border-[#C5A862]/30">
                <Calendar className="w-5 h-5 text-[#C5A862]" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#1B1B1B]/50 block">{text.bestTimeLabel}</span>
                <span className="text-xs sm:text-sm font-bold text-[#0A2A1E]">{bestTime}</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#0A2A1E]/10 text-[#0A2A1E] flex items-center justify-center shrink-0 border border-[#C5A862]/30">
                <ShieldCheck className="w-5 h-5 text-[#C5A862]" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#1B1B1B]/50 block">Concierge Guarantee</span>
                <span className="text-xs sm:text-sm font-bold text-[#0A2A1E]">24/7 Dedicated Support</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Overview Section */}
        {description && (
          <Reveal>
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#C5A862]/25 shadow-lg space-y-4">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#C5A862] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#C5A862]" />
                <span>{text.overview}</span>
              </span>
              <p className="text-sm sm:text-base text-[#1B1B1B]/80 leading-relaxed font-normal">
                {description}
              </p>
            </div>
          </Reveal>
        )}

        {/* History & Heritage Section */}
        {history && (
          <Reveal>
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#C5A862]/25 shadow-md space-y-4">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#C5A862] flex items-center gap-1.5">
                <Landmark className="w-4 h-4 text-[#C5A862]" />
                <span>{text.historyTitle}</span>
              </span>
              <h2 className="text-xl font-serif font-bold text-[#0A2A1E]">Heritage & Historic Legacy</h2>
              <p className="text-sm text-[#1B1B1B]/80 leading-relaxed font-light">
                {history}
              </p>
            </div>
          </Reveal>
        )}

        {/* Culture & Lifestyle Section */}
        {culture && (
          <Reveal>
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#C5A862]/25 shadow-md space-y-4">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#C5A862] flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-[#C5A862]" />
                <span>{text.cultureTitle}</span>
              </span>
              <h2 className="text-xl font-serif font-bold text-[#0A2A1E]">Culture, Traditions & Etiquette</h2>
              <p className="text-sm text-[#1B1B1B]/80 leading-relaxed font-light">
                {culture}
              </p>
            </div>
          </Reveal>
        )}

        {/* Local Cuisine & Food Section */}
        {localFood && (
          <Reveal>
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#C5A862]/25 shadow-md space-y-4">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#C5A862] flex items-center gap-1.5">
                <Utensils className="w-4 h-4 text-[#C5A862]" />
                <span>{text.foodTitle}</span>
              </span>
              <h2 className="text-xl font-serif font-bold text-[#0A2A1E]">Culinary Highlights & Fine Dining</h2>
              <p className="text-sm text-[#1B1B1B]/80 leading-relaxed font-light">
                {localFood}
              </p>
            </div>
          </Reveal>
        )}

        {/* Key Sightseeing & Attractions */}
        {attractions.length > 0 && (
          <Reveal>
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#C5A862]/30 pb-3">
                <h2 className="text-2xl font-serif font-bold text-[#0A2A1E]">
                  {text.attractionsTitle}
                </h2>
                <span className="text-xs font-bold text-[#C5A862] uppercase tracking-wider">{attractions.length} Landmarks</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {attractions.map((attr: any, i: number) => {
                  const attrName = getLoc(attr.name);
                  const attrDesc = getLoc(attr.desc);

                  return (
                    <div key={i} className="bg-white border border-[#C5A862]/20 rounded-2xl overflow-hidden shadow-md space-y-3 p-4 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                      <div>
                        {attr.image && (
                          <div className="w-full h-56 sm:h-64 overflow-hidden rounded-xl relative mb-3 bg-[#FAF8F5] border border-[#C5A862]/20 shadow-xs group/img">
                            <img src={attr.image} alt={attrName} loading="lazy" className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500" />
                          </div>
                        )}
                        <h3 className="font-serif font-bold text-[#0A2A1E] text-lg">{attrName}</h3>
                        <p className="text-xs text-[#1B1B1B]/70 leading-relaxed font-light pt-1">{attrDesc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        )}

        {/* Signature Experiences & Things to Do */}
        {(experiences.length > 0 || thingsToDo.length > 0) && (
          <Reveal>
            <div className="bg-white p-8 rounded-3xl border border-[#C5A862]/25 shadow-lg space-y-6">
              <h2 className="text-2xl font-serif font-bold text-[#0A2A1E]">
                {text.thingsTitle}
              </h2>

              {experiences.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {experiences.map((exp: any, i: number) => {
                    const expTitle = getLoc(exp.title);
                    const expDesc = getLoc(exp.desc);

                    return (
                      <div key={i} className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#C5A862]/15 space-y-2">
                        {exp.image && (
                          <div className="h-36 rounded-xl overflow-hidden mb-2">
                            <img src={exp.image} alt={expTitle} className="w-full h-full object-cover" />
                          </div>
                        )}
                        <div className="flex items-start gap-2">
                          <Sparkles className="w-4 h-4 text-[#C5A862] shrink-0 mt-1" />
                          <div>
                            <h3 className="text-sm font-bold text-[#0A2A1E]">{expTitle}</h3>
                            {expDesc && <p className="text-xs text-[#1B1B1B]/70 font-light mt-1">{expDesc}</p>}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {thingsToDo.length > 0 && (
                <div className="space-y-3 pt-2">
                  {thingsToDo.map((thing: any, i: number) => (
                    <div key={i} className="flex items-start gap-3 bg-[#FAF8F5] p-3.5 rounded-xl border border-[#C5A862]/15">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A862] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#1B1B1B]/80 font-medium">{getLoc(thing)}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        )}

        {/* Recommended Luxury Hotels */}
        {hotels.length > 0 && (
          <Reveal>
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#C5A862]/30 pb-3">
                <h2 className="text-2xl font-serif font-bold text-[#0A2A1E] flex items-center gap-2">
                  <Hotel className="w-6 h-6 text-[#C5A862]" />
                  <span>{text.hotelsTitle}</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {hotels.map((ht: any, i: number) => {
                  const hDesc = getLoc(ht.desc);

                  return (
                    <div key={i} className="bg-white border border-[#C5A862]/20 rounded-2xl overflow-hidden shadow-md space-y-3 p-4 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                      <div>
                        {ht.image && (
                          <div className="h-48 overflow-hidden rounded-xl relative mb-3">
                            <img src={ht.image} alt={ht.name} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                          </div>
                        )}
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-serif font-bold text-[#0A2A1E] text-lg">{ht.name}</h3>
                          <span className="bg-[#C5A862]/15 text-[#0A2A1E] text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0 border border-[#C5A862]/30">
                            {ht.rating || "5 Star Luxury"}
                          </span>
                        </div>
                        {hDesc && <p className="text-xs text-[#1B1B1B]/70 leading-relaxed font-light pt-2">{hDesc}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        )}

        {/* Suggested Luxury Itinerary */}
        {itinerary && (
          <Reveal>
            <div className="p-4 sm:p-10 rounded-2xl sm:rounded-3xl bg-white border border-[#C5A862]/30 shadow-xl space-y-6 sm:space-y-8">
              <div className="space-y-6 sm:space-y-8">
                {/* Header */}
                <div className="border-b border-[#C5A862]/30 pb-3.5 sm:pb-4 flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C5A862] block">
                      Day-by-Day Journey
                    </span>
                    <h2 className="text-xl sm:text-3xl font-serif font-bold text-[#0A2A1E]">
                      {text.itineraryTitle}
                    </h2>
                  </div>
                  <span className="hidden sm:inline-block text-xs font-bold text-[#0A2A1E] bg-[#C5A862]/20 border border-[#C5A862]/40 px-4 py-2 rounded-full">
                    ✨ Bespoke Private Plan
                  </span>
                </div>

                {/* Timeline Day Cards Flow - Compact Grid/Timeline Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                  {(() => {
                    const dayMatches = itinerary.split(/(?=(?:Day|Día|Dia)\s*\d+[:\s])/i).filter(Boolean);
                    const daysList = dayMatches.length > 1
                      ? dayMatches.map((str, idx) => {
                          const match = str.match(/^(?:Day|Día|Dia)\s*(\d+)[:\s]*(.*)/i);
                          return match ? { num: match[1], body: match[2].trim() } : { num: String(idx + 1), body: str.trim() };
                        })
                      : itinerary.split('\n').filter(Boolean).map((line, idx) => ({ num: String(idx + 1), body: line.trim() }));

                    return daysList.map((dayItem, dIdx) => (
                      <div 
                        key={dIdx} 
                        className="bg-white p-4 sm:p-5 rounded-xl border border-[#C5A862]/25 shadow-xs hover:shadow-md hover:border-[#C5A862]/50 transition-all duration-300 flex flex-col justify-between space-y-3"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between border-b border-[#C5A862]/15 pb-2">
                            <span className="bg-[#0A2A1E] text-[#C5A862] text-[10px] sm:text-xs font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-[#C5A862]/40 shadow-xs">
                              Day {dayItem.num}
                            </span>
                            <span className="text-[10px] text-[#C5A862] font-semibold">MH India Trips</span>
                          </div>
                          <p className="text-xs sm:text-sm text-[#1B1B1B]/85 font-normal leading-relaxed">
                            {dayItem.body}
                          </p>
                        </div>
                      </div>
                    ));
                  })()}
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* Travel Tips */}
        {travelTips.length > 0 && (
          <Reveal>
            <div className="bg-white p-8 rounded-3xl border border-[#C5A862]/25 shadow-md space-y-4">
              <h3 className="text-lg font-serif font-bold text-[#0A2A1E] flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-[#C5A862]" />
                <span>{text.tipsTitle}</span>
              </h3>
              <ul className="space-y-2.5">
                {travelTips.map((tip: any, i: number) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1B1B1B]/75">
                    <span className="text-[#C5A862] font-bold">•</span>
                    <span>{getLoc(tip)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}

        {/* FAQs */}
        {faqs.length > 0 && (
          <Reveal>
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-[#0A2A1E] flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#C5A862]" />
                <span>{text.faqsTitle}</span>
              </h3>
              <div className="space-y-3">
                {faqs.map((faq: any, i: number) => (
                  <div key={i} className="bg-white p-5 rounded-2xl border border-[#C5A862]/20 space-y-2 shadow-sm">
                    <h4 className="text-sm font-bold text-[#0A2A1E] flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-[#C5A862] shrink-0" />
                      <span>{getLoc(faq.q)}</span>
                    </h4>
                    <p className="text-xs text-[#1B1B1B]/70 leading-relaxed font-light pl-6">{getLoc(faq.a)}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        {/* Bottom Full-Width Inquiry Banner */}
        <Reveal>
          <div className="bg-[#0A2A1E] p-8 sm:p-12 rounded-3xl text-white space-y-6 border-2 border-[#C5A862]/40 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#C5A862]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-4 text-center max-w-2xl mx-auto">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#C5A862]">
                BESPOKE TRAVEL CONCIERGE
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white leading-tight">
                {text.inquireBtn}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                {text.inquireDesc}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <a
                  href={`/${locale}/contact?destination=${encodeURIComponent(title)}`}
                  className="bg-[#C5A862] hover:bg-[#b0934f] text-[#0A2A1E] font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full transition-all shadow-lg hover:scale-105 inline-flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#0A2A1E]" />
                  <span>{text.inquireBtn}</span>
                </a>
                <a
                  href="https://wa.me/919314635830"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full transition-all inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#C5A862]" />
                  <span>+91 9314635830</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Other International Destinations */}
        {otherDestinations.length > 0 && (
          <section className="mt-12 pt-12 border-t border-[#C5A862]/20 space-y-8">
            <Reveal className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#C5A862] font-bold block">EXPLORE MORE</span>
              <h2 className="text-2xl font-serif font-bold text-[#0A2A1E]">{text.relatedTitle}</h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherDestinations.map((od: any) => (
                <Link key={od.slug} href={`/${locale}/international-trips/${od.slug}`} className="group block bg-white rounded-2xl overflow-hidden border border-[#C5A862]/20 shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="h-44 overflow-hidden relative">
                    <img src={od.image} alt={getLoc(od.title)} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5 space-y-1.5">
                    <h3 className="font-serif font-bold text-[#0A2A1E] text-lg group-hover:text-[#C5A862] transition-colors">{getLoc(od.title)}</h3>
                    <p className="text-xs text-[#1B1B1B]/60 line-clamp-2 font-light">{getLoc(od.tagline)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
