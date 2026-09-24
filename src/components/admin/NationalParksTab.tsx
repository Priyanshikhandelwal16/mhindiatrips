"use client";

import React, { useState } from "react";
import { 
  Trees, Plus, Trash2, Edit3, Save, X, Search, MapPin, Sparkles, Image as ImageIcon, Globe, CheckCircle2 
} from "lucide-react";
import { CloudinaryUpload } from "./CloudinaryUpload";
import { createNationalParkAction, updateNationalParkAction, deleteNationalParkAction } from "@/app/actions/admin";
import { syncClientFirestore } from "@/lib/client-db-sync";
import { extractLocalizedString } from "@/lib/utils";

interface NationalParksTabProps {
  parks: any[];
  setParks: React.Dispatch<React.SetStateAction<any[]>>;
  showStatus: (text: string, type?: "success" | "error") => void;
  loadCMSData: (showLoader?: boolean) => void;
}

type LangKey = "en" | "es" | "pt";

export default function NationalParksTab({
  parks,
  setParks,
  showStatus,
  loadCMSData
}: NationalParksTabProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [editPark, setEditPark] = useState<any>(null);
  const [activeLang, setActiveLang] = useState<LangKey>("en");
  const [saving, setSaving] = useState(false);

  // Helper to extract language value safely
  const getVal = (field: any, lang: LangKey): string => {
    if (field === null || field === undefined) return "";
    if (typeof field === "string") return field;
    if (typeof field === "object") return field[lang] || field.en || "";
    return "";
  };

  // Helper to update localized object field
  const setVal = (current: any, lang: LangKey, val: string) => {
    const base = typeof current === "object" && current !== null
      ? { en: "", es: "", pt: "", ...current }
      : { en: typeof current === "string" ? current : "", es: "", pt: "" };
    return { ...base, [lang]: val };
  };

  const filteredParks = parks.filter((p: any) => {
    const q = searchTerm.toLowerCase();
    const nameEn = getVal(p.name, "en").toLowerCase();
    const nameEs = getVal(p.name, "es").toLowerCase();
    const namePt = getVal(p.name, "pt").toLowerCase();
    const stateEn = getVal(p.state, "en").toLowerCase();
    return nameEn.includes(q) || nameEs.includes(q) || namePt.includes(q) || stateEn.includes(q);
  });

  const handleStartNew = () => {
    setEditPark({
      id: "park-" + Math.random().toString(36).substring(2, 9),
      name: { en: "", es: "", pt: "" },
      state: { en: "", es: "", pt: "" },
      image: "/images/ranthambore_tiger_safari.png",
      tagline: { en: "", es: "", pt: "" },
      desc: { en: "", es: "", pt: "" },
      highlights: [
        { en: "Royal Bengal Tiger Safaris", es: "Safaris de Tigre de Bengala", pt: "Safáris de Tigre de Bengala" },
        { en: "Jeep Safaris", es: "Safaris en Jeep", pt: "Safáris em Jeep" }
      ],
      bestMonths: { en: "October to June", es: "Octubre a Junio", pt: "Outubro a Junho" },
      isNorthEast: false
    });
    setActiveLang("en");
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editPark) return;

    const nameStr = getVal(editPark.name, "en") || getVal(editPark.name, "es") || getVal(editPark.name, "pt");
    if (!nameStr) return showStatus("Park name (English) is required.", "error");

    setSaving(true);
    try {
      const parkId = editPark.id || editPark.slug || nameStr.toLowerCase().replace(/[^a-z0-9]/g, '-');
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
      let savedSuccess = false;

      try {
        const res = isNew 
          ? await createNationalParkAction(payload) 
          : await updateNationalParkAction(parkId, payload);
        if (res && res.success) savedSuccess = true;
      } catch (err: any) {
        console.warn("[Save Park] Server Action failed, trying REST fallback:", err);
      }

      if (!savedSuccess) {
        const apiRes = await fetch("/api/admin/save-park", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ parkId, payload, isNew })
        });
        const apiJson = await apiRes.json();
        if (apiJson && apiJson.success) savedSuccess = true;
      }

      if (savedSuccess) {
        showStatus("National Park saved successfully!", "success");
        setEditPark(null);
        loadCMSData(false);
      } else {
        showStatus("Failed to save national park.", "error");
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
    if (editPark && (editPark.id === parkId || editPark.slug === parkId)) {
      setEditPark(null);
    }
    await syncClientFirestore("national_parks", parkId, { isDeleted: true }, true);
    
    let deletedSuccess = false;
    try {
      const res = await deleteNationalParkAction(parkId);
      if (res && res.success) deletedSuccess = true;
    } catch (err: any) {
      console.warn("[Delete Park] Server Action failed, trying REST fallback:", err);
    }

    if (!deletedSuccess) {
      try {
        const apiRes = await fetch("/api/admin/save-park", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ parkId, action: "delete" })
        });
        const apiJson = await apiRes.json();
        if (apiJson && apiJson.success) deletedSuccess = true;
      } catch (e) {}
    }

    if (deletedSuccess) {
      showStatus("National Park deleted successfully.", "success");
      loadCMSData(false);
    } else {
      showStatus("Failed to delete national park.", "error");
    }
  };

  const handleHighlightChange = (index: number, lang: LangKey, val: string) => {
    if (!editPark) return;
    const newHighlights = [...(editPark.highlights || [])];
    const currItem = newHighlights[index];

    let updatedItem: any = {};
    if (typeof currItem === "string") {
      updatedItem = { en: lang === "en" ? val : currItem, es: lang === "es" ? val : "", pt: lang === "pt" ? val : "" };
    } else if (typeof currItem === "object" && currItem !== null) {
      updatedItem = { ...currItem, [lang]: val };
    } else {
      updatedItem = { en: "", es: "", pt: "", [lang]: val };
    }

    newHighlights[index] = updatedItem;
    setEditPark({ ...editPark, highlights: newHighlights });
  };

  const handleAddHighlight = () => {
    if (!editPark) return;
    setEditPark({
      ...editPark,
      highlights: [...(editPark.highlights || []), { en: "", es: "", pt: "" }]
    });
  };

  const handleRemoveHighlight = (index: number) => {
    if (!editPark) return;
    const newHighlights = (editPark.highlights || []).filter((_: any, i: number) => i !== index);
    setEditPark({ ...editPark, highlights: newHighlights });
  };

  return (
    <div className="space-y-8 font-sans text-royal">
      
      {/* Top Banner & Control Bar */}
      <div className="bg-white border border-gold/20 p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="p-2.5 bg-emerald-800/10 text-emerald-800 rounded-2xl">
              <Trees className="w-6 h-6" />
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-royal flex items-center gap-2">
                <span>National Parks & Tiger Reserves</span>
                <span className="text-xs bg-emerald-100 text-emerald-800 font-sans px-2.5 py-0.5 rounded-full font-bold">
                  {parks.length} Parks
                </span>
              </h2>
              <p className="text-xs text-royal/60 font-light">
                Full 3-Language (EN / ES / PT) CMS Editor for Wildlife Sanctuaries & Safaris
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={handleStartNew}
          className="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-2xl flex items-center justify-center gap-2 transition cursor-pointer shadow-md hover:scale-[1.02] shrink-0"
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
          placeholder="Search parks by name or state in English, Spanish or Portuguese..."
          className="w-full text-xs outline-none bg-transparent"
        />
        {searchTerm && (
          <button 
            onClick={() => setSearchTerm("")}
            className="text-xs text-royal/40 hover:text-royal px-2"
          >
            Clear
          </button>
        )}
      </div>

      {/* EDIT / CREATE MODAL - DESKTOP OPTIMIZED WITH STICKY HEADER & FOOTER */}
      {editPark && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md overflow-hidden animate-fade-in">
          <div className="bg-white border border-gold/30 rounded-3xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl relative overflow-hidden">
            
            {/* Modal Sticky Header */}
            <div className="px-6 py-4 sm:px-8 sm:py-5 border-b border-gold/15 bg-white flex items-center justify-between shrink-0 z-10">
              <div className="flex items-center gap-3">
                <span className="p-2 bg-emerald-100 text-emerald-800 rounded-xl">
                  <Trees className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-lg font-serif font-bold text-royal line-clamp-1">
                    {getVal(editPark.name, "en") ? `Edit: ${getVal(editPark.name, "en")}` : "Create New National Park"}
                  </h3>
                  <span className="text-[10px] text-royal/50 font-bold uppercase tracking-wider">
                    3-Language CMS Configuration
                  </span>
                </div>
              </div>

              {/* Header Right Actions */}
              <div className="flex items-center gap-3">
                {/* Language Switcher Tabs */}
                <div className="flex items-center bg-[#FAF8F5] p-1 rounded-2xl border border-gold/20">
                  <button
                    type="button"
                    onClick={() => setActiveLang("en")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                      activeLang === "en" ? "bg-emerald-800 text-white shadow-sm" : "text-royal/60 hover:text-royal"
                    }`}
                  >
                    <span>🇬🇧</span>
                    <span>English</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveLang("es")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                      activeLang === "es" ? "bg-emerald-800 text-white shadow-sm" : "text-royal/60 hover:text-royal"
                    }`}
                  >
                    <span>🇪🇸</span>
                    <span>Español</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveLang("pt")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                      activeLang === "pt" ? "bg-emerald-800 text-white shadow-sm" : "text-royal/60 hover:text-royal"
                    }`}
                  >
                    <span>🇵🇹</span>
                    <span>Português</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setEditPark(null)}
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body - Scrollable */}
            <form id="national-park-form" onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-xs text-royal">
              
              {/* Language Banner Indicator */}
              <div className="bg-[#FAF8F5] border border-gold/20 p-3 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-emerald-800" />
                  <span className="font-bold text-royal/80">
                    Editing Content in:{" "}
                    <span className="text-emerald-800 font-extrabold uppercase">
                      {activeLang === "en" ? "English (EN)" : activeLang === "es" ? "Español (ES)" : "Português (PT)"}
                    </span>
                  </span>
                </div>
                <span className="text-[10px] text-royal/50 font-medium">
                  Switch tabs in header to translate all park details.
                </span>
              </div>

              {/* General Core Settings */}
              <div className="bg-white border border-gold/15 p-5 rounded-2xl space-y-4 shadow-sm">
                <h4 className="font-serif font-bold text-sm text-royal text-emerald-900 border-b border-gold/10 pb-2">
                  Media & Regional Options
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Cover Image */}
                  <div className="space-y-1.5">
                    <label className="font-bold block uppercase tracking-wider text-royal/70">
                      Featured Cover Image URL *
                    </label>
                    <input
                      type="text"
                      required
                      value={editPark.image || ""}
                      onChange={(e) => setEditPark({ ...editPark, image: e.target.value })}
                      placeholder="/images/ranthambore_tiger_safari.png or https://..."
                      className="w-full bg-[#FAF8F5] border border-gold/20 p-3 rounded-xl outline-none focus:border-emerald-800"
                    />
                    <CloudinaryUpload
                      onUploadComplete={(url) => setEditPark({ ...editPark, image: url })}
                      label="Upload Park Cover Image"
                    />
                  </div>

                  {/* North East Checkbox */}
                  <div className="space-y-1.5 flex flex-col justify-center">
                    <label className="font-bold block uppercase tracking-wider text-royal/70 mb-2">
                      Regional Categorization
                    </label>
                    <label className="inline-flex items-center gap-3 cursor-pointer bg-[#FAF8F5] border border-gold/20 p-3.5 rounded-xl hover:border-emerald-800 transition">
                      <input
                        type="checkbox"
                        checked={!!editPark.isNorthEast}
                        onChange={(e) => setEditPark({ ...editPark, isNorthEast: e.target.checked })}
                        className="w-4 h-4 rounded text-emerald-800 focus:ring-emerald-700 cursor-pointer"
                      />
                      <div>
                        <span className="font-bold uppercase tracking-wider text-royal block">
                          North-East Region Highlight
                        </span>
                        <span className="text-[10px] text-royal/60">
                          Displays special "Featured North-East" badge across site.
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Localized Form Fields */}
              <div className="bg-white border border-gold/15 p-5 rounded-2xl space-y-4 shadow-sm">
                <h4 className="font-serif font-bold text-sm text-emerald-900 border-b border-gold/10 pb-2 flex items-center justify-between">
                  <span>Park Information ({activeLang.toUpperCase()})</span>
                  <span className="text-[10px] text-royal/50 font-sans font-normal">
                    Fields automatically save per selected language.
                  </span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Park Name */}
                  <div className="space-y-1.5">
                    <label className="font-bold block uppercase tracking-wider text-royal/70">
                      Park Name ({activeLang.toUpperCase()}) *
                    </label>
                    <input
                      type="text"
                      required={activeLang === "en"}
                      value={getVal(editPark.name, activeLang)}
                      onChange={(e) => setEditPark({ ...editPark, name: setVal(editPark.name, activeLang, e.target.value) })}
                      placeholder={activeLang === "es" ? "e.g. Parque Nacional Jim Corbett" : activeLang === "pt" ? "e.g. Parque Nacional Jim Corbett" : "e.g. Jim Corbett National Park"}
                      className="w-full bg-[#FAF8F5] border border-gold/20 p-3 rounded-xl outline-none focus:border-emerald-800"
                    />
                  </div>

                  {/* State / Region */}
                  <div className="space-y-1.5">
                    <label className="font-bold block uppercase tracking-wider text-royal/70">
                      State / Region ({activeLang.toUpperCase()}) *
                    </label>
                    <input
                      type="text"
                      required={activeLang === "en"}
                      value={getVal(editPark.state, activeLang)}
                      onChange={(e) => setEditPark({ ...editPark, state: setVal(editPark.state, activeLang, e.target.value) })}
                      placeholder={activeLang === "es" ? "e.g. Uttarakhand (Noreste)" : activeLang === "pt" ? "e.g. Uttarakhand (Nordeste)" : "e.g. Uttarakhand"}
                      className="w-full bg-[#FAF8F5] border border-gold/20 p-3 rounded-xl outline-none focus:border-emerald-800"
                    />
                  </div>
                </div>

                {/* Tagline */}
                <div className="space-y-1.5">
                  <label className="font-bold block uppercase tracking-wider text-royal/70">
                    Sub-Title / Tagline ({activeLang.toUpperCase()})
                  </label>
                  <input
                    type="text"
                    value={getVal(editPark.tagline, activeLang)}
                    onChange={(e) => setEditPark({ ...editPark, tagline: setVal(editPark.tagline, activeLang, e.target.value) })}
                    placeholder={activeLang === "es" ? "e.g. El Primer Parque Nacional de la India..." : "e.g. India's First National Park in Himalayan Foothills"}
                    className="w-full bg-[#FAF8F5] border border-gold/20 p-3 rounded-xl outline-none focus:border-emerald-800"
                  />
                </div>

                {/* Description */}
                <div className="space-y-1.5">
                  <label className="font-bold block uppercase tracking-wider text-royal/70">
                    Description / Overview ({activeLang.toUpperCase()})
                  </label>
                  <textarea
                    rows={4}
                    value={getVal(editPark.desc, activeLang)}
                    onChange={(e) => setEditPark({ ...editPark, desc: setVal(editPark.desc, activeLang, e.target.value) })}
                    placeholder="Detailed summary of wildlife species, safaris, terrain..."
                    className="w-full bg-[#FAF8F5] border border-gold/20 p-3 rounded-xl outline-none focus:border-emerald-800 leading-relaxed"
                  />
                </div>

                {/* Best Time to Visit */}
                <div className="space-y-1.5">
                  <label className="font-bold block uppercase tracking-wider text-royal/70">
                    Best Time to Visit ({activeLang.toUpperCase()})
                  </label>
                  <input
                    type="text"
                    value={getVal(editPark.bestMonths, activeLang)}
                    onChange={(e) => setEditPark({ ...editPark, bestMonths: setVal(editPark.bestMonths, activeLang, e.target.value) })}
                    placeholder={activeLang === "es" ? "e.g. Octubre a Junio" : activeLang === "pt" ? "e.g. Outubro a Junho" : "e.g. October to June"}
                    className="w-full bg-[#FAF8F5] border border-gold/20 p-3 rounded-xl outline-none focus:border-emerald-800"
                  />
                </div>
              </div>

              {/* Highlights Bullet List */}
              <div className="bg-white border border-gold/15 p-5 rounded-2xl space-y-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-gold/10 pb-2">
                  <div>
                    <h4 className="font-serif font-bold text-sm text-emerald-900">
                      Park Highlights & Features ({activeLang.toUpperCase()})
                    </h4>
                    <p className="text-[10px] text-royal/50">
                      Add key highlights shown on park badges.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddHighlight}
                    className="text-xs bg-emerald-800/10 text-emerald-800 font-bold uppercase tracking-wider hover:bg-emerald-800 hover:text-white px-3 py-1.5 rounded-xl flex items-center gap-1 transition"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Highlight</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {(editPark.highlights || []).map((h: any, idx: number) => {
                    const highlightVal = getVal(h, activeLang);

                    return (
                      <div key={idx} className="flex items-center gap-2 bg-[#FAF8F5] p-2 rounded-xl border border-gold/15">
                        <span className="text-[10px] font-bold text-emerald-800 w-6 text-center">
                          #{idx + 1}
                        </span>
                        <input
                          type="text"
                          value={highlightVal}
                          onChange={(e) => handleHighlightChange(idx, activeLang, e.target.value)}
                          placeholder={`Highlight #${idx + 1} (${activeLang.toUpperCase()})`}
                          className="w-full bg-white border border-gold/15 p-2 rounded-lg outline-none focus:border-emerald-800 text-xs"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveHighlight(idx)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg shrink-0 transition"
                          title="Remove Highlight"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

            </form>

            {/* Modal Sticky Footer - Always Visible */}
            <div className="px-6 py-4 sm:px-8 border-t border-gold/15 bg-[#FAF8F5] flex items-center justify-between shrink-0 z-10">
              {/* Left Action: Delete Park */}
              {editPark.id && editPark.name && (
                <button
                  type="button"
                  onClick={() => handleDelete(editPark.id || editPark.slug)}
                  className="px-4 py-2.5 rounded-2xl bg-red-50 border border-red-200 text-red-600 font-bold uppercase tracking-wider text-xs hover:bg-red-600 hover:text-white transition flex items-center gap-1.5"
                >
                  <Trash2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Delete Park</span>
                </button>
              )}

              {/* Right Actions: Cancel & Save */}
              <div className="flex items-center gap-3 ml-auto">
                <button
                  type="button"
                  onClick={() => setEditPark(null)}
                  className="px-5 py-2.5 rounded-2xl border border-gray-300 text-gray-700 font-bold uppercase tracking-wider text-xs hover:bg-gray-100 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  form="national-park-form"
                  disabled={saving}
                  className="px-7 py-2.5 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold uppercase tracking-wider text-xs shadow-md flex items-center gap-2 transition cursor-pointer disabled:opacity-50"
                >
                  <Save className="w-4 h-4" />
                  <span>{saving ? "Saving..." : "Save Park"}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* NATIONAL PARKS CARDS GRID - DESKTOP OPTIMIZED */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredParks.map((park: any) => {
          const name = getVal(park.name, "en");
          const nameEs = getVal(park.name, "es");
          const state = getVal(park.state, "en");
          const tagline = getVal(park.tagline, "en");
          const desc = getVal(park.desc, "en");
          const bestMonths = getVal(park.bestMonths, "en");

          return (
            <div 
              key={park.id || park.slug} 
              className="bg-white border border-gold/20 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition flex flex-col justify-between group"
            >
              
              {/* Top Image Banner */}
              <div className="h-52 overflow-hidden relative bg-[#0A2A1E]">
                <img
                  src={park.image || "/images/destination_fallback.jpg"}
                  alt={name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <span className="absolute bottom-3 left-3 text-white text-xs font-bold flex items-center gap-1 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  <span>{state}</span>
                </span>

                {park.isNorthEast && (
                  <span className="absolute top-3 right-3 bg-emerald-700 text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-gold" />
                    <span>North-East Region</span>
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-royal text-lg line-clamp-1">{name}</h3>
                  </div>

                  {nameEs && (
                    <p className="text-[10px] text-emerald-800 font-medium line-clamp-1">
                      🇪🇸 {nameEs}
                    </p>
                  )}

                  {tagline && (
                    <p className="text-[10px] uppercase font-bold text-gold tracking-wider line-clamp-1 pt-0.5">
                      {tagline}
                    </p>
                  )}

                  <p className="text-xs text-royal/70 font-light line-clamp-3 leading-relaxed pt-1">
                    {desc}
                  </p>
                </div>

                {/* Highlights */}
                {park.highlights && park.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gold/10">
                    {park.highlights.slice(0, 3).map((h: any, idx: number) => (
                      <span key={idx} className="bg-[#FAF8F5] border border-gold/15 text-[9px] font-medium text-royal px-2 py-0.5 rounded-full">
                        • {getVal(h, "en")}
                      </span>
                    ))}
                  </div>
                )}

                {/* Controls */}
                <div className="pt-3 border-t border-gold/15 flex items-center justify-between">
                  <span className="text-[10px] text-royal/50 font-bold uppercase">
                    {bestMonths || "All Year"}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setEditPark(park);
                        setActiveLang("en");
                      }}
                      className="p-2 text-emerald-800 hover:bg-emerald-50 rounded-xl border border-emerald-800/20 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </button>

                    <button
                      onClick={() => handleDelete(park.id || park.slug)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-xl border border-red-200 flex items-center gap-1 text-xs font-bold uppercase tracking-wider transition"
                      title="Delete National Park"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
