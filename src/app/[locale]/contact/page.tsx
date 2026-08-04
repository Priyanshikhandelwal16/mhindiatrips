import React from "react";
import Reveal from "@/components/home/Reveal";
import InquiryForm from "@/components/common/InquiryForm";
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;

  const t: Record<string, any> = {
    en: {
      hero: "Contact Us",
      heroSub: "Get in Touch",
      heroDesc: "We'd love to hear from you. Whether you're planning a trip or have questions, our team is ready to help.",
      infoTitle: "Contact Information",
      phone: "+91 98765 43210",
      email: "hello@mhindiatrips.com",
      address: "New Delhi, India",
      hours: "Mon - Sat: 9:00 AM - 7:00 PM IST",
      formTitle: "Send Us a Message",
    },
    es: {
      hero: "Contacto",
      heroSub: "Póngase en Contacto",
      heroDesc: "Nos encantaría saber de usted. Ya sea que esté planificando un viaje o tenga preguntas, estamos listos para ayudarle.",
      infoTitle: "Información de Contacto",
      phone: "+91 98765 43210",
      email: "hello@mhindiatrips.com",
      address: "Nueva Delhi, India",
      hours: "Lun - Sáb: 9:00 AM - 7:00 PM IST",
      formTitle: "Envíenos un Mensaje",
    },
    pt: {
      hero: "Contacto",
      heroSub: "Entre em Contacto",
      heroDesc: "Adoraríamos ouvir de você. Esteja planejando uma viagem ou tenha perguntas, nossa equipe está pronta para ajudar.",
      infoTitle: "Informações de Contacto",
      phone: "+91 98765 43210",
      email: "hello@mhindiatrips.com",
      address: "Nova Deli, Índia",
      hours: "Seg - Sáb: 9:00 AM - 7:00 PM IST",
      formTitle: "Envie-nos uma Mensagem",
    }
  };

  const text = t[locale] || t.en;

  return (
    <div className="font-sans bg-background text-foreground">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=1920" alt="Contact" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-royal/80" />
        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <span className="editorial-subheading block text-gold mb-4">{text.heroSub}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">{text.hero}</h1>
          <p className="text-lg text-white/70">{text.heroDesc}</p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <Reveal className="space-y-8">
              <h2 className="text-2xl font-serif font-bold text-royal">{text.infoTitle}</h2>
              <div className="space-y-6">
                <a href={`tel:${text.phone}`} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gold/8 flex items-center justify-center shrink-0 group-hover:bg-gold/15 transition-colors">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-royal">Phone</p>
                    <p className="text-sm text-foreground/55">{text.phone}</p>
                  </div>
                </a>
                <a href={`mailto:${text.email}`} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gold/8 flex items-center justify-center shrink-0 group-hover:bg-gold/15 transition-colors">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-royal">Email</p>
                    <p className="text-sm text-foreground/55">{text.email}</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/8 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-royal">Address</p>
                    <p className="text-sm text-foreground/55">{text.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/8 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-royal">Hours</p>
                    <p className="text-sm text-foreground/55">{text.hours}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <div className="lg:col-span-2">
              <Reveal delay={100}>
                <InquiryForm locale={locale} />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
