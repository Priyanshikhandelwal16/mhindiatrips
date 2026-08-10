"use client";

import React, { ReactNode, useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState<"fade-in" | "fade-out">("fade-in");
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      setTransitionStage("fade-out");

      const timeout = setTimeout(() => {
        setDisplayChildren(children);
        setTransitionStage("fade-in");
        prevPathname.current = pathname;
        window.scrollTo({ top: 0, behavior: "instant" });
      }, 300);

      return () => clearTimeout(timeout);
    } else {
      setDisplayChildren(children);
    }
  }, [pathname, children]);

  return (
    <div
      className={`page-transition w-full flex-grow flex flex-col justify-between ${
        transitionStage === "fade-in" ? "page-enter-active" : "page-exit-active"
      }`}
    >
      {displayChildren}
    </div>
  );
}
