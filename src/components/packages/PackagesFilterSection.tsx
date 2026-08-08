"use client";

import React, { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/home/Reveal";
import { 
  Calendar, CheckCircle, ArrowRight, Hotel, Car, UserCheck, ShieldCheck 
} from "lucide-react";

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
    : packages.filter((pkg: any) => pkg.category === selectedCategory);

  return (
    <div className="space-y-12">
      {/* Category Tabs */}
      <Reveal className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-5 py-2.5 rounded-full border text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-sm ${
            selectedCategory === "All"
              ? "bg-gold border-gold text-royal shadow-md scale-[1.03]"
              : "bg-white border-gold/15 text-royal hover:border-gold/30 hover:bg-[#FAF8F5]/50"
          }`}
        >
          {locale === "es" ? "Todos" : locale === "pt" ? "Todos" : "All Tours"}
        </button>
        {categories.map((cat: string) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-full border text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-sm ${
              selectedCategory === cat
                ? "bg-gold border-gold text-royal shadow-md scale-[1.03]"
                : "bg-white border-gold/15 text-royal hover:border-gold/30 hover:bg-[#FAF8F5]/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </Reveal>

      {/* Grid of Large Cards with Clear Inclusions details */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredPackages.map((pkg: any, i: number) => (
          <Reveal key={pkg.slug} delay={i * 80}>
            <div id={pkg.slug} className="bg-white border border-gold/10 rounded-[2rem] overflow-hidden shadow-lg flex flex-col h-full transition-all duration-500 hover:-translate-y-2 hover:border-gold/25 hover:shadow-2xl scroll-mt-28">
              
              <div className="relative h-64 overflow-hidden shrink-0">
                <img
                  src={pkg.image}
                  loading="lazy"
                  alt={pkg.title[locale as "en" | "es" | "pt"] || pkg.title.en}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 backdrop-blur-sm text-royal text-[9px] uppercase tracking-wider font-extrabold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-gold" />
                    {pkg.durationDays} {text.days}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-gold/90 backdrop-blur-sm text-royal text-[9px] uppercase tracking-wider font-black px-3 py-1.5 rounded-full">
                    {text.privateTour}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-royal text-gold text-[8px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-gold/20">
                    {pkg.category}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow bg-white justify-between">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-royal leading-snug">
                    {pkg.title[locale as "en" | "es" | "pt"] || pkg.title.en}
                  </h3>
                  <p className="text-xs md:text-sm text-foreground/55 leading-relaxed font-light">
                    {pkg.tagline[locale as "en" | "es" | "pt"] || pkg.tagline.en}
                  </p>

                  {/* Standard Clear Inclusions Panel */}
                  <div className="pt-4 border-t border-gold/10 space-y-3">
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-gold block">{text.inclusionsTitle}</span>
                    <div className="grid grid-cols-2 gap-2 text-xs font-light text-foreground/60">
                      <div className="flex items-center gap-1.5">
                        <Hotel className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span>5-Star Palace</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Car className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span>Private SUV</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <UserCheck className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span>Personal Guide</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span>Daily Breakfast</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-3">
                    {pkg.highlights.slice(0, 3).map((hl: any, idx: number) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-foreground/65 font-light">
                        <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                        <span>{hl[locale as "en" | "es" | "pt"] || hl.en}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-6 mt-6 border-t border-gold/15 flex justify-between items-center bg-white">
                  <span className="text-[10px] font-extrabold tracking-wider uppercase text-gold">
                    {text.priceOnRequest}
                  </span>
                  <Link
                    href={`/${locale}/contact`}
                    className="text-xs font-bold uppercase tracking-wider text-forest hover:text-gold flex items-center gap-1 transition-colors"
                  >
                    <span>{text.inquire}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
