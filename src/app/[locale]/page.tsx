import React from "react";
import Link from "next/link";
import {
  getStatesAction,
  getTourPackagesAction,
  getFoodsAction,
  getBlogsAction,
  getTestimonialsAction
} from "@/app/actions/queries";
import InquiryForm from "@/components/common/InquiryForm";
import HeroSlider from "@/components/home/HeroSlider";
import FoodSection from "@/components/home/FoodSection";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import Reveal from "@/components/home/Reveal";
import {
  ChevronRight,
  MapPin,
  Star,
  Compass,
  Mountain,
  Trees,
  Camera,
  Sparkles,
  Ship,
  Tent,
  Landmark,
  Clock,
  Users,
  Award,
  ArrowRight,
  Shield,
  Heart,
  Globe,
  Gem,
} from "lucide-react";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  const states = await getStatesAction();
  const packages = await getTourPackagesAction();
  const foods = await getFoodsAction();
  const blogs = await getBlogsAction();
  const reviews = await getTestimonialsAction();

  const labels: Record<string, any> = {
    en: {
      sub: "Bespoke India Journeys",
      title: "Discover India Beyond Expectations",
      desc: "Immersive luxury itineraries, hand-crafted private tours, and authentic heritage stays designed for deep cultural connection.",
      cta: "Explore Destinations",
      inquireCTA: "Speak with an Expert",
      whySub: "Why Choose Us",
      whyTitle: "Crafting Unforgettable Indian Experiences Since 2010",
      whyDesc: "We design bespoke journeys that go beyond tourist trails. Every trip is handcrafted by local experts who know India intimately.",
      regionsSub: "Explore by Region",
      regionsTitle: "A Land of Infinite Contrasts",
      regionsDesc: "From snow-capped Himalayan peaks to tropical Kerala backwaters, each region offers a completely unique world to explore.",
      packagesSub: "Curated Collections",
      packagesTitle: "Signature Tour Packages",
      packagesDesc: "Exclusive itineraries crafted by our luxury travel advisors. Each journey is tailored to your preferences.",
      whyTravelSub: "The MH India Trips Difference",
      whyTravelTitle: "Why Travel With Us",
      foodSub: "Culinary Journey",
      foodTitle: "Taste the Soul of India",
      foodDesc: "From royal Mughal kitchens to vibrant street food, every meal tells a story of centuries-old traditions.",
      foodCta: "Discover",
      foodViewAll: "Explore Food Guide",
      testimonialsSub: "Guest Stories",
      testimonialsTitle: "What Our Travelers Say",
      blogsSub: "Travel Journal",
      blogsTitle: "Stories & Insights",
      ctaBannerTitle: "Ready for Your Dream India Journey?",
      ctaBannerSub: "Let our destination experts craft a personalized itinerary just for you.",
      ctaBannerBtn: "Start Planning",
      statYears: "Years Experience",
      statTravelers: "Happy Travelers",
      statDest: "Destinations",
      statRating: "Average Rating",
      viewAll: "View All",
    },
    es: {
      sub: "Viajes de Lujo en India",
      title: "Descubra la India Más Allá de las Expectativas",
      desc: "Itinerarios de lujo inmersivos, tours privados diseñados a medida y estadías históricas.",
      cta: "Explorar Destinos",
      inquireCTA: "Hablar con un Experto",
      whySub: "Por Qué Elegirnos",
      whyTitle: "Creando Experiencias Inolvidables Desde 2010",
      whyDesc: "Diseñamos viajes a medida que van más allá de las rutas turísticas convencionales.",
      regionsSub: "Explorar por Región",
      regionsTitle: "Una Tierra de Contrastes Infinitos",
      regionsDesc: "Desde las cumbres del Himalaya hasta los canales de Kerala, cada región ofrece un mundo completamente único.",
      packagesSub: "Colecciones Selectas",
      packagesTitle: "Paquetes de Tour Exclusivos",
      packagesDesc: "Itinerarios exclusivos elaborados por nuestros asesores de viajes de lujo.",
      whyTravelSub: "La Diferencia MH India Trips",
      whyTravelTitle: "Por Qué Viajar Con Nosotros",
      foodSub: "Viaje Culinario",
      foodTitle: "Saboree el Alma de la India",
      foodDesc: "Desde cocinas reales mogoles hasta vibrante comida callejera, cada plato cuenta una historia centenaria.",
      foodCta: "Descubrir",
      foodViewAll: "Explorar Guía",
      testimonialsSub: "Historias de Viajeros",
      testimonialsTitle: "Lo Que Dicen Nuestros Viajeros",
      blogsSub: "Diario de Viaje",
      blogsTitle: "Historias e Ideas",
      ctaBannerTitle: "¿Listo para Su Viaje Soñado?",
      ctaBannerSub: "Nuestros expertos crearán un itinerario personalizado para usted.",
      ctaBannerBtn: "Comenzar a Planificar",
      statYears: "Años de Experiencia",
      statTravelers: "Viajeros Felices",
      statDest: "Destinos",
      statRating: "Valoración Media",
      viewAll: "Ver Todos",
    },
    pt: {
      sub: "Viagens de Luxo na Índia",
      title: "Descubra a Índia Além das Expectativas",
      desc: "Itinerários de luxo imersivos, tours privados sob medida e estadias históricas em palácios.",
      cta: "Explorar Destinos",
      inquireCTA: "Falar com Especialista",
      whySub: "Por Que Nos Escolher",
      whyTitle: "Criando Experiências Inesquecíveis Desde 2010",
      whyDesc: "Desenhamos viagens sob medida que vão além das rotas turísticas convencionais.",
      regionsSub: "Explorar por Região",
      regionsTitle: "Uma Terra de Contrastes Infinitos",
      regionsDesc: "Dos picos nevados do Himalaia aos canais de Kerala, cada região oferece um mundo completamente único.",
      packagesSub: "Coleções Selecionadas",
      packagesTitle: "Pacotes de Tour Exclusivos",
      packagesDesc: "Itinerários exclusivos elaborados pelos nossos consultores de viagens de luxo.",
      whyTravelSub: "A Diferença MH India Trips",
      whyTravelTitle: "Por Que Viajar Connosco",
      foodSub: "Jornada Culinária",
      foodTitle: "Saboreie a Alma da Índia",
      foodDesc: "Das cozinhas reais mogóis à vibrante comida de rua, cada refeição conta uma história centenária.",
      foodCta: "Descobrir",
      foodViewAll: "Explorar Guia",
      testimonialsSub: "Histórias de Viajantes",
      testimonialsTitle: "O Que Dizem Nossos Viajantes",
      blogsSub: "Diário de Viagem",
      blogsTitle: "Histórias e Inspirações",
      ctaBannerTitle: "Pronto para Sua Viagem dos Sonhos?",
      ctaBannerSub: "Nossos especialistas criarão um itinerário personalizado para você.",
      ctaBannerBtn: "Começar a Planejar",
      statYears: "Anos de Experiência",
      statTravelers: "Viajantes Felizes",
      statDest: "Destinos",
      statRating: "Avaliação Média",
      viewAll: "Ver Todos",
    }
  };

  const text = labels[locale] || labels.en;

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1920",
      location: "Agra, Uttar Pradesh",
      sub: "",
      title: locale === "es" ? "El Taj Mahal al Amanecer" : locale === "pt" ? "O Taj Mahal ao Amanhecer" : "The Taj Mahal at Sunrise",
      desc: locale === "es" ? "Contemple la maravilla del mundo bañada por la primera luz del día." : locale === "pt" ? "Contemple a maravilha do mundo banhada pela primeira luz do dia." : "Witness the wonder of the world bathed in golden first light.",
    },
    {
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1920",
      location: "Jaipur, Rajasthan",
      sub: "",
      title: locale === "es" ? "Palacios Reales y Fortalezas" : locale === "pt" ? "Palácios Reais e Fortalezas" : "Royal Palaces & Desert Forts",
      desc: locale === "es" ? "Explore la majestuosidad de los palacios y fortalezas de Rajastán." : locale === "pt" ? "Explore a majestade dos palácios e fortalezas do Rajastão." : "Explore the grandeur of Rajasthan's heritage palaces and mighty fortresses.",
    },
    {
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1920",
      location: "Kerala, South India",
      sub: "",
      title: locale === "es" ? "Canales Tropicales de Kerala" : locale === "pt" ? "Canais Tropicais de Kerala" : "Kerala's Emerald Backwaters",
      desc: locale === "es" ? "Navegue por canales bordeados de palmeras en casas flotantes de lujo." : locale === "pt" ? "Navegue por canais ladeados de palmeiras em casas flutuantes de luxo." : "Drift along palm-fringed waterways aboard luxury houseboats.",
    },
    {
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0db?q=80&w=1920",
      location: "Varanasi, Uttar Pradesh",
      sub: "",
      title: locale === "es" ? "La Ciudad Eterna del Ganges" : locale === "pt" ? "A Cidade Eterna do Ganges" : "The Eternal City of Light",
      desc: locale === "es" ? "Viva la espiritualidad en los ghats sagrados del Ganges." : locale === "pt" ? "Viva a espiritualidade nos ghats sagrados do Ganges." : "Experience ancient spirituality on the sacred ghats of the Ganges.",
    },
    {
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1920",
      location: "Goa, West India",
      sub: "",
      title: locale === "es" ? "Playas Doradas y Encanto Colonial" : locale === "pt" ? "Praias Douradas e Charme Colonial" : "Golden Beaches & Colonial Charm",
      desc: locale === "es" ? "Relájese en playas prístinas y descubra la herencia portuguesa." : locale === "pt" ? "Relaxe em praias intocadas e descubra a herança portuguesa." : "Unwind on pristine shores and discover Portuguese heritage.",
    },
  ];

  const regions = [
    { name: locale === "es" ? "Norte de India" : locale === "pt" ? "Norte da Índia" : "North India", desc: locale === "es" ? "Himalayas, Taj Mahal y Ciudades Reales" : locale === "pt" ? "Himalaias, Taj Mahal e Cidades Reais" : "Himalayas, Taj Mahal & Royal Cities", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=900", icon: Mountain },
    { name: locale === "es" ? "Sur de India" : locale === "pt" ? "Sul da Índia" : "South India", desc: locale === "es" ? "Templos, Canales y Especias" : locale === "pt" ? "Templos, Canais e Especiarias" : "Temples, Backwaters & Spice Hills", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=900", icon: Trees },
    { name: locale === "es" ? "Oeste de India" : locale === "pt" ? "Oeste da Índia" : "West India", desc: locale === "es" ? "Desiertos, Palacios y Playas" : locale === "pt" ? "Desertos, Palácios e Praias" : "Deserts, Palaces & Beaches", img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=900", icon: Landmark },
    { name: locale === "es" ? "Este de India" : locale === "pt" ? "Leste da Índia" : "East India", desc: locale === "es" ? "Templos, Té y Cultura Tribal" : locale === "pt" ? "Templos, Chá e Cultura Tribal" : "Temples, Tea Gardens & Tribal Culture", img: "https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=900", icon: Compass },
  ];

  const whyTravelFeatures = [
    {
      icon: Shield,
      title: locale === "es" ? "Viajes 100% Personalizados" : locale === "pt" ? "Viagens 100% Personalizadas" : "100% Tailor-Made Journeys",
      desc: locale === "es" ? "Cada itinerario se diseña desde cero según sus intereses, ritmo y presupuesto." : locale === "pt" ? "Cada itinerário é desenhado do zero segundo seus interesses, ritmo e orçamento." : "Every itinerary is designed from scratch based on your interests, pace, and budget.",
    },
    {
      icon: Users,
      title: locale === "es" ? "Guías Expertos Locales" : locale === "pt" ? "Guias Especialistas Locais" : "Expert Local Guides",
      desc: locale === "es" ? "Guías certificados bilingües que conocen cada rincón de la India." : locale === "pt" ? "Guias certificados bilíngues que conhecem cada canto da Índia." : "Certified bilingual guides who know every corner of India intimately.",
    },
    {
      icon: Gem,
      title: locale === "es" ? "Hoteles de Patrimonio de Lujo" : locale === "pt" ? "Hotéis de Património de Luxo" : "Luxury Heritage Stays",
      desc: locale === "es" ? "Alojamientos cuidadosamente seleccionados en palacios históricos y resorts boutique." : locale === "pt" ? "Alojamentos cuidadosamente selecionados em palácios históricos e resorts boutique." : "Handpicked accommodations in historic palaces and boutique luxury resorts.",
    },
    {
      icon: Heart,
      title: locale === "es" ? "Experiencias Auténticas" : locale === "pt" ? "Experiências Autênticas" : "Authentic Experiences",
      desc: locale === "es" ? "Más allá del turismo: inmersión cultural real con familias locales y artesanos." : locale === "pt" ? "Além do turismo: imersão cultural real com famílias locais e artesãos." : "Beyond tourism: real cultural immersion with local families and artisans.",
    },
    {
      icon: Globe,
      title: locale === "es" ? "Soporte 24/7 en Su Idioma" : locale === "pt" ? "Suporte 24/7 no Seu Idioma" : "24/7 Support in Your Language",
      desc: locale === "es" ? "Asistencia continua en español, inglés y portugués durante todo su viaje." : locale === "pt" ? "Assistência contínua em português, inglês e espanhol durante toda a viagem." : "Round-the-clock assistance in English, Spanish, and Portuguese throughout your trip.",
    },
    {
      icon: Award,
      title: locale === "es" ? "14+ Años de Excelencia" : locale === "pt" ? "14+ Anos de Excelência" : "14+ Years of Excellence",
      desc: locale === "es" ? "Miles de viajeros satisfechos y una reputación construida con pasión." : locale === "pt" ? "Milhares de viajantes satisfeitos e uma reputação construída com paixão." : "Thousands of satisfied travelers and a reputation built on passion and expertise.",
    },
  ];

  return (
    <div className="font-sans bg-background text-foreground">

      {/* 1. Hero Slider */}
      <HeroSlider locale={locale} slides={slides} ctaText={text.cta} inquireCTA={text.inquireCTA} />

      {/* 2. Why Choose Us - Stats + Trust */}
      <section className="relative section-spacing overflow-hidden">
        <div className="absolute inset-0 pattern-dots pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            <Reveal className="space-y-10">
              <div className="space-y-5">
                <span className="editorial-subheading block">{text.whySub}</span>
                <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif font-bold text-royal leading-[1.15]">
                  {text.whyTitle}
                </h2>
                <p className="text-[15px] text-foreground/60 leading-relaxed max-w-lg">
                  {text.whyDesc}
                </p>
              </div>
              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-sand">
                <div className="space-y-1.5">
                  <span className="text-3xl lg:text-4xl font-serif font-bold text-forest">14+</span>
                  <p className="text-[10px] uppercase tracking-[0.15em] font-semibold text-foreground/45">{text.statYears}</p>
                </div>
                <div className="space-y-1.5">
                  <span className="text-3xl lg:text-4xl font-serif font-bold text-gold">5000+</span>
                  <p className="text-[10px] uppercase tracking-[0.15em] font-semibold text-foreground/45">{text.statTravelers}</p>
                </div>
                <div className="space-y-1.5">
                  <span className="text-3xl lg:text-4xl font-serif font-bold text-terracotta">100+</span>
                  <p className="text-[10px] uppercase tracking-[0.15em] font-semibold text-foreground/45">{text.statDest}</p>
                </div>
                <div className="space-y-1.5">
                  <span className="text-3xl lg:text-4xl font-serif font-bold text-royal">4.9</span>
                  <p className="text-[10px] uppercase tracking-[0.15em] font-semibold text-foreground/45">{text.statRating}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150} className="grid grid-cols-12 grid-rows-6 gap-3 h-[520px]">
              <div className="col-span-7 row-span-6 rounded-2xl overflow-hidden shadow-xl image-zoom-container">
                <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800" loading="lazy" className="w-full h-full object-cover" alt="Taj Mahal India" />
              </div>
              <div className="col-span-5 row-span-3 rounded-2xl overflow-hidden shadow-lg image-zoom-container">
                <img src="https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=600" loading="lazy" className="w-full h-full object-cover" alt="Rajasthan Palace" />
              </div>
              <div className="col-span-5 row-span-3 rounded-2xl overflow-hidden shadow-lg image-zoom-container">
                <img src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600" loading="lazy" className="w-full h-full object-cover" alt="Kerala Backwaters" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Explore by Region - Larger premium cards */}
      <section className="section-spacing bg-white border-y border-sand/40">
        <div className="max-w-7xl mx-auto px-6 space-y-14">
          <Reveal className="text-center space-y-5 max-w-2xl mx-auto">
            <span className="editorial-subheading block">{text.regionsSub}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-royal">
              {text.regionsTitle}
            </h2>
            <p className="text-[15px] text-foreground/55 leading-relaxed">{text.regionsDesc}</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, i) => {
              const Icon = region.icon;
              return (
                <Reveal key={region.name} delay={i * 100}>
                  <Link href={`/${locale}/destinations`} className="group relative h-[420px] rounded-2xl overflow-hidden block shadow-sm hover:shadow-xl transition-shadow duration-500">
                    <img src={region.img} loading="lazy" alt={region.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/5" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                    <div className="absolute bottom-0 p-7 text-white space-y-3 w-full">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-lg bg-gold/20 backdrop-blur-sm flex items-center justify-center">
                          <Icon className="w-4.5 h-4.5 text-gold" />
                        </div>
                        <h3 className="text-lg font-serif font-bold">{region.name}</h3>
                      </div>
                      <p className="text-[13px] text-white/70 font-light leading-relaxed">{region.desc}</p>
                      <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] font-semibold text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pt-1">
                        <span>Explore</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          {/* View All Button */}
          <Reveal className="text-center pt-4">
            <Link href={`/${locale}/destinations`} className="btn-secondary inline-flex items-center gap-2">
              <span>{text.viewAll}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 4. Featured Destinations */}
      <section className="max-w-7xl mx-auto px-6 section-spacing space-y-14">
        <Reveal className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-4">
            <span className="editorial-subheading block">Signature Destinations</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal">
              {locale === "es" ? "Destinos Emblemáticos" : locale === "pt" ? "Destinos Emblemáticos" : "Iconic Destinations"}
            </h2>
          </div>
          <Link href={`/${locale}/destinations`} className="btn-secondary inline-flex items-center gap-2">
            <span>{locale === "es" ? "Ver Todos" : locale === "pt" ? "Ver Todos" : "View All"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {states.slice(0, 6).map((state: any, i: number) => (
            <Reveal key={state.slug} delay={i * 80}>
              <Link href={`/${locale}/destinations/${state.slug}`} className="group block h-full">
                <div className="relative h-[460px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                  <img
                    src={state.image}
                    loading="lazy"
                    alt={state.title[locale as "en" | "es" | "pt"] || state.title.en}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-5 left-5">
                    <span className="badge-gold">{state.region}</span>
                  </div>
                  <div className="absolute bottom-0 p-7 text-white space-y-2.5 w-full">
                    <h3 className="text-2xl font-serif font-bold">{state.title[locale as "en" | "es" | "pt"] || state.title.en}</h3>
                    <p className="text-[13px] text-white/65 font-light line-clamp-2 leading-relaxed">
                      {state.tagline?.[locale as "en" | "es" | "pt"] || state.tagline?.en || ""}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] font-semibold text-gold pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <span>{locale === "es" ? "Explorar Guía" : locale === "pt" ? "Explorar Guia" : "Explore Guide"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. Tour Packages */}
      <section className="bg-cream section-spacing border-y border-sand/30" id="popular-packages">
        <div className="max-w-7xl mx-auto px-6 space-y-14">
          <Reveal className="text-center space-y-5 max-w-2xl mx-auto">
            <span className="editorial-subheading block">{text.packagesSub}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-royal">{text.packagesTitle}</h2>
            <p className="text-[15px] text-foreground/55 leading-relaxed">{text.packagesDesc}</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.slice(0, 6).map((pkg: any, i: number) => (
              <Reveal key={pkg.slug} delay={i * 80}>
                <div className="card-elevated flex flex-col h-full">
                  <div className="relative h-64 overflow-hidden rounded-t-[1.5rem]">
                    <img src={pkg.image} loading="lazy" alt={pkg.title.en} className="w-full h-full object-cover transition-transform duration-600 hover:scale-105" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-white/90 backdrop-blur-sm text-charcoal text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                        {pkg.durationDays} {locale === "es" ? "Días" : locale === "pt" ? "Dias" : "Days"}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-forest/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                        Private Tour
                      </span>
                    </div>
                  </div>
                  <div className="p-7 flex flex-col flex-grow">
                    <div className="space-y-3 flex-grow">
                      <h3 className="text-xl font-serif font-bold text-royal leading-snug">
                        {pkg.title[locale as "en" | "es" | "pt"] || pkg.title.en}
                      </h3>
                      <p className="text-sm text-foreground/55 leading-relaxed line-clamp-2">
                        {pkg.tagline[locale as "en" | "es" | "pt"] || pkg.tagline.en}
                      </p>
                      {/* Highlights */}
                      <div className="space-y-2.5 pt-3">
                        {pkg.highlights.slice(0, 3).map((hl: any, idx: number) => (
                          <div key={idx} className="flex items-start gap-2.5 text-[13px] text-foreground/65">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                            <span>{hl[locale as "en" | "es" | "pt"] || hl.en}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-5 mt-5 border-t border-sand/50 flex justify-between items-center">
                      <span className="text-[11px] font-semibold tracking-wider uppercase text-forest">
                        {locale === "es" ? "Precio a consultar" : locale === "pt" ? "Preço sob consulta" : "Price on Request"}
                      </span>
                      <Link href={`/${locale}#inquire-now`} className="text-xs font-semibold text-gold hover:text-terracotta flex items-center gap-1 transition-colors duration-200">
                        <span>{locale === "es" ? "Solicitar" : locale === "pt" ? "Solicitar" : "Inquire"}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Travel With Us - Replaces "Choose Your Experience" */}
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-cream/30 to-background pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-14">
          <Reveal className="text-center space-y-5 max-w-2xl mx-auto">
            <span className="editorial-subheading block">{text.whyTravelSub}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-royal">{text.whyTravelTitle}</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyTravelFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="group p-8 rounded-2xl border border-sand/50 bg-white hover:border-gold/30 hover:shadow-lg transition-all duration-500 h-full">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center mb-6 group-hover:from-gold/20 group-hover:to-gold/10 transition-all duration-300">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-royal mb-3 leading-snug">{feature.title}</h3>
                    <p className="text-sm text-foreground/55 leading-relaxed">{feature.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Food Section */}
      <FoodSection
        locale={locale}
        foods={foods}
        labels={{
          sub: text.foodSub,
          title: text.foodTitle,
          desc: text.foodDesc,
          cta: text.foodCta,
          viewAll: text.foodViewAll,
        }}
      />

      {/* 8. Testimonials - Premium Infinite Slider */}
      <TestimonialSlider
        locale={locale}
        reviews={reviews}
        labels={{
          sub: text.testimonialsSub,
          title: text.testimonialsTitle,
        }}
      />

      {/* 9. Blog Section */}
      <section className="max-w-7xl mx-auto px-6 section-spacing space-y-14">
        <Reveal className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-4">
            <span className="editorial-subheading block">{text.blogsSub}</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal">{text.blogsTitle}</h2>
          </div>
          <Link href={`/${locale}/blog`} className="btn-secondary inline-flex items-center gap-2">
            <span>{locale === "es" ? "Leer Todo" : locale === "pt" ? "Ler Tudo" : "Read All"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0, 6).map((blog: any, i: number) => (
            <Reveal key={blog.slug} delay={i * 80}>
              <Link href={`/${locale}/blog/${blog.slug}`} className="group block">
                <div className="card-elevated overflow-hidden">
                  <div className="h-60 overflow-hidden">
                    <img
                      src={blog.featuredImage}
                      alt={blog.title[locale as "en" | "es" | "pt"] || blog.title.en}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7 space-y-4">
                    <div className="flex items-center gap-3 text-[11px] text-foreground/45 font-medium">
                      <span className="badge-forest">{blog.category}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {blog.readingTime} min
                      </span>
                    </div>
                    <h3 className="text-lg font-serif font-bold text-royal leading-snug group-hover:text-gold transition-colors duration-200 line-clamp-2">
                      {blog.title[locale as "en" | "es" | "pt"] || blog.title.en}
                    </h3>
                    <p className="text-[13px] text-foreground/55 line-clamp-2 leading-relaxed">
                      {blog.excerpt[locale as "en" | "es" | "pt"] || blog.excerpt.en}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 10. CTA Banner */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=1920"
            alt="India landscape"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-royal/85 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white space-y-7">
          <Reveal>
            <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-serif font-bold leading-tight">
              {text.ctaBannerTitle}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-lg mx-auto">
              {text.ctaBannerSub}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link
              href={`/${locale}#inquire-now`}
              className="inline-flex items-center gap-2.5 bg-gold hover:bg-gold-light text-white text-[11px] font-semibold uppercase tracking-[0.12em] py-4.5 px-11 rounded-full transition-all duration-400 shadow-lg shadow-gold/25 hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>{text.ctaBannerBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 11. Inquiry Form */}
      <section className="section-spacing bg-cream" id="inquire-now">
        <div className="max-w-7xl mx-auto px-6">
          <InquiryForm locale={locale} />
        </div>
      </section>

    </div>
  );
}
