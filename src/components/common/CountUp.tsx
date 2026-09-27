"use client";

import React, { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

export default function CountUp({
  end,
  duration = 1800,
  suffix = "",
  prefix = "",
  decimals = 0,
  className = "",
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const checkInView = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= viewHeight + 100 && rect.bottom >= -100) {
        setHasStarted(true);
      }
    };

    checkInView();

    const fallbackTimer = setTimeout(() => {
      setHasStarted(true);
    }, 400);

    window.addEventListener("scroll", checkInView, { passive: true });

    if (typeof IntersectionObserver !== "undefined") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
          }
        },
        { threshold: 0.01, rootMargin: "50px" }
      );

      observer.observe(el);

      return () => {
        clearTimeout(fallbackTimer);
        window.removeEventListener("scroll", checkInView);
        observer.disconnect();
      };
    }

    return () => {
      clearTimeout(fallbackTimer);
      window.removeEventListener("scroll", checkInView);
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease-out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * end;

      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  const activeValue = hasStarted ? count : end;
  const displayValue = decimals > 0
    ? activeValue.toFixed(decimals)
    : Math.floor(activeValue).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

