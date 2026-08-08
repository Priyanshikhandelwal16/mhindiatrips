"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { MessageSquare, Phone, HelpCircle, FileText, ChevronUp, X, Check } from "lucide-react";

export default function ConciergeSeal({ locale }: { locale: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleScrollToPlanner = () => {
    setIsOpen(false);
    const planner = document.getElementById("concierge-planner");
    if (planner) {
      planner.scrollIntoView({ behavior: "smooth" });
    } else {
      // If not on homepage, redirect to homepage planner
      window.location.href = `/${locale}#concierge-planner`;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans select-none" ref={menuRef}>
      
      {/* Floating Concierge Assistant Card */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-[#102A1E]/95 backdrop-blur-md border border-gold/30 rounded-[2rem] shadow-2xl p-6 text-white space-y-5 animate-fade-in">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gold/15 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center border border-gold/30 relative">
                <span className="text-gold font-serif font-black text-xs">MH</span>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border border-[#102A1E] flex items-center justify-center">
                  <Check className="w-2 h-2 text-white stroke-[3px]" />
                </span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white">Guest Concierge Desk</p>
                <p className="text-[10px] text-gold/80 font-light uppercase tracking-widest flex items-center gap-1">
                  Online & Active
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/40 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Channels */}
          <div className="space-y-3">
            
            {/* Itinerary planner */}
            <button
              onClick={handleScrollToPlanner}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gold text-royal font-bold text-xs transition-all hover:scale-[1.02] cursor-pointer shadow-md"
            >
              <FileText className="w-4 h-4" />
              <span className="uppercase tracking-wider">Itinerary Planner</span>
            </button>

            {/* Direct WhatsApp */}
            <a
              href="https://wa.me/919999999999" // Premium placeholder
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs transition-all hover:scale-[1.02] cursor-pointer shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
              <span className="uppercase tracking-wider">Chat on WhatsApp</span>
            </a>

            {/* Request Callback */}
            <Link
              href={`/${locale}/contact`}
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-gold/30 font-bold text-xs transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span className="uppercase tracking-wider">Request Callback</span>
            </Link>

            {/* FAQs */}
            <Link
              href={`/${locale}/faq`}
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-gold/30 font-bold text-xs transition-all cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 text-gold" />
              <span className="uppercase tracking-wider">Practical FAQ Info</span>
            </Link>

          </div>

          {/* Footer note */}
          <p className="text-[9px] text-center text-white/40 uppercase tracking-widest leading-none font-bold">
            MH India Trips • Curated luxury
          </p>

        </div>
      )}

      {/* Wax Seal Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Guest Concierge"
        className={`w-14 h-14 rounded-full bg-[#8B2626] border-2 border-gold flex items-center justify-center shadow-2xl transition-all duration-300 cursor-pointer ${
          isOpen ? "scale-90 rotate-90" : "hover:scale-115 hover:rotate-12 animate-pulse"
        }`}
        style={{
          backgroundImage: "radial-gradient(circle, #A52A2A 0%, #7A1C1C 70%, #5C1313 100%)",
          boxShadow: "0 10px 25px -5px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.2)"
        }}
      >
        <span className="text-gold font-serif font-black tracking-widest text-[13px] pointer-events-none drop-shadow-md select-none">
          MH
        </span>
      </button>

    </div>
  );
}
