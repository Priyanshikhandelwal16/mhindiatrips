"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { 
  BarChart, Users, FileText, Compass, CheckCircle2, AlertCircle, 
  Layers, Utensils, Star, Calendar, LogOut, Menu, X, Globe, Link2, MapPin,
  Settings
} from "lucide-react";

// Server Actions
import { getInquiriesAction } from "@/app/actions/inquiry";
import { 
  updateInquiryStatusAction,
  updateInquiryAction,
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
  deletePageAction,
  deleteStateAction,
  deleteFoodAction,
  updateTestimonialAction,
  deleteTestimonialAction,
  getSettingsAction,
  updateContactDetailsAction,
  updateAdminPasswordAction,
  verifyAdminCredentialsAction,
  updateStateStatusAction,
  createCityAction,
  updateCityAction,
  deleteCityAction,
  previewDestinationAction,
  logoutAdminAction,
  checkAdminSessionAction
} from "@/app/actions/admin";
import { 
  getBlogsAction,
  getTourPackagesAction,
  getFoodsAction,
  getStatesAction,
  getTestimonialsAction,
  getPagesAction,
  getParentDestinationsAction,
  getStatesByParentDestinationAction,
  getOutboundDestinationsAction
} from "@/app/actions/queries";

// Tab Subcomponents
import DashboardTab from "@/components/admin/DashboardTab";
import InquiriesTab from "@/components/admin/InquiriesTab";
import PagesTab from "@/components/admin/PagesTab";
import DestinationsTab from "@/components/admin/DestinationsTab";
import OutboundTab from "@/components/admin/OutboundTab";
import PackagesTab from "@/components/admin/PackagesTab";
import BlogsTab from "@/components/admin/BlogsTab";
import CuisinesTab from "@/components/admin/CuisinesTab";
import TestimonialsTab from "@/components/admin/TestimonialsTab";
import SettingsTab from "@/components/admin/SettingsTab";

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  // CMS collections state
  const [activeTab, setActiveTab] = useState("dashboard");
  const [loading, setLoading] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const [inquiries, setInquiries] = useState<any[]>([]);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [packages, setPackages] = useState<any[]>([]);
  const [foods, setFoods] = useState<any[]>([]);
  const [states, setStates] = useState<any[]>([]);
  const [outboundList, setOutboundList] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [pages, setPages] = useState<any[]>([]);
  const [contactDetails, setContactDetails] = useState<any>({
    phone: "",
    email: "",
    whatsapp: "",
    address: "",
    hours: ""
  });
  const [parentDestinations, setParentDestinations] = useState<any[]>([]);

  // Editor states (prop down)
  const [editBlog, setEditBlog] = useState<any>(null);
  const [editPackage, setEditPackage] = useState<any>(null);
  const [editFood, setEditFood] = useState<any>(null);
  const [editState, setEditState] = useState<any>(null);
  const [destSubTab, setDestSubTab] = useState<"general" | "travelTips" | "faqs" | "cities">("general");
  const [editingCityIdx, setEditingCityIdx] = useState<number | null>(null);
  const [editingAttractionIdx, setEditingAttractionIdx] = useState<number | null>(null);
  const [newTestimonial, setNewTestimonial] = useState<any>(null);
  const [editPage, setEditPage] = useState<any>(null);
  const [newCustomPage, setNewCustomPage] = useState<any>(null);

  const params = useParams();
  const locale = params?.locale || "en";

  const showStatus = (text: string, type: "success" | "error" = "success") => {
    setStatusMessage({ text, type });
    setTimeout(() => {
      setStatusMessage(null);
    }, 4500);
  };

  // Monitor Auth State
  useEffect(() => {
    async function verifySessionOnMount() {
      try {
        const sessionRes = await checkAdminSessionAction();
        if (sessionRes.success && sessionRes.user) {
          setUser(sessionRes.user);
          localStorage.setItem("admin_user", JSON.stringify(sessionRes.user));
          setAuthLoading(false);
          return;
        }
      } catch (e) {}

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
    }

    verifySessionOnMount();
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
      setMobileSidebarOpen(false);
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, [user]);

  // Load CMS Data
  const loadCMSData = async (showLoader: boolean = true) => {
    if (showLoader) setLoading(true);
    try {
      // Load each collection independently so one failure doesn't kill all
      const [inqs, blgs, pkgs, fds, sts, tsts, pgs, settingsRes, parentsRes, outboundsRes] = await Promise.all([
        getInquiriesAction().catch(() => []),
        getBlogsAction().catch(() => []),
        getTourPackagesAction().catch(() => []),
        getFoodsAction().catch(() => []),
        getStatesAction().catch(() => []),
        getTestimonialsAction().catch(() => []),
        getPagesAction().catch(() => []),
        getSettingsAction().catch(() => ({ success: false })),
        getParentDestinationsAction().catch(() => []),
        getOutboundDestinationsAction().catch(() => [])
      ]);
      setInquiries(inqs || []);
      setBlogs(blgs || []);
      setPackages(pkgs || []);
      setFoods(fds || []);
      setStates(sts || []);
      setOutboundList(outboundsRes || []);
      setTestimonials(tsts || []);
      setPages(pgs || []);
      setParentDestinations(parentsRes || []);
      if (settingsRes?.success) {
        setContactDetails((settingsRes as any).contactDetails);
      }
    } catch (e) {
      console.error("Error loading CMS collections:", e);
      showStatus("Error refreshing live data collections.", "error");
    } finally {
      if (showLoader) setLoading(false);
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
    setAuthLoading(true);
    try {
      const verifyRes = await verifyAdminCredentialsAction(email, password);
      if (verifyRes.success) {
        const adminEmail = (process.env.NEXT_PUBLIC_ADMIN_EMAIL || "admin@mhindiatrips.com").replace(/['"]/g, "").trim();
        const customUser = { email: adminEmail, customAuth: true };
        setUser(customUser);
        localStorage.setItem("admin_user", JSON.stringify(customUser));
        setAuthLoading(false);
        return;
      }

      if (!auth) {
        showStatus("Invalid credentials.", "error");
        setAuthLoading(false);
        return;
      }

      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        await checkAdminSessionAction();
        showStatus("Admin account created successfully!", "success");
      } else {
        const credential = await signInWithEmailAndPassword(auth, email, password);
        await checkAdminSessionAction();
        const firebaseUser = { email: credential.user.email || email, uid: credential.user.uid };
        setUser(firebaseUser);
        localStorage.setItem("admin_user", JSON.stringify(firebaseUser));
      }
    } catch (err: any) {
      showStatus(err.message || "Authentication failed.", "error");
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logoutAdminAction();
    } catch (e) {}
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
      showStatus("Inquiry status updated.", "success");
    } else {
      showStatus(res.error || "Failed to update lead.", "error");
    }
  };

  const handleUpdateInquiry = async (id: string, updatedData: any) => {
    const res = await updateInquiryAction(id, updatedData);
    if (res.success) {
      showStatus("Inquiry updated successfully.", "success");
      loadCMSData(false);
    } else {
      showStatus(res.error || "Failed to update inquiry.", "error");
    }
  };

  const handleDeleteInquiry = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this inquiry permanently?")) {
      const res = await deleteInquiryAction(id);
      if (res.success) {
        showStatus("Inquiry deleted successfully.", "success");
        loadCMSData(false);
      } else {
        showStatus(res.error || "Failed to delete.", "error");
      }
    }
  };

  // BLOG ACTIONS
  const handleSaveBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editBlog.slug || !editBlog.title?.en) return showStatus("Slug and title are required.", "error");

    const isNew = !blogs.find(b => b.slug === editBlog.slug);
    const res = isNew 
      ? await createBlogAction(editBlog)
      : await updateBlogAction(editBlog.slug, editBlog);

    if (res.success) {
      showStatus("Blog article saved successfully!", "success");
      setEditBlog(null);
      loadCMSData(false);
    } else {
      showStatus(res.error || "Failed to save blog.", "error");
    }
  };

  const handleDeleteBlog = async (slug: string) => {
    const res = await deleteBlogAction(slug);
    if (res.success) {
      showStatus("Article deleted.", "success");
      loadCMSData(false);
    } else {
      showStatus(res.error || "Failed to delete article.", "error");
    }
  };

  // TOUR PACKAGES ACTIONS
  const handleSavePackage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editPackage.slug || !editPackage.title?.en) return showStatus("Slug and title are required.", "error");

    const isNew = !packages.find(p => p.slug === editPackage.slug);
    const res = isNew 
      ? await createTourPackageAction(editPackage)
      : await updateTourPackageAction(editPackage.slug, editPackage);

    if (res.success) {
      showStatus("Tour package layout saved successfully!", "success");
      setEditPackage(null);
      loadCMSData(false);
    } else {
      showStatus(res.error || "Failed to save package.", "error");
    }
  };

  const handleDeletePackage = async (slug: string) => {
    const res = await deleteTourPackageAction(slug);
    if (res.success) {
      showStatus("Package listing removed.", "success");
      loadCMSData(false);
    } else {
      showStatus(res.error || "Failed to delete package.", "error");
    }
  };

  // FOOD CUISINE ACTIONS
  const handleSaveFood = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editFood.slug || !editFood.title?.en) return showStatus("Slug and title are required.", "error");

    const isNew = !foods.find(f => f.slug === editFood.slug);
    const res = isNew 
      ? await createFoodAction(editFood)
      : await updateFoodAction(editFood.slug, editFood);

    if (res.success) {
      showStatus("Food guide configured successfully!", "success");
      setEditFood(null);
      loadCMSData(false);
    } else {
      showStatus(res.error || "Failed to save cuisine catalog.", "error");
    }
  };

  const onDeleteFood = async (slug: string) => {
    const res = await deleteFoodAction(slug);
    if (res.success) {
      showStatus("Cuisine card deleted successfully.", "success");
      loadCMSData(false);
    } else {
      showStatus(res.error || "Failed to delete food catalog.", "error");
    }
  };

  // DESTINATION STATES ACTIONS
  const handleSaveState = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editState.slug || !editState.title?.en) return showStatus("Slug and title are required.", "error");

    const isNew = !states.find(s => s.slug === editState.slug);
    const res = isNew
      ? await createStateAction(editState)
      : await updateStateAction(editState.slug, editState);

    if (res.success) {
      showStatus("Destination details saved!", "success");
      setEditState(null);
      loadCMSData(false);
    } else {
      showStatus(res.error || "Failed to save state.", "error");
    }
  };

  const onDeleteState = async (slug: string) => {
    const res = await deleteStateAction(slug);
    if (res.success) {
      showStatus("State deleted successfully.", "success");
      loadCMSData(false);
    } else {
      showStatus(res.error || "Failed to delete destination.", "error");
    }
  };

  const handleUpdateStateStatus = async (slug: string, status: "published" | "draft" | "unpublished") => {
    const res = await updateStateStatusAction(slug, status);
    if (res.success) {
      showStatus(`Destination ${status}.`, "success");
      loadCMSData(false);
      if (editState && editState.slug === slug) {
        setEditState({ ...editState, status });
      }
    } else {
      showStatus(res.error || "Failed to update status.", "error");
    }
  };

  const handlePreviewDestination = async (slug: string) => {
    const res = await previewDestinationAction(slug);
    if (res.success) {
      window.open(`/${locale}${res.previewUrl}`, "_blank");
    } else {
      showStatus(res.error || "Failed to preview.", "error");
    }
  };

  // TESTIMONIALS ACTIONS
  const handleSaveTestimonial = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTestimonial.name || !newTestimonial.quote?.en) return showStatus("Name and English quote are required.", "error");

    const res = await createTestimonialAction(newTestimonial);
    if (res.success) {
      showStatus("Review added successfully!", "success");
      setNewTestimonial(null);
      loadCMSData(false);
    } else {
      showStatus(res.error || "Failed to save testimonial.", "error");
    }
  };

  const onUpdateTestimonial = async (id: string, data: any) => {
    const res = await updateTestimonialAction(id, data);
    if (res.success) {
      showStatus("Review updated successfully.", "success");
      loadCMSData(false);
    } else {
      showStatus(res.error || "Failed to save changes.", "error");
    }
  };

  const onDeleteTestimonial = async (id: string) => {
    const res = await deleteTestimonialAction(id);
    if (res.success) {
      showStatus("Review deleted successfully.", "success");
      loadCMSData(false);
    } else {
      showStatus(res.error || "Failed to delete review.", "error");
    }
  };

  // WEBSITE PAGES ACTIONS
  const handleSavePage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editPage.title?.en) return showStatus("Title is required.", "error");

    const res = await updatePageAction(editPage.id, editPage);
    if (res.success) {
      showStatus("Layout edits saved successfully!", "success");
      setEditPage(null);
      loadCMSData(false);
    } else {
      showStatus(res.error || "Failed to update page.", "error");
    }
  };

  const handleCreatePage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCustomPage.id || !newCustomPage.title?.en) return showStatus("Slug and Title are required.", "error");
    const slug = newCustomPage.id.toLowerCase().replace(/[^a-z0-9-_]/g, "-");
    
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
      showStatus("Custom landing page created!", "success");
      setNewCustomPage(null);
      loadCMSData(false);
    } else {
      showStatus(res.error || "Failed to construct page.", "error");
    }
  };

  const handleDeletePage = async (id: string) => {
    if (window.confirm("Delete this custom static page?")) {
      const res = await deletePageAction(id);
      if (res.success) {
        showStatus("Page deleted.", "success");
        loadCMSData(false);
      } else {
        showStatus(res.error || "Failed to delete page.", "error");
      }
    }
  };

  // AUTH LOADING VIEW
  if (authLoading) {
    return (
      <div className="bg-[#FAF8F5] min-h-screen py-32 flex flex-col items-center justify-center space-y-4">
        <div className="w-10 h-10 border-4 border-gold border-t-royal rounded-full animate-spin"></div>
        <span className="text-[10px] font-bold tracking-widest text-royal/60 uppercase">
          Verifying authorization...
        </span>
      </div>
    );
  }

  // SIGN IN PANEL (GUEST ROUTE REDIRECT)
  if (!user) {
    return (
      <div className="bg-[#FAF8F5] min-h-screen py-24 flex items-center justify-center px-6 relative" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
        {statusMessage && (
          <div className={`fixed top-5 right-5 z-50 p-4 shadow-xl border flex items-center gap-3 transition-all duration-300 rounded-xl ${
            statusMessage.type === "success" 
              ? "bg-emerald-50 border-emerald-200 text-emerald-800" 
              : "bg-red-50 border-red-200 text-red-800"
          }`}>
            {statusMessage.type === "success" ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
            )}
            <span className="text-xs font-bold uppercase tracking-wider">{statusMessage.text}</span>
          </div>
        )}
        <div className="bg-white border border-gold/15 p-8 md:p-12 shadow-2xl max-w-md w-full space-y-8 relative rounded-3xl">
          <div className="absolute top-0 left-0 w-full h-[6px] bg-royal rounded-t-3xl" />
          
          <div className="text-center space-y-2">
            <img src="/images/logo-transparent.png" alt="MH India Trips" className="h-12 w-auto mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-royal font-serif tracking-tight">Admin Console</h1>
            <p className="text-xs text-royal/50 font-light">Authorize credentials to access live CMS content databases.</p>
          </div>

          <form onSubmit={handleAuth} className="space-y-5 text-xs text-royal">
            <div className="space-y-1.5">
              <label className="font-bold block uppercase tracking-wider text-royal/60">Email Address</label>
              <input 
                type="email" required value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="admin@mhindiatrips.com"
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-xl focus:border-gold transition"
              />
            </div>
            
            <div className="space-y-1.5">
              <label className="font-bold block uppercase tracking-wider text-royal/60">Password</label>
              <input 
                type="password" required value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-xl focus:border-gold transition"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-royal hover:bg-gold text-white hover:text-royal transition duration-300 font-bold uppercase tracking-wider py-4 mt-2 cursor-pointer rounded-xl shadow-md hover:shadow-lg"
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

  // MAIN CMS WORKSPACE
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart },
    { id: "leads", label: "Travel Leads", icon: Users },
    { id: "pages", label: "Website Pages", icon: Layers },
    { id: "destinations", label: "Destinations in India", icon: MapPin },
    { id: "outbound", label: "Outbound Trips", icon: Globe },
    { id: "packages", label: "Tour Packages", icon: Compass },
    { id: "blogs", label: "Manage Blogs", icon: FileText },
    { id: "cuisines", label: "Food Catalog", icon: Utensils },
    { id: "testimonials", label: "Testimonials", icon: Star },
    { id: "settings", label: "System Settings", icon: Settings }
  ];

  return (
    <div className="w-full h-screen bg-[#FCFAF6] flex text-royal overflow-hidden relative" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
      {/* Dynamic Status Notifications */}
      {statusMessage && (
        <div className={`fixed top-5 right-5 z-[100] p-4 shadow-xl border flex items-center gap-3 transition-all duration-300 rounded-xl ${
          statusMessage.type === "success" 
            ? "bg-emerald-50 border-emerald-200 text-emerald-800 animate-slide-in-right" 
            : "bg-red-50 border-red-200 text-red-800 animate-slide-in-right"
        }`}>
          {statusMessage.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
          )}
          <span className="text-xs font-bold uppercase tracking-wider">{statusMessage.text}</span>
        </div>
      )}
      
      {/* DESKTOP SIDEBAR */}
      <aside className="w-64 bg-[#FCFAF6] text-royal shrink-0 hidden md:flex flex-col justify-between py-6 px-5 border-r border-gold/15 fixed left-0 top-0 bottom-0 z-40 overflow-y-auto shadow-lg shadow-royal/5">
        <div className="space-y-6">
          <Link href={`/${locale}`} className="block pb-4 border-b border-gold/10">
            <img src="/images/logo-transparent.png" alt="MH India Trips" className="h-12 w-auto opacity-95 mx-auto" />
          </Link>

          <div className="space-y-1">
            <p className="text-[9px] uppercase tracking-widest text-royal/40 font-bold px-4 pb-2">Content Management</p>
            <nav className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      window.location.hash = item.id === "dashboard" ? "" : item.id;
                    }}
                    className={`flex items-center space-x-3 px-4 py-3 w-full text-left text-xs font-bold uppercase tracking-wider rounded-xl transition cursor-pointer ${
                      activeTab === item.id 
                        ? "bg-gold/10 text-royal border-l-4 border-l-gold shadow-sm" 
                        : "hover:bg-gold/5 text-royal/70"
                    }`}
                  >
                    <Icon className="w-4 h-4 text-gold shrink-0" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        <div className="pt-4 border-t border-gold/10 space-y-3">
          <a
            href={`/${locale}`}
            target="_blank"
            className="text-[10px] text-royal/60 hover:text-gold flex items-center space-x-2 transition uppercase font-bold tracking-wider"
          >
            <Globe className="w-4 h-4 text-gold" />
            <span>View Live Website</span>
          </a>
          
          <button 
            onClick={handleLogout}
            className="w-full bg-red-50 hover:bg-red-100 text-red-600 font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 flex items-center gap-2 border border-red-200/55 transition cursor-pointer rounded-xl"
          >
            <LogOut className="w-4 h-4 text-red-600 shrink-0" />
            <span>Sign Out</span>
          </button>

          <p className="text-[9px] text-royal/30 font-light">MH India Trips CMS Suite</p>
        </div>
      </aside>

      {/* MOBILE DRAWER SIDEBAR */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/60 transition-opacity" onClick={() => setMobileSidebarOpen(false)} />
          
          {/* Content */}
          <div className="relative flex w-full max-w-xs flex-col bg-[#FCFAF6] text-royal py-6 px-5 z-50 border-r border-gold/15 shadow-2xl">
            <div className="absolute top-5 right-5">
              <button onClick={() => setMobileSidebarOpen(false)} className="p-1 rounded-lg hover:bg-gold/10">
                <X className="w-6 h-6 text-royal" />
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="pb-4 border-b border-gold/10">
                <img src="/images/logo-transparent.png" alt="MH India Trips" className="h-10 w-auto opacity-95" />
              </div>

              <div className="space-y-1">
                <p className="text-[9px] uppercase tracking-widest text-royal/40 font-bold px-4 pb-2">Content Management</p>
                <nav className="space-y-1">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveTab(item.id);
                          window.location.hash = item.id === "dashboard" ? "" : item.id;
                          setMobileSidebarOpen(false);
                        }}
                        className={`flex items-center space-x-3 px-4 py-3 w-full text-left text-xs font-bold uppercase tracking-wider rounded-xl transition cursor-pointer ${
                          activeTab === item.id 
                            ? "bg-gold/10 text-royal border-l-4 border-l-gold shadow-sm" 
                            : "hover:bg-gold/5 text-royal/70"
                        }`}
                      >
                        <Icon className="w-4 h-4 text-gold shrink-0" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-gold/10 space-y-3">
              <a
                href={`/${locale}`}
                target="_blank"
                className="text-[10px] text-royal/60 hover:text-gold flex items-center space-x-2 transition uppercase font-bold tracking-wider"
              >
                <Globe className="w-4 h-4 text-gold" />
                <span>View Live Website</span>
              </a>

              <button 
                onClick={handleLogout}
                className="w-full bg-red-50 hover:bg-red-100 text-red-600 font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 flex items-center gap-2 border border-red-200/55 transition cursor-pointer rounded-xl"
              >
                <LogOut className="w-4 h-4 text-red-600 shrink-0" />
                <span>Sign Out</span>
              </button>

              <p className="text-[9px] text-royal/30 font-light">MH India Trips CMS Suite</p>
            </div>
          </div>
        </div>
      )}

      {/* MAIN CONTAINER WORKSPACE */}
      <div className="flex-grow flex-1 min-w-0 h-full overflow-y-auto px-4 md:px-10 py-8 md:ml-64">
        
        {/* UPPER HEADER CONTROLS */}
        <div className="flex justify-between items-center mb-8 border-b border-beige/40 pb-5">
          <div className="flex items-center gap-3">
            {/* Hamburger Button for mobile screen */}
            <button 
              onClick={() => setMobileSidebarOpen(true)}
              className="p-2 border border-beige/40 rounded-xl hover:bg-beige/10 md:hidden cursor-pointer shrink-0"
              title="Open Navigation"
            >
              <Menu className="w-5 h-5 text-royal" />
            </button>

            <div>
              <h1 className="text-xl md:text-2xl font-bold font-serif text-royal uppercase tracking-tight flex items-center gap-2">
                <span>CMS:</span>
                <span className="text-gold font-light">{activeTab}</span>
              </h1>
              <p className="text-[9px] text-royal/40 uppercase tracking-widest font-semibold mt-0.5 truncate max-w-[200px] sm:max-w-none">
                Authorized as: {user.email}
              </p>
            </div>
          </div>
        </div>

        {/* LOADING BUFFER COLLECTIONS */}
        {loading ? (
          <div className="py-24 flex flex-col items-center justify-center space-y-4">
            <div className="w-8 h-8 border-3 border-gold border-t-royal rounded-full animate-spin"></div>
            <span className="text-[9px] font-bold tracking-widest text-royal/40 uppercase animate-pulse">
              Synchronizing collections with live database...
            </span>
          </div>
        ) : (
          <div className="space-y-12">
            
            {/* Render Dashboard tab component */}
            {activeTab === "dashboard" && (
              <DashboardTab
                inquiries={inquiries}
                blogs={blogs}
                packages={packages}
                foods={foods}
                states={states}
                testimonials={testimonials}
                pages={pages}
                onTabChange={(tab) => {
                  setActiveTab(tab);
                  window.location.hash = tab === "dashboard" ? "" : tab;
                }}
              />
            )}

            {/* Render Inquiries / CRM Leads component */}
            {activeTab === "leads" && (
              <InquiriesTab
                inquiries={inquiries}
                onStatusChange={handleStatusChange}
                onDeleteInquiry={handleDeleteInquiry}
                onUpdateInquiry={handleUpdateInquiry}
              />
            )}

            {/* Render Pages manager tab component */}
            {activeTab === "pages" && (
              <PagesTab
                pages={pages}
                editPage={editPage}
                setEditPage={setEditPage}
                newCustomPage={newCustomPage}
                setNewCustomPage={setNewCustomPage}
                handleSavePage={handleSavePage}
                handleCreatePage={handleCreatePage}
                handleDeletePage={handleDeletePage}
                showStatus={showStatus}
              />
            )}

            {/* Render Destination states manager component */}
            {activeTab === "destinations" && (
              <DestinationsTab
                states={states}
                allPackages={packages}
                showStatus={showStatus}
                loadCMSData={loadCMSData}
              />
            )}

            {/* Render Outbound / International destinations manager component */}
            {activeTab === "outbound" && (
              <OutboundTab
                outboundList={outboundList}
                showStatus={showStatus}
                loadCMSData={loadCMSData}
              />
            )}

            {/* Render Tour packages manager component */}
            {activeTab === "packages" && (
              <PackagesTab
                packages={packages}
                editPackage={editPackage}
                setEditPackage={setEditPackage}
                handleSavePackage={handleSavePackage}
                handleDeletePackage={handleDeletePackage}
                showStatus={showStatus}
              />
            )}

            {/* Render Blogs manager component */}
            {activeTab === "blogs" && (
              <BlogsTab
                blogs={blogs}
                editBlog={editBlog}
                setEditBlog={setEditBlog}
                handleSaveBlog={handleSaveBlog}
                handleDeleteBlog={handleDeleteBlog}
                showStatus={showStatus}
              />
            )}

            {/* Render Regional food cuisines catalog component */}
            {activeTab === "cuisines" && (
              <CuisinesTab
                foods={foods}
                editFood={editFood}
                setEditFood={setEditFood}
                handleSaveFood={handleSaveFood}
                onDeleteFood={onDeleteFood}
                showStatus={showStatus}
              />
            )}

            {/* Render Testimonials component */}
            {activeTab === "testimonials" && (
              <TestimonialsTab
                testimonials={testimonials}
                newTestimonial={newTestimonial}
                setNewTestimonial={setNewTestimonial}
                handleSaveTestimonial={handleSaveTestimonial}
                onUpdateTestimonial={onUpdateTestimonial}
                onDeleteTestimonial={onDeleteTestimonial}
                showStatus={showStatus}
              />
            )}

            {/* Render System Settings component */}
            {activeTab === "settings" && (
              <SettingsTab
                contactDetails={contactDetails}
                setContactDetails={setContactDetails}
                user={user}
                showStatus={showStatus}
              />
            )}

          </div>
        )}
      </div>
    </div>
  );
}
