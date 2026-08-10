"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  getInquiriesAction
} from "@/app/actions/inquiry";
import { 
  updateInquiryStatusAction, 
  deleteInquiryAction,
  createBlogAction,
  updateBlogAction,
  deleteBlogAction,
  createTestimonialAction,
  createTourPackageAction,
  updateTourPackageAction,
  deleteTourPackageAction,
  createFoodAction,
  updateFoodAction,
  createStateAction,
  updateStateAction
} from "@/app/actions/admin";
import { 
  getBlogsAction,
  getTourPackagesAction,
  getFoodsAction,
  getStatesAction,
  getTestimonialsAction
} from "@/app/actions/queries";
import { 
  BarChart, Users, FileText, Compass, CheckCircle, Trash2, 
  Mail, Phone, MapPin, Calendar, Plus, Edit2, Upload, Lock, 
  CheckCircle2, Star, Eye, Utensils, Sparkles, LogOut, Map,
  LayoutDashboard
} from "lucide-react";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useParams } from "next/navigation";

// Cloudinary image uploader client-side helper
function CloudinaryUpload({ onUploadComplete, label = "Upload Image" }: { onUploadComplete: (url: string) => void, label?: string }) {
  const [uploading, setUploading] = useState(false);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "mhindiatrips");
      formData.append("folder", "mhindiatrips");

      const res = await fetch("https://api.cloudinary.com/v1_1/irrjgm1b/image/upload", {
        method: "POST",
        body: formData
      });
      const data = await res.json();
      if (data.secure_url) {
        onUploadComplete(data.secure_url);
        alert("Image uploaded successfully!");
      } else {
        alert("Upload failed. Verifypreset/Cloudinary configs.");
      }
    } catch (err) {
      console.error(err);
      alert("Error uploading image.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <label className="bg-gold/10 hover:bg-gold/20 border border-gold/30 text-royal hover:text-gold font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 rounded-xl cursor-pointer transition flex items-center gap-1.5">
        <Upload className="w-3.5 h-3.5" />
        <span>{uploading ? "Uploading..." : label}</span>
        <input type="file" onChange={onChange} className="hidden" accept="image/*" disabled={uploading} />
      </label>
    </div>
  );
}

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  // CMS state
  const [activeTab, setActiveTab] = useState("dashboard");
  const [loading, setLoading] = useState(true);
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [packages, setPackages] = useState<any[]>([]);
  const [foods, setFoods] = useState<any[]>([]);
  const [states, setStates] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);

  // Editing state trackers
  const [editBlog, setEditBlog] = useState<any>(null);
  const [editPackage, setEditPackage] = useState<any>(null);
  const [editFood, setEditFood] = useState<any>(null);
  const [editState, setEditState] = useState<any>(null);
  const [newTestimonial, setNewTestimonial] = useState<any>(null);

  const params = useParams();
  const locale = params?.locale || "en";

  // Monitor Auth State
  useEffect(() => {
    const savedUser = localStorage.getItem("admin_user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
        setAuthLoading(false);
        return;
      } catch (e) {}
    }

    if (!auth) {
      setUser({ email: "offline-developer-mode@mhindiatrips.com" });
      setAuthLoading(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, (usr) => {
      if (usr) {
        setUser(usr);
      }
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Listen to Sidebar navigation hashes
  useEffect(() => {
    if (!user) return;
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveTab(hash);
      } else {
        setActiveTab("dashboard");
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, [user]);

  // Load CMS collections from dynamic Firestore wrapper db actions
  const loadCMSData = async () => {
    setLoading(true);
    try {
      const [inqs, blgs, pkgs, fds, sts, tsts] = await Promise.all([
        getInquiriesAction(),
        getBlogsAction(),
        getTourPackagesAction(),
        getFoodsAction(),
        getStatesAction(),
        getTestimonialsAction()
      ]);
      setInquiries(inqs || []);
      setBlogs(blgs || []);
      setPackages(pkgs || []);
      setFoods(fds || []);
      setStates(sts || []);
      setTestimonials(tsts || []);
    } catch (e) {
      console.error("Error loading CMS collections:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      loadCMSData();
    }
  }, [user]);

  // Authenticate Admin
  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check against configured admin credentials first
    const adminEmail = (process.env.NEXT_PUBLIC_ADMIN_EMAIL || "admin@mhindiatrips.com").replace(/['"]/g, "").trim();
    const adminPassword = (process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin").replace(/['"]/g, "").trim();

    if (email.trim() === adminEmail && password.trim() === adminPassword) {
      const customUser = { email: adminEmail, customAuth: true };
      setUser(customUser);
      localStorage.setItem("admin_user", JSON.stringify(customUser));
      return;
    }

    if (!auth) {
      alert("Firebase configuration is missing and custom credentials mismatch.");
      return;
    }
    setAuthLoading(true);
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Admin account created successfully!");
      } else {
        const credential = await signInWithEmailAndPassword(auth, email, password);
        const firebaseUser = { email: credential.user.email, uid: credential.user.uid };
        setUser(firebaseUser);
        localStorage.setItem("admin_user", JSON.stringify(firebaseUser));
      }
    } catch (err: any) {
      alert(err.message || "Authentication failed.");
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    localStorage.removeItem("admin_user");
    setUser(null);
    if (auth) {
      await signOut(auth);
    }
  };

  // LEADS ACTIONS
  const handleStatusChange = async (id: string, newStatus: string) => {
    const res = await updateInquiryStatusAction(id, newStatus);
    if (res.success) {
      setInquiries(prev => prev.map(i => i.id === id ? { ...i, status: newStatus } : i));
    }
  };

  const handleDeleteInquiry = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this lead?")) {
      const res = await deleteInquiryAction(id);
      if (res.success) {
        setInquiries(prev => prev.filter(i => i.id !== id));
      }
    }
  };

  // BLOG ACTIONS
  const handleSaveBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editBlog.slug || !editBlog.title?.en) return alert("Slug and title are required.");

    setLoading(true);
    const isNew = !blogs.find(b => b.slug === editBlog.slug);
    const res = isNew 
      ? await createBlogAction(editBlog)
      : await updateBlogAction(editBlog.slug, editBlog);

    if (res.success) {
      alert("Blog post saved successfully!");
      setEditBlog(null);
      await loadCMSData();
    } else {
      alert(res.error || "Failed to save blog.");
      setLoading(false);
    }
  };

  const handleDeleteBlog = async (slug: string) => {
    if (window.confirm("Delete this blog post?")) {
      setLoading(true);
      const res = await deleteBlogAction(slug);
      if (res.success) {
        await loadCMSData();
      } else {
        alert(res.error || "Failed to delete.");
        setLoading(false);
      }
    }
  };

  // PACKAGE ACTIONS
  const handleSavePackage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editPackage.slug || !editPackage.title?.en) return alert("Slug and title are required.");

    setLoading(true);
    const isNew = !packages.find(p => p.slug === editPackage.slug);
    const res = isNew 
      ? await createTourPackageAction(editPackage)
      : await updateTourPackageAction(editPackage.slug, editPackage);

    if (res.success) {
      alert("Package saved successfully!");
      setEditPackage(null);
      await loadCMSData();
    } else {
      alert(res.error || "Failed to save package.");
      setLoading(false);
    }
  };

  const handleDeletePackage = async (slug: string) => {
    if (window.confirm("Delete this package?")) {
      setLoading(true);
      const res = await deleteTourPackageAction(slug);
      if (res.success) {
        await loadCMSData();
      } else {
        alert(res.error || "Failed to delete.");
        setLoading(false);
      }
    }
  };

  // CUISINES ACTIONS
  const handleSaveFood = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editFood.slug || !editFood.title?.en) return alert("Slug and title are required.");

    setLoading(true);
    const isNew = !foods.find(f => f.slug === editFood.slug);
    const res = isNew 
      ? await createFoodAction(editFood)
      : await updateFoodAction(editFood.slug, editFood);

    if (res.success) {
      alert("Food guide saved successfully!");
      setEditFood(null);
      await loadCMSData();
    } else {
      alert(res.error || "Failed to save food catalog.");
      setLoading(false);
    }
  };

  // DESTINATIONS ACTIONS
  const handleSaveState = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editState.slug || !editState.title?.en) return alert("Slug and title are required.");

    setLoading(true);
    const isNew = !states.find(s => s.slug === editState.slug);
    const res = isNew 
      ? await createStateAction(editState)
      : await updateStateAction(editState.slug, editState);

    if (res.success) {
      alert("Destination state saved successfully!");
      setEditState(null);
      await loadCMSData();
    } else {
      alert(res.error || "Failed to save state.");
      setLoading(false);
    }
  };

  // TESTIMONIALS ACTIONS
  const handleSaveTestimonial = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTestimonial.name || !newTestimonial.quote?.en) return alert("Name and english quote are required.");

    setLoading(true);
    const res = await createTestimonialAction(newTestimonial);
    if (res.success) {
      alert("Testimonial added successfully!");
      setNewTestimonial(null);
      await loadCMSData();
    } else {
      alert(res.error || "Failed to save testimonial.");
      setLoading(false);
    }
  };

  // GATES: Authentication checking
  if (authLoading) {
    return (
      <div className="bg-[#FCFAF6] min-h-screen py-32 font-sans flex items-center justify-center">
        <span className="text-sm font-semibold tracking-widest text-gold uppercase animate-pulse">
          Connecting Console...
        </span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="bg-[#FAF8F5] min-h-screen py-24 flex items-center justify-center px-6">
        <div className="bg-white border border-gold/15 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-md w-full space-y-8 relative">
          <div className="absolute top-0 left-0 w-full h-[6px] bg-[#8B2626]" />
          
          <div className="text-center space-y-2">
            <img src="/images/logo-transparent.png" alt="MH India Trips" className="h-14 w-auto mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-royal">Admin Console</h1>
            <p className="text-xs text-foreground/50">Authorize credentials to access live CMS content databases.</p>
          </div>

          <form onSubmit={handleAuth} className="space-y-5 text-xs">
            <div className="space-y-1.5">
              <label className="font-bold text-royal block uppercase tracking-wider">Email Address</label>
              <input 
                type="email" 
                required 
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="admin@mhindiatrips.com"
                className="w-full bg-[#FAF8F5] border border-gold/15 rounded-xl px-4 py-3 outline-none focus:border-gold"
              />
            </div>
            
            <div className="space-y-1.5">
              <label className="font-bold text-royal block uppercase tracking-wider">Password</label>
              <input 
                type="password" 
                required 
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#FAF8F5] border border-gold/15 rounded-xl px-4 py-3 outline-none focus:border-gold"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-royal hover:bg-gold text-white hover:text-royal transition duration-300 font-bold uppercase tracking-wider py-4 rounded-xl shadow-lg mt-2 cursor-pointer"
            >
              {isSignUp ? "Create Admin Credentials" : "Authorize Console Access"}
            </button>
          </form>

          <div className="text-center pt-2">
            <button 
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-[10px] text-gold font-bold uppercase tracking-wider hover:underline cursor-pointer"
            >
              {isSignUp ? "Have account? Sign In" : "First time setup? Sign Up"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard content renderer
  return (
    <div className="min-h-screen bg-[#FCFAF6] flex font-sans text-[#1A1E1D]">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-[#1A1E1D] text-white shrink-0 hidden md:flex flex-col justify-between py-6 px-5 border-r border-white/5 fixed left-0 top-0 bottom-0 z-40 overflow-y-auto">
        <div className="space-y-6">
          {/* Logo */}
          <Link href={`/${locale}`} className="block">
            <img src="/images/logo-transparent.png" alt="MH India Trips" className="h-12 w-auto opacity-90" />
          </Link>

          {/* CMS Navigation */}
          <div className="space-y-1">
            <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold px-4 pb-2">Content Management</p>
          <nav className="space-y-1">
            <button
              onClick={() => {
                setActiveTab("dashboard");
                window.location.hash = "";
              }}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl w-full text-left text-sm font-semibold transition cursor-pointer ${
                activeTab === "dashboard" ? "bg-white/10 text-white font-bold" : "hover:bg-white/5 text-white/70"
              }`}
            >
              <LayoutDashboard className="w-5 h-5 text-gold shrink-0" />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("leads");
                window.location.hash = "leads";
              }}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl w-full text-left text-sm font-semibold transition cursor-pointer ${
                activeTab === "leads" ? "bg-white/10 text-white font-bold" : "hover:bg-white/5 text-white/70"
              }`}
            >
              <Users className="w-5 h-5 text-gold shrink-0" />
              <span>Travel Leads</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("packages");
                window.location.hash = "packages";
              }}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl w-full text-left text-sm font-semibold transition cursor-pointer ${
                activeTab === "packages" ? "bg-white/10 text-white font-bold" : "hover:bg-white/5 text-white/70"
              }`}
            >
              <Map className="w-5 h-5 text-gold shrink-0" />
              <span>Tour Packages</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("blogs");
                window.location.hash = "blogs";
              }}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl w-full text-left text-sm font-semibold transition cursor-pointer ${
                activeTab === "blogs" ? "bg-white/10 text-white font-bold" : "hover:bg-white/5 text-white/70"
              }`}
            >
              <FileText className="w-5 h-5 text-gold shrink-0" />
              <span>Manage Blogs</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("cuisines");
                window.location.hash = "cuisines";
              }}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl w-full text-left text-sm font-semibold transition cursor-pointer ${
                activeTab === "cuisines" ? "bg-white/10 text-white font-bold" : "hover:bg-white/5 text-white/70"
              }`}
            >
              <Utensils className="w-5 h-5 text-gold shrink-0" />
              <span>Food Catalog</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("destinations");
                window.location.hash = "destinations";
              }}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl w-full text-left text-sm font-semibold transition cursor-pointer ${
                activeTab === "destinations" ? "bg-white/10 text-white font-bold" : "hover:bg-white/5 text-white/70"
              }`}
            >
              <MapPin className="w-5 h-5 text-gold shrink-0" />
              <span>Destinations</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("testimonials");
                window.location.hash = "testimonials";
              }}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl w-full text-left text-sm font-semibold transition cursor-pointer ${
                activeTab === "testimonials" ? "bg-white/10 text-white font-bold" : "hover:bg-white/5 text-white/70"
              }`}
            >
              <Star className="w-5 h-5 text-gold shrink-0" />
              <span>Testimonials</span>
            </button>
          </nav>
          </div>

          {/* Website Pages Quick Access */}
          <div className="space-y-1">
            <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold px-4 pb-2 pt-4">Website Pages</p>
            <button onClick={() => { setActiveTab("edit-homepage"); window.location.hash = "edit-homepage"; }} className={`flex items-center space-x-3 px-4 py-2.5 rounded-xl w-full text-left text-xs transition ${activeTab === "edit-homepage" ? "bg-white/10 text-white font-bold" : "text-white/60 hover:text-white hover:bg-white/5"}`}>
              <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              <span>Homepage</span>
            </button>
            <button onClick={() => { setActiveTab("destinations"); window.location.hash = "destinations"; }} className={`flex items-center space-x-3 px-4 py-2.5 rounded-xl w-full text-left text-xs transition ${activeTab === "destinations" ? "bg-white/10 text-white font-bold" : "text-white/60 hover:text-white hover:bg-white/5"}`}>
              <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>Destinations</span>
            </button>
            <button onClick={() => { setActiveTab("packages"); window.location.hash = "packages"; }} className={`flex items-center space-x-3 px-4 py-2.5 rounded-xl w-full text-left text-xs transition ${activeTab === "packages" ? "bg-white/10 text-white font-bold" : "text-white/60 hover:text-white hover:bg-white/5"}`}>
              <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
              <span>Tour Packages</span>
            </button>
            <button onClick={() => { setActiveTab("blogs"); window.location.hash = "blogs"; }} className={`flex items-center space-x-3 px-4 py-2.5 rounded-xl w-full text-left text-xs transition ${activeTab === "blogs" ? "bg-white/10 text-white font-bold" : "text-white/60 hover:text-white hover:bg-white/5"}`}>
              <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
              <span>Blog</span>
            </button>
            <button onClick={() => { setActiveTab("cuisines"); window.location.hash = "cuisines"; }} className={`flex items-center space-x-3 px-4 py-2.5 rounded-xl w-full text-left text-xs transition ${activeTab === "cuisines" ? "bg-white/10 text-white font-bold" : "text-white/60 hover:text-white hover:bg-white/5"}`}>
              <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
              <span>Food Guide</span>
            </button>
            <button onClick={() => { setActiveTab("testimonials"); window.location.hash = "testimonials"; }} className={`flex items-center space-x-3 px-4 py-2.5 rounded-xl w-full text-left text-xs transition ${activeTab === "testimonials" ? "bg-white/10 text-white font-bold" : "text-white/60 hover:text-white hover:bg-white/5"}`}>
              <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
              <span>Testimonials</span>
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-white/5 space-y-3">
          <a
            href={`/${locale}`}
            target="_blank"
            className="text-xs text-white/60 hover:text-gold flex items-center space-x-2 transition"
          >
            <Compass className="w-4 h-4" />
            <span>View Live Website</span>
          </a>
          <p className="text-[9px] text-white/20 font-light">MH India Trips Admin v2.0</p>
        </div>
      </aside>

      {/* Main Admin Area */}
      <div className="flex-grow overflow-y-auto px-8 py-10 md:ml-64">
        
        {/* Upper header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 border-b border-beige/40 pb-6">
          <div className="flex items-center gap-4">
            <img src="/images/logo-transparent.png" alt="MH India Trips" className="h-10 w-auto md:hidden" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-royal uppercase">
                CMS: <span className="text-gold font-light">{activeTab}</span>
              </h1>
              <p className="text-xs text-foreground/50 font-light uppercase tracking-wider mt-1">
                Signed in as {user.email}
              </p>
            </div>
          </div>
        <button 
          onClick={handleLogout}
          className="bg-red-50 hover:bg-red-100 text-red-700 font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 rounded-xl flex items-center gap-1.5 border border-red-200 transition cursor-pointer"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Exit Console</span>
        </button>
      </div>

      {loading ? (
        <div className="py-24 text-center">
          <span className="text-xs font-bold tracking-widest text-gold uppercase animate-pulse">
            Connecting Firestore Database...
          </span>
        </div>
      ) : (
        <div className="space-y-12">

          {/* TAB 1: DASHBOARD OVERVIEW */}
          {activeTab === "dashboard" && (
            <div className="space-y-8">
              {/* Stats overview cards */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { title: "Travel Leads", count: inquiries.length, icon: Users, color: "bg-beige/45 text-gold" },
                  { title: "Tour Packages", count: packages.length, icon: Compass, color: "bg-royal/5 text-royal" },
                  { title: "Blog Posts", count: blogs.length, icon: FileText, color: "bg-emerald-50 text-emerald-800" },
                  { title: "Food Guides", count: foods.length, icon: Utensils, color: "bg-orange-50 text-orange-800" },
                  { title: "Testimonials", count: testimonials.length, icon: Star, color: "bg-yellow-50 text-yellow-800" },
                ].map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="bg-white border border-beige/45 rounded-3xl p-5 shadow-sm flex items-center space-x-3">
                      <div className={`${stat.color} p-2.5 rounded-xl`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[9px] uppercase font-bold tracking-wider text-foreground/40 block">{stat.title}</span>
                        <h4 className="text-lg font-bold text-royal">{stat.count}</h4>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Recent Inquiry Logs */}
              <div className="bg-white border border-beige/45 rounded-[2rem] p-6 shadow-sm">
                <h3 className="text-md font-bold text-royal mb-4 flex items-center gap-1.5 font-serif">
                  <Sparkles className="w-4 h-4 text-gold" />
                  Recent Guest Inquiry Logs
                </h3>
                {inquiries.length === 0 ? (
                  <p className="text-xs text-foreground/40 py-8 text-center font-light">No inquires received.</p>
                ) : (
                  <div className="space-y-3">
                    {inquiries.slice(0, 5).map((inq) => (
                      <div key={inq.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between border border-beige/25 p-4 rounded-2xl hover:bg-beige/5 transition text-xs gap-4">
                        <div className="space-y-1">
                          <p className="font-bold text-royal">{inq.name} ({inq.country || "Intl"})</p>
                          <p className="text-foreground/60 text-[11px]">{inq.email} • {inq.phone || "No phone"}</p>
                        </div>
                        <div className="text-left sm:text-right">
                          <span className="bg-[#0D2A1E]/10 text-royal text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                            {inq.experience} Style
                          </span>
                          <p className="text-[10px] text-foreground/40 uppercase tracking-widest mt-1">{inq.startDate || "Flexible"} • {inq.duration || "N/A"} days</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: TRAVEL LEADS */}
          {activeTab === "leads" && (
            <div className="bg-white border border-beige/45 rounded-3xl p-6 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-royal font-serif">Active Traveler Leads & Bookings</h2>
              {inquiries.length === 0 ? (
                <p className="text-xs text-foreground/40 text-center py-10">No inquiries found.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-beige/20 text-[9px] font-black uppercase tracking-wider text-foreground/50 border-b border-beige/35">
                        <th className="p-4">Customer Details</th>
                        <th className="p-4">Travel Aspirations</th>
                        <th className="p-4">Dates / Count</th>
                        <th className="p-4">Lead Status</th>
                        <th className="p-4 text-right">Delete</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-beige/25">
                      {inquiries.map((inq: any) => (
                        <tr key={inq.id} className="hover:bg-beige/10 transition">
                          <td className="p-4 space-y-1">
                            <p className="font-bold text-royal">{inq.name}</p>
                            <p className="text-[11px] text-foreground/50">{inq.email}</p>
                            <p className="text-[10px] text-foreground/40">{inq.phone} • {inq.country}</p>
                          </td>
                          <td className="p-4 space-y-1">
                            <span className="text-[9px] bg-royal/10 text-royal font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                              {inq.experience} Style
                            </span>
                            {inq.message && <p className="text-foreground/75 leading-relaxed font-light mt-1 max-w-sm">{inq.message}</p>}
                          </td>
                          <td className="p-4 space-y-0.5">
                            <p className="font-semibold text-royal">{inq.travelers} Travelers</p>
                            <p className="text-[11px] text-foreground/45">{inq.startDate || "Flexible Date"}</p>
                            <p className="text-[10px] text-foreground/40">Duration: {inq.duration || "N/A"} days</p>
                          </td>
                          <td className="p-4">
                            <select
                              value={inq.status}
                              onChange={(e) => handleStatusChange(inq.id, e.target.value)}
                              className="bg-beige/25 border border-beige/80 rounded-lg px-2.5 py-1 text-xs font-semibold focus:border-gold outline-none cursor-pointer"
                            >
                              <option value="NEW">New Lead</option>
                              <option value="IN_PROGRESS">In Progress</option>
                              <option value="CONTACTED">Contacted</option>
                              <option value="CLOSED">Closed / Booked</option>
                            </select>
                          </td>
                          <td className="p-4 text-right">
                            <button
                              onClick={() => handleDeleteInquiry(inq.id)}
                              className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition cursor-pointer"
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
          )}

          {/* TAB 3: MANAGE BLOGS */}
          {activeTab === "blogs" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-royal font-serif">Manage Travel Blogs</h2>
                <button
                  onClick={() => setEditBlog({ title: { en: "", es: "", pt: "" }, excerpt: { en: "", es: "", pt: "" }, content: { en: "", es: "", pt: "" }, slug: "", category: "Culture", featuredImage: "" })}
                  className="bg-royal text-white border border-gold/20 hover:bg-gold hover:text-royal font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Blog</span>
                </button>
              </div>

              {/* Edit / Create Form */}
              {editBlog && (
                <form onSubmit={handleSaveBlog} className="bg-white border border-gold/20 rounded-[2rem] p-8 shadow-md space-y-6 text-xs text-royal">
                  <h3 className="text-base font-bold font-serif">{editBlog.slug ? "Edit Blog Post" : "Create New Blog"}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase tracking-wider block">Slug (URL unique identifier)</label>
                      <input 
                        type="text" 
                        required
                        value={editBlog.slug}
                        onChange={e => setEditBlog({...editBlog, slug: e.target.value})}
                        placeholder="explore-rajasthan" 
                        className="w-full bg-[#FAF8F5] border border-gold/15 rounded-xl px-4 py-3 outline-none focus:border-gold"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase tracking-wider block">Category</label>
                      <input 
                        type="text" 
                        value={editBlog.category || "Culture"}
                        onChange={e => setEditBlog({...editBlog, category: e.target.value})}
                        className="w-full bg-[#FAF8F5] border border-gold/15 rounded-xl px-4 py-3 outline-none"
                      />
                    </div>
                  </div>

                  {/* Title (Translatable) */}
                  <div className="space-y-3">
                    <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Title Translations</span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {["en", "es", "pt"].map((lang) => (
                        <div key={lang} className="space-y-1">
                          <label className="font-bold uppercase tracking-wider">Title ({lang.toUpperCase()})</label>
                          <input 
                            type="text" 
                            required
                            value={editBlog.title?.[lang] || ""}
                            onChange={e => setEditBlog({
                              ...editBlog, 
                              title: { ...editBlog.title, [lang]: e.target.value }
                            })}
                            className="w-full bg-[#FAF8F5] border border-gold/15 rounded-xl px-3 py-2.5 outline-none"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Excerpt (Translatable) */}
                  <div className="space-y-3">
                    <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Excerpt Translations</span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {["en", "es", "pt"].map((lang) => (
                        <div key={lang} className="space-y-1">
                          <label className="font-bold uppercase tracking-wider">Excerpt ({lang.toUpperCase()})</label>
                          <textarea 
                            value={editBlog.excerpt?.[lang] || ""}
                            onChange={e => setEditBlog({
                              ...editBlog, 
                              excerpt: { ...editBlog.excerpt, [lang]: e.target.value }
                            })}
                            className="w-full h-16 bg-[#FAF8F5] border border-gold/15 rounded-xl px-3 py-2 outline-none"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image Upload */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                    <div className="md:col-span-8 space-y-1.5">
                      <label className="font-bold uppercase tracking-wider block">Featured Image URL</label>
                      <input 
                        type="text" 
                        value={editBlog.featuredImage}
                        onChange={e => setEditBlog({...editBlog, featuredImage: e.target.value})}
                        className="w-full bg-[#FAF8F5] border border-gold/15 rounded-xl px-4 py-3 outline-none"
                      />
                    </div>
                    <div className="md:col-span-4 pb-0.5">
                      <CloudinaryUpload 
                        onUploadComplete={(url) => setEditBlog({ ...editBlog, featuredImage: url })} 
                        label="Upload Blog Cover"
                      />
                    </div>
                  </div>

                  {/* Content markup */}
                  <div className="space-y-1.5">
                    <label className="font-bold uppercase tracking-wider block">Content Markdown (EN)</label>
                    <textarea 
                      required
                      value={editBlog.content?.en || ""}
                      onChange={e => setEditBlog({
                        ...editBlog,
                        content: { ...editBlog.content, en: e.target.value }
                      })}
                      className="w-full h-32 bg-[#FAF8F5] border border-gold/15 rounded-xl p-4 outline-none font-mono"
                    />
                  </div>

                  {/* Form CTA actions */}
                  <div className="flex gap-4 pt-4">
                    <button type="submit" className="bg-royal text-white px-6 py-3.5 rounded-xl font-bold uppercase tracking-wider cursor-pointer">
                      Save Blog Post
                    </button>
                    <button type="button" onClick={() => setEditBlog(null)} className="bg-beige/35 text-royal px-6 py-3.5 rounded-xl font-bold uppercase tracking-wider cursor-pointer">
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              {/* Blogs List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((b) => (
                  <div key={b.slug} className="bg-white border border-beige/45 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between">
                    <img src={b.featuredImage} alt={b.title?.en} className="h-40 w-full object-cover" />
                    <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                      <div className="space-y-2">
                        <span className="text-[9px] uppercase tracking-wider font-extrabold text-gold">{b.category}</span>
                        <h4 className="text-base font-bold text-royal font-serif line-clamp-1">{b.title?.en}</h4>
                        <p className="text-xs text-foreground/50 line-clamp-2">{b.excerpt?.en}</p>
                      </div>
                      
                      <div className="flex justify-between items-center pt-4 border-t border-beige/20 text-xs">
                        <button
                          onClick={() => setEditBlog(b)}
                          className="text-royal hover:text-gold flex items-center gap-1 font-bold uppercase tracking-wider cursor-pointer"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => handleDeleteBlog(b.slug)}
                          className="text-red-600 hover:text-red-700 flex items-center gap-1 font-bold uppercase tracking-wider cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: TOUR PACKAGES */}
          {activeTab === "packages" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-royal font-serif">Manage Tour Packages</h2>
                <button
                  onClick={() => setEditPackage({ title: { en: "", es: "", pt: "" }, tagline: { en: "", es: "", pt: "" }, slug: "", category: "Luxury", durationDays: 7, image: "", highlights: [] })}
                  className="bg-royal text-white border border-gold/20 hover:bg-gold hover:text-royal font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Package</span>
                </button>
              </div>

              {/* Form editing package */}
              {editPackage && (
                <form onSubmit={handleSavePackage} className="bg-white border border-gold/20 rounded-[2rem] p-8 shadow-md space-y-6 text-xs text-royal">
                  <h3 className="text-base font-bold font-serif">{editPackage.slug ? "Edit Package" : "Create New Tour Package"}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase tracking-wider block">Slug</label>
                      <input 
                        type="text" 
                        required
                        value={editPackage.slug}
                        onChange={e => setEditPackage({...editPackage, slug: e.target.value})}
                        className="w-full bg-[#FAF8F5] border border-gold/15 rounded-xl px-4 py-3 outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase tracking-wider block">Category</label>
                      <input 
                        type="text" 
                        value={editPackage.category}
                        onChange={e => setEditPackage({...editPackage, category: e.target.value})}
                        className="w-full bg-[#FAF8F5] border border-gold/15 rounded-xl px-4 py-3 outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase tracking-wider block">Duration Days</label>
                      <input 
                        type="number" 
                        value={editPackage.durationDays}
                        onChange={e => setEditPackage({...editPackage, durationDays: parseInt(e.target.value) || 5})}
                        className="w-full bg-[#FAF8F5] border border-gold/15 rounded-xl px-4 py-3 outline-none"
                      />
                    </div>
                  </div>

                  {/* Title Translations */}
                  <div className="space-y-3">
                    <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Title Translations</span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {["en", "es", "pt"].map((lang) => (
                        <div key={lang} className="space-y-1">
                          <label className="font-bold uppercase tracking-wider">Title ({lang.toUpperCase()})</label>
                          <input 
                            type="text" 
                            required
                            value={editPackage.title?.[lang] || ""}
                            onChange={e => setEditPackage({
                              ...editPackage, 
                              title: { ...editPackage.title, [lang]: e.target.value }
                            })}
                            className="w-full bg-[#FAF8F5] border border-gold/15 rounded-xl px-3 py-2.5 outline-none"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tagline Translations */}
                  <div className="space-y-3">
                    <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Tagline Translations</span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {["en", "es", "pt"].map((lang) => (
                        <div key={lang} className="space-y-1">
                          <label className="font-bold uppercase tracking-wider">Tagline ({lang.toUpperCase()})</label>
                          <input 
                            type="text" 
                            value={editPackage.tagline?.[lang] || ""}
                            onChange={e => setEditPackage({
                              ...editPackage, 
                              tagline: { ...editPackage.tagline, [lang]: e.target.value }
                            })}
                            className="w-full bg-[#FAF8F5] border border-gold/15 rounded-xl px-3 py-2.5 outline-none"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Package Image URL */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                    <div className="md:col-span-8 space-y-1.5">
                      <label className="font-bold uppercase tracking-wider block">Image URL</label>
                      <input 
                        type="text" 
                        value={editPackage.image}
                        onChange={e => setEditPackage({...editPackage, image: e.target.value})}
                        className="w-full bg-[#FAF8F5] border border-gold/15 rounded-xl px-4 py-3 outline-none"
                      />
                    </div>
                    <div className="md:col-span-4 pb-0.5">
                      <CloudinaryUpload 
                        onUploadComplete={(url) => setEditPackage({ ...editPackage, image: url })} 
                        label="Upload Package Photo"
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 pt-4">
                    <button type="submit" className="bg-royal text-white px-6 py-3.5 rounded-xl font-bold uppercase tracking-wider cursor-pointer">
                      Save Tour Package
                    </button>
                    <button type="button" onClick={() => setEditPackage(null)} className="bg-beige/35 text-royal px-6 py-3.5 rounded-xl font-bold uppercase tracking-wider cursor-pointer">
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              {/* Packages Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {packages.map((pkg) => (
                  <div key={pkg.slug} className="bg-white border border-beige/45 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between">
                    <img src={pkg.image} alt={pkg.title?.en} className="h-40 w-full object-cover" />
                    <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[8px] bg-royal/10 text-royal px-2 py-0.5 rounded uppercase font-bold">{pkg.category}</span>
                          <span className="text-[10px] text-foreground/45 font-semibold">{pkg.durationDays} Days</span>
                        </div>
                        <h4 className="text-base font-bold text-royal font-serif line-clamp-1">{pkg.title?.en}</h4>
                        <p className="text-xs text-foreground/50 line-clamp-2">{pkg.tagline?.en}</p>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t border-beige/20 text-xs">
                        <button
                          onClick={() => setEditPackage(pkg)}
                          className="text-royal hover:text-gold flex items-center gap-1 font-bold uppercase tracking-wider cursor-pointer"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => handleDeletePackage(pkg.slug)}
                          className="text-red-600 hover:text-red-700 flex items-center gap-1 font-bold uppercase tracking-wider cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: FOOD CATALOG */}
          {activeTab === "cuisines" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-royal font-serif">Manage Food Catalog</h2>
                <button
                  onClick={() => setEditFood({ title: { en: "", es: "", pt: "" }, tagline: { en: "", es: "", pt: "" }, description: { en: "", es: "", pt: "" }, slug: "", category: "North India", image: "" })}
                  className="bg-royal text-white border border-gold/20 hover:bg-gold hover:text-royal font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Food Item</span>
                </button>
              </div>

              {/* Form editing food */}
              {editFood && (
                <form onSubmit={handleSaveFood} className="bg-white border border-gold/20 rounded-[2rem] p-8 shadow-md space-y-6 text-xs text-royal">
                  <h3 className="text-base font-bold font-serif">{editFood.slug ? "Edit Food Item" : "Create New Food Entry"}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase tracking-wider block">Slug</label>
                      <input 
                        type="text" 
                        required
                        value={editFood.slug}
                        onChange={e => setEditFood({...editFood, slug: e.target.value})}
                        className="w-full bg-[#FAF8F5] border border-gold/15 rounded-xl px-4 py-3 outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase tracking-wider block">Category (e.g. South India)</label>
                      <input 
                        type="text" 
                        value={editFood.category}
                        onChange={e => setEditFood({...editFood, category: e.target.value})}
                        className="w-full bg-[#FAF8F5] border border-gold/15 rounded-xl px-4 py-3 outline-none"
                      />
                    </div>
                  </div>

                  {/* Title Translations */}
                  <div className="space-y-3">
                    <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Title Translations</span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {["en", "es", "pt"].map((lang) => (
                        <div key={lang} className="space-y-1">
                          <label className="font-bold uppercase tracking-wider">Title ({lang.toUpperCase()})</label>
                          <input 
                            type="text" 
                            required
                            value={editFood.title?.[lang] || ""}
                            onChange={e => setEditFood({
                              ...editFood, 
                              title: { ...editFood.title, [lang]: e.target.value }
                            })}
                            className="w-full bg-[#FAF8F5] border border-gold/15 rounded-xl px-3 py-2.5 outline-none"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image URL */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                    <div className="md:col-span-8 space-y-1.5">
                      <label className="font-bold uppercase tracking-wider block">Image URL</label>
                      <input 
                        type="text" 
                        value={editFood.image}
                        onChange={e => setEditFood({...editFood, image: e.target.value})}
                        className="w-full bg-[#FAF8F5] border border-gold/15 rounded-xl px-4 py-3 outline-none"
                      />
                    </div>
                    <div className="md:col-span-4 pb-0.5">
                      <CloudinaryUpload 
                        onUploadComplete={(url) => setEditFood({ ...editFood, image: url })} 
                        label="Upload Food Photo"
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <button type="submit" className="bg-royal text-white px-6 py-3.5 rounded-xl font-bold uppercase tracking-wider cursor-pointer">
                      Save Food Item
                    </button>
                    <button type="button" onClick={() => setEditFood(null)} className="bg-beige/35 text-royal px-6 py-3.5 rounded-xl font-bold uppercase tracking-wider cursor-pointer">
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              {/* Foods List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {foods.map((food) => (
                  <div key={food.slug} className="bg-white border border-beige/45 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between">
                    <img src={food.image} alt={food.title?.en} className="h-40 w-full object-cover" />
                    <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <span className="text-[8px] bg-royal/10 text-royal px-2 py-0.5 rounded uppercase font-bold">{food.category}</span>
                        <h4 className="text-base font-bold text-royal font-serif line-clamp-1">{food.title?.en}</h4>
                        <p className="text-xs text-foreground/50 line-clamp-2">{food.tagline?.en}</p>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t border-beige/20 text-xs">
                        <button
                          onClick={() => setEditFood(food)}
                          className="text-royal hover:text-gold flex items-center gap-1 font-bold uppercase tracking-wider cursor-pointer"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                          <span>Edit</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: DESTINATIONS */}
          {activeTab === "destinations" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-royal font-serif">Manage Destinations (States)</h2>
                <button
                  onClick={() => setEditState({ title: { en: "", es: "", pt: "" }, tagline: { en: "", es: "", pt: "" }, description: { en: "", es: "", pt: "" }, slug: "", region: "North", image: "" })}
                  className="bg-royal text-white border border-gold/20 hover:bg-gold hover:text-royal font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add State Destination</span>
                </button>
              </div>

              {/* Form editing destination */}
              {editState && (
                <form onSubmit={handleSaveState} className="bg-white border border-gold/20 rounded-[2rem] p-8 shadow-md space-y-6 text-xs text-royal">
                  <h3 className="text-base font-bold font-serif">{editState.slug ? "Edit State Destination" : "Create New Destination State"}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase tracking-wider block">Slug</label>
                      <input 
                        type="text" 
                        required
                        value={editState.slug}
                        onChange={e => setEditState({...editState, slug: e.target.value})}
                        className="w-full bg-[#FAF8F5] border border-gold/15 rounded-xl px-4 py-3 outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase tracking-wider block">Region (e.g. North, South)</label>
                      <input 
                        type="text" 
                        value={editState.region}
                        onChange={e => setEditState({...editState, region: e.target.value})}
                        className="w-full bg-[#FAF8F5] border border-gold/15 rounded-xl px-4 py-3 outline-none"
                      />
                    </div>
                  </div>

                  {/* Title Translations */}
                  <div className="space-y-3">
                    <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Title Translations</span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {["en", "es", "pt"].map((lang) => (
                        <div key={lang} className="space-y-1">
                          <label className="font-bold uppercase tracking-wider">Title ({lang.toUpperCase()})</label>
                          <input 
                            type="text" 
                            required
                            value={editState.title?.[lang] || ""}
                            onChange={e => setEditState({
                              ...editState, 
                              title: { ...editState.title, [lang]: e.target.value }
                            })}
                            className="w-full bg-[#FAF8F5] border border-gold/15 rounded-xl px-3 py-2.5 outline-none"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image URL */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                    <div className="md:col-span-8 space-y-1.5">
                      <label className="font-bold uppercase tracking-wider block">Image URL</label>
                      <input 
                        type="text" 
                        value={editState.image}
                        onChange={e => setEditState({...editState, image: e.target.value})}
                        className="w-full bg-[#FAF8F5] border border-gold/15 rounded-xl px-4 py-3 outline-none"
                      />
                    </div>
                    <div className="md:col-span-4 pb-0.5">
                      <CloudinaryUpload 
                        onUploadComplete={(url) => setEditState({ ...editState, image: url })} 
                        label="Upload State Banner"
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <button type="submit" className="bg-royal text-white px-6 py-3.5 rounded-xl font-bold uppercase tracking-wider cursor-pointer">
                      Save State Destination
                    </button>
                    <button type="button" onClick={() => setEditState(null)} className="bg-beige/35 text-royal px-6 py-3.5 rounded-xl font-bold uppercase tracking-wider cursor-pointer">
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              {/* States List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {states.map((st) => (
                  <div key={st.slug} className="bg-white border border-beige/45 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between">
                    <img src={st.image} alt={st.title?.en} className="h-40 w-full object-cover" />
                    <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <span className="text-[8px] bg-royal/10 text-royal px-2 py-0.5 rounded uppercase font-bold">{st.region} India</span>
                        <h4 className="text-base font-bold text-royal font-serif line-clamp-1">{st.title?.en}</h4>
                        <p className="text-xs text-foreground/50 line-clamp-2">{st.tagline?.en}</p>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t border-beige/20 text-xs">
                        <button
                          onClick={() => setEditState(st)}
                          className="text-royal hover:text-gold flex items-center gap-1 font-bold uppercase tracking-wider cursor-pointer"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                          <span>Edit</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: TESTIMONIALS */}
          {activeTab === "testimonials" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-royal font-serif">Customer Testimonials</h2>
                <button
                  onClick={() => setNewTestimonial({ name: "", location: "", stars: 5, image: "", quote: { en: "", es: "", pt: "" } })}
                  className="bg-royal text-white border border-gold/20 hover:bg-gold hover:text-royal font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Testimonial</span>
                </button>
              </div>

              {/* Add New Testimonial Form */}
              {newTestimonial && (
                <form onSubmit={handleSaveTestimonial} className="bg-white border border-gold/20 rounded-[2rem] p-8 shadow-md space-y-6 text-xs text-royal">
                  <h3 className="text-base font-bold font-serif">Add Guest Review</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase tracking-wider block">Guest Name</label>
                      <input 
                        type="text" 
                        required
                        value={newTestimonial.name}
                        onChange={e => setNewTestimonial({...newTestimonial, name: e.target.value})}
                        className="w-full bg-[#FAF8F5] border border-gold/15 rounded-xl px-4 py-3 outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase tracking-wider block">Location (e.g. Madrid, Spain)</label>
                      <input 
                        type="text" 
                        value={newTestimonial.location}
                        onChange={e => setNewTestimonial({...newTestimonial, location: e.target.value})}
                        className="w-full bg-[#FAF8F5] border border-gold/15 rounded-xl px-4 py-3 outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase tracking-wider block">Stars (1-5)</label>
                      <input 
                        type="number" 
                        min="1"
                        max="5"
                        value={newTestimonial.stars}
                        onChange={e => setNewTestimonial({...newTestimonial, stars: parseInt(e.target.value) || 5})}
                        className="w-full bg-[#FAF8F5] border border-gold/15 rounded-xl px-4 py-3 outline-none"
                      />
                    </div>
                  </div>

                  {/* Quote Translations */}
                  <div className="space-y-3">
                    <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Review Quote Translations</span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {["en", "es", "pt"].map((lang) => (
                        <div key={lang} className="space-y-1">
                          <label className="font-bold uppercase tracking-wider">Quote ({lang.toUpperCase()})</label>
                          <textarea 
                            required={lang === "en"}
                            value={newTestimonial.quote?.[lang] || ""}
                            onChange={e => setNewTestimonial({
                              ...newTestimonial, 
                              quote: { ...newTestimonial.quote, [lang]: e.target.value }
                            })}
                            className="w-full h-20 bg-[#FAF8F5] border border-gold/15 rounded-xl p-3 outline-none"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image URL */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                    <div className="md:col-span-8 space-y-1.5">
                      <label className="font-bold uppercase tracking-wider block">Avatar Profile Image URL</label>
                      <input 
                        type="text" 
                        value={newTestimonial.image}
                        onChange={e => setNewTestimonial({...newTestimonial, image: e.target.value})}
                        className="w-full bg-[#FAF8F5] border border-gold/15 rounded-xl px-4 py-3 outline-none"
                      />
                    </div>
                    <div className="md:col-span-4 pb-0.5">
                      <CloudinaryUpload 
                        onUploadComplete={(url) => setNewTestimonial({ ...newTestimonial, image: url })} 
                        label="Upload Avatar Photo"
                      />
                    </div>
                  </div>

                  {/* Form actions */}
                  <div className="flex gap-4 pt-4">
                    <button type="submit" className="bg-royal text-white px-6 py-3.5 rounded-xl font-bold uppercase tracking-wider cursor-pointer">
                      Save Review
                    </button>
                    <button type="button" onClick={() => setNewTestimonial(null)} className="bg-beige/35 text-royal px-6 py-3.5 rounded-xl font-bold uppercase tracking-wider cursor-pointer">
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              {/* Reviews List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((t, idx) => (
                  <div key={t.id || idx} className="bg-white border border-beige/45 rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: t.stars }).map((_, idx) => (
                          <Star key={idx} className="w-3.5 h-3.5 fill-gold text-gold" />
                        ))}
                      </div>
                      <p className="text-xs text-foreground/75 leading-relaxed font-light italic">
                        &ldquo;{t.quote?.en}&rdquo;
                      </p>
                    </div>

                    <div className="flex items-center gap-3.5 pt-4 border-t border-beige/25">
                      <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-gold/10" />
                      <div>
                        <p className="text-xs font-bold text-royal">{t.name}</p>
                        <p className="text-[10px] text-foreground/45 uppercase tracking-wider font-semibold">{t.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}

      </div>
    </div>
  );
}
