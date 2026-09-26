"use client";

import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, Image as ImageIcon } from "lucide-react";
import { getHighResImageUrl } from "@/lib/image-utils";

interface BlogPhotoGalleryProps {
  gallery: any[];
  lang: string;
  title: string;
}

export default function BlogPhotoGallery({ gallery, lang, title }: BlogPhotoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : gallery.length - 1));
      }
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev !== null && prev < gallery.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, gallery.length]);

  if (!gallery || gallery.length === 0) return null;

  return (
    <div className="space-y-6 pt-8 border-t border-[#C5A862]/20">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0A2A1E] flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-[#C5A862]" />
            <span>{title}</span>
          </h3>
          <p className="text-xs text-[#0A2A1E]/60 font-light">
            Click any photo to view in high-resolution full screen.
          </p>
        </div>
        <span className="text-xs bg-[#C5A862]/15 text-[#0A2A1E] border border-[#C5A862]/30 px-3 py-1 rounded-full font-bold">
          {gallery.length} {gallery.length === 1 ? "Photo" : "Photos"}
        </span>
      </div>

      {/* Grid of Photo Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {gallery.map((gItem: any, gIdx: number) => {
          const gUrl = typeof gItem === "string" ? gItem : (gItem?.url || gItem?.src || "");
          if (!gUrl) return null;

          const gCaptionObj = typeof gItem === "object" ? gItem?.caption : null;
          let gCaption = "";
          if (typeof gCaptionObj === "string") {
            gCaption = gCaptionObj;
          } else if (typeof gCaptionObj === "object" && gCaptionObj !== null) {
            gCaption = gCaptionObj[lang] || gCaptionObj.en || gCaptionObj.es || gCaptionObj.pt || "";
          }

          return (
            <div 
              key={gIdx}
              onClick={() => setSelectedIndex(gIdx)}
              className="bg-white border border-[#C5A862]/35 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col justify-between hover:-translate-y-1"
            >
              {/* Image Container with Full Height & Smooth Hover */}
              <div className="h-72 sm:h-80 md:h-96 w-full overflow-hidden relative bg-gray-100">
                <img 
                  src={getHighResImageUrl(gUrl)} 
                  alt={gCaption || `Photo ${gIdx + 1}`} 
                  loading="lazy" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Subtle Hover Overlay with Fullscreen Icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-[#C5A862] text-[#0A2A1E] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5 transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                    <span>View Fullscreen</span>
                  </span>
                </div>
              </div>

              {/* Caption Bar */}
              {gCaption && (
                <div className="p-4 bg-[#FAF8F5] border-t border-[#C5A862]/20">
                  <p className="text-xs sm:text-sm font-medium text-[#0A2A1E]/90 italic text-center leading-relaxed">
                    "{gCaption}"
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* LIGHTBOX FULLSCREEN MODAL */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(null);
            }}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer z-50"
            title="Close (Esc)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          {gallery.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : gallery.length - 1));
              }}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer z-50"
              title="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Main Photo Card Container */}
          <div 
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const currentItem = gallery[selectedIndex];
              const currentUrl = typeof currentItem === "string" ? currentItem : (currentItem?.url || currentItem?.src || "");
              const currentCapObj = typeof currentItem === "object" ? currentItem?.caption : null;
              let currentCap = "";
              if (typeof currentCapObj === "string") {
                currentCap = currentCapObj;
              } else if (typeof currentCapObj === "object" && currentCapObj !== null) {
                currentCap = currentCapObj[lang] || currentCapObj.en || currentCapObj.es || currentCapObj.pt || "";
              }

              return (
                <div className="space-y-4 text-center">
                  <img
                    src={getHighResImageUrl(currentUrl)}
                    alt={currentCap || `Full Photo ${selectedIndex + 1}`}
                    className="max-h-[75vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/20 mx-auto"
                  />

                  {currentCap && (
                    <div className="bg-black/60 backdrop-blur-sm border border-white/15 px-6 py-3 rounded-2xl inline-block max-w-2xl">
                      <p className="text-sm text-white font-medium italic">
                        "{currentCap}"
                      </p>
                    </div>
                  )}

                  <div className="text-white/60 text-xs font-bold uppercase tracking-wider">
                    {selectedIndex + 1} / {gallery.length}
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Next Button */}
          {gallery.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) => (prev !== null && prev < gallery.length - 1 ? prev + 1 : 0));
              }}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer z-50"
              title="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      )}

    </div>
  );
}
