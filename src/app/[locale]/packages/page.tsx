import React from "react";
import Link from "next/link";
import { getTourPackagesAction } from "@/app/actions/queries";
import { ArrowRight, Sparkles } from "lucide-react";
import PackagesFilterSection from "@/components/packages/PackagesFilterSection";

interface PackagesPageProps {
  params: Promise<{ locale: string }>;
}

export default async function PackagesPage({ params }: PackagesPageProps) {
  const { locale } = await params;
  const packages = await getTourPackagesAction();
  const lang = (locale === "es" || locale === "pt") ? locale : "en";

  const t: Record<string, any> = {
    en: {
      heroSub: "Curated Experiences",
      heroTitle: "Signature Tour Packages",
      heroDesc: "Handcrafted luxury itineraries designed by local experts. Every journey is tailored to your personal pace, interests, and style.",
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
      heroDesc: "Itinerarios de lujo diseñados por expertos locales. Cada viaje se adapta a su ritmo, intereses y estilo personal.",
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
      heroDesc: "Itinerários de luxo desenhados por especialistas locais. Cada viagem é adaptada ao seu ritmo, interesses e estilo pessoal.",
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

  const categories = Array.from(new Set(packages.map((p: any) => p.category))).filter(Boolean) as string[];
  const featured = packages.find((p: any) => p.slug === "golden-triangle-luxury") || packages[0];

  return (
    <div className="bg-ivory-100 min-h-screen font-sans text-charcoal-800">

      {/* SECTION 1: Hero Banner */}
      <section className="relative h-[65vh] min-h-[480px] flex items-center justify-center overflow-hidden pt-28 md:pt-36">
        <img
          src="/images/luxury_palace_train.png"
          alt="Tour Packages India"
          className="absolute inset-0 w-full h-full object-cover object-[center_35%] filter brightness-[0.70] contrast-[1.05]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/65 via-transparent to-charcoal-900/40" />
        <div className="relative z-10 text-center text-ivory-100 space-y-6 px-6 max-w-4xl animate-fade-in">
          <span className="bg-charcoal-900/80 border border-sand-300/30 text-sand-300 text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full inline-block">
            {text.heroSub}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-normal tracking-tight leading-tight text-white">
            {text.heroTitle}
          </h1>
          <p className="text-sm md:text-base text-ivory-100/90 max-w-2xl mx-auto font-light leading-relaxed">
            {text.heroDesc}
          </p>
        </div>
      </section>

      {/* SECTION 2: Packages Grid */}
      <section className="editorial-container py-24 space-y-16">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-sand-500 font-bold block">{text.heroSub}</span>
          <h2 className="text-3xl md:text-4xl font-serif font-normal text-charcoal-800 tracking-tight">{text.allTitle}</h2>
          <p className="text-sm text-charcoal-800/60 leading-relaxed font-sans font-light">{text.allDesc}</p>
          <div className="h-px w-20 bg-sand-300 mx-auto mt-2" />
        </div>

        <PackagesFilterSection 
          packages={packages} 
          locale={locale} 
          categories={categories} 
          text={text} 
        />
      </section>

      {/* SECTION 3: Featured highlight */}
      <section className="bg-charcoal-900 text-ivory-100 py-24 relative overflow-hidden border-t border-ivory-100/5">
        <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#C3AB85_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="editorial-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative rounded-[2rem] overflow-hidden h-[420px] shadow-2xl border border-sand-300/10">
              <img
                src={featured?.image}
                alt={featured?.title?.en}
                loading="lazy"
                className="w-full h-full object-cover filter brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <span className="bg-sand-400 text-charcoal-900 text-[9px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
                  {locale === "es" ? "Más Popular" : locale === "pt" ? "Mais Popular" : "Most Popular"}
                </span>
                <span className="bg-charcoal-900/80 text-white text-[9px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-sand-300/20">
                  {featured?.durationDays} {text.days}
                </span>
              </div>
            </div>

            <div className="space-y-6 text-left">
              <span className="text-xs uppercase tracking-widest text-sand-400 font-bold block">{text.featuredSub}</span>
              <h2 className="text-3xl md:text-4xl font-serif font-normal leading-tight text-white">
                {featured?.title?.[lang] || featured?.title?.en}
              </h2>
              <p className="text-xs md:text-sm text-ivory-200/60 leading-relaxed font-sans font-light">
                {text.featuredDesc}
              </p>
              <div className="space-y-3 pt-2">
                {featured?.highlights?.slice(0, 3).map((hl: any, idx: number) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-ivory-200/75 font-sans font-light">
                    <Sparkles className="w-4 h-4 text-sand-400 shrink-0 mt-0.5" />
                    <span>{hl[lang] || hl.en}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6">
                <Link
                  href={`/${locale}/contact`}
                  className="px-10 py-4 bg-sand-400 hover:bg-sand-500 text-charcoal-900 text-xs font-semibold tracking-widest uppercase transition-all font-sans text-center inline-block rounded-md"
                >
                  {text.featuredCta}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: Simple process */}
      <section className="py-24 border-t border-sand-300/30">
        <div className="editorial-container">
          <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-sand-500 font-bold block">{text.processSub}</span>
            <h2 className="text-3xl md:text-4xl font-serif font-normal text-charcoal-800 tracking-tight">{text.processTitle}</h2>
            <div className="h-px w-20 bg-sand-300 mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="p-8 bg-white border border-sand-300/40 rounded-[1.5rem] text-left space-y-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="font-serif text-3xl font-bold text-sand-500 block">
                  {step.step}
                </span>
                <h3 className="font-serif text-base font-bold text-charcoal-800">
                  {step.title}
                </h3>
                <p className="text-xs text-charcoal-800/60 leading-relaxed font-sans font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Final CTA */}
      <section className="py-24 bg-charcoal-900 text-ivory-100 text-center relative overflow-hidden">
        <div className="relative z-10 editorial-container max-w-2xl">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
            {text.ctaTitle}
          </h2>
          <p className="text-xs md:text-sm text-ivory-200/60 leading-relaxed font-sans font-light mb-10 max-w-md mx-auto">
            {text.ctaDesc}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="px-10 py-4 bg-sand-400 hover:bg-sand-500 text-charcoal-900 text-xs font-semibold tracking-widest uppercase transition-all font-sans text-center inline-block rounded-md"
          >
            {text.ctaBtn}
          </Link>
        </div>
      </section>

    </div>
  );
}
