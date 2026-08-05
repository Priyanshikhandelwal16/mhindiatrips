import React from "react";
import { notFound } from "next/navigation";
import { getFoodBySlugAction } from "@/app/actions/queries";
import InquiryForm from "@/components/common/InquiryForm";
import { Utensils, MapPin, Check, BookOpen, Star, Compass } from "lucide-react";

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
      <div className="relative h-[55vh] min-h-[380px] flex items-center justify-center overflow-hidden">
        <img src={food.image} alt={food.title?.[locale as "en"|"es"|"pt"] || food.title?.en} className="absolute inset-0 w-full h-full object-cover animate-kenburns" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/75" />
        <div className="relative z-10 text-center text-white space-y-4 px-6 mt-16">
          <span className="editorial-subheading block text-gold flex items-center justify-center gap-1.5 text-[10px] tracking-[0.25em] font-bold">
            <Utensils className="w-4 h-4 text-gold" />{food.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-tight">{food.title?.[locale as "en"|"es"|"pt"] || food.title?.en}</h1>
        </div>
      </div>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-10">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-wider font-bold text-gold flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Culinary History</span>
            </span>
            <h2 className="text-2xl font-serif font-bold text-royal">{locale === "es" ? "Historia" : locale === "pt" ? "História" : "History & Heritage Origin"}</h2>
            <p className="text-sm text-foreground/60 leading-relaxed font-light">{food.history?.[locale as "en"|"es"|"pt"] || food.history?.en}</p>
          </div>
          
          {/* Key Ingredients */}
          {food.ingredients?.length > 0 && (
            <div className="space-y-6 pt-8 border-t border-sand/65">
              <h3 className="text-xl font-serif font-bold text-royal">{locale === "es" ? "Ingredientes" : locale === "pt" ? "Ingredientes" : "Key Inclusions & Spices"}</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {food.ingredients.map((ing: any, idx: number) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-foreground/75 font-light">
                    <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-gold" />
                    </div>
                    <span>{ing?.[locale as "en"|"es"|"pt"] || ing?.en}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Dining Spots */}
          {food.bestRestaurants?.length > 0 && (
            <div className="space-y-6 pt-8 border-t border-sand/65">
              <h3 className="text-xl font-serif font-bold text-royal">{locale === "es" ? "Restaurantes" : locale === "pt" ? "Restaurantes" : "Highly Recommended Places to Taste"}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {food.bestRestaurants.map((res: any, idx: number) => (
                  <div key={idx} className="luxury-card hover-lift p-5 bg-white border border-gold/10 rounded-2xl flex justify-between items-center">
                    <div className="space-y-1">
                      <span className="text-sm font-semibold text-royal block">{res.name}</span>
                      <span className="text-[10px] text-foreground/45 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-gold" />
                        {res.city}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gold/5 flex items-center justify-center shrink-0">
                      <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Info */}
        <div className="glass-panel border border-gold/15 p-8 rounded-3xl h-fit space-y-6 shadow-xl shadow-royal/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gold" />
          <h3 className="editorial-subheading border-b border-sand/70 pb-3 text-[10px] tracking-[0.2em] font-bold text-royal">Gourmet Details</h3>
          <div className="space-y-5 text-sm">
            <div>
              <span className="text-[9px] uppercase tracking-wider font-bold text-foreground/40 block mb-1">Place of Origin</span>
              <span className="text-foreground/75 font-medium leading-relaxed block">{food.origin?.[locale as "en"|"es"|"pt"] || food.origin?.en}</span>
            </div>
            <div className="pt-4 border-t border-sand/40">
              <span className="text-[9px] uppercase tracking-wider font-bold text-foreground/40 block mb-1">Culinary Region</span>
              <span className="text-foreground/75 font-medium leading-relaxed block">{food.region} India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-sand/50">
        <InquiryForm locale={locale} />
      </section>
    </div>
  );
}
