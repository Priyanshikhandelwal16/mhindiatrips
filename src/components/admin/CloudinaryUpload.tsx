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
    </div>
  );
}
