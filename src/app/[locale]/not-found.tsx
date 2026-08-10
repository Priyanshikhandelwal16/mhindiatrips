"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslation } from "@/data/i18n-client";
import { Compass, ArrowRight } from "lucide-react";

export default function LocalNotFound() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const t = useTranslation();

  return (
    <div className="editorial-container py-24 min-h-[60vh] flex flex-col justify-center items-center text-charcoal-800">
      <div className="max-w-md text-center space-y-8 animate-fade-in">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-sand-200/50 flex items-center justify-center mx-auto text-sand-500">
          <Compass className="w-8 h-8" />
        </div>

        {/* Message */}
        <div className="space-y-4">
          <h1 className="text-xl md:text-2xl font-serif font-bold text-charcoal-800">
            {t.err404?.title || "Looks like you took a wrong turn."}
          </h1>
          <p className="text-xs md:text-sm text-charcoal-800/60 leading-relaxed font-sans font-light">
            {t.err404?.subtitle || "The paths of India are endless, but this specific trail is empty."}
          </p>
        </div>

        {/* CTA */}
        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${locale}`}
            className="px-8 py-3.5 bg-charcoal-800 hover:bg-sand-500 text-ivory-100 hover:text-charcoal-900 text-xs font-semibold uppercase tracking-widest transition-all font-sans inline-flex items-center justify-center gap-1.5 rounded-md"
          >
            <span>{t.err404?.cta || "Return to India"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href={`/${locale}/destinations`}
            className="px-8 py-3.5 border border-sand-300 hover:border-charcoal-800 text-charcoal-800 text-xs font-semibold uppercase tracking-widest transition-all font-sans inline-flex items-center justify-center rounded-md"
          >
            <span>Explore Destinations</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
