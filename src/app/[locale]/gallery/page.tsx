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
    { src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800", alt: "Taj Mahal", span: "col-span-2 row-span-2" },
    { src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=600", alt: "Jaipur Palace", span: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600", alt: "Kerala Backwaters", span: "col-span-1 row-span-2" },
    { src: "https://images.unsplash.com/photo-1561361513-2d000a50f0db?q=80&w=600", alt: "Varanasi Ghats", span: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=600", alt: "Goa Beach", span: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=600", alt: "North India", span: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=600", alt: "Tea Gardens", span: "col-span-2 row-span-1" },
    { src: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=600", alt: "Mumbai", span: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=600", alt: "Kerala Temple", span: "col-span-1 row-span-2" },
    { src: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=600", alt: "Yoga Retreat", span: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=600", alt: "Indian Landscape", span: "col-span-2 row-span-1" },
    { src: "https://images.unsplash.com/photo-1581791538302-03537b9c97bf?q=80&w=600", alt: "Tiger Safari", span: "col-span-1 row-span-1" },
  ];

  return (
    <div className="font-sans bg-background text-foreground">
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1920" alt="Gallery" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-royal/80" />
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
              <Reveal key={i} delay={i * 50} className={`${img.span} rounded-2xl overflow-hidden image-zoom-container`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
