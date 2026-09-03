"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, Sparkles } from "lucide-react";

export interface PageSlide {
  image: string;
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
  slides: PageSlide[];
  heightClass?: string;
  showBreadcrumb?: string;
}

export default function PageHeroSlider({
  locale,
  slides,
  heightClass,
  showBreadcrumb
}: PageHeroSliderProps) {
  const slide = slides && slides.length > 0 ? slides[0] : null;
  if (!slide && !showBreadcrumb) return null;

  return (
    <section className="relative w-full bg-[#0A2A1E] text-white py-14 sm:py-18 md:py-22 overflow-hidden border-b border-[#C5A862]/20 font-sans shadow-lg">
      {/* Luxury subtle radial glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#134432] via-[#0A2A1E] to-[#04140D] opacity-95 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A862]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 md:px-16">
        <div className="space-y-4 max-w-3xl animate-fade-in">
          {showBreadcrumb && (
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#C5A862] font-semibold">
              <span>{showBreadcrumb}</span>
            </div>
          )}

          {slide?.location && (
            <div className="inline-flex items-center gap-2 bg-[#134432]/60 border border-[#C5A862]/30 rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold text-white/95 shadow-md">
              <MapPin className="w-3.5 h-3.5 text-[#C5A862]" />
              <span>{slide.location}</span>
            </div>
          )}

          {slide?.subtitle && (
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#C5A862] font-bold block">
              {slide.subtitle}
            </p>
          )}

          {slide?.title && (
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight drop-shadow">
              {slide.title}
            </h1>
          )}

          {slide?.description && (
            <p className="text-sm md:text-base text-white/80 max-w-2xl font-light leading-relaxed">
              {slide.description}
            </p>
          )}

          {slide?.ctaText && slide?.ctaLink && (
            <div className="pt-3">
              <Link
                href={`/${locale}${slide.ctaLink}`}
                className="inline-flex items-center gap-2 bg-[#C5A862] hover:bg-[#D8BE83] text-[#0A2A1E] text-[10px] font-bold uppercase tracking-wider py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>{slide.ctaText}</span>
                <Sparkles className="w-3.5 h-3.5 text-[#0A2A1E]" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
