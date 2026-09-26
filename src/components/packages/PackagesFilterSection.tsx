"use client";

import React, { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/home/Reveal";
import { 
  Calendar, CheckCircle, ArrowRight, Tag
} from "lucide-react";

import { getHighResImageUrl } from "@/lib/image-utils";
import { getPackagePriceInfo } from "@/lib/price-utils";

interface PackagesFilterSectionProps {
  packages: any[];
  locale: string;
  categories: string[];
  text: any;
}

export default function PackagesFilterSection({ 
  packages, 
  locale, 
  categories, 
  text 
}: PackagesFilterSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredPackages = selectedCategory === "All"
    ? packages
    : selectedCategory === "Outbound"
    ? packages.filter((pkg: any) => pkg.category === "Outbound" || pkg.isOutbound === true || pkg.travelStyle?.includes("Outbound"))
    : selectedCategory === "Domestic"
    ? packages.filter((pkg: any) => pkg.category !== "Outbound" && !pkg.isOutbound && !pkg.travelStyle?.includes("Outbound"))
    : packages.filter((pkg: any) => pkg.category === selectedCategory);

  return (
    <div className="space-y-12">
      {/* Category Tabs: Smooth Horizontal Scrollable on Mobile */}
      <Reveal className="w-full">
        <div className="flex items-center gap-2 sm:gap-3 justify-start sm:justify-center overflow-x-auto no-scrollbar max-w-full px-3 py-2 scroll-smooth">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-5 sm:px-6 py-3 rounded-full border text-xs sm:text-xs font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer shrink-0 shadow-sm ${
              selectedCategory === "All"
                ? "bg-gold border-gold text-[#0A2A1E] shadow-md scale-[1.03]"
                : "bg-white border-[#C5A862]/20 text-royal hover:border-[#C5A862]/40 hover:bg-[#FAF8F5]"
            }`}
          >
            {locale === "es" ? "Todos los Viajes" : locale === "pt" ? "Todos os Pacotes" : "All Packages"}
          </button>

          <button
            onClick={() => setSelectedCategory("Domestic")}
            className={`px-5 sm:px-6 py-3 rounded-full border text-xs sm:text-xs font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer shrink-0 shadow-sm ${
              selectedCategory === "Domestic"
                ? "bg-[#0A2A1E] border-[#0A2A1E] text-[#C5A862] shadow-md scale-[1.03]"
                : "bg-white border-[#C5A862]/20 text-royal hover:border-[#C5A862]/40 hover:bg-[#FAF8F5]"
            }`}
          >
            {locale === "es" ? "India Doméstico" : locale === "pt" ? "Índia Doméstico" : "India (Domestic)"}
          </button>

          <button
            onClick={() => setSelectedCategory("Outbound")}
            className={`px-5 sm:px-6 py-3 rounded-full border text-xs sm:text-xs font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer shrink-0 shadow-sm ${
              selectedCategory === "Outbound"
                ? "bg-[#C5A862] border-[#C5A862] text-[#0A2A1E] shadow-md scale-[1.03]"
                : "bg-white border-[#C5A862]/20 text-royal hover:border-[#C5A862]/40 hover:bg-[#FAF8F5]"
            }`}
          >
            {locale === "es" ? "Internacionales" : locale === "pt" ? "Internacionais" : "Outbound (International)"}
          </button>

        </div>
      </Reveal>

      {/* Grid of Large Cards with Clear Inclusions details */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredPackages.map((pkg: any, i: number) => {
          const pkgTitle = typeof pkg.title === "string" 
            ? pkg.title 
            : (pkg.title?.[locale as "en" | "es" | "pt"] || pkg.title?.en || pkg.package_name?.[locale as "en" | "es" | "pt"] || pkg.package_name?.en || pkg.slug || "");

          const pkgTagline = typeof pkg.tagline === "string"
            ? pkg.tagline
            : (pkg.tagline?.[locale as "en" | "es" | "pt"] || pkg.tagline?.en || pkg.shortDescription?.[locale as "en" | "es" | "pt"] || pkg.shortDescription?.en || pkg.short_description?.[locale as "en" | "es" | "pt"] || pkg.short_description?.en || "");

          const priceInfo = getPackagePriceInfo(pkg, locale);

          return (
            <Reveal key={pkg.slug || i} delay={i * 80}>
              <div id={pkg.slug} className="card-3d bg-white border border-[#C5A862]/10 overflow-hidden shadow-md flex flex-col h-full transition-all duration-500 hover:border-[#C5A862]/30 scroll-mt-28 group perspective-1000">
                
                <div className="relative h-64 overflow-hidden shrink-0">
                  <img
                    src={getHighResImageUrl(pkg.image)}
                    loading="eager"
                    decoding="async"
                    alt={pkgTitle}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-65" />
                  
                  {/* Top Left: Duration Badge & Sale Badge */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
                    <span className="bg-white/95 backdrop-blur-sm text-royal text-[9px] uppercase tracking-wider font-extrabold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gold" />
                      {pkg.durationDays || pkg.duration_days || 7} {text.days}
                    </span>
                    {priceInfo.saleBadge && (
                      <span className="bg-[#B91C1C] text-white text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1 animate-pulse">
                        <Tag className="w-3 h-3 text-amber-300" />
                        {priceInfo.saleBadge}
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-4 right-4">
                    <span className="bg-gold/90 backdrop-blur-sm text-royal text-[9px] uppercase tracking-wider font-black px-3 py-1.5 rounded-full">
                      {text.privateTour}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#0A2A1E] text-gold text-[8px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-gold/20">
                      {pkg.category || "Outbound"}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow bg-white justify-between">
                  <div className="space-y-4">
                    <h3 className="text-xl font-serif font-medium text-royal leading-snug">
                      {pkgTitle}
                    </h3>
                    <p className="text-xs md:text-sm text-foreground/55 leading-relaxed font-light">
                      {pkgTagline}
                    </p>

                  {/* Dynamic Highlights from package data */}
                  <div className="pt-4 border-t border-[#C5A862]/10 space-y-3">
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-gold block">{text.inclusionsTitle}</span>
                    <div className="space-y-2">
                      {(() => {
                        let rawList: any[] = [];
                        if (Array.isArray(pkg.highlights)) {
                          rawList = pkg.highlights;
                        } else if (typeof pkg.highlights === "object" && pkg.highlights !== null) {
                          const langArr = pkg.highlights[locale] || pkg.highlights.en || pkg.highlights.es || pkg.highlights.pt;
                          if (Array.isArray(langArr)) rawList = langArr;
                        }
                        return rawList.slice(0, 4).map((hl: any, idx: number) => {
                          const label = typeof hl === "string" 
                            ? hl 
                            : (hl?.title?.[locale] || hl?.title?.en || hl?.[locale] || hl?.en || (typeof hl?.title === "string" ? hl.title : ""));
                          if (!label || typeof label !== "string") return null;
                          return (
                            <div key={idx} className="flex items-start gap-2 text-xs text-foreground/65 font-light">
                              <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                              <span>{label}</span>
                            </div>
                          );
                        });
                      })()}
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 mt-6 border-t border-[#C5A862]/15 flex justify-between items-center bg-white">
                  {priceInfo.isEnquireOnly ? (
                    <span className="text-[10px] font-extrabold tracking-wider uppercase text-gold">
                      {text.priceOnRequest}
                    </span>
                  ) : (
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold uppercase text-[#0A2A1E]/50 tracking-wider">
                        {locale === "es" ? "Desde" : locale === "pt" ? "A partir de" : "Starting From"}
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-serif font-extrabold text-[#0A2A1E]">
                          {priceInfo.formattedOfferPrice}
                        </span>
                        {priceInfo.hasDiscount && priceInfo.formattedOriginalPrice && (
                          <span className="text-xs text-[#0A2A1E]/40 line-through font-medium">
                            {priceInfo.formattedOriginalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  <Link
                    href={`/${locale}/packages/${pkg.slug}`}
                    className="text-xs font-bold uppercase tracking-wider text-royal hover:text-gold flex items-center gap-1 transition-colors"
                  >
                    <span>{text.inquire}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </Reveal>
        );
      })}
      </div>
    </div>
  );
}

