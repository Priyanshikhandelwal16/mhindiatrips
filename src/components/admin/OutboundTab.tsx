"use client";

import React, { useState } from "react";
import { Globe, Plus, Edit2, Trash2, CheckCircle, AlertTriangle, Sparkles, Image as ImageIcon } from "lucide-react";
import { createOutboundAction, updateOutboundAction, deleteOutboundAction } from "@/app/actions/admin";

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

  const handleCreateNew = () => {
    setEditItem({
      slug: "",
      title: { en: "", es: "", pt: "" },
      tagline: { en: "", es: "", pt: "" },
      region: "Middle East",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600",
      description: { en: "", es: "", pt: "" },
      bestTime: { en: "November to March", es: "De noviembre a marzo", pt: "De novembro a março" },
      suggestedItinerary: { en: "", es: "", pt: "" }
    });
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

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-[#C5A862]/20 shadow-sm">
        <div>
          <h2 className="text-xl font-serif font-bold text-[#0A2A1E] flex items-center gap-2">
            <Globe className="w-5 h-5 text-[#C5A862]" />
            <span>Outbound / International Destinations Management</span>
          </h2>
          <p className="text-xs text-[#1B1B1B]/60 font-light pt-1">
            Manage trips, itineraries, cover photos, and details for international destinations (Dubai, Bali, Maldives, etc.)
          </p>
        </div>
        <button
          onClick={handleCreateNew}
          className="bg-[#0A2A1E] hover:bg-[#C5A862] text-white hover:text-[#0A2A1E] text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-all flex items-center gap-2 shadow-md shrink-0 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Destination</span>
        </button>
      </div>

      {/* Editor Modal / Form */}
      {editItem && (
        <form onSubmit={handleSave} className="bg-white p-8 rounded-3xl border-2 border-[#C5A862] shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-[#C5A862]/20 pb-4">
            <h3 className="text-lg font-serif font-bold text-[#0A2A1E]">
              {editItem.slug ? `Edit Destination: ${editItem.title?.en}` : "New International Destination"}
            </h3>
            <div className="flex gap-2">
              {(["en", "es", "pt"] as const).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setActiveLang(l)}
                  className={`px-3 py-1 text-xs font-bold uppercase rounded-lg border transition-colors ${
                    activeLang === l ? "bg-[#C5A862] text-[#0A2A1E] border-[#C5A862]" : "bg-gray-100 text-gray-600 border-gray-200"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase text-[#0A2A1E]">Tagline ({activeLang.toUpperCase()})</label>
              <input
                type="text"
                value={editItem.tagline?.[activeLang] || ""}
                onChange={(e) => setEditItem({ ...editItem, tagline: { ...editItem.tagline, [activeLang]: e.target.value } })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#C5A862]"
                placeholder="e.g. Burj Khalifa & Desert Safaris"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase text-[#0A2A1E]">Region / Country Category</label>
              <input
                type="text"
                value={editItem.region || ""}
                onChange={(e) => setEditItem({ ...editItem, region: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#C5A862]"
                placeholder="e.g. Middle East, Southeast Asia, Indian Ocean"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase text-[#0A2A1E]">Best Time to Visit ({activeLang.toUpperCase()})</label>
              <input
                type="text"
                value={editItem.bestTime?.[activeLang] || ""}
                onChange={(e) => setEditItem({ ...editItem, bestTime: { ...editItem.bestTime, [activeLang]: e.target.value } })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#C5A862]"
                placeholder="e.g. November to March"
              />
            </div>

            <div className="md:col-span-2 space-y-1.5">
              <label className="text-xs font-bold uppercase text-[#0A2A1E]">Cover Image URL</label>
              <input
                type="text"
                value={editItem.image || ""}
                onChange={(e) => setEditItem({ ...editItem, image: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#C5A862]"
                placeholder="https://images.unsplash.com/..."
              />
            </div>

            <div className="md:col-span-2 space-y-1.5">
              <label className="text-xs font-bold uppercase text-[#0A2A1E]">Overview / Description ({activeLang.toUpperCase()})</label>
              <textarea
                rows={3}
                value={editItem.description?.[activeLang] || ""}
                onChange={(e) => setEditItem({ ...editItem, description: { ...editItem.description, [activeLang]: e.target.value } })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#C5A862]"
              />
            </div>

            <div className="md:col-span-2 space-y-1.5">
              <label className="text-xs font-bold uppercase text-[#0A2A1E]">Suggested Luxury Itinerary ({activeLang.toUpperCase()})</label>
              <textarea
                rows={4}
                value={editItem.suggestedItinerary?.[activeLang] || ""}
                onChange={(e) => setEditItem({ ...editItem, suggestedItinerary: { ...editItem.suggestedItinerary, [activeLang]: e.target.value } })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#C5A862]"
                placeholder="Day 1: Arrival... Day 2: Sightseeing..."
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-[#C5A862]/20">
            <button
              type="button"
              onClick={() => setEditItem(null)}
              className="px-5 py-2.5 rounded-full border border-gray-300 text-xs font-bold uppercase text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-7 py-2.5 rounded-full bg-[#0A2A1E] text-[#C5A862] text-xs font-bold uppercase tracking-wider hover:bg-[#C5A862] hover:text-[#0A2A1E] transition-colors"
            >
              Save Destination
            </button>
          </div>
        </form>
      )}

      {/* Destinations List Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {outboundList.map((item: any) => {
          const itemTitle = item.title?.en || item.slug;
          const itemTagline = item.tagline?.en || "";

          return (
            <div key={item.slug} className="bg-white border border-[#C5A862]/20 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
                <div className="h-40 overflow-hidden relative">
                  <img src={item.image} alt={itemTitle} className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-[#0A2A1E] text-[#C5A862] text-[9px] font-extrabold uppercase px-3 py-1 rounded-full border border-[#C5A862]/30">
                    {item.region}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <h4 className="font-serif font-bold text-[#0A2A1E] text-lg">{itemTitle}</h4>
                  <p className="text-xs text-[#C5A862] font-semibold">{itemTagline}</p>
                </div>
              </div>

              <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => setEditItem(item)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0A2A1E] hover:text-[#C5A862] transition-colors cursor-pointer"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => handleDelete(item.slug)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-800 transition-colors cursor-pointer"
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
