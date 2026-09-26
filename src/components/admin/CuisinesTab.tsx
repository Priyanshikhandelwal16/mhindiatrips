"use client";

import React, { useState, useEffect } from "react";
import { 
  Utensils, Plus, Edit2, Trash2, Image as ImageIcon, MapPin, Star, BookOpen 
} from "lucide-react";
import { CloudinaryUpload } from "./CloudinaryUpload";
import { getHighResImageUrl } from "@/lib/image-utils";

interface CuisinesTabProps {
  foods: any[];
  editFood: any;
  setEditFood: (food: any) => void;
  handleSaveFood: (e: React.FormEvent) => void;
  onDeleteFood: (slug: string) => void;
  showStatus: (text: string, type: "success" | "error") => void;
}

export default function CuisinesTab({
  foods,
  editFood,
  setEditFood,
  handleSaveFood,
  onDeleteFood,
  showStatus
}: CuisinesTabProps) {

  const [subTab, setSubTab] = useState<"general" | "details" | "ingredients" | "restaurants">("general");

  useEffect(() => {
    if (editFood) {
      setSubTab("general");
    }
  }, [editFood?.slug]);

  const handleAddIngredient = () => {
    const newIngredient = { en: "New ingredient / spice", es: "", pt: "" };
    const updated = [...(editFood.ingredients || []), newIngredient];
    setEditFood({ ...editFood, ingredients: updated });
  };

  const handleUpdateIngredient = (idx: number, val: any) => {
    const updated = [...(editFood.ingredients || [])];
    updated[idx] = val;
    setEditFood({ ...editFood, ingredients: updated });
  };

  const handleRemoveIngredient = (idx: number) => {
    const updated = (editFood.ingredients || []).filter((_: any, i: number) => i !== idx);
    setEditFood({ ...editFood, ingredients: updated });
  };

  const handleAddRestaurant = () => {
    const newRestaurant = { name: "Signature Restaurant Name", city: "Delhi" };
    const updated = [...(editFood.bestRestaurants || []), newRestaurant];
    setEditFood({ ...editFood, bestRestaurants: updated });
  };

  const handleUpdateRestaurant = (idx: number, field: "name" | "city", val: string) => {
    const updated = [...(editFood.bestRestaurants || [])];
    updated[idx] = {
      ...updated[idx],
      [field]: val
    };
    setEditFood({ ...editFood, bestRestaurants: updated });
  };

  const handleRemoveRestaurant = (idx: number) => {
    const updated = (editFood.bestRestaurants || []).filter((_: any, i: number) => i !== idx);
    setEditFood({ ...editFood, bestRestaurants: updated });
  };

  return (
    <div className="space-y-6 animate-fade-in text-xs text-royal">
      {/* Tab Header */}
      {!editFood && (
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-royal font-serif">Indian Food & Cuisines Catalog</h2>
            <p className="text-[10px] text-royal/40">Manage national recipes and regional delicacies highlighted across pages.</p>
          </div>
          <button
            onClick={() => setEditFood({ 
              title: { en: "", es: "", pt: "" }, 
              tagline: { en: "", es: "", pt: "" }, 
              description: { en: "", es: "", pt: "" }, 
              history: { en: "", es: "", pt: "" }, 
              origin: { en: "", es: "", pt: "" }, 
              region: "North",
              slug: "", 
              category: "North India", 
              image: "",
              ingredients: [],
              bestRestaurants: []
            })}
            className="bg-royal text-white border border-gold/20 hover:bg-gold hover:text-royal font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 flex items-center gap-1.5 transition cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Food Item</span>
          </button>
        </div>
      )}

      {/* FORM: ADD / EDIT CUISINE */}
      {editFood && (
        <form onSubmit={handleSaveFood} className="bg-white border border-gold/20 rounded-3xl p-8 shadow-md space-y-6">
          <div className="flex justify-between items-center border-b border-beige/40 pb-4">
            <h3 className="text-base font-bold font-serif">{editFood.slug ? `Edit Food Item: ${editFood.title?.en}` : "Create New Food Entry"}</h3>
            <button type="button" onClick={() => setEditFood(null)} className="text-royal/50 hover:text-royal font-bold">Cancel</button>
          </div>

          {/* Sub tabs configuration */}
          <div className="flex border-b border-gold/10 pb-2 mb-6 gap-2 flex-wrap">
            {[
              { id: "general", label: "General Config" },
              { id: "details", label: "Legacy & Origin Details" },
              { id: "ingredients", label: "Key Ingredients & Spices" },
              { id: "restaurants", label: "Dining Recommendations" }
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

          {/* TAB 1: GENERAL CONFIG */}
          {subTab === "general" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-1.5">
                  <label className="font-bold uppercase tracking-wider block">Slug (e.g. butter-chicken)</label>
                  <input 
                    type="text" 
                    required
                    disabled={foods.some(f => f.slug === editFood.slug)}
                    value={editFood.slug}
                    onChange={e => setEditFood({...editFood, slug: e.target.value.toLowerCase().replace(/\s+/g, "-")})}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50 disabled:opacity-60 disabled:cursor-not-allowed font-bold"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold uppercase tracking-wider block">Category (e.g. North India, South India)</label>
                  <input 
                    type="text" 
                    value={editFood.category}
                    onChange={e => setEditFood({...editFood, category: e.target.value})}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold uppercase tracking-wider block">Region (e.g. North, South, East, West)</label>
                  <input 
                    type="text" 
                    value={editFood.region || "North"}
                    onChange={e => setEditFood({...editFood, region: e.target.value})}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50"
                  />
                </div>
              </div>

              {/* Title translations */}
              <div className="space-y-3">
                <span className="font-black uppercase tracking-widest text-[9px] text-gold block font-serif">Food Item Name Translations</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["en", "es", "pt"].map((lang) => (
                    <div key={lang} className="space-y-1">
                      <label className="font-bold uppercase tracking-wider">Title ({lang.toUpperCase()})</label>
                      <input 
                        type="text" 
                        required
                        value={editFood.title?.[lang] || ""}
                        onChange={e => setEditFood({
                          ...editFood, 
                          title: { ...editFood.title, [lang]: e.target.value }
                        })}
                        className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2.5 outline-none rounded-lg focus:border-gold/50"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Tagline translations */}
              <div className="space-y-3">
                <span className="font-black uppercase tracking-widest text-[9px] text-gold block font-serif">Short Tagline Translations</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["en", "es", "pt"].map((lang) => (
                    <div key={lang} className="space-y-1">
                      <label className="font-bold uppercase tracking-wider">Tagline ({lang.toUpperCase()})</label>
                      <input 
                        type="text" 
                        value={editFood.tagline?.[lang] || ""}
                        onChange={e => setEditFood({
                          ...editFood, 
                          tagline: { ...(editFood.tagline || {}), [lang]: e.target.value }
                        })}
                        className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2.5 outline-none rounded-lg focus:border-gold/50"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Description translations */}
              <div className="space-y-3">
                <span className="font-black uppercase tracking-widest text-[9px] text-gold block font-serif">Short Overview Translations</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["en", "es", "pt"].map((lang) => (
                    <div key={lang} className="space-y-1">
                      <label className="font-bold uppercase tracking-wider">Description ({lang.toUpperCase()})</label>
                      <textarea 
                        value={editFood.description?.[lang] || ""}
                        onChange={e => setEditFood({
                          ...editFood, 
                          description: { ...(editFood.description || {}), [lang]: e.target.value }
                        })}
                        className="w-full h-24 bg-[#FAF8F5] border border-gold/15 p-3 outline-none rounded-lg focus:border-gold/50 text-xs"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Image URL */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                <div className="md:col-span-8 space-y-1.5">
                  <label className="font-bold uppercase tracking-wider block">Image URL</label>
                  <input 
                    type="text" 
                    value={editFood.image}
                    onChange={e => setEditFood({...editFood, image: e.target.value})}
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50"
                  />
                </div>
                <div className="md:col-span-4 pb-0.5">
                  <CloudinaryUpload 
                    onUploadComplete={(url) => setEditFood({ ...editFood, image: url })} 
                    label="Upload Food Photo"
                    showStatus={showStatus}
                    defaultSearch={editFood?.name?.en || editFood?.slug || ""}
                  />
                </div>
                {editFood.image && (
                  <div className="col-span-full h-36 w-full overflow-hidden border border-gold/10 rounded-2xl shadow-inner">
                    <img src={getHighResImageUrl(editFood.image)} alt="Dish review" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: LEGACY & DETAILS */}
          {subTab === "details" && (
            <div className="space-y-6">
              {/* Origin translations */}
              <div className="space-y-3">
                <span className="font-black uppercase tracking-widest text-[9px] text-gold block font-serif">Place of Origin Translations</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["en", "es", "pt"].map((lang) => (
                    <div key={lang} className="space-y-1">
                      <label className="font-bold uppercase tracking-wider">Origin ({lang.toUpperCase()})</label>
                      <input 
                        type="text" 
                        value={editFood.origin?.[lang] || ""}
                        onChange={e => setEditFood({
                          ...editFood, 
                          origin: { ...(editFood.origin || {}), [lang]: e.target.value }
                        })}
                        className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2.5 outline-none rounded-lg focus:border-gold/50"
                        placeholder="e.g. Punjab, Northern India"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* History translations */}
              <div className="space-y-3">
                <span className="font-black uppercase tracking-widest text-[9px] text-gold block font-serif">Heritage Chronicle & History</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["en", "es", "pt"].map((lang) => (
                    <div key={lang} className="space-y-1">
                      <label className="font-bold uppercase tracking-wider">History ({lang.toUpperCase()})</label>
                      <textarea 
                        value={editFood.history?.[lang] || ""}
                        onChange={e => setEditFood({
                          ...editFood, 
                          history: { ...(editFood.history || {}), [lang]: e.target.value }
                        })}
                        className="w-full h-32 bg-[#FAF8F5] border border-gold/15 p-3 outline-none rounded-lg focus:border-gold/50 text-xs"
                        placeholder="Detail the heritage, cultural importance, and history of this cuisine..."
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: KEY INGREDIENTS */}
          {subTab === "ingredients" && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Culinary Key Spices & Ingredients</span>
                <button
                  type="button"
                  onClick={handleAddIngredient}
                  className="bg-gold/15 text-royal border border-gold/25 font-bold text-[9px] tracking-wider uppercase px-3 py-1.5 rounded transition hover:bg-gold hover:text-royal"
                >
                  + Add Ingredient
                </button>
              </div>

              {(!editFood.ingredients || editFood.ingredients.length === 0) ? (
                <div className="py-6 text-center text-royal/40 italic bg-[#FAF8F5] rounded-xl border border-dashed border-gold/20">
                  No ingredients configured yet. Click "Add Ingredient" to describe key items.
                </div>
              ) : (
                <div className="space-y-4">
                  {editFood.ingredients.map((ing: any, idx: number) => {
                    const ingObj = typeof ing === "object" && ing !== null ? ing : { en: ing || "", es: "", pt: "" };
                    return (
                      <div key={idx} className="bg-[#FAF8F5] border border-gold/15 p-4 rounded-xl space-y-3">
                        <div className="flex justify-between items-center pb-2 border-b border-gold/5">
                          <span className="font-bold text-gold text-xs">Ingredient #{idx + 1}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveIngredient(idx)}
                            className="text-red-500 hover:text-red-700 font-bold text-[10px] uppercase tracking-wider"
                          >
                            Delete Item
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {["en", "es", "pt"].map((lang) => (
                            <div key={lang} className="space-y-1">
                              <label className="font-semibold text-royal/70 uppercase text-[9px] tracking-wider">Item Text ({lang.toUpperCase()})</label>
                              <input
                                type="text"
                                value={ingObj[lang] || ""}
                                onChange={(e) => {
                                  const newIng = { ...ingObj, [lang]: e.target.value };
                                  handleUpdateIngredient(idx, newIng);
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

          {/* TAB 4: RECOMMENDED RESTAURANTS */}
          {subTab === "restaurants" && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Signature Dining Recommendations</span>
                <button
                  type="button"
                  onClick={handleAddRestaurant}
                  className="bg-gold/15 text-royal border border-gold/25 font-bold text-[9px] tracking-wider uppercase px-3 py-1.5 rounded transition hover:bg-gold hover:text-royal"
                >
                  + Add Dining Spot
                </button>
              </div>

              {(!editFood.bestRestaurants || editFood.bestRestaurants.length === 0) ? (
                <div className="py-6 text-center text-royal/40 italic bg-[#FAF8F5] rounded-xl border border-dashed border-gold/20">
                  No restaurants configured yet. Click "Add Dining Spot" to outline vetted restaurants.
                </div>
              ) : (
                <div className="space-y-4">
                  {editFood.bestRestaurants.map((res: any, idx: number) => (
                    <div key={idx} className="bg-[#FAF8F5] border border-gold/15 p-4 rounded-xl space-y-4 shadow-sm">
                      <div className="flex justify-between items-center pb-2 border-b border-gold/5">
                        <span className="font-bold text-gold text-xs">Dining Spot #{idx + 1}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveRestaurant(idx)}
                          className="text-red-500 hover:text-red-700 font-bold text-[10px] uppercase tracking-wider"
                        >
                          Delete Spot
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="font-bold text-royal/70 uppercase text-[9px] tracking-wider">Restaurant Name</label>
                          <input 
                            type="text"
                            value={res.name || ""}
                            onChange={e => handleUpdateRestaurant(idx, "name", e.target.value)}
                            className="w-full bg-white border border-gold/10 px-3 py-2 outline-none rounded-lg focus:border-gold/50"
                            placeholder="e.g. Bukhara Restaurant"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="font-bold text-royal/70 uppercase text-[9px] tracking-wider">City Location</label>
                          <input 
                            type="text"
                            value={res.city || ""}
                            onChange={e => handleUpdateRestaurant(idx, "city", e.target.value)}
                            className="w-full bg-white border border-gold/10 px-3 py-2 outline-none rounded-lg focus:border-gold/50"
                            placeholder="e.g. New Delhi"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Form actions */}
          <div className="flex gap-4 pt-4 border-t border-beige/40">
            <button type="submit" className="bg-royal text-white px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer rounded-lg shadow-md hover:bg-gold hover:text-royal transition">
              Save Food Item
            </button>
            <button type="button" onClick={() => setEditFood(null)} className="bg-beige/35 text-royal px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer rounded-lg">
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* FOODS LIST DIRECTORY */}
      {!editFood && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(foods || []).map((food) => (
            <div key={food.slug} className="bg-white border border-beige/45 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between hover:border-gold/30 transition">
              <div className="h-40 w-full overflow-hidden bg-light-gray relative">
                <img src={getHighResImageUrl(food.image)} alt={food.title?.en} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
              </div>
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-1.5">
                  <span className="text-[8px] bg-royal/10 text-royal px-2.5 py-0.5 rounded uppercase font-bold tracking-wider border border-gold/15">{food.category}</span>
                  <h4 className="text-base font-bold text-royal font-serif line-clamp-1">{food.title?.en}</h4>
                  <p className="text-xs text-foreground/50 line-clamp-2 leading-relaxed font-light">{food.tagline?.en || food.description?.en}</p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-beige/25 text-xs">
                  <button
                    onClick={() => setEditFood(food)}
                    className="text-royal hover:text-gold flex items-center gap-1 font-bold uppercase tracking-wider cursor-pointer"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm(`Are you sure you want to delete ${food.title?.en}?`)) {
                        onDeleteFood(food.slug);
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
