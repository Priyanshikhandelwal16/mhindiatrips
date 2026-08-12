"use client";

import React, { useState } from "react";
import { 
  FileText, Plus, Edit2, Trash2, Calendar, Eye, Image as ImageIcon, BookOpen 
} from "lucide-react";
import { CloudinaryUpload } from "./CloudinaryUpload";

interface BlogsTabProps {
  blogs: any[];
  editBlog: any;
  setEditBlog: (blog: any) => void;
  handleSaveBlog: (e: React.FormEvent) => void;
  handleDeleteBlog: (slug: string) => void;
  showStatus: (text: string, type: "success" | "error") => void;
}

export default function BlogsTab({
  blogs,
  editBlog,
  setEditBlog,
  handleSaveBlog,
  handleDeleteBlog,
  showStatus
}: BlogsTabProps) {

  return (
    <div className="space-y-6 animate-fade-in text-xs text-royal">
      {/* Tab Header */}
      {!editBlog && (
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-royal font-serif">Travel Blogs & Articles</h2>
            <p className="text-[10px] text-royal/40">Write travel guides, regional reports, or cuisine logs for travelers.</p>
          </div>
          <button
            onClick={() => setEditBlog({
              title: { en: "", es: "", pt: "" },
              content: { en: "", es: "", pt: "" },
              seoTitle: { en: "", es: "", pt: "" },
              seoDescription: { en: "", es: "", pt: "" },
              slug: "",
              category: "Travel Guides",
              tags: [],
              isDraft: true,
              featuredImage: "",
              readingTime: 5,
              author: "MHIndiaTrips Editor"
            })}
            className="bg-royal text-white border border-gold/20 hover:bg-gold hover:text-royal font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 flex items-center gap-1.5 transition cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Write New Article</span>
          </button>
        </div>
      )}

      {/* FORM: WRITE / EDIT BLOG */}
      {editBlog && (
        <form onSubmit={handleSaveBlog} className="bg-white border border-gold/20 rounded-3xl p-8 shadow-md space-y-6">
          <div className="flex justify-between items-center border-b border-beige/40 pb-4">
            <h3 className="text-base font-bold font-serif">{editBlog.slug ? `Edit Article: ${editBlog.title?.en}` : "Draft New Travel Blog"}</h3>
            <button type="button" onClick={() => setEditBlog(null)} className="text-royal/50 hover:text-royal font-bold">Cancel</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-1.5 md:col-span-2">
              <label className="font-bold uppercase tracking-wider block">Slug (e.g. jaipur-travel-guide)</label>
              <input 
                type="text" 
                required
                value={editBlog.slug}
                onChange={e => setEditBlog({...editBlog, slug: e.target.value.toLowerCase().replace(/\s+/g, "-")})}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50"
                placeholder="jaipur-travel-guide"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider block">Category</label>
              <select
                value={editBlog.category || "Travel Guides"}
                onChange={e => setEditBlog({...editBlog, category: e.target.value})}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50 cursor-pointer"
              >
                {["Travel Guides", "Travel Tips", "Indian Food", "Festivals", "Palaces", "Culture"].map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider block">Reading Time (mins)</label>
              <input 
                type="number" 
                value={editBlog.readingTime}
                onChange={e => setEditBlog({...editBlog, readingTime: parseInt(e.target.value) || 5})}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50"
              />
            </div>
          </div>

          {/* Featured Image */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-8 space-y-1.5">
              <label className="font-bold uppercase tracking-wider block">Featured Cover Image URL</label>
              <input 
                type="text" 
                value={editBlog.featuredImage || ""}
                onChange={e => setEditBlog({...editBlog, featuredImage: e.target.value})}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50"
              />
            </div>
            <div className="md:col-span-4 pb-0.5">
              <CloudinaryUpload 
                onUploadComplete={(url) => setEditBlog({ ...editBlog, featuredImage: url })} 
                label="Upload Cover Photo"
                showStatus={showStatus}
              />
            </div>
            {editBlog.featuredImage && (
              <div className="col-span-full h-40 w-full overflow-hidden border border-gold/10 rounded-2xl shadow-inner">
                <img src={editBlog.featuredImage} alt="Cover preview" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          {/* Title Translations */}
          <div className="space-y-3">
            <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Title Translations</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["en", "es", "pt"].map((lang) => (
                <div key={lang} className="space-y-1">
                  <label className="font-bold uppercase tracking-wider">Title ({lang.toUpperCase()})</label>
                  <input 
                    type="text" 
                    required
                    value={editBlog.title?.[lang] || ""}
                    onChange={e => setEditBlog({
                      ...editBlog, 
                      title: { ...editBlog.title, [lang]: e.target.value }
                    })}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2.5 outline-none rounded-lg focus:border-gold/50"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* HTML Content (Translations) */}
          <div className="space-y-3">
            <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Article HTML Content (Paragraphs)</span>
            <div className="grid grid-cols-1 gap-6">
              {["en", "es", "pt"].map((lang) => (
                <div key={lang} className="space-y-1">
                  <label className="font-bold uppercase tracking-wider">Content Body ({lang.toUpperCase()})</label>
                  <textarea 
                    required={lang === "en"}
                    value={editBlog.content?.[lang] || ""}
                    onChange={e => setEditBlog({
                      ...editBlog, 
                      content: { ...editBlog.content, [lang]: e.target.value }
                    })}
                    className="w-full h-64 bg-[#FAF8F5] border border-gold/15 p-4 outline-none font-mono text-[11px] rounded-lg focus:border-gold/50"
                    placeholder="<p>Write your HTML paragraphs here...</p>"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Tags & Author & Draft State */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-beige/40">
            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider block">Author Name</label>
              <input 
                type="text" 
                value={editBlog.author || "MHIndiaTrips Editor"}
                onChange={e => setEditBlog({...editBlog, author: e.target.value})}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider block">Tags (Comma-separated)</label>
              <input 
                type="text" 
                value={Array.isArray(editBlog.tags) ? editBlog.tags.join(", ") : ""}
                onChange={e => setEditBlog({...editBlog, tags: e.target.value.split(",").map(t => t.trim()).filter(Boolean)})}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50"
                placeholder="taj mahal, agra, guide"
              />
            </div>
            <div className="space-y-2 flex flex-col justify-end">
              <div className="flex items-center gap-2 pb-2">
                <input 
                  type="checkbox" 
                  id="isDraft"
                  checked={editBlog.isDraft}
                  onChange={e => setEditBlog({...editBlog, isDraft: e.target.checked})}
                  className="w-4 h-4 cursor-pointer accent-royal"
                />
                <label htmlFor="isDraft" className="font-bold uppercase tracking-wider cursor-pointer">Save as Draft / Hide Article</label>
              </div>
            </div>
          </div>

          {/* SEO Details */}
          <div className="space-y-4 pt-4 border-t border-beige/40">
            <span className="font-black uppercase tracking-widest text-[9px] text-gold block font-serif">SEO Optimization (Search Engine Meta Tags)</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* SEO Title */}
              <div className="space-y-3">
                <span className="font-bold uppercase text-[9px] text-royal/50 block">Meta Titles</span>
                {["en", "es", "pt"].map((l) => (
                  <div key={l} className="space-y-0.5">
                    <span className="text-[8px] font-bold text-royal/40 uppercase">{l} SEO Title</span>
                    <input 
                      type="text" 
                      value={editBlog.seoTitle?.[l] || ""}
                      onChange={e => setEditBlog({
                        ...editBlog,
                        seoTitle: { ...(editBlog.seoTitle || {}), [l]: e.target.value }
                      })}
                      className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2 outline-none rounded-lg text-[11px]"
                    />
                  </div>
                ))}
              </div>

              {/* SEO Description */}
              <div className="space-y-3">
                <span className="font-bold uppercase text-[9px] text-royal/50 block">Meta Descriptions</span>
                {["en", "es", "pt"].map((l) => (
                  <div key={l} className="space-y-0.5">
                    <span className="text-[8px] font-bold text-royal/40 uppercase">{l} Description</span>
                    <input 
                      type="text" 
                      value={editBlog.seoDescription?.[l] || ""}
                      onChange={e => setEditBlog({
                        ...editBlog,
                        seoDescription: { ...(editBlog.seoDescription || {}), [l]: e.target.value }
                      })}
                      className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2 outline-none rounded-lg text-[11px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-4 border-t border-beige/40">
            <button type="submit" className="bg-royal text-white px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer rounded-lg shadow-md hover:bg-gold hover:text-royal transition">
              Save Article
            </button>
            <button type="button" onClick={() => setEditBlog(null)} className="bg-beige/35 text-royal px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer rounded-lg">
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* BLOGS DIRECTORY LIST */}
      {!editBlog && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((b) => (
            <div key={b.slug} className="bg-white border border-beige/45 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between hover:border-gold/30 transition">
              <div className="h-40 w-full overflow-hidden bg-light-gray relative">
                <img src={b.featuredImage} alt={b.title?.en} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
              </div>
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] bg-royal/10 text-royal px-2.5 py-0.5 rounded uppercase font-bold tracking-wider border border-gold/15">{b.category}</span>
                    <span className={`px-2 py-0.5 rounded text-[8px] uppercase font-bold tracking-wider ${
                      b.isDraft ? "bg-amber-50 text-amber-600 border border-amber-100" : "bg-emerald-50 text-emerald-600 border border-emerald-100"
                    }`}>
                      {b.isDraft ? "Draft" : "Published"}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-royal font-serif line-clamp-1">{b.title?.en}</h4>
                  <span className="text-[9px] text-royal/40 block">Author: {b.author || "MH Editor"} • {b.readingTime} min read</span>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-beige/25 text-xs">
                  <button
                    onClick={() => setEditBlog(b)}
                    className="text-royal hover:text-gold flex items-center gap-1 font-bold uppercase tracking-wider cursor-pointer"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                    <span>Edit Article</span>
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm(`Delete the article "${b.title?.en}"?`)) {
                        handleDeleteBlog(b.slug);
                      }
                    }}
                    className="text-red-600 hover:text-red-700 flex items-center gap-1 font-bold uppercase tracking-wider cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete</span>
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
