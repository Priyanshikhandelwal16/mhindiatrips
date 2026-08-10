"use client";

import React, { useEffect, useRef, ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "left" | "right" | "scale";
}

/**
 * Reusable scroll-reveal wrapper using IntersectionObserver.
 * Adds the `.visible` class when the element enters the viewport.
 * Supports multiple animation directions: up (default), left, right, scale.
 */
export default function Reveal({ children, className = "", delay = 0, direction = "up" }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        el.classList.add("visible");
                        observer.unobserve(el);
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const baseClass = direction === "left" 
        ? "reveal-left" 
        : direction === "right" 
        ? "reveal-right" 
        : direction === "scale" 
        ? "reveal-scale" 
        : "reveal";

    return (
        <div
            ref={ref}
            className={`${baseClass} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
