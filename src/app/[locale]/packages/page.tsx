import React from "react";
import Link from "next/link";
import { getTourPackagesAction, getPageByIdAction } from "@/app/actions/queries";
import { ArrowRight, Sparkles } from "lucide-react";
import PackagesFilterSection from "@/components/packages/PackagesFilterSection";
import Reveal from "@/components/home/Reveal";
import PageHeroSlider from "@/components/common/PageHeroSlider";

interface PackagesPageProps {
  params: Promise<{ locale: string }>;
}

export default async function PackagesPage({ params }: PackagesPageProps) {
  const { locale } = await params;
  const allPackages = await getTourPackagesAction();
  const packages = allPackages
    .filter((p: any) => p.isPublished !== false);
  const pageData = await getPageByIdAction("packages");
  const lang = (locale === "es" || locale === "pt") ? locale : "en";

  const dbContent = pageData?.content || {};
  const t: Record<string, any> = {
    en: {
      heroSub: dbContent.heroSub?.en || "Curated Experiences",
      heroTitle: dbContent.heroTitle?.en || "Signature Tour Packages",
      heroDesc: dbContent.heroDesc?.en || "Luxury itineraries hand-designed by our local experts. Each journey is tailored to your pace, interests, and personal style.",
      allTitle: dbContent.allTitle?.en || "All Tour Packages",
      allDesc: dbContent.allDesc?.en || "Explore our collection of curated journeys — from heritage palaces to spiritual retreats.",
      featuredSub: dbContent.featuredSub?.en || "Featured Journey",
      featuredTitle: dbContent.featuredTitle?.en || "Imperial Golden Triangle",
      featuredDesc: dbContent.featuredDesc?.en || "Our most popular luxury tour combining Delhi, Agra, and Jaipur. Palace hotels, private sunrise Taj Mahal access, and royal fort explorations.",
      featuredCta: dbContent.featuredCta?.en || "Inquire About This Tour",
      whySub: dbContent.whySub?.en || "The MH India Trips Promise",
      whyTitle: dbContent.whyTitle?.en || "Why Book With Us",
      processSub: dbContent.processSub?.en || "How It Works",
      processTitle: dbContent.processTitle?.en || "Your Journey in 4 Simple Steps",
      ctaTitle: dbContent.ctaTitle?.en || "Ready for Your India Journey?",
      ctaDesc: dbContent.ctaDesc?.en || "Tell us your dream itinerary, and our experts will craft the perfect package.",
      ctaBtn: dbContent.ctaBtn?.en || "Plan My Trip",
      days: dbContent.days?.en || "Days",
      inquire: dbContent.inquire?.en || "Request Details",
      privateTour: dbContent.privateTour?.en || "Private Tour",
      priceOnRequest: dbContent.priceOnRequest?.en || "Price On Request",
      viewDetails: dbContent.viewDetails?.en || "View Details",
      inclusionsTitle: dbContent.inclusionsTitle?.en || "What's included:"
    },
    es: {
      heroSub: "Experiencias Curadas",
      heroTitle: "Paquetes de Viajes Exclusivos",
      heroDesc: "Itinerarios de lujo diseñados a mano por nuestros expertos locales. Cada viaje se adapta a su ritmo e intereses.",
      allTitle: "Todos Los Paquetes de Viaje",
      allDesc: "Explore nuestra colección de viajes curados — desde palacios patrimoniales hasta retiros espirituales.",
      featuredSub: "Viaje Destacado",
      featuredTitle: "Triángulo de Oro Imperial",
      featuredDesc: "Nuestro tour de lujo más popular combinando Delhi, Agra y Jaipur. Hoteles-palacio, acceso privado al Taj Mahal al amanecer y exploración de fortalezas reales.",
      featuredCta: "Consultar Sobre Este Tour",
      whySub: "La Promesa de MH India Trips",
      whyTitle: "Por Qué Reservar Con Nosotros",
      processSub: "Cómo Funciona",
      processTitle: "Su Viaje en 4 Simples Pasos",
      ctaTitle: "¿Listo Para Su Viaje a la India?",
      ctaDesc: "Cuéntenos su itinerario soñado y nuestros expertos crearán el paquete perfecto.",
      ctaBtn: "Diseñar Mi Viaje",
      days: "Días",
      inquire: "Solicitar Detalles",
      privateTour: "Tour Privado",
      priceOnRequest: "Precio Bajo Consulta",
      viewDetails: "Ver Detalles",
      inclusionsTitle: "Lo que incluye:"
    },
    pt: {
      heroSub: "Experiências Curadas",
      heroTitle: "Pacotes de Viagens Exclusivos",
      heroDesc: "Itinerários de luxo desenhados à mão por nossos especialistas locais. Cada viagem é sob medida.",
      heroSub2: "Experiências Curadas",
      allTitle: "Todos os Pacotes de Viagem",
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
  if (dbContent.heroTitle?.[locale]) text.heroTitle = dbContent.heroTitle[locale];
  if (dbContent.heroSubtitle?.[locale]) text.heroDesc = dbContent.heroSubtitle[locale];

  // Construct slider slides from tour packages
  const sliderSlides = packages.slice(0, 5).map((pkg: any) => {
    const rawDesc = pkg.shortDescription?.[lang] || pkg.shortDescription?.en || pkg.description?.[lang] || pkg.description?.en || text.heroDesc;
    const cleanDesc = rawDesc.length > 90 ? rawDesc.slice(0, 87) + "..." : rawDesc;

    return {
      image: pkg.image || "/images/destination_fallback.jpg",
      title: pkg.title?.[lang] || pkg.title?.en || text.heroTitle,
      subtitle: `${pkg.duration || 10} ${text.days} - ${text.privateTour}`,
      location: pkg.title?.[lang] || pkg.title?.en || "India",
      description: cleanDesc,
      ctaText: text.viewDetails,
      ctaLink: `/packages/${pkg.slug}`
    };
  });

  if (sliderSlides.length === 0) {
    sliderSlides.push({
      image: "/images/rajasthan_fort_sunset.png",
      title: text.heroTitle,
      subtitle: text.heroSub,
      location: "India",
      description: text.heroDesc,
      ctaText: text.viewDetails || "Explore",
      ctaLink: "/packages"
    });
  }

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
      <section className="relative bg-[#0A2A1E] text-white py-16 md:py-24 flex items-center justify-center text-center w-full">
        <div className="relative z-10 text-center text-white space-y-4 px-6 max-w-4xl">
          <span className="bg-charcoal-900/80 border border-sand-300/30 text-sand-300 text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full inline-block animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            {text.heroSub}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-white animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
            {text.heroTitle}
          </h1>
          <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in animate-delay-200" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
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
            
            <div className="relative overflow-hidden h-[420px] shadow-2xl border border-sand-300/10">
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
                {featured?.highlights?.slice(0, 3).map((hl: any, idx: number) => {
                  const label = typeof hl === "string" 
                    ? hl 
                    : (hl?.title?.[lang] || hl?.title?.en || hl?.[lang] || hl?.en || (typeof hl?.title === "string" ? hl.title : ""));
                  if (!label || typeof label !== "string") return null;
                  return (
                    <div key={idx} className="flex items-start gap-3 text-xs text-ivory-200/75 font-sans font-light">
                      <Sparkles className="w-4 h-4 text-sand-400 shrink-0 mt-0.5" />
                      <span>{label}</span>
                    </div>
                  );
                })}
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
              <Reveal key={idx} delay={idx * 120}>
                <div className="p-8 bg-white border border-sand-300/40 text-left space-y-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                  <span className="text-3xl font-bold text-sand-500 block">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold text-charcoal-800">
                    {step.title}
                  </h3>
                  <p className="text-xs text-charcoal-800/60 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
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
