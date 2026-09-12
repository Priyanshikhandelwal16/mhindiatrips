"use client";

import React from "react";
import { Printer } from "lucide-react";

interface PrintBrochureButtonProps {
  label: string;
}

export default function PrintBrochureButton({ label }: PrintBrochureButtonProps) {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== "undefined") {
          window.print();
        }
      }}
      className="inline-flex items-center gap-1.5 bg-[#FAF8F5] hover:bg-[#E2D9C8] text-[#0A2A1E] text-[11px] font-bold px-4 py-2 rounded-full border border-[#C5A862]/40 transition-colors cursor-pointer shadow-sm"
    >
      <Printer className="w-3.5 h-3.5 text-[#C5A862]" />
      <span>{label}</span>
    </button>
  );
}
