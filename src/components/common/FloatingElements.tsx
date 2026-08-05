"use client";

import React from "react";

/**
 * Floating decorative travel-themed elements that animate independently.
 * Used as subtle background decoration in sections.
 */
export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Compass Rose */}
      <svg
        className="absolute top-[15%] right-[8%] w-16 h-16 text-gold/[0.06] animate-spin-slow"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2L13.5 8.5L20 7L14.5 11.5L20 17L13.5 14.5L12 22L10.5 14.5L4 17L9.5 11.5L4 7L10.5 8.5L12 2Z" />
      </svg>

      {/* Floating dot trail */}
      <div className="absolute top-[30%] left-[5%] w-2 h-2 rounded-full bg-gold/10 animate-float" style={{ animationDelay: "0s" }} />
      <div className="absolute top-[45%] left-[12%] w-1.5 h-1.5 rounded-full bg-gold/8 animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-[60%] right-[10%] w-2.5 h-2.5 rounded-full bg-forest/8 animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-[25%] left-[8%] w-2 h-2 rounded-full bg-saffron/8 animate-float" style={{ animationDelay: "2s" }} />

      {/* Airplane path */}
      <svg
        className="absolute top-[20%] left-[20%] w-6 h-6 text-gold/[0.08] animate-travel-path"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
      </svg>

      {/* Map pin */}
      <svg
        className="absolute bottom-[30%] right-[15%] w-5 h-5 text-terracotta/[0.08] animate-bounce-gentle"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>

      {/* Decorative curved line */}
      <svg
        className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60%] h-auto text-gold/[0.03]"
        viewBox="0 0 400 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M0 50 Q100 0 200 50 T400 50" className="animate-dash-draw" />
      </svg>
    </div>
  );
}
