import React from "react";
import { getPageByIdAction } from "@/app/actions/queries";
import { db } from "@/lib/db";
import LegalPageLayout, { LegalSectionItem } from "@/components/common/LegalPageLayout";
import { formatRichText } from "@/lib/utils";
import { 
  AlertCircle, ShieldCheck, Building2, ExternalLink, 
  FileText, Scale, Info, CheckCircle2 
} from "lucide-react";

interface DisclaimerPageProps {
  params: Promise<{ locale: string }>;
}

export default async function DisclaimerPage({ params }: DisclaimerPageProps) {
  const { locale } = await params;
  const pageData = await getPageByIdAction("disclaimer");
  const contactDetails = (await db.settings.findUnique("contact_details")) || {
    phone: "+91 9314635830",
    email: "info@mhindiatrips.com",
    gstin: "08ACIFM3516H1Z7"
  };

  const title = pageData?.title?.[locale] || pageData?.title?.en || (
    locale === "es" ? "Aviso Legal y Descargo de Responsabilidad" : locale === "pt" ? "Aviso Legal e Isenção de Responsabilidade" : "Legal Disclaimer & Travel Notice"
  );
  const badge = locale === "es" ? "DESCARGO DE RESPONSABILIDAD LEGAL" : locale === "pt" ? "ISENÇÃO DE RESPONSABILIDADE LEGAL" : "OFFICIAL LEGAL DISCLAIMER & NOTICE";
  const subtitle = locale === "es" 
    ? "Aviso de exención de responsabilidad respecto a itinerarios, servicios de terceros, precisión de precios y regulación de tours."
    : locale === "pt"
    ? "Aviso de isenção de responsabilidade em relação a roteiros, serviços terceirizados, precisão de preços e regulamentações."
    : "Official legal disclaimers regarding travel itineraries, third-party vendor arrangements, tariff accuracy, and website usage rights.";

  // Stat Highlights Top Banner
  const statHighlights = [
    {
      label: locale === "es" ? "Registro Gubernamental" : locale === "pt" ? "Registro Governamental" : "Govt. Registered",
      value: "Form GST REG-06",
      desc: locale === "es" ? "Operador legal verificado por el gobierno" : locale === "pt" ? "Operador legal verificado pelo governo" : "Official registration under State Tax Dept., Rajasthan.",
      icon: <Building2 className="w-5 h-5" />
    },
    {
      label: locale === "es" ? "Número GSTIN" : locale === "pt" ? "Número GSTIN" : "GSTIN Certificate",
      value: "08ACIFM3516H1Z7",
      desc: locale === "es" ? "Número de impuestos sobre bienes y servicios" : locale === "pt" ? "Número de imposto sobre bens e serviços" : "Verified active tax identification for all bookings.",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      label: locale === "es" ? "Precisión de Precios" : locale === "pt" ? "Precisão de Preços" : "Tariff Accuracy",
      value: "Live Quotes",
      desc: locale === "es" ? "Precios confirmados en factura por escrito" : locale === "pt" ? "Preços confirmados em fatura por escrito" : "Final tariffs confirmed upon written itinerary issuance.",
      icon: <FileText className="w-5 h-5" />
    },
    {
      label: locale === "es" ? "Soporte de Concierge" : locale === "pt" ? "Suporte de Concierge" : "Concierge Guarantee",
      value: "100% Verified",
      desc: locale === "es" ? "Choferes y guías licenciados en toda India" : locale === "pt" ? "Motoristas e guias licenciados em toda Índia" : "Licensed local guides & professional chauffeurs.",
      icon: <CheckCircle2 className="w-5 h-5" />
    }
  ];

  const contentObj = pageData?.content || {};
  const sectionKeys = Object.keys(contentObj);

  let sections: LegalSectionItem[] = [];

  const iconsList = [
    <Info key="1" className="w-5 h-5" />,
    <Building2 key="2" className="w-5 h-5" />,
    <FileText key="3" className="w-5 h-5" />,
    <Scale key="4" className="w-5 h-5" />,
    <ExternalLink key="5" className="w-5 h-5" />
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
      let sectionTitle = key === "body" ? (locale === "es" ? "Aviso General de Exención" : locale === "pt" ? "Aviso Geral de Isenção" : "General Disclaimer Notice") : key;
      
      return {
        id: `section-${idx + 1}`,
        title: sectionTitle,
        icon: iconsList[idx % iconsList.length],
        htmlContent: formattedHtml,
        keyTakeaway: idx === 0 ? [
          "Itineraries subject to weather, seasonal monument timings, & regional regulations.",
          "Prices confirmed upon written invoice issuance under GSTIN 08ACIFM3516H1Z7.",
          "MH India Trips is an authorized partner desk operating 100% tax compliant tours."
        ] : undefined
      };
    }).filter(s => s.htmlContent.trim().length > 0);
  }

  if (sections.length === 0) {
    sections = [
      {
        id: "general-travel-disclaimer",
        title: locale === "es" ? "1. Aviso General sobre Itinerarios" : locale === "pt" ? "1. Aviso Geral sobre Roteiros" : "1. General Travel Information & Itineraries",
        icon: <Info className="w-5 h-5" />,
        keyTakeaway: [
          "Itinerary timings subject to local traffic, weather, & government monument rules.",
          "Hotel category substitutions provided in equal or higher luxury class if needed.",
          "All bookings supported by official GST invoices."
        ],
        htmlContent: `<p>MH India Trips provides luxury custom tours, private transfers, and guided itineraries across India and international destinations. While we make every effort to maintain accurate pricing, hotel availability, monument opening hours, and transport schedules, all details are subject to change without prior notice based on government regulations, weather conditions, local events, or unforeseen circumstances.</p>`
      },
      {
        id: "third-party-suppliers",
        title: locale === "es" ? "2. Proveedores Independientes de Servicios" : locale === "pt" ? "2. Fornecedores Independentes de Serviços" : "2. Third-Party Operators & Independent Vendors",
        icon: <Building2 className="w-5 h-5" />,
        keyTakeaway: [
          "Collab with audited luxury palace hotels & licensed chauffeurs.",
          "Independent airline/train delays remain under carrier regulation.",
          "MH India Trips provides active 24/7 on-ground assistance for route adjustments."
        ],
        htmlContent: `<p>MH India Trips acts as an authorized travel design company collaborating with vetted third-party vendors including luxury hotels, heritage palace resorts, airlines, rail authorities, local transport providers, and certified guides. We are not liable for any delays, cancellations, injuries, baggage loss, or damages caused by independent third-party operators or events beyond our direct operational control.</p>`
      },
      {
        id: "accuracy-pricing",
        title: locale === "es" ? "3. Tarifas, Cotizaciones e Impuestos" : locale === "pt" ? "3. Tarifas, Cotações e Impostos" : "3. Rate Accuracy & Tax Invoicing",
        icon: <FileText className="w-5 h-5" />,
        htmlContent: `<p>Prices quoted on the website are estimates calculated based on current hotel seasonal rates and fuel surcharges. Final itinerary prices are confirmed upon written booking confirmation and invoice issuance under registered GSTIN <strong>${contactDetails.gstin || "08ACIFM3516H1Z7"}</strong>.</p>`
      },
      {
        id: "intellectual-property",
        title: locale === "es" ? "4. Derechos de Autor y Propiedad Intelectual" : locale === "pt" ? "4. Direitos Autorais e Propriedade Intelectual" : "4. Intellectual Property & Copyright Notice",
        icon: <Scale className="w-5 h-5" />,
        htmlContent: `<p>All content, photographs, logo marks, itinerary structures, and written material on this website are protected under applicable international copyright laws. Unauthorized reproduction or commercial distribution without written consent from MH India Trips is strictly prohibited.</p>`
      },
      {
        id: "external-portals",
        title: locale === "es" ? "5. Portales y Enlaces Externos" : locale === "pt" ? "5. Portais e Links Externos" : "5. External Links & Third-Party Websites",
        icon: <ExternalLink className="w-5 h-5" />,
        htmlContent: `<p>This website may contain links to third-party portals (such as official tourism boards, visa application portals, or payment gateways). MH India Trips does not endorse, control, or take responsibility for the privacy practices or content of third-party websites.</p>`
      }
    ];
  }

  const faqs = [
    {
      q: "Are monument entry tickets included in all tour packages?",
      a: "Yes. Unless specified otherwise in your customized itinerary breakdown, heritage fort and palace entry tickets are included and pre-reserved by our concierge desk."
    },
    {
      q: "What happens if a monument is closed due to a VIP or government visit?",
      a: "On rare occasions, monuments like the Taj Mahal or Jaipur Palace halls may close for state visits. Our on-ground guide will adjust the schedule or offer an equivalent heritage experience."
    },
    {
      q: "How can I verify the legal registration of MH India Trips?",
      a: "Our company is registered under Form GST REG-06 by the State Tax Department, Government of Rajasthan & GST Portal, Govt. of India (GSTIN: 08ACIFM3516H1Z7)."
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
