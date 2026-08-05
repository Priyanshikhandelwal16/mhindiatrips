"use client";

import React, { useEffect, useRef, useState } from "react";

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "blur";
}

/**
 * Premium text reveal animation that triggers on scroll.
 * Supports different animation directions for variety.
 */
export default function TextReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (isVisible) return "translate(0, 0) scale(1)";
    switch (direction) {
      case "up": return "translate(0, 40px) scale(1)";
      case "left": return "translate(-40px, 0) scale(1)";
      case "right": return "translate(40px, 0) scale(1)";
      case "blur": return "translate(0, 20px) scale(0.97)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        filter: direction === "blur" && !isVisible ? "blur(8px)" : "blur(0px)",
        transition: `all 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: "opacity, transform, filter",
      }}
    >
      {children}
    </div>
  );
}
