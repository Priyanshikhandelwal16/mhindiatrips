"use client";

import React from "react";
import { 
  BarChart, Users, FileText, Compass, CheckCircle2, AlertCircle, 
  Layers, Utensils, Star, Calendar, ArrowUpRight 
} from "lucide-react";

interface DashboardTabProps {
  inquiries: any[];
  blogs: any[];
  packages: any[];
  foods: any[];
  states: any[];
  testimonials: any[];
  pages: any[];
  onTabChange: (tab: string) => void;
}

export default function DashboardTab({
  inquiries,
  blogs,
  packages,
  foods,
  states,
  testimonials,
  pages,
  onTabChange
}: DashboardTabProps) {
  // Statistics
  const newLeads = inquiries.filter(i => i.status === "NEW" || !i.status).length;
  const inProgressLeads = inquiries.filter(i => i.status === "IN_PROGRESS").length;
  const contactedLeads = inquiries.filter(i => i.status === "CONTACTED").length;
  const closedLeads = inquiries.filter(i => i.status === "CLOSED").length;

  const stats = [
    { label: "New Leads", value: newLeads, icon: AlertCircle, color: "text-amber-600 bg-amber-50 border-amber-100", tab: "leads" },
    { label: "Total inquiries", value: inquiries.length, icon: Users, color: "text-blue-600 bg-blue-50 border-blue-100", tab: "leads" },
    { label: "Pages", value: pages.length, icon: Layers, color: "text-purple-600 bg-purple-50 border-purple-100", tab: "pages" },
    { label: "Packages", value: packages.length, icon: Compass, color: "text-royal bg-gold/10 border-gold/20", tab: "packages" },
    { label: "Blogs", value: blogs.length, icon: FileText, color: "text-emerald-600 bg-emerald-50 border-emerald-100", tab: "blogs" },
    { label: "Cuisines", value: foods.length, icon: Utensils, color: "text-orange-600 bg-orange-50 border-orange-100", tab: "cuisines" },
    { label: "Testimonials", value: testimonials.length, icon: Star, color: "text-gold bg-gold/5 border-gold/10", tab: "testimonials" },
  ];

  // Recents inquiries (max 5)
  const recentInquiries = [...inquiries]
    .sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime())
    .slice(0, 5);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-royal to-royal-light p-8 rounded-3xl border border-gold/10 relative overflow-hidden text-white shadow-xl shadow-royal/10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="relative space-y-2 max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold font-serif tracking-tight">Namaste, Admin!</h2>
          <p className="text-white/80 text-xs font-light leading-relaxed">
            Welcome to the MH India Trips management suite. From here, you have complete control over all aspects of your luxury travel website. Redesign pages, publish guides, and update itineraries seamlessly.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <button
              key={i}
              onClick={() => onTabChange(stat.tab)}
              className="bg-white border border-beige/40 p-6 rounded-2xl flex flex-col justify-between hover:border-gold/30 transition shadow-sm text-left group"
            >
              <div className="flex justify-between items-start">
                <div className={`p-3 rounded-xl border ${stat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-royal/20 group-hover:text-gold transition" />
              </div>
              <div className="mt-4 space-y-1">
                <span className="text-royal/50 uppercase tracking-wider text-[10px] font-bold block">{stat.label}</span>
                <span className="text-2xl font-bold text-royal font-serif block">{stat.value}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Inquiry Status distribution & Recent Activities split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* CRM Leads Distribution Bar Chart */}
        <div className="lg:col-span-5 bg-white border border-beige/40 p-6 rounded-3xl shadow-sm flex flex-col justify-between space-y-6">
          <div>
            <h3 className="text-sm font-bold text-royal uppercase tracking-wider mb-1">Lead Funnel Distribution</h3>
            <p className="text-royal/40 text-[10px]">Realtime overview of pending and contacted travelers</p>
          </div>

          <div className="space-y-4">
            {[
              { label: "New Inquiries", count: newLeads, color: "bg-amber-500", percent: inquiries.length ? (newLeads / inquiries.length) * 100 : 0 },
              { label: "In Progress", count: inProgressLeads, color: "bg-blue-500", percent: inquiries.length ? (inProgressLeads / inquiries.length) * 100 : 0 },
              { label: "Contacted", count: contactedLeads, color: "bg-emerald-500", percent: inquiries.length ? (contactedLeads / inquiries.length) * 100 : 0 },
              { label: "Closed/Booked", count: closedLeads, color: "bg-royal", percent: inquiries.length ? (closedLeads / inquiries.length) * 100 : 0 }
            ].map((bar, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-royal">
                  <span>{bar.label}</span>
                  <span className="text-royal/50">{bar.count} ({Math.round(bar.percent)}%)</span>
                </div>
                <div className="w-full bg-light-gray h-2 rounded-full overflow-hidden">
                  <div 
                    className={`${bar.color} h-full rounded-full transition-all duration-500`}
                    style={{ width: `${bar.percent || 2}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-beige/25 flex justify-between items-center text-xs font-bold text-royal">
            <span>Total CRM Database Leads:</span>
            <span className="bg-royal/5 text-royal px-3 py-1 rounded-lg border border-gold/15">{inquiries.length} leads</span>
          </div>
        </div>

        {/* Recent Inquiries List */}
        <div className="lg:col-span-7 bg-white border border-beige/40 p-6 rounded-3xl shadow-sm space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-bold text-royal uppercase tracking-wider mb-1">Recent Inquiries</h3>
              <p className="text-royal/40 text-[10px]">Latest travel planner submissions from the website</p>
            </div>
            <button
              onClick={() => onTabChange("leads")}
              className="text-gold hover:text-royal text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition"
            >
              <span>View All</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="divide-y divide-beige/25">
            {recentInquiries.length === 0 ? (
              <div className="py-12 text-center text-xs text-royal/40 italic">
                No recent inquiries.
              </div>
            ) : (
              recentInquiries.map((inq) => (
                <div key={inq.id} className="py-3.5 flex justify-between items-center text-xs text-royal">
                  <div className="space-y-1">
                    <span className="font-bold block text-sm">{inq.name}</span>
                    <div className="flex items-center gap-3 text-royal/50 text-[10px]">
                      <span>{inq.email}</span>
                      <span>•</span>
                      <span>{inq.travelers} {inq.travelers === 1 ? "Traveler" : "Travelers"}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className={`px-2.5 py-0.5 rounded text-[8px] uppercase tracking-wider font-extrabold border ${
                      inq.status === "NEW" || !inq.status
                        ? "bg-amber-50 text-amber-600 border-amber-100"
                        : inq.status === "IN_PROGRESS"
                        ? "bg-blue-50 text-blue-600 border-blue-100"
                        : inq.status === "CONTACTED"
                        ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                        : "bg-royal/5 text-royal/60 border-beige/40"
                    }`}>
                      {inq.status || "NEW"}
                    </span>
                    <span className="text-[9px] text-royal/30 font-light flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {inq.createdAt ? inq.createdAt.split("T")[0] : "Just now"}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
