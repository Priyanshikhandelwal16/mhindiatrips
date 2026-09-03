"use client";

import React, { useState } from "react";
import { 
  Layers, Plus, Edit2, Trash2, Upload, AlertCircle, Layout, Sparkles, 
  HelpCircle, ChevronRight, FileText, ChevronDown, ChevronUp, Image as ImageIcon
} from "lucide-react";
import { CloudinaryUpload } from "./CloudinaryUpload";

interface PagesTabProps {
  pages: any[];
  editPage: any;
  setEditPage: (page: any) => void;
  newCustomPage: any;
  setNewCustomPage: (page: any) => void;
  handleSavePage: (e: React.FormEvent) => void;
  handleCreatePage: (e: React.FormEvent) => void;
  handleDeletePage: (id: string) => void;
  showStatus: (text: string, type: "success" | "error") => void;
}

export default function PagesTab({
  pages,
  editPage,
  setEditPage,
  newCustomPage,
  setNewCustomPage,
  handleSavePage,
  handleCreatePage,
  handleDeletePage,
  showStatus
}: PagesTabProps) {
  // Collapsed sections tracker inside the active page editor
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    metadata: true,
    slides: false,
    sections: true,
    faqs: false,
    primitives: false
  });

  const toggleSection = (sec: string) => {
    setOpenSections(prev => ({ ...prev, [sec]: !prev[sec] }));
  };

  return (
    <div className="space-y-6 animate-fade-in text-xs text-royal">
      {/* Pages Tab Header */}
      {!editPage && !newCustomPage && (
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-royal font-serif">Website Content & Pages</h2>
            <p className="text-[10px] text-royal/40">Translate and redesign content layouts for the front-end localized pages.</p>
          </div>
          <button
            onClick={() => setNewCustomPage({ id: "", title: { en: "", es: "", pt: "" }, heroImage: "", content: { body: { en: "", es: "", pt: "" } } })}
            className="bg-royal text-white border border-gold/20 hover:bg-gold hover:text-royal font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 flex items-center gap-1.5 transition cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Custom Page</span>
          </button>
        </div>
      )}

      {/* NEW CUSTOM PAGE FORM */}
      {newCustomPage && (
        <form onSubmit={handleCreatePage} className="bg-white border border-gold/20 p-8 shadow-md space-y-6 rounded-3xl">
          <div className="flex justify-between items-center border-b border-beige/40 pb-4">
            <h3 className="text-base font-bold font-serif">Create New Custom Page</h3>
            <button type="button" onClick={() => setNewCustomPage(null)} className="text-royal/50 hover:text-royal">Cancel</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider block">Page Slug (e.g. exclusive-tours)</label>
              <input 
                type="text" 
                required
                value={newCustomPage.id}
                onChange={e => setNewCustomPage({...newCustomPage, id: e.target.value})}
                className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50"
                placeholder="my-page-slug"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-bold uppercase tracking-wider block">Hero Banner Image URL (Optional)</label>
              <div className="flex items-center gap-2">
                <input 
                  type="text" 
                  value={newCustomPage.heroImage || ""}
                  onChange={e => setNewCustomPage({...newCustomPage, heroImage: e.target.value})}
                  className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50"
                  placeholder="/images/luxury_palace_train.png"
                />
                <CloudinaryUpload 
                  label="Upload" 
                  onUploadComplete={(url) => setNewCustomPage({...newCustomPage, heroImage: url})} 
                  showStatus={showStatus}
                  defaultSearch={newCustomPage?.title?.en || newCustomPage?.slug || ""}
                />
              </div>
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
                    className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2.5 outline-none rounded-lg focus:border-gold/50"
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
                    className="w-full h-32 bg-[#FAF8F5] border border-gold/15 p-4 outline-none font-mono text-[11px] rounded-lg focus:border-gold/50"
                    placeholder="<p>Welcome to our custom page content...</p>"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button type="submit" className="bg-royal text-white px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer rounded-lg shadow-md hover:bg-gold hover:text-royal transition">
              Create Page
            </button>
            <button type="button" onClick={() => setNewCustomPage(null)} className="bg-beige/35 text-royal px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer rounded-lg">
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* EDIT EXISTING PAGE FORM */}
      {editPage && (
        <form onSubmit={handleSavePage} className="bg-white border border-gold/20 p-8 shadow-md space-y-6 rounded-3xl">
          <div className="flex justify-between items-center border-b border-beige/40 pb-4">
            <div className="space-y-1">
              <h3 className="text-base font-bold font-serif">Editing Page: <span className="text-gold font-light">/{editPage.id}</span></h3>
              <p className="text-[10px] text-royal/40">Modify text templates and resources for the front-end layout.</p>
            </div>
            <span className="bg-royal/10 text-royal px-3 py-1 rounded text-[9px] uppercase font-bold tracking-wider border border-gold/15">
              {editPage.isCustom ? "Custom Page" : "System Page"}
            </span>
          </div>

          {/* Section 1: Page Metadata */}
          <div className="border border-beige/35 rounded-2xl overflow-hidden shadow-sm">
            <button
              type="button"
              onClick={() => toggleSection("metadata")}
              className="w-full bg-light-gray/50 px-6 py-4 flex justify-between items-center border-b border-beige/25 hover:bg-light-gray transition"
            >
              <div className="flex items-center gap-2">
                <Layout className="w-4 h-4 text-gold" />
                <span className="font-bold text-xs uppercase tracking-wider text-royal">Page Metadata & Hero Banner</span>
              </div>
              {openSections.metadata ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {openSections.metadata && (
              <div className="p-6 space-y-6 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                  <div className="space-y-2">
                    <label className="font-bold uppercase tracking-wider block text-royal/60">Hero Image Banner URL</label>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        value={editPage.heroImage || ""}
                        onChange={e => setEditPage({...editPage, heroImage: e.target.value})}
                        className="w-full bg-[#FAF8F5] border border-gold/15 px-4 py-3 outline-none rounded-lg focus:border-gold/50"
                        placeholder="/images/your-image.jpg"
                      />
                      <CloudinaryUpload 
                        label="Upload Banner" 
                        onUploadComplete={(url) => setEditPage({...editPage, heroImage: url})} 
                        showStatus={showStatus}
                        defaultSearch={editPage?.title?.en || editPage?.slug || ""}
                      />
                    </div>
                  </div>
                  {editPage.heroImage && (
                    <div className="h-20 w-full overflow-hidden border border-gold/10 bg-[#FAF8F5] rounded-xl shadow-inner">
                      <img src={editPage.heroImage || "/images/destination_fallback.jpg"} alt="Hero preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <span className="font-bold uppercase tracking-widest text-[9px] text-royal/60 block">Page Title Translations</span>
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
                          className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2.5 outline-none rounded-lg focus:border-gold/50"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Section 2: Complex Dynamic Fields */}
          <div className="space-y-6">
            {Object.keys(editPage.content || {}).map((key) => {
              const val = editPage.content[key];
              
              // ARRAY FIELDS (slides, stats, howItWorks, inclusions)
              if (Array.isArray(val)) {
                const isSlides = key === "slides";
                const isFaqs = key === "faqs";
                const isStats = key === "stats";
                return (
                  <div key={key} className="border border-beige/35 rounded-2xl overflow-hidden shadow-sm">
                    <button
                      type="button"
                      onClick={() => toggleSection(key)}
                      className="w-full bg-light-gray/50 px-6 py-4 flex justify-between items-center border-b border-beige/25 hover:bg-light-gray transition"
                    >
                      <div className="flex items-center gap-2">
                        {isSlides ? <ImageIcon className="w-4 h-4 text-gold" /> : isFaqs ? <HelpCircle className="w-4 h-4 text-gold" /> : <Layers className="w-4 h-4 text-gold" />}
                        <span className="font-bold text-xs uppercase tracking-wider text-royal">
                          {key.replace(/([A-Z])/g, " $1").trim()} Section ({val.length} items)
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <button 
                          type="button" 
                          onClick={(e) => {
                            e.stopPropagation();
                            const updatedContent = { ...editPage.content };
                            const newItem = key === "slides" 
                              ? { image: "", title: { en: "", es: "", pt: "" }, desc: { en: "", es: "", pt: "" }, location: { en: "", es: "", pt: "" }, sub: { en: "", es: "", pt: "" }, cta1Text: { en: "", es: "", pt: "" }, cta1Link: "/", cta2Text: { en: "", es: "", pt: "" }, cta2Link: "/" }
                              : key === "stats"
                              ? { value: 0, suffix: "", label: { en: "", es: "", pt: "" } }
                              : key === "faqs"
                              ? { q: { en: "", es: "", pt: "" }, a: { en: "", es: "", pt: "" } }
                              : key === "howItWorks" || key === "inclusions"
                              ? { title: { en: "", es: "", pt: "" }, desc: { en: "", es: "", pt: "" }, icon: "" }
                              : key === "featuredMonuments"
                              ? { name: "", city: "", state: "", era: "", image: "", desc: "" }
                              : key === "images"
                              ? { src: "", alt: "", span: "col-span-1 row-span-1" }
                              : key === "team"
                              ? { name: "", role: "", img: "" }
                              : { q: { en: "", es: "", pt: "" }, a: { en: "", es: "", pt: "" } };
                            updatedContent[key] = [...val, newItem];
                            setEditPage({ ...editPage, content: updatedContent });
                            setOpenSections(prev => ({ ...prev, [key]: true }));
                          }} 
                          className="text-[9px] bg-gold/15 text-royal border border-gold/30 px-3 py-1 font-bold uppercase tracking-wider cursor-pointer hover:bg-gold hover:text-royal transition rounded"
                        >
                          + Add Item
                        </button>
                        {openSections[key] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {openSections[key] && (
                      <div className="p-6 space-y-6 bg-white max-h-[70vh] overflow-y-auto">
                        {val.length === 0 ? (
                          <div className="text-center py-8 text-royal/40 italic">No items added to this section.</div>
                        ) : (
                          val.map((item: any, idx: number) => (
                            <div key={idx} className="border border-gold/10 p-5 bg-[#FAF8F5] space-y-4 relative rounded-2xl shadow-sm">
                              <div className="flex items-center justify-between pb-2 border-b border-gold/10">
                                <span className="text-[9px] font-bold text-royal/60 uppercase">Item #{idx + 1}</span>
                                <button type="button" onClick={() => {
                                  const updatedContent = { ...editPage.content };
                                  updatedContent[key] = val.filter((_: any, i: number) => i !== idx);
                                  setEditPage({ ...editPage, content: updatedContent });
                                }} className="text-[9px] text-red-500 font-bold uppercase cursor-pointer hover:text-red-700">Remove</button>
                              </div>
                              
                              {/* Loop over item subfields */}
                              {Object.keys(item).map((field) => {
                                const fieldVal = item[field];
                                if (fieldVal && typeof fieldVal === "object" && fieldVal.en !== undefined) {
                                  return (
                                    <div key={field} className="space-y-1">
                                      <label className="text-[9px] font-bold uppercase tracking-wider text-royal/50">{field}</label>
                                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                        {["en", "es", "pt"].map((l) => (
                                          <div key={l} className="space-y-0.5">
                                            <span className="text-[8px] font-bold text-royal/40 uppercase">{l}</span>
                                            <input type="text" placeholder={l.toUpperCase()} value={fieldVal[l] || ""} onChange={(e) => {
                                              const updatedContent = { ...editPage.content };
                                              updatedContent[key] = [...val];
                                              updatedContent[key][idx] = { ...item, [field]: { ...fieldVal, [l]: e.target.value } };
                                              setEditPage({ ...editPage, content: updatedContent });
                                            }} className="w-full bg-white border border-gold/10 px-2.5 py-2 outline-none text-[11px] rounded-lg" />
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  );
                                }
                                return (
                                  <div key={field} className="space-y-1">
                                    <label className="text-[9px] font-bold uppercase tracking-wider text-royal/50">{field}</label>
                                    <div className="flex gap-2">
                                      <input type={typeof fieldVal === "number" ? "number" : "text"} value={fieldVal ?? ""} onChange={(e) => {
                                        const updatedContent = { ...editPage.content };
                                        updatedContent[key] = [...val];
                                        updatedContent[key][idx] = { ...item, [field]: typeof fieldVal === "number" ? Number(e.target.value) : e.target.value };
                                        setEditPage({ ...editPage, content: updatedContent });
                                      }} className="w-full bg-white border border-gold/10 px-3 py-2 outline-none text-[11px] rounded-lg" />
                                      {(field === "image" || field === "img" || field === "src") && (
                                        <CloudinaryUpload label="Upload" onUploadComplete={(url) => {
                                          const updatedContent = { ...editPage.content };
                                          updatedContent[key] = [...val];
                                          updatedContent[key][idx] = { ...item, [field]: url };
                                          setEditPage({ ...editPage, content: updatedContent });
                                        }} showStatus={showStatus} defaultSearch={item.name || item.title || editPage?.title?.en || ""} />
                                      )}
                                    </div>
                                    {(field === "image" || field === "img" || field === "src") && fieldVal && (
                                      <div className="h-16 w-24 overflow-hidden border border-gold/10 mt-1.5 rounded-lg shadow-sm">
                                        <img src={fieldVal} alt="" className="w-full h-full object-cover" />
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                );
              }

              // OBJECT FIELDS (philosophy, foodSection, ctaBanner)
              if (val && typeof val === "object" && !val.en && !Array.isArray(val)) {
                return (
                  <div key={key} className="border border-beige/35 rounded-2xl overflow-hidden shadow-sm">
                    <button
                      type="button"
                      onClick={() => toggleSection(key)}
                      className="w-full bg-light-gray/50 px-6 py-4 flex justify-between items-center border-b border-beige/25 hover:bg-light-gray transition"
                    >
                      <span className="font-bold text-xs uppercase tracking-wider text-royal">
                        {key.replace(/([A-Z])/g, " $1").trim()} Section Properties
                      </span>
                      {openSections[key] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {openSections[key] && (
                      <div className="p-6 space-y-6 bg-white">
                        {key === "destinationsSection" && (
                          <div className="p-3.5 bg-gold/10 border border-gold/25 text-royal rounded-xl text-[10px] uppercase font-bold tracking-wider leading-relaxed mb-4">
                            ℹ️ Note: The image cards shown in the "Explore Diverse Horizons" section on the homepage are pulled dynamically from the "Destinations" tab in the admin sidebar. To change their images or descriptions, edit the corresponding State under the "Destinations" tab.
                          </div>
                        )}
                        {key === "packagesSection" && (
                          <div className="p-3.5 bg-gold/10 border border-gold/25 text-royal rounded-xl text-[10px] uppercase font-bold tracking-wider leading-relaxed mb-4">
                            ℹ️ Note: The packages and images shown here are pulled dynamically from the "Tour Packages" tab in the admin sidebar. To add or change package images, go to the "Tour Packages" tab.
                          </div>
                        )}
                        {key === "monumentsSection" && (
                          <div className="p-3.5 bg-gold/10 border border-gold/25 text-royal rounded-xl text-[10px] uppercase font-bold tracking-wider leading-relaxed mb-4">
                            ℹ️ Note: The featured list of monuments can be edited in the "Website Pages" → "Monuments" section, and state attractions are managed under the "Destinations" tab.
                          </div>
                        )}
                        {Object.keys(val).map((subKey) => {
                          const subVal = val[subKey];
                          if (subVal && typeof subVal === "object" && subVal.en !== undefined) {
                            return (
                              <div key={subKey} className="space-y-1.5">
                                <label className="text-[10px] font-bold uppercase tracking-wider text-royal/60">{subKey}</label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  {["en", "es", "pt"].map((l) => (
                                    <div key={l} className="space-y-0.5">
                                      <span className="text-[8px] font-bold text-royal/40 uppercase">{l}</span>
                                      <input key={l} type="text" placeholder={l.toUpperCase()} value={subVal[l] || ""} onChange={(e) => {
                                        const updatedContent = { ...editPage.content };
                                        updatedContent[key] = { ...val, [subKey]: { ...subVal, [l]: e.target.value } };
                                        setEditPage({ ...editPage, content: updatedContent });
                                      }} className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2 outline-none text-[11px] rounded-lg" />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            );
                          }
                          return (
                            <div key={subKey} className="space-y-1.5">
                              <label className="text-[10px] font-bold uppercase tracking-wider text-royal/60">{subKey}</label>
                              <div className="flex gap-2">
                                <input type="text" value={subVal || ""} onChange={(e) => {
                                  const updatedContent = { ...editPage.content };
                                  updatedContent[key] = { ...val, [subKey]: e.target.value };
                                  setEditPage({ ...editPage, content: updatedContent });
                                }} className="w-full bg-[#FAF8F5] border border-gold/10 px-3 py-2 outline-none text-[11px] rounded-lg" />
                                {(subKey === "image" || subKey === "img" || subKey === "src") && (
                                  <CloudinaryUpload label="Upload" onUploadComplete={(url) => {
                                    const updatedContent = { ...editPage.content };
                                    updatedContent[key] = { ...val, [subKey]: url };
                                    setEditPage({ ...editPage, content: updatedContent });
                                  }} showStatus={showStatus} defaultSearch={editPage?.title?.en || ""} />
                                )}
                              </div>
                              {(subKey === "image" || subKey === "img" || subKey === "src") && subVal && (
                                <div className="h-20 w-32 overflow-hidden border border-gold/10 mt-1.5 rounded-lg shadow-sm">
                                  <img src={subVal} alt="" className="w-full h-full object-cover" />
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              // TRANSLATABLE TEXT FIELDS (simple {en, es, pt} objects)
              if (val && typeof val === "object" && val.en !== undefined) {
                const sampleText = val.en || "";
                const isLongText = sampleText.length > 80 || key === "body" || key === "desc";
                const isHtml = key === "body" || sampleText.includes("<");
                return (
                  <div key={key} className="border border-beige/35 p-6 rounded-2xl bg-white space-y-4 shadow-sm">
                    <div className="flex items-center justify-between border-b border-beige/10 pb-2">
                      <span className="font-bold text-[10px] text-gold uppercase tracking-wider">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                      {isHtml && <span className="text-[8px] bg-royal/10 text-royal px-2 py-0.5 rounded font-extrabold border border-gold/20 uppercase">HTML</span>}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {["en", "es", "pt"].map((lng) => (
                        <div key={lng} className="space-y-1">
                          <label className="font-bold text-[9px] uppercase text-royal/60">{lng.toUpperCase()}</label>
                          {isLongText ? (
                            <textarea
                              value={val?.[lng] || ""}
                              onChange={(e) => {
                                const updatedContent = { ...editPage.content };
                                updatedContent[key] = { ...val, [lng]: e.target.value };
                                setEditPage({ ...editPage, content: updatedContent });
                              }}
                              className={`w-full bg-[#FAF8F5] border border-gold/15 p-3 outline-none rounded-lg focus:border-gold/50 ${
                                isHtml ? "h-40 font-mono text-[11px]" : "h-24"
                              }`}
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
                              className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2 outline-none rounded-lg focus:border-gold/50"
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
                <div key={key} className="border border-beige/35 p-6 rounded-2xl bg-white space-y-3 shadow-sm">
                  <span className="font-bold text-[10px] text-gold uppercase tracking-wider block">{key}</span>
                  <input type="text" value={val || ""} onChange={(e) => {
                    const updatedContent = { ...editPage.content };
                    updatedContent[key] = e.target.value;
                    setEditPage({ ...editPage, content: updatedContent });
                  }} className="w-full bg-[#FAF8F5] border border-gold/15 px-3 py-2 outline-none rounded-lg focus:border-gold/50" />
                </div>
              );
            })}
          </div>

          {/* Add custom field */}
          <div className="border-t border-beige/30 pt-4 flex justify-between items-center">
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
              className="text-gold hover:text-royal text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer transition"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Custom Section Field</span>
            </button>
          </div>

          <div className="flex gap-4 pt-4 border-t border-beige/40">
            <button type="submit" className="bg-royal text-white px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer rounded-lg shadow-md hover:bg-gold hover:text-royal transition">
              Save Changes
            </button>
            <button type="button" onClick={() => setEditPage(null)} className="bg-beige/35 text-royal px-6 py-3.5 font-bold uppercase tracking-wider cursor-pointer rounded-lg">
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* DIRECTORY DISPLAY (without forms) */}
      {!editPage && !newCustomPage && (
        <div className="space-y-8">
          {/* System Pages Directory */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-royal/60 flex items-center gap-1.5">
              <Layout className="w-4 h-4 text-gold" />
              <span>System Core Layout Pages</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pages.filter((p: any) => !p.isCustom).map((p: any) => (
                <div key={p.id} className="bg-white border border-beige/45 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between hover:border-gold/30 transition">
                  {p.heroImage ? (
                    <div className="h-36 overflow-hidden bg-[#FAF8F5] relative">
                      <img src={p.heroImage || "/images/destination_fallback.jpg"} alt={p.title?.en} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  ) : (
                    <div className="h-36 bg-light-gray flex items-center justify-center relative border-b border-beige/25">
                      <Layers className="w-8 h-8 text-royal/20 animate-pulse-gentle" />
                    </div>
                  )}
                  <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] uppercase tracking-wider font-extrabold text-gold">/{p.id === "homepage" ? "" : p.id}</span>
                        <span className="bg-beige/40 text-royal/60 px-2 py-0.5 rounded text-[8px] uppercase font-bold tracking-wider">System</span>
                      </div>
                      <h4 className="text-base font-bold text-royal font-serif line-clamp-1">{p.title?.en}</h4>
                      <p className="text-[10px] text-foreground/50 font-light leading-relaxed">
                        Contains {Object.keys(p.content || {}).length} localized component sections editable.
                      </p>
                    </div>
                    <button
                      onClick={() => setEditPage(p)}
                      className="w-full py-2.5 rounded-xl border border-royal/15 hover:bg-royal hover:text-white text-royal text-[10px] font-bold uppercase tracking-wider transition cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                      <span>Edit Content</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Pages Directory */}
          <div className="space-y-4 pt-8 border-t border-beige/25">
            <h3 className="text-xs font-bold uppercase tracking-wider text-royal/60 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-gold" />
              <span>Custom Static & Landing Pages</span>
            </h3>
            {pages.filter((p: any) => p.isCustom).length === 0 ? (
              <div className="text-center py-12 bg-white border border-beige/35 rounded-3xl italic text-royal/40">
                No custom pages created. Click "Add Custom Page" to create standalone articles or landing links.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pages.filter((p: any) => p.isCustom).map((p: any) => (
                  <div key={p.id} className="bg-white border border-beige/45 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between hover:border-gold/30 transition">
                    {p.heroImage ? (
                      <div className="h-36 overflow-hidden bg-[#FAF8F5]">
                        <img src={p.heroImage || "/images/destination_fallback.jpg"} alt={p.title?.en} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="h-36 bg-light-gray flex items-center justify-center border-b border-beige/25">
                        <FileText className="w-8 h-8 text-royal/20" />
                      </div>
                    )}
                    <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] uppercase tracking-wider font-extrabold text-gold">/{p.id}</span>
                          <span className="bg-royal/10 text-royal px-2 py-0.5 rounded text-[8px] uppercase font-bold tracking-wider">Custom</span>
                        </div>
                        <h4 className="text-base font-bold text-royal font-serif line-clamp-1">{p.title?.en}</h4>
                      </div>
                      <div className="flex justify-between items-center pt-4 border-t border-beige/20 mt-3 text-xs">
                        <button
                          onClick={() => setEditPage(p)}
                          className="text-royal hover:text-gold flex items-center gap-1 font-bold uppercase tracking-wider cursor-pointer"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => handleDeletePage(p.id)}
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
            )}
          </div>
        </div>
      )}
    </div>
  );
}
