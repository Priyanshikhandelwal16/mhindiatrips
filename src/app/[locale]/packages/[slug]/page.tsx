import React from "react";
import Link from "next/link";
import { getTourPackageBySlugAction, getTourPackagesAction } from "@/app/actions/queries";
import { notFound } from "next/navigation";
import { 
  Calendar, MapPin, Users, CheckCircle, XCircle, ArrowRight, 
  Star, Clock, Shield, Car, Hotel, Utensils, Camera, Heart,
  ChevronLeft
} from "lucide-react";
import Reveal from "@/components/home/Reveal";

interface PackageDetailProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function PackageDetailPage({ params }: PackageDetailProps) {
  const { locale, slug } = await params;
  const pkg = await getTourPackageBySlugAction(slug);

  if (!pkg) return notFound();

  const lang = (locale === "es" || locale === "pt") ? locale : "en";

  const t = {
    en: {
      backToPackages: "All Packages",
      overview: "Tour Overview",
      highlights: "Tour Highlights",
      itinerary: "Day-by-Day Itinerary",
      inclusions: "What's Included",
      exclusions: "What's Not Included",
      travelTips: "Travel Tips",
      faqs: "Frequently Asked Questions",
      duration: "Duration",
      category: "Category",
      style: "Travel Style",
      groupSize: "Group Size",
      privateTour: "Private Tour",
      customizable: "100% Customizable",
      priceNote: "Price on Request",
      inquireCta: "Inquire About This Tour",
      customizeCta: "Customize This Journey",
      relatedTitle: "You May Also Like",
      daysLabel: "Days",
      dayLabel: "Day",
      included: "Included in your journey",
      excluded: "Not included",
      inc1: "Private luxury vehicle with professional driver",
      inc2: "Handpicked 4-5 star heritage hotel stays",
      inc3: "English/Spanish/Portuguese speaking local guide",
      inc4: "Daily breakfast at hotel",
      inc5: "All monument entry fees & permits",
      inc6: "24/7 on-ground concierge support",
      exc1: "International & domestic flights",
      exc2: "Travel insurance",
      exc3: "Personal expenses & tips",
      exc4: "Meals not mentioned in itinerary",
      exc5: "Visa fees",
    },
    es: {
      backToPackages: "Todos los Paquetes",
      overview: "Resumen del Tour",
      highlights: "Puntos Destacados",
      itinerary: "Itinerario Día a Día",
      inclusions: "Qué Está Incluido",
      exclusions: "Qué No Está Incluido",
      travelTips: "Consejos de Viaje",
      faqs: "Preguntas Frecuentes",
      duration: "Duración",
      category: "Categoría",
      style: "Estilo de Viaje",
      groupSize: "Tamaño del Grupo",
      privateTour: "Tour Privado",
      customizable: "100% Personalizable",
      priceNote: "Precio a Consultar",
      inquireCta: "Consultar Sobre Este Tour",
      customizeCta: "Personalizar Este Viaje",
      relatedTitle: "También Te Puede Gustar",
      daysLabel: "Días",
      dayLabel: "Día",
      included: "Incluido en su viaje",
      excluded: "No incluido",
      inc1: "Vehículo privado de lujo con conductor profesional",
      inc2: "Hoteles heritage de 4-5 estrellas seleccionados",
      inc3: "Guía local bilingüe (inglés/español/portugués)",
      inc4: "Desayuno diario en el hotel",
      inc5: "Todas las entradas a monumentos y permisos",
      inc6: "Soporte concierge 24/7 en destino",
      exc1: "Vuelos internacionales y domésticos",
      exc2: "Seguro de viaje",
      exc3: "Gastos personales y propinas",
      exc4: "Comidas no mencionadas en el itinerario",
      exc5: "Tasas de visa",
    },
    pt: {
      backToPackages: "Todos os Pacotes",
      overview: "Resumo do Tour",
      highlights: "Destaques do Tour",
      itinerary: "Itinerário Dia a Dia",
      inclusions: "O Que Está Incluído",
      exclusions: "O Que Não Está Incluído",
      travelTips: "Dicas de Viagem",
      faqs: "Perguntas Frequentes",
      duration: "Duração",
      category: "Categoria",
      style: "Estilo de Viagem",
      groupSize: "Tamanho do Grupo",
      privateTour: "Tour Privado",
      customizable: "100% Personalizável",
      priceNote: "Preço Sob Consulta",
      inquireCta: "Consultar Sobre Este Tour",
      customizeCta: "Personalizar Esta Viagem",
      relatedTitle: "Você Também Pode Gostar",
      daysLabel: "Dias",
      dayLabel: "Dia",
      included: "Incluído na sua viagem",
      excluded: "Não incluído",
      inc1: "Veículo privado de luxo com motorista profissional",
      inc2: "Hotéis heritage de 4-5 estrelas selecionados",
      inc3: "Guia local bilíngue (inglês/espanhol/português)",
      inc4: "Café da manhã diário no hotel",
      inc5: "Todas as entradas em monumentos e licenças",
      inc6: "Suporte concierge 24/7 no destino",
      exc1: "Voos internacionais e domésticos",
      exc2: "Seguro de viagem",
      exc3: "Despesas pessoais e gorjetas",
      exc4: "Refeições não mencionadas no itinerário",
      exc5: "Taxas de visto",
    }
  };

  const text = t[locale as keyof typeof t] || t.en;

  // Get related packages
  const allPackages = await getTourPackagesAction();
  const related = allPackages
    .filter((p: any) => p.slug !== slug && p.category === pkg.category)
    .slice(0, 3);

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">

      {/* Hero Section */}
      <section className="relative h-[75vh] min-h-[550px] flex items-end overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title?.[lang] || pkg.title?.en}
          className="absolute inset-0 w-full h-full object-cover animate-kenburns"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0C]/80 via-[#0B0D0C]/30 to-transparent" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 space-y-5">
          {/* Back link */}
          <Link href={`/${locale}/packages`} className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-xs font-medium transition-colors">
            <ChevronLeft className="w-4 h-4" />
            <span>{text.backToPackages}</span>
          </Link>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-[#C3AB85] text-[#0B0D0C] text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              {pkg.category}
            </span>
            <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {pkg.durationDays} {text.daysLabel}
            </span>
            <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              {text.privateTour}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] max-w-4xl">
            {pkg.title?.[lang] || pkg.title?.en}
          </h1>
          <p className="text-sm md:text-base text-white/75 max-w-2xl font-light leading-relaxed">
            {pkg.tagline?.[lang] || pkg.tagline?.en}
          </p>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-white border-b border-[#C3AB85]/15 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-xs text-[#1B1B1B]/60">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#C3AB85]" />{pkg.durationDays} {text.daysLabel}</span>
            <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-[#C3AB85]" />{text.privateTour}</span>
            <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-[#C3AB85]" />{text.customizable}</span>
          </div>
          <Link href={`/${locale}/contact`} className="bg-[#0B0D0C] hover:bg-[#C3AB85] text-white hover:text-[#0B0D0C] text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2">
            <span>{text.inquireCta}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-28">

        {/* Highlights */}
        {pkg.highlights && pkg.highlights.length > 0 && (
          <Reveal>
            <section className="space-y-10">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C3AB85] font-bold">{text.highlights}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0B0D0C]">What Makes This Journey Special</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {pkg.highlights.map((hl: any, i: number) => (
                  <div key={i} className="group bg-white border border-[#C3AB85]/10 p-6 space-y-3 hover:border-[#C3AB85]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                    <div className="w-10 h-10 bg-[#C3AB85]/10 flex items-center justify-center group-hover:bg-[#C3AB85]/20 transition-colors">
                      <CheckCircle className="w-5 h-5 text-[#C3AB85]" />
                    </div>
                    <p className="text-sm text-[#1B1B1B]/80 font-light leading-relaxed">
                      {hl[lang] || hl.en}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        {/* Itinerary Timeline */}
        {pkg.itinerary && pkg.itinerary.length > 0 && (
          <Reveal>
            <section className="space-y-10">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C3AB85] font-bold">{text.itinerary}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0B0D0C]">Your Journey, Day by Day</h2>
              </div>

              <div className="relative">
                {/* Timeline vertical line */}
                <div className="hidden md:block absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C3AB85]/40 via-[#C3AB85]/20 to-transparent" />

                <div className="space-y-6">
                  {pkg.itinerary.map((day: any, i: number) => (
                    <Reveal key={i} delay={i * 80}>
                      <div className="relative flex gap-6 md:gap-10">
                        {/* Day circle */}
                        <div className="hidden md:flex flex-col items-center shrink-0">
                          <div className="w-16 h-16 rounded-full bg-[#0B0D0C] text-white flex flex-col items-center justify-center border-4 border-[#FAF8F5] shadow-lg z-10">
                            <span className="text-[8px] uppercase tracking-wider font-bold text-[#C3AB85]">{text.dayLabel}</span>
                            <span className="text-lg font-bold leading-none">{day.day < 10 ? `0${day.day}` : day.day}</span>
                          </div>
                        </div>

                        {/* Day content card */}
                        <div className="flex-grow bg-white border border-[#C3AB85]/10 p-6 md:p-8 space-y-3 hover:border-[#C3AB85]/25 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3 md:hidden mb-2">
                            <span className="bg-[#0B0D0C] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                              {text.dayLabel} {day.day < 10 ? `0${day.day}` : day.day}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-[#0B0D0C]">
                            {day.title?.[lang] || day.title?.en}
                          </h3>
                          <p className="text-sm text-[#1B1B1B]/60 leading-relaxed font-light">
                            {day.desc?.[lang] || day.desc?.en}
                          </p>
                          <div className="flex flex-wrap gap-3 pt-2">
                            <span className="text-[9px] uppercase tracking-wider font-bold text-[#C3AB85] flex items-center gap-1">
                              <Hotel className="w-3 h-3" /> Stay Included
                            </span>
                            <span className="text-[9px] uppercase tracking-wider font-bold text-[#C3AB85] flex items-center gap-1">
                              <Car className="w-3 h-3" /> Private Transfer
                            </span>
                            <span className="text-[9px] uppercase tracking-wider font-bold text-[#C3AB85] flex items-center gap-1">
                              <Utensils className="w-3 h-3" /> Breakfast
                            </span>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          </Reveal>
        )}

        {/* Inclusions & Exclusions */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Reveal direction="left">
            <div className="bg-white border border-emerald-200/50 p-8 space-y-6 h-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-50 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-[#0B0D0C]">{text.inclusions}</h3>
              </div>
              <p className="text-xs text-[#1B1B1B]/50 font-light">{text.included}</p>
              <ul className="space-y-3">
                {[text.inc1, text.inc2, text.inc3, text.inc4, text.inc5, text.inc6].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#1B1B1B]/75 font-light">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
                {pkg.includedExperiences?.map((exp: any, i: number) => (
                  <li key={`exp-${i}`} className="flex items-start gap-3 text-sm text-[#1B1B1B]/75 font-light">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{exp[lang] || exp.en}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="bg-white border border-red-200/50 p-8 space-y-6 h-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-50 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-[#0B0D0C]">{text.exclusions}</h3>
              </div>
              <p className="text-xs text-[#1B1B1B]/50 font-light">{text.excluded}</p>
              <ul className="space-y-3">
                {[text.exc1, text.exc2, text.exc3, text.exc4, text.exc5].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#1B1B1B]/75 font-light">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        {/* FAQs */}
        {pkg.faqs && pkg.faqs.length > 0 && (
          <Reveal>
            <section className="space-y-8 max-w-3xl">
              <h2 className="text-2xl font-bold text-[#0B0D0C]">{text.faqs}</h2>
              <div className="space-y-4">
                {pkg.faqs.map((faq: any, i: number) => (
                  <details key={i} className="group border border-[#C3AB85]/15 overflow-hidden" open={i === 0}>
                    <summary className="flex justify-between items-center p-5 cursor-pointer font-bold text-[#0B0D0C] text-sm hover:bg-[#FAF8F5] transition-colors">
                      <span>{faq.q?.[lang] || faq.q?.en}</span>
                      <span className="w-6 h-6 rounded-full bg-[#C3AB85]/10 flex items-center justify-center text-[#C3AB85] text-xs group-open:rotate-45 transition-transform duration-300">+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-sm text-[#1B1B1B]/60 font-light leading-relaxed">
                        {faq.a?.[lang] || faq.a?.en}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        {/* CTA Section */}
        <Reveal direction="scale">
          <section className="bg-[#0B0D0C] p-10 md:p-16 text-center text-white space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#C3AB85_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold">{text.customizeCta}</h2>
              <p className="text-sm text-white/50 font-light max-w-lg mx-auto">
                {pkg.tagline?.[lang] || pkg.tagline?.en}
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Link href={`/${locale}/contact`} className="bg-[#C3AB85] hover:bg-[#D5C49A] text-[#0B0D0C] font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                  <span>{text.inquireCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Related Tours */}
        {related.length > 0 && (
          <section className="space-y-10">
            <h2 className="text-2xl font-bold text-[#0B0D0C]">{text.relatedTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel: any, i: number) => (
                <Reveal key={rel.slug} delay={i * 100}>
                  <Link href={`/${locale}/packages/${rel.slug}`} className="group block">
                    <div className="bg-white border border-[#C3AB85]/10 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                      <div className="h-48 overflow-hidden relative">
                        <img src={rel.image} alt={rel.title?.en} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <span className="absolute top-3 left-3 bg-[#0B0D0C]/80 text-[#C3AB85] text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">{rel.durationDays} {text.daysLabel}</span>
                      </div>
                      <div className="p-5 space-y-2">
                        <h3 className="font-bold text-[#0B0D0C] group-hover:text-[#C3AB85] transition-colors line-clamp-1">{rel.title?.[lang] || rel.title?.en}</h3>
                        <p className="text-xs text-[#1B1B1B]/50 line-clamp-2 font-light">{rel.tagline?.[lang] || rel.tagline?.en}</p>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
