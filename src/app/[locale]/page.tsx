import React from "react";
import Link from "next/link";
import { getStatesAction, getTourPackagesAction, getBlogsAction, getTestimonialsAction, getFoodsAction } from "@/app/actions/queries";
import InquiryForm from "@/components/common/InquiryForm";
import Reveal from "@/components/home/Reveal";
import HeroSlider from "@/components/home/HeroSlider";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import MonumentsAccordion from "@/components/home/MonumentsAccordion";
import TravelerInfoCarousel from "@/components/home/TravelerInfoCarousel";
import StatCounter from "@/components/home/StatCounter";
import ItineraryPlanner from "@/components/home/ItineraryPlanner";
import { 
  MapPin, Clock, ArrowRight, Star, Heart, Compass, Sparkles, 
  Award, Shield, Calendar, BookOpen, Coffee, Landmark, ArrowUpRight 
} from "lucide-react";

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
      blogsSub: "Travel Log",
      blogsTitle: "Stories & Inspiration",
      faqSub: "Concierge Guide",
      faqTitle: "Planning Your Voyage",
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
      blogsSub: "Diario de Viaje",
      blogsTitle: "Historias e Inspiración",
      faqSub: "Guía de Conserjería",
      faqTitle: "Planificando Su Viaje",
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
      blogsSub: "Diário de Viagem",
      blogsTitle: "Histórias e Inspiração",
      faqSub: "Guia de Concierge",
      faqTitle: "Planejando Sua Viagem",
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

  const homepageFaqs = [
    {
      q: locale === "es" ? "¿Es seguro viajar a la India?" : locale === "pt" ? "É seguro viajar para a Índia?" : "Is it safe to travel to India?",
      a: locale === "es" ? "Sí, la India es generalmente segura para turistas. Nuestros guías expertos aseguran su comodidad y seguridad en todo momento." : locale === "pt" ? "Sim, a Índia é geralmente segura para turistas. Nossos guias especialistas garantem seu conforto e segurança em todos os momentos." : "Yes, India is generally safe for tourists. Our expert guides ensure your comfort and security at all times. We carefully plan routes and accommodations for the safest experience.",
    },
    {
      q: locale === "es" ? "¿Cuál es la mejor época para visitar la India?" : locale === "pt" ? "Qual é a melhor época para visitar a Índia?" : "What is the best time to visit India?",
      a: locale === "es" ? "Octubre a marzo es ideal para la mayoría de regiones. El sur se puede visitar todo el año. Le ayudaremos a elegir según su itinerario." : locale === "pt" ? "Outubro a março é ideal para a maioria das regiões. O sul pode ser visitado durante todo o ano." : "October to March is ideal for most regions. South India can be visited year-round. We'll help you choose the perfect timing based on your itinerary and interests.",
    },
    {
      q: locale === "es" ? "¿Necesito visa para la India?" : locale === "pt" ? "Preciso de visto para a Índia?" : "Do I need a visa for India?",
      a: locale === "es" ? "Sí, la mayoría de nacionalidades necesitan visa. La e-Visa online es la opción más fácil y la procesamos en 72 horas." : locale === "pt" ? "Sim, a maioria das nacionalidades precisa de visto. O e-Visa online é a opção mais fácil." : "Yes, most nationalities require a visa. The e-Visa (online) is the easiest option and is typically processed within 72 hours. We provide guidance on the application process.",
    },
    {
      q: locale === "es" ? "¿Puedo personalizar mi viaje?" : locale === "pt" ? "Posso personalizar a minha viagem?" : "Can I fully customize my travel package?",
      a: locale === "es" ? "Por supuesto. Cada detalle se diseña desde cero de acuerdo con sus especificaciones de lujo, ritmo y preferencias de hotel." : locale === "pt" ? "Certamente. Cada detalhe é planejado a partir do zero de acordo com suas especificações de luxo, ritmo e preferências." : "Absolutely. Every detail of your journey is tailormade from scratch. You can customize the route, duration, hotel tiers (heritage palaces, luxury boutique wellness retreats), and private activities.",
    },
    {
      q: locale === "es" ? "¿Cómo se gestiona el transporte?" : locale === "pt" ? "Como é gerido o transporte?" : "How is local transportation managed?",
      a: locale === "es" ? "Proporcionamos vehículos privados de lujo con aire acondicionado y conductores altamente experimentados durante todo el viaje." : locale === "pt" ? "Oferecemos veículos de luxo particulares com ar-condicionado e motoristas experientes para todo o trajeto." : "We provide private, premium air-conditioned luxury SUVs (e.g., Toyota Innova Crysta or luxury sedans) with experienced English-speaking tourist drivers for all intercity transfers and local sightseeing.",
    }
  ];

  const text = labels[locale] || labels.en;

  const slides = [
    {
      image: "/images/taj_mahal_sunrise.png",
      sub: text.heroSub,
      title: locale === "es" ? "Viaje a India en Lujo Absoluto" : locale === "pt" ? "Viaje para a Índia em Luxo Absoluto" : "Experience India in Absolute Luxury",
      desc: text.heroDesc,
      location: locale === "es" ? "Taj Mahal, Agra" : locale === "pt" ? "Taj Mahal, Agra" : "Taj Mahal, Agra",
      objectPosition: "center 28%"
    },
    {
      image: "/images/rajasthan_fort_sunset.png",
      sub: locale === "es" ? "PALACIOS HISTÓRICOS" : locale === "pt" ? "PALÁCIOS HISTÓRICOS" : "HERITAGE PALACES",
      title: locale === "es" ? "La Magia Real de Rajastán" : locale === "pt" ? "A Magia Real do Rajastão" : "The Royal Magic of Rajasthan",
      desc: locale === "es" ? "Explore dunas de arena, fuertes medievales y cene dentro de auténticos palacios reales." : locale === "pt" ? "Explore dunas de areia, fortes medievais e jante dentro de autênticos palácios reais." : "Explore desert dunes, medieval forts, and dine inside authentic royal lakeside palaces.",
      location: locale === "es" ? "Fuerte Mehrangarh, Jodhpur" : locale === "pt" ? "Forte Mehrangarh, Jodhpur" : "Mehrangarh Fort, Jodhpur",
      objectPosition: "center 35%"
    },
    {
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200",
      sub: locale === "es" ? "RETIROS HOLÍSTICOS" : locale === "pt" ? "RETIROS HOLÍSTICOS" : "HOLISTIC RETREATS",
      title: locale === "es" ? "Serenidad Tropical en Kerala" : locale === "pt" ? "Serenidade Tropical em Kerala" : "Tropical Serenity in Kerala",
      desc: locale === "es" ? "Navegue por canales de esmeralda y rejuvenezca con auténticos rituales ayurvédicos." : locale === "pt" ? "Navegue por canais de esmeralda e rejuveneça com autênticos rituais ayurvédicos." : "Cruise through emerald backwaters and rejuvenate with authentic wellness Ayurvedic rituals.",
      location: locale === "es" ? "Remansos de Alleppey, Kerala" : locale === "pt" ? "Canais de Alleppey, Kerala" : "Backwaters, Alleppey",
      objectPosition: "center 40%"
    }
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      
      {/* SECTION 1: Dynamic Hero Banner Slider */}
      <HeroSlider 
        locale={locale} 
        slides={slides} 
        ctaText={text.cta} 
        inquireCTA={text.inquireCTA} 
      />

      {/* SECTION 1.5: Infographic Circular Stats (Screenshot 1 Theme) */}
      <section className="bg-white py-24 border-b border-gold/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
            
            {/* Stat 1 */}
            <Reveal delay={50} className="text-center space-y-5">
              <div className="relative w-44 h-44 rounded-full flex flex-col items-center justify-center bg-[#EBF5F8]/40 border border-orange-600/35 shadow-inner mx-auto">
                <div className="absolute -inset-1 rounded-full border border-orange-600/25 scale-[1.04]" />
                <div className="absolute bottom-4 right-1.5 w-2.5 h-2.5 rounded-full bg-orange-700/80 border border-white" />
                <span className="text-4xl font-bold text-[#1B1B1B] font-serif">
                  <StatCounter target={12} />
                </span>
              </div>
              <p className="text-xs uppercase tracking-wider text-royal font-bold max-w-[160px] mx-auto leading-snug">
                {locale === "es" ? "Años de experiencia" : locale === "pt" ? "Anos de experiência" : "Years of experience"}
              </p>
            </Reveal>

            {/* Stat 2 */}
            <Reveal delay={120} className="text-center space-y-5">
              <div className="relative w-44 h-44 rounded-full flex flex-col items-center justify-center bg-[#EBF5F8]/40 border border-orange-600/35 shadow-inner mx-auto">
                <div className="absolute -inset-1 rounded-full border border-orange-600/25 scale-[1.04]" />
                <div className="absolute top-2 right-6 w-2.5 h-2.5 rounded-full bg-orange-700/80 border border-white" />
                <span className="text-4xl font-bold text-[#1B1B1B] font-serif">
                  <StatCounter target={97} suffix="%" />
                </span>
              </div>
              <p className="text-xs uppercase tracking-wider text-royal font-bold max-w-[160px] mx-auto leading-snug">
                {locale === "es" ? "Tasa de retención" : locale === "pt" ? "Taxa de retenção" : "Retention rate"}
              </p>
            </Reveal>

            {/* Stat 3 */}
            <Reveal delay={190} className="text-center space-y-5">
              <div className="relative w-44 h-44 rounded-full flex flex-col items-center justify-center bg-[#EBF5F8]/40 border border-orange-600/35 shadow-inner mx-auto">
                <div className="absolute -inset-1 rounded-full border border-orange-600/25 scale-[1.04]" />
                <div className="absolute bottom-6 left-2 w-2.5 h-2.5 rounded-full bg-orange-700/80 border border-white" />
                <span className="text-4xl font-bold text-[#1B1B1B] font-serif">
                  <StatCounter target={8} suffix="k" />
                </span>
              </div>
              <p className="text-xs uppercase tracking-wider text-royal font-bold max-w-[160px] mx-auto leading-snug">
                {locale === "es" ? "Tour completado" : locale === "pt" ? "Tour completado" : "Tours completed"}
              </p>
            </Reveal>

            {/* Stat 4 */}
            <Reveal delay={260} className="text-center space-y-5">
              <div className="relative w-44 h-44 rounded-full flex flex-col items-center justify-center bg-[#EBF5F8]/40 border border-orange-600/35 shadow-inner mx-auto">
                <div className="absolute -inset-1 rounded-full border border-orange-600/25 scale-[1.04]" />
                <div className="absolute top-3 right-5 w-2.5 h-2.5 rounded-full bg-orange-700/80 border border-white" />
                <span className="text-4xl font-bold text-[#1B1B1B] font-serif">
                  <StatCounter target={19} suffix="k" />
                </span>
              </div>
              <p className="text-xs uppercase tracking-wider text-royal font-bold max-w-[160px] mx-auto leading-snug">
                {locale === "es" ? "Cliente feliz" : locale === "pt" ? "Cliente feliz" : "Happy clients"}
              </p>
            </Reveal>

          </div>
        </div>
      </section>

      {/* SECTION 2: The Philosophy Section (Split screen layout) */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center border-b border-gold/10">
        <Reveal className="space-y-8">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold flex items-center gap-1.5">
            <Compass className="w-5 h-5" />
            <span>{text.whySub}</span>
          </span>
          {/* Section Heading: 40px–48px */}
          <h2 className="text-4xl md:text-5xl font-bold text-royal leading-tight">
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
        <Reveal delay={200} className="relative p-4 bg-white border border-gold/15 rounded-[2rem] shadow-2xl shadow-royal/5">
          <div className="overflow-hidden rounded-2xl h-[480px]">
            <img src="/images/rajasthan_fort_sunset.png" alt="Philosophy" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-royal text-white p-8 rounded-2xl max-w-sm space-y-3 shadow-2xl hidden md:block border border-gold/15">
            <h4 className="font-bold text-gold text-base">Palace Heritage</h4>
            <p className="text-xs text-white/70 leading-relaxed font-light">We organize private dinners inside authentic lake palaces and medieval desert forts.</p>
          </div>
        </Reveal>
      </section>

      {/* SECTION 2.5: How It Works / Custom Tour Planning (Bespoke Agency Identity) */}
      <section className="bg-cream border-t border-b border-sand/20 py-28 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          
          {/* Header */}
          <Reveal className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold block">{text.howItWorksSub}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-royal tracking-tight">{text.howItWorksTitle}</h2>
            <p className="text-sm md:text-base text-foreground/50 leading-relaxed font-light">{text.howItWorksDesc}</p>
            <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
          </Reveal>

          {/* 3 Step Flowchart Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            
            {/* Step 1 */}
            <Reveal delay={50} className="relative space-y-4 bg-white border border-gold/10 p-8 rounded-[2.5rem] shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold text-lg font-black font-serif">
                1
              </div>
              <h3 className="text-lg font-bold text-royal font-serif">{text.step1Title}</h3>
              <p className="text-xs text-foreground/60 leading-relaxed font-light">{text.step1Desc}</p>
            </Reveal>

            {/* Step 2 */}
            <Reveal delay={150} className="relative space-y-4 bg-white border border-gold/10 p-8 rounded-[2.5rem] shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold text-lg font-black font-serif">
                2
              </div>
              <h3 className="text-lg font-bold text-royal font-serif">{text.step2Title}</h3>
              <p className="text-xs text-foreground/60 leading-relaxed font-light">{text.step2Desc}</p>
            </Reveal>

            {/* Step 3 */}
            <Reveal delay={250} className="relative space-y-4 bg-white border border-gold/10 p-8 rounded-[2.5rem] shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold text-lg font-black font-serif">
                3
              </div>
              <h3 className="text-lg font-bold text-royal font-serif">{text.step3Title}</h3>
              <p className="text-xs text-foreground/60 leading-relaxed font-light">{text.step3Desc}</p>
            </Reveal>

          </div>
        </div>
      </section>

      {/* SECTION 3: Custom Destinations (Postcards layout) */}
      <section id="destinations" className="max-w-7xl mx-auto px-6 py-32 space-y-20 border-b border-gold/10">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold block">{text.regionsSub}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-royal tracking-tight">{text.regionsTitle}</h2>
          <p className="text-base text-foreground/50 leading-relaxed font-light">{text.regionsDesc}</p>
          <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
        </div>

        {/* Large, Beautiful Cards (Increased dimensions, larger padding) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {states.slice(0, 10).map((st: any, i: number) => (
            <Reveal key={st.slug} delay={i * 80}>
              <Link href={`/${locale}/destinations/${st.slug}`} className="group block h-full">
                <div className="bg-white border border-gold/10 rounded-[2rem] overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-gold/25 hover:shadow-2xl flex flex-col h-full">
                  <div className="h-72 overflow-hidden relative shrink-0">
                    <img src={st.image} alt={st.title?.en} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute top-5 left-5 bg-royal text-gold text-[10px] uppercase tracking-wider font-bold px-4 py-2 rounded-full shadow-sm">
                      {st.region} India
                    </span>
                  </div>
                  {/* Padding: p-8 */}
                  <div className="p-8 space-y-4 bg-white flex flex-col flex-grow justify-between">
                    <div className="space-y-2.5">
                      <h3 className="text-xl md:text-2xl font-bold text-royal group-hover:text-gold transition-colors">
                        {st.title?.[locale] || st.title?.en}
                      </h3>
                      <p className="text-sm md:text-base text-foreground/55 line-clamp-3 leading-relaxed font-light">
                        {st.tagline?.[locale] || st.tagline?.en}
                      </p>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-1.5 pt-4 border-t border-gold/10 mt-auto">
                      <span>Explore Region</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* VIEW ALL Destinations button */}
        <div className="text-center pt-8">
          <Link href={`/${locale}/destinations`} className="inline-flex items-center gap-2 bg-royal hover:bg-royal/90 text-white text-base md:text-lg font-bold uppercase tracking-widest px-10 py-5 rounded-full transition-transform hover:scale-105 shadow-xl">
            <span>View All Destinations</span>
            <ArrowRight className="w-5 h-5 text-gold" />
          </Link>
        </div>
      </section>

      {/* SECTION 3.5: Expanding Monuments Accordion Row (Screenshot 2 Theme) */}
      <MonumentsAccordion locale={locale} />

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
              <Link href={`/${locale}/packages`} className="group block h-full">
                <div className="bg-white border border-gold/10 rounded-[2rem] overflow-hidden shadow-lg flex flex-col h-full transition-all duration-500 hover:-translate-y-3 hover:border-gold/25 hover:shadow-2xl">
                  <div className="relative h-64 shrink-0 overflow-hidden">
                    <img src={pkg.image} alt={pkg.title?.en} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <span className="bg-royal text-gold text-[9px] uppercase font-bold tracking-wider px-3.5 py-1.5 rounded-full shadow-md border border-gold/10">
                        {pkg.durationDays} {locale === "es" ? "Días" : locale === "pt" ? "Dias" : "Days"}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-gold text-royal text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-md shadow-sm">
                        {text.customizableText}
                      </span>
                    </div>
                  </div>
                  {/* Padding: p-8 */}
                  <div className="p-8 flex flex-col justify-between flex-grow bg-white space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-royal group-hover:text-gold transition-colors leading-snug">
                        {pkg.title?.[locale] || pkg.title?.en}
                      </h3>
                      <p className="text-xs md:text-sm text-foreground/55 line-clamp-3 leading-relaxed font-light">
                        {pkg.tagline?.[locale] || pkg.tagline?.en}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gold/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-auto">
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase tracking-wider text-foreground/45 font-bold">{locale === "es" ? "Tarifa Estándar" : "Standard Rate"}</span>
                        <span className="text-sm font-bold text-royal font-serif">{text.fromPrice}</span>
                      </div>
                      <span className="bg-transparent hover:bg-gold border border-gold hover:border-gold text-gold hover:text-royal text-[9px] font-black uppercase tracking-wider py-2.5 px-4 rounded-full transition-all duration-300 inline-flex items-center gap-1">
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

      {/* SECTION 4.5: Our Premium Inclusions (What We Do / Value Proposition) */}
      <section className="bg-white border-b border-gold/10 py-32">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          
          {/* Header */}
          <Reveal className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold block">{text.inclusionsSub}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-royal tracking-tight">{text.inclusionsTitle}</h2>
            <p className="text-sm md:text-base text-foreground/50 leading-relaxed font-light">{text.inclusionsDesc}</p>
            <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
          </Reveal>

          {/* Inclusions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Inc 1: Driver */}
            <Reveal delay={50} className="space-y-4 border border-gold/10 bg-[#FAF8F5] p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <Compass className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-royal font-serif">{text.inc1Title}</h4>
              <p className="text-xs text-foreground/60 leading-relaxed font-light">{text.inc1Desc}</p>
            </Reveal>

            {/* Inc 2: Guides */}
            <Reveal delay={120} className="space-y-4 border border-gold/10 bg-[#FAF8F5] p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <Landmark className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-royal font-serif">{text.inc2Title}</h4>
              <p className="text-xs text-foreground/60 leading-relaxed font-light">{text.inc2Desc}</p>
            </Reveal>

            {/* Inc 3: Hotels */}
            <Reveal delay={190} className="space-y-4 border border-gold/10 bg-[#FAF8F5] p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <Coffee className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-royal font-serif">{text.inc3Title}</h4>
              <p className="text-xs text-foreground/60 leading-relaxed font-light">{text.inc3Desc}</p>
            </Reveal>

            {/* Inc 4: Support */}
            <Reveal delay={260} className="space-y-4 border border-gold/10 bg-[#FAF8F5] p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-royal font-serif">{text.inc4Title}</h4>
              <p className="text-xs text-foreground/60 leading-relaxed font-light">{text.inc4Desc}</p>
            </Reveal>

          </div>
        </div>
      </section>

      {/* SECTION 5: Gastronomy Preview (Curated Culinary Card) */}
      <section className="max-w-7xl mx-auto px-6 py-32 border-b border-gold/10 space-y-16">
        <div className="bg-royal border border-gold/15 rounded-[2.5rem] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 relative shadow-2xl">
          <div className="lg:col-span-5 h-[400px] lg:h-auto relative overflow-hidden">
            <img src="/images/indian_cuisine_feast.png" alt="Culinary Spices" className="w-full h-full object-cover absolute inset-0 animate-kenburns" />
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
          <h2 className="text-4xl md:text-5xl font-bold text-royal tracking-tight">{text.faqTitle}</h2>
          <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
        </div>

        <div className="space-y-6">
          {homepageFaqs.map((f, i) => (
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
            <h2 className="text-4xl md:text-5xl font-bold text-royal tracking-tight">{text.blogsTitle}</h2>
            <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
          </div>

          {/* Large, Beautiful Cards (Increased dimensions, larger padding) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {blogs.slice(0, 6).map((post: any, i: number) => (
              <Reveal key={post.slug} delay={i * 80}>
                <Link href={`/${locale}/blog/${post.slug}`} className="group block h-full">
                  <div className="bg-white border border-gold/10 rounded-[2rem] overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-gold/25 hover:shadow-2xl flex flex-col h-full">
                    <div className="h-56 overflow-hidden shrink-0">
                      <img src={post.featuredImage} alt={post.title?.en} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    {/* Padding: p-8 */}
                    <div className="p-8 space-y-4 bg-white flex flex-col flex-grow justify-between">
                      <div className="space-y-2.5">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-gold block">{post.category}</span>
                        <h3 className="text-lg font-bold text-royal group-hover:text-gold transition-colors leading-snug line-clamp-2">
                          {post.title?.[locale] || post.title?.en}
                        </h3>
                      </div>
                      <span className="text-[10px] text-foreground/45 uppercase tracking-wider block pt-4 border-t border-gold/10">
                        {post.readingTime} Min Read &bull; By {post.author}
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* VIEW ALL Blogs button */}
          <div className="text-center pt-8">
            <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 bg-royal hover:bg-royal/90 text-white text-base md:text-lg font-bold uppercase tracking-widest px-10 py-5 rounded-full transition-transform hover:scale-105 shadow-xl">
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
