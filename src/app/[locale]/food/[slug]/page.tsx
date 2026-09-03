import React from "react";
import { notFound } from "next/navigation";
import { getFoodBySlugAction } from "@/app/actions/queries";
import InquiryForm from "@/components/common/InquiryForm";
import Link from "next/link";
import { Utensils, MapPin, Check, BookOpen, Star, ArrowRight, Compass } from "lucide-react";

interface FoodDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function FoodDetailPage({ params }: FoodDetailPageProps) {
  const { locale, slug } = await params;
  const food = await getFoodBySlugAction(slug);
  if (!food) notFound();

  const foodTitle = food.title?.[locale as "en" | "es" | "pt"] || food.title?.en || food.name?.[locale as "en" | "es" | "pt"] || food.name?.en;
  const foodHistory = food.history?.[locale as "en" | "es" | "pt"] || food.history?.en || food.description?.[locale as "en" | "es" | "pt"] || food.description?.en;
  const foodOrigin = food.origin?.[locale as "en" | "es" | "pt"] || food.origin?.en;

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      
      {/* SECTION 1: Banner Header (Solid Luxury Dark Green #0A2A1E Background - No BG Image) */}
      <section className="bg-[#0A2A1E] text-white pt-32 md:pt-40 pb-16 px-6 text-center border-b border-gold/20 shadow-md">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="text-[11px] uppercase tracking-[0.25em] text-gold/90 font-medium flex items-center justify-center gap-2">
            <span>MH India Trips</span>
            <span className="text-gold/40">•</span>
            <span>Food Guide</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-wide leading-tight">
            {foodTitle}
          </h1>
          <div className="pt-2">
            <span className="bg-gold/15 border border-gold/30 text-gold text-[11px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full inline-flex items-center gap-1.5">
              <Utensils className="w-3.5 h-3.5 text-gold" />
              {food.category || "Regional"} Culinary
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 2: Dynamic columns split */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Core content */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Particular Food Image (Added Separately with Premium Styling) */}
          {food.image && (
            <div className="relative w-full h-[320px] sm:h-[440px] rounded-2xl overflow-hidden shadow-2xl border border-gold/20 group">
              <img 
                src={food.image} 
                alt={foodTitle} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                loading="eager" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              {foodOrigin && (
                <div className="absolute bottom-4 left-6 text-white">
                  <span className="text-xs uppercase tracking-widest font-semibold bg-black/65 backdrop-blur-md px-3.5 py-1.5 rounded-full text-gold border border-gold/30 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                    {foodOrigin}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Legacy / History text */}
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-gold flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>THE LEGACY</span>
            </span>
            <h2 className="text-2xl font-serif font-bold text-royal">
              Heritage Culinary Chronicle
            </h2>
            <p className="text-sm md:text-base text-foreground/75 leading-relaxed font-light whitespace-pre-line">
              {foodHistory}
            </p>
          </div>

          {/* Key Inclusions & Spices */}
          {food.ingredients?.length > 0 && (
            <div className="space-y-6 pt-10 border-t border-gold/10">
              <h3 className="text-lg font-serif font-bold text-royal">
                {locale === "es" ? "Ingredientes Clave" : locale === "pt" ? "Ingredientes Chave" : "Key Spices & Ingredients"}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-light text-foreground/80">
                {food.ingredients.map((ing: any, idx: number) => (
                  <li key={idx} className="flex items-center gap-2.5 text-foreground/75">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span>{typeof ing === "string" ? ing : (ing?.[locale as "en" | "es" | "pt"] || ing?.en)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Dining Spots */}
          {food.bestRestaurants?.length > 0 && (
            <div className="space-y-6 pt-10 border-t border-gold/10">
              <h3 className="text-lg font-serif font-bold text-royal">
                {locale === "es" ? "Establecimientos Recomendados" : locale === "pt" ? "Estabelecimentos Recomendados" : "Signature Dining Recommendations"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {food.bestRestaurants.map((res: any, idx: number) => (
                  <div key={idx} className="bg-white border border-gold/10 p-5 flex justify-between items-center shadow-sm hover:border-gold/25 transition-colors rounded-lg">
                    <div className="space-y-1">
                      <span className="text-sm font-serif font-bold text-royal block">{res.name}</span>
                      {res.city && (
                        <span className="text-xs text-foreground/50 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-gold" />
                          {res.city}
                        </span>
                      )}
                    </div>
                    <div className="w-7 h-7 rounded-full bg-gold/5 flex items-center justify-center shrink-0">
                      <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Postcard Details box */}
        <div className="bg-white border border-gold/25 p-8 h-fit space-y-6 shadow-xl shadow-royal/5 relative overflow-hidden rounded-xl lg:sticky lg:top-28">
          <div className="absolute top-0 left-0 w-full h-[4px] bg-gold" />
          <h3 className="text-xs uppercase tracking-[0.25em] font-black text-royal border-b border-gold/10 pb-4 flex items-center gap-2">
            <Compass className="w-4 h-4 text-gold" />
            <span>Culinary Dossier</span>
          </h3>
          <div className="space-y-5 text-sm">
            {foodOrigin && (
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-foreground/45 block mb-1">Place of Origin</span>
                <span className="text-foreground/80 font-semibold block">{foodOrigin}</span>
              </div>
            )}
            {food.region && (
              <div className="pt-4 border-t border-gold/10">
                <span className="text-xs uppercase tracking-wider font-bold text-foreground/45 block mb-1">Culinary Region</span>
                <span className="text-foreground/80 font-semibold block">{food.region} India</span>
              </div>
            )}
            {food.category && (
              <div className="pt-4 border-t border-gold/10">
                <span className="text-xs uppercase tracking-wider font-bold text-foreground/45 block mb-1">Category</span>
                <span className="text-foreground/80 font-semibold block">{food.category}</span>
              </div>
            )}
          </div>
        </div>

      </section>

      {/* Inquiry Form Call to Action */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center space-y-6 border-t border-gold/10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-royal">Want to taste this regional cuisine?</h2>
        <p className="text-sm text-foreground/60 font-light leading-relaxed max-w-md mx-auto">Let our luxury destination designers craft the perfect custom itinerary for you.</p>
        <Link href={`/${locale}/contact`} className="bg-gold hover:bg-gold-light text-royal text-xs font-bold uppercase tracking-widest px-8 py-4.5 rounded-full inline-flex items-center gap-1.5 shadow-md transition-transform hover:scale-105">
          <span>Inquire About Tour</span>
          <ArrowRight className="w-4 h-4 text-royal" />
        </Link>
      </section>
    </div>
  );
}
