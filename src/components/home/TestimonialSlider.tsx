"use client";

import React from "react";
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
  // Double the reviews for infinite scroll effect
  const doubledReviews = [...reviews, ...reviews];

  return (
    <section className="section-spacing bg-white border-y border-sand/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-14">
        <Reveal className="text-center space-y-5 max-w-2xl mx-auto">
          <span className="editorial-subheading block">{labels.sub}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-royal">
            {labels.title}
          </h2>
        </Reveal>
      </div>

      {/* Infinite Scroll Marquee */}
      <div className="mt-12 relative">
        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="testimonial-marquee">
          {doubledReviews.map((review: any, i: number) => (
            <div
              key={`${review.id}-${i}`}
              className="flex-shrink-0 w-[380px] md:w-[420px]"
            >
              <div className="testimonial-card h-full flex flex-col mx-3">
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-gold/20" />
                </div>
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: review.stars }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                {/* Quote Text */}
                <p className="text-sm text-foreground/65 leading-relaxed flex-grow">
                  &ldquo;{review.quote[locale as "en" | "es" | "pt"] || review.quote.en}&rdquo;
                </p>
                {/* Author */}
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-sand/40">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-gold/10"
                  />
                  <div>
                    <p className="text-sm font-semibold text-royal">{review.name}</p>
                    <p className="text-[11px] text-foreground/45">{review.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
