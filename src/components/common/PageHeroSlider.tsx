"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Sparkles, Building2 } from "lucide-react";

export interface PageSlide {
  image?: string;
  title?: string;
  subtitle?: string;
  location?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  objectPosition?: string;
}

interface PageHeroSliderProps {
  locale: string;
  slides?: PageSlide[];
  heightClass?: string;
  showBreadcrumb?: string;
  overrideTitle?: string;
  overrideSubtitle?: string;
  overrideDesc?: string;
}

export default function PageHeroSlider({
  locale,
  slides,
  showBreadcrumb,
  overrideTitle,
  overrideSubtitle,
  overrideDesc
}: PageHeroSliderProps) {
  const slide = slides && slides.length > 0 ? slides[0] : null;
  const title = overrideTitle || slide?.title || showBreadcrumb || "MH India Trips";
  const subtitle = overrideSubtitle || slide?.subtitle || showBreadcrumb || "LOCAL TRAVEL AGENCY IN INDIA";
  const description = overrideDesc || slide?.description || "";

  return (
    <section className="relative w-full bg-gradient-to-b from-[#062D27] via-[#0B4D44] to-[#062D27] text-white py-20 md:py-28 overflow-hidden border-b border-gold/20 font-sans shadow-xl">
      {/* Decorative Luxury Background Glows & Pattern */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C5A862_1.5px,transparent_1.5px)] [background-size:28px_28px] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gold/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gold/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-6">
        
        {/* Pill Subtitle Badge */}
        {subtitle && (
          <div className="animate-fade-in">
            <span className="bg-gold/15 border border-gold/40 text-gold text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full inline-flex items-center gap-2 shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-gold shrink-0 animate-pulse" />
              <span>{subtitle}</span>
            </span>
          </div>
        )}

        {/* Main Hero Title - Exact Middle */}
        {title && (
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-tight tracking-tight drop-shadow-md max-w-4xl mx-auto">
              {title}
            </h1>
          </div>
        )}

        {/* Description */}
        {description && (
          <div className="animate-fade-in">
            <p className="text-white/80 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>
        )}

        {/* Credentials / Location Bar */}
        {slide?.location ? (
          <div className="pt-2 animate-fade-in">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-gold/30 rounded-full px-5 py-2 text-xs uppercase tracking-wider font-semibold text-white">
              <MapPin className="w-4 h-4 text-gold shrink-0" />
              <span>{slide.location}</span>
            </span>
          </div>
        ) : (
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-xs animate-fade-in">
            <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-gold/30 text-white flex items-center gap-2 font-mono">
              <MapPin className="w-4 h-4 text-gold shrink-0" />
              <span>Headquarters: <strong className="text-gold">Jaipur, Rajasthan</strong></span>
            </span>
            <span className="bg-emerald-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-emerald-500/40 text-emerald-300 flex items-center gap-2 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Officially Certified Tour Agency</span>
            </span>
          </div>
        )}

        {/* Optional Action CTA */}
        {slide?.ctaText && slide?.ctaLink && (
          <div className="pt-4">
            <Link
              href={`/${locale}${slide.ctaLink}`}
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-[#0A2A1E] text-xs font-bold uppercase tracking-wider py-3.5 px-8 rounded-full transition-all duration-300 shadow-xl hover:scale-105"
            >
              <span>{slide.ctaText}</span>
              <Sparkles className="w-4 h-4 text-[#0A2A1E]" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
