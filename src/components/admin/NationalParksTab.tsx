"use client";

import React, { useState } from "react";
import { Trees, Plus, Trash2, Edit3, Save, X, Search, MapPin, Sparkles, Image as ImageIcon } from "lucide-react";
import { CloudinaryUpload } from "./CloudinaryUpload";
import { createNationalParkAction, updateNationalParkAction, deleteNationalParkAction } from "@/app/actions/admin";
import { syncClientFirestore } from "@/lib/client-db-sync";

interface NationalParksTabProps {
  parks: any[];
  setParks: React.Dispatch<React.SetStateAction<any[]>>;
  showStatus: (text: string, type?: "success" | "error") => void;
  loadCMSData: (showLoader?: boolean) => void;
}

export default function NationalParksTab({
  parks,
  setParks,
  showStatus,
  loadCMSData
}: NationalParksTabProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [editPark, setEditPark] = useState<any>(null);
  const [saving, setSaving] = useState(false);

  const filteredParks = parks.filter((p: any) => {
    const q = searchTerm.toLowerCase();
    const name = (p.name || "").toLowerCase();
    const state = (p.state || "").toLowerCase();
    return name.includes(q) || state.includes(q);
  });

  const handleStartNew = () => {
    setEditPark({
      id: "park-" + Math.random().toString(36).substring(2, 9),
      name: "",
      state: "",
      image: "/images/ranthambore_tiger_safari.png",
      tagline: "",
      desc: "",
      highlights: ["Royal Bengal Tigers", "Jeep Safaris"],
      bestMonths: "October to April",
      isNorthEast: false
    });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editPark || !editPark.name) return showStatus("Park name is required.", "error");

    setSaving(true);
    try {
      const parkId = editPark.id || editPark.slug || editPark.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
      const payload = { ...editPark, id: parkId, slug: parkId };

      // Update local state immediately
      setParks(prev => {
        const idx = prev.findIndex(p => p.id === parkId || p.slug === parkId);
        if (idx !== -1) {
          const copy = [...prev];
          copy[idx] = { ...copy[idx], ...payload };
          return copy;
        }
        return [payload, ...prev];
      });

      await syncClientFirestore("national_parks", parkId, payload, false);

      const isNew = !parks.find(p => p.id === parkId || p.slug === parkId);
      const res = isNew 
        ? await createNationalParkAction(payload) 
        : await updateNationalParkAction(parkId, payload);

      if (res.success) {
        showStatus("National Park saved successfully!", "success");
        setEditPark(null);
        loadCMSData(false);
      } else {
        showStatus(res.error || "Failed to save national park.", "error");
      }
    } catch (err: any) {
      showStatus(err.message || "Failed to save park.", "error");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (parkId: string) => {
    if (!window.confirm("Are you sure you want to delete this National Park?")) return;

    setParks(prev => prev.filter(p => p.id !== parkId && p.slug !== parkId));
    await syncClientFirestore("national_parks", parkId, { isDeleted: true }, true);
    const res = await deleteNationalParkAction(parkId);

    if (res.success) {
      showStatus("National Park deleted.", "success");
      loadCMSData(false);
    } else {
      showStatus(res.error || "Failed to delete national park.", "error");
    }
  };

  const handleHighlightChange = (index: number, val: string) => {
    if (!editPark) return;
    const newHighlights = [...(editPark.highlights || [])];
    newHighlights[index] = val;
    setEditPark({ ...editPark, highlights: newHighlights });
  };

  const handleAddHighlight = () => {
    if (!editPark) return;
    setEditPark({
      ...editPark,
      highlights: [...(editPark.highlights || []), ""]
    });
  };

  const handleRemoveHighlight = (index: number) => {
    if (!editPark) return;
    const newHighlights = (editPark.highlights || []).filter((_: any, i: number) => i !== index);
    setEditPark({ ...editPark, highlights: newHighlights });
  };

  return (
    <div className="space-[#1B1B1B] space-y-8 font-sans">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white border border-gold/15 p-6 rounded-3xl shadow-md">
        <div className="space-y-1">
          <h2 className="text-xl font-serif font-bold text-royal flex items-center gap-2">
            <Trees className="w-5 h-5 text-emerald-700" />
            <span>Manage National Parks & Tiger Reserves</span>
          </h2>
          <p className="text-xs text-royal/60 font-light">
            Create, edit, or remove wildlife reserves, safari details, best seasons, and highlights.
          </p>
        </div>

        <button
          onClick={handleStartNew}
          className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full flex items-center gap-2 transition cursor-pointer shadow-md hover:scale-105 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add New National Park</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white border border-gold/15 p-4 rounded-2xl shadow-sm flex items-center gap-3">
        <Search className="w-4 h-4 text-gold shrink-0" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by park name or state (e.g. Ranthambore, Assam)..."
          className="w-full text-xs outline-none bg-transparent"
        />
      </div>

      {/* EDIT / CREATE MODAL */}
      {editPark && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white border border-gold/30 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative my-8">
            <button
              onClick={() => setEditPark(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-500"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-serif font-bold text-royal mb-6 flex items-center gap-2 border-b border-gold/15 pb-4">
              <Trees className="w-5 h-5 text-emerald-700" />
              <span>{editPark.name ? `Edit: ${editPark.name}` : "Create New National Park"}</span>
            </h3>

            <form onSubmit={handleSave} className="space-y-6 text-xs text-royal">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold block uppercase tracking-wider text-royal/70">Park Name *</label>
                  <input
                    type="text"
                    required
                    value={editPark.name || ""}
                    onChange={(e) => setEditPark({ ...editPark, name: e.target.value })}
                    placeholder="e.g. Bandhavgarh National Park"
                    className="w-full bg-[#FAF8F5] border border-gold/20 p-3 rounded-xl outline-none focus:border-gold"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold block uppercase tracking-wider text-royal/70">State / Region *</label>
                  <input
                    type="text"
                    required
                    value={editPark.state || ""}
                    onChange={(e) => setEditPark({ ...editPark, state: e.target.value })}
                    placeholder="e.g. Madhya Pradesh"
                    className="w-full bg-[#FAF8F5] border border-gold/20 p-3 rounded-xl outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold block uppercase tracking-wider text-royal/70">Sub-Title / Tagline</label>
                <input
                  type="text"
                  value={editPark.tagline || ""}
                  onChange={(e) => setEditPark({ ...editPark, tagline: e.target.value })}
                  placeholder="e.g. Highest Density of Royal Bengal Tigers in India"
                  className="w-full bg-[#FAF8F5] border border-gold/20 p-3 rounded-xl outline-none focus:border-gold"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold block uppercase tracking-wider text-royal/70">Description / Overview</label>
                <textarea
                  rows={4}
                  value={editPark.desc || ""}
                  onChange={(e) => setEditPark({ ...editPark, desc: e.target.value })}
                  placeholder="Detailed summary of wildlife species, safaris, terrain..."
                  className="w-full bg-[#FAF8F5] border border-gold/20 p-3 rounded-xl outline-none focus:border-gold leading-relaxed"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold block uppercase tracking-wider text-royal/70">Best Time to Visit</label>
                  <input
                    type="text"
                    value={editPark.bestMonths || ""}
                    onChange={(e) => setEditPark({ ...editPark, bestMonths: e.target.value })}
                    placeholder="e.g. October to June"
                    className="w-full bg-[#FAF8F5] border border-gold/20 p-3 rounded-xl outline-none focus:border-gold"
                  />
                </div>

                <div className="space-y-1.5 flex flex-col justify-end">
                  <label className="inline-flex items-center gap-2 cursor-pointer bg-[#FAF8F5] border border-gold/20 p-3 rounded-xl">
                    <input
                      type="checkbox"
                      checked={!!editPark.isNorthEast}
                      onChange={(e) => setEditPark({ ...editPark, isNorthEast: e.target.checked })}
                      className="rounded text-emerald-800 focus:ring-emerald-700"
                    />
                    <span className="font-bold uppercase tracking-wider text-royal/80">North-East Region Highlight</span>
                  </label>
                </div>
              </div>

              {/* Cover Image & Upload */}
              <div className="space-y-2">
                <label className="font-bold block uppercase tracking-wider text-royal/70">Featured Cover Image URL</label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={editPark.image || ""}
                    onChange={(e) => setEditPark({ ...editPark, image: e.target.value })}
                    placeholder="/images/ranthambore_tiger_safari.png or https://..."
                    className="w-full bg-[#FAF8F5] border border-gold/20 p-3 rounded-xl outline-none focus:border-gold"
                  />
                </div>
                <CloudinaryUpload
                  onUploadComplete={(url) => setEditPark({ ...editPark, image: url })}
                  label="Upload Park Cover Image"
                />
              </div>

              {/* Highlights Bullet List */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <label className="font-bold uppercase tracking-wider text-royal/70">Park Highlights & Features</label>
                  <button
                    type="button"
                    onClick={handleAddHighlight}
                    className="text-xs text-gold font-bold uppercase tracking-wider hover:underline flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Highlight</span>
                  </button>
                </div>

                <div className="space-y-2">
                  {(editPark.highlights || []).map((h: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={h}
                        onChange={(e) => handleHighlightChange(idx, e.target.value)}
                        placeholder={`Highlight #${idx + 1}`}
                        className="w-full bg-[#FAF8F5] border border-gold/20 p-2.5 rounded-lg outline-none focus:border-gold"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveHighlight(idx)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gold/15 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditPark(null)}
                  className="px-5 py-3 rounded-full border border-gray-300 text-gray-700 font-bold uppercase tracking-wider text-xs hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-7 py-3 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold uppercase tracking-wider text-xs shadow-md flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>{saving ? "Saving..." : "Save Park"}</span>
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* NATIONAL PARKS CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredParks.map((park: any) => (
          <div key={park.id || park.slug} className="bg-white border border-gold/20 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition flex flex-col justify-between group">
            
            {/* Top Image */}
            <div className="h-48 overflow-hidden relative bg-[#0A2A1E]">
              <img
                src={park.image || "/images/destination_fallback.jpg"}
                alt={park.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <span className="absolute bottom-3 left-3 text-white text-xs font-bold flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                <span>{park.state}</span>
              </span>

              {park.isNorthEast && (
                <span className="absolute top-3 right-3 bg-emerald-700 text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  North-East Region
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-5 space-y-3 flex-grow flex flex-col justify-between">
              <div className="space-y-1.5">
                <h3 className="font-serif font-bold text-royal text-lg line-clamp-1">{park.name}</h3>
                {park.tagline && (
                  <p className="text-[10px] uppercase font-bold text-gold tracking-wider line-clamp-1">
                    {park.tagline}
                  </p>
                )}
                <p className="text-xs text-royal/70 font-light line-clamp-3 leading-relaxed pt-1">
                  {park.desc}
                </p>
              </div>

              {/* Highlights */}
              {park.highlights && park.highlights.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gold/10">
                  {park.highlights.slice(0, 3).map((h: string, idx: number) => (
                    <span key={idx} className="bg-[#FAF8F5] border border-gold/15 text-[9px] font-medium text-royal px-2 py-0.5 rounded-full">
                      • {h}
                    </span>
                  ))}
                </div>
              )}

              {/* Controls */}
              <div className="pt-3 border-t border-gold/15 flex items-center justify-between">
                <span className="text-[10px] text-royal/50 font-bold uppercase">
                  {park.bestMonths || "All Year"}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setEditPark(park)}
                    className="p-2 text-emerald-800 hover:bg-emerald-50 rounded-xl border border-emerald-800/20 flex items-center gap-1 text-xs font-bold uppercase tracking-wider"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Edit</span>
                  </button>

                  <button
                    onClick={() => handleDelete(park.id || park.slug)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-xl border border-red-200 flex items-center gap-1 text-xs font-bold uppercase tracking-wider"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
