import React from "react";
import Reveal from "@/components/home/Reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FAQPageProps {
  params: Promise<{ locale: string }>;
}

export default async function FAQPage({ params }: FAQPageProps) {
  const { locale } = await params;

  const t: Record<string, any> = {
    en: {
      hero: "Frequently Asked Questions",
      heroSub: "Help Center",
      heroDesc: "Find answers to common questions about traveling to India with MH India Trips.",
      ctaTitle: "Still have questions?",
      ctaBtn: "Contact Us",
    },
    es: {
      hero: "Preguntas Frecuentes",
      heroSub: "Centro de Ayuda",
      heroDesc: "Encuentre respuestas a preguntas comunes sobre viajar a la India con MH India Trips.",
      ctaTitle: "¿Aún tiene preguntas?",
      ctaBtn: "Contáctenos",
    },
    pt: {
      hero: "Perguntas Frequentes",
      heroSub: "Central de Ajuda",
      heroDesc: "Encontre respostas para perguntas comuns sobre viajar para a Índia com MH India Trips.",
      ctaTitle: "Ainda tem perguntas?",
      ctaBtn: "Contacte-nos",
    }
  };

  const text = t[locale] || t.en;

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
    {
      q: locale === "es" ? "¿Hablan español sus guías?" : locale === "pt" ? "Seus guias falam português?" : "Do your guides speak my language?",
      a: locale === "es" ? "Sí, tenemos guías certificados que hablan español, inglés y portugués en los principales destinos." : locale === "pt" ? "Sim, temos guias certificados que falam português, inglês e espanhol nos principais destinos." : "Yes, we have certified guides who speak English, Spanish, and Portuguese at major destinations. Other languages available on request.",
    },
    {
      q: locale === "es" ? "¿Pueden organizar viajes para grupos?" : locale === "pt" ? "Podem organizar viagens para grupos?" : "Can you arrange group tours?",
      a: locale === "es" ? "Absolutamente. Organizamos viajes para parejas, familias y grupos de hasta 30 personas con precios especiales." : locale === "pt" ? "Absolutamente. Organizamos viagens para casais, famílias e grupos de até 30 pessoas." : "Absolutely. We organize trips for couples, families, and groups of up to 30 people with special group rates and dedicated coordinators.",
    },
  ];

  return (
    <div className="font-sans bg-[#FAF8F5] min-h-screen text-[#1B1B1B]">
      {/* Hero */}
      <section className="relative h-[75vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img src="/images/taj_mahal_sunrise.png" alt="FAQ" className="absolute inset-0 w-full h-full object-cover animate-kenburns" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mt-20 space-y-6">
          <span className="bg-gold text-royal text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full inline-block">
            {text.heroSub}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{text.hero}</h1>
          <p className="text-base md:text-lg text-white/90 font-light max-w-2xl mx-auto">{text.heroDesc}</p>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 50}>
              <details className="group p-7 rounded-3xl border border-gold/10 bg-white hover:border-gold/30 transition-all duration-300 cursor-pointer shadow-sm relative overflow-hidden">
                <summary className="flex items-center justify-between text-base font-serif font-bold text-royal cursor-pointer list-none">
                  <span>{faq.q}</span>
                  <span className="ml-4 shrink-0 w-7 h-7 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <p className="mt-4 text-xs text-foreground/60 leading-relaxed font-light pl-2 border-l border-gold/25">{faq.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-cream border-t border-sand/30">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
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
