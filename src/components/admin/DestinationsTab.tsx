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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-bold uppercase tracking-wider block text-royal/50">City Slug</label>
                      <input 
                        type="text" value={editState.cities[editingCityIdx].slug || ""}
                        onChange={e => {
                          const updatedCities = [...editState.cities];
                          updatedCities[editingCityIdx].slug = e.target.value;
                          setEditState({ ...editState, cities: updatedCities });
                        }}
                        className="w-full bg-white border border-gold/10 px-3 py-2 outline-none rounded-lg"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold uppercase tracking-wider block text-royal/50">City Photo URL</label>
                      <div className="flex gap-2">
                        <input 
                          type="text" value={editState.cities[editingCityIdx].image || ""}
                          onChange={e => {
                            const updatedCities = [...editState.cities];
                            updatedCities[editingCityIdx].image = e.target.value;
                            setEditState({ ...editState, cities: updatedCities });
                          }}
                          className="w-full bg-white border border-gold/10 px-3 py-2 outline-none rounded-lg"
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

                  {/* Translations */}
                  {["title", "tagline", "overview", "history", "culture", "bestTime", "localFood", "shopping", "weather", "suggestedItinerary"].map((field) => (
                    <div key={field} className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-royal/50">{field}</label>
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
                                className="w-full h-16 bg-white border border-gold/10 p-2 outline-none rounded-lg text-xs"
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
                                className="w-full bg-white border border-gold/10 px-2.5 py-2 outline-none rounded-lg text-xs"
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* attractions block */}
                  <div className="space-y-4 pt-6 border-t border-gold/10">
                    <div className="flex justify-between items-center">
                      <span className="font-black uppercase tracking-widest text-[9px] text-royal/60 block">Attractions & Monuments in {editState.cities[editingCityIdx].title?.en}</span>
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
