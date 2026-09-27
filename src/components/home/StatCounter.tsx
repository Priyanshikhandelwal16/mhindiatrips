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

    if (typeof IntersectionObserver !== "undefined" && el) {
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

  const activeCount = hasStarted ? count : numTarget;
  return <span ref={ref}>{activeCount}{suffix}</span>;
}

