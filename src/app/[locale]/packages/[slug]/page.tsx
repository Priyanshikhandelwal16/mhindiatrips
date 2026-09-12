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
        
        {/* Cover Background Image with Parallax-feel styling */}
        <div className="absolute inset-0 z-0">
          <img 
            src={pkg.coverImage || pkg.image || "/images/rajasthan_fort_sunset.png"} 
            alt={pkgTitle} 
            className="w-full h-full object-cover object-center scale-[1.02] filter brightness-90"
          />
          {/* Subtle Warm Vignette Overlay for Sharp Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A1E] via-black/50 to-black/70 z-10" />
        </div>

        {/* Top Floating Bar inside Cover */}
        <div className="relative z-20 w-full max-w-6xl mx-auto px-6 pt-8 flex items-center justify-between gap-4 print:hidden">
          <Link 
            href={`/${locale}/packages`} 
            className="inline-flex items-center gap-2 bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all shadow-lg hover:scale-105"
          >
            <ChevronLeft className="w-4 h-4 text-[#C5A862]" />
            <span>{text.backToPackages}</span>
          </Link>

          {/* Cursive Brand Signature Overlay Top Right */}
          <div className="shrink-0 text-right">
            <span className="font-serif italic text-2xl md:text-3xl text-[#C5A862] font-bold tracking-wide drop-shadow-md">
              {settings.companyName || "MH India Trips"}
            </span>
          </div>
        </div>

        {/* Centered Hero Content Block */}
        <div className="relative z-20 w-full max-w-5xl mx-auto px-6 pb-20 md:pb-28 text-center space-y-6">
          
          {/* Category Pill & Duration Badge */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="bg-[#C5A862] text-[#0A2A1E] text-xs uppercase font-extrabold tracking-widest px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#0A2A1E]" />
              {pkg.category || "Luxury Private Journey"}
            </span>

            <span className="bg-black/60 backdrop-blur-md text-[#C5A862] border border-[#C5A862]/40 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C5A862]" />
              {pkg.durationDays} {text.daysLabel} / {pkg.durationNights || pkg.durationDays - 1} {text.nightsLabel}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-2xl max-w-4xl mx-auto">
            {pkgTitle}
          </h1>

          {/* Subtitle Route Bar below Title */}
          {routeText && (
            <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/20 text-white text-sm md:text-lg font-serif font-medium tracking-wide px-6 py-2.5 rounded-2xl shadow-xl max-w-3xl">
              <MapPin className="w-4 h-4 text-[#C5A862] shrink-0" />
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
        <div className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-4 text-xs">
          
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
      <div className="relative max-w-5xl mx-auto px-6 py-12 md:py-16 space-y-14">

        {/* Subtle Brand Watermark Background */}
        <div 
          className="absolute inset-0 opacity-[0.03] bg-repeat pointer-events-none z-0" 
          style={{ backgroundImage: `url('/images/logo-transparent.png')`, backgroundSize: '200px' }}
        />

        <div className="relative z-10 space-y-14">

          {/* Luxury Feature Quick Highlights Cards Bar */}
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-[#C5A862]/20 shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0A2A1E]/5 flex items-center justify-center text-[#0A2A1E] shrink-0 border border-[#C5A862]/30">
                  <Car className="w-5 h-5 text-[#C5A862]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0A2A1E] uppercase tracking-wider">{text.privateTour}</h4>
                  <p className="text-[11px] text-[#1B1B1B]/60 font-light">Chauffeur & Car</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#C5A862]/20 shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0A2A1E]/5 flex items-center justify-center text-[#0A2A1E] shrink-0 border border-[#C5A862]/30">
                  <Hotel className="w-5 h-5 text-[#C5A862]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0A2A1E] uppercase tracking-wider">{text.hotelCategory}</h4>
                  <p className="text-[11px] text-[#1B1B1B]/60 font-light">{pkg.hotelCategory || "4★ & 5★ Luxury Palace"}</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#C5A862]/20 shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0A2A1E]/5 flex items-center justify-center text-[#0A2A1E] shrink-0 border border-[#C5A862]/30">
                  <Compass className="w-5 h-5 text-[#C5A862]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0A2A1E] uppercase tracking-wider">{text.style}</h4>
                  <p className="text-[11px] text-[#1B1B1B]/60 font-light">{pkg.travelStyle || "Bespoke Cultural"}</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#C5A862]/20 shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0A2A1E]/5 flex items-center justify-center text-[#0A2A1E] shrink-0 border border-[#C5A862]/30">
                  <Users className="w-5 h-5 text-[#C5A862]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0A2A1E] uppercase tracking-wider">{text.minTravellers}</h4>
                  <p className="text-[11px] text-[#1B1B1B]/60 font-light">2 Guests Min</p>
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
              <div className="relative space-y-10 pl-4 md:pl-8 border-l-2 border-[#C5A862]/40 ml-2 md:ml-4">
                
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
                        <div className="absolute -left-[31px] md:-left-[47px] top-6 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#0A2A1E] border-2 border-[#C5A862] text-[#C5A862] text-xs font-extrabold flex items-center justify-center shadow-lg z-20 group-hover:scale-110 transition-transform">
                          {dayNum}
                        </div>

                        {/* Main Day Card */}
                        <article className="bg-white rounded-3xl border border-[#C5A862]/20 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden space-y-0">
                          
                          {/* Day Header Bar */}
                          <div className="p-6 md:p-8 bg-[#0A2A1E]/3 border-b border-[#C5A862]/15 flex flex-wrap items-center justify-between gap-4">
                            <div className="space-y-1">
                              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A862] block">
                                {text.dayLabel} {dayNum}
                              </span>
                              <h3 className="text-xl md:text-2xl font-serif font-bold text-[#0A2A1E]">
                                {dayTitle}
                              </h3>
                            </div>

                            {day.location && (
                              <span className="bg-[#0A2A1E] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                                <MapPin className="w-3.5 h-3.5 text-[#C5A862]" />
                                <span>{day.location}</span>
                              </span>
                            )}
                          </div>

                          {/* Day Card Body */}
                          <div className="p-6 md:p-8 space-y-6">
                            
                            {/* Day Destination Image Showcase */}
                            {dayImg && (
                              <div className="relative w-full h-64 sm:h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-md group/img border border-[#C5A862]/20">
                                <img 
                                  src={dayImg} 
                                  alt={dayTitle} 
                                  loading="lazy"
                                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                                {day.location && (
                                  <div className="absolute bottom-4 left-4 z-10">
                                    <span className="bg-black/70 backdrop-blur-md text-white text-[11px] font-serif font-semibold px-4 py-1.5 rounded-xl border border-white/20">
                                      📍 {day.location}
                                    </span>
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Narrative Paragraph */}
                            {dayDesc && (
                              <p className="text-sm md:text-base text-[#2C2C2C] font-normal leading-relaxed">
                                {dayDesc}
                              </p>
                            )}

                            {/* Morning / Afternoon Highlights Pills */}
                            {(morningText || afternoonText) && (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                {morningText && (
                                  <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#C5A862]/20 flex items-start gap-3">
                                    <span className="text-lg mt-0.5">🌅</span>
                                    <div>
                                      <strong className="text-xs font-bold text-[#0A2A1E] uppercase tracking-wider block mb-0.5">
                                        {text.morning}
                                      </strong>
                                      <p className="text-xs text-[#2C2C2C]/80 font-light leading-relaxed">{morningText}</p>
                                    </div>
                                  </div>
                                )}

                                {afternoonText && (
                                  <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#C5A862]/20 flex items-start gap-3">
                                    <span className="text-lg mt-0.5">☀️</span>
                                    <div>
                                      <strong className="text-xs font-bold text-[#0A2A1E] uppercase tracking-wider block mb-0.5">
                                        {text.afternoon}
                                      </strong>
                                      <p className="text-xs text-[#2C2C2C]/80 font-light leading-relaxed">{afternoonText}</p>
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Activities Tag Cloud */}
                            {day.activities && day.activities.length > 0 && (
                              <div className="space-y-2 pt-2 border-t border-[#C5A862]/15">
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
                                        className="bg-[#0A2A1E]/5 text-[#0A2A1E] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#C5A862]/30 flex items-center gap-1.5"
                                      >
                                        <Check className="w-3.5 h-3.5 text-[#CA8A04]" />
                                        <span>{actText}</span>
                                      </span>
                                    );
                                  })}
                                </div>
                              </div>
                            )}

                            {/* Accommodation Card */}
                            {(day.hotel || day.overnight || day.accommodation) && (
                              <div className="bg-[#0A2A1E] text-white p-4 rounded-2xl flex items-center justify-between gap-4 shadow-md">
                                <div className="flex items-center gap-3">
                                  <div className="w-9 h-9 rounded-full bg-[#C5A862]/20 text-[#C5A862] flex items-center justify-center shrink-0">
                                    <Hotel className="w-4 h-4 text-[#C5A862]" />
                                  </div>
                                  <div>
                                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C5A862] block">
                                      {text.accommodation}
                                    </span>
                                    <p className="text-xs font-semibold text-white">
                                      {day.hotel || day.overnight || day.accommodation}
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-center text-[#C5A862]">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3 h-3 fill-[#C5A862]" />
                                  ))}
                                </div>
                              </div>
                            )}

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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                
                {/* Services Included */}
                {pkg.includedExperiences && pkg.includedExperiences.length > 0 && (
                  <div className="bg-[#059669]/5 border border-[#059669]/20 p-8 rounded-3xl space-y-6 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#059669]/15 text-[#059669] flex items-center justify-center shrink-0">
                        <CheckCircle className="w-5 h-5 text-[#059669]" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-[#065F46]">
                        {text.inclusions}
                      </h3>
                    </div>

                    <ul className="space-y-3 text-xs md:text-sm text-[#1B1B1B]/80 font-normal leading-relaxed">
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
                  <div className="bg-[#DC2626]/5 border border-[#DC2626]/20 p-8 rounded-3xl space-y-6 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#DC2626]/15 text-[#DC2626] flex items-center justify-center shrink-0">
                        <XCircle className="w-5 h-5 text-[#DC2626]" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-[#991B1B]">
                        {text.exclusions}
                      </h3>
                    </div>

                    <ul className="space-y-3 text-xs md:text-sm text-[#1B1B1B]/80 font-normal leading-relaxed">
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
              5. SPECIAL NOTES & TRAVEL POLICIES
             -------------------------------------------------- */}
          <Reveal>
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#C5A862]/25 shadow-md space-y-6">
              <div className="flex items-center gap-3 border-b border-[#C5A862]/20 pb-4">
                <Info className="w-6 h-6 text-[#C5A862]" />
                <h3 className="text-xl md:text-2xl font-serif font-bold text-[#0A2A1E]">
                  {text.importantNotes}
                </h3>
              </div>

              <ul className="space-y-3 text-xs md:text-sm text-[#2C2C2C] font-normal leading-relaxed">
                {pkg.policies?.importantNotes ? (
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C5A862] font-bold">•</span>
                    <span>{pkg.policies.importantNotes[lang] || pkg.policies.importantNotes[locale] || pkg.policies.importantNotes.en || pkg.policies.importantNotes.es || pkg.policies.importantNotes}</span>
                  </li>
                ) : (
                  text.defaultNotes.map((noteStr: string, nIdx: number) => (
                    <li key={nIdx} className="flex items-start gap-2.5">
                      <span className="text-[#C5A862] font-bold">•</span>
                      <span>{noteStr}</span>
                    </li>
                  ))
                )}
                {pkg.policies?.cancellation && (
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C5A862] font-bold">•</span>
                    <span>{pkg.policies.cancellation[lang] || pkg.policies.cancellation[locale] || pkg.policies.cancellation.en || pkg.policies.cancellation.es || pkg.policies.cancellation}</span>
                  </li>
                )}
              </ul>
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

                <div className="text-right">
                  <span className="font-serif italic text-3xl text-[#C5A862] font-bold tracking-wide drop-shadow-md">
                    {settings.companyName || "MH India Trips"}
                  </span>
                </div>
              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </div>
  );
}
