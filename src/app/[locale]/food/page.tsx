import React from "react";
import Link from "next/link";
import { getFoodsAction } from "@/app/actions/queries";
import { FoodData } from "@/data/mockData";
import { Utensils, MapPin, ArrowRight, Sparkles } from "lucide-react";

interface FoodIndexPageProps {
  params: Promise<{ locale: string }>;
}

export default async function FoodIndexPage({ params }: FoodIndexPageProps) {
  const { locale } = await params;
  const foods = await getFoodsAction();

  const t: Record<string, any> = {
    en: { sub: "Food Guide", title: "The India Food Guide", desc: "Indian regional cuisines reflect centuries of royal patronage, traditional spices, and unique geography.", cta: "Discover Dish" },
    es: { sub: "Guía de Comida", title: "Guía de Comida India", desc: "Las cocinas regionales de la India reflejan siglos de mecenazgo real, especias tradicionales y geografía única.", cta: "Descubrir Plato" },
    pt: { sub: "Guia de Comida", title: "Guia de Comida Indiana", desc: "As culinárias regionais da Índia refletem séculos de mecenato real, especiarias tradicionais e geografia única.", cta: "Descobrir Prato" }
  };
  const text = t[locale] || t.en;
  const categories = Array.from(new Set(foods.map((f: any) => f.category))).filter(Boolean);

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      
      {/* SECTION 1: Banner Header */}
      <section className="relative h-[75vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img src="/images/indian_cuisine_feast.png" alt="Indian Food" className="absolute inset-0 w-full h-full object-cover scale-100 animate-kenburns" loading="eager" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white space-y-6 px-6 mt-20 max-w-5xl">
          <span className="bg-gold text-royal text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full inline-block">
            {text.sub}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none text-white">{text.title}</h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto font-light leading-relaxed">{text.desc}</p>
        </div>
      </section>

      {/* SECTION 2: Categories lists */}
      <section className="max-w-7xl mx-auto px-6 py-28 space-y-24">
        {categories.map((cat) => {
          const catFoods = foods.filter((f: any) => f.category === cat);
          if (catFoods.length === 0) return null;
          return (
            <div key={cat} className="space-y-12">
              
              <div className="flex items-center gap-3 border-b border-gold/15 pb-4">
                <Sparkles className="w-5 h-5 text-gold" />
                <h2 className="text-sm font-serif font-bold uppercase tracking-wider text-royal">{cat}</h2>
                <span className="text-[10px] text-foreground/40 ml-auto font-bold uppercase tracking-wider">{catFoods.length} Items</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {catFoods.map((food: FoodData) => (
                  <Link key={food.slug} href={`/${locale}/food/${food.slug}`} className="group block">
                    <div className="bg-white border border-gold/10 rounded-2xl overflow-hidden shadow-sm flex flex-col h-[420px] transition-transform duration-500 hover:-translate-y-2 hover:border-gold/25">
                      
                      <div className="h-52 overflow-hidden relative shrink-0">
                        <img src={food.image} alt={food.title[locale as "en"|"es"|"pt"] || food.title.en} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/95 backdrop-blur-sm text-royal text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                            <Utensils className="w-3.5 h-3.5 text-gold" />
                            {food.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-7 flex flex-col flex-grow justify-between bg-white">
                        <div className="space-y-3">
                          <h3 className="text-base font-serif font-bold text-royal group-hover:text-gold transition-colors leading-snug">
                            {food.title[locale as "en"|"es"|"pt"] || food.title.en}
                          </h3>
                          <div className="flex items-center gap-1.5 text-[9px] text-gold font-bold uppercase tracking-wider">
                            <MapPin className="w-3.5 h-3.5 text-gold" />
                            <span>{food.region}</span>
                          </div>
                          <p className="text-xs text-foreground/50 leading-relaxed line-clamp-2 font-light">
                            {food.history?.[locale as "en"|"es"|"pt"] || food.history?.en || ""}
                          </p>
                        </div>
                        <div className="pt-4 mt-4 border-t border-gold/10 flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-forest group-hover:text-royal flex items-center gap-1 transition-colors">
                            <span>{text.cta}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>

                    </div>
                  </Link>
                ))}
              </div>

            </div>
          );
        })}
      </section>

    </div>
  );
}
