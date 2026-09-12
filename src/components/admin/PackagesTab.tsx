"use client";

import React, { useState, useEffect } from "react";
import { 
  Compass, Plus, Edit2, Trash2, Calendar, Image as ImageIcon, MapPin, 
  Check, ArrowRight, ArrowDown, ChevronRight, HelpCircle, DollarSign,
  Info, ShieldAlert, Globe, Activity, List, Play, X, Star, Settings
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

  const [subTab, setSubTab] = useState<string>("general");

  useEffect(() => {
    if (editPackage) {
      setSubTab("general");
    }
  }, [editPackage?.slug]);

  // HIGHLIGHTS HANDLERS
  const handleAddHighlight = () => {
    const newHighlight = {
      title: { en: "New Highlight Title", es: "", pt: "" },
      desc: { en: "Highlight description", es: "", pt: "" },
      icon: "Check",
      image: "",
      displayOrder: (editPackage.highlights || []).length + 1,
      isActive: true
    };
    setEditPackage({ ...editPackage, highlights: [...(editPackage.highlights || []), newHighlight] });
  };

  const handleUpdateHighlight = (idx: number, field: string, lang: string | null, val: any) => {
    const updated = [...(editPackage.highlights || [])];
    if (lang) {
      updated[idx] = {
        ...updated[idx],
        [field]: {
          ...(updated[idx][field] || {}),
          [lang]: val
        }
      };
    } else {
      updated[idx] = {
        ...updated[idx],
        [field]: val
      };
    }
    setEditPackage({ ...editPackage, highlights: updated });
  };

  const handleRemoveHighlight = (idx: number) => {
    const updated = (editPackage.highlights || []).filter((_: any, i: number) => i !== idx);
    setEditPackage({ ...editPackage, highlights: updated });
  };

  // INCLUSIONS HANDLERS
  const handleAddInclusion = () => {
    const newBullet = { en: "New inclusion item", es: "", pt: "" };
    setEditPackage({ ...editPackage, includedExperiences: [...(editPackage.includedExperiences || []), newBullet] });
  };

  const handleUpdateInclusion = (idx: number, lang: string, val: string) => {
    const updated = [...(editPackage.includedExperiences || [])];
    updated[idx] = { ...updated[idx], [lang]: val };
    setEditPackage({ ...editPackage, includedExperiences: updated });
  };

  const handleRemoveInclusion = (idx: number) => {
    const updated = (editPackage.includedExperiences || []).filter((_: any, i: number) => i !== idx);
    setEditPackage({ ...editPackage, includedExperiences: updated });
  };

  // EXCLUSIONS HANDLERS
  const handleAddExclusion = () => {
    const newBullet = { en: "New exclusion item", es: "", pt: "" };
    setEditPackage({ ...editPackage, exclusions: [...(editPackage.exclusions || []), newBullet] });
  };

  const handleUpdateExclusion = (idx: number, lang: string, val: string) => {
    const updated = [...(editPackage.exclusions || [])];
    updated[idx] = { ...updated[idx], [lang]: val };
    setEditPackage({ ...editPackage, exclusions: updated });
  };

  const handleRemoveExclusion = (idx: number) => {
    const updated = (editPackage.exclusions || []).filter((_: any, i: number) => i !== idx);
    setEditPackage({ ...editPackage, exclusions: updated });
  };

  // ADD-ONS / OPTIONAL EXPERIENCES HANDLERS
  const handleAddAddon = () => {
    const newAddon = {
      name: { en: "New Add-on Experience", es: "", pt: "" },
      desc: { en: "Add-on description details", es: "", pt: "" },
      price: "50",
      currency: "USD",
      duration: "3 Hours",
      image: "",
      isActive: true
    };
    setEditPackage({ ...editPackage, addons: [...(editPackage.addons || []), newAddon] });
  };

  const handleUpdateAddon = (idx: number, field: string, lang: string | null, val: any) => {
    const updated = [...(editPackage.addons || [])];
    if (lang) {
      updated[idx] = {
        ...updated[idx],
        [field]: {
          ...(updated[idx][field] || {}),
          [lang]: val
        }
      };
    } else {
      updated[idx] = {
        ...updated[idx],
        [field]: val
      };
    }
    setEditPackage({ ...editPackage, addons: updated });
  };

  const handleRemoveAddon = (idx: number) => {
    const updated = (editPackage.addons || []).filter((_: any, i: number) => i !== idx);
    setEditPackage({ ...editPackage, addons: updated });
  };

  // ITINERARY DAYS HANDLERS
  const handleAddItineraryDay = () => {
    const nextDay = (editPackage.itinerary || []).length + 1;
    const newDay = {
      day: nextDay,
      title: { en: `Arrival and Welcome`, es: "", pt: "" },
      desc: { en: "Detailed sightseeing and transfers details...", es: "", pt: "" },
      location: "",
      activities: [],
      sightseeing: "",
      meals: "Breakfast",
      overnight: "",
      hotel: "",
      travelDistance: "",
      travelTime: "",
      image: "",
      optionalExperiences: ""
    };
    setEditPackage({ ...editPackage, itinerary: [...(editPackage.itinerary || []), newDay] });
  };

  const handleUpdateItineraryDay = (idx: number, field: string, lang: string | null, val: any) => {
    const updated = [...(editPackage.itinerary || [])];
    if (lang) {
      updated[idx] = {
        ...updated[idx],
        [field]: {
          ...(updated[idx][field] || {}),
          [lang]: val
        }
      };
    } else {
      updated[idx] = {
        ...updated[idx],
        [field]: val
      };
    }
    setEditPackage({ ...editPackage, itinerary: updated });
  };

  const handleRemoveItineraryDay = (idx: number) => {
    const updated = (editPackage.itinerary || []).filter((_: any, i: number) => i !== idx)
      .map((day: any, i: number) => ({ ...day, day: i + 1 })); // Recalculate day numbers
    setEditPackage({ ...editPackage, itinerary: updated });
  };

  const handleMoveDayUp = (idx: number) => {
    if (idx <= 0) return;
    const updated = [...(editPackage.itinerary || [])];
    const temp = updated[idx - 1];
    updated[idx - 1] = updated[idx];
    updated[idx] = temp;
    const reindexed = updated.map((d: any, i: number) => ({ ...d, day: i + 1 }));
    setEditPackage({ ...editPackage, itinerary: reindexed });
  };

  const handleMoveDayDown = (idx: number) => {
    const updated = [...(editPackage.itinerary || [])];
    if (idx >= updated.length - 1) return;
    const temp = updated[idx + 1];
    updated[idx + 1] = updated[idx];
    updated[idx] = temp;
    const reindexed = updated.map((d: any, i: number) => ({ ...d, day: i + 1 }));
    setEditPackage({ ...editPackage, itinerary: reindexed });
  };

  const handleDuplicateDay = (idx: number) => {
    const updated = [...(editPackage.itinerary || [])];
    const sourceDay = updated[idx];
    const duplicated = JSON.parse(JSON.stringify(sourceDay));
    updated.splice(idx + 1, 0, duplicated);
    const reindexed = updated.map((d: any, i: number) => ({ ...d, day: i + 1 }));
    setEditPackage({ ...editPackage, itinerary: reindexed });
  };

  const handleAddDayActivity = (dayIdx: number) => {
    const updated = [...(editPackage.itinerary || [])];
    const currentActs = updated[dayIdx].activities || [];
    updated[dayIdx] = {
      ...updated[dayIdx],
      activities: [...currentActs, ""]
    };
    setEditPackage({ ...editPackage, itinerary: updated });
  };

  const handleUpdateDayActivity = (dayIdx: number, actIdx: number, val: string) => {
    const updated = [...(editPackage.itinerary || [])];
    const currentActs = [...(updated[dayIdx].activities || [])];
    currentActs[actIdx] = val;
    updated[dayIdx] = {
      ...updated[dayIdx],
      activities: currentActs
    };
    setEditPackage({ ...editPackage, itinerary: updated });
  };

  const handleRemoveDayActivity = (dayIdx: number, actIdx: number) => {
    const updated = [...(editPackage.itinerary || [])];
    const currentActs = (updated[dayIdx].activities || []).filter((_: any, i: number) => i !== actIdx);
    updated[dayIdx] = {
      ...updated[dayIdx],
      activities: currentActs
    };
    setEditPackage({ ...editPackage, itinerary: updated });
  };

  // GALLERY IMAGE HANDLERS
  const handleAddGalleryImage = () => {
    const newImg = { url: "", title: "", alt: "", caption: "", displayOrder: (editPackage.gallery || []).length + 1 };
    setEditPackage({ ...editPackage, gallery: [...(editPackage.gallery || []), newImg] });
  };

  const handleUpdateGalleryImage = (idx: number, field: string, val: any) => {
    const updated = [...(editPackage.gallery || [])];
    if (typeof updated[idx] === 'string') {
      // Convert old format string to object
      updated[idx] = { url: updated[idx], title: "", alt: "", caption: "", displayOrder: idx + 1 };
    }
    updated[idx] = { ...updated[idx], [field]: val };
    setEditPackage({ ...editPackage, gallery: updated });
  };

  const handleRemoveGalleryImage = (idx: number) => {
    const updated = (editPackage.gallery || []).filter((_: any, i: number) => i !== idx);
    setEditPackage({ ...editPackage, gallery: updated });
  };

  // FAQ HANDLERS
  const handleAddFAQ = () => {
    const newFAQ = { q: { en: "", es: "", pt: "" }, a: { en: "", es: "", pt: "" } };
    setEditPackage({ ...editPackage, faqs: [...(editPackage.faqs || []), newFAQ] });
  };

  const handleUpdateFAQ = (idx: number, field: "q" | "a", lang: string, val: string) => {
    const updated = [...(editPackage.faqs || [])];
    updated[idx] = {
      ...updated[idx],
      [field]: {
        ...(updated[idx][field] || {}),
        [lang]: val
      }
    };
    setEditPackage({ ...editPackage, faqs: updated });
  };

  const handleRemoveFAQ = (idx: number) => {
    const updated = (editPackage.faqs || []).filter((_: any, i: number) => i !== idx);
    setEditPackage({ ...editPackage, faqs: updated });
  };

  // Travel Info inputs helper
  const handleUpdateTravelInfo = (field: string, val: string) => {
    setEditPackage({
      ...editPackage,
      travelInfo: {
        ...(editPackage.travelInfo || {}),
        [field]: val
      }
    });
  };

  // Pricing inputs helper
  const handleUpdatePricing = (field: string, val: any) => {
    setEditPackage({
      ...editPackage,
      pricing: {
        ...(editPackage.pricing || {}),
        [field]: val
      }
    });
  };

  // Policies inputs helper
  const handleUpdatePolicy = (policyType: string, lang: string, val: string) => {
    setEditPackage({
      ...editPackage,
      policies: {
        ...(editPackage.policies || {}),
        [policyType]: {
          ...((editPackage.policies || {})[policyType] || {}),
          [lang]: val
        }
      }
    });
  };

  // SEO inputs helper
  const handleUpdateSEO = (field: string, lang: string | null, val: string) => {
    if (lang) {
      setEditPackage({
        ...editPackage,
        seo: {
          ...(editPackage.seo || {}),
          [field]: {
            ...((editPackage.seo || {})[field] || {}),
            [lang]: val
          }
        }
      });
    } else {
      setEditPackage({
        ...editPackage,
        seo: {
          ...(editPackage.seo || {}),
          [field]: val
        }
      });
    }
  };

  const subTabs = [
    { id: "general", label: "1. General Details", icon: Compass },
    { id: "highlights", label: "2. Highlights", icon: Activity },
    { id: "inclusions", label: "3. Inclusions/Exclusions", icon: List },
    { id: "addons", label: "4. Add-ons / Experiences", icon: Plus },
    { id: "itinerary", label: "5. Itinerary Days", icon: Calendar },
    { id: "pricing", label: "6. Pricing Details", icon: DollarSign },
    { id: "travelInfo", label: "7. Travel Info", icon: Info },
    { id: "gallery", label: "8. Photo Gallery", icon: ImageIcon },
    { id: "faq", label: "9. FAQs", icon: HelpCircle },
    { id: "policies", label: "10. Policies", icon: ShieldAlert },
    { id: "seo", label: "11. SEO Config", icon: Globe },
    { id: "status", label: "12. Status & Publish", icon: Settings }
  ];

  return (
    <div className="space-y-6 animate-fade-in text-xs text-royal">
      {/* Tab Header */}
      {!editPackage && (
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-royal font-serif">Manage Tour Packages</h2>
            <p className="text-[10px] text-royal/40">Add, edit, or delete tour packages, prices, and itineraries.</p>
          </div>
          <button
            onClick={() => setEditPackage({ 
              title: { en: "", es: "", pt: "" }, 
              tagline: { en: "", es: "", pt: "" }, 
              slug: "", 
              category: "Luxury Tours", 
              durationDays: 7, 
              durationNights: 6,
              startingLocation: "Delhi",
              endingLocation: "Delhi",
              tourType: "Private Tour",
              travelStyle: "Luxury",
              bestFor: "Couples, Families, First-Time Visitors",
              groupSize: "2-12 Travellers",
              difficultyLevel: "Easy",
              image: "", 
              gallery: [],
              highlights: [],
              includedExperiences: [],
              exclusions: [],
              addons: [],
              itinerary: [],
              pricing: { startingPrice: 1499, pricePerPerson: 1499, currency: "USD", priceType: "per_person", discountPrice: 0, groupPricing: "", priceIncludes: "", priceExcludes: "", enquireForPrice: false },
              travelInfo: { startingPoint: "Delhi", endingPoint: "Delhi", duration: "7 Days / 6 Nights", transportation: "Private SUV", accommodation: "Luxury Heritage Hotels", tourType: "Private Tour", bestTime: "October to March", groupSize: "2-12 Travellers", languages: "English, Spanish, Portuguese", suitableFor: "Luxury Travellers" },
              faqs: [],
              policies: { cancellation: { en: "", es: "", pt: "" }, refund: { en: "", es: "", pt: "" }, bookingTerms: { en: "", es: "", pt: "" }, importantNotes: { en: "", es: "", pt: "" }, visaInfo: { en: "", es: "", pt: "" }, insuranceInfo: { en: "", es: "", pt: "" }, terms: { en: "", es: "", pt: "" } },
              seo: { title: { en: "", es: "", pt: "" }, description: { en: "", es: "", pt: "" }, keywords: { en: "", es: "", pt: "" }, ogTitle: "", ogDescription: "", ogImage: "", canonicalUrl: "", indexRule: "index", followRule: "follow" },
              status: "published",
              isFeatured: false
            })}
            className="bg-royal text-white border border-gold/20 hover:bg-gold hover:text-royal font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 flex items-center gap-1.5 transition cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Package</span>
          </button>
        </div>
      )}

      {/* EDIT PACKAGE FORM */}
      {editPackage && (
        <form onSubmit={handleSavePackage} className="bg-white border border-gold/20 rounded-3xl p-6 md:p-8 shadow-xl space-y-6">
          <div className="flex justify-between items-center border-b border-beige/40 pb-4 flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <h3 className="text-base font-bold font-serif">{editPackage.slug ? `Edit Package: ${editPackage.title?.en}` : "Create New Tour Package"}</h3>
              {editPackage.slug && (
                <span className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded ${
                  editPackage.status === "draft" ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"
                }`}>
                  {editPackage.status || "Published"}
                </span>
              )}
            </div>
            <div className="flex items-center gap-3">
              {editPackage.slug && (
                <a 
                  href={`/en/packages/${editPackage.slug}?preview=true`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#0A2A1E] text-[#C5A862] hover:bg-gold hover:text-royal font-bold text-[10px] uppercase tracking-wider px-3.5 py-1.5 rounded-lg border border-gold/30 transition flex items-center gap-1.5 shadow-sm"
                >
                  <span>Preview Itinerary 👁️</span>
                </a>
              )}
              <button type="button" onClick={() => setEditPackage(null)} className="text-royal/50 hover:text-royal font-bold text-xs">Cancel</button>
            </div>
          </div>

          {/* Sub tabs selectors */}
          <div className="flex border-b border-gold/10 pb-2 mb-6 gap-2 flex-wrap">
            {subTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSubTab(tab.id)}
                  className={`px-3 py-2 text-[9px] font-bold uppercase tracking-wider transition rounded-lg border flex items-center gap-1.5 ${
                    subTab === tab.id 
                      ? "bg-royal text-white border-royal shadow-sm" 
                      : "bg-[#FAF8F5] text-royal/60 border-gold/10 hover:text-royal"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* TAB 1: GENERAL DETAILS */}
          {subTab === "general" && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-1.5">
                  <label className="font-bold uppercase tracking-wider block">Slug (URL identifier)</label>
                  <input 
                    type="text" required
                    disabled={packages.some(p => p.slug === editPackage.slug)}
                    value={editPackage.slug || ""}
                    onChange={e => setEditPackage({...editPackage, slug: e.target.value.toLowerCase().replace(/\s+/g, "-")})}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50 disabled:opacity-60 disabled:cursor-not-allowed font-bold"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold uppercase tracking-wider block">Category (e.g. Luxury, Wellness, Wildlife)</label>
                  <input 
                    type="text" required
                    value={editPackage.category || ""}
                    onChange={e => setEditPackage({...editPackage, category: e.target.value})}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold uppercase tracking-wider block">Tour Type</label>
                  <select
                    value={editPackage.tourType || "Private Tour"}
                    onChange={e => setEditPackage({...editPackage, tourType: e.target.value})}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50"
                  >
                    {["Private Tour", "Group Tour", "Family Tour", "Honeymoon Tour", "Custom Tour"].map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="space-y-1.5">
                  <label className="font-bold uppercase tracking-wider block">Duration Days</label>
                  <input 
                    type="number" required
                    value={editPackage.durationDays || ""}
                    onChange={e => setEditPackage({...editPackage, durationDays: parseInt(e.target.value) || 0})}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold uppercase tracking-wider block">Duration Nights</label>
                  <input 
                    type="number" required
                    value={editPackage.durationNights || ""}
                    onChange={e => setEditPackage({...editPackage, durationNights: parseInt(e.target.value) || 0})}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold uppercase tracking-wider block">Starting Location</label>
                  <input 
                    type="text" required
                    value={editPackage.startingLocation || ""}
                    onChange={e => setEditPackage({...editPackage, startingLocation: e.target.value})}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold uppercase tracking-wider block">Ending Location</label>
                  <input 
                    type="text" required
                    value={editPackage.endingLocation || ""}
                    onChange={e => setEditPackage({...editPackage, endingLocation: e.target.value})}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="space-y-1.5 col-span-2">
                  <label className="font-bold uppercase block text-royal/60">Travel Style</label>
                  <select
                    value={editPackage.travelStyle || "Luxury"}
                    onChange={e => setEditPackage({...editPackage, travelStyle: e.target.value})}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50"
                  >
                    {["Luxury", "Premium", "Cultural", "Heritage", "Adventure", "Spiritual", "Wildlife", "Family"].map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold uppercase tracking-wider block">Group Size limit</label>
                  <input 
                    type="text" placeholder="e.g. 2-12 Travellers"
                    value={editPackage.groupSize || ""}
                    onChange={e => setEditPackage({...editPackage, groupSize: e.target.value})}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold uppercase tracking-wider block">Difficulty Level</label>
                  <select
                    value={editPackage.difficultyLevel || "Easy"}
                    onChange={e => setEditPackage({...editPackage, difficultyLevel: e.target.value})}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg"
                  >
                    {["Easy", "Moderate", "Challenging"].map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Title & Tagline & Subtitle Route translations */}
              {["title", "tagline", "routeSubtitle", "seasonalDiscountNote", "description", "bestFor"].map((field) => (
                <div key={field} className="border border-gold/10 p-5 rounded-2xl bg-[#FAF8F5] space-y-3">
                  <span className="font-bold text-[10px] text-gold uppercase tracking-wider block">
                    {field === "description" ? "Full Description" : field === "routeSubtitle" ? "Route Subtitle (e.g. Delhi - Jaipur - Agra)" : field === "seasonalDiscountNote" ? "Yellow Highlight Notice Note (e.g. Peak season warning)" : field.replace(/([A-Z])/g, " $1").trim()} Translations
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {["en", "es", "pt"].map((l) => (
                      <div key={l} className="space-y-1">
                        <label className="font-bold text-[9px] uppercase text-royal/40">{l.toUpperCase()}</label>
                        {field === "description" ? (
                          <textarea
                            value={editPackage[field]?.[l] || ""}
                            onChange={(e) => setEditPackage({
                              ...editPackage,
                              [field]: { ...(editPackage[field] || {}), [l]: e.target.value }
                            })}
                            className="w-full h-32 bg-white border border-gold/15 p-3 outline-none rounded-lg"
                            placeholder={`Enter full tour package description details in ${l.toUpperCase()}...`}
                          />
                        ) : (
                          <input
                            type="text"
                            value={editPackage[field]?.[l] || ""}
                            onChange={(e) => setEditPackage({
                              ...editPackage,
                              [field]: { ...(editPackage[field] || {}), [l]: e.target.value }
                            })}
                            className="w-full bg-white border border-gold/15 px-3 py-2.5 outline-none rounded-lg"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Main Hero Image */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                <div className="md:col-span-8 space-y-1.5">
                  <label className="font-bold uppercase tracking-wider block">Main Hero Image URL</label>
                  <input 
                    type="text" required
                    value={editPackage.image || ""}
                    onChange={e => setEditPackage({...editPackage, image: e.target.value})}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50"
                  />
                </div>
                <div className="md:col-span-4 pb-0.5">
                  <CloudinaryUpload 
                    onUploadComplete={(url) => setEditPackage({ ...editPackage, image: url })} 
                    label="Upload Hero Image"
                    showStatus={showStatus}
                    defaultSearch={editPackage.title?.en || editPackage.slug || ""}
                  />
                </div>
                {editPackage.image && (
                  <div className="col-span-full h-44 w-full overflow-hidden border border-gold/10 rounded-2xl shadow-inner relative">
                    <img src={editPackage.image || "/images/destination_fallback.jpg"} alt="Package banner" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: TOUR HIGHLIGHTS */}
          {subTab === "highlights" && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex justify-between items-center">
                <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Dynamic Highlights</span>
                <button
                  type="button" onClick={handleAddHighlight}
                  className="bg-gold/15 text-royal border border-gold/25 font-bold text-[9px] tracking-wider uppercase px-3 py-1.5 rounded transition hover:bg-gold hover:text-royal cursor-pointer"
                >
                  + Add Highlight
                </button>
              </div>

              {(!editPackage.highlights || editPackage.highlights.length === 0) ? (
                <div className="py-12 text-center text-royal/40 italic bg-[#FAF8F5] rounded-xl border border-dashed border-gold/20">
                  No highlights configured. Add highlights to showcase specific features.
                </div>
              ) : (
                <div className="space-y-4">
                  {editPackage.highlights.map((hl: any, idx: number) => {
                    const hlObj = typeof hl === "object" && hl !== null && hl.title ? hl : { title: { en: typeof hl === 'string' ? hl : (hl.en || ""), es: "", pt: "" }, desc: { en: "", es: "", pt: "" }, icon: "Check", displayOrder: idx + 1, isActive: true };
                    return (
                      <div key={idx} className="bg-[#FAF8F5] border border-gold/15 p-5 rounded-2xl space-y-4 relative shadow-sm">
                        <div className="flex justify-between items-center pb-2 border-b border-gold/5">
                          <span className="font-bold text-gold text-xs">Highlight Point #{idx + 1}</span>
                          <button
                            type="button" onClick={() => handleRemoveHighlight(idx)}
                            className="text-red-500 hover:text-red-700 font-bold text-[10px] uppercase tracking-wider"
                          >
                            Remove Highlight
                          </button>
                        </div>

                        {/* Text Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="font-bold text-royal/70 uppercase text-[9px] tracking-wider">Highlight Title (EN/ES/PT)</label>
                            <div className="space-y-1">
                              {["en", "es", "pt"].map(l => (
                                <input
                                  key={l} type="text" placeholder={l.toUpperCase() + " Title"}
                                  value={hlObj.title?.[l] || ""}
                                  onChange={e => handleUpdateHighlight(idx, "title", l, e.target.value)}
                                  className="w-full bg-white border border-gold/10 px-3 py-1.5 outline-none rounded-lg"
                                />
                              ))}
                            </div>
                          </div>
                          <div className="space-y-1">
                            <label className="font-bold text-royal/70 uppercase text-[9px] tracking-wider">Highlight Description (EN/ES/PT)</label>
                            <div className="space-y-1">
                              {["en", "es", "pt"].map(l => (
                                <input
                                  key={l} type="text" placeholder={l.toUpperCase() + " Description"}
                                  value={hlObj.desc?.[l] || ""}
                                  onChange={e => handleUpdateHighlight(idx, "desc", l, e.target.value)}
                                  className="w-full bg-white border border-gold/10 px-3 py-1.5 outline-none rounded-lg"
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Extra controls (Icon, Display Order, Active) */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2 border-t border-gold/5 items-center">
                          <div className="space-y-1">
                            <span className="font-bold text-royal/70 uppercase text-[9px] tracking-wider block">Icon (e.g. MapPin, Star, Shield)</span>
                            <input
                              type="text" value={hlObj.icon || ""}
                              onChange={e => handleUpdateHighlight(idx, "icon", null, e.target.value)}
                              className="w-full bg-white border border-gold/10 px-3 py-1.5 outline-none rounded"
                            />
                          </div>
                          <div className="space-y-1">
                            <span className="font-bold text-royal/70 uppercase text-[9px] tracking-wider block">Display Order</span>
                            <input
                              type="number" value={hlObj.displayOrder || ""}
                              onChange={e => handleUpdateHighlight(idx, "displayOrder", null, parseInt(e.target.value) || 1)}
                              className="w-full bg-white border border-gold/10 px-3 py-1.5 outline-none rounded"
                            />
                          </div>
                          <div className="flex items-center gap-2 pt-4">
                            <input
                              type="checkbox" id={`hl-active-${idx}`}
                              checked={hlObj.isActive !== false}
                              onChange={e => handleUpdateHighlight(idx, "isActive", null, e.target.checked)}
                              className="w-4 h-4 cursor-pointer accent-royal"
                            />
                            <label htmlFor={`hl-active-${idx}`} className="font-bold uppercase tracking-wider cursor-pointer">Active</label>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: INCLUSIONS / EXCLUSIONS */}
          {subTab === "inclusions" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
              {/* Inclusions */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-black uppercase tracking-widest text-[9px] text-emerald-600 block">Package Inclusions</span>
                  <button
                    type="button" onClick={handleAddInclusion}
                    className="bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[9px] tracking-wider uppercase px-3 py-1.5 rounded transition hover:bg-emerald-100 cursor-pointer"
                  >
                    + Add Inclusion
                  </button>
                </div>

                {(!editPackage.includedExperiences || editPackage.includedExperiences.length === 0) ? (
                  <div className="py-6 text-center text-royal/40 italic bg-emerald-50/10 rounded-xl border border-dashed border-emerald-200">
                    No inclusions configured.
                  </div>
                ) : (
                  <div className="space-y-3">
                    {editPackage.includedExperiences.map((inc: any, idx: number) => {
                      const incObj = typeof inc === "object" && inc !== null ? inc : { en: inc || "", es: "", pt: "" };
                      return (
                        <div key={idx} className="bg-[#FAF8F5] border border-gold/15 p-4 rounded-xl space-y-2 relative">
                          <div className="flex justify-between items-center pb-1 border-b border-gold/5">
                            <span className="font-bold text-emerald-600 text-[10px]">Inclusion Bullet #{idx + 1}</span>
                            <button
                              type="button" onClick={() => handleRemoveInclusion(idx)}
                              className="text-red-500 hover:text-red-700 font-bold text-[9px] uppercase tracking-wider"
                            >
                              Remove
                            </button>
                          </div>
                          <div className="space-y-1">
                            {["en", "es", "pt"].map(l => (
                              <input
                                key={l} type="text" placeholder={l.toUpperCase() + " Inclusion Item"}
                                value={incObj[l] || ""}
                                onChange={e => handleUpdateInclusion(idx, l, e.target.value)}
                                className="w-full bg-white border border-gold/10 px-2.5 py-1.5 outline-none rounded text-xs"
                              />
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Exclusions */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-black uppercase tracking-widest text-[9px] text-red-600 block">Package Exclusions</span>
                  <button
                    type="button" onClick={handleAddExclusion}
                    className="bg-red-50 text-red-700 border border-red-200 font-bold text-[9px] tracking-wider uppercase px-3 py-1.5 rounded transition hover:bg-red-100 cursor-pointer"
                  >
                    + Add Exclusion
                  </button>
                </div>

                {(!editPackage.exclusions || editPackage.exclusions.length === 0) ? (
                  <div className="py-6 text-center text-royal/40 italic bg-red-50/10 rounded-xl border border-dashed border-red-200">
                    No exclusions configured.
                  </div>
                ) : (
                  <div className="space-y-3">
                    {editPackage.exclusions.map((exc: any, idx: number) => {
                      const excObj = typeof exc === "object" && exc !== null ? exc : { en: exc || "", es: "", pt: "" };
                      return (
                        <div key={idx} className="bg-[#FAF8F5] border border-gold/15 p-4 rounded-xl space-y-2 relative">
                          <div className="flex justify-between items-center pb-1 border-b border-gold/5">
                            <span className="font-bold text-red-600 text-[10px]">Exclusion Bullet #{idx + 1}</span>
                            <button
                              type="button" onClick={() => handleRemoveExclusion(idx)}
                              className="text-red-500 hover:text-red-700 font-bold text-[9px] uppercase tracking-wider"
                            >
                              Remove
                            </button>
                          </div>
                          <div className="space-y-1">
                            {["en", "es", "pt"].map(l => (
                              <input
                                key={l} type="text" placeholder={l.toUpperCase() + " Exclusion Item"}
                                value={excObj[l] || ""}
                                onChange={e => handleUpdateExclusion(idx, l, e.target.value)}
                                className="w-full bg-white border border-gold/10 px-2.5 py-1.5 outline-none rounded text-xs"
                              />
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 4: ADD-ONS / EXPERIENCES */}
          {subTab === "addons" && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex justify-between items-center">
                <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Add-ons & Optional Experiences</span>
                <button
                  type="button" onClick={handleAddAddon}
                  className="bg-gold/15 text-royal border border-gold/25 font-bold text-[9px] tracking-wider uppercase px-3 py-1.5 rounded transition hover:bg-gold hover:text-royal cursor-pointer"
                >
                  + Add Add-on
                </button>
              </div>

              {(!editPackage.addons || editPackage.addons.length === 0) ? (
                <div className="py-12 text-center text-royal/40 italic bg-[#FAF8F5] rounded-xl border border-dashed border-gold/20">
                  No add-ons configured. Add optional sightseeing activities.
                </div>
              ) : (
                <div className="space-y-6">
                  {editPackage.addons.map((add: any, idx: number) => (
                    <div key={idx} className="border border-gold/15 bg-[#FAF8F5] p-5 rounded-2xl space-y-4 relative shadow-sm">
                      <div className="flex justify-between items-center pb-2 border-b border-gold/10">
                        <span className="font-bold text-royal text-xs">Optional Experience #{idx + 1}</span>
                        <button
                          type="button" onClick={() => handleRemoveAddon(idx)}
                          className="text-red-500 hover:text-red-700 font-bold uppercase tracking-wider text-[9px]"
                        >
                          Remove Add-on
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="font-semibold uppercase text-[9px] text-royal/50">Experience Name (EN/ES/PT)</label>
                          {["en", "es", "pt"].map(l => (
                            <input
                              key={l} type="text" placeholder={l.toUpperCase() + " Name"}
                              value={add.name?.[l] || ""}
                              onChange={e => handleUpdateAddon(idx, "name", l, e.target.value)}
                              className="w-full bg-white border border-gold/10 px-2.5 py-1.5 outline-none rounded"
                            />
                          ))}
                        </div>
                        <div className="space-y-1">
                          <label className="font-semibold uppercase text-[9px] text-royal/50">Short Description (EN/ES/PT)</label>
                          {["en", "es", "pt"].map(l => (
                            <input
                              key={l} type="text" placeholder={l.toUpperCase() + " Description"}
                              value={add.desc?.[l] || ""}
                              onChange={e => handleUpdateAddon(idx, "desc", l, e.target.value)}
                              className="w-full bg-white border border-gold/10 px-2.5 py-1.5 outline-none rounded"
                            />
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                        <div className="space-y-1">
                          <span className="font-bold text-royal/70 uppercase text-[9px] tracking-wider block">Price</span>
                          <input
                            type="text" value={add.price || ""}
                            onChange={e => handleUpdateAddon(idx, "price", null, e.target.value)}
                            className="w-full bg-white border border-gold/10 px-3 py-1.5 outline-none rounded"
                          />
                        </div>
                        <div className="space-y-1">
                          <span className="font-bold text-royal/70 uppercase text-[9px] tracking-wider block">Currency</span>
                          <select
                            value={add.currency || "USD"}
                            onChange={e => handleUpdateAddon(idx, "currency", null, e.target.value)}
                            className="w-full bg-white border border-gold/10 px-3 py-1.5 outline-none rounded"
                          >
                            {["EUR", "USD", "GBP", "INR"].map(c => (
                              <option key={c} value={c}>{c}</option>
                            ))}
                          </select>
                        </div>
                        <div className="space-y-1">
                          <span className="font-bold text-royal/70 uppercase text-[9px] tracking-wider block">Duration (e.g. 3 Hours)</span>
                          <input
                            type="text" value={add.duration || ""}
                            onChange={e => handleUpdateAddon(idx, "duration", null, e.target.value)}
                            className="w-full bg-white border border-gold/10 px-3 py-1.5 outline-none rounded"
                          />
                        </div>
                        <div className="flex items-center gap-2 pt-4">
                          <input
                            type="checkbox" id={`add-active-${idx}`}
                            checked={add.isActive !== false}
                            onChange={e => handleUpdateAddon(idx, "isActive", null, e.target.checked)}
                            className="w-4 h-4 cursor-pointer accent-royal"
                          />
                          <label htmlFor={`add-active-${idx}`} className="font-bold uppercase tracking-wider cursor-pointer">Active / Visible</label>
                        </div>
                      </div>

                      {/* Image Upload for addon */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                        <div className="md:col-span-8 space-y-1.5">
                          <label className="font-bold uppercase tracking-wider block text-royal/60">Photo URL</label>
                          <input 
                            type="text" value={add.image || ""}
                            onChange={e => handleUpdateAddon(idx, "image", null, e.target.value)}
                            className="w-full bg-white border border-gold/10 px-3 py-2 outline-none rounded"
                          />
                        </div>
                        <div className="md:col-span-4 pb-0.5">
                          <CloudinaryUpload 
                            onUploadComplete={(url) => handleUpdateAddon(idx, "image", null, url)} 
                            label="Upload Addon Image"
                            showStatus={showStatus}
                            defaultSearch={add.name?.en || editPackage.title?.en || ""}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 5: DAY-BY-DAY ITINERARY */}
          {subTab === "itinerary" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex justify-between items-center bg-[#FAF8F5] p-4 rounded-2xl border border-gold/15">
                <div>
                  <span className="font-serif font-bold text-sm text-royal block">Day-by-Day Itinerary Builder</span>
                  <span className="text-[10px] text-royal/50">Add, reorder, duplicate, and configure activities, schedule, and meals for each day.</span>
                </div>
                <button
                  type="button" onClick={handleAddItineraryDay}
                  className="bg-royal text-white hover:bg-gold hover:text-royal font-bold text-[10px] tracking-wider uppercase px-4 py-2 rounded-xl transition cursor-pointer flex items-center gap-1.5 shadow-sm"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Itinerary Day</span>
                </button>
              </div>

              {(!editPackage.itinerary || editPackage.itinerary.length === 0) ? (
                <div className="py-12 text-center text-royal/40 italic bg-[#FAF8F5] rounded-2xl border border-dashed border-gold/20 space-y-2">
                  <Calendar className="w-8 h-8 text-gold/50 mx-auto" />
                  <p>No itinerary days configured yet. Click "Add Itinerary Day" to build day-by-day tour details.</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {editPackage.itinerary.map((dayItem: any, idx: number) => (
                    <div key={idx} className="border border-gold/20 bg-white p-6 md:p-8 rounded-3xl space-y-6 shadow-sm relative">
                      
                      {/* Day Header Bar with Control Actions */}
                      <div className="flex flex-wrap justify-between items-center pb-3 border-b border-beige/40 gap-3">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-xl bg-[#0A2A1E] text-[#C5A862] font-mono font-bold flex items-center justify-center text-xs shadow-sm">
                            {dayItem.day < 10 ? `0${dayItem.day}` : dayItem.day}
                          </span>
                          <span className="font-serif font-bold text-base text-royal">Day {dayItem.day} Configurator</span>
                        </div>

                        {/* Action Buttons: Move Up, Move Down, Duplicate, Delete */}
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            disabled={idx === 0}
                            onClick={() => handleMoveDayUp(idx)}
                            className="bg-[#FAF8F5] hover:bg-gold/20 text-royal disabled:opacity-30 disabled:cursor-not-allowed text-[10px] font-bold px-2.5 py-1 rounded-lg border border-gold/15 transition"
                            title="Move Day Up"
                          >
                            ⬆ Up
                          </button>
                          <button
                            type="button"
                            disabled={idx === (editPackage.itinerary || []).length - 1}
                            onClick={() => handleMoveDayDown(idx)}
                            className="bg-[#FAF8F5] hover:bg-gold/20 text-royal disabled:opacity-30 disabled:cursor-not-allowed text-[10px] font-bold px-2.5 py-1 rounded-lg border border-gold/15 transition"
                            title="Move Day Down"
                          >
                            ⬇ Down
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDuplicateDay(idx)}
                            className="bg-gold/10 hover:bg-gold/25 text-royal font-bold text-[10px] px-2.5 py-1 rounded-lg border border-gold/20 transition"
                            title="Duplicate Day"
                          >
                            📋 Duplicate
                          </button>
                          <button
                            type="button"
                            onClick={() => handleRemoveItineraryDay(idx)}
                            className="bg-red-50 hover:bg-red-100 text-red-600 font-bold text-[10px] px-2.5 py-1 rounded-lg border border-red-200 transition"
                            title="Delete Day"
                          >
                            🗑 Delete
                          </button>
                        </div>
                      </div>

                      {/* Day Title Translations */}
                      <div className="space-y-2">
                        <span className="font-bold text-[10px] uppercase tracking-wider text-royal/60 block">Day Activity Title (EN / ES / PT)</span>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {["en", "es", "pt"].map((l) => (
                            <div key={l} className="space-y-1">
                              <span className="text-[8px] uppercase text-royal/40 font-bold block">{l.toUpperCase()} Title</span>
                              <input 
                                type="text" value={dayItem.title?.[l] || ""}
                                onChange={e => handleUpdateItineraryDay(idx, "title", l, e.target.value)}
                                className="w-full bg-[#FAF8F5] border border-gold/15 px-3.5 py-2.5 outline-none rounded-xl text-xs font-semibold"
                                placeholder={`Day ${dayItem.day} Title (${l})`}
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Destination / Location Name */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-1">
                          <span className="font-bold text-[9px] uppercase tracking-wider text-royal/60 block">Destination / Location Badge</span>
                          <input 
                            type="text" value={dayItem.location || ""}
                            onChange={e => handleUpdateItineraryDay(idx, "location", null, e.target.value)}
                            placeholder="e.g. Delhi → Agra"
                            className="w-full bg-[#FAF8F5] border border-gold/15 px-3.5 py-2.5 outline-none rounded-xl text-xs"
                          />
                        </div>
                        <div className="space-y-1">
                          <span className="font-bold text-[9px] uppercase tracking-wider text-royal/60 block">Travel Distance</span>
                          <input 
                            type="text" value={dayItem.travelDistance || ""}
                            onChange={e => handleUpdateItineraryDay(idx, "travelDistance", null, e.target.value)}
                            placeholder="e.g. 210 km"
                            className="w-full bg-[#FAF8F5] border border-gold/15 px-3.5 py-2.5 outline-none rounded-xl text-xs"
                          />
                        </div>
                        <div className="space-y-1">
                          <span className="font-bold text-[9px] uppercase tracking-wider text-royal/60 block">Travel Duration / Transit Time</span>
                          <input 
                            type="text" value={dayItem.travelTime || ""}
                            onChange={e => handleUpdateItineraryDay(idx, "travelTime", null, e.target.value)}
                            placeholder="e.g. 4.5 Hours"
                            className="w-full bg-[#FAF8F5] border border-gold/15 px-3.5 py-2.5 outline-none rounded-xl text-xs"
                          />
                        </div>
                      </div>

                      {/* Day Photo URL & Cloudinary Upload */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end bg-[#FAF8F5] p-4 rounded-2xl border border-gold/10">
                        <div className="md:col-span-8 space-y-1">
                          <label className="font-bold uppercase tracking-wider block text-royal/60 text-[9px]">Large Destination Photo URL</label>
                          <input 
                            type="text" value={dayItem.image || ""}
                            onChange={e => handleUpdateItineraryDay(idx, "image", null, e.target.value)}
                            placeholder="https://res.cloudinary.com/..."
                            className="w-full bg-white border border-gold/15 px-3.5 py-2.5 outline-none rounded-xl text-xs"
                          />
                        </div>
                        <div className="md:col-span-4 pb-0.5">
                          <CloudinaryUpload 
                            onUploadComplete={(url) => handleUpdateItineraryDay(idx, "image", null, url)} 
                            label="Upload Day Image"
                            showStatus={showStatus}
                            defaultSearch={dayItem.title?.en || editPackage.title?.en || ""}
                          />
                        </div>
                      </div>

                      {/* Day Description Translations */}
                      <div className="space-y-2 pt-2">
                        <span className="font-bold text-[10px] uppercase tracking-wider text-royal/60 block">Day Full Description</span>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {["en", "es", "pt"].map((l) => (
                            <div key={l} className="space-y-1">
                              <span className="text-[8px] uppercase text-royal/40 font-bold block">{l.toUpperCase()} Description</span>
                              <textarea
                                value={dayItem.desc?.[l] || ""}
                                onChange={e => handleUpdateItineraryDay(idx, "desc", l, e.target.value)}
                                className="w-full h-28 bg-[#FAF8F5] border border-gold/15 p-3 outline-none rounded-xl text-xs leading-relaxed"
                                placeholder={`Enter Day ${dayItem.day} detailed description in ${l.toUpperCase()}...`}
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Activities List Sub-Editor */}
                      <div className="bg-[#FAF8F5] border border-gold/15 p-5 rounded-2xl space-y-3">
                        <div className="flex justify-between items-center border-b border-gold/10 pb-2">
                          <span className="font-bold uppercase tracking-wider text-[10px] text-gold flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-gold" />
                            <span>Day {dayItem.day} Activities List (Bullets)</span>
                          </span>
                          <button
                            type="button"
                            onClick={() => handleAddDayActivity(idx)}
                            className="bg-white hover:bg-gold/20 text-royal font-bold text-[9px] uppercase px-3 py-1 rounded-lg border border-gold/20 transition cursor-pointer"
                          >
                            + Add Activity Bullet
                          </button>
                        </div>

                        {(!dayItem.activities || dayItem.activities.length === 0) ? (
                          <p className="text-[10px] text-royal/40 italic py-2">No specific activity bullets added. Click "+ Add Activity Bullet" to list attractions.</p>
                        ) : (
                          <div className="space-y-2">
                            {dayItem.activities.map((act: any, aIdx: number) => {
                              const actVal = typeof act === 'string' ? act : (act.en || "");
                              return (
                                <div key={aIdx} className="flex items-center gap-2">
                                  <span className="text-gold font-bold">•</span>
                                  <input 
                                    type="text"
                                    value={actVal}
                                    onChange={e => handleUpdateDayActivity(idx, aIdx, e.target.value)}
                                    placeholder={`Activity #${aIdx + 1} (e.g. Guided tour of Taj Mahal at sunrise)`}
                                    className="flex-grow bg-white border border-gold/15 px-3 py-2 outline-none rounded-xl text-xs"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => handleRemoveDayActivity(idx, aIdx)}
                                    className="text-red-500 hover:text-red-700 font-bold text-[9px] px-2 py-1 uppercase"
                                  >
                                    Remove
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>

                      {/* Daily Schedule Breakdown (Optional: Morning / Afternoon / Evening) */}
                      <div className="space-y-2 pt-2">
                        <span className="font-bold text-[10px] uppercase tracking-wider text-royal/60 block">Daily Schedule Breakdown (Optional)</span>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-1">
                            <span className="font-bold text-[9px] uppercase text-[#C5A862] block">🌅 Morning Schedule</span>
                            <input 
                              type="text" value={dayItem.morning || ""}
                              onChange={e => handleUpdateItineraryDay(idx, "morning", null, e.target.value)}
                              placeholder="e.g. 07:00 AM Hotel breakfast, 08:30 AM Old Delhi walking tour"
                              className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2 outline-none rounded-xl text-xs"
                            />
                          </div>
                          <div className="space-y-1">
                            <span className="font-bold text-[9px] uppercase text-[#C5A862] block">☀️ Afternoon Schedule</span>
                            <input 
                              type="text" value={dayItem.afternoon || ""}
                              onChange={e => handleUpdateItineraryDay(idx, "afternoon", null, e.target.value)}
                              placeholder="e.g. Lunch at Mughal restaurant & drive to Agra"
                              className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2 outline-none rounded-xl text-xs"
                            />
                          </div>
                          <div className="space-y-1">
                            <span className="font-bold text-[9px] uppercase text-[#C5A862] block">🌙 Evening Schedule</span>
                            <input 
                              type="text" value={dayItem.evening || ""}
                              onChange={e => handleUpdateItineraryDay(idx, "evening", null, e.target.value)}
                              placeholder="e.g. Sunset boat ride on Yamuna river & palace check-in"
                              className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2 outline-none rounded-xl text-xs"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Itinerary Day Specific Specs (Meals, Accommodation, Transportation, Special Notes) */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-t border-gold/10 pt-4 text-xs">
                        <div className="space-y-1">
                          <span className="font-bold text-[9px] uppercase text-royal/60 block">Meals Included</span>
                          <input 
                            type="text" value={dayItem.meals || ""}
                            onChange={e => handleUpdateItineraryDay(idx, "meals", null, e.target.value)}
                            placeholder="e.g. Breakfast, Dinner"
                            className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2 outline-none rounded-xl text-xs"
                          />
                        </div>
                        <div className="space-y-1">
                          <span className="font-bold text-[9px] uppercase text-royal/60 block">Accommodation / Hotel Name</span>
                          <input 
                            type="text" value={dayItem.hotel || dayItem.overnight || ""}
                            onChange={e => {
                              handleUpdateItineraryDay(idx, "hotel", null, e.target.value);
                              handleUpdateItineraryDay(idx, "overnight", null, e.target.value);
                            }}
                            placeholder="e.g. The Taj Mahal Palace Hotel"
                            className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2 outline-none rounded-xl text-xs"
                          />
                        </div>
                        <div className="space-y-1">
                          <span className="font-bold text-[9px] uppercase text-royal/60 block">Transportation Info</span>
                          <input 
                            type="text" value={dayItem.transportation || ""}
                            onChange={e => handleUpdateItineraryDay(idx, "transportation", null, e.target.value)}
                            placeholder="e.g. Private Luxury SUV Transfer"
                            className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2 outline-none rounded-xl text-xs"
                          />
                        </div>
                        <div className="space-y-1">
                          <span className="font-bold text-[9px] uppercase text-royal/60 block">Special Daily Note</span>
                          <input 
                            type="text" value={dayItem.specialNote || ""}
                            onChange={e => handleUpdateItineraryDay(idx, "specialNote", null, e.target.value)}
                            placeholder="e.g. Carry comfortable walking shoes for Taj Mahal"
                            className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2 outline-none rounded-xl text-xs"
                          />
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 6: PRICING & SEASONAL DISCOUNTS */}
          {subTab === "pricing" && (
            <div className="space-y-8 animate-fade-in bg-[#FAF8F5] border border-gold/15 p-6 md:p-8 rounded-3xl shadow-sm">
              
              <div className="border-b border-gold/15 pb-3">
                <span className="font-serif font-bold text-base text-royal block">Tour Package Pricing & Seasonal Discount Controls</span>
                <span className="text-[10px] text-royal/50">Manage base prices, per-person rates, seasonal discount percentage (OFF), sale badges, and off-season price notices.</span>
              </div>

              {/* Basic Price Inputs */}
              <div className="bg-white p-6 rounded-2xl border border-gold/10 space-y-4">
                <span className="font-bold uppercase tracking-wider text-[10px] text-gold block">1. Regular Price & Currency Setup</span>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="space-y-1.5">
                    <label className="font-bold uppercase block text-royal/70 text-[10px]">Starting / Base Price ($)</label>
                    <input 
                      type="number" placeholder="e.g. 1499"
                      value={editPackage.pricing?.startingPrice ?? ""}
                      onChange={e => handleUpdatePricing("startingPrice", parseFloat(e.target.value) || 0)}
                      className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-xl focus:border-gold font-bold"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-bold uppercase block text-royal/70 text-[10px]">Price Per Person (Sharing)</label>
                    <input 
                      type="number" placeholder="e.g. 1199"
                      value={editPackage.pricing?.pricePerPerson ?? ""}
                      onChange={e => handleUpdatePricing("pricePerPerson", parseFloat(e.target.value) || 0)}
                      className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-xl focus:border-gold font-bold"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-bold uppercase block text-royal/70 text-[10px]">Currency</label>
                    <select
                      value={editPackage.pricing?.currency || "USD"}
                      onChange={e => handleUpdatePricing("currency", e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-xl focus:border-gold cursor-pointer font-bold"
                    >
                      {["EUR", "USD", "GBP", "INR"].map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-bold uppercase block text-royal/70 text-[10px]">Price Model</label>
                    <input 
                      type="text" placeholder="per_person"
                      value={editPackage.pricing?.priceType || "per_person"}
                      onChange={e => handleUpdatePricing("priceType", e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-xl focus:border-gold"
                    />
                  </div>
                </div>
              </div>

              {/* 🔥 PROMINENT SEASONAL OFF / DISCOUNT CONTROLS BOX */}
              <div className="bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-amber-500/10 border-2 border-[#C5A862] p-6 rounded-2xl space-y-6 shadow-md">
                
                <div className="flex items-center justify-between border-b border-[#C5A862]/30 pb-3 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🔥</span>
                    <span className="font-serif font-bold text-base text-[#0A2A1E]">Seasonal Discount & Offer Controls (OFF %)</span>
                  </div>
                  
                  <span className="bg-[#0A2A1E] text-[#C5A862] text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
                    {editPackage.pricing?.discountPercent ? `${editPackage.pricing.discountPercent}% OFF ACTIVE` : "NO DISCOUNT ACTIVE"}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Discount Percentage */}
                  <div className="bg-white p-4 rounded-xl border border-[#C5A862]/20 space-y-1.5">
                    <label className="font-bold uppercase block text-[#0A2A1E] text-[10px]">Discount Percentage (% OFF)</label>
                    <div className="flex items-center gap-2">
                      <input 
                        type="number" placeholder="e.g. 20 for 20% OFF"
                        value={editPackage.pricing?.discountPercent ?? ""}
                        onChange={e => {
                          const pct = parseFloat(e.target.value) || 0;
                          const startPrice = editPackage.pricing?.startingPrice || 0;
                          const discPrice = pct > 0 && startPrice > 0 ? Math.round(startPrice * (1 - pct / 100)) : 0;
                          setEditPackage({
                            ...editPackage,
                            pricing: {
                              ...(editPackage.pricing || {}),
                              discountPercent: pct,
                              discountPrice: discPrice
                            }
                          });
                        }}
                        className="w-full bg-[#FAF8F5] border border-[#C5A862]/30 px-4 py-2.5 outline-none rounded-lg font-extrabold text-emerald-700 text-lg"
                      />
                      <span className="font-extrabold text-lg text-[#0A2A1E]">%</span>
                    </div>
                    <span className="text-[9px] text-[#0A2A1E]/50 font-medium block">Enter percentage to auto-calculate discounted price.</span>
                  </div>

                  {/* Discounted Price Output */}
                  <div className="bg-white p-4 rounded-xl border border-[#C5A862]/20 space-y-1.5">
                    <label className="font-bold uppercase block text-[#0A2A1E] text-[10px]">Discounted Offer Price ($)</label>
                    <input 
                      type="number" placeholder="e.g. 1199"
                      value={editPackage.pricing?.discountPrice ?? ""}
                      onChange={e => handleUpdatePricing("discountPrice", parseFloat(e.target.value) || 0)}
                      className="w-full bg-[#FAF8F5] border border-[#C5A862]/30 px-4 py-2.5 outline-none rounded-lg font-extrabold text-[#0A2A1E] text-lg"
                    />
                    <span className="text-[9px] text-[#0A2A1E]/50 font-medium block">Override final offer price shown to guests.</span>
                  </div>

                  {/* Sale Badge Label */}
                  <div className="bg-white p-4 rounded-xl border border-[#C5A862]/20 space-y-1.5">
                    <label className="font-bold uppercase block text-[#0A2A1E] text-[10px]">Sale Badge Text (e.g. 20% OFF Special)</label>
                    <input 
                      type="text" placeholder="e.g. 20% OFF - Monsoon Special"
                      value={editPackage.pricing?.saleBadge || ""}
                      onChange={e => handleUpdatePricing("saleBadge", e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#C5A862]/30 px-4 py-2.5 outline-none rounded-lg font-bold text-[#0A2A1E] text-xs"
                    />
                    <span className="text-[9px] text-[#0A2A1E]/50 font-medium block">Badge shown on tour cards and itinerary header.</span>
                  </div>

                </div>

                {/* Seasonal Discount Notice (Yellow Box Text on Itinerary Page) */}
                <div className="bg-white p-5 rounded-xl border border-[#C5A862]/20 space-y-3">
                  <span className="font-bold uppercase tracking-wider text-[10px] text-[#CA8A04] block flex items-center gap-1.5">
                    <span>🟡 Seasonal Price Notice Note (Displayed in Yellow Box on Itinerary Page)</span>
                  </span>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {["en", "es", "pt"].map((l) => (
                      <div key={l} className="space-y-1">
                        <label className="font-bold text-[9px] uppercase text-[#0A2A1E]/60">{l.toUpperCase()} Seasonal Notice</label>
                        <textarea
                          value={editPackage.seasonalDiscountNote?.[l] || (typeof editPackage.pricing?.seasonalDiscountNote === 'string' && l === 'en' ? editPackage.pricing.seasonalDiscountNote : "")}
                          onChange={(e) => {
                            const val = e.target.value;
                            setEditPackage({
                              ...editPackage,
                              seasonalDiscountNote: {
                                ...(editPackage.seasonalDiscountNote || {}),
                                [l]: val
                              },
                              pricing: {
                                ...(editPackage.pricing || {}),
                                seasonalDiscountNote: val
                              }
                            });
                          }}
                          className="w-full h-20 bg-[#FAF8F5] border border-[#C5A862]/30 p-2.5 outline-none rounded-lg text-xs leading-relaxed"
                          placeholder={`Enter seasonal price notice note in ${l.toUpperCase()}...`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Price Visibility & Enquire Toggles */}
              <div className="bg-white p-6 rounded-2xl border border-gold/10 space-y-4">
                <span className="font-bold uppercase tracking-wider text-[10px] text-gold block">3. Display & Inquiry Settings</span>
                
                <div className="flex items-center gap-3">
                  <input 
                    type="checkbox" id="toggle-enquire"
                    checked={editPackage.pricing?.enquireForPrice === true}
                    onChange={e => handleUpdatePricing("enquireForPrice", e.target.checked)}
                    className="w-5 h-5 cursor-pointer accent-royal"
                  />
                  <label htmlFor="toggle-enquire" className="font-bold uppercase tracking-wider block cursor-pointer text-xs">
                    Hide Prices & Display "Price Available On Request" Only
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="space-y-1.5">
                    <label className="font-bold uppercase block text-royal/60 text-[10px]">Group Pricing Details Note</label>
                    <input 
                      type="text" placeholder="e.g. Special discounts for 4+ guests"
                      value={editPackage.pricing?.groupPricing || ""}
                      onChange={e => handleUpdatePricing("groupPricing", e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-xl text-xs"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-bold uppercase block text-royal/60 text-[10px]">Price Includes (Short summary)</label>
                    <input 
                      type="text" placeholder="e.g. Private SUV, 5-Star Hotels, Breakfast"
                      value={editPackage.pricing?.priceIncludes || ""}
                      onChange={e => handleUpdatePricing("priceIncludes", e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-xl text-xs"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-bold uppercase block text-royal/60 text-[10px]">Price Excludes (Short summary)</label>
                    <input 
                      type="text" placeholder="e.g. Flights & personal expenses"
                      value={editPackage.pricing?.priceExcludes || ""}
                      onChange={e => handleUpdatePricing("priceExcludes", e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-xl text-xs"
                    />
                  </div>
                </div>
              </div>

            </div>
          )}


          {/* TAB 7: TRAVEL INFORMATION */}
          {subTab === "travelInfo" && (
            <div className="space-y-6 animate-fade-in bg-[#FAF8F5] border border-gold/15 p-6 rounded-2xl">
              <span className="font-black uppercase tracking-widest text-[9px] text-gold block border-b border-gold/10 pb-2">Travel Guidelines & Quick Information</span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-1.5">
                  <label className="font-bold uppercase block text-royal/60">Starting Point</label>
                  <input 
                    type="text" value={editPackage.travelInfo?.startingPoint || ""}
                    onChange={e => handleUpdateTravelInfo("startingPoint", e.target.value)}
                    className="w-full bg-white border border-gold/15 px-4 py-3 outline-none rounded-lg"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold uppercase block text-royal/60">Ending Point</label>
                  <input 
                    type="text" value={editPackage.travelInfo?.endingPoint || ""}
                    onChange={e => handleUpdateTravelInfo("endingPoint", e.target.value)}
                    className="w-full bg-white border border-gold/15 px-4 py-3 outline-none rounded-lg"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold uppercase block text-royal/60">Duration String (e.g. 7 Days / 6 Nights)</label>
                  <input 
                    type="text" value={editPackage.travelInfo?.duration || ""}
                    onChange={e => handleUpdateTravelInfo("duration", e.target.value)}
                    className="w-full bg-white border border-gold/15 px-4 py-3 outline-none rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-1.5">
                  <label className="font-bold uppercase block text-royal/60">Transportation</label>
                  <input 
                    type="text" value={editPackage.travelInfo?.transportation || ""}
                    onChange={e => handleUpdateTravelInfo("transportation", e.target.value)}
                    className="w-full bg-white border border-gold/15 px-4 py-3 outline-none rounded-lg"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold uppercase block text-royal/60">Accommodation</label>
                  <input 
                    type="text" value={editPackage.travelInfo?.accommodation || ""}
                    onChange={e => handleUpdateTravelInfo("accommodation", e.target.value)}
                    className="w-full bg-white border border-gold/15 px-4 py-3 outline-none rounded-lg"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold uppercase block text-royal/60">Tour Type badge</label>
                  <input 
                    type="text" value={editPackage.travelInfo?.tourType || ""}
                    onChange={e => handleUpdateTravelInfo("tourType", e.target.value)}
                    className="w-full bg-white border border-gold/15 px-4 py-3 outline-none rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="space-y-1.5 col-span-2">
                  <label className="font-bold uppercase block text-royal/60">Best Time to Travel</label>
                  <input 
                    type="text" value={editPackage.travelInfo?.bestTime || ""}
                    onChange={e => handleUpdateTravelInfo("bestTime", e.target.value)}
                    className="w-full bg-white border border-gold/15 px-4 py-3 outline-none rounded-lg"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold uppercase block text-royal/60">Languages</label>
                  <input 
                    type="text" value={editPackage.travelInfo?.languages || ""}
                    onChange={e => handleUpdateTravelInfo("languages", e.target.value)}
                    className="w-full bg-white border border-gold/15 px-4 py-3 outline-none rounded-lg"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold uppercase block text-royal/60">Suitable For</label>
                  <input 
                    type="text" value={editPackage.travelInfo?.suitableFor || ""}
                    onChange={e => handleUpdateTravelInfo("suitableFor", e.target.value)}
                    className="w-full bg-white border border-gold/15 px-4 py-3 outline-none rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 8: GALLERY */}
          {subTab === "gallery" && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex justify-between items-center">
                <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Photo Gallery Images</span>
                <button
                  type="button" onClick={handleAddGalleryImage}
                  className="bg-gold/15 text-royal border border-gold/25 font-bold text-[9px] tracking-wider uppercase px-3 py-1.5 rounded transition hover:bg-gold hover:text-royal cursor-pointer"
                >
                  + Add Image
                </button>
              </div>

              {(!editPackage.gallery || editPackage.gallery.length === 0) ? (
                <div className="py-12 text-center text-royal/40 italic bg-[#FAF8F5] rounded-xl border border-dashed border-gold/20">
                  No images added to the gallery. Upload photos to enable lightbox slideshows.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {editPackage.gallery.map((img: any, idx: number) => {
                    const imgObj = typeof img === 'string' ? { url: img, title: "", alt: "", caption: "", displayOrder: idx + 1 } : img;
                    return (
                      <div key={idx} className="bg-[#FAF8F5] border border-gold/15 p-4 rounded-2xl space-y-4 relative shadow-sm">
                        <div className="flex justify-between items-center pb-2 border-b border-gold/10">
                          <span className="font-bold text-royal/60 text-[10px]">Photo #{idx + 1}</span>
                          <button
                            type="button" onClick={() => handleRemoveGalleryImage(idx)}
                            className="text-red-500 hover:text-red-700 font-bold uppercase text-[9px]"
                          >
                            Delete Image
                          </button>
                        </div>

                        {/* Image preview */}
                        {imgObj.url && (
                          <div className="h-28 w-full overflow-hidden border border-gold/10 rounded-xl">
                            <img src={imgObj.url} alt="Gallery preview" className="w-full h-full object-cover" />
                          </div>
                        )}

                        <div className="space-y-1.5">
                          <span className="font-bold text-royal/60 text-[8px] uppercase block">Image URL</span>
                          <div className="flex gap-2">
                            <input 
                              type="text" value={imgObj.url || ""}
                              onChange={e => handleUpdateGalleryImage(idx, "url", e.target.value)}
                              className="w-full bg-white border border-gold/10 px-2.5 py-1.5 outline-none rounded text-xs"
                            />
                            <CloudinaryUpload 
                              onUploadComplete={(url) => handleUpdateGalleryImage(idx, "url", url)} 
                              label="Upload"
                              showStatus={showStatus}
                              defaultSearch={imgObj.title?.en || editPackage.title?.en || ""}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <div className="space-y-1">
                            <span className="font-bold text-[8px] uppercase text-royal/50 block">Title</span>
                            <input 
                              type="text" value={imgObj.title || ""}
                              onChange={e => handleUpdateGalleryImage(idx, "title", e.target.value)}
                              className="w-full bg-white border border-gold/10 px-2 py-1 outline-none text-xs rounded"
                            />
                          </div>
                          <div className="space-y-1">
                            <span className="font-bold text-[8px] uppercase text-royal/50 block">Alt Text</span>
                            <input 
                              type="text" value={imgObj.alt || ""}
                              onChange={e => handleUpdateGalleryImage(idx, "alt", e.target.value)}
                              className="w-full bg-white border border-gold/10 px-2 py-1 outline-none text-xs rounded"
                            />
                          </div>
                          <div className="space-y-1">
                            <span className="font-bold text-[8px] uppercase text-royal/50 block">Display Order</span>
                            <input 
                              type="number" value={imgObj.displayOrder || ""}
                              onChange={e => handleUpdateGalleryImage(idx, "displayOrder", parseInt(e.target.value) || 1)}
                              className="w-full bg-white border border-gold/10 px-2 py-1 outline-none text-xs rounded"
                            />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <span className="font-bold text-[8px] uppercase text-royal/50 block">Caption</span>
                          <input 
                            type="text" value={imgObj.caption || ""}
                            onChange={e => handleUpdateGalleryImage(idx, "caption", e.target.value)}
                            className="w-full bg-white border border-gold/10 px-2.5 py-1.5 outline-none text-xs rounded"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* TAB 9: FAQ */}
          {subTab === "faq" && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex justify-between items-center">
                <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Multilingual FAQs</span>
                <button
                  type="button" onClick={handleAddFAQ}
                  className="bg-gold/15 text-royal border border-gold/25 font-bold text-[9px] tracking-wider uppercase px-3 py-1.5 rounded transition hover:bg-gold hover:text-royal cursor-pointer"
                >
                  + Add FAQ
                </button>
              </div>

              {(!editPackage.faqs || editPackage.faqs.length === 0) ? (
                <div className="py-12 text-center text-royal/40 italic bg-[#FAF8F5] rounded-xl border border-dashed border-gold/20">
                  No FAQs defined. Create questions & answers to guide potential customers.
                </div>
              ) : (
                <div className="space-y-6">
                  {editPackage.faqs.map((faq: any, idx: number) => (
                    <div key={idx} className="border border-gold/10 bg-[#FAF8F5] p-5 rounded-2xl space-y-4 relative shadow-sm">
                      <div className="flex justify-between items-center pb-2 border-b border-gold/10">
                        <span className="font-bold text-royal text-xs">FAQ Question #{idx + 1}</span>
                        <button
                          type="button" onClick={() => handleRemoveFAQ(idx)}
                          className="text-red-500 hover:text-red-700 font-bold uppercase text-[9px]"
                        >
                          Remove FAQ
                        </button>
                      </div>

                      <div className="space-y-3">
                        <span className="font-bold text-[9px] uppercase tracking-wider text-royal/60 block">Questions EN / ES / PT</span>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {["en", "es", "pt"].map(l => (
                            <div key={l} className="space-y-1">
                              <span className="text-[8px] uppercase text-royal/40 font-bold block">{l.toUpperCase()} Question</span>
                              <input 
                                type="text" value={faq.q?.[l] || ""}
                                onChange={e => handleUpdateFAQ(idx, "q", l, e.target.value)}
                                className="w-full bg-white border border-[#C3AB85]/15 px-3 py-2 outline-none rounded-lg"
                                placeholder={`Question (${l.toUpperCase()})`}
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3 pt-2">
                        <span className="font-bold text-[9px] uppercase tracking-wider text-royal/60 block">Answers EN / ES / PT</span>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {["en", "es", "pt"].map(l => (
                            <div key={l} className="space-y-1">
                              <span className="text-[8px] uppercase text-royal/40 font-bold block">{l.toUpperCase()} Answer</span>
                              <textarea
                                value={faq.a?.[l] || ""}
                                onChange={e => handleUpdateFAQ(idx, "a", l, e.target.value)}
                                className="w-full h-24 bg-white border border-[#C3AB85]/15 p-3 outline-none rounded-lg text-xs"
                                placeholder={`Answer (${l.toUpperCase()})`}
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

          {/* TAB 10: POLICIES */}
          {subTab === "policies" && (
            <div className="space-y-6 animate-fade-in">
              {["cancellation", "refund", "bookingTerms", "importantNotes", "visaInfo", "insuranceInfo", "terms"].map((policyType) => (
                <div key={policyType} className="border border-gold/10 p-5 rounded-2xl bg-[#FAF8F5] space-y-3">
                  <span className="font-bold text-[10px] text-gold uppercase tracking-wider block">
                    {policyType.replace(/([A-Z])/g, " $1").trim()} Policy (EN / ES / PT)
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {["en", "es", "pt"].map((l) => (
                      <div key={l} className="space-y-1">
                        <label className="font-bold text-[9px] uppercase text-royal/40">{l.toUpperCase()} Description</label>
                        <textarea
                          value={editPackage.policies?.[policyType]?.[l] || ""}
                          onChange={(e) => handleUpdatePolicy(policyType, l, e.target.value)}
                          className="w-full h-28 bg-white border border-gold/15 p-3 outline-none rounded-lg text-xs"
                          placeholder={`Enter policy details in ${l.toUpperCase()}...`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 11: SEO */}
          {subTab === "seo" && (
            <div className="space-y-6 animate-fade-in bg-[#FAF8F5] border border-gold/15 p-6 rounded-2xl">
              <span className="font-black uppercase tracking-widest text-[9px] text-gold block border-b border-gold/10 pb-2">Search Engine Optimization configuration</span>
              
              {["title", "description", "keywords"].map((field) => (
                <div key={field} className="space-y-2">
                  <label className="font-bold uppercase tracking-wider block text-royal/60">SEO {field.replace(/([A-Z])/g, " $1").trim()} (EN / ES / PT)</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {["en", "es", "pt"].map((l) => (
                      <input
                        key={l} type="text"
                        value={editPackage.seo?.[field]?.[l] || ""}
                        onChange={e => handleUpdateSEO(field, l, e.target.value)}
                        placeholder={`${field} in ${l.toUpperCase()}`}
                        className="w-full bg-white border border-gold/15 px-3 py-2 outline-none rounded-lg text-xs"
                      />
                    ))}
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gold/10">
                <div className="space-y-1">
                  <span className="font-bold text-[9px] uppercase text-royal/60 block">OpenGraph Title</span>
                  <input 
                    type="text" value={editPackage.seo?.ogTitle || ""}
                    onChange={e => handleUpdateSEO("ogTitle", null, e.target.value)}
                    className="w-full bg-white border border-gold/15 px-3 py-2 outline-none rounded text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-[9px] uppercase text-royal/60 block">OpenGraph Description</span>
                  <input 
                    type="text" value={editPackage.seo?.ogDescription || ""}
                    onChange={e => handleUpdateSEO("ogDescription", null, e.target.value)}
                    className="w-full bg-white border border-gold/15 px-3 py-2 outline-none rounded text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-[9px] uppercase text-royal/60 block">Canonical URL</span>
                  <input 
                    type="text" value={editPackage.seo?.canonicalUrl || ""}
                    onChange={e => handleUpdateSEO("canonicalUrl", null, e.target.value)}
                    className="w-full bg-white border border-gold/15 px-3 py-2 outline-none rounded text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end pt-4">
                <div className="space-y-1">
                  <span className="font-bold text-[9px] uppercase text-royal/60 block">Indexing Rules</span>
                  <select
                    value={editPackage.seo?.indexRule || "index"}
                    onChange={e => handleUpdateSEO("indexRule", null, e.target.value)}
                    className="w-full bg-white border border-gold/15 px-3 py-2 outline-none rounded cursor-pointer"
                  >
                    <option value="index">Index (Search visible)</option>
                    <option value="noindex">No Index (Hidden from search)</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-[9px] uppercase text-royal/60 block">Link Following Rules</span>
                  <select
                    value={editPackage.seo?.followRule || "follow"}
                    onChange={e => handleUpdateSEO("followRule", null, e.target.value)}
                    className="w-full bg-white border border-gold/15 px-3 py-2 outline-none rounded cursor-pointer"
                  >
                    <option value="follow">Follow (Transmit ranking juice)</option>
                    <option value="nofollow">No Follow (Block crawler bots)</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-[9px] uppercase text-royal/60 block">OpenGraph Image URL</span>
                  <input 
                    type="text" value={editPackage.seo?.ogImage || ""}
                    onChange={e => handleUpdateSEO("ogImage", null, e.target.value)}
                    className="w-full bg-white border border-gold/15 px-3 py-2 outline-none rounded text-xs"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 12: PUBLISH STATUS */}
          {subTab === "status" && (
            <div className="space-y-6 animate-fade-in bg-[#FAF8F5] border border-gold/15 p-6 rounded-2xl">
              <span className="font-black uppercase tracking-widest text-[9px] text-gold block border-b border-gold/10 pb-2">Publishing Status & Visibility Settings</span>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-1.5">
                  <label className="font-bold uppercase block text-royal/60">Listing Status</label>
                  <select
                    value={editPackage.status || "published"}
                    onChange={e => setEditPackage({...editPackage, status: e.target.value})}
                    className="w-full bg-white border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold cursor-pointer"
                  >
                    <option value="published">Published (Visible online)</option>
                    <option value="draft">Draft (Admin eyes only)</option>
                    <option value="unpublished">Unpublished (Archived offline)</option>
                  </select>
                </div>

                <div className="flex items-center gap-2 pt-4">
                  <input 
                    type="checkbox" id="toggle-featured"
                    checked={editPackage.isFeatured === true}
                    onChange={e => setEditPackage({...editPackage, isFeatured: e.target.checked})}
                    className="w-5 h-5 cursor-pointer accent-royal"
                  />
                  <label htmlFor="toggle-featured" className="font-bold uppercase tracking-wider block cursor-pointer">Featured on Homepage <span className="text-gold">(Shows in homepage packages grid — pick up to 3)</span></label>
                </div>
              </div>
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

      {/* PACKAGES GRID */}
      {!editPackage && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(packages || []).map((pkg) => (
            <div key={pkg.slug} className="bg-white border border-beige/45 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between hover:border-gold/30 transition">
              <div className="h-40 w-full overflow-hidden bg-light-gray relative">
                <img src={pkg.image || "/images/destination_fallback.jpg"} alt={pkg.title?.en} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
              </div>
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-1 flex-wrap">
                    <span className="text-[8px] bg-royal/10 text-royal px-2.5 py-0.5 rounded uppercase font-bold tracking-wider border border-gold/15">{pkg.category}</span>
                    <div className="flex items-center gap-1">
                      <span className={`text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        pkg.isDraft ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"
                      }`}>
                        {pkg.isDraft ? "Draft" : "Published"}
                      </span>
                      {pkg.isFeatured && <span className="text-[8px] bg-gold text-royal px-2 py-0.5 rounded uppercase font-bold tracking-wider">⭐ Featured</span>}
                      <span className="text-[10px] text-foreground/45 font-semibold">{pkg.durationDays} Days</span>
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-royal font-serif line-clamp-1">{pkg.title?.en}</h4>
                  <p className="text-xs text-foreground/50 line-clamp-2 leading-relaxed font-light">{pkg.tagline?.en}</p>
                </div>

                <div className="flex flex-wrap justify-between items-center pt-4 border-t border-beige/25 text-xs gap-2">
                  <button
                    onClick={() => setEditPackage(pkg)}
                    className="text-royal hover:text-gold flex items-center gap-1 font-bold uppercase tracking-wider cursor-pointer"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                    <span>Edit</span>
                  </button>
                  <a
                    href={`/en/packages/${pkg.slug}?preview=true`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-royal flex items-center gap-1 font-bold uppercase tracking-wider"
                  >
                    <span>Preview 👁️</span>
                  </a>
                  <button
                    onClick={() => {
                      if (window.confirm(`Are you sure you want to delete "${pkg.title?.en}" package?`)) {
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
