import React from "react";
import Link from "next/link";
import { getTourPackagesAction } from "@/app/actions/queries";
import Reveal from "@/components/home/Reveal";
import { 
  Calendar, CheckCircle, ArrowRight, Sparkles, Hotel, Car, UserCheck, ShieldCheck 
} from "lucide-react";

interface PackagesPageProps {
  params: Promise<{ locale: string }>;
}

export default async function PackagesPage({ params }: PackagesPageProps) {
  const { locale } = await params;
  const packages = await getTourPackagesAction();

  const t: Record<string, any> = {
    en: {
      heroSub: "Curated Experiences",
      heroTitle: "Signature Tour Packages",
      heroDesc: "Handcrafted luxury itineraries designed by local experts. Every journey is tailored to your pace, interests, and travel style.",
      allTitle: "All Tour Packages",
      allDesc: "Explore our collection of curated India journeys — from heritage palaces to spiritual retreats.",
      featuredSub: "Featured Journey",
      featuredTitle: "Imperial Golden Triangle",
      featuredDesc: "Our most popular luxury tour combining Delhi, Agra & Jaipur. Stay in palace hotels, enjoy private Taj Mahal access at sunrise, and explore royal forts with expert historians.",
      featuredCta: "Inquire About This Tour",
      whySub: "The MH India Trips Promise",
      whyTitle: "Why Book With Us",
      processSub: "How It Works",
      processTitle: "Your Journey in 4 Simple Steps",
      ctaTitle: "Ready to Start Your India Journey?",
      ctaDesc: "Tell us your dream itinerary and our experts will craft the perfect package for you.",
      ctaBtn: "Plan My Trip",
      days: "Days",
      inquire: "Request Details",
      privateTour: "Private Tour",
      priceOnRequest: "Price on Request",
      viewDetails: "View Details",
      inclusionsTitle: "What's Included:"
    },
    es: {
      heroSub: "Experiencias Selectas",
      heroTitle: "Paquetes de Tour Exclusivos",
      heroDesc: "Itinerarios de lujo diseñados por expertos locales. Cada viaje se adapta a su ritmo, intereses y estilo.",
      allTitle: "Todos los Paquetes",
      allDesc: "Explore nuestra colección de viajes curados — desde palacios patrimoniales hasta retiros espirituales.",
      featuredSub: "Viaje Destacado",
      featuredTitle: "Triángulo de Oro Imperial",
      featuredDesc: "Nuestro tour de lujo más popular combinando Delhi, Agra y Jaipur. Hoteles-palacio, acceso privado al Taj Mahal al amanecer y exploración de fortalezas reales.",
      featuredCta: "Consultar Sobre Este Tour",
      whySub: "La Promesa MH India Trips",
      whyTitle: "Por Qué Reservar Con Nosotros",
      processSub: "Cómo Funciona",
      processTitle: "Su Viaje en 4 Pasos Simples",
      ctaTitle: "¿Listo Para Su Viaje a la India?",
      ctaDesc: "Cuéntenos su itinerario soñado y nuestros expertos crearán el paquete perfecto.",
      ctaBtn: "Planear Mi Viaje",
      days: "Días",
      inquire: "Solicitar Detalles",
      privateTour: "Tour Privado",
      priceOnRequest: "Precio a Consultar",
      viewDetails: "Ver Detalles",
      inclusionsTitle: "Qué está incluido:"
    },
    pt: {
      heroSub: "Experiências Selecionadas",
      heroTitle: "Pacotes de Tour Exclusivos",
      heroDesc: "Itinerários de luxo desenhados por especialistas locais. Cada viagem é adaptada ao seu ritmo, interesses e estilo.",
      allTitle: "Todos os Pacotes",
      allDesc: "Explore nossa coleção de viagens curadas — de palácios patrimoniais a retiros espirituais.",
      featuredSub: "Viagem em Destaque",
      featuredTitle: "Triângulo de Ouro Imperial",
      featuredDesc: "Nosso tour de luxo mais popular combinando Deli, Agra e Jaipur. Hotéis-palácio, acesso privado ao Taj Mahal ao amanhecer e exploração de forças reais.",
      featuredCta: "Consultar Sobre Este Tour",
      whySub: "A Promessa MH India Trips",
      whyTitle: "Por Que Reservar Conosco",
      processSub: "Como Funciona",
      processTitle: "Sua Viagem em 4 Passos Simples",
      ctaTitle: "Pronto Para Sua Viagem à Índia?",
      ctaDesc: "Conte-nos seu itinerário dos sonhos e nossos especialistas criarão o pacote perfeito.",
      ctaBtn: "Planejar Minha Viagem",
      days: "Dias",
      inquire: "Solicitar Detalhes",
      privateTour: "Tour Privado",
      priceOnRequest: "Preço Sob Consulta",
      viewDetails: "Ver Detalhes",
      inclusionsTitle: "O que está incluído:"
    },
  };

  const text = t[locale] || t.en;

  const processSteps = [
    {
      step: "01",
      title: locale === "es" ? "Cuéntenos Su Sueño" : locale === "pt" ? "Conte-nos Seu Sonho" : "Share Your Dream",
      desc: locale === "es" ? "Comparta sus intereses, fechas y presupuesto con nosotros." : locale === "pt" ? "Compartilhe seus interesses, datas e orçamento com a gente." : "Share your interests, dates, and budget with our luxury designers.",
    },
    {
      step: "02",
      title: locale === "es" ? "Itinerario a Medida" : locale === "pt" ? "Itinerário Sob Medida" : "Custom Itinerary",
      desc: locale === "es" ? "Nuestros expertos diseñan un viaje único adaptado para usted." : locale === "pt" ? "Nossos especialistas desenham uma viagem única para você." : "Our destination experts design a unique, personalized journey.",
    },
    {
      step: "03",
      title: locale === "es" ? "Refinar y Confirmar" : locale === "pt" ? "Refinar e Confirmar" : "Refine & Confirm",
      desc: locale === "es" ? "Ajustamos cada detalle hasta que sea absolutamente perfecto." : locale === "pt" ? "Ajustamos cada detalhe até ficar perfeito." : "We fine-tune every hotel, vehicle, and activity detail until it is perfect.",
    },
    {
      step: "04",
      title: locale === "es" ? "Viaje y Disfrute" : locale === "pt" ? "Viaje e Aproveite" : "Travel & Enjoy",
      desc: locale === "es" ? "Relájese mientras nuestro equipo se encarga de todo." : locale === "pt" ? "Relaxe enquanto cuidamos de tudo no local." : "Relax as our 24/7 on-ground concierge team handles all logistics.",
    },
  ];

  const categories = Array.from(new Set(packages.map((p: any) => p.category))).filter(Boolean);
  const featured = packages.find((p: any) => p.slug === "golden-triangle-luxury") || packages[0];

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">

      {/* SECTION 1: Hero Banner (Adjusted size parameters, unique image) */}
      <section className="relative h-[65vh] min-h-[460px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/luxury_palace_train.png"
          alt="Tour Packages India"
          className="absolute inset-0 w-full h-full object-cover object-[center_35%] scale-100 animate-kenburns"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center text-white space-y-6 px-6 mt-20 max-w-4xl">
          <span className="bg-gold text-royal text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full inline-block">
            {text.heroSub}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white">
            {text.heroTitle}
          </h1>
          <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            {text.heroDesc}
          </p>
        </div>
      </section>

      {/* SECTION 2: Packages Grid */}
      <section className="max-w-7xl mx-auto px-6 py-28 space-y-16">
        <Reveal className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold block">{text.heroSub}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-royal tracking-tight">{text.allTitle}</h2>
          <p className="text-sm text-foreground/50 leading-relaxed font-light">{text.allDesc}</p>
          <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
        </Reveal>

        {/* Category Tags */}
        <Reveal className="flex flex-wrap justify-center gap-3">
          {categories.map((cat: any) => (
            <span
              key={cat}
              className="px-5 py-2 rounded-full border border-gold/15 text-[10px] font-bold uppercase tracking-wider text-royal bg-white shadow-sm"
            >
              {cat}
            </span>
          ))}
        </Reveal>

        {/* Grid of Large Cards with Clear Inclusions details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg: any, i: number) => (
            <Reveal key={pkg.slug} delay={i * 80}>
              <div id={pkg.slug} className="bg-white border border-gold/10 rounded-[2rem] overflow-hidden shadow-lg flex flex-col h-full transition-all duration-500 hover:-translate-y-2 hover:border-gold/25 hover:shadow-2xl scroll-mt-28">
                
                <div className="relative h-64 overflow-hidden shrink-0">
                  <img
                    src={pkg.image}
                    loading="lazy"
                    alt={pkg.title[locale as "en" | "es" | "pt"] || pkg.title.en}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-sm text-royal text-[9px] uppercase tracking-wider font-extrabold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gold" />
                      {pkg.durationDays} {text.days}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-gold/90 backdrop-blur-sm text-royal text-[9px] uppercase tracking-wider font-black px-3 py-1.5 rounded-full">
                      {text.privateTour}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-royal text-gold text-[8px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-gold/20">
                      {pkg.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow bg-white justify-between">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-royal leading-snug">
                      {pkg.title[locale as "en" | "es" | "pt"] || pkg.title.en}
                    </h3>
                    <p className="text-xs md:text-sm text-foreground/55 leading-relaxed font-light">
                      {pkg.tagline[locale as "en" | "es" | "pt"] || pkg.tagline.en}
                    </p>

                    {/* Standard Clear Inclusions Panel */}
                    <div className="pt-4 border-t border-gold/10 space-y-3">
                      <span className="text-[10px] uppercase tracking-wider font-extrabold text-gold block">{text.inclusionsTitle}</span>
                      <div className="grid grid-cols-2 gap-2 text-xs font-light text-foreground/60">
                        <div className="flex items-center gap-1.5">
                          <Hotel className="w-3.5 h-3.5 text-gold shrink-0" />
                          <span>5-Star Palace</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Car className="w-3.5 h-3.5 text-gold shrink-0" />
                          <span>Private SUV</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <UserCheck className="w-3.5 h-3.5 text-gold shrink-0" />
                          <span>Personal Guide</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-gold shrink-0" />
                          <span>Daily Breakfast</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 pt-3">
                      {pkg.highlights.slice(0, 3).map((hl: any, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-foreground/65 font-light">
                          <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                          <span>{hl[locale as "en" | "es" | "pt"] || hl.en}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-6 mt-6 border-t border-gold/15 flex justify-between items-center bg-white">
                    <span className="text-[10px] font-extrabold tracking-wider uppercase text-gold">
                      {text.priceOnRequest}
                    </span>
                    <Link
                      href={`/${locale}/contact`}
                      className="text-xs font-bold uppercase tracking-wider text-forest hover:text-gold flex items-center gap-1 transition-colors"
                    >
                      <span>{text.inquire}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 3: Featured highlight */}
      <section className="bg-royal text-white py-24 relative overflow-hidden border-t border-gold/10">
        <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#B8964B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative rounded-[2.5rem] overflow-hidden h-[420px] shadow-2xl border border-gold/15">
                <img
                  src={featured?.image}
                  alt={featured?.title?.en}
                  loading="lazy"
                  className="w-full h-full object-cover animate-kenburns"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal/60 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <span className="bg-gold text-royal text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {locale === "es" ? "Más Popular" : locale === "pt" ? "Mais Popular" : "Most Popular"}
                  </span>
                  <span className="bg-white/10 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/20">
                    {featured?.durationDays} {text.days}
                  </span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150} className="space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold block">{text.featuredSub}</span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                {featured?.title?.[locale as "en" | "es" | "pt"] || featured?.title?.en}
              </h2>
              <p className="text-sm md:text-base text-white/70 leading-relaxed font-light">
                {text.featuredDesc}
              </p>
              <div className="space-y-3 pt-2">
                {featured?.highlights?.slice(0, 3).map((hl: any, idx: number) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-white/75 font-light">
                    <Sparkles className="w-4 h-4 text-gold shrink-0 mt-0.5 animate-pulse" />
                    <span>{hl[locale as "en" | "es" | "pt"] || hl.en}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Link
                  href={`/${locale}/contact`}
                  className="bg-gold hover:bg-gold-light text-royal text-xs font-bold uppercase tracking-widest py-4 px-8 rounded-full transition-transform hover:scale-105 inline-flex items-center gap-1.5 shadow-lg shadow-gold/25"
                >
                  <span>{text.featuredCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 4: Process timeline (Increased card size and font sizes) */}
      <section className="bg-white border-y border-gold/15 py-28">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <Reveal className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold block">{text.processSub}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-royal tracking-tight">{text.processTitle}</h2>
            <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="relative p-10 rounded-[2rem] bg-[#FAF8F5] border border-gold/15 h-full transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md">
                  <span className="text-6xl font-bold text-gold/10 absolute top-4 right-6">{step.step}</span>
                  <div className="relative z-10 space-y-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <span className="text-xs font-bold text-gold">{step.step}</span>
                    </div>
                    <h4 className="text-base font-bold text-royal uppercase tracking-wider">{step.title}</h4>
                    <p className="text-sm text-foreground/60 leading-relaxed font-light">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA Book (Point to Contact page) */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/rajasthan_fort_sunset.png"
            alt=""
            className="w-full h-full object-cover scale-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-royal/85" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white space-y-6">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{text.ctaTitle}</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-sm md:text-base text-white/70 font-light leading-relaxed max-w-lg mx-auto">{text.ctaDesc}</p>
          </Reveal>
          <Reveal delay={200} className="pt-4">
            <Link
              href={`/${locale}/contact`}
              className="bg-gold hover:bg-gold-light text-royal text-xs font-bold uppercase tracking-widest py-4.5 px-10 rounded-full transition-transform hover:scale-105 inline-flex items-center gap-1.5 shadow-lg shadow-gold/25"
            >
              <span>{text.ctaBtn}</span>
              <ArrowRight className="w-4 h-4 text-royal" />
            </Link>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
