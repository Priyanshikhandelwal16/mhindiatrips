"use client";

import React, { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Immediately start fading out once page is interactive
    const handleLoad = () => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 300);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // Fallback: hide loader after 1.2s max
      const fallback = setTimeout(handleLoad, 1200);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallback);
      };
    }
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#FAF8F5] transition-opacity duration-300 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Logo / Brand mark */}
        <div className="relative">
          <img src="/images/logo-transparent.png" alt="MH India Trips" className="h-20 w-auto" />
        </div>

        {/* Loading text */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#1B1B1B]/50 font-medium">
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
