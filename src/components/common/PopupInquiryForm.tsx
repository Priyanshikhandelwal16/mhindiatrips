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
      close: "Close"
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
      close: "Cerrar"
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
      close: "Fechar"
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
                  <label className="font-bold text-royal/50 uppercase tracking-wider block">{text.name}</label>
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
                    <label className="font-bold text-royal/50 uppercase tracking-wider block">{text.email}</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white border border-gold/15 rounded-xl px-4 py-3 outline-none focus:border-gold transition-colors font-light text-royal"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-royal/50 uppercase tracking-wider block">{text.phone}</label>
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
                <div className="grid grid-cols-3 gap-3">
                  <div className="space-y-1 col-span-1">
                    <label className="font-bold text-royal/50 uppercase tracking-wider block text-[9px] truncate">{text.startDate}</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Oct 2026"
                      value={form.startDate}
                      onChange={e => setForm({ ...form, startDate: e.target.value })}
                      className="w-full bg-white border border-gold/15 rounded-xl px-3 py-3 outline-none focus:border-gold transition-colors font-light text-royal placeholder-royal/35 text-[11px]"
                    />
                  </div>
                  <div className="space-y-1 col-span-1">
                    <label className="font-bold text-royal/50 uppercase tracking-wider block text-[9px] truncate">{text.duration}</label>
                    <input
                      type="number"
                      required
                      min="1"
                      value={form.duration}
                      onChange={e => setForm({ ...form, duration: e.target.value })}
                      className="w-full bg-white border border-gold/15 rounded-xl px-3 py-3 outline-none focus:border-gold transition-colors font-light text-royal text-[11px]"
                    />
                  </div>
                  <div className="space-y-1 col-span-1">
                    <label className="font-bold text-royal/50 uppercase tracking-wider block text-[9px] truncate">{text.travelers}</label>
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
                  <label className="font-bold text-royal/50 uppercase tracking-wider block">{text.destination}</label>
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
                  <label className="font-bold text-royal/50 uppercase tracking-wider block">{text.message}</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full h-16 bg-white border border-gold/15 rounded-xl p-4 outline-none focus:border-gold transition-colors font-light text-royal resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-royal hover:bg-gold hover:text-royal text-white font-bold uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{loading ? text.submitting : text.submit}</span>
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
