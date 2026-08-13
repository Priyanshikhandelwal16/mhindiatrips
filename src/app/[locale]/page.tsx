import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { getStatesAction, getTourPackagesAction, getBlogsAction, getTestimonialsAction, getFoodsAction, getPageByIdAction } from "@/app/actions/queries";
import InquiryForm from "@/components/common/InquiryForm";
import Reveal from "@/components/home/Reveal";
import HeroSlider from "@/components/home/HeroSlider";
import StatCounter from "@/components/home/StatCounter";
import { 
  MapPin, Clock, ArrowRight, Star, Heart, Compass, Sparkles, 
  Award, Shield, Calendar, BookOpen, Coffee, Landmark, ArrowUpRight 
} from "lucide-react";

// Lazy load heavy interactive components
const TestimonialSlider = dynamic(() => import("@/components/home/TestimonialSlider"), { ssr: true });
const MonumentsAccordion = dynamic(() => import("@/components/home/MonumentsAccordion"), { ssr: true });
const TravelerInfoCarousel = dynamic(() => import("@/components/home/TravelerInfoCarousel"), { ssr: true });
const ItineraryPlanner = dynamic(() => import("@/components/home/ItineraryPlanner"), { ssr: true });

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  // Fetch content dynamically from query database mock layer
  const states = await getStatesAction();
  const tourPackages = await getTourPackagesAction();
  const blogs = await getBlogsAction();
  const testimonials = await getTestimonialsAction();
  const pageData = await getPageByIdAction("homepage");
  const monumentsPageData = await getPageByIdAction("monuments");
  const accordionMonuments = monumentsPageData?.content?.featuredMonuments || [];

  const labels: Record<string, any> = {
    en: {
      heroSub: "BESPOKE PRIVATE TOURS",
      heroTitle: "Experience India in Absolute Luxury",
      heroDesc: "Curated itineraries featuring private guides, heritage palace hotels, and custom travel arrangements.",
      cta: "Explore Our Regions",
      inquireCTA: "Plan Your Journey",
      whySub: "Our Philosophy",
      whyTitle: "Why Travelers Choose MH India Trips",
      regionsSub: "Custom Destinations",
      regionsTitle: "Explore Diverse Horizons",
      regionsDesc: "From the grand palaces of Rajasthan to the serene canals of Kerala, discover a tailored world.",
      packagesSub: "Featured Journeys",
      packagesTitle: "Signature Travel Packages",
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
      customizableText: "100% Customizable Private Itinerary"
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
      regionsTitle: "Explore Horizontes Diversos",
      regionsDesc: "Desde los grandes palacios de Rajasthan hasta los serenos canales de Kerala.",
      packagesSub: "Viajes Destacados",
      regionsTitleCustom: "Explorar Regiones",
      packagesTitle: "Paquetes de Viajes Exclusivos",
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
      customizableText: "Itinerario Privado 100% Personalizable"
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
      regionsTitle: "Explore Horizontes Diversos",
      regionsDesc: "Dos grandes palácios do Rajastão aos canais serenos de Kerala.",
      packagesSub: "Viagens Em Destaque",
      packagesTitle: "Pacotes de Viagens Exclusivos",
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
      customizableText: "Itinerário Privado 100% Personalizável"
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

  // CMS-driven content (read from database, fallback to defaults)
  const cms = pageData?.content || {};
  const lang = (locale === "es" || locale === "pt") ? locale : "en";

  // Build slides from CMS data
  const cmsSlides = cms.slides || [];
  const slides = cmsSlides.length > 0 ? cmsSlides.map((s: any) => {
    const resolveField = (fieldVal: any, fallbackVal: string) => {
      if (!fieldVal) return fallbackVal;
      if (typeof fieldVal === "string") return fieldVal;
      if (typeof fieldVal === "object") {
        return fieldVal[lang] || fieldVal.en || fallbackVal;
      }
      return fallbackVal;
    };

    return {
      image: s.image,
      sub: resolveField(s.sub, text.heroSub),
      title: resolveField(s.title, text.heroTitle),
      desc: resolveField(s.desc, text.heroDesc),
      location: resolveField(s.location, ""),
      objectPosition: s.objectPosition || "center 30%",
      cta1Text: resolveField(s.cta1Text, text.cta),
      cta1Link: s.cta1Link || "/destinations",
      cta2Text: resolveField(s.cta2Text, text.inquireCTA),
      cta2Link: s.cta2Link || "/contact"
    };
  }) : [
    { image: "/images/taj_mahal_sunrise.png", sub: text.heroSub, title: text.heroTitle, desc: text.heroDesc, location: "Taj Mahal, Agra", objectPosition: "center 28%", cta1Text: text.cta, cta1Link: "/packages", cta2Text: text.inquireCTA, cta2Link: "/contact" },
    { image: "/images/rajasthan_fort_sunset.png", sub: "HERITAGE PALACES", title: "The Royal Magic of Rajasthan", desc: "Explore desert dunes, medieval forts, and dine inside authentic royal palaces.", location: "Mehrangarh Fort, Jodhpur", objectPosition: "center 35%", cta1Text: "Explore Rajasthan", cta1Link: "/destinations/rajasthan", cta2Text: "Royal Packages", cta2Link: "/packages" },
    { image: "/images/kerala_backwaters_houseboat.png", sub: "HOLISTIC RETREATS", title: "Tropical Serenity in Kerala", desc: "Cruise through emerald backwaters and rejuvenate with Ayurvedic rituals.", location: "Backwaters, Alleppey", objectPosition: "center 40%", cta1Text: "Kerala Retreats", cta1Link: "/destinations/kerala", cta2Text: "Plan My Trip", cta2Link: "/contact" },
    { image: "/images/Jaipur.jpg", sub: "ROYAL ARCHITECTURE", title: "Pink City Wonders of Jaipur", desc: "Marvel at the astronomical Jantar Mantar and the beautiful honeycomb structure of Hawa Mahal.", location: "Hawa Mahal, Jaipur", objectPosition: "center 30%", cta1Text: "Explore Jaipur", cta1Link: "/destinations/rajasthan", cta2Text: "Inquire Now", cta2Link: "/contact" },
    { image: "/images/Udaipur.jpg", sub: "ROMANTIC ESCAPES", title: "Udaipur: Venice of the East", desc: "Sail across shimmering Lake Pichola and stay in floating marble palaces under the stars.", location: "Lake Pichola, Udaipur", objectPosition: "center 30%", cta1Text: "See Packages", cta1Link: "/packages", cta2Text: "Inquire Now", cta2Link: "/contact" },
    { image: "/images/varanasi.jpg", sub: "SACRED PLACES", title: "Spiritual Awakenings in Varanasi", desc: "Witness the intense devotion of evening Ganga Aarti ceremonies by the sacred ghats.", location: "Ganga Ghats, Varanasi", objectPosition: "center 30%", cta1Text: "Spiritual Itineraries", cta1Link: "/destinations/uttar-pradesh", cta2Text: "Inquire Now", cta2Link: "/contact" },
    { image: "/images/goa.jpg", sub: "BEACH LUXURY", title: "Golden Sands & Heritage of Goa", desc: "Relax on pristine tropical beaches and explore colonial Portuguese churches in old Goa.", location: "Baga & Old Goa, Goa", objectPosition: "center 30%", cta1Text: "Explore Goa", cta1Link: "/destinations/goa", cta2Text: "Plan Itinerary", cta2Link: "/contact" },
    { image: "/images/munnar.jpg", sub: "HIMALAYAS & HILLS", title: "Misty Tea Hills of Munnar", desc: "Breathe the fresh mountain air of rolling tea estates and misty peaks in South India.", location: "Munnar Tea Estates, Kerala", objectPosition: "center 30%", cta1Text: "Kerala Guides", cta1Link: "/destinations/kerala", cta2Text: "Inquire Now", cta2Link: "/contact" },
    { image: "/images/ranthambore.jpg", sub: "WILDLIFE ADVENTURES", title: "Tiger Safaris in Ranthambore", desc: "Search for the majestic Royal Bengal Tiger in the ancient hunting grounds of Maharajas.", location: "National Park, Ranthambore", objectPosition: "center 30%", cta1Text: "Wildlife Packages", cta1Link: "/packages", cta2Text: "Inquire Now", cta2Link: "/contact" },
    { image: "/images/andaman islands.jpg", sub: "ISLAND GETAWAYS", title: "Andaman Islands: Tropical Blue Havens", desc: "Swim in turquoise waters and dive into the pristine marine life and coral reefs of Havelock.", location: "Radhanagar Beach, Havelock", objectPosition: "center 30%", cta1Text: "Island Tours", cta1Link: "/packages", cta2Text: "Inquire Now", cta2Link: "/contact" }
  ];

  // CMS stats
  const cmsStats = cms.stats || [];
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

      {/* SECTION 1.5: Infographic Circular Stats (Screenshot 1 Theme) */}
      <section className="bg-cream py-24 border-b border-gold/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
            {(cmsStats.length > 0 ? cmsStats : [
              { value: 12, suffix: "", label: { en: "Years of experience", es: "Años de experiencia", pt: "Anos de experiência" } },
              { value: 97, suffix: "%", label: { en: "Retention rate", es: "Tasa de retención", pt: "Taxa de retenção" } },
              { value: 8, suffix: "k", label: { en: "Tours completed", es: "Tour completado", pt: "Tour completado" } },
              { value: 19, suffix: "k", label: { en: "Happy clients", es: "Cliente feliz", pt: "Cliente feliz" } }
            ]).map((stat: any, i: number) => (
              <Reveal key={i} delay={50 + i * 70} className="text-center space-y-5">
                <div className="relative w-44 h-44 rounded-full flex flex-col items-center justify-center bg-white border border-[#C5A862]/30 shadow-md mx-auto">
                  <div className="absolute -inset-1.5 rounded-full border border-[#C5A862]/10 scale-[1.04]" />
                  <div className="absolute bottom-4 right-2 w-3 h-3 rounded-full bg-gold border-2 border-white shadow-sm" />
                  <span className="text-4xl font-normal text-royal font-serif">
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

      {/* SECTION 2: The Philosophy Section (Split screen layout) */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center border-b border-gold/10">
        <Reveal direction="left" className="space-y-8">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold flex items-center gap-1.5">
            <Compass className="w-5 h-5" />
            <span>{text.whySub}</span>
          </span>
          {/* Section Heading: 40px–48px */}
          <h2 className="text-4xl md:text-5xl font-bold text-royal leading-tight font-serif">
            {text.whyTitle}
          </h2>
          <p className="text-base md:text-lg text-foreground/60 leading-relaxed font-light">
            We believe travel is not about ticking off boxes; it is a fine art. For over 15 years, our on-ground concierge desks have unlocked private access to monuments, designed authentic cultural encounters, and hosted global travelers in India’s finest grand suites.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-6">
            <div className="space-y-2">
              <span className="text-4xl font-black text-gold">24/7</span>
              <p className="text-xs uppercase tracking-wider text-foreground/50 font-bold">On-Ground Support</p>
            </div>
            <div className="space-y-2">
              <span className="text-4xl font-black text-gold">100%</span>
              <p className="text-xs uppercase tracking-wider text-foreground/50 font-bold">Private & Guided</p>
            </div>
          </div>
        </Reveal>
        
        {/* Postcard frame */}
        <Reveal direction="right" delay={200} className="relative p-4 bg-white border border-gold/15 shadow-2xl shadow-royal/5">
          <div className="overflow-hidden h-[480px]">
            <img src={cmsPhilosophy.image || "/images/rajasthan_fort_sunset.png"} alt="Philosophy" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-royal text-white p-8 max-w-sm space-y-3 shadow-2xl hidden md:block border border-gold/15">
            <h4 className="font-bold text-gold text-base">Palace Heritage</h4>
            <p className="text-xs text-white/70 leading-relaxed font-light">We organize private dinners inside authentic lake palaces and medieval desert forts.</p>
          </div>
        </Reveal>
      </section>

      {/* SECTION 2.5: How It Works / Custom Tour Planning - Timeline Design */}
      <section className="bg-[#FAF8F5] border-t border-b border-gold/10 py-28 relative overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#C5A862_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {/* Header */}
          <Reveal className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold block">{text.howItWorksSub}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-royal tracking-tight font-serif">{text.howItWorksTitle}</h2>
            <p className="text-sm md:text-base text-foreground/50 leading-relaxed font-light">{text.howItWorksDesc}</p>
            <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
          </Reveal>

          {/* Timeline Layout */}
          <div className="relative">
            {/* Horizontal connector line (desktop only) */}
            <div className="hidden md:block absolute top-[2.75rem] left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[
                { num: "01", title: text.step1Title, desc: text.step1Desc, icon: "✦", delay: 50 },
                { num: "02", title: text.step2Title, desc: text.step2Desc, icon: "◆", delay: 150 },
                { num: "03", title: text.step3Title, desc: text.step3Desc, icon: "★", delay: 250 }
              ].map((step, i) => (
                <Reveal key={step.num} delay={step.delay} className="relative flex flex-col items-center text-center">
                  {/* Step circle */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 rounded-full bg-white border-2 border-gold/30 shadow-lg flex flex-col items-center justify-center group hover:bg-gold hover:border-gold transition-all duration-500 cursor-default">
                      <span className="text-[10px] font-black uppercase tracking-widest text-gold group-hover:text-royal transition-colors">{step.num}</span>
                    </div>
                    {/* Gold dot connector */}
                    <div className="hidden md:block absolute top-1/2 -right-6 w-3 h-3 rounded-full bg-gold/40 transform -translate-y-1/2" style={{ display: i === 2 ? 'none' : undefined }} />
                  </div>

                  {/* Content Card */}
                  <div className="bg-white border border-gold/10 p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 space-y-4 w-full">
                    <h3 className="text-xl font-bold text-royal font-serif">{step.title}</h3>
                    <div className="h-px w-10 bg-gold/30 mx-auto" />
                    <p className="text-sm text-foreground/60 leading-relaxed font-light">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
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
          {states.slice(0, 6).map((st: any, i: number) => (
            <Reveal key={st.slug} delay={i * 80}>
              <Link href={`/${locale}/destinations/${st.slug}`} className="group block h-full perspective-1000">
                <div className="card-3d bg-white border border-[#C5A862]/10 overflow-hidden shadow-md flex flex-col h-full">
                  <div className="h-80 overflow-hidden relative shrink-0">
                    <img src={st.image} alt={st.title?.en} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-90" />
                    <span className="absolute top-5 left-5 bg-royal/95 border border-gold/20 text-gold text-[9px] uppercase tracking-widest font-bold px-4 py-2 rounded-full shadow-md">
                      {st.region} India
                    </span>
                  </div>
                  <div className="p-8 space-y-4 bg-white flex flex-col flex-grow justify-between">
                    <div className="space-y-2.5">
                      <h3 className="text-xl md:text-2xl font-bold text-royal group-hover:text-gold transition-colors font-serif">
                        {st.title?.[locale] || st.title?.en}
                      </h3>
                      <p className="text-xs md:text-sm text-foreground/60 line-clamp-3 leading-relaxed font-light">
                        {st.tagline?.[locale] || st.tagline?.en}
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
          ))}
        </div>

        {/* VIEW ALL Destinations button */}
        <div className="text-center pt-8">
          <Link href={`/${locale}/destinations`} className="inline-flex items-center gap-2 bg-royal hover:bg-royal/90 text-white text-base font-bold uppercase tracking-widest px-10 py-5 rounded-full transition-transform hover:scale-105 shadow-xl">
            <span>View All Destinations</span>
            <ArrowRight className="w-5 h-5 text-gold" />
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

        {/* Large, Beautiful Cards (Increased dimensions, larger padding) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {tourPackages.slice(0, 10).map((pkg: any, i: number) => (
            <Reveal key={pkg.slug} delay={i * 80}>
              <Link href={`/${locale}/packages/${pkg.slug}`} className="group block h-full perspective-1000">
                <div className="card-3d bg-white border border-[#C5A862]/10 overflow-hidden shadow-md flex flex-col h-full">
                  <div className="relative h-64 shrink-0 overflow-hidden">
                    <img src={pkg.image} alt={pkg.title?.en} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-80" />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <span className="bg-royal/95 text-gold text-[9px] uppercase font-bold tracking-widest px-3.5 py-1.5 rounded-full shadow-md border border-[#C5A862]/20">
                        {pkg.durationDays} {locale === "es" ? "Días" : locale === "pt" ? "Dias" : "Days"}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-gold text-royal text-[8px] font-bold uppercase tracking-widest px-3 py-1 rounded-md shadow-sm">
                        {text.customizableText}
                      </span>
                    </div>
                  </div>
                  {/* Padding: p-8 */}
                  <div className="p-8 flex flex-col justify-between flex-grow bg-white space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-xl font-serif font-medium text-royal group-hover:text-gold transition-colors leading-snug">
                        {pkg.title?.[locale] || pkg.title?.en}
                      </h3>
                      <p className="text-xs md:text-sm text-foreground/60 line-clamp-3 leading-relaxed font-light">
                        {pkg.tagline?.[locale] || pkg.tagline?.en}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#C5A862]/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-auto">
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase tracking-wider text-foreground/45 font-bold">{locale === "es" ? "Tarifa Estándar" : "Standard Rate"}</span>
                        <span className="text-sm font-bold text-royal font-serif">{text.fromPrice}</span>
                      </div>
                      <span className="bg-transparent hover:bg-gold border border-gold hover:border-gold text-gold hover:text-[#0A2A1E] text-[9px] font-bold uppercase tracking-wider py-2.5 px-4 rounded-full transition-all duration-300 inline-flex items-center gap-1 shadow-sm">
                        <span>{text.exploreBtn}</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* VIEW ALL Packages button */}
        <div className="text-center pt-8">
          <Link href={`/${locale}/packages`} className="inline-flex items-center gap-2 bg-royal hover:bg-royal/90 text-white text-base md:text-lg font-bold uppercase tracking-widest px-10 py-5 rounded-full transition-transform hover:scale-105 shadow-xl">
            <span>View All Packages</span>
            <ArrowRight className="w-5 h-5 text-gold" />
          </Link>
        </div>
      </section>

      {/* SECTION 3.5: Interactive Bespoke Itinerary Planner */}
      <ItineraryPlanner locale={locale} />

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


      {/* SECTION 5: Gastronomy Preview (Curated Culinary Card) */}
      <section className="max-w-7xl mx-auto px-6 py-32 border-b border-gold/10 space-y-16">
        <div className="bg-royal border border-gold/15 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 relative shadow-2xl">
          <div className="lg:col-span-5 h-[400px] lg:h-auto relative overflow-hidden">
            <img src={cmsFoodSection.image || "/images/indian_cuisine_feast.png"} alt="Culinary Spices" loading="lazy" className="w-full h-full object-cover absolute inset-0 animate-kenburns" />
          </div>
          <div className="lg:col-span-7 p-10 md:p-20 flex flex-col justify-center space-y-8 text-white bg-royal relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/5 via-transparent to-transparent pointer-events-none" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold">{text.foodSub}</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{text.foodTitle}</h2>
            <p className="text-sm md:text-base text-white/70 leading-relaxed font-light max-w-xl">
              India's cultural geography is best tasted. From royal Mughal slow-cooked saffron curries to local coconut fish marinades, we map private food walks and dining logs.
            </p>
            <div className="pt-4">
              <Link href={`/${locale}/food`} className="bg-gold hover:bg-gold-light text-royal text-base md:text-lg font-bold uppercase tracking-widest px-10 py-5 rounded-full transition-transform hover:scale-105 inline-block shadow-lg">
                Explore Food Guide
              </Link>
            </div>
          </div>
        </div>

        {/* VIEW ALL Food Experiences button */}
        <div className="text-center pt-8">
          <Link href={`/${locale}/food`} className="inline-flex items-center gap-2 bg-royal hover:bg-royal/90 text-white text-base md:text-lg font-bold uppercase tracking-widest px-10 py-5 rounded-full transition-transform hover:scale-105 shadow-xl">
            <span>{text.viewAll}</span>
            <ArrowRight className="w-5 h-5 text-gold" />
          </Link>
        </div>
      </section>

      {/* SECTION 5.5: Traveler Information 3D Carousel (Screenshot 3 Theme) */}
      <TravelerInfoCarousel locale={locale} />

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
                    <img src={post.featuredImage} alt={post.title?.en} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" />
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
