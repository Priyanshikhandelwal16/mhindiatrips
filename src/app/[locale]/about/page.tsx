import React from "react";
import Link from "next/link";
import { Compass, Users, Heart, Star, Shield, Award, ArrowRight } from "lucide-react";
import { getPageByIdAction } from "@/app/actions/queries";
import Reveal from "@/components/home/Reveal";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const pageData = await getPageByIdAction("about");

  const t: Record<string, any> = {
    en: {
      heroSub: "Our Story",
      hero: "Pioneers of Bespoke Indian Safaris",
      heroDesc: "Creating elite private journeys across the Indian subcontinent since 2010. Our passion is authentic local story-telling and unparalleled service.",
      storyTitle: "Our Heritage & Philosophy",
      storyP1: "Founded over a decade ago, MH India Trips was born from a simple vision: to showcase the rich heritage, vibrant colors, and spiritual depth of India without compromising on comfort. We believe that travel should be slow, immersive, and custom-tailored to the individual traveler.",
      storyP2: "From private dinners inside medieval desert forts to custom houseboat tours on Kerala's tranquil backwaters, our on-ground concierge team works tirelessly to ensure every detail is absolute perfection. We don't just book tours; we curate life-defining memories.",
      missionTitle: "Our Mission",
      missionText: "To bridge the gap between luxury comfort and authentic local encounters, offering absolute peace of mind through hand-picked experts.",
      visionTitle: "Our Vision",
      visionText: "To remain India's premier private travel designer, recognized globally for outstanding service, sustainability, and unique palace stays.",
      valuesTitle: "Our Core Values",
      teamTitle: "Our Expert Team",
      teamDesc: "Meet our bilingual destination managers, heritage researchers, and logistics coordinators.",
      ctaTitle: "Ready to Plan Your Indian Safari?",
      ctaDesc: "Contact our luxury travel advisors today to begin drafting your custom custom-tailored itinerary.",
      ctaBtn: "Inquire Now",
    },
    es: {
      heroSub: "Nuestra Historia",
      hero: "Pioneros de Viajes a Medida en la India",
      heroDesc: "Creando itinerarios privados de lujo desde 2010. Nuestra pasión es el servicio inigualable y la autenticidad local.",
      storyTitle: "Nuestra Filosofía y Legado",
      storyP1: "Fundada hace más de una década, MH India Trips nació de una visión simple: mostrar el rico patrimonio, los colores vibrantes y la profundidad espiritual de la India sin comprometer el confort.",
      storyP2: "Desde cenas privadas en fuertes medievales del desierto hasta paseos a medida en casas flotantes por los canales de Kerala, nuestro equipo trabaja incansablemente para que cada detalle sea perfecto.",
      missionTitle: "Nuestra Misión",
      missionText: "Unir el confort de lujo con encuentros locales auténticos, ofreciendo total tranquilidad a través de expertos locales.",
      visionTitle: "Nuestra Visión",
      visionText: "Seguir siendo el diseñador de viajes privados líder en la India, reconocido por nuestro servicio sobresaliente y estancias en palacios reales.",
      valuesTitle: "Nuestros Valores Core",
      teamTitle: "Nuestro Equipo de Expertos",
      teamDesc: "Conozca a nuestros asesores de destino bilingües y coordinadores de logística.",
      ctaTitle: "¿Listo Para Diseñar Su Viaje a la India?",
      ctaDesc: "Contacte a nuestros asesores de viajes de lujo hoy para comenzar a planificar su itinerario a medida.",
      ctaBtn: "Planificar Ahora",
    },
    pt: {
      heroSub: "Nossa História",
      hero: "Pioneiros de Viagens Sob Medida na Índia",
      heroDesc: "Criando itinerários privados de luxo desde 2010. Nossa paixão é o serviço incomparável e a autenticidade local.",
      storyTitle: "Nossa Filosofia e Legado",
      storyP1: "Fundada há mais de uma década, a MH India Trips nasceu de uma visão simples: mostrar o rico patrimônio, as cores vibrantes e a profundidade espiritual da Índia sem comprometer o conforto.",
      storyP2: "De jantares privados em fortes medievais do deserto a passeios sob medida em barcos nos canais de Kerala, nossa equipe trabalha incansavelmente para que cada detalhe seja perfeito.",
      missionTitle: "Nossa Missão",
      missionText: "Unir o conforto de luxo com encontros locais autênticos, oferecendo total tranquilidade através de especialistas.",
      visionTitle: "Nossa Visão",
      visionText: "Seguir sendo o designer de viagens privadas líder na Índia, reconhecido pelo nosso serviço excepcional e estadias em palácios reais.",
      valuesTitle: "Nossos Valores Core",
      teamTitle: "Nossa Equipe de Especialistas",
      teamDesc: "Conheça nossos consultores de destino bilíngues e coordenadores de logística.",
      ctaTitle: "Pronto Para Planejar Sua Viagem à Índia?",
      ctaDesc: "Entre em contato com nossos consultores de viagens de luxo hoje para começar a planejar seu itinerário sob medida.",
      ctaBtn: "Fale Conosco",
    }
  };

  const dbContent = pageData?.content || {};
  const mergedT: Record<string, any> = {};
  for (const lang of ["en", "es", "pt"]) {
    mergedT[lang] = { ...t[lang] };
    for (const key in dbContent) {
      if (dbContent[key]?.[lang] !== undefined) {
        mergedT[lang][key] = dbContent[key][lang];
      }
    }
  }
  const text = mergedT[locale] || mergedT.en;

  const values = [
    { icon: Shield, title: locale === "es" ? "Seguridad y Confianza" : locale === "pt" ? "Segurança e Confiança" : "Safety & Trust", desc: locale === "es" ? "Conductores experimentados y guías certificados en todo momento." : locale === "pt" ? "Motoristas experientes e guias certificados em todos os momentos." : "Fully certified bilingual guides and highly vetted private tourist drivers." },
    { icon: Heart, title: locale === "es" ? "Pasión por el Detalle" : locale === "pt" ? "Paixão pelo Detalhe" : "Passion for Detail", desc: locale === "es" ? "Ajustamos cada reserva de hotel y traslado para su máxima comodidad." : locale === "pt" ? "Ajustamos cada reserva de hotel e transporte para seu máximo conforto." : "Fine-tuning every palace suite check-in and private monument access." },
    { icon: Compass, title: locale === "es" ? "Conocimiento Local" : locale === "pt" ? "Conhecimento Local" : "Local Expertise", desc: locale === "es" ? "Más de 15 años de experiencia diseñando rutas en toda la India." : locale === "pt" ? "Mais de 15 anos de experiência planejando rotas na Índia." : "15+ years of deep boots-on-the-ground knowledge across all regions." },
  ];

  const stats = [
    { number: "15+", label: "Years of Experience" },
    { number: "5,000+", label: "Happy Travelers" },
    { number: "100+", label: "Destinations" },
    { number: "40+", label: "Countries Served" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "98%", label: "Rebooking Rate" },
  ];

  const team = [
    { name: "Rahul Sharma", role: "Founder & Lead Travel Designer", img: "/images/team_rahul.png" },
    { name: "Priya Kapoor", role: "Senior Destination Expert", img: "/images/team_priya.png" },
    { name: "Vikram Singh", role: "Heritage & Culture Specialist", img: "/images/team_vikram.png" },
    { name: "Anita Desai", role: "Client Relations Manager", img: "/images/team_anita.png" },
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      
      {/* SECTION 1: Hero Banner */}
      <section className="relative h-[78vh] min-h-[540px] flex items-center justify-center overflow-hidden pt-28 md:pt-36">
        <img 
          src="/images/luxury_palace_train.png" 
          alt="About MH India Trips" 
          className="absolute inset-0 w-full h-full object-cover object-[center_35%] scale-100 animate-kenburns"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center text-white space-y-7 px-6 max-w-4xl">
          <span className="bg-gold text-royal text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full inline-block animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            {text.heroSub}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
            {text.hero}
          </h1>
          <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
            {text.heroDesc}
          </p>
        </div>
      </section>

      {/* SECTION 2: Story columns (Increased Paragraph Font Sizes) */}
      <section className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 border-b border-gold/10">
        <Reveal direction="left" className="space-y-6">
          <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold flex items-center gap-1">
            <Compass className="w-4 h-4" />
            <span>LEGACY</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-royal leading-tight">
            {text.storyTitle}
          </h2>
          <p className="text-base md:text-lg text-foreground/60 leading-relaxed font-light">
            {text.storyP1}
          </p>
          <p className="text-base md:text-lg text-foreground/60 leading-relaxed font-light">
            {text.storyP2}
          </p>
        </Reveal>
        
        {/* Mission Card (Increased Text Sizes) */}
        <Reveal direction="right" delay={200} className="bg-white border border-gold/25 p-10 space-y-8 shadow-xl shadow-royal/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[4px] bg-gold" />
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-royal">{text.missionTitle}</h3>
            <p className="text-sm md:text-base text-foreground/60 leading-relaxed font-light">{text.missionText}</p>
          </div>
          <div className="h-px bg-gold/15" />
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-royal">{text.visionTitle}</h3>
            <p className="text-sm md:text-base text-foreground/60 leading-relaxed font-light">{text.visionText}</p>
          </div>
        </Reveal>
      </section>

      {/* SECTION 3: Core Values Grid (Increased Core Values Text Sizes) */}
      <section className="max-w-7xl mx-auto px-6 py-28 space-y-16 border-b border-gold/10">
        <div className="text-center space-y-3 max-w-lg mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold block">STANDARDS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-royal tracking-tight">{text.valuesTitle}</h2>
          <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <Reveal key={i} delay={i * 60} className="bg-white border border-gold/10 p-10 shadow-sm space-y-5">
                <span className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <Icon className="w-6 h-6" />
                </span>
                <h4 className="text-lg font-bold text-royal uppercase tracking-wider">{val.title}</h4>
                <p className="text-sm md:text-base text-foreground/50 leading-relaxed font-light">{val.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: Stats Grid */}
      <section className="bg-royal text-white py-24 border-b border-gold/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#B8964B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-6 gap-8 text-center relative z-10">
          {stats.map((st, i) => (
            <Reveal key={i} delay={i * 50} className="space-y-1">
              <span className="text-4xl font-black text-gold block">{st.number}</span>
              <span className="text-[10px] uppercase tracking-wider text-white/50 block font-bold">{st.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 5: Expert Team (Increased Expert Team Text Sizes) */}
      <section className="max-w-7xl mx-auto px-6 py-28 space-y-16 border-b border-gold/10">
        <div className="text-center space-y-3 max-w-lg mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold block">EXPERTS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-royal tracking-tight">{text.teamTitle}</h2>
          <p className="text-sm text-foreground/50 leading-relaxed font-light">{text.teamDesc}</p>
          <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <Reveal key={i} delay={i * 80} className="bg-white border border-gold/10 overflow-hidden shadow-md transition-all duration-350 hover:-translate-y-2">
              <div className="h-72 overflow-hidden relative">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 text-center bg-white">
                <h4 className="text-lg font-bold text-royal">{member.name}</h4>
                <p className="text-xs text-foreground/45 uppercase tracking-wider mt-1">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 6: Call To Action */}
      <section className="max-w-3xl mx-auto px-6 py-28 text-center space-y-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-royal">{text.ctaTitle}</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-sm text-foreground/50 font-light leading-relaxed max-w-md mx-auto">{text.ctaDesc}</p>
        </Reveal>
        <Reveal delay={200} className="pt-4">
          <Link href={`/${locale}/contact`} className="bg-gold hover:bg-gold-light text-royal text-sm font-bold uppercase tracking-widest px-8 py-4.5 rounded-full inline-flex items-center gap-1.5 shadow-md">
            <span>{text.ctaBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </section>

    </div>
  );
}
