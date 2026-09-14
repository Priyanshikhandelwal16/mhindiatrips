import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogBySlugAction, getBlogsAction, getTourPackagesAction } from "@/app/actions/queries";
import { formatRichText } from "@/lib/utils";
import Reveal from "@/components/home/Reveal";
import { 
  Clock, ArrowLeft, User, Calendar, ChevronRight, Sparkles 
} from "lucide-react";
import PageHeroSlider from "@/components/common/PageHeroSlider";

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

  // Get related tour packages (matched by category keyword in title/tagline)
  const allPackages = await getTourPackagesAction();
  const categoryKeywords = (blog.category || "").toLowerCase().split(/[\s&/]+/).filter((k: string) => k.length > 3);
  const relatedPackages = allPackages
    .filter((p: any) => {
      const pTitle = (p.title?.en || p.title || "").toLowerCase();
      const pTagline = (p.tagline?.en || p.tagline || "").toLowerCase();
      return categoryKeywords.some((kw: string) => pTitle.includes(kw) || pTagline.includes(kw));
    })
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
      packagesTitle: "Explore Related Packages",
      packagesDesc: "Handcrafted journeys inspired by this article",
      packagesBtn: "View Package",
      packagesDuration: "days",
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
      ctaBtn: "Planificar Mi Viaje",
      tableOfContents: "En Este Artículo",
      packagesTitle: "Explorar Paquetes Relacionados",
      packagesDesc: "Viajes artesanales inspirados en este artículo",
      packagesBtn: "Ver Paquete",
      packagesDuration: "días",
    },
    pt: {
      back: "Voltar ao Blog",
      readTime: "min de leitura",
      publishedOn: "Publicado",
      category: "Categoria",
      tags: "Tags",
      share: "Compartilhar Esta História",
      authorBio: "Escritora de viagens e especialista na Índia com mais de 8 anos de experiência em narrativas de viagens de luxo.",
      relatedTitle: "Continue Lendo",
      relatedDesc: "Mais histórias que você pode gostar",
      ctaTitle: "Inspirado por Esta História?",
      ctaDesc: "Deixe nossos especialistas transformarem sua inspiração em uma viagem personalizada.",
      ctaBtn: "Planejar Minha Viagem",
      tableOfContents: "Neste Artigo",
      packagesTitle: "Explorar Pacotes Relacionados",
      packagesDesc: "Viagens inspiradas neste artigo",
      packagesBtn: "Ver Pacote",
      packagesDuration: "dias",
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

      {/* Hero Banner */}
      <section className="relative bg-[#0A2A1E] text-white pt-14 pb-14 overflow-hidden border-b border-[#C5A862]/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#134432] via-[#0A2A1E] to-[#04140D] opacity-95 pointer-events-none" />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 space-y-4">
          <Link href={`/${locale}/blog`} className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-xs font-medium transition-colors">
            <ArrowLeft className="w-4 h-4 text-[#C5A862]" />
            <span>{text.back}</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-[#C5A862] text-[#0A2A1E] text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              {blog.category}
            </span>
            <span className="text-white/60 text-xs flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C5A862]" />
              {blog.readingTime} {text.readTime}
            </span>
            <span className="text-white/60 text-xs flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#C5A862]" />
              {blog.createdAt}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold font-serif text-white leading-tight">
            {blogTitle}
          </h1>

          <div className="flex items-center gap-3 pt-2">
            <div className="w-9 h-9 rounded-full bg-[#C5A862]/20 border border-[#C5A862]/40 flex items-center justify-center">
              <User className="w-4 h-4 text-[#C5A862]" />
            </div>
            <div>
              <p className="text-xs font-medium text-white">{blog.author}</p>
              <p className="text-[9px] text-white/50 uppercase tracking-wider">Travel Writer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Main Content */}
          <article className="lg:col-span-8 space-y-10">
            
            {/* Excerpt / Lead Quote */}
            <Reveal>
              <div className="bg-white p-8 rounded-3xl border-l-4 border-[#C5A862] border-t border-r border-b border-[#C5A862]/20 shadow-lg space-y-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C5A862] block">Article Summary</span>
                <p className="text-base md:text-lg font-serif italic text-[#0A2A1E] leading-relaxed">
                  &ldquo;{blogExcerpt}&rdquo;
                </p>
              </div>
            </Reveal>

            {/* Key Itinerary & Travel Highlights Card */}
            <Reveal delay={50}>
              <div className="bg-[#0A2A1E] text-white p-8 rounded-3xl border-2 border-[#C5A862] shadow-xl space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#C5A862]" />
                  <h3 className="text-xl font-serif font-bold text-white">Key Takeaways & Travel Highlights</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-white/90">
                  <div className="flex items-center gap-2 bg-white/10 p-3 rounded-xl border border-white/15">
                    <span className="text-[#C5A862] font-bold">📍</span>
                    <span><strong>Destination:</strong> {blog.category || "India Travel"}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 p-3 rounded-xl border border-white/15">
                    <span className="text-[#C5A862] font-bold">⏱️</span>
                    <span><strong>Read Time:</strong> {blog.readingTime || 7} Minutes</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 p-3 rounded-xl border border-white/15">
                    <span className="text-[#C5A862] font-bold">💎</span>
                    <span><strong>Travel Style:</strong> Private Luxury & Heritage</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 p-3 rounded-xl border border-white/15">
                    <span className="text-[#C5A862] font-bold">✨</span>
                    <span><strong>Guide:</strong> Handcrafted Local Insights</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Main Rich Content */}
            <Reveal delay={100}>
              <div className="prose prose-lg max-w-none space-y-6">
                <div 
                  dangerouslySetInnerHTML={{ __html: blogContent }} 
                  className="blog-content-rich"
                />
              </div>
            </Reveal>

            {/* Visual Photo Gallery if available */}
            {blog.gallery && blog.gallery.length > 0 && (
              <Reveal delay={150}>
                <div className="space-y-4 pt-6 border-t border-[#C5A862]/20">
                  <h3 className="text-xl font-serif font-bold text-[#0A2A1E]">Photo Gallery & Locations</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {blog.gallery.map((gImg: string, gIdx: number) => (
                      <div key={gIdx} className="h-52 rounded-2xl overflow-hidden border border-[#C5A862]/20 shadow-md">
                        <img src={gImg} alt={`Gallery ${gIdx + 1}`} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {/* Author Bio Card */}
            <Reveal delay={250}>
              <div className="bg-white border border-[#C5A862]/30 p-8 rounded-3xl shadow-md flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-[#0A2A1E] text-[#C5A862] flex items-center justify-center shrink-0 border-2 border-[#C5A862]">
                  <User className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-[#0A2A1E] text-lg">{blog.author}</h4>
                  <span className="text-[10px] uppercase font-bold text-[#C5A862] tracking-wider block">Senior Travel Specialist & Storyteller</span>
                  <p className="text-xs text-[#1B1B1B]/60 font-light leading-relaxed pt-1">
                    {text.authorBio}
                  </p>
                </div>
              </div>
            </Reveal>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24 lg:self-start">
            
            {/* Luxury Concierge CTA Card */}
            <div className="bg-[#0A2A1E] p-7 rounded-3xl border-2 border-[#C5A862] shadow-xl text-white space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-[#C5A862]/20 flex items-center justify-center text-[#C5A862]">
                <Sparkles className="w-5 h-5 text-[#C5A862]" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-lg font-serif font-bold text-white leading-snug">{text.ctaTitle}</h4>
                <p className="text-xs text-white/75 font-light leading-relaxed">{text.ctaDesc}</p>
              </div>
              <Link href={`/${locale}/contact`} className="block w-full bg-[#C5A862] hover:bg-[#D8BE83] text-[#0A2A1E] text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full text-center transition-all shadow-md hover:scale-105">
                {text.ctaBtn}
              </Link>
            </div>

            {/* Category Card */}
            <div className="bg-white border border-[#C5A862]/30 p-7 rounded-3xl shadow-md space-y-3">
              <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#C5A862] block">{text.category}</span>
              <Link href={`/${locale}/blog`} className="block text-base font-serif font-bold text-[#0A2A1E] hover:text-[#C5A862] transition-colors">
                {blog.category}
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Packages */}
      {relatedPackages.length > 0 && (
        <section className="bg-[#0A2A1E] py-24">
          <div className="max-w-7xl mx-auto px-6 space-y-12">
            <Reveal className="text-center space-y-3">
              <span className="text-[#C3AB85] text-[10px] font-bold uppercase tracking-[0.25em]">MH India Trips</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">{text.packagesTitle}</h2>
              <p className="text-sm text-white/50 font-light">{text.packagesDesc}</p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPackages.map((pkg: any, i: number) => (
                <Reveal key={pkg.slug} delay={i * 100}>
                  <Link href={`/${locale}/packages/${pkg.slug}`} className="group block h-full">
                    <div className="bg-white/5 border border-white/10 overflow-hidden h-full flex flex-col hover:border-[#C3AB85]/40 transition-colors duration-300">
                      <div className="h-52 overflow-hidden relative">
                        <img
                          src={pkg.heroImage || pkg.image || "/images/taj_mahal_sunrise.png"}
                          alt={pkg.title?.[lang] || pkg.title?.en || pkg.title || ""}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A1E]/80 to-transparent" />
                        {pkg.duration && (
                          <span className="absolute bottom-3 left-3 bg-[#C3AB85] text-[#0B0D0C] text-[9px] font-bold uppercase tracking-wider px-2.5 py-1">
                            {pkg.duration} {text.packagesDuration}
                          </span>
                        )}
                      </div>
                      <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <h3 className="font-bold text-white group-hover:text-[#C3AB85] transition-colors leading-snug line-clamp-2">
                            {pkg.title?.[lang] || pkg.title?.en || pkg.title || ""}
                          </h3>
                          <p className="text-xs text-white/50 font-light line-clamp-2 leading-relaxed">
                            {pkg.tagline?.[lang] || pkg.tagline?.en || pkg.tagline || ""}
                          </p>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-white/10">
                          {pkg.price && (
                            <span className="text-[#C3AB85] text-sm font-bold">
                              {typeof pkg.price === "object" ? (pkg.price[lang] || pkg.price.en) : pkg.price}
                            </span>
                          )}
                          <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 group-hover:text-[#C3AB85] transition-colors ml-auto flex items-center gap-1">
                            {text.packagesBtn} <ChevronRight className="w-3 h-3" />
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
                          src={post.featuredImage || post.image || "/images/destination_fallback.jpg"} 
                          alt={post.title?.[lang] || post.title?.en || post.title} 
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
