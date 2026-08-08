"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

interface Slide {
  image: string;
  sub: string;
  title: string;
  desc: string;
  location: string;
  objectPosition?: string;
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
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [paused, slides.length]);

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length);
  }, [slides.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 60) {
      if (diff > 0) goTo(current + 1);
      else goTo(current - 1);
    }
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div 
          key={i} 
          className={`hero-slide absolute inset-0 transition-opacity duration-1000 ${i === current ? "z-10 opacity-100" : "z-0 opacity-0 pointer-events-none"}`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            loading={i === 0 ? "eager" : "lazy"}
            className="w-full h-full object-cover hero-slide-img"
            style={{ objectPosition: slide.objectPosition || "center 30%" }}
          />
          {/* Premium center gradient overlay for readable text */}
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/45" />

          {/* Content (Centered vertically and horizontally) */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center px-6 w-full flex flex-col items-center">
              <div className="space-y-6 text-white text-center flex flex-col items-center max-w-3xl">
                {/* Location Badge */}
                <div className="inline-block">
                  <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-5 py-2 text-[10px] uppercase tracking-[0.25em] font-semibold text-white/90">
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                    <span>{slide.location}</span>
                  </span>
                </div>

                {/* Subtitle */}
                {slide.sub && (
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gold font-bold text-center block">
                    {slide.sub}
                  </p>
                )}

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-[1.1] text-center">
                  {slide.title}
                </h1>

                {/* Description */}
                <p className="text-sm md:text-base lg:text-lg text-white/90 max-w-2xl leading-relaxed font-light text-center">
                  {slide.desc}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <Link
                    href={`/${locale}/destinations`}
                    className="group bg-gold hover:bg-gold-light text-royal text-[11px] font-bold uppercase tracking-wider py-3.5 px-8 rounded-full transition-all duration-400 shadow-lg shadow-gold/20 hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2"
                  >
                    <span>{ctaText}</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-royal" />
                  </Link>
                  <Link
                    href={`/${locale}#inquire-now`}
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white text-[11px] font-bold uppercase tracking-wider py-3.5 px-8 rounded-full transition-all duration-400 border border-white/30 hover:border-white/50"
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
        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 w-13 h-13 items-center justify-center rounded-full bg-white/8 backdrop-blur-xl border border-white/15 text-white hover:bg-white hover:text-royal transition-all duration-300 group hover:scale-105"
        suppressHydrationWarning={true}
      >
        <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={() => goTo(current + 1)}
        aria-label="Next slide"
        className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 w-13 h-13 items-center justify-center rounded-full bg-white/8 backdrop-blur-xl border border-white/15 text-white hover:bg-white hover:text-royal transition-all duration-300 group hover:scale-105"
        suppressHydrationWarning={true}
      >
        <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group relative p-1"
            suppressHydrationWarning={true}
          >
            <span className={`block rounded-full transition-all duration-700 ${
              i === current
                ? "w-10 h-[3px] bg-gold"
                : "w-3 h-[3px] bg-white/40 group-hover:bg-white/70 group-hover:w-5"
            }`} />
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-20 right-8 z-20 hidden md:flex items-center gap-3 text-white/50 text-sm font-light">
        <span className="text-white font-semibold text-xl font-serif">{String(current + 1).padStart(2, '0')}</span>
        <span className="w-8 h-px bg-white/30" />
        <span className="text-sm">{String(slides.length).padStart(2, '0')}</span>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-white/40">
        <span className="text-[9px] uppercase tracking-[0.35em] mb-3 font-medium">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/50 to-transparent relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gold to-transparent animate-pulse-gentle" />
        </div>
      </div>
    </section>
  );
}
