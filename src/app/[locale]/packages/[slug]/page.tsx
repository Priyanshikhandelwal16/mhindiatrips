import React from "react";
import Link from "next/link";
import { getTourPackageBySlugAction, getTourPackagesAction, getSettingsDetailsAction } from "@/app/actions/queries";
import { notFound } from "next/navigation";
import { 
  Calendar, MapPin, Users, CheckCircle, XCircle, ArrowRight, 
  Star, Clock, ShieldCheck, Car, Hotel, Utensils, Heart,
  ChevronLeft, Info, DollarSign, Globe, Sparkles, Phone, Mail, MessageSquare, AlertCircle, Printer, Compass, Award, Check
} from "lucide-react";
import Reveal from "@/components/home/Reveal";
import PrintBrochureButton from "@/components/packages/PrintBrochureButton";

interface PackageDetailProps {
  params: Promise<{ locale: string; slug: string }>;
  searchParams?: Promise<{ preview?: string }>;
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
      index: pkg.isDraft ? false : (pkg.seo?.indexRule !== "noindex"),
      follow: pkg.isDraft ? false : (pkg.seo?.followRule !== "nofollow"),
    }
  };
}

function parseBullets(input: any, currentLang: string = "en"): string[] {
  if (!input) return [];
  if (Array.isArray(input)) {
    return input.map(item => {
      if (typeof item === 'string') return item.replace(/^[\*\-\•\s]+/, '').trim();
      if (typeof item === 'object' && item !== null) {
        const val = item[currentLang] || item.en || item.es || item.pt || Object.values(item)[0] || '';
        return String(val).replace(/^[\*\-\•\s]+/, '').trim();
      }
      return String(item).trim();
    }).filter(Boolean);
  }
  if (typeof input === 'object' && input !== null) {
    const localized = input[currentLang] || input.en || input.es || input.pt || Object.values(input)[0];
    return parseBullets(localized, currentLang);
  }
  if (typeof input === 'string') {
    let lines = input.split(/\n+/);
    if (lines.length === 1 && (input.includes('. ') || input.includes('; '))) {
      lines = input.split(/(?<=\.)\s+/);
    }
    return lines
      .map(line => line.replace(/^[\*\-\•\s]+/, '').trim())
      .filter(Boolean);
  }
  return [];
}

export default async function PackageDetailPage({ params, searchParams }: PackageDetailProps) {
  const { locale, slug } = await params;
  const sParams = await searchParams;
  const isPreview = sParams?.preview === "true";

  const [pkg, settings] = await Promise.all([
    getTourPackageBySlugAction(slug),
    getSettingsDetailsAction()
  ]);

  if (!pkg) return notFound();

  // If tour is draft and not in preview mode, hide from public
  if (pkg.isDraft && !isPreview) {
    return notFound();
  }

  const lang = (locale === "es" || locale === "pt") ? locale : "en";

  const t = {
    en: {
      backToPackages: "All Journeys",
      overview: "Bespoke Journey Overview",
      details: "Tour Details & Experience",
      highlights: "Curated Highlights",
      itinerary: "Day-by-Day Bespoke Itinerary",
      inclusions: "Included Services & Amenities",
      exclusions: "Not Included Services",
      travelTips: "Travel Guidelines",
      duration: "Duration",
      category: "Category",
      style: "Travel Style",
      groupSize: "Group Size",
      minTravellers: "Min Travellers",
      hotelCategory: "Hotel Category",
      privateTour: "Private Luxury Tour",
      customizable: "100% Customizable",
      inquireCta: "Plan or Book This Journey",
      customizeCta: "Customize This Itinerary",
      relatedTitle: "You May Also Like",
      daysLabel: "Days",
      nightsLabel: "Nights",
      dayLabel: "Day",
      starting: "Starting Point",
      ending: "Ending Point",
      tourType: "Tour Style",
      importantNotes: "Important Travel Notes",
      activities: "Key Activities",
      schedule: "Daily Schedule",
      morning: "Morning",
      afternoon: "Afternoon",
      evening: "Evening",
      accommodation: "Accommodations",
      previewBadge: "PREVIEW MODE - DRAFT ITINERARY",
      readyToExplore: "READY TO EMBARK ON THIS JOURNEY?",
      readySub: "Thank you for choosing MH India Trips for your luxury journey. Our travel concierges are at your full disposal to customize every detail.",
      printBrochure: "Download / Print Brochure PDF",
      contactMsg: "For reservations & customized itineraries, please contact",
      emailLabel: "Email",
      phoneLabel: "Phone",
      websiteLabel: "Website",
      priceOnRequest: "Price Available On Request",
      defaultNotes: [
        "Price is calculated per person based on a minimum of 2 travellers with private vehicle and chauffeur.",
        "Prices may vary during peak festival seasons such as Holi, Diwali, Pushkar, Christmas, and New Year.",
        "Hotel check-in and check-out time is 12:00 PM.",
        "The Taj Mahal remains closed every Friday.",
        "MH India Trips is not responsible for road blockages, train delays, or unforeseen circumstances.",
        "Final price depends on hotel category, domestic flights, travel dates, and number of guests.",
        "Applicable government taxes will be added to the final quote."
      ]
    },
    es: {
      backToPackages: "Todos los Viajes",
      overview: "Resumen del Viaje Exclusivo",
      details: "Detalles del Tour y Experiencia",
      highlights: "Puntos Destacados",
      itinerary: "Itinerario Detallado Día a Día",
      inclusions: "Servicios e Inclusiones",
      exclusions: "Servicios no Incluidos",
      travelTips: "Pautas de Viaje",
      duration: "Duración",
      category: "Categoría",
      style: "Estilo de Viaje",
      groupSize: "Tamaño del Grupo",
      minTravellers: "Mínimo de Viajeros",
      hotelCategory: "Categoría de Hotel",
      privateTour: "Tour Privado de Lujo",
      customizable: "100% Personalizable",
      inquireCta: "Consultar o Reservar Este Viaje",
      customizeCta: "Personalizar Este Itinerario",
      relatedTitle: "También Te Puede Gustar",
      daysLabel: "Días",
      nightsLabel: "Noches",
      dayLabel: "Día",
      starting: "Punto de Inicio",
      ending: "Punto Final",
      tourType: "Estilo de Tour",
      importantNotes: "Notas Importantes del Viaje",
      activities: "Actividades Clave",
      schedule: "Horario Diario",
      morning: "Mañana",
      afternoon: "Tarde",
      evening: "Noche",
      accommodation: "Alojamiento Exclusivo",
      previewBadge: "MODO VISTA PREVIA - BORRADOR",
      readyToExplore: "¿LISTO PARA EMBARCARSE EN ESTA AVENTURA?",
      readySub: "Agradecemos su confianza en MH India Trips para esta inolvidable aventura de lujo. Nuestros asesores están a su entera disposición para personalizar cada detalle.",
      printBrochure: "Descargar / Imprimir Folleto PDF",
      contactMsg: "Para cualquier pregunta o para reservar su tour personalizado, contacte a",
      emailLabel: "Correo electrónico",
      phoneLabel: "Teléfono",
      websiteLabel: "Sitio Web",
      priceOnRequest: "Precio Disponible Bajo Petición",
      defaultNotes: [
        "El precio está calculado por persona en base a un mínimo de 2 viajeros con vehículo privado con chófer.",
        "Los precios pueden variar en temporadas especiales como Holi, Diwali, Pushkar, Navidad y Año Nuevo.",
        "El horario de check-in y check-out en los hoteles es a las 12:00 h.",
        "El Taj Mahal permanece cerrado todos los viernes.",
        "MH India Trips no se hace responsable de posibles imprevistos como bloqueos de carretera o situaciones similares.",
        "El precio final dependerá de la categoría de los hoteles, vuelos internos, fechas de viaje y número de personas.",
        "Será necesario añadir un porcentaje adicional correspondiente a los impuestos gubernamentales."
      ]
    },
    pt: {
      backToPackages: "Todos os Pacotes",
      overview: "Resumo da Viagem Exclusiva",
      details: "Detalhes do Tour e Experiência",
      highlights: "Destaques do Tour",
      itinerary: "Itinerário Detalhado Dia a Dia",
      inclusions: "Serviços Incluídos e Mordomias",
      exclusions: "Serviços Não Incluídos",
      travelTips: "Diretrizes de Viagem",
      duration: "Duração",
      category: "Categoria",
      style: "Estilo de Viagem",
      groupSize: "Tamanho do Grupo",
      minTravellers: "Mínimo de Viajantes",
      hotelCategory: "Categoria de Hotel",
      privateTour: "Tour Privado de Luxo",
      customizable: "100% Personalizável",
      inquireCta: "Consultar ou Reservar Esta Viagem",
      customizeCta: "Personalizar Este Roteiro",
      relatedTitle: "Você Também Pode Gostar",
      daysLabel: "Dias",
      nightsLabel: "Noites",
      dayLabel: "Dia",
      starting: "Punto de Partida",
      ending: "Ponto Final",
      tourType: "Estilo de Tour",
      importantNotes: "Notas Importantes de Viagem",
      activities: "Atividades Principais",
      schedule: "Programação Diária",
      morning: "Manhã",
      afternoon: "Tarde",
      evening: "Noite",
      accommodation: "Hospedagem de Luxo",
      previewBadge: "MODO PRÉ-VISUALIZAÇÃO - RASCUNHO",
      readyToExplore: "PRONTO PARA EMBARCAR NESTA VIAGEM?",
      readySub: "Agradecemos sua confiança na MH India Trips para esta inesquecível experiência de luxo. Nossos especialistas estão ao seu dispor para personalizar cada detalhe.",
      printBrochure: "Baixar / Imprimir Roteiro PDF",
      contactMsg: "Para qualquer dúvida ou para reservar seu passeio personalizado, entre em contato com",
      emailLabel: "E-mail",
      phoneLabel: "Telefone",
      websiteLabel: "Website",
      priceOnRequest: "Preço Sob Consulta",
      defaultNotes: [
        "O preço é calculado por pessoa com base em no mínimo 2 viajantes em veículo privado com motorista.",
        "Os preços podem variar em épocas festivas como Holi, Diwali, Pushkar, Natal e Ano Novo.",
        "O horário de check-in e check-out nos hotéis é às 12:00h.",
        "O Taj Mahal permanece fechado todas as sextas-feiras.",
        "MH India Trips não se responsabiliza por imprevistos como bloqueios de estradas ou cancelamentos.",
        "O preço final dependerá da categoria dos hotéis, voos internos, datas e número de pessoas.",
        "Impostos governamentais aplicáveis serão adicionados."
      ]
    }
  };

  const text = t[locale as keyof typeof t] || t.en;

  const pkgTitle = pkg.title?.[lang] || pkg.title?.en || pkg.title?.es || "";
  const pkgTagline = pkg.tagline?.[lang] || pkg.tagline?.en || pkg.tagline?.es || "";
  const routeText = pkg.routeSubtitle?.[lang] || pkg.routeSubtitle?.en || pkg.routeSubtitle?.es || pkg.route || pkg.travelInfo?.destinationsText || "";

  // Highlight notice note text (Yellow Box in reference image)
  const defaultSeasonalNotice = {
    es: "Estos precios no son válidos para el período del 20 de Diciembre hasta el 05 de Enero, ya que es temporada alta y los precios varían.",
    en: "These prices are not valid for the period from December 20th to January 5th, as it is peak season and prices vary.",
    pt: "Estes preços não são válidos para o período de 20 de Dezembro a 05 de Janeiro por ser alta temporada."
  };
  const noticeText = pkg.seasonalDiscountNote?.[lang] || pkg.seasonalDiscountNote?.[locale] || pkg.seasonalDiscountNote?.en || pkg.pricing?.seasonalDiscountNote || defaultSeasonalNotice[lang as keyof typeof defaultSeasonalNotice] || defaultSeasonalNotice.en;

  // Fallback photo helper so EVERY single day has a high-res image
  const getFallbackDayImage = (titleStr: string, locationStr: string, dayNumber: number) => {
    const combined = (titleStr + " " + locationStr + " " + pkgTitle).toLowerCase();
    if (combined.includes("delhi")) return "/images/taj_mahal_sunrise.png";
    if (combined.includes("agra") || combined.includes("taj mahal")) return "/images/taj_mahal_sunrise.png";
    if (combined.includes("jaipur") || combined.includes("amber") || combined.includes("hawa mahal")) return "/images/Jaipur.jpg";
    if (combined.includes("udaipur") || combined.includes("pichola")) return "/images/Udaipur.jpg";
    if (combined.includes("varanasi") || combined.includes("ganges") || combined.includes("aarti")) return "/images/varanasi_ghats_aarti.png";
    if (combined.includes("jodhpur") || combined.includes("mehrangarh")) return "/images/jodhpur.jpg";
    if (combined.includes("jaisalmer") || combined.includes("desert") || combined.includes("dunes")) return "/images/jaisalmer.jpg";
    if (combined.includes("goa") || combined.includes("beach")) return "/images/goa 2.jpg";
    if (combined.includes("kerala") || combined.includes("houseboat") || combined.includes("backwaters")) return "/images/kerala_backwaters_houseboat.png";
    if (combined.includes("munnar") || combined.includes("tea")) return "/images/munnar.jpg";
    if (combined.includes("ranthambore") || combined.includes("tiger") || combined.includes("safari")) return "/images/ranthambore_tiger_safari.png";
    if (combined.includes("nepal") || combined.includes("kathmandu")) return "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80";
    if (combined.includes("bhutan") || combined.includes("paro")) return "https://images.unsplash.com/photo-1578637387939-43c525550085?w=1200&q=80";
    if (combined.includes("sri lanka") || combined.includes("colombo")) return "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=1200&q=80";
    if (combined.includes("laos") || combined.includes("luang")) return "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?w=1200&q=80";
    if (combined.includes("bali") || combined.includes("ubud")) return "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80";
    if (combined.includes("malaysia") || combined.includes("kuala")) return "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&q=80";
    if (combined.includes("singapore")) return "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80";
    if (combined.includes("thailand") || combined.includes("bangkok") || combined.includes("phuket")) return "https://images.unsplash.com/photo-1506665531195-3566fe294677?w=1200&q=80";
    if (combined.includes("maldives")) return "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=80";

    const defaults = [
      "/images/rajasthan_fort_sunset.png",
      "/images/Jaipur.jpg",
      "/images/taj_mahal_sunrise.png",
      "/images/Udaipur.jpg",
      "/images/varanasi_ghats_aarti.png"
    ];
    return defaults[dayNumber % defaults.length];
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B] selection:bg-[#C5A862]/30 pb-20">

      {/* Preview Banner if in preview mode */}
      {isPreview && (
        <div className="bg-[#C5A862] text-[#0A2A1E] text-center font-bold text-xs py-2.5 px-4 sticky top-0 z-[100] shadow-md flex items-center justify-center gap-2 uppercase tracking-widest print:hidden">
          <Sparkles className="w-4 h-4 shrink-0" />
          <span>{text.previewBadge}</span>
        </div>
      )}

      {/* --------------------------------------------------
          1. HERO HEADER - High Impact Luxury Banner
         -------------------------------------------------- */}
      <section className="relative w-full min-h-[700px] md:min-h-[850px] flex flex-col justify-between text-white overflow-hidden border-b-4 border-[#C5A862]">
        
        {/* Cover Background Image with low opacity dark overlay so photo is crisp & not cut off */}
        <div className="absolute inset-0 z-0">
          <img 
            src={pkg.coverImage || pkg.image || "/images/rajasthan_fort_sunset.png"} 
            alt={pkgTitle} 
            className="w-full h-full object-cover object-center transform-gpu filter brightness-95"
          />
          {/* Low opacity dark overlay for sharp text contrast & full background photo visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-[#0A2A1E]/90 z-10 pointer-events-none" />
        </div>

        {/* Top Floating Bar inside Cover */}
        <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 flex items-center justify-between gap-3 sm:gap-4 print:hidden">
          <Link 
            href={`/${locale}/packages`} 
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/25 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full transition-all shadow-lg hover:scale-105 shrink-0"
          >
            <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A862]" />
            <span>{text.backToPackages}</span>
          </Link>

          {/* Official MH India Trips Brand Logo (Highlighted with pristine white glass backdrop) */}
          <Link 
            href={`/${locale}`} 
            className="shrink-0 bg-white/95 hover:bg-white backdrop-blur-md px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-2xl border-2 border-[#C5A862] shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-105"
          >
            <img 
              src="/images/logo-transparent.png" 
              alt={settings.companyName || "MH India Trips"} 
              className="h-7 sm:h-10 md:h-12 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Centered Hero Content Block */}
        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24 md:pb-28 text-center space-y-5 sm:space-y-6">
          
          {/* Category Pill & Duration Badge */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span className="bg-[#C5A862] text-[#0A2A1E] text-[10px] sm:text-xs uppercase font-extrabold tracking-widest px-3 py-1 sm:px-4 sm:py-1.5 rounded-full shadow-md flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#0A2A1E]" />
              {pkg.category || "Luxury Private Journey"}
            </span>

            <span className="bg-black/60 backdrop-blur-md text-[#C5A862] border border-[#C5A862]/40 text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 sm:px-4 sm:py-1.5 rounded-full shadow-md flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C5A862]" />
              {pkg.durationDays} {text.daysLabel} / {pkg.durationNights || pkg.durationDays - 1} {text.nightsLabel}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-2xl max-w-4xl mx-auto">
            {pkgTitle}
          </h1>

          {/* Subtitle Route Bar below Title */}
          {routeText && (
            <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs sm:text-base md:text-lg font-serif font-medium tracking-wide px-4 py-2 sm:px-6 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-xl max-w-3xl">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A862] shrink-0" />
              <span>{routeText}</span>
            </div>
          )}

          {/* Tagline */}
          {pkgTagline && (
            <p className="text-xs md:text-sm text-white/85 font-light max-w-2xl mx-auto leading-relaxed pt-1 drop-shadow-md">
              {pkgTagline}
            </p>
          )}

        </div>
      </section>

      {/* Sticky Quick Actions Navigation Bar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-[#C5A862]/20 sticky top-0 z-40 shadow-md print:hidden">
        
        {/* Mobile View Layout (Compact side-by-side buttons) */}
        <div className="flex sm:hidden items-center justify-between gap-2 px-3 py-2 text-xs">
          <PrintBrochureButton label="PDF Brochure" />
          <Link 
            href={`/${locale}/contact?package=${slug}`} 
            className="bg-[#0A2A1E] hover:bg-[#C5A862] text-white hover:text-[#0A2A1E] text-[10px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-full transition-all flex items-center justify-center gap-1.5 shadow-md shrink-0"
          >
            <span>{text.inquireCta}</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Tablet & Desktop View Layout */}
        <div className="hidden sm:flex max-w-6xl mx-auto px-6 py-3 items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-4 text-[#0A2A1E]">
            <span className="font-bold flex items-center gap-1.5 bg-[#0A2A1E]/5 px-3.5 py-1.5 rounded-full border border-[#0A2A1E]/10">
              <Clock className="w-4 h-4 text-[#C5A862]" />
              {pkg.durationDays} {text.daysLabel} / {pkg.durationNights || pkg.durationDays - 1} {text.nightsLabel}
            </span>

            {pkg.startingLocation && (
              <span className="hidden md:flex items-center gap-1 text-[#1B1B1B]/70 font-medium">
                <span>{text.starting}:</span>
                <strong className="text-[#0A2A1E] font-bold">{pkg.startingLocation}</strong>
              </span>
            )}

            <span className="bg-[#C5A862]/15 text-[#0A2A1E] px-3.5 py-1.5 rounded-full text-[11px] font-bold border border-[#C5A862]/30 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#CA8A04]" />
              {text.customizable}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Download PDF Brochure Button */}
            <PrintBrochureButton label={text.printBrochure} />

            {/* Direct Inquiry CTA Button */}
            <Link 
              href={`/${locale}/contact?package=${slug}`} 
              className="bg-[#0A2A1E] hover:bg-[#C5A862] text-white hover:text-[#0A2A1E] text-[11px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 shadow-md hover:scale-105 cursor-pointer"
            >
              <span>{text.inquireCta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>

      {/* --------------------------------------------------
          2. INNER CONTENT WRAPPER
         -------------------------------------------------- */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-16 space-y-12 md:space-y-14">

        <div className="relative z-10 space-y-12 md:space-y-14">

          {/* Luxury Feature Quick Highlights Cards Bar */}
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 items-stretch">
              
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#C5A862]/20 shadow-sm flex items-center gap-3 h-full min-h-[90px]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0A2A1E]/5 flex items-center justify-center text-[#0A2A1E] shrink-0 border border-[#C5A862]/30">
                  <Car className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A862]" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold text-[#0A2A1E] uppercase tracking-wider">{text.privateTour}</h4>
                  <p className="text-[10px] sm:text-[11px] text-[#1B1B1B]/70 font-medium">Chauffeur & Car</p>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#C5A862]/20 shadow-sm flex items-center gap-3 h-full min-h-[90px]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0A2A1E]/5 flex items-center justify-center text-[#0A2A1E] shrink-0 border border-[#C5A862]/30">
                  <Hotel className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A862]" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold text-[#0A2A1E] uppercase tracking-wider">{text.hotelCategory}</h4>
                  <p className="text-[10px] sm:text-[11px] text-[#1B1B1B]/70 font-medium line-clamp-1">{pkg.hotelCategory || "4★ & 5★ Luxury Palace"}</p>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#C5A862]/20 shadow-sm flex items-center gap-3 h-full min-h-[90px]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0A2A1E]/5 flex items-center justify-center text-[#0A2A1E] shrink-0 border border-[#C5A862]/30">
                  <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A862]" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold text-[#0A2A1E] uppercase tracking-wider">{text.style}</h4>
                  <p className="text-[10px] sm:text-[11px] text-[#1B1B1B]/70 font-medium line-clamp-2">
                    {typeof pkg.travelStyle === 'string'
                      ? (pkg.travelStyle.includes(',') ? pkg.travelStyle.split(',')[0] + " & Heritage" : pkg.travelStyle)
                      : "Bespoke Cultural"}
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#C5A862]/20 shadow-sm flex items-center gap-3 h-full min-h-[90px]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0A2A1E]/5 flex items-center justify-center text-[#0A2A1E] shrink-0 border border-[#C5A862]/30">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A862]" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold text-[#0A2A1E] uppercase tracking-wider">{text.minTravellers}</h4>
                  <p className="text-[10px] sm:text-[11px] text-[#1B1B1B]/70 font-medium">2 Guests Min</p>
                </div>
              </div>

            </div>
          </Reveal>

          {/* Overview & Special Yellow Notice Banner */}
          <Reveal>
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#C5A862]/25 shadow-lg space-y-6">
              
              <div className="space-y-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C5A862] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#C5A862]" />
                  <span>{text.overview}</span>
                </span>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0A2A1E] leading-snug">
                  {pkgTitle}
                </h2>
              </div>

              {(pkg.description?.[lang] || pkg.description?.en || pkg.description?.es) && (
                <p className="text-sm md:text-base text-[#2C2C2C] font-normal leading-relaxed">
                  {pkg.description?.[lang] || pkg.description?.en || pkg.description?.es}
                </p>
              )}

              {/* Yellow Highlight Notice Banner (Reference Highlight Box) */}
              {noticeText && (
                <div className="bg-[#FEF08A] text-[#713F12] p-5 rounded-2xl border-l-4 border-[#CA8A04] shadow-sm space-y-1.5 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#CA8A04] shrink-0 mt-0.5" />
                  <div className="text-xs md:text-sm font-medium leading-relaxed">
                    <strong className="block font-bold text-[#854D0E] uppercase text-[11px] tracking-wider mb-1">
                      {text.importantNotes}
                    </strong>
                    <span>{noticeText}</span>
                  </div>
                </div>
              )}

            </div>
          </Reveal>

          {/* --------------------------------------------------
              3. DAY-BY-DAY ITINERARY TIMELINE (Modern Visual Accordion/Card Flow)
             -------------------------------------------------- */}
          {pkg.itinerary && pkg.itinerary.length > 0 && (
            <div className="space-y-8">
              
              {/* Section Header */}
              <div className="border-b border-[#C5A862]/30 pb-4 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C5A862] block">
                    Step-by-Step Guidance
                  </span>
                  <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#0A2A1E]">
                    {text.itinerary}
                  </h2>
                </div>

                <span className="hidden sm:inline-block text-xs font-bold text-[#0A2A1E] bg-[#C5A862]/20 border border-[#C5A862]/40 px-4 py-2 rounded-full">
                  {pkg.itinerary.length} {text.daysLabel} Total
                </span>
              </div>

              {/* Day Cards Stack with Left Visual Timeline Bar */}
              <div className="relative space-y-8 pl-5 sm:pl-8 md:pl-10 border-l-2 border-[#C5A862]/40 ml-3 sm:ml-4 md:ml-6">
                
                {pkg.itinerary.map((day: any, idx: number) => {
                  const dayTitle = day.title?.[lang] || day.title?.en || day.title?.es || (typeof day.title === 'string' ? day.title : "");
                  const dayDesc = day.desc?.[lang] || day.desc?.en || day.desc?.es || (typeof day.desc === 'string' ? day.desc : "");
                  const dayNum = day.day || (idx + 1);

                  const morningText = day.morning?.[lang] || day.morning?.en || day.morning?.es || (typeof day.morning === 'string' ? day.morning : "");
                  const afternoonText = day.afternoon?.[lang] || day.afternoon?.en || day.afternoon?.es || (typeof day.afternoon === 'string' ? day.afternoon : "");

                  // Image selection: day.image OR fallback destination photo
                  const dayImg = day.image || getFallbackDayImage(dayTitle, day.location || "", dayNum);

                  return (
                    <Reveal key={idx} delay={idx * 50}>
                      <div className="relative group">
                        
                        {/* Timeline Node Badge on Vertical Line */}
                        <div className="absolute -left-[31px] sm:-left-[43px] md:-left-[51px] top-4 w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[#0A2A1E] border-2 border-[#C5A862] text-[#C5A862] text-[10px] sm:text-xs font-extrabold flex items-center justify-center shadow-lg z-20 group-hover:scale-110 transition-transform">
                          {dayNum}
                        </div>

                        {/* Main Day Card with full background image & low opacity dark overlay */}
                        <article className="relative rounded-2xl sm:rounded-3xl border-2 border-[#C5A862]/35 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden text-white group/card">
                          
                          {/* Card Full Background Image Layer */}
                          {dayImg && (
                            <div className="absolute inset-0 z-0 overflow-hidden">
                              <img 
                                src={dayImg} 
                                alt={dayTitle} 
                                loading="lazy"
                                className="w-full h-full object-cover object-center group-hover/card:scale-105 transition-transform duration-700 ease-out filter brightness-[0.85]" 
                              />
                              {/* Low-Opacity Dark Tint Overlay for Crisp White Text Legibility & Un-cropped Photo Rendering */}
                              <div className="absolute inset-0 bg-gradient-to-b from-[#0A2A1E]/85 via-[#0A2A1E]/75 to-[#0A2A1E]/92 z-10" />
                            </div>
                          )}

                          <div className="relative z-20 space-y-0">
                            {/* Day Header Bar */}
                            <div className="p-4 sm:p-6 md:p-8 bg-black/40 backdrop-blur-md border-b border-[#C5A862]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                              <div className="space-y-1">
                                <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#C5A862] block">
                                  {text.dayLabel} {dayNum}
                                </span>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white drop-shadow-md">
                                  {dayTitle}
                                </h3>
                              </div>

                              {day.location && (
                                <span className="bg-[#C5A862] text-[#0A2A1E] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md self-start sm:self-auto">
                                  <MapPin className="w-3.5 h-3.5 text-[#0A2A1E]" />
                                  <span>{day.location}</span>
                                </span>
                              )}
                            </div>

                            {/* Day Card Body */}
                            <div className="p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6">

                              {/* Day Photo Banner Accent (Not cropped, full width) */}
                              {dayImg && (
                                <div className="relative w-full h-52 sm:h-72 md:h-[380px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border-2 border-[#C5A862]/30 group/img">
                                  <img 
                                    src={dayImg} 
                                    alt={dayTitle} 
                                    loading="lazy"
                                    className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-700 ease-out" 
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90" />
                                  {day.location && (
                                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10">
                                      <span className="bg-[#0A2A1E]/80 backdrop-blur-md text-[#C5A862] text-[10px] sm:text-[11px] font-serif font-semibold px-3 py-1 sm:px-4 sm:py-1.5 rounded-lg sm:rounded-xl border border-[#C5A862]/40 shadow-md">
                                        📍 {day.location}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              )}

                              {/* Narrative Paragraph */}
                              {dayDesc && (
                                <p className="text-xs sm:text-sm md:text-base text-white/95 font-light leading-relaxed drop-shadow-sm bg-black/30 p-4 rounded-xl border border-white/10 backdrop-blur-xs">
                                  {dayDesc}
                                </p>
                              )}

                              {/* Morning / Afternoon Highlights Pills */}
                              {(morningText || afternoonText) && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 pt-1">
                                  {morningText && (
                                    <div className="bg-black/45 backdrop-blur-md p-4 rounded-xl sm:rounded-2xl border border-[#C5A862]/30 flex items-start gap-3 shadow-md">
                                      <span className="text-lg mt-0.5">🌅</span>
                                      <div>
                                        <strong className="text-[11px] sm:text-xs font-bold text-[#C5A862] uppercase tracking-wider block mb-0.5">
                                          {text.morning}
                                        </strong>
                                        <p className="text-xs text-white/90 font-light leading-relaxed">{morningText}</p>
                                      </div>
                                    </div>
                                  )}

                                  {afternoonText && (
                                    <div className="bg-black/45 backdrop-blur-md p-4 rounded-xl sm:rounded-2xl border border-[#C5A862]/30 flex items-start gap-3 shadow-md">
                                      <span className="text-lg mt-0.5">☀️</span>
                                      <div>
                                        <strong className="text-[11px] sm:text-xs font-bold text-[#C5A862] uppercase tracking-wider block mb-0.5">
                                          {text.afternoon}
                                        </strong>
                                        <p className="text-xs text-white/90 font-light leading-relaxed">{afternoonText}</p>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )}

                              {/* Activities Tag Cloud */}
                              {day.activities && day.activities.length > 0 && (
                                <div className="space-y-2 pt-2 border-t border-white/20">
                                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C5A862] block">
                                    {text.activities}
                                  </span>
                                  <div className="flex flex-wrap gap-2">
                                    {day.activities.map((act: any, aIdx: number) => {
                                      const actText = typeof act === 'string' ? act : (act[lang] || act.en || act.es || act.name);
                                      if (!actText) return null;
                                      return (
                                        <span 
                                          key={aIdx}
                                          className="bg-black/50 backdrop-blur-md text-white text-[11px] sm:text-xs font-medium px-3 py-1.5 rounded-full border border-[#C5A862]/40 flex items-center gap-1.5 shadow-sm"
                                        >
                                          <Check className="w-3.5 h-3.5 text-[#C5A862]" />
                                          <span>{actText}</span>
                                        </span>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}

                              {/* Accommodation Card */}
                              {(day.hotel || day.overnight || day.accommodation) && (
                                <div className="bg-black/60 backdrop-blur-md text-white p-4 rounded-xl sm:rounded-2xl flex flex-wrap items-center justify-between gap-3 shadow-lg border border-[#C5A862]/40">
                                  <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-[#C5A862] text-[#0A2A1E] flex items-center justify-center shrink-0 font-bold">
                                      <Hotel className="w-4.5 h-4.5 text-[#0A2A1E]" />
                                    </div>
                                    <div>
                                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#C5A862] block">
                                        {text.accommodation}
                                      </span>
                                      <p className="text-xs font-bold text-white">
                                        {day.hotel || day.overnight || day.accommodation}
                                      </p>
                                    </div>
                                  </div>

                                  <div className="flex items-center text-[#C5A862]">
                                    {[...Array(5)].map((_, i) => (
                                      <Star key={i} className="w-3.5 h-3.5 fill-[#C5A862]" />
                                    ))}
                                  </div>
                                </div>
                              )}

                            </div>

                          </div>

                        </article>
                      </div>
                    </Reveal>
                  );
                })}

              </div>

            </div>
          )}

          {/* --------------------------------------------------
              4. INCLUSIONS & EXCLUSIONS - Grid Cards Layout
             -------------------------------------------------- */}
          {(pkg.includedExperiences?.length > 0 || pkg.exclusions?.length > 0) && (
            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-4">
                
                {/* Services Included */}
                {pkg.includedExperiences && pkg.includedExperiences.length > 0 && (
                  <div className="bg-[#059669]/5 border border-[#059669]/20 p-5 sm:p-8 rounded-2xl sm:rounded-3xl space-y-4 sm:space-y-6 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#059669]/15 text-[#059669] flex items-center justify-center shrink-0">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#059669]" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-[#065F46]">
                        {text.inclusions}
                      </h3>
                    </div>

                    <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-[#1B1B1B]/80 font-normal leading-relaxed">
                      {pkg.includedExperiences.map((exp: any, i: number) => {
                        const val = typeof exp === 'string' ? exp : (exp[lang] || exp[locale] || exp.en || exp.es);
                        return (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                            <span>{val}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {/* Services Excluded */}
                {pkg.exclusions && pkg.exclusions.length > 0 && (
                  <div className="bg-[#DC2626]/5 border border-[#DC2626]/20 p-5 sm:p-8 rounded-2xl sm:rounded-3xl space-y-4 sm:space-y-6 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#DC2626]/15 text-[#DC2626] flex items-center justify-center shrink-0">
                        <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#DC2626]" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-[#991B1B]">
                        {text.exclusions}
                      </h3>
                    </div>

                    <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-[#1B1B1B]/80 font-normal leading-relaxed">
                      {pkg.exclusions.map((exc: any, i: number) => {
                        const val = typeof exc === 'string' ? exc : (exc[lang] || exc[locale] || exc.en || exc.es);
                        return (
                          <li key={i} className="flex items-start gap-2.5">
                            <XCircle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                            <span>{val}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

              </div>
            </Reveal>
          )}

          {/* --------------------------------------------------
              5. CANCELLATION POLICY, TERMS & IMPORTANT TRAVEL NOTES
             -------------------------------------------------- */}
          {/* --------------------------------------------------
              5. CANCELLATION POLICY, TERMS & IMPORTANT TRAVEL NOTES
             -------------------------------------------------- */}
          <Reveal>
            <div className="space-y-8">
              
              {/* Section Header */}
              <div className="border-b border-[#C5A862]/30 pb-4">
                <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#C5A862] block">
                  Transparency & Guest Guidelines
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0A2A1E]">
                  Cancellation Policy & Terms and Conditions
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* 1. Cancellation Policy Card */}
                <div className="bg-white p-7 sm:p-9 rounded-3xl border-2 border-[#C5A862]/30 shadow-lg space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-[#0A2A1E] border-b border-[#C5A862]/20 pb-4">
                      <div className="w-10 h-10 rounded-full bg-[#CA8A04]/10 text-[#CA8A04] flex items-center justify-center shrink-0 border border-[#CA8A04]/20">
                        <ShieldCheck className="w-5 h-5 text-[#CA8A04]" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0A2A1E]">
                          Cancellation Policy
                        </h3>
                        <span className="text-[11px] text-[#CA8A04] font-semibold uppercase tracking-wider block">
                          Flexible Guest Friendly Protection
                        </span>
                      </div>
                    </div>

                    <div className="text-sm sm:text-base text-[#1A1A1A] space-y-3 leading-relaxed font-normal">
                      {(() => {
                        const cancelItems = parseBullets(pkg.policies?.cancellation, lang);
                        if (cancelItems.length > 0) {
                          return (
                            <ul className="space-y-3 text-sm sm:text-base text-[#1B1B1B]">
                              {cancelItems.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#C5A862]/20 shadow-xs">
                                  <span className="text-[#CA8A04] font-bold text-lg leading-none mt-0.5">•</span>
                                  <span className="leading-relaxed text-[#1B1B1B]">{item}</span>
                                </li>
                              ))}
                            </ul>
                          );
                        }
                        return (
                          <ul className="space-y-3 text-sm sm:text-base text-[#1B1B1B]">
                            <li className="flex items-start gap-3 bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#C5A862]/20">
                              <span className="text-[#059669] font-bold text-lg leading-none">✓</span>
                              <span><strong>30+ Days Before Departure:</strong> Free cancellation & 100% refund of deposit.</span>
                            </li>
                            <li className="flex items-start gap-3 bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#C5A862]/20">
                              <span className="text-[#CA8A04] font-bold text-lg leading-none">•</span>
                              <span><strong>15 - 29 Days Before Departure:</strong> 50% refund on total tour package cost.</span>
                            </li>
                            <li className="flex items-start gap-3 bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#C5A862]/20">
                              <span className="text-[#DC2626] font-bold text-lg leading-none">✕</span>
                              <span><strong>Under 14 Days Before Arrival:</strong> Non-refundable due to pre-paid hotel & chauffeur reservations.</span>
                            </li>
                          </ul>
                        );
                      })()}
                    </div>
                  </div>
                  <div className="pt-3 border-t border-[#C5A862]/15">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#CA8A04] bg-[#FEF08A]/70 px-4 py-1.5 rounded-full inline-block">
                      🛡️ Guaranteed Protection
                    </span>
                  </div>
                </div>

                {/* 2. Terms & Conditions Card */}
                <div className="bg-white p-7 sm:p-9 rounded-3xl border-2 border-[#C5A862]/30 shadow-lg space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-[#0A2A1E] border-b border-[#C5A862]/20 pb-4">
                      <div className="w-10 h-10 rounded-full bg-[#0A2A1E]/10 text-[#0A2A1E] flex items-center justify-center shrink-0 border border-[#0A2A1E]/20">
                        <Info className="w-5 h-5 text-[#0A2A1E]" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0A2A1E]">
                          Terms & Conditions
                        </h3>
                        <span className="text-[11px] text-[#0A2A1E]/70 font-semibold uppercase tracking-wider block">
                          Transparent Booking Rules
                        </span>
                      </div>
                    </div>

                    <div className="text-sm sm:text-base text-[#1A1A1A] space-y-3 leading-relaxed font-normal">
                      {(() => {
                        const termsItems = parseBullets(pkg.policies?.termsAndConditions || pkg.policies?.bookingTerms || pkg.policies?.bookingPolicy, lang);
                        if (termsItems.length > 0) {
                          return (
                            <ul className="space-y-3 text-sm sm:text-base text-[#1B1B1B]">
                              {termsItems.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#C5A862]/20 shadow-xs">
                                  <span className="text-[#0A2A1E] font-bold text-lg leading-none mt-0.5">•</span>
                                  <span className="leading-relaxed text-[#1B1B1B]">{item}</span>
                                </li>
                              ))}
                            </ul>
                          );
                        }
                        return (
                          <ul className="space-y-3 text-sm sm:text-base text-[#1B1B1B]">
                            <li className="flex items-start gap-3 bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#C5A862]/20">
                              <span className="text-[#C5A862] font-bold text-lg leading-none">•</span>
                              <span><strong>Booking Deposit:</strong> 25% deposit required to confirm reservations; balance due 15 days prior to arrival.</span>
                            </li>
                            <li className="flex items-start gap-3 bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#C5A862]/20">
                              <span className="text-[#C5A862] font-bold text-lg leading-none">•</span>
                              <span><strong>Private Chauffeur & SUV:</strong> Air-conditioned private vehicle included daily with experienced English-speaking driver.</span>
                            </li>
                            <li className="flex items-start gap-3 bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#C5A862]/20">
                              <span className="text-[#C5A862] font-bold text-lg leading-none">•</span>
                              <span><strong>Hotel Timings:</strong> Standard check-in is 12:00 PM / 2:00 PM and check-out is 11:00 AM / 12:00 PM.</span>
                            </li>
                          </ul>
                        );
                      })()}
                    </div>
                  </div>
                  <div className="pt-3 border-t border-[#C5A862]/15">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0A2A1E] bg-[#0A2A1E]/10 px-4 py-1.5 rounded-full inline-block border border-[#0A2A1E]/20">
                      📋 Standard Operating Policy
                    </span>
                  </div>
                </div>

              </div>

              {/* 3. Important Travel Notes Card (Full Width) */}
              <div className="bg-[#0A2A1E] text-white p-7 sm:p-9 rounded-3xl border-2 border-[#C5A862] shadow-xl space-y-5">
                <div className="flex items-center gap-3 border-b border-white/20 pb-4">
                  <div className="w-10 h-10 rounded-full bg-[#C5A862]/20 text-[#C5A862] flex items-center justify-center shrink-0 border border-[#C5A862]/40">
                    <AlertCircle className="w-5 h-5 text-[#C5A862]" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                      {text.importantNotes}
                    </h3>
                    <span className="text-[11px] text-[#C5A862] font-semibold uppercase tracking-wider block">
                      Essential Information For Travelers
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-base text-white/90 leading-relaxed">
                  {(() => {
                    const notesItems = parseBullets(pkg.policies?.importantNotes || pkg.travelInfo?.importantNotes, lang);
                    const finalNotes = notesItems.length > 0 ? notesItems : text.defaultNotes;
                    return finalNotes.map((noteStr: string, nIdx: number) => (
                      <div key={nIdx} className="flex items-start gap-3 bg-white/10 p-3.5 rounded-2xl border border-white/15 shadow-xs">
                        <span className="text-[#C5A862] font-bold text-base mt-0.5">•</span>
                        <span className="leading-relaxed text-white/95">{noteStr}</span>
                      </div>
                    ));
                  })()}
                </div>
              </div>

            </div>
          </Reveal>

          {/* --------------------------------------------------
              6. LUXURY CONTACT & CTA FOOTER BANNER
             -------------------------------------------------- */}
          <Reveal>
            <div className="bg-[#0A2A1E] text-white p-8 md:p-12 rounded-3xl border-2 border-[#C5A862] shadow-2xl space-y-8 relative overflow-hidden">
              
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A862]/10 rounded-full filter blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-3 text-center md:text-left">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C5A862] block">
                  {text.readyToExplore}
                </span>
                <h3 className="text-2xl md:text-4xl font-serif font-bold text-white leading-tight">
                  {text.readySub}
                </h3>
              </div>

              {/* Contact Details Grid */}
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/15">
                <a 
                  href={`mailto:${settings.email || "mhindiatrips@gmail.com"}`} 
                  className="bg-white/10 hover:bg-white/20 p-5 rounded-2xl border border-white/15 transition-all flex items-center gap-3.5"
                >
                  <Mail className="w-5 h-5 text-[#C5A862] shrink-0" />
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/60 block">{text.emailLabel}</span>
                    <span className="text-xs font-semibold text-white truncate block">{settings.email || "mhindiatrips@gmail.com"}</span>
                  </div>
                </a>

                <a 
                  href={`tel:${settings.phone || "+91 9829989187"}`} 
                  className="bg-white/10 hover:bg-white/20 p-5 rounded-2xl border border-white/15 transition-all flex items-center gap-3.5"
                >
                  <Phone className="w-5 h-5 text-[#C5A862] shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/60 block">{text.phoneLabel}</span>
                    <span className="text-xs font-semibold text-white">{settings.phone || "+91 9829989187"}</span>
                  </div>
                </a>

                <a 
                  href={settings.website || "https://mhindiatrips.com"} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white/10 hover:bg-white/20 p-5 rounded-2xl border border-white/15 transition-all flex items-center gap-3.5"
                >
                  <Globe className="w-5 h-5 text-[#C5A862] shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/60 block">{text.websiteLabel}</span>
                    <span className="text-xs font-semibold text-white">mhindiatrips.com</span>
                  </div>
                </a>
              </div>

              {/* Bottom Signature & CTA */}
              <div className="relative z-10 pt-4 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/15">
                <Link 
                  href={`/${locale}/contact?package=${slug}`} 
                  className="bg-[#C5A862] hover:bg-white text-[#0A2A1E] text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded-full transition-all duration-300 flex items-center gap-2.5 shadow-lg hover:scale-105"
                >
                  <span>{text.inquireCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link href={`/${locale}`} className="shrink-0 group bg-white/95 hover:bg-white backdrop-blur-md px-4 py-2 rounded-2xl border-2 border-[#C5A862] shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-105">
                  <img 
                    src="/images/logo-transparent.png" 
                    alt={settings.companyName || "MH India Trips"} 
                    className="h-9 md:h-12 w-auto object-contain filter drop-shadow-sm"
                  />
                </Link>
              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </div>
  );
}
