import React from "react";
import Link from "next/link";
import { getFoodsAction } from "@/app/actions/queries";
import { FoodData } from "@/data/mockData";
import { Utensils, MapPin, ArrowRight, Sparkles, Compass } from "lucide-react";

interface FoodIndexPageProps {
  params: Promise<{ locale: string }>;
}

export default async function FoodIndexPage({ params }: FoodIndexPageProps) {
  const { locale } = await params;
  const foods = (await getFoodsAction()).slice(0, 15);

  const t: Record<string, any> = {
    en: { 
      sub: "Culinary Heritage", 
      title: "Regional Food Guide", 
      desc: "Taste the history of the subcontinent. Explore traditional cuisines mapped by geographical regions, from rich royal kitchens to vibrant coastal spices.", 
      cta: "Discover Recipe",
      items: "dishes"
    },
    es: { 
      sub: "Patrimonio Culinario", 
      title: "Guía de Comida Regional", 
      desc: "Pruebe la historia del subcontinente. Explore las cocinas tradicionales mapeadas por regiones geográficas, desde cocinas reales hasta especias costeras.", 
      cta: "Descubrir Receta",
      items: "platos"
    },
    pt: { 
      sub: "Patrimônio Culinário", 
      title: "Guia de Comida Regional", 
      desc: "Prove a história do subcontinente. Explore as cozinhas tradicionais mapeadas por regiões geográficas, desde cozinhas reais até especiarias costeiras.", 
      cta: "Descobrir Receita",
      items: "pratos"
    }
  };
  const text = t[locale] || t.en;

  // Ordered list of regions to display logically
  const regionsOrder = ["North India", "South India", "West India", "East India", "Central India", "Coastal India"];
  
  // Filter regions that actually have items in database
  const activeRegions = regionsOrder.filter(r => 
    foods.some((f: any) => (f.region || "").toLowerCase() === r.toLowerCase())
  );

  // Catch-all for any other regions not in our list
  const otherRegions = Array.from(new Set(foods.map((f: any) => f.region)))
    .filter(Boolean)
    .filter((r: any) => !regionsOrder.some(ro => ro.toLowerCase() === r.toLowerCase())) as string[];

  const finalRegions = [...activeRegions, ...otherRegions];

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      
      {/* SECTION 1: Banner Header */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-28 md:pt-36">
        <img 
          src="/images/indian_cuisine_feast.png" 
          alt="Indian Regional Cuisine" 
          className="absolute inset-0 w-full h-full object-cover scale-100 animate-kenburns" 
          loading="eager" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15" />
        <div className="relative z-10 text-center text-white space-y-6 px-6 max-w-5xl">
          <span className="bg-[#0A2A1E]/80 border border-[#C5A862]/30 text-gold text-xs font-bold uppercase tracking-[0.25em] px-5 py-2.5 rounded-full inline-block shadow-lg">
            {text.sub}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-normal tracking-tight leading-none text-white">
            {text.title}
          </h1>
          <p className="text-sm md:text-base text-white/95 max-w-2xl mx-auto font-light leading-relaxed">
            {text.desc}
          </p>
        </div>
      </section>
 
      {/* SECTION 2: Regions lists */}
      <section className="max-w-7xl mx-auto px-6 py-28 space-y-24">
        {finalRegions.map((reg: string) => {
          const regFoods = foods.filter((f: any) => (f.region || "").toLowerCase() === reg.toLowerCase());
          if (regFoods.length === 0) return null;
          
          return (
            <div key={reg} className="space-y-12">
              
              {/* Region Section Header */}
              <div className="flex items-center gap-3 border-b border-[#C5A862]/10 pb-4">
                <Compass className="w-5 h-5 text-gold" />
                <h2 className="text-xl font-serif font-medium text-royal tracking-wide uppercase">{reg}</h2>
                <span className="text-[10px] text-foreground/45 ml-auto font-bold uppercase tracking-wider">
                  {regFoods.length} {text.items}
                </span>
              </div>
 
              {/* Dishes Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {regFoods.map((food: FoodData) => (
                  <Link key={food.slug} href={`/${locale}/food/${food.slug}`} className="group block">
                    <div className="bg-white border border-[#C5A862]/10 overflow-hidden rounded-2xl shadow-md flex flex-col h-[500px] transition-all duration-500 hover:-translate-y-2.5 hover:border-[#C5A862]/30 hover:shadow-xl">
                      
                      {/* Image Frame */}
                      <div className="h-56 overflow-hidden relative shrink-0">
                        <img 
                          src={food.image} 
                          alt={food.title[locale as "en"|"es"|"pt"] || food.title.en} 
                          loading="lazy" 
                          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-65" />
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/95 backdrop-blur-sm text-royal text-[9px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md border border-gold/5">
                            <Utensils className="w-3.5 h-3.5 text-gold" />
                            {food.category}
                          </span>
                        </div>
                      </div>
 
                      {/* Info Details Content */}
                      <div className="p-7 flex flex-col flex-grow justify-between bg-white space-y-3.5">
                        <div className="space-y-2.5">
                          <h3 className="text-lg font-serif font-medium text-royal group-hover:text-gold transition-colors leading-snug line-clamp-1">
                            {food.title[locale as "en"|"es"|"pt"] || food.title.en}
                          </h3>
                          <div className="flex items-center gap-1.5 text-[9px] text-gold font-bold uppercase tracking-wider">
                            <MapPin className="w-3.5 h-3.5 text-gold" />
                            <span>{food.origin[locale as "en"|"es"|"pt"] || food.origin.en}</span>
                          </div>
                          <p className="text-xs text-foreground/50 leading-relaxed line-clamp-2 font-light">
                            {food.history?.[locale as "en"|"es"|"pt"] || food.history?.en || ""}
                          </p>
                        </div>
                        
                        <div className="pt-3.5 border-t border-[#C5A862]/10 space-y-2.5 mt-auto">
                          {/* Ingredients */}
                          {food.ingredients && food.ingredients.length > 0 && (
                            <div className="flex flex-wrap gap-1">
                              {food.ingredients.slice(0, 3).map((ing: any, idx: number) => {
                                const ingText = typeof ing === "object" ? ing[locale as "en"|"es"|"pt"] || ing.en : ing;
                                return (
                                  <span key={idx} className="bg-gold/5 border border-gold/10 text-gold text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                                    {ingText}
                                  </span>
                                );
                              })}
                            </div>
                          )}
                          
                          {/* Best Cities */}
                          {food.bestCities && food.bestCities.length > 0 && (
                            <div className="text-[9px] text-royal/60 flex items-center gap-1">
                              <span className="font-bold text-gold text-[8px] uppercase tracking-wider">Best in:</span>
                              <span className="line-clamp-1">
                                {food.bestCities.map((c: any) => typeof c === "object" ? c[locale as "en"|"es"|"pt"] || c.en : c).join(", ")}
                              </span>
                            </div>
                          )}
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
