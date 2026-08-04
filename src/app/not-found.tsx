import React from "react";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#FAFAF8] text-[#1A1A1A] antialiased min-h-screen flex flex-col justify-center items-center px-6">
        <div className="max-w-lg text-center space-y-8">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-[#B8964B]/10 flex items-center justify-center mx-auto">
            <Compass className="w-10 h-10 text-[#B8964B]" />
          </div>

          {/* 404 */}
          <h1 className="text-7xl md:text-8xl font-bold text-[#0D2440]/10 tracking-tight">404</h1>

          {/* Message */}
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0D2440]" style={{ fontFamily: "'Georgia', serif" }}>
              Page Not Found
            </h2>
            <p className="text-[15px] text-[#1A1A1A]/55 leading-relaxed">
              It seems you've wandered off the beaten path. The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Link
              href="/en"
              className="inline-flex items-center justify-center gap-2 bg-[#1A5336] hover:bg-[#1A5336]/90 text-white text-xs font-semibold uppercase tracking-wider py-3.5 px-8 rounded-full transition-all duration-300"
            >
              <span>Back to Home</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/en/destinations"
              className="inline-flex items-center justify-center gap-2 border border-[#E8E2D8] hover:border-[#B8964B] text-[#1A1A1A] text-xs font-semibold uppercase tracking-wider py-3.5 px-8 rounded-full transition-all duration-300"
            >
              <span>Explore Destinations</span>
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
