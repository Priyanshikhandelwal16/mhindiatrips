import React from "react";
import { notFound } from "next/navigation";
import { getFoodBySlugAction } from "@/app/actions/queries";
import InquiryForm from "@/components/common/InquiryForm";
import { Utensils, MapPin, Check } from "lucide-react";

interface FoodDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function FoodDetailPage({ params }: FoodDetailPageProps) {
  const { locale, slug } = await params;
  const food = await getFoodBySlugAction(slug);
  if (!food) notFound();

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      {/* Hero */}
      <div className="relative h-[45vh] min-h-[320px] flex items-center justify-center overflow-hidden">
        <img src={food.image} alt={food.title?.[locale as "en"|"es"|"pt"] || food.title?.en} className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#FAF8F5]" />
        <div className="relative z-10 text-center text-white space-y-4 px-6 mt-16">
          <span className="editorial-subheading block text-gold flex items-center justify-center gap-1.5">
            <Utensils className="w-4 h-4" />{food.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold">{food.title?.[locale as "en"|"es"|"pt"] || food.title?.en}</h1>
        </div>
      </div>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-royal">{locale === "es" ? "Historia" : locale === "pt" ? "História" : "History & Origin"}</h2>
            <p className="text-sm text-foreground/65 leading-relaxed">{food.history?.[locale as "en"|"es"|"pt"] || food.history?.en}</p>
          </div>
          {food.ingredients?.length > 0 && (
            <div className="space-y-4 pt-6 border-t border-sand">
              <h3 className="text-xl font-serif font-bold text-royal">{locale === "es" ? "Ingredientes" : locale === "pt" ? "Ingredientes" : "Key Ingredients"}</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {food.ingredients.map((ing: any, idx: number) => (
                  <li key={idx} className="flex items-center gap-2.5 text-sm text-foreground/70">
                    <Check className="w-4 h-4 text-gold shrink-0" />
                    <span>{ing?.[locale as "en"|"es"|"pt"] || ing?.en}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {food.bestRestaurants?.length > 0 && (
            <div className="space-y-4 pt-6 border-t border-sand">
              <h3 className="text-xl font-serif font-bold text-royal">{locale === "es" ? "Restaurantes" : locale === "pt" ? "Restaurantes" : "Best Restaurants"}</h3>
              <div className="space-y-3">
                {food.bestRestaurants.map((res: any, idx: number) => (
                  <div key={idx} className="bg-white border border-sand/60 rounded-xl p-4 flex justify-between items-center">
                    <span className="text-sm font-semibold text-royal">{res.name}</span>
                    <span className="text-xs text-gold uppercase font-bold tracking-wide flex items-center gap-1">
                      <MapPin className="w-3 h-3" />{res.city}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="card-elevated p-8 h-fit space-y-5">
          <h3 className="editorial-subheading border-b border-sand pb-3">Guide Info</h3>
          <div className="space-y-4 text-sm">
            <div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-foreground/40 block">Origin</span>
              <span className="text-foreground/70">{food.origin?.[locale as "en"|"es"|"pt"] || food.origin?.en}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-foreground/40 block">Region</span>
              <span className="text-foreground/70">{food.region}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-sand">
        <InquiryForm locale={locale} />
      </section>
    </div>
  );
}
