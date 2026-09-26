"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, Sparkles } from "lucide-react";
import { getHighResImageUrl } from "@/lib/image-utils";

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
    }, 4500);
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
      className="relative min-h-[580px] h-[92vh] sm:h-[95vh] md:h-screen w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Hidden preloader for smooth instant transitions */}
      <div className="hidden">
        {[current, (current + 1) % slides.length].map((idx) => {
          const s = slides[idx];
          if (!s?.image) return null;
          return (
            <img 
              key={`preload-${idx}`} 
              src={getHighResImageUrl(s.image)} 
              alt="preload" 
            />
          );
        })}
      </div>

      {/* Slides (render active and adjacent slides) */}
      {slides.map((slide, i) => {
        const isCurrent = i === current;
        const isNext = i === (current + 1) % slides.length;
        const isPrev = i === (current - 1 + slides.length) % slides.length;
        if (!isCurrent && !isNext && !isPrev) return null;

        const imgSrc = getHighResImageUrl(slide.image);

        return (
          <div 
            key={i} 
            className={`hero-slide absolute inset-0 transition-all duration-500 will-change-[opacity,transform] ${i === current ? "z-10 opacity-100 visible" : "z-0 opacity-0 invisible pointer-events-none"}`}
          >
            <Image
              src={imgSrc}
              alt={slide.title}
              fill
              priority={i === current}
              quality={95}
              unoptimized
              sizes="100vw"
              className={`absolute inset-0 w-full h-full object-cover transform-gpu transition-transform duration-[2500ms] ease-out ${
                i === current ? "scale-100" : "scale-[1.03]"
              }`}
              style={{ objectPosition: slide.objectPosition || "center center" }}
            />
            {/* Vignette overlay for readable text and crisp photo rendering */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/25 pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-end pb-16 sm:pb-24 md:pb-28 pt-20">
            <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
              <div className="space-y-2.5 sm:space-y-4 text-white max-w-3xl">
                
                {/* Agency & Tagline Badges */}
                <div className="flex flex-wrap items-center gap-2 animate-fade-in mb-1">
                  <span className="inline-flex items-center gap-1.5 bg-[#0A2A1E]/90 backdrop-blur-xl border border-gold/40 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-[8px] sm:text-[9.5px] md:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-extrabold text-gold shadow-xl">
                    <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold shrink-0 animate-pulse" />
                    <span>{locale === "es" ? "Agencia de Viajes Local en la India" : locale === "pt" ? "Agência de Viagens Local na Índia" : "Local Travel Agency in India"}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#C5A862] via-[#F5E6B3] to-[#C5A862] border border-amber-200/90 rounded-full px-3 py-1 sm:px-4.5 sm:py-1.5 text-[8.5px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-black text-[#0A2A1E] shadow-2xl shadow-gold/50">
                    <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0A2A1E] shrink-0 animate-pulse" />
                    <span>{locale === "es" ? "Explore la India más allá de las expectativas" : locale === "pt" ? "Explore a Índia além das expectativas" : "Explore India Beyond Expectations"}</span>
                  </span>
                </div>

                {/* Location Badge */}
                {slide.location && (
                  <div className="animate-fade-in">
                    <span className="inline-flex items-center gap-1.5 bg-[#0A2A1E]/60 backdrop-blur-xl border border-[#C5A862]/30 rounded-full px-3.5 py-1 sm:px-5 sm:py-2 text-[8.5px] sm:text-[10px] uppercase tracking-[0.2em] font-semibold text-white/95 shadow-lg">
                      <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold animate-pulse shrink-0" />
                      <span>{slide.location}</span>
                    </span>
                  </div>
                )}

                {/* Subtitle */}
                {slide.sub && (
                  <p className="text-[9.5px] sm:text-[11px] uppercase tracking-[0.2em] text-gold font-bold block">
                    {slide.sub}
                  </p>
                )}

                {/* Title */}
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[4.2rem] font-bold tracking-tight leading-[1.1] font-serif drop-shadow-md">
                  {slide.title}
                </h1>

                {/* Description */}
                {slide.desc && (
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 max-w-xl leading-relaxed font-light line-clamp-3 sm:line-clamp-none">
                    {slide.desc}
                  </p>
                )}

                {/* CTAs */}
                <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-2 sm:pt-4">
                  <Link
                    href={`/${locale}${(slide as any).cta1Link || "/destinations"}`}
                    className="group bg-gold hover:bg-gold-light text-[#0A2A1E] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-all duration-400 shadow-lg shadow-gold/20 hover:shadow-xl inline-flex items-center gap-1.5 border border-gold"
                  >
                    <span>{(slide as any).cta1Text || ctaText}</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#0A2A1E] shrink-0" />
                  </Link>
                  <Link
                    href={`/${locale}${(slide as any).cta2Link || "#inquire-now"}`}
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-all duration-400 border border-white/25 hover:border-white/50"
                  >
                    {(slide as any).cta2Text || inquireCTA}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })}

      {/* Navigation Arrows */}
      <button
        onClick={() => goTo(current - 1)}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 items-center justify-center rounded-full bg-[#0A2A1E]/40 hover:bg-gold backdrop-blur-md border border-[#C5A862]/30 text-white hover:text-[#0A2A1E] transition-all duration-500 group hover:scale-110"
        suppressHydrationWarning={true}
      >
        <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={() => goTo(current + 1)}
        aria-label="Next slide"
        className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 items-center justify-center rounded-full bg-[#0A2A1E]/40 hover:bg-gold backdrop-blur-md border border-[#C5A862]/30 text-white hover:text-[#0A2A1E] transition-all duration-500 group hover:scale-110"
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
                ? "w-12 h-[2px] bg-gold"
                : "w-4 h-[2px] bg-white/30 group-hover:bg-white/70"
            }`} />
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-20 right-8 z-20 hidden md:flex items-center gap-3 text-white/50 text-sm font-light">
        <span className="text-gold font-serif font-medium text-2xl">{String(current + 1).padStart(2, '0')}</span>
        <span className="w-8 h-[1px] bg-white/20" />
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
