import React from "react";
import Link from "next/link";
import { getBlogsAction, getPageByIdAction } from "@/app/actions/queries";
import { BlogData } from "@/data/mockData";
import { Clock, ArrowRight, Sparkles } from "lucide-react";
import Reveal from "@/components/home/Reveal";
import PageHeroSlider from "@/components/common/PageHeroSlider";

interface BlogIndexPageProps {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<{ category?: string }>;
}

export default async function BlogIndexPage({ params, searchParams }: BlogIndexPageProps) {
  const { locale } = await params;
  const resolvedSearchParams = await searchParams;
  const activeCategory = resolvedSearchParams?.category || "";
  const blogs = await getBlogsAction();
  const pageData = await getPageByIdAction("blog");

  const t: Record<string, any> = {
    en: { 
      sub: "TRAVEL BLOG & GUIDES", 
      title: "Travel Blog - Stories & Insights", 
      desc: "Expert tips, cultural insights, and travel guides from our local destination managers.", 
      cta: "Read Story",
      featured: "Featured Spotlight",
      categories: "Browse Categories",
      latest: "Latest Diaries",
      popular: "Popular Stories",
      newsletterTitle: "Private Dispatch",
      newsletterDesc: "Receive curated destination stories and private travel tips directly in your inbox.",
      newsletterBtn: "Subscribe"
    },
    es: { 
      sub: "BLOG DE VIAJES Y GUÍAS", 
      title: "Blog de Viajes - Historias e Ideas", 
      desc: "Consejos de expertos, ideas culturales y secretos de viajes de nuestros asesores locales.", 
      cta: "Leer Historia",
      featured: "Destacado Especial",
      categories: "Explorar Categorías",
      latest: "Últimos Diarios",
      popular: "Historias Populares",
      newsletterTitle: "Despacho Privado",
      newsletterDesc: "Reciba historias de destinos seleccionados y consejos de viaje privados directamente en su bandeja de entrada.",
      newsletterBtn: "Suscribirse"
    },
    pt: { 
      sub: "BLOG DE VIAGENS E GUIAS", 
      title: "Blog de Viagens - Histórias e Inspirações", 
      desc: "Dicas de especialistas, insights culturais e segredos de viagem dos nossos consultores.", 
      cta: "Ler História",
      featured: "Destaque Especial",
      categories: "Navegar Categorias",
      latest: "Últimos Diários",
      popular: "Histórias Populares",
      newsletterTitle: "Boletim Privado",
      newsletterDesc: "Receba histórias de destinos selecionadas e dicas de viagem privadas diretamente no seu e-mail.",
      newsletterBtn: "Inscrever"
    }
  };

  const dbContent = pageData?.content || {};
  const mergedT: Record<string, any> = {};
  for (const lang of ["en", "es", "pt"]) {
    mergedT[lang] = { ...t[lang] };
    if (dbContent.heroTitle?.[lang]) mergedT[lang].title = dbContent.heroTitle[lang];
    if (dbContent.heroSubtitle?.[lang]) mergedT[lang].desc = dbContent.heroSubtitle[lang];
  }
  const text = mergedT[locale] || mergedT.en;
  const lang = (locale === "es" || locale === "pt") ? locale : "en";

  const getLocalizedValue = (field: any, l: string): string => {
    if (!field) return "";
    if (typeof field === "object") {
      return field[l] || field.en || "";
    }
    return String(field);
  };

  const categoriesList = Array.from(new Set(blogs.map((b: any) => b.category))).filter(Boolean);
  const featuredBlog = activeCategory ? null : blogs[0];
  const displayBlogs = activeCategory
    ? blogs.filter((b: any) => (b.category || "").toLowerCase() === activeCategory.toLowerCase())
    : blogs.slice(1);

  // Build blog slides
  const blogSlides = blogs.slice(0, 5).map((b: any) => {
    const rawDesc = getLocalizedValue(b.excerpt, lang) || text.desc;
    const cleanDesc = rawDesc.length > 90 ? rawDesc.slice(0, 87) + "..." : rawDesc;

    return {
      image: b.featuredImage || b.image || "/images/destination_fallback.jpg",
      title: getLocalizedValue(b.title, lang) || text.title,
      subtitle: b.category || text.sub,
      location: b.readTime || b.readingTime ? `${b.readingTime || 5} Min Read` : "India",
      description: cleanDesc,
      objectPosition: "center 25%",
      ctaText: text.cta,
      ctaLink: `/blog/${b.slug}`
    };
  });

  if (blogSlides.length === 0) {
    blogSlides.push({
      image: "/images/rajasthan_fort_sunset.png",
      title: text.title,
      subtitle: text.sub,
      location: "India",
      description: text.desc,
      objectPosition: "center 25%",
      ctaText: text.cta,
      ctaLink: "/blog"
    });
  }

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      
      {/* SECTION 1: Hero Slider */}
      <PageHeroSlider 
        locale={locale} 
        overrideTitle={text.title} 
        overrideSubtitle={text.sub} 
        overrideDesc={text.desc} 
      />

      {/* SECTION 2: Featured Article Spotlight */}
      {featuredBlog && (
        <section className="max-w-7xl mx-auto px-6 py-24">
          <Reveal className="space-y-6 mb-10">
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-gold" />
              <span>{text.featured}</span>
            </span>
            <div className="h-px w-20 bg-gold/25" />
          </Reveal>
          <Reveal>
            <div className="bg-white border border-gold/10 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0 relative">
              <div className="lg:col-span-6 h-[350px] lg:h-[500px] relative overflow-hidden">
                <img src={featuredBlog.featuredImage || featuredBlog.image || "/images/destination_fallback.jpg"} alt={getLocalizedValue(featuredBlog.title, 'en')} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-5 left-5 bg-royal text-gold text-[10px] uppercase font-bold tracking-wider px-4 py-2 rounded-full">
                  {featuredBlog.category}
                </span>
              </div>
              <div className="lg:col-span-6 p-8 md:p-16 flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-3 text-xs text-foreground/45 uppercase tracking-wider">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-gold" />{featuredBlog.readingTime || 5} Min Read</span>
                  <span>&bull;</span>
                  <span>{featuredBlog.createdAt}</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-royal leading-tight">
                  {getLocalizedValue(featuredBlog.title, locale)}
                </h2>
                <p className="text-sm md:text-base text-foreground/60 leading-relaxed font-light">
                  {getLocalizedValue(featuredBlog.excerpt, locale)}
                </p>
                <div className="pt-4">
                  <Link href={`/${locale}/blog/${featuredBlog.slug}`} className="bg-gold hover:bg-gold-light text-royal text-base font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-transform hover:scale-105 inline-flex items-center gap-2 shadow-md">
                    <span>{text.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      )}



      {/* SECTION 4: Latest Diaries Grid (With large, premium cards) */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-12">
        <Reveal className="space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold block">
            {activeCategory ? `Diaries in ${activeCategory}` : text.latest}
          </span>
          <div className="h-px w-16 bg-gold/25" />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayBlogs.map((blog: BlogData, i: number) => (
            <Reveal key={blog.slug} delay={i * 80}>
              <Link href={`/${locale}/blog/${blog.slug}`} className="group block h-full">
                <div className="bg-white border border-gold/10 overflow-hidden shadow-lg flex flex-col h-full transition-all duration-500 hover:-translate-y-3 hover:border-gold/25 hover:shadow-2xl">
                  <div className="h-60 overflow-hidden relative shrink-0">
                    <img src={blog.featuredImage || blog.image || "/images/destination_fallback.jpg"} alt={getLocalizedValue(blog.title, locale)} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute top-5 left-5 bg-royal text-gold text-[9px] uppercase font-bold tracking-wider px-3.5 py-1.5 rounded-full">
                      {blog.category}
                    </span>
                  </div>
                  <div className="p-8 flex flex-col flex-grow justify-between bg-white">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-wider text-foreground/40">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-gold" />{blog.readingTime} Min</span>
                        <span>{blog.createdAt}</span>
                      </div>
                      <h2 className="text-xl font-bold text-royal leading-snug group-hover:text-gold transition-colors line-clamp-2">
                        {getLocalizedValue(blog.title, locale)}
                      </h2>
                      <p className="text-sm text-foreground/50 leading-relaxed line-clamp-3 font-light">
                        {getLocalizedValue(blog.excerpt, locale)}
                      </p>
                    </div>
                    <div className="pt-4 mt-6 border-t border-gold/10 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-forest group-hover:text-royal flex items-center gap-1.5 transition-colors">
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



      {/* SECTION 5: Popular Posts List (Large Luxury Cards) */}
      <section className="bg-white border-t border-gold/15 py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <div className="space-y-3 text-center">
            <span className="text-gold text-[10px] font-bold uppercase tracking-[0.25em]">MH India Trips</span>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-royal">{text.popular}</h3>
            <div className="h-0.5 w-16 bg-gold/40 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {blogs.slice(0, 3).map((blog: any, idx: number) => (
              <Link key={idx} href={`/${locale}/blog/${blog.slug}`} className="group block bg-[#FAF8F5] border border-gold/20 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between h-full">
                <div className="w-full h-64 overflow-hidden relative shrink-0">
                  <img src={blog.featuredImage || blog.image || "/images/destination_fallback.jpg"} alt={getLocalizedValue(blog.title, locale)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute top-4 left-4 bg-royal text-gold text-[9px] uppercase font-bold tracking-wider px-3.5 py-1.5 rounded-full border border-gold/30 shadow-md">
                    {blog.category}
                  </span>
                </div>
                <div className="p-7 space-y-4 flex-grow flex flex-col justify-between bg-white">
                  <div className="space-y-3">
                    <h4 className="text-lg md:text-xl font-serif font-bold text-royal group-hover:text-gold transition-colors leading-snug line-clamp-2">
                      {getLocalizedValue(blog.title, locale)}
                    </h4>
                    <p className="text-xs sm:text-sm text-foreground/60 font-light line-clamp-3 leading-relaxed">
                      {getLocalizedValue(blog.excerpt, locale)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gold/15 text-xs text-royal/60">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      {blog.readingTime} Min Read
                    </span>
                    <span className="text-gold font-bold uppercase tracking-wider text-[10px] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      {text.cta} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

