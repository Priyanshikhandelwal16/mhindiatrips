"use client";

import React, { useRef, useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";

interface TestimonialSliderProps {
  locale: string;
  reviews: any[];
  labels: {
    sub: string;
    title: string;
  };
}

export default function TestimonialSlider({ locale, reviews, labels }: TestimonialSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.8; // pixels per frame

    const scroll = () => {
      if (!isHovered) {
        scrollPosition += speed;
        // Reset when we've scrolled through half (the original set)
        const halfWidth = container.scrollWidth / 2;
        if (scrollPosition >= halfWidth) {
          scrollPosition = 0;
        }
        container.style.transform = `translateX(-${scrollPosition}px)`;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  // Triple the reviews for seamless infinite scroll
  const tripleReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="section-spacing bg-white border-y border-sand/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-14">
        <Reveal className="text-center space-y-5 max-w-2xl mx-auto">
          <span className="editorial-subheading block">{labels.sub}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-royal">
            {labels.title}
          </h2>
        </Reveal>
      </div>

      {/* Infinite Scroll Container */}
      <div
        className="mt-12 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-6 will-change-transform"
            style={{ width: "max-content" }}
          >
            {tripleReviews.map((review: any, i: number) => (
              <div
                key={`review-${i}`}
                className="flex-shrink-0 w-[350px] md:w-[400px]"
              >
                <div className="bg-white border border-sand/60 rounded-2xl p-7 h-full flex flex-col shadow-sm hover:shadow-md hover:border-gold/20 transition-all duration-300">
                  {/* Quote icon */}
                  <div className="mb-4">
                    <Quote className="w-7 h-7 text-gold/25" />
                  </div>
                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mb-4">
                    {Array.from({ length: review.stars }).map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                  {/* Quote Text */}
                  <p className="text-[13px] text-foreground/60 leading-relaxed flex-grow">
                    &ldquo;{review.quote[locale as "en" | "es" | "pt"] || review.quote.en}&rdquo;
                  </p>
                  {/* Author */}
                  <div className="flex items-center gap-3 mt-6 pt-5 border-t border-sand/40">
                    <img
                      src={review.image}
                      alt={review.name}
                      loading="lazy"
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-gold/10"
                    />
                    <div>
                      <p className="text-sm font-semibold text-royal">{review.name}</p>
                      <p className="text-[11px] text-foreground/40">{review.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
