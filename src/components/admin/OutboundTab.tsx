"use client";

import React, { useState } from "react";
import { Globe, Plus, Edit2, Trash2, CheckCircle, AlertTriangle, Sparkles, Image as ImageIcon, Search, Star, MapPin, Calendar, Compass, List } from "lucide-react";
import { createOutboundAction, updateOutboundAction, deleteOutboundAction } from "@/app/actions/admin";
import { CloudinaryUpload } from "./CloudinaryUpload";

interface OutboundTabProps {
  outboundList: any[];
  showStatus: (text: string, type: "success" | "error") => void;
  loadCMSData: () => Promise<void>;
}

export default function OutboundTab({
  outboundList = [],
  showStatus,
  loadCMSData
}: OutboundTabProps) {
  const [editItem, setEditItem] = useState<any | null>(null);
  const [activeLang, setActiveLang] = useState<"en" | "es" | "pt">("en");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCreateNew = () => {
    setEditItem({
      slug: "",
      title: { en: "", es: "", pt: "" },
      tagline: { en: "", es: "", pt: "" },
      region: "Middle East",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600",
      description: { en: "", es: "", pt: "" },
      bestTime: { en: "November to March", es: "De noviembre a marzo", pt: "De novembro a março" },
      highlights: [],
      attractions: [],
      suggestedItinerary: { en: "", es: "", pt: "" }
    });
  };

  const handleAddHighlight = () => {
    const newHl = { en: "", es: "", pt: "" };
    setEditItem({
      ...editItem,
      highlights: [...(editItem.highlights || []), newHl]
    });
  };

  const handleUpdateHighlight = (idx: number, lang: "en" | "es" | "pt", val: string) => {
    const updated = [...(editItem.highlights || [])];
    const current = typeof updated[idx] === "string" ? { en: updated[idx], es: "", pt: "" } : updated[idx];
    updated[idx] = { ...current, [lang]: val };
    setEditItem({ ...editItem, highlights: updated });
  };

  const handleRemoveHighlight = (idx: number) => {
    const updated = (editItem.highlights || []).filter((_: any, i: number) => i !== idx);
    setEditItem({ ...editItem, highlights: updated });
  };

  const handleAddAttraction = () => {
    const newAttr = { title: { en: "", es: "", pt: "" }, desc: { en: "", es: "", pt: "" }, image: "" };
    setEditItem({
      ...editItem,
      attractions: [...(editItem.attractions || []), newAttr]
    });
  };

  const handleUpdateAttraction = (idx: number, field: "title" | "desc", lang: "en" | "es" | "pt", val: string) => {
    const updated = [...(editItem.attractions || [])];
    updated[idx] = {
      ...updated[idx],
      [field]: {
        ...(updated[idx][field] || {}),
        [lang]: val
      }
    };
    setEditItem({ ...editItem, attractions: updated });
  };

  const handleRemoveAttraction = (idx: number) => {
    const updated = (editItem.attractions || []).filter((_: any, i: number) => i !== idx);
    setEditItem({ ...editItem, attractions: updated });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editItem.title?.en) {
      showStatus("English title is required", "error");
      return;
    }

    try {
      const slug = editItem.slug || editItem.title.en.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      const payload = { ...editItem, slug };

      const isExisting = outboundList.some((o: any) => o.slug === slug);
      let res;
      if (isExisting) {
        res = await updateOutboundAction(slug, payload);
      } else {
        res = await createOutboundAction(payload);
      }

      if (res.success) {
        showStatus("Outbound destination saved successfully!", "success");
        setEditItem(null);
        await loadCMSData();
      } else {
        showStatus(res.error || "Save failed", "error");
      }
    } catch (err: any) {
      showStatus(err.message || "Failed to save", "error");
    }
  };

  const handleDelete = async (slug: string) => {
    if (!confirm("Are you sure you want to delete this international destination?")) return;
    try {
      const res = await deleteOutboundAction(slug);
      if (res.success) {
        showStatus("Destination deleted", "success");
        await loadCMSData();
      } else {
        showStatus(res.error || "Delete failed", "error");
      }
    } catch (err: any) {
      showStatus(err.message || "Delete failed", "error");
    }
  };

  const filteredList = outboundList.filter((item: any) => {
    const titleEn = item.title?.en || item.slug || "";
    const region = item.region || "";
    return titleEn.toLowerCase().includes(searchQuery.toLowerCase()) || region.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-[#C5A862]/20 shadow-md">
        <div>
          <h2 className="text-xl font-serif font-bold text-[#0A2A1E] flex items-center gap-2">
            <Globe className="w-5 h-5 text-[#C5A862]" />
            <span>Outbound / International Destinations Management</span>
          </h2>
          <p className="text-xs text-[#1B1B1B]/60 font-light pt-1">
            Full 3-Language (EN/ES/PT) CMS Editor for Dubai, Bali, Maldives, Thailand, Vietnam, Singapore, Nepal, Sri Lanka, Laos, etc.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search outbound..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2.5 rounded-full border border-gray-200 text-xs focus:outline-none focus:border-[#C5A862] w-48 sm:w-64"
            />
          </div>
          <button
            onClick={handleCreateNew}
            className="bg-[#0A2A1E] hover:bg-[#C5A862] text-white hover:text-[#0A2A1E] text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-all flex items-center gap-2 shadow-md shrink-0 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Destination</span>
          </button>
        </div>
      </div>

      {/* Full Feature Editor Modal / Form */}
      {editItem && (
        <form onSubmit={handleSave} className="bg-white p-8 rounded-3xl border-2 border-[#C5A862] shadow-2xl space-y-8 animate-fade-in">
          
          <div className="flex items-center justify-between border-b border-[#C5A862]/20 pb-4 flex-wrap gap-3">
            <div>
              <h3 className="text-xl font-serif font-bold text-[#0A2A1E]">
                {editItem.slug ? `Edit Destination: ${editItem.title?.en}` : "Create New International Destination"}
              </h3>
              <span className="text-[10px] text-[#C5A862] font-extrabold uppercase tracking-widest">
                Comprehensive 3-Language Configuration
              </span>
            </div>
            
            {/* Language Switch Tabs */}
            <div className="flex bg-gray-100 p-1 rounded-xl border border-gray-200 gap-1">
              {(["en", "es", "pt"] as const).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setActiveLang(l)}
                  className={`px-4 py-1.5 text-xs font-extrabold uppercase rounded-lg transition-all ${
                    activeLang === l ? "bg-[#0A2A1E] text-[#C5A862] shadow-sm" : "text-gray-600 hover:text-black"
                  }`}
                >
                  {l === "en" ? "🇬🇧 English" : l === "es" ? "🇪🇸 Español" : "🇵🇹 Português"}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Slug URL */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase text-[#0A2A1E]">URL Slug Identifier</label>
              <input
                type="text"
                value={editItem.slug || ""}
                onChange={(e) => setEditItem({ ...editItem, slug: e.target.value.toLowerCase().replace(/\s+/g, "-") })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#C5A862]"
                placeholder="e.g. dubai, bali, maldives"
                required
              />
            </div>

            {/* Region Category */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase text-[#0A2A1E]">Region / Country Category</label>
              <select
                value={editItem.region || "Middle East"}
                onChange={(e) => setEditItem({ ...editItem, region: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#C5A862] font-semibold"
              >
                <option value="Middle East">Middle East (Dubai & UAE)</option>
                <option value="Southeast Asia">Southeast Asia (Bali, Thailand, Vietnam, Singapore, Laos)</option>
                <option value="Indian Ocean">Indian Ocean (Maldives, Sri Lanka)</option>
                <option value="South Asia">South Asia (Nepal & Bhutan)</option>
                <option value="Europe & Beyond">Europe & International</option>
              </select>
            </div>

            {/* Title (EN / ES / PT) */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase text-[#0A2A1E]">Title ({activeLang.toUpperCase()})</label>
              <input
                type="text"
                value={editItem.title?.[activeLang] || ""}
                onChange={(e) => setEditItem({ ...editItem, title: { ...editItem.title, [activeLang]: e.target.value } })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#C5A862]"
                placeholder="e.g. Dubai & UAE"
                required
              />
            </div>

            {/* Tagline (EN / ES / PT) */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase text-[#0A2A1E]">Tagline ({activeLang.toUpperCase()})</label>
              <input
                type="text"
                value={editItem.tagline?.[activeLang] || ""}
                onChange={(e) => setEditItem({ ...editItem, tagline: { ...editItem.tagline, [activeLang]: e.target.value } })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#C5A862]"
                placeholder="e.g. Burj Khalifa, Desert Safaris & Futuristic Luxury"
              />
            </div>

            {/* Best Time to Visit (EN / ES / PT) */}
            <div className="space-y-1.5 md:col-span-2">
              <label className="text-xs font-bold uppercase text-[#0A2A1E]">Best Time to Visit ({activeLang.toUpperCase()})</label>
              <input
                type="text"
                value={editItem.bestTime?.[activeLang] || ""}
                onChange={(e) => setEditItem({ ...editItem, bestTime: { ...editItem.bestTime, [activeLang]: e.target.value } })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#C5A862]"
                placeholder="e.g. November to March"
              />
            </div>

            {/* Cover Photo URL + Cloudinary Upload */}
            <div className="md:col-span-2 space-y-2 bg-[#FAF8F5] p-5 rounded-2xl border border-[#C5A862]/20">
              <label className="text-xs font-bold uppercase text-[#0A2A1E] block">Cover Photo URL & Cloudinary Image Upload</label>
              <div className="flex flex-col sm:flex-row gap-3 items-end">
                <input
                  type="text"
                  value={editItem.image || ""}
                  onChange={(e) => setEditItem({ ...editItem, image: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#C5A862] bg-white"
                  placeholder="https://images.unsplash.com/... or Cloudinary URL"
                />
                <div className="shrink-0">
                  <CloudinaryUpload 
                    onUploadComplete={(url: string) => setEditItem({ ...editItem, image: url })} 
                    label="Upload Destination Photo"
                    showStatus={showStatus}
                    defaultSearch={editItem.title?.en || editItem.slug || ""}
                  />
                </div>
              </div>
              {editItem.image && (
                <div className="h-40 w-full rounded-xl overflow-hidden border border-gray-200 mt-2">
                  <img src={editItem.image} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>

            {/* Description (EN / ES / PT) */}
            <div className="md:col-span-2 space-y-1.5">
              <label className="text-xs font-bold uppercase text-[#0A2A1E]">Overview & Description ({activeLang.toUpperCase()})</label>
              <textarea
                rows={4}
                value={editItem.description?.[activeLang] || ""}
                onChange={(e) => setEditItem({ ...editItem, description: { ...editItem.description, [activeLang]: e.target.value } })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#C5A862] leading-relaxed"
                placeholder="Detailed travel overview..."
              />
            </div>

            {/* Highlights List Manager */}
            <div className="md:col-span-2 space-y-3 bg-[#FAF8F5] p-5 rounded-2xl border border-[#C5A862]/20">
              <div className="flex justify-between items-center border-b border-[#C5A862]/15 pb-2">
                <span className="text-xs font-extrabold uppercase text-[#0A2A1E] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#C5A862]" />
                  <span>Key Experience Highlights ({activeLang.toUpperCase()})</span>
                </span>
                <button
                  type="button"
                  onClick={handleAddHighlight}
                  className="bg-[#0A2A1E] text-[#C5A862] font-bold text-[10px] uppercase px-3 py-1.5 rounded-lg hover:bg-[#C5A862] hover:text-[#0A2A1E] transition-colors"
                >
                  + Add Highlight
                </button>
              </div>

              {(!editItem.highlights || editItem.highlights.length === 0) ? (
                <p className="text-xs text-gray-400 italic py-2">No highlights added yet. Click &quot;+ Add Highlight&quot; to specify key features.</p>
              ) : (
                <div className="space-y-2">
                  {editItem.highlights.map((hl: any, hIdx: number) => {
                    const val = typeof hl === "string" ? hl : (hl[activeLang] || "");
                    return (
                      <div key={hIdx} className="flex items-center gap-2">
                        <span className="text-[#C5A862] font-bold text-sm">•</span>
                        <input
                          type="text"
                          value={val}
                          onChange={(e) => handleUpdateHighlight(hIdx, activeLang, e.target.value)}
                          className="flex-grow px-3 py-2 rounded-xl border border-gray-300 text-xs bg-white"
                          placeholder={`Highlight #${hIdx + 1} (${activeLang.toUpperCase()})`}
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveHighlight(hIdx)}
                          className="text-red-500 hover:text-red-700 font-bold text-xs px-2"
                        >
                          Remove
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Suggested Itinerary (EN / ES / PT) */}
            <div className="md:col-span-2 space-y-1.5">
              <label className="text-xs font-bold uppercase text-[#0A2A1E]">Suggested Luxury Itinerary ({activeLang.toUpperCase()})</label>
              <textarea
                rows={5}
                value={editItem.suggestedItinerary?.[activeLang] || ""}
                onChange={(e) => setEditItem({ ...editItem, suggestedItinerary: { ...editItem.suggestedItinerary, [activeLang]: e.target.value } })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#C5A862] leading-relaxed font-mono"
                placeholder="Day 1: Arrival & Marina Sunset Dinner Cruise. Day 2: Burj Khalifa 148th Floor & Desert Safari..."
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-6 border-t border-[#C5A862]/20">
            <button
              type="button"
              onClick={() => setEditItem(null)}
              className="px-6 py-3 rounded-full border border-gray-300 text-xs font-bold uppercase text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-[#0A2A1E] text-[#C5A862] text-xs font-bold uppercase tracking-wider hover:bg-[#C5A862] hover:text-[#0A2A1E] transition-colors shadow-lg"
            >
              Save Destination
            </button>
          </div>
        </form>
      )}

      {/* Destinations Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredList.map((item: any) => {
          const itemTitle = item.title?.en || item.slug;
          const itemTagline = item.tagline?.en || "";

          return (
            <div key={item.slug} className="bg-white border border-[#C5A862]/20 rounded-3xl overflow-hidden shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <div>
                <div className="h-44 overflow-hidden relative">
                  <img src={item.image || "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600"} alt={itemTitle} className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-[#0A2A1E] text-[#C5A862] text-[9px] font-extrabold uppercase px-3 py-1 rounded-full border border-[#C5A862]/30 shadow-md">
                    {item.region || "International"}
                  </span>
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="font-serif font-bold text-[#0A2A1E] text-xl">{itemTitle}</h4>
                  <p className="text-xs text-[#C5A862] font-semibold">{itemTagline}</p>
                  <div className="pt-2 text-[11px] text-gray-500 font-light line-clamp-2">
                    {item.description?.en || item.description || "Luxury international destination."}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#FAF8F5] border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => setEditItem(item)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A2A1E] hover:text-[#C5A862] transition-colors cursor-pointer"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  <span>Edit Destination</span>
                </button>
                <button
                  onClick={() => handleDelete(item.slug)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-800 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
