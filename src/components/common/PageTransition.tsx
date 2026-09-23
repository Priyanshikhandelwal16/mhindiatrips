"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setAnimating(true);
    setDisplayChildren(children);
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [pathname, children]);

  return (
    <div
      key={pathname}
      className={`transition-all duration-500 ease-out ${
        animating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
      }`}
    >
      {displayChildren}
    </div>
  );
}
