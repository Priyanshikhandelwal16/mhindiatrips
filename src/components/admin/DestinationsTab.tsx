"use client";

import React, { useState } from "react";
import { 
  MapPin, Plus, Edit2, Trash2, Upload, Compass, HelpCircle, 
  BookOpen, ChevronRight, Eye, Layers, ChevronDown, ChevronUp, 
  Image as ImageIcon, Settings, DollarSign, ShieldAlert, Globe, 
  Info, Activity, List, Calendar
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

  const handleAddCity = () => {
    const cityName = prompt("Enter new City name (e.g. Udaipur):");
    if (!cityName || !cityName.trim()) return;
    const citySlug = cityName.toLowerCase().replace(/[^a-z0-9-_]/g, "-");
    
    const newCity = {
      slug: citySlug,
      title: { en: cityName, es: cityName, pt: cityName },
      tagline: { en: `Explore the magic of ${cityName}`, es: "", pt: "" },
      image: "",
      gallery: [],
      overview: { en: "", es: "", pt: "" },
      history: { en: "", es: "", pt: "" },
      culture: { en: "", es: "", pt: "" },
      attractions: [],
      thingsToDo: [],
      hotels: [],
      localFood: { en: "", es: "", pt: "" },
      shopping: { en: "", es: "", pt: "" },
      weather: { en: "", es: "", pt: "" },
      bestTime: { en: "", es: "", pt: "" },
      travelTips: [],
      nearbyPlaces: [],
      suggestedItinerary: { en: "", es: "", pt: "" },
      faqs: [],
      
      country: "India",
      region: editState.region || "North",
      destinationType: "City",
      shortDescription: { en: "", es: "", pt: "" },
      fullDescription: { en: "", es: "", pt: "" },
      featuredImage: "",
      isFeatured: false,
      status: "published",
      hero: {
        image: "",
        title: { en: cityName, es: "", pt: "" },
        subtitle: { en: "", es: "", pt: "" },
        description: { en: "", es: "", pt: "" },
        ctaText: { en: "Plan Your Journey", es: "", pt: "" },
        ctaLink: "/contact"
      },
      highlights: [],
      experiences: [],
      bestTimeToVisit: {
        bestTime: { en: "", es: "", pt: "" },
        peakSeason: "",
        shoulderSeason: "",
        offSeason: "",
        weatherDesc: { en: "", es: "", pt: "" },
        monthlyInfo: []
      },
      travelInfo: {
        howToReach: { en: "", es: "", pt: "" },
        nearestAirport: "",
        nearestRailway: "",
        transportOptions: "",
        distanceFromMajorCities: "",
        recommendedStay: "",
        avgTemp: "",
        currency: "INR",
        localLanguage: "Hindi & English",
        timeZone: "IST (UTC+5:30)",
        safetyInfo: { en: "", es: "", pt: "" }
      },
      gettingAround: [],
      localFoodDishes: [],
      relatedTours: [],
      tags: ["History", "Culture"],
      statistics: {
        recommendedDays: "",
        annualVisitors: "",
        bestSeason: ""
      },
      seo: {
        title: { en: cityName, es: "", pt: "" },
        description: { en: "", es: "", pt: "" },
        keywords: { en: "", es: "", pt: "" },
        ogTitle: "",
        ogDescription: "",
        ogImage: "",
        canonicalUrl: "",
        indexRule: "index",
        followRule: "follow"
      }
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
      state: editState.title?.en,
      location: "",
      openingHours: "",
      recommendedDuration: "",
      entryFee: "",
      isUNESCO: false,
      isFeatured: false,
      displayOrder: (editState.cities[cityIdx].attractions || []).length + 1
    };

    const updatedCities = [...editState.cities];
    updatedCities[cityIdx] = {
      ...updatedCities[cityIdx],
      attractions: [...(updatedCities[cityIdx].attractions || []), newAttraction]
    };
    setEditState({ ...editState, cities: updatedCities });
  };

  // Helper for highlights
  const handleAddCityHighlight = (cityIdx: number) => {
    const newHighlight = {
      title: { en: "Highlight Title", es: "", pt: "" },
      desc: { en: "Description details", es: "", pt: "" },
      image: "",
      icon: "Check",
      displayOrder: (editState.cities[cityIdx].highlights || []).length + 1,
      isActive: true
    };
    const updatedCities = [...editState.cities];
    updatedCities[cityIdx].highlights = [...(updatedCities[cityIdx].highlights || []), newHighlight];
    setEditState({ ...editState, cities: updatedCities });
  };

  // Helper for things to do
  const handleAddCityActivity = (cityIdx: number) => {
    const newAct = {
      name: { en: "Activity Name", es: "", pt: "" },
      desc: { en: "Activity details", es: "", pt: "" },
      image: "",
      duration: "",
      price: "",
      bestTime: "",
      difficulty: "Easy",
      isFeatured: false,
      displayOrder: (editState.cities[cityIdx].thingsToDo || []).length + 1
    };
    const updatedCities = [...editState.cities];
    updatedCities[cityIdx].thingsToDo = [...(updatedCities[cityIdx].thingsToDo || []), newAct];
    setEditState({ ...editState, cities: updatedCities });
  };

  // Helper for experiences
  const handleAddCityExperience = (cityIdx: number) => {
    const newExp = {
      title: { en: "Experience Title", es: "", pt: "" },
      desc: { en: "Experience Description", es: "", pt: "" },
      image: "",
      duration: "",
      location: "",
      price: "",
      bookingAvailable: false,
      isFeatured: false
    };
    const updatedCities = [...editState.cities];
    updatedCities[cityIdx].experiences = [...(updatedCities[cityIdx].experiences || []), newExp];
    setEditState({ ...editState, cities: updatedCities });
  };

  // Helper for local food dishes
  const handleAddCityFood = (cityIdx: number) => {
    const newFood = {
      name: { en: "Dish Name", es: "", pt: "" },
      desc: { en: "Description", es: "", pt: "" },
      image: "",
      isVeg: true,
      recommended: true,
      whereToTry: "",
      displayOrder: (editState.cities[cityIdx].localFoodDishes || []).length + 1
    };
    const updatedCities = [...editState.cities];
    updatedCities[cityIdx].localFoodDishes = [...(updatedCities[cityIdx].localFoodDishes || []), newFood];
    setEditState({ ...editState, cities: updatedCities });
  };

  // Helper for getting around
  const handleAddCityTransport = (cityIdx: number) => {
    const newTrans = {
      transportType: "Taxi",
      title: { en: "Title", es: "", pt: "" },
      desc: { en: "Description", es: "", pt: "" },
      image: "",
      priceRange: "$$",
      recommended: true
    };
    const updatedCities = [...editState.cities];
    updatedCities[cityIdx].gettingAround = [...(updatedCities[cityIdx].gettingAround || []), newTrans];
    setEditState({ ...editState, cities: updatedCities });
  };

  // Helper for city gallery image
  const handleAddCityGallery = (cityIdx: number) => {
    const newImg = {
      url: "",
      title: "",
      alt: "",
      caption: "",
      displayOrder: (editState.cities[cityIdx].gallery || []).length + 1
    };
    const updatedCities = [...editState.cities];
    updatedCities[cityIdx].gallery = [...(updatedCities[cityIdx].gallery || []), newImg];
    setEditState({ ...editState, cities: updatedCities });
  };

  // Helper for city FAQs
  const handleAddCityFAQ = (cityIdx: number) => {
    const newFaq = {
      q: { en: "Question", es: "", pt: "" },
      a: { en: "Answer", es: "", pt: "" }
    };
    const updatedCities = [...editState.cities];
    updatedCities[cityIdx].faqs = [...(updatedCities[cityIdx].faqs || []), newFaq];
    setEditState({ ...editState, cities: updatedCities });
  };

  // Helper for city travel tips
  const handleAddCityTip = (cityIdx: number) => {
    const newTip = {
      title: { en: "Tip Title", es: "", pt: "" },
      desc: { en: "Tip description details", es: "", pt: "" },
      icon: "Info",
      displayOrder: (editState.cities[cityIdx].travelTips || []).length + 1
    };
    const updatedCities = [...editState.cities];
    updatedCities[cityIdx].travelTips = [...(updatedCities[cityIdx].travelTips || []), newTip];
    setEditState({ ...editState, cities: updatedCities });
  };

  const citySubTabs = [
    { id: "general", label: "1. General details", icon: Compass },
    { id: "overview", label: "2. Destination Overview", icon: BookOpen },
    { id: "highlights", label: "3. Highlights", icon: Activity },
    { id: "thingsToDo", label: "4. Things to Do", icon: List },
    { id: "attractions", label: "5. Places to Visit", icon: MapPin },
    { id: "experiences", label: "6. Experiences", icon: BookOpen },
    { id: "bestTime", label: "7. Best Time", icon: Calendar },
    { id: "travelInfo", label: "8. Travel Info", icon: Info },
    { id: "food", label: "9. Local Food", icon: Compass },
    { id: "hotels", label: "10. Where to Stay", icon: Layers },
    { id: "transport", label: "11. Getting Around", icon: Compass },
    { id: "gallery", label: "12. Gallery", icon: ImageIcon },
    { id: "faqs", label: "13. FAQs", icon: HelpCircle },
    { id: "tips", label: "14. Travel Tips", icon: Info },
    { id: "related", label: "15. Related Tours", icon: Layers },
    { id: "seo", label: "16. SEO Config", icon: Globe },
    { id: "status", label: "17. Status & Publish", icon: Settings }
  ];

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
                travelTips: [],
                faqs: [],
                cities: [],
                slug: "",
                region: "North",
                image: "",
                gallery: [],
                status: "published",
                isFeatured: false
              });
            }}
            className="bg-royal text-white border border-gold/20 hover:bg-gold hover:text-royal font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 flex items-center gap-1.5 transition cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add New State</span>
          </button>
        </div>
      )}

      {/* STATE OR CITY EDITOR FORM */}
      {editState && (
        <form onSubmit={handleSaveState} className="bg-white border border-gold/20 rounded-3xl p-6 md:p-8 shadow-xl space-y-6">
          <div className="flex justify-between items-center border-b border-beige/40 pb-4">
            <h3 className="text-base font-bold font-serif">
              {editState.slug ? `Edit Destination (State): ${editState.title?.en}` : "Create New Destination State"}
            </h3>
            <button
              type="button"
              onClick={() => {
                setEditState(null);
                setEditingCityIdx(null);
              }}
              className="text-royal/50 hover:text-royal font-bold"
            >
              Close Editor
            </button>
          </div>

          {editingCityIdx === null ? (
            /* STATE WORKSPACE - TABBED VIEW */
            <div className="space-y-6">
              <div className="flex gap-2 border-b border-gold/10 pb-2 mb-4 flex-wrap">
                {[
                  { id: "general", label: "State General Details" },
                  { id: "travelTips", label: "State Travel Tips" },
                  { id: "faqs", label: "State FAQs" },
                  { id: "cities", label: "Manage Cities & Attractions" },
                ].map((tab: any) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setDestSubTab(tab.id)}
                    className={`px-3 py-2 text-[9px] font-bold uppercase tracking-wider transition rounded-lg border ${
                      destSubTab === tab.id
                        ? "bg-royal text-white border-royal"
                        : "bg-[#FAF8F5] text-royal/60 border-gold/10 hover:text-royal"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* STATE TAB: GENERAL DETAILS */}
              {destSubTab === "general" && (
                <div className="space-y-6 animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase tracking-wider block">State Slug</label>
                      <input 
                        type="text" required
                        value={editState.slug || ""}
                        onChange={e => setEditState({...editState, slug: e.target.value.toLowerCase().replace(/\s+/g, "-")})}
                        className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase tracking-wider block">Region</label>
                      <select
                        value={editState.region || "North"}
                        onChange={e => setEditState({...editState, region: e.target.value})}
                        className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50"
                      >
                        {["North", "South", "East", "West", "Central", "North East", "Islands"].map(r => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase block text-royal/60">Publishing Status</label>
                      <select
                        value={editState.status || "published"}
                        onChange={e => setEditState({...editState, status: e.target.value})}
                        className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50 cursor-pointer"
                      >
                        <option value="published">Published</option>
                        <option value="draft">Draft</option>
                        <option value="unpublished">Unpublished</option>
                      </select>
                    </div>
                  </div>

                  {/* Title, Tagline, Descriptions translations */}
                  {["title", "tagline", "description", "history", "culture", "localFood", "bestTime"].map((field) => (
                    <div key={field} className="border border-gold/10 p-5 rounded-2xl bg-[#FAF8F5] space-y-3">
                      <span className="font-bold text-[10px] text-gold uppercase tracking-wider block">{field.replace(/([A-Z])/g, " $1").trim()} Translations</span>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {["en", "es", "pt"].map((l) => (
                          <div key={l} className="space-y-1">
                            <label className="font-bold text-[9px] uppercase text-royal/40">{l.toUpperCase()}</label>
                            {["description", "history", "culture"].includes(field) ? (
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
                                className="w-full bg-white border border-gold/15 px-3 py-2.5 outline-none rounded-lg"
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* State Image */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                    <div className="md:col-span-8 space-y-1.5">
                      <label className="font-bold uppercase tracking-wider block">Main Hero Image URL</label>
                      <input 
                        type="text" required
                        value={editState.image || ""}
                        onChange={e => setEditState({...editState, image: e.target.value})}
                        className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg"
                      />
                    </div>
                    <div className="md:col-span-4 pb-0.5">
                      <CloudinaryUpload 
                        onUploadComplete={(url) => setEditState({ ...editState, image: url })} 
                        label="Upload Hero Image"
                        showStatus={showStatus}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STATE TAB: TRAVEL TIPS */}
              {destSubTab === "travelTips" && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex justify-between items-center">
                    <span className="font-black uppercase tracking-widest text-[9px] text-gold block">State Level Travel Tips</span>
                    <button
                      type="button"
                      onClick={() => {
                        const updatedTips = [...(editState.travelTips || []), { en: "", es: "", pt: "" }];
                        setEditState({ ...editState, travelTips: updatedTips });
                      }}
                      className="bg-gold/15 text-royal border border-gold/25 font-bold text-[9px] tracking-wider uppercase px-3 py-1.5 rounded transition cursor-pointer"
                    >
                      + Add Tip
                    </button>
                  </div>

                  {(!editState.travelTips || editState.travelTips.length === 0) ? (
                    <div className="py-12 text-center text-royal/40 italic bg-[#FAF8F5] rounded-xl border border-dashed border-gold/20">
                      No tips configured.
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {editState.travelTips.map((tip: any, idx: number) => (
                        <div key={idx} className="bg-[#FAF8F5] border border-gold/15 p-4 rounded-xl space-y-2 relative">
                          <div className="flex justify-between items-center pb-1 border-b border-gold/5">
                            <span className="font-bold text-gold text-[10px]">Tip #{idx + 1}</span>
                            <button
                              type="button"
                              onClick={() => {
                                const updatedTips = editState.travelTips.filter((_: any, i: number) => i !== idx);
                                setEditState({ ...editState, travelTips: updatedTips });
                              }}
                              className="text-red-500 hover:text-red-700 font-bold text-[9px] uppercase tracking-wider"
                            >
                              Remove
                            </button>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {["en", "es", "pt"].map(l => (
                              <input
                                key={l} type="text" placeholder={l.toUpperCase() + " Travel Tip"}
                                value={tip[l] || ""}
                                onChange={e => {
                                  const updatedTips = [...editState.travelTips];
                                  updatedTips[idx] = { ...updatedTips[idx], [l]: e.target.value };
                                  setEditState({ ...editState, travelTips: updatedTips });
                                }}
                                className="w-full bg-white border border-gold/10 px-2.5 py-1.5 outline-none rounded text-xs"
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* STATE TAB: FAQS */}
              {destSubTab === "faqs" && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex justify-between items-center">
                    <span className="font-black uppercase tracking-widest text-[9px] text-gold block">State Level FAQs</span>
                    <button
                      type="button"
                      onClick={() => {
                        const updatedFaqs = [...(editState.faqs || []), { q: { en: "", es: "", pt: "" }, a: { en: "", es: "", pt: "" } }];
                        setEditState({ ...editState, faqs: updatedFaqs });
                      }}
                      className="bg-gold/15 text-royal border border-gold/25 font-bold text-[9px] tracking-wider uppercase px-3 py-1.5 rounded transition cursor-pointer"
                    >
                      + Add FAQ
                    </button>
                  </div>

                  {(!editState.faqs || editState.faqs.length === 0) ? (
                    <div className="py-12 text-center text-royal/40 italic bg-[#FAF8F5] rounded-xl border border-dashed border-gold/20">
                      No FAQs configured.
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {editState.faqs.map((faq: any, idx: number) => (
                        <div key={idx} className="border border-gold/10 bg-[#FAF8F5] p-5 rounded-2xl space-y-4 relative shadow-sm">
                          <div className="flex justify-between items-center pb-2 border-b border-gold/10">
                            <span className="font-bold text-royal text-xs font-serif">FAQ Question #{idx + 1}</span>
                            <button
                              type="button"
                              onClick={() => {
                                const updatedFaqs = editState.faqs.filter((_: any, i: number) => i !== idx);
                                setEditState({ ...editState, faqs: updatedFaqs });
                              }}
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
                                    onChange={e => {
                                      const updatedFaqs = [...editState.faqs];
                                      updatedFaqs[idx].q = { ...(updatedFaqs[idx].q || {}), [l]: e.target.value };
                                      setEditState({ ...editState, faqs: updatedFaqs });
                                    }}
                                    className="w-full bg-white border border-[#C3AB85]/15 px-3 py-2 outline-none rounded-lg"
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
                                    onChange={e => {
                                      const updatedFaqs = [...editState.faqs];
                                      updatedFaqs[idx].a = { ...(updatedFaqs[idx].a || {}), [l]: e.target.value };
                                      setEditState({ ...editState, faqs: updatedFaqs });
                                    }}
                                    className="w-full h-20 bg-white border border-[#C3AB85]/15 p-3 outline-none rounded-lg text-xs"
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

              {/* STATE TAB: CITIES MANAGEMENT */}
              {destSubTab === "cities" && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex justify-between items-center pb-3 border-b border-gold/10">
                    <span className="font-black uppercase tracking-widest text-[9px] text-royal block">Cities / Destinations within State</span>
                    <button
                      type="button"
                      onClick={handleAddCity}
                      className="bg-royal text-white border border-gold/20 hover:bg-gold hover:text-royal font-bold text-[9px] tracking-wider uppercase px-3 py-1.5 flex items-center gap-1.5 transition cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add City Destination</span>
                    </button>
                  </div>

                  {(!editState.cities || editState.cities.length === 0) ? (
                    <div className="py-12 text-center text-royal/40 italic bg-[#FAF8F5] rounded-xl border border-dashed border-gold/20">
                      No cities added yet. Click "Add City Destination" to start.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {editState.cities.map((city: any, cIdx: number) => (
                        <div key={city.slug || cIdx} className="bg-[#FAF8F5] border border-gold/15 p-5 rounded-2xl flex items-center justify-between shadow-sm hover:border-gold/35 transition">
                          <div className="flex items-center gap-4">
                            {city.image && (
                              <div className="w-14 h-14 overflow-hidden rounded-xl border border-gold/10 shadow-inner">
                                <img src={city.image} alt={city.title?.en} className="w-full h-full object-cover" />
                              </div>
                            )}
                            <div>
                              <h5 className="font-bold text-royal text-sm font-serif">{city.title?.en}</h5>
                              <p className="text-[10px] text-royal/40 uppercase tracking-widest">
                                Attractions: {(city.attractions || []).length}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={() => {
                                setEditingCityIdx(cIdx);
                                setCitySubTab("general");
                              }}
                              className="bg-royal text-white px-3 py-1.5 font-bold uppercase tracking-wider cursor-pointer rounded hover:bg-gold hover:text-royal transition text-[9px]"
                            >
                              Open City Editor
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                if (window.confirm(`Delete ${city.title?.en} and all its data?`)) {
                                  const updatedCities = editState.cities.filter((_: any, i: number) => i !== cIdx);
                                  setEditState({ ...editState, cities: updatedCities });
                                }
                              }}
                              className="text-red-500 hover:text-red-700 font-bold uppercase text-[9px]"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            /* EDIT CITY WINDOW - COMPLETE 17 TABS WORKSPACE */
            <div className="space-y-6 bg-[#FAF8F5] border border-gold/15 p-6 rounded-3xl">
              <div className="flex justify-between items-center border-b border-gold/10 pb-3">
                <h4 className="text-sm font-bold text-royal">
                  Editing City Guide: <span className="text-gold font-serif text-base">{editState.cities[editingCityIdx].title?.en}</span>
                </h4>
                <button
                  type="button"
                  onClick={() => setEditingCityIdx(null)}
                  className="bg-royal text-white font-bold text-[9px] uppercase tracking-wider px-3 py-1.5 rounded cursor-pointer"
                >
                  Back to State Workspace
                </button>
              </div>

              {/* City Sub-tab Navigation */}
              <div className="flex flex-wrap gap-1.5 border-b border-gold/10 pb-3 mb-4">
                {citySubTabs.map((subTab) => {
                  const Icon = subTab.icon;
                  return (
                    <button
                      key={subTab.id}
                      type="button"
                      onClick={() => setCitySubTab(subTab.id)}
                      className={`px-3 py-2 text-[9px] font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer flex items-center gap-1 border ${
                        citySubTab === subTab.id
                          ? "bg-royal text-white border-royal"
                          : "bg-white text-royal/60 hover:text-royal hover:bg-gold/5 border-gold/5"
                      }`}
                    >
                      <Icon className="w-3 h-3" />
                      <span>{subTab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* CITY TAB 1: GENERAL DETAILS */}
              {citySubTab === "general" && (
                <div className="space-y-6 animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-1">
                      <label className="font-bold uppercase tracking-wider block text-royal/50 text-[10px]">City Slug</label>
                      <input 
                        type="text" required
                        value={editState.cities[editingCityIdx].slug || ""}
                        onChange={e => {
                          const updatedCities = [...editState.cities];
                          updatedCities[editingCityIdx].slug = e.target.value.toLowerCase().replace(/\s+/g, "-");
                          setEditState({ ...editState, cities: updatedCities });
                        }}
                        className="w-full bg-white border border-gold/10 px-3 py-2.5 outline-none rounded-lg text-xs"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold uppercase tracking-wider block text-royal/50 text-[10px]">Country</label>
                      <input 
                        type="text"
                        value={editState.cities[editingCityIdx].country || "India"}
                        onChange={e => {
                          const updatedCities = [...editState.cities];
                          updatedCities[editingCityIdx].country = e.target.value;
                          setEditState({ ...editState, cities: updatedCities });
                        }}
                        className="w-full bg-white border border-gold/10 px-3 py-2.5 outline-none rounded-lg text-xs"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold uppercase tracking-wider block text-royal/50 text-[10px]">Region / Territory</label>
                      <input 
                        type="text"
                        value={editState.cities[editingCityIdx].region || editState.region || ""}
                        onChange={e => {
                          const updatedCities = [...editState.cities];
                          updatedCities[editingCityIdx].region = e.target.value;
                          setEditState({ ...editState, cities: updatedCities });
                        }}
                        className="w-full bg-white border border-gold/10 px-3 py-2.5 outline-none rounded-lg text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-1">
                      <label className="font-bold uppercase tracking-wider block text-royal/50 text-[10px]">Destination Type</label>
                      <select 
                        value={editState.cities[editingCityIdx].destinationType || "City"}
                        onChange={e => {
                          const updatedCities = [...editState.cities];
                          updatedCities[editingCityIdx].destinationType = e.target.value;
                          setEditState({ ...editState, cities: updatedCities });
                        }}
                        className="w-full bg-white border border-gold/10 px-3 py-2.5 outline-none rounded-lg text-xs cursor-pointer"
                      >
                        {["City", "Beach", "Hill Station", "Heritage", "Wildlife", "Backwaters", "Spiritual", "Desert", "Adventure", "Culinary", "Family", "Honeymoon"].map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold uppercase tracking-wider block text-royal/50 text-[10px]">Display Order</label>
                      <input 
                        type="number"
                        value={editState.cities[editingCityIdx].displayOrder || 1}
                        onChange={e => {
                          const updatedCities = [...editState.cities];
                          updatedCities[editingCityIdx].displayOrder = parseInt(e.target.value) || 1;
                          setEditState({ ...editState, cities: updatedCities });
                        }}
                        className="w-full bg-white border border-gold/10 px-3 py-2.5 outline-none rounded-lg text-xs"
                      />
                    </div>
                    <div className="flex items-center gap-2 pt-6">
                      <input 
                        type="checkbox" id="city-featured"
                        checked={editState.cities[editingCityIdx].isFeatured === true}
                        onChange={e => {
                          const updatedCities = [...editState.cities];
                          updatedCities[editingCityIdx].isFeatured = e.target.checked;
                          setEditState({ ...editState, cities: updatedCities });
                        }}
                        className="w-4 h-4 cursor-pointer accent-royal"
                      />
                      <label htmlFor="city-featured" className="font-bold uppercase tracking-wider block cursor-pointer">Featured Guide</label>
                    </div>
                  </div>

                  {/* Main Hero Image */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end bg-white border border-gold/5 p-4 rounded-xl">
                    <div className="md:col-span-8 space-y-1.5">
                      <label className="font-bold uppercase tracking-wider block text-royal/50 text-[10px]">Featured image URL</label>
                      <input 
                        type="text"
                        value={editState.cities[editingCityIdx].image || ""}
                        onChange={e => {
                          const updatedCities = [...editState.cities];
                          updatedCities[editingCityIdx].image = e.target.value;
                          setEditState({ ...editState, cities: updatedCities });
                        }}
                        className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2 outline-none rounded text-xs"
                      />
                    </div>
                    <div className="md:col-span-4 pb-0.5">
                      <CloudinaryUpload 
                        onUploadComplete={(url) => {
                          const updatedCities = [...editState.cities];
                          updatedCities[editingCityIdx].image = url;
                          setEditState({ ...editState, cities: updatedCities });
                        }} 
                        label="Upload City Photo"
                        showStatus={showStatus}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* CITY TAB 2: OVERVIEW & CULTURE */}
              {citySubTab === "overview" && (
                <div className="space-y-4 animate-fade-in">
                  {["title", "tagline", "shortDescription", "fullDescription", "overview", "history", "culture", "shopping"].map((field) => (
                    <div key={field} className="space-y-1 border border-gold/5 p-4 rounded-xl bg-white">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-royal/60">
                        {field.replace(/([A-Z])/g, " $1").trim()} Translations
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {["en", "es", "pt"].map((l) => (
                          <div key={l} className="space-y-0.5">
                            <span className="text-[8px] uppercase text-royal/40 font-bold">{l}</span>
                            {["shortDescription", "fullDescription", "overview", "history", "culture"].includes(field) ? (
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

              {/* CITY TAB 3: HIGHLIGHTS */}
              {citySubTab === "highlights" && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex justify-between items-center">
                    <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Destination Highlights</span>
                    <button
                      type="button" onClick={() => handleAddCityHighlight(editingCityIdx)}
                      className="bg-gold/15 text-royal border border-gold/25 font-bold text-[9px] tracking-wider uppercase px-3 py-1.5 rounded transition hover:bg-gold hover:text-royal cursor-pointer"
                    >
                      + Add Highlight
                    </button>
                  </div>

                  {(!editState.cities[editingCityIdx].highlights || editState.cities[editingCityIdx].highlights.length === 0) ? (
                    <div className="py-12 text-center text-royal/40 italic bg-white rounded-xl border border-dashed border-gold/20">
                      No highlights configured.
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {editState.cities[editingCityIdx].highlights.map((hl: any, idx: number) => (
                        <div key={idx} className="bg-white border border-gold/15 p-5 rounded-2xl space-y-4 relative">
                          <div className="flex justify-between items-center pb-2 border-b border-gold/10">
                            <span className="font-bold text-royal text-[10px]">Highlight Point #{idx + 1}</span>
                            <button
                              type="button" onClick={() => {
                                const updatedCities = [...editState.cities];
                                updatedCities[editingCityIdx].highlights = updatedCities[editingCityIdx].highlights.filter((_: any, i: number) => i !== idx);
                                setEditState({ ...editState, cities: updatedCities });
                              }}
                              className="text-red-500 hover:text-red-700 font-bold text-[9px] uppercase tracking-wider"
                            >
                              Remove Highlight
                            </button>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <span className="font-bold text-royal/50 uppercase text-[9px] tracking-wider block">Title Translations</span>
                              {["en", "es", "pt"].map(l => (
                                <input
                                  key={l} type="text" placeholder={l.toUpperCase() + " Title"}
                                  value={hl.title?.[l] || ""}
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].highlights[idx].title = { ...(updatedCities[editingCityIdx].highlights[idx].title || {}), [l]: e.target.value };
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-full bg-[#FAF8F5] border border-gold/10 px-2.5 py-1.5 outline-none rounded"
                                />
                              ))}
                            </div>
                            <div className="space-y-1">
                              <span className="font-bold text-royal/50 uppercase text-[9px] tracking-wider block">Description Translations</span>
                              {["en", "es", "pt"].map(l => (
                                <input
                                  key={l} type="text" placeholder={l.toUpperCase() + " Description"}
                                  value={hl.desc?.[l] || ""}
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].highlights[idx].desc = { ...(updatedCities[editingCityIdx].highlights[idx].desc || {}), [l]: e.target.value };
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-full bg-[#FAF8F5] border border-gold/10 px-2.5 py-1.5 outline-none rounded"
                                />
                              ))}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                            <div className="space-y-1">
                              <span className="font-bold text-[9px] uppercase text-royal/50 block">Icon</span>
                              <input 
                                type="text" value={hl.icon || ""}
                                onChange={e => {
                                  const updatedCities = [...editState.cities];
                                  updatedCities[editingCityIdx].highlights[idx].icon = e.target.value;
                                  setEditState({ ...editState, cities: updatedCities });
                                }}
                                className="w-full bg-[#FAF8F5] border border-gold/10 px-2 py-1 outline-none text-xs rounded"
                              />
                            </div>
                            <div className="space-y-1">
                              <span className="font-bold text-[9px] uppercase text-royal/50 block">Display Order</span>
                              <input 
                                type="number" value={hl.displayOrder || 1}
                                onChange={e => {
                                  const updatedCities = [...editState.cities];
                                  updatedCities[editingCityIdx].highlights[idx].displayOrder = parseInt(e.target.value) || 1;
                                  setEditState({ ...editState, cities: updatedCities });
                                }}
                                className="w-full bg-[#FAF8F5] border border-gold/10 px-2 py-1 outline-none text-xs rounded"
                              />
                            </div>
                            <div className="flex items-center gap-2 pt-4">
                              <input 
                                type="checkbox" id={`hl-active-${idx}`}
                                checked={hl.isActive !== false}
                                onChange={e => {
                                  const updatedCities = [...editState.cities];
                                  updatedCities[editingCityIdx].highlights[idx].isActive = e.target.checked;
                                  setEditState({ ...editState, cities: updatedCities });
                                }}
                                className="w-4 h-4 cursor-pointer accent-royal"
                              />
                              <label htmlFor={`hl-active-${idx}`} className="font-bold uppercase tracking-wider block cursor-pointer">Active</label>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* CITY TAB 4: THINGS TO DO */}
              {citySubTab === "thingsToDo" && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex justify-between items-center">
                    <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Things to Do (Activities)</span>
                    <button
                      type="button" onClick={() => handleAddCityActivity(editingCityIdx)}
                      className="bg-gold/15 text-royal border border-gold/25 font-bold text-[9px] tracking-wider uppercase px-3 py-1.5 rounded transition hover:bg-gold hover:text-royal cursor-pointer"
                    >
                      + Add Activity
                    </button>
                  </div>

                  {(!editState.cities[editingCityIdx].thingsToDo || editState.cities[editingCityIdx].thingsToDo.length === 0) ? (
                    <div className="py-12 text-center text-royal/40 italic bg-white rounded-xl border border-dashed border-gold/20">
                      No activities configured.
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {editState.cities[editingCityIdx].thingsToDo.map((todo: any, idx: number) => {
                        const todoObj = typeof todo === "object" && todo !== null && todo.name ? todo : { name: { en: typeof todo === 'string' ? todo : (todo.en || ""), es: "", pt: "" }, desc: { en: "", es: "", pt: "" }, duration: "", price: "", difficulty: "Easy", displayOrder: idx + 1, isFeatured: false };
                        return (
                          <div key={idx} className="bg-white border border-gold/15 p-5 rounded-2xl space-y-4 relative shadow-sm">
                            <div className="flex justify-between items-center pb-2 border-b border-gold/10">
                              <span className="font-bold text-royal text-[10px]">Activity #{idx + 1}</span>
                              <button
                                type="button" onClick={() => {
                                  const updatedCities = [...editState.cities];
                                  updatedCities[editingCityIdx].thingsToDo = updatedCities[editingCityIdx].thingsToDo.filter((_: any, i: number) => i !== idx);
                                  setEditState({ ...editState, cities: updatedCities });
                                }}
                                className="text-red-500 hover:text-red-700 font-bold text-[9px] uppercase tracking-wider"
                              >
                                Remove Activity
                              </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-1">
                                <span className="font-bold text-royal/50 uppercase text-[9px] tracking-wider block">Activity Name</span>
                                {["en", "es", "pt"].map(l => (
                                  <input
                                    key={l} type="text" placeholder={l.toUpperCase() + " Name"}
                                    value={todoObj.name?.[l] || ""}
                                    onChange={e => {
                                      const updatedCities = [...editState.cities];
                                      updatedCities[editingCityIdx].thingsToDo[idx] = {
                                        ...todoObj,
                                        name: { ...(todoObj.name || {}), [l]: e.target.value }
                                      };
                                      setEditState({ ...editState, cities: updatedCities });
                                    }}
                                    className="w-full bg-[#FAF8F5] border border-gold/10 px-2.5 py-1.5 outline-none rounded"
                                  />
                                ))}
                              </div>
                              <div className="space-y-1">
                                <span className="font-bold text-royal/50 uppercase text-[9px] tracking-wider block">Description</span>
                                {["en", "es", "pt"].map(l => (
                                  <input
                                    key={l} type="text" placeholder={l.toUpperCase() + " Description"}
                                    value={todoObj.desc?.[l] || ""}
                                    onChange={e => {
                                      const updatedCities = [...editState.cities];
                                      updatedCities[editingCityIdx].thingsToDo[idx] = {
                                        ...todoObj,
                                        desc: { ...(todoObj.desc || {}), [l]: e.target.value }
                                      };
                                      setEditState({ ...editState, cities: updatedCities });
                                    }}
                                    className="w-full bg-[#FAF8F5] border border-gold/10 px-2.5 py-1.5 outline-none rounded"
                                  />
                                ))}
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                              <div className="space-y-1">
                                <span className="font-bold text-[9px] uppercase text-royal/50 block">Duration</span>
                                <input 
                                  type="text" value={todoObj.duration || ""}
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].thingsToDo[idx] = { ...todoObj, duration: e.target.value };
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-full bg-[#FAF8F5] border border-gold/10 px-2 py-1 outline-none text-xs rounded"
                                />
                              </div>
                              <div className="space-y-1">
                                <span className="font-bold text-[9px] uppercase text-royal/50 block">Price / Cost</span>
                                <input 
                                  type="text" value={todoObj.price || ""}
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].thingsToDo[idx] = { ...todoObj, price: e.target.value };
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-full bg-[#FAF8F5] border border-gold/10 px-2 py-1 outline-none text-xs rounded"
                                />
                              </div>
                              <div className="space-y-1">
                                <span className="font-bold text-[9px] uppercase text-royal/50 block">Difficulty</span>
                                <select 
                                  value={todoObj.difficulty || "Easy"}
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].thingsToDo[idx] = { ...todoObj, difficulty: e.target.value };
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-full bg-[#FAF8F5] border border-gold/10 px-2 py-1 outline-none text-xs rounded cursor-pointer"
                                >
                                  {["Easy", "Moderate", "Challenging"].map(d => (
                                    <option key={d} value={d}>{d}</option>
                                  ))}
                                </select>
                              </div>
                              <div className="flex items-center gap-2 pt-4">
                                <input 
                                  type="checkbox" id={`todo-feat-${idx}`}
                                  checked={todoObj.isFeatured === true}
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].thingsToDo[idx] = { ...todoObj, isFeatured: e.target.checked };
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-4 h-4 cursor-pointer accent-royal"
                                />
                                <label htmlFor={`todo-feat-${idx}`} className="font-bold uppercase tracking-wider block cursor-pointer">Featured</label>
                              </div>
                            </div>

                            {/* Image upload for activity */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end bg-white p-4 rounded-xl border border-gold/5">
                              <div className="md:col-span-8 space-y-1">
                                <label className="font-bold uppercase block text-royal/50 text-[9px]">Activity Image URL</label>
                                <input 
                                  type="text" value={todoObj.image || ""}
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].thingsToDo[idx] = { ...todoObj, image: e.target.value };
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2 outline-none rounded"
                                />
                              </div>
                              <div className="md:col-span-4 pb-0.5">
                                <CloudinaryUpload 
                                  onUploadComplete={(url) => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].thingsToDo[idx] = { ...todoObj, image: url };
                                    setEditState({ ...editState, cities: updatedCities });
                                  }} 
                                  label="Upload Activity Image"
                                  showStatus={showStatus}
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* CITY TAB 5: PLACES TO VISIT */}
              {citySubTab === "attractions" && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex justify-between items-center pb-2 border-b border-gold/10">
                    <span className="font-black uppercase tracking-widest text-[9px] text-royal block">Places to Visit (Attractions)</span>
                    <button
                      type="button"
                      onClick={() => handleAddAttraction(editingCityIdx)}
                      className="bg-royal text-white border border-gold/10 font-bold text-[9px] tracking-wider uppercase px-2.5 py-1.5 rounded transition cursor-pointer"
                    >
                      + Add Place / Monument
                    </button>
                  </div>

                  {(!editState.cities[editingCityIdx].attractions || editState.cities[editingCityIdx].attractions.length === 0) ? (
                    <div className="py-12 text-center text-royal/40 italic bg-white rounded-xl border border-dashed border-gold/20">
                      No attractions configured.
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {editState.cities[editingCityIdx].attractions.map((attr: any, idx: number) => {
                        const attrNameObj = typeof attr.name === "object" && attr.name !== null ? attr.name : { en: attr.name || "", es: "", pt: "" };
                        const attrDescObj = typeof attr.desc === "object" && attr.desc !== null ? attr.desc : { en: attr.desc || "", es: "", pt: "" };
                        return (
                          <div key={idx} className="bg-white border border-gold/15 p-5 rounded-2xl space-y-4 relative shadow-sm text-xs">
                            <div className="flex justify-between items-center pb-2 border-b border-gold/10">
                              <span className="font-bold text-royal text-xs">Place #{idx + 1}: {attrNameObj.en || "(New)"}</span>
                              <button
                                type="button"
                                onClick={() => {
                                  const updatedCities = [...editState.cities];
                                  updatedCities[editingCityIdx].attractions = updatedCities[editingCityIdx].attractions.filter((_: any, i: number) => i !== idx);
                                  setEditState({ ...editState, cities: updatedCities });
                                }}
                                className="text-red-500 hover:text-red-700 font-bold uppercase text-[9px]"
                              >
                                Remove Place
                              </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-1">
                                <span className="font-bold text-royal/50 uppercase text-[9px] block">Name Translations</span>
                                {["en", "es", "pt"].map(l => (
                                  <input
                                    key={l} type="text" placeholder={l.toUpperCase() + " Name"}
                                    value={attrNameObj[l] || ""}
                                    onChange={e => {
                                      const updatedCities = [...editState.cities];
                                      updatedCities[editingCityIdx].attractions[idx].name = { ...attrNameObj, [l]: e.target.value };
                                      setEditState({ ...editState, cities: updatedCities });
                                    }}
                                    className="w-full bg-[#FAF8F5] border border-gold/10 px-2.5 py-1.5 outline-none rounded"
                                  />
                                ))}
                              </div>
                              <div className="space-y-1">
                                <span className="font-bold text-royal/50 uppercase text-[9px] block">Description Translations</span>
                                {["en", "es", "pt"].map(l => (
                                  <input
                                    key={l} type="text" placeholder={l.toUpperCase() + " Description"}
                                    value={attrDescObj[l] || ""}
                                    onChange={e => {
                                      const updatedCities = [...editState.cities];
                                      updatedCities[editingCityIdx].attractions[idx].desc = { ...attrDescObj, [l]: e.target.value };
                                      setEditState({ ...editState, cities: updatedCities });
                                    }}
                                    className="w-full bg-[#FAF8F5] border border-gold/10 px-2.5 py-1.5 outline-none rounded"
                                  />
                                ))}
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                              <div className="space-y-1">
                                <span className="font-bold text-[9px] uppercase text-royal/50 block">Location (e.g. Center)</span>
                                <input 
                                  type="text" value={attr.location || ""}
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].attractions[idx].location = e.target.value;
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-full bg-[#FAF8F5] border border-gold/10 px-2 py-1 outline-none text-xs rounded"
                                />
                              </div>
                              <div className="space-y-1">
                                <span className="font-bold text-[9px] uppercase text-royal/50 block">Opening Hours</span>
                                <input 
                                  type="text" value={attr.openingHours || ""}
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].attractions[idx].openingHours = e.target.value;
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-full bg-[#FAF8F5] border border-gold/10 px-2 py-1 outline-none text-xs rounded"
                                />
                              </div>
                              <div className="space-y-1">
                                <span className="font-bold text-[9px] uppercase text-royal/50 block">Entry Fee</span>
                                <input 
                                  type="text" value={attr.entryFee || ""}
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].attractions[idx].entryFee = e.target.value;
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-full bg-[#FAF8F5] border border-gold/10 px-2 py-1 outline-none text-xs rounded"
                                />
                              </div>
                              <div className="flex gap-4 pt-4">
                                <div className="flex items-center gap-1.5">
                                  <input 
                                    type="checkbox" id={`unesco-${idx}`}
                                    checked={attr.isUNESCO === true}
                                    onChange={e => {
                                      const updatedCities = [...editState.cities];
                                      updatedCities[editingCityIdx].attractions[idx].isUNESCO = e.target.checked;
                                      setEditState({ ...editState, cities: updatedCities });
                                    }}
                                    className="w-4 h-4 cursor-pointer accent-royal"
                                  />
                                  <label htmlFor={`unesco-${idx}`} className="font-bold uppercase tracking-wider block cursor-pointer">UNESCO</label>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <input 
                                    type="checkbox" id={`attr-feat-${idx}`}
                                    checked={attr.isFeatured === true}
                                    onChange={e => {
                                      const updatedCities = [...editState.cities];
                                      updatedCities[editingCityIdx].attractions[idx].isFeatured = e.target.checked;
                                      setEditState({ ...editState, cities: updatedCities });
                                    }}
                                    className="w-4 h-4 cursor-pointer accent-royal"
                                  />
                                  <label htmlFor={`attr-feat-${idx}`} className="font-bold uppercase tracking-wider block cursor-pointer">Featured</label>
                                </div>
                              </div>
                            </div>

                            {/* Image upload for attraction */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end bg-white p-4 rounded-xl border border-gold/5">
                              <div className="md:col-span-8 space-y-1">
                                <label className="font-bold uppercase block text-royal/50 text-[9px]">Photo URL</label>
                                <input 
                                  type="text" value={attr.image || ""}
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].attractions[idx].image = e.target.value;
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2 outline-none rounded"
                                />
                              </div>
                              <div className="md:col-span-4 pb-0.5">
                                <CloudinaryUpload 
                                  onUploadComplete={(url) => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].attractions[idx].image = url;
                                    setEditState({ ...editState, cities: updatedCities });
                                  }} 
                                  label="Upload Attraction Image"
                                  showStatus={showStatus}
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* CITY TAB 6: EXPERIENCES */}
              {citySubTab === "experiences" && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex justify-between items-center">
                    <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Premium / Curated Experiences</span>
                    <button
                      type="button" onClick={() => handleAddCityExperience(editingCityIdx)}
                      className="bg-gold/15 text-royal border border-gold/25 font-bold text-[9px] tracking-wider uppercase px-3 py-1.5 rounded transition hover:bg-gold hover:text-royal cursor-pointer"
                    >
                      + Add Experience
                    </button>
                  </div>

                  {(!editState.cities[editingCityIdx].experiences || editState.cities[editingCityIdx].experiences.length === 0) ? (
                    <div className="py-12 text-center text-royal/40 italic bg-white rounded-xl border border-dashed border-gold/20">
                      No premium experiences configured.
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {editState.cities[editingCityIdx].experiences.map((exp: any, idx: number) => (
                        <div key={idx} className="bg-white border border-gold/15 p-5 rounded-2xl space-y-4 relative shadow-sm">
                          <div className="flex justify-between items-center pb-2 border-b border-gold/10">
                            <span className="font-bold text-royal text-xs">Experience #{idx + 1}</span>
                            <button
                              type="button" onClick={() => {
                                const updatedCities = [...editState.cities];
                                updatedCities[editingCityIdx].experiences = updatedCities[editingCityIdx].experiences.filter((_: any, i: number) => i !== idx);
                                setEditState({ ...editState, cities: updatedCities });
                              }}
                              className="text-red-500 hover:text-red-700 font-bold text-[9px] uppercase tracking-wider"
                            >
                              Remove Experience
                            </button>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <span className="font-bold text-royal/50 uppercase text-[9px] block">Title</span>
                              {["en", "es", "pt"].map(l => (
                                <input
                                  key={l} type="text" placeholder={l.toUpperCase() + " Title"}
                                  value={exp.title?.[l] || ""}
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].experiences[idx].title = { ...(updatedCities[editingCityIdx].experiences[idx].title || {}), [l]: e.target.value };
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-full bg-[#FAF8F5] border border-gold/10 px-2.5 py-1.5 outline-none rounded"
                                />
                              ))}
                            </div>
                            <div className="space-y-1">
                              <span className="font-bold text-royal/50 uppercase text-[9px] block">Description</span>
                              {["en", "es", "pt"].map(l => (
                                <input
                                  key={l} type="text" placeholder={l.toUpperCase() + " Description"}
                                  value={exp.desc?.[l] || ""}
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].experiences[idx].desc = { ...(updatedCities[editingCityIdx].experiences[idx].desc || {}), [l]: e.target.value };
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-full bg-[#FAF8F5] border border-gold/10 px-2.5 py-1.5 outline-none rounded"
                                />
                              ))}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                            <div className="space-y-1">
                              <span className="font-bold text-[9px] uppercase text-royal/50 block">Duration</span>
                              <input 
                                type="text" value={exp.duration || ""}
                                onChange={e => {
                                  const updatedCities = [...editState.cities];
                                  updatedCities[editingCityIdx].experiences[idx].duration = e.target.value;
                                  setEditState({ ...editState, cities: updatedCities });
                                }}
                                className="w-full bg-[#FAF8F5] border border-gold/10 px-2 py-1 outline-none text-xs rounded"
                              />
                            </div>
                            <div className="space-y-1">
                              <span className="font-bold text-[9px] uppercase text-royal/50 block">Price</span>
                              <input 
                                type="text" value={exp.price || ""}
                                onChange={e => {
                                  const updatedCities = [...editState.cities];
                                  updatedCities[editingCityIdx].experiences[idx].price = e.target.value;
                                  setEditState({ ...editState, cities: updatedCities });
                                }}
                                className="w-full bg-[#FAF8F5] border border-gold/10 px-2 py-1 outline-none text-xs rounded"
                              />
                            </div>
                            <div className="flex gap-4 pt-4">
                              <div className="flex items-center gap-1.5">
                                <input 
                                  type="checkbox" id={`booking-${idx}`}
                                  checked={exp.bookingAvailable === true}
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].experiences[idx].bookingAvailable = e.target.checked;
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-4 h-4 cursor-pointer accent-royal"
                                />
                                <label htmlFor={`booking-${idx}`} className="font-bold uppercase tracking-wider block cursor-pointer">Booking Available</label>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <input 
                                  type="checkbox" id={`exp-feat-${idx}`}
                                  checked={exp.isFeatured === true}
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].experiences[idx].isFeatured = e.target.checked;
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-4 h-4 cursor-pointer accent-royal"
                                />
                                <label htmlFor={`exp-feat-${idx}`} className="font-bold uppercase tracking-wider block cursor-pointer">Featured</label>
                              </div>
                            </div>
                          </div>

                          {/* Image upload for experience */}
                          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end bg-white p-4 rounded-xl border border-gold/5">
                            <div className="md:col-span-8 space-y-1">
                              <label className="font-bold uppercase block text-royal/50 text-[9px]">Photo URL</label>
                              <input 
                                type="text" value={exp.image || ""}
                                onChange={e => {
                                  const updatedCities = [...editState.cities];
                                  updatedCities[editingCityIdx].experiences[idx].image = e.target.value;
                                  setEditState({ ...editState, cities: updatedCities });
                                }}
                                className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2 outline-none rounded"
                              />
                            </div>
                            <div className="md:col-span-4 pb-0.5">
                              <CloudinaryUpload 
                                onUploadComplete={(url) => {
                                  const updatedCities = [...editState.cities];
                                  updatedCities[editingCityIdx].experiences[idx].image = url;
                                  setEditState({ ...editState, cities: updatedCities });
                                }} 
                                label="Upload Experience Image"
                                showStatus={showStatus}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* CITY TAB 7: BEST TIME TO VISIT */}
              {citySubTab === "bestTime" && (
                <div className="space-y-6 animate-fade-in bg-white p-6 rounded-2xl shadow-sm border border-gold/10">
                  <span className="font-black uppercase tracking-widest text-[9px] text-gold block border-b border-gold/5 pb-2">Best Time & Seasons</span>
                  
                  {/* Weather and Best time translations */}
                  {["bestTime", "weatherDesc"].map((field) => (
                    <div key={field} className="space-y-1.5">
                      <label className="font-bold uppercase block text-royal/60">{field.replace(/([A-Z])/g, " $1").trim()}</label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {["en", "es", "pt"].map((l) => (
                          <input
                            key={l} type="text"
                            value={editState.cities[editingCityIdx].bestTimeToVisit?.[field]?.[l] || ""}
                            onChange={e => {
                              const updatedCities = [...editState.cities];
                              if (!updatedCities[editingCityIdx].bestTimeToVisit) updatedCities[editingCityIdx].bestTimeToVisit = {};
                              updatedCities[editingCityIdx].bestTimeToVisit[field] = {
                                ...(updatedCities[editingCityIdx].bestTimeToVisit[field] || {}),
                                [l]: e.target.value
                              };
                              setEditState({ ...editState, cities: updatedCities });
                            }}
                            placeholder={`${field} in ${l.toUpperCase()}`}
                            className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2 outline-none rounded-lg text-xs"
                          />
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase block text-royal/60">Peak Season months</label>
                      <input 
                        type="text" value={editState.cities[editingCityIdx].bestTimeToVisit?.peakSeason || ""}
                        onChange={e => {
                          const updatedCities = [...editState.cities];
                          if (!updatedCities[editingCityIdx].bestTimeToVisit) updatedCities[editingCityIdx].bestTimeToVisit = {};
                          updatedCities[editingCityIdx].bestTimeToVisit.peakSeason = e.target.value;
                          setEditState({ ...editState, cities: updatedCities });
                        }}
                        className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2 outline-none rounded text-xs"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase block text-royal/60">Shoulder Season months</label>
                      <input 
                        type="text" value={editState.cities[editingCityIdx].bestTimeToVisit?.shoulderSeason || ""}
                        onChange={e => {
                          const updatedCities = [...editState.cities];
                          if (!updatedCities[editingCityIdx].bestTimeToVisit) updatedCities[editingCityIdx].bestTimeToVisit = {};
                          updatedCities[editingCityIdx].bestTimeToVisit.shoulderSeason = e.target.value;
                          setEditState({ ...editState, cities: updatedCities });
                        }}
                        className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2 outline-none rounded text-xs"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase block text-royal/60">Off Season months</label>
                      <input 
                        type="text" value={editState.cities[editingCityIdx].bestTimeToVisit?.offSeason || ""}
                        onChange={e => {
                          const updatedCities = [...editState.cities];
                          if (!updatedCities[editingCityIdx].bestTimeToVisit) updatedCities[editingCityIdx].bestTimeToVisit = {};
                          updatedCities[editingCityIdx].bestTimeToVisit.offSeason = e.target.value;
                          setEditState({ ...editState, cities: updatedCities });
                        }}
                        className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2 outline-none rounded text-xs"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* CITY TAB 8: TRAVEL INFORMATION */}
              {citySubTab === "travelInfo" && (
                <div className="space-y-6 animate-fade-in bg-white p-6 rounded-2xl shadow-sm border border-gold/10">
                  <span className="font-black uppercase tracking-widest text-[9px] text-gold block border-b border-gold/5 pb-2">Reachability & Practical Guidelines</span>
                  
                  <div className="space-y-3">
                    <span className="font-bold text-[9px] uppercase tracking-wider text-royal/60 block">How to Reach (EN/ES/PT)</span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {["en", "es", "pt"].map(l => (
                        <textarea
                          key={l} value={editState.cities[editingCityIdx].travelInfo?.howToReach?.[l] || ""}
                          onChange={e => {
                            const updatedCities = [...editState.cities];
                            if (!updatedCities[editingCityIdx].travelInfo) updatedCities[editingCityIdx].travelInfo = {};
                            updatedCities[editingCityIdx].travelInfo.howToReach = {
                              ...(updatedCities[editingCityIdx].travelInfo.howToReach || {}),
                              [l]: e.target.value
                            };
                            setEditState({ ...editState, cities: updatedCities });
                          }}
                          placeholder={l.toUpperCase() + " Reach instructions..."}
                          className="w-full h-16 bg-[#FAF8F5] border border-gold/10 p-2 outline-none rounded text-xs"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase block text-royal/60">Nearest Airport</label>
                      <input 
                        type="text" value={editState.cities[editingCityIdx].travelInfo?.nearestAirport || ""}
                        onChange={e => {
                          const updatedCities = [...editState.cities];
                          if (!updatedCities[editingCityIdx].travelInfo) updatedCities[editingCityIdx].travelInfo = {};
                          updatedCities[editingCityIdx].travelInfo.nearestAirport = e.target.value;
                          setEditState({ ...editState, cities: updatedCities });
                        }}
                        className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2 outline-none rounded text-xs"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase block text-royal/60">Nearest Railway Station</label>
                      <input 
                        type="text" value={editState.cities[editingCityIdx].travelInfo?.nearestRailway || ""}
                        onChange={e => {
                          const updatedCities = [...editState.cities];
                          if (!updatedCities[editingCityIdx].travelInfo) updatedCities[editingCityIdx].travelInfo = {};
                          updatedCities[editingCityIdx].travelInfo.nearestRailway = e.target.value;
                          setEditState({ ...editState, cities: updatedCities });
                        }}
                        className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2 outline-none rounded text-xs"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase block text-royal/60">Average Temperature (e.g. 24°C)</label>
                      <input 
                        type="text" value={editState.cities[editingCityIdx].travelInfo?.avgTemp || ""}
                        onChange={e => {
                          const updatedCities = [...editState.cities];
                          if (!updatedCities[editingCityIdx].travelInfo) updatedCities[editingCityIdx].travelInfo = {};
                          updatedCities[editingCityIdx].travelInfo.avgTemp = e.target.value;
                          setEditState({ ...editState, cities: updatedCities });
                        }}
                        className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2 outline-none rounded text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase block text-royal/60">Local Language</label>
                      <input 
                        type="text" value={editState.cities[editingCityIdx].travelInfo?.localLanguage || ""}
                        onChange={e => {
                          const updatedCities = [...editState.cities];
                          if (!updatedCities[editingCityIdx].travelInfo) updatedCities[editingCityIdx].travelInfo = {};
                          updatedCities[editingCityIdx].travelInfo.localLanguage = e.target.value;
                          setEditState({ ...editState, cities: updatedCities });
                        }}
                        className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2 outline-none rounded text-xs"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase block text-royal/60">Currency Code</label>
                      <input 
                        type="text" value={editState.cities[editingCityIdx].travelInfo?.currency || "INR"}
                        onChange={e => {
                          const updatedCities = [...editState.cities];
                          if (!updatedCities[editingCityIdx].travelInfo) updatedCities[editingCityIdx].travelInfo = {};
                          updatedCities[editingCityIdx].travelInfo.currency = e.target.value;
                          setEditState({ ...editState, cities: updatedCities });
                        }}
                        className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2 outline-none rounded text-xs"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase block text-royal/60">Time Zone</label>
                      <input 
                        type="text" value={editState.cities[editingCityIdx].travelInfo?.timeZone || "IST (UTC+5:30)"}
                        onChange={e => {
                          const updatedCities = [...editState.cities];
                          if (!updatedCities[editingCityIdx].travelInfo) updatedCities[editingCityIdx].travelInfo = {};
                          updatedCities[editingCityIdx].travelInfo.timeZone = e.target.value;
                          setEditState({ ...editState, cities: updatedCities });
                        }}
                        className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2 outline-none rounded text-xs"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase block text-royal/60">Recommended Stay</label>
                      <input 
                        type="text" placeholder="e.g. 2-3 Days"
                        value={editState.cities[editingCityIdx].travelInfo?.recommendedStay || ""}
                        onChange={e => {
                          const updatedCities = [...editState.cities];
                          if (!updatedCities[editingCityIdx].travelInfo) updatedCities[editingCityIdx].travelInfo = {};
                          updatedCities[editingCityIdx].travelInfo.recommendedStay = e.target.value;
                          setEditState({ ...editState, cities: updatedCities });
                        }}
                        className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2 outline-none rounded text-xs"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* CITY TAB 9: LOCAL FOOD */}
              {citySubTab === "food" && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex justify-between items-center">
                    <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Culinary Specialties & Dishes</span>
                    <button
                      type="button" onClick={() => handleAddCityFood(editingCityIdx)}
                      className="bg-gold/15 text-royal border border-gold/25 font-bold text-[9px] tracking-wider uppercase px-3 py-1.5 rounded transition hover:bg-gold hover:text-royal cursor-pointer"
                    >
                      + Add Food Dish
                    </button>
                  </div>

                  {(!editState.cities[editingCityIdx].localFoodDishes || editState.cities[editingCityIdx].localFoodDishes.length === 0) ? (
                    <div className="py-12 text-center text-royal/40 italic bg-white rounded-xl border border-dashed border-gold/20">
                      No local dishes configured.
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {editState.cities[editingCityIdx].localFoodDishes.map((food: any, idx: number) => (
                        <div key={idx} className="bg-white border border-gold/15 p-5 rounded-2xl space-y-4 relative shadow-sm">
                          <div className="flex justify-between items-center pb-2 border-b border-gold/10">
                            <span className="font-bold text-royal text-xs font-serif">Dish #{idx + 1}</span>
                            <button
                              type="button" onClick={() => {
                                const updatedCities = [...editState.cities];
                                updatedCities[editingCityIdx].localFoodDishes = updatedCities[editingCityIdx].localFoodDishes.filter((_: any, i: number) => i !== idx);
                                setEditState({ ...editState, cities: updatedCities });
                              }}
                              className="text-red-500 hover:text-red-700 font-bold text-[9px] uppercase tracking-wider"
                            >
                              Remove Dish
                            </button>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <span className="font-bold text-royal/50 uppercase text-[9px] block">Dish Name</span>
                              {["en", "es", "pt"].map(l => (
                                <input
                                  key={l} type="text" placeholder={l.toUpperCase() + " Name"}
                                  value={food.name?.[l] || ""}
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].localFoodDishes[idx].name = { ...(updatedCities[editingCityIdx].localFoodDishes[idx].name || {}), [l]: e.target.value };
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-full bg-[#FAF8F5] border border-gold/10 px-2.5 py-1.5 outline-none rounded"
                                />
                              ))}
                            </div>
                            <div className="space-y-1">
                              <span className="font-bold text-royal/50 uppercase text-[9px] block">Description</span>
                              {["en", "es", "pt"].map(l => (
                                <input
                                  key={l} type="text" placeholder={l.toUpperCase() + " Description"}
                                  value={food.desc?.[l] || ""}
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].localFoodDishes[idx].desc = { ...(updatedCities[editingCityIdx].localFoodDishes[idx].desc || {}), [l]: e.target.value };
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-full bg-[#FAF8F5] border border-gold/10 px-2.5 py-1.5 outline-none rounded"
                                />
                              ))}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                            <div className="space-y-1">
                              <span className="font-bold text-[9px] uppercase text-royal/50 block">Where to try (Restaurant)</span>
                              <input 
                                type="text" value={food.whereToTry || ""}
                                onChange={e => {
                                  const updatedCities = [...editState.cities];
                                  updatedCities[editingCityIdx].localFoodDishes[idx].whereToTry = e.target.value;
                                  setEditState({ ...editState, cities: updatedCities });
                                }}
                                className="w-full bg-[#FAF8F5] border border-gold/10 px-2 py-1 outline-none text-xs rounded"
                              />
                            </div>
                            <div className="flex gap-4 pt-4">
                              <div className="flex items-center gap-1.5">
                                <input 
                                  type="checkbox" id={`food-veg-${idx}`}
                                  checked={food.isVeg !== false}
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].localFoodDishes[idx].isVeg = e.target.checked;
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-4 h-4 cursor-pointer accent-royal"
                                />
                                <label htmlFor={`food-veg-${idx}`} className="font-bold uppercase tracking-wider block cursor-pointer">Vegetarian</label>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <input 
                                  type="checkbox" id={`food-rec-${idx}`}
                                  checked={food.recommended !== false}
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].localFoodDishes[idx].recommended = e.target.checked;
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-4 h-4 cursor-pointer accent-royal"
                                />
                                <label htmlFor={`food-rec-${idx}`} className="font-bold uppercase tracking-wider block cursor-pointer">Must-Try</label>
                              </div>
                            </div>
                          </div>

                          {/* Image upload for dish */}
                          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end bg-white p-4 rounded-xl border border-gold/5">
                            <div className="md:col-span-8 space-y-1">
                              <label className="font-bold uppercase block text-royal/50 text-[9px]">Dish Image URL</label>
                              <input 
                                type="text" value={food.image || ""}
                                onChange={e => {
                                  const updatedCities = [...editState.cities];
                                  updatedCities[editingCityIdx].localFoodDishes[idx].image = e.target.value;
                                  setEditState({ ...editState, cities: updatedCities });
                                }}
                                className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2 outline-none rounded"
                              />
                            </div>
                            <div className="md:col-span-4 pb-0.5">
                              <CloudinaryUpload 
                                onUploadComplete={(url) => {
                                  const updatedCities = [...editState.cities];
                                  updatedCities[editingCityIdx].localFoodDishes[idx].image = url;
                                  setEditState({ ...editState, cities: updatedCities });
                                }} 
                                label="Upload Food Image"
                                showStatus={showStatus}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* CITY TAB 10: WHERE TO STAY */}
              {citySubTab === "hotels" && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex justify-between items-center pb-2 border-b border-gold/10">
                    <span className="font-black uppercase tracking-widest text-[9px] text-royal/60 block">Boutique & Heritage Stays</span>
                    <button
                      type="button"
                      onClick={() => {
                        const updatedCities = [...editState.cities];
                        const currentList = updatedCities[editingCityIdx].hotels || [];
                        updatedCities[editingCityIdx].hotels = [...currentList, { name: "", tier: "Luxury", desc: { en: "", es: "", pt: "" }, location: "", priceRange: "", url: "", isFeatured: false, image: "" }];
                        setEditState({ ...editState, cities: updatedCities });
                      }}
                      className="bg-royal text-white border border-gold/10 font-bold text-[9px] tracking-wider uppercase px-2.5 py-1.5 rounded transition cursor-pointer"
                    >
                      + Add Stay Option
                    </button>
                  </div>

                  {(!editState.cities[editingCityIdx].hotels || editState.cities[editingCityIdx].hotels.length === 0) ? (
                    <div className="py-12 text-center text-royal/40 italic bg-white rounded-xl border border-dashed border-gold/20">
                      No hotels configured.
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {editState.cities[editingCityIdx].hotels.map((hotel: any, idx: number) => {
                        const hotelDescObj = typeof hotel.desc === "object" && hotel.desc !== null ? hotel.desc : { en: hotel.desc || "", es: "", pt: "" };
                        return (
                          <div key={idx} className="bg-white border border-gold/15 p-5 rounded-2xl space-y-4 relative shadow-sm">
                            <div className="flex justify-between items-center pb-2 border-b border-gold/10">
                              <span className="font-bold text-royal text-xs font-serif">Stay Option #{idx + 1}: {hotel.name || "(New)"}</span>
                              <button
                                type="button"
                                onClick={() => {
                                  const updatedCities = [...editState.cities];
                                  updatedCities[editingCityIdx].hotels = updatedCities[editingCityIdx].hotels.filter((_: any, i: number) => i !== idx);
                                  setEditState({ ...editState, cities: updatedCities });
                                }}
                                className="text-red-500 hover:text-red-700 font-bold uppercase text-[9px]"
                              >
                                Remove Stay
                              </button>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="space-y-1">
                                <label className="text-[9px] font-bold uppercase tracking-wider text-royal/40 block">Hotel Name</label>
                                <input 
                                  type="text" 
                                  value={hotel.name || ""}
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].hotels[idx].name = e.target.value;
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2 outline-none rounded-lg text-xs"
                                />
                              </div>
                              <div className="space-y-1">
                                <label className="text-[9px] font-bold uppercase tracking-wider text-royal/40 block">Tier Category</label>
                                <select 
                                  value={hotel.tier || "Luxury"}
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].hotels[idx].tier = e.target.value;
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2 outline-none rounded-lg text-xs h-9 cursor-pointer"
                                >
                                  {["Luxury", "Premium", "Mid-range", "Budget", "Boutique", "Heritage"].map(t => (
                                    <option key={t} value={t}>{t}</option>
                                  ))}
                                </select>
                              </div>
                              <div className="space-y-1">
                                <label className="text-[9px] font-bold uppercase tracking-wider text-royal/40 block">Price Range (e.g. $$$)</label>
                                <input 
                                  type="text" 
                                  value={hotel.priceRange || ""}
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].hotels[idx].priceRange = e.target.value;
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2 outline-none rounded-lg text-xs"
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-1">
                                <label className="text-[9px] font-bold uppercase tracking-wider text-royal/40 block">Location Details</label>
                                <input 
                                  type="text" 
                                  value={hotel.location || ""}
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].hotels[idx].location = e.target.value;
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2.5 outline-none rounded-lg text-xs"
                                />
                              </div>
                              <div className="space-y-1">
                                <label className="text-[9px] font-bold uppercase tracking-wider text-royal/40 block">Booking Website URL</label>
                                <input 
                                  type="text" 
                                  value={hotel.url || ""}
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].hotels[idx].url = e.target.value;
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2.5 outline-none rounded-lg text-xs"
                                />
                              </div>
                            </div>

                            <div className="space-y-1">
                              <label className="text-[9px] font-bold uppercase tracking-wider text-royal/40 block">Description Translations</label>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                {["en", "es", "pt"].map((lang) => (
                                  <div key={lang} className="space-y-0.5">
                                    <span className="text-[8px] uppercase font-bold text-[#C3AB85]">{lang} Description</span>
                                    <textarea 
                                      value={hotelDescObj[lang] || ""}
                                      onChange={e => {
                                        const updatedCities = [...editState.cities];
                                        updatedCities[editingCityIdx].hotels[idx].desc = { ...hotelDescObj, [lang]: e.target.value };
                                        setEditState({ ...editState, cities: updatedCities });
                                      }}
                                      className="w-full h-16 bg-[#FAF8F5] border border-gold/10 p-2 outline-none rounded-lg text-xs"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Image upload for hotel */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end bg-[#FAF8F5] p-4 rounded-xl border border-gold/5">
                              <div className="md:col-span-8 space-y-1">
                                <label className="font-bold uppercase block text-royal/50 text-[9px]">Hotel Image URL</label>
                                <input 
                                  type="text" value={hotel.image || ""}
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].hotels[idx].image = e.target.value;
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-full bg-white border border-gold/10 px-3 py-2 outline-none rounded"
                                />
                              </div>
                              <div className="md:col-span-4 pb-0.5">
                                <CloudinaryUpload 
                                  onUploadComplete={(url) => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].hotels[idx].image = url;
                                    setEditState({ ...editState, cities: updatedCities });
                                  }} 
                                  label="Upload Hotel Image"
                                  showStatus={showStatus}
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* CITY TAB 11: GETTING AROUND */}
              {citySubTab === "transport" && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex justify-between items-center">
                    <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Transportation Options</span>
                    <button
                      type="button" onClick={() => handleAddCityTransport(editingCityIdx)}
                      className="bg-gold/15 text-royal border border-gold/25 font-bold text-[9px] tracking-wider uppercase px-3 py-1.5 rounded transition hover:bg-gold hover:text-royal cursor-pointer"
                    >
                      + Add Transport
                    </button>
                  </div>

                  {(!editState.cities[editingCityIdx].gettingAround || editState.cities[editingCityIdx].gettingAround.length === 0) ? (
                    <div className="py-12 text-center text-royal/40 italic bg-white rounded-xl border border-dashed border-gold/20">
                      No transportation options configured.
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {editState.cities[editingCityIdx].gettingAround.map((trans: any, idx: number) => (
                        <div key={idx} className="bg-white border border-gold/15 p-5 rounded-2xl space-y-4 relative shadow-sm">
                          <div className="flex justify-between items-center pb-2 border-b border-gold/10">
                            <span className="font-bold text-royal text-xs">Transport #{idx + 1}</span>
                            <button
                              type="button" onClick={() => {
                                const updatedCities = [...editState.cities];
                                updatedCities[editingCityIdx].gettingAround = updatedCities[editingCityIdx].gettingAround.filter((_: any, i: number) => i !== idx);
                                setEditState({ ...editState, cities: updatedCities });
                              }}
                              className="text-red-500 hover:text-red-700 font-bold text-[9px] uppercase tracking-wider"
                            >
                              Remove
                            </button>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-1">
                              <span className="font-bold text-royal/50 uppercase text-[9px] block">Transport Type (e.g. Tuk Tuk)</span>
                              <input 
                                type="text" value={trans.transportType || ""}
                                onChange={e => {
                                  const updatedCities = [...editState.cities];
                                  updatedCities[editingCityIdx].gettingAround[idx].transportType = e.target.value;
                                  setEditState({ ...editState, cities: updatedCities });
                                }}
                                className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2 outline-none rounded text-xs"
                              />
                            </div>
                            <div className="space-y-1">
                              <span className="font-bold text-royal/50 uppercase text-[9px] block">Price Range (e.g. $)</span>
                              <input 
                                type="text" value={trans.priceRange || ""}
                                onChange={e => {
                                  const updatedCities = [...editState.cities];
                                  updatedCities[editingCityIdx].gettingAround[idx].priceRange = e.target.value;
                                  setEditState({ ...editState, cities: updatedCities });
                                }}
                                className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2 outline-none rounded text-xs"
                              />
                            </div>
                            <div className="flex items-center gap-2 pt-6">
                              <input 
                                type="checkbox" id={`trans-rec-${idx}`}
                                checked={trans.recommended === true}
                                onChange={e => {
                                  const updatedCities = [...editState.cities];
                                  updatedCities[editingCityIdx].gettingAround[idx].recommended = e.target.checked;
                                  setEditState({ ...editState, cities: updatedCities });
                                }}
                                className="w-4 h-4 cursor-pointer accent-royal"
                              />
                              <label htmlFor={`trans-rec-${idx}`} className="font-bold uppercase tracking-wider block cursor-pointer">Recommended</label>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <span className="font-bold text-royal/50 uppercase text-[9px] block">Title translations</span>
                              {["en", "es", "pt"].map(l => (
                                <input
                                  key={l} type="text" placeholder={l.toUpperCase() + " Title"}
                                  value={trans.title?.[l] || ""}
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].gettingAround[idx].title = { ...(updatedCities[editingCityIdx].gettingAround[idx].title || {}), [l]: e.target.value };
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-full bg-[#FAF8F5] border border-gold/10 px-2.5 py-1.5 outline-none rounded"
                                />
                              ))}
                            </div>
                            <div className="space-y-1">
                              <span className="font-bold text-royal/50 uppercase text-[9px] block">Description translations</span>
                              {["en", "es", "pt"].map(l => (
                                <input
                                  key={l} type="text" placeholder={l.toUpperCase() + " Description"}
                                  value={trans.desc?.[l] || ""}
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].gettingAround[idx].desc = { ...(updatedCities[editingCityIdx].gettingAround[idx].desc || {}), [l]: e.target.value };
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-full bg-[#FAF8F5] border border-gold/10 px-2.5 py-1.5 outline-none rounded"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* CITY TAB 12: GALLERY */}
              {citySubTab === "gallery" && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex justify-between items-center">
                    <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Photo Gallery Images</span>
                    <button
                      type="button" onClick={() => handleAddCityGallery(editingCityIdx)}
                      className="bg-gold/15 text-royal border border-gold/25 font-bold text-[9px] tracking-wider uppercase px-3 py-1.5 rounded transition hover:bg-gold hover:text-royal cursor-pointer"
                    >
                      + Add Image
                    </button>
                  </div>

                  {(!editState.cities[editingCityIdx].gallery || editState.cities[editingCityIdx].gallery.length === 0) ? (
                    <div className="py-12 text-center text-royal/40 italic bg-white rounded-xl border border-dashed border-gold/20">
                      No photos added.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {editState.cities[editingCityIdx].gallery.map((img: any, idx: number) => {
                        const imgObj = typeof img === 'string' ? { url: img, title: "", alt: "", caption: "", displayOrder: idx + 1 } : img;
                        return (
                          <div key={idx} className="bg-white border border-gold/15 p-4 rounded-2xl space-y-4 shadow-sm">
                            <div className="flex justify-between items-center pb-2 border-b border-gold/10">
                              <span className="font-bold text-royal/60 text-[10px]">Photo #{idx + 1}</span>
                              <button
                                type="button" onClick={() => {
                                  const updatedCities = [...editState.cities];
                                  updatedCities[editingCityIdx].gallery = updatedCities[editingCityIdx].gallery.filter((_: any, i: number) => i !== idx);
                                  setEditState({ ...editState, cities: updatedCities });
                                }}
                                className="text-red-500 hover:text-red-700 font-bold uppercase text-[9px]"
                              >
                                Delete Image
                              </button>
                            </div>

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
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].gallery[idx] = { ...imgObj, url: e.target.value };
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-full bg-[#FAF8F5] border border-gold/10 px-2.5 py-1.5 outline-none rounded text-xs"
                                />
                                <CloudinaryUpload 
                                  onUploadComplete={(url) => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].gallery[idx] = { ...imgObj, url };
                                    setEditState({ ...editState, cities: updatedCities });
                                  }} 
                                  label="Upload"
                                  showStatus={showStatus}
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                              <div className="space-y-1">
                                <span className="font-bold text-[8px] uppercase text-royal/50 block">Title</span>
                                <input 
                                  type="text" value={imgObj.title || ""}
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].gallery[idx] = { ...imgObj, title: e.target.value };
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-[#FAF8F5] border border-gold/10 px-2 py-1 outline-none text-xs rounded"
                                />
                              </div>
                              <div className="space-y-1">
                                <span className="font-bold text-[8px] uppercase text-royal/50 block">Alt Text</span>
                                <input 
                                  type="text" value={imgObj.alt || ""}
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].gallery[idx] = { ...imgObj, alt: e.target.value };
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-[#FAF8F5] border border-gold/10 px-2 py-1 outline-none text-xs rounded"
                                />
                              </div>
                              <div className="space-y-1">
                                <span className="font-bold text-[8px] uppercase text-royal/50 block">Display Order</span>
                                <input 
                                  type="number" value={imgObj.displayOrder || 1}
                                  onChange={e => {
                                    const updatedCities = [...editState.cities];
                                    updatedCities[editingCityIdx].gallery[idx] = { ...imgObj, displayOrder: parseInt(e.target.value) || 1 };
                                    setEditState({ ...editState, cities: updatedCities });
                                  }}
                                  className="w-[#FAF8F5] border border-gold/10 px-2 py-1 outline-none text-xs rounded"
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* CITY TAB 13: FAQS */}
              {citySubTab === "faqs" && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex justify-between items-center">
                    <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Multilingual FAQs</span>
                    <button
                      type="button" onClick={() => handleAddCityFAQ(editingCityIdx)}
                      className="bg-gold/15 text-royal border border-gold/25 font-bold text-[9px] tracking-wider uppercase px-3 py-1.5 rounded transition hover:bg-gold hover:text-royal cursor-pointer"
                    >
                      + Add FAQ
                    </button>
                  </div>

                  {(!editState.cities[editingCityIdx].faqs || editState.cities[editingCityIdx].faqs.length === 0) ? (
                    <div className="py-12 text-center text-royal/40 italic bg-white rounded-xl border border-dashed border-gold/20">
                      No FAQs configured.
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {editState.cities[editingCityIdx].faqs.map((faq: any, idx: number) => (
                        <div key={idx} className="border border-gold/10 bg-white p-5 rounded-2xl space-y-4 relative shadow-sm">
                          <div className="flex justify-between items-center pb-2 border-b border-gold/10">
                            <span className="font-bold text-royal text-xs font-serif">FAQ Question #{idx + 1}</span>
                            <button
                              type="button" onClick={() => {
                                const updatedCities = [...editState.cities];
                                updatedCities[editingCityIdx].faqs = updatedCities[editingCityIdx].faqs.filter((_: any, i: number) => i !== idx);
                                setEditState({ ...editState, cities: updatedCities });
                              }}
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
                                    onChange={e => {
                                      const updatedCities = [...editState.cities];
                                      updatedCities[editingCityIdx].faqs[idx].q = { ...(updatedFaqObj(updatedCities[editingCityIdx].faqs[idx]).q || {}), [l]: e.target.value };
                                      setEditState({ ...editState, cities: updatedCities });
                                    }}
                                    className="w-full bg-[#FAF8F5] border border-[#C3AB85]/15 px-3 py-2 outline-none rounded-lg text-xs"
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
                                    onChange={e => {
                                      const updatedCities = [...editState.cities];
                                      updatedCities[editingCityIdx].faqs[idx].a = { ...(updatedFaqObj(updatedCities[editingCityIdx].faqs[idx]).a || {}), [l]: e.target.value };
                                      setEditState({ ...editState, cities: updatedCities });
                                    }}
                                    className="w-full h-20 bg-[#FAF8F5] border border-[#C3AB85]/15 p-3 outline-none rounded-lg text-xs"
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

              {/* CITY TAB 14: TRAVEL TIPS */}
              {citySubTab === "tips" && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex justify-between items-center">
                    <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Practical Travel Tips</span>
                    <button
                      type="button" onClick={() => handleAddCityTip(editingCityIdx)}
                      className="bg-gold/15 text-royal border border-gold/25 font-bold text-[9px] tracking-wider uppercase px-3 py-1.5 rounded transition hover:bg-gold hover:text-royal cursor-pointer"
                    >
                      + Add Travel Tip
                    </button>
                  </div>

                  {(!editState.cities[editingCityIdx].travelTips || editState.cities[editingCityIdx].travelTips.length === 0) ? (
                    <div className="py-12 text-center text-royal/40 italic bg-white rounded-xl border border-dashed border-gold/20">
                      No tips configured.
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {editState.cities[editingCityIdx].travelTips.map((tip: any, idx: number) => {
                        const tipObj = typeof tip === "object" && tip !== null && tip.title ? tip : { title: { en: typeof tip === 'string' ? tip : (tip.en || ""), es: "", pt: "" }, desc: { en: "", es: "", pt: "" }, icon: "Info", displayOrder: idx + 1 };
                        return (
                          <div key={idx} className="bg-white border border-gold/15 p-5 rounded-2xl space-y-4 relative shadow-sm">
                            <div className="flex justify-between items-center pb-2 border-b border-gold/10">
                              <span className="font-bold text-royal text-xs">Tip Box #{idx + 1}</span>
                              <button
                                type="button" onClick={() => {
                                  const updatedCities = [...editState.cities];
                                  updatedCities[editingCityIdx].travelTips = updatedCities[editingCityIdx].travelTips.filter((_: any, i: number) => i !== idx);
                                  setEditState({ ...editState, cities: updatedCities });
                                }}
                                className="text-red-500 hover:text-red-700 font-bold text-[9px] uppercase tracking-wider"
                              >
                                Remove Tip
                              </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-1">
                                <span className="font-bold text-royal/50 uppercase text-[9px] block">Tip Title</span>
                                {["en", "es", "pt"].map(l => (
                                  <input
                                    key={l} type="text" placeholder={l.toUpperCase() + " Title"}
                                    value={tipObj.title?.[l] || ""}
                                    onChange={e => {
                                      const updatedCities = [...editState.cities];
                                      updatedCities[editingCityIdx].travelTips[idx] = { ...tipObj, title: { ...(tipObj.title || {}), [l]: e.target.value } };
                                      setEditState({ ...editState, cities: updatedCities });
                                    }}
                                    className="w-full bg-[#FAF8F5] border border-gold/10 px-2.5 py-1.5 outline-none rounded text-xs"
                                  />
                                ))}
                              </div>
                              <div className="space-y-1">
                                <span className="font-bold text-royal/50 uppercase text-[9px] block">Tip Description</span>
                                {["en", "es", "pt"].map(l => (
                                  <input
                                    key={l} type="text" placeholder={l.toUpperCase() + " Description"}
                                    value={tipObj.desc?.[l] || ""}
                                    onChange={e => {
                                      const updatedCities = [...editState.cities];
                                      updatedCities[editingCityIdx].travelTips[idx] = { ...tipObj, desc: { ...(tipObj.desc || {}), [l]: e.target.value } };
                                      setEditState({ ...editState, cities: updatedCities });
                                    }}
                                    className="w-full bg-[#FAF8F5] border border-gold/10 px-2.5 py-1.5 outline-none rounded text-xs"
                                  />
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

              {/* CITY TAB 15: RELATED TOURS */}
              {citySubTab === "related" && (
                <div className="space-y-6 animate-fade-in bg-white p-6 rounded-2xl shadow-sm border border-gold/10">
                  <span className="font-black uppercase tracking-widest text-[9px] text-gold block border-b border-gold/5 pb-2">Related Tour Packages</span>
                  <div className="space-y-2">
                    <label className="font-bold uppercase tracking-wider block text-royal/60">Select Related Tours (comma separated slugs)</label>
                    <input 
                      type="text" 
                      placeholder="e.g. golden-triangle-luxury, heritage-rajasthan"
                      value={Array.isArray(editState.cities[editingCityIdx].relatedTours) ? editState.cities[editingCityIdx].relatedTours.join(", ") : ""}
                      onChange={e => {
                        const updatedCities = [...editState.cities];
                        updatedCities[editingCityIdx].relatedTours = e.target.value.split(",").map(s => s.trim()).filter(Boolean);
                        setEditState({ ...editState, cities: updatedCities });
                      }}
                      className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2 outline-none rounded text-xs font-mono"
                    />
                  </div>
                </div>
              )}

              {/* CITY TAB 16: SEO CONFIG */}
              {citySubTab === "seo" && (
                <div className="space-y-6 animate-fade-in bg-white p-6 rounded-2xl shadow-sm border border-gold/10">
                  <span className="font-black uppercase tracking-widest text-[9px] text-gold block border-b border-gold/5 pb-2">Search Engine Optimization</span>
                  
                  {["title", "description", "keywords"].map((field) => (
                    <div key={field} className="space-y-2">
                      <label className="font-bold uppercase tracking-wider block text-royal/60">SEO {field}</label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {["en", "es", "pt"].map((l) => (
                          <input
                            key={l} type="text"
                            value={editState.cities[editingCityIdx].seo?.[field]?.[l] || ""}
                            onChange={e => {
                              const updatedCities = [...editState.cities];
                              if (!updatedCities[editingCityIdx].seo) updatedCities[editingCityIdx].seo = {};
                              updatedCities[editingCityIdx].seo[field] = {
                                ...(updatedCities[editingCityIdx].seo[field] || {}),
                                [l]: e.target.value
                              };
                              setEditState({ ...editState, cities: updatedCities });
                            }}
                            placeholder={`${field} in ${l.toUpperCase()}`}
                            className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2 outline-none rounded-lg text-xs"
                          />
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase block text-royal/60">OpenGraph Title</label>
                      <input 
                        type="text" 
                        value={editState.cities[editingCityIdx].seo?.ogTitle || ""}
                        onChange={e => {
                          const updatedCities = [...editState.cities];
                          if (!updatedCities[editingCityIdx].seo) updatedCities[editingCityIdx].seo = {};
                          updatedCities[editingCityIdx].seo.ogTitle = e.target.value;
                          setEditState({ ...editState, cities: updatedCities });
                        }}
                        className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2 outline-none rounded text-xs"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase block text-royal/60">OpenGraph Description</label>
                      <input 
                        type="text" 
                        value={editState.cities[editingCityIdx].seo?.ogDescription || ""}
                        onChange={e => {
                          const updatedCities = [...editState.cities];
                          if (!updatedCities[editingCityIdx].seo) updatedCities[editingCityIdx].seo = {};
                          updatedCities[editingCityIdx].seo.ogDescription = e.target.value;
                          setEditState({ ...editState, cities: updatedCities });
                        }}
                        className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2 outline-none rounded text-xs"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase block text-royal/60">Canonical URL</label>
                      <input 
                        type="text" 
                        value={editState.cities[editingCityIdx].seo?.canonicalUrl || ""}
                        onChange={e => {
                          const updatedCities = [...editState.cities];
                          if (!updatedCities[editingCityIdx].seo) updatedCities[editingCityIdx].seo = {};
                          updatedCities[editingCityIdx].seo.canonicalUrl = e.target.value;
                          setEditState({ ...editState, cities: updatedCities });
                        }}
                        className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2 outline-none rounded text-xs"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* CITY TAB 17: PUBLISH STATUS */}
              {citySubTab === "status" && (
                <div className="space-y-6 animate-fade-in bg-white p-6 rounded-2xl shadow-sm border border-gold/10">
                  <span className="font-black uppercase tracking-widest text-[9px] text-gold block border-b border-gold/5 pb-2">Publishing & Home Visibility</span>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase block text-royal/60">Visibility Status</label>
                      <select
                        value={editState.cities[editingCityIdx].status || "published"}
                        onChange={e => {
                          const updatedCities = [...editState.cities];
                          updatedCities[editingCityIdx].status = e.target.value;
                          setEditState({ ...editState, cities: updatedCities });
                        }}
                        className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold cursor-pointer"
                      >
                        <option value="published">Published</option>
                        <option value="draft">Draft</option>
                        <option value="unpublished">Unpublished</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-2 pt-6">
                      <input 
                        type="checkbox" id="city-featured-2"
                        checked={editState.cities[editingCityIdx].isFeatured === true}
                        onChange={e => {
                          const updatedCities = [...editState.cities];
                          updatedCities[editingCityIdx].isFeatured = e.target.checked;
                          setEditState({ ...editState, cities: updatedCities });
                        }}
                        className="w-5 h-5 cursor-pointer accent-royal"
                      />
                      <label htmlFor="city-featured-2" className="font-bold uppercase tracking-wider block cursor-pointer">Featured Destination (Home page section)</label>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Form Actions */}
          <div className="flex gap-4 pt-4 border-t border-beige/40">
            <button type="submit" className="bg-royal text-white px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer rounded-lg shadow-md hover:bg-gold hover:text-royal transition">
              Save State Destination
            </button>
            <button
              type="button"
              onClick={() => {
                setEditState(null);
                setEditingCityIdx(null);
              }}
              className="bg-beige/35 text-royal px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* STATES GRID LIST */}
      {!editState && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(states || []).map((state) => (
            <div key={state.slug} className="bg-white border border-beige/45 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between hover:border-gold/30 transition">
              {state.image && (
                <div className="h-40 w-full overflow-hidden bg-light-gray relative">
                  <img src={state.image} alt={state.title?.en} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
                </div>
              )}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] bg-royal/10 text-royal px-2.5 py-0.5 rounded uppercase font-bold tracking-wider border border-gold/15">{state.region} Region</span>
                    <span className="text-[10px] text-foreground/45 font-semibold">{(state.cities || []).length} Cities</span>
                  </div>
                  <h4 className="text-base font-bold text-royal font-serif line-clamp-1">{state.title?.en}</h4>
                  <p className="text-xs text-foreground/50 line-clamp-2 leading-relaxed font-light">{state.tagline?.en}</p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-beige/25 text-xs">
                  <button
                    onClick={() => {
                      setEditState(state);
                      setDestSubTab("general");
                    }}
                    className="text-royal hover:text-gold flex items-center gap-1 font-bold uppercase tracking-wider cursor-pointer"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                    <span>Open Editor</span>
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm(`Are you sure you want to delete destination state "${state.title?.en}"?`)) {
                        onDeleteState(state.slug);
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

// Local helper to avoid errors if FAQ structures are not fully initialized
function updatedFaqObj(faq: any) {
  if (!faq) return { q: {}, a: {} };
  return {
    q: faq.q || {},
    a: faq.a || {}
  };
}
