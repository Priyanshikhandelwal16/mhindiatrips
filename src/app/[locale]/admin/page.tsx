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
  updateStateAction,
  createPageAction,
  updatePageAction,
  deletePageAction
} from "@/app/actions/admin";
import { 
  getBlogsAction,
  getTourPackagesAction,
  getFoodsAction,
  getStatesAction,
  getTestimonialsAction,
  getPagesAction
} from "@/app/actions/queries";
import { 
  BarChart, Users, FileText, Compass, CheckCircle, Trash2, 
  Mail, Phone, MapPin, Calendar, Plus, Edit2, Upload, Lock, 
  CheckCircle2, Star, Eye, Utensils, Sparkles, LogOut, Map,
  LayoutDashboard, Layers
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
      <label className="bg-gold/10 hover:bg-gold/20 border border-gold/30 text-royal hover:text-gold font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 cursor-pointer transition flex items-center gap-1.5">
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
  const [pages, setPages] = useState<any[]>([]);

  // Editing state trackers
  const [editBlog, setEditBlog] = useState<any>(null);
  const [editPackage, setEditPackage] = useState<any>(null);
  const [editFood, setEditFood] = useState<any>(null);
  const [editState, setEditState] = useState<any>(null);
  const [newTestimonial, setNewTestimonial] = useState<any>(null);
  const [editPage, setEditPage] = useState<any>(null);
  const [newCustomPage, setNewCustomPage] = useState<any>(null);

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
      const [inqs, blgs, pkgs, fds, sts, tsts, pgs] = await Promise.all([
        getInquiriesAction(),
        getBlogsAction(),
        getTourPackagesAction(),
        getFoodsAction(),
        getStatesAction(),
        getTestimonialsAction(),
        getPagesAction()
      ]);
      setInquiries(inqs || []);
      setBlogs(blgs || []);
      setPackages(pkgs || []);
      setFoods(fds || []);
      setStates(sts || []);
      setTestimonials(tsts || []);
      setPages(pgs || []);
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

  // PAGES ACTIONS
  const handleSavePage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editPage.title?.en) return alert("Title is required.");

    setLoading(true);
    const res = await updatePageAction(editPage.id, editPage);

    if (res.success) {
      alert("Page saved successfully!");
      setEditPage(null);
      await loadCMSData();
    } else {
      alert(res.error || "Failed to save page.");
      setLoading(false);
    }
  };

  const handleCreatePage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCustomPage.id || !newCustomPage.title?.en) return alert("Slug and Title are required.");
    // Force lowercase slug without spaces
    const slug = newCustomPage.id.toLowerCase().replace(/[^a-z0-9-_]/g, "-");
    
    setLoading(true);
    const pageData = {
      ...newCustomPage,
      id: slug,
      isCustom: true,
      content: {
        body: newCustomPage.content?.body || { en: "", es: "", pt: "" }
      }
    };
    const res = await createPageAction(pageData);

    if (res.success) {
      alert("Custom Page created successfully!");
      setNewCustomPage(null);
      await loadCMSData();
    } else {
      alert(res.error || "Failed to create page.");
      setLoading(false);
    }
  };

  const handleDeletePage = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this custom page?")) {
      setLoading(true);
      const res = await deletePageAction(id);
      if (res.success) {
        alert("Page deleted successfully!");
        await loadCMSData();
      } else {
        alert(res.error || "Failed to delete page.");
        setLoading(false);
      }
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
        <div className="bg-white border border-gold/15 p-8 md:p-12 shadow-2xl max-w-md w-full space-y-8 relative">
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
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none focus:border-gold"
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
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none focus:border-gold"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-royal hover:bg-gold text-white hover:text-royal transition duration-300 font-bold uppercase tracking-wider py-4 shadow-lg mt-2 cursor-pointer"
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
              className={`flex items-center space-x-3 px-4 py-3 w-full text-left text-sm font-semibold transition cursor-pointer ${
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
              className={`flex items-center space-x-3 px-4 py-3 w-full text-left text-sm font-semibold transition cursor-pointer ${
                activeTab === "leads" ? "bg-white/10 text-white font-bold" : "hover:bg-white/5 text-white/70"
              }`}
            >
              <Users className="w-5 h-5 text-gold shrink-0" />
              <span>Travel Leads</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("pages");
                window.location.hash = "pages";
              }}
              className={`flex items-center space-x-3 px-4 py-3 w-full text-left text-sm font-semibold transition cursor-pointer ${
                activeTab === "pages" ? "bg-white/10 text-white font-bold" : "hover:bg-white/5 text-white/70"
              }`}
            >
              <Layers className="w-5 h-5 text-gold shrink-0" />
              <span>Website Pages</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("destinations");
                window.location.hash = "destinations";
              }}
              className={`flex items-center space-x-3 px-4 py-3 w-full text-left text-sm font-semibold transition cursor-pointer ${
                activeTab === "destinations" ? "bg-white/10 text-white font-bold" : "hover:bg-white/5 text-white/70"
              }`}
            >
              <MapPin className="w-5 h-5 text-gold shrink-0" />
              <span>Destinations</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("packages");
                window.location.hash = "packages";
              }}
              className={`flex items-center space-x-3 px-4 py-3 w-full text-left text-sm font-semibold transition cursor-pointer ${
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
              className={`flex items-center space-x-3 px-4 py-3 w-full text-left text-sm font-semibold transition cursor-pointer ${
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
              className={`flex items-center space-x-3 px-4 py-3 w-full text-left text-sm font-semibold transition cursor-pointer ${
                activeTab === "cuisines" ? "bg-white/10 text-white font-bold" : "hover:bg-white/5 text-white/70"
              }`}
            >
              <Utensils className="w-5 h-5 text-gold shrink-0" />
              <span>Food Catalog</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("testimonials");
                window.location.hash = "testimonials";
              }}
              className={`flex items-center space-x-3 px-4 py-3 w-full text-left text-sm font-semibold transition cursor-pointer ${
                activeTab === "testimonials" ? "bg-white/10 text-white font-bold" : "hover:bg-white/5 text-white/70"
              }`}
            >
              <Star className="w-5 h-5 text-gold shrink-0" />
              <span>Testimonials</span>
            </button>
          </nav>
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
          className="bg-red-50 hover:bg-red-100 text-red-700 font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 flex items-center gap-1.5 border border-red-200 transition cursor-pointer"
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
                    <div key={i} className="bg-white border border-beige/45 p-5 shadow-sm flex items-center space-x-3">
                      <div className={`${stat.color} p-2.5`}>
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
                      <div key={inq.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between border border-beige/25 p-4 hover:bg-beige/5 transition text-xs gap-4">
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
            <div className="bg-white border border-beige/45 p-6 shadow-sm space-y-6">
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
                              className="bg-beige/25 border border-beige/80 px-2.5 py-1 text-xs font-semibold focus:border-gold outline-none cursor-pointer"
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
                              className="p-1.5 text-red-600 hover:bg-red-50 transition cursor-pointer"
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
                  className="bg-royal text-white border border-gold/20 hover:bg-gold hover:text-royal font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 flex items-center gap-1.5 transition cursor-pointer"
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
                        className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none focus:border-gold"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase tracking-wider block">Category</label>
                      <input 
                        type="text" 
                        value={editBlog.category || "Culture"}
                        onChange={e => setEditBlog({...editBlog, category: e.target.value})}
                        className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none"
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
                            className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2.5 outline-none"
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
                            className="w-full h-16 bg-[#FAF8F5] border border-gold/15 px-3 py-2 outline-none"
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
                        className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none"
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
                      className="w-full h-32 bg-[#FAF8F5] border border-gold/15 p-4 outline-none font-mono"
                    />
                  </div>

                  {/* Form CTA actions */}
                  <div className="flex gap-4 pt-4">
                    <button type="submit" className="bg-royal text-white px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer">
                      Save Blog Post
                    </button>
                    <button type="button" onClick={() => setEditBlog(null)} className="bg-beige/35 text-royal px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer">
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              {/* Blogs List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((b) => (
                  <div key={b.slug} className="bg-white border border-beige/45 overflow-hidden shadow-sm flex flex-col justify-between">
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
                  className="bg-royal text-white border border-gold/20 hover:bg-gold hover:text-royal font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 flex items-center gap-1.5 transition cursor-pointer"
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
                        className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase tracking-wider block">Category</label>
                      <input 
                        type="text" 
                        value={editPackage.category}
                        onChange={e => setEditPackage({...editPackage, category: e.target.value})}
                        className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase tracking-wider block">Duration Days</label>
                      <input 
                        type="number" 
                        value={editPackage.durationDays}
                        onChange={e => setEditPackage({...editPackage, durationDays: parseInt(e.target.value) || 5})}
                        className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none"
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
                            className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2.5 outline-none"
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
                            className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2.5 outline-none"
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
                        className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none"
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
                    <button type="submit" className="bg-royal text-white px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer">
                      Save Tour Package
                    </button>
                    <button type="button" onClick={() => setEditPackage(null)} className="bg-beige/35 text-royal px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer">
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              {/* Packages Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {packages.map((pkg) => (
                  <div key={pkg.slug} className="bg-white border border-beige/45 overflow-hidden shadow-sm flex flex-col justify-between">
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
                  className="bg-royal text-white border border-gold/20 hover:bg-gold hover:text-royal font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 flex items-center gap-1.5 transition cursor-pointer"
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
                        className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase tracking-wider block">Category (e.g. South India)</label>
                      <input 
                        type="text" 
                        value={editFood.category}
                        onChange={e => setEditFood({...editFood, category: e.target.value})}
                        className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none"
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
                            className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2.5 outline-none"
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
                        className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none"
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
                    <button type="submit" className="bg-royal text-white px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer">
                      Save Food Item
                    </button>
                    <button type="button" onClick={() => setEditFood(null)} className="bg-beige/35 text-royal px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer">
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              {/* Foods List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {foods.map((food) => (
                  <div key={food.slug} className="bg-white border border-beige/45 overflow-hidden shadow-sm flex flex-col justify-between">
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
                  className="bg-royal text-white border border-gold/20 hover:bg-gold hover:text-royal font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 flex items-center gap-1.5 transition cursor-pointer"
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
                        className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase tracking-wider block">Region (e.g. North, South)</label>
                      <input 
                        type="text" 
                        value={editState.region}
                        onChange={e => setEditState({...editState, region: e.target.value})}
                        className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none"
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
                            className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2.5 outline-none"
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
                        className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none"
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
                    <button type="submit" className="bg-royal text-white px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer">
                      Save State Destination
                    </button>
                    <button type="button" onClick={() => setEditState(null)} className="bg-beige/35 text-royal px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer">
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              {/* States List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {states.map((st) => (
                  <div key={st.slug} className="bg-white border border-beige/45 overflow-hidden shadow-sm flex flex-col justify-between">
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
                  className="bg-royal text-white border border-gold/20 hover:bg-gold hover:text-royal font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 flex items-center gap-1.5 transition cursor-pointer"
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
                        className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase tracking-wider block">Location (e.g. Madrid, Spain)</label>
                      <input 
                        type="text" 
                        value={newTestimonial.location}
                        onChange={e => setNewTestimonial({...newTestimonial, location: e.target.value})}
                        className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none"
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
                        className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none"
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
                            className="w-full h-20 bg-[#FAF8F5] border border-gold/15 p-3 outline-none"
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
                        className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none"
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
                    <button type="submit" className="bg-royal text-white px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer">
                      Save Review
                    </button>
                    <button type="button" onClick={() => setNewTestimonial(null)} className="bg-beige/35 text-royal px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer">
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              {/* Reviews List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((t, idx) => (
                  <div key={t.id || idx} className="bg-white border border-beige/45 p-6 shadow-sm flex flex-col justify-between space-y-4">
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

          {/* TAB 8: MANAGE PAGES */}
          {activeTab === "pages" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-royal font-serif">Website Pages</h2>
                <button
                  onClick={() => setNewCustomPage({ id: "", title: { en: "", es: "", pt: "" }, heroImage: "", content: { body: { en: "", es: "", pt: "" } } })}
                  className="bg-royal text-white border border-gold/20 hover:bg-gold hover:text-royal font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 flex items-center gap-1.5 transition cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Custom Page</span>
                </button>
              </div>

              {/* Create Custom Page Form */}
              {newCustomPage && (
                <form onSubmit={handleCreatePage} className="bg-white border border-gold/20 p-8 shadow-md space-y-6 text-xs text-royal">
                  <h3 className="text-base font-bold font-serif">Create New Custom Page</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase tracking-wider block">Page Slug (e.g. exclusive-tours)</label>
                      <input 
                        type="text" 
                        required
                        value={newCustomPage.id}
                        onChange={e => setNewCustomPage({...newCustomPage, id: e.target.value})}
                        className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none"
                        placeholder="my-page-slug"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold uppercase tracking-wider block">Hero Banner Image URL (Optional)</label>
                      <input 
                        type="text" 
                        value={newCustomPage.heroImage || ""}
                        onChange={e => setNewCustomPage({...newCustomPage, heroImage: e.target.value})}
                        className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none"
                        placeholder="/images/luxury_palace_train.png"
                      />
                    </div>
                  </div>

                  {/* Title (Translatable) */}
                  <div className="space-y-3">
                    <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Page Title Translations</span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {["en", "es", "pt"].map((lang) => (
                        <div key={lang} className="space-y-1">
                          <label className="font-bold uppercase tracking-wider">Title ({lang.toUpperCase()})</label>
                          <input 
                            type="text" 
                            required
                            value={newCustomPage.title?.[lang] || ""}
                            onChange={e => setNewCustomPage({
                              ...newCustomPage, 
                              title: { ...newCustomPage.title, [lang]: e.target.value }
                            })}
                            className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2.5 outline-none"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Body Content HTML (Translatable) */}
                  <div className="space-y-3">
                    <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Page HTML Content</span>
                    <div className="grid grid-cols-1 gap-4">
                      {["en", "es", "pt"].map((lang) => (
                        <div key={lang} className="space-y-1.5">
                          <label className="font-bold uppercase tracking-wider">HTML Body ({lang.toUpperCase()})</label>
                          <textarea 
                            required={lang === "en"}
                            value={newCustomPage.content?.body?.[lang] || ""}
                            onChange={e => setNewCustomPage({
                              ...newCustomPage, 
                              content: { 
                                ...newCustomPage.content, 
                                body: { ...newCustomPage.content?.body, [lang]: e.target.value } 
                              }
                            })}
                            className="w-full h-32 bg-[#FAF8F5] border border-gold/15 p-4 outline-none font-mono text-[11px]"
                            placeholder="<p>Welcome to our custom page content...</p>"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button type="submit" className="bg-royal text-white px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer">
                      Create Page
                    </button>
                    <button type="button" onClick={() => setNewCustomPage(null)} className="bg-beige/35 text-royal px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer">
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              {/* Edit Page Form */}
              {editPage && (
                <form onSubmit={handleSavePage} className="bg-white border border-gold/20 p-8 shadow-md space-y-6 text-xs text-royal">
                  <div className="flex justify-between items-center border-b border-beige/40 pb-4">
                    <h3 className="text-base font-bold font-serif">Editing: <span className="text-gold font-light">/{editPage.id}</span></h3>
                    <span className="bg-royal/10 text-royal px-2.5 py-1 rounded text-[10px] uppercase font-bold tracking-wider">{editPage.isCustom ? "Custom Page" : "System Page"}</span>
                  </div>

                  {/* Hero Image - Available for ALL pages */}
                  <div className="space-y-3">
                    <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Hero / Banner Image</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                      <div className="space-y-1.5">
                        <label className="font-bold uppercase tracking-wider block">Image URL</label>
                        <input 
                          type="text" 
                          value={editPage.heroImage || ""}
                          onChange={e => setEditPage({...editPage, heroImage: e.target.value})}
                          className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none"
                          placeholder="/images/your-image.jpg"
                        />
                      </div>
                      {editPage.heroImage && (
                        <div className="h-24 w-full overflow-hidden border border-gold/10 bg-[#FAF8F5]">
                          <img src={editPage.heroImage} alt="Hero preview" className="w-full h-full object-cover" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Title (Translatable for all pages) */}
                  <div className="space-y-3">
                    <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Page Title</span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {["en", "es", "pt"].map((lang) => (
                        <div key={lang} className="space-y-1">
                          <label className="font-bold uppercase tracking-wider">Title ({lang.toUpperCase()})</label>
                          <input 
                            type="text" 
                            required
                            value={editPage.title?.[lang] || ""}
                            onChange={e => setEditPage({
                              ...editPage, 
                              title: { ...editPage.title, [lang]: e.target.value }
                            })}
                            className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2.5 outline-none"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content Fields */}
                  <div className="space-y-6">
                    <span className="font-black uppercase tracking-widest text-[9px] text-gold block">Page Content Fields</span>
                    <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                      {Object.keys(editPage.content || {}).map((key) => {
                        const val = editPage.content[key];
                        
                        // ARRAY FIELDS (slides, stats, howItWorks, inclusions)
                        if (Array.isArray(val)) {
                          return (
                            <div key={key} className="border border-gold/20 p-5 space-y-4 bg-[#FAF8F5]">
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-[10px] text-gold uppercase tracking-wider">{key.replace(/([A-Z])/g, " $1").trim()} ({val.length} items)</span>
                                <button type="button" onClick={() => {
                                  const updatedContent = { ...editPage.content };
                                  const newItem = key === "slides" 
                                    ? { image: "", title: { en: "", es: "", pt: "" }, desc: { en: "", es: "", pt: "" }, location: { en: "", es: "", pt: "" }, sub: { en: "", es: "", pt: "" }, cta1Text: { en: "", es: "", pt: "" }, cta1Link: "/", cta2Text: { en: "", es: "", pt: "" }, cta2Link: "/" }
                                    : key === "stats"
                                    ? { value: 0, suffix: "", label: { en: "", es: "", pt: "" } }
                                    : { title: { en: "", es: "", pt: "" }, desc: { en: "", es: "", pt: "" } };
                                  updatedContent[key] = [...val, newItem];
                                  setEditPage({ ...editPage, content: updatedContent });
                                }} className="text-[9px] bg-gold/10 text-gold px-2 py-1 font-bold uppercase tracking-wider cursor-pointer hover:bg-gold/20">+ Add Item</button>
                              </div>
                              {val.map((item: any, idx: number) => (
                                <div key={idx} className="border border-gold/10 p-4 bg-white space-y-3 relative">
                                  <div className="flex items-center justify-between pb-2 border-b border-gold/10">
                                    <span className="text-[9px] font-bold text-royal/60 uppercase">Item #{idx + 1}</span>
                                    <button type="button" onClick={() => {
                                      const updatedContent = { ...editPage.content };
                                      updatedContent[key] = val.filter((_: any, i: number) => i !== idx);
                                      setEditPage({ ...editPage, content: updatedContent });
                                    }} className="text-[9px] text-red-500 font-bold uppercase cursor-pointer hover:text-red-700">Remove</button>
                                  </div>
                                  {Object.keys(item).map((field) => {
                                    const fieldVal = item[field];
                                    // Translatable object field
                                    if (fieldVal && typeof fieldVal === "object" && fieldVal.en !== undefined) {
                                      return (
                                        <div key={field} className="space-y-1">
                                          <label className="text-[9px] font-bold uppercase tracking-wider text-royal/50">{field}</label>
                                          <div className="grid grid-cols-3 gap-2">
                                            {["en", "es", "pt"].map((l) => (
                                              <input key={l} type="text" placeholder={l.toUpperCase()} value={fieldVal[l] || ""} onChange={(e) => {
                                                const updatedContent = { ...editPage.content };
                                                updatedContent[key] = [...val];
                                                updatedContent[key][idx] = { ...item, [field]: { ...fieldVal, [l]: e.target.value } };
                                                setEditPage({ ...editPage, content: updatedContent });
                                              }} className="w-full bg-[#FAF8F5] border border-gold/10 px-2 py-1.5 outline-none text-[11px]" />
                                            ))}
                                          </div>
                                        </div>
                                      );
                                    }
                                    // Simple string/number field
                                    return (
                                      <div key={field} className="space-y-1">
                                        <label className="text-[9px] font-bold uppercase tracking-wider text-royal/50">{field}</label>
                                        <input type={typeof fieldVal === "number" ? "number" : "text"} value={fieldVal ?? ""} onChange={(e) => {
                                          const updatedContent = { ...editPage.content };
                                          updatedContent[key] = [...val];
                                          updatedContent[key][idx] = { ...item, [field]: typeof fieldVal === "number" ? Number(e.target.value) : e.target.value };
                                          setEditPage({ ...editPage, content: updatedContent });
                                        }} className="w-full bg-[#FAF8F5] border border-gold/10 px-2 py-1.5 outline-none text-[11px]" />
                                      </div>
                                    );
                                  })}
                                </div>
                              ))}
                            </div>
                          );
                        }
                        
                        // OBJECT FIELDS (philosophy, foodSection, ctaBanner)
                        if (val && typeof val === "object" && !val.en && !Array.isArray(val)) {
                          return (
                            <div key={key} className="border border-gold/20 p-5 space-y-4 bg-[#FAF8F5]">
                              <span className="font-bold text-[10px] text-gold uppercase tracking-wider block">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                              {Object.keys(val).map((subKey) => {
                                const subVal = val[subKey];
                                if (subVal && typeof subVal === "object" && subVal.en !== undefined) {
                                  return (
                                    <div key={subKey} className="space-y-1">
                                      <label className="text-[9px] font-bold uppercase tracking-wider text-royal/50">{subKey}</label>
                                      <div className="grid grid-cols-3 gap-2">
                                        {["en", "es", "pt"].map((l) => (
                                          <input key={l} type="text" placeholder={l.toUpperCase()} value={subVal[l] || ""} onChange={(e) => {
                                            const updatedContent = { ...editPage.content };
                                            updatedContent[key] = { ...val, [subKey]: { ...subVal, [l]: e.target.value } };
                                            setEditPage({ ...editPage, content: updatedContent });
                                          }} className="w-full bg-white border border-gold/10 px-2 py-1.5 outline-none text-[11px]" />
                                        ))}
                                      </div>
                                    </div>
                                  );
                                }
                                return (
                                  <div key={subKey} className="space-y-1">
                                    <label className="text-[9px] font-bold uppercase tracking-wider text-royal/50">{subKey}</label>
                                    <input type="text" value={subVal || ""} onChange={(e) => {
                                      const updatedContent = { ...editPage.content };
                                      updatedContent[key] = { ...val, [subKey]: e.target.value };
                                      setEditPage({ ...editPage, content: updatedContent });
                                    }} className="w-full bg-white border border-gold/10 px-2 py-1.5 outline-none text-[11px]" />
                                  </div>
                                );
                              })}
                            </div>
                          );
                        }
                        
                        // TRANSLATABLE TEXT FIELDS (simple {en, es, pt} objects)
                        if (val && typeof val === "object" && val.en !== undefined) {
                          const sampleText = val.en || "";
                          const isLongText = sampleText.length > 80 || key === "body";
                          const isHtml = key === "body" || sampleText.includes("<");
                          return (
                            <div key={key} className="border border-gold/10 p-5 space-y-3 bg-[#FAF8F5]">
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-[10px] text-gold uppercase tracking-wider">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                                {isHtml && <span className="text-[8px] bg-royal/10 text-royal px-2 py-0.5 rounded uppercase font-bold">HTML</span>}
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {["en", "es", "pt"].map((lng) => (
                                  <div key={lng} className="space-y-1">
                                    <label className="font-semibold text-[10px] uppercase text-royal/60">{lng.toUpperCase()}</label>
                                    {isLongText ? (
                                      <textarea
                                        value={val?.[lng] || ""}
                                        onChange={(e) => {
                                          const updatedContent = { ...editPage.content };
                                          updatedContent[key] = { ...val, [lng]: e.target.value };
                                          setEditPage({ ...editPage, content: updatedContent });
                                        }}
                                        className={`w-full bg-white border border-gold/15 p-3 outline-none ${isHtml ? "h-40 font-mono text-[11px]" : "h-24"}`}
                                      />
                                    ) : (
                                      <input
                                        type="text"
                                        value={val?.[lng] || ""}
                                        onChange={(e) => {
                                          const updatedContent = { ...editPage.content };
                                          updatedContent[key] = { ...val, [lng]: e.target.value };
                                          setEditPage({ ...editPage, content: updatedContent });
                                        }}
                                        className="w-full bg-white border border-gold/15 px-3 py-2 outline-none"
                                      />
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        }

                        // PRIMITIVE FIELDS (string/number)
                        return (
                          <div key={key} className="border border-gold/10 p-5 space-y-3 bg-[#FAF8F5]">
                            <span className="font-bold text-[10px] text-gold uppercase tracking-wider block">{key}</span>
                            <input type="text" value={val || ""} onChange={(e) => {
                              const updatedContent = { ...editPage.content };
                              updatedContent[key] = e.target.value;
                              setEditPage({ ...editPage, content: updatedContent });
                            }} className="w-full bg-white border border-gold/15 px-3 py-2 outline-none" />
                          </div>
                        );
                      })}
                    </div>

                    {/* Add new content field */}
                    <div className="border-t border-beige/30 pt-4">
                      <button
                        type="button"
                        onClick={() => {
                          const fieldName = prompt("Enter field name (e.g. sectionTitle, bannerText):");
                          if (fieldName && fieldName.trim()) {
                            const updatedContent = { ...editPage.content };
                            updatedContent[fieldName.trim()] = { en: "", es: "", pt: "" };
                            setEditPage({ ...editPage, content: updatedContent });
                          }
                        }}
                        className="text-gold hover:text-royal text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Content Field</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-beige/40">
                    <button type="submit" className="bg-royal text-white px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer">
                      Save Changes
                    </button>
                    <button type="button" onClick={() => setEditPage(null)} className="bg-beige/35 text-royal px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer">
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              {/* Pages Directory List */}
              {!editPage && !newCustomPage && (
                <div className="space-y-6">
                  {/* System Pages */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-royal/60">System Pages</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {pages.filter((p: any) => !p.isCustom).map((p: any) => (
                        <div key={p.id} className="bg-white border border-beige/45 overflow-hidden shadow-sm flex flex-col justify-between">
                          {p.heroImage && (
                            <div className="h-32 overflow-hidden bg-[#FAF8F5]">
                              <img src={p.heroImage} alt={p.title?.en} className="w-full h-full object-cover" />
                            </div>
                          )}
                          <div className="p-5 space-y-3 flex-grow flex flex-col justify-between">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-[9px] uppercase tracking-wider font-extrabold text-gold">/{p.id}</span>
                                <span className="bg-beige/40 text-royal/60 px-2 py-0.5 rounded text-[8px] uppercase font-bold">System</span>
                              </div>
                              <h4 className="text-sm font-bold text-royal font-serif line-clamp-1">{p.title?.en}</h4>
                              <p className="text-[10px] text-foreground/50 font-light">
                                {Object.keys(p.content || {}).length} editable content fields
                              </p>
                            </div>
                            <button
                              onClick={() => setEditPage(p)}
                              className="w-full mt-3 py-2.5 border border-royal/15 hover:bg-royal hover:text-white text-royal text-[10px] font-bold uppercase tracking-wider transition cursor-pointer flex items-center justify-center gap-1.5"
                            >
                              <Edit2 className="w-3 h-3" />
                              <span>Edit Page</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Custom Pages */}
                  {pages.filter((p: any) => p.isCustom).length > 0 && (
                    <div className="space-y-3 pt-6 border-t border-beige/30">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-royal/60">Custom Pages</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {pages.filter((p: any) => p.isCustom).map((p: any) => (
                          <div key={p.id} className="bg-white border border-beige/45 overflow-hidden shadow-sm flex flex-col justify-between">
                            {p.heroImage && (
                              <div className="h-32 overflow-hidden bg-[#FAF8F5]">
                                <img src={p.heroImage} alt={p.title?.en} className="w-full h-full object-cover" />
                              </div>
                            )}
                            <div className="p-5 space-y-3 flex-grow flex flex-col justify-between">
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-[9px] uppercase tracking-wider font-extrabold text-gold">/{p.id}</span>
                                  <span className="bg-royal/10 text-royal px-2 py-0.5 rounded text-[8px] uppercase font-bold">Custom</span>
                                </div>
                                <h4 className="text-sm font-bold text-royal font-serif line-clamp-1">{p.title?.en}</h4>
                              </div>
                              <div className="flex justify-between items-center pt-3 border-t border-beige/20 mt-3">
                                <button
                                  onClick={() => setEditPage(p)}
                                  className="text-royal hover:text-gold flex items-center gap-1 font-bold text-[10px] uppercase tracking-wider cursor-pointer"
                                >
                                  <Edit2 className="w-3 h-3" />
                                  <span>Edit</span>
                                </button>
                                <button
                                  onClick={() => handleDeletePage(p.id)}
                                  className="text-red-600 hover:text-red-700 flex items-center gap-1 font-bold text-[10px] uppercase tracking-wider cursor-pointer"
                                >
                                  <Trash2 className="w-3 h-3" />
                                  <span>Delete</span>
                                </button>
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
          )}

        </div>
      )}

      </div>
    </div>
  );
}
