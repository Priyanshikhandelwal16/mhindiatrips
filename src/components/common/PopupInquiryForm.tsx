"use client";

import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { createInquiryAction } from "@/app/actions/inquiry";

interface PopupInquiryFormProps {
  locale: string;
}

export default function PopupInquiryForm({ locale }: PopupInquiryFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    startDate: "",
    duration: "",
    travelers: "1",
    destinations: "Rajasthan",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const t: Record<string, any> = {
    en: {
      title: "Plan Your India Journey",
      subtitle: "Share your travel ideas and get a personalized itinerary within 24 hours.",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number (with Country Code)",
      startDate: "Estimated Arrival Date / Month",
      duration: "Duration (Days)",
      travelers: "Guests Count",
      destination: "State of Interest",
      message: "Tell us about your interests & special requests...",
      submit: "Request Free Custom Plan",
      submitting: "Submitting Plan...",
      successTitle: "Plan Requested!",
      successText: "Your inquiry is received. A private travel advisor will reach out to you shortly.",
      close: "Close",
      whatsapp: "Customize on WhatsApp"
    },
    es: {
      title: "Planifica Tu Viaje a India",
      subtitle: "Comparte tus ideas de viaje y recibe tu itinerario a medida en 24 horas.",
      name: "Nombre Completo",
      email: "Correo Electrónico",
      phone: "Teléfono (con Código de País)",
      startDate: "Fecha Estimada de Llegada",
      duration: "Duración (Días)",
      travelers: "Número de Viajeros",
      destination: "Estado de Interés",
      message: "Cuéntanos sobre tus intereses y peticiones...",
      submit: "Solicitar Itinerario Gratis",
      submitting: "Transmitiendo...",
      successTitle: "¡Plan Solicitado!",
      successText: "Hemos recibido tu consulta. Un diseñador de viajes se pondrá en contacto pronto.",
      close: "Cerrar",
      whatsapp: "Personalizar en WhatsApp"
    },
    pt: {
      title: "Planeje Sua Viagem para Índia",
      subtitle: "Compartilhe suas ideias e receba seu roteiro personalizado em 24 horas.",
      name: "Nome Completo",
      email: "E-mail",
      phone: "Telefone (com Código do País)",
      startDate: "Data Estimada de Chegada",
      duration: "Duração (Dias)",
      travelers: "Número de Viajantes",
      destination: "Estado de Interesse",
      message: "Conte-nos sobre seus interesses e pedidos...",
      submit: "Solicitar Roteiro Grátis",
      submitting: "Transmitindo...",
      successTitle: "¡Plano Solicitado!",
      successText: "Sua solicitação foi recebida. Um consultor de viagens entrará em contato em breve.",
      close: "Fechar",
      whatsapp: "Personalizar no WhatsApp"
    }
  };

  const text = t[locale] || t.en;

  useEffect(() => {
    // Check if the user has already seen the popup in this session
    const hasSeen = sessionStorage.getItem("has_seen_inquiry_popup");
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2500); // 2.5 seconds delay on load
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("has_seen_inquiry_popup", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await createInquiryAction({
        ...form,
        destinations: [form.destinations], // Wrap string in array for backend compatibility
        experience: "Luxury Custom Plan",
        country: "N/A"
      });

      if (res.success) {
        setSuccess(true);
        sessionStorage.setItem("has_seen_inquiry_popup", "true");
        setTimeout(() => {
          setIsOpen(false);
        }, 3000);
      } else {
        setError(res.error || "Submission failed");
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#FAF8F5] border border-gold/25 rounded-3xl w-full max-w-lg shadow-2xl relative overflow-hidden max-h-[90vh] flex flex-col">
        {/* Top Gold Border Decorator */}
        <div className="h-1.5 w-full bg-gold shrink-0" />
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-royal/10 hover:bg-gold hover:text-royal text-royal p-1.5 rounded-full transition-all duration-300 z-50 cursor-pointer"
          aria-label={text.close}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Scrollable Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-grow">
          {success ? (
            <div className="text-center py-10 space-y-4 animate-scale-up">
              <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto border border-gold/25">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-serif text-royal">{text.successTitle}</h3>
              <p className="text-xs text-royal/65 leading-relaxed font-light max-w-sm mx-auto">{text.successText}</p>
            </div>
          ) : (
            <>
              <div className="text-left space-y-1.5 pr-8">
                <h3 className="text-xl font-bold font-serif text-royal tracking-tight">{text.title}</h3>
                <p className="text-xs text-royal/65 font-light leading-relaxed">{text.subtitle}</p>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200/50 text-red-700 text-xs px-4 py-3 rounded-xl flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {/* Name */}
                <div className="space-y-1">
                  <label className="font-semibold text-royal/85 uppercase tracking-wider block text-[10px] md:text-xs mb-1.5">{text.name}</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white border border-gold/15 rounded-xl px-4 py-3 outline-none focus:border-gold transition-colors font-light text-royal"
                  />
                </div>
 
                {/* Email & Phone grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-semibold text-royal/85 uppercase tracking-wider block text-[10px] md:text-xs mb-1.5">{text.email}</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white border border-gold/15 rounded-xl px-4 py-3 outline-none focus:border-gold transition-colors font-light text-royal"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-semibold text-royal/85 uppercase tracking-wider block text-[10px] md:text-xs mb-1.5">{text.phone}</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white border border-gold/15 rounded-xl px-4 py-3 outline-none focus:border-gold transition-colors font-light text-royal"
                    />
                  </div>
                </div>
 
                {/* Date, Duration & Travelers Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="font-semibold text-royal/85 uppercase tracking-wider block text-[10px] md:text-xs mb-1.5">{text.startDate}</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Oct 2026"
                      value={form.startDate}
                      onChange={e => setForm({ ...form, startDate: e.target.value })}
                      className="w-full bg-white border border-gold/15 rounded-xl px-3 py-3 outline-none focus:border-gold transition-colors font-light text-royal placeholder-royal/35 text-[11px]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-semibold text-royal/85 uppercase tracking-wider block text-[10px] md:text-xs mb-1.5">{text.duration}</label>
                    <input
                      type="number"
                      required
                      min="1"
                      value={form.duration}
                      onChange={e => setForm({ ...form, duration: e.target.value })}
                      className="w-full bg-white border border-gold/15 rounded-xl px-3 py-3 outline-none focus:border-gold transition-colors font-light text-royal text-[11px]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-semibold text-royal/85 uppercase tracking-wider block text-[10px] md:text-xs mb-1.5">{text.travelers}</label>
                    <select
                      value={form.travelers}
                      onChange={e => setForm({ ...form, travelers: e.target.value })}
                      className="w-full bg-white border border-gold/15 rounded-xl px-3 py-3 outline-none focus:border-gold transition-colors font-light text-royal text-[11px] h-[42px] cursor-pointer"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3-5">3-5</option>
                      <option value="6-9">6-9</option>
                      <option value="10+">10+</option>
                    </select>
                  </div>
                </div>
 
                {/* State of Interest Dropdown */}
                <div className="space-y-1">
                  <label className="font-semibold text-royal/85 uppercase tracking-wider block text-[10px] md:text-xs mb-1.5">{text.destination}</label>
                  <select
                    value={form.destinations}
                    onChange={e => setForm({ ...form, destinations: e.target.value })}
                    className="w-full bg-white border border-gold/15 rounded-xl px-4 py-3 outline-none focus:border-gold transition-colors font-light text-royal cursor-pointer h-[44px]"
                  >
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Goa">Goa</option>
                    <option value="Uttar Pradesh (Taj Mahal)">Uttar Pradesh (Taj Mahal)</option>
                    <option value="South India Heritage">South India Heritage</option>
                    <option value="North India Classic">North India Classic</option>
                    <option value="Himalayas & Mountains">Himalayas & Mountains</option>
                  </select>
                </div>
 
                {/* Message */}
                <div className="space-y-1">
                  <label className="font-semibold text-royal/85 uppercase tracking-wider block text-[10px] md:text-xs mb-1.5">{text.message}</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full h-16 bg-white border border-gold/15 rounded-xl p-4 outline-none focus:border-gold transition-colors font-light text-royal resize-none"
                  />
                </div>
 
                {/* Two Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-royal hover:bg-gold hover:text-royal text-white font-bold uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-[11px]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{loading ? text.submitting : text.submit}</span>
                  </button>
                  
                  <a
                    href={`https://wa.me/919782001006?text=${encodeURIComponent("Hello! I want to plan my custom India trip with MH India Trips.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-center text-[11px]"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    <span>{text.whatsapp}</span>
                  </a>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
