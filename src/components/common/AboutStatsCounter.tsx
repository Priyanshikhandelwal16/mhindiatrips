"use client";

import React from "react";
import CountUp from "@/components/common/CountUp";

interface StatItem {
  number: string;
  label: string;
}

interface AboutStatsCounterProps {
  stats: StatItem[];
}

function parseStatNumber(value: string): { end: number; suffix: string; prefix: string; decimals: number } {
  // Parse strings like "14+", "5,000+", "4.9/5", "98%"
  const cleaned = value.replace(/,/g, "");
  
  if (cleaned.includes("/")) {
    // e.g. "4.9/5"
    const num = parseFloat(cleaned.split("/")[0]);
    return { end: num, suffix: "/5", prefix: "", decimals: 1 };
  }
  if (cleaned.endsWith("%")) {
    const num = parseFloat(cleaned.replace("%", ""));
    return { end: num, suffix: "%", prefix: "", decimals: 0 };
  }
  if (cleaned.endsWith("+")) {
    const num = parseFloat(cleaned.replace("+", ""));
    return { end: num, suffix: "+", prefix: "", decimals: 0 };
  }
  
  const num = parseFloat(cleaned);
  return { end: num, suffix: "", prefix: "", decimals: cleaned.includes(".") ? 1 : 0 };
}

export default function AboutStatsCounter({ stats }: AboutStatsCounterProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      {stats.map((stat, i) => {
        const { end, suffix, prefix, decimals } = parseStatNumber(stat.number);
        return (
          <div
            key={i}
            className="text-center opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${i * 100}ms`, animationFillMode: "forwards" }}
          >
            <CountUp
              end={end}
              suffix={suffix}
              prefix={prefix}
              decimals={decimals}
              className="text-3xl lg:text-4xl font-bold text-gold block"
            />
            <p className="text-[11px] uppercase tracking-[0.15em] text-white/50 mt-2 font-medium">
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
