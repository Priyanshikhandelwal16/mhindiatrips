import React from "react";
import { getPageByIdAction } from "@/app/actions/queries";
import Reveal from "@/components/home/Reveal";
import Link from "next/link";
import { ArrowRight, Shield, Calendar, Heart, Compass, Wallet, Briefcase } from "lucide-react";

interface FAQPageProps {
  params: Promise<{ locale: string }>;
}

export default async function FAQPage({ params }: FAQPageProps) {
  const { locale } = await params;
  const pageData = await getPageByIdAction("faq");

  const t: Record<string, any> = {
    en: {
      heroSub: "Practical Advice",
      heroTitle: "Traveler Information",
      heroDesc: "All essential guidelines, logistic parameters, safety precautions, and advice to prepare for your journey to India.",
      sectionTitle: "Essential Guides",
      sectionDesc: "Important advice categorized for high-end bespoke traveler peace of mind.",
      faqTitle: "Frequently Asked Questions",
      faqDesc: "Find answers to typical concierge queries before your departure.",
      ctaTitle: "Have custom requests?",
      ctaBtn: "Inquire Now",
      guide1Title: "Solo Female Travel",
      guide1Desc: "India is highly welcoming to foreign guests. For female travelers, we guarantee private transfers with verified professional chauffeurs, government-certified local guides at all monument check-points, and 24/7 active concierge helpline support.",
      guide2Title: "Best Time to Visit & Climate",
      guide2Desc: "October to March is the ideal season for most of India, featuring warm days and cool evenings. The Himalayan ranges are perfect in summer, and South India remains lush and beautiful year-round.",
      guide3Title: "Vaccinations & Health",
      guide3Desc: "Basic precautions ensure an amazing holiday. Up-to-date routine vaccines are recommended. Drink only sealed bottled water, eat at vetted hygiene-inspected dining rooms, and pack standard traveler first-aid guides.",
      guide4Title: "Currency & Payments",
      guide4Desc: "The local currency is the Indian Rupee (INR). International credit cards are widely used in luxury hotels, boutiques, and high-end dining. Carrying some cash is helpful for tips and local heritage craft markets.",
      guide5Title: "Packing & Clothing",
      guide5Desc: "Wear light, breathable cotton layers. It is respectful to dress modestly when visiting temples and spiritual shrines (shoulders and knees covered). Slip-on shoes are ideal as shoes are removed at holy sites."
    },
    es: {
      heroSub: "Consejos Prácticos",
      heroTitle: "Información para Viajeros",
      heroDesc: "Todas las directrices esenciales, parámetros logísticos, precauciones de seguridad y consejos para preparar su viaje a la India.",
      sectionTitle: "Guías Esenciales",
      sectionDesc: "Consejos importantes categorizados para la tranquilidad del viajero.",
      faqTitle: "Preguntas Frecuentes",
      faqDesc: "Encuentre respuestas a las consultas más comunes de conserjería antes de su partida.",
      ctaTitle: "¿Tiene requisitos específicos?",
      ctaBtn: "Consultar Ahora",
      guide1Title: "Mujer viajando sola por la India",
      guide1Desc: "La India es muy acogedora con los viajeros. Para las mujeres que viajan solas, garantizamos traslados privados con choferes profesionales verificados, guías locales certificados y asistencia telefónica activa las 24 horas.",
      guide2Title: "Cuándo viajar y Clima",
      guide2Desc: "De octubre a marzo es la temporada ideal para la mayor parte de la India, con días templados y noches frescas. Las regiones del Himalaya son perfectas en verano y el sur permanece verde todo el año.",
      guide3Title: "Vacunas y Salud en India",
      guide3Desc: "Precauciones básicas aseguran unas vacaciones perfectas. Se recomiendan vacunas de rutina actualizadas. Beba solo agua embotellada, coma en restaurantes seleccionados e higiénicos, y lleve un botiquín básico.",
      guide4Title: "Moneda y Pagos",
      guide4Desc: "La moneda local es la Rupia India (INR). Las tarjetas de crédito internacionales son ampliamente aceptadas en hoteles de lujo, boutiques y restaurantes. Llevar algo de efectivo es útil para propinas y mercados.",
      guide5Title: "Equipaje y Ropa",
      guide5Desc: "Lleve ropa ligera de algodón. Es respetuoso vestir con modestia al visitar templos y lugares espirituales (hombros y rodillas cubiertos). Los zapatos fáciles de quitar son ideales, ya que se retiran en templos."
    },
    pt: {
      heroSub: "Conselhos Práticos",
      heroTitle: "Informações para Viajantes",
      heroDesc: "Todas as diretrizes essenciais, parâmetros logísticos, precauções de segurança e conselhos para preparar sua viagem à Índia.",
      sectionTitle: "Guias Essenciais",
      sectionDesc: "Conselhos importantes categorizados para a tranquilidade do viajante.",
      faqTitle: "Perguntas Frequentes",
      faqDesc: "Encontre respostas para as dúvidas mais comuns de concierge antes de sua partida.",
      ctaTitle: "Tem requisitos específicos?",
      ctaBtn: "Fale Conosco",
      guide1Title: "Mulher viajando sozinha",
      guide1Desc: "A Índia é acolhedora para os visitantes. Para mulheres viajando sozinhas, garantimos traslados privados com motoristas profissionais verificados, guias locais credenciados e assistência de concierge ativa 24/7.",
      guide2Title: "Quando viajar e Clima",
      guide2Desc: "De outubro a março é a temporada ideal para a maioria das regiões, com dias amenos e noites frescas. O Himalaia é perfeito no verão e o sul permanece verde e exuberante o ano todo.",
      guide3Title: "Vacinas e Saúde na Índia",
      guide3Desc: "Precauções básicas garantem férias perfeitas. Recomendamos vacinas de rotina atualizadas. Beba apenas água mineral engarrafada, coma em locais higiênicos selecionados e leve itens básicos de saúde.",
      guide4Title: "Moeda e Pagamentos",
      guide4Desc: "A moeda local é a Rúpia Indiana (INR). Cartões de crédito internacionais são amplamente aceitos em hotéis de luxo, boutiques e restaurantes. Ter dinheiro em mãos é útil para gorjetas e mercados locais.",
      guide5Title: "Bagagem e Roupas",
      guide5Desc: "Use roupas leves de algodão. Vista-se de maneira respeitosa ao visitar templos e locais sagrados (ombros e joelhos cobertos). Sapatos fáceis de tirar são ideais, pois são retirados nos templos."
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

  const faqs = [
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
      q: locale === "es" ? "¿Cómo funcionan sus tours privados?" : locale === "pt" ? "Como funcionam seus tours privados?" : "How do your private tours work?",
      a: locale === "es" ? "Cada tour se diseña completamente a medida. Usted elige destinos, duración, nivel de lujo y actividades." : locale === "pt" ? "Cada tour é desenhado completamente sob medida. Você escolhe destinos, duração e atividades." : "Every tour is fully customized. You choose destinations, duration, luxury level, and activities. We handle all logistics including transport, accommodation, guides, and experiences.",
    },
    {
      q: locale === "es" ? "¿Cuánto cuesta un viaje a la India?" : locale === "pt" ? "Quanto custa uma viagem à Índia?" : "How much does a trip to India cost?",
      a: locale === "es" ? "Los precios varían según la duración, nivel de lujo y destinos. Tours de lujo empiezan desde $200/día por persona." : locale === "pt" ? "Os preços variam conforme duração, nível de luxo e destinos. Tours de luxo começam em $200/dia por pessoa." : "Pricing varies based on duration, luxury level, and destinations. Luxury tours typically start from $200/day per person. Contact us for a personalized quote.",
    },
    {
      q: locale === "es" ? "¿Qué incluyen sus paquetes?" : locale === "pt" ? "O que incluem seus pacotes?" : "What's included in your packages?",
      a: locale === "es" ? "Nuestros paquetes incluyen alojamiento, transporte privado, guías, entradas a monumentos y experiencias culturales." : locale === "pt" ? "Nossos pacotes incluem alojamento, transporte privado, guias, entradas a monumentos e experiências culturais." : "Our packages include accommodation, private transport, expert guides, monument entries, and curated cultural experiences. Meals and flights can be added.",
    },
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#1B1B1B] font-sans">
      
      {/* Hero Banner */}
      <section className="relative h-[78vh] min-h-[540px] flex items-center justify-center overflow-hidden pt-28 md:pt-36">
        <img 
          src="/images/taj_mahal_sunrise.png" 
          alt="Traveler Info" 
          className="absolute inset-0 w-full h-full object-cover object-[center_35%] scale-100 animate-kenburns" 
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl space-y-6">
          <span className="bg-gold text-royal text-[10px] font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full inline-block">
            {text.heroSub}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-white tracking-tight leading-tight">{text.heroTitle}</h1>
          <p className="text-sm md:text-base text-white/90 font-light max-w-2xl mx-auto leading-relaxed">{text.heroDesc}</p>
        </div>
      </section>

      {/* Info Sections Grid */}
      <section className="py-28 max-w-7xl mx-auto px-6 space-y-20">
        <Reveal className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold block">{text.heroSub}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-royal tracking-tight">{text.sectionTitle}</h2>
          <p className="text-sm text-foreground/50 leading-relaxed font-light">{text.sectionDesc}</p>
          <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Card 1: Solo Female Travel */}
          <Reveal>
            <div id="solo-female" className="bg-white border border-gold/10 p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:border-gold/20 transition-all duration-300 flex gap-6 items-start h-full">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-royal font-serif">{text.guide1Title}</h3>
                <p className="text-xs md:text-sm text-foreground/60 leading-relaxed font-light">{text.guide1Desc}</p>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Climate & Best Time */}
          <Reveal delay={80}>
            <div id="best-time" className="bg-white border border-gold/10 p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:border-gold/20 transition-all duration-300 flex gap-6 items-start h-full">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-royal font-serif">{text.guide2Title}</h3>
                <p className="text-xs md:text-sm text-foreground/60 leading-relaxed font-light">{text.guide2Desc}</p>
              </div>
            </div>
          </Reveal>

          {/* Card 3: Vaccines & Health */}
          <Reveal delay={160}>
            <div id="health" className="bg-white border border-gold/10 p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:border-gold/20 transition-all duration-300 flex gap-6 items-start h-full">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <Heart className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-royal font-serif">{text.guide3Title}</h3>
                <p className="text-xs md:text-sm text-foreground/60 leading-relaxed font-light">{text.guide3Desc}</p>
              </div>
            </div>
          </Reveal>

          {/* Card 4: Currency & Money */}
          <Reveal delay={240}>
            <div id="currency" className="bg-white border border-gold/10 p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:border-gold/20 transition-all duration-300 flex gap-6 items-start h-full">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <Wallet className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-royal font-serif">{text.guide4Title}</h3>
                <p className="text-xs md:text-sm text-foreground/60 leading-relaxed font-light">{text.guide4Desc}</p>
              </div>
            </div>
          </Reveal>

          {/* Card 5: Packing & Clothing */}
          <Reveal delay={320} className="lg:col-span-2">
            <div id="packing" className="bg-white border border-gold/10 p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:border-gold/20 transition-all duration-300 flex gap-6 items-start h-full">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-royal font-serif">{text.guide5Title}</h3>
                <p className="text-xs md:text-sm text-foreground/60 leading-relaxed font-light">{text.guide5Desc}</p>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="questions" className="py-28 bg-[#FAF8F5] border-t border-gold/15">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          <Reveal className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold block">{text.heroSub}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-royal tracking-tight">{text.faqTitle}</h2>
            <p className="text-sm text-foreground/50 leading-relaxed font-light">{text.faqDesc}</p>
            <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
          </Reveal>

          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 50}>
                <details className="group p-8 rounded-3xl border border-gold/10 bg-white hover:border-gold/30 transition-all duration-300 cursor-pointer shadow-sm relative overflow-hidden">
                  <summary className="flex items-center justify-between text-base md:text-lg font-serif font-bold text-royal cursor-pointer list-none">
                    <span>{faq.q}</span>
                    <span className="ml-4 shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm group-open:rotate-45 transition-transform duration-300">+</span>
                  </summary>
                  <p className="mt-4 text-xs md:text-sm text-foreground/60 leading-relaxed font-light pl-3 border-l border-gold/20">{faq.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-cream border-t border-sand/30 text-center">
        <div className="max-w-xl mx-auto px-6 space-y-6">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-royal">{text.ctaTitle}</h2>
          </Reveal>
          <Reveal delay={100}>
            <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 btn-primary">
              <span>{text.ctaBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
      
    </div>
  );
}
