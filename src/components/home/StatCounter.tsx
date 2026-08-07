"use client";

import React, { useEffect, useState } from "react";

interface StatCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

export default function StatCounter({ target, suffix = "", duration = 1500 }: StatCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
}
