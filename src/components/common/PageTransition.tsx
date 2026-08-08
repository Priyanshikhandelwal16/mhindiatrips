"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="animate-fade-in w-full flex-grow flex flex-col justify-between">
      {children}
    </div>
  );
}
