import React from "react";
import { notFound } from "next/navigation";
import { getBlogBySlugAction } from "@/app/actions/queries";
import InquiryForm from "@/components/common/InquiryForm";
import { Clock, ArrowLeft, User } from "lucide-react";
import Link from "next/link";

interface BlogDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { locale, slug } = await params;
  const blog = await getBlogBySlugAction(slug);
  if (!blog) notFound();

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      {/* Hero */}
      <section className="relative h-[75vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img src={blog.featuredImage} alt={blog.title?.[locale as "en"|"es"|"pt"] || blog.title?.en} className="absolute inset-0 w-full h-full object-cover animate-kenburns" loading="eager" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center max-w-5xl px-6 space-y-6 text-white mt-20">
          <span className="bg-gold text-royal text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full inline-block">{blog.category}</span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-3">
            {blog.title?.[locale as "en"|"es"|"pt"] || blog.title?.en}
          </h1>
          <div className="flex justify-center items-center gap-6 text-sm text-white/80 pt-3">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-gold" />{blog.author}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-gold" />{blog.readingTime} min read</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 py-20 space-y-10">
        <Link href={`/${locale}/blog`} className="text-[10px] font-bold uppercase tracking-wider text-forest hover:text-gold flex items-center gap-1.5 w-fit transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>{locale === "es" ? "Volver al Blog" : locale === "pt" ? "Voltar ao Blog" : "Back to Blog"}</span>
        </Link>

        <article className="prose max-w-none space-y-6">
          <p className="text-base font-serif font-bold text-royal leading-relaxed pl-4 border-l-2 border-gold italic">
            {blog.excerpt?.[locale as "en"|"es"|"pt"] || blog.excerpt?.en}
          </p>
          <div className="text-sm text-foreground/60 leading-relaxed whitespace-pre-line font-light">
            {blog.content?.[locale as "en"|"es"|"pt"] || blog.content?.en}
          </div>
        </article>

        <div className="pt-12 border-t border-sand">
          <InquiryForm locale={locale} />
        </div>
      </section>
    </div>
  );
}
