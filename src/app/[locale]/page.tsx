import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { getStatesAction, getTourPackagesAction, getBlogsAction, getTestimonialsAction, getFoodsAction, getPageByIdAction, getOutboundDestinationsAction } from "@/app/actions/queries";
import InquiryForm from "@/components/common/InquiryForm";
import Reveal from "@/components/home/Reveal";
import HeroSlider from "@/components/home/HeroSlider";
import StatCounter from "@/components/home/StatCounter";
import { 
  MapPin, Clock, ArrowRight, Star, Heart, Compass, Sparkles, 
  Award, Shield, Calendar, BookOpen, Coffee, Landmark, ArrowUpRight,
  CheckCircle, ShieldCheck, FileCheck, CheckCircle2, BadgeCheck, Building2, Tag
} from "lucide-react";
import { getLocalizedDestinationsPath } from "@/lib/utils";
import { getHighResImageUrl } from "@/lib/image-utils";
import { getPackagePriceInfo } from "@/lib/price-utils";

// Lazy load heavy interactive components
const ServicesSection = dynamic(() => import("@/components/home/ServicesSection"), { ssr: true });
const TestimonialSlider = dynamic(() => import("@/components/home/TestimonialSlider"), { ssr: true });
const MonumentsAccordion = dynamic(() => import("@/components/home/MonumentsAccordion"), { ssr: true });
const TravelerInfoCarousel = dynamic(() => import("@/components/home/TravelerInfoCarousel"), { ssr: true });

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  // Fetch content dynamically from query database mock layer
  const states = (await getStatesAction()).filter((s: any) => s.isPublished !== false && s.id !== "undefined");
  const outboundDestinations = (await getOutboundDestinationsAction()).filter((d: any) => d.isPublished !== false);
  const allPackages = (await getTourPackagesAction()).filter((p: any) => p.isPublished !== false);
  const SELECTED_SLUGS = [
    "rajasthan-khajuraho-varanasi-luxury-journey",
    "india-goa-beach-monuments-tour",
    "india-nepal-golden-triangle-kathmandu-tour",
    "rajasthan-varanasi-imperial-luxury-tour",
    "south-india-temples-backwaters-cultural-tour",
    "rajasthan-desert-essence-10-days-tour"
  ];
  const ourSixPackages = allPackages
    .filter((p: any) => SELECTED_SLUGS.includes(p.slug))
    .sort((a: any, b: any) => SELECTED_SLUGS.indexOf(a.slug) - SELECTED_SLUGS.indexOf(b.slug));
  const tourPackages = ourSixPackages.length > 0 ? ourSixPackages.slice(0, 3) : allPackages.slice(0, 3);
  const blogs = (await getBlogsAction()).filter((b: any) => b.isDraft !== true);
  const testimonials = await getTestimonialsAction();
  const pageData = await getPageByIdAction("homepage");
  const monumentsPageData = await getPageByIdAction("monuments");
  const accordionMonuments = monumentsPageData?.content?.featuredMonuments || [];
  const attractionsPageData = await getPageByIdAction("attractions");
  const featuredAttractions = attractionsPageData?.content?.featuredAttractions || [];

  // Fetch travel-info page images (editable in admin Pages tab)
  const [visaPage, climatePage, soloPage, vaccinePage, packingPage] = await Promise.all([
    getPageByIdAction("travel-info-visa-entry-requirements"),
    getPageByIdAction("travel-info-best-time-climate"),
    getPageByIdAction("travel-info-solo-female-travel"),
    getPageByIdAction("travel-info-vaccinations-health"),
    getPageByIdAction("travel-info-packing-currency"),
  ]);
  const travelInfoCardImages: Record<string, string> = {
    visa: visaPage?.heroImage || "",
    climate: climatePage?.heroImage || "",
    "solo-travel": soloPage?.heroImage || "",
    vaccines: vaccinePage?.heroImage || "",
    packing: packingPage?.heroImage || "",
  };

  const labels: Record<string, any> = {
    en: {
      heroSub: "BESPOKE PRIVATE TOURS",
      heroTitle: "Experience India in Absolute Luxury",
      heroDesc: "Curated itineraries featuring private guides, heritage palace hotels, and custom travel arrangements.",
      cta: "Explore Our Regions",
      inquireCTA: "Plan Your Journey",
      whySub: "Our Philosophy",
      whyTitle: "Why Choose MH India Trips",
      regionsSub: "Custom Destinations",
      regionsTitle: "Destinations in India",
      regionsDesc: "From the grand palaces of Rajasthan to the serene canals of Kerala, discover a tailored world.",
      packagesSub: "Featured Journeys",
      packagesTitle: "Travel Packages",
      packagesDesc: "Elite itineraries hand-designed by our specialist destination managers.",
      foodSub: "Culinary Heritage",
      foodTitle: "Flavor Journeys",
      foodDesc: "Taste the heritage of royal Mughal kitchens and aromatic local street spices.",
      testimonialsSub: "Traveler Whispers",
      testimonialsTitle: "What Our Guests Say",
      blogsSub: "Travel Inspiration",
      blogsTitle: "Travel Blogs",
      faqSub: "Traveler Help Center",
      faqTitle: "Your Travel Questions Answered",
      ctaBannerTitle: "Begin Your Private Passage",
      ctaBannerSub: "Speak to a luxury travel advisor to draft your tailored itinerary.",
      ctaBannerBtn: "Inquire Now",
      viewAll: "View All Experiences",
      guideSub: "Traveler Resources",
      guideTitle: "Essential India Guides",
      guideDesc: "Practical travel intelligence to plan your journey with confidence.",
      guide1Title: "Solo Female Travel",
      guide1Desc: "India is welcoming and safe. We provide dedicated private drivers, licensed local guides, and 24/7 concierge support.",
      guide2Title: "Best Time to Visit",
      guide2Desc: "October to March offers cool, pleasant days. Ideal for exploring heritage forts and desert safaris.",
      guide3Title: "Vaccines & Health",
      guide3Desc: "Simple precautions ensure a safe trip. We provide up-to-date health guides for all regions.",
      guide4Title: "Currency & Payments",
      guide4Desc: "Cards are widely accepted, but carrying some Rupees is useful for local markets and small vendors.",
      howItWorksSub: "Our Process",
      howItWorksTitle: "How to Design Your Custom Tour",
      howItWorksDesc: "Three simple steps to unlock a perfectly tailormade premium travel experience in India.",
      step1Title: "1. Select or Customize",
      step1Desc: "Browse our signature routes or share your bucket-list regions with our specialist desk.",
      step2Title: "2. Co-Design with an Advisor",
      step2Desc: "Your dedicated destination expert builds the details: hotel classes, private vehicles, and local guides.",
      step3Title: "3. Board & Travel in Peace",
      step3Desc: "Our on-ground ops desk coordinates all logistics, including professional private drivers and 24/7 concierge.",
      inclusionsSub: "Luxury Standard",
      inclusionsTitle: "Our Premium Booking Standard",
      inclusionsDesc: "What we guarantee in every bespoke private package booking.",
      inc1Title: "Private Professional Chauffeur",
      inc1Desc: "Air-conditioned luxury SUVs or spacious sedans with verified drivers at your disposal for all regional transits.",
      inc2Title: "Licensed Local Guides",
      inc2Desc: "Official government-certified guides at every heritage fort, lake palace, and monument checkout.",
      inc3Title: "Boutique & Heritage Stays",
      inc3Desc: "Hand-curated bookings inside restored royal fortresses, wellness resorts, or luxury safari camps.",
      inc4Title: "24/7 Concierge Support",
      inc4Desc: "Direct active connection line to our operations desk via WhatsApp for real-time schedule adjustments.",
      exploreBtn: "Build Custom Package",
      fromPrice: "From $180 / day per guest",
      customizableText: "100% Customizable Private Itinerary",
      priceOnRequest: "Price On Request",
      inquire: "Request Details",
      privateTour: "Private Tour",
      inclusionsTitleText: "What's included:",
      days: "Days",
      certSub: "GOVERNMENT CERTIFIED & VERIFIED",
      certTitle: "Official Registration & Legal Credentials",
      certDesc: "Book with complete confidence. MH India Trips is a 100% government-registered and tax-compliant travel enterprise recognized under GST Department, Govt. of India.",
      certGstLabel: "GST Identification No. (GSTIN)",
      certGstVal: "08ACIFM3516H1Z7",
      certGstBadge: "ACTIVE & VERIFIED",
      certGstDesc: "Issued by Goods & Services Tax Department, Govt. of India & Rajasthan State Tax Office.",
      certNameLabel: "Legal Business Name",
      certNameVal: "MH INDIA TRIPS",
      certNameBadge: "Registered Partnership",
      certNameDesc: "Recognized tour operator operating compliant private luxury tours & concierge across PAN India.",
      certAddressLabel: "Principal Place of Business",
      certAddressVal: "Jaipur, Rajasthan (302006)",
      certAddressBadge: "State Tax Jurisdiction",
      certAddressDesc: "Khatipura Road, Hasanpura, Jaipur, Rajasthan - 302006, India.",
      certGuaranteeLabel: "Government Compliant Billing",
      certGuaranteeVal: "100% Tax Compliant & Safe",
      certGuaranteeBadge: "Official Invoices",
      certGuaranteeDesc: "Official GST invoices provided for all bookings with full legal transparency & traveler security."
    },
    es: {
      heroSub: "TOURS PRIVADOS A MEDIDA",
      heroTitle: "Experimente la India con Lujo Absoluto",
      heroDesc: "Itinerarios curados con guías privados, hoteles palacio históricos y traslados personalizados.",
      cta: "Explorar Regiones",
      inquireCTA: "Planificar Viaje",
      whySub: "Nuestra Filosofía",
      whyTitle: "Por Qué Elegir MH India Trips",
      regionsSub: "Destinos Personalizados",
      regionsTitle: "Destinos en India",
      regionsDesc: "Desde los grandes palacios de Rajasthan hasta los serenos canales de Kerala.",
      packagesSub: "Viajes Destacados",
      regionsTitleCustom: "Explorar Regiones",
      packagesTitle: "Paquetes de Viaje",
      packagesDesc: "Itinerarios de élite diseñados a mano por nuestros directores de destino.",
      foodSub: "Patrimonio Culinario",
      foodTitle: "Viajes de Sabor",
      foodDesc: "Saboree el patrimonio de las cocinas reales mogoles y las especias locales.",
      testimonialsSub: "Ecos de Viajeros",
      testimonialsTitle: "Lo Que Dicen Nuestros Huéspedes",
      blogsSub: "Inspiración de Viaje",
      blogsTitle: "Blogs de Viaje",
      faqSub: "Centro de Ayuda al Viajero",
      faqTitle: "Sus Preguntas de Viaje",
      ctaBannerTitle: "Comience Su Viaje Privado",
      ctaBannerSub: "Hable con un asesor de viajes de lujo para diseñar su itinerario a medida.",
      ctaBannerBtn: "Planificar Ahora",
      viewAll: "Ver Todas las Experiencias",
      guideSub: "Recursos para Viajeros",
      guideTitle: "Guías Esenciales de India",
      guideDesc: "Información práctica y detallada para planificar su viaje con total tranquilidad.",
      guide1Title: "Mujer viajando sola",
      guide1Desc: "La India es acogedora y segura. Brindamos choferes privados, guías certificados y asistencia activa las 24 horas.",
      guide2Title: "Cuándo viajar a la India",
      guide2Desc: "De octubre a marzo es la época dorada, ideal para explorar fortalezas imperiales sin calor extremo.",
      guide3Title: "Vacunas y Salud",
      guide3Desc: "Precauciones simples aseguran un viaje saludable. Ofrecemos recomendaciones de salud actualizadas.",
      guide4Title: "Moneda en la India",
      guide4Desc: "Las tarjetas de crédito son comunes, pero llevar rupias en efectivo es ideal para pequeños mercados.",
      howItWorksSub: "Nuestro Proceso",
      howItWorksTitle: "Cómo Diseñar Su Viaje a Medida",
      howItWorksDesc: "Tres pasos sencillos para desbloquear una experiencia de viaje premium y personalizada en la India.",
      step1Title: "1. Seleccione o Personalice",
      step1Desc: "Examine nuestras rutas exclusivas o comparta sus regiones deseadas con nuestro equipo de especialistas.",
      step2Title: "2. Co-diseñe con un Asesor",
      step2Desc: "Un especialista diseña sus detalles: categoría de hoteles, vehículos privados y guías locales.",
      step3Title: "3. Viaje con Total Tranquilidad",
      step3Desc: "Nuestro equipo gestiona toda la logística terrestre, con choferes profesionales y asistencia 24/7.",
      inclusionsSub: "Servicio de Lujo",
      inclusionsTitle: "Qué Incluye Cada Viaje Privado",
      inclusionsDesc: "Nuestras garantías de calidad en todas las reservas de paquetes privados.",
      inc1Title: "Chofer Profesional Privado",
      inc1Desc: "SUVs premium con aire acondicionado y choferes verificados a su disposición para traslados regionales.",
      inc2Title: "Guías Certificados Oficiales",
      inc2Desc: "Guías locales oficiales en cada monumento histórico, palacio y templo.",
      inc3Title: "Hoteles de Patrimonio y Lujo",
      inc3Desc: "Estancias seleccionadas a mano en palacios reales restaurados o retiros de bienestar de alta gama.",
      inc4Title: "Soporte Concierge 24/7",
      inc4Desc: "Contacto directo por WhatsApp con nuestro departamento de operaciones para cualquier ajuste en tiempo real.",
      exploreBtn: "Personalizar Este Viaje",
      fromPrice: "Desde $180 / día por persona",
      customizableText: "Itinerario Privado 100% Personalizable",
      priceOnRequest: "Precio a Consultar",
      inquire: "Solicitar Detalles",
      privateTour: "Tour Privado",
      inclusionsTitleText: "Qué está incluido:",
      days: "Días",
      certSub: "CERTIFICADO Y VERIFICADO POR EL GOBIERNO",
      certTitle: "Registro Oficial y Credenciales Fiscales",
      certDesc: "Reserve con total confianza. MH India Trips es una empresa de viajes 100% registrada ante el gobierno y en pleno cumplimiento fiscal bajo el Departamento de GST del Gobierno de la India.",
      certGstLabel: "Número de Identificación GST (GSTIN)",
      certGstVal: "08ACIFM3516H1Z7",
      certGstBadge: "ACTIVO Y VERIFICADO",
      certGstDesc: "Emitido por el Departamento de Impuestos sobre Bienes y Servicios, Gobierno de la India y Estado de Rajasthan.",
      certNameLabel: "Nombre Legal de la Empresa",
      certNameVal: "MH INDIA TRIPS",
      certNameBadge: "Sociedad Registrada",
      certNameDesc: "Operador turístico reconocido que realiza tours privados de lujo en toda la India.",
      certAddressLabel: "Sede Principal Registrada",
      certAddressVal: "Jaipur, Rajasthan (302006)",
      certAddressBadge: "Jurisdicción Fiscal Estatal",
      certAddressDesc: "Khatipura Road, Hasanpura, Jaipur, Rajasthan - 302006, India.",
      certGuaranteeLabel: "Facturación Conforme a la Ley",
      certGuaranteeVal: "100% Legal y Seguro",
      certGuaranteeBadge: "Facturas Oficiales",
      certGuaranteeDesc: "Facturas GST oficiales emitidas para todas las reservas con total transparencia legal."
    },
    pt: {
      heroSub: "TOURS PRIVADOS SOB MEDIDA",
      heroTitle: "Experimente a Índia com Luxo Absoluto",
      heroDesc: "Itinerários selecionados com guias privados, hotéis palácio históricos e traslados personalizados.",
      cta: "Explorar Regiões",
      inquireCTA: "Planejar Viagem",
      whySub: "Nossa Filosofia",
      whyTitle: "Por Que Escolher a MH India Trips",
      regionsSub: "Destinos Personalizados",
      regionsTitle: "Destinos na Índia",
      regionsDesc: "Dos grandes palácios do Rajastão aos canais serenos de Kerala.",
      packagesSub: "Viagens Em Destaque",
      packagesTitle: "Pacotes de Viagem",
      packagesDesc: "Itinerários de elite desenhados à mão pelos nossos especialistas de destino.",
      foodSub: "Patrimônio Culinário",
      foodTitle: "Viagens de Sabor",
      foodDesc: "Saboreie o patrimônio das cozinhas reais mogóis e as especiarias locais.",
      testimonialsSub: "Sussurros de Viajantes",
      testimonialsTitle: "O Que Dizem Nossos Hóspedes",
      blogsSub: "Inspiração de Viagem",
      blogsTitle: "Blogs de Viagem",
      faqSub: "Central de Ajuda ao Viajante",
      faqTitle: "Suas Perguntas de Viagem",
      ctaBannerTitle: "Comece Sua Viagem Privada",
      ctaBannerSub: "Fale com um consultor de viagens de luxo para desenhar seu itinerário sob medida.",
      ctaBannerBtn: "Planejar Agora",
      viewAll: "Ver Todas as Experiências",
      guideSub: "Recursos para Viajantes",
      guideTitle: "Guias Essenciais da Índia",
      guideDesc: "Informações práticas e detalhadas para planejar sua viagem com total tranquilidade.",
      guide1Title: "Mulher viajando sozinha",
      guide1Desc: "A Índia é acolhedora e segura. Oferecemos motoristas particulares, guias certificados e assistência 24/7.",
      guide2Title: "Quando viajar para a Índia",
      guide2Desc: "De outubro a março é a época de ouro, ideal para explorar palácios históricos e safáris no deserto.",
      guide3Title: "Vacinas e Saúde",
      guide3Desc: "Precauções simples garantem uma viagem saudável. Oferecemos diretrizes atualizadas por região.",
      guide4Title: "Moneda na Índia",
      guide4Desc: "Cartões são aceitos, mas ter rúpias em mãos é ideal para feiras de artesanato e mercados locais.",
      howItWorksSub: "Nosso Processo",
      howItWorksTitle: "Como Planejar Sua Viagem sob Medida",
      howItWorksDesc: "Três passos simples para desbloquear uma experiência de viagem premium e personalizada na Índia.",
      step1Title: "1. Selecione ou Personalize",
      step1Desc: "Examine nossas rotas exclusivas ou compartilhe suas regiões desejadas com nossa equipe de especialistas.",
      step2Title: "2. Co-desenhe com um Consultor",
      step2Desc: "Um especialista constrói os detalhes: categoria de hotéis, transporte particular e guias locais.",
      step3Title: "3. Viaje com Total Tranquilidade",
      step3Desc: "Nossa equipe coordena toda a logística terrestre, com motoristas profissionais e suporte 24/7.",
      inclusionsSub: "Serviço de Luxo",
      inclusionsTitle: "O Que Inclui Cada Viagem Privada",
      inclusionsDesc: "Nossas garantias de qualidade em todas as reservas de pacotes privados.",
      inc1Title: "Motorista Profissional Particular",
      inc1Desc: "SUVs premium com ar-condicionado e motoristas verificados à sua disposição para traslados regionais.",
      inc2Title: "Guias Credenciados Oficiais",
      inc2Desc: "Guias locais oficiais em cada monumento histórico, palácio e templo.",
      inc3Title: "Hotéis de Patrimônio e Luxo",
      inc3Desc: "Estadias selecionadas em palácios reais restaurados ou resorts de bem-estar de alto padrão.",
      inc4Title: "Suporte Concierge 24/7",
      inc4Desc: "Contato direto por WhatsApp com nossa equipe de operações para ajustes de roteiro em tempo real.",
      exploreBtn: "Personalizar Esta Viagem",
      fromPrice: "A partir de $180 / dia por pessoa",
      customizableText: "Itinerário Privado 100% Personalizável",
      priceOnRequest: "Preço Sob Consulta",
      inquire: "Solicitar Detalhes",
      privateTour: "Tour Privado",
      inclusionsTitleText: "O que está incluído:",
      days: "Dias",
      certSub: "CERTIFICADO E VERIFICADO PELO GOVERNO",
      certTitle: "Registro Oficial e Credenciais Fiscais",
      certDesc: "Reserve com total confiança. MH India Trips é uma empresa de viagens 100% registrada pelo governo e em conformidade fiscal perante o Departamento de GST do Governo da Índia.",
      certGstLabel: "Número de Identificação GST (GSTIN)",
      certGstVal: "08ACIFM3516H1Z7",
      certGstBadge: "ATIVO E VERIFICADO",
      certGstDesc: "Emitido pelo Departamento de Impostos sobre Bens e Serviços, Governo da Índia e Estado do Rajastão.",
      certNameLabel: "Nome Legal da Empresa",
      certNameVal: "MH INDIA TRIPS",
      certNameBadge: "Sociedade Registrada",
      certNameDesc: "Operador turístico reconhecido realizando tours privados de luxo em toda a Índia.",
      certAddressLabel: "Sede Principal Registrada",
      certAddressVal: "Jaipur, Rajastão (302006)",
      certAddressBadge: "Jurisdição Fiscal Estadual",
      certAddressDesc: "Khatipura Road, Hasanpura, Jaipur, Rajastão - 302006, Índia.",
      certGuaranteeLabel: "Faturamento Conforme a Lei",
      certGuaranteeVal: "100% Legal e Seguro",
      certGuaranteeBadge: "Faturas Oficiais",
      certGuaranteeDesc: "Faturas GST oficiais fornecidas para todas as reservas com total transparência legal."
    }
  };

  const clientReviews = [
    {
      author: "Sarah & Family",
      location: "London, UK",
      text: {
        en: "Our 14-day family journey through Rajasthan, Agra, and Delhi was flawlessly designed. The private chauffeur, heritage palace hotel upgrades, and direct local guides made this a magical experience. MH India Trips exceeded all our expectations.",
        es: "Nuestro viaje familiar de 14 días por Rajasthan, Agra y Delhi fue diseñado a la perfección. El chofer privado, las mejoras de hoteles y guías locales hicieron de esta una experiencia mágica.",
        pt: "Nossa viagem familiar de 14 dias pelo Rajastão, Agra e Deli foi planejada com perfeição. O motorista particular, upgrades em hotéis e guias locais tornaram tudo uma experiência mágica."
      },
      tour: "Imperial Rajasthan & Taj Mahal Heritage Tour"
    },
    {
      author: "Jean-Pierre & Marie",
      location: "Paris, France",
      text: {
        en: "MH India Trips created an incredible culinary and cultural tour. From Old Delhi street food guides to private chef classes in Udaipur palaces, everything exceeded our high expectations. The attention to detail is outstanding.",
        es: "MH India Trips creó un tour culinario y cultural increíble. Desde guías de comida callejera en Delhi hasta clases con chefs privados en palacios de Udaipur, todo superó nuestras expectativas.",
        pt: "A MH India Trips criou um tour culinário e cultural incrível. Desde guias de comida de rua em Deli até aulas com chefs privados em palácios de Udaipur, tudo superou nossas expectativas."
      },
      tour: "Culinary & Heritage Explorer of Northern India"
    },
    {
      author: "Ana Maria Silva",
      location: "São Paulo, Brazil",
      text: {
        en: "The spiritual trip to Varanasi and private sunset boat tour on the Ganges was breathtaking. Absolute elite guides, premium luxury cars, and 24/7 concierge assistance. I highly recommend booking with them.",
        es: "El viaje espiritual a Varanasi y el tour privado en barco al atardecer por el Ganges fue impresionante. Guías de élite y asistencia de conserjería 24/7. Lo recomiendo ampliamente.",
        pt: "A viagem espiritual para Varanasi e o tour privado de barco no Ganges ao pôr do sol foi de tirar o fôlego. Guias excelentes e assistência de concierge 24/7. Recomendo muito."
      },
      tour: "Spiritual Ganges & Classical India Experience"
    }
  ];

  const dbContent = pageData?.content || {};
  const mergedLabels: Record<string, any> = {};
  for (const lang of ["en", "es", "pt"]) {
    mergedLabels[lang] = { ...labels[lang] };
    for (const key in dbContent) {
      if (dbContent[key]?.[lang] !== undefined) {
        mergedLabels[lang][key] = dbContent[key][lang];
      }
    }
  }
  const text = mergedLabels[locale] || mergedLabels.en;
  if (dbContent.destinationsSection?.title?.[locale]) text.regionsTitle = dbContent.destinationsSection.title[locale];
  if (dbContent.packagesSection?.title?.[locale]) text.packagesTitle = dbContent.packagesSection.title[locale];

  // CMS-driven content (read from database, fallback to defaults)
  const cms = pageData?.content || {};
  const lang = (locale === "es" || locale === "pt") ? locale : "en";

  // Always use the 20 curated multi-lingual hero slides with Taj Mahal #1
  const default20Slides = [
    {
      image: "/images/taj_mahal_sunrise.png",
      sub: lang === "es" ? "MARAVILLAS DE LA INDIA" : lang === "pt" ? "MARAVILHAS DA ÍNDIA" : text.heroSub,
      title: lang === "es" ? "Taj Mahal: Símbolo del Amor Eterno" : lang === "pt" ? "Taj Mahal: Símbolo do Amor Eterno" : text.heroTitle,
      desc: lang === "es" ? "Experimente la belleza del icónico mausoleo de mármol al amanecer en Agra." : lang === "pt" ? "Experimente a beleza do icônico mausóleu de mármol ao amanhecer em Agra." : text.heroDesc,
      location: "Taj Mahal, Agra, Uttar Pradesh",
      objectPosition: "center center",
      cta1Text: lang === "es" ? "Explorar Destinos de Agra" : lang === "pt" ? "Explorar Destinados de Agra" : "Explore Agra Destinations",
      cta1Link: getLocalizedDestinationsPath(locale, "uttar-pradesh"),
      cta2Text: text.inquireCTA,
      cta2Link: "/contact"
    },
    {
      image: "/images/Jaipur.jpg",
      sub: lang === "es" ? "PALACIOS REALES DE RAJASTHÁN" : lang === "pt" ? "PALÁCIOS REAIS DO RAJASTÃO" : "RAJASTHAN ROYAL PALACES",
      title: lang === "es" ? "Fuerte Amber y Maravillas de Jaipur" : lang === "pt" ? "Forte Amber e Maravilhas de Jaipur" : "Amer Fort & Pink City Wonders of Jaipur",
      desc: lang === "es" ? "Explore majestuosos fuertes en colinas, el Hawa Mahal y el patrimonio real de Rajastán." : lang === "pt" ? "Explore grandes fortes em colinas, Hawa Mahal e patrimônio real do Rajastão." : "Explore grand hill forts, Hawa Mahal, and royal heritage in the capital of Rajasthan.",
      location: "Jaipur, Rajasthan",
      objectPosition: "center center",
      cta1Text: lang === "es" ? "Explorar Jaipur" : lang === "pt" ? "Explorar Jaipur" : "Explore Jaipur",
      cta1Link: getLocalizedDestinationsPath(locale, "rajasthan"),
      cta2Text: lang === "es" ? "Consultar Ahora" : lang === "pt" ? "Consultar Agora" : "Inquire Now",
      cta2Link: "/contact"
    },
    {
      image: "/images/Jaisalmer.jpg",
      sub: lang === "es" ? "SAFARIS EN EL DESIERTO DE THAR" : lang === "pt" ? "SAFÁRIS NO DESERTO DE THAR" : "THAR DESERT SAFARIS",
      title: lang === "es" ? "Dunas Doradas y Fuerte de Jaisalmer" : lang === "pt" ? "Dunas Douradas e Forte de Jaisalmer" : "Golden Dunes & Living Fort of Jaisalmer",
      desc: lang === "es" ? "Duerma bajo las estrellas en campamentos de lujo y explore la fortaleza dorada de Rajastán." : lang === "pt" ? "Dorma sob o céu estrelado em acampamentos de luxo e explore a fortaleza dourada." : "Sleep under starlit desert skies in luxury tented camps and explore the golden sandstone fortress.",
      location: "Jaisalmer, Rajasthan",
      objectPosition: "center center",
      cta1Text: lang === "es" ? "Tours del Desierto" : lang === "pt" ? "Tours do Deserto" : "Desert Tours",
      cta1Link: getLocalizedDestinationsPath(locale, "rajasthan"),
      cta2Text: text.inquireCTA,
      cta2Link: "/contact"
    },
    {
      image: "/images/Udaipur.jpg",
      sub: lang === "es" ? "PALACIOS EN EL LAGO ROMÁNTICOS" : lang === "pt" ? "PALÁCIOS NO LAGO ROMÂNTICOS" : "ROMANTIC LAKE PALACES",
      title: lang === "es" ? "Udaipur: La Venecia del Este y Lago Pichola" : lang === "pt" ? "Udaipur: Veneza do Leste e Lago Pichola" : "Udaipur: Venice of the East & Lake Pichola",
      desc: lang === "es" ? "Navegue por aguas cristalinas y afíjese en palacios flotantes junto a las colinas Aravalli." : lang === "pt" ? "Navegue por águas cristalinas e fique em palácios flutuantes sob as colinas Aravalli." : "Sail across shimmering waters and stay in floating marble palaces under the stars.",
      location: "Lake Pichola, Udaipur, Rajasthan",
      objectPosition: "center center",
      cta1Text: lang === "es" ? "Explorar Lagos de Udaipur" : lang === "pt" ? "Explorar Lagos de Udaipur" : "Explore Udaipur Lakes",
      cta1Link: getLocalizedDestinationsPath(locale, "rajasthan"),
      cta2Text: text.inquireCTA,
      cta2Link: "/contact"
    },
    {
      image: "/images/rajasthan_fort_sunset.png",
      sub: lang === "es" ? "FORTALEZAS HISTÓRICAS" : lang === "pt" ? "FORTALEZAS HISTÓRICAS" : "HISTORIC FORTRESSES",
      title: lang === "es" ? "Fuerte Mehrangarh y Ciudad Azul de Jodhpur" : lang === "pt" ? "Forte Mehrangarh e Cidade Azul de Jodhpur" : "Mehrangarh Fort & Blue City of Jodhpur",
      desc: lang === "es" ? "Contemple el imponente castillo sobre la roca y pasee por los bazares de la Ciudad Azul." : lang === "pt" ? "Contemple o imponente castelo sobre a rocha e passeie pelos bazares da Cidade Azul." : "Marvel at the majestic fort perched above the blue-painted houses and traditional spice markets.",
      location: "Mehrangarh Fort, Jodhpur, Rajasthan",
      objectPosition: "center center",
      cta1Text: lang === "es" ? "Explorar Rajastán" : lang === "pt" ? "Explorar Rajastão" : "Explore Rajasthan",
      cta1Link: getLocalizedDestinationsPath(locale, "rajasthan"),
      cta2Text: text.inquireCTA,
      cta2Link: "/contact"
    },
    {
      image: "/images/kerala_backwaters_houseboat.png",
      sub: lang === "es" ? "REMANSOS TROPICALES" : lang === "pt" ? "REMANSOS TROPICAIS" : "TROPICAL BACKWATERS",
      title: lang === "es" ? "Cruceros en Casa Flotante en Alleppey, Kerala" : lang === "pt" ? "Cruzeiros em Casa Flutuante em Alleppey, Kerala" : "Houseboat Cruises in Alleppey, Kerala",
      desc: lang === "es" ? "Deslízate por lagunas esmeralda rodeadas de palmeras y rejuvenezca con rituales ayurvédicos." : lang === "pt" ? "Navegue por lagoas de esmeralda e rejuvenesça com rituais ayurvédicos tradicionais." : "Cruise through emerald backwaters and rejuvenate with authentic Ayurvedic rituals.",
      location: "Backwaters, Alleppey, Kerala",
      objectPosition: "center center",
      cta1Text: lang === "es" ? "Viajes a Kerala" : lang === "pt" ? "Viagens para Kerala" : "Kerala Retreats",
      cta1Link: getLocalizedDestinationsPath(locale, "kerala"),
      cta2Text: text.inquireCTA,
      cta2Link: "/contact"
    },
    {
      image: "/images/munnar.jpg",
      sub: lang === "es" ? "MONTAÑAS DE TÉ DE WESTERN GHATS" : lang === "pt" ? "COLINAS DE CHÁ DOS GATES OCIDENTAIS" : "WESTERN GHATS TEA HILLS",
      title: lang === "es" ? "Plantaciones de Té y Colinas de Munnar" : lang === "pt" ? "Plantações de Chá e Colinas de Munnar" : "Misty Tea Hills of Munnar",
      desc: lang === "es" ? "Respire aire puro entre plantaciones de té verde y picos montañosos envueltos en niebla." : lang === "pt" ? "Respire ar puro entre plantações de chá verde e picos montanhosos enevoados." : "Breathe the fresh mountain air of rolling tea estates and misty peaks in South India.",
      location: "Munnar Tea Estates, Kerala",
      objectPosition: "center center",
      cta1Text: lang === "es" ? "Guías de Kerala" : lang === "pt" ? "Guias de Kerala" : "Kerala Guides",
      cta1Link: getLocalizedDestinationsPath(locale, "kerala"),
      cta2Text: text.inquireCTA,
      cta2Link: "/contact"
    },
    {
      image: "/images/varanasi_ghats_aarti.png",
      sub: lang === "es" ? "FESTIVALES Y RITUALES ESPIRITUALES" : lang === "pt" ? "FESTIVAIS E RITUAIS ESPIRITUAIS" : "SPIRITUAL RITUALS & FESTIVALS",
      title: lang === "es" ? "Ceremonias Ganga Aarti en la Sagrada Varanasi" : lang === "pt" ? "Cerimônias Ganga Aarti na Sagrada Varanasi" : "Spiritual Awakenings & Ganga Aarti in Varanasi",
      desc: lang === "es" ? "Presencie sagrados rituales de lámparas y cantos devocionales en los antiguos ghats del río Ganges." : lang === "pt" ? "Testemunhe rituais sagrados de lâmpadas e cantos devocionais nos antigos ghats do rio Ganges." : "Witness the intense devotion of evening Ganga Aarti ceremonies by the ancient sacred ghats.",
      location: "Ganga Ghats, Varanasi, Uttar Pradesh",
      objectPosition: "center center",
      cta1Text: lang === "es" ? "Rutas Espirituales" : lang === "pt" ? "Rotas Espirituais" : "Spiritual Itineraries",
      cta1Link: getLocalizedDestinationsPath(locale, "uttar-pradesh"),
      cta2Text: text.inquireCTA,
      cta2Link: "/contact"
    },
    {
      image: "https://images.unsplash.com/photo-1609828913642-c55f7659f710?w=1600&q=80",
      sub: lang === "es" ? "FESTIVALES CULTURALES" : lang === "pt" ? "FESTIVAIS CULTURAIS" : "CULTURAL FESTIVALS",
      title: lang === "es" ? "Rann Utsav: Festival del Desierto Blanco de Kutch" : lang === "pt" ? "Rann Utsav: Festival do Deserto Branco de Kutch" : "Great Rann Utsav: White Salt Desert Festival",
      desc: lang === "es" ? "Disfrute de música folclórica, artesanías y noches de luna llena en el gran desierto de sal de Gujarat." : lang === "pt" ? "Desfrute de música folclórica, artesanato e noites de lua cheia no deserto de sal de Gujarat." : "Celebrate vibrant music, crafts, and full-moon nights on the endless white salt desert of Kutch.",
      location: "Rann of Kutch, Gujarat",
      objectPosition: "center center",
      cta1Text: lang === "es" ? "Explorar Gujarat" : lang === "pt" ? "Explorar Gujarat" : "Explore Gujarat",
      cta1Link: getLocalizedDestinationsPath(locale, "gujarat"),
      cta2Text: text.inquireCTA,
      cta2Link: "/contact"
    },
    {
      image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=1600&q=80",
      sub: lang === "es" ? "SANTUARIOS SAGRADOS" : lang === "pt" ? "SANTUÁRIOS SAGRADOS" : "SACRED SHRINES",
      title: lang === "es" ? "El Templo Dorado: Joya Espiritual de Amritsar" : lang === "pt" ? "O Templo Dourado: Joia Espiritual de Amritsar" : "The Golden Temple: Crown Jewel of Amritsar",
      desc: lang === "es" ? "Sienta paz y armonía en Sri Harmandir Sahib rodeado por el estanque sagrado Amrit Sarovar." : lang === "pt" ? "Sinta paz e harmonia em Sri Harmandir Sahib cercado pelo lago sagrado Amrit Sarovar." : "Experience serene spirituality at Sri Harmandir Sahib surrounded by the sacred Amrit Sarovar pool.",
      location: "Amritsar, Punjab",
      objectPosition: "center center",
      cta1Text: lang === "es" ? "Ver Destinos" : lang === "pt" ? "Ver Destinos" : "View Destinations",
      cta1Link: "/destinations",
      cta2Text: text.inquireCTA,
      cta2Link: "/contact"
    },
    {
      image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=1600&q=80",
      sub: lang === "es" ? "ARQUITECTURA PATRIMONIAL UNESCO" : lang === "pt" ? "ARQUITETURA PATRIMONIAL UNESCO" : "UNESCO ARCHITECTURAL WONDERS",
      title: lang === "es" ? "Templos Esculpidos de Khajuraho UNESCO" : lang === "pt" ? "Templos Esculpidos de Khajuraho UNESCO" : "Khajuraho UNESCO Sculptured Temples",
      desc: lang === "es" ? "Contemple la maestría artística medieval y las famosas esculturas en piedra del período Chandela." : lang === "pt" ? "Contemple a maestria artística medieval e as famosas esculturas em pedra do período Chandela." : "Admire exquisite medieval Nagara architecture and intricate stone carvings of Chandela period.",
      location: "Khajuraho, Madhya Pradesh",
      objectPosition: "center center",
      cta1Text: lang === "es" ? "Explorar Madhya Pradesh" : lang === "pt" ? "Explorar Madhya Pradesh" : "Explore MP",
      cta1Link: getLocalizedDestinationsPath(locale, "madhya-pradesh"),
      cta2Text: text.inquireCTA,
      cta2Link: "/contact"
    },
    {
      image: "/images/ranthambore_tiger_safari.png",
      sub: lang === "es" ? "PARQUES NACIONALES Y SAFARIS" : lang === "pt" ? "PARQUES NACIONAIS E SAFÁRIS" : "NATIONAL PARKS & SAFARIS",
      title: lang === "es" ? "Safaris del Tigre de Bengala en Ranthambore" : lang === "pt" ? "Safáris do Tigre de Bengala em Ranthambore" : "Royal Bengal Tiger Safaris in Ranthambore",
      desc: lang === "es" ? "Rastree tigres de Bengala salvajes en las antiguas reservas de caza rodeadas de ruinas históricas." : lang === "pt" ? "Rastreie tigres de Bengala selvagens nas antigas reservas de caça com ruínas históricas." : "Search for the majestic Royal Bengal Tiger in the ancient hunting grounds of Maharajas.",
      location: "Ranthambore National Park, Rajasthan",
      objectPosition: "center center",
      cta1Text: lang === "es" ? "Tours de Naturaleza" : lang === "pt" ? "Tours de Natureza" : "Wildlife Packages",
      cta1Link: "/packages?category=Wildlife",
      cta2Text: text.inquireCTA,
      cta2Link: "/contact"
    },
    {
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=1600&q=80",
      sub: lang === "es" ? "VIDA SILVESTRE DEL HIMALAYA" : lang === "pt" ? "VIDA SELVAGEM DO HIMALAIA" : "HIMALAYAN WILDLIFE",
      title: lang === "es" ? "Parque Nacional Jim Corbett y Naturaleza" : lang === "pt" ? "Parque Nacional Jim Corbett e Natureza" : "Jim Corbett National Park & Wilderness",
      desc: lang === "es" ? "Explore el parque nacional más antiguo de la India, hogar de elefantes salvajes, leopardos y densos bosques." : lang === "pt" ? "Explore o parque nacional mais antigo da Índia, lar de elefantes selvagens, leopardos e florestas." : "Explore India's oldest national park, home to wild Asian elephants, elusive leopards, and dense forests.",
      location: "Jim Corbett National Park, Uttarakhand",
      objectPosition: "center center",
      cta1Text: lang === "es" ? "Tours de Safaris" : lang === "pt" ? "Tours de Safáris" : "Safari Tours",
      cta1Link: "/packages?category=Wildlife",
      cta2Text: text.inquireCTA,
      cta2Link: "/contact"
    },
    {
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1600&q=80",
      sub: lang === "es" ? "METRÓPOLIS Y PATRIMONIO DE MAHARASHTRA" : lang === "pt" ? "METRÓPOLE E PATRIMÔNIO DE MAHARASHTRA" : "MAHARASHTRA METROPOLIS",
      title: lang === "es" ? "Puerta de la India y la Vibrante Bombay" : lang === "pt" ? "Portal da Índia e a Vibrante Mumbai" : "Gateway of India & Vibrant Mumbai",
      desc: lang === "es" ? "Descubra el corazón económico de la India, monumentos en el puerto y el encanto colonial británico." : lang === "pt" ? "Descubra o coração econômico da Índia, monumentos no porto e o charme colonial." : "Discover the economic capital of India, iconic waterfront monuments, and colonial architecture.",
      location: "Mumbai, Maharashtra",
      objectPosition: "center center",
      cta1Text: lang === "es" ? "Explorar Maharashtra" : lang === "pt" ? "Explorar Maharashtra" : "Explore Maharashtra",
      cta1Link: getLocalizedDestinationsPath(locale, "maharashtra"),
      cta2Text: text.inquireCTA,
      cta2Link: "/contact"
    },
    {
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1600&q=80",
      sub: lang === "es" ? "ARQUITECTURA DRAVÍDICA DEL SUR" : lang === "pt" ? "ARQUITETURA DRAVÍDICA DO SUL" : "DRAVIDIAN TEMPLE TOWERS",
      title: lang === "es" ? "Torres del Templo Meenakshi en Madurai" : lang === "pt" ? "Torres do Templo Meenakshi em Madurai" : "Meenakshi Amman Temple Towers of Madurai",
      desc: lang === "es" ? "Maravíllese con las majestuosas gopurams de colores y esculturas sagradas en la antigua Madurai." : lang === "pt" ? "Maravilhe-se com as majestosas gopurams coloridas e esculturas sagradas na antiga Madurai." : "Marvel at towering colorful gopurams and thousands of sculpted deities in ancient Madurai.",
      location: "Madurai, Tamil Nadu",
      objectPosition: "center center",
      cta1Text: lang === "es" ? "Ver Destinos" : lang === "pt" ? "Ver Destinos" : "View Destinations",
      cta1Link: "/destinations",
      cta2Text: text.inquireCTA,
      cta2Link: "/contact"
    },
    {
      image: "/images/goa 2.jpg",
      sub: lang === "es" ? "PARAÍSO COSTERO TROPICAL" : lang === "pt" ? "PARAÍSO LITORÂNEO TROPICAL" : "BEACH LUXURY & HERITAGE",
      title: lang === "es" ? "Playas Doradas y Herencia Portuguesa de Goa" : lang === "pt" ? "Praias Douradas e Herança Portuguesa de Goa" : "Golden Sands & Colonial Heritage of Goa",
      desc: lang === "es" ? "Relájese en playas soleadas y explore iglesias de la UNESCO en la histórica Goa Velha." : lang === "pt" ? "Relaxe em praias ensolaradas e explore igrejas da UNESCO na histórica Goa Velha." : "Relax on pristine tropical beaches and explore colonial Portuguese churches in Old Goa.",
      location: "Baga & Old Goa, Goa",
      objectPosition: "center center",
      cta1Text: lang === "es" ? "Explorar Goa" : lang === "pt" ? "Explorar Goa" : "Explore Goa",
      cta1Link: getLocalizedDestinationsPath(locale, "goa"),
      cta2Text: text.inquireCTA,
      cta2Link: "/contact"
    },
    {
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80",
      sub: lang === "es" ? "DESTINOS INTERNACIONALES DE LUJO" : lang === "pt" ? "DESTINOS INTERNACIONAIS DE LUXO" : "OUTBOUND LUXURY METROPOLIS",
      title: lang === "es" ? "Dubái: Rascacielos Futuristas y Dunas del Desierto" : lang === "pt" ? "Dubai: Raciocínio Futurista e Dunas do Deserto" : "Dubai: Futuristic Skylines & Desert Dunes",
      desc: lang === "es" ? "Experimente el Burj Khalifa, compras de lujo y safaris internacionales en las dunas doradas de Dubái." : lang === "pt" ? "Experimente o Burj Khalifa, compras de luxo e safáris internacionais nas dunas douradas de Dubai." : "Witness Burj Khalifa, world-class luxury shopping, and thrilling desert dune safaris in Dubai.",
      location: "Dubai, United Arab Emirates",
      objectPosition: "center center",
      cta1Text: lang === "es" ? "Explorar Destinos de Dubái" : lang === "pt" ? "Explorar Destinos de Dubai" : "Explore Dubai Destinations",
      cta1Link: "/international-trips",
      cta2Text: text.inquireCTA,
      cta2Link: "/contact"
    },
    {
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1600&q=80",
      sub: lang === "es" ? "PARAÍSO SOBRE EL AGUA" : lang === "pt" ? "PARAÍSO SOBRE A ÁGUA" : "OUTBOUND OVERWATER PARADISE",
      title: lang === "es" ? "Maldivas: Villas Privadas sobre Lagunas Turquesa" : lang === "pt" ? "Maldivas: Villas Privadas sobre Lagoas Turquesa" : "Maldives Overwater Villas & Island Escapes",
      desc: lang === "es" ? "Escápese a bungalows de lujo sobre arrecifes de coral vivos y aguas cristalinas en las Maldivas." : lang === "pt" ? "Escape para bangalôs de luxo sobre recifes de coral e águas cristalinas nas Maldivas." : "Escape to private water bungalows suspended over vibrant coral reefs and turquoise lagoons.",
      location: "Maldives Islands",
      objectPosition: "center center",
      cta1Text: lang === "es" ? "Explorar Islas Maldivas" : lang === "pt" ? "Explorar Ilhas Maldivas" : "Explore Maldives Islands",
      cta1Link: "/international-trips",
      cta2Text: text.inquireCTA,
      cta2Link: "/contact"
    },
    {
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&q=80",
      sub: lang === "es" ? "SANTUARIOS TROPICALES INTERNACIONALES" : lang === "pt" ? "SANTUÁRIOS TROPICAIS INTERNACIONAIS" : "OUTBOUND TROPICAL SANCTUARIES",
      title: lang === "es" ? "Bali: Terrazas de Arroz de Ubud y Templos Sagrados" : lang === "pt" ? "Bali: Terraços de Arroz de Ubud e Templos Sagrados" : "Bali Rice Terraces & Sacred Sea Temples",
      desc: lang === "es" ? "Explore exuberantes selvas en Ubud, templos acantilados al atardecer y resorts de lujo en Bali." : lang === "pt" ? "Explore florestas em Ubud, templos em falésias ao pôr do sol e resorts de luxo em Bali." : "Explore emerald rice terraces, cliffside sunset temples, and luxury beach resorts in Bali.",
      location: "Ubud & Seminyak, Bali, Indonesia",
      objectPosition: "center center",
      cta1Text: lang === "es" ? "Explorar Destinos de Bali" : lang === "pt" ? "Explorar Destinos de Bali" : "Explore Bali Destinations",
      cta1Link: "/international-trips",
      cta2Text: text.inquireCTA,
      cta2Link: "/contact"
    },
    {
      image: "https://images.unsplash.com/photo-1506665531195-3566fe2b4dfa?w=1600&q=80",
      sub: lang === "es" ? "PLAYAS E ISLAS INTERNACIONALES" : lang === "pt" ? "PRAIAS E ILHAS INTERNACIONAIS" : "OUTBOUND ISLAND ADVENTURE",
      title: lang === "es" ? "Tailandia: Templos Dorados y Playas de Phuket" : lang === "pt" ? "Tailândia: Templos Dourados e Praias de Phuket" : "Thailand Islands, Phuket Beaches & Golden Temples",
      desc: lang === "es" ? "Descubra los palacios dorados de Bangkok, santuarios de elefantes en Chiang Mai y playas de Phuket." : lang === "pt" ? "Descubra palácios dourados de Bangkok, santuários de elefantes em Chiang Mai e praias de Phuket." : "Discover Bangkok's golden spires, Chiang Mai elephant sanctuaries, and tropical Phuket beaches.",
      location: "Phuket & Bangkok, Thailand",
      objectPosition: "center center",
      cta1Text: lang === "es" ? "Paquetes Tailandia" : lang === "pt" ? "Pacotes Tailândia" : "Thailand Tours",
      cta1Link: "/packages?category=Outbound",
      cta2Text: text.inquireCTA,
      cta2Link: "/contact"
    }
  ];
  const slides = (cms.slides && Array.isArray(cms.slides) && cms.slides.length > 0)
    ? cms.slides.map((s: any) => ({
        image: s.image || "/images/taj_mahal_sunrise.png",
        sub: typeof s.sub === "object" ? (s.sub[lang] || s.sub.en || "") : (s.sub || ""),
        title: typeof s.title === "object" ? (s.title[lang] || s.title.en || "") : (s.title || ""),
        desc: typeof s.desc === "object" ? (s.desc[lang] || s.desc.en || "") : (s.desc || ""),
        location: typeof s.location === "object" ? (s.location[lang] || s.location.en || "") : (s.location || ""),
        objectPosition: s.objectPosition || "center center",
        cta1Text: typeof s.cta1Text === "object" ? (s.cta1Text[lang] || s.cta1Text.en || "") : (s.cta1Text || ""),
        cta1Link: s.cta1Link || getLocalizedDestinationsPath(locale, "uttar-pradesh"),
        cta2Text: typeof s.cta2Text === "object" ? (s.cta2Text[lang] || s.cta2Text.en || "") : (s.cta2Text || text.inquireCTA),
        cta2Link: s.cta2Link || "/contact"
      }))
    : default20Slides;

  // CMS stats
  const cmsStats = (cms.stats && cms.stats.length > 0) ? cms.stats : [];
  // CMS how-it-works
  const cmsHowItWorks = cms.howItWorks || [];
  // CMS inclusions
  const cmsInclusions = cms.inclusions || [];
  // CMS philosophy
  const cmsPhilosophy = cms.philosophy || {};
  // CMS food section
  const cmsFoodSection = cms.foodSection || {};
  // CMS CTA banner
  const cmsCtaBanner = cms.ctaBanner || {};
  // CMS FAQs
  const defaultFaqs = [
    { q: { en: "Is it safe to travel to India?", es: "¿Es seguro viajar a la India?", pt: "É seguro viajar para a Índia?" }, a: { en: "Yes, India is generally safe for tourists. Our expert guides ensure your comfort and security at all times.", es: "Sí, la India es generalmente segura para turistas.", pt: "Sim, a Índia é geralmente segura para turistas." } },
    { q: { en: "What is the best time to visit India?", es: "¿Cuál es la mejor época para visitar la India?", pt: "Qual é a melhor época para visitar a Índia?" }, a: { en: "October to March is ideal for most regions. South India can be visited year-round.", es: "Octubre a marzo es ideal para la mayoría de regiones.", pt: "Outubro a março é ideal para a maioria das regiões." } },
    { q: { en: "Do I need a visa for India?", es: "¿Necesito visa para la India?", pt: "Preciso de visto para a Índia?" }, a: { en: "Yes, most nationalities require a visa. The e-Visa online is processed within 72 hours.", es: "Sí, la mayoría de nacionalidades necesitan visa.", pt: "Sim, a maioria das nacionalidades precisa de visto." } },
    { q: { en: "Can I fully customize my travel package?", es: "¿Puedo personalizar mi viaje?", pt: "Posso personalizar a minha viagem?" }, a: { en: "Absolutely. Every detail is tailormade — route, duration, hotels, and activities.", es: "Por supuesto. Cada detalle se diseña desde cero.", pt: "Certamente. Cada detalhe é planejado a partir do zero." } },
    { q: { en: "How is local transportation managed?", es: "¿Cómo se gestiona el transporte?", pt: "Como é gerido o transporte?" }, a: { en: "We provide private luxury SUVs with experienced English-speaking drivers for all transfers.", es: "Proporcionamos vehículos privados de lujo con conductores experimentados.", pt: "Oferecemos veículos de luxo particulares com motoristas experientes." } }
  ];
  const cmsFaqs = cms.faqs || [];
  const homepageFaqs = (cmsFaqs.length > 0 ? cmsFaqs : defaultFaqs).map((f: any) => ({
    q: f.q?.[lang] || f.q?.en || f.q,
    a: f.a?.[lang] || f.a?.en || f.a
  }));

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#1B1B1B]">
      
      {/* SECTION 1: Dynamic Hero Banner Slider */}
      <HeroSlider 
        locale={locale} 
        slides={slides} 
        ctaText={text.cta} 
        inquireCTA={text.inquireCTA} 
      />

      {/* SECTION 1.2: Signature Travel Services */}
      <ServicesSection locale={locale} />

      {/* SECTION 1.5: Infographic Circular Stats (Screenshot 1 Theme) */}
      <section className="bg-cream py-24 border-b border-gold/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {(cmsStats.length > 0 ? cmsStats : [
              { value: 22, suffix: "", label: { en: "Years of experience", es: "Años de experiencia", pt: "Anos de experiência" } },
              { value: 97, suffix: "%", label: { en: "Retention rate", es: "Tasa de retención", pt: "Taxa de retenção" } },
              { value: 2400, suffix: "+", label: { en: "Happy travelers served", es: "Viajeros satisfechos", pt: "Viajantes satisfeitos" } },
              { value: "PAN India", suffix: "", label: { en: "Indian states covered", es: "Estados indios cubiertos", pt: "Estados indianos cobertos" } }
            ]).map((stat: any, i: number) => (
              <Reveal key={i} delay={50 + i * 70} className="text-center space-y-5">
                <div className="relative w-44 h-44 rounded-full flex flex-col items-center justify-center bg-white border border-[#C5A862]/30 shadow-md mx-auto">
                  <div className="absolute -inset-1.5 rounded-full border border-[#C5A862]/10 scale-[1.04]" />
                  <div className="absolute bottom-4 right-2 w-3 h-3 rounded-full bg-gold border-2 border-white shadow-sm" />
                  <span className="text-3xl font-bold text-royal font-serif">
                    <StatCounter target={stat.value} suffix={stat.suffix || ""} />
                  </span>
                </div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-royal/60 font-bold max-w-[160px] mx-auto leading-snug">
                  {stat.label?.[lang] || stat.label?.en || stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1.6: Government Certification & Verified Tax Status Banner (GSTIN & Legal Credentials) */}
      <section className="bg-gradient-to-b from-[#062D27] via-[#0B4D44] to-[#062D27] text-white py-20 border-b border-gold/20 relative overflow-hidden">

        {/* Subtle decorative background glow */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A862_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Header section */}
          <Reveal direction="up" className="text-center space-y-4 max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs uppercase tracking-[0.25em] font-semibold">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>{text.certSub}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white leading-tight">
              {text.certTitle}
            </h2>
            <p className="text-white/70 text-sm md:text-base font-light leading-relaxed">
              {text.certDesc}
            </p>
          </Reveal>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: GSTIN Number */}
            <Reveal delay={100} className="bg-white/5 backdrop-blur-md border border-gold/30 hover:border-gold/60 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-lg bg-gold/15 border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-royal transition-colors duration-300">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {text.certGstBadge}
                  </span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/50 font-medium">{text.certGstLabel}</p>
                  <h3 className="text-xl font-bold font-mono text-gold tracking-wide mt-1 group-hover:text-amber-300 transition-colors">
                    {text.certGstVal}
                  </h3>
                </div>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  {text.certGstDesc}
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 mt-4 text-[11px] text-white/40 flex items-center justify-between">
                <span>Govt. of India GST Portal</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
              </div>
            </Reveal>

            {/* Card 2: Legal Entity Name */}
            <Reveal delay={180} className="bg-white/5 backdrop-blur-md border border-gold/30 hover:border-gold/60 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-lg bg-gold/15 border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-royal transition-colors duration-300">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-gold/20 text-gold border border-gold/30 px-2.5 py-1 rounded-full">
                    {text.certNameBadge}
                  </span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/50 font-medium">{text.certNameLabel}</p>
                  <h3 className="text-xl font-bold font-serif text-white tracking-wide mt-1 group-hover:text-gold transition-colors">
                    {text.certNameVal}
                  </h3>
                </div>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  {text.certNameDesc}
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 mt-4 text-[11px] text-white/40 flex items-center justify-between">
                <span>Certified Business Name</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
              </div>
            </Reveal>

            {/* Card 3: Headquarter & Place of Business */}
            <Reveal delay={260} className="bg-white/5 backdrop-blur-md border border-gold/30 hover:border-gold/60 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-lg bg-gold/15 border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-royal transition-colors duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-sky-500/20 text-sky-300 border border-sky-500/30 px-2.5 py-1 rounded-full">
                    {text.certAddressBadge}
                  </span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/50 font-medium">{text.certAddressLabel}</p>
                  <h3 className="text-lg font-bold font-serif text-white mt-1 group-hover:text-gold transition-colors">
                    {text.certAddressVal}
                  </h3>
                </div>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  {text.certAddressDesc}
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 mt-4 text-[11px] text-white/40 flex items-center justify-between">
                <span>State Tax Officer, Rajasthan</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
              </div>
            </Reveal>

            {/* Card 4: Official Compliant Billing & Guarantee */}
            <Reveal delay={340} className="bg-white/5 backdrop-blur-md border border-gold/30 hover:border-gold/60 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-lg bg-gold/15 border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-royal transition-colors duration-300">
                    <Landmark className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30 px-2.5 py-1 rounded-full">
                    {text.certGuaranteeBadge}
                  </span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/50 font-medium">{text.certGuaranteeLabel}</p>
                  <h3 className="text-lg font-bold font-serif text-white mt-1 group-hover:text-gold transition-colors">
                    {text.certGuaranteeVal}
                  </h3>
                </div>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  {text.certGuaranteeDesc}
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 mt-4 text-[11px] text-white/40 flex items-center justify-between">
                <span>100% Tax Invoice Protection</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
              </div>
            </Reveal>

          </div>

          {/* Bottom Trust Badge Bar */}
          <Reveal delay={400} className="mt-12 p-4 rounded-xl bg-gold/10 border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold flex items-center justify-center text-gold shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gold uppercase tracking-wider">Government Registration Certificate Form GST REG-06</p>
                <p className="text-xs text-white/70">Verified Legal Partners: Manoj Kumar Saini & Hemraj Saini | Jurisdiction: State Tax Department, Govt. of Rajasthan</p>
              </div>
            </div>
            <div className="shrink-0 flex items-center gap-2 text-xs font-mono font-bold text-gold bg-black/40 px-4 py-2 rounded-lg border border-gold/30">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>GSTIN: 08ACIFM3516H1Z7</span>
            </div>
          </Reveal>

        </div>
      </section>

      {/* SECTION 2: WHY CHOOSE US (Requirement #13 - 6 Pillars matching About Us) */}
      <section className="bg-gradient-to-b from-[#062D27]/5 via-[#FAF8F5] to-[#FAF8F5] py-24 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="bg-gold/15 text-royal border border-gold/30 text-xs font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full inline-block">
              {locale === "es" ? "LA VENTAJA MH INDIA TRIPS" : locale === "pt" ? "A VANTAGEM MH INDIA TRIPS" : "THE MH INDIA TRIPS ADVANTAGE"}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-royal tracking-tight">
              {locale === "es" ? "¿Por Qué Elegir MH India Trips?" : locale === "pt" ? "Por Que Escolher a MH India Trips?" : "Why Choose MH India Trips"}
            </h2>
            <p className="text-sm md:text-base text-foreground/75 font-light leading-relaxed">
              Government-verified travel operations crafted without rigid group tours or hidden surcharges.
            </p>
            <div className="h-px w-24 bg-gold mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 className="w-7 h-7" />,
                title: locale === "es" ? "100% Certificado por el Gobierno y GST" : locale === "pt" ? "100% Certificado pelo Governo e GST" : "100% Govt. Certified & GST Registered",
                desc: locale === "es" ? "Empresa registrada bajo GSTIN 08ACIFM3516H1Z7. Facturas fiscales oficiales." : locale === "pt" ? "Empresa registrada sob GSTIN 08ACIFM3516H1Z7. Faturas fiscais oficiais." : "Officially registered partnership firm under Form GST REG-06 (GSTIN: 08ACIFM3516H1Z7). Official GST tax invoices issued."
              },
              {
                icon: <ShieldCheck className="w-7 h-7" />,
                title: locale === "es" ? "Flota 100% Privada y Choferes Profesionales" : locale === "pt" ? "Frota 100% Privada e Motoristas Profissionais" : "100% Private Fleet & Professional Chauffeurs",
                desc: locale === "es" ? "Choferes profesionales de habla inglesa con vehículos SUV de lujo dedicados a su grupo." : locale === "pt" ? "Motoristas profissionais com SUVs de luxo dedicados exclusivamente ao seu grupo." : "Dedicated English-speaking professional drivers with air-conditioned luxury SUVs assigned exclusively to your group."
              },
              {
                icon: <Award className="w-7 h-7" />,
                title: locale === "es" ? "Guías Locales Certificados por el Gobierno" : locale === "pt" ? "Guias Locais Certificados pelo Governo" : "Official ASI Licensed Heritage Guides",
                desc: locale === "es" ? "Guías oficiales del gobierno en monumentos históricos para historia sin compras forzadas." : locale === "pt" ? "Guias oficiais do governo em monumentos para história real sem compras forçadas." : "Government-certified local guides at Taj Mahal, Amber Fort, and heritage circuits ensuring rich storytelling."
              },
              {
                icon: <Star className="w-7 h-7" />,
                title: locale === "es" ? "Estancias Seleccionadas en Palacios Reales" : locale === "pt" ? "Estadias Selecionadas em Palácios Reais" : "Hand-Curated Royal Palace Stays",
                desc: locale === "es" ? "Reservas verificadas en palacios reales restaurados, havelis históricas y casas flotantes." : locale === "pt" ? "Reservas verificadas em palácios reais restaurados, havelis históricas e barcos em Kerala." : "Pre-vetted bookings inside restored royal fortresses, historic Havelis, and private backwater houseboats."
              },
              {
                icon: <Clock className="w-7 h-7" />,
                title: locale === "es" ? "Mesa de Soporte 24/7 en Terreno" : locale === "pt" ? "Central de Suporte 24/7 em Terreno" : "24/7 Boots-on-Ground Operations Desk",
                desc: locale === "es" ? "Contacto directo por WhatsApp con su gestor de viaje dedicado durante todo el tour." : locale === "pt" ? "Contato direto por WhatsApp com seu gerente de viagem durante todo o roteiro." : "Direct WhatsApp connection line with your dedicated trip manager from landing until departure flight."
              },
              {
                icon: <FileCheck className="w-7 h-7" />,
                title: locale === "es" ? "Precios Transparentes y Permisos Incluidos" : locale === "pt" ? "Preços Transparentes e Permissões Incluídas" : "Transparent Pricing & Guaranteed Entry Passes",
                desc: locale === "es" ? "Entradas a monumentos, peajes, combustible y tasas incluidas por adelantado." : locale === "pt" ? "Ingressos de monumentos, pedágios, combustível e taxas incluídos antecipadamente." : "All monument entry passes, toll taxes, fuel, driver allowances, and taxes included upfront with zero surprise surcharges."
              }
            ].map((pillar: any, i: number) => (
              <Reveal key={i} delay={100 + i * 70} className="bg-white p-8 rounded-3xl border border-gold/30 shadow-lg hover:shadow-2xl transition-all duration-300 space-y-5 group hover:-translate-y-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#062D27] text-gold flex items-center justify-center font-bold text-xl shadow-md group-hover:bg-gold group-hover:text-royal transition-colors duration-300">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-royal leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-gold/10 text-[11px] font-bold text-gold uppercase tracking-wider flex items-center justify-between">
                  <span>Standard Guarantee</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 2.2: FEATURED REGION HIGHLIGHT - NORTH-EAST INDIA (Requirement #6) */}
      <section className="bg-gradient-to-r from-[#052E16] via-[#064E3B] to-[#022C22] text-white py-24 border-b border-gold/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C5A862_1.5px,transparent_1.5px)] [background-size:28px_28px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <Reveal direction="left" className="lg:col-span-6 space-y-6">
            <span className="bg-gold/20 text-gold border border-gold/40 text-xs font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full inline-flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-gold" />
              <span>FEATURED HIGHLIGHT REGION</span>
            </span>
            
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
              Explore North-East India - Unexplored Paradise
            </h2>
            
            <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed">
              Discover Assam's tea gardens and one-horned rhinos in Kaziranga, Meghalaya's living root bridges and cascading waterfalls, Sikkim's high Himalayan monasteries, and Arunachal Pradesh's pristine valleys.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-gold/30 space-y-1">
                <span className="text-gold font-bold text-xs uppercase block">Kaziranga Wildlife</span>
                <span className="text-white text-xs font-light">UNESCO Rhino Sanctuary</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-gold/30 space-y-1">
                <span className="text-gold font-bold text-xs uppercase block">Meghalaya & Sikkim</span>
                <span className="text-white text-xs font-light">Living Bridges & Valleys</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link 
                href={`/${locale}/national-parks`} 
                className="bg-gold hover:bg-amber-400 text-royal font-bold uppercase text-xs tracking-wider px-8 py-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              >
                <span>Explore North-East Safaris</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal direction="right" delay={150} className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-gold/40 shadow-2xl h-[380px] sm:h-[440px]">
              <img 
                src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=1200&q=80" 
                alt="North-East India Rhino Safari" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs uppercase tracking-widest text-gold font-bold block">Assam & Meghalaya Circuit</span>
                <h3 className="text-2xl font-serif font-bold">Kaziranga & Shillong Highlands</h3>
              </div>
            </div>
          </Reveal>

        </div>
      </section>


      {/* SECTION 2.5: How It Works / Custom Tour Planning - Timeline Design */}
      <section className="bg-[#FAF8F5] border-t border-b border-gold/10 py-28 relative overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#C5A862_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 space-y-20">
          {/* Header */}
          <Reveal className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold block">{text.howItWorksSub}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-royal tracking-tight font-serif">{text.howItWorksTitle}</h2>
            <p className="text-sm md:text-base text-foreground/50 leading-relaxed font-light">{text.howItWorksDesc}</p>
            <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
          </Reveal>

          {/* Vertical Alternating Timeline Layout */}
          <div className="relative">
            {/* Timeline center line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold/50 via-gold/30 to-gold/5 transform md:-translate-x-1/2 z-0" />

            <div className="space-y-12 relative z-10">
              {[
                {
                  num: "01",
                  title: locale === "es" ? "Cuéntenos Su Sueño" : locale === "pt" ? "Conte-nos Seu Sonho" : "1. Submit Your Inquiry",
                  desc: locale === "es" ? "Comparta sus intereses, fechas y presupuesto con nosotros." : locale === "pt" ? "Compartilhe seus interesses, datas e orçamento com a gente." : "Share your travel dates, preferred destinations, and special interests with our local specialists.",
                },
                {
                  num: "02",
                  title: locale === "es" ? "Co-Diseño con Asesor" : locale === "pt" ? "Co-Design com Consultor" : "2. Co-Design with an Advisor",
                  desc: locale === "es" ? "Colabore con un experto local para afinar cada día y experiencia." : locale === "pt" ? "Colabore com um especialista para ajustar cada dia e experiência." : "Work 1-on-1 with a dedicated travel designer to customize every experience, day-by-day.",
                },
                {
                  num: "03",
                  title: locale === "es" ? "Selección de Palacios" : locale === "pt" ? "Seleção de Palácios" : "3. Palace & Guide Selection",
                  desc: locale === "es" ? "Seleccione sus hoteles de patrimonio, guías privados y vehículos." : locale === "pt" ? "Escolha seus hotéis históricos, guias privados e veículos." : "Choose your preferred heritage palace hotels, private transit vehicles, and expert local guides.",
                },
                {
                  num: "04",
                  title: locale === "es" ? "Confirmación y Prepago" : locale === "pt" ? "Confirmação e Pré-viagem" : "4. Finalize & Book",
                  desc: locale === "es" ? "Ajustamos y reservamos su itinerario con total seguridad." : locale === "pt" ? "Finalizamos e reservamos seu itinerário com total segurança." : "Review and approve your complete travel documents, vouchers, and pre-departure briefings.",
                },
                {
                  num: "05",
                  title: locale === "es" ? "Viaje Seguro y Asistencia" : locale === "pt" ? "Viagem Segura e Suporte" : "5. Travel with 24/7 Support",
                  desc: locale === "es" ? "Explore con conductor privado y conserje 24/7 disponible." : locale === "pt" ? "Explore com motorista privado e suporte concierge 24/7." : "Enjoy a seamless journey with a dedicated private chauffeur, expert local hosts, and active 24/7 live concierge support."
                }
              ].map((step, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div key={step.num} className={`relative flex flex-col md:flex-row items-start md:items-center ${isLeft ? "md:flex-row-reverse" : ""}`}>
                    {/* Middle dot/circle */}
                    <div className="absolute left-[2px] md:left-1/2 top-4 md:top-auto md:transform md:-translate-x-1/2 z-20">
                      <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-[#FAF8F5] border-2 border-gold text-royal flex items-center justify-center font-bold text-xs shadow-md transition-all duration-300 hover:bg-gold hover:text-[#FAF8F5]">
                        {step.num}
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="w-full md:w-[45%] pl-12 md:pl-0">
                      <Reveal direction={isLeft ? "left" : "right"} className="bg-white border border-gold/10 p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 space-y-4">
                        <h3 className="text-lg md:text-xl font-bold text-royal font-serif">{step.title}</h3>
                        <div className="h-px w-10 bg-gold/30" />
                        <p className="text-xs md:text-sm text-foreground/60 leading-relaxed font-light">{step.desc}</p>
                      </Reveal>
                    </div>

                    {/* Spacer for desktop */}
                    <div className="hidden md:block w-[45%]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 3: Custom Destinations (Postcards layout) */}
      <section id="destinations" className="max-w-7xl mx-auto px-6 py-32 space-y-20 border-b border-gold/10">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold block">{text.regionsSub}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-royal tracking-tight font-serif">{text.regionsTitle}</h2>
          <p className="text-base text-foreground/50 leading-relaxed font-light">{text.regionsDesc}</p>
          <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
        </div>

        {/* Large, Beautiful Cards - 6 cards, bigger heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {states.slice(0, 6).map((st: any, i: number) => {
            const stateTitle = st.name?.[locale] || st.name?.[lang] || st.name?.en || st.title?.[locale] || st.title?.en || st.id;
            const stateTagline = st.tagline?.[locale] || st.tagline?.[lang] || st.tagline?.en || st.description?.[locale] || st.description?.[lang] || st.description?.en || "";
            const stateSlug = st.slug ? (typeof st.slug === "object" ? (st.slug[locale] || st.slug.en || st.id) : st.slug) : st.id;
            return (
              <Reveal key={stateSlug} delay={i * 80}>
                <Link href={getLocalizedDestinationsPath(locale, stateSlug)} className="group block h-full perspective-1000">
                  <div className="card-3d bg-white border border-[#C5A862]/10 overflow-hidden shadow-md flex flex-col h-full">
                    <div className="h-80 overflow-hidden relative shrink-0">
                      <Image 
                        src={getHighResImageUrl(st.image)} 
                        alt={stateTitle} 
                        fill 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-90" />
                      <span className="absolute top-5 left-5 bg-royal/95 border border-gold/20 text-gold text-[9px] uppercase tracking-widest font-bold px-4 py-2 rounded-full shadow-md">
                        {st.region} India
                      </span>
                    </div>
                    <div className="p-8 space-y-4 bg-white flex flex-col flex-grow justify-between">
                      <div className="space-y-2.5">
                        <h3 className="text-xl md:text-2xl font-bold text-royal group-hover:text-gold transition-colors font-serif line-clamp-1">
                          {stateTitle}
                        </h3>
                        <p className="text-xs md:text-sm text-foreground/60 line-clamp-3 leading-relaxed font-light">
                          {stateTagline}
                        </p>
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-1.5 pt-4 border-t border-[#C5A862]/10 mt-auto transition-transform duration-300 group-hover:translate-x-1">
                        <span>Explore Region</span>
                        <ArrowUpRight className="w-4 h-4 text-gold" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* VIEW ALL Destinations button */}
        <div className="text-center pt-8">
          <Link href={getLocalizedDestinationsPath(locale)} className="inline-flex items-center gap-2 bg-royal hover:bg-royal/90 text-white text-base font-bold uppercase tracking-widest px-10 py-5 rounded-full transition-transform hover:scale-105 shadow-xl">
            <span>View All Destinations</span>
            <ArrowRight className="w-5 h-5 text-gold" />
          </Link>
        </div>
      </section>

      {/* SECTION 3.5: International Destinations (3-Card Widescreen Section) */}
      <section id="international-destinations" className="max-w-7xl mx-auto px-6 py-24 space-y-16 border-b border-gold/10">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A862] font-bold block">
            {locale === "es" ? "Viajes Internacionales Exóticos" : locale === "pt" ? "Viagens Internacionais Exóticas" : "Exotic Outbound Destinations"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2A1E] tracking-tight font-serif">
            {locale === "es" ? "Destinos Internacionales" : locale === "pt" ? "Destinos Internacionais" : "International Destinations"}
          </h2>
          <p className="text-base text-foreground/60 leading-relaxed font-light">
            {locale === "es" 
              ? "Descubra nuestros itinerarios privados de lujo a destinos exóticos internacionales como Bali, Maldivas y Tailandia."
              : locale === "pt"
              ? "Descubra nossos itinerários privados de luxo para destinos internacionais exóticos como Bali, Maldivas e Tailândia."
              : "Discover our bespoke luxury private journeys to exotic international destinations including Bali, Maldives, and Thailand."}
          </p>
          <div className="h-px w-20 bg-[#C5A862]/30 mx-auto mt-2" />
        </div>

        {/* 3 Large Widescreen Cards for International Destinations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(outboundDestinations.length > 0 ? outboundDestinations : [
            {
              slug: "bali-indonesia",
              name: { en: "Bali, Indonesia", es: "Bali, Indonesia", pt: "Bali, Indonésia" },
              tagline: { en: "Tropical Palaces, Emerald Terraces & Island Luxury", es: "Palacios Tropicales y Lujo en la Isla", pt: "Palácios Tropicais e Luxo na Ilha" },
              heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800"
            },
            {
              slug: "maldives",
              name: { en: "Maldives Islands", es: "Islas Maldivas", pt: "Ilhas Maldivas" },
              tagline: { en: "Overwater Villas, Turquoise Atolls & Private Beaches", es: "Villas Sobre Agua y Playas Privadas", pt: "Villas Sobre Água e Praias Privadas" },
              heroImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800"
            },
            {
              slug: "thailand",
              name: { en: "Thailand & Bangkok", es: "Tailandia y Bangkok", pt: "Tailândia e Bangcoc" },
              tagline: { en: "Golden Temples, Floating Markets & Island Retreats", es: "Templos Dorados y Mercados Flotantes", pt: "Templos Dourados e Mercados Flutuantes" },
              heroImage: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=800"
            }
          ]).slice(0, 3).map((item: any, idx: number) => {
            const title = typeof item.name === 'string' ? item.name : (item.name?.[locale] || item.name?.en || item.title?.[locale] || item.title?.en || item.slug);
            const tagline = typeof item.tagline === 'string' ? item.tagline : (item.tagline?.[locale] || item.tagline?.en || item.description?.[locale] || item.description?.en || "");
            const itemSlug = item.slug || item.id;
            const bgImage = item.heroImage || item.image || item.coverImage || "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800";

            return (
              <Reveal key={itemSlug} delay={idx * 100}>
                <Link href={`/${locale}/international-trips/${itemSlug}`} className="group block h-full">
                  <div className="bg-white border-2 border-[#C5A862]/20 rounded-3xl overflow-hidden shadow-md flex flex-col h-full hover:border-[#C5A862] hover:shadow-xl transition-all duration-500">
                    <div className="h-64 overflow-hidden relative shrink-0">
                      <img 
                        src={getHighResImageUrl(bgImage)} 
                        alt={title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                      <span className="absolute top-4 left-4 bg-[#C5A862] text-[#0A2A1E] text-[9px] uppercase tracking-widest font-extrabold px-3 py-1.5 rounded-full shadow-md">
                        International Outbound
                      </span>
                    </div>
                    <div className="p-6 space-y-3 bg-white flex flex-col flex-grow justify-between">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold font-serif text-[#0A2A1E] group-hover:text-[#C5A862] transition-colors line-clamp-1">
                          {title}
                        </h3>
                        <p className="text-xs text-foreground/65 line-clamp-2 leading-relaxed font-light">
                          {tagline}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-[#C5A862]/15 flex items-center justify-between text-xs font-bold text-[#C5A862] group-hover:translate-x-1 transition-transform">
                        <span>View International Tour</span>
                        <ArrowRight className="w-4 h-4 text-[#C5A862]" />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* View All International Trips Button */}
        <div className="text-center pt-4">
          <Link 
            href={`/${locale}/international-trips`} 
            className="inline-flex items-center gap-2 bg-[#0A2A1E] hover:bg-[#C5A862] text-white hover:text-[#0A2A1E] text-xs font-extrabold uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:scale-105"
          >
            <span>Explore All International Trips</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>


      {/* SECTION 3.5: Expanding Monuments Accordion Row (Screenshot 2 Theme) */}
      <MonumentsAccordion locale={locale} monuments={accordionMonuments} />

      {/* Monuments CTA */}
      <section className="max-w-7xl mx-auto px-6 py-10 text-center">
        <Link href={`/${locale}/monuments`} className="inline-flex items-center gap-2 bg-royal hover:bg-royal/90 text-white text-sm font-bold uppercase tracking-widest px-10 py-5 rounded-full transition-transform hover:scale-105 shadow-xl">
          <span>{locale === "es" ? "Ver Todos los Monumentos" : locale === "pt" ? "Ver Todos os Monumentos" : "View All Monuments"}</span>
          <ArrowRight className="w-5 h-5 text-gold" />
        </Link>
      </section>

      {/* SECTION 4: Curated Packages (Signature Cards Grid) */}
      <section className="max-w-7xl mx-auto px-6 py-32 space-y-20 border-b border-gold/10">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold block">{text.packagesSub}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-royal tracking-tight">{text.packagesTitle}</h2>
          <p className="text-base text-foreground/50 leading-relaxed font-light">{text.packagesDesc}</p>
          <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
        </div>

        {/* Large, Beautiful Cards (Matched with tour packages catalog page styling) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {tourPackages.map((pkg: any, i: number) => {
            const priceInfo = getPackagePriceInfo(pkg, locale);
            return (
            <Reveal key={pkg.slug} delay={i * 80}>
              <div className="card-3d bg-white border border-[#C5A862]/10 overflow-hidden shadow-md flex flex-col h-full transition-all duration-500 hover:border-[#C5A862]/30 group perspective-1000">
                <div className="relative h-64 overflow-hidden shrink-0">
                  <Image 
                    src={getHighResImageUrl(pkg.image)} 
                    alt={pkg.title?.[locale] || pkg.title?.en} 
                    fill 
                    quality={95}
                    unoptimized={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-65" />
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
                    <span className="bg-white/95 backdrop-blur-sm text-royal text-[9px] uppercase tracking-wider font-extrabold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gold" />
                      {pkg.durationDays} {text.days}
                    </span>
                    {priceInfo.saleBadge && (
                      <span className="bg-[#B91C1C] text-white text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1 animate-pulse">
                        <Tag className="w-3 h-3 text-amber-300" />
                        {priceInfo.saleBadge}
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-gold/90 backdrop-blur-sm text-royal text-[9px] uppercase tracking-wider font-black px-3 py-1.5 rounded-full">
                      {text.privateTour}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#0A2A1E] text-gold text-[8px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-gold/20">
                      {pkg.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow bg-white justify-between">
                  <div className="space-y-4">
                    <h3 className="text-xl font-serif font-medium text-royal leading-snug">
                      {pkg.title?.[locale] || pkg.title?.en}
                    </h3>
                    <p className="text-xs md:text-sm text-foreground/55 leading-relaxed font-light">
                      {pkg.tagline?.[locale] || pkg.tagline?.en}
                    </p>

                    {/* Dynamic Highlights from package data */}
                    <div className="pt-4 border-t border-[#C5A862]/10 space-y-3">
                      <span className="text-[10px] uppercase tracking-wider font-extrabold text-gold block">{text.inclusionsTitleText}</span>
                      <div className="space-y-2">
                        {pkg.highlights && pkg.highlights.slice(0, 4).map((hl: any, idx: number) => {
                          const label = hl.title
                            ? (hl.title[locale as "en" | "es" | "pt"] || hl.title.en)
                            : (hl[locale as "en" | "es" | "pt"] || hl.en);
                          if (!label) return null;
                          return (
                            <div key={idx} className="flex items-start gap-2 text-xs text-foreground/65 font-light">
                              <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                              <span>{label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#C5A862]/15 flex justify-between items-center bg-white">
                    {priceInfo.isEnquireOnly ? (
                      <span className="text-[10px] font-extrabold tracking-wider uppercase text-gold">
                        {text.priceOnRequest}
                      </span>
                    ) : (
                      <div className="flex flex-col">
                        <span className="text-[9px] font-bold uppercase text-[#0A2A1E]/50 tracking-wider">
                          {locale === "es" ? "Desde" : locale === "pt" ? "A partir de" : "Starting From"}
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg font-serif font-extrabold text-[#0A2A1E]">
                            {priceInfo.formattedOfferPrice}
                          </span>
                          {priceInfo.hasDiscount && priceInfo.formattedOriginalPrice && (
                            <span className="text-xs text-[#0A2A1E]/40 line-through font-medium">
                              {priceInfo.formattedOriginalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                    <Link
                      href={`/${locale}/packages/${pkg.slug}`}
                      className="text-xs font-bold uppercase tracking-wider text-royal hover:text-gold flex items-center gap-1 transition-colors"
                    >
                      <span>{text.inquire}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
        </div>

        {/* VIEW ALL Packages button */}
        <div className="text-center pt-8">
          <Link href={`/${locale}/packages`} className="inline-flex items-center gap-2 bg-royal hover:bg-royal/90 text-white text-base md:text-lg font-bold uppercase tracking-widest px-10 py-5 rounded-full transition-transform hover:scale-105 shadow-xl">
            <span>View All Packages</span>
            <ArrowRight className="w-5 h-5 text-gold" />
          </Link>
        </div>
      </section>

      {/* SECTION 3.5: Iconic Attractions Showcase */}
      <section className="bg-white py-32 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold block">
              {locale === "es" ? "Atracciones Icónicas" : locale === "pt" ? "Atrações Icônicas" : "Iconic Attractions"}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-royal tracking-tight">
              {locale === "es" ? "Descubra Monumentos Icónicos" : locale === "pt" ? "Descubra Monumentos Icônicos" : "Discover Iconic Monuments"}
            </h2>
            <p className="text-base text-foreground/50 leading-relaxed font-light">
              {locale === "es" 
                ? "Explore los palacios reales, templos sagrados y monumentos históricos más majestuosos de la India." 
                : locale === "pt" 
                ? "Explore os palácios reais, templos sagrados e monumentos históricos mais majestosos da Índia." 
                : "Explore India's most majestic royal palaces, sacred temples, and historical monuments."}
            </p>
            <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {(featuredAttractions.slice(0, 3).length > 0 ? featuredAttractions.slice(0, 3) : [
              { name: "Taj Mahal", city: "Agra", state: "Uttar Pradesh", image: "/images/taj_mahal_sunrise.png", desc: "The legendary white marble monument of love, a UNESCO World Heritage site and global icon." },
              { name: "Amber Fort", city: "Jaipur", state: "Rajasthan", image: "/images/Jaipur.jpg", desc: "A magnificent hilltop fortress featuring detailed royal palace halls, courts, and lake views." },
              { name: "Mehrangarh Fort", city: "Jodhpur", state: "Rajasthan", image: "/images/rajasthan_fort_sunset.png", desc: "A massive fort overlooking the Blue City, housing royal relics, courtyards, and palace galleries." }
            ]).map((attraction: any, idx: number) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="group block bg-[#FAF8F5] border border-gold/10 overflow-hidden shadow-sm flex flex-col h-full rounded-2xl transition-all duration-300 hover:shadow-lg hover:border-gold/30">
                  <div className="h-64 overflow-hidden relative shrink-0">
                    <img 
                      src={getHighResImageUrl(attraction.image)} 
                      alt={attraction.name} 
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 text-white text-xs font-semibold flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gold" />
                      <span>{attraction.city}, {attraction.state}</span>
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-royal group-hover:text-gold transition-colors font-serif">
                        {attraction.name}
                      </h3>
                      <p className="text-xs text-foreground/60 leading-relaxed font-light line-clamp-3">
                        {attraction.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link href={`/${locale}/attractions`} className="inline-flex items-center gap-2 bg-royal hover:bg-royal/90 text-white text-sm font-bold uppercase tracking-widest px-10 py-5 rounded-full transition-transform hover:scale-105 shadow-xl">
              <span>{locale === "es" ? "Ver Todas las Atracciones" : locale === "pt" ? "Ver Todas as Atrações" : "Explore All Attractions"}</span>
              <ArrowRight className="w-5 h-5 text-gold" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4.5: Our Premium Booking Standard - Premium Bento Grid */}
      <section className="bg-[#0A2A1E] border-b border-gold/10 py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#C5A862_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Header text */}
            <Reveal direction="left" className="space-y-8">
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold">{text.inclusionsSub}</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight font-serif">
                {text.inclusionsTitle}
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed font-light max-w-md">
                {text.inclusionsDesc}
              </p>
              <div className="h-[2px] w-20 bg-gold/30" />
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-royal font-bold uppercase text-sm tracking-wider px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                <span>Start Planning</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>

            {/* Right: Premium cards grid */}
            <Reveal direction="right" delay={200} className="grid grid-cols-2 gap-4">
              {[
                { icon: Compass, title: text.inc1Title, desc: text.inc1Desc, delay: 50 },
                { icon: Landmark, title: text.inc2Title, desc: text.inc2Desc, delay: 120 },
                { icon: Coffee, title: text.inc3Title, desc: text.inc3Desc, delay: 190 },
                { icon: Shield, title: text.inc4Title, desc: text.inc4Desc, delay: 260 }
              ].map((inc, i) => {
                const Icon = inc.icon;
                return (
                  <div
                    key={i}
                    className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/30 p-6 transition-all duration-500 space-y-4"
                  >
                    <div className="w-10 h-10 bg-gold/15 group-hover:bg-gold/25 flex items-center justify-center transition-all duration-300">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <h4 className="text-sm font-bold text-white leading-snug font-serif">{inc.title}</h4>
                    <p className="text-[11px] text-white/50 leading-relaxed font-light">{inc.desc}</p>
                  </div>
                );
              })}
            </Reveal>
          </div>
        </div>
      </section>


      {/* SECTION 5.5: Traveler Information 3D Carousel (Screenshot 3 Theme) */}
      <TravelerInfoCarousel locale={locale} cardImages={travelInfoCardImages} />

      {/* SECTION 6: Customer Testimonials (Infinite Scroll Slider) */}
      <TestimonialSlider 
        locale={locale} 
        reviews={testimonials.slice(0, 5)} 
        labels={{ sub: text.testimonialsSub, title: text.testimonialsTitle }} 
      />

      {/* SECTION 7: Curated Concierge FAQs */}
      <section className="max-w-4xl mx-auto px-6 py-32 space-y-20 border-b border-gold/10">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold block">{text.faqSub}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-royal tracking-tight font-serif">{text.faqTitle}</h2>
          <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
        </div>

        <div className="space-y-6">
          {homepageFaqs.map((f: any, i: number) => (
            <details key={i} className="group border-b border-gold/10 pb-6" open={i === 0}>
              <summary className="flex justify-between items-center font-bold text-royal cursor-pointer list-none text-lg md:text-xl">
                <span>{f.q}</span>
                <span className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center text-gold text-xs transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="text-sm md:text-base text-foreground/60 mt-4 leading-relaxed pl-3 border-l border-gold/25 font-light">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* SECTION 8: Blog Log */}
      {blogs.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-32 space-y-20 border-b border-gold/10">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold block">{text.blogsSub}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-royal tracking-tight font-serif">{text.blogsTitle}</h2>
            <p className="text-sm text-foreground/50 font-light">Curated stories, travel guides, and cultural insights from India's most enchanting destinations.</p>
            <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
          </div>

          {/* Large, Beautiful Cards with Read More */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.slice(0, 6).map((post: any, i: number) => (
              <Reveal key={post.slug} delay={i * 80}>
                <div className="group card-3d bg-white border border-[#C5A862]/10 overflow-hidden shadow-md flex flex-col h-full perspective-1000">
                  <div className="h-56 overflow-hidden shrink-0 relative">
                    <img src={getHighResImageUrl(post.featuredImage)} alt={post.title?.en} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-65" />
                    <span className="absolute top-4 left-4 bg-gold text-royal text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-7 flex flex-col flex-grow justify-between space-y-5">
                    <div className="space-y-3">
                      <h3 className="text-base font-bold text-royal group-hover:text-gold transition-colors leading-snug line-clamp-2 font-serif">
                        {post.title?.[locale] || post.title?.en}
                      </h3>
                      <p className="text-xs text-foreground/55 leading-relaxed line-clamp-2 font-light">
                        {post.excerpt?.[locale] || post.excerpt?.en}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-[#C5A862]/10">
                      <span className="text-[9px] text-foreground/45 uppercase tracking-widest font-light">
                        {post.readingTime} Min Read · {post.author}
                      </span>
                      <Link
                        href={`/${locale}/blog/${post.slug}`}
                        className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-gold hover:text-royal transition-colors group/btn"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* VIEW ALL Blogs button */}
          <div className="text-center pt-4">
            <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 bg-royal hover:bg-royal/90 text-white text-sm font-bold uppercase tracking-widest px-10 py-5 rounded-full transition-transform hover:scale-105 shadow-xl">
              <span>View All Blogs</span>
              <ArrowRight className="w-5 h-5 text-gold" />
            </Link>
          </div>
        </section>
      )}

      {/* SECTION 9: Tailored Inquiry Callout Panel */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <InquiryForm locale={locale} />
      </section>

    </div>
  );
}
