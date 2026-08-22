"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import { createInquiryAction } from "@/app/actions/inquiry";

interface InquiryFormProps {
  locale: string;
}

export default function InquiryForm({ locale }: InquiryFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    startDate: "",
    duration: "",
    travelers: "1",
    experience: "Luxury",
    destinations: "Rajasthan", // New required field
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const translations: Record<string, any> = {
    en: {
      title: "Plan Your Bespoke Journey",
      subtitle: "Share your travel aspirations. Our private travel designers will draft a custom itinerary within 24 hours.",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      country: "Country of Residence",
      startDate: "Proposed Date / Month",
      duration: "Duration (Days)",
      travelers: "Guests Count",
      experience: "Travel Philosophy",
      destination: "Interested Destination", // New label
      message: "Tell us about your interests & special requests...",
      submit: "Send Travel Request",
      submitting: "Transmitting...",
      successTitle: "Thank You",
      successText: "Your private inquiry has been received. Our specialists will contact you with a draft itinerary shortly.",
      errorText: "Something went wrong. Please try again."
    },
    es: {
      title: "Planifique Su Viaje Privado",
      subtitle: "Comparta sus deseos de viaje. Nuestros diseñadores de viajes privados prepararán un itinerario a medida en 24 horas.",
      name: "Nombre Completo",
      email: "Correo Electrónico",
      phone: "Teléfono",
      country: "País de Residencia",
      startDate: "Fecha Propuesta",
      duration: "Duración (Días)",
      travelers: "Número de Huéspedes",
      experience: "Filosofía de Viaje",
      destination: "Destino de Interés", // New label
      message: "Cuéntenos sobre sus intereses y peticiones especiales...",
      submit: "Enviar Solicitud",
      submitting: "Transmitiendo...",
      successTitle: "¡Muchas Gracias!",
      successText: "Hemos recibido su consulta. Nuestros especialistas se pondrán en contacto con un borrador de itinerario.",
      errorText: "Algo salió mal. Inténtelo de nuevo."
    },
    pt: {
      title: "Planeje Sua Viagem Privada",
      subtitle: "Compartilhe seus desejos de viagem. Nossos designers de viagens privadas prepararão um itinerário sob medida em 24 horas.",
      name: "Nome Completo",
      email: "E-mail",
      phone: "Telefone",
      country: "País de Residência",
      startDate: "Data Proposta",
      duration: "Duração (Dias)",
      travelers: "Número de Hóspedes",
      experience: "Filosofia de Viagem",
      destination: "Destino de Interesse", // New label
      message: "Conte-nos sobre seus interesses e pedidos especiais...",
      submit: "Enviar Solicitação",
      submitting: "Transmitindo...",
      successTitle: "Muito Obrigado!",
      successText: "Recebemos sua consulta. Nossos especialistas entrarão em contato com um esboço de itinerário em breve.",
      errorText: "Algo deu errado. Tente novamente."
    }
  };

  const text = translations[locale] || translations.en;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await createInquiryAction({
        ...form,
        destinations: [form.destinations] // Wrap destinations string in array for backend compatibility
      });
      if (res.success) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", country: "", startDate: "", duration: "", travelers: "1", experience: "Luxury", destinations: "Rajasthan", message: "" });
        if (res.emailSent === false) {
          console.warn("Inquiry successfully saved in database, but Resend email delivery failed. Error details:", res.emailError);
        }
      } else {
        setError(res.error || text.errorText);
      }
    } catch (e: any) {
      setError(e.message || text.errorText);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white border border-[#C5A862]/30 p-12 text-center space-y-6 max-w-xl mx-auto shadow-2xl shadow-[#0A2A1E]/5 animate-scale-up">
        <div className="w-16 h-16 bg-[#C5A862]/10 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8 text-gold" />
        </div>
        <h3 className="text-3xl font-serif text-royal">{text.successTitle}</h3>
        <p className="text-base text-foreground/60 leading-relaxed font-light">{text.successText}</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#C5A862]/15 p-8 md:p-16 max-w-4xl mx-auto shadow-2xl shadow-[#0A2A1E]/5 relative overflow-hidden" id="inquire-now">
      
      {/* Decorative corner accents */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className="space-y-3.5 mb-12 text-center relative z-10">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">
            {locale === "es" ? "Boceto Personalizado" : locale === "pt" ? "Esboço Personalizado" : "Bespoke Journey Designer"}
          </span>
        </div>
        <h3 className="text-3xl md:text-5xl font-serif font-normal text-royal tracking-tight">{text.title}</h3>
        <p className="text-sm text-foreground/50 max-w-lg mx-auto leading-relaxed font-light">{text.subtitle}</p>
        <div className="h-px w-20 bg-gold/25 mx-auto mt-4" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
        {error && (
          <div className="bg-red-50/50 text-red-750 text-xs p-4 flex items-center gap-2 border border-red-100/40">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-[0.16em] text-royal/65">{text.name}</label>
            <input 
              type="text" 
              value={form.name} 
              onChange={(e) => setForm({ ...form, name: e.target.value })} 
              className="w-full bg-[#FAF8F5]/80 border-b border-gold/25 focus:border-gold focus:bg-white px-4 py-3.5 text-sm text-royal outline-none transition-all duration-300 rounded-md" 
              required 
              suppressHydrationWarning={true}
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-[0.16em] text-royal/65">{text.email}</label>
            <input 
              type="email" 
              value={form.email} 
              onChange={(e) => setForm({ ...form, email: e.target.value })} 
              className="w-full bg-[#FAF8F5]/80 border-b border-gold/25 focus:border-gold focus:bg-white px-4 py-3.5 text-sm text-royal outline-none transition-all duration-300 rounded-md" 
              required 
              suppressHydrationWarning={true}
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-[0.16em] text-royal/65">{text.phone}</label>
            <input 
              type="tel" 
              value={form.phone} 
              onChange={(e) => setForm({ ...form, phone: e.target.value })} 
              className="w-full bg-[#FAF8F5]/80 border-b border-gold/25 focus:border-gold focus:bg-white px-4 py-3.5 text-sm text-royal outline-none transition-all duration-300 rounded-md" 
              suppressHydrationWarning={true}
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-[0.16em] text-royal/65">{text.country}</label>
            <input 
              type="text" 
              value={form.country} 
              onChange={(e) => setForm({ ...form, country: e.target.value })} 
              className="w-full bg-[#FAF8F5]/80 border-b border-gold/25 focus:border-gold focus:bg-white px-4 py-3.5 text-sm text-royal outline-none transition-all duration-300 rounded-md" 
              suppressHydrationWarning={true}
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-[0.16em] text-royal/65">{text.startDate}</label>
            <input 
              type="text" 
              value={form.startDate} 
              placeholder={locale === "es" ? "Ej: Octubre 2026" : locale === "pt" ? "Ex: Outubro 2026" : "e.g. October 2026"} 
              onChange={(e) => setForm({ ...form, startDate: e.target.value })} 
              className="w-full bg-[#FAF8F5]/80 border-b border-gold/25 focus:border-gold focus:bg-white px-4 py-3.5 text-sm text-royal outline-none transition-all duration-300 rounded-md" 
              required 
              suppressHydrationWarning={true}
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-[0.16em] text-royal/65">{text.duration}</label>
            <input 
              type="number" 
              value={form.duration} 
              onChange={(e) => setForm({ ...form, duration: e.target.value })} 
              className="w-full bg-[#FAF8F5]/80 border-b border-gold/25 focus:border-gold focus:bg-white px-4 py-3.5 text-sm text-royal outline-none transition-all duration-300 rounded-md" 
              suppressHydrationWarning={true}
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-[0.16em] text-royal/65">{text.travelers}</label>
            <div className="relative">
              <select 
                value={form.travelers} 
                onChange={(e) => setForm({ ...form, travelers: e.target.value })} 
                className="w-full bg-[#FAF8F5]/80 border-b border-gold/25 focus:border-gold focus:bg-white px-4 py-3.5 text-sm text-royal outline-none transition-all duration-300 appearance-none cursor-pointer rounded-md"
                suppressHydrationWarning={true}
              >
                <option value="1">1</option>
                <option value="2">2 (Couple)</option>
                <option value="3-5">3-5 (Family)</option>
                <option value="6+">6+ (Group)</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-[0.16em] text-royal/65">{text.experience}</label>
            <div className="relative">
              <select 
                value={form.experience} 
                onChange={(e) => setForm({ ...form, experience: e.target.value })} 
                className="w-full bg-[#FAF8F5]/80 border-b border-gold/25 focus:border-gold focus:bg-white px-4 py-3.5 text-sm text-royal outline-none transition-all duration-300 appearance-none cursor-pointer rounded-md"
                suppressHydrationWarning={true}
              >
                <option value="Luxury">Luxury & Palaces</option>
                <option value="Adventure">Adventure</option>
                <option value="Spiritual">Spiritual & Yoga</option>
                <option value="Wildlife">Wildlife Safari</option>
              </select>
            </div>
          </div>

          {/* New Required Destination select dropdown */}
          <div className="space-y-1.5 md:col-span-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.16em] text-royal/65">{text.destination} *</label>
            <div className="relative">
              <select 
                value={form.destinations} 
                onChange={(e) => setForm({ ...form, destinations: e.target.value })} 
                className="w-full bg-[#FAF8F5]/80 border-b border-gold/25 focus:border-gold focus:bg-white px-4 py-3.5 text-sm text-royal outline-none transition-all duration-300 appearance-none cursor-pointer rounded-md font-medium"
                required
                suppressHydrationWarning={true}
              >
                <option value="Rajasthan">Rajasthan</option>
                <option value="Kerala">Kerala</option>
                <option value="Varanasi">Varanasi</option>
                <option value="Delhi & Agra">Delhi & Agra</option>
                <option value="Goa">Goa</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>

        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-[0.16em] text-royal/65">{text.message}</label>
          <textarea 
            value={form.message} 
            onChange={(e) => setForm({ ...form, message: e.target.value })} 
            rows={4} 
            className="w-full bg-[#FAF8F5]/80 border-b border-gold/25 focus:border-gold focus:bg-white px-4 py-3.5 text-sm text-royal outline-none transition-all duration-300 rounded-md resize-none font-light" 
            suppressHydrationWarning={true}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gold hover:bg-gold-light text-[#0A2A1E] text-[11px] font-bold uppercase tracking-[0.25em] py-5 rounded-full transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-gold/15 border border-gold"
          suppressHydrationWarning={true}
        >
          <Send className="w-4 h-4 text-[#0A2A1E]" />
          <span>{loading ? text.submitting : text.submit}</span>
        </button>
      </form>
    </div>
  );
}
