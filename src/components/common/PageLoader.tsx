"use client";

import React, { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Wait for page to fully load
    const handleLoad = () => {
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setLoading(false), 600);
      }, 800);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // Fallback: hide loader after 3s max
      const fallback = setTimeout(handleLoad, 3000);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallback);
      };
    }
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0B0D0C] transition-opacity duration-600 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Logo / Brand mark */}
        <div className="relative">
          <div className="w-20 h-20 rounded-full border-2 border-[#C3AB85]/20 flex items-center justify-center">
            <span className="text-2xl font-bold text-[#C3AB85] tracking-wider">MH</span>
          </div>
          {/* Spinning ring */}
          <div className="absolute inset-0 w-20 h-20 rounded-full border-2 border-transparent border-t-[#C3AB85] animate-spin" style={{ animationDuration: "1.2s" }} />
        </div>

        {/* Loading text */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C3AB85]/80 font-medium">
            MH India Trips
          </p>
          {/* Animated dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C3AB85] animate-pulse" style={{ animationDelay: "0s" }} />
            <span className="w-1.5 h-1.5 rounded-full bg-[#C3AB85] animate-pulse" style={{ animationDelay: "0.2s" }} />
            <span className="w-1.5 h-1.5 rounded-full bg-[#C3AB85] animate-pulse" style={{ animationDelay: "0.4s" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
