import React from "react";
import { getPageByIdAction } from "@/app/actions/queries";
import Reveal from "@/components/home/Reveal";
import InquiryForm from "@/components/common/InquiryForm";
import { Phone, Mail, MapPin, Clock, MessageSquare, Compass } from "lucide-react";

import { db } from "@/lib/db";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  const pageData = await getPageByIdAction("contact");
  
  const contactDetails = (await db.settings.findUnique("contact_details")) || {
    phone: "+91 9829989187",
    email: "mhindiatrips@gmail.com",
    address: "New Delhi, India",
    hours: "Mon - Sat: 9:00 AM - 7:00 PM IST",
    whatsapp: "919829989187"
  };

  const t: Record<string, any> = {
    en: {
      hero: "Speak with Our Specialists",
      heroSub: "Concierge Contact",
      heroDesc: "Connect with our expert travel designers to begin crafting your private customized India itinerary.",
      infoTitle: "Concierge Desk",
      phone: contactDetails.phone || "+91 9829989187",
      email: contactDetails.email || "mhindiatrips@gmail.com",
      address: contactDetails.address || "New Delhi, India",
      hours: contactDetails.hours || "Mon - Sat: 9:00 AM - 7:00 PM IST",
      whatsappBtn: "Chat on WhatsApp",
    },
    es: {
      hero: "Hable con Nuestros Especialistas",
      heroSub: "Contacto de Conserjería",
      heroDesc: "Conéctese con nuestros diseñadores de viajes para comenzar a crear su itinerario personalizado.",
      infoTitle: "Mesa de Conserjería",
      phone: contactDetails.phone || "+91 9829989187",
      email: contactDetails.email || "mhindiatrips@gmail.com",
      address: contactDetails.address || "Nueva Delhi, India",
      hours: contactDetails.hours || "Lun - Sáb: 9:00 AM - 7:00 PM IST",
      whatsappBtn: "Chat en WhatsApp",
    },
    pt: {
      hero: "Fale com Nossos Especialistas",
      heroSub: "Contacto de Concierge",
      heroDesc: "Entre em contato com nossos designers de viagens para começar a planejar seu itinerário personalizado.",
      infoTitle: "Mesa de Concierge",
      phone: contactDetails.phone || "+91 9829989187",
      email: contactDetails.email || "mhindiatrips@gmail.com",
      address: contactDetails.address || "Nova Deli, Índia",
      hours: contactDetails.hours || "Seg - Sáb: 9:00 AM - 7:00 PM IST",
      whatsappBtn: "Conversar no WhatsApp",
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

  return (
    <div className="font-sans bg-[#FAF8F5] min-h-screen text-[#1B1B1B]">
      
      {/* SECTION 1: Banner Header */}
      <section className="relative bg-[#0A2A1E] text-white py-16 md:py-24 flex items-center justify-center text-center w-full">
        <div className="relative z-10 text-center text-white space-y-4 px-6 max-w-5xl">
          <span className="bg-gold text-royal text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full inline-block">
            {text.heroSub}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-white">{text.hero}</h1>
          <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto font-light leading-relaxed">{text.heroDesc}</p>
        </div>
      </section>

      {/* SECTION 2: Split columns */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          {/* Postcard Details box */}
          <Reveal className="bg-white border border-gold/25 p-8 space-y-8 shadow-xl shadow-royal/5 relative overflow-hidden lg:sticky lg:top-24">
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gold" />
            <div className="space-y-2">
              <span className="text-[9px] uppercase tracking-wider font-bold text-gold flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                <span>DIRECT CHANNELS</span>
              </span>
              <h2 className="text-2xl font-serif font-bold text-royal">{text.infoTitle}</h2>
              <div className="h-px w-16 bg-gold/25 mt-2" />
            </div>
            
            <div className="space-y-6 text-xs">
              <a href={`tel:${text.phone}`} className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-all shadow-sm">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-bold text-foreground/45">Phone Desk</p>
                  <p className="text-sm font-semibold text-royal group-hover:text-gold transition-colors mt-0.5">{text.phone}</p>
                </div>
              </a>
              
              <a href={`mailto:${text.email}`} className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-all shadow-sm">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-bold text-foreground/45">Mail Desk</p>
                  <p className="text-sm font-semibold text-royal group-hover:text-gold transition-colors mt-0.5">{text.email}</p>
                </div>
              </a>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-bold text-foreground/45">Headquarters</p>
                  <p className="text-sm font-semibold text-royal mt-0.5">{text.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 shadow-sm">
                  <Clock className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-bold text-foreground/45">Desk Hours</p>
                  <p className="text-sm font-semibold text-royal mt-0.5">{text.hours}</p>
                </div>
              </div>
            </div>

            {/* Instant Support */}
            <div className="pt-6 border-t border-gold/15">
              <a 
                href={`https://wa.me/${contactDetails.whatsapp || "919829989187"}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-[10px] font-bold uppercase tracking-widest py-4 px-6 rounded-full transition-transform hover:scale-[1.02] shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>{text.whatsappBtn}</span>
              </a>
            </div>
          </Reveal>

          {/* Form */}
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
