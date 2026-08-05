import React from "react";
import Link from "next/link";
import { getBlogsAction } from "@/app/actions/queries";
import { BlogData } from "@/data/mockData";
import { Clock, ArrowRight } from "lucide-react";

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
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <img src="/images/varanasi.jpg" alt="Travel Blog" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 text-center text-white space-y-5 px-6 mt-16">
          <span className="editorial-subheading block text-gold">{text.sub}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">{text.title}</h1>
          <p className="text-white/75 max-w-xl mx-auto text-[15px] leading-relaxed">{text.desc}</p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog: BlogData) => (
            <Link key={blog.slug} href={`/${locale}/blog/${blog.slug}`} className="group block">
              <div className="card-elevated overflow-hidden h-full flex flex-col">
                <div className="h-52 overflow-hidden relative shrink-0">
                  <img src={blog.featuredImage} alt={blog.title[locale as "en"|"es"|"pt"] || blog.title.en} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-4 left-4">
                    <span className="badge-forest">{blog.category}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-foreground/45">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{blog.readingTime} min</span>
                      <span>{blog.createdAt}</span>
                    </div>
                    <h2 className="text-lg font-serif font-bold text-royal leading-snug group-hover:text-gold transition-colors line-clamp-2">
                      {blog.title[locale as "en"|"es"|"pt"] || blog.title.en}
                    </h2>
                    <p className="text-xs text-foreground/60 leading-relaxed line-clamp-3">
                      {blog.excerpt[locale as "en"|"es"|"pt"] || blog.excerpt.en}
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
    </div>
  );
}
