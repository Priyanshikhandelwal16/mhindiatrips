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
      viewAll: "View All Experiences"
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
      viewAll: "Ver Todas las Experiencias"
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
      viewAll: "Ver Todas as Experiências"
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

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      
      {/* SECTION 1: Full-Width Cinematic Hero Banner (100vh height) */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <img 
          src="/images/taj_mahal_sunrise.png" 
          alt="Luxury India Trips" 
          className="absolute inset-0 w-full h-full object-cover scale-100 animate-kenburns"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 text-center text-white space-y-8 px-6 max-w-5xl mt-24">
          <Reveal>
            <span className="bg-gold text-royal text-xs font-bold uppercase tracking-[0.3em] px-6 py-2.5 rounded-full shadow-lg inline-block">
              {text.heroSub}
            </span>
          </Reveal>
          <Reveal delay={150}>
            {/* Hero Heading: 56px–72px */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-white">
              {text.heroTitle}
            </h1>
          </Reveal>
          <Reveal delay={300}>
            {/* Paragraph: 16px–18px */}
            <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
              {text.heroDesc}
            </p>
          </Reveal>
          
          {/* Buttons: 16px–18px */}
          <Reveal delay={450} className="pt-8 flex flex-wrap justify-center gap-6">
            <Link href="#destinations" className="bg-gold hover:bg-gold-light text-royal text-base md:text-lg font-bold uppercase tracking-widest px-10 py-5 rounded-full transition-transform hover:scale-105 shadow-xl shadow-gold/20">
              {text.cta}
            </Link>
            <Link href="#inquire-now" className="bg-white/10 hover:bg-white/20 text-white text-base md:text-lg font-bold uppercase tracking-widest px-10 py-5 rounded-full border border-white/35 transition-colors">
              {text.inquireCTA}
            </Link>
          </Reveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white font-bold">Discover</span>
          <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
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
          {states.slice(0, 3).map((st: any, i: number) => (
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
          {tourPackages.slice(0, 3).map((pkg: any, i: number) => (
            <Reveal key={pkg.slug} delay={i * 80}>
              <Link href={`/${locale}/packages`} className="group block h-full">
                <div className="bg-white border border-gold/10 rounded-[2rem] overflow-hidden shadow-lg flex flex-col h-full transition-all duration-500 hover:-translate-y-3 hover:border-gold/25 hover:shadow-2xl">
                  <div className="h-64 shrink-0 overflow-hidden relative">
                    <img src={pkg.image} alt={pkg.title?.en} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm text-royal text-[10px] uppercase font-bold tracking-wider px-4 py-2 rounded-full shadow-sm">
                      {pkg.durationDays} Days
                    </span>
                  </div>
                  {/* Padding: p-8 */}
                  <div className="p-8 flex flex-col justify-between flex-grow bg-white">
                    <div className="space-y-3">
                      <h3 className="text-xl md:text-2xl font-bold text-royal group-hover:text-gold transition-colors leading-snug">
                        {pkg.title?.[locale] || pkg.title?.en}
                      </h3>
                      <p className="text-sm md:text-base text-foreground/55 line-clamp-3 leading-relaxed font-light">
                        {pkg.tagline?.[locale] || pkg.tagline?.en}
                      </p>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-1.5 pt-4 border-t border-gold/10 mt-6">
                      <span>Request Draft Itinerary</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
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

      {/* SECTION 5: Gastronomy Preview (Curated Culinary Card) */}
      <section className="max-w-7xl mx-auto px-6 py-32 border-b border-gold/10 space-y-16">
        <div className="bg-royal border border-gold/15 rounded-[2.5rem] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 relative shadow-2xl">
          <div className="lg:col-span-5 h-[400px] lg:h-full relative overflow-hidden">
            <img src="/images/indian_cuisine_feast.png" alt="Culinary Spices" className="w-full h-full object-cover animate-kenburns" />
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

      {/* SECTION 6: Customer Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-32 space-y-20 border-b border-gold/10">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold block">{text.testimonialsSub}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-royal tracking-tight">{text.testimonialsTitle}</h2>
          <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {clientReviews.map((test: any, i: number) => (
            <Reveal key={i} delay={i * 80}>
              <div className="bg-white border border-gold/15 p-12 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-300 space-y-6 relative h-full flex flex-col justify-between hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="flex gap-1 text-gold">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm md:text-base text-foreground/70 italic leading-relaxed font-light">
                    "{test.text[locale as "en"|"es"|"pt"] || test.text.en}"
                  </p>
                </div>
                <div className="border-t border-gold/10 pt-5 space-y-1.5 mt-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-royal">{test.author}</span>
                    <span className="text-[10px] text-gold uppercase tracking-wider font-extrabold">{test.location}</span>
                  </div>
                  <p className="text-[10px] text-foreground/40 uppercase tracking-wider font-medium">{test.tour}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

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
            {blogs.slice(0, 3).map((post: any, i: number) => (
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
