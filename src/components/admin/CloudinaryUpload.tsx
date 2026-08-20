"use client";

import React, { useState, useEffect } from "react";
import { Upload, Search, X, Loader2, Image as ImageIcon, Camera } from "lucide-react";

interface CloudinaryUploadProps {
  onUploadComplete: (url: string) => void;
  label?: string;
  showStatus?: (text: string, type: "success" | "error") => void;
  defaultSearch?: string;
}

export function CloudinaryUpload({ 
  onUploadComplete, 
  label = "Upload Image", 
  showStatus,
  defaultSearch = ""
}: CloudinaryUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [query, setQuery] = useState(defaultSearch);
  const [photos, setPhotos] = useState<any[]>([]);
  const [searching, setSearching] = useState(false);
  const [selectingPhotoId, setSelectingPhotoId] = useState<string | null>(null);

  // Sync query when defaultSearch prop changes
  useEffect(() => {
    if (defaultSearch) {
      setQuery(defaultSearch);
    }
  }, [defaultSearch]);

  // Run initial search when modal opens if we have a query
  useEffect(() => {
    if (isModalOpen && query) {
      handleSearch();
    }
  }, [isModalOpen]);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "mhindiatrips");
      formData.append("folder", "mhindiatrips");

      const res = await fetch("https://api.cloudinary.com/v1_1/irrjgm1b/image/upload", {
        method: "POST",
        body: formData
      });
      const data = await res.json();
      if (data.secure_url) {
        onUploadComplete(data.secure_url);
        if (showStatus) {
          showStatus("Image uploaded successfully!", "success");
        }
      } else {
        if (showStatus) {
          showStatus("Upload failed. Verify preset/Cloudinary configs.", "error");
        }
      }
    } catch (err) {
      console.error(err);
      if (showStatus) {
        showStatus("Error uploading image.", "error");
      }
    } finally {
      setUploading(false);
    }
  };

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;
    setSearching(true);
    try {
      const res = await fetch(`/api/image-search?query=${encodeURIComponent(query)}`);
      const data = await res.json();
      if (data.photos) {
        setPhotos(data.photos);
      } else {
        if (showStatus) showStatus("No photos found or search failed", "error");
      }
    } catch (err) {
      console.error(err);
      if (showStatus) showStatus("Error searching photos", "error");
    } finally {
      setSearching(false);
    }
  };

  const handleSelectPhoto = async (photo: any) => {
    setSelectingPhotoId(photo.id);
    try {
      const formData = new FormData();
      formData.append("file", photo.url);
      formData.append("upload_preset", "mhindiatrips");
      formData.append("folder", "mhindiatrips");

      const res = await fetch("https://api.cloudinary.com/v1_1/irrjgm1b/image/upload", {
        method: "POST",
        body: formData
      });
      const data = await res.json();
      if (data.secure_url) {
        onUploadComplete(data.secure_url);
        setIsModalOpen(false);
        if (showStatus) {
          showStatus("Stock image added and saved successfully!", "success");
        }
      } else {
        if (showStatus) {
          showStatus("Failed to process stock image upload.", "error");
        }
      }
    } catch (err) {
      console.error(err);
      if (showStatus) {
        showStatus("Error saving selected image.", "error");
      }
    } finally {
      setSelectingPhotoId(null);
    }
  };

  return (
    <div className="flex items-center gap-3">
      {/* Upload local file */}
      <label className="bg-gold/10 hover:bg-gold/20 border border-gold/30 text-royal hover:text-gold font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 cursor-pointer transition flex items-center gap-1.5 rounded-lg shadow-sm">
        <Upload className="w-3.5 h-3.5" />
        <span>{uploading ? "Uploading..." : label}</span>
        <input type="file" onChange={onChange} className="hidden" accept="image/*" disabled={uploading} />
      </label>

      {/* Search free stock images */}
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="bg-royal/5 hover:bg-royal/10 border border-royal/20 text-royal font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 transition flex items-center gap-1.5 rounded-lg shadow-sm cursor-pointer"
      >
        <Search className="w-3.5 h-3.5" />
        <span>Stock Photos</span>
      </button>

      {/* Premium Stock Search Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-royal/40 backdrop-blur-md z-[9999] flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-[#FAF8F5] border border-gold/35 shadow-2xl rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col relative text-royal">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-gold/15 flex justify-between items-center bg-white">
              <div>
                <h3 className="text-base font-bold font-serif flex items-center gap-2">
                  <Camera className="w-5 h-5 text-gold" />
                  <span>Curated Stock Photo Search</span>
                </h3>
                <p className="text-[10px] text-royal/50 mt-0.5">Find & instant-upload high quality royalty-free images powered by Unsplash.</p>
              </div>
              <button 
                type="button" 
                onClick={() => setIsModalOpen(false)}
                className="text-royal/40 hover:text-royal transition p-1 hover:bg-beige/10 rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="p-4 bg-[#F2EDE4]/30 border-b border-gold/10 flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-royal/40" />
                <input 
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search destinations, monuments, foods, etc. (e.g. Jaipur palace, Butter chicken)..."
                  className="w-full bg-white border border-gold/20 pl-10 pr-4 py-3 outline-none rounded-xl focus:border-gold text-xs shadow-inner"
                  autoFocus
                />
              </div>
              <button
                type="submit"
                disabled={searching}
                className="bg-royal hover:bg-gold text-white hover:text-royal font-bold text-[11px] tracking-wider uppercase px-6 py-3 rounded-xl transition flex items-center gap-1.5 disabled:opacity-50 cursor-pointer shadow-sm"
              >
                {searching ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : "Search"}
              </button>
            </form>

            {/* Image Grid / Content Area */}
            <div className="flex-1 overflow-y-auto p-6 min-h-[300px]">
              {searching ? (
                <div className="h-64 flex flex-col items-center justify-center gap-2.5">
                  <Loader2 className="w-8 h-8 text-gold animate-spin" />
                  <p className="text-[11px] text-royal/50 font-medium tracking-wide uppercase">Searching global stock libraries...</p>
                </div>
              ) : photos.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {photos.map((photo) => (
                    <div 
                      key={photo.id}
                      onClick={() => selectingPhotoId === null && handleSelectPhoto(photo)}
                      className={`group relative aspect-[4/3] rounded-xl overflow-hidden border border-gold/10 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-md hover:border-gold/50 ${
                        selectingPhotoId === photo.id ? "ring-2 ring-gold scale-95" : "hover:-translate-y-0.5"
                      }`}
                    >
                      <img 
                        src={photo.thumbnail} 
                        alt={photo.description} 
                        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-royal/80 via-royal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                        <span className="text-[9px] font-medium text-white/90 line-clamp-1 mb-1">{photo.description}</span>
                        <span className="text-[8px] text-gold/90 font-bold tracking-wide uppercase">By {photo.photographer}</span>
                      </div>

                      {/* Loading State Overlay */}
                      {selectingPhotoId === photo.id && (
                        <div className="absolute inset-0 bg-royal/80 backdrop-blur-[2px] flex flex-col items-center justify-center p-3 text-center">
                          <Loader2 className="w-5 h-5 text-gold animate-spin mb-1" />
                          <span className="text-[9px] text-white font-bold uppercase tracking-wider">Uploading...</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-64 flex flex-col items-center justify-center text-center p-6 bg-white border border-dashed border-gold/25 rounded-2xl">
                  <ImageIcon className="w-10 h-10 text-royal/20 mb-2" />
                  <h4 className="font-serif font-bold text-sm">Find the perfect travel image</h4>
                  <p className="text-[10px] text-royal/50 max-w-sm mt-1">Enter search terms above to explore millions of royalty-free luxury and culture photographs.</p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-white border-t border-gold/15 flex justify-between items-center text-[9px] text-royal/40">
              <span>All images are high-resolution, courtesy of Unsplash community photographers.</span>
              <span className="font-bold uppercase tracking-wider text-gold">MH India Trips</span>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
