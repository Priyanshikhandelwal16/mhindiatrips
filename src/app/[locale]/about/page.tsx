import React from "react";
import Link from "next/link";
import { Compass, Users, Heart, Star, Shield, Award, ArrowRight } from "lucide-react";
import { getPageByIdAction } from "@/app/actions/queries";
import Reveal from "@/components/home/Reveal";
import AboutStatsCounter from "@/components/common/AboutStatsCounter";
import PageHeroSlider from "@/components/common/PageHeroSlider";

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
      missionText: "Unir o conforto de luxo com encontros locais autênticos, oferecendo total tranquilidade através de especialistas locais.",
      visionTitle: "Nossa Visão",
      visionText: "Continuar sendo o designer de viagens privadas líder na Índia, reconhecido globalmente por nosso serviço excepcional.",
      valuesTitle: "Nossos Valores Principais",
      teamTitle: "Nossa Equipe de Especialistas",
      teamDesc: "Conheça nossos consultores de viagem bilingues e especialistas em logística.",
      ctaTitle: "Pronto Para Criar Sua Viagem?",
      ctaDesc: "Entre em contato com nossos especialistas hoje para começar o planejamento.",
      ctaBtn: "Solicitar Agora",
    }
  };

  const dbContent = pageData?.content || {};
  const mergedT: Record<string, any> = { ...t };
  if (dbContent) {
    for (const l of ["en", "es", "pt"]) {
      if (mergedT[l]) {
        if (dbContent.heroSub?.[l]) mergedT[l].heroSub = dbContent.heroSub[l];
        if (dbContent.hero?.[l]) mergedT[l].hero = dbContent.hero[l];
        if (dbContent.heroDesc?.[l]) mergedT[l].heroDesc = dbContent.heroDesc[l];
      }
    }
  }
  const text = mergedT[locale] || mergedT.en;

  const aboutSlides = [
    {
      image: "/images/rajasthan_fort_sunset.png",
      title: text.hero,
      subtitle: text.heroSub,
      location: "Rajasthan & North India",
      description: locale === "es" ? "Diseñando itinerarios privados de lujo desde 2010." : locale === "pt" ? "Criando roteiros privados de luxo desde 2010." : "Crafting bespoke private luxury journeys across India.",
      ctaText: text.ctaBtn,
      ctaLink: "/contact"
    },
    {
      image: "/images/taj_mahal_sunrise.png",
      title: text.storyTitle,
      subtitle: text.heroSub,
      location: "Agra & Taj Mahal",
      description: locale === "es" ? "Patrimonio real y servicio personalizado incomparable." : locale === "pt" ? "Patrimônio real e serviço personalizado incomparável." : "Royal heritage hospitality with 24/7 dedicated concierge.",
      ctaText: text.ctaBtn,
      ctaLink: "/contact"
    },
    {
      image: "/images/kerala_backwaters_houseboat.png",
      title: "Kerala Backwaters & Serenity",
      subtitle: text.heroSub,
      location: "Kerala & South India",
      description: locale === "es" ? "Cruceros privados y retiros de bienestar auténticos." : locale === "pt" ? "Cruzeiros privados e retiros de bem-estar autênticos." : "Private houseboat cruises and tranquil wellness retreats.",
      ctaText: text.ctaBtn,
      ctaLink: "/contact"
    }
  ];

  const values = [
    { icon: Shield, title: locale === "es" ? "Seguridad y Confianza" : locale === "pt" ? "Segurança e Confiança" : "Safety & Trust", desc: locale === "es" ? "Conductores experimentados y guías certificados en todo momento." : locale === "pt" ? "Motoristas experientes e guias certificados em todos os momentos." : "Fully certified bilingual guides and highly vetted private tourist drivers." },
    { icon: Heart, title: locale === "es" ? "Pasión por el Detalle" : locale === "pt" ? "Paixão pelo Detalhe" : "Passion for Detail", desc: locale === "es" ? "Ajustamos cada reserva de hotel y traslado para su máxima comodidad." : locale === "pt" ? "Ajustamos cada reserva de hotel e transporte para seu máximo conforto." : "Fine-tuning every palace suite check-in and private monument access." },
    { icon: Compass, title: locale === "es" ? "Conocimiento Local" : locale === "pt" ? "Conhecimento Local" : "Local Expertise", desc: locale === "es" ? "Más de 22 años de experiencia diseñando rutas en toda la India." : locale === "pt" ? "Mais de 22 anos de experiência planejando rotas na Índia." : "22+ years of deep boots-on-the-ground knowledge across all regions." },
  ];

  const stats = [
    { number: "22+", label: "Years of Experience" },
    { number: "5,000+", label: "Happy Travelers" },
    { number: "100+", label: "Destinations" },
    { number: "40+", label: "Countries Served" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "98%", label: "Rebooking Rate" },
  ];

  // Exactly 2 Founder & Specialist cards with rich bio descriptions
  const defaultTeam = [
    { 
      name: "Rahul Sharma", 
      role: locale === "es" ? "Fundador y Diseñador Principal de Viajes" : locale === "pt" ? "Fundador e Designer Principal de Viagens" : "Founder & Lead Travel Designer", 
      img: "/images/team_rahul.png",
      desc: locale === "es" ? "Con más de 22 años diseñando viajes privados de alto nivel y experiencias en palacios reales por toda la India." : locale === "pt" ? "Com mais de 22 anos criando viagens privadas de alto nível e experiências em palácios reais por toda a Índia." : "Over 22 years of hands-on expertise curating ultra-luxury private safaris and royal palace stays across India."
    },
    { 
      name: "Priya Patel", 
      role: locale === "es" ? "Cofundadora y Especialista Sénior en Destinos" : locale === "pt" ? "Co-fundadora e Especialista em Destinos" : "Co-Founder & Senior Destination Specialist", 
      img: "/images/team_priya.png",
      desc: locale === "es" ? "Especialista en patrimonio de Rajastán, cruceros en Kerala y coordinación de destinos internacionales en Asia y Medio Oriente." : locale === "pt" ? "Especialista em patrimônio do Rajastão, cruzeiros em Kerala e coordenação de destinos internacionais na Ásia e Oriente Médio." : "Specializes in Rajasthan heritage hospitality, Kerala wellness retreats, and seamless international outbound itineraries."
    }
  ];

  const teamRaw = (dbContent.team && dbContent.team.length > 0) ? dbContent.team.slice(0, 2) : defaultTeam;
  const team = teamRaw.map((member: any, idx: number) => ({
    ...defaultTeam[idx],
    ...member,
    desc: member.desc || defaultTeam[idx]?.desc || defaultTeam[0].desc
  }));

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      
      {/* SECTION 1: Hero Banner */}
      <section className="relative bg-[#0A2A1E] text-white py-16 md:py-24 flex items-center justify-center text-center w-full">
        <div className="relative z-10 text-center text-white space-y-4 px-6 max-w-4xl">
          <span className="bg-gold text-royal text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full inline-block animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            {text.heroSub}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.05] text-white animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
            {text.hero}
          </h1>
          <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
            {text.heroDesc}
          </p>
        </div>
      </section>

      {/* SECTION 2: Story columns */}
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
        
        {/* Mission Card */}
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

      {/* SECTION 3: Core Values Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-16 border-b border-gold/10">
        <div className="text-center space-y-3 max-w-lg mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold block">STANDARDS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-royal tracking-tight">{text.valuesTitle}</h2>
          <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <Reveal key={i} delay={i * 60} className="bg-white border border-gold/10 p-8 rounded-2xl shadow-sm space-y-4">
                <span className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <Icon className="w-6 h-6" />
                </span>
                <h4 className="text-lg font-bold text-royal uppercase tracking-wider">{val.title}</h4>
                <p className="text-sm text-foreground/60 leading-relaxed font-light">{val.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* SECTION 3.5: WHY CHOOSE US */}
      <section className="bg-gradient-to-b from-[#0A2A1E]/5 via-[#FAF8F5] to-[#FAF8F5] py-24 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="bg-[#C5A862] text-[#0A2A1E] text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block">
              {locale === "es" ? "¿Por Qué Elegirnos?" : locale === "pt" ? "Por Que Nos Escolher?" : "Why Choose Us"}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0A2A1E] tracking-tight">
              {locale === "es" 
                ? "La Diferencia MH India Trips" 
                : locale === "pt" 
                ? "A Diferença MH India Trips" 
                : "The MH India Trips Advantage"}
            </h2>
            <p className="text-sm md:text-base text-[#1B1B1B]/70 font-light leading-relaxed">
              {locale === "es"
                ? "Diseñamos cada viaje con dedicación artesanal, garantizando privacidad absoluta, guías multilingües y momentos inolvidables."
                : locale === "pt"
                ? "Criamos cada viagem com dedicação artesanal, garantindo privacidade absoluta, guias multilíngues e momentos inesquecíveis."
                : "We craft every itinerary with master precision, combining royal heritage comfort, boots-on-the-ground concierge support, and transparent luxury."}
            </p>
            <div className="h-px w-24 bg-[#C5A862] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <Reveal delay={100} className="bg-white p-8 rounded-3xl border border-[#C5A862]/30 shadow-lg hover:shadow-xl transition-all duration-300 space-y-5 group hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#0A2A1E] text-[#C5A862] flex items-center justify-center font-bold text-xl shadow-md group-hover:bg-[#C5A862] group-hover:text-[#0A2A1E] transition-colors">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#0A2A1E]">
                {locale === "es" ? "Itinerarios 100% Personalizados" : locale === "pt" ? "Roteiros 100% Personalizáveis" : "100% Tailor-Made Journeys"}
              </h3>
              <p className="text-xs sm:text-sm text-[#2C2C2C]/80 leading-relaxed font-normal">
                {locale === "es"
                  ? "Sin tours rígidos en grupo. Diseñamos cada día según su ritmo, preferencias culinarias y pasiones personales."
                  : locale === "pt"
                  ? "Sem excursões rígidas em grupo. Criamos cada dia de acordo com seu ritmo e preferências pessoais."
                  : "No rigid group tours. Every day, pace, palace hotel, and monument experience is crafted tailored specifically to you."}
              </p>
            </Reveal>

            {/* Pillar 2 */}
            <Reveal delay={200} className="bg-white p-8 rounded-3xl border border-[#C5A862]/30 shadow-lg hover:shadow-xl transition-all duration-300 space-y-5 group hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#0A2A1E] text-[#C5A862] flex items-center justify-center font-bold text-xl shadow-md group-hover:bg-[#C5A862] group-hover:text-[#0A2A1E] transition-colors">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#0A2A1E]">
                {locale === "es" ? "Concierge Personal 24/7" : locale === "pt" ? "Concierge Pessoal 24/7" : "24/7 Dedicated Concierge"}
              </h3>
              <p className="text-xs sm:text-sm text-[#2C2C2C]/80 leading-relaxed font-normal">
                {locale === "es"
                  ? "Asistencia telefónica y presencial continua desde su llegada hasta su vuelo de regreso. Tranquilidad total."
                  : locale === "pt"
                  ? "Assistência telefônica e presencial contínua do momento em que você desembarca até o voo de volta."
                  : "From airport VIP reception to 24/7 WhatsApp concierge support, your dedicated trip manager ensures flawless execution."}
              </p>
            </Reveal>

            {/* Pillar 3 */}
            <Reveal delay={300} className="bg-white p-8 rounded-3xl border border-[#C5A862]/30 shadow-lg hover:shadow-xl transition-all duration-300 space-y-5 group hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#0A2A1E] text-[#C5A862] flex items-center justify-center font-bold text-xl shadow-md group-hover:bg-[#C5A862] group-hover:text-[#0A2A1E] transition-colors">
                <Star className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#0A2A1E]">
                {locale === "es" ? "Hoteles y Palacios Seleccionados" : locale === "pt" ? "Hotéis e Palácios Selecionados" : "Handpicked Royal Stays"}
              </h3>
              <p className="text-xs sm:text-sm text-[#2C2C2C]/80 leading-relaxed font-normal">
                {locale === "es"
                  ? "Hospedaje en palacios reales de maharajás, resorts 5 estrellas y havelis boutique de patrimonio histórico."
                  : locale === "pt"
                  ? "Hospedagem em palácios reais de maharajas, resorts 5 estrelas e havelis históricas de luxo."
                  : "Stay in authentic 18th-century royal palaces, 5-star luxury resorts, and oceanfront private villas."}
              </p>
            </Reveal>

            {/* Pillar 4 */}
            <Reveal delay={400} className="bg-white p-8 rounded-3xl border border-[#C5A862]/30 shadow-lg hover:shadow-xl transition-all duration-300 space-y-5 group hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#0A2A1E] text-[#C5A862] flex items-center justify-center font-bold text-xl shadow-md group-hover:bg-[#C5A862] group-hover:text-[#0A2A1E] transition-colors">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#0A2A1E]">
                {locale === "es" ? "Guias Multilingües Certificados" : locale === "pt" ? "Guias Multilíngues Certificados" : "Multilingual Licensed Guides"}
              </h3>
              <p className="text-xs sm:text-sm text-[#2C2C2C]/80 leading-relaxed font-normal">
                {locale === "es"
                  ? "Guias oficiales que hablan español, portugués e inglés con fluidez y conductores privados altamente experimentados."
                  : locale === "pt"
                  ? "Guias oficiais fluentes em espanhol, português e inglês com motoristas privados extremamente experientes."
                  : "Expert local storytellers fluent in English, Spanish, and Portuguese, accompanied by professional private chauffeurs."}
              </p>
            </Reveal>

            {/* Pillar 5 */}
            <Reveal delay={500} className="bg-white p-8 rounded-3xl border border-[#C5A862]/30 shadow-lg hover:shadow-xl transition-all duration-300 space-y-5 group hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#0A2A1E] text-[#C5A862] flex items-center justify-center font-bold text-xl shadow-md group-hover:bg-[#C5A862] group-hover:text-[#0A2A1E] transition-colors">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#0A2A1E]">
                {locale === "es" ? "Pan India & Destinos Outbound" : locale === "pt" ? "Pan Índia e Destinos Outbound" : "Pan India & Outbound Reach"}
              </h3>
              <p className="text-xs sm:text-sm text-[#2C2C2C]/80 leading-relaxed font-normal">
                {locale === "es"
                  ? "Cobertura total en todos los estados de India y paquetes internacionales a Laos, Nepal, Bali, Malasia, Singapur, Tailandia y Maldivas."
                  : locale === "pt"
                  ? "Cobertura completa na Índia e pacotes internacionais para Laos, Nepal, Bali, Malásia, Singapura, Tailândia e Maldivas."
                  : "Unmatched expertise covering all Indian destinations alongside exotic outbound packages in Laos, Nepal, Bali, Malaysia, Singapore, Thailand & Maldives."}
              </p>
            </Reveal>

            {/* Pillar 6 */}
            <Reveal delay={600} className="bg-white p-8 rounded-3xl border border-[#C5A862]/30 shadow-lg hover:shadow-xl transition-all duration-300 space-y-5 group hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#0A2A1E] text-[#C5A862] flex items-center justify-center font-bold text-xl shadow-md group-hover:bg-[#C5A862] group-hover:text-[#0A2A1E] transition-colors">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#0A2A1E]">
                {locale === "es" ? "Precios Transparentes sin Sorpresas" : locale === "pt" ? "Preços Transparentes sem Surpresas" : "Transparent Price Guarantee"}
              </h3>
              <p className="text-xs sm:text-sm text-[#2C2C2C]/80 leading-relaxed font-normal">
                {locale === "es"
                  ? "Tarifas directas sin intermediarios, políticas de cancelación flexibles y total transparencia en cada cotización."
                  : locale === "pt"
                  ? "Tarifas diretas de operador local sem intermediários e total transparência em cada orçamento."
                  : "Direct local operator rates with zero hidden charges, transparent inclusions, and flexible cancellation policies."}
              </p>
            </Reveal>

          </div>

        </div>
      </section>

      {/* SECTION 4: Stats Grid */}
      <section className="bg-royal text-white py-24 border-b border-gold/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#B8964B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AboutStatsCounter stats={[
            { number: "22+", label: "Years of Excellence" },
            { number: "12,000+", label: "Happy Travelers" },
            { number: "PAN India", label: "Regional Coverage" },
            { number: "10+", label: "Outbound Countries" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "98%", label: "Satisfaction Rate" },
          ]} />
        </div>
      </section>

      {/* SECTION 5: Founders & Destination Specialists (Exactly 2 Cards with Bios) */}
      <section className="max-w-7xl mx-auto px-6 py-28 border-b border-gold/10 space-y-16">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold block">OUR LEADERSHIP & TEAM</span>
          <h2 className="text-3xl md:text-4xl font-bold text-royal font-serif tracking-tight">
            {locale === "es" ? "Fundadores y Especialistas de Destino" : locale === "pt" ? "Fundadores e Especialistas" : "Founders & Destination Specialists"}
          </h2>
          <p className="text-sm text-foreground/60 font-light leading-relaxed">
            {locale === "es" ? "Con trayectoria guiando viajeros por la India en toda la región PAN India e itinerarios internacionales." : locale === "pt" ? "Com trajetória guiando viajantes pela Índia e itinerários internacionais." : "Backed by 22+ years of dedicated boots-on-the-ground expertise in crafting elite private journeys across PAN India & International Outbound destinations."}
          </p>
          <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {team.map((member: any, i: number) => (
            <Reveal key={i} delay={i * 100} className="bg-white border-2 border-[#C5A862]/30 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              <div className="h-72 sm:h-80 overflow-hidden relative bg-[#0A2A1E]/5">
                <img 
                  src={member.img || member.image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"} 
                  alt={member.name} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A1E]/60 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-4 left-4 bg-[#C5A862] text-[#0A2A1E] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                  Founding Director
                </span>
              </div>
              <div className="p-8 space-y-3 bg-white flex-grow">
                <h3 className="text-2xl font-serif font-bold text-[#0A2A1E]">{member.name}</h3>
                <p className="text-xs uppercase tracking-widest text-[#C5A862] font-extrabold">{member.role}</p>
                <div className="h-px w-12 bg-[#C5A862]/30 my-2" />
                <p className="text-sm text-[#1B1B1B]/75 font-light leading-relaxed pt-1">
                  {member.desc || "Specializing in luxury private journeys, palace check-ins, and bespoke concierge travel planning."}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 6: Call To Action (Luxury Card Format) */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <Reveal>
          <div className="bg-[#0A2A1E] text-white p-10 md:p-16 rounded-[2.5rem] border-2 border-[#C5A862] shadow-2xl text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[#C5A862]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="space-y-3">
              <span className="bg-[#C5A862] text-[#0A2A1E] text-[10px] font-extrabold uppercase tracking-[0.25em] px-5 py-2 rounded-full inline-block shadow-md">
                MH India Trips Concierge
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
                {text.ctaTitle}
              </h2>
            </div>
            <p className="text-sm md:text-base text-white/80 font-light max-w-xl mx-auto leading-relaxed">
              {text.ctaDesc}
            </p>
            <div className="pt-4">
              <Link href={`/${locale}/contact`} className="bg-[#C5A862] hover:bg-[#D8BE83] text-[#0A2A1E] text-xs font-extrabold uppercase tracking-widest px-10 py-5 rounded-full inline-flex items-center gap-2 shadow-xl hover:scale-105 transition-all">
                <span>{text.ctaBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

    </div>
  );
}
