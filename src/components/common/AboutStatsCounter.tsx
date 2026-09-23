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

function parseStatNumber(value: string): { end: number; suffix: string; prefix: string; decimals: number; isText?: boolean } {
  const cleaned = value.replace(/,/g, "").trim();
  
  if (cleaned.includes("/")) {
    const num = parseFloat(cleaned.split("/")[0]);
    return { end: isNaN(num) ? 0 : num, suffix: "/5", prefix: "", decimals: 1 };
  }
  if (cleaned.endsWith("%")) {
    const num = parseFloat(cleaned.replace("%", ""));
    return { end: isNaN(num) ? 0 : num, suffix: "%", prefix: "", decimals: 0 };
  }
  if (cleaned.endsWith("+")) {
    const num = parseFloat(cleaned.replace("+", ""));
    return { end: isNaN(num) ? 0 : num, suffix: "+", prefix: "", decimals: 0 };
  }
  
  const num = parseFloat(cleaned);
  if (isNaN(num)) {
    return { end: 0, suffix: "", prefix: "", decimals: 0, isText: true };
  }
  return { end: num, suffix: "", prefix: "", decimals: cleaned.includes(".") ? 1 : 0 };
}

export default function AboutStatsCounter({ stats }: AboutStatsCounterProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
      {stats.map((stat, i) => {
        const { end, suffix, prefix, decimals, isText } = parseStatNumber(stat.number);
        return (
          <div
            key={i}
            className="flex flex-col items-center text-center space-y-3 group"
          >
            <div className="relative w-36 h-36 rounded-full flex flex-col items-center justify-center bg-white border border-[#C5A862]/30 shadow-lg group-hover:border-[#0F5257] group-hover:shadow-2xl transition-all duration-300">
              <div className="absolute -inset-1 rounded-full border border-[#C5A862]/15 scale-[1.03]" />
              <div className="absolute bottom-3 right-3 w-3 h-3 rounded-full bg-[#0F5257] border-2 border-white shadow-sm" />
              
              {isText ? (
                <span className="text-2xl font-bold font-serif text-[#0F5257]">
                  {stat.number}
                </span>
              ) : (
                <CountUp
                  end={end}
                  suffix={suffix}
                  prefix={prefix}
                  decimals={decimals}
                  className="text-2xl sm:text-3xl font-bold font-serif text-[#0F5257]"
                />
              )}
            </div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-foreground/70 font-bold max-w-[130px] leading-snug">
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}

