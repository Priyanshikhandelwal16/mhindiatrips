import React from "react";
import Reveal from "@/components/home/Reveal";

interface GalleryPageProps {
  params: Promise<{ locale: string }>;
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { locale } = await params;

  const t: Record<string, any> = {
    en: { hero: "Gallery", heroSub: "Visual Stories", heroDesc: "A curated collection of moments from India's most incredible destinations." },
    es: { hero: "Galería", heroSub: "Historias Visuales", heroDesc: "Una colección curada de momentos de los destinos más increíbles de la India." },
    pt: { hero: "Galeria", heroSub: "Histórias Visuais", heroDesc: "Uma coleção curada de momentos dos destinos mais incríveis da Índia." },
  };

  const text = t[locale] || t.en;

  const images = [
    { src: "/images/taj_mahal_sunrise.png", alt: "Taj Mahal", span: "col-span-2 row-span-2" },
    { src: "/images/rajasthan_fort_sunset.png", alt: "Jaipur Palace", span: "col-span-1 row-span-1" },
    { src: "/images/kerala_backwaters_houseboat.png", alt: "Kerala Backwaters", span: "col-span-1 row-span-2" },
    { src: "/images/varanasi_ghats_aarti.png", alt: "Varanasi Ghats", span: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=600", alt: "Goa Beach", span: "col-span-1 row-span-1" },
    { src: "/images/luxury_palace_train.png", alt: "Luxury Palace Train", span: "col-span-1 row-span-1" },
    { src: "/images/ranthambore_tiger_safari.png", alt: "Ranthambore Tiger Safari", span: "col-span-2 row-span-1" },
    { src: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=600", alt: "Mumbai", span: "col-span-1 row-span-1" },
    { src: "/images/varanasi_ghats_aarti.png", alt: "Varanasi Ganga Aarti", span: "col-span-1 row-span-2" },
    { src: "/images/indian_cuisine_feast.png", alt: "Indian Cuisine Feast", span: "col-span-1 row-span-1" },
    { src: "/images/ranthambore_tiger_safari.png", alt: "Wildlife Tiger Safari", span: "col-span-2 row-span-1" },
    { src: "/images/rajasthan_fort_sunset.png", alt: "Rajasthan Fort", span: "col-span-1 row-span-1" },
  ];

  return (
    <div className="font-sans bg-background text-foreground">
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center overflow-hidden">
        <img src="/images/rajasthan_fort_sunset.png" alt="Gallery" className="absolute inset-0 w-full h-full object-cover animate-kenburns" />
        <div className="absolute inset-0 bg-royal/70" />
        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <span className="editorial-subheading block text-gold mb-4">{text.heroSub}</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{text.hero}</h1>
          <p className="text-base text-white/70">{text.heroDesc}</p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
            {images.map((img, i) => (
              <Reveal key={i} delay={i * 50} className={`${img.span} rounded-2xl overflow-hidden image-zoom-container border border-gold/10 hover:border-gold/25 transition-colors`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
