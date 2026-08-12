"use client";

import React, { useState } from "react";
import { 
  Users, Mail, Phone, Calendar, Search, Trash2, Globe, MapPin, ClipboardList 
} from "lucide-react";

interface InquiriesTabProps {
  inquiries: any[];
  onStatusChange: (id: string, newStatus: string) => void;
  onDeleteInquiry: (id: string) => void;
}

export default function InquiriesTab({
  inquiries,
  onStatusChange,
  onDeleteInquiry
}: InquiriesTabProps) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  const filteredInquiries = inquiries.filter((inq) => {
    const matchesSearch = 
      inq.name?.toLowerCase().includes(search.toLowerCase()) ||
      inq.email?.toLowerCase().includes(search.toLowerCase()) ||
      inq.message?.toLowerCase().includes(search.toLowerCase()) ||
      inq.phone?.toLowerCase().includes(search.toLowerCase());
    
    const matchesStatus = 
      statusFilter === "ALL" || 
      (statusFilter === "NEW" && (inq.status === "NEW" || !inq.status)) ||
      inq.status === statusFilter;
      
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 animate-fade-in text-xs text-royal">
      {/* Tab Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-lg font-bold text-royal font-serif">Inquiries & Leads (CRM)</h2>
          <p className="text-[10px] text-royal/40">Manage travel booking requests submitted by guests on your website.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          {/* Search bar */}
          <div className="relative flex-grow md:flex-grow-0 w-full md:w-64">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-royal/30" />
            <input
              type="text"
              placeholder="Search leads..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-beige/40 pl-10 pr-4 py-2.5 outline-none rounded-xl text-royal focus:border-gold/50 transition shadow-sm"
            />
          </div>

          {/* Status selector */}
          <div className="flex rounded-xl bg-beige/20 border border-beige/40 p-1 shadow-sm w-full md:w-auto">
            {["ALL", "NEW", "IN_PROGRESS", "CONTACTED", "CLOSED"].map((filter) => (
              <button
                key={filter}
                onClick={() => setStatusFilter(filter)}
                className={`px-3.5 py-1.5 rounded-lg text-[9px] uppercase tracking-wider font-extrabold transition cursor-pointer ${
                  statusFilter === filter 
                    ? "bg-royal text-white shadow-sm" 
                    : "text-royal/60 hover:text-royal"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Inquiry List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredInquiries.length === 0 ? (
          <div className="col-span-full py-24 text-center bg-white border border-beige/30 rounded-3xl shadow-sm italic text-royal/40">
            No matching inquiries found.
          </div>
        ) : (
          filteredInquiries.map((inq) => (
            <div 
              key={inq.id} 
              className={`bg-white border p-6 rounded-3xl shadow-sm flex flex-col justify-between space-y-4 hover:border-gold/30 transition relative ${
                inq.status === "NEW" || !inq.status ? "border-l-4 border-l-amber-500 border-beige/45" : "border-beige/45"
              }`}
            >
              {/* Header: User details */}
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-royal font-serif tracking-tight">{inq.name}</h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-royal/50 text-[10px]">
                      {inq.email && (
                        <a href={`mailto:${inq.email}`} className="flex items-center gap-1 hover:text-gold transition">
                          <Mail className="w-3.5 h-3.5" />
                          <span>{inq.email}</span>
                        </a>
                      )}
                      {inq.phone && (
                        <a href={`tel:${inq.phone}`} className="flex items-center gap-1 hover:text-gold transition">
                          <Phone className="w-3.5 h-3.5" />
                          <span>{inq.phone}</span>
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => onDeleteInquiry(inq.id)}
                    className="text-royal/35 hover:text-red-600 transition p-1 hover:bg-red-50 rounded-lg cursor-pointer"
                    title="Delete Lead"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Travel Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 bg-light-gray/40 p-4 rounded-2xl border border-beige/10">
                  <div className="space-y-0.5">
                    <span className="text-[9px] uppercase tracking-wider text-royal/40 font-bold block">Travelers</span>
                    <span className="font-bold">{inq.travelers} guest{inq.travelers !== 1 && "s"}</span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[9px] uppercase tracking-wider text-royal/40 font-bold block">Start Date</span>
                    <span className="font-bold">{inq.startDate || "Flexible"}</span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[9px] uppercase tracking-wider text-royal/40 font-bold block">Duration</span>
                    <span className="font-bold">{inq.duration ? `${inq.duration} days` : "TBD"}</span>
                  </div>
                  {inq.country && (
                    <div className="space-y-0.5">
                      <span className="text-[9px] uppercase tracking-wider text-royal/40 font-bold block">Origin Country</span>
                      <span className="font-bold flex items-center gap-1">
                        <Globe className="w-3.5 h-3.5 text-royal/40" />
                        {inq.country}
                      </span>
                    </div>
                  )}
                  {inq.experience && (
                    <div className="space-y-0.5">
                      <span className="text-[9px] uppercase tracking-wider text-royal/40 font-bold block">Experience Style</span>
                      <span className="font-bold text-gold uppercase tracking-wider text-[9px]">{inq.experience}</span>
                    </div>
                  )}
                </div>

                {/* Destinations array */}
                {inq.destinations && inq.destinations.length > 0 && (
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase tracking-wider text-royal/40 font-bold block">Interested Regions</span>
                    <div className="flex flex-wrap gap-1.5">
                      {inq.destinations.map((d: string, idx: number) => (
                        <span key={idx} className="bg-royal/5 text-royal px-2.5 py-1 rounded-lg text-[9px] font-bold border border-beige/40">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Message */}
                {inq.message && (
                  <div className="space-y-1 bg-beige/10 border border-beige/25 p-4 rounded-2xl">
                    <span className="text-[9px] uppercase tracking-wider text-royal/40 font-bold block">Client Notes</span>
                    <p className="text-royal/80 leading-relaxed font-light whitespace-pre-wrap">{inq.message}</p>
                  </div>
                )}
              </div>

              {/* Status Update & Date Footer */}
              <div className="flex justify-between items-center pt-4 border-t border-beige/20">
                <div className="flex items-center gap-1.5 text-royal/35 text-[9px] font-light">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Submitted: {inq.createdAt ? inq.createdAt.split("T")[0] : "Just now"}</span>
                </div>

                {/* Status Selector */}
                <div className="flex items-center gap-2">
                  <label className="text-[9px] uppercase font-bold text-royal/50 tracking-wider">Status:</label>
                  <select
                    value={inq.status || "NEW"}
                    onChange={(e) => onStatusChange(inq.id, e.target.value)}
                    className={`text-[9px] uppercase tracking-wider font-extrabold px-3 py-1.5 rounded-lg border outline-none cursor-pointer transition ${
                      inq.status === "NEW" || !inq.status
                        ? "bg-amber-50 text-amber-600 border-amber-100 focus:border-amber-300"
                        : inq.status === "IN_PROGRESS"
                        ? "bg-blue-50 text-blue-600 border-blue-100 focus:border-blue-300"
                        : inq.status === "CONTACTED"
                        ? "bg-emerald-50 text-emerald-600 border-emerald-100 focus:border-emerald-300"
                        : "bg-royal/5 text-royal/60 border-beige/40 focus:border-royal/20"
                    }`}
                  >
                    <option value="NEW">New</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="CONTACTED">Contacted</option>
                    <option value="CLOSED">Closed/Booked</option>
                  </select>
                </div>
              </div>

            </div>
          ))
        )}
      </div>
    </div>
  );
}
