import React from "react";
import Reveal from "@/components/home/Reveal";
import InquiryForm from "@/components/common/InquiryForm";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;

  const t: Record<string, any> = {
    en: {
      hero: "Speak with Our Specialists",
      heroSub: "Concierge Contact",
      heroDesc: "Connect with our expert travel designers to begin crafting your private customized India itinerary.",
      infoTitle: "Concierge Desk",
      phone: "+91 98765 43210",
      email: "hello@mhindiatrips.com",
      address: "New Delhi, India",
      hours: "Mon - Sat: 9:00 AM - 7:00 PM IST",
      whatsappBtn: "Chat on WhatsApp",
    },
    es: {
      hero: "Hable con Nuestros Especialistas",
      heroSub: "Contacto de Conserjería",
      heroDesc: "Conéctese con nuestros diseñadores de viajes para comenzar a crear su itinerario personalizado.",
      infoTitle: "Mesa de Conserjería",
      phone: "+91 98765 43210",
      email: "hello@mhindiatrips.com",
      address: "Nueva Delhi, India",
      hours: "Lun - Sáb: 9:00 AM - 7:00 PM IST",
      whatsappBtn: "Chat en WhatsApp",
    },
    pt: {
      hero: "Fale com Nossos Especialistas",
      heroSub: "Contacto de Concierge",
      heroDesc: "Entre em contato com nossos designers de viagens para começar a planejar seu itinerário personalizado.",
      infoTitle: "Mesa de Concierge",
      phone: "+91 98765 43210",
      email: "hello@mhindiatrips.com",
      address: "Nova Deli, Índia",
      hours: "Seg - Sáb: 9:00 AM - 7:00 PM IST",
      whatsappBtn: "Conversar no WhatsApp",
    }
  };

  const text = t[locale] || t.en;

  return (
    <div className="font-sans bg-[#FAF8F5] min-h-screen text-[#1B1B1B]">
      
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[380px] flex items-center justify-center overflow-hidden">
        <img src="/images/luxury_palace_train.png" alt="Contact Concierge" className="absolute inset-0 w-full h-full object-cover animate-kenburns" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/75" />
        <div className="relative z-10 text-center text-white px-6 max-w-3xl mt-16 space-y-4">
          <span className="editorial-subheading block text-gold tracking-[0.25em] text-[10px] font-bold">{text.heroSub}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight">{text.hero}</h1>
          <p className="text-sm md:text-base text-white/80 max-w-xl mx-auto leading-relaxed font-light">{text.heroDesc}</p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          {/* Contact Info Card */}
          <Reveal className="space-y-8 lg:sticky lg:top-24">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-wider font-bold text-gold">Direct Channels</span>
              <h2 className="text-3xl font-serif font-bold text-royal">{text.infoTitle}</h2>
              <div className="gold-divider w-16 mt-2" />
            </div>
            
            <div className="space-y-6">
              <a href={`tel:${text.phone}`} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-all group-hover:scale-105 shadow-sm">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-foreground/45">Concierge Phone</p>
                  <p className="text-sm font-semibold text-royal group-hover:text-gold transition-colors mt-0.5">{text.phone}</p>
                </div>
              </a>
              
              <a href={`mailto:${text.email}`} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-all group-hover:scale-105 shadow-sm">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-foreground/45">Concierge Email</p>
                  <p className="text-sm font-semibold text-royal group-hover:text-gold transition-colors mt-0.5">{text.email}</p>
                </div>
              </a>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-foreground/45">Corporate Office</p>
                  <p className="text-sm font-semibold text-royal mt-0.5">{text.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 shadow-sm">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-foreground/45">Support Hours</p>
                  <p className="text-sm font-semibold text-royal mt-0.5">{text.hours}</p>
                </div>
              </div>
            </div>

            {/* Premium WhatsApp Concierge Link */}
            <div className="pt-6 border-t border-sand/65">
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider py-4 px-6 rounded-full transition-all shadow-md shadow-emerald-500/10 hover:shadow-lg hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{text.whatsappBtn}</span>
              </a>
            </div>
          </Reveal>

          {/* Inquiry Form Column */}
          <div className="lg:col-span-2">
            <Reveal delay={100}>
              <InquiryForm locale={locale} />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
