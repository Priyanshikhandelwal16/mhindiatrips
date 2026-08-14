import React from "react";
import Link from "next/link";
import { getBlogsAction } from "@/app/actions/queries";
import { BlogData } from "@/data/mockData";
import { Clock, ArrowRight, BookOpen, Compass, Sparkles, Send } from "lucide-react";
import Reveal from "@/components/home/Reveal";

interface BlogIndexPageProps {
  params: Promise<{ locale: string }>;
}

export default async function BlogIndexPage({ params }: BlogIndexPageProps) {
  const { locale } = await params;
  const blogs = await getBlogsAction();

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
  const text = t[locale] || t.en;

  const featuredBlog = blogs[0];
  const remainingBlogs = blogs.slice(1);
  const categoriesList = Array.from(new Set(blogs.map((b: any) => b.category))).filter(Boolean);

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      
      {/* SECTION 1: Cinematic Hero Banner (Adjusted height & padding) */}
      <section className="relative h-[78vh] min-h-[540px] flex items-center justify-center overflow-hidden pt-28 md:pt-36">
        <img src="/images/varanasi_ghats_aarti.png" alt="Travel Blog" className="absolute inset-0 w-full h-full object-cover scale-100 animate-kenburns" loading="eager" />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 text-center text-white space-y-6 px-6 max-w-4xl">
          <span className="bg-gold text-royal text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full inline-block">
            {text.sub}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white">{text.title}</h1>
          <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto font-light leading-relaxed">{text.desc}</p>
        </div>
      </section>

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
                <img src={featuredBlog.featuredImage} alt={featuredBlog.title.en} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
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
                  {featuredBlog.title[locale as "en"|"es"|"pt"] || featuredBlog.title.en}
                </h2>
                <p className="text-sm md:text-base text-foreground/60 leading-relaxed font-light">
                  {featuredBlog.excerpt[locale as "en"|"es"|"pt"] || featuredBlog.excerpt.en}
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
            <div className="flex flex-wrap gap-3">
              {categoriesList.map((cat: any) => (
                <span key={cat} className="px-5 py-2.5 bg-white border border-gold/10 rounded-full text-xs font-bold text-royal uppercase tracking-wider shadow-sm">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4: Latest Diaries Grid (With large, premium cards) */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-12">
        <Reveal className="space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold block">{text.latest}</span>
          <div className="h-px w-16 bg-gold/25" />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {remainingBlogs.map((blog: BlogData, i: number) => (
            <Reveal key={blog.slug} delay={i * 80}>
              <Link href={`/${locale}/blog/${blog.slug}`} className="group block h-full">
                <div className="bg-white border border-gold/10 overflow-hidden shadow-lg flex flex-col h-full transition-all duration-500 hover:-translate-y-3 hover:border-gold/25 hover:shadow-2xl">
                  <div className="h-60 overflow-hidden relative shrink-0">
                    <img src={blog.featuredImage} alt={blog.title[locale as "en"|"es"|"pt"] || blog.title.en} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
                        {blog.title[locale as "en"|"es"|"pt"] || blog.title.en}
                      </h2>
                      <p className="text-sm text-foreground/50 leading-relaxed line-clamp-3 font-light">
                        {blog.excerpt[locale as "en"|"es"|"pt"] || blog.excerpt.en}
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
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold text-royal">{text.popular}</h3>
            <div className="h-px w-20 bg-gold/25" />
            <div className="space-y-8">
              {blogs.slice(0, 3).map((blog: any, idx: number) => (
                <Link key={idx} href={`/${locale}/blog/${blog.slug}`} className="flex gap-6 group">
                  <div className="w-24 h-24 overflow-hidden shrink-0">
                    <img src={blog.featuredImage} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-gold">{blog.category}</span>
                    <h4 className="text-base md:text-lg font-bold text-royal group-hover:text-gold transition-colors line-clamp-2">
                      {blog.title[locale as "en"|"es"|"pt"] || blog.title.en}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* SECTION 6: Private Newsletter Box */}
          <div className="bg-[#FAF8F5] border border-gold/20 p-10 space-y-6 shadow-md h-fit">
            <span className="text-xs uppercase tracking-wider font-bold text-gold block">{text.newsletterTitle}</span>
            <h3 className="text-xl font-bold text-royal">{text.newsletterTitle}</h3>
            <p className="text-xs text-foreground/50 leading-relaxed font-light">{text.newsletterDesc}</p>
            <form className="space-y-4">
              <input type="email" placeholder="Email Address" className="w-full bg-white border border-gold/10 focus:border-gold px-4 py-3 text-xs outline-none rounded-full" required />
              <button type="submit" className="w-full bg-gold hover:bg-gold-light text-royal text-xs font-bold uppercase tracking-widest py-3 rounded-full transition-transform hover:scale-[1.02] flex items-center justify-center gap-2">
                <Send className="w-3.5 h-3.5" />
                <span>{text.newsletterBtn}</span>
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
