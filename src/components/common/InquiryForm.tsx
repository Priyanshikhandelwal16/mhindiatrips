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
      const res = await createInquiryAction(form);
      if (res.success) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", country: "", startDate: "", duration: "", travelers: "1", experience: "Luxury", message: "" });
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
      <div className="bg-white border border-gold/25 p-12 text-center space-y-6 max-w-xl mx-auto rounded-3xl shadow-xl shadow-royal/5 animate-scale-up">
        <div className="w-16 h-16 bg-gold/15 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8 text-gold" />
        </div>
        <h3 className="text-3xl font-serif font-bold text-royal">{text.successTitle}</h3>
        <p className="text-sm text-foreground/60 leading-relaxed font-light">{text.successText}</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gold/20 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto shadow-2xl shadow-royal/5 relative overflow-hidden" id="inquire-now">
      
      {/* Decorative corner accents */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gold/10 via-transparent to-transparent pointer-events-none" />

      <div className="space-y-3 mb-10 text-center relative z-10">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">
            {locale === "es" ? "Boceto Personalizado" : locale === "pt" ? "Esboço Personalizado" : "Bespoke Journey Designer"}
          </span>
        </div>
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-royal tracking-tight">{text.title}</h3>
        <p className="text-xs text-foreground/50 max-w-md mx-auto leading-relaxed font-light">{text.subtitle}</p>
        <div className="h-px w-20 bg-gold/25 mx-auto mt-4" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        {error && (
          <div className="bg-red-50 text-red-700 text-xs p-4 rounded-xl flex items-center gap-2 border border-red-100">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
          
          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-wider text-foreground/40">{text.name}</label>
            <input 
              type="text" 
              value={form.name} 
              onChange={(e) => setForm({ ...form, name: e.target.value })} 
              className="w-full bg-[#FAF8F5]/50 border-b border-gold/20 focus:border-gold px-4 py-3 text-xs text-royal outline-none transition-colors" 
              required 
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-wider text-foreground/40">{text.email}</label>
            <input 
              type="email" 
              value={form.email} 
              onChange={(e) => setForm({ ...form, email: e.target.value })} 
              className="w-full bg-[#FAF8F5]/50 border-b border-gold/20 focus:border-gold px-4 py-3 text-xs text-royal outline-none transition-colors" 
              required 
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-wider text-foreground/40">{text.phone}</label>
            <input 
              type="tel" 
              value={form.phone} 
              onChange={(e) => setForm({ ...form, phone: e.target.value })} 
              className="w-full bg-[#FAF8F5]/50 border-b border-gold/20 focus:border-gold px-4 py-3 text-xs text-royal outline-none transition-colors" 
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-wider text-foreground/40">{text.country}</label>
            <input 
              type="text" 
              value={form.country} 
              onChange={(e) => setForm({ ...form, country: e.target.value })} 
              className="w-full bg-[#FAF8F5]/50 border-b border-gold/20 focus:border-gold px-4 py-3 text-xs text-royal outline-none transition-colors" 
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-wider text-foreground/40">{text.startDate}</label>
            <input 
              type="text" 
              value={form.startDate} 
              placeholder={locale === "es" ? "Ej: Octubre 2026" : locale === "pt" ? "Ex: Outubro 2026" : "e.g. October 2026"} 
              onChange={(e) => setForm({ ...form, startDate: e.target.value })} 
              className="w-full bg-[#FAF8F5]/50 border-b border-gold/20 focus:border-gold px-4 py-3 text-xs text-royal outline-none transition-colors" 
              required 
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-wider text-foreground/40">{text.duration}</label>
            <input 
              type="number" 
              value={form.duration} 
              onChange={(e) => setForm({ ...form, duration: e.target.value })} 
              className="w-full bg-[#FAF8F5]/50 border-b border-gold/20 focus:border-gold px-4 py-3 text-xs text-royal outline-none transition-colors" 
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-wider text-foreground/40">{text.travelers}</label>
            <div className="relative">
              <select 
                value={form.travelers} 
                onChange={(e) => setForm({ ...form, travelers: e.target.value })} 
                className="w-full bg-[#FAF8F5]/50 border-b border-gold/20 focus:border-gold px-4 py-3 text-xs text-royal outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="1">1</option>
                <option value="2">2 (Couple)</option>
                <option value="3-5">3-5 (Family)</option>
                <option value="6+">6+ (Group)</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-wider text-foreground/40">{text.experience}</label>
            <div className="relative">
              <select 
                value={form.experience} 
                onChange={(e) => setForm({ ...form, experience: e.target.value })} 
                className="w-full bg-[#FAF8F5]/50 border-b border-gold/20 focus:border-gold px-4 py-3 text-xs text-royal outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="Luxury">Luxury & Palaces</option>
                <option value="Adventure">Adventure</option>
                <option value="Spiritual">Spiritual & Yoga</option>
                <option value="Wildlife">Wildlife Safari</option>
                <option value="Honeymoon">Honeymoon</option>
              </select>
            </div>
          </div>

        </div>

        <div className="space-y-1">
          <label className="text-[10px] font-bold uppercase tracking-wider text-foreground/40">{text.message}</label>
          <textarea 
            value={form.message} 
            onChange={(e) => setForm({ ...form, message: e.target.value })} 
            rows={4} 
            className="w-full bg-[#FAF8F5]/50 border-b border-gold/20 focus:border-gold px-4 py-3 text-xs text-royal outline-none transition-colors resize-none" 
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gold hover:bg-gold-light text-royal text-xs font-bold uppercase tracking-widest py-4 rounded-full transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-gold/10"
        >
          <Send className="w-4 h-4 text-royal" />
          <span>{loading ? text.submitting : text.submit}</span>
        </button>
      </form>
    </div>
  );
}
