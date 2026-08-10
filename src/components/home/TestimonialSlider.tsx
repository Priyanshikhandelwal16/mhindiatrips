"use client";

import React, { useRef, useEffect, useState } from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

interface TestimonialSliderProps {
  locale: string;
  reviews: any[];
  labels: {
    sub: string;
    title: string;
  };
}

export default function TestimonialSlider({ locale, reviews: initialReviews, labels }: TestimonialSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [reviewsList, setReviewsList] = useState<any[]>(initialReviews);
  const [ratingDetails, setRatingDetails] = useState({ rating: 4.9, total: 148, source: "local" });

  useEffect(() => {
    // Dynamic client-side fetch to direct Google reviews proxy
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/google-reviews");
        if (res.ok) {
          const data = await res.json();
          if (data.reviews && data.reviews.length > 0) {
            setReviewsList(data.reviews);
          }
          if (data.rating && data.totalReviews) {
            setRatingDetails({
              rating: data.rating,
              total: data.totalReviews,
              source: data.source
            });
          }
        }
      } catch (err) {
        console.error("Error fetching google reviews:", err);
      }
    };
    fetchReviews();
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || reviewsList.length === 0) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.8; // pixels per frame

    const scroll = () => {
      if (!isHovered) {
        scrollPosition += speed;
        // Reset when we've scrolled through one third (original set size)
        const totalWidth = container.scrollWidth;
        const oneThirdWidth = totalWidth / 3;
        if (scrollPosition >= oneThirdWidth) {
          scrollPosition = 0;
        }
        container.style.transform = `translateX(-${scrollPosition}px)`;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered, reviewsList]);

  // Triple the reviews for seamless infinite scroll
  const tripleReviews = [...reviewsList, ...reviewsList, ...reviewsList];

  return (
    <section className="section-spacing bg-[#FAF8F5]/50 border-y border-[#C5A862]/10 overflow-hidden py-32 relative">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#C5A862_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <Reveal className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold block">{labels.sub}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-royal tracking-tight">
            {labels.title}
          </h2>
          <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
        </Reveal>

        {/* Premium Google Rating Summary Card */}
        <Reveal delay={100} className="flex justify-center">
          <div className="bg-white border border-[#C5A862]/20 px-8 py-5 rounded-[2rem] shadow-sm flex flex-col sm:flex-row items-center gap-6 select-none hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2.5">
              <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span className="font-bold text-royal text-sm uppercase tracking-wider">Google Rating</span>
            </div>
            
            <div className="h-px w-8 sm:w-px sm:h-8 bg-[#C5A862]/20" />

            <div className="flex flex-col items-center sm:items-start gap-1">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold text-royal font-serif">{ratingDetails.rating.toFixed(1)}</span>
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
              </div>
              <p className="text-[10px] text-foreground/45 uppercase tracking-widest font-semibold">
                Based on {ratingDetails.total} verified reviews
              </p>
            </div>

            <div className="h-px w-8 sm:w-px sm:h-8 bg-[#C5A862]/20" />

            <span className="text-[10px] bg-[#C5A862]/10 text-gold border border-[#C5A862]/20 uppercase font-bold tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
              <span>Direct Google Sync</span>
            </span>
          </div>
        </Reveal>
      </div>

      {/* Infinite Scroll Container */}
      <div
        className="mt-16 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-56 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-56 bg-gradient-to-l from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-8 will-change-transform py-4"
            style={{ width: "max-content" }}
          >
            {tripleReviews.map((review: any, i: number) => (
              <div
                key={`review-${i}`}
                className="flex-shrink-0 w-[360px] md:w-[420px]"
              >
                <div className="bg-white border border-[#C5A862]/10 rounded-[2rem] p-8 h-full flex flex-col justify-between shadow-md hover:shadow-xl hover:border-[#C5A862]/30 transition-all duration-500 relative group">
                  {/* Google review logo overlay */}
                  <div className="absolute top-8 right-8 text-black/10 group-hover:text-[#4285F4]/20 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                    </svg>
                  </div>
                  
                  <div className="space-y-4">
                    {/* Stars */}
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: review.stars }).map((_, idx) => (
                        <Star key={idx} className="w-3.5 h-3.5 fill-gold text-gold" />
                      ))}
                    </div>
                    {/* Quote Text */}
                    <p className="text-[13px] text-foreground/60 leading-relaxed font-light">
                      &ldquo;{review.quote[locale as "en" | "es" | "pt"] || review.quote.en}&rdquo;
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#C5A862]/10">
                    <div className="flex items-center gap-3.5">
                      <img
                        src={review.image}
                        alt={review.name}
                        loading="lazy"
                        className="w-11 h-11 rounded-full object-cover ring-2 ring-[#C5A862]/10"
                      />
                      <div>
                        <p className="text-sm font-semibold text-royal">{review.name}</p>
                        <p className="text-[11px] text-foreground/45 uppercase tracking-wider font-medium">{review.location}</p>
                      </div>
                    </div>
                    <span className="text-[9px] text-[#4285F4] bg-[#4285F4]/5 border border-[#4285F4]/15 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                      Google Review
                    </span>
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
