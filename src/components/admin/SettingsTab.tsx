"use client";

import React, { useState, useEffect } from "react";
import { 
  Phone, Mail, MessageSquare, MapPin, Clock, Lock, ShieldCheck, 
  Save, KeyRound, Plus, Trash2, Edit2, Layers, Compass, Globe, Check, X, ArrowRight
} from "lucide-react";
import { 
  updateContactDetailsAction, 
  updateAdminPasswordAction, 
  verifyAdminCredentialsAction 
} from "@/app/actions/admin";
import { auth } from "@/lib/firebase";
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from "firebase/auth";
import { extractLocalizedString } from "@/lib/utils";

interface SettingsTabProps {
  contactDetails: any;
  setContactDetails: (details: any) => void;
  user: any;
  showStatus: (text: string, type: "success" | "error") => void;
}

const defaultOutboundList = [
  { id: "dubai", name: { en: "Dubai & UAE", es: "Dubái y Emiratos", pt: "Dubai e Emirados" }, path: "/international-trips/dubai" },
  { id: "bali", name: { en: "Bali, Indonesia", es: "Bali, Indonesia", pt: "Bali, Indonésia" }, path: "/international-trips/bali" },
  { id: "thailand", name: { en: "Thailand", es: "Tailandia", pt: "Tailândia" }, path: "/international-trips/thailand" },
  { id: "maldives", name: { en: "Maldives", es: "Maldivas", pt: "Maldivas" }, path: "/international-trips/maldives" },
  { id: "vietnam", name: { en: "Vietnam", es: "Vietnam", pt: "Vietnã" }, path: "/international-trips/vietnam" },
  { id: "singapore", name: { en: "Singapore & Malaysia", es: "Singapur y Malasia", pt: "Cingapura e Indonésia" }, path: "/international-trips/singapore" },
  { id: "nepal", name: { en: "Nepal & Bhutan", es: "Nepal y Bután", pt: "Nepal e Butão" }, path: "/international-trips/nepal" },
  { id: "sri-lanka", name: { en: "Sri Lanka", es: "Sri Lanka", pt: "Sri Lanka" }, path: "/international-trips/sri-lanka" },
  { id: "laos", name: { en: "Laos", es: "Laos", pt: "Laos" }, path: "/international-trips/laos" }
];

const defaultInfoList = [
  { id: "solo-female", name: { en: "Solo Female Traveler", es: "Mujer viajando sola por la India", pt: "Mulher viajando sozinha na Índia" }, path: "/travel-info/solo-female-travel" },
  { id: "visa", name: { en: "Visa & Entry Requirements", es: "Requisitos de Visa y Entrada", pt: "Visto e Requisitos de Entrada" }, path: "/travel-info/visa-entry-requirements" },
  { id: "best-time", name: { en: "Best Time to Visit", es: "Cuando viajar a la India", pt: "Quando viajar para a Índia" }, path: "/travel-info/best-time-climate" },
  { id: "health", name: { en: "Health & Vaccinations", es: "Salud y Vacunas", pt: "Saúde e Vacinas" }, path: "/travel-info/vaccinations-health" },
  { id: "packing", name: { en: "Packing & Currency Guide", es: "Guía de Equipaje y Moneda", pt: "Guia de Bagagem e Moeda" }, path: "/travel-info/packing-currency" },
  { id: "faq", name: { en: "Frequently Asked Questions", es: "Preguntas Frecuentes", pt: "Perguntas Frequentes" }, path: "/faq" }
];

const defaultFooterQuickLinks = [
  { id: "home", name: { en: "Home", es: "Inicio", pt: "Início" }, url: "/en" },
  { id: "packages", name: { en: "Packages", es: "Paquetes", pt: "Pacotes" }, url: "/en/packages" },
  { id: "outbound", name: { en: "International Trips", es: "Viajes Internacionales", pt: "Viagens Internacionais" }, url: "/en/international-trips" },
  { id: "food", name: { en: "Food Guide", es: "Gastronomía", pt: "Gastronomia" }, url: "/en/food" },
  { id: "blog", name: { en: "Blog", es: "Blog", pt: "Blog" }, url: "/en/blog" },
  { id: "about", name: { en: "About Us", es: "Nosotros", pt: "Sobre Nós" }, url: "/en/about" },
  { id: "contact", name: { en: "Contact Us", es: "Contacto", pt: "Contato" }, url: "/en/contact" }
];

const defaultFooterDestinations = [
  { id: "rajasthan", name: { en: "Rajasthan", es: "Rajasthan", pt: "Rajastão" }, url: "/en/destinations-in-india/rajasthan" },
  { id: "kerala", name: { en: "Kerala", es: "Kerala", pt: "Kerala" }, url: "/en/destinations-in-india/kerala" },
  { id: "varanasi", name: { en: "Varanasi", es: "Varanasi", pt: "Varanasi" }, url: "/en/destinations-in-india/uttar-pradesh/varanasi" },
  { id: "delhi-agra", name: { en: "Delhi & Agra", es: "Delhi y Agra", pt: "Délhi e Agra" }, url: "/en/destinations-in-india/uttar-pradesh/agra" },
  { id: "goa", name: { en: "Goa", es: "Goa", pt: "Goa" }, url: "/en/destinations-in-india/goa" },
  { id: "outbound-all", name: { en: "International (Dubai, Bali...)", es: "Internacional (Dubái, Bali...)", pt: "Internacional (Dubai, Bali...)" }, url: "/en/international-trips" }
];

export default function SettingsTab({
  contactDetails,
  setContactDetails,
  user,
  showStatus
}: SettingsTabProps) {
  const [activeSubTab, setActiveSubTab] = useState<"contact" | "header" | "footer" | "security">("contact");
  const [loadingContact, setLoadingContact] = useState(false);
  const [loadingPassword, setLoadingPassword] = useState(false);

  // 1. Contact fields
  const [companyName, setCompanyName] = useState(contactDetails?.companyName || "MH India Trips");
  const [gstin, setGstin] = useState(contactDetails?.gstin || "08ACIFM3516H1Z7");
  const [phone, setPhone] = useState(contactDetails?.phone || "");
  const [email, setEmail] = useState(contactDetails?.email || "");
  const [whatsapp, setWhatsapp] = useState(contactDetails?.whatsapp || "");
  const [website, setWebsite] = useState(contactDetails?.website || "https://mhindiatrips.com");
  const [address, setAddress] = useState(contactDetails?.address || "");
  const [hours, setHours] = useState(contactDetails?.hours || "");
  const [facebook, setFacebook] = useState(contactDetails?.facebook || "");
  const [twitter, setTwitter] = useState(contactDetails?.twitter || "");
  const [instagram, setInstagram] = useState(contactDetails?.instagram || "");
  const [logoHeightMobile, setLogoHeightMobile] = useState(contactDetails?.logoHeightMobile || "48");
  const [logoHeightDesktop, setLogoHeightDesktop] = useState(contactDetails?.logoHeightDesktop || "56");
  const [copyright, setCopyright] = useState(contactDetails?.copyright || "2026 MH India Trips. Crafted for luxury.");
  const [designedBy, setDesignedBy] = useState(contactDetails?.designedBy || "JAINUP | Growth System");

  // 2. Header CTA fields
  const [headerCtaEn, setHeaderCtaEn] = useState(contactDetails?.headerCta?.en || "Inquire Now");
  const [headerCtaEs, setHeaderCtaEs] = useState(contactDetails?.headerCta?.es || "Planificar");
  const [headerCtaPt, setHeaderCtaPt] = useState(contactDetails?.headerCta?.pt || "Planejar");
  const [headerCtaUrl, setHeaderCtaUrl] = useState(contactDetails?.headerCtaUrl || "/contact");

  // 3. Dynamic Header Nav Lists
  const [customOutboundNav, setCustomOutboundNav] = useState<any[]>(
    contactDetails?.customOutboundNav && contactDetails.customOutboundNav.length > 0
      ? contactDetails.customOutboundNav
      : defaultOutboundList
  );

  const [customInfoNav, setCustomInfoNav] = useState<any[]>(
    contactDetails?.customInfoNav && contactDetails.customInfoNav.length > 0
      ? contactDetails.customInfoNav
      : defaultInfoList
  );

  // 4. Footer fields
  const [footerTaglineEn, setFooterTaglineEn] = useState(contactDetails?.footerTagline?.en || "CURATING LIFETIME TRAVEL ENCOUNTERS");
  const [footerTaglineEs, setFooterTaglineEs] = useState(contactDetails?.footerTagline?.es || "DISEÑANDO ENCUENTROS DE VIAJE DE POR VIDA");
  const [footerTaglinePt, setFooterTaglinePt] = useState(contactDetails?.footerTagline?.pt || "CRIANDO ENCONTROS DE VIAGEM DE UMA VIDA");

  const [footerAboutEn, setFooterAboutEn] = useState(contactDetails?.footerAboutText?.en || "MH India Trips designs luxury private journeys and heritage monument tours across the Indian subcontinent. Founded in 2010 with a passion for quality.");
  const [footerAboutEs, setFooterAboutEs] = useState(contactDetails?.footerAboutText?.es || "MH India Trips diseña viajes privados de lujo y tours de monumentos históricos en todo el subcontinente indio. Fundada en 2010 con pasión por la calidad.");
  const [footerAboutPt, setFooterAboutPt] = useState(contactDetails?.footerAboutText?.pt || "A MH India Trips desenha viagens primeiras de luxo e passeios de monumentos históricos em todo o subcontinente indiano. Fundada em 2010 com paixão pela qualidade.");

  const [customFooterQuickLinks, setCustomFooterQuickLinks] = useState<any[]>(
    contactDetails?.customFooterQuickLinks && contactDetails.customFooterQuickLinks.length > 0
      ? contactDetails.customFooterQuickLinks
      : defaultFooterQuickLinks
  );

  const [customFooterDestinations, setCustomFooterDestinations] = useState<any[]>(
    contactDetails?.customFooterDestinations && contactDetails.customFooterDestinations.length > 0
      ? contactDetails.customFooterDestinations
      : defaultFooterDestinations
  );

  // Edit Item modal state
  const [editingItem, setEditingItem] = useState<{ listKey: string; item: any; index: number } | null>(null);

  // Password fields state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Sync state if contactDetails is loaded asynchronously
  useEffect(() => {
    if (contactDetails) {
      setCompanyName(contactDetails.companyName || "MH India Trips");
      setGstin(contactDetails.gstin || "08ACIFM3516H1Z7");
      setPhone(contactDetails.phone || "");
      setEmail(contactDetails.email || "");
      setWhatsapp(contactDetails.whatsapp || "");
      setWebsite(contactDetails.website || "https://mhindiatrips.com");
      setAddress(contactDetails.address || "");
      setHours(contactDetails.hours || "");
      setFacebook(contactDetails.facebook || "");
      setTwitter(contactDetails.twitter || "");
      setInstagram(contactDetails.instagram || "");
      setLogoHeightMobile(contactDetails.logoHeightMobile || "48");
      setLogoHeightDesktop(contactDetails.logoHeightDesktop || "56");
      setCopyright(contactDetails.copyright || "2026 MH India Trips. Crafted for luxury.");
      setDesignedBy(contactDetails.designedBy || "JAINUP | Growth System");

      if (contactDetails.headerCta) {
        setHeaderCtaEn(contactDetails.headerCta.en || "Inquire Now");
        setHeaderCtaEs(contactDetails.headerCta.es || "Planificar");
        setHeaderCtaPt(contactDetails.headerCta.pt || "Planejar");
      }
      if (contactDetails.headerCtaUrl) setHeaderCtaUrl(contactDetails.headerCtaUrl);

      if (contactDetails.customOutboundNav?.length > 0) setCustomOutboundNav(contactDetails.customOutboundNav);
      if (contactDetails.customInfoNav?.length > 0) setCustomInfoNav(contactDetails.customInfoNav);

      if (contactDetails.footerTagline) {
        setFooterTaglineEn(contactDetails.footerTagline.en || "");
        setFooterTaglineEs(contactDetails.footerTagline.es || "");
        setFooterTaglinePt(contactDetails.footerTagline.pt || "");
      }
      if (contactDetails.footerAboutText) {
        setFooterAboutEn(contactDetails.footerAboutText.en || "");
        setFooterAboutEs(contactDetails.footerAboutText.es || "");
        setFooterAboutPt(contactDetails.footerAboutText.pt || "");
      }

      if (contactDetails.customFooterQuickLinks?.length > 0) setCustomFooterQuickLinks(contactDetails.customFooterQuickLinks);
      if (contactDetails.customFooterDestinations?.length > 0) setCustomFooterDestinations(contactDetails.customFooterDestinations);
    }
  }, [contactDetails]);

  const handleSaveAllSettings = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoadingContact(true);
    try {
      const payload = {
        companyName,
        gstin,
        phone,
        email,
        whatsapp,
        website,
        address,
        hours,
        facebook,
        twitter,
        instagram,
        logoHeightMobile,
        logoHeightDesktop,
        copyright,
        designedBy,
        headerCta: { en: headerCtaEn, es: headerCtaEs, pt: headerCtaPt },
        headerCtaUrl,
        customOutboundNav,
        customInfoNav,
        footerTagline: { en: footerTaglineEn, es: footerTaglineEs, pt: footerTaglinePt },
        footerAboutText: { en: footerAboutEn, es: footerAboutEs, pt: footerAboutPt },
        customFooterQuickLinks,
        customFooterDestinations,
        defaultCancellationPolicy: contactDetails?.defaultCancellationPolicy || "",
        defaultTermsConditions: contactDetails?.defaultTermsConditions || ""
      };

      const res = await updateContactDetailsAction(payload);
      if (res.success) {
        setContactDetails(res.updated || payload);
        showStatus("Header, Footer & System Settings saved successfully!", "success");
      } else {
        showStatus(res.error || "Failed to save settings.", "error");
      }
    } catch (err: any) {
      showStatus(err.message || "An unexpected error occurred.", "error");
    } finally {
      setLoadingContact(false);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPassword || !newPassword || !confirmPassword) {
      showStatus("All fields are required to update password.", "error");
      return;
    }
    if (newPassword !== confirmPassword) {
      showStatus("New password and confirm password do not match.", "error");
      return;
    }
    if (newPassword.length < 5) {
      showStatus("Password must be at least 5 characters long.", "error");
      return;
    }

    setLoadingPassword(true);
    try {
      if (user?.customAuth) {
        const verifyRes = await verifyAdminCredentialsAction(user.email, currentPassword);
        if (!verifyRes.success) {
          showStatus("Incorrect current password.", "error");
          setLoadingPassword(false);
          return;
        }

        const res = await updateAdminPasswordAction(newPassword);
        if (res.success) {
          showStatus("Admin console password updated successfully!", "success");
          setCurrentPassword("");
          setNewPassword("");
          setConfirmPassword("");
        } else {
          showStatus(res.error || "Failed to change password.", "error");
        }
      } else {
        if (!auth.currentUser) {
          showStatus("No authenticated Firebase session found.", "error");
          setLoadingPassword(false);
          return;
        }
        
        const credential = EmailAuthProvider.credential(auth.currentUser.email || user.email, currentPassword);
        await reauthenticateWithCredential(auth.currentUser, credential);
        await updatePassword(auth.currentUser, newPassword);

        showStatus("Firebase authorization password changed successfully!", "success");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }
    } catch (err: any) {
      console.error(err);
      showStatus(err.message || "Authentication or update failed.", "error");
    } finally {
      setLoadingPassword(false);
    }
  };

  // List Item Helpers
  const addNavItem = (listKey: "outbound" | "info" | "quickLinks" | "destinations") => {
    const newItem = {
      id: `custom_${Date.now()}`,
      name: { en: "New Item", es: "Nuevo Elemento", pt: "Novo Item" },
      path: listKey === "outbound" ? "/international-trips/new" : listKey === "info" ? "/travel-info/new" : "/new-page",
      url: "/new-page"
    };

    if (listKey === "outbound") setCustomOutboundNav([...customOutboundNav, newItem]);
    if (listKey === "info") setCustomInfoNav([...customInfoNav, newItem]);
    if (listKey === "quickLinks") setCustomFooterQuickLinks([...customFooterQuickLinks, newItem]);
    if (listKey === "destinations") setCustomFooterDestinations([...customFooterDestinations, newItem]);
  };

  const deleteNavItem = (listKey: "outbound" | "info" | "quickLinks" | "destinations", index: number) => {
    if (listKey === "outbound") setCustomOutboundNav(customOutboundNav.filter((_, i) => i !== index));
    if (listKey === "info") setCustomInfoNav(customInfoNav.filter((_, i) => i !== index));
    if (listKey === "quickLinks") setCustomFooterQuickLinks(customFooterQuickLinks.filter((_, i) => i !== index));
    if (listKey === "destinations") setCustomFooterDestinations(customFooterDestinations.filter((_, i) => i !== index));
  };

  const saveEditedItem = () => {
    if (!editingItem) return;
    const { listKey, item, index } = editingItem;

    if (listKey === "outbound") {
      const updated = [...customOutboundNav];
      updated[index] = item;
      setCustomOutboundNav(updated);
    } else if (listKey === "info") {
      const updated = [...customInfoNav];
      updated[index] = item;
      setCustomInfoNav(updated);
    } else if (listKey === "quickLinks") {
      const updated = [...customFooterQuickLinks];
      updated[index] = item;
      setCustomFooterQuickLinks(updated);
    } else if (listKey === "destinations") {
      const updated = [...customFooterDestinations];
      updated[index] = item;
      setCustomFooterDestinations(updated);
    }

    setEditingItem(null);
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-5xl text-xs text-royal">
      {/* Top Banner & Sub-Nav Tabs */}
      <div className="bg-white border border-gold/20 p-6 rounded-3xl shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-serif font-bold text-royal">System, Header & Footer Settings</h2>
            <p className="text-[11px] text-royal/60">Configure global website contacts, header dropdown menus, footer links, and passwords.</p>
          </div>

          <button
            onClick={handleSaveAllSettings}
            disabled={loadingContact}
            className="bg-[#0A2A1E] hover:bg-[#C5A862] text-white hover:text-[#0A2A1E] font-bold text-xs px-6 py-3 rounded-full transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer shrink-0 disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            <span>{loadingContact ? "Saving All Settings..." : "Save All Changes"}</span>
          </button>
        </div>

        {/* Sub-Tabs Switcher Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gold/10">
          <button
            onClick={() => setActiveSubTab("contact")}
            className={`px-4 py-2 rounded-full font-bold text-xs transition-all flex items-center gap-2 cursor-pointer ${
              activeSubTab === "contact" ? "bg-[#0A2A1E] text-white shadow-sm" : "bg-[#FAF8F5] text-royal/70 hover:bg-gold/10"
            }`}
          >
            <Phone className="w-3.5 h-3.5 text-gold" />
            <span>1. Contact & Desk Info</span>
          </button>

          <button
            onClick={() => setActiveSubTab("header")}
            className={`px-4 py-2 rounded-full font-bold text-xs transition-all flex items-center gap-2 cursor-pointer ${
              activeSubTab === "header" ? "bg-[#0A2A1E] text-white shadow-sm" : "bg-[#FAF8F5] text-royal/70 hover:bg-gold/10"
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-gold" />
            <span>2. Header & Dropdowns</span>
          </button>

          <button
            onClick={() => setActiveSubTab("footer")}
            className={`px-4 py-2 rounded-full font-bold text-xs transition-all flex items-center gap-2 cursor-pointer ${
              activeSubTab === "footer" ? "bg-[#0A2A1E] text-white shadow-sm" : "bg-[#FAF8F5] text-royal/70 hover:bg-gold/10"
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-gold" />
            <span>3. Footer & Navigation</span>
          </button>

          <button
            onClick={() => setActiveSubTab("security")}
            className={`px-4 py-2 rounded-full font-bold text-xs transition-all flex items-center gap-2 cursor-pointer ${
              activeSubTab === "security" ? "bg-[#0A2A1E] text-white shadow-sm" : "bg-[#FAF8F5] text-royal/70 hover:bg-gold/10"
            }`}
          >
            <KeyRound className="w-3.5 h-3.5 text-gold" />
            <span>4. Security & Passwords</span>
          </button>
        </div>
      </div>

      {/* --------------------------------------------------
          1. CONTACT & DESK INFO TAB
         -------------------------------------------------- */}
      {activeSubTab === "contact" && (
        <form onSubmit={handleSaveAllSettings} className="bg-white border border-gold/15 p-6 md:p-8 rounded-3xl shadow-sm space-y-6">
          <div className="flex items-center gap-2 border-b border-gold/15 pb-3">
            <ShieldCheck className="w-5 h-5 text-gold shrink-0" />
            <h3 className="text-sm font-bold text-royal uppercase tracking-wider">Company & Travel Desk Details</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider text-royal/60">Company Legal Name</label>
              <input 
                type="text" 
                required
                value={companyName} 
                onChange={e => setCompanyName(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-xl focus:border-gold/50 transition font-semibold"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider text-royal/60 flex items-center gap-1.5">
                <span className="bg-gold/20 text-gold px-1.5 py-0.5 rounded font-black text-[9px]">TAX</span>
                <span>GSTIN (Global GST Number)</span>
              </label>
              <input 
                type="text" 
                required
                value={gstin} 
                onChange={e => setGstin(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-xl focus:border-gold/50 transition font-mono uppercase font-bold text-gold"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider text-royal/60 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>Phone Number</span>
              </label>
              <input 
                type="text" 
                required
                value={phone} 
                onChange={e => setPhone(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-xl focus:border-gold/50 transition"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider text-royal/60 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-gold" />
                <span>Email Address</span>
              </label>
              <input 
                type="email" 
                required
                value={email} 
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-xl focus:border-gold/50 transition"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider text-royal/60 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-gold" />
                <span>WhatsApp Phone ID (Digits only)</span>
              </label>
              <input 
                type="text" 
                required
                value={whatsapp} 
                onChange={e => setWhatsapp(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-xl focus:border-gold/50 transition"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider text-royal/60">Official Website URL</label>
              <input 
                type="url" 
                required
                value={website} 
                onChange={e => setWebsite(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-xl focus:border-gold/50 transition"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider text-royal/60 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                <span>Headquarters Address</span>
              </label>
              <input 
                type="text" 
                required
                value={address} 
                onChange={e => setAddress(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-xl focus:border-gold/50 transition"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider text-royal/60 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gold" />
                <span>Operation Desk Hours</span>
              </label>
              <input 
                type="text" 
                required
                value={hours} 
                onChange={e => setHours(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-xl focus:border-gold/50 transition"
              />
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-4 border-t border-gold/10 space-y-4">
            <span className="text-[10px] font-bold text-gold uppercase tracking-wider block">Social Network Channels</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="font-bold text-royal/60 text-[10px] uppercase">Facebook URL</label>
                <input type="text" value={facebook} onChange={e => setFacebook(e.target.value)} className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2 rounded-xl text-xs" />
              </div>
              <div className="space-y-1">
                <label className="font-bold text-royal/60 text-[10px] uppercase">Twitter/X URL</label>
                <input type="text" value={twitter} onChange={e => setTwitter(e.target.value)} className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2 rounded-xl text-xs" />
              </div>
              <div className="space-y-1">
                <label className="font-bold text-royal/60 text-[10px] uppercase">Instagram URL</label>
                <input type="text" value={instagram} onChange={e => setInstagram(e.target.value)} className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2 rounded-xl text-xs" />
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              disabled={loadingContact}
              className="bg-[#0A2A1E] hover:bg-[#C5A862] text-white hover:text-[#0A2A1E] font-bold text-xs px-8 py-3 rounded-full transition-all duration-300 shadow-md flex items-center gap-2 cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Save Contact Info</span>
            </button>
          </div>
        </form>
      )}

      {/* --------------------------------------------------
          2. HEADER & DROPDOWN MENUS MANAGER TAB
         -------------------------------------------------- */}
      {activeSubTab === "header" && (
        <div className="space-y-6">
          {/* Header CTA Button Manager */}
          <div className="bg-white border border-gold/15 p-6 rounded-3xl shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-gold/15 pb-3">
              <Compass className="w-5 h-5 text-gold" />
              <h3 className="text-sm font-bold text-royal uppercase tracking-wider">Header Top Button & CTA Settings</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-1">
                <label className="font-bold text-royal/60 text-[10px] uppercase">Button Text (English)</label>
                <input type="text" value={headerCtaEn} onChange={e => setHeaderCtaEn(e.target.value)} className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2.5 rounded-xl text-xs" />
              </div>
              <div className="space-y-1">
                <label className="font-bold text-royal/60 text-[10px] uppercase">Button Text (Spanish)</label>
                <input type="text" value={headerCtaEs} onChange={e => setHeaderCtaEs(e.target.value)} className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2.5 rounded-xl text-xs" />
              </div>
              <div className="space-y-1">
                <label className="font-bold text-royal/60 text-[10px] uppercase">Button Text (Portuguese)</label>
                <input type="text" value={headerCtaPt} onChange={e => setHeaderCtaPt(e.target.value)} className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2.5 rounded-xl text-xs" />
              </div>
              <div className="space-y-1">
                <label className="font-bold text-royal/60 text-[10px] uppercase">Target URL/Path</label>
                <input type="text" value={headerCtaUrl} onChange={e => setHeaderCtaUrl(e.target.value)} className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2.5 rounded-xl text-xs font-mono" />
              </div>
            </div>
          </div>

          {/* International Trips Dropdown Items */}
          <div className="bg-white border border-gold/15 p-6 rounded-3xl shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-gold/15 pb-3">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-gold" />
                <div>
                  <h3 className="text-sm font-bold text-royal uppercase tracking-wider">International Trips Dropdown Items</h3>
                  <p className="text-[10px] text-royal/50">Edit, add, or delete items shown inside the "International Trips" header menu.</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => addNavItem("outbound")}
                className="bg-gold/15 hover:bg-gold text-royal hover:text-white font-bold text-xs px-4 py-2 rounded-full transition flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Item</span>
              </button>
            </div>

            <div className="space-y-2">
              {customOutboundNav.map((item: any, idx: number) => {
                const titleStr = typeof item.name === "string" ? item.name : extractLocalizedString(item.name, "en");
                return (
                  <div key={item.id || idx} className="flex items-center justify-between bg-[#FAF8F5] p-3 rounded-2xl border border-gold/15">
                    <div className="flex items-center gap-3">
                      <span className="bg-[#0A2A1E] text-gold font-bold text-[10px] px-2.5 py-1 rounded-full">{idx + 1}</span>
                      <div>
                        <h4 className="font-bold text-royal text-xs">{titleStr || "Unnamed Item"}</h4>
                        <span className="text-[10px] text-royal/50 font-mono">{item.path || item.url}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setEditingItem({ listKey: "outbound", item: JSON.parse(JSON.stringify(item)), index: idx })}
                        className="p-2 text-royal/70 hover:text-gold hover:bg-gold/10 rounded-xl transition cursor-pointer"
                        title="Edit Item"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteNavItem("outbound", idx)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition cursor-pointer"
                        title="Delete Item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Traveler Info Dropdown Items */}
          <div className="bg-white border border-gold/15 p-6 rounded-3xl shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-gold/15 pb-3">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-gold" />
                <div>
                  <h3 className="text-sm font-bold text-royal uppercase tracking-wider">Traveler Info Dropdown Items</h3>
                  <p className="text-[10px] text-royal/50">Edit, add, or delete items shown inside the "Traveler Info" header menu.</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => addNavItem("info")}
                className="bg-gold/15 hover:bg-gold text-royal hover:text-white font-bold text-xs px-4 py-2 rounded-full transition flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Item</span>
              </button>
            </div>

            <div className="space-y-2">
              {customInfoNav.map((item: any, idx: number) => {
                const titleStr = typeof item.name === "string" ? item.name : extractLocalizedString(item.name, "en");
                return (
                  <div key={item.id || idx} className="flex items-center justify-between bg-[#FAF8F5] p-3 rounded-2xl border border-gold/15">
                    <div className="flex items-center gap-3">
                      <span className="bg-[#0A2A1E] text-gold font-bold text-[10px] px-2.5 py-1 rounded-full">{idx + 1}</span>
                      <div>
                        <h4 className="font-bold text-royal text-xs">{titleStr || "Unnamed Item"}</h4>
                        <span className="text-[10px] text-royal/50 font-mono">{item.path || item.url}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setEditingItem({ listKey: "info", item: JSON.parse(JSON.stringify(item)), index: idx })}
                        className="p-2 text-royal/70 hover:text-gold hover:bg-gold/10 rounded-xl transition cursor-pointer"
                        title="Edit Item"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteNavItem("info", idx)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition cursor-pointer"
                        title="Delete Item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => handleSaveAllSettings()}
              disabled={loadingContact}
              className="bg-[#0A2A1E] hover:bg-[#C5A862] text-white hover:text-[#0A2A1E] font-bold text-xs px-8 py-3 rounded-full transition-all duration-300 shadow-md flex items-center gap-2 cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Save Header Controls</span>
            </button>
          </div>
        </div>
      )}

      {/* --------------------------------------------------
          3. FOOTER & NAVIGATION LINKS TAB
         -------------------------------------------------- */}
      {activeSubTab === "footer" && (
        <div className="space-y-6">
          {/* Footer Tagline & About Text */}
          <div className="bg-white border border-gold/15 p-6 rounded-3xl shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-gold/15 pb-3">
              <Layers className="w-5 h-5 text-gold" />
              <h3 className="text-sm font-bold text-royal uppercase tracking-wider">Footer Branding & Intro Text</h3>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-royal/60 text-[10px] uppercase">Tagline (English)</label>
                  <input type="text" value={footerTaglineEn} onChange={e => setFooterTaglineEn(e.target.value)} className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2.5 rounded-xl text-xs font-bold" />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-royal/60 text-[10px] uppercase">Tagline (Spanish)</label>
                  <input type="text" value={footerTaglineEs} onChange={e => setFooterTaglineEs(e.target.value)} className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2.5 rounded-xl text-xs font-bold" />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-royal/60 text-[10px] uppercase">Tagline (Portuguese)</label>
                  <input type="text" value={footerTaglinePt} onChange={e => setFooterTaglinePt(e.target.value)} className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2.5 rounded-xl text-xs font-bold" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-royal/60 text-[10px] uppercase">About Text (English)</label>
                  <textarea rows={3} value={footerAboutEn} onChange={e => setFooterAboutEn(e.target.value)} className="w-full bg-[#FAF8F5] border border-gold/15 p-3 rounded-xl text-xs" />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-royal/60 text-[10px] uppercase">About Text (Spanish)</label>
                  <textarea rows={3} value={footerAboutEs} onChange={e => setFooterAboutEs(e.target.value)} className="w-full bg-[#FAF8F5] border border-gold/15 p-3 rounded-xl text-xs" />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-royal/60 text-[10px] uppercase">About Text (Portuguese)</label>
                  <textarea rows={3} value={footerAboutPt} onChange={e => setFooterAboutPt(e.target.value)} className="w-full bg-[#FAF8F5] border border-gold/15 p-3 rounded-xl text-xs" />
                </div>
              </div>
            </div>
          </div>

          {/* Footer Quick Links */}
          <div className="bg-white border border-gold/15 p-6 rounded-3xl shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-gold/15 pb-3">
              <div className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-gold" />
                <div>
                  <h3 className="text-sm font-bold text-royal uppercase tracking-wider">Footer Quick Links Column</h3>
                  <p className="text-[10px] text-royal/50">Edit, add, or delete items shown in the Footer "Discover More" column.</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => addNavItem("quickLinks")}
                className="bg-gold/15 hover:bg-gold text-royal hover:text-white font-bold text-xs px-4 py-2 rounded-full transition flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Link</span>
              </button>
            </div>

            <div className="space-y-2">
              {customFooterQuickLinks.map((item: any, idx: number) => {
                const titleStr = typeof item.name === "string" ? item.name : extractLocalizedString(item.name, "en");
                return (
                  <div key={item.id || idx} className="flex items-center justify-between bg-[#FAF8F5] p-3 rounded-2xl border border-gold/15">
                    <div className="flex items-center gap-3">
                      <span className="bg-[#0A2A1E] text-gold font-bold text-[10px] px-2.5 py-1 rounded-full">{idx + 1}</span>
                      <div>
                        <h4 className="font-bold text-royal text-xs">{titleStr || "Unnamed Link"}</h4>
                        <span className="text-[10px] text-royal/50 font-mono">{item.url || item.path}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setEditingItem({ listKey: "quickLinks", item: JSON.parse(JSON.stringify(item)), index: idx })}
                        className="p-2 text-royal/70 hover:text-gold hover:bg-gold/10 rounded-xl transition cursor-pointer"
                        title="Edit Item"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteNavItem("quickLinks", idx)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition cursor-pointer"
                        title="Delete Item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer Regional Destinations Links */}
          <div className="bg-white border border-gold/15 p-6 rounded-3xl shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-gold/15 pb-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gold" />
                <div>
                  <h3 className="text-sm font-bold text-royal uppercase tracking-wider">Footer Regions / Destinations Column</h3>
                  <p className="text-[10px] text-royal/50">Edit, add, or delete destination links shown in the Footer "Regions" column.</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => addNavItem("destinations")}
                className="bg-gold/15 hover:bg-gold text-royal hover:text-white font-bold text-xs px-4 py-2 rounded-full transition flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Region</span>
              </button>
            </div>

            <div className="space-y-2">
              {customFooterDestinations.map((item: any, idx: number) => {
                const titleStr = typeof item.name === "string" ? item.name : extractLocalizedString(item.name, "en");
                return (
                  <div key={item.id || idx} className="flex items-center justify-between bg-[#FAF8F5] p-3 rounded-2xl border border-gold/15">
                    <div className="flex items-center gap-3">
                      <span className="bg-[#0A2A1E] text-gold font-bold text-[10px] px-2.5 py-1 rounded-full">{idx + 1}</span>
                      <div>
                        <h4 className="font-bold text-royal text-xs">{titleStr || "Unnamed Region"}</h4>
                        <span className="text-[10px] text-royal/50 font-mono">{item.url || item.path}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setEditingItem({ listKey: "destinations", item: JSON.parse(JSON.stringify(item)), index: idx })}
                        className="p-2 text-royal/70 hover:text-gold hover:bg-gold/10 rounded-xl transition cursor-pointer"
                        title="Edit Item"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteNavItem("destinations", idx)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition cursor-pointer"
                        title="Delete Item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => handleSaveAllSettings()}
              disabled={loadingContact}
              className="bg-[#0A2A1E] hover:bg-[#C5A862] text-white hover:text-[#0A2A1E] font-bold text-xs px-8 py-3 rounded-full transition-all duration-300 shadow-md flex items-center gap-2 cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Save Footer Controls</span>
            </button>
          </div>
        </div>
      )}

      {/* --------------------------------------------------
          4. SECURITY & PASSWORDS TAB
         -------------------------------------------------- */}
      {activeSubTab === "security" && (
        <form onSubmit={handleChangePassword} className="bg-white border border-gold/15 p-6 md:p-8 rounded-3xl shadow-sm space-y-6 max-w-xl">
          <div className="flex items-center gap-2 border-b border-gold/15 pb-3">
            <Lock className="w-5 h-5 text-gold shrink-0" />
            <h3 className="text-sm font-bold text-royal uppercase tracking-wider">Change Admin Authorization Password</h3>
          </div>

          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider text-royal/60">Current Password</label>
              <input 
                type="password" 
                required
                value={currentPassword} 
                onChange={e => setCurrentPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-xl focus:border-gold/50 transition font-mono"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider text-royal/60">New Password</label>
              <input 
                type="password" 
                required
                value={newPassword} 
                onChange={e => setNewPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-xl focus:border-gold/50 transition font-mono"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider text-royal/60">Confirm New Password</label>
              <input 
                type="password" 
                required
                value={confirmPassword} 
                onChange={e => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-xl focus:border-gold/50 transition font-mono"
              />
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              disabled={loadingPassword}
              className="bg-[#0A2A1E] hover:bg-[#C5A862] text-white hover:text-[#0A2A1E] font-bold text-xs px-8 py-3 rounded-full transition-all duration-300 shadow-md flex items-center gap-2 cursor-pointer"
            >
              <KeyRound className="w-4 h-4" />
              <span>{loadingPassword ? "Updating Password..." : "Update Password"}</span>
            </button>
          </div>
        </form>
      )}

      {/* EDIT MODAL FOR DROPDOWN / MENU ITEMS */}
      {editingItem && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-[9999] flex items-center justify-center p-4">
          <div className="bg-white border-2 border-gold rounded-3xl p-6 md:p-8 max-w-lg w-full space-y-5 shadow-2xl animate-scale-up">
            <div className="flex items-center justify-between border-b border-gold/20 pb-3">
              <h3 className="font-serif font-bold text-lg text-royal">Edit Menu Item</h3>
              <button onClick={() => setEditingItem(null)} className="p-1 text-royal/50 hover:text-royal">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-royal/60 text-[10px] uppercase">Name (English)</label>
                <input 
                  type="text" 
                  value={typeof editingItem.item.name === "string" ? editingItem.item.name : (editingItem.item.name?.en || "")}
                  onChange={e => {
                    const existingName = typeof editingItem.item.name === "object" ? editingItem.item.name : { en: editingItem.item.name || "" };
                    setEditingItem({
                      ...editingItem,
                      item: { ...editingItem.item, name: { ...existingName, en: e.target.value } }
                    });
                  }}
                  className="w-full bg-[#FAF8F5] border border-gold/15 p-3 rounded-xl font-medium"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-royal/60 text-[10px] uppercase">Name (Spanish)</label>
                <input 
                  type="text" 
                  value={typeof editingItem.item.name === "object" ? (editingItem.item.name?.es || "") : ""}
                  onChange={e => {
                    const existingName = typeof editingItem.item.name === "object" ? editingItem.item.name : { en: editingItem.item.name || "" };
                    setEditingItem({
                      ...editingItem,
                      item: { ...editingItem.item, name: { ...existingName, es: e.target.value } }
                    });
                  }}
                  className="w-full bg-[#FAF8F5] border border-gold/15 p-3 rounded-xl font-medium"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-royal/60 text-[10px] uppercase">Name (Portuguese)</label>
                <input 
                  type="text" 
                  value={typeof editingItem.item.name === "object" ? (editingItem.item.name?.pt || "") : ""}
                  onChange={e => {
                    const existingName = typeof editingItem.item.name === "object" ? editingItem.item.name : { en: editingItem.item.name || "" };
                    setEditingItem({
                      ...editingItem,
                      item: { ...editingItem.item, name: { ...existingName, pt: e.target.value } }
                    });
                  }}
                  className="w-full bg-[#FAF8F5] border border-gold/15 p-3 rounded-xl font-medium"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-royal/60 text-[10px] uppercase">Target URL / Path</label>
                <input 
                  type="text" 
                  value={editingItem.item.path || editingItem.item.url || ""}
                  onChange={e => {
                    setEditingItem({
                      ...editingItem,
                      item: { ...editingItem.item, path: e.target.value, url: e.target.value }
                    });
                  }}
                  placeholder="/international-trips/dubai"
                  className="w-full bg-[#FAF8F5] border border-gold/15 p-3 rounded-xl font-mono text-xs"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setEditingItem(null)}
                className="px-5 py-2.5 rounded-full border border-gold/20 text-royal/70 font-bold hover:bg-gold/10 transition"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={saveEditedItem}
                className="px-6 py-2.5 rounded-full bg-[#0A2A1E] text-white font-bold hover:bg-[#C5A862] hover:text-[#0A2A1E] transition shadow-md flex items-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                <span>Apply Changes</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
