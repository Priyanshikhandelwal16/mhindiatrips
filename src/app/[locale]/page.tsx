import React from "react";
import Link from "next/link";
import { getStatesAction, getTourPackagesAction, getBlogsAction, getTestimonialsAction, getFoodsAction } from "@/app/actions/queries";
import InquiryForm from "@/components/common/InquiryForm";
import Reveal from "@/components/home/Reveal";
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
  const foods = await getFoodsAction();

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
      statYears: "Years on Ground",
      statTravelers: "Delighted Guests",
      statDest: "Unique Districts",
      statRating: "Guest Rating"
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
      statYears: "Años de Experiencia",
      statTravelers: "Huéspedes Felices",
      statDest: "Distritos Únicos",
      statRating: "Valoración Media"
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
      statYears: "Anos de Experiência",
      statTravelers: "Hóspedes Felizes",
      statDest: "Distritos Únicos",
      statRating: "Avaliação Média"
    }
  };

  const text = labels[locale] || labels.en;

  const slides = [
    {
      image: "/images/taj_mahal_sunrise.png",
      location: "Agra, Uttar Pradesh",
      sub: locale === "es" ? "Monumento al Amor" : locale === "pt" ? "Monumento ao Amor" : "Icon of Eternal Love",
      title: locale === "es" ? "Taj Mahal al Amanecer" : locale === "pt" ? "Taj Mahal ao Amanhecer" : "Taj Mahal Sunrise",
      desc: locale === "es" ? "Contemple el majestuoso Taj Mahal en privado con luz dorada del amanecer." : locale === "pt" ? "Contemple o majestoso Taj Mahal em privado com luz dourada do amanhecer." : "Witness the ivory-white marble mausoleum in complete peace, before crowds arrive, guided by our heritage specialists."
    },
    {
      image: "/images/rajasthan_fort_sunset.png",
      location: "Jaipur, Rajasthan",
      sub: locale === "es" ? "Tierra de Reyes" : locale === "pt" ? "Terra de Reis" : "Land of Sovereigns",
      title: locale === "es" ? "Fuertes de Rajasthan" : locale === "pt" ? "Fortes do Rajastão" : "Rajasthan Royal Forts",
      desc: locale === "es" ? "Explore palacios imperiales de color rosa y fortalezas sobre colinas en carruajes privados." : locale === "pt" ? "Explore palácios imperiais de cor rosa e fortalezas sobre colinas em carruagens privadas." : "Immerse yourself in heritage luxury rooms, sunset lake views, and private royal hospitality archives."
    },
    {
      image: "/images/kerala_backwaters_houseboat.png",
      location: "Alleppey, Kerala",
      sub: locale === "es" ? "Canales Tropicales" : locale === "pt" ? "Canais Tropicais" : "Tropical Waterways",
      title: locale === "es" ? "Crucero en Casa Flotante" : locale === "pt" ? "Cruzeiro em Casa Flutuante" : "Backwater Houseboats",
      desc: locale === "es" ? "Navegue por lagunas serenas bordeadas de palmeras a bordo de una casa flotante privada de lujo." : locale === "pt" ? "Navegue por lagoas serenas cercadas de palmeiras a bordo de uma casa flutuante privada de luxo." : "Cruise the palm-fringed rivers of Southern India on your private thatched luxury houseboat with a personal chef."
    },
    {
      image: "/images/luxury_palace_train.png",
      location: "North & West India",
      sub: locale === "es" ? "Trenes de Palacio" : locale === "pt" ? "Trens de Palácio" : "Palace Trains",
      title: locale === "es" ? "El Tren de Lujo Exclusivo" : locale === "pt" ? "O Trem de Luxo Exclusivo" : "Palace on Wheels Journey",
      desc: locale === "es" ? "Viaje como la realeza india en una suite privada sobre rieles con servicio de mayordomo de 5 estrellas." : locale === "pt" ? "Viaje como a realeza indiana em uma suíte privada sobre trilhos com serviço de mordomo de 5 estrelas." : "Journey across royal states in premium private cabins, combining heritage comfort, custom meals, and daily guided excursions."
    },
    {
      image: "/images/ranthambore_tiger_safari.png",
      location: "Ranthambore, Rajasthan",
      sub: locale === "es" ? "Aventura Salvaje" : locale === "pt" ? "Aventura Selvagem" : "Wild Horizon",
      title: locale === "es" ? "Safari de Tigres Reales" : locale === "pt" ? "Safari de Tigres Reais" : "Bengal Tiger Safaris",
      desc: locale === "es" ? "Rastree tigres de Bengala en libertad en vehículos 4x4 privados con naturalistas expertos." : locale === "pt" ? "Rastreie tigres de Bengala em liberdade em veículos 4x4 privados com naturalistas experientes." : "Track the elusive Bengal Tiger in ancient dry-deciduous forests in private open-top luxury jeeps."
    }
  ];

  const homepageFaqs = [
    {
      q: locale === "es" ? "¿Qué hace que sus tours sean únicos?" : locale === "pt" ? "O que torna seus tours únicos?" : "What makes your tours unique?",
      a: locale === "es" ? "Nuestros tours son 100% privados. Viajará con vehículos y chóferes dedicados, guías expertos autorizados y suites en hoteles palacio seleccionados de cinco estrellas." : locale === "pt" ? "Nossos tours são 100% privados. Você viajará com motorista dedicado, guias certificados e estadias em palácios cinco estrelas." : "Every single itinerary is crafted from scratch. We secure private monument openings, arrange special dinners inside palaces, and provide full concierge support throughout."
    },
    {
      q: locale === "es" ? "¿Cómo reservo un viaje personalizado?" : locale === "pt" ? "Como reservo uma viagem personalizada?" : "How do I book a custom journey?",
      a: locale === "es" ? "Simplemente complete nuestro formulario de consulta. Su diseñador de viajes asignado lo contactará en 24 horas para comenzar a trabajar." : locale === "pt" ? "Basta preencher o formulário. Seu designer de viagens entrará em contato em 24 horas para dar início ao esboço." : "Simply fill out our tailored inquiry form. Your designated private travel designer will connect with you via phone or email to craft your itinerary draft."
    }
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      
      {/* SECTION 1: Full-Width Editorial Hero Banner (Pure Luxury Layout) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Render Slide 1 as a static premium background overlay */}
        <img 
          src={slides[0].image} 
          alt="Luxury India Trips" 
          className="absolute inset-0 w-full h-full object-cover scale-100 animate-kenburns"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-royal/55 via-royal/35 to-royal/80" />
        
        {/* Floating post-card text */}
        <div className="relative z-10 text-center text-white space-y-6 px-6 max-w-4xl mt-20">
          <Reveal>
            <span className="bg-gold/90 text-royal text-[9px] uppercase tracking-[0.25em] font-extrabold px-5 py-2 rounded-full shadow-lg inline-block">
              {text.heroSub}
            </span>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="text-4xl md:text-7xl font-serif font-black tracking-tight leading-[1.1] text-white">
              {text.heroTitle}
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-sm md:text-lg text-white/85 max-w-2xl mx-auto font-light leading-relaxed">
              {text.heroDesc}
            </p>
          </Reveal>
          
          <Reveal delay={450} className="pt-8 flex flex-wrap justify-center gap-4">
            <Link href="#destinations" className="bg-gold hover:bg-gold-light text-royal text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-transform hover:scale-105 shadow-lg shadow-gold/15">
              {text.cta}
            </Link>
            <Link href="#inquire-now" className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full border border-white/20 transition-colors">
              {text.inquireCTA}
            </Link>
          </Reveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-20">
          <span className="text-[8px] uppercase tracking-[0.3em] text-white font-bold">Discover</span>
          <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* SECTION 2: The Philosophy Section (Split screen layout) */}
      <section className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b border-gold/10">
        <Reveal className="space-y-6">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold flex items-center gap-1.5">
            <Compass className="w-4 h-4" />
            <span>{text.whySub}</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-royal leading-tight">
            {text.whyTitle}
          </h2>
          <p className="text-sm text-foreground/60 leading-relaxed font-light">
            We believe travel is not about ticking off boxes; it is a fine art. For over 15 years, our on-ground concierge desks have unlocked private access to monuments, designed authentic cultural encounters, and hosted global travelers in India’s finest grand suites.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="space-y-1">
              <span className="text-3xl font-serif font-black text-gold">24/7</span>
              <p className="text-xs uppercase tracking-wider text-foreground/50 font-bold">On-Ground Support</p>
            </div>
            <div className="space-y-1">
              <span className="text-3xl font-serif font-black text-gold">100%</span>
              <p className="text-xs uppercase tracking-wider text-foreground/50 font-bold">Private & Guided</p>
            </div>
          </div>
        </Reveal>
        
        {/* Postcard frame */}
        <Reveal delay={200} className="relative p-3 bg-white border border-gold/15 rounded-3xl shadow-xl shadow-royal/5">
          <div className="overflow-hidden rounded-2xl h-[420px]">
            <img src="/images/rajasthan_fort_sunset.png" alt="Philosophy" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-royal text-white p-6 rounded-2xl max-w-xs space-y-2 shadow-lg hidden md:block">
            <h4 className="font-serif font-bold text-gold text-sm">Palace Heritage</h4>
            <p className="text-[11px] text-white/70 leading-relaxed font-light">We organize private dinners inside authentic lake palaces and medieval desert forts.</p>
          </div>
        </Reveal>
      </section>

      {/* SECTION 3: Custom Destinations (Postcards layout) */}
      <section id="destinations" className="max-w-7xl mx-auto px-6 py-28 space-y-16 border-b border-gold/10">
        <div className="text-center space-y-3 max-w-lg mx-auto">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold block">{text.regionsSub}</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal tracking-tight">{text.regionsTitle}</h2>
          <p className="text-xs text-foreground/50 leading-relaxed font-light">{text.regionsDesc}</p>
          <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {states.slice(0, 3).map((st: any, i: number) => (
            <Reveal key={st.slug} delay={i * 80}>
              <Link href={`/${locale}/destinations/${st.slug}`} className="group block">
                <div className="bg-white border border-gold/10 rounded-2xl overflow-hidden shadow-md transition-transform duration-500 hover:-translate-y-2 hover:border-gold/25">
                  <div className="h-56 overflow-hidden relative">
                    <img src={st.image} alt={st.title?.en} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute top-4 left-4 bg-royal text-gold text-[9px] uppercase tracking-wider font-bold px-2.5 py-1 rounded shadow-sm">
                      {st.region} India
                    </span>
                  </div>
                  <div className="p-6 space-y-3 bg-white">
                    <h3 className="text-lg font-serif font-bold text-royal group-hover:text-gold transition-colors">
                      {st.title?.[locale] || st.title?.en}
                    </h3>
                    <p className="text-xs text-foreground/55 line-clamp-3 leading-relaxed font-light">
                      {st.tagline?.[locale] || st.tagline?.en}
                    </p>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold flex items-center gap-1.5 pt-2">
                      <span>Explore Region</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 4: Curated Packages (Signature Cards Grid) */}
      <section className="max-w-7xl mx-auto px-6 py-28 space-y-16 border-b border-gold/10">
        <div className="text-center space-y-3 max-w-lg mx-auto">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold block">{text.packagesSub}</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal tracking-tight">{text.packagesTitle}</h2>
          <p className="text-xs text-foreground/50 leading-relaxed font-light">{text.packagesDesc}</p>
          <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPackages.slice(0, 3).map((pkg: any, i: number) => (
            <Reveal key={pkg.slug} delay={i * 80}>
              <Link href={`/${locale}/packages`} className="group block h-full">
                <div className="bg-white border border-gold/10 rounded-2xl overflow-hidden shadow-md flex flex-col h-full transition-transform duration-500 hover:-translate-y-2 hover:border-gold/25">
                  <div className="h-48 shrink-0 overflow-hidden relative">
                    <img src={pkg.image} alt={pkg.title?.en} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-royal text-[9px] uppercase font-bold tracking-wider px-2.5 py-1 rounded shadow-sm">
                      {pkg.durationDays} Days
                    </span>
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow bg-white">
                    <div className="space-y-2">
                      <h3 className="text-base font-serif font-bold text-royal group-hover:text-gold transition-colors leading-snug">
                        {pkg.title?.[locale] || pkg.title?.en}
                      </h3>
                      <p className="text-xs text-foreground/55 line-clamp-3 leading-relaxed font-light">
                        {pkg.tagline?.[locale] || pkg.tagline?.en}
                      </p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold flex items-center gap-1 mt-4">
                      <span>Request Draft</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 5: Gastronomy Preview (Curated Culinary Card) */}
      <section className="max-w-7xl mx-auto px-6 py-28 border-b border-gold/10">
        <div className="bg-royal border border-gold/15 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 relative">
          <div className="lg:col-span-5 h-[320px] lg:h-full relative overflow-hidden">
            <img src="/images/indian_cuisine_feast.png" alt="Culinary Spices" className="w-full h-full object-cover animate-kenburns" />
          </div>
          <div className="lg:col-span-7 p-10 md:p-16 flex flex-col justify-center space-y-6 text-white bg-royal relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/5 via-transparent to-transparent pointer-events-none" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold">{text.foodSub}</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">{text.foodTitle}</h2>
            <p className="text-xs text-white/70 leading-relaxed font-light max-w-md">
              India's cultural geography is best tasted. From royal Mughal slow-cooked saffron curries to local coconut fish marinades, we map private food walks and dining logs.
            </p>
            <div className="pt-2">
              <Link href={`/${locale}/food`} className="bg-gold hover:bg-gold-light text-royal text-[10px] font-bold uppercase tracking-widest px-6 py-3.5 rounded-full transition-transform hover:scale-105 inline-block shadow-md">
                Explore Food Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Customer Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-28 space-y-16 border-b border-gold/10">
        <div className="text-center space-y-3 max-w-lg mx-auto">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold block">{text.testimonialsSub}</span>
          <h2 className="text-3xl font-serif font-bold text-royal tracking-tight">{text.testimonialsTitle}</h2>
          <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((test: any, i: number) => (
            <Reveal key={i} delay={i * 80}>
              <div className="bg-white border border-gold/10 p-8 rounded-2xl shadow-sm space-y-5 relative">
                <div className="flex gap-1 text-gold">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-foreground/60 italic leading-relaxed font-light">"{test.text?.[locale] || test.text?.en}"</p>
                <div className="border-t border-sand/40 pt-4 flex justify-between items-center text-xs">
                  <span className="font-bold text-royal">{test.author}</span>
                  <span className="text-[10px] text-foreground/45 uppercase tracking-wider">{test.location}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 7: Curated Concierge FAQs */}
      <section className="max-w-4xl mx-auto px-6 py-28 space-y-16 border-b border-gold/10">
        <div className="text-center space-y-3 max-w-lg mx-auto">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold block">{text.faqSub}</span>
          <h2 className="text-3xl font-serif font-bold text-royal tracking-tight">{text.faqTitle}</h2>
          <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
        </div>

        <div className="space-y-5">
          {homepageFaqs.map((f, i) => (
            <details key={i} className="group border-b border-gold/10 pb-5" open={i === 0}>
              <summary className="flex justify-between items-center font-serif font-bold text-royal cursor-pointer list-none text-base">
                <span>{f.q}</span>
                <span className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center text-gold text-xs transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="text-xs text-foreground/60 mt-3 leading-relaxed pl-2 border-l border-gold/25 font-light">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* SECTION 8: Blog Log */}
      {blogs.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-28 space-y-16 border-b border-gold/10">
          <div className="text-center space-y-3 max-w-lg mx-auto">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold block">{text.blogsSub}</span>
            <h2 className="text-3xl font-serif font-bold text-royal tracking-tight">{text.blogsTitle}</h2>
            <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.slice(0, 3).map((post: any, i: number) => (
              <Reveal key={post.slug} delay={i * 80}>
                <Link href={`/${locale}/blog/${post.slug}`} className="group block">
                  <div className="bg-white border border-gold/10 rounded-2xl overflow-hidden shadow-sm transition-transform duration-500 hover:-translate-y-1 hover:border-gold/25">
                    <div className="h-44 overflow-hidden">
                      <img src={post.featuredImage} alt={post.title?.en} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="p-6 space-y-3 bg-white">
                      <span className="text-[9px] uppercase tracking-wider font-bold text-gold">{post.category}</span>
                      <h3 className="text-sm font-serif font-bold text-royal group-hover:text-gold transition-colors leading-snug">
                        {post.title?.[locale] || post.title?.en}
                      </h3>
                      <span className="text-[9px] text-foreground/45 uppercase tracking-wider block pt-1">
                        {post.readingTime} Min Read &bull; By {post.author}
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 9: Tailored Inquiry Callout Panel */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <InquiryForm locale={locale} />
      </section>

    </div>
  );
}
