"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ShieldCheck, FileText, Lock, AlertCircle, Scale, CheckCircle2, 
  HelpCircle, Mail, Phone, ArrowRight, Printer, Sparkles, Building2,
  Calendar, CreditCard, RefreshCw, FileCheck2, ExternalLink, ChevronDown,
  Info
} from "lucide-react";
import Reveal from "@/components/home/Reveal";

export interface HighlightBox {
  title: string;
  points: string[];
}

export interface LegalTimelineStep {
  label: string;
  value: string;
  desc: string;
  highlight?: boolean;
}

export interface LegalSectionItem {
  id: string;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  htmlContent: string;
  keyTakeaway?: string[];
  timeline?: LegalTimelineStep[];
}

interface LegalPageLayoutProps {
  locale: string;
  badge: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  gstin: string;
  statHighlights: { label: string; value: string; desc: string; icon: React.ReactNode }[];
  sections: LegalSectionItem[];
  faqs?: { q: string; a: string }[];
  contactEmail?: string;
  contactPhone?: string;
}

export default function LegalPageLayout({
  locale,
  badge,
  title,
  subtitle,
  lastUpdated,
  gstin,
  statHighlights,
  sections,
  faqs = [],
  contactEmail = "info@mhindiatrips.com",
  contactPhone = "+91 9314635830"
}: LegalPageLayoutProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#1B1B1B] font-sans pb-28">
      
      {/* 1. LUXURY HERO HEADER BANNER */}
      <section className="relative bg-gradient-to-b from-[#0B1329] via-[#16223F] to-[#0B1329] text-white py-16 md:py-24 border-b border-gold/20 overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C5A862_1.5px,transparent_1.5px)] [background-size:28px_28px] pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
            
            {/* Top Badge */}
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs uppercase tracking-[0.25em] font-semibold shadow-inner">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>{badge}</span>
              </div>
            </Reveal>

            {/* Page Title */}
            <Reveal direction="up" delay={100}>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-serif text-white leading-tight tracking-tight">
                {title}
              </h1>
            </Reveal>

            {/* Subtitle */}
            <Reveal direction="up" delay={150}>
              <p className="text-white/75 text-base md:text-lg font-light max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            </Reveal>

            {/* Verification Bar Pills */}
            <Reveal direction="up" delay={200} className="w-full">
              <div className="flex flex-wrap items-center justify-center gap-3 pt-4 text-xs">
                <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-gold/30 text-white flex items-center gap-2 font-mono">
                  <Building2 className="w-4 h-4 text-gold" />
                  <span>GSTIN: <strong className="text-gold font-bold">{gstin}</strong></span>
                </span>
                <span className="bg-emerald-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-emerald-500/40 text-emerald-300 flex items-center gap-2 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Govt. Certified Travel Agency</span>
                </span>
                <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 text-white/70">
                  {lastUpdated}
                </span>
                <button 
                  onClick={handlePrint}
                  className="bg-gold hover:bg-amber-400 text-royal font-bold px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-1.5 cursor-pointer shadow-lg hover:scale-105"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Document</span>
                </button>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 2. STAT & SPEC HIGHLIGHT CARDS BANNER (Placed cleanly below Hero Section without overlapping) */}
      {statHighlights && statHighlights.length > 0 && (
        <section className="mt-12 max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {statHighlights.map((item, idx) => (
              <Reveal key={idx} delay={100 + idx * 70}>
                <div className="bg-white border border-gold/30 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between h-full">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-royal transition-colors duration-300">
                        {item.icon}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gold bg-gold/10 px-2.5 py-1 rounded-full">
                        Guaranteed
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-serif text-royal">{item.value}</h4>
                      <p className="text-xs uppercase tracking-wider text-royal/60 font-semibold mt-0.5">{item.label}</p>
                    </div>
                    <p className="text-xs text-royal/70 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* 3. CENTERED FULL-WIDTH MAIN CONTENT AREA */}
      <div className="max-w-5xl mx-auto px-6 pt-12 space-y-10">
        
        {/* RICH SECTION CARDS */}
        {sections.map((sec, idx) => (
          <Reveal key={sec.id} delay={idx * 50}>
            <div 
              id={sec.id} 
              className="bg-white border border-gold/30 hover:border-gold/60 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group space-y-6"
            >
              {/* Decorative top gold gradient accent line */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gold/30 via-gold to-gold/30" />

              {/* Section Title Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gold/15 pb-5">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold font-bold font-mono text-base shrink-0 group-hover:bg-gold group-hover:text-royal transition-colors duration-300">
                    {sec.icon || `0${idx + 1}`}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold block">
                      Section 0{idx + 1}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-royal">
                      {sec.title}
                    </h2>
                  </div>
                </div>
                <CheckCircle2 className="w-6 h-6 text-gold/40 group-hover:text-gold transition-colors shrink-0 self-start sm:self-center" />
              </div>

              {/* KEY TAKEAWAYS HIGHLIGHT BOX */}
              {sec.keyTakeaway && sec.keyTakeaway.length > 0 && (
                <div className="bg-[#FAF6EC] border-l-4 border-gold p-5 rounded-2xl space-y-2 shadow-inner">
                  <div className="flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider">
                    <Info className="w-4 h-4 text-gold" />
                    <span>Key Policy Summary</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-royal/90 font-medium">
                    {sec.keyTakeaway.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-gold font-bold">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* TIMELINE GRID */}
              {sec.timeline && sec.timeline.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {sec.timeline.map((step, tIdx) => (
                    <div 
                      key={tIdx} 
                      className={`p-4 rounded-2xl border text-center space-y-1.5 transition-all ${
                        step.highlight 
                          ? "bg-royal text-white border-gold shadow-md" 
                          : "bg-[#FAF8F5] text-royal border-gold/20"
                      }`}
                    >
                      <span className={`text-[10px] font-bold uppercase tracking-wider block ${step.highlight ? "text-gold" : "text-royal/60"}`}>
                        {step.label}
                      </span>
                      <h4 className={`text-xl font-bold font-serif ${step.highlight ? "text-gold" : "text-royal"}`}>
                        {step.value}
                      </h4>
                      <p className={`text-[11px] leading-relaxed font-light ${step.highlight ? "text-white/80" : "text-royal/70"}`}>
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* FORMATTED HTML BODY CONTENT */}
              <div 
                dangerouslySetInnerHTML={{ __html: sec.htmlContent }}
                className="prose prose-slate max-w-none text-royal/80 text-sm md:text-base leading-relaxed space-y-4 pt-2
                  [&>h2]:text-lg [&>h2]:font-serif [&>h2]:font-bold [&>h2]:text-royal [&>h2]:mt-6 [&>h2]:mb-3 [&>h2]:border-l-2 [&>h2]:border-gold [&>h2]:pl-3
                  [&>h3]:text-base [&>h3]:font-bold [&>h3]:text-royal [&>h3]:mt-4 [&>h3]:mb-2
                  [&>p]:text-royal/80 [&>p]:leading-relaxed [&>p]:mb-4
                  [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul]:mb-4 [&>ul>li]:text-royal/80
                  [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2 [&>ol]:mb-4
                  [&>strong]:text-royal [&>strong]:font-semibold
                  [&>a]:text-gold [&>a]:underline [&>a]:font-semibold hover:[&>a]:text-royal"
              />
            </div>
          </Reveal>
        ))}

        {/* FREQUENTLY ASKED LEGAL QUESTIONS (FAQS ACCORDION) */}
        {faqs && faqs.length > 0 && (
          <Reveal delay={200}>
            <div className="bg-white border border-gold/30 rounded-3xl p-8 md:p-10 shadow-lg space-y-6">
              <div className="flex items-center gap-3 border-b border-gold/15 pb-5">
                <div className="w-12 h-12 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold block">
                    Common Legal Inquiries
                  </span>
                  <h2 className="text-2xl font-serif font-bold text-royal">
                    Frequently Asked Questions
                  </h2>
                </div>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, fIdx) => {
                  const isOpen = openFaqIndex === fIdx;
                  return (
                    <div 
                      key={fIdx} 
                      className="border border-gold/20 rounded-2xl overflow-hidden transition-all duration-200"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                        className="w-full text-left p-5 bg-[#FAF8F5] hover:bg-cream flex items-center justify-between gap-4 font-serif font-bold text-royal text-base cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 text-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                      {isOpen && (
                        <div className="p-5 bg-white text-sm text-royal/80 leading-relaxed border-t border-gold/10 font-light space-y-2 animate-fade-in">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        )}

        {/* BOTTOM GUARANTEE & CONCIERGE CTA BANNER */}
        <Reveal delay={300}>
          <div className="bg-gradient-to-r from-royal via-[#1A2542] to-royal text-white border border-gold/40 rounded-3xl p-8 md:p-10 text-center space-y-5 shadow-2xl relative overflow-hidden">
            <div className="w-14 h-14 rounded-full bg-gold/20 border border-gold flex items-center justify-center text-gold mx-auto shadow-inner">
              <ShieldCheck className="w-7 h-7 text-gold" />
            </div>
            <div className="space-y-2 max-w-2xl mx-auto">
              <h3 className="text-2xl font-serif font-bold text-white">
                100% Legal Transparency & Booking Security
              </h3>
              <p className="text-xs md:text-sm text-white/75 font-light leading-relaxed">
                All bookings processed by MH India Trips include an official tax invoice issued under registered GSTIN <strong>{gstin}</strong>. We guarantee 24/7 dedicated on-ground concierge support and licensed private tour operators across India.
              </p>
            </div>
            <div className="pt-3 flex flex-wrap justify-center gap-4">
              <Link 
                href={`/${locale}/contact`}
                className="bg-gold hover:bg-amber-400 text-royal font-bold uppercase text-xs tracking-wider px-8 py-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              >
                <span>Inquire with Travel Specialist</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
}
