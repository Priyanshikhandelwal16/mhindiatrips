import React from "react";
import Link from "next/link";
import { Utensils, ArrowRight, MapPin } from "lucide-react";
import Reveal from "./Reveal";

interface FoodSectionProps {
    locale: string;
    foods: any[];
    labels: {
        sub: string;
        title: string;
        desc: string;
        cta: string;
        viewAll: string;
    };
}

export default function FoodSection({ locale, foods, labels }: FoodSectionProps) {
    const featured = foods.slice(0, 6);

    return (
        <section className="relative py-24 overflow-hidden bg-[#1B1B1B] text-white">
            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#B8964B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

            <Reveal className="relative z-10 max-w-7xl mx-auto px-6 space-y-14">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
                    <div className="space-y-4">
                        <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gold font-semibold">
                            <Utensils className="w-4 h-4" />
                            <span>{labels.sub}</span>
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">{labels.title}</h2>
                        <p className="text-sm text-white/60 max-w-lg leading-relaxed">{labels.desc}</p>
                    </div>
                    <div className="lg:text-right">
                        <Link
                            href={`/${locale}/food`}
                            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold hover:text-white border border-gold/30 hover:border-gold px-6 py-3 rounded-full transition-all duration-300"
                        >
                            <span>{labels.viewAll}</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Food cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featured.map((food: any, idx: number) => (
                        <Reveal key={food.slug} delay={idx * 80}>
                            <Link
                                href={`/${locale}/food/${food.slug}`}
                                className="group relative block h-72 rounded-2xl overflow-hidden"
                            >
                                <img
                                    src={food.image}
                                    alt={food.title[locale as "en" | "es" | "pt"] || food.title.en}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                <div className="absolute bottom-0 p-6 text-white space-y-2">
                                    <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-gold font-semibold">
                                        <MapPin className="w-3 h-3" />
                                        <span>{food.region}</span>
                                    </span>
                                    <h3 className="text-xl font-serif font-bold leading-tight">
                                        {food.title[locale as "en" | "es" | "pt"] || food.title.en}
                                    </h3>
                                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-white/70 group-hover:text-gold transition-colors duration-300">
                                        <span>{labels.cta}</span>
                                        <ArrowRight className="w-3 h-3" />
                                    </span>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </Reveal>
        </section>
    );
}
