import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  Globe, ArrowRight, MapPin, Calendar, Clock, ShieldCheck, 
  Sparkles, CheckCircle2, ChevronRight, HelpCircle, Phone, Mail 
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
  const description = getLoc(dest.description);
  const bestTime = getLoc(dest.bestTime);
  const itinerary = getLoc(dest.suggestedItinerary);

  const t: Record<string, any> = {
    en: {
      back: "All International Destinations",
      overview: "About Destination",
      bestTimeLabel: "Best Season to Visit",
      attractionsTitle: "Key Highlights & Sightseeing",
      thingsTitle: "Signature Experiences",
      itineraryTitle: "Suggested Luxury Itinerary",
      tipsTitle: "Essential Travel Tips",
      faqsTitle: "Frequently Asked Questions",
      relatedTitle: "Other International Safaris",
      inquireBtn: "Inquire About This Trip",
      inquireDesc: "Customize your dates, hotels, and activities with our dedicated advisors."
    },
    es: {
      back: "Todos los Destinos Internacionales",
      overview: "Sobre el Destino",
      bestTimeLabel: "Mejor Época para Visitar",
      attractionsTitle: "Puntos Destacados y Visitas",
      thingsTitle: "Experiencias Exclusivas",
      itineraryTitle: "Itinerario Sugerido de Lujo",
      tipsTitle: "Consejos Esenciales de Viaje",
      faqsTitle: "Preguntas Frecuentes",
      relatedTitle: "Otros Safaris Internacionales",
      inquireBtn: "Consultar Sobre Este Viaje",
      inquireDesc: "Personalice sus fechas, hoteles y actividades con nuestros asesores."
    },
    pt: {
      back: "Todos os Destinos Internacionais",
      overview: "Sobre o Destino",
      bestTimeLabel: "Melhor Época para Visitar",
      attractionsTitle: "Principais Destaques e Passeios",
      thingsTitle: "Experiências Exclusivas",
      itineraryTitle: "Roteiro Sugerido de Luxo",
      tipsTitle: "Dicas Essenciais de Viagem",
      faqsTitle: "Perguntas Frequentes",
      relatedTitle: "Outras Viagens Internacionais",
      inquireBtn: "Solicitar Sobre Esta Viagem",
      inquireDesc: "Personalize suas datas, hotéis e atividades com nossos consultores."
    }
  };

  const text = t[locale] || t.en;

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

  const otherDestinations = allDestinations.filter((d: any) => d.slug !== slug).slice(0, 3);

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      
      {/* Hero Header */}
      <PageHeroSlider locale={locale} slides={sliderSlides} showBreadcrumb={`MH India Trips / International / ${title}`} />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Main Content Column (Spans 8) */}
          <div className="lg:col-span-8 space-y-12">
            
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

            {/* Key Sightseeing & Attractions */}
            {dest.attractions && dest.attractions.length > 0 && (
              <Reveal>
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif font-bold text-[#0A2A1E] border-b border-[#C5A862]/30 pb-3">
                    {text.attractionsTitle}
                  </h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {dest.attractions.map((attr: any, i: number) => (
                      <div key={i} className="bg-white border border-[#C5A862]/20 rounded-2xl overflow-hidden shadow-md space-y-3 p-4">
                        {attr.image && (
                          <div className="h-44 overflow-hidden rounded-xl">
                            <img src={attr.image} alt={getLoc(attr.name)} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                          </div>
                        )}
                        <h3 className="font-serif font-bold text-[#0A2A1E] text-lg">{getLoc(attr.name)}</h3>
                        <p className="text-xs text-[#1B1B1B]/70 leading-relaxed font-light">{getLoc(attr.desc)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {/* Signature Experiences */}
            {dest.thingsToDo && dest.thingsToDo.length > 0 && (
              <Reveal>
                <div className="bg-white p-8 rounded-3xl border border-[#C5A862]/25 shadow-lg space-y-5">
                  <h2 className="text-xl font-serif font-bold text-[#0A2A1E]">
                    {text.thingsTitle}
                  </h2>
                  <div className="space-y-3">
                    {dest.thingsToDo.map((thing: any, i: number) => (
                      <div key={i} className="flex items-start gap-3 bg-[#FAF8F5] p-3.5 rounded-xl border border-[#C5A862]/15">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A862] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#1B1B1B]/80 font-medium">{getLoc(thing)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {/* Suggested Itinerary */}
            {itinerary && (
              <Reveal>
                <div className="bg-[#0A2A1E] text-white p-8 sm:p-10 rounded-3xl border-2 border-[#C5A862] shadow-xl space-y-4">
                  <div className="flex items-center gap-2 text-[#C5A862]">
                    <Clock className="w-5 h-5 text-[#C5A862]" />
                    <h2 className="text-xl font-serif font-bold text-white">{text.itineraryTitle}</h2>
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light whitespace-pre-line bg-white/10 p-5 rounded-2xl border border-white/15">
                    {itinerary}
                  </p>
                </div>
              </Reveal>
            )}

            {/* Travel Tips */}
            {dest.travelTips && dest.travelTips.length > 0 && (
              <Reveal>
                <div className="bg-white p-8 rounded-3xl border border-[#C5A862]/25 shadow-md space-y-4">
                  <h3 className="text-lg font-serif font-bold text-[#0A2A1E]">{text.tipsTitle}</h3>
                  <ul className="space-y-2.5">
                    {dest.travelTips.map((tip: any, i: number) => (
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
            {dest.faqs && dest.faqs.length > 0 && (
              <Reveal>
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-bold text-[#0A2A1E]">{text.faqsTitle}</h3>
                  <div className="space-y-3">
                    {dest.faqs.map((faq: any, i: number) => (
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

          </div>

          {/* Sidebar Column (Spans 4) */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24 lg:self-start">
            <SidebarInquiryForm locale={locale} defaultDestination={title} />

            {/* Quick Contact Box */}
            <div className="bg-[#0A2A1E] p-6 rounded-2xl text-white space-y-4 border border-[#C5A862]/30">
              <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider">{text.inquireBtn}</h4>
              <p className="text-xs text-white/70 font-light leading-relaxed">{text.inquireDesc}</p>
              <div className="space-y-2.5 pt-2 text-xs font-semibold">
                <a href="tel:+919829989187" className="flex items-center gap-2 text-white/90 hover:text-[#C5A862]">
                  <Phone className="w-4 h-4 text-[#C5A862]" />
                  <span>+91 9829989187</span>
                </a>
                <a href="mailto:mhindiatrips@gmail.com" className="flex items-center gap-2 text-white/90 hover:text-[#C5A862]">
                  <Mail className="w-4 h-4 text-[#C5A862]" />
                  <span>mhindiatrips@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Other International Destinations */}
        {otherDestinations.length > 0 && (
          <section className="mt-20 pt-12 border-t border-[#C5A862]/20 space-y-8">
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
