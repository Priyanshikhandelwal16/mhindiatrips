import React from "react";
import Link from "next/link";
import { 
  Compass, Users, Heart, Star, Shield, Award, ArrowRight, 
  ShieldCheck, Building2, MapPin, CheckCircle2, Clock, Sparkles, 
  Lock, FileCheck2, UserCheck 
} from "lucide-react";
import { getPageByIdAction } from "@/app/actions/queries";
import { db } from "@/lib/db";
import Reveal from "@/components/home/Reveal";
import AboutStatsCounter from "@/components/common/AboutStatsCounter";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const pageData = await getPageByIdAction("about");
  const contactDetails = (await db.settings.findUnique("contact_details")) || {
    phone: "+91 9314635830",
    email: "info@mhindiatrips.com",
    gstin: "08ACIFM3516H1Z7"
  };

  const defaultT: Record<string, any> = {
    en: {
      heroSub: "LOCAL TRAVEL AGENCY IN INDIA",
      hero: "Pioneers of Bespoke Luxury Travel in India",
      heroDesc: "Headquartered in Jaipur, Rajasthan, MH India Trips is an officially registered partnership firm (GSTIN: 08ACIFM3516H1Z7) crafting private, tailormade journeys with professional chauffeurs and hand-picked royal stays across PAN India.",
      storyTitle: "Founded in Jaipur - Born From a Passion for Local Travel Excellence",
      storyP1: "Founded in Jaipur over two decades ago, MH India Trips was created to provide international and domestic travelers with an uncompromised, immersive way to explore India. Based in Khatipura Road, Hasanpura, Jaipur, our on-ground management team combines deep regional heritage knowledge with high-end luxury hospitality.",
      storyP2: "From private dinners inside 400-year-old desert forts in Jodhpur to seamless luxury SUV transfers with English-speaking chauffeurs and pre-reserved monument tickets, we handle every detail with surgical precision. We don't use rigid group itineraries; every trip is 100% tailor-made to your pace.",
      missionTitle: "Our Operational Mission",
      missionText: "To deliver 100% safe, transparent, and legally compliant private travel with zero hidden fees, verified ASI licensed guides, and 24/7 dedicated support access.",
      visionTitle: "Our Vision",
      visionText: "To remain the premier private travel designer for luxury travelers globally, recognized for royal heritage access, exceptional chauffeur standards, and rich cultural encounters.",
      whySub: "THE MH INDIA TRIPS ADVANTAGE",
      whyTitle: "Why Choose MH India Trips",
      whyDesc: "Government-verified travel operations crafted without rigid group tours or hidden surcharges.",
      valuesTitle: "Our Core Booking Standards",
      teamTitle: "Leadership & Destination Specialists",
      teamDesc: "Meet our founders and senior destination managers leading on-ground operations across India.",
      ctaTitle: "Ready to Begin Your Tailored Journey?",
      ctaDesc: "Speak directly to our luxury travel advisors in Jaipur to draft your custom private itinerary.",
      ctaBtn: "Plan Your Trip",
    },
    es: {
      heroSub: "AGENCIA DE VIAJES LOCAL EN LA INDIA",
      hero: "Pioneros en Viajes Privados de Lujo en la India",
      heroDesc: "Con sede en Jaipur, Rajasthan, MH India Trips es una empresa registrada (GSTIN: 08ACIFM3516H1Z7) que diseña viajes privados a medida con choferes profesionales y hoteles palacio.",
      storyTitle: "Fundada en Jaipur - Pasión por la Excelencia en Viajes",
      storyP1: "Fundada en Jaipur hace más de dos décadas, MH India Trips nació para ofrecer a los viajeros una forma excepcional de explorar la India sin comprometer la comodidad. Con sede en Jaipur, nuestro equipo combina conocimientos culturales profundos con hospitalidad de lujo.",
      storyP2: "Desde cenas privadas en fortalezas del desierto en Jodhpur hasta traslados en SUVs de lujo con choferes de habla inglesa y entradas reservadas, gestionamos cada detalle con precisión. No usamos tours rígidos en grupo; cada viaje es 100% a su medida.",
      missionTitle: "Nuestra Misión Operativa",
      missionText: "Ofrecer viajes privados 100% seguros, transparentes y conformes a la ley con guías certificados y asistencia 24/7.",
      visionTitle: "Nuestra Visión",
      visionText: "Ser el diseñador de viajes privados líder en la India, reconocido por nuestro acceso a palacios reales y excelencia en servicio.",
      whySub: "LA VENTAJA MH INDIA TRIPS",
      whyTitle: "¿Por Qué Elegir MH India Trips?",
      whyDesc: "Operaciones de viaje verificadas por el gobierno, sin grupos rígidos ni cargos ocultos.",
      valuesTitle: "Nuestros Estándares de Servicio",
      teamTitle: "Liderazgo y Especialistas",
      teamDesc: "Conozca a nuestros fundadores y gestores de destino que dirigen las operaciones en la India.",
      ctaTitle: "¿Listo Para Diseñar Su Viaje a Medida?",
      ctaDesc: "Hable directamente con nuestros asesores en Jaipur para planificar su itinerario privado.",
      ctaBtn: "Planificar Ahora",
    },
    pt: {
      heroSub: "AGÊNCIA DE VIAGENS LOCAL NA ÍNDIA",
      hero: "Pioneiros em Viagens Privadas de Luxo na Índia",
      heroDesc: "Sediada em Jaipur, Rajastão, a MH India Trips é uma empresa registrada (GSTIN: 08ACIFM3516H1Z7) que cria viagens sob medida com motoristas profissionais e hotéis palácio.",
      storyTitle: "Fundada em Jaipur - Paixão pela Excelência em Viagens",
      storyP1: "Fundada em Jaipur há mais de duas décadas, a MH India Trips nasceu para oferecer aos viajantes uma forma excepcional de explorar a Índia com máximo conforto. Nossa equipe combina conhecimento cultural profundo com hospitalidade de luxo.",
      storyP2: "De jantares privados em fortalezas no deserto em Jodhpur a traslados em SUVs de luxo com motoristas de fala inglesa e ingressos reservados, cuidamos de cada detalhe com precisão. Cada viagem é 100% sob medida.",
      missionTitle: "Nossa Missão Operacional",
      missionText: "Oferecer viagens privadas 100% seguras, transparentes e conformes à lei com guias certificados e suporte 24/7.",
      visionTitle: "Nossa Visão",
      visionText: "Ser o designer de viagens privadas líder na Índia, reconhecido pelo acesso a palácios reais e excelência em serviço.",
      whySub: "A VANTAGEM MH INDIA TRIPS",
      whyTitle: "Por Que Escolher a MH India Trips?",
      whyDesc: "Operações de viagem verificadas pelo governo, sem grupos rígidos nem taxas ocultas.",
      valuesTitle: "Nossos Padrões de Serviço",
      teamTitle: "Liderança e Especialistas",
      teamDesc: "Conheça nossos fundadores e especialistas que lideram operações em toda a Índia.",
      ctaTitle: "Pronto Para Criar Sua Viagem Sob Medida?",
      ctaDesc: "Fale diretamente com nossos consultores em Jaipur para planejar seu roteiro privado.",
      ctaBtn: "Solicitar Agora",
    }
  };

  const cms = pageData?.content || {};
  const lang = (locale === "es" || locale === "pt") ? locale : "en";
  const defaultLabels = defaultT[lang] || defaultT.en;

  // READ EVERYTHING DYNAMICALLY FROM CMS (pageData.content) WITH FALLBACKS
  const resolveCMS = (fieldKey: string, fallback: string) => {
    const val = cms[fieldKey];
    if (!val) return fallback;
    if (typeof val === "string") return val;
    if (typeof val === "object") return val[lang] || val.en || fallback;
    return fallback;
  };

  const text = {
    heroSub: resolveCMS("heroSubtitle", defaultLabels.heroSub),
    hero: resolveCMS("heroTitle", defaultLabels.hero),
    heroDesc: resolveCMS("heroDesc", defaultLabels.heroDesc),
    storyTitle: resolveCMS("storyTitle", defaultLabels.storyTitle),
    storyP1: resolveCMS("storyP1", defaultLabels.storyP1),
    storyP2: resolveCMS("storyP2", defaultLabels.storyP2),
    missionTitle: resolveCMS("missionTitle", defaultLabels.missionTitle),
    missionText: resolveCMS("missionText", defaultLabels.missionText),
    visionTitle: resolveCMS("visionTitle", defaultLabels.visionTitle),
    visionText: resolveCMS("visionText", defaultLabels.visionText),
    whySub: resolveCMS("whyChooseUsSub", defaultLabels.whySub),
    whyTitle: resolveCMS("whyChooseUsTitle", defaultLabels.whyTitle),
    whyDesc: resolveCMS("whyChooseUsDesc", defaultLabels.whyDesc),
    valuesTitle: resolveCMS("valuesTitle", defaultLabels.valuesTitle),
    teamTitle: resolveCMS("teamTitle", defaultLabels.teamTitle),
    teamDesc: resolveCMS("teamDesc", defaultLabels.teamDesc),
    ctaTitle: resolveCMS("ctaTitle", defaultLabels.ctaTitle),
    ctaDesc: resolveCMS("ctaDesc", defaultLabels.ctaDesc),
    ctaBtn: resolveCMS("ctaBtn", defaultLabels.ctaBtn),
  };

  // AUTHENTIC WHY CHOOSE US PILLARS (CMS driven or authentic fallbacks)
  const defaultPillars = [
    {
      icon: <Building2 className="w-7 h-7" />,
      title: locale === "es" ? "100% Certificado por el Gobierno y GST" : locale === "pt" ? "100% Certificado pelo Governo e GST" : "100% Govt. Certified & GST Registered",
      desc: locale === "es" 
        ? "Empresa registrada bajo GSTIN 08ACIFM3516H1Z7 (Form GST REG-06). Emitimos facturas fiscales oficiales para todas las reservas." 
        : locale === "pt" 
        ? "Empresa registrada sob GSTIN 08ACIFM3516H1Z7 (Form GST REG-06). Emitimos faturas fiscais oficiais para todas as reservas." 
        : "Officially registered partnership firm under Form GST REG-06 (GSTIN: 08ACIFM3516H1Z7). Official GST tax invoices issued for every client booking."
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: locale === "es" ? "Flota 100% Privada y Choferes Profesionales" : locale === "pt" ? "Frota 100% Privada e Motoristas Profissionais" : "100% Private Fleet & Professional Chauffeurs",
      desc: locale === "es" 
        ? "Conductores profesionales de habla inglesa con vehículos SUV de lujo (Innova Crysta, Fortuner) dedicados exclusivamente a su grupo." 
        : locale === "pt" 
        ? "Motoristas profissionais de fala inglesa com SUVs de luxo (Innova Crysta, Fortuner) dedicados exclusivamente ao seu grupo." 
        : "Dedicated English-speaking professional drivers with air-conditioned luxury SUVs (Innova Crysta, Fortuner) assigned exclusively to your group."
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: locale === "es" ? "Guías Locales Certificados por el Gobierno" : locale === "pt" ? "Guias Locais Certificados pelo Governo" : "Official ASI Licensed Heritage Guides",
      desc: locale === "es" 
        ? "Guías oficiales del gobierno en monumentos históricos (Taj Mahal, Amber Fort) para garantizar historia real sin paradas comerciales forzadas." 
        : locale === "pt" 
        ? "Guias oficiais do governo em monumentos históricos para garantir historia real sem paradas comerciais forçadas." 
        : "Government-certified local guides at Taj Mahal, Amber Fort, and heritage circuits ensuring rich storytelling without commercial shopping traps."
    },
    {
      icon: <Star className="w-7 h-7" />,
      title: locale === "es" ? "Estancias Seleccionadas en Palacios Reales" : locale === "pt" ? "Estadias Selecionadas em Palácios Reais" : "Hand-Curated Royal Palace Stays",
      desc: locale === "es" 
        ? "Reservas verificadas en palacios reales restaurados, havelis históricas, resorts de bienestar y casas flotantes privadas en Kerala." 
        : locale === "pt" 
        ? "Reservas verificadas em palácios reais restaurados, havelis históricas, resorts de bem-estar e barcos privados em Kerala." 
        : "Pre-vetted bookings inside restored royal fortresses, historic Havelis, luxury wellness resorts, and private backwater houseboats."
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: locale === "es" ? "Mesa de Soporte 24/7 en Terreno" : locale === "pt" ? "Central de Suporte 24/7 em Terreno" : "24/7 Boots-on-Ground Operations Desk",
      desc: locale === "es" 
        ? "Contacto directo por WhatsApp con su gestor de viaje dedicado desde su llegada al aeropuerto hasta su vuelo de regreso." 
        : locale === "pt" 
        ? "Contato direto por WhatsApp com seu gerente de viagem do desembarque no aeroporto até o voo de volta." 
        : "Direct WhatsApp connection line with your dedicated trip manager from your airport landing until your departure flight."
    },
    {
      icon: <FileCheck2 className="w-7 h-7" />,
      title: locale === "es" ? "Precios Transparentes y Permisos Incluidos" : locale === "pt" ? "Preços Transparentes e Permissões Incluídas" : "Transparent Pricing & Guaranteed Entry Passes",
      desc: locale === "es" 
        ? "Entradas a monumentos, peajes, combustible y tasas incluidas por adelantado sin cargos sorpresa." 
        : locale === "pt" 
        ? "Ingressos de monumentos, pedágios, combustível e taxas incluídos antecipadamente sem custos surpresa." 
        : "All monument entry passes, toll taxes, fuel, driver allowances, and taxes included upfront with zero surprise surcharges."
    }
  ];

  const cmsPillars = cms.whyPillars;
  const pillars = (Array.isArray(cmsPillars) && cmsPillars.length > 0)
    ? cmsPillars.map((p: any, idx: number) => ({
        icon: defaultPillars[idx % defaultPillars.length].icon,
        title: p.title?.[lang] || p.title?.en || p.title || defaultPillars[idx % defaultPillars.length].title,
        desc: p.desc?.[lang] || p.desc?.en || p.desc || defaultPillars[idx % defaultPillars.length].desc
      }))
    : defaultPillars;

  const values = [
    { 
      icon: ShieldCheck, 
      title: locale === "es" ? "Seguridad y Transparencia" : locale === "pt" ? "Segurança e Transparência" : "Safety & Legal Compliance", 
      desc: locale === "es" ? "Choferes experimentados y guías certificados por el gobierno en todo momento." : locale === "pt" ? "Motoristas experientes e guias certificados pelo governo em todos os momentos." : "Fully licensed bilingual guides, highly vetted private drivers, and official GST invoices." 
    },
    { 
      icon: Heart, 
      title: locale === "es" ? "Pasión por la Hospitalidad" : locale === "pt" ? "Paixão pela Hospitalidade" : "Royal Hospitality", 
      desc: locale === "es" ? "Atención personalizada en cada check-in de hotel y traslado." : locale === "pt" ? "Atenção personalizada em cada check-in de hotel e transporte." : "Fine-tuning every palace suite check-in, private dinner, and monument access." 
    },
    { 
      icon: Compass, 
      title: locale === "es" ? "Conocimiento de Destino" : locale === "pt" ? "Conhecimento de Destino" : "Boots-on-Ground Knowledge", 
      desc: locale === "es" ? "Más de 22 años diseñando itinerarios privados en la India." : locale === "pt" ? "Mais de 22 anos criando itinerários privados na Índia." : "22+ years of deep regional expertise headquartered in Jaipur, Rajasthan." 
    },
  ];

  // Founder Profiles
  const defaultTeam = [
    { 
      name: "Rahul Sharma", 
      role: locale === "es" ? "Fundador y Diseñador Principal de Viajes" : locale === "pt" ? "Fundador e Designer Principal de Viagens" : "Founder & Lead Travel Designer", 
      img: "/images/team_rahul.png",
      desc: locale === "es" ? "Con más de 22 años diseñando viajes privados de alto nivel y experiencias en palacios reales por toda la India." : locale === "pt" ? "Com mais de 22 anos criando viagens privadas de alto nível e experiências em palácios reais por toda a Índia." : "Over 22 years of hands-on expertise curating luxury private safaris and royal palace stays across India."
    },
    { 
      name: "Priya Patel", 
      role: locale === "es" ? "Cofundadora y Especialista Sénior en Destinos" : locale === "pt" ? "Co-fundadora e Especialista em Destinos" : "Co-Founder & Senior Destination Specialist", 
      img: "/images/team_priya.png",
      desc: locale === "es" ? "Especialista en patrimonio de Rajastán, cruceros en Kerala y coordinación de destinos internacionales." : locale === "pt" ? "Especialista em patrimônio do Rajastão, cruzeiros em Kerala e coordenação de destinos internacionais." : "Specializes in Rajasthan heritage hospitality, Kerala wellness retreats, and seamless international outbound itineraries."
    }
  ];

  const cmsTeam = cms.team;
  const team = (Array.isArray(cmsTeam) && cmsTeam.length > 0)
    ? cmsTeam.slice(0, 2).map((member: any, idx: number) => ({
        name: member.name || defaultTeam[idx].name,
        role: member.role?.[lang] || member.role?.en || member.role || defaultTeam[idx].role,
        img: member.img || defaultTeam[idx].img,
        desc: member.desc?.[lang] || member.desc?.en || member.desc || defaultTeam[idx].desc
      }))
    : defaultTeam;

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      
      {/* SECTION 1: Luxury Hero Banner (Brand Green Theme) */}
      <section className="relative bg-gradient-to-b from-[#062D27] via-[#0B4D44] to-[#062D27] text-white py-20 md:py-28 border-b border-gold/20 overflow-hidden">
        {/* Decorative Background Glows */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C5A862_1.5px,transparent_1.5px)] [background-size:28px_28px] pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gold/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center space-y-6">
          <Reveal direction="up">
            <span className="bg-gold/15 border border-gold/40 text-gold text-xs font-semibold uppercase tracking-[0.25em] px-5 py-2 rounded-full inline-block shadow-inner">
              {text.heroSub}
            </span>
          </Reveal>
          
          <Reveal direction="up" delay={100}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
              {text.hero}
            </h1>
          </Reveal>
          
          <Reveal direction="up" delay={150}>
            <p className="text-white/80 text-sm md:text-base font-light max-w-3xl mx-auto leading-relaxed">
              {text.heroDesc}
            </p>
          </Reveal>

          {/* Credentials Bar */}
          <Reveal direction="up" delay={200} className="pt-4">
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
              <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-gold/30 text-white flex items-center gap-2 font-mono">
                <MapPin className="w-4 h-4 text-gold" />
                <span>Headquarters: <strong className="text-gold">Jaipur, Rajasthan (302006)</strong></span>
              </span>
              <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-gold/30 text-white flex items-center gap-2 font-mono">
                <Building2 className="w-4 h-4 text-gold" />
                <span>GSTIN: <strong className="text-gold">{contactDetails.gstin || "08ACIFM3516H1Z7"}</strong></span>
              </span>
              <span className="bg-emerald-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-emerald-500/40 text-emerald-300 flex items-center gap-2 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Local Travel Agency in India</span>
              </span>
            </div>
          </Reveal>

        </div>
      </section>

      {/* SECTION 2: Heritage Story & Philosophy */}
      <section className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 border-b border-gold/10">
        <Reveal direction="left" className="space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold flex items-center gap-2">
            <Compass className="w-4 h-4 text-gold" />
            <span>INDIAN HERITAGE & EXPERIENCE</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-royal leading-tight">
            {text.storyTitle}
          </h2>
          <p className="text-base md:text-lg text-foreground/75 leading-relaxed font-light">
            {text.storyP1}
          </p>
          <p className="text-base md:text-lg text-foreground/75 leading-relaxed font-light">
            {text.storyP2}
          </p>
        </Reveal>
        
        {/* Mission & Vision Card */}
        <Reveal direction="right" delay={150} className="bg-white border border-gold/30 rounded-3xl p-8 md:p-10 space-y-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gold/40 via-gold to-gold/40" />
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Core Operational Duty</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-royal">{text.missionTitle}</h3>
            <p className="text-sm md:text-base text-foreground/70 leading-relaxed font-light">{text.missionText}</p>
          </div>
          <div className="h-px bg-gold/15" />
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider">
              <Star className="w-4 h-4" />
              <span>Future Standard</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-royal">{text.visionTitle}</h3>
            <p className="text-sm md:text-base text-foreground/70 leading-relaxed font-light">{text.visionText}</p>
          </div>
        </Reveal>
      </section>

      {/* SECTION 3: WHY CHOOSE US */}
      <section className="bg-gradient-to-b from-[#062D27]/5 via-[#FAF8F5] to-[#FAF8F5] py-28 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="bg-gold/15 text-royal border border-gold/30 text-xs font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full inline-block">
              {text.whySub}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-royal tracking-tight">
              {text.whyTitle}
            </h2>
            <p className="text-sm md:text-base text-foreground/75 font-light leading-relaxed">
              {text.whyDesc}
            </p>
            <div className="h-px w-24 bg-gold mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar: any, i: number) => (
              <Reveal key={i} delay={100 + i * 70} className="bg-white p-8 rounded-3xl border border-gold/30 shadow-lg hover:shadow-2xl transition-all duration-300 space-y-5 group hover:-translate-y-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-royal text-gold flex items-center justify-center font-bold text-xl shadow-md group-hover:bg-gold group-hover:text-royal transition-colors duration-300">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-royal leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-gold/10 text-[11px] font-bold text-gold uppercase tracking-wider flex items-center justify-between">
                  <span>Standard Guarantee</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: Government Registration Seal Banner */}
      <section className="bg-[#062D27] text-white py-16 border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold text-gold uppercase tracking-[0.2em]">OFFICIAL GOVERNMENT REGISTRATION</span>
            <h3 className="text-2xl font-serif font-bold text-white">Form GST REG-06 Certificate Holder</h3>
            <p className="text-xs md:text-sm text-white/70 font-light leading-relaxed">
              MH India Trips is an authorized partnership firm registered under State Tax Department, Govt. of Rajasthan & Goods and Services Tax Portal, Govt. of India (GSTIN: <strong>{contactDetails.gstin || "08ACIFM3516H1Z7"}</strong>). Principal Place of Business: Khatipura Road, Hasanpura, Jaipur, Rajasthan - 302006.
            </p>
          </div>
          <div className="shrink-0">
            <Link 
              href={`/${locale}/contact`} 
              className="bg-gold hover:bg-amber-400 text-royal font-bold uppercase text-xs tracking-wider px-8 py-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              <span>Contact Travel Desk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: Core Standards Grid */}
      <section className="max-w-7xl mx-auto px-6 py-28 space-y-16 border-b border-gold/10">
        <div className="text-center space-y-3 max-w-lg mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold block">SERVICE STANDARDS</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-royal tracking-tight">{text.valuesTitle}</h2>
          <div className="h-px w-20 bg-gold mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <Reveal key={i} delay={i * 80} className="bg-white border border-gold/20 p-8 rounded-3xl shadow-md space-y-4 hover:border-gold/50 transition-colors">
                <span className="w-14 h-14 rounded-2xl bg-gold/15 flex items-center justify-center text-gold border border-gold/30">
                  <Icon className="w-7 h-7" />
                </span>
                <h4 className="text-lg font-bold font-serif text-royal uppercase tracking-wider">{val.title}</h4>
                <p className="text-sm text-foreground/75 leading-relaxed font-light">{val.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* SECTION 6: Stats Counter */}
      <section className="bg-cream py-20 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <AboutStatsCounter stats={[
            { number: "22+", label: "Years of Experience" },
            { number: "5,000+", label: "Happy Travelers Served" },
            { number: "100+", label: "Heritage Destinations" },
            { number: "40+", label: "Countries Served" },
            { number: "4.9/5", label: "Guest Satisfaction Rating" },
            { number: "98%", label: "Repeat & Referral Rate" }
          ]} />
        </div>
      </section>

      {/* SECTION 7: Leadership Team (No text overlay on photo, role inside body) */}
      <section className="max-w-7xl mx-auto px-6 py-28 space-y-16 border-b border-gold/10">
        <div className="text-center space-y-4 max-w-xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold block">FOUNDERS & DESIGNERS</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-royal tracking-tight">{text.teamTitle}</h2>
          <p className="text-sm text-foreground/70 font-light leading-relaxed">{text.teamDesc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {team.map((member: any, i: number) => (
            <Reveal key={i} delay={i * 120} className="bg-white border border-gold/30 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between">
              <div className="h-72 overflow-hidden bg-[#062D27]/10 relative">
                <img 
                  src={member.img || "/images/team_rahul.png"} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-8 space-y-4 bg-white">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-royal">{member.name}</h3>
                  <span className="text-xs uppercase tracking-widest text-gold font-bold block mt-1">{member.role}</span>
                </div>
                <p className="text-sm text-foreground/75 font-light leading-relaxed">
                  {member.desc}
                </p>
                <div className="pt-4 border-t border-gold/15 flex items-center justify-between text-xs font-bold text-gold uppercase tracking-wider">
                  <span>{member.role}</span>
                  <Award className="w-4 h-4 text-gold" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 8: Call To Action Banner */}
      <section className="bg-gradient-to-r from-[#062D27] via-[#0B4D44] to-[#062D27] text-white py-24 border-t border-gold/20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <span className="bg-gold/20 text-gold border border-gold/40 text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full inline-block">
            TAILOR-MADE PRIVACY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
            {text.ctaTitle}
          </h2>
          <p className="text-base md:text-lg text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
            {text.ctaDesc}
          </p>
          <div className="pt-2 flex justify-center">
            <Link 
              href={`/${locale}/contact`}
              className="bg-gold hover:bg-amber-400 text-royal font-bold uppercase text-xs tracking-wider px-10 py-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              <span>{text.ctaBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
