"use client";

import React, { useState } from "react";
import { 
  Star, Plus, Edit2, Trash2, Image as ImageIcon, MessageSquare 
} from "lucide-react";
import { CloudinaryUpload } from "./CloudinaryUpload";

interface TestimonialsTabProps {
  testimonials: any[];
  newTestimonial: any;
  setNewTestimonial: (t: any) => void;
  handleSaveTestimonial: (e: React.FormEvent) => void;
  onUpdateTestimonial: (id: string, data: any) => void;
  onDeleteTestimonial: (id: string) => void;
  showStatus: (text: string, type: "success" | "error") => void;
}

export default function TestimonialsTab({
  testimonials,
  newTestimonial,
  setNewTestimonial,
  handleSaveTestimonial,
  onUpdateTestimonial,
  onDeleteTestimonial,
  showStatus
}: TestimonialsTabProps) {
  const [editTestimonial, setEditTestimonial] = useState<any>(null);

  const onEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editTestimonial.name || !editTestimonial.quote?.en) {
      showStatus("Name and English quote are required.", "error");
      return;
    }
    onUpdateTestimonial(editTestimonial.id, editTestimonial);
    setEditTestimonial(null);
  };

  return (
    <div className="space-y-6 animate-fade-in text-xs text-royal">
      {/* Testimonials Header */}
      {!newTestimonial && !editTestimonial && (
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-royal font-serif">Customer Testimonials & Reviews</h2>
            <p className="text-[10px] text-royal/40">Edit reviews and quotes displayed on the website homepage.</p>
          </div>
          <button
            onClick={() => setNewTestimonial({ name: "", location: "", stars: 5, image: "", quote: { en: "", es: "", pt: "" } })}
            className="bg-royal text-white border border-gold/20 hover:bg-gold hover:text-royal font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 flex items-center gap-1.5 transition cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Testimonial</span>
          </button>
        </div>
      )}

      {/* FORM: ADD NEW TESTIMONIAL */}
      {newTestimonial && (
        <form onSubmit={handleSaveTestimonial} className="bg-white border border-gold/20 rounded-3xl p-8 shadow-md space-y-6">
          <div className="flex justify-between items-center border-b border-beige/40 pb-4">
            <h3 className="text-base font-bold font-serif">Add Guest Review</h3>
            <button type="button" onClick={() => setNewTestimonial(null)} className="text-royal/50 hover:text-royal font-bold">Cancel</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider block">Guest Name</label>
              <input 
                type="text" required
                value={newTestimonial.name}
                onChange={e => setNewTestimonial({...newTestimonial, name: e.target.value})}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider block">Location (e.g. Madrid, Spain)</label>
              <input 
                type="text" 
                value={newTestimonial.location}
                onChange={e => setNewTestimonial({...newTestimonial, location: e.target.value})}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider block">Stars (1-5)</label>
              <input 
                type="number" min="1" max="5"
                value={newTestimonial.stars}
                onChange={e => setNewTestimonial({...newTestimonial, stars: parseInt(e.target.value) || 5})}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg"
              />
            </div>
          </div>

          {/* Quote Translations */}
          <div className="space-y-3">
            <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Review Quote Translations</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["en", "es", "pt"].map((lang) => (
                <div key={lang} className="space-y-1">
                  <label className="font-bold uppercase tracking-wider">Quote ({lang.toUpperCase()})</label>
                  <textarea 
                    required={lang === "en"}
                    value={newTestimonial.quote?.[lang] || ""}
                    onChange={e => setNewTestimonial({
                      ...newTestimonial, 
                      quote: { ...(newTestimonial.quote || {}), [lang]: e.target.value }
                    })}
                    className="w-full h-24 bg-[#FAF8F5] border border-gold/15 p-3 outline-none rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Avatar image */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-8 space-y-1.5">
              <label className="font-bold uppercase tracking-wider block">Avatar Profile Image URL</label>
              <input 
                type="text" 
                value={newTestimonial.image}
                onChange={e => setNewTestimonial({...newTestimonial, image: e.target.value})}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg"
              />
            </div>
            <div className="md:col-span-4 pb-0.5">
              <CloudinaryUpload 
                onUploadComplete={(url) => setNewTestimonial({ ...newTestimonial, image: url })} 
                label="Upload Avatar Photo"
                showStatus={showStatus}
              />
            </div>
          </div>

          <div className="flex gap-4 pt-4 border-t border-beige/40">
            <button type="submit" className="bg-royal text-white px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer rounded-lg shadow-md hover:bg-gold hover:text-royal transition">
              Save Review
            </button>
            <button type="button" onClick={() => setNewTestimonial(null)} className="bg-beige/35 text-royal px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer rounded-lg">
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* FORM: EDIT TESTIMONIAL */}
      {editTestimonial && (
        <form onSubmit={onEditSubmit} className="bg-white border border-gold/20 rounded-3xl p-8 shadow-md space-y-6">
          <div className="flex justify-between items-center border-b border-beige/40 pb-4">
            <h3 className="text-base font-bold font-serif">Edit Guest Review: {editTestimonial.name}</h3>
            <button type="button" onClick={() => setEditTestimonial(null)} className="text-royal/50 hover:text-royal font-bold">Cancel</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider block">Guest Name</label>
              <input 
                type="text" required
                value={editTestimonial.name}
                onChange={e => setEditTestimonial({...editTestimonial, name: e.target.value})}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider block">Location (e.g. London, UK)</label>
              <input 
                type="text" 
                value={editTestimonial.location}
                onChange={e => setEditTestimonial({...editTestimonial, location: e.target.value})}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider block">Stars (1-5)</label>
              <input 
                type="number" min="1" max="5"
                value={editTestimonial.stars}
                onChange={e => setEditTestimonial({...editTestimonial, stars: parseInt(e.target.value) || 5})}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg"
              />
            </div>
          </div>

          {/* Quote Translations */}
          <div className="space-y-3">
            <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Review Quote Translations</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["en", "es", "pt"].map((lang) => (
                <div key={lang} className="space-y-1">
                  <label className="font-bold uppercase tracking-wider">Quote ({lang.toUpperCase()})</label>
                  <textarea 
                    required={lang === "en"}
                    value={editTestimonial.quote?.[lang] || ""}
                    onChange={e => setEditTestimonial({
                      ...editTestimonial, 
                      quote: { ...(editTestimonial.quote || {}), [lang]: e.target.value }
                    })}
                    className="w-full h-24 bg-[#FAF8F5] border border-gold/15 p-3 outline-none rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Avatar image */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-8 space-y-1.5">
              <label className="font-bold uppercase tracking-wider block">Avatar Profile Image URL</label>
              <input 
                type="text" 
                value={editTestimonial.image}
                onChange={e => setEditTestimonial({...editTestimonial, image: e.target.value})}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg"
              />
            </div>
            <div className="md:col-span-4 pb-0.5">
              <CloudinaryUpload 
                onUploadComplete={(url) => setEditTestimonial({ ...editTestimonial, image: url })} 
                label="Upload Avatar Photo"
                showStatus={showStatus}
              />
            </div>
            {editTestimonial.image && (
              <div className="col-span-full h-16 w-16 overflow-hidden rounded-full ring-2 ring-gold/15">
                <img src={editTestimonial.image} alt="Avatar" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          <div className="flex gap-4 pt-4 border-t border-beige/40">
            <button type="submit" className="bg-royal text-white px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer rounded-lg shadow-md hover:bg-gold hover:text-royal transition">
              Save Changes
            </button>
            <button type="button" onClick={() => setEditTestimonial(null)} className="bg-beige/35 text-royal px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer rounded-lg">
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* TESTIMONIALS DIRECTORY GRID */}
      {!newTestimonial && !editTestimonial && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={t.id || idx} className="bg-white border border-beige/45 p-6 rounded-3xl shadow-sm flex flex-col justify-between space-y-4 hover:border-gold/30 transition">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: t.stars || 5 }).map((_, idx) => (
                      <Star key={idx} className="w-3 h-3 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-[8px] uppercase tracking-wider font-extrabold text-gold">Review</span>
                </div>
                <p className="text-xs text-foreground/75 leading-relaxed font-light italic line-clamp-4">
                  &ldquo;{t.quote?.en}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-beige/25">
                <div className="flex items-center gap-3.5">
                  <img src={t.image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100"} alt={t.name} className="w-9 h-9 rounded-full object-cover ring-2 ring-gold/10" />
                  <div>
                    <p className="text-xs font-bold text-royal">{t.name}</p>
                    <p className="text-[9px] text-foreground/45 uppercase tracking-wider font-semibold">{t.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setEditTestimonial(t)}
                    className="text-royal hover:text-gold p-1.5 hover:bg-beige/10 rounded-lg cursor-pointer"
                    title="Edit Review"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                  <button 
                    onClick={() => {
                      if (window.confirm(`Delete testimonial from "${t.name}"?`)) {
                        onDeleteTestimonial(t.id);
                      }
                    }}
                    className="text-red-500 hover:text-red-700 p-1.5 hover:bg-red-50 rounded-lg cursor-pointer"
                    title="Delete Review"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
