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
import Reveal from "@/components/home/Reveal";
import {
  ChevronRight,
  MapPin,
  Star,
  Compass,
  Mountain,
  Train,
  Trees,
  Camera,
  Sparkles,
  Ship,
  Tent,
  Plane,
  Landmark,
  Clock,
  Users,
  Award,
  ArrowRight,
  Quote
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
      experiencesSub: "Travel Styles",
      experiencesTitle: "Choose Your Experience",
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
      experiencesSub: "Estilos de Viaje",
      experiencesTitle: "Elija Su Experiencia",
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
      experiencesSub: "Estilos de Viagem",
      experiencesTitle: "Escolha Sua Experiência",
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
    { name: locale === "es" ? "Norte de India" : locale === "pt" ? "Norte da Índia" : "North India", desc: locale === "es" ? "Himalayas, Taj Mahal y Ciudades Reales" : locale === "pt" ? "Himalaias, Taj Mahal e Cidades Reais" : "Himalayas, Taj Mahal & Royal Cities", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800", icon: Mountain },
    { name: locale === "es" ? "Sur de India" : locale === "pt" ? "Sul da Índia" : "South India", desc: locale === "es" ? "Templos, Canales y Especias" : locale === "pt" ? "Templos, Canais e Especiarias" : "Temples, Backwaters & Spice Hills", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800", icon: Trees },
    { name: locale === "es" ? "Oeste de India" : locale === "pt" ? "Oeste da Índia" : "West India", desc: locale === "es" ? "Desiertos, Palacios y Playas" : locale === "pt" ? "Desertos, Palácios e Praias" : "Deserts, Palaces & Beaches", img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800", icon: Landmark },
    { name: locale === "es" ? "Este de India" : locale === "pt" ? "Leste da Índia" : "East India", desc: locale === "es" ? "Templos, Té y Cultura" : locale === "pt" ? "Templos, Chá e Cultura" : "Temples, Tea Gardens & Culture", img: "https://images.unsplash.com/photo-1593693411515-c202e974fe08?q=80&w=800", icon: Compass },
  ];

  const experiences = [
    { name: locale === "es" ? "Lujo y Palacios" : locale === "pt" ? "Luxo e Palácios" : "Luxury & Palaces", desc: locale === "es" ? "Alójese en hoteles de patrimonio real" : locale === "pt" ? "Fique em hotéis de patrimônio real" : "Stay in royal heritage hotels", icon: Sparkles, img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600" },
    { name: locale === "es" ? "Trenes de Lujo" : locale === "pt" ? "Trens de Luxo" : "Luxury Trains", desc: locale === "es" ? "El Palacio sobre Ruedas" : locale === "pt" ? "O Palácio sobre Rodas" : "Palace on Wheels journey", icon: Train, img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=600" },
    { name: locale === "es" ? "Campamentos en el Desierto" : locale === "pt" ? "Acampamentos no Deserto" : "Desert Glamping", desc: locale === "es" ? "Duerma bajo las estrellas" : locale === "pt" ? "Durma sob as estrelas" : "Sleep under desert stars", icon: Tent, img: "https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=600" },
    { name: locale === "es" ? "Cruceros Fluviales" : locale === "pt" ? "Cruzeiros Fluviais" : "Houseboat Cruises", desc: locale === "es" ? "Cruceros por los canales de Kerala" : locale === "pt" ? "Cruzeiros nos canais de Kerala" : "Kerala backwater cruises", icon: Ship, img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600" },
    { name: locale === "es" ? "Safaris de Vida Silvestre" : locale === "pt" ? "Safaris de Vida Selvagem" : "Wildlife Safaris", desc: locale === "es" ? "Descubra el Tigre Real de Bengala" : locale === "pt" ? "Descubra o Tigre Real de Bengala" : "Spot the Royal Bengal Tiger", icon: Camera, img: "https://images.unsplash.com/photo-1581791538302-03537b9c97bf?q=80&w=600" },
    { name: locale === "es" ? "Espiritualidad y Yoga" : locale === "pt" ? "Espiritualidade e Yoga" : "Spiritual Retreats", desc: locale === "es" ? "Retiros en Rishikesh" : locale === "pt" ? "Retiros em Rishikesh" : "Yoga retreats in Rishikesh", icon: Compass, img: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=600" },
  ];

  return (
    <div className="font-sans bg-[#FAF8F5] text-[#1B1B1B]">

      {/* 1. Hero Slider */}
      <HeroSlider locale={locale} slides={slides} ctaText={text.cta} inquireCTA={text.inquireCTA} />

      {/* 2. Why Choose Us - Stats + Trust */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pattern-dots pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal className="space-y-8">
              <div className="space-y-4">
                <span className="editorial-subheading block">{text.whySub}</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-royal leading-tight">
                  {text.whyTitle}
                </h2>
                <p className="text-base text-foreground/65 leading-relaxed max-w-lg">
                  {text.whyDesc}
                </p>
              </div>
              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-sand">
                <div className="space-y-1">
                  <span className="text-3xl font-serif font-bold text-forest">14+</span>
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-foreground/50">{text.statYears}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-3xl font-serif font-bold text-gold">5000+</span>
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-foreground/50">{text.statTravelers}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-3xl font-serif font-bold text-terracotta">100+</span>
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-foreground/50">{text.statDest}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-3xl font-serif font-bold text-royal">4.9</span>
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-foreground/50">{text.statRating}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150} className="grid grid-cols-12 grid-rows-6 gap-3 h-[500px]">
              <div className="col-span-7 row-span-6 rounded-2xl overflow-hidden shadow-lg image-zoom-container">
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

      {/* 3. Explore by Region */}
      <section className="py-24 bg-white border-y border-sand/50">
        <div className="max-w-7xl mx-auto px-6 space-y-14">
          <Reveal className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="editorial-subheading block">{text.regionsSub}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-royal">
              {text.regionsTitle}
            </h2>
            <p className="text-foreground/60 leading-relaxed">{text.regionsDesc}</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, i) => {
              const Icon = region.icon;
              return (
                <Reveal key={region.name} delay={i * 80}>
                  <Link href={`/${locale}/destinations`} className="group relative h-96 rounded-2xl overflow-hidden block">
                    <img src={region.img} loading="lazy" alt={region.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                    <div className="absolute bottom-0 p-6 text-white space-y-2">
                      <div className="flex items-center gap-2">
                        <Icon className="w-5 h-5 text-gold" />
                        <h3 className="text-lg font-serif font-bold">{region.name}</h3>
                      </div>
                      <p className="text-xs text-white/75 font-light">{region.desc}</p>
                      <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-1">
                        <span>Explore</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Featured Destinations */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-14">
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
            <Reveal key={state.slug} delay={i * 70}>
              <Link href={`/${locale}/destinations/${state.slug}`} className="group block h-full">
                <div className="relative h-[440px] rounded-2xl overflow-hidden">
                  <img
                    src={state.image}
                    loading="lazy"
                    alt={state.title[locale as "en" | "es" | "pt"] || state.title.en}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="badge-gold">{state.region}</span>
                  </div>
                  <div className="absolute bottom-0 p-6 text-white space-y-2 w-full">
                    <h3 className="text-2xl font-serif font-bold">{state.title[locale as "en" | "es" | "pt"] || state.title.en}</h3>
                    <p className="text-xs text-white/70 font-light line-clamp-2">
                      {state.tagline?.[locale as "en" | "es" | "pt"] || state.tagline?.en || ""}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-gold pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
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
      <section className="bg-cream py-24 border-y border-sand/40" id="popular-packages">
        <div className="max-w-7xl mx-auto px-6 space-y-14">
          <Reveal className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="editorial-subheading block">{text.packagesSub}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-royal">{text.packagesTitle}</h2>
            <p className="text-foreground/60 leading-relaxed">{text.packagesDesc}</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.slice(0, 6).map((pkg: any, i: number) => (
              <Reveal key={pkg.slug} delay={i * 70}>
                <div className="card-elevated flex flex-col h-full">
                  <div className="relative h-64 overflow-hidden rounded-t-[1.5rem]">
                    <img src={pkg.image} loading="lazy" alt={pkg.title.en} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-white/90 backdrop-blur-sm text-charcoal text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
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
                      <p className="text-sm text-foreground/60 leading-relaxed line-clamp-2">
                        {pkg.tagline[locale as "en" | "es" | "pt"] || pkg.tagline.en}
                      </p>
                      {/* Highlights */}
                      <div className="space-y-2 pt-3">
                        {pkg.highlights.slice(0, 3).map((hl: any, idx: number) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-foreground/70">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                            <span>{hl[locale as "en" | "es" | "pt"] || hl.en}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-5 mt-5 border-t border-sand/60 flex justify-between items-center">
                      <span className="text-[11px] font-semibold tracking-wider uppercase text-forest">
                        {locale === "es" ? "Precio a consultar" : locale === "pt" ? "Preço sob consulta" : "Price on Request"}
                      </span>
                      <Link href={`/${locale}#inquire-now`} className="text-xs font-semibold text-gold hover:text-terracotta flex items-center gap-1 transition-colors">
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

      {/* 6. Travel Experiences */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-14" id="experience-hub">
        <Reveal className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="editorial-subheading block">{text.experiencesSub}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-royal">{text.experiencesTitle}</h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <Reveal key={exp.name} delay={i * 70}>
                <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                  <img src={exp.img} loading="lazy" alt={exp.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/85 transition-colors duration-500" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                    <Icon className="w-8 h-8 text-gold mb-3 transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="text-xl font-serif font-bold mb-1">{exp.name}</h3>
                    <p className="text-sm text-white/70 font-light">{exp.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
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

      {/* 8. Testimonials */}
      <section className="py-24 bg-white border-y border-sand/40">
        <div className="max-w-7xl mx-auto px-6 space-y-14">
          <Reveal className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="editorial-subheading block">{text.testimonialsSub}</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal">{text.testimonialsTitle}</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.slice(0, 3).map((review: any, i: number) => (
              <Reveal key={review.id} delay={i * 80}>
                <div className="testimonial-card h-full flex flex-col">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: review.stars }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed italic flex-grow">
                    &ldquo;{review.quote[locale as "en" | "es" | "pt"] || review.quote.en}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 mt-6 pt-4 border-t border-sand/50">
                    <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-semibold text-royal">{review.name}</p>
                      <p className="text-[11px] text-foreground/50">{review.location}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Blog Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-14">
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
                  <div className="h-64 overflow-hidden">
                    <img
                      src={blog.featuredImage}
                      alt={blog.title[locale as "en" | "es" | "pt"] || blog.title.en}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7 space-y-4">
                    <div className="flex items-center gap-3 text-[11px] text-foreground/50 font-medium">
                      <span className="badge-forest">{blog.category}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {blog.readingTime} min
                      </span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-royal leading-snug group-hover:text-gold transition-colors line-clamp-2">
                      {blog.title[locale as "en" | "es" | "pt"] || blog.title.en}
                    </h3>
                    <p className="text-xs text-foreground/60 line-clamp-2 leading-relaxed">
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
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=1920"
            alt="India landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-royal/85" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white space-y-6">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
              {text.ctaBannerTitle}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-base text-white/75 leading-relaxed max-w-lg mx-auto">
              {text.ctaBannerSub}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link
              href={`/${locale}#inquire-now`}
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-white text-xs font-semibold uppercase tracking-wider py-4 px-10 rounded-full transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>{text.ctaBannerBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 11. Inquiry Form */}
      <section className="py-24 bg-cream" id="inquire-now">
        <div className="max-w-7xl mx-auto px-6">
          <InquiryForm locale={locale} />
        </div>
      </section>

    </div>
  );
}
