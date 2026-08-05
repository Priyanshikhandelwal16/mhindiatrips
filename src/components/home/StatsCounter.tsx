"use client";

import React from "react";
import CountUp from "@/components/common/CountUp";

interface StatsCounterProps {
  labels: {
    years: string;
    travelers: string;
    destinations: string;
    rating: string;
  };
}

export default function StatsCounter({ labels }: StatsCounterProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-sand">
      <div className="space-y-1.5">
        <CountUp
          end={14}
          suffix="+"
          className="text-3xl lg:text-4xl font-serif font-bold text-forest"
        />
        <p className="text-[10px] uppercase tracking-[0.15em] font-semibold text-foreground/45">
          {labels.years}
        </p>
      </div>
      <div className="space-y-1.5">
        <CountUp
          end={5000}
          suffix="+"
          className="text-3xl lg:text-4xl font-serif font-bold text-gold"
        />
        <p className="text-[10px] uppercase tracking-[0.15em] font-semibold text-foreground/45">
          {labels.travelers}
        </p>
      </div>
      <div className="space-y-1.5">
        <CountUp
          end={100}
          suffix="+"
          className="text-3xl lg:text-4xl font-serif font-bold text-terracotta"
        />
        <p className="text-[10px] uppercase tracking-[0.15em] font-semibold text-foreground/45">
          {labels.destinations}
        </p>
      </div>
      <div className="space-y-1.5">
        <CountUp
          end={4.9}
          decimals={1}
          className="text-3xl lg:text-4xl font-serif font-bold text-royal"
        />
        <p className="text-[10px] uppercase tracking-[0.15em] font-semibold text-foreground/45">
          {labels.rating}
        </p>
      </div>
    </div>
  );
}
