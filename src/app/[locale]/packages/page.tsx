import React from "react";
import Link from "next/link";
import { getTourPackagesAction } from "@/app/actions/queries";
import InquiryForm from "@/components/common/InquiryForm";
import Reveal from "@/components/home/Reveal";
import {
  Calendar,
  MapPin,
  Star,
  Shield,
  Users,
  Heart,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Clock,
  CheckCircle,
  Compass,
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
      inquire: "Inquire Now",
      privateTour: "Private Tour",
      priceOnRequest: "Price on Request",
      viewDetails: "View Details",
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
      inquire: "Consultar",
      privateTour: "Tour Privado",
      priceOnRequest: "Precio a Consultar",
      viewDetails: "Ver Detalles",
    },
    pt: {
      heroSub: "Experiências Selecionadas",
      heroTitle: "Pacotes de Tour Exclusivos",
      heroDesc: "Itinerários de luxo desenhados por especialistas locais. Cada viagem é adaptada ao seu ritmo, interesses e estilo.",
      allTitle: "Todos os Pacotes",
      allDesc: "Explore nossa coleção de viagens curadas — de palácios patrimoniais a retiros espirituais.",
      featuredSub: "Viagem em Destaque",
      featuredTitle: "Triângulo de Ouro Imperial",
      featuredDesc: "Nosso tour de luxo mais popular combinando Deli, Agra e Jaipur. Hotéis-palácio, acesso privado ao Taj Mahal ao amanhecer e exploração de fortalezas reais.",
      featuredCta: "Consultar Sobre Este Tour",
      whySub: "A Promessa MH India Trips",
      whyTitle: "Por Que Reservar Conosco",
      processSub: "Como Funciona",
      processTitle: "Sua Viagem em 4 Passos Simples",
      ctaTitle: "Pronto Para Sua Viagem à Índia?",
      ctaDesc: "Conte-nos seu itinerário dos sonhos e nossos especialistas criarão o pacote perfeito.",
      ctaBtn: "Planejar Minha Viagem",
      days: "Dias",
      inquire: "Consultar",
      privateTour: "Tour Privado",
      priceOnRequest: "Preço Sob Consulta",
      viewDetails: "Ver Detalhes",
    },
  };

  const text = t[locale] || t.en;

  const whyFeatures = [
    {
      icon: Shield,
      title: locale === "es" ? "100% Personalizado" : locale === "pt" ? "100% Personalizado" : "100% Tailor-Made",
      desc: locale === "es" ? "Cada itinerario es único, diseñado desde cero según sus preferencias." : locale === "pt" ? "Cada itinerário é único, desenhado do zero conforme suas preferências." : "Every itinerary is unique, designed from scratch based on your preferences.",
    },
    {
      icon: Users,
      title: locale === "es" ? "Guías Expertos Locales" : locale === "pt" ? "Guias Especialistas Locais" : "Expert Local Guides",
      desc: locale === "es" ? "Guías certificados bilingües con profundo conocimiento local." : locale === "pt" ? "Guias certificados bilíngues com profundo conhecimento local." : "Certified bilingual guides with deep local knowledge.",
    },
    {
      icon: Star,
      title: locale === "es" ? "Hoteles Premium" : locale === "pt" ? "Hotéis Premium" : "Premium Hotels",
      desc: locale === "es" ? "Solo los mejores palacios patrimoniales y resorts boutique de lujo." : locale === "pt" ? "Apenas os melhores palácios patrimoniais e resorts boutique de luxo." : "Only the finest heritage palaces and boutique luxury resorts.",
    },
    {
      icon: Heart,
      title: locale === "es" ? "Soporte 24/7" : locale === "pt" ? "Suporte 24/7" : "24/7 Support",
      desc: locale === "es" ? "Asistencia en su idioma durante todo el viaje, día y noche." : locale === "pt" ? "Assistência no seu idioma durante toda a viagem, dia e noite." : "Assistance in your language throughout the trip, day and night.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: locale === "es" ? "Cuéntenos Su Sueño" : locale === "pt" ? "Conte-nos Seu Sonho" : "Share Your Dream",
      desc: locale === "es" ? "Comparta sus intereses, fechas y presupuesto." : locale === "pt" ? "Compartilhe seus interesses, datas e orçamento." : "Share your interests, dates, and budget with us.",
    },
    {
      step: "02",
      title: locale === "es" ? "Itinerario a Medida" : locale === "pt" ? "Itinerário Sob Medida" : "Custom Itinerary",
      desc: locale === "es" ? "Nuestros expertos diseñan un viaje único para usted." : locale === "pt" ? "Nossos especialistas desenham uma viagem única para você." : "Our experts design a unique journey just for you.",
    },
    {
      step: "03",
      title: locale === "es" ? "Refinar y Confirmar" : locale === "pt" ? "Refinar e Confirmar" : "Refine & Confirm",
      desc: locale === "es" ? "Ajustamos cada detalle hasta que sea perfecto." : locale === "pt" ? "Ajustamos cada detalhe até ficar perfeito." : "We fine-tune every detail until it's perfect.",
    },
    {
      step: "04",
      title: locale === "es" ? "Viaje y Disfrute" : locale === "pt" ? "Viaje e Aproveite" : "Travel & Enjoy",
      desc: locale === "es" ? "Relájese mientras nos encargamos de todo." : locale === "pt" ? "Relaxe enquanto cuidamos de tudo." : "Relax as we handle everything on the ground.",
    },
  ];

  const categories = Array.from(new Set(packages.map((p: any) => p.category))).filter(Boolean);
  const featured = packages.find((p: any) => p.slug === "golden-triangle-luxury") || packages[0];

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">

      {/* === SECTION 1: Hero Banner === */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1920"
          alt="Tour Packages India"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-[#FAF8F5]" />
        <div className="relative z-10 text-center text-white space-y-5 px-6 mt-16">
          <span className="editorial-subheading block text-gold">{text.heroSub}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold">{text.heroTitle}</h1>
          <p className="text-white/75 max-w-xl mx-auto text-[15px] leading-relaxed">{text.heroDesc}</p>
        </div>
      </section>

      {/* === SECTION 2: All Packages Grid === */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-14">
        <Reveal className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="editorial-subheading block">{text.heroSub}</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal">{text.allTitle}</h2>
          <p className="text-[15px] text-foreground/55 leading-relaxed">{text.allDesc}</p>
        </Reveal>

        {/* Category Tags */}
        <Reveal className="flex flex-wrap justify-center gap-3">
          {categories.map((cat: any) => (
            <span
              key={cat}
              className="px-5 py-2 rounded-full border border-sand/70 text-xs font-semibold uppercase tracking-wider text-foreground/60 hover:border-gold hover:text-gold transition-colors duration-200 cursor-default"
            >
              {cat}
            </span>
          ))}
        </Reveal>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg: any, i: number) => (
            <Reveal key={pkg.slug} delay={i * 80}>
              <div className="card-elevated flex flex-col h-full hover-lift">
                <div className="relative h-64 overflow-hidden rounded-t-[1.5rem]">
                  <img
                    src={pkg.image}
                    loading="lazy"
                    alt={pkg.title[locale as "en" | "es" | "pt"] || pkg.title.en}
                    className="w-full h-full object-cover transition-transform duration-600 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/90 backdrop-blur-sm text-charcoal text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {pkg.durationDays} {text.days}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-forest/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                      {text.privateTour}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-gold/90 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {pkg.category}
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
                    <div className="space-y-2.5 pt-3">
                      {pkg.highlights.slice(0, 3).map((hl: any, idx: number) => (
                        <div key={idx} className="flex items-start gap-2.5 text-[13px] text-foreground/65">
                          <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                          <span>{hl[locale as "en" | "es" | "pt"] || hl.en}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-5 mt-5 border-t border-sand/50 flex justify-between items-center">
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-forest">
                      {text.priceOnRequest}
                    </span>
                    <Link
                      href={`/${locale}/packages#inquire-packages`}
                      className="text-xs font-semibold text-gold hover:text-terracotta flex items-center gap-1 transition-colors duration-200"
                    >
                      <span>{text.inquire}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* === SECTION 3: Featured Package Highlight === */}
      <section className="bg-royal text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#B8964B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative rounded-2xl overflow-hidden h-[400px] shadow-2xl">
                <img
                  src={featured?.image}
                  alt={featured?.title?.en}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <span className="bg-gold text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {locale === "es" ? "Más Popular" : locale === "pt" ? "Mais Popular" : "Most Popular"}
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/20">
                    {featured?.durationDays} {text.days}
                  </span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="space-y-6">
                <span className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold">{text.featuredSub}</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
                  {featured?.title?.[locale as "en" | "es" | "pt"] || featured?.title?.en}
                </h2>
                <p className="text-white/65 text-[15px] leading-relaxed">
                  {text.featuredDesc}
                </p>
                <div className="space-y-3 pt-2">
                  {featured?.highlights?.slice(0, 3).map((hl: any, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-white/70">
                      <Sparkles className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span>{hl[locale as "en" | "es" | "pt"] || hl.en}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <Link
                    href={`/${locale}/packages#inquire-packages`}
                    className="inline-flex items-center gap-2.5 bg-gold hover:bg-gold-light text-white text-[11px] font-semibold uppercase tracking-[0.12em] py-4 px-9 rounded-full transition-all duration-400 shadow-lg shadow-gold/25 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <span>{text.featuredCta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* === SECTION 4: Why Book With Us === */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-14">
        <Reveal className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="editorial-subheading block">{text.whySub}</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal">{text.whyTitle}</h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={i} delay={i * 100}>
                <div className="text-center p-8 rounded-2xl border border-sand/40 hover:border-gold/30 hover:shadow-lg transition-all duration-500 h-full card-tilt bg-white">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-base font-bold text-royal mb-2">{feature.title}</h3>
                  <p className="text-sm text-foreground/50 leading-relaxed">{feature.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* === SECTION 5: How It Works (Process) === */}
      <section className="bg-cream border-y border-sand/30 py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-14">
          <Reveal className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="editorial-subheading block">{text.processSub}</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal">{text.processTitle}</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="relative p-8 rounded-2xl bg-white border border-sand/30 h-full hover-lift">
                  <span className="text-5xl font-bold text-gold/10 absolute top-4 right-6 font-serif">{step.step}</span>
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                      <span className="text-sm font-bold text-gold">{step.step}</span>
                    </div>
                    <h4 className="text-base font-bold text-royal mb-2">{step.title}</h4>
                    <p className="text-sm text-foreground/50 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* === SECTION 6: CTA + Inquiry Form === */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=1920"
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-royal/85" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white space-y-6">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-serif font-bold">{text.ctaTitle}</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-white/65">{text.ctaDesc}</p>
          </Reveal>
          <Reveal delay={200}>
            <Link
              href={`/${locale}/packages#inquire-packages`}
              className="inline-flex items-center gap-2 btn-gold py-4 px-10"
            >
              <span>{text.ctaBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section-spacing bg-cream" id="inquire-packages">
        <div className="max-w-7xl mx-auto px-6">
          <InquiryForm locale={locale} />
        </div>
      </section>
    </div>
  );
}
