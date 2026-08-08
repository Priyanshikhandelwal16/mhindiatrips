import React from "react";
import { notFound } from "next/navigation";
import { getFoodBySlugAction } from "@/app/actions/queries";
import InquiryForm from "@/components/common/InquiryForm";
import Link from "next/link";
import { Utensils, MapPin, Check, BookOpen, Star, ArrowRight } from "lucide-react";

interface FoodDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function FoodDetailPage({ params }: FoodDetailPageProps) {
  const { locale, slug } = await params;
  const food = await getFoodBySlugAction(slug);
  if (!food) notFound();

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      
      {/* SECTION 1: Banner Header */}
      <section className="relative h-[78vh] min-h-[540px] flex items-center justify-center overflow-hidden pt-28 md:pt-36">
        <img src={food.image} alt={food.title?.[locale as "en"|"es"|"pt"] || food.title?.en} className="absolute inset-0 w-full h-full object-cover scale-100 animate-kenburns" loading="eager" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center text-white space-y-6 px-6 max-w-4xl">
          <span className="bg-gold text-royal text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full inline-block">
            <Utensils className="w-4 h-4 text-royal inline-block mr-1.5 align-text-bottom" />
            {food.category} Culinary
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white">
            {food.title?.[locale as "en"|"es"|"pt"] || food.title?.en}
          </h1>
        </div>
      </section>

      {/* SECTION 2: Dynamic columns split */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Core content */}
        <div className="lg:col-span-2 space-y-12">
          
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-gold flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>THE LEGACY</span>
            </span>
            <h2 className="text-2xl font-serif font-bold text-royal">
              Heritage Culinary Chronicle
            </h2>
            <p className="text-xs md:text-sm text-foreground/60 leading-relaxed font-light">
              {food.history?.[locale as "en"|"es"|"pt"] || food.history?.en}
            </p>
          </div>

          {/* Key Inclusions & Spices */}
          {food.ingredients?.length > 0 && (
            <div className="space-y-6 pt-10 border-t border-gold/10">
              <h3 className="text-lg font-serif font-bold text-royal">
                {locale === "es" ? "Ingredientes Clave" : locale === "pt" ? "Ingredientes Chave" : "Key Spices & Ingredients"}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-light">
                {food.ingredients.map((ing: any, idx: number) => (
                  <li key={idx} className="flex items-center gap-2.5 text-foreground/75">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span>{ing?.[locale as "en"|"es"|"pt"] || ing?.en}</span>
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
                  <div key={idx} className="bg-white border border-gold/10 p-5 rounded-2xl flex justify-between items-center shadow-sm hover:border-gold/25 transition-colors">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-royal block">{res.name}</span>
                      <span className="text-[9px] text-foreground/45 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-gold" />
                        {res.city}
                      </span>
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
        <div className="bg-white border border-gold/25 p-8 rounded-3xl h-fit space-y-6 shadow-xl shadow-royal/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[4px] bg-gold" />
          <h3 className="text-[10px] uppercase tracking-[0.25em] font-black text-royal border-b border-gold/10 pb-4">
            Culinary Dossier
          </h3>
          <div className="space-y-5 text-xs">
            <div>
              <span className="text-[9px] uppercase tracking-wider font-bold text-foreground/40 block mb-1">Place of Origin</span>
              <span className="text-foreground/75 font-semibold block">{food.origin?.[locale as "en"|"es"|"pt"] || food.origin?.en}</span>
            </div>
            <div className="pt-4 border-t border-gold/10">
              <span className="text-[9px] uppercase tracking-wider font-bold text-foreground/40 block mb-1">Culinary Region</span>
              <span className="text-foreground/75 font-semibold block">{food.region} India</span>
            </div>
          </div>
        </div>

      </section>

      {/* Inquiry Form */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center space-y-6 border-t border-gold/10">
        <h2 className="text-2xl md:text-3xl font-bold text-royal">Want to taste this regional cuisine?</h2>
        <p className="text-sm text-foreground/50 font-light leading-relaxed max-w-md mx-auto">Let our luxury destination designers craft the perfect custom itinerary for you.</p>
        <Link href={`/${locale}/contact`} className="bg-gold hover:bg-gold-light text-royal text-xs font-bold uppercase tracking-widest px-8 py-4.5 rounded-full inline-flex items-center gap-1.5 shadow-md">
          <span>Inquire About Tour</span>
          <ArrowRight className="w-4 h-4 text-royal" />
        </Link>
      </section>
    </div>
  );
}
