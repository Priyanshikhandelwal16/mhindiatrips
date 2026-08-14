import React from "react";
import { getPageByIdAction } from "@/app/actions/queries";
import Reveal from "@/components/home/Reveal";

interface GalleryPageProps {
  params: Promise<{ locale: string }>;
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { locale } = await params;
  const pageData = await getPageByIdAction("gallery");

  const t: Record<string, any> = {
    en: { hero: "Gallery", heroSub: "Visual Stories", heroDesc: "A curated collection of moments from India's most incredible destinations." },
    es: { hero: "Galería", heroSub: "Historias Visuales", heroDesc: "Una colección curada de momentos de los destinos más increíbles de la India." },
    pt: { hero: "Galeria", heroSub: "Histórias Visuais", heroDesc: "Uma coleção curada de momentos dos destinos mais incríveis da Índia." },
  };

  const dbContent = pageData?.content || {};
  const mergedT: Record<string, any> = {};
  for (const lang of ["en", "es", "pt"]) {
    mergedT[lang] = { ...t[lang] };
    for (const key in dbContent) {
      if (dbContent[key]?.[lang] !== undefined) {
        mergedT[lang][key] = dbContent[key][lang];
      }
    }
  }
  const text = mergedT[locale] || mergedT.en;

  const images = dbContent.images || [
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
    <div className="font-sans bg-[#FAF8F5] min-h-screen text-[#1B1B1B]">
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[580px] flex items-center justify-center overflow-hidden pt-28 md:pt-36">
        <img src={pageData?.heroImage || "/images/rajasthan_fort_sunset.png"} alt="Gallery" className="absolute inset-0 w-full h-full object-cover animate-kenburns" />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 text-center text-white px-6 max-w-5xl space-y-6">
          <span className="bg-gold text-royal text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full inline-block">{text.heroSub}</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{text.hero}</h1>
          <p className="text-base md:text-lg text-white/90 font-light max-w-2xl mx-auto">{text.heroDesc}</p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
            {images.map((img: any, i: number) => (
              <Reveal key={i} delay={i * 50} className={`${img.span} overflow-hidden image-zoom-container border border-gold/10 hover:border-gold/25 transition-colors`}>
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
