"use client";

import React from "react";

interface InquireButtonProps {
  className?: string;
  children: React.ReactNode;
}

export default function InquireButton({ className, children }: InquireButtonProps) {
  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent("open-inquiry-popup"))}
      className={className}
    >
      {children}
    </button>
  );
}
