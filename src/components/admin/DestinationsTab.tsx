"use client";

import React, { useState } from "react";
import { 
  MapPin, Plus, Edit2, Trash2, Upload, Compass, HelpCircle, 
  BookOpen, ChevronRight, Eye, Layers, ChevronDown, ChevronUp, Image as ImageIcon
} from "lucide-react";
import { CloudinaryUpload } from "./CloudinaryUpload";

interface DestinationsTabProps {
  states: any[];
  editState: any;
  setEditState: (state: any) => void;
  destSubTab: "general" | "travelTips" | "faqs" | "cities";
  setDestSubTab: (tab: "general" | "travelTips" | "faqs" | "cities") => void;
  editingCityIdx: number | null;
  setEditingCityIdx: (idx: number | null) => void;
  editingAttractionIdx: number | null;
  setEditingAttractionIdx: (idx: number | null) => void;
  handleSaveState: (e: React.FormEvent) => void;
  onDeleteState: (slug: string) => void;
  showStatus: (text: string, type: "success" | "error") => void;
}

export default function DestinationsTab({
  states,
  editState,
  setEditState,
  destSubTab,
  setDestSubTab,
  editingCityIdx,
  setEditingCityIdx,
  editingAttractionIdx,
  setEditingAttractionIdx,
  handleSaveState,
  onDeleteState,
  showStatus
}: DestinationsTabProps) {

  const [citySubTab, setCitySubTab] = useState<string>("general");

  // Local helper to handle adding cities/attractions
  const handleAddCity = () => {
    const cityName = prompt("Enter new City name (e.g. Udaipur):");
    if (!cityName || !cityName.trim()) return;
    const citySlug = cityName.toLowerCase().replace(/[^a-z0-9-_]/g, "-");
    
    const newCity = {
      slug: citySlug,
      title: { en: cityName, es: cityName, pt: cityName },
      image: "",
      description: { en: "", es: "", pt: "" },
      thingsToDo: [],
      hotels: [],
      attractions: []
    };
    
    const updatedCities = [...(editState.cities || []), newCity];
    setEditState({ ...editState, cities: updatedCities });
  };

  const handleAddAttraction = (cityIdx: number) => {
    const name = prompt("Enter Attraction name (e.g. City Palace):");
    if (!name || !name.trim()) return;
    const slug = name.toLowerCase().replace(/[^a-z0-9-_]/g, "-");
    
    const newAttraction = {
      slug,
      name: { en: name, es: name, pt: name },
      image: "",
      desc: { en: "", es: "", pt: "" },
      era: "",
      city: editState.cities[cityIdx].title?.en,
      state: editState.title?.en
    };

    const updatedCities = [...editState.cities];
    updatedCities[cityIdx] = {
      ...updatedCities[cityIdx],
      attractions: [...(updatedCities[cityIdx].attractions || []), newAttraction]
    };
    setEditState({ ...editState, cities: updatedCities });
  };

  return (
    <div className="space-y-6 animate-fade-in text-xs text-royal">
      {/* Destinations Header */}
      {!editState && (
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-royal font-serif">Manage Destinations (States)</h2>
            <p className="text-[10px] text-royal/40">Add, edit, or delete tourist destination states, cities, and attractions.</p>
          </div>
          <button
            onClick={() => {
              setEditState({
                title: { en: "", es: "", pt: "" },
                tagline: { en: "", es: "", pt: "" },
                description: { en: "", es: "", pt: "" },
                history: { en: "", es: "", pt: "" },
                culture: { en: "", es: "", pt: "" },
                localFood: { en: "", es: "", pt: "" },
                bestTime: { en: "", es: "", pt: "" },
                slug: "",
                region: "North",
                image: "",
                travelTips: [],
                faqs: [],
                cities: []
              });
              setDestSubTab("general");
              setEditingCityIdx(null);
              setEditingAttractionIdx(null);
            }}
            className="bg-royal text-white border border-gold/20 hover:bg-gold hover:text-royal font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 flex items-center gap-1.5 transition cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add State Destination</span>
          </button>
        </div>
      )}

      {/* STATE FORM (ADD / EDIT) */}
      {editState && (
        <form onSubmit={handleSaveState} className="bg-white border border-gold/20 rounded-3xl p-8 shadow-md space-y-6">
          <div className="flex justify-between items-center border-b border-beige/40 pb-4">
            <h3 className="text-base font-bold font-serif">{editState.slug ? `Edit State: ${editState.title?.en}` : "Create New Destination State"}</h3>
            <button type="button" onClick={() => setEditState(null)} className="text-royal/50 hover:text-royal font-bold">Cancel</button>
          </div>

          {/* Sub tabs configuration */}
          <div className="flex border-b border-gold/10 pb-2 mb-6 gap-2 flex-wrap">
            {[
              { id: "general", label: "General Details" },
              { id: "travelTips", label: "Why Visit Points" },
              { id: "faqs", label: "FAQs" },
              { id: "cities", label: "Manage Cities & Attractions" }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setDestSubTab(tab.id as any);
                  setEditingCityIdx(null);
                  setEditingAttractionIdx(null);
                }}
                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition rounded-lg border ${
                  destSubTab === tab.id 
                    ? "bg-royal text-white border-royal shadow-sm" 
                    : "bg-[#FAF8F5] text-royal/60 border-gold/10 hover:text-royal"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 1: GENERAL DETAILS */}
          {destSubTab === "general" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="font-bold uppercase tracking-wider block">Slug (e.g. rajasthan)</label>
                  <input 
                    type="text" required value={editState.slug || ""}
                    onChange={e => setEditState({...editState, slug: e.target.value.toLowerCase().replace(/\s+/g, "-")})}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold uppercase tracking-wider block">Region</label>
                  <select
                    value={editState.region || "North"}
                    onChange={e => setEditState({...editState, region: e.target.value})}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50 cursor-pointer"
                  >
                    {["North", "South", "East", "West", "Central", "North East", "Islands"].map((reg) => (
                      <option key={reg} value={reg}>{reg} India</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Banner image */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                <div className="md:col-span-8 space-y-1.5">
                  <label className="font-bold uppercase tracking-wider block">Image URL</label>
                  <input 
                    type="text" value={editState.image || ""}
                    onChange={e => setEditState({...editState, image: e.target.value})}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50"
                  />
                </div>
                <div className="md:col-span-4 pb-0.5">
                  <CloudinaryUpload 
                    label="Upload Banner Photo" 
                    onUploadComplete={(url) => setEditState({...editState, image: url})} 
                    showStatus={showStatus} 
                  />
                </div>
                {editState.image && (
                  <div className="col-span-full h-32 w-full overflow-hidden border border-gold/10 rounded-xl">
                    <img src={editState.image} alt="State preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              {/* Title & Tagline translations */}
              {["title", "tagline", "description", "history", "culture", "localFood", "bestTime"].map((field) => (
                <div key={field} className="border border-gold/10 p-5 rounded-2xl bg-[#FAF8F5] space-y-3">
                  <span className="font-bold text-[10px] text-gold uppercase tracking-wider block">
                    {field.replace(/([A-Z])/g, " $1").trim()} Translations
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {["en", "es", "pt"].map((l) => (
                      <div key={l} className="space-y-1">
                        <label className="font-bold text-[9px] uppercase text-royal/40">{l.toUpperCase()}</label>
                        {field === "description" || field === "history" || field === "culture" || field === "localFood" || field === "bestTime" ? (
                          <textarea
                            value={editState[field]?.[l] || ""}
                            onChange={(e) => setEditState({
                              ...editState,
                              [field]: { ...(editState[field] || {}), [l]: e.target.value }
                            })}
                            className="w-full h-24 bg-white border border-gold/15 p-3 outline-none rounded-lg"
                          />
                        ) : (
                          <input
                            type="text"
                            value={editState[field]?.[l] || ""}
                            onChange={(e) => setEditState({
                              ...editState,
                              [field]: { ...(editState[field] || {}), [l]: e.target.value }
                            })}
                            className="w-full bg-white border border-gold/15 px-3 py-2 outline-none rounded-lg"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: TRAVEL TIPS */}
          {destSubTab === "travelTips" && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Destination Highlight Points (Why Visit)</span>
                <button
                  type="button"
                  onClick={() => {
                    const newItem = { title: { en: "", es: "", pt: "" }, desc: { en: "", es: "", pt: "" } };
                    setEditState({ ...editState, travelTips: [...(editState.travelTips || []), newItem] });
                  }}
                  className="bg-gold/10 text-royal hover:bg-gold/20 border border-gold/25 font-bold text-[9px] tracking-wider uppercase px-3 py-1.5 rounded transition cursor-pointer"
                >
                  + Add Point
                </button>
              </div>

              {(editState.travelTips || []).length === 0 ? (
                <div className="py-12 bg-[#FAF8F5] border border-dashed border-gold/20 text-center italic text-royal/40 rounded-2xl">
                  No highlight points added yet.
                </div>
              ) : (
                <div className="space-y-4">
                  {(editState.travelTips || []).map((tip: any, idx: number) => (
                    <div key={idx} className="border border-gold/10 p-5 rounded-2xl bg-[#FAF8F5] space-y-4 relative shadow-sm">
                      <div className="flex justify-between items-center pb-2 border-b border-gold/10">
                        <span className="text-[9px] font-bold uppercase text-royal/50">Highlight Point #{idx + 1}</span>
                        <button
                          type="button"
                          onClick={() => {
                            const filtered = editState.travelTips.filter((_: any, i: number) => i !== idx);
                            setEditState({ ...editState, travelTips: filtered });
                          }}
                          className="text-[9px] font-bold text-red-500 uppercase hover:text-red-700 cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>

                      {/* Translations titles and desc */}
                      {["title", "desc"].map((field) => (
                        <div key={field} className="space-y-1">
                          <label className="text-[9px] font-bold uppercase tracking-wider text-royal/40">{field}</label>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {["en", "es", "pt"].map((l) => (
                              <input
                                key={l} type="text" placeholder={l.toUpperCase()}
                                value={tip[field]?.[l] || ""}
                                onChange={(e) => {
                                  const updated = [...editState.travelTips];
                                  updated[idx] = {
                                    ...tip,
                                    [field]: { ...(tip[field] || {}), [l]: e.target.value }
                                  };
                                  setEditState({ ...editState, travelTips: updated });
                                }}
                                className="w-full bg-white border border-gold/10 px-2.5 py-2 outline-none text-[11px] rounded-lg"
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: FAQS */}
          {destSubTab === "faqs" && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-black uppercase tracking-widest text-[9px] text-gold block">State-specific FAQs</span>
                <button
                  type="button"
                  onClick={() => {
                    const newItem = { q: { en: "", es: "", pt: "" }, a: { en: "", es: "", pt: "" } };
                    setEditState({ ...editState, faqs: [...(editState.faqs || []), newItem] });
                  }}
                  className="bg-gold/10 text-royal hover:bg-gold/20 border border-gold/25 font-bold text-[9px] tracking-wider uppercase px-3 py-1.5 rounded transition cursor-pointer"
                >
                  + Add FAQ
                </button>
              </div>

              {(editState.faqs || []).length === 0 ? (
                <div className="py-12 bg-[#FAF8F5] border border-dashed border-gold/20 text-center italic text-royal/40 rounded-2xl">
                  No FAQs defined for this state yet.
                </div>
              ) : (
                <div className="space-y-4">
                  {(editState.faqs || []).map((faq: any, idx: number) => (
                    <div key={idx} className="border border-gold/10 p-5 rounded-2xl bg-[#FAF8F5] space-y-4 relative shadow-sm">
                      <div className="flex justify-between items-center pb-2 border-b border-gold/10">
                        <span className="text-[9px] font-bold uppercase text-royal/50">FAQ #{idx + 1}</span>
                        <button
                          type="button"
                          onClick={() => {
                            const filtered = editState.faqs.filter((_: any, i: number) => i !== idx);
                            setEditState({ ...editState, faqs: filtered });
                          }}
                          className="text-[9px] font-bold text-red-500 uppercase hover:text-red-700 cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>

                      {/* Translations Q and A */}
                      {["q", "a"].map((field) => (
                        <div key={field} className="space-y-1">
                          <label className="text-[9px] font-bold uppercase tracking-wider text-royal/40">{field === "q" ? "Question" : "Answer"}</label>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {["en", "es", "pt"].map((l) => (
                              field === "a" ? (
                                <textarea
                                  key={l} placeholder={l.toUpperCase()}
                                  value={faq[field]?.[l] || ""}
                                  onChange={(e) => {
                                    const updated = [...editState.faqs];
                                    updated[idx] = {
                                      ...faq,
                                      [field]: { ...(faq[field] || {}), [l]: e.target.value }
                                    };
                                    setEditState({ ...editState, faqs: updated });
                                  }}
                                  className="w-full h-16 bg-white border border-gold/10 p-2 outline-none text-[11px] rounded-lg"
                                />
                              ) : (
                                <input
                                  key={l} type="text" placeholder={l.toUpperCase()}
                                  value={faq[field]?.[l] || ""}
                                  onChange={(e) => {
                                    const updated = [...editState.faqs];
                                    updated[idx] = {
                                      ...faq,
                                      [field]: { ...(faq[field] || {}), [l]: e.target.value }
                                    };
                                    setEditState({ ...editState, faqs: updated });
                                  }}
                                  className="w-full bg-white border border-gold/10 px-2.5 py-2 outline-none text-[11px] rounded-lg"
                                />
                              )
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 4: CITIES & ATTRACTIONS */}
          {destSubTab === "cities" && (
            <div className="space-y-6">
              {/* City selector or Creator */}
              {editingCityIdx === null ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Cities & Landmarks (Monuments)</span>
                    <button
                      type="button"
                      onClick={handleAddCity}
                      className="bg-royal text-white border border-gold/20 hover:bg-gold hover:text-royal font-bold text-[9px] tracking-wider uppercase px-3 py-1.5 rounded transition cursor-pointer"
                    >
                      + Add City
                    </button>
                  </div>

                  {(editState.cities || []).length === 0 ? (
                    <div className="py-12 bg-[#FAF8F5] border border-dashed border-gold/20 text-center italic text-royal/40 rounded-2xl">
                      No cities added to this state yet.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {(editState.cities || []).map((city: any, idx: number) => (
                        <div key={city.slug} className="bg-[#FAF8F5] border border-gold/10 p-5 rounded-2xl flex justify-between items-center shadow-sm">
                          <div className="space-y-1">
                            <span className="text-[8px] text-royal/40 font-bold uppercase">City Slug: {city.slug}</span>
                            <h4 className="text-sm font-bold text-royal font-serif">{city.title?.en}</h4>
                            <p className="text-[9px] text-royal/50">
                              {(city.attractions || []).length} attractions configured
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => setEditingCityIdx(idx)}
                              className="bg-royal/5 text-royal border border-royal/10 hover:border-gold/30 hover:bg-gold hover:text-royal font-bold text-[9px] tracking-wider uppercase px-3.5 py-2 rounded-lg transition"
                            >
                              Edit City & Attractions
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                const filtered = editState.cities.filter((_: any, i: number) => i !== idx);
                                setEditState({ ...editState, cities: filtered });
                              }}
                              className="text-red-500 hover:text-red-700 p-1 bg-red-50 rounded-lg"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                /* EDIT CITY WINDOW */
                <div className="space-y-6 bg-[#FAF8F5] border border-gold/15 p-6 rounded-2xl">
                  <div className="flex justify-between items-center border-b border-gold/10 pb-3">
                    <h4 className="text-sm font-bold text-royal">
                      Editing City: <span className="text-gold font-serif">{editState.cities[editingCityIdx].title?.en}</span>
                    </h4>
                    <button
                      type="button"
                      onClick={() => setEditingCityIdx(null)}
                      className="text-royal/60 hover:text-royal font-bold"
                    >
                      Back to Cities List
                    </button>
                  </div>

                  {/* City Sub-tab Navigation */}
                  <div className="flex flex-wrap gap-1.5 border-b border-gold/10 pb-3 mb-4">
                    {[
                      { id: "general", label: "General details" },
                      { id: "details", label: "Overview & Info Texts" },
                      { id: "attractions", label: "Attractions & Monuments" },
                      { id: "thingsToDo", label: "Things to Do" },
                      { id: "hotels", label: "Luxury Hotels" },
                      { id: "nearby", label: "Nearby excursions" },
                      { id: "faqs", label: "City FAQs" },
                    ].map((subTab) => (
                      <button
                        key={subTab.id}
                        type="button"
                        onClick={() => setCitySubTab(subTab.id)}
                        className={`px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider rounded transition-all cursor-pointer ${
                          citySubTab === subTab.id
                            ? "bg-gold/15 text-royal border border-gold/25"
                            : "bg-white text-royal/60 hover:text-royal hover:bg-gold/5 border border-gold/5"
                        }`}
                      >
                        {subTab.label}
                      </button>
                    ))}
                  </div>

                  {/* SUBTAB 1: GENERAL DETAILS */}
                  {citySubTab === "general" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="font-bold uppercase tracking-wider block text-royal/50 text-[10px]">City Slug</label>
                        <input 
                          type="text" value={editState.cities[editingCityIdx].slug || ""}
                          onChange={e => {
                            const updatedCities = [...editState.cities];
                            updatedCities[editingCityIdx].slug = e.target.value;
                            setEditState({ ...editState, cities: updatedCities });
                          }}
                          className="w-full bg-white border border-gold/10 px-3 py-2 outline-none rounded-lg text-xs"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-bold uppercase tracking-wider block text-royal/50 text-[10px]">City Photo URL</label>
                        <div className="flex gap-2">
                          <input 
                            type="text" value={editState.cities[editingCityIdx].image || ""}
                            onChange={e => {
                              const updatedCities = [...editState.cities];
                              updatedCities[editingCityIdx].image = e.target.value;
                              setEditState({ ...editState, cities: updatedCities });
                            }}
                            className="w-full bg-white border border-gold/10 px-3 py-2 outline-none rounded-lg text-xs"
                          />
                          <CloudinaryUpload 
                            label="Upload" 
                            onUploadComplete={(url) => {
                              const updatedCities = [...editState.cities];
                              updatedCities[editingCityIdx].image = url;
                              setEditState({ ...editState, cities: updatedCities });
                            }} 
                            showStatus={showStatus} 
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SUBTAB 2: OVERVIEW & DETAILS */}
                  {citySubTab === "details" && (
                    <div className="space-y-4">
                      {["title", "tagline", "overview", "history", "culture", "bestTime", "localFood", "shopping", "weather", "suggestedItinerary"].map((field) => (
                        <div key={field} className="space-y-1 border border-gold/5 p-4 rounded-xl bg-white">
                          <label className="text-[10px] font-bold uppercase tracking-wider text-royal/60">{field}</label>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {["en", "es", "pt"].map((l) => (
                              <div key={l} className="space-y-0.5">
                                <span className="text-[8px] uppercase text-royal/40 font-bold">{l}</span>
                                {["overview", "history", "culture", "suggestedItinerary"].includes(field) ? (
                                  <textarea
                                    value={editState.cities[editingCityIdx][field]?.[l] || ""}
                                    onChange={(e) => {
                                      const updatedCities = [...editState.cities];
                                      updatedCities[editingCityIdx][field] = {
                                        ...(updatedCities[editingCityIdx][field] || {}),
                                        [l]: e.target.value
                                      };
                                      setEditState({ ...editState, cities: updatedCities });
                                    }}
                                    className="w-full h-20 bg-[#FAF8F5] border border-gold/10 p-2 outline-none rounded-lg text-xs"
                                  />
                                ) : (
                                  <input
                                    type="text"
                                    value={editState.cities[editingCityIdx][field]?.[l] || ""}
                                    onChange={(e) => {
                                      const updatedCities = [...editState.cities];
                                      updatedCities[editingCityIdx][field] = {
                                        ...(updatedCities[editingCityIdx][field] || {}),
                                        [l]: e.target.value
                                      };
                                      setEditState({ ...editState, cities: updatedCities });
                                    }}
                                    className="w-full bg-[#FAF8F5] border border-gold/10 px-2.5 py-2 outline-none rounded-lg text-xs"
                                  />
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* SUBTAB 3: ATTRACTIONS & MONUMENTS */}
                  {citySubTab === "attractions" && (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-gold/10">
                        <span className="font-black uppercase tracking-widest text-[9px] text-royal/60 block">Attractions & Monuments</span>
                        <button
                          type="button"
                          onClick={() => handleAddAttraction(editingCityIdx)}
                          className="bg-royal text-white border border-gold/10 font-bold text-[8px] tracking-wider uppercase px-2.5 py-1.5 rounded transition cursor-pointer"
                        >
                          + Add Attraction
                        </button>
                      </div>

                      {/* Attraction grid list */}
                      {(!editState.cities[editingCityIdx].attractions || editState.cities[editingCityIdx].attractions.length === 0) ? (
                        <div className="py-6 text-center text-[10px] text-royal/40 italic">No attractions configured for this city.</div>
                      ) : (
                        <div className="space-y-4">
                          {editState.cities[editingCityIdx].attractions.map((attr: any, aIdx: number) => {
                            const attrNameObj = typeof attr.name === "object" && attr.name !== null ? attr.name : { en: attr.name || "", es: "", pt: "" };
                            const attrDescObj = typeof attr.desc === "object" && attr.desc !== null ? attr.desc : { en: attr.desc || "", es: "", pt: "" };
                            
                            return (
                              <div key={aIdx} className="bg-white border border-gold/5 p-4 rounded-xl space-y-3 relative shadow-inner text-xs">
                                <div className="flex justify-between items-center pb-1.5 border-b border-gold/10">
                                  <span className="text-[9px] font-bold text-royal/60 uppercase">Attraction #{aIdx + 1}: {attrNameObj.en}</span>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const updatedCities = [...editState.cities];
                                      updatedCities[editingCityIdx].attractions = updatedCities[editingCityIdx].attractions.filter((_: any, i: number) => i !== aIdx);
                                      setEditState({ ...editState, cities: updatedCities });
                                    }}
                                    className="text-[8px] font-bold text-red-500 hover:text-red-700 uppercase"
                                  >
                                    Remove
                                  </button>
                                </div>

                                <div className="grid grid-cols-1 gap-3">
                                  {/* Attraction Name Translations */}
                                  <div className="space-y-1">
                                    <label className="text-[8px] uppercase tracking-wider text-royal/40 block">Name Translations</label>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                      {["en", "es", "pt"].map((lang) => (
                                        <div key={lang} className="space-y-0.5">
                                          <span className="text-[7px] uppercase font-bold text-[#C3AB85]">{lang} Name</span>
                                          <input 
                                            type="text" 
                                            value={attrNameObj[lang] || ""}
                                            onChange={e => {
                                              const updatedCities = [...editState.cities];
                                              const updatedName = { ...attrNameObj, [lang]: e.target.value };
                                              updatedCities[editingCityIdx].attractions[aIdx].name = updatedName;
                                              setEditState({ ...editState, cities: updatedCities });
                                            }}
                                            className="w-full bg-[#FAF8F5] border border-gold/10 px-2 py-1 outline-none text-[11px] rounded"
                                          />
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Attraction Description Translations */}
                                  <div className="space-y-1">
                                    <label className="text-[8px] uppercase tracking-wider text-royal/40 block">Description Translations</label>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                      {["en", "es", "pt"].map((lang) => (
                                        <div key={lang} className="space-y-0.5">
                                          <span className="text-[7px] uppercase font-bold text-[#C3AB85]">{lang} Description</span>
                                          <textarea 
                                            value={attrDescObj[lang] || ""}
                                            onChange={e => {
                                              const updatedCities = [...editState.cities];
                                              const updatedDesc = { ...attrDescObj, [lang]: e.target.value };
                                              updatedCities[editingCityIdx].attractions[aIdx].desc = updatedDesc;
                                              setEditState({ ...editState, cities: updatedCities });
                                            }}
                                            className="w-full h-12 bg-[#FAF8F5] border border-gold/10 p-2 outline-none text-[11px] rounded text-xs"
                                          />
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="space-y-1">
                                      <label className="text-[8px] uppercase tracking-wider text-royal/40 block">Era (e.g. 1592 AD)</label>
                                      <input 
                                        type="text" value={attr.era || ""}
                                        onChange={e => {
                                          const updatedCities = [...editState.cities];
                                          updatedCities[editingCityIdx].attractions[aIdx].era = e.target.value;
                                          setEditState({ ...editState, cities: updatedCities });
                                        }}
                                        className="w-full bg-[#FAF8F5] border border-gold/10 px-2 py-1 outline-none text-[11px] rounded"
                                      />
                                    </div>
                                    <div className="space-y-1">
                                      <label className="text-[8px] uppercase tracking-wider text-royal/40 block">Image URL</label>
                                      <div className="flex gap-1.5">
                                        <input 
                                          type="text" value={attr.image || ""}
                                          onChange={e => {
                                            const updatedCities = [...editState.cities];
                                            updatedCities[editingCityIdx].attractions[aIdx].image = e.target.value;
                                            setEditState({ ...editState, cities: updatedCities });
                                          }}
                                          className="w-full bg-[#FAF8F5] border border-gold/10 px-2 py-1 outline-none text-[11px] rounded"
                                        />
                                        <CloudinaryUpload 
                                          label="Upload" 
                                          onUploadComplete={(url) => {
                                            const updatedCities = [...editState.cities];
                                            updatedCities[editingCityIdx].attractions[aIdx].image = url;
                                            setEditState({ ...editState, cities: updatedCities });
                                          }} 
                                          showStatus={showStatus} 
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}

                  {/* SUBTAB 4: THINGS TO DO */}
                  {citySubTab === "thingsToDo" && (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-gold/10">
                        <span className="font-black uppercase tracking-widest text-[9px] text-royal/60 block">Things to Do (Highlights list)</span>
                        <button
                          type="button"
                          onClick={() => {
                            const updatedCities = [...editState.cities];
                            const currentList = updatedCities[editingCityIdx].thingsToDo || [];
                            updatedCities[editingCityIdx].thingsToDo = [...currentList, { en: "", es: "", pt: "" }];
                            setEditState({ ...editState, cities: updatedCities });
                          }}
                          className="bg-royal text-white border border-gold/10 font-bold text-[8px] tracking-wider uppercase px-2.5 py-1.5 rounded transition cursor-pointer"
                        >
                          + Add Thing to Do
                        </button>
                      </div>

                      {(!editState.cities[editingCityIdx].thingsToDo || editState.cities[editingCityIdx].thingsToDo.length === 0) ? (
                        <div className="py-6 text-center text-[10px] text-royal/40 italic">No activities configured.</div>
                      ) : (
                        <div className="space-y-4">
                          {editState.cities[editingCityIdx].thingsToDo.map((todo: any, idx: number) => {
                            const todoObj = typeof todo === "object" && todo !== null ? todo : { en: todo || "", es: "", pt: "" };
                            return (
                              <div key={idx} className="bg-white border border-gold/5 p-4 rounded-xl space-y-3 relative shadow-inner">
                                <div className="flex justify-between items-center pb-1.5 border-b border-gold/10">
                                  <span className="text-[9px] font-bold text-royal/60 uppercase">Activity #{idx + 1}: {todoObj.en || "(New Bullet)"}</span>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const updatedCities = [...editState.cities];
                                      updatedCities[editingCityIdx].thingsToDo = updatedCities[editingCityIdx].thingsToDo.filter((_: any, i: number) => i !== idx);
                                      setEditState({ ...editState, cities: updatedCities });
                                    }}
                                    className="text-[8px] font-bold text-red-500 hover:text-red-700 uppercase"
                                  >
                                    Remove
                                  </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                  {["en", "es", "pt"].map((lang) => (
                                    <div key={lang} className="space-y-0.5">
                                      <span className="text-[7px] uppercase font-bold text-[#C3AB85]">{lang} Text</span>
                                      <input 
                                        type="text" 
                                        value={todoObj[lang] || ""}
                                        onChange={e => {
                                          const updatedCities = [...editState.cities];
                                          const updatedTodo = { ...todoObj, [lang]: e.target.value };
                                          updatedCities[editingCityIdx].thingsToDo[idx] = updatedTodo;
                                          setEditState({ ...editState, cities: updatedCities });
                                        }}
                                        className="w-full bg-[#FAF8F5] border border-gold/10 px-2 py-1.5 outline-none text-[11px] rounded"
                                      />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}

                  {/* SUBTAB 5: LUXURY HOTELS */}
                  {citySubTab === "hotels" && (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-gold/10">
                        <span className="font-black uppercase tracking-widest text-[9px] text-royal/60 block">Boutique & Heritage Hotels</span>
                        <button
                          type="button"
                          onClick={() => {
                            const updatedCities = [...editState.cities];
                            const currentList = updatedCities[editingCityIdx].hotels || [];
                            updatedCities[editingCityIdx].hotels = [...currentList, { name: "", tier: "Luxury", desc: { en: "", es: "", pt: "" } }];
                            setEditState({ ...editState, cities: updatedCities });
                          }}
                          className="bg-royal text-white border border-gold/10 font-bold text-[8px] tracking-wider uppercase px-2.5 py-1.5 rounded transition cursor-pointer"
                        >
                          + Add Hotel
                        </button>
                      </div>

                      {(!editState.cities[editingCityIdx].hotels || editState.cities[editingCityIdx].hotels.length === 0) ? (
                        <div className="py-6 text-center text-[10px] text-royal/40 italic">No hotels configured.</div>
                      ) : (
                        <div className="space-y-4">
                          {editState.cities[editingCityIdx].hotels.map((hotel: any, idx: number) => {
                            const hotelDescObj = typeof hotel.desc === "object" && hotel.desc !== null ? hotel.desc : { en: hotel.desc || "", es: "", pt: "" };
                            return (
                              <div key={idx} className="bg-white border border-gold/5 p-4 rounded-xl space-y-3 relative shadow-inner">
                                <div className="flex justify-between items-center pb-1.5 border-b border-gold/10">
                                  <span className="text-[9px] font-bold text-royal/60 uppercase">Hotel #{idx + 1}: {hotel.name || "(New Hotel)"}</span>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const updatedCities = [...editState.cities];
                                      updatedCities[editingCityIdx].hotels = updatedCities[editingCityIdx].hotels.filter((_: any, i: number) => i !== idx);
                                      setEditState({ ...editState, cities: updatedCities });
                                    }}
                                    className="text-[8px] font-bold text-red-500 hover:text-red-700 uppercase"
                                  >
                                    Remove
                                  </button>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                  <div className="space-y-1">
                                    <label className="text-[8px] uppercase tracking-wider text-royal/40 block">Hotel Name</label>
                                    <input 
                                      type="text" 
                                      value={hotel.name || ""}
                                      onChange={e => {
                                        const updatedCities = [...editState.cities];
                                        updatedCities[editingCityIdx].hotels[idx].name = e.target.value;
                                        setEditState({ ...editState, cities: updatedCities });
                                      }}
                                      className="w-full bg-[#FAF8F5] border border-gold/10 px-2 py-1 outline-none text-[11px] rounded"
                                    />
                                  </div>
                                  <div className="space-y-1">
                                    <label className="text-[8px] uppercase tracking-wider text-royal/40 block">Tier Category</label>
                                    <select 
                                      value={hotel.tier || "Luxury"}
                                      onChange={e => {
                                        const updatedCities = [...editState.cities];
                                        updatedCities[editingCityIdx].hotels[idx].tier = e.target.value;
                                        setEditState({ ...editState, cities: updatedCities });
                                      }}
                                      className="w-full bg-[#FAF8F5] border border-gold/10 px-2 py-1 outline-none text-[11px] rounded h-7"
                                    >
                                      <option value="Luxury">Luxury</option>
                                      <option value="Premium">Premium</option>
                                      <option value="Boutique">Boutique</option>
                                    </select>
                                  </div>
                                </div>

                                <div className="space-y-1">
                                  <label className="text-[8px] uppercase tracking-wider text-royal/40 block">Description Translations</label>
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                    {["en", "es", "pt"].map((lang) => (
                                      <div key={lang} className="space-y-0.5">
                                        <span className="text-[7px] uppercase font-bold text-[#C3AB85]">{lang} Description</span>
                                        <textarea 
                                          value={hotelDescObj[lang] || ""}
                                          onChange={e => {
                                            const updatedCities = [...editState.cities];
                                            const updatedDesc = { ...hotelDescObj, [lang]: e.target.value };
                                            updatedCities[editingCityIdx].hotels[idx].desc = updatedDesc;
                                            setEditState({ ...editState, cities: updatedCities });
                                          }}
                                          className="w-full h-12 bg-[#FAF8F5] border border-gold/10 p-2 outline-none text-[11px] rounded text-xs animate-none"
                                        />
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}

                  {/* SUBTAB 6: NEARBY EXCURSIONS */}
                  {citySubTab === "nearby" && (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-gold/10">
                        <span className="font-black uppercase tracking-widest text-[9px] text-royal/60 block">Nearby excursions & Day trips</span>
                        <button
                          type="button"
                          onClick={() => {
                            const updatedCities = [...editState.cities];
                            const currentList = updatedCities[editingCityIdx].nearbyPlaces || [];
                            updatedCities[editingCityIdx].nearbyPlaces = [...currentList, { name: "", distance: "" }];
                            setEditState({ ...editState, cities: updatedCities });
                          }}
                          className="bg-royal text-white border border-gold/10 font-bold text-[8px] tracking-wider uppercase px-2.5 py-1.5 rounded transition cursor-pointer"
                        >
                          + Add Excursion
                        </button>
                      </div>

                      {(!editState.cities[editingCityIdx].nearbyPlaces || editState.cities[editingCityIdx].nearbyPlaces.length === 0) ? (
                        <div className="py-6 text-center text-[10px] text-royal/40 italic">No excursions configured.</div>
                      ) : (
                        <div className="space-y-4">
                          {editState.cities[editingCityIdx].nearbyPlaces.map((place: any, idx: number) => (
                            <div key={idx} className="bg-white border border-gold/5 p-4 rounded-xl space-y-3 relative shadow-inner">
                              <div className="flex justify-between items-center pb-1.5 border-b border-gold/10">
                                <span className="text-[9px] font-bold text-royal/60 uppercase">Excursion #{idx + 1}: {place.name || "(New Place)"}</span>
                                <button
                                  type="button"
                                  onClick={() => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].nearbyPlaces = updatedCities[editingCityIdx].nearbyPlaces.filter((_: any, i: number) => i !== idx);
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="text-[8px] font-bold text-red-500 hover:text-red-700 uppercase"
                                >
                                  Remove
                                </button>
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="space-y-1">
                                  <label className="text-[8px] uppercase tracking-wider text-royal/40 block">Destination Name</label>
                                  <input 
                                    type="text" 
                                    value={place.name || ""}
                                    onChange={e => {
                                      const updatedCities = [...editState.cities];
                                      updatedCities[editingCityIdx].nearbyPlaces[idx].name = e.target.value;
                                      setEditState({ ...editState, cities: updatedCities });
                                    }}
                                    className="w-full bg-[#FAF8F5] border border-gold/10 px-2 py-1 outline-none text-[11px] rounded"
                                  />
                                </div>
                                <div className="space-y-1">
                                  <label className="text-[8px] uppercase tracking-wider text-royal/40 block">Distance (e.g. 145 km)</label>
                                  <input 
                                    type="text" 
                                    value={place.distance || ""}
                                    onChange={e => {
                                      const updatedCities = [...editState.cities];
                                      updatedCities[editingCityIdx].nearbyPlaces[idx].distance = e.target.value;
                                      setEditState({ ...editState, cities: updatedCities });
                                    }}
                                    className="w-full bg-[#FAF8F5] border border-gold/10 px-2 py-1 outline-none text-[11px] rounded"
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* SUBTAB 7: CITY FAQS */}
                  {citySubTab === "faqs" && (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-gold/10">
                        <span className="font-black uppercase tracking-widest text-[9px] text-royal/60 block">City Specific FAQs</span>
                        <button
                          type="button"
                          onClick={() => {
                            const updatedCities = [...editState.cities];
                            const currentList = updatedCities[editingCityIdx].faqs || [];
                            updatedCities[editingCityIdx].faqs = [...currentList, { q: { en: "", es: "", pt: "" }, a: { en: "", es: "", pt: "" } }];
                            setEditState({ ...editState, cities: updatedCities });
                          }}
                          className="bg-royal text-white border border-gold/10 font-bold text-[8px] tracking-wider uppercase px-2.5 py-1.5 rounded transition cursor-pointer"
                        >
                          + Add FAQ
                        </button>
                      </div>

                      {(!editState.cities[editingCityIdx].faqs || editState.cities[editingCityIdx].faqs.length === 0) ? (
                        <div className="py-6 text-center text-[10px] text-royal/40 italic">No FAQs configured.</div>
                      ) : (
                        <div className="space-y-4">
                          {editState.cities[editingCityIdx].faqs.map((faq: any, idx: number) => {
                            const qObj = typeof faq.q === "object" && faq.q !== null ? faq.q : { en: faq.q || "", es: "", pt: "" };
                            const aObj = typeof faq.a === "object" && faq.a !== null ? faq.a : { en: faq.a || "", es: "", pt: "" };
                            return (
                              <div key={idx} className="bg-white border border-gold/5 p-4 rounded-xl space-y-4 relative shadow-inner">
                                <div className="flex justify-between items-center pb-1.5 border-b border-gold/10">
                                  <span className="text-[9px] font-bold text-royal/60 uppercase">FAQ #{idx + 1}</span>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const updatedCities = [...editState.cities];
                                      updatedCities[editingCityIdx].faqs = updatedCities[editingCityIdx].faqs.filter((_: any, i: number) => i !== idx);
                                      setEditState({ ...editState, cities: updatedCities });
                                    }}
                                    className="text-[8px] font-bold text-red-500 hover:text-red-700 uppercase"
                                  >
                                    Remove
                                  </button>
                                </div>
                                
                                {/* Question Translations */}
                                <div className="space-y-1">
                                  <label className="text-[8px] uppercase tracking-wider text-royal/40 block">Question Translations</label>
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                    {["en", "es", "pt"].map((lang) => (
                                      <div key={lang} className="space-y-0.5">
                                        <span className="text-[7px] uppercase font-bold text-[#C3AB85]">{lang} Question</span>
                                        <input 
                                          type="text" 
                                          value={qObj[lang] || ""}
                                          onChange={e => {
                                            const updatedCities = [...editState.cities];
                                            const updatedQ = { ...qObj, [lang]: e.target.value };
                                            updatedCities[editingCityIdx].faqs[idx].q = updatedQ;
                                            setEditState({ ...editState, cities: updatedCities });
                                          }}
                                          className="w-full bg-[#FAF8F5] border border-gold/10 px-2 py-1 outline-none text-[11px] rounded"
                                        />
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Answer Translations */}
                                <div className="space-y-1">
                                  <label className="text-[8px] uppercase tracking-wider text-royal/40 block">Answer Translations</label>
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                    {["en", "es", "pt"].map((lang) => (
                                      <div key={lang} className="space-y-0.5">
                                        <span className="text-[7px] uppercase font-bold text-[#C3AB85]">{lang} Answer</span>
                                        <textarea 
                                          value={aObj[lang] || ""}
                                          onChange={e => {
                                            const updatedCities = [...editState.cities];
                                            const updatedA = { ...aObj, [lang]: e.target.value };
                                            updatedCities[editingCityIdx].faqs[idx].a = updatedA;
                                            setEditState({ ...editState, cities: updatedCities });
                                          }}
                                          className="w-full h-12 bg-[#FAF8F5] border border-gold/10 p-2 outline-none text-[11px] rounded text-xs"
                                        />
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Form Actions */}
          <div className="flex gap-4 pt-4 border-t border-gold/10">
            <button type="submit" className="bg-royal text-white px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer rounded-lg shadow-md hover:bg-gold hover:text-royal transition">
              Save State Destination
            </button>
            <button type="button" onClick={() => setEditState(null)} className="bg-beige/35 text-royal px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer rounded-lg">
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* STATES LIST (WITHOUT ACTIVE FORM) */}
      {!editState && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(states || []).map((st) => (
            <div key={st.slug} className="bg-white border border-beige/45 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between hover:border-gold/30 transition">
              <div className="h-40 w-full overflow-hidden bg-light-gray relative">
                <img src={st.image} alt={st.title?.en} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
              </div>
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-1.5">
                  <span className="text-[8px] bg-royal/10 text-royal px-2.5 py-0.5 rounded uppercase font-bold tracking-wider border border-gold/15">{st.region} India</span>
                  <h4 className="text-base font-bold text-royal font-serif line-clamp-1">{st.title?.en}</h4>
                  <p className="text-xs text-foreground/50 line-clamp-2 leading-relaxed font-light">{st.tagline?.en}</p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-beige/25 text-xs">
                  <button
                    onClick={() => {
                      setEditState(st);
                      setDestSubTab("general");
                      setEditingCityIdx(null);
                      setEditingAttractionIdx(null);
                    }}
                    className="text-royal hover:text-gold flex items-center gap-1 font-bold uppercase tracking-wider cursor-pointer"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                    <span>Edit State</span>
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm(`Are you sure you want to delete ${st.title?.en}? This will delete all its cities and attractions!`)) {
                        onDeleteState(st.slug);
                      }
                    }}
                    className="text-red-500 hover:text-red-700 flex items-center gap-1 font-bold uppercase tracking-wider cursor-pointer"
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
