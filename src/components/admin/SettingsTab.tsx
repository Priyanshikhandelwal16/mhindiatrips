"use client";

import React, { useState } from "react";
import { 
  Phone, Mail, MessageSquare, MapPin, Clock, Lock, ShieldCheck, 
  Save, KeyRound 
} from "lucide-react";
import { 
  updateContactDetailsAction, 
  updateAdminPasswordAction, 
  verifyAdminCredentialsAction 
} from "@/app/actions/admin";
import { auth } from "@/lib/firebase";
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from "firebase/auth";

interface SettingsTabProps {
  contactDetails: any;
  setContactDetails: (details: any) => void;
  user: any;
  showStatus: (text: string, type: "success" | "error") => void;
}

export default function SettingsTab({
  contactDetails,
  setContactDetails,
  user,
  showStatus
}: SettingsTabProps) {
  const [loadingContact, setLoadingContact] = useState(false);
  const [loadingPassword, setLoadingPassword] = useState(false);

  // Contact fields state
  const [phone, setPhone] = useState(contactDetails?.phone || "");
  const [email, setEmail] = useState(contactDetails?.email || "");
  const [whatsapp, setWhatsapp] = useState(contactDetails?.whatsapp || "");
  const [address, setAddress] = useState(contactDetails?.address || "");
  const [hours, setHours] = useState(contactDetails?.hours || "");

  // Password fields state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Sync state if contactDetails is loaded asynchronously
  React.useEffect(() => {
    if (contactDetails) {
      setPhone(contactDetails.phone || "");
      setEmail(contactDetails.email || "");
      setWhatsapp(contactDetails.whatsapp || "");
      setAddress(contactDetails.address || "");
      setHours(contactDetails.hours || "");
    }
  }, [contactDetails]);

  const handleUpdateContact = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingContact(true);
    try {
      const res = await updateContactDetailsAction({
        phone,
        email,
        whatsapp,
        address,
        hours
      });
      if (res.success) {
        setContactDetails(res.updated);
        showStatus("Contact details updated successfully!", "success");
      } else {
        showStatus(res.error || "Failed to update details.", "error");
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
        // Verification for custom database admin password change
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
        // Firebase auth password change
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

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl text-xs text-royal">
      {/* Tab Header */}
      <div>
        <h2 className="text-lg font-bold text-royal font-serif">System Settings</h2>
        <p className="text-[10px] text-royal/40">Manage global website contact details and update administrative authorization passwords.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Contact details card */}
        <form onSubmit={handleUpdateContact} className="bg-white border border-gold/15 p-6 md:p-8 rounded-3xl shadow-sm space-y-5">
          <div className="flex items-center gap-2 border-b border-beige/40 pb-3">
            <ShieldCheck className="w-5 h-5 text-gold shrink-0" />
            <h3 className="text-sm font-bold text-royal uppercase tracking-wider">Contact & Desk Channels</h3>
          </div>

          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider text-royal/60 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>Phone Number</span>
              </label>
              <input 
                type="text" 
                required
                value={phone} 
                onChange={e => setPhone(e.target.value)}
                placeholder="+91 9782001006"
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-xl focus:border-gold/50 transition"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider text-royal/60 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>Email Address</span>
              </label>
              <input 
                type="email" 
                required
                value={email} 
                onChange={e => setEmail(e.target.value)}
                placeholder="mhindiatrips@gmail.com"
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-xl focus:border-gold/50 transition"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider text-royal/60 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>WhatsApp Phone ID (Digits only, no spaces or +)</span>
              </label>
              <input 
                type="text" 
                required
                value={whatsapp} 
                onChange={e => setWhatsapp(e.target.value.replace(/[^0-9]/g, ""))}
                placeholder="919782001006"
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-xl focus:border-gold/50 transition"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider text-royal/60 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>Headquarters Address</span>
              </label>
              <input 
                type="text" 
                required
                value={address} 
                onChange={e => setAddress(e.target.value)}
                placeholder="New Delhi, India"
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-xl focus:border-gold/50 transition"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider text-royal/60 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>Operation Desk Hours</span>
              </label>
              <input 
                type="text" 
                required
                value={hours} 
                onChange={e => setHours(e.target.value)}
                placeholder="Mon - Sat: 9:00 AM - 7:00 PM IST"
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-xl focus:border-gold/50 transition"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loadingContact}
            className="w-full bg-royal hover:bg-gold text-white hover:text-royal transition duration-300 font-bold uppercase tracking-wider py-4 mt-2 cursor-pointer rounded-xl flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            <span>{loadingContact ? "Saving Channels..." : "Save Contact Info"}</span>
          </button>
        </form>

        {/* Change password card */}
        <form onSubmit={handleChangePassword} className="bg-white border border-gold/15 p-6 md:p-8 rounded-3xl shadow-sm space-y-5">
          <div className="flex items-center gap-2 border-b border-beige/40 pb-3">
            <Lock className="w-5 h-5 text-gold shrink-0" />
            <h3 className="text-sm font-bold text-royal uppercase tracking-wider">Change Admin Password</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-[#FAF8F5] border border-gold/10 p-4 rounded-2xl">
              <span className="text-[10px] font-bold text-royal/60 uppercase tracking-wide block mb-1">Active Authentication:</span>
              <span className="text-[11px] font-mono text-gold font-bold">
                {user?.customAuth ? "Custom Database Auth" : "Firebase Client Auth"}
              </span>
            </div>

            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider text-royal/60 flex items-center gap-1.5">
                <KeyRound className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>Current Password</span>
              </label>
              <input 
                type="password" 
                required
                value={currentPassword} 
                onChange={e => setCurrentPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-xl focus:border-gold/50 transition"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider text-royal/60 flex items-center gap-1.5">
                <KeyRound className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>New Password</span>
              </label>
              <input 
                type="password" 
                required
                value={newPassword} 
                onChange={e => setNewPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-xl focus:border-gold/50 transition"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider text-royal/60 flex items-center gap-1.5">
                <KeyRound className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>Confirm New Password</span>
              </label>
              <input 
                type="password" 
                required
                value={confirmPassword} 
                onChange={e => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-xl focus:border-gold/50 transition"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loadingPassword}
            className="w-full bg-royal hover:bg-gold text-white hover:text-royal transition duration-300 font-bold uppercase tracking-wider py-4 mt-2 cursor-pointer rounded-xl flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
          >
            <Lock className="w-4 h-4" />
            <span>{loadingPassword ? "Updating Password..." : "Change Console Password"}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
