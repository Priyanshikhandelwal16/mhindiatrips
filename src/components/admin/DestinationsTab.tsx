"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  MapPin, Plus, Edit2, Trash2, Globe, Settings, AlertTriangle, 
  CheckCircle, ArrowUp, ArrowDown, Sparkles, BookOpen, 
  HelpCircle, Eye, Image as ImageIcon, Link2, List
} from "lucide-react";
import { CloudinaryUpload } from "./CloudinaryUpload";
import { 
  createStateAction, 
  updateStateAction, 
  deleteStateAction, 
  createCityAction, 
  updateCityAction, 
  deleteCityAction 
} from "@/app/actions/admin";
import { getCitiesAction } from "@/app/actions/queries";
import { syncClientFirestore } from "@/lib/client-db-sync";

interface DestinationsTabProps {
  states: any[];
  allPackages: any[];
  showStatus: (text: string, type: "success" | "error") => void;
  loadCMSData: () => Promise<void>;
}

export default function DestinationsTab({
  states,
  allPackages = [],
  showStatus,
  loadCMSData
}: DestinationsTabProps) {
  const [subTab, setSubTab] = useState<"states" | "cities">("states");
  
  // Data State
  const [cities, setCities] = useState<any[]>([]);
  const [loadingCities, setLoadingCities] = useState(false);
  const [selectedStateFilter, setSelectedStateFilter] = useState<string>("all");

  // Editor states
  const [editState, setEditState] = useState<any | null>(null);
  const [editCity, setEditCity] = useState<any | null>(null);
  const [activeLang, setActiveLang] = useState<"en" | "es" | "pt">("en");

  // Load cities list
  const loadCities = async () => {
    setLoadingCities(true);
    try {
      const allCities = await getCitiesAction();
      setCities(allCities || []);
    } catch (e) {
      console.error("Failed to load cities:", e);
    } finally {
      setLoadingCities(false);
    }
  };

  useEffect(() => {
    loadCities();
  }, []);

  // Textarea Ref for Rich Text Helper
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Helper to insert HTML tags in Rich Text editor
  const insertHTMLTag = (openTag: string, closeTag: string) => {
    const textarea = textareaRef.current;
    if (!textarea || !editCity) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selectedText = text.substring(start, end);
    const replacement = openTag + selectedText + closeTag;

    const newContent = text.substring(0, start) + replacement + text.substring(end);
    
    setEditCity({
      ...editCity,
      content: {
        ...(editCity.content || {}),
        [activeLang]: newContent
      }
    });

    // Re-focus and set selection
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + openTag.length, start + openTag.length + selectedText.length);
    }, 50);
  };

  // Check completeness of translations for a state
  const checkStateCompleteness = (state: any) => {
    const locales: ("en" | "es" | "pt")[] = ["en", "es", "pt"];
    const status: Record<string, boolean> = { en: false, es: false, pt: false };
    
    locales.forEach(l => {
      const hasName = !!state.name?.[l];
      const hasDesc = !!state.description?.[l];
      const hasSeoTitle = !!state.seoTitle?.[l];
      
      status[l] = hasName && hasDesc && hasSeoTitle;
    });
    
    return status;
  };

  // Check completeness of translations for a city
  const checkCityCompleteness = (city: any) => {
    const locales: ("en" | "es" | "pt")[] = ["en", "es", "pt"];
    const status: Record<string, boolean> = { en: false, es: false, pt: false };
    
    locales.forEach(l => {
      const hasName = !!city.name?.[l];
      const hasShortDesc = !!city.description?.[l];
      const hasContent = !!city.content?.[l] && city.content[l].length > 40;
      const hasSeoTitle = !!city.seoTitle?.[l];
      
      status[l] = hasName && hasShortDesc && hasContent && hasSeoTitle;
    });
    
    return status;
  };

  // Save State Action
  const handleSaveStateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editState.id || !editState.name?.en) {
      return showStatus("State ID and English Name are required.", "error");
    }

    const isNew = !states.find(s => s.id === editState.id);
    try {
      const res = isNew
        ? await createStateAction(editState)
        : await updateStateAction(editState.id, editState);

      if (res.success) {
        showStatus("State details saved successfully!", "success");
        setEditState(null);
        await loadCMSData();
      } else {
        showStatus(res.error || "Failed to save state.", "error");
      }
    } catch (err: any) {
      showStatus(err.message || "Failed to save state.", "error");
    }
  };

  // Delete State Action
  const handleDeleteStateClick = async (id: string) => {
    const nestedCities = cities.filter(c => c.stateId === id);
    if (nestedCities.length > 0) {
      return alert(`Cannot delete state "${id}" because it contains ${nestedCities.length} nested cities. Please delete or re-assign these cities first.`);
    }

    if (!confirm(`Are you sure you want to delete state "${id}"? This cannot be undone.`)) {
      return;
    }

    try {
      const res = await deleteStateAction(id);
      if (res.success) {
        showStatus("State deleted successfully.", "success");
        await loadCMSData();
      } else {
        showStatus(res.error || "Failed to delete state.", "error");
      }
    } catch (err: any) {
      showStatus(err.message || "Failed to delete state.", "error");
    }
  };

  // Sort State Order
  const handleMoveState = async (index: number, direction: "up" | "down") => {
    const targetIdx = direction === "up" ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= states.length) return;

    const list = [...states];
    // Swap displayOrder
    const temp = list[index].displayOrder;
    list[index].displayOrder = list[targetIdx].displayOrder;
    list[targetIdx].displayOrder = temp;

    try {
      await updateStateAction(list[index].id, { displayOrder: list[index].displayOrder });
      await updateStateAction(list[targetIdx].id, { displayOrder: list[targetIdx].displayOrder });
      await loadCMSData();
    } catch (e) {
      showStatus("Failed to update ordering.", "error");
    }
  };

  // Save City Action with automatic REST API fallback & Client Firestore sync
  const handleSaveCitySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editCity.id || (!editCity.name?.en && typeof editCity.name !== "string") || !editCity.stateId) {
      return showStatus("City ID, Parent State, and Name are required.", "error");
    }

    const isNew = !cities.find(c => c.id === editCity.id);
    
    // 1. Immediate Client-side Firestore sync
    await syncClientFirestore("cities", editCity.id, editCity, false);

    let savedSuccess = false;

    // 2. Try Server Action
    try {
      const res = isNew
        ? await createCityAction(editCity.stateId, editCity)
        : await updateCityAction(editCity.stateId, editCity.id, editCity);

      if (res && res.success) {
        savedSuccess = true;
      }
    } catch (err: any) {
      console.warn("[Save City] Server Action failed, attempting REST fallback:", err?.message || err);
    }

    // 3. Fallback to dedicated REST API route if Server Action failed or hash mismatched
    if (!savedSuccess) {
      try {
        const apiRes = await fetch("/api/admin/save-city", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            stateId: editCity.stateId,
            cityId: editCity.id,
            data: editCity,
            isNew
          })
        });

        const apiJson = await apiRes.json();
        if (apiJson && apiJson.success) {
          savedSuccess = true;
        } else {
          return showStatus(apiJson.error || "Failed to save city.", "error");
        }
      } catch (fallbackErr: any) {
        console.error("[Save City] REST API Fallback Error:", fallbackErr);
      }
    }

    if (savedSuccess) {
      showStatus("City details saved successfully!", "success");
      setEditCity(null);
      await loadCities();
    } else {
      showStatus("Failed to save city. Please refresh the page and try again.", "error");
    }
  };

  // Delete City Action with automatic REST API fallback & Client Firestore sync
  const handleDeleteCityClick = async (stateId: string, id: string) => {
    if (!confirm(`Are you sure you want to delete city "${id}"? This cannot be undone.`)) {
      return;
    }

    // 1. Immediate Client-side Firestore sync
    await syncClientFirestore("cities", id, { isDeleted: true }, true);

    let deletedSuccess = false;

    // 2. Try Server Action
    try {
      const res = await deleteCityAction(stateId, id);
      if (res && res.success) deletedSuccess = true;
    } catch (e: any) {
      console.warn("[Delete City] Server Action failed, attempting REST fallback:", e);
    }

    // 3. REST API Fallback
    if (!deletedSuccess) {
      try {
        const apiRes = await fetch("/api/admin/save-city", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ stateId, cityId: id, action: "delete" })
        });
        const apiJson = await apiRes.json();
        if (apiJson && apiJson.success) deletedSuccess = true;
      } catch (e) {}
    }

    if (deletedSuccess) {
      showStatus("City deleted successfully.", "success");
      await loadCities();
    } else {
      showStatus("Failed to delete city. Please refresh and try again.", "error");
    }
  };

  // Sort City Order
  const handleMoveCity = async (index: number, direction: "up" | "down", filteredCities: any[]) => {
    const targetIdx = direction === "up" ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= filteredCities.length) return;

    const list = [...filteredCities];
    // Swap displayOrder
    const temp = list[index].displayOrder;
    list[index].displayOrder = list[targetIdx].displayOrder;
    list[targetIdx].displayOrder = temp;

    try {
      await updateCityAction(list[index].stateId, list[index].id, { displayOrder: list[index].displayOrder });
      await updateCityAction(list[targetIdx].stateId, list[targetIdx].id, { displayOrder: list[targetIdx].displayOrder });
      await loadCities();
    } catch (e) {
      showStatus("Failed to update ordering.", "error");
    }
  };

  // Filtered Cities List
  const filteredCities = selectedStateFilter === "all"
    ? cities
    : cities.filter(c => c.stateId === selectedStateFilter);

  // Sorting helper
  const sortedStates = [...states].sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
  const sortedCities = [...filteredCities].sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));

  return (
    <div className="space-y-6 animate-fade-in text-xs text-royal">
      
      {/* CMS Tab Headers */}
      {!editState && !editCity && (
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div>
            <h2 className="text-xl font-serif font-bold text-royal">Destinations in India CMS</h2>
            <p className="text-[10px] text-royal/50">Manage states, cities, descriptions, gallery images, package links, and localized SEO.</p>
          </div>
          
          <div className="flex gap-3">
            <div className="bg-beige/10 p-1 rounded-xl flex border border-gold/15">
              <button
                onClick={() => setSubTab("states")}
                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition rounded-lg ${subTab === "states" ? "bg-royal text-white" : "text-royal/60 hover:text-royal"}`}
              >
                States
              </button>
              <button
                onClick={() => setSubTab("cities")}
                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition rounded-lg ${subTab === "cities" ? "bg-royal text-white" : "text-royal/60 hover:text-royal"}`}
              >
                Cities
              </button>
            </div>

            {subTab === "states" ? (
              <button
                onClick={() => setEditState({
                  id: "",
                  image: "",
                  displayOrder: states.length + 1,
                  isPublished: false,
                  name: { en: "", es: "", pt: "" },
                  slug: { en: "", es: "", pt: "" },
                  description: { en: "", es: "", pt: "" },
                  seoTitle: { en: "", es: "", pt: "" },
                  seoDesc: { en: "", es: "", pt: "" },
                  seoKeywords: { en: "", es: "", pt: "" }
                })}
                className="bg-royal text-white border border-gold/20 hover:bg-gold hover:text-royal font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 flex items-center gap-1.5 transition cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add State</span>
              </button>
            ) : (
              <button
                onClick={() => setEditCity({
                  id: "",
                  stateId: states[0]?.id || "",
                  image: "",
                  gallery: [],
                  displayOrder: cities.length + 1,
                  isPublished: false,
                  relatedPackages: [],
                  touristPlaces: [],
                  name: { en: "", es: "", pt: "" },
                  slug: { en: "", es: "", pt: "" },
                  description: { en: "", es: "", pt: "" },
                  content: { en: "", es: "", pt: "" },
                  seoTitle: { en: "", es: "", pt: "" },
                  seoDesc: { en: "", es: "", pt: "" },
                  seoKeywords: { en: "", es: "", pt: "" }
                })}
                className="bg-royal text-white border border-gold/20 hover:bg-gold hover:text-royal font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 flex items-center gap-1.5 transition cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add City</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* STATES LIST SUB-TAB */}
      {!editState && !editCity && subTab === "states" && (
        <div className="bg-white border border-gold/15 rounded-3xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-royal/[0.02] border-b border-gold/10 font-bold uppercase tracking-wider text-[10px] text-royal/60">
                  <th className="p-4 pl-6">Sort</th>
                  <th className="p-4">State ID</th>
                  <th className="p-4">Name (English)</th>
                  <th className="p-4">Translations Status</th>
                  <th className="p-4">Publish Status</th>
                  <th className="p-4 text-right pr-6">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-beige/25">
                {sortedStates.map((state, idx) => {
                  const stateCompleteness = checkStateCompleteness(state);
                  
                  return (
                    <tr key={state.id} className="hover:bg-royal/[0.01] transition-colors">
                      <td className="p-4 pl-6">
                        <div className="flex gap-1.5">
                          <button
                            disabled={idx === 0}
                            onClick={() => handleMoveState(idx, "up")}
                            className="p-1 text-royal/40 hover:text-royal disabled:opacity-30 cursor-pointer"
                          >
                            <ArrowUp className="w-3.5 h-3.5" />
                          </button>
                          <button
                            disabled={idx === states.length - 1}
                            onClick={() => handleMoveState(idx, "down")}
                            className="p-1 text-royal/40 hover:text-royal disabled:opacity-30 cursor-pointer"
                          >
                            <ArrowDown className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                      <td className="p-4 font-mono font-bold text-royal">{state.id}</td>
                      <td className="p-4 font-bold text-royal text-sm">{state.name?.en}</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          {Object.keys(stateCompleteness).map(lang => (
                            <span 
                              key={lang} 
                              className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase ${
                                stateCompleteness[lang] ? "bg-green-50 text-green-700 border border-green-150" : "bg-yellow-50 text-yellow-700 border border-yellow-150"
                              }`}
                            >
                              {lang} {stateCompleteness[lang] ? "✓" : "⚠"}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider ${
                          state.isPublished ? "bg-green-100 text-green-800" : "bg-stone-100 text-stone-600"
                        }`}>
                          {state.isPublished ? "Published" : "Draft"}
                        </span>
                      </td>
                      <td className="p-4 text-right pr-6 space-x-2">
                        <button
                          onClick={() => setEditState(state)}
                          className="bg-royal/5 text-royal hover:bg-gold hover:text-royal p-2 rounded-xl transition cursor-pointer"
                          title="Edit State"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteStateClick(state.id)}
                          className="bg-red-50 text-red-600 hover:bg-red-100 p-2 rounded-xl transition cursor-pointer"
                          title="Delete State"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* CITIES LIST SUB-TAB */}
      {!editState && !editCity && subTab === "cities" && (
        <div className="space-y-4">
          {/* Filters */}
          <div className="flex items-center gap-3 bg-white border border-gold/15 p-4 rounded-2xl shadow-sm">
            <span className="font-bold text-royal/60">Filter by State:</span>
            <select
              value={selectedStateFilter}
              onChange={e => setSelectedStateFilter(e.target.value)}
              className="bg-[#FAF8F5] border border-gold/15 px-3 py-2 outline-none rounded-lg text-royal cursor-pointer font-bold"
            >
              <option value="all">All States</option>
              {states.map(s => (
                <option key={s.id} value={s.id}>{s.name?.en || s.id}</option>
              ))}
            </select>
          </div>

          <div className="bg-white border border-gold/15 rounded-3xl overflow-hidden shadow-sm">
            {loadingCities ? (
              <div className="text-center py-16 text-royal/50 italic">Loading cities from database...</div>
            ) : sortedCities.length === 0 ? (
              <div className="text-center py-16 text-royal/40 italic">No cities found. Click "Add City" to create one.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-royal/[0.02] border-b border-gold/10 font-bold uppercase tracking-wider text-[10px] text-royal/60">
                      <th className="p-4 pl-6">Sort</th>
                      <th className="p-4">City ID</th>
                      <th className="p-4">Name (English)</th>
                      <th className="p-4">State</th>
                      <th className="p-4">Translations Status</th>
                      <th className="p-4">Publish Status</th>
                      <th className="p-4 text-right pr-6">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-beige/25">
                    {sortedCities.map((city, idx) => {
                      const cityCompleteness = checkCityCompleteness(city);
                      const parentState = states.find(s => s.id === city.stateId);
                      
                      return (
                        <tr key={city.id} className="hover:bg-royal/[0.01] transition-colors">
                          <td className="p-4 pl-6">
                            <div className="flex gap-1.5">
                              <button
                                disabled={idx === 0}
                                onClick={() => handleMoveCity(idx, "up", sortedCities)}
                                className="p-1 text-royal/40 hover:text-royal disabled:opacity-30 cursor-pointer"
                              >
                                <ArrowUp className="w-3.5 h-3.5" />
                              </button>
                              <button
                                disabled={idx === sortedCities.length - 1}
                                onClick={() => handleMoveCity(idx, "down", sortedCities)}
                                className="p-1 text-royal/40 hover:text-royal disabled:opacity-30 cursor-pointer"
                              >
                                <ArrowDown className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                          <td className="p-4 font-mono font-bold text-royal">{city.id}</td>
                          <td className="p-4 font-bold text-royal text-sm">{city.name?.en}</td>
                          <td className="p-4 font-bold text-royal/60">{parentState?.name?.en || city.stateId}</td>
                          <td className="p-4">
                            <div className="flex gap-2">
                              {Object.keys(cityCompleteness).map(lang => (
                                <span 
                                  key={lang} 
                                  className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase ${
                                    cityCompleteness[lang] ? "bg-green-50 text-green-700 border border-green-150" : "bg-yellow-50 text-yellow-700 border border-yellow-150"
                                  }`}
                                >
                                  {lang} {cityCompleteness[lang] ? "✓" : "⚠"}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="p-4">
                            <span className={`px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider ${
                              city.isPublished ? "bg-green-100 text-green-800" : "bg-stone-100 text-stone-600"
                            }`}>
                              {city.isPublished ? "Published" : "Draft"}
                            </span>
                          </td>
                          <td className="p-4 text-right pr-6 space-x-2">
                            <button
                              onClick={() => setEditCity({ ...city, touristPlaces: city.touristPlaces || [] })}
                              className="bg-royal/5 text-royal hover:bg-gold hover:text-royal p-2 rounded-xl transition cursor-pointer"
                              title="Edit City"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteCityClick(city.stateId, city.id)}
                              className="bg-red-50 text-red-600 hover:bg-red-100 p-2 rounded-xl transition cursor-pointer"
                              title="Delete City"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {/* STATE FORM WORKSPACE */}
      {editState && (
        <form onSubmit={handleSaveStateSubmit} className="bg-white border border-gold/15 rounded-3xl p-6 md:p-8 shadow-xl space-y-6 text-left">
          <div className="flex justify-between items-center border-b border-beige/40 pb-4">
            <div>
              <h3 className="text-base font-serif font-bold text-royal">
                {editState.id ? `Edit State: ${editState.name?.en || editState.id}` : "Create New State"}
              </h3>
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-gold text-royal hover:bg-gold-light font-bold text-[9px] uppercase tracking-widest px-4 py-2 rounded-lg cursor-pointer"
              >
                Save State
              </button>
              <button
                type="button"
                onClick={() => setEditState(null)}
                className="text-royal/50 hover:text-royal font-bold text-xs"
              >
                Cancel
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider block">State ID (e.g. rajasthan)</label>
              <input 
                type="text" required disabled={!!editState.id}
                value={editState.id || ""}
                onChange={e => setEditState({...editState, id: e.target.value.toLowerCase().replace(/\s+/g, "-")})}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50 font-bold"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider block">Display Order</label>
              <input 
                type="number" required
                value={editState.displayOrder !== undefined ? editState.displayOrder : 0}
                onChange={e => setEditState({...editState, displayOrder: parseInt(e.target.value) || 0})}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider block">Publish Status</label>
              <select
                value={editState.isPublished ? "true" : "false"}
                onChange={e => setEditState({...editState, isPublished: e.target.value === "true"})}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50 cursor-pointer"
              >
                <option value="true">Published</option>
                <option value="false">Draft / Unpublished</option>
              </select>
            </div>
          </div>

          {/* Localized fields tabs */}
          <div className="border border-gold/15 p-6 rounded-2xl space-y-4">
            <div className="flex gap-2 border-b border-beige/40 pb-2">
              {(["en", "es", "pt"] as const).map(l => (
                <button
                  key={l} type="button"
                  onClick={() => setActiveLang(l)}
                  className={`px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-wider rounded-lg border transition ${
                    activeLang === l ? "bg-royal text-white border-royal" : "bg-[#FAF8F5] text-royal/60 border-gold/10 hover:text-royal"
                  }`}
                >
                  {l === "en" ? "English" : l === "es" ? "Spanish" : "Portuguese"}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold uppercase text-[10px] tracking-wider text-royal/50 block">Name ({activeLang.toUpperCase()})</label>
                  <input
                    type="text" required={activeLang === "en"}
                    value={editState.name?.[activeLang] || ""}
                    onChange={e => setEditState({
                      ...editState,
                      name: { ...(editState.name || {}), [activeLang]: e.target.value }
                    })}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2.5 outline-none rounded-lg"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold uppercase text-[10px] tracking-wider text-royal/50 block">Slug ({activeLang.toUpperCase()})</label>
                  <input
                    type="text" required={activeLang === "en"}
                    value={editState.slug?.[activeLang] || ""}
                    onChange={e => setEditState({
                      ...editState,
                      slug: { ...(editState.slug || {}), [activeLang]: e.target.value.toLowerCase().replace(/\s+/g, "-") }
                    })}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2.5 outline-none rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold uppercase text-[10px] tracking-wider text-royal/50 block">Description ({activeLang.toUpperCase()})</label>
                <textarea
                  value={editState.description?.[activeLang] || ""}
                  onChange={e => setEditState({
                    ...editState,
                    description: { ...(editState.description || {}), [activeLang]: e.target.value }
                  })}
                  className="w-full h-24 bg-[#FAF8F5] border border-gold/15 p-3 outline-none rounded-lg text-xs"
                />
              </div>

              {/* SEO metadata fields */}
              <div className="pt-4 border-t border-beige/40 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold uppercase text-[9px] tracking-wider text-royal/40 block">SEO Title ({activeLang.toUpperCase()})</label>
                  <input
                    type="text"
                    value={editState.seoTitle?.[activeLang] || ""}
                    onChange={e => setEditState({
                      ...editState,
                      seoTitle: { ...(editState.seoTitle || {}), [activeLang]: e.target.value }
                    })}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2 outline-none rounded-lg"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold uppercase text-[9px] tracking-wider text-royal/40 block">SEO Description ({activeLang.toUpperCase()})</label>
                  <input
                    type="text"
                    value={editState.seoDesc?.[activeLang] || ""}
                    onChange={e => setEditState({
                      ...editState,
                      seoDesc: { ...(editState.seoDesc || {}), [activeLang]: e.target.value }
                    })}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2 outline-none rounded-lg"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold uppercase text-[9px] tracking-wider text-royal/40 block">SEO Keywords ({activeLang.toUpperCase()})</label>
                  <input
                    type="text"
                    value={editState.seoKeywords?.[activeLang] || ""}
                    onChange={e => setEditState({
                      ...editState,
                      seoKeywords: { ...(editState.seoKeywords || {}), [activeLang]: e.target.value }
                    })}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2 outline-none rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Image cover upload */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end border border-gold/10 p-5 rounded-2xl bg-[#FAF8F5]">
            <div className="md:col-span-8 space-y-1.5">
              <label className="font-bold uppercase tracking-wider block">State Cover Image URL</label>
              <input 
                type="text" required
                value={editState.image || ""}
                onChange={e => setEditState({...editState, image: e.target.value})}
                className="w-full bg-white border border-gold/15 px-4 py-3 outline-none rounded-lg"
              />
            </div>
            <div className="md:col-span-4 pb-0.5">
              <CloudinaryUpload 
                onUploadComplete={(url) => setEditState({ ...editState, image: url })} 
                label="Upload Cover Image"
                showStatus={showStatus}
                defaultSearch={editState.name?.en || editState.id}
              />
            </div>
          </div>
        </form>
      )}

      {/* CITY FORM WORKSPACE */}
      {editCity && (
        <form onSubmit={handleSaveCitySubmit} className="bg-white border border-gold/15 rounded-3xl p-6 md:p-8 shadow-xl space-y-6 text-left">
          <div className="flex justify-between items-center border-b border-beige/40 pb-4">
            <div>
              <h3 className="text-base font-serif font-bold text-royal">
                {editCity.id ? `Edit City: ${editCity.name?.en || editCity.id}` : "Create New City"}
              </h3>
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-gold text-royal hover:bg-gold-light font-bold text-[9px] uppercase tracking-widest px-4 py-2 rounded-lg cursor-pointer"
              >
                Save City
              </button>
              <button
                type="button"
                onClick={() => setEditCity(null)}
                className="text-royal/50 hover:text-royal font-bold text-xs"
              >
                Cancel
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider block">City ID (e.g. jaipur)</label>
              <input 
                type="text" required disabled={!!editCity.id}
                value={editCity.id || ""}
                onChange={e => setEditCity({...editCity, id: e.target.value.toLowerCase().replace(/\s+/g, "-")})}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50 font-bold"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider block">Parent State</label>
              <select
                value={editCity.stateId || ""}
                onChange={e => setEditCity({...editCity, stateId: e.target.value})}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50 cursor-pointer font-bold"
              >
                {states.map(s => (
                  <option key={s.id} value={s.id}>{s.name?.en || s.id}</option>
                ))}
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider block">Display Order</label>
              <input 
                type="number" required
                value={editCity.displayOrder !== undefined ? editCity.displayOrder : 0}
                onChange={e => setEditCity({...editCity, displayOrder: parseInt(e.target.value) || 0})}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider block">Publish Status</label>
              <select
                value={editCity.isPublished ? "true" : "false"}
                onChange={e => setEditCity({...editCity, isPublished: e.target.value === "true"})}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50 cursor-pointer"
              >
                <option value="true">Published</option>
                <option value="false">Draft / Unpublished</option>
              </select>
            </div>
          </div>

          {/* Localized fields tabs for City */}
          <div className="border border-gold/15 p-6 rounded-2xl space-y-4">
            <div className="flex gap-2 border-b border-beige/40 pb-2">
              {(["en", "es", "pt"] as const).map(l => (
                <button
                  key={l} type="button"
                  onClick={() => setActiveLang(l)}
                  className={`px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-wider rounded-lg border transition ${
                    activeLang === l ? "bg-royal text-white border-royal" : "bg-[#FAF8F5] text-royal/60 border-gold/10 hover:text-royal"
                  }`}
                >
                  {l === "en" ? "English" : l === "es" ? "Spanish" : "Portuguese"}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {/* City ID, Parent State, and Publish Status Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold uppercase text-[10px] tracking-wider text-royal/50 block">City ID (e.g. jaipur)</label>
                  <input
                    type="text" required disabled={!!editCity.id}
                    value={editCity.id || ""}
                    onChange={e => setEditCity({
                      ...editCity,
                      id: e.target.value.toLowerCase().replace(/\s+/g, "-")
                    })}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2.5 outline-none rounded-lg focus:border-gold/50 font-bold"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold uppercase text-[10px] tracking-wider text-royal/50 block">Parent State</label>
                  <select
                    value={editCity.stateId || ""}
                    onChange={e => setEditCity({...editCity, stateId: e.target.value})}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2.5 outline-none rounded-lg focus:border-gold/50 cursor-pointer font-bold"
                  >
                    {states.map(s => (
                      <option key={s.id} value={s.id}>{s.name?.en || s.id}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold uppercase text-[10px] tracking-wider text-royal/50 block">Publish Status</label>
                  <select
                    value={editCity.isPublished ? "true" : "false"}
                    onChange={e => setEditCity({...editCity, isPublished: e.target.value === "true"})}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2.5 outline-none rounded-lg focus:border-gold/50 cursor-pointer font-bold"
                  >
                    <option value="true">Published</option>
                    <option value="false">Draft / Unpublished</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold uppercase text-[10px] tracking-wider text-royal/50 block">Name ({activeLang.toUpperCase()})</label>
                  <input
                    type="text" required={activeLang === "en"}
                    value={editCity.name?.[activeLang] || ""}
                    onChange={e => setEditCity({
                      ...editCity,
                      name: { ...(editCity.name || {}), [activeLang]: e.target.value }
                    })}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2.5 outline-none rounded-lg"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold uppercase text-[10px] tracking-wider text-royal/50 block">Slug ({activeLang.toUpperCase()})</label>
                  <input
                    type="text" required={activeLang === "en"}
                    value={editCity.slug?.[activeLang] || ""}
                    onChange={e => setEditCity({
                      ...editCity,
                      slug: { ...(editCity.slug || {}), [activeLang]: e.target.value.toLowerCase().replace(/\s+/g, "-") }
                    })}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2.5 outline-none rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold uppercase text-[10px] tracking-wider text-royal/50 block">Short Description ({activeLang.toUpperCase()})</label>
                <input
                  type="text"
                  value={editCity.description?.[activeLang] || ""}
                  onChange={e => setEditCity({
                    ...editCity,
                    description: { ...(editCity.description || {}), [activeLang]: e.target.value }
                  })}
                  className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2 outline-none rounded-lg"
                />
              </div>

              {/* Rich Text Editor for City Content with Non-Tech Friendly Helper Formatting Buttons */}
              <div className="space-y-2">
                <div className="flex flex-wrap justify-between items-center gap-2 bg-[#0A2A1E]/5 p-2 rounded-xl border border-[#C5A862]/20">
                  <label className="font-bold uppercase text-[10px] tracking-wider text-[#0A2A1E] flex items-center gap-1.5 shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A862]" />
                    <span>City Long Description ({activeLang.toUpperCase()})</span>
                  </label>

                  {/* Non-Tech HTML Tags Helper Toolbar */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-bold">
                    <span className="text-[#C5A862] text-[9px] uppercase tracking-wider hidden sm:inline-block">Click to Insert Format:</span>
                    <button 
                      type="button" 
                      onClick={() => insertHTMLTag('<h2 class="text-2xl font-bold font-serif text-[#0A2A1E] mt-6 mb-3">', '</h2>')}
                      className="bg-white border border-[#C5A862]/30 px-2 py-1 rounded-lg text-[#0A2A1E] hover:bg-[#C5A862] hover:text-[#0A2A1E] transition shadow-xs cursor-pointer"
                      title="Insert H2 Heading"
                    >
                      + H2 Heading
                    </button>
                    <button 
                      type="button" 
                      onClick={() => insertHTMLTag('<h3 class="text-xl font-bold text-[#C5A862] mt-4 mb-2">', '</h3>')}
                      className="bg-white border border-[#C5A862]/30 px-2 py-1 rounded-lg text-[#0A2A1E] hover:bg-[#C5A862] hover:text-[#0A2A1E] transition shadow-xs cursor-pointer"
                      title="Insert H3 Subheading"
                    >
                      + H3 Subheading
                    </button>
                    <button 
                      type="button" 
                      onClick={() => insertHTMLTag('<p class="text-sm text-[#2C2C2C] leading-relaxed mb-4">', '</p>')}
                      className="bg-white border border-[#C5A862]/30 px-2 py-1 rounded-lg text-[#0A2A1E] hover:bg-[#C5A862] hover:text-[#0A2A1E] transition shadow-xs cursor-pointer"
                      title="Insert Paragraph"
                    >
                      + Paragraph (P)
                    </button>
                    <button 
                      type="button" 
                      onClick={() => insertHTMLTag('<ul class="list-disc pl-5 space-y-2 text-sm text-[#2C2C2C] my-3">\n  <li>', '</li>\n  <li>Point 2</li>\n</ul>')}
                      className="bg-white border border-[#C5A862]/30 px-2 py-1 rounded-lg text-[#0A2A1E] hover:bg-[#C5A862] hover:text-[#0A2A1E] transition shadow-xs cursor-pointer"
                      title="Insert Bullet List"
                    >
                      + Bullet List
                    </button>
                    <button 
                      type="button" 
                      onClick={() => insertHTMLTag('<div class="bg-[#FAF8F5] p-4 rounded-xl border-l-4 border-[#C5A862] my-4">\n  ', '\n</div>')}
                      className="bg-white border border-[#C5A862]/30 px-2 py-1 rounded-lg text-[#0A2A1E] hover:bg-[#C5A862] hover:text-[#0A2A1E] transition shadow-xs cursor-pointer"
                      title="Insert Highlight Box"
                    >
                      + Highlight Box
                    </button>
                    <button 
                      type="button" 
                      onClick={() => insertHTMLTag('<strong>', '</strong>')}
                      className="bg-white border border-[#C5A862]/30 px-2.5 py-1 rounded-lg text-[#0A2A1E] hover:bg-[#C5A862] hover:text-[#0A2A1E] transition shadow-xs cursor-pointer"
                      title="Bold Text"
                    >
                      Bold
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* TextArea Editor */}
                  <textarea
                    ref={textareaRef}
                    value={editCity.content?.[activeLang] || ""}
                    onChange={e => setEditCity({
                      ...editCity,
                      content: { ...(editCity.content || {}), [activeLang]: e.target.value }
                    })}
                    className="w-full h-80 bg-white border border-gold/15 p-3.5 outline-none rounded-xl text-xs font-sans leading-relaxed"
                    placeholder="Enter city details, highlights, or general description here..."
                  />
                  
                  {/* HTML Live Preview */}
                  <div className="border border-gold/10 rounded-xl bg-[#FAF8F5] p-4 h-80 overflow-y-auto text-left text-xs space-y-4">
                    <span className="text-[8px] font-extrabold uppercase text-royal/40 tracking-wider block border-b border-gold/5 pb-1 flex items-center gap-1"><Eye className="w-3 h-3" /> Live Render Preview</span>
                    <div 
                      className="city-rich-content scale-95 origin-top-left"
                      dangerouslySetInnerHTML={{ __html: editCity.content?.[activeLang] || "" }} 
                    />
                  </div>
                </div>
              </div>

              {/* SEO metadata fields for City */}
              <div className="pt-4 border-t border-beige/40 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold uppercase text-[9px] tracking-wider text-royal/40 block">SEO Title ({activeLang.toUpperCase()})</label>
                  <input
                    type="text"
                    value={editCity.seoTitle?.[activeLang] || ""}
                    onChange={e => setEditCity({
                      ...editCity,
                      seoTitle: { ...(editCity.seoTitle || {}), [activeLang]: e.target.value }
                    })}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2 outline-none rounded-lg"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold uppercase text-[9px] tracking-wider text-royal/40 block">SEO Description ({activeLang.toUpperCase()})</label>
                  <input
                    type="text"
                    value={editCity.seoDesc?.[activeLang] || ""}
                    onChange={e => setEditCity({
                      ...editCity,
                      seoDesc: { ...(editCity.seoDesc || {}), [activeLang]: e.target.value }
                    })}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2 outline-none rounded-lg"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold uppercase text-[9px] tracking-wider text-royal/40 block">SEO Keywords ({activeLang.toUpperCase()})</label>
                  <input
                    type="text"
                    value={editCity.seoKeywords?.[activeLang] || ""}
                    onChange={e => setEditCity({
                      ...editCity,
                      seoKeywords: { ...(editCity.seoKeywords || {}), [activeLang]: e.target.value }
                    })}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2 outline-none rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* City Image cover & Gallery URLs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Cover Image URL & Cloudinary */}
            <div className="grid grid-cols-1 gap-4 border border-gold/10 p-5 rounded-2xl bg-[#FAF8F5] items-end">
              <div className="space-y-1.5">
                <label className="font-bold uppercase tracking-wider block">City Cover Image URL</label>
                <input 
                  type="text" required
                  value={editCity.image || ""}
                  onChange={e => setEditCity({...editCity, image: e.target.value})}
                  className="w-full bg-white border border-gold/15 px-4 py-3 outline-none rounded-lg"
                />
              </div>
              <CloudinaryUpload 
                onUploadComplete={(url) => setEditCity({ ...editCity, image: url })} 
                label="Upload Cover Image"
                showStatus={showStatus}
                defaultSearch={editCity.name?.en || editCity.id}
              />
            </div>

            {/* Gallery Upload / List */}
            <div className="border border-gold/10 p-5 rounded-2xl bg-[#FAF8F5] space-y-3">
              <div className="flex justify-between items-center border-b border-gold/5 pb-1">
                <span className="font-bold uppercase tracking-wider block">Gallery Images</span>
                <button
                  type="button"
                  onClick={() => setEditCity({
                    ...editCity,
                    gallery: [...(editCity.gallery || []), ""]
                  })}
                  className="bg-gold/15 hover:bg-gold/30 text-royal font-bold text-[9px] uppercase px-3 py-1 rounded cursor-pointer"
                >
                  + Add Image URL
                </button>
              </div>

              {(!editCity.gallery || editCity.gallery.length === 0) ? (
                <div className="text-center py-6 text-royal/40 italic bg-white rounded-lg border border-dashed border-gold/10">No gallery images added yet.</div>
              ) : (
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {editCity.gallery.map((imgUrl: string, gIdx: number) => (
                    <div key={gIdx} className="flex gap-2 items-center bg-white border border-gold/10 p-2 rounded-lg">
                      <input
                        type="text"
                        value={imgUrl}
                        onChange={e => {
                          const updated = [...editCity.gallery];
                          updated[gIdx] = e.target.value;
                          setEditCity({ ...editCity, gallery: updated });
                        }}
                        className="w-full text-xs outline-none bg-[#FAF8F5] px-2 py-1 rounded"
                        placeholder="Image URL"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const updated = editCity.gallery.filter((_: any, i: number) => i !== gIdx);
                          setEditCity({ ...editCity, gallery: updated });
                        }}
                        className="text-red-600 hover:text-red-800 text-[10px] font-bold font-mono px-1.5"
                      >
                        X
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Related Tours Checklist */}
          <div className="border border-gold/10 p-5 rounded-2xl bg-[#FAF8F5] space-y-3">
            <span className="font-bold text-[10px] text-gold uppercase tracking-wider block">Related Tour Packages</span>
            <p className="text-[10px] text-royal/40">Select which travel packages highlight this city.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-60 overflow-y-auto pr-1">
              {allPackages.map((pkg: any) => {
                const isSelected = (editCity.relatedPackages || []).includes(pkg.slug);
                return (
                  <label 
                    key={pkg.slug} 
                    className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition ${
                      isSelected ? "bg-gold/10 border-gold/30" : "bg-white border-gold/10 hover:border-gold/25"
                    }`}
                  >
                    <input 
                      type="checkbox"
                      checked={isSelected}
                      onChange={e => {
                        const current = editCity.relatedPackages || [];
                        const updated = e.target.checked
                          ? [...current, pkg.slug]
                          : current.filter((s: string) => s !== pkg.slug);
                        setEditCity({ ...editCity, relatedPackages: updated });
                      }}
                      className="w-4 h-4 cursor-pointer accent-royal"
                    />
                    <div className="space-y-0.5">
                      <span className="font-bold text-xs text-royal block">{pkg.title?.en || pkg.slug}</span>
                      <span className="text-[9px] text-royal/40 uppercase tracking-wider">{pkg.duration?.en}</span>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Tourist Places Management Section (Requirement #4) */}
          <div className="border border-gold/15 p-5 rounded-2xl bg-white space-y-4 shadow-sm mt-4">
            <div className="flex justify-between items-center border-b border-gold/10 pb-3">
              <div>
                <span className="font-serif font-bold text-base text-royal block">Tourist Places in {editCity.name?.[activeLang] || editCity.id}</span>
                <span className="text-[10px] text-royal/50">Add tourist places with images and descriptions to show on the city detail page.</span>
              </div>
              <button
                type="button"
                onClick={() => setEditCity({
                  ...editCity,
                  touristPlaces: [
                    ...(editCity.touristPlaces || []),
                    {
                      name: { en: "", es: "", pt: "" },
                      image: "",
                      description: { en: "", es: "", pt: "" }
                    }
                  ]
                })}
                className="bg-gold hover:bg-amber-400 text-royal font-bold text-xs uppercase px-4 py-2 rounded-xl transition cursor-pointer flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Tourist Place</span>
              </button>
            </div>

            {(!editCity.touristPlaces || editCity.touristPlaces.length === 0) ? (
              <div className="text-center py-6 text-royal/40 italic bg-[#FAF8F5] rounded-xl border border-dashed border-gold/15 text-xs">
                No tourist places added yet for this city. Click "+ Add Tourist Place" to add one.
              </div>
            ) : (
              <div className="space-y-4">
                {editCity.touristPlaces.map((place: any, pIdx: number) => (
                  <div key={pIdx} className="bg-[#FAF8F5] border border-gold/20 p-4 rounded-xl space-y-3 relative group">
                    <div className="flex justify-between items-center border-b border-gold/10 pb-2">
                      <span className="font-mono text-xs font-bold text-gold">Place #{pIdx + 1}</span>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = editCity.touristPlaces.filter((_: any, i: number) => i !== pIdx);
                          setEditCity({ ...editCity, touristPlaces: updated });
                        }}
                        className="text-red-600 hover:text-red-800 text-xs font-bold flex items-center gap-1 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Remove</span>
                      </button>
                    </div>

                    {/* Image URL & Cloudinary Upload */}
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-royal/60 block">Image URL & Upload</label>
                      <div className="flex gap-2 items-center">
                        <input
                          type="text"
                          value={place.image || ""}
                          onChange={e => {
                            const updated = [...editCity.touristPlaces];
                            updated[pIdx] = { ...updated[pIdx], image: e.target.value };
                            setEditCity({ ...editCity, touristPlaces: updated });
                          }}
                          className="flex-1 bg-white border border-gold/15 px-3 py-2 outline-none rounded-lg text-xs"
                          placeholder="https://images.unsplash.com/... or Cloudinary URL"
                        />
                        <CloudinaryUpload
                          label="Upload"
                          onUploadComplete={(url) => {
                            const updated = [...editCity.touristPlaces];
                            updated[pIdx] = { ...updated[pIdx], image: url };
                            setEditCity({ ...editCity, touristPlaces: updated });
                          }}
                        />
                        {place.image && (
                          <div className="w-9 h-9 rounded-lg overflow-hidden border border-gold/20 shrink-0">
                            <img src={place.image} alt="Preview" className="w-full h-full object-cover" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Place Name (3 Languages: EN, ES, PT) */}
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-royal/60 block">Place Name (EN / ES / PT)</label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div>
                          <span className="text-[9px] font-extrabold text-royal/50 block mb-0.5">ENGLISH (EN)</span>
                          <input
                            type="text"
                            value={typeof place.name === "object" ? place.name?.en || "" : place.name || ""}
                            onChange={e => {
                              const updated = [...editCity.touristPlaces];
                              const nameObj = typeof place.name === "object" ? { ...place.name } : { en: place.name || "", es: "", pt: "" };
                              nameObj.en = e.target.value;
                              updated[pIdx] = { ...updated[pIdx], name: nameObj };
                              setEditCity({ ...editCity, touristPlaces: updated });
                            }}
                            className="w-full bg-white border border-gold/15 px-3 py-1.5 outline-none rounded-lg text-xs"
                            placeholder="e.g. Fort / Temple Name"
                          />
                        </div>
                        <div>
                          <span className="text-[9px] font-extrabold text-amber-700/70 block mb-0.5">SPANISH (ES)</span>
                          <input
                            type="text"
                            value={typeof place.name === "object" ? place.name?.es || "" : ""}
                            onChange={e => {
                              const updated = [...editCity.touristPlaces];
                              const nameObj = typeof place.name === "object" ? { ...place.name } : { en: place.name || "", es: "", pt: "" };
                              nameObj.es = e.target.value;
                              updated[pIdx] = { ...updated[pIdx], name: nameObj };
                              setEditCity({ ...editCity, touristPlaces: updated });
                            }}
                            className="w-full bg-white border border-gold/15 px-3 py-1.5 outline-none rounded-lg text-xs"
                            placeholder="e.g. Nombre del Lugar"
                          />
                        </div>
                        <div>
                          <span className="text-[9px] font-extrabold text-teal-700/70 block mb-0.5">PORTUGUESE (PT)</span>
                          <input
                            type="text"
                            value={typeof place.name === "object" ? place.name?.pt || "" : ""}
                            onChange={e => {
                              const updated = [...editCity.touristPlaces];
                              const nameObj = typeof place.name === "object" ? { ...place.name } : { en: place.name || "", es: "", pt: "" };
                              nameObj.pt = e.target.value;
                              updated[pIdx] = { ...updated[pIdx], name: nameObj };
                              setEditCity({ ...editCity, touristPlaces: updated });
                            }}
                            className="w-full bg-white border border-gold/15 px-3 py-1.5 outline-none rounded-lg text-xs"
                            placeholder="e.g. Nome do Local"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Place Description (3 Languages: EN, ES, PT) */}
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-royal/60 block">Description (EN / ES / PT)</label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div>
                          <span className="text-[9px] font-extrabold text-royal/50 block mb-0.5">ENGLISH (EN)</span>
                          <textarea
                            rows={2}
                            value={typeof place.description === "object" ? place.description?.en || "" : place.description || place.desc || ""}
                            onChange={e => {
                              const updated = [...editCity.touristPlaces];
                              const descObj = typeof place.description === "object" ? { ...place.description } : { en: place.description || "", es: "", pt: "" };
                              descObj.en = e.target.value;
                              updated[pIdx] = { ...updated[pIdx], description: descObj };
                              setEditCity({ ...editCity, touristPlaces: updated });
                            }}
                            className="w-full bg-white border border-gold/15 p-2 outline-none rounded-lg text-xs"
                            placeholder="Description in English..."
                          />
                        </div>
                        <div>
                          <span className="text-[9px] font-extrabold text-amber-700/70 block mb-0.5">SPANISH (ES)</span>
                          <textarea
                            rows={2}
                            value={typeof place.description === "object" ? place.description?.es || "" : ""}
                            onChange={e => {
                              const updated = [...editCity.touristPlaces];
                              const descObj = typeof place.description === "object" ? { ...place.description } : { en: place.description || "", es: "", pt: "" };
                              descObj.es = e.target.value;
                              updated[pIdx] = { ...updated[pIdx], description: descObj };
                              setEditCity({ ...editCity, touristPlaces: updated });
                            }}
                            className="w-full bg-white border border-gold/15 p-2 outline-none rounded-lg text-xs"
                            placeholder="Descripción en español..."
                          />
                        </div>
                        <div>
                          <span className="text-[9px] font-extrabold text-teal-700/70 block mb-0.5">PORTUGUESE (PT)</span>
                          <textarea
                            rows={2}
                            value={typeof place.description === "object" ? place.description?.pt || "" : ""}
                            onChange={e => {
                              const updated = [...editCity.touristPlaces];
                              const descObj = typeof place.description === "object" ? { ...place.description } : { en: place.description || "", es: "", pt: "" };
                              descObj.pt = e.target.value;
                              updated[pIdx] = { ...updated[pIdx], description: descObj };
                              setEditCity({ ...editCity, touristPlaces: updated });
                            }}
                            className="w-full bg-white border border-gold/15 p-2 outline-none rounded-lg text-xs"
                            placeholder="Descrição em português..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </form>
      )}


    </div>
  );
}
