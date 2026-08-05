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
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[380px] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1920" alt="Indian Food" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#FAF8F5]" />
        <div className="relative z-10 text-center text-white space-y-5 px-6 mt-16">
          <span className="editorial-subheading block text-gold">{text.sub}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">{text.title}</h1>
          <p className="text-white/75 max-w-xl mx-auto text-[15px] leading-relaxed">{text.desc}</p>
        </div>
      </div>

      {/* Food by Category */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {categories.length > 0 ? categories.map((cat) => {
          const catFoods = foods.filter((f: any) => f.category === cat);
          if (catFoods.length === 0) return null;
          return (
            <div key={cat} className="space-y-8">
              <div className="flex items-center gap-3 border-b border-sand pb-4">
                <Sparkles className="w-5 h-5 text-gold" />
                <h2 className="text-lg font-semibold tracking-wider uppercase text-gold">{cat}</h2>
                <span className="text-xs text-foreground/40 ml-auto">{catFoods.length} {locale === "es" ? "platos" : locale === "pt" ? "pratos" : "dishes"}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {catFoods.map((food: FoodData) => (
                  <Link key={food.slug} href={`/${locale}/food/${food.slug}`} className="group block">
                    <div className="card-elevated overflow-hidden h-full flex flex-col">
                      <div className="h-48 overflow-hidden relative shrink-0">
                        <img src={food.image} alt={food.title[locale as "en"|"es"|"pt"] || food.title.en} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/90 backdrop-blur-sm text-charcoal text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1">
                            <Utensils className="w-3 h-3" />
                            {food.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow justify-between">
                        <div className="space-y-2">
                          <h3 className="text-lg font-serif font-bold text-royal group-hover:text-gold transition-colors leading-snug">
                            {food.title[locale as "en"|"es"|"pt"] || food.title.en}
                          </h3>
                          <div className="flex items-center gap-1.5 text-[11px] text-gold font-semibold uppercase tracking-wider">
                            <MapPin className="w-3 h-3" />
                            <span>{food.region}</span>
                          </div>
                          <p className="text-xs text-foreground/60 leading-relaxed line-clamp-2">
                            {food.history?.[locale as "en"|"es"|"pt"] || food.history?.en || ""}
                          </p>
                        </div>
                        <div className="pt-4 mt-4 border-t border-sand/50">
                          <span className="text-xs font-semibold uppercase tracking-wider text-forest group-hover:text-gold flex items-center gap-1.5 transition-colors">
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
        }) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {foods.map((food: FoodData) => (
              <Link key={food.slug} href={`/${locale}/food/${food.slug}`} className="group block">
                <div className="card-elevated overflow-hidden h-full">
                  <div className="h-48 overflow-hidden">
                    <img src={food.image} alt={food.title.en} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="text-lg font-serif font-bold text-royal">{food.title[locale as "en"|"es"|"pt"] || food.title.en}</h3>
                    <p className="text-xs text-foreground/60 line-clamp-2">{food.history?.[locale as "en"|"es"|"pt"] || food.history?.en || ""}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
