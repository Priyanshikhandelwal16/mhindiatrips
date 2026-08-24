import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogBySlugAction, getBlogsAction } from "@/app/actions/queries";
import { formatRichText } from "@/lib/utils";
import Reveal from "@/components/home/Reveal";
import { 
  Clock, ArrowLeft, User, Calendar, ChevronRight 
} from "lucide-react";

interface BlogDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { locale, slug } = await params;
  const blog = await getBlogBySlugAction(slug);
  if (!blog) notFound();

  const lang = (locale === "es" || locale === "pt") ? locale : "en";

  // Get related blogs (same category)
  const allBlogs = await getBlogsAction();
  const related = allBlogs
    .filter((b: any) => b.slug !== slug && b.category === blog.category)
    .slice(0, 3);

  const t = {
    en: {
      back: "Back to Blog",
      readTime: "min read",
      publishedOn: "Published",
      category: "Category",
      tags: "Tags",
      share: "Share This Story",
      authorBio: "Travel writer and India specialist with over 8 years of experience crafting luxury travel narratives for discerning global travelers.",
      relatedTitle: "Continue Reading",
      relatedDesc: "More stories you might enjoy",
      ctaTitle: "Inspired by This Story?",
      ctaDesc: "Let our travel specialists turn your inspiration into a personalized journey.",
      ctaBtn: "Plan My Trip",
      tableOfContents: "In This Article",
    },
    es: {
      back: "Volver al Blog",
      readTime: "min de lectura",
      publishedOn: "Publicado",
      category: "Categoría",
      tags: "Etiquetas",
      share: "Compartir Esta Historia",
      authorBio: "Escritora de viajes y especialista en la India con más de 8 años de experiencia en narrativas de viajes de lujo.",
      relatedTitle: "Continuar Leyendo",
      relatedDesc: "Más historias que podrían interesarle",
      ctaTitle: "¿Inspirado por Esta Historia?",
      ctaDesc: "Deje que nuestros especialistas conviertan su inspiración en un viaje personalizado.",
      ctaBtn: "Planear Mi Viaje",
      tableOfContents: "En Este Artículo",
    },
    pt: {
      back: "Voltar ao Blog",
      readTime: "min de leitura",
      publishedOn: "Publicado",
      category: "Categoria",
      tags: "Tags",
      share: "Compartilhar Esta História",
      authorBio: "Escritora de viagens e especialista em Índia com mais de 8 anos de experiência em narrativas de viagens de luxo.",
      relatedTitle: "Continue Lendo",
      relatedDesc: "Mais histórias que você pode gostar",
      ctaTitle: "Inspirado por Esta História?",
      ctaDesc: "Deixe nossos especialistas transformar sua inspiração em uma viagem personalizada.",
      ctaBtn: "Planejar Minha Viagem",
      tableOfContents: "Neste Artigo",
    }
  };

  const text = t[locale as keyof typeof t] || t.en;

  const getLocalizedValue = (field: any, l: string): string => {
    if (!field) return "";
    if (typeof field === "object") {
      return field[l] || field.en || "";
    }
    return String(field);
  };

  const blogTitle = getLocalizedValue(blog.title, lang);
  const blogExcerpt = getLocalizedValue(blog.excerpt, lang);
  const rawContent = getLocalizedValue(blog.content, lang);
  const blogContent = formatRichText(rawContent);

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">

      {/* Hero */}
      <section className="relative bg-[#0A2A1E] text-white pt-16 pb-12 flex items-end overflow-hidden w-full">
        
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-16 space-y-5">
          {/* Back */}
          <Link href={`/${locale}/blog`} className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-xs font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>{text.back}</span>
          </Link>

          {/* Category badge */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-[#C3AB85] text-[#0B0D0C] text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              {blog.category}
            </span>
            <span className="text-white/50 text-xs flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {blog.readingTime} {text.readTime}
            </span>
            <span className="text-white/50 text-xs flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {blog.createdAt}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
            {blogTitle}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3 pt-2">
            <div className="w-10 h-10 rounded-full bg-[#C3AB85]/20 flex items-center justify-center">
              <User className="w-5 h-5 text-[#C3AB85]" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">{blog.author}</p>
              <p className="text-[10px] text-white/40 uppercase tracking-wider">Travel Writer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Main Content */}
          <article className="lg:col-span-8 space-y-10">
            
            {/* Excerpt / Lead */}
            <Reveal>
              <blockquote className="text-lg md:text-xl font-medium text-[#0B0D0C]/80 leading-relaxed pl-6 border-l-4 border-[#C3AB85] italic">
                {blogExcerpt}
              </blockquote>
            </Reveal>

            {/* Content */}
            <Reveal delay={100}>
              <div className="prose prose-lg max-w-none space-y-6">
                <div 
                  dangerouslySetInnerHTML={{ __html: blogContent }} 
                  className="blog-content-rich"
                />
              </div>
            </Reveal>



            {/* Author Bio Card */}
            <Reveal delay={250}>
              <div className="bg-white border border-[#C3AB85]/15 p-8 flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-[#C3AB85]/10 flex items-center justify-center shrink-0">
                  <User className="w-7 h-7 text-[#C3AB85]" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-[#0B0D0C]">{blog.author}</h4>
                  <p className="text-xs text-[#1B1B1B]/50 font-light leading-relaxed">
                    {text.authorBio}
                  </p>
                </div>
              </div>
            </Reveal>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24 lg:self-start">
            


            {/* CTA Card */}
            <div className="bg-[#0B0D0C] p-6 space-y-4 text-white">
              <h4 className="text-base font-bold">{text.ctaTitle}</h4>
              <p className="text-xs text-white/50 font-light leading-relaxed">{text.ctaDesc}</p>
              <Link href={`/${locale}/contact`} className="block w-full bg-[#C3AB85] hover:bg-[#D5C49A] text-[#0B0D0C] text-[10px] font-bold uppercase tracking-widest px-5 py-3 rounded-full text-center transition-colors">
                {text.ctaBtn}
              </Link>
            </div>

            {/* Category */}
            <div className="bg-white border border-[#C3AB85]/15 p-6 space-y-3">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#1B1B1B]/40">{text.category}</span>
              <Link href={`/${locale}/blog`} className="block text-sm font-bold text-[#0B0D0C] hover:text-[#C3AB85] transition-colors">
                {blog.category}
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="border-t border-[#C3AB85]/10 py-24">
          <div className="max-w-7xl mx-auto px-6 space-y-12">
            <Reveal className="text-center space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B0D0C]">{text.relatedTitle}</h2>
              <p className="text-sm text-[#1B1B1B]/50 font-light">{text.relatedDesc}</p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((post: any, i: number) => (
                <Reveal key={post.slug} delay={i * 100}>
                  <Link href={`/${locale}/blog/${post.slug}`} className="group block perspective-1000">
                    <div className="card-3d bg-white border border-[#C3AB85]/10 overflow-hidden h-full flex flex-col">
                      <div className="h-48 overflow-hidden relative">
                        <img 
                          src={post.featuredImage} 
                          alt={post.title?.[lang] || post.title?.en} 
                          loading="lazy" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        />
                        <span className="absolute top-3 left-3 bg-[#0B0D0C]/80 text-[#C3AB85] text-[8px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <div className="p-5 space-y-2 flex-grow flex flex-col justify-between">
                        <div className="space-y-2">
                          <h3 className="font-bold text-[#0B0D0C] group-hover:text-[#C3AB85] transition-colors line-clamp-2 leading-snug">
                            {post.title?.[lang] || post.title?.en}
                          </h3>
                          <p className="text-xs text-[#1B1B1B]/50 line-clamp-2 font-light">
                            {post.excerpt?.[lang] || post.excerpt?.en}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 pt-3 text-[10px] text-[#1B1B1B]/40">
                          <Clock className="w-3 h-3" />
                          <span>{post.readingTime} {text.readTime}</span>
                          <span className="ml-auto">
                            <ChevronRight className="w-3.5 h-3.5 text-[#C3AB85] group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
