"use client";

import React, { useState } from "react";
import { 
  FileText, Plus, Edit2, Trash2, Calendar, Eye, Image as ImageIcon, BookOpen,
  Heading2, Heading3, Type, List, Quote, ArrowUp, ArrowDown, Sparkles, LayoutGrid
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

  // Active language tab for Content Body
  const [activeLangTab, setActiveLangTab] = useState<"en" | "es" | "pt">("en");
  
  // New gallery photo input state
  const [newGalleryUrl, setNewGalleryUrl] = useState("");
  const [newGalleryCaption, setNewGalleryCaption] = useState({ en: "", es: "", pt: "" });

  // Function to insert HTML tags into content for non-tech admins
  const insertFormattingTag = (lang: "en" | "es" | "pt", tagType: string) => {
    const currentContent = editBlog.content?.[lang] || "";
    let snippetToInsert = "";

    switch (tagType) {
      case "h2":
        snippetToInsert = `\n<h2>Section Heading Title</h2>\n`;
        break;
      case "h3":
        snippetToInsert = `\n<h3>Subheading Title</h3>\n`;
        break;
      case "p":
        snippetToInsert = `\n<p>Write your paragraph text here...</p>\n`;
        break;
      case "bold":
        snippetToInsert = `<strong>Bold text</strong>`;
        break;
      case "list":
        snippetToInsert = `\n<ul>\n  <li>List item entry 1</li>\n  <li>List item entry 2</li>\n  <li>List item entry 3</li>\n</ul>\n`;
        break;
      case "quote":
        snippetToInsert = `\n<blockquote>Travel Tip / Highlight Note here...</blockquote>\n`;
        break;
      case "intro":
        snippetToInsert = `\n<div class="blog-intro-card">\n  <h2>Overview</h2>\n  <p>Introduction overview text goes here...</p>\n</div>\n`;
        break;
      default:
        break;
    }

    setEditBlog({
      ...editBlog,
      content: {
        ...(editBlog.content || {}),
        [lang]: currentContent ? `${currentContent.trim()}\n${snippetToInsert}` : snippetToInsert
      }
    });

    showStatus(`Inserted ${tagType.toUpperCase()} tag template into ${lang.toUpperCase()} content`, "success");
  };

  // Gallery handlers
  const handleAddGalleryImage = (urlToAdd?: string) => {
    const url = urlToAdd || newGalleryUrl;
    if (!url.trim()) {
      showStatus("Please enter or upload an image URL first", "error");
      return;
    }

    const currentGallery = Array.isArray(editBlog.gallery) ? [...editBlog.gallery] : [];
    
    // Create gallery item object with optional caption
    const newItem = {
      url: url.trim(),
      caption: {
        en: newGalleryCaption.en.trim(),
        es: newGalleryCaption.es.trim(),
        pt: newGalleryCaption.pt.trim()
      }
    };

    setEditBlog({
      ...editBlog,
      gallery: [...currentGallery, newItem]
    });

    setNewGalleryUrl("");
    setNewGalleryCaption({ en: "", es: "", pt: "" });
    showStatus("Photo added to gallery!", "success");
  };

  const handleRemoveGalleryImage = (index: number) => {
    const currentGallery = Array.isArray(editBlog.gallery) ? [...editBlog.gallery] : [];
    currentGallery.splice(index, 1);
    setEditBlog({ ...editBlog, gallery: currentGallery });
  };

  const handleMoveGalleryImage = (index: number, direction: "up" | "down") => {
    const currentGallery = Array.isArray(editBlog.gallery) ? [...editBlog.gallery] : [];
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= currentGallery.length) return;

    const temp = currentGallery[index];
    currentGallery[index] = currentGallery[targetIndex];
    currentGallery[targetIndex] = temp;

    setEditBlog({ ...editBlog, gallery: currentGallery });
  };

  const handleUpdateGalleryCaption = (index: number, lang: "en" | "es" | "pt", val: string) => {
    const currentGallery = Array.isArray(editBlog.gallery) ? [...editBlog.gallery] : [];
    const item = currentGallery[index];
    
    if (typeof item === "string") {
      currentGallery[index] = {
        url: item,
        caption: { en: "", es: "", pt: "", [lang]: val }
      };
    } else {
      currentGallery[index] = {
        ...item,
        caption: {
          ...(item.caption || { en: "", es: "", pt: "" }),
          [lang]: val
        }
      };
    }

    setEditBlog({ ...editBlog, gallery: currentGallery });
  };

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
              author: "MHIndiaTrips Editor",
              gallery: []
            })}
            className="bg-royal text-white border border-gold/20 hover:bg-gold hover:text-royal font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 flex items-center gap-1.5 transition cursor-pointer rounded-lg"
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
                disabled={blogs.some(b => b.slug === editBlog.slug)}
                value={editBlog.slug}
                onChange={e => setEditBlog({...editBlog, slug: e.target.value.toLowerCase().replace(/\s+/g, "-")})}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50 disabled:opacity-60 disabled:cursor-not-allowed font-bold"
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
                defaultSearch={editBlog.title?.en || editBlog.slug || ""}
              />
            </div>
            {editBlog.featuredImage && (
              <div className="col-span-full h-40 w-full overflow-hidden border border-gold/10 rounded-2xl shadow-inner">
                <img src={editBlog.featuredImage || "/images/destination_fallback.jpg"} alt="Cover preview" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          {/* Title Translations */}
          <div className="space-y-3">
            <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Title Translations (3 Languages)</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {(["en", "es", "pt"] as const).map((lang) => (
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

          {/* HTML CONTENT WITH NON-TECH FORMATTING TOOLBAR & LANGUAGE TABS */}
          <div className="space-y-3 pt-2 border-t border-beige/40">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="font-black uppercase tracking-widest text-[9px] text-gold block font-serif">Article Content Body</span>
                <p className="text-[10px] text-royal/60">Non-technical editors can click the formatting buttons below to insert Headings and Paragraphs easily.</p>
              </div>

              {/* Language Selector Tabs */}
              <div className="flex items-center gap-1 bg-[#FAF8F5] border border-gold/20 p-1 rounded-xl shrink-0">
                {(["en", "es", "pt"] as const).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setActiveLangTab(lang)}
                    className={`px-3 py-1.5 font-bold uppercase text-[10px] rounded-lg transition-all ${
                      activeLangTab === lang 
                        ? "bg-royal text-white shadow-sm" 
                        : "text-royal/60 hover:text-royal"
                    }`}
                  >
                    {lang === "en" ? "English 🇬🇧" : lang === "es" ? "Español 🇪🇸" : "Português 🇵🇹"}
                  </button>
                ))}
              </div>
            </div>

            {/* Non-Tech Formatting Toolbar */}
            <div className="bg-[#FAF8F5] border border-gold/20 rounded-2xl p-3 space-y-2">
              <span className="text-[9px] font-bold uppercase tracking-wider text-royal/60 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-gold" />
                <span>Quick Formatting Helper (Click to Insert Tags for {activeLangTab.toUpperCase()})</span>
              </span>
              
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => insertFormattingTag(activeLangTab, "h2")}
                  className="bg-white border border-gold/20 hover:bg-gold/10 text-royal px-2.5 py-1.5 rounded-lg flex items-center gap-1 text-[10px] font-bold transition shadow-xs"
                >
                  <Heading2 className="w-3.5 h-3.5 text-gold" />
                  <span>+ Heading 2 (&lt;h2&gt;)</span>
                </button>

                <button
                  type="button"
                  onClick={() => insertFormattingTag(activeLangTab, "h3")}
                  className="bg-white border border-gold/20 hover:bg-gold/10 text-royal px-2.5 py-1.5 rounded-lg flex items-center gap-1 text-[10px] font-bold transition shadow-xs"
                >
                  <Heading3 className="w-3.5 h-3.5 text-gold" />
                  <span>+ Subheading (&lt;h3&gt;)</span>
                </button>

                <button
                  type="button"
                  onClick={() => insertFormattingTag(activeLangTab, "p")}
                  className="bg-white border border-gold/20 hover:bg-gold/10 text-royal px-2.5 py-1.5 rounded-lg flex items-center gap-1 text-[10px] font-bold transition shadow-xs"
                >
                  <Type className="w-3.5 h-3.5 text-gold" />
                  <span>+ Paragraph (&lt;p&gt;)</span>
                </button>

                <button
                  type="button"
                  onClick={() => insertFormattingTag(activeLangTab, "bold")}
                  className="bg-white border border-gold/20 hover:bg-gold/10 text-royal px-2.5 py-1.5 rounded-lg flex items-center gap-1 text-[10px] font-bold transition shadow-xs"
                >
                  <span className="font-extrabold font-serif text-royal">B</span>
                  <span>+ Bold (&lt;strong&gt;)</span>
                </button>

                <button
                  type="button"
                  onClick={() => insertFormattingTag(activeLangTab, "list")}
                  className="bg-white border border-gold/20 hover:bg-gold/10 text-royal px-2.5 py-1.5 rounded-lg flex items-center gap-1 text-[10px] font-bold transition shadow-xs"
                >
                  <List className="w-3.5 h-3.5 text-gold" />
                  <span>+ Bullet List (&lt;ul&gt;)</span>
                </button>

                <button
                  type="button"
                  onClick={() => insertFormattingTag(activeLangTab, "quote")}
                  className="bg-white border border-gold/20 hover:bg-gold/10 text-royal px-2.5 py-1.5 rounded-lg flex items-center gap-1 text-[10px] font-bold transition shadow-xs"
                >
                  <Quote className="w-3.5 h-3.5 text-gold" />
                  <span>+ Tip Box (&lt;blockquote&gt;)</span>
                </button>

                <button
                  type="button"
                  onClick={() => insertFormattingTag(activeLangTab, "intro")}
                  className="bg-white border border-gold/20 hover:bg-gold/10 text-royal px-2.5 py-1.5 rounded-lg flex items-center gap-1 text-[10px] font-bold transition shadow-xs"
                >
                  <Sparkles className="w-3.5 h-3.5 text-gold" />
                  <span>+ Intro Box</span>
                </button>
              </div>
            </div>

            {/* Active Language Content Textarea */}
            <div className="space-y-1">
              <label className="font-bold uppercase tracking-wider flex items-center justify-between">
                <span>Content Body ({activeLangTab.toUpperCase()})</span>
                <span className="text-[10px] text-royal/40 font-normal">Editing in {activeLangTab === "en" ? "English" : activeLangTab === "es" ? "Spanish" : "Portuguese"}</span>
              </label>
              <textarea 
                required={activeLangTab === "en"}
                value={editBlog.content?.[activeLangTab] || ""}
                onChange={e => setEditBlog({
                  ...editBlog, 
                  content: { ...(editBlog.content || {}), [activeLangTab]: e.target.value }
                })}
                className="w-full h-72 bg-[#FAF8F5] border border-gold/15 p-4 outline-none font-mono text-[11px] rounded-lg focus:border-gold/50 shadow-inner"
                placeholder="<p>Write your article HTML content here or use the helper buttons above...</p>"
              />
            </div>
          </div>

          {/* PHOTO GALLERY SECTION WITH OPTIONAL CAPTIONS */}
          <div className="space-y-4 pt-4 border-t border-beige/40">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-black uppercase tracking-widest text-[9px] text-gold block font-serif flex items-center gap-1">
                  <LayoutGrid className="w-3.5 h-3.5 text-gold" />
                  <span>Article Photo Gallery (Optional Photos & Captions)</span>
                </span>
                <p className="text-[10px] text-royal/60">Add multiple photos for this blog. Photos can optionally include caption text in 3 languages, or left empty without text.</p>
              </div>
              <span className="text-[10px] font-bold bg-royal/10 text-royal px-2.5 py-1 rounded-full border border-gold/15">
                {(editBlog.gallery || []).length} Photos
              </span>
            </div>

            {/* Add New Gallery Photo Controls */}
            <div className="bg-[#FAF8F5] border border-gold/20 rounded-2xl p-4 space-y-3">
              <span className="font-bold uppercase tracking-wider text-[10px] text-royal block">Add New Gallery Photo</span>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
                <div className="md:col-span-8 space-y-1">
                  <input 
                    type="text" 
                    value={newGalleryUrl}
                    onChange={e => setNewGalleryUrl(e.target.value)}
                    placeholder="Paste image URL (https://...)"
                    className="w-full bg-white border border-gold/15 px-3 py-2 outline-none rounded-lg text-[11px]"
                  />
                </div>
                <div className="md:col-span-4">
                  <CloudinaryUpload 
                    onUploadComplete={(url) => {
                      setNewGalleryUrl(url);
                      handleAddGalleryImage(url);
                    }} 
                    label="Upload Photo"
                    showStatus={showStatus}
                    defaultSearch={editBlog.title?.en || "gallery photo"}
                  />
                </div>
              </div>

              {/* Optional Captions inputs for new image */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                {(["en", "es", "pt"] as const).map((lang) => (
                  <div key={lang} className="space-y-0.5">
                    <span className="text-[8px] font-bold text-royal/40 uppercase">Caption ({lang.toUpperCase()}) - Optional</span>
                    <input 
                      type="text"
                      value={newGalleryCaption[lang]}
                      onChange={e => setNewGalleryCaption({ ...newGalleryCaption, [lang]: e.target.value })}
                      placeholder={`Caption in ${lang.toUpperCase()} (Optional)`}
                      className="w-full bg-white border border-gold/10 px-2.5 py-1.5 outline-none rounded-md text-[10px]"
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-1">
                <button
                  type="button"
                  onClick={() => handleAddGalleryImage()}
                  className="bg-royal text-white px-4 py-2 font-bold uppercase tracking-wider text-[10px] rounded-lg shadow-sm hover:bg-gold hover:text-royal transition flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Photo to Gallery</span>
                </button>
              </div>
            </div>

            {/* Existing Gallery Photos List */}
            {Array.isArray(editBlog.gallery) && editBlog.gallery.length > 0 && (
              <div className="space-y-3 pt-2">
                <span className="font-bold uppercase tracking-wider text-[10px] text-royal block">Current Gallery Photos ({editBlog.gallery.length})</span>
                <div className="grid grid-cols-1 gap-4">
                  {editBlog.gallery.map((gItem: any, idx: number) => {
                    const gUrl = typeof gItem === "string" ? gItem : gItem?.url || "";
                    const gCaptions = typeof gItem === "object" ? (gItem.caption || { en: "", es: "", pt: "" }) : { en: "", es: "", pt: "" };
                    
                    return (
                      <div key={idx} className="bg-white border border-gold/15 rounded-2xl p-3 shadow-xs flex flex-col md:flex-row gap-4 items-center">
                        <div className="h-24 w-32 shrink-0 rounded-xl overflow-hidden border border-gold/10 bg-light-gray relative">
                          <img src={gUrl || "/images/destination_fallback.jpg"} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                        </div>
                        
                        <div className="flex-grow space-y-2 w-full">
                          <span className="text-[9px] font-bold text-royal/40 uppercase block">Photo #{idx + 1} URL: <span className="font-normal text-royal/60 break-all">{gUrl}</span></span>
                          
                          {/* Captions in 3 languages */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            {(["en", "es", "pt"] as const).map((l) => (
                              <div key={l} className="space-y-0.5">
                                <span className="text-[8px] font-bold text-royal/40 uppercase">Caption ({l.toUpperCase()})</span>
                                <input 
                                  type="text" 
                                  value={typeof gCaptions === "string" ? (l === "en" ? gCaptions : "") : (gCaptions[l] || "")}
                                  onChange={e => handleUpdateGalleryCaption(idx, l, e.target.value)}
                                  placeholder={`Optional caption in ${l.toUpperCase()}`}
                                  className="w-full bg-[#FAF8F5] border border-gold/10 px-2.5 py-1.5 outline-none rounded-md text-[10px]"
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Order & Delete Controls */}
                        <div className="flex md:flex-col gap-2 shrink-0 items-center justify-center">
                          <button
                            type="button"
                            disabled={idx === 0}
                            onClick={() => handleMoveGalleryImage(idx, "up")}
                            className="p-1.5 bg-[#FAF8F5] border border-gold/15 text-royal rounded hover:bg-gold hover:text-royal disabled:opacity-30 cursor-pointer"
                            title="Move Up"
                          >
                            <ArrowUp className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            disabled={idx === editBlog.gallery.length - 1}
                            onClick={() => handleMoveGalleryImage(idx, "down")}
                            className="p-1.5 bg-[#FAF8F5] border border-gold/15 text-royal rounded hover:bg-gold hover:text-royal disabled:opacity-30 cursor-pointer"
                            title="Move Down"
                          >
                            <ArrowDown className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleRemoveGalleryImage(idx)}
                            className="p-1.5 bg-red-50 text-red-600 border border-red-100 rounded hover:bg-red-600 hover:text-white cursor-pointer"
                            title="Remove Photo"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
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
                {(["en", "es", "pt"] as const).map((l) => (
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
                {(["en", "es", "pt"] as const).map((l) => (
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
          {(blogs || []).map((b) => (
            <div key={b.slug} className="bg-white border border-beige/45 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between hover:border-gold/30 transition">
              <div className="h-40 w-full overflow-hidden bg-light-gray relative">
                <img src={b.featuredImage || "/images/destination_fallback.jpg"} alt={b.title?.en} className="h-full w-full object-cover" />
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
                  <span className="text-[9px] text-royal/40 block">
                    Author: {b.author || "MH Editor"} • {b.readingTime} min read
                    {Array.isArray(b.gallery) && b.gallery.length > 0 && ` • 📷 ${b.gallery.length} Photos`}
                  </span>
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

