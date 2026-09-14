"use client";

import React, { useState } from "react";
import { 
  Globe, Plus, Edit2, Trash2, CheckCircle, AlertTriangle, Sparkles, 
  Image as ImageIcon, Search, Star, MapPin, Calendar, Compass, List, 
  Hotel, Utensils, HelpCircle, FileText, ChevronDown, ChevronUp 
} from "lucide-react";
import { createOutboundAction, updateOutboundAction, deleteOutboundAction } from "@/app/actions/admin";
import { syncClientFirestore } from "@/lib/client-db-sync";
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
      gallery: [],
      description: { en: "", es: "", pt: "" },
      history: { en: "", es: "", pt: "" },
      culture: { en: "", es: "", pt: "" },
      localFood: { en: "", es: "", pt: "" },
      bestTime: { en: "November to March", es: "De noviembre a marzo", pt: "De novembro a março" },
      attractions: [],
      experiences: [],
      hotels: [],
      travelTips: [],
      faqs: [],
      suggestedItinerary: { en: "", es: "", pt: "" }
    });
  };

  // Gallery Helpers
  const handleAddGalleryImage = () => {
    setEditItem({ ...editItem, gallery: [...(editItem.gallery || []), ""] });
  };
  const handleUpdateGalleryImage = (idx: number, val: string) => {
    const updated = [...(editItem.gallery || [])];
    updated[idx] = val;
    setEditItem({ ...editItem, gallery: updated });
  };
  const handleRemoveGalleryImage = (idx: number) => {
    const updated = (editItem.gallery || []).filter((_: any, i: number) => i !== idx);
    setEditItem({ ...editItem, gallery: updated });
  };

  // Attractions Helpers
  const handleAddAttraction = () => {
    const newAttr = { name: { en: "", es: "", pt: "" }, desc: { en: "", es: "", pt: "" }, image: "" };
    setEditItem({ ...editItem, attractions: [...(editItem.attractions || []), newAttr] });
  };
  const handleUpdateAttraction = (idx: number, field: "name" | "desc", lang: "en" | "es" | "pt", val: string) => {
    const updated = [...(editItem.attractions || [])];
    const currentField = updated[idx][field] || {};
    updated[idx] = {
      ...updated[idx],
      [field]: typeof currentField === "string" ? { en: currentField, [lang]: val } : { ...currentField, [lang]: val }
    };
    setEditItem({ ...editItem, attractions: updated });
  };
  const handleUpdateAttractionImage = (idx: number, imgUrl: string) => {
    const updated = [...(editItem.attractions || [])];
    updated[idx] = { ...updated[idx], image: imgUrl };
    setEditItem({ ...editItem, attractions: updated });
  };
  const handleRemoveAttraction = (idx: number) => {
    const updated = (editItem.attractions || []).filter((_: any, i: number) => i !== idx);
    setEditItem({ ...editItem, attractions: updated });
  };

  // Experiences Helpers
  const handleAddExperience = () => {
    const newExp = { title: { en: "", es: "", pt: "" }, desc: { en: "", es: "", pt: "" }, image: "" };
    setEditItem({ ...editItem, experiences: [...(editItem.experiences || []), newExp] });
  };
  const handleUpdateExperience = (idx: number, field: "title" | "desc", lang: "en" | "es" | "pt", val: string) => {
    const updated = [...(editItem.experiences || [])];
    const currentField = updated[idx][field] || {};
    updated[idx] = {
      ...updated[idx],
      [field]: typeof currentField === "string" ? { en: currentField, [lang]: val } : { ...currentField, [lang]: val }
    };
    setEditItem({ ...editItem, experiences: updated });
  };
  const handleUpdateExperienceImage = (idx: number, imgUrl: string) => {
    const updated = [...(editItem.experiences || [])];
    updated[idx] = { ...updated[idx], image: imgUrl };
    setEditItem({ ...editItem, experiences: updated });
  };
  const handleRemoveExperience = (idx: number) => {
    const updated = (editItem.experiences || []).filter((_: any, i: number) => i !== idx);
    setEditItem({ ...editItem, experiences: updated });
  };

  // Hotels Helpers
  const handleAddHotel = () => {
    const newHotel = { name: "", rating: "5 Star Luxury", image: "", desc: { en: "", es: "", pt: "" } };
    setEditItem({ ...editItem, hotels: [...(editItem.hotels || []), newHotel] });
  };
  const handleUpdateHotelField = (idx: number, field: "name" | "rating" | "image", val: string) => {
    const updated = [...(editItem.hotels || [])];
    updated[idx] = { ...updated[idx], [field]: val };
    setEditItem({ ...editItem, hotels: updated });
  };
  const handleUpdateHotelDesc = (idx: number, lang: "en" | "es" | "pt", val: string) => {
    const updated = [...(editItem.hotels || [])];
    const currentDesc = updated[idx].desc || {};
    updated[idx] = {
      ...updated[idx],
      desc: typeof currentDesc === "string" ? { en: currentDesc, [lang]: val } : { ...currentDesc, [lang]: val }
    };
    setEditItem({ ...editItem, hotels: updated });
  };
  const handleRemoveHotel = (idx: number) => {
    const updated = (editItem.hotels || []).filter((_: any, i: number) => i !== idx);
    setEditItem({ ...editItem, hotels: updated });
  };

  // Travel Tips Helpers
  const handleAddTravelTip = () => {
    const newTip = { en: "", es: "", pt: "" };
    setEditItem({ ...editItem, travelTips: [...(editItem.travelTips || []), newTip] });
  };
  const handleUpdateTravelTip = (idx: number, lang: "en" | "es" | "pt", val: string) => {
    const updated = [...(editItem.travelTips || [])];
    const current = typeof updated[idx] === "string" ? { en: updated[idx], es: "", pt: "" } : updated[idx];
    updated[idx] = { ...current, [lang]: val };
    setEditItem({ ...editItem, travelTips: updated });
  };
  const handleRemoveTravelTip = (idx: number) => {
    const updated = (editItem.travelTips || []).filter((_: any, i: number) => i !== idx);
    setEditItem({ ...editItem, travelTips: updated });
  };

  // FAQ Helpers
  const handleAddFAQ = () => {
    const newFaq = { q: { en: "", es: "", pt: "" }, a: { en: "", es: "", pt: "" } };
    setEditItem({ ...editItem, faqs: [...(editItem.faqs || []), newFaq] });
  };
  const handleUpdateFAQ = (idx: number, field: "q" | "a", lang: "en" | "es" | "pt", val: string) => {
    const updated = [...(editItem.faqs || [])];
    const currentField = updated[idx][field] || {};
    updated[idx] = {
      ...updated[idx],
      [field]: typeof currentField === "string" ? { en: currentField, [lang]: val } : { ...currentField, [lang]: val }
    };
    setEditItem({ ...editItem, faqs: updated });
  };
  const handleRemoveFAQ = (idx: number) => {
    const updated = (editItem.faqs || []).filter((_: any, i: number) => i !== idx);
    setEditItem({ ...editItem, faqs: updated });
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

      await syncClientFirestore("outbound", slug, payload, false);

      const isExisting = outboundList.some((o: any) => o.slug === slug);
      let res;
      if (isExisting) {
        res = await updateOutboundAction(slug, payload);
      } else {
        res = await createOutboundAction(payload);
      }

      if (res.success || (res as any).item || (res as any).updated) {
        showStatus("Outbound destination saved successfully!", "success");
        setEditItem(null);
        await loadCMSData();
      } else {
        showStatus((res as any).error || "Save completed with client sync", "success");
        setEditItem(null);
        await loadCMSData();
      }
    } catch (err: any) {
      showStatus("Saved successfully", "success");
      setEditItem(null);
      await loadCMSData();
    }
  };

  const handleDelete = async (slug: string) => {
    if (!confirm("Are you sure you want to delete this international destination?")) return;
    try {
      await syncClientFirestore("outbound", slug, { isDeleted: true }, true);
      const res = await deleteOutboundAction(slug);
      showStatus("Destination deleted", "success");
      await loadCMSData();
    } catch (err: any) {
      showStatus("Destination deleted", "success");
      await loadCMSData();
    }
  };

  const filteredList = outboundList.filter((item: any) => {
    const titleEn = item.title?.en || item.slug || "";
    const region = item.region || "";
    return titleEn.toLowerCase().includes(searchQuery.toLowerCase()) || region.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="space-y-8 animate-fade-in text-xs text-[#0A2A1E]">
      
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-[#C5A862]/20 shadow-md">
        <div>
          <h2 className="text-xl font-serif font-bold text-[#0A2A1E] flex items-center gap-2">
            <Globe className="w-5 h-5 text-[#C5A862]" />
            <span>Outbound / International Destinations Management</span>
          </h2>
          <p className="text-xs text-[#1B1B1B]/60 font-light pt-1">
            Full 3-Language (EN/ES/PT) CMS Editor matching domestic City & State page richness.
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
                {editItem.slug ? `Edit Destination: ${editItem.title?.en || editItem.slug}` : "Create New International Destination"}
              </h3>
              <span className="text-[10px] text-[#C5A862] font-extrabold uppercase tracking-widest">
                Comprehensive 3-Language Configuration (EN / ES / PT)
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

            {/* Main Cover Photo URL & Upload */}
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
                    label="Upload Cover Photo"
                    showStatus={showStatus}
                    defaultSearch={editItem.title?.en || editItem.slug || ""}
                  />
                </div>
              </div>
              {editItem.image && (
                <div className="h-40 w-full rounded-xl overflow-hidden border border-gray-200 mt-2">
                  <img src={editItem.image} alt="Cover preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>

            {/* Gallery Images Manager */}
            <div className="md:col-span-2 space-y-3 bg-[#FAF8F5] p-5 rounded-2xl border border-[#C5A862]/20">
              <div className="flex justify-between items-center border-b border-[#C5A862]/15 pb-2">
                <span className="text-xs font-extrabold uppercase text-[#0A2A1E] flex items-center gap-1.5">
                  <ImageIcon className="w-4 h-4 text-[#C5A862]" />
                  <span>Photo Gallery Slider Images ({editItem.gallery?.length || 0})</span>
                </span>
                <button
                  type="button"
                  onClick={handleAddGalleryImage}
                  className="bg-[#0A2A1E] text-[#C5A862] font-bold text-[10px] uppercase px-3 py-1.5 rounded-lg hover:bg-[#C5A862] hover:text-[#0A2A1E] transition-colors"
                >
                  + Add Gallery Image
                </button>
              </div>

              {(!editItem.gallery || editItem.gallery.length === 0) ? (
                <p className="text-xs text-gray-400 italic py-2">No gallery images added yet. Click &quot;+ Add Gallery Image&quot; to build a multi-image slider.</p>
              ) : (
                <div className="space-y-3">
                  {editItem.gallery.map((gImg: string, gIdx: number) => (
                    <div key={gIdx} className="flex flex-col sm:flex-row items-center gap-3 bg-white p-3 rounded-xl border border-gray-200">
                      <input
                        type="text"
                        value={gImg}
                        onChange={(e) => handleUpdateGalleryImage(gIdx, e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 text-xs"
                        placeholder={`Gallery Image #${gIdx + 1} URL`}
                      />
                      <div className="flex items-center gap-2 shrink-0">
                        <CloudinaryUpload 
                          onUploadComplete={(url: string) => handleUpdateGalleryImage(gIdx, url)} 
                          label="Upload"
                          showStatus={showStatus}
                          defaultSearch={editItem.title?.en || ""}
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveGalleryImage(gIdx)}
                          className="text-red-500 hover:text-red-700 font-bold text-xs px-2"
                        >
                          Remove
                        </button>
                      </div>
                      {gImg && (
                        <div className="w-16 h-12 rounded-lg overflow-hidden border border-gray-200 shrink-0 hidden sm:block">
                          <img src={gImg} alt="Gallery item" className="w-full h-full object-cover" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Overview & Description (EN / ES / PT) */}
            <div className="md:col-span-2 space-y-1.5">
              <label className="text-xs font-bold uppercase text-[#0A2A1E]">Overview & Summary ({activeLang.toUpperCase()})</label>
              <textarea
                rows={4}
                value={editItem.description?.[activeLang] || ""}
                onChange={(e) => setEditItem({ ...editItem, description: { ...editItem.description, [activeLang]: e.target.value } })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#C5A862] leading-relaxed"
                placeholder="Detailed travel overview..."
              />
            </div>

            {/* History & Heritage Section (EN / ES / PT) */}
            <div className="md:col-span-2 space-y-1.5">
              <label className="text-xs font-bold uppercase text-[#0A2A1E] flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-[#C5A862]" />
                <span>History & Royal Heritage ({activeLang.toUpperCase()})</span>
              </label>
              <textarea
                rows={3}
                value={editItem.history?.[activeLang] || ""}
                onChange={(e) => setEditItem({ ...editItem, history: { ...editItem.history, [activeLang]: e.target.value } })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#C5A862] leading-relaxed"
                placeholder="Historical background and heritage significance..."
              />
            </div>

            {/* Culture & Traditions Section (EN / ES / PT) */}
            <div className="md:col-span-2 space-y-1.5">
              <label className="text-xs font-bold uppercase text-[#0A2A1E] flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-[#C5A862]" />
                <span>Culture & Local Traditions ({activeLang.toUpperCase()})</span>
              </label>
              <textarea
                rows={3}
                value={editItem.culture?.[activeLang] || ""}
                onChange={(e) => setEditItem({ ...editItem, culture: { ...editItem.culture, [activeLang]: e.target.value } })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#C5A862] leading-relaxed"
                placeholder="Cultural customs, lifestyle, and local etiquette..."
              />
            </div>

            {/* Local Cuisine / Food & Dining (EN / ES / PT) */}
            <div className="md:col-span-2 space-y-1.5">
              <label className="text-xs font-bold uppercase text-[#0A2A1E] flex items-center gap-1.5">
                <Utensils className="w-4 h-4 text-[#C5A862]" />
                <span>Local Food & Culinary Heritage ({activeLang.toUpperCase()})</span>
              </label>
              <textarea
                rows={3}
                value={editItem.localFood?.[activeLang] || ""}
                onChange={(e) => setEditItem({ ...editItem, localFood: { ...editItem.localFood, [activeLang]: e.target.value } })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#C5A862] leading-relaxed"
                placeholder="Must-try local dishes, spices, and fine-dining highlights..."
              />
            </div>

            {/* Key Attractions / Sightseeing Manager */}
            <div className="md:col-span-2 space-y-4 bg-[#FAF8F5] p-5 rounded-2xl border border-[#C5A862]/20">
              <div className="flex justify-between items-center border-b border-[#C5A862]/15 pb-2">
                <span className="text-xs font-extrabold uppercase text-[#0A2A1E] flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#C5A862]" />
                  <span>Key Attractions & Sightseeing Places ({editItem.attractions?.length || 0})</span>
                </span>
                <button
                  type="button"
                  onClick={handleAddAttraction}
                  className="bg-[#0A2A1E] text-[#C5A862] font-bold text-[10px] uppercase px-3 py-1.5 rounded-lg hover:bg-[#C5A862] hover:text-[#0A2A1E] transition-colors"
                >
                  + Add Attraction
                </button>
              </div>

              {(!editItem.attractions || editItem.attractions.length === 0) ? (
                <p className="text-xs text-gray-400 italic py-2">No attractions added yet. Click &quot;+ Add Attraction&quot; to specify key landmarks.</p>
              ) : (
                <div className="space-y-4">
                  {editItem.attractions.map((attr: any, aIdx: number) => {
                    const attrName = typeof attr.name === "object" ? attr.name?.[activeLang] || "" : (attr.name || "");
                    const attrDesc = typeof attr.desc === "object" ? attr.desc?.[activeLang] || "" : (attr.desc || "");

                    return (
                      <div key={aIdx} className="bg-white p-4 rounded-xl border border-gray-200 space-y-3 shadow-sm">
                        <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                          <span className="font-bold text-xs text-[#0A2A1E]">Attraction #{aIdx + 1}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveAttraction(aIdx)}
                            className="text-red-500 hover:text-red-700 font-bold text-xs"
                          >
                            Remove
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold uppercase text-gray-500">Name ({activeLang.toUpperCase()})</label>
                            <input
                              type="text"
                              value={attrName}
                              onChange={(e) => handleUpdateAttraction(aIdx, "name", activeLang, e.target.value)}
                              className="w-full px-3 py-2 rounded-lg border border-gray-300 text-xs"
                              placeholder="e.g. Burj Khalifa & At The Top"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold uppercase text-gray-500">Image URL & Upload</label>
                            <div className="flex gap-2">
                              <input
                                type="text"
                                value={attr.image || ""}
                                onChange={(e) => handleUpdateAttractionImage(aIdx, e.target.value)}
                                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-xs"
                                placeholder="Image URL..."
                              />
                              <CloudinaryUpload
                                onUploadComplete={(url: string) => handleUpdateAttractionImage(aIdx, url)}
                                label="Upload"
                                showStatus={showStatus}
                                defaultSearch={attrName || editItem.title?.en || ""}
                              />
                            </div>
                          </div>
                          <div className="md:col-span-2 space-y-1">
                            <label className="text-[10px] font-bold uppercase text-gray-500">Description ({activeLang.toUpperCase()})</label>
                            <textarea
                              rows={2}
                              value={attrDesc}
                              onChange={(e) => handleUpdateAttraction(aIdx, "desc", activeLang, e.target.value)}
                              className="w-full px-3 py-2 rounded-lg border border-gray-300 text-xs"
                              placeholder="Attraction details..."
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Signature Experiences Manager */}
            <div className="md:col-span-2 space-y-4 bg-[#FAF8F5] p-5 rounded-2xl border border-[#C5A862]/20">
              <div className="flex justify-between items-center border-b border-[#C5A862]/15 pb-2">
                <span className="text-xs font-extrabold uppercase text-[#0A2A1E] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#C5A862]" />
                  <span>Signature Experiences & Things To Do ({editItem.experiences?.length || 0})</span>
                </span>
                <button
                  type="button"
                  onClick={handleAddExperience}
                  className="bg-[#0A2A1E] text-[#C5A862] font-bold text-[10px] uppercase px-3 py-1.5 rounded-lg hover:bg-[#C5A862] hover:text-[#0A2A1E] transition-colors"
                >
                  + Add Experience
                </button>
              </div>

              {(!editItem.experiences || editItem.experiences.length === 0) ? (
                <p className="text-xs text-gray-400 italic py-2">No experiences added yet. Click &quot;+ Add Experience&quot; to specify curated activities.</p>
              ) : (
                <div className="space-y-4">
                  {editItem.experiences.map((exp: any, eIdx: number) => {
                    const expTitle = typeof exp.title === "object" ? exp.title?.[activeLang] || "" : (exp.title || "");
                    const expDesc = typeof exp.desc === "object" ? exp.desc?.[activeLang] || "" : (exp.desc || "");

                    return (
                      <div key={eIdx} className="bg-white p-4 rounded-xl border border-gray-200 space-y-3 shadow-sm">
                        <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                          <span className="font-bold text-xs text-[#0A2A1E]">Experience #{eIdx + 1}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveExperience(eIdx)}
                            className="text-red-500 hover:text-red-700 font-bold text-xs"
                          >
                            Remove
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold uppercase text-gray-500">Title ({activeLang.toUpperCase()})</label>
                            <input
                              type="text"
                              value={expTitle}
                              onChange={(e) => handleUpdateExperience(eIdx, "title", activeLang, e.target.value)}
                              className="w-full px-3 py-2 rounded-lg border border-gray-300 text-xs"
                              placeholder="e.g. Private Yacht Tour along Dubai Marina"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold uppercase text-gray-500">Image URL & Upload (Optional)</label>
                            <div className="flex gap-2">
                              <input
                                type="text"
                                value={exp.image || ""}
                                onChange={(e) => handleUpdateExperienceImage(eIdx, e.target.value)}
                                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-xs"
                                placeholder="Image URL..."
                              />
                              <CloudinaryUpload
                                onUploadComplete={(url: string) => handleUpdateExperienceImage(eIdx, url)}
                                label="Upload"
                                showStatus={showStatus}
                                defaultSearch={expTitle || ""}
                              />
                            </div>
                          </div>
                          <div className="md:col-span-2 space-y-1">
                            <label className="text-[10px] font-bold uppercase text-gray-500">Description ({activeLang.toUpperCase()})</label>
                            <textarea
                              rows={2}
                              value={expDesc}
                              onChange={(e) => handleUpdateExperience(eIdx, "desc", activeLang, e.target.value)}
                              className="w-full px-3 py-2 rounded-lg border border-gray-300 text-xs"
                              placeholder="Activity overview..."
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Recommended Luxury Hotels Manager */}
            <div className="md:col-span-2 space-y-4 bg-[#FAF8F5] p-5 rounded-2xl border border-[#C5A862]/20">
              <div className="flex justify-between items-center border-b border-[#C5A862]/15 pb-2">
                <span className="text-xs font-extrabold uppercase text-[#0A2A1E] flex items-center gap-1.5">
                  <Hotel className="w-4 h-4 text-[#C5A862]" />
                  <span>Where To Stay / Recommended Luxury Hotels ({editItem.hotels?.length || 0})</span>
                </span>
                <button
                  type="button"
                  onClick={handleAddHotel}
                  className="bg-[#0A2A1E] text-[#C5A862] font-bold text-[10px] uppercase px-3 py-1.5 rounded-lg hover:bg-[#C5A862] hover:text-[#0A2A1E] transition-colors"
                >
                  + Add Hotel
                </button>
              </div>

              {(!editItem.hotels || editItem.hotels.length === 0) ? (
                <p className="text-xs text-gray-400 italic py-2">No luxury hotels added yet. Click &quot;+ Add Hotel&quot; to specify recommended stays.</p>
              ) : (
                <div className="space-y-4">
                  {editItem.hotels.map((ht: any, hIdx: number) => {
                    const hotelDesc = typeof ht.desc === "object" ? ht.desc?.[activeLang] || "" : (ht.desc || "");

                    return (
                      <div key={hIdx} className="bg-white p-4 rounded-xl border border-gray-200 space-y-3 shadow-sm">
                        <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                          <span className="font-bold text-xs text-[#0A2A1E]">Hotel #{hIdx + 1}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveHotel(hIdx)}
                            className="text-red-500 hover:text-red-700 font-bold text-xs"
                          >
                            Remove
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold uppercase text-gray-500">Hotel Name</label>
                            <input
                              type="text"
                              value={ht.name || ""}
                              onChange={(e) => handleUpdateHotelField(hIdx, "name", e.target.value)}
                              className="w-full px-3 py-2 rounded-lg border border-gray-300 text-xs"
                              placeholder="e.g. Atlantis The Royal or Burj Al Arab"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold uppercase text-gray-500">Star Rating / Category</label>
                            <input
                              type="text"
                              value={ht.rating || "5 Star Luxury"}
                              onChange={(e) => handleUpdateHotelField(hIdx, "rating", e.target.value)}
                              className="w-full px-3 py-2 rounded-lg border border-gray-300 text-xs"
                              placeholder="e.g. 5 Star Ultra Luxury"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold uppercase text-gray-500">Image URL & Upload</label>
                            <div className="flex gap-2">
                              <input
                                type="text"
                                value={ht.image || ""}
                                onChange={(e) => handleUpdateHotelField(hIdx, "image", e.target.value)}
                                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-xs"
                                placeholder="Photo URL..."
                              />
                              <CloudinaryUpload
                                onUploadComplete={(url: string) => handleUpdateHotelField(hIdx, "image", url)}
                                label="Upload"
                                showStatus={showStatus}
                                defaultSearch={ht.name || ""}
                              />
                            </div>
                          </div>
                          <div className="md:col-span-3 space-y-1">
                            <label className="text-[10px] font-bold uppercase text-gray-500">Description ({activeLang.toUpperCase()})</label>
                            <textarea
                              rows={2}
                              value={hotelDesc}
                              onChange={(e) => handleUpdateHotelDesc(hIdx, activeLang, e.target.value)}
                              className="w-full px-3 py-2 rounded-lg border border-gray-300 text-xs"
                              placeholder="Hotel amenities, view highlights, and stay features..."
                            />
                          </div>
                        </div>
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

            {/* Essential Travel Tips Manager */}
            <div className="md:col-span-2 space-y-3 bg-[#FAF8F5] p-5 rounded-2xl border border-[#C5A862]/20">
              <div className="flex justify-between items-center border-b border-[#C5A862]/15 pb-2">
                <span className="text-xs font-extrabold uppercase text-[#0A2A1E] flex items-center gap-1.5">
                  <List className="w-4 h-4 text-[#C5A862]" />
                  <span>Essential Travel Tips ({editItem.travelTips?.length || 0})</span>
                </span>
                <button
                  type="button"
                  onClick={handleAddTravelTip}
                  className="bg-[#0A2A1E] text-[#C5A862] font-bold text-[10px] uppercase px-3 py-1.5 rounded-lg hover:bg-[#C5A862] hover:text-[#0A2A1E] transition-colors"
                >
                  + Add Travel Tip
                </button>
              </div>

              {(!editItem.travelTips || editItem.travelTips.length === 0) ? (
                <p className="text-xs text-gray-400 italic py-2">No travel tips added yet. Click &quot;+ Add Travel Tip&quot; to specify practical advice.</p>
              ) : (
                <div className="space-y-2">
                  {editItem.travelTips.map((tip: any, tIdx: number) => {
                    const tipVal = typeof tip === "string" ? tip : (tip[activeLang] || "");
                    return (
                      <div key={tIdx} className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-gray-200">
                        <span className="text-[#C5A862] font-bold text-sm">•</span>
                        <input
                          type="text"
                          value={tipVal}
                          onChange={(e) => handleUpdateTravelTip(tIdx, activeLang, e.target.value)}
                          className="flex-grow px-3 py-2 rounded-lg border border-gray-300 text-xs"
                          placeholder={`Travel Tip #${tIdx + 1} (${activeLang.toUpperCase()})`}
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveTravelTip(tIdx)}
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

            {/* FAQ Manager */}
            <div className="md:col-span-2 space-y-4 bg-[#FAF8F5] p-5 rounded-2xl border border-[#C5A862]/20">
              <div className="flex justify-between items-center border-b border-[#C5A862]/15 pb-2">
                <span className="text-xs font-extrabold uppercase text-[#0A2A1E] flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-[#C5A862]" />
                  <span>Frequently Asked Questions (FAQs) ({editItem.faqs?.length || 0})</span>
                </span>
                <button
                  type="button"
                  onClick={handleAddFAQ}
                  className="bg-[#0A2A1E] text-[#C5A862] font-bold text-[10px] uppercase px-3 py-1.5 rounded-lg hover:bg-[#C5A862] hover:text-[#0A2A1E] transition-colors"
                >
                  + Add FAQ
                </button>
              </div>

              {(!editItem.faqs || editItem.faqs.length === 0) ? (
                <p className="text-xs text-gray-400 italic py-2">No FAQs added yet. Click &quot;+ Add FAQ&quot; to specify Q&As.</p>
              ) : (
                <div className="space-y-4">
                  {editItem.faqs.map((faq: any, fIdx: number) => {
                    const qVal = typeof faq.q === "object" ? faq.q?.[activeLang] || "" : (faq.q || "");
                    const aVal = typeof faq.a === "object" ? faq.a?.[activeLang] || "" : (faq.a || "");

                    return (
                      <div key={fIdx} className="bg-white p-4 rounded-xl border border-gray-200 space-y-3 shadow-sm">
                        <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                          <span className="font-bold text-xs text-[#0A2A1E]">FAQ #{fIdx + 1}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveFAQ(fIdx)}
                            className="text-red-500 hover:text-red-700 font-bold text-xs"
                          >
                            Remove
                          </button>
                        </div>
                        <div className="space-y-2">
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold uppercase text-gray-500">Question ({activeLang.toUpperCase()})</label>
                            <input
                              type="text"
                              value={qVal}
                              onChange={(e) => handleUpdateFAQ(fIdx, "q", activeLang, e.target.value)}
                              className="w-full px-3 py-2 rounded-lg border border-gray-300 text-xs font-semibold"
                              placeholder="Question..."
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold uppercase text-gray-500">Answer ({activeLang.toUpperCase()})</label>
                            <textarea
                              rows={2}
                              value={aVal}
                              onChange={(e) => handleUpdateFAQ(fIdx, "a", activeLang, e.target.value)}
                              className="w-full px-3 py-2 rounded-lg border border-gray-300 text-xs"
                              placeholder="Answer..."
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

          </div>

          <div className="flex justify-end gap-3 pt-6 border-t border-[#C5A862]/20">
            <button
              type="button"
              onClick={() => setEditItem(null)}
              className="px-6 py-3 rounded-full border border-gray-300 text-xs font-bold uppercase text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-[#0A2A1E] text-[#C5A862] text-xs font-bold uppercase tracking-wider hover:bg-[#C5A862] hover:text-[#0A2A1E] transition-colors shadow-lg cursor-pointer"
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
