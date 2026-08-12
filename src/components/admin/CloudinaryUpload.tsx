"use client";

import React, { useState } from "react";
import { Upload } from "lucide-react";

interface CloudinaryUploadProps {
  onUploadComplete: (url: string) => void;
  label?: string;
  showStatus?: (text: string, type: "success" | "error") => void;
}

export function CloudinaryUpload({ onUploadComplete, label = "Upload Image", showStatus }: CloudinaryUploadProps) {
  const [uploading, setUploading] = useState(false);

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

  return (
    <div className="flex items-center gap-3">
      <label className="bg-gold/10 hover:bg-gold/20 border border-gold/30 text-royal hover:text-gold font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 cursor-pointer transition flex items-center gap-1.5 rounded-lg shadow-sm">
        <Upload className="w-3.5 h-3.5" />
        <span>{uploading ? "Uploading..." : label}</span>
        <input type="file" onChange={onChange} className="hidden" accept="image/*" disabled={uploading} />
      </label>
    </div>
  );
}
