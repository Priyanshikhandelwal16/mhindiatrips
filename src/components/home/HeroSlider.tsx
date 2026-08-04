"use client";

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

interface Slide {
  image: string;
  sub: string;
  title: string;
  desc: string;
  location: string;
}

interface HeroSliderProps {
  locale: string;
  slides: Slide[];
  ctaText: string;
  inquireCTA: string;
}

export default function HeroSlider({ locale, slides, ctaText, inquireCTA }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [paused, slides.length]);

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length);
  }, [slides.length]);

  return (
    <section
      className="relative h-screen min-h-[700px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div key={i} className={`hero-slide ${i === current ? "active" : ""}`}>
          <img
            src={slide.image}
            alt={slide.title}
            loading={i === 0 ? "eager" : "lazy"}
            className="w-full h-full object-cover"
          />
          {/* Multi-layer gradients for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-[#FAF8F5]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="max-w-2xl space-y-6 text-white">
                {/* Location Badge */}
                <div className="hero-text">
                  <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.2em] font-semibold text-white/90">
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                    <span>{slide.location}</span>
                  </span>
                </div>

                {/* Title */}
                <h1 className="hero-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-[1.05]">
                  {slide.title}
                </h1>

                {/* Description */}
                <p className="hero-text text-base md:text-lg text-white/85 max-w-lg leading-relaxed font-light">
                  {slide.desc}
                </p>

                {/* CTAs */}
                <div className="hero-text flex flex-wrap gap-4 pt-4">
                  <Link
                    href={`/${locale}/destinations`}
                    className="bg-gold hover:bg-gold/90 text-white text-xs font-semibold uppercase tracking-wider py-4 px-8 rounded-full transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5"
                  >
                    {ctaText}
                  </Link>
                  <Link
                    href={`/${locale}#inquire-now`}
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider py-4 px-8 rounded-full transition-all duration-300 border border-white/30 hover:border-white/50"
                  >
                    {inquireCTA}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={() => goTo(current - 1)}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-charcoal transition-all duration-300 group"
      >
        <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={() => goTo(current + 1)}
        aria-label="Next slide"
        className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-charcoal transition-all duration-300 group"
      >
        <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group relative"
          >
            <span className={`block h-[3px] rounded-full transition-all duration-700 ${
              i === current
                ? "w-10 bg-gold"
                : "w-4 bg-white/40 group-hover:bg-white/70"
            }`} />
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-28 right-8 z-20 hidden md:flex items-center gap-2 text-white/60 text-sm font-light">
        <span className="text-white font-semibold text-lg">{String(current + 1).padStart(2, '0')}</span>
        <span className="w-6 h-px bg-white/40" />
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-white/50">
        <span className="text-[9px] uppercase tracking-[0.3em] mb-3 font-medium">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/60 to-transparent relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gold to-transparent animate-pulse-gentle" />
        </div>
      </div>
    </section>
  );
}
