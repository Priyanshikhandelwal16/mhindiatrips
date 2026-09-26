"use client";

import React, { useState, useRef, useEffect } from "react";
import { getHighResImageUrl } from "@/lib/image-utils";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
}

/**
 * Lazy-loaded image with blur-up placeholder and IntersectionObserver.
 * Only loads image when it enters the viewport (unless priority=true).
 */
export default function LazyImage({ src, alt, className = "", style, priority = false }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return;
    const el = imgRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [priority]);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} style={style}>
      {/* Placeholder shimmer */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#F3EDE2] via-[#FAF8F5] to-[#F3EDE2] animate-shimmer" />
      )}

      {inView && (
        <img
          src={getHighResImageUrl(src)}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={style}
        />
      )}
    </div>
  );
}
