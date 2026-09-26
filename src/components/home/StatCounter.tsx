"use client";

import React, { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  target: number | string;
  suffix?: string;
  duration?: number;
}

export default function StatCounter({ target, suffix = "", duration = 1500 }: StatCounterProps) {
  const isString = typeof target === "string" && isNaN(Number(target));
  const numTarget = typeof target === "number" ? target : (parseFloat(target) || 0);

  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isString) return;
    const el = ref.current;

    // Mobile fallback timer to guarantee counter starts even if IntersectionObserver is delayed
    const fallbackTimer = setTimeout(() => {
      setHasStarted(true);
    }, 300);

    if (!el) {
      return () => clearTimeout(fallbackTimer);
    }

    // Direct viewport check on mount
    try {
      const rect = el.getBoundingClientRect();
      if (rect.top <= (window.innerHeight || 800) && rect.bottom >= 0) {
        setHasStarted(true);
      }
    } catch (e) {}

    if (typeof IntersectionObserver !== "undefined") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
          }
        },
        { threshold: 0.01 }
      );

      observer.observe(el);

      return () => {
        clearTimeout(fallbackTimer);
        observer.disconnect();
      };
    }

    return () => clearTimeout(fallbackTimer);
  }, [isString]);

  useEffect(() => {
    if (!hasStarted || isString) return;

    let startTimestamp: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numTarget));
      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      } else {
        setCount(numTarget);
      }
    };
    animationFrame = window.requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, numTarget, duration, isString]);

  if (isString) {
    return <span ref={ref}>{target}{suffix}</span>;
  }

  return <span ref={ref}>{hasStarted ? count : numTarget}{suffix}</span>;
}

