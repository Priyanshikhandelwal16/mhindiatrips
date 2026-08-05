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
      <div className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img src={blog.featuredImage} alt={blog.title?.[locale as "en"|"es"|"pt"] || blog.title?.en} className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 text-center max-w-4xl px-6 space-y-4 text-white mt-16">
          <span className="badge-gold">{blog.category}</span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight mt-3">
            {blog.title?.[locale as "en"|"es"|"pt"] || blog.title?.en}
          </h1>
          <div className="flex justify-center items-center gap-6 text-xs text-white/70 pt-3">
            <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-gold" />{blog.author}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-gold" />{blog.readingTime} min read</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 py-16 space-y-10">
        <Link href={`/${locale}/blog`} className="text-xs font-semibold uppercase tracking-wider text-forest hover:text-gold flex items-center gap-1.5 w-fit transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>{locale === "es" ? "Volver al Blog" : locale === "pt" ? "Voltar ao Blog" : "Back to Blog"}</span>
        </Link>

        <article className="prose max-w-none space-y-6">
          <p className="text-base font-medium text-royal leading-relaxed">
            {blog.excerpt?.[locale as "en"|"es"|"pt"] || blog.excerpt?.en}
          </p>
          <div className="text-sm text-foreground/70 leading-relaxed whitespace-pre-line">
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
