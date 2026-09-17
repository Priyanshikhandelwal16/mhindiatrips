import React from "react";
import { getPageByIdAction } from "@/app/actions/queries";
import { db } from "@/lib/db";
import LegalPageLayout, { LegalSectionItem } from "@/components/common/LegalPageLayout";
import { formatRichText } from "@/lib/utils";
import { 
  Lock, ShieldCheck, EyeOff, FileText, UserCheck, 
  Database, Server, BellRing 
} from "lucide-react";

interface PrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  const pageData = await getPageByIdAction("privacy");
  const contactDetails = (await db.settings.findUnique("contact_details")) || {
    phone: "+91 9314635830",
    email: "info@mhindiatrips.com",
    gstin: "08ACIFM3516H1Z7"
  };

  const title = pageData?.title?.[locale] || pageData?.title?.en || (
    locale === "es" ? "Política de Privacidad y Datos" : locale === "pt" ? "Política de Privacidade e Dados" : "Privacy & Data Protection Policy"
  );
  const badge = locale === "es" ? "PROTECCIÓN DE DATOS Y PRIVACIDAD" : locale === "pt" ? "PROTEÇÃO DE DADOS E PRIVACIDADE" : "DATA SECURITY & PRIVACY GUARANTEE";
  const subtitle = locale === "es" 
    ? "Cómo recopilamos, utilizamos, almacenamos y protegemos su información personal para sus viajes privados por la India."
    : locale === "pt"
    ? "Como coletamos, usamos, armazenamos e protegemos suas informações pessoais para suas viagens privadas na Índia."
    : "How we collect, process, store, and safeguard your personal records and travel information with 100% confidentiality.";

  // Stat Highlights Top Banner
  const statHighlights = [
    {
      label: locale === "es" ? "Privacidad de Datos" : locale === "pt" ? "Privacidade de Dados" : "Zero Commercial Sale",
      value: "100% Private",
      desc: locale === "es" ? "Nunca vendemos ni comercializamos sus datos" : locale === "pt" ? "Nunca vendemos nem comercializamos seus dados" : "Your data is never sold or shared with third-party advertisers.",
      icon: <EyeOff className="w-5 h-5" />
    },
    {
      label: locale === "es" ? "Encriptación SSL" : locale === "pt" ? "Criptografia SSL" : "SSL Encrypted",
      value: "256-Bit SSL",
      desc: locale === "es" ? "Seguridad bancaria en todas las consultas" : locale === "pt" ? "Segurança bancária em todas as consultas" : "Bank-grade digital security for inquiries & passport copies.",
      icon: <Lock className="w-5 h-5" />
    },
    {
      label: locale === "es" ? "Cumplimiento Legal" : locale === "pt" ? "Conformidade Legal" : "Govt. Compliant",
      value: "Certified Firm",
      desc: locale === "es" ? "Empresa registrada bajo GSTIN 08ACIFM3516H1Z7" : locale === "pt" ? "Empresa registrada sob GSTIN 08ACIFM3516H1Z7" : "Operating under strict Indian Government regulatory compliance.",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      label: locale === "es" ? "Derecho a Borrado" : locale === "pt" ? "Direito ao Apagamento" : "Data Removal",
      value: "On Request",
      desc: locale === "es" ? "Eliminación permanente de datos a petición" : locale === "pt" ? "Exclusão permanente de dados mediante solicitação" : "Permanent data deletion available upon user email request.",
      icon: <Database className="w-5 h-5" />
    }
  ];

  const contentObj = pageData?.content || {};
  const sectionKeys = Object.keys(contentObj);

  let sections: LegalSectionItem[] = [];

  const iconsList = [
    <Lock key="1" className="w-5 h-5" />,
    <FileText key="2" className="w-5 h-5" />,
    <Server key="3" className="w-5 h-5" />,
    <UserCheck key="4" className="w-5 h-5" />,
    <EyeOff key="5" className="w-5 h-5" />
  ];

  if (sectionKeys.length > 0) {
    sections = sectionKeys.map((key, idx) => {
      const fieldVal = contentObj[key];
      let rawText = "";
      if (typeof fieldVal === "string") {
        rawText = fieldVal;
      } else if (fieldVal && typeof fieldVal === "object") {
        rawText = fieldVal[locale] || fieldVal.en || fieldVal.es || fieldVal.pt || "";
      }

      const formattedHtml = rawText ? formatRichText(rawText) : "";
      let sectionTitle = key === "body" ? (locale === "es" ? "Declaración de Privacidad" : locale === "pt" ? "Declaração de Privacidade" : "Privacy Commitment & Scope") : key;
      
      return {
        id: `section-${idx + 1}`,
        title: sectionTitle,
        icon: iconsList[idx % iconsList.length],
        htmlContent: formattedHtml,
        keyTakeaway: idx === 0 ? [
          "Passport numbers collected exclusively for monument permits & hotel check-ins.",
          "Payment processing handled directly through secure bank channels.",
          "Full right to inspect or delete personal data records anytime."
        ] : undefined
      };
    }).filter(s => s.htmlContent.trim().length > 0);
  }

  if (sections.length === 0) {
    sections = [
      {
        id: "information-collection",
        title: locale === "es" ? "1. Información que Recopilamos" : locale === "pt" ? "1. Informações que Coletamos" : "1. Information We Collect",
        icon: <FileText className="w-5 h-5" />,
        keyTakeaway: [
          "Name, email, & WhatsApp phone number for itinerary coordination.",
          "Passport details required for ASI heritage monument entry permits.",
          "Dietary or hotel preferences to customize your travel package."
        ],
        htmlContent: `<p>We collect personal information provided when making inquiries, booking custom tours, or communicating with our destination managers. This includes your name, contact details, travel preferences, and passport copies strictly required for hotel check-in permits and heritage site passes.</p>`
      },
      {
        id: "information-usage",
        title: locale === "es" ? "2. Uso de la Información" : locale === "pt" ? "2. Uso das Informações" : "2. How Your Information is Used",
        icon: <UserCheck className="w-5 h-5" />,
        keyTakeaway: [
          "Curating bespoke private itineraries with palace hotels.",
          "Issuing official GST tax invoices under GSTIN 08ACIFM3516H1Z7.",
          "Real-time 24/7 WhatsApp concierge communication during your trip."
        ],
        htmlContent: `<p>Your personal information is strictly used to design and execute your private travel itinerary, process hotel reservations, issue official tax invoices, and maintain 24/7 concierge communication during your journey across India.</p>`
      },
      {
        id: "data-protection",
        title: locale === "es" ? "3. Protección y Encriptación" : locale === "pt" ? "3. Proteção e Criptografia" : "3. Data Security & Storage Controls",
        icon: <Lock className="w-5 h-5" />,
        htmlContent: `<p>We implement strict 256-bit SSL encryption and physical server access controls. Your records are accessible exclusively to authorized travel managers handling your specific booking.</p>`
      },
      {
        id: "third-party-sharing",
        title: locale === "es" ? "4. Proveedores y Terceros" : locale === "pt" ? "4. Fornecedores e Terceiros" : "4. Vetted Vendors & Strict Non-Disclosure",
        icon: <EyeOff className="w-5 h-5" />,
        htmlContent: `<p>We share information strictly with verified partners directly involved in your journey (palace hotels, private transport chauffeurs, and licensed guides). We NEVER sell, rent, or trade your personal information to third-party marketing companies.</p>`
      },
      {
        id: "your-rights",
        title: locale === "es" ? "5. Sus Derechos de Privacidad" : locale === "pt" ? "5. Seus Direitos de Privacidade" : "5. Your Data Access & Erasure Rights",
        icon: <Database className="w-5 h-5" />,
        htmlContent: `<p>You have full rights to request a copy of your personal data or ask for permanent record erasure upon completion of your trip. Email your request to <strong>${contactDetails.email || "info@mhindiatrips.com"}</strong>.</p>`
      }
    ];
  }

  const faqs = [
    {
      q: "Why do you require passport copies before travel?",
      a: "Government regulations in India require hotels and luxury palace resorts to log foreign tourist passport details (Form C). Additionally, archaeological monuments require guest passport numbers for reserved entry permits."
    },
    {
      q: "Are my credit card details stored on your servers?",
      a: "No. All payment processing is routed through encrypted, PCI-DSS compliant bank gateways or official bank wire transfers. We never store credit card numbers on our website."
    },
    {
      q: "How can I request deletion of my personal data?",
      a: "Simply send an email to info@mhindiatrips.com with your booking reference. Our data privacy officer will permanently delete your records within 48 hours."
    }
  ];

  return (
    <LegalPageLayout 
      locale={locale}
      badge={badge}
      title={title}
      subtitle={subtitle}
      lastUpdated="Updated September 2026"
      gstin={contactDetails.gstin || "08ACIFM3516H1Z7"}
      statHighlights={statHighlights}
      sections={sections}
      faqs={faqs}
      contactEmail={contactDetails.email}
      contactPhone={contactDetails.phone}
    />
  );
}
