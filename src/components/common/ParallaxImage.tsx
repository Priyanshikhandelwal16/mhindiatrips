"use client";

import React, { useEffect, useRef, useState } from "react";
import { getHighResImageUrl } from "@/lib/image-utils";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  children?: React.ReactNode;
}

/**
 * Parallax scroll effect for hero/section background images.
 * The image moves at a slower rate than the scroll, creating depth.
 */
export default function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 0.3,
  children,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Only calculate when element is in view
      if (rect.bottom > 0 && rect.top < windowHeight) {
        const scrolled = (windowHeight - rect.top) / (windowHeight + rect.height);
        setOffset((scrolled - 0.5) * speed * 200);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <img
        src={getHighResImageUrl(src)}
        alt={alt}
        className="absolute inset-0 w-full h-[120%] object-cover transition-transform duration-100 ease-out will-change-transform"
        style={{ transform: `translateY(${offset}px)` }}
        loading="eager"
      />
      {children}
    </div>
  );
}
