"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Calendar, Sparkles } from "lucide-react";
import { createInquiryAction } from "@/app/actions/inquiry";

interface SidebarInquiryFormProps {
  locale: string;
  defaultDestination?: string;
}

export default function SidebarInquiryForm({ locale, defaultDestination = "" }: SidebarInquiryFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    startDate: "",
    duration: "7",
    experience: "Hotels & Tours",
    destinations: defaultDestination,
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const t: Record<string, any> = {
    en: {
      title: "Plan Your Trip",
      subtitle: "Get a bespoke itinerary in 24 hours.",
      name: "Your Name*",
      email: "Email Address*",
      phone: "Phone / WhatsApp*",
      startDate: "Proposed Arrival*",
      duration: "Duration (Days)",
      experience: "What do you need?",
      message: "More information...",
      submit: "Send Query",
      submitting: "Sending...",
      successTitle: "Thank You!",
      successText: "Our travel specialist will reach out shortly with a tailored draft itinerary.",
      errorText: "Failed to submit. Please check fields and try again."
    },
    es: {
      title: "Planifica tu Viaje",
      subtitle: "Obtén un itinerario a medida en 24 horas.",
      name: "Nombre Completo*",
      email: "Correo Electrónico*",
      phone: "Teléfono / WhatsApp*",
      startDate: "Fecha de Llegada*",
      duration: "Duración (Días)",
      experience: "¿Qué necesitas?",
      message: "Más información...",
      submit: "Enviar Consulta",
      submitting: "Enviando...",
      successTitle: "¡Muchas Gracias!",
      successText: "Nuestro especialista en viajes le contactará pronto con un itinerario a medida.",
      errorText: "Error al enviar. Por favor intente de nuevo."
    },
    pt: {
      title: "Planeje sua Viagem",
      subtitle: "Receba um roteiro personalizado em 24h.",
      name: "Nome Completo*",
      email: "E-mail*",
      phone: "Telefone / WhatsApp*",
      startDate: "Data de Chegada*",
      duration: "Duração (Dias)",
      experience: "O que você precisa?",
      message: "Mais informações...",
      submit: "Enviar Consulta",
      submitting: "Enviando...",
      successTitle: "Muito Obrigado!",
      successText: "Nosso especialista em viagens entrará em contato em breve com um roteiro sob medida.",
      errorText: "Erro ao enviar. Por favor tente novamente."
    }
  };

  const text = t[locale] || t.en;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.startDate) {
      setError(locale === "es" ? "Por favor complete todos los campos obligatorios." : "Please fill in all required fields.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await createInquiryAction({
        ...form,
        destinations: [form.destinations]
      });
      if (res.success) {
        setSuccess(true);
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

  return (
    <div className="bg-white border border-[#C5A862]/15 p-6 rounded-2xl shadow-lg relative overflow-hidden text-left space-y-5">
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gold" />
      
      {success ? (
        <div className="text-center space-y-4 py-4 animate-fade-in">
          <div className="w-12 h-12 bg-[#C5A862]/10 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6 text-gold" />
          </div>
          <h3 className="text-xl font-serif text-royal font-bold">{text.successTitle}</h3>
          <p className="text-xs text-royal/60 leading-relaxed font-light">{text.successText}</p>
        </div>
      ) : (
        <>
          <div className="space-y-1">
            <h4 className="text-lg font-serif font-bold text-royal flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold" />
              {text.title}
            </h4>
            <p className="text-[10px] text-royal/50 leading-relaxed font-light">{text.subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            {error && (
              <div className="bg-red-50 text-red-750 text-[10px] p-2.5 flex items-center gap-1.5 rounded-lg border border-red-100">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Name */}
            <div>
              <input 
                type="text" 
                placeholder={text.name}
                className="w-full text-xs border border-royal/10 hover:border-royal/30 focus:border-gold px-3.5 py-2.5 bg-royal/[0.01] rounded-xl outline-none transition-colors"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            {/* Email */}
            <div>
              <input 
                type="email" 
                placeholder={text.email}
                className="w-full text-xs border border-royal/10 hover:border-royal/30 focus:border-gold px-3.5 py-2.5 bg-royal/[0.01] rounded-xl outline-none transition-colors"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            {/* Phone */}
            <div>
              <input 
                type="tel" 
                placeholder={text.phone}
                className="w-full text-xs border border-royal/10 hover:border-royal/30 focus:border-gold px-3.5 py-2.5 bg-royal/[0.01] rounded-xl outline-none transition-colors"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Arrival Date */}
              <div>
                <label className="text-[8px] uppercase tracking-wider font-extrabold text-gold block mb-1">Arrival Date</label>
                <input 
                  type="date" 
                  className="w-full text-xs border border-royal/10 focus:border-gold px-2.5 py-2 bg-royal/[0.01] rounded-xl outline-none transition-colors text-royal/60"
                  value={form.startDate}
                  onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                />
              </div>

              {/* Duration */}
              <div>
                <label className="text-[8px] uppercase tracking-wider font-extrabold text-gold block mb-1 font-bold">Duration (Days)</label>
                <input 
                  type="number" 
                  placeholder="7"
                  className="w-full text-xs border border-royal/10 focus:border-gold px-2.5 py-2 bg-royal/[0.01] rounded-xl outline-none transition-colors text-royal/60"
                  value={form.duration}
                  onChange={(e) => setForm({ ...form, duration: e.target.value })}
                />
              </div>
            </div>

            {/* Category dropdown */}
            <div>
              <select 
                className="w-full text-xs border border-royal/10 focus:border-gold px-3 py-2.5 bg-white rounded-xl outline-none transition-colors text-royal/70"
                value={form.experience}
                onChange={(e) => setForm({ ...form, experience: e.target.value })}
              >
                <option value="Hoteles & Tours">{locale === "es" ? "Hoteles y Tours" : locale === "pt" ? "Hotéis e Tours" : "Hotels & Tours"}</option>
                <option value="Solo coche con conductor">{locale === "es" ? "Solo coche con conductor" : locale === "pt" ? "Apenas carro com motorista" : "Driver & Car Only"}</option>
                <option value="Tours">{locale === "es" ? "Solo Visitas Guiadas" : locale === "pt" ? "Apenas Tours" : "Tours Only"}</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <textarea 
                rows={3} 
                placeholder={text.message}
                className="w-full text-xs border border-royal/10 hover:border-royal/30 focus:border-gold px-3.5 py-2.5 bg-royal/[0.01] rounded-xl outline-none transition-colors resize-none"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            {/* Submit */}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full text-center bg-gold hover:bg-gold-light text-royal font-bold text-[10px] uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? (
                <span>{text.submitting}</span>
              ) : (
                <>
                  <span>{text.submit}</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
