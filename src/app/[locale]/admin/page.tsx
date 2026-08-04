"use client";

import React, { useState, useEffect } from "react";
import { 
  getInquiriesAction
} from "@/app/actions/inquiry";
import { 
  updateInquiryStatusAction, 
  deleteInquiryAction 
} from "@/app/actions/admin";
import { 
  getBlogsAction 
} from "@/app/actions/queries";
import { 
  BarChart, 
  Users, 
  FileText, 
  Compass, 
  CheckCircle, 
  Trash2, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar 
} from "lucide-react";

export default function AdminDashboard() {
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [blogsCount, setBlogsCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const inqs = await getInquiriesAction();
        setInquiries(inqs || []);
        
        const blogs = await getBlogsAction();
        setBlogsCount(blogs?.length || 0);
      } catch (e) {
        console.error("Error loading dashboard data:", e);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleStatusChange = async (id: string, newStatus: string) => {
    const res = await updateInquiryStatusAction(id, newStatus);
    if (res.success) {
      setInquiries(prev => prev.map(i => i.id === id ? { ...i, status: newStatus } : i));
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this inquiry?")) {
      const res = await deleteInquiryAction(id);
      if (res.success) {
        setInquiries(prev => prev.filter(i => i.id !== id));
      }
    }
  };

  if (loading) {
    return (
      <div className="bg-[#FCFAF6] min-h-screen py-32 font-sans flex items-center justify-center">
        <span className="text-sm font-semibold tracking-widest text-gold uppercase animate-pulse">
          Loading Dashboard...
        </span>
      </div>
    );
  }

  return (
    <div className="bg-[#FCFAF6] min-h-screen py-24 font-sans text-[#1A1E1D]">
      <div className="max-w-7xl mx-auto px-6 space-y-12 mt-8">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight text-royal editorial-heading">
              CMS Dashboard
            </h1>
            <p className="text-xs font-light text-foreground/60">
              Manage incoming luxury travel inquiries and overview site performance stats.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-beige/45 rounded-3xl p-6 shadow-sm flex items-center space-x-4">
            <div className="bg-beige/35 p-3 rounded-2xl text-gold">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-foreground/50">Total Inquiries</span>
              <h3 className="text-2xl font-bold text-royal">{inquiries.length}</h3>
            </div>
          </div>

          <div className="bg-white border border-beige/45 rounded-3xl p-6 shadow-sm flex items-center space-x-4">
            <div className="bg-[#0E4E30]/10 p-3 rounded-2xl text-[#0E4E30]">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-foreground/50">Blog Posts</span>
              <h3 className="text-2xl font-bold text-royal">{blogsCount}</h3>
            </div>
          </div>

          <div className="bg-white border border-beige/45 rounded-3xl p-6 shadow-sm flex items-center space-x-4">
            <div className="bg-royal/5 p-3 rounded-2xl text-royal">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-foreground/50">Active Locales</span>
              <h3 className="text-2xl font-bold text-royal">3 (EN, ES, PT)</h3>
            </div>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white border border-beige/45 rounded-3xl overflow-hidden shadow-sm">
          <div className="p-6 border-b border-beige/40">
            <h2 className="text-lg font-bold text-royal">Recent Customer Inquiries</h2>
          </div>

          {inquiries.length === 0 ? (
            <div className="p-12 text-center text-xs text-foreground/50 font-light">
              No inquiries received yet. Submit the homepage form to see listings here.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-beige/20 text-[10px] uppercase font-bold tracking-wider text-foreground/60 border-b border-beige/35">
                    <th className="p-4">Customer Details</th>
                    <th className="p-4">Travel Aspirations</th>
                    <th className="p-4">Traveler / Date</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-beige/25 text-xs">
                  {inquiries.map((inq: any) => (
                    <tr key={inq.id} className="hover:bg-beige/10 transition">
                      <td className="p-4 space-y-1">
                        <p className="font-bold text-royal">{inq.name}</p>
                        <div className="flex items-center space-x-1.5 text-foreground/60 text-[11px]">
                          <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                          <span>{inq.email}</span>
                        </div>
                        {inq.phone && (
                          <div className="flex items-center space-x-1.5 text-foreground/60 text-[11px]">
                            <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                            <span>{inq.phone}</span>
                          </div>
                        )}
                        {inq.country && (
                          <div className="flex items-center space-x-1.5 text-foreground/60 text-[11px]">
                            <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                            <span>{inq.country}</span>
                          </div>
                        )}
                      </td>
                      <td className="p-4 space-y-1">
                        <span className="bg-[#0E4E30]/10 text-[#0E4E30] text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded">
                          {inq.experience} Style
                        </span>
                        {inq.message && (
                          <p className="text-foreground/75 leading-relaxed font-light mt-1 max-w-xs truncate">
                            {inq.message}
                          </p>
                        )}
                      </td>
                      <td className="p-4 space-y-1 font-light">
                        <p className="font-semibold text-royal">
                          {inq.travelers} Travelers
                        </p>
                        <div className="flex items-center space-x-1 text-foreground/60 text-[11px]">
                          <Calendar className="w-3.5 h-3.5 text-gold shrink-0" />
                          <span>{inq.startDate || "Flexible"} ({inq.duration || "N/A"} days)</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <select
                          value={inq.status}
                          onChange={(e) => handleStatusChange(inq.id, e.target.value)}
                          className="bg-beige/25 border border-beige/80 rounded-lg px-2 py-1 text-xs font-semibold focus:border-gold outline-none"
                        >
                          <option value="NEW">New Lead</option>
                          <option value="IN_PROGRESS">In Progress</option>
                          <option value="CONTACTED">Contacted</option>
                          <option value="CLOSED">Closed / Booked</option>
                        </select>
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => handleDelete(inq.id)}
                          className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition"
                          title="Delete Lead"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
