"use client";

import React, { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  target: number | string;
  suffix?: string;
  duration?: number;
}

export default function StatCounter({ target, suffix = "", duration = 1800 }: StatCounterProps) {
  const isString = typeof target === "string" && isNaN(Number(target));
  const numTarget = typeof target === "number" ? target : (parseFloat(target) || 0);

  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isString) return;
    const el = ref.current;
    if (!el) return;

    const checkInView = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewHeight = window.innerHeight || document.documentElement.clientHeight;
      // Trigger when element top enters viewport area
      if (rect.top <= viewHeight - 20 && rect.bottom >= 0) {
        setHasStarted(true);
      }
    };

    checkInView();

    window.addEventListener("scroll", checkInView, { passive: true });
    window.addEventListener("resize", checkInView, { passive: true });

    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
      );
      observer.observe(el);
    }

    return () => {
      window.removeEventListener("scroll", checkInView);
      window.removeEventListener("resize", checkInView);
      if (observer) observer.disconnect();
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

  const activeCount = hasStarted ? count : 0;
  return <span ref={ref}>{activeCount}{suffix}</span>;
}
