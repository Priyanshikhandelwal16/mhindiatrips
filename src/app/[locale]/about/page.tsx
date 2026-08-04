import React from "react";
import Link from "next/link";
import Reveal from "@/components/home/Reveal";
import { Award, Users, Globe, Heart, MapPin, Shield, ArrowRight } from "lucide-react";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;

  const t: Record<string, any> = {
    en: {
      hero: "About MH India Trips",
      heroSub: "Our Story",
      heroDesc: "Since 2010, we have been crafting extraordinary journeys across India for discerning travelers from around the world.",
      missionTitle: "Our Mission",
      missionText: "To provide transformative travel experiences that connect travelers with India's rich heritage, diverse cultures, and breathtaking landscapes through personalized luxury journeys.",
      visionTitle: "Our Vision",
      visionText: "To be recognized as the premier luxury travel company for bespoke India experiences, setting the global standard for cultural immersion and sustainable tourism.",
      storyTitle: "Our Journey",
      storyP1: "Founded in 2010 by passionate travel enthusiasts, MH India Trips was born from a simple belief: that India deserves to be experienced, not just visited. What started as a small team of dedicated travel planners has grown into a leading luxury travel company serving discerning travelers from over 40 countries.",
      storyP2: "Every journey we design is a labor of love. Our team of local experts, heritage consultants, and cultural ambassadors work together to create itineraries that go far beyond the ordinary tourist trail. We believe in slow travel, meaningful connections, and experiences that leave a lasting impression.",
      storyP3: "From the snow-capped peaks of the Himalayas to the tropical backwaters of Kerala, we have explored every corner of this incredible land so you don't have to plan alone. Our deep relationships with heritage properties, local artisans, and cultural institutions allow us to offer access that others simply cannot.",
      teamTitle: "Meet Our Experts",
      teamDesc: "Our team brings together decades of travel industry experience with genuine local knowledge.",
      valuesTitle: "Our Values",
      ctaTitle: "Ready to Experience India?",
      ctaDesc: "Let us craft a journey that exceeds your expectations.",
      ctaBtn: "Start Planning",
    },
    es: {
      hero: "Sobre MH India Trips",
      heroSub: "Nuestra Historia",
      heroDesc: "Desde 2010, creamos viajes extraordinarios por la India para viajeros exigentes de todo el mundo.",
      missionTitle: "Nuestra Misión",
      missionText: "Ofrecer experiencias de viaje transformadoras que conecten a los viajeros con el rico patrimonio, las diversas culturas y los paisajes impresionantes de la India.",
      visionTitle: "Nuestra Visión",
      visionText: "Ser reconocidos como la empresa de viajes de lujo líder para experiencias personalizadas en la India.",
      storyTitle: "Nuestro Camino",
      storyP1: "Fundada en 2010 por apasionados del viaje, MH India Trips nació de una creencia simple: que la India merece ser experimentada, no solo visitada.",
      storyP2: "Cada viaje que diseñamos es una labor de amor. Nuestro equipo de expertos locales trabaja para crear itinerarios que van más allá de la ruta turística ordinaria.",
      storyP3: "Desde los picos nevados del Himalaya hasta los canales tropicales de Kerala, hemos explorado cada rincón de esta tierra increíble.",
      teamTitle: "Nuestros Expertos",
      teamDesc: "Nuestro equipo reúne décadas de experiencia con auténtico conocimiento local.",
      valuesTitle: "Nuestros Valores",
      ctaTitle: "¿Listo para Experimentar la India?",
      ctaDesc: "Permítanos crear un viaje que supere sus expectativas.",
      ctaBtn: "Comenzar a Planificar",
    },
    pt: {
      hero: "Sobre MH India Trips",
      heroSub: "Nossa História",
      heroDesc: "Desde 2010, criamos viagens extraordinárias pela Índia para viajantes exigentes de todo o mundo.",
      missionTitle: "Nossa Missão",
      missionText: "Oferecer experiências de viagem transformadoras que conectem os viajantes com o rico patrimônio, as diversas culturas e as paisagens deslumbrantes da Índia.",
      visionTitle: "Nossa Visão",
      visionText: "Ser reconhecidos como a empresa de viagens de luxo líder para experiências personalizadas na Índia.",
      storyTitle: "Nosso Caminho",
      storyP1: "Fundada em 2010 por apaixonados por viagens, MH India Trips nasceu de uma crença simples: que a Índia merece ser experimentada, não apenas visitada.",
      storyP2: "Cada viagem que desenhamos é um trabalho de amor. Nossa equipe de especialistas locais trabalha para criar itinerários que vão além da rota turística comum.",
      storyP3: "Dos picos nevados do Himalaia aos canais tropicais de Kerala, exploramos cada canto desta terra incrível.",
      teamTitle: "Nossos Especialistas",
      teamDesc: "Nossa equipe reúne décadas de experiência com autêntico conhecimento local.",
      valuesTitle: "Nossos Valores",
      ctaTitle: "Pronto para Experimentar a Índia?",
      ctaDesc: "Deixe-nos criar uma viagem que supere suas expectativas.",
      ctaBtn: "Começar a Planejar",
    }
  };

  const text = t[locale] || t.en;

  const values = [
    { icon: Heart, title: locale === "es" ? "Pasión" : locale === "pt" ? "Paixão" : "Passion", desc: locale === "es" ? "Amamos lo que hacemos" : locale === "pt" ? "Amamos o que fazemos" : "We love what we do and it shows in every detail" },
    { icon: Shield, title: locale === "es" ? "Confianza" : locale === "pt" ? "Confiança" : "Trust", desc: locale === "es" ? "Transparencia total" : locale === "pt" ? "Transparência total" : "Complete transparency in pricing and planning" },
    { icon: Globe, title: locale === "es" ? "Autenticidad" : locale === "pt" ? "Autenticidade" : "Authenticity", desc: locale === "es" ? "Experiencias genuinas" : locale === "pt" ? "Experiências genuínas" : "Genuine cultural experiences beyond tourist trails" },
    { icon: Users, title: locale === "es" ? "Personalización" : locale === "pt" ? "Personalização" : "Personalization", desc: locale === "es" ? "Viajes a su medida" : locale === "pt" ? "Viagens sob medida" : "Every journey uniquely tailored to you" },
  ];

  return (
    <div className="font-sans bg-background text-foreground">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1920" alt="About MH India Trips" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-royal/80" />
        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <span className="editorial-subheading block text-gold mb-4">{text.heroSub}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">{text.hero}</h1>
          <p className="text-lg text-white/70 leading-relaxed">{text.heroDesc}</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal className="space-y-6">
              <span className="editorial-subheading block">{text.heroSub}</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal">{text.storyTitle}</h2>
              <div className="space-y-4 text-[15px] text-foreground/60 leading-relaxed">
                <p>{text.storyP1}</p>
                <p>{text.storyP2}</p>
                <p>{text.storyP3}</p>
              </div>
            </Reveal>
            <Reveal delay={100} className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-48 image-zoom-container">
                  <img src="https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=500" alt="Rajasthan" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="rounded-2xl overflow-hidden h-64 image-zoom-container">
                  <img src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=500" alt="Kerala" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden h-64 image-zoom-container">
                  <img src="https://images.unsplash.com/photo-1561361513-2d000a50f0db?q=80&w=500" alt="Varanasi" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="rounded-2xl overflow-hidden h-48 image-zoom-container">
                  <img src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=500" alt="Goa" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-spacing bg-cream border-y border-sand/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal className="p-10 rounded-2xl bg-white border border-sand/50 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-royal mb-4">{text.missionTitle}</h3>
              <p className="text-[15px] text-foreground/55 leading-relaxed">{text.missionText}</p>
            </Reveal>
            <Reveal delay={100} className="p-10 rounded-2xl bg-white border border-sand/50 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-forest" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-royal mb-4">{text.visionTitle}</h3>
              <p className="text-[15px] text-foreground/55 leading-relaxed">{text.visionText}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-6 space-y-14">
          <Reveal className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal">{text.valuesTitle}</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="text-center p-8 rounded-2xl border border-sand/40 hover:border-gold/20 hover:shadow-lg transition-all duration-400">
                    <div className="w-14 h-14 rounded-full bg-gold/8 flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <h4 className="text-lg font-serif font-bold text-royal mb-2">{v.title}</h4>
                    <p className="text-sm text-foreground/50">{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=1920" alt="" className="w-full h-full object-cover" loading="lazy" />
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
            <Link href={`/${locale}#inquire-now`} className="inline-flex items-center gap-2 btn-gold py-4 px-10">
              <span>{text.ctaBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
