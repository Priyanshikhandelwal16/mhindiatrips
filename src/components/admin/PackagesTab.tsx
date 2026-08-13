"use client";

import React, { useState, useEffect } from "react";
import { 
  Compass, Plus, Edit2, Trash2, Calendar, Image as ImageIcon, MapPin, 
  Check, ArrowRight, ArrowDown, ChevronRight 
} from "lucide-react";
import { CloudinaryUpload } from "./CloudinaryUpload";

interface PackagesTabProps {
  packages: any[];
  editPackage: any;
  setEditPackage: (pkg: any) => void;
  handleSavePackage: (e: React.FormEvent) => void;
  handleDeletePackage: (slug: string) => void;
  showStatus: (text: string, type: "success" | "error") => void;
}

export default function PackagesTab({
  packages,
  editPackage,
  setEditPackage,
  handleSavePackage,
  handleDeletePackage,
  showStatus
}: PackagesTabProps) {

  const [subTab, setSubTab] = useState<"general" | "highlights" | "inclusions" | "itinerary">("general");

  useEffect(() => {
    if (editPackage) {
      setSubTab("general");
    }
  }, [editPackage?.slug]);

  const handleAddHighlight = () => {
    const newBullet = { en: "New highlight point", es: "", pt: "" };
    const updatedHighlights = [...(editPackage.highlights || []), newBullet];
    setEditPackage({ ...editPackage, highlights: updatedHighlights });
  };

  const handleUpdateHighlight = (idx: number, val: any) => {
    const updatedHighlights = [...(editPackage.highlights || [])];
    updatedHighlights[idx] = val;
    setEditPackage({ ...editPackage, highlights: updatedHighlights });
  };

  const handleRemoveHighlight = (idx: number) => {
    const updatedHighlights = (editPackage.highlights || []).filter((_: any, i: number) => i !== idx);
    setEditPackage({ ...editPackage, highlights: updatedHighlights });
  };

  const handleAddInclusion = () => {
    const newBullet = { en: "New inclusion item", es: "", pt: "" };
    const updated = [...(editPackage.includedExperiences || []), newBullet];
    setEditPackage({ ...editPackage, includedExperiences: updated });
  };

  const handleUpdateInclusion = (idx: number, val: any) => {
    const updated = [...(editPackage.includedExperiences || [])];
    updated[idx] = val;
    setEditPackage({ ...editPackage, includedExperiences: updated });
  };

  const handleRemoveInclusion = (idx: number) => {
    const updated = (editPackage.includedExperiences || []).filter((_: any, i: number) => i !== idx);
    setEditPackage({ ...editPackage, includedExperiences: updated });
  };

  const handleAddItineraryDay = () => {
    const nextDay = (editPackage.itinerary || []).length + 1;
    const newDay = {
      day: nextDay,
      title: { en: `Day ${nextDay} Activity`, es: "", pt: "" },
      desc: { en: "Detailed description of the day's tours, sights, and accommodation.", es: "", pt: "" }
    };
    const updated = [...(editPackage.itinerary || []), newDay];
    setEditPackage({ ...editPackage, itinerary: updated });
  };

  const handleUpdateItineraryDay = (idx: number, field: "title" | "desc", lang: string, val: string) => {
    const updated = [...(editPackage.itinerary || [])];
    updated[idx] = {
      ...updated[idx],
      [field]: {
        ...(updated[idx][field] || {}),
        [lang]: val
      }
    };
    setEditPackage({ ...editPackage, itinerary: updated });
  };

  const handleRemoveItineraryDay = (idx: number) => {
    const updated = (editPackage.itinerary || []).filter((_: any, i: number) => i !== idx)
      .map((day: any, i: number) => ({ ...day, day: i + 1 })); // Recalculate day numbers
    setEditPackage({ ...editPackage, itinerary: updated });
  };

  return (
    <div className="space-y-6 animate-fade-in text-xs text-royal">
      {/* Packages Tab Header */}
      {!editPackage && (
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-royal font-serif">Manage Tour Packages</h2>
            <p className="text-[10px] text-royal/40">Manage itineraries, themes, durations, and highlights for tour packages.</p>
          </div>
          <button
            onClick={() => setEditPackage({ 
              title: { en: "", es: "", pt: "" }, 
              tagline: { en: "", es: "", pt: "" }, 
              slug: "", 
              category: "Luxury", 
              durationDays: 7, 
              image: "", 
              highlights: [],
              includedExperiences: [],
              itinerary: []
            })}
            className="bg-royal text-white border border-gold/20 hover:bg-gold hover:text-royal font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 flex items-center gap-1.5 transition cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Package</span>
          </button>
        </div>
      )}

      {/* ADD / EDIT PACKAGE FORM */}
      {editPackage && (
        <form onSubmit={handleSavePackage} className="bg-white border border-gold/20 rounded-3xl p-8 shadow-md space-y-6">
          <div className="flex justify-between items-center border-b border-beige/40 pb-4">
            <h3 className="text-base font-bold font-serif">{editPackage.slug ? `Edit Package: ${editPackage.title?.en}` : "Create New Tour Package"}</h3>
            <button type="button" onClick={() => setEditPackage(null)} className="text-royal/50 hover:text-royal font-bold">Cancel</button>
          </div>

          {/* Sub tabs configuration */}
          <div className="flex border-b border-gold/10 pb-2 mb-6 gap-2 flex-wrap">
            {[
              { id: "general", label: "General Details" },
              { id: "highlights", label: "Tour Highlights" },
              { id: "inclusions", label: "Inclusions / Add-ons" },
              { id: "itinerary", label: "Day-by-Day Itinerary" }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSubTab(tab.id as any)}
                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition rounded-lg border ${
                  subTab === tab.id 
                    ? "bg-royal text-white border-royal shadow-sm" 
                    : "bg-[#FAF8F5] text-royal/60 border-gold/10 hover:text-royal"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 1: GENERAL DETAILS */}
          {subTab === "general" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-1.5">
                  <label className="font-bold uppercase tracking-wider block">Slug (e.g. golden-triangle-luxury)</label>
                  <input 
                    type="text" 
                    required
                    value={editPackage.slug}
                    onChange={e => setEditPackage({...editPackage, slug: e.target.value.toLowerCase().replace(/\s+/g, "-")})}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold uppercase tracking-wider block">Category (e.g. Luxury, Spiritual, Wildlife)</label>
                  <input 
                    type="text" 
                    value={editPackage.category}
                    onChange={e => setEditPackage({...editPackage, category: e.target.value})}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold uppercase tracking-wider block">Duration Days</label>
                  <input 
                    type="number" 
                    value={editPackage.durationDays}
                    onChange={e => setEditPackage({...editPackage, durationDays: parseInt(e.target.value) || 5})}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50"
                  />
                </div>
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
                        value={editPackage.title?.[lang] || ""}
                        onChange={e => setEditPackage({
                          ...editPackage, 
                          title: { ...editPackage.title, [lang]: e.target.value }
                        })}
                        className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2.5 outline-none rounded-lg focus:border-gold/50"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Tagline Translations */}
              <div className="space-y-3">
                <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Tagline / Subtitle Translations</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["en", "es", "pt"].map((lang) => (
                    <div key={lang} className="space-y-1">
                      <label className="font-bold uppercase tracking-wider">Tagline ({lang.toUpperCase()})</label>
                      <input 
                        type="text" 
                        value={editPackage.tagline?.[lang] || ""}
                        onChange={e => setEditPackage({
                          ...editPackage, 
                          tagline: { ...editPackage.tagline, [lang]: e.target.value }
                        })}
                        className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2.5 outline-none rounded-lg focus:border-gold/50"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Package Image URL */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                <div className="md:col-span-8 space-y-1.5">
                  <label className="font-bold uppercase tracking-wider block">Image URL</label>
                  <input 
                    type="text" 
                    value={editPackage.image}
                    onChange={e => setEditPackage({...editPackage, image: e.target.value})}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50"
                  />
                </div>
                <div className="md:col-span-4 pb-0.5">
                  <CloudinaryUpload 
                    onUploadComplete={(url) => setEditPackage({ ...editPackage, image: url })} 
                    label="Upload Package Photo"
                    showStatus={showStatus}
                  />
                </div>
                {editPackage.image && (
                  <div className="col-span-full h-36 w-full overflow-hidden border border-gold/10 rounded-2xl shadow-inner">
                    <img src={editPackage.image} alt="Package banner" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: TOUR HIGHLIGHTS */}
          {subTab === "highlights" && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Tour Highlight Bullets</span>
                <button
                  type="button"
                  onClick={handleAddHighlight}
                  className="bg-gold/15 text-royal border border-gold/25 font-bold text-[9px] tracking-wider uppercase px-3 py-1.5 rounded transition hover:bg-gold hover:text-royal"
                >
                  + Add Highlight
                </button>
              </div>

              {(!editPackage.highlights || editPackage.highlights.length === 0) ? (
                <div className="py-6 text-center text-royal/40 italic bg-[#FAF8F5] rounded-xl border border-dashed border-gold/20">
                  No highlights configured. Add highlights to showcase itinerary details.
                </div>
              ) : (
                <div className="space-y-4">
                  {editPackage.highlights.map((hl: any, idx: number) => {
                    const hlObj = typeof hl === "object" && hl !== null ? hl : { en: hl || "", es: "", pt: "" };
                    return (
                      <div key={idx} className="bg-[#FAF8F5] border border-gold/15 p-4 rounded-xl space-y-3">
                        <div className="flex justify-between items-center pb-2 border-b border-gold/5">
                          <span className="font-bold text-gold text-xs">Highlight Bullet #{idx + 1}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveHighlight(idx)}
                            className="text-red-500 hover:text-red-700 font-bold text-[10px] uppercase tracking-wider"
                          >
                            Delete Bullet
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {["en", "es", "pt"].map((lang) => (
                            <div key={lang} className="space-y-1">
                              <label className="font-semibold text-royal/70 uppercase text-[9px] tracking-wider">Text ({lang.toUpperCase()})</label>
                              <input
                                type="text"
                                value={hlObj[lang] || ""}
                                onChange={(e) => {
                                  const newHl = { ...hlObj, [lang]: e.target.value };
                                  handleUpdateHighlight(idx, newHl);
                                }}
                                className="w-full bg-white border border-gold/10 px-3 py-2 outline-none rounded-lg focus:border-gold/50"
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

          {/* TAB 3: INCLUSIONS / ADD-ONS */}
          {subTab === "inclusions" && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Included Experiences / Add-ons</span>
                <button
                  type="button"
                  onClick={handleAddInclusion}
                  className="bg-gold/15 text-royal border border-gold/25 font-bold text-[9px] tracking-wider uppercase px-3 py-1.5 rounded transition hover:bg-gold hover:text-royal"
                >
                  + Add Inclusion
                </button>
              </div>

              {(!editPackage.includedExperiences || editPackage.includedExperiences.length === 0) ? (
                <div className="py-6 text-center text-royal/40 italic bg-[#FAF8F5] rounded-xl border border-dashed border-gold/20">
                  No inclusions configured. Add inclusions or experiences that are covered in the pricing.
                </div>
              ) : (
                <div className="space-y-4">
                  {editPackage.includedExperiences.map((inc: any, idx: number) => {
                    const incObj = typeof inc === "object" && inc !== null ? inc : { en: inc || "", es: "", pt: "" };
                    return (
                      <div key={idx} className="bg-[#FAF8F5] border border-gold/15 p-4 rounded-xl space-y-3">
                        <div className="flex justify-between items-center pb-2 border-b border-gold/5">
                          <span className="font-bold text-gold text-xs">Inclusion #{idx + 1}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveInclusion(idx)}
                            className="text-red-500 hover:text-red-700 font-bold text-[10px] uppercase tracking-wider"
                          >
                            Delete Inclusion
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {["en", "es", "pt"].map((lang) => (
                            <div key={lang} className="space-y-1">
                              <label className="font-semibold text-royal/70 uppercase text-[9px] tracking-wider">Text ({lang.toUpperCase()})</label>
                              <input
                                type="text"
                                value={incObj[lang] || ""}
                                onChange={(e) => {
                                  const newInc = { ...incObj, [lang]: e.target.value };
                                  handleUpdateInclusion(idx, newInc);
                                }}
                                className="w-full bg-white border border-gold/10 px-3 py-2 outline-none rounded-lg focus:border-gold/50"
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

          {/* TAB 4: ITINERARY */}
          {subTab === "itinerary" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Day-by-Day Itinerary Planner</span>
                <button
                  type="button"
                  onClick={handleAddItineraryDay}
                  className="bg-gold/15 text-royal border border-gold/25 font-bold text-[9px] tracking-wider uppercase px-3 py-1.5 rounded transition hover:bg-gold hover:text-royal"
                >
                  + Add Itinerary Day
                </button>
              </div>

              {(!editPackage.itinerary || editPackage.itinerary.length === 0) ? (
                <div className="py-12 text-center text-royal/40 italic bg-[#FAF8F5] rounded-2xl border border-dashed border-gold/20">
                  No itinerary days configured. Click "Add Itinerary Day" to create a detailed day-by-day tour breakdown.
                </div>
              ) : (
                <div className="space-y-6">
                  {editPackage.itinerary.map((dayItem: any, idx: number) => (
                    <div key={idx} className="border border-gold/15 bg-white p-6 rounded-2xl space-y-4 shadow-sm relative">
                      <div className="flex justify-between items-center pb-2 border-b border-beige/40">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-royal text-white flex items-center justify-center font-bold text-[10px]">
                            {dayItem.day}
                          </span>
                          <span className="font-serif font-bold text-sm text-royal">Itinerary Day Breakdown</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveItineraryDay(idx)}
                          className="text-red-500 hover:text-red-700 font-bold uppercase tracking-wider text-[9px]"
                        >
                          Delete Day {dayItem.day}
                        </button>
                      </div>

                      {/* Day Title Translations */}
                      <div className="space-y-3">
                        <span className="font-bold text-[9px] uppercase tracking-wider text-royal/60 block">Day Activity Title Translations</span>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {["en", "es", "pt"].map((l) => (
                            <div key={l} className="space-y-1">
                              <span className="text-[8px] uppercase text-royal/40 font-bold block">{l.toUpperCase()} Title</span>
                              <input 
                                type="text"
                                value={dayItem.title?.[l] || ""}
                                onChange={e => handleUpdateItineraryDay(idx, "title", l, e.target.value)}
                                className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2 outline-none rounded-lg text-xs"
                                placeholder={`Day ${dayItem.day} Title (${l})`}
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Day Description Translations */}
                      <div className="space-y-3 pt-2">
                        <span className="font-bold text-[9px] uppercase tracking-wider text-royal/60 block">Day Description Details</span>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {["en", "es", "pt"].map((l) => (
                            <div key={l} className="space-y-1">
                              <span className="text-[8px] uppercase text-royal/40 font-bold block">{l.toUpperCase()} Description</span>
                              <textarea
                                value={dayItem.desc?.[l] || ""}
                                onChange={e => handleUpdateItineraryDay(idx, "desc", l, e.target.value)}
                                className="w-full h-24 bg-[#FAF8F5] border border-gold/10 p-3 outline-none rounded-lg text-xs"
                                placeholder={`Enter Day ${dayItem.day} detailed guidelines and attractions...`}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Form Actions */}
          <div className="flex gap-4 pt-4 border-t border-beige/40">
            <button type="submit" className="bg-royal text-white px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer rounded-lg shadow-md hover:bg-gold hover:text-royal transition">
              Save Tour Package
            </button>
            <button type="button" onClick={() => setEditPackage(null)} className="bg-beige/35 text-royal px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer rounded-lg">
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* PACKAGES DIRECTORY */}
      {!editPackage && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(packages || []).map((pkg) => (
            <div key={pkg.slug} className="bg-white border border-beige/45 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between hover:border-gold/30 transition">
              <div className="h-40 w-full overflow-hidden bg-light-gray relative">
                <img src={pkg.image} alt={pkg.title?.en} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
              </div>
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] bg-royal/10 text-royal px-2.5 py-0.5 rounded uppercase font-bold tracking-wider border border-gold/15">{pkg.category}</span>
                    <span className="text-[10px] text-foreground/45 font-semibold">{pkg.durationDays} Days</span>
                  </div>
                  <h4 className="text-base font-bold text-royal font-serif line-clamp-1">{pkg.title?.en}</h4>
                  <p className="text-xs text-foreground/50 line-clamp-2 leading-relaxed font-light">{pkg.tagline?.en}</p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-beige/25 text-xs">
                  <button
                    onClick={() => setEditPackage(pkg)}
                    className="text-royal hover:text-gold flex items-center gap-1 font-bold uppercase tracking-wider cursor-pointer"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm(`Are you sure you want to delete the "${pkg.title?.en}" package?`)) {
                        handleDeletePackage(pkg.slug);
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
