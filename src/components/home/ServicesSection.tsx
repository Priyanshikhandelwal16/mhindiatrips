"use client";

import React from "react";
import { 
  Plane, Train, Hotel, Car, Compass, Bus, Sparkles, ArrowRight, ShieldCheck, PhoneCall 
} from "lucide-react";
import Reveal from "./Reveal";

interface ServicesSectionProps {
  locale: string;
}

export default function ServicesSection({ locale }: ServicesSectionProps) {
  const translations: Record<string, any> = {
    en: {
      sub: "LUXURY CONCIERGE & LOGISTICS",
      title: "Our Travel Services",
      desc: "Bespoke travel logistics managed directly by our Jaipur headquarters for seamless journeys across India.",
      mainCta: "Inquire Our Services",
      guaranteeTitle: "100% Custom Tailored & Government Verified",
      guaranteeDesc: "All services managed directly by our Jaipur headquarters (GSTIN: 08ACIFM3516H1Z7) with 24/7 concierge.",
      guaranteeBtn: "Build Custom Trip",
      services: [
        {
          id: "flights",
          title: "Flight & Ticket Concierge",
          subtitle: "Domestic & Charter",
          icon: Plane,
          desc: "Seamless domestic booking, airport lounge access, and private charter arrangements."
        },
        {
          id: "trains",
          title: "Luxury & Express Trains",
          subtitle: "Vande Bharat & Royal Trains",
          icon: Train,
          desc: "First-class berths on high-speed rail and exclusive suites aboard royal luxury trains."
        },
        {
          id: "accommodation",
          title: "Heritage Hotels & Palaces",
          subtitle: "Royal Stays",
          icon: Hotel,
          desc: "Handpicked 400-year-old restored forts, floating lake palaces, and luxury resorts."
        },
        {
          id: "car-rental",
          title: "Luxury Car & Chauffeur Fleet",
          subtitle: "Private Fleet",
          icon: Car,
          desc: "Chauffeur-driven luxury SUVs (Innova Crysta, Fortuner) with verified English-speaking drivers."
        },
        {
          id: "official-guide",
          title: "Official Tour Guides",
          subtitle: "ASI Licensed",
          icon: Compass,
          desc: "Government licensed storytellers and historian guides fluent in English, Spanish & Portuguese."
        },
        {
          id: "transportation",
          title: "Private Transfers & Coaches",
          subtitle: "Pan-India Transfers",
          icon: Bus,
          desc: "Door-to-door luxury coaches and private intercity vehicle transfers with 24/7 support."
        }
      ]
    },
    es: {
      sub: "CONSERJERÍA DE LUJO Y LOGÍSTICA",
      title: "Nuestros Servicios de Viaje",
      desc: "Logística de lujo coordinada directamente por nuestra sede en Jaipur para un viaje perfecto.",
      mainCta: "Consultar Nuestros Servicios",
      guaranteeTitle: "100% Personalizado y Verificado por el Gobierno",
      guaranteeDesc: "Todos los servicios coordinados por nuestro equipo principal en Jaipur (GSTIN: 08ACIFM3516H1Z7).",
      guaranteeBtn: "Solicitar Itinerario",
      services: [
        {
          id: "flights",
          title: "Billetes y Vuelos Concierge",
          subtitle: "Nacionales y Chárter",
          icon: Plane,
          desc: "Reservas de asientos preferentes, salas VIP en aeropuertos y vuelos privados."
        },
        {
          id: "trains",
          title: "Trenes de Lujo y Exprés",
          subtitle: "Vande Bharat y Trenes Reales",
          icon: Train,
          desc: "Billetes de primera clase en alta velocidad y suites en trenes de lujo reales."
        },
        {
          id: "accommodation",
          title: "Alojamientos y Palacios Reales",
          subtitle: "Estancias Reales",
          icon: Hotel,
          desc: "Selección de fortalezas históricas restauradas, palacios flotantes y resorts."
        },
        {
          id: "car-rental",
          title: "Alquiler de Coches con Chofer",
          subtitle: "Flota Privada",
          icon: Car,
          desc: "SUVs de lujo con aire acondicionado (Innova Crysta, Fortuner) y choferes dedicados."
        },
        {
          id: "official-guide",
          title: "Guías Turísticos Oficiales",
          subtitle: "Licenciados por ASI",
          icon: Compass,
          desc: "Guías historiadores oficiales multilingües con fluidez en español, inglés y portugués."
        },
        {
          id: "transportation",
          title: "Transporte Privado y Traslados",
          subtitle: "Traslados Interurbanos",
          icon: Bus,
          desc: "Minibuses de lujo y traslados privados de puerta a puerta con asistencia 24/7."
        }
      ]
    },
    pt: {
      sub: "CONCIERGE DE LUXO E LOGÍSTICA",
      title: "Nossos Serviços de Viagem",
      desc: "Logística de luxo gerenciada diretamente pela nossa sede em Jaipur para viagens perfeitas.",
      mainCta: "Consultar Nossos Serviços",
      guaranteeTitle: "100% Personalizado e Certificado pelo Governo",
      guaranteeDesc: "Todos os serviços são coordenados pela nossa sede em Jaipur (GSTIN: 08ACIFM3516H1Z7).",
      guaranteeBtn: "Solicitar Roteiro",
      services: [
        {
          id: "flights",
          title: "Bilhetes e Concierge de Voos",
          subtitle: "Nacionais e Charter",
          icon: Plane,
          desc: "Reservas de assentos preferenciais, salas VIP e logística de voos privados."
        },
        {
          id: "trains",
          title: "Trens de Luxo e Expressos",
          subtitle: "Vande Bharat e Trens Reais",
          icon: Train,
          desc: "Passagens de primeira classe em trens expressos e suítes em trens reais."
        },
        {
          id: "accommodation",
          title: "Hotéis Históricos e Palácios",
          subtitle: "Estadias Reais",
          icon: Hotel,
          desc: "Fortalezas históricas restauradas, palácios flutuantes e resorts de bem-estar."
        },
        {
          id: "car-rental",
          title: "Aluguel de Carros com Motorista",
          subtitle: "Frota Privada",
          icon: Car,
          desc: "SUVs de luxo com ar-condicionado (Innova Crysta, Fortuner) e motoristas dedicados."
        },
        {
          id: "official-guide",
          title: "Guias Turísticos Oficiais",
          subtitle: "Credenciados ASI",
          icon: Compass,
          desc: "Guias historiadores oficiais multilíngues fluentes em português, espanhol e inglês."
        },
        {
          id: "transportation",
          title: "Transporte Privado e Traslados",
          subtitle: "Traslados Interurbanos",
          icon: Bus,
          desc: "Minibuses de luxo e traslados privados de porta a porta com suporte 24/7."
        }
      ]
    }
  };

  const text = translations[locale] || translations.en;

  return (
    <section className="bg-[#FAF8F5] py-20 border-b border-gold/15 relative overflow-hidden font-sans" id="our-services">
      {/* Background subtle accent */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0A2A1E_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Minimal Clean Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-14">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 px-3.5 py-1 rounded-full">
              <Sparkles className="w-3 h-3 text-gold" />
              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-royal">
                {text.sub}
              </span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={60}>
            <h2 className="text-3xl sm:text-4xl font-serif text-royal font-bold tracking-tight">
              {text.title}
            </h2>
          </Reveal>

          <Reveal direction="up" delay={100}>
            <p className="text-royal/70 text-xs sm:text-sm font-light leading-relaxed">
              {text.desc}
            </p>
          </Reveal>
        </div>

        {/* Minimal Services Grid - 6 Clean Minimal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {text.services.map((service: any, index: number) => {
            const IconComp = service.icon;
            return (
              <Reveal key={service.id} delay={index * 50}>
                <div className="bg-white border border-gold/20 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group relative overflow-hidden">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-[#0A2A1E] border border-gold/30 flex items-center justify-center text-gold shadow-sm group-hover:scale-105 transition-transform duration-300">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-royal/60 bg-gold/10 px-2.5 py-0.5 rounded-md">
                        {service.subtitle}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-serif font-bold text-royal group-hover:text-gold transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-royal/70 leading-relaxed font-light">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Action Button Below Grid */}
        <Reveal direction="up" delay={180} className="mt-12 text-center">
          <a
            href="#inquire-now"
            className="inline-flex items-center gap-2.5 bg-[#0A2A1E] hover:bg-gold text-gold hover:text-[#0A2A1E] border border-gold/40 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg hover:scale-105 group"
          >
            <PhoneCall className="w-3.5 h-3.5 text-gold group-hover:text-[#0A2A1E] transition-colors" />
            <span>{text.mainCta}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </Reveal>

        {/* Government Guarantee Banner */}
        <Reveal direction="up" delay={220} className="mt-12">
          <div className="bg-gradient-to-r from-[#062D27] via-[#0B4D44] to-[#062D27] rounded-2xl p-6 border border-gold/30 text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="text-sm font-serif font-bold text-white">
                  {text.guaranteeTitle}
                </h4>
                <p className="text-xs text-white/70 font-light">
                  {text.guaranteeDesc}
                </p>
              </div>
            </div>
            <a
              href="#inquire-now"
              className="bg-gold hover:bg-gold-light text-[#0A2A1E] px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shrink-0 shadow-md hover:scale-105"
            >
              {text.guaranteeBtn}
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

