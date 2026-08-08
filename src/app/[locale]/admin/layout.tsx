import React from "react";
import Link from "next/link";
import { Compass, Users, FileText, LayoutDashboard, Utensils, Star, MapPin, Map } from "lucide-react";

export default async function AdminLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-[#FCFAF6] flex font-sans text-[#1A1E1D]">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-[#1A1E1D] text-white shrink-0 hidden md:flex flex-col justify-between py-8 px-6 border-r border-white/5">
        <div className="space-y-10">
          <Link href={`/${locale}`} className="text-xl font-bold tracking-widest text-[#FCFAF6] block">
            MH<span className="text-gold font-semibold">ADMIN</span>
          </Link>
 
          <nav className="space-y-2">
            <Link
              href={`/${locale}/admin`}
              className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-semibold transition text-white/90"
            >
              <LayoutDashboard className="w-5 h-5 text-gold shrink-0" />
              <span>Dashboard</span>
            </Link>

            <Link
              href={`/${locale}/admin#leads`}
              className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-semibold transition text-white/90"
            >
              <Users className="w-5 h-5 text-gold shrink-0" />
              <span>Travel Leads</span>
            </Link>

            <Link
              href={`/${locale}/admin#packages`}
              className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-semibold transition text-white/90"
            >
              <Map className="w-5 h-5 text-gold shrink-0" />
              <span>Tour Packages</span>
            </Link>

            <Link
              href={`/${locale}/admin#blogs`}
              className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-semibold transition text-white/90"
            >
              <FileText className="w-5 h-5 text-gold shrink-0" />
              <span>Manage Blogs</span>
            </Link>

            <Link
              href={`/${locale}/admin#cuisines`}
              className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-semibold transition text-white/90"
            >
              <Utensils className="w-5 h-5 text-gold shrink-0" />
              <span>Food Catalog</span>
            </Link>

            <Link
              href={`/${locale}/admin#destinations`}
              className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-semibold transition text-white/90"
            >
              <MapPin className="w-5 h-5 text-gold shrink-0" />
              <span>Destinations</span>
            </Link>

            <Link
              href={`/${locale}/admin#testimonials`}
              className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-semibold transition text-white/90"
            >
              <Star className="w-5 h-5 text-gold shrink-0" />
              <span>Testimonials</span>
            </Link>
          </nav>
        </div>

        <div className="pt-6 border-t border-white/5">
          <Link
            href={`/${locale}`}
            className="text-xs text-white/60 hover:text-gold flex items-center space-x-2 transition"
          >
            <Compass className="w-4 h-4" />
            <span>Go to Live Website</span>
          </Link>
        </div>
      </aside>

      {/* Main Admin Area */}
      <div className="flex-grow overflow-y-auto px-8 py-10">
        {children}
      </div>

    </div>
  );
}
