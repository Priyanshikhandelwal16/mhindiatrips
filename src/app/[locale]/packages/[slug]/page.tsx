import React from "react";
import Link from "next/link";
import { getTourPackageBySlugAction, getTourPackagesAction } from "@/app/actions/queries";
import { notFound } from "next/navigation";
import { 
  Calendar, MapPin, Users, CheckCircle, XCircle, ArrowRight, 
  Star, Clock, Shield, Car, Hotel, Utensils, Camera, Heart,
  ChevronLeft, Info, HelpCircle, DollarSign, ShieldAlert, Globe
} from "lucide-react";
import Reveal from "@/components/home/Reveal";

interface PackageDetailProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: PackageDetailProps) {
  const { locale, slug } = await params;
  const pkg = await getTourPackageBySlugAction(slug);
  if (!pkg) return {};
  const lang = (locale === "es" || locale === "pt") ? locale : "en";

  const title = pkg.seo?.title?.[lang] || pkg.seo?.title?.en || pkg.title?.[lang] || pkg.title?.en || "";
  const description = pkg.seo?.description?.[lang] || pkg.seo?.description?.en || pkg.tagline?.[lang] || pkg.tagline?.en || "";
  const keywords = pkg.seo?.keywords?.[lang] || pkg.seo?.keywords?.en || "";

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: pkg.seo?.ogTitle || title,
      description: pkg.seo?.ogDescription || description,
      images: pkg.seo?.ogImage ? [{ url: pkg.seo?.ogImage }] : [{ url: pkg.image }],
    },
    alternates: {
      canonical: pkg.seo?.canonicalUrl || `/${locale}/packages/${slug}`,
    },
    robots: {
      index: pkg.seo?.indexRule !== "noindex",
      follow: pkg.seo?.followRule !== "nofollow",
    }
  };
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
      difficulty: "Difficulty",
      starting: "Starts in",
      ending: "Ends in",
      addonsTitle: "Optional Experiences / Add-ons",
      addonsSubtitle: "Enhance your itinerary with these unique activities",
      travelGuidelines: "Travel Guidelines & Practical Info",
      galleryTitle: "Tour Gallery",
      pricingTitle: "Package Pricing Details",
      startingFrom: "Starting from",
      discountPrice: "Special Discount Price",
      groupNote: "Group Pricing Notes",
      enquireForPrice: "Enquire for Price",
      perPerson: "per person",
      importantNotes: "Important Information & Policies",
      activities: "Activities",
      meals: "Meals",
      overnight: "Overnight",
      distance: "Distance",
      travelTime: "Travel Time",
      sightseeing: "Sightseeing"
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
      difficulty: "Dificultad",
      starting: "Comienza en",
      ending: "Termina en",
      addonsTitle: "Experiencias Opcionales / Suplementos",
      addonsSubtitle: "Mejore su itinerario con estas actividades únicas",
      travelGuidelines: "Pautas de Viaje e Información Práctica",
      galleryTitle: "Galería del Tour",
      pricingTitle: "Detalles de Precios del Paquete",
      startingFrom: "A partir de",
      discountPrice: "Precio Especial de Descuento",
      groupNote: "Notas sobre Precios de Grupo",
      enquireForPrice: "Consultar Precio",
      perPerson: "por persona",
      importantNotes: "Información Importante y Políticas",
      activities: "Actividades",
      meals: "Comidas",
      overnight: "Alojamiento",
      distance: "Distancia",
      travelTime: "Tiempo de Viaje",
      sightseeing: "Visitas de interés"
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
      difficulty: "Dificuldade",
      starting: "Começa em",
      ending: "Termina em",
      addonsTitle: "Experiências Opcionais / Adicionais",
      addonsSubtitle: "Melhore seu roteiro com estas atividades exclusivas",
      travelGuidelines: "Diretrizes de Viagem e Informações Práticas",
      galleryTitle: "Galeria do Tour",
      pricingTitle: "Detalhes de Preços do Pacote",
      startingFrom: "A partir de",
      discountPrice: "Preço Especial com Desconto",
      groupNote: "Observações sobre Preços para Grupos",
      enquireForPrice: "Consultar Preço",
      perPerson: "por pessoa",
      importantNotes: "Informações Importantes e Políticas",
      activities: "Atividades",
      meals: "Refeições",
      overnight: "Hospedagem",
      distance: "Distância",
      travelTime: "Tempo de Viagem",
      sightseeing: "Pontos turísticos"
    }
  };

  const text = t[locale as keyof typeof t] || t.en;

  // Get related packages
  const allPackages = await getTourPackagesAction();
  const related = allPackages
    .filter((p: any) => p.slug !== slug && p.category === pkg.category)
    .slice(0, 3);

  // Currency Formatter helper
  const formatPrice = (val: number, currency: string = "USD") => {
    return new Intl.NumberFormat(locale === "es" ? "es-ES" : locale === "pt" ? "pt-BR" : "en-US", {
      style: "currency",
      currency: currency
    }).format(val);
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">

      {/* 1. Hero Section */}
      <section className="relative h-[75vh] min-h-[550px] flex items-end overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title?.[lang] || pkg.title?.en}
          className="absolute inset-0 w-full h-full object-cover animate-kenburns"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
        
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
              {pkg.durationDays} {text.daysLabel} / {pkg.durationNights || (pkg.durationDays - 1)} Nights
            </span>
            <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              {pkg.tourType || text.privateTour}
            </span>
          </div>

          {/* 2. Title & Tagline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] max-w-4xl font-serif">
            {pkg.title?.[lang] || pkg.title?.en}
          </h1>
          <p className="text-sm md:text-base text-white/75 max-w-2xl font-light leading-relaxed">
            {pkg.tagline?.[lang] || pkg.tagline?.en}
          </p>
        </div>
      </section>

      {/* Sticky Quick Info Bar */}
      <section className="bg-white border-b border-[#C3AB85]/15 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-xs text-[#1B1B1B]/60">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#C3AB85]" />{pkg.durationDays} {text.daysLabel}</span>
            <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-[#C3AB85]" />{pkg.tourType || text.privateTour}</span>
            <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-[#C3AB85]" />{text.customizable}</span>
          </div>
          <Link href={`/${locale}/contact?package=${slug}`} className="bg-[#0B0D0C] hover:bg-[#C3AB85] text-white hover:text-[#0B0D0C] text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2">
            <span>{text.inquireCta}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">

        {/* 3. Quick Details Bar */}
        <Reveal>
          <div className="bg-white border border-[#C3AB85]/10 p-6 md:p-8 rounded-3xl grid grid-cols-2 md:grid-cols-4 gap-6 text-xs shadow-sm">
            <div className="space-y-1">
              <span className="text-royal/40 font-bold uppercase tracking-wider block">{text.style}</span>
              <span className="font-bold text-royal text-sm">{pkg.travelStyle || "Luxury Heritage"}</span>
            </div>
            <div className="space-y-1">
              <span className="text-royal/40 font-bold uppercase tracking-wider block">{text.groupSize}</span>
              <span className="font-bold text-royal text-sm">{pkg.groupSize || "2–12 Travellers"}</span>
            </div>
            <div className="space-y-1">
              <span className="text-royal/40 font-bold uppercase tracking-wider block">{text.difficulty}</span>
              <span className="font-bold text-royal text-sm">{pkg.difficultyLevel || "Easy"}</span>
            </div>
            <div className="space-y-1">
              <span className="text-royal/40 font-bold uppercase tracking-wider block">{text.starting} / {text.ending}</span>
              <span className="font-bold text-royal text-sm">{pkg.startingLocation || "Delhi"} / {pkg.endingLocation || "Delhi"}</span>
            </div>
          </div>
        </Reveal>

        {/* 4 & 5. Short Description & Overview (Full Description) */}
        <Reveal>
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C3AB85] font-bold">{text.overview}</span>
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#0B0D0C]">About the Journey</h2>
              </div>
              <div className="text-sm text-[#1B1B1B]/80 font-light leading-relaxed space-y-4 whitespace-pre-line">
                {pkg.description?.[lang] || pkg.description?.en || pkg.tagline?.[lang] || pkg.tagline?.en}
              </div>
            </div>
            
            <div className="bg-[#0B0D0C] text-white p-8 rounded-3xl space-y-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#C3AB85_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <h3 className="font-serif font-bold text-lg text-[#C3AB85]">Tour Highlights Summary</h3>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  Experience dynamic sightseeing, professional English/Spanish/Portuguese speaking guides, and customized itineraries.
                </p>
                <div className="space-y-2 pt-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#C3AB85]">
                    <CheckCircle className="w-4 h-4 text-[#C3AB85]" />
                    <span>Private Car Chauffeur</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#C3AB85]">
                    <CheckCircle className="w-4 h-4 text-[#C3AB85]" />
                    <span>5-Star Hotels & Heritage Stays</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#C3AB85]">
                    <CheckCircle className="w-4 h-4 text-[#C3AB85]" />
                    <span>Traditional Cooking Class</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* 6. Tour Highlights Grid */}
        {pkg.highlights && pkg.highlights.length > 0 && (
          <Reveal>
            <section className="space-y-10">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C3AB85] font-bold">{text.highlights}</span>
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#0B0D0C]">What Makes This Journey Special</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pkg.highlights.map((hl: any, i: number) => {
                  const hlTitle = hl.title?.[lang] || hl.title?.en || hl[lang] || hl.en;
                  const hlDesc = hl.desc?.[lang] || hl.desc?.en || "";
                  return (
                    <div key={i} className="group bg-white border border-[#C3AB85]/10 p-6 rounded-2xl space-y-3 hover:border-[#C3AB85]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                      <div className="w-10 h-10 bg-[#C3AB85]/10 flex items-center justify-center group-hover:bg-[#C3AB85]/20 transition-colors rounded-xl">
                        <CheckCircle className="w-5 h-5 text-[#C3AB85]" />
                      </div>
                      <h3 className="text-sm font-bold text-[#0B0D0C]">{hlTitle}</h3>
                      {hlDesc && (
                        <p className="text-xs text-[#1B1B1B]/60 font-light leading-relaxed">
                          {hlDesc}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </Reveal>
        )}

        {/* 7. Day-by-Day Itinerary Timeline */}
        {pkg.itinerary && pkg.itinerary.length > 0 && (
          <Reveal>
            <section className="space-y-10">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C3AB85] font-bold">{text.itinerary}</span>
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#0B0D0C]">Your Journey, Day by Day</h2>
              </div>

              <div className="relative">
                {/* Timeline vertical line */}
                <div className="hidden md:block absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C3AB85]/40 via-[#C3AB85]/20 to-transparent" />

                <div className="space-y-8">
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
                        <div className="flex-grow bg-white border border-[#C3AB85]/10 p-6 md:p-8 space-y-4 rounded-3xl hover:border-[#C3AB85]/25 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3 md:hidden mb-2">
                            <span className="bg-[#0B0D0C] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                              {text.dayLabel} {day.day < 10 ? `0${day.day}` : day.day}
                            </span>
                          </div>
                          
                          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 pb-2 border-b border-beige/40">
                            <h3 className="text-lg font-bold text-[#0B0D0C] font-serif">
                              {day.title?.[lang] || day.title?.en}
                            </h3>
                            {day.location && (
                              <span className="inline-flex items-center gap-1 bg-[#FAF8F5] text-royal font-bold text-[9px] uppercase tracking-wider px-3 py-1 rounded border border-[#C3AB85]/20">
                                <MapPin className="w-3.5 h-3.5 text-[#C3AB85]" /> {day.location}
                              </span>
                            )}
                          </div>

                          <p className="text-sm text-[#1B1B1B]/70 leading-relaxed font-light">
                            {day.desc?.[lang] || day.desc?.en}
                          </p>

                          {day.image && (
                            <div className="h-44 w-full overflow-hidden rounded-2xl border border-beige/35">
                              <img src={day.image} alt={day.title?.[lang] || day.title?.en} className="w-full h-full object-cover" />
                            </div>
                          )}

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs pt-2">
                            {day.sightseeing && (
                              <div className="space-y-0.5">
                                <span className="text-[9px] uppercase tracking-wider font-bold text-[#C3AB85] block">{text.sightseeing}</span>
                                <span className="font-semibold text-royal">{day.sightseeing}</span>
                              </div>
                            )}
                            {day.meals && (
                              <div className="space-y-0.5">
                                <span className="text-[9px] uppercase tracking-wider font-bold text-[#C3AB85] block">{text.meals}</span>
                                <span className="font-semibold text-royal">{day.meals}</span>
                              </div>
                            )}
                            {day.overnight && (
                              <div className="space-y-0.5">
                                <span className="text-[9px] uppercase tracking-wider font-bold text-[#C3AB85] block">{text.overnight}</span>
                                <span className="font-semibold text-royal">{day.overnight}</span>
                              </div>
                            )}
                            {day.hotel && (
                              <div className="space-y-0.5">
                                <span className="text-[9px] uppercase tracking-wider font-bold text-[#C3AB85] block">{text.overnight} stay</span>
                                <span className="font-semibold text-royal">{day.hotel}</span>
                              </div>
                            )}
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

        {/* 8 & 9. Inclusions & Exclusions */}
        <Reveal>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Inclusions */}
            <div className="bg-white border border-emerald-100 rounded-3xl p-8 space-y-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-50 flex items-center justify-center rounded-xl">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold font-serif text-[#0B0D0C]">{text.inclusions}</h3>
              </div>
              <ul className="space-y-3">
                {pkg.includedExperiences?.map((exp: any, i: number) => {
                  const val = exp[lang] || exp.en || exp;
                  return (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#1B1B1B]/75 font-light">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{val}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="bg-white border border-red-100 rounded-3xl p-8 space-y-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-50 flex items-center justify-center rounded-xl">
                  <XCircle className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-lg font-bold font-serif text-[#0B0D0C]">{text.exclusions}</h3>
              </div>
              <ul className="space-y-3">
                {pkg.exclusions?.map((exc: any, i: number) => {
                  const val = exc[lang] || exc.en || exc;
                  return (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#1B1B1B]/75 font-light">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{val}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </Reveal>

        {/* 10. Optional Add-ons */}
        {pkg.addons && pkg.addons.length > 0 && (
          <Reveal>
            <section className="space-y-8">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C3AB85] font-bold">{text.addonsTitle}</span>
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#0B0D0C]">{text.addonsSubtitle}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pkg.addons.map((add: any, i: number) => (
                  <div key={i} className="bg-white border border-[#C3AB85]/15 p-6 rounded-3xl space-y-4 hover:border-[#C3AB85]/35 hover:shadow-lg transition-all duration-300">
                    {add.image && (
                      <div className="h-36 w-full overflow-hidden rounded-2xl">
                        <img src={add.image} alt={add.name?.[lang] || add.name?.en} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <h3 className="font-serif font-bold text-base text-royal">{add.name?.[lang] || add.name?.en}</h3>
                    <p className="text-xs text-[#1B1B1B]/60 font-light leading-relaxed">{add.desc?.[lang] || add.desc?.en}</p>
                    <div className="flex justify-between items-center pt-2 border-t border-beige/40">
                      <span className="text-[10px] text-royal/40 font-bold uppercase tracking-wider">Duration: {add.duration || "N/A"}</span>
                      <span className="text-sm font-bold text-royal">{formatPrice(parseFloat(add.price) || 0, add.currency)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        {/* 11. Travel Information */}
        {pkg.travelInfo && (
          <Reveal>
            <section className="bg-white border border-[#C3AB85]/10 p-8 rounded-3xl space-y-8 shadow-sm">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C3AB85] font-bold">{text.travelGuidelines}</span>
                <h2 className="text-xl md:text-2xl font-bold font-serif text-[#0B0D0C]">Practical Guidelines for Travellers</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                <div className="space-y-1">
                  <span className="text-[#C3AB85] font-bold uppercase tracking-wider block">Transportation Standard</span>
                  <p className="text-royal font-medium">{pkg.travelInfo.transportation}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[#C3AB85] font-bold uppercase tracking-wider block">Hotel / Accommodation Standard</span>
                  <p className="text-royal font-medium">{pkg.travelInfo.accommodation}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[#C3AB85] font-bold uppercase tracking-wider block">Best Time to Visit</span>
                  <p className="text-royal font-medium">{pkg.travelInfo.bestTime}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[#C3AB85] font-bold uppercase tracking-wider block">On-site languages</span>
                  <p className="text-royal font-medium">{pkg.travelInfo.languages}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[#C3AB85] font-bold uppercase tracking-wider block">Suitable For</span>
                  <p className="text-royal font-medium">{pkg.travelInfo.suitableFor}</p>
                </div>
              </div>
            </section>
          </Reveal>
        )}

        {/* 12. Photo Gallery Grid */}
        {pkg.gallery && pkg.gallery.length > 0 && (
          <Reveal>
            <section className="space-y-8">
              <h2 className="text-2xl font-bold font-serif text-[#0B0D0C]">{text.galleryTitle}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {pkg.gallery.map((img: any, i: number) => {
                  const imgUrl = typeof img === 'string' ? img : img.url;
                  const imgAlt = img.alt || "Gallery image";
                  return (
                    <div key={i} className="h-40 overflow-hidden rounded-2xl border border-beige/40 relative group cursor-pointer shadow-sm">
                      <img src={imgUrl} alt={imgAlt} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
                    </div>
                  );
                })}
              </div>
            </section>
          </Reveal>
        )}

        {/* 13. Pricing details */}
        {pkg.pricing && !pkg.pricing.enquireForPrice && (
          <Reveal>
            <section className="bg-white border border-[#C3AB85]/15 p-8 rounded-3xl space-y-6 shadow-sm">
              <h2 className="text-2xl font-bold font-serif text-[#0B0D0C]">{text.pricingTitle}</h2>
              <div className="flex flex-wrap items-end justify-between gap-6 pb-4 border-b border-beige/40">
                <div className="space-y-1">
                  <span className="text-royal/40 font-bold uppercase tracking-wider block text-[10px]">{text.startingFrom}</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-royal">{formatPrice(pkg.pricing.startingPrice, pkg.pricing.currency)}</span>
                    <span className="text-xs text-royal/60">{text.perPerson}</span>
                  </div>
                </div>
                {pkg.pricing.discountPrice > 0 && (
                  <div className="space-y-1">
                    <span className="text-red-500 font-bold uppercase tracking-wider block text-[10px]">{text.discountPrice}</span>
                    <span className="text-2xl font-bold text-red-500">{formatPrice(pkg.pricing.discountPrice, pkg.pricing.currency)}</span>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs pt-4">
                {pkg.pricing.priceIncludes && (
                  <div className="space-y-1">
                    <span className="text-emerald-600 font-bold uppercase block">Includes</span>
                    <p className="text-royal/80">{pkg.pricing.priceIncludes}</p>
                  </div>
                )}
                {pkg.pricing.priceExcludes && (
                  <div className="space-y-1">
                    <span className="text-red-500 font-bold uppercase block">Excludes</span>
                    <p className="text-royal/80">{pkg.pricing.priceExcludes}</p>
                  </div>
                )}
                {pkg.pricing.groupPricing && (
                  <div className="col-span-full space-y-1">
                    <span className="text-royal/40 font-bold uppercase block">{text.groupNote}</span>
                    <p className="text-royal/80">{pkg.pricing.groupPricing}</p>
                  </div>
                )}
              </div>
            </section>
          </Reveal>
        )}

        {/* 14. FAQs Accordion */}
        {pkg.faqs && pkg.faqs.length > 0 && (
          <Reveal>
            <section className="space-y-8 max-w-3xl">
              <h2 className="text-2xl font-bold font-serif text-[#0B0D0C]">{text.faqs}</h2>
              <div className="space-y-4">
                {pkg.faqs.map((faq: any, i: number) => (
                  <details key={i} className="group border border-[#C3AB85]/15 overflow-hidden rounded-2xl" open={i === 0}>
                    <summary className="flex justify-between items-center p-5 cursor-pointer font-bold text-[#0B0D0C] text-sm bg-white hover:bg-[#FAF8F5] transition-colors">
                      <span>{faq.q?.[lang] || faq.q?.en}</span>
                      <span className="w-6 h-6 rounded-full bg-[#C3AB85]/10 flex items-center justify-center text-[#C3AB85] text-xs group-open:rotate-45 transition-transform duration-300">+</span>
                    </summary>
                    <div className="px-5 pb-5 bg-white">
                      <p className="text-sm text-[#1B1B1B]/70 font-light leading-relaxed">
                        {faq.a?.[lang] || faq.a?.en}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        {/* 15. Important Information & Policies */}
        {pkg.policies && (
          <Reveal>
            <section className="bg-white border border-[#C3AB85]/10 p-8 rounded-3xl space-y-8 shadow-sm">
              <h2 className="text-2xl font-bold font-serif text-[#0B0D0C]">{text.importantNotes}</h2>
              <div className="space-y-6">
                {pkg.policies.cancellation && (
                  <div className="space-y-2">
                    <h3 className="font-bold text-xs uppercase text-[#C3AB85]">Cancellation Policy</h3>
                    <p className="text-xs text-royal/80 leading-relaxed font-light">{pkg.policies.cancellation[lang] || pkg.policies.cancellation.en}</p>
                  </div>
                )}
                {pkg.policies.refund && (
                  <div className="space-y-2">
                    <h3 className="font-bold text-xs uppercase text-[#C3AB85]">Refund Policy</h3>
                    <p className="text-xs text-royal/80 leading-relaxed font-light">{pkg.policies.refund[lang] || pkg.policies.refund.en}</p>
                  </div>
                )}
                {pkg.policies.bookingTerms && (
                  <div className="space-y-2">
                    <h3 className="font-bold text-xs uppercase text-[#C3AB85]">Booking Terms</h3>
                    <p className="text-xs text-royal/80 leading-relaxed font-light">{pkg.policies.bookingTerms[lang] || pkg.policies.bookingTerms.en}</p>
                  </div>
                )}
                {pkg.policies.importantNotes && (
                  <div className="space-y-2">
                    <h3 className="font-bold text-xs uppercase text-[#C3AB85]">Important Notes</h3>
                    <p className="text-xs text-royal/80 leading-relaxed font-light">{pkg.policies.importantNotes[lang] || pkg.policies.importantNotes.en}</p>
                  </div>
                )}
              </div>
            </section>
          </Reveal>
        )}

        {/* 16. CTA & pre-filled contact form */}
        <Reveal direction="scale">
          <section className="bg-[#0B0D0C] p-10 md:p-16 text-center text-white rounded-3xl space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#C3AB85_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold font-serif">{text.customizeCta}</h2>
              <p className="text-sm text-white/50 font-light max-w-lg mx-auto leading-relaxed">
                {pkg.tagline?.[lang] || pkg.tagline?.en}
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Link href={`/${locale}/contact?package=${slug}`} className="bg-[#C3AB85] hover:bg-[#D5C49A] text-[#0B0D0C] font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                  <span>{text.inquireCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        </Reveal>

        {/* 17. Related Tours */}
        {related.length > 0 && (
          <section className="space-y-10">
            <h2 className="text-2xl font-bold font-serif text-[#0B0D0C]">{text.relatedTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel: any, i: number) => (
                <Reveal key={rel.slug} delay={i * 100}>
                  <Link href={`/${locale}/packages/${rel.slug}`} className="group block">
                    <div className="bg-white border border-[#C3AB85]/10 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500 rounded-3xl">
                      <div className="h-48 overflow-hidden relative">
                        <img src={rel.image} alt={rel.title?.en} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <span className="absolute top-3 left-3 bg-[#0B0D0C]/80 text-[#C3AB85] text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">{rel.durationDays} {text.daysLabel}</span>
                      </div>
                      <div className="p-5 space-y-2">
                        <h3 className="font-bold text-[#0B0D0C] group-hover:text-[#C3AB85] transition-colors line-clamp-1 font-serif">{rel.title?.[lang] || rel.title?.en}</h3>
                        <p className="text-xs text-[#1B1B1B]/50 line-clamp-2 font-light leading-relaxed">{rel.tagline?.[lang] || rel.tagline?.en}</p>
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
