import React from "react";
import Link from "next/link";
import { getBlogsAction } from "@/app/actions/queries";
import { BlogData } from "@/data/mockData";
import { Clock, ArrowRight, Compass } from "lucide-react";
import Reveal from "@/components/home/Reveal";

interface BlogIndexPageProps {
  params: Promise<{ locale: string }>;
}

export default async function BlogIndexPage({ params }: BlogIndexPageProps) {
  const { locale } = await params;
  const blogs = await getBlogsAction();

  const t: Record<string, any> = {
    en: { sub: "Travel Blog", title: "Stories & Insights", desc: "Expert tips, cultural insights, and luxury travel secrets from our local destination managers.", cta: "Read Story" },
    es: { sub: "Blog de Viajes", title: "Historias e Ideas", desc: "Consejos de expertos, ideas culturales y secretos de viajes de lujo de nuestros asesores locales.", cta: "Leer Historia" },
    pt: { sub: "Blog de Viagens", title: "Histórias e Inspirações", desc: "Dicas de especialistas, insights culturais e segredos de viagem de luxo dos nossos consultores.", cta: "Ler História" }
  };
  const text = t[locale] || t.en;

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      
      {/* SECTION 1: Editorial Header Banner */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <img src="/images/varanasi_ghats_aarti.png" alt="Travel Blog" className="absolute inset-0 w-full h-full object-cover scale-100 animate-kenburns" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-royal/65 via-royal/35 to-royal/80" />
        <div className="relative z-10 text-center text-white space-y-4 px-6 mt-16 max-w-3xl">
          <span className="bg-gold/90 text-royal text-[9px] uppercase tracking-[0.25em] font-extrabold px-4 py-1.5 rounded-full inline-block">
            {text.sub}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black tracking-tight leading-none text-white">{text.title}</h1>
          <p className="text-white/85 max-w-xl mx-auto text-xs md:text-sm leading-relaxed font-light">{text.desc}</p>
        </div>
      </section>

      {/* SECTION 2: Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog: BlogData, i: number) => (
            <Reveal key={blog.slug} delay={i * 80}>
              <Link href={`/${locale}/blog/${blog.slug}`} className="group block h-full">
                <div className="bg-white border border-gold/10 rounded-2xl overflow-hidden shadow-sm flex flex-col h-full transition-transform duration-500 hover:-translate-y-2 hover:border-gold/25">
                  
                  <div className="h-52 overflow-hidden relative shrink-0">
                    <img src={blog.featuredImage} alt={blog.title[locale as "en"|"es"|"pt"] || blog.title.en} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-royal text-gold text-[8px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-gold/20">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between bg-white">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-wider text-foreground/40">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-gold" />{blog.readingTime} Min</span>
                        <span>{blog.createdAt}</span>
                      </div>
                      <h2 className="text-base font-serif font-bold text-royal leading-snug group-hover:text-gold transition-colors line-clamp-2">
                        {blog.title[locale as "en"|"es"|"pt"] || blog.title.en}
                      </h2>
                      <p className="text-xs text-foreground/50 leading-relaxed line-clamp-3 font-light">
                        {blog.excerpt[locale as "en"|"es"|"pt"] || blog.excerpt.en}
                      </p>
                    </div>
                    
                    <div className="pt-4 mt-4 border-t border-gold/10 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-forest group-hover:text-royal flex items-center gap-1.5 transition-colors">
                        <span>{text.cta}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

    </div>
  );
}
