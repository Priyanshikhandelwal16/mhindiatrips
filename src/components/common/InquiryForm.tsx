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
      title: "Plan Your Private Journey",
      subtitle: "Tell us your travel dreams. Our experts will craft a personalized itinerary within 24 hours.",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      country: "Country",
      startDate: "Travel Date / Month",
      duration: "Duration (Days)",
      travelers: "Travelers",
      experience: "Travel Style",
      message: "Tell us about your interests & special requests...",
      submit: "Send My Travel Request",
      submitting: "Sending...",
      successTitle: "Thank You!",
      successText: "Your travel inquiry has been received. Our specialists will contact you within 24 hours with a draft itinerary.",
      errorText: "Something went wrong. Please try again."
    },
    es: {
      title: "Planifique Su Viaje Privado",
      subtitle: "Cuéntenos sus sueños de viaje. Nuestros expertos diseñarán un itinerario personalizado en 24 horas.",
      name: "Nombre Completo",
      email: "Correo Electrónico",
      phone: "Teléfono",
      country: "País",
      startDate: "Fecha de Viaje",
      duration: "Duración (Días)",
      travelers: "Viajeros",
      experience: "Estilo de Viaje",
      message: "Cuéntenos sobre sus intereses y peticiones especiales...",
      submit: "Enviar Solicitud",
      submitting: "Enviando...",
      successTitle: "¡Muchas Gracias!",
      successText: "Hemos recibido su consulta. Nuestros especialistas se pondrán en contacto en 24 horas.",
      errorText: "Algo salió mal. Inténtelo de nuevo."
    },
    pt: {
      title: "Planeje Sua Viagem Privada",
      subtitle: "Conte-nos seus sonhos de viagem. Nossos especialistas criarão um itinerário personalizado em 24 horas.",
      name: "Nome Completo",
      email: "E-mail",
      phone: "Telefone",
      country: "País",
      startDate: "Data de Viagem",
      duration: "Duração (Dias)",
      travelers: "Viajantes",
      experience: "Estilo de Viagem",
      message: "Conte-nos sobre seus interesses e pedidos especiais...",
      submit: "Enviar Solicitação",
      submitting: "Enviando...",
      successTitle: "Muito Obrigado!",
      successText: "Recebemos sua consulta. Nossos especialistas entrarão em contato em 24 horas.",
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
      <div className="glass-panel rounded-3xl p-10 md:p-14 text-center space-y-6 max-w-xl mx-auto animate-scale-up">
        <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8 text-forest" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-royal">{text.successTitle}</h3>
        <p className="text-sm text-foreground/65 leading-relaxed">{text.successText}</p>
      </div>
    );
  }

  return (
    <div className="glass-panel border border-gold/15 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto shadow-xl shadow-royal/5 relative overflow-hidden" id="inquire-now">
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-gold via-gold-light to-gold opacity-80" />
      <div className="space-y-3 mb-8 text-center relative z-10">
        <div className="flex items-center justify-center gap-2 mb-1.5">
          <Sparkles className="w-4 h-4 text-gold animate-pulse-gentle" />
          <span className="editorial-subheading text-[10px] tracking-[0.25em] text-gold font-bold">
            {locale === "es" ? "Viaje Personalizado" : locale === "pt" ? "Viagem Personalizada" : "Bespoke Journey"}
          </span>
        </div>
        <h3 className="text-3xl font-serif font-bold text-royal tracking-tight">{text.title}</h3>
        <p className="text-sm text-foreground/55 max-w-md mx-auto leading-relaxed">{text.subtitle}</p>
        <div className="gold-divider w-24 mx-auto mt-4" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div className="bg-red-50 text-red-700 text-xs p-4 rounded-xl flex items-center gap-2 border border-red-100">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-foreground/50">{text.name}</label>
            <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input-elegant" required />
          </div>
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-foreground/50">{text.email}</label>
            <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input-elegant" required />
          </div>
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-foreground/50">{text.phone}</label>
            <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="input-elegant" />
          </div>
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-foreground/50">{text.country}</label>
            <input type="text" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} className="input-elegant" />
          </div>
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-foreground/50">{text.startDate}</label>
            <input type="text" value={form.startDate} placeholder={locale === "es" ? "Ej: Octubre 2026" : locale === "pt" ? "Ex: Outubro 2026" : "e.g. October 2026"} onChange={(e) => setForm({ ...form, startDate: e.target.value })} className="input-elegant" required />
          </div>
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-foreground/50">{text.duration}</label>
            <input type="number" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} className="input-elegant" />
          </div>
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-foreground/50">{text.travelers}</label>
            <select value={form.travelers} onChange={(e) => setForm({ ...form, travelers: e.target.value })} className="input-elegant appearance-none">
              <option value="1">1</option>
              <option value="2">2 (Couple)</option>
              <option value="3-5">3-5 (Family)</option>
              <option value="6+">6+ (Group)</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-foreground/50">{text.experience}</label>
            <select value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })} className="input-elegant appearance-none">
              <option value="Luxury">Luxury & Palaces</option>
              <option value="Adventure">Adventure</option>
              <option value="Spiritual">Spiritual & Yoga</option>
              <option value="Wildlife">Wildlife Safari</option>
              <option value="Honeymoon">Honeymoon</option>
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] font-semibold uppercase tracking-wider text-foreground/50">{text.message}</label>
          <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} className="input-elegant resize-none" />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full btn-primary py-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" />
          <span>{loading ? text.submitting : text.submit}</span>
        </button>
      </form>
    </div>
  );
}
