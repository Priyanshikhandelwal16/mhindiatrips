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
      sub: "Travel Blog", 
      title: "Stories & Insights", 
      desc: "Expert tips, cultural insights, and luxury travel secrets from our local destination managers.", 
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
      sub: "Blog de Viajes", 
      title: "Historias e Ideas", 
      desc: "Consejos de expertos, ideas culturales y secretos de viajes de lujo de nuestros asesores locales.", 
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
      sub: "Blog de Viagens", 
      title: "Histórias e Inspirações", 
      desc: "Dicas de especialistas, insights culturais e segredos de viagem de luxo dos nossos consultores.", 
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
      image: b.image || "/images/destination_fallback.jpg",
      title: getLocalizedValue(b.title, lang) || text.title,
      subtitle: b.category || text.sub,
      location: b.readTime || "India",
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
      objectPosition: "center 25%"
    });
  }

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      
      {/* SECTION 1: Hero Slider */}
      <PageHeroSlider locale={locale} slides={blogSlides} showBreadcrumb={`MH India Trips / ${text.sub}`} />

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
                <img src={featuredBlog.featuredImage} alt={getLocalizedValue(featuredBlog.title, 'en')} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-5 left-5 bg-royal text-gold text-[10px] uppercase font-bold tracking-wider px-4 py-2 rounded-full">
                  {featuredBlog.category}
                </span>
              </div>
              <div className="lg:col-span-6 p-8 md:p-16 flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-3 text-xs text-foreground/45 uppercase tracking-wider">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-gold" />{featuredBlog.readingTime} Min Read</span>
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

      {/* SECTION 3: Categories Select Bar */}
      {categoriesList.length > 0 && (
        <section className="bg-[#FAF8F5] border-y border-gold/15 py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6">
            <span className="text-xs uppercase tracking-wider font-bold text-royal">{text.categories}:</span>
            <div className="flex flex-wrap gap-2.5">
              <Link
                href={`/${locale}/blog`}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-300 ${
                  !activeCategory
                    ? "bg-gold text-royal border border-gold"
                    : "bg-white text-royal border border-gold/10 hover:border-gold/30"
                }`}
              >
                All Stories
              </Link>
              {categoriesList.map((cat: any) => (
                <Link
                  key={cat}
                  href={`/${locale}/blog?category=${encodeURIComponent(cat)}`}
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-300 ${
                    activeCategory.toLowerCase() === cat.toLowerCase()
                      ? "bg-gold text-royal border border-gold"
                      : "bg-white text-royal border border-gold/10 hover:border-gold/30"
                  }`}
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
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
                    <img src={blog.featuredImage} alt={getLocalizedValue(blog.title, locale)} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

      {/* SECTION 5: Popular Posts List */}
      <section className="bg-white border-t border-gold/15 py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          <div className="space-y-4 text-center">
            <h3 className="text-2xl font-bold text-royal">{text.popular}</h3>
            <div className="h-px w-20 bg-gold/25 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {blogs.slice(0, 3).map((blog: any, idx: number) => (
              <Link key={idx} href={`/${locale}/blog/${blog.slug}`} className="flex flex-col gap-4 group bg-[#FAF8F5] border border-gold/10 p-5 rounded-2xl shadow-sm hover:shadow-md transition">
                <div className="w-full h-44 overflow-hidden rounded-xl relative">
                  <img src={blog.featuredImage} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="space-y-2 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] uppercase font-bold text-gold block tracking-wider mb-1">{blog.category}</span>
                    <h4 className="text-sm font-bold text-royal group-hover:text-gold transition-colors line-clamp-2 leading-snug">
                      {getLocalizedValue(blog.title, locale)}
                    </h4>
                  </div>
                  <div className="flex items-center gap-1.5 text-[9px] text-royal/40 pt-2 border-t border-gold/5 mt-2">
                    <Clock className="w-3 h-3 text-gold" />
                    <span>{blog.readingTime} Min Read</span>
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
