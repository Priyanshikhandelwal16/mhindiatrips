import React from "react";
import { getPageByIdAction } from "@/app/actions/queries";
import { db } from "@/lib/db";
import LegalPageLayout, { LegalSectionItem } from "@/components/common/LegalPageLayout";
import { formatRichText } from "@/lib/utils";
import { 
  CreditCard, RefreshCw, FileCheck2, ShieldCheck, Scale, 
  UserCheck, Compass, Lock, Building2 
} from "lucide-react";

interface TermsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params;
  const pageData = await getPageByIdAction("terms");
  const contactDetails = (await db.settings.findUnique("contact_details")) || {
    phone: "+91 9314635830",
    email: "info@mhindiatrips.com",
    gstin: "08ACIFM3516H1Z7"
  };

  const title = pageData?.title?.[locale] || pageData?.title?.en || (
    locale === "es" ? "Términos y Condiciones de Viaje" : locale === "pt" ? "Termos e Condições de Viagem" : "Terms & Conditions of Travel"
  );
  const badge = locale === "es" ? "REGISTRO LEGAL Y CONDICIONES" : locale === "pt" ? "REGISTRO LEGAL E CONDIÇÕES" : "LEGAL REGISTER & SERVICE AGREEMENT";
  const subtitle = locale === "es" 
    ? "Términos de servicio, políticas de reserva, reembolsos y compromisos de viaje privado de MH India Trips."
    : locale === "pt"
    ? "Termos de serviço, políticas de reserva, reembolsos e compromissos de viagem privada da MH India Trips."
    : "Comprehensive terms governing your private travel arrangements, booking deposits, cancellation refund windows, and traveler guarantees.";

  // Stat Highlights Top Banner
  const statHighlights = [
    {
      label: locale === "es" ? "Depósito de Reserva" : locale === "pt" ? "Depósito de Reserva" : "Booking Deposit",
      value: "25%",
      desc: locale === "es" ? "Para confirmar vehículo privado y hotel" : locale === "pt" ? "Para confirmar veículo privado e hotel" : "Required to secure private vehicle & palace hotel stays.",
      icon: <CreditCard className="w-5 h-5" />
    },
    {
      label: locale === "es" ? "Cancelación Gratuita" : locale === "pt" ? "Cancelamento Gratuito" : "Free Cancellation",
      value: "30 Days",
      desc: locale === "es" ? "Reembolso completo hasta 30 días antes" : locale === "pt" ? "Reembolso total até 30 dias antes" : "Full refund up to 30 days prior to tour departure.",
      icon: <RefreshCw className="w-5 h-5" />
    },
    {
      label: locale === "es" ? "Soporte de Operaciones" : locale === "pt" ? "Suporte de Operações" : "On-Ground Support",
      value: "24/7 Active",
      desc: locale === "es" ? "Asistencia activa por WhatsApp en su tour" : locale === "pt" ? "Assistência ativa por WhatsApp no tour" : "Real-time itinerary adjustments & concierge desk.",
      icon: <UserCheck className="w-5 h-5" />
    },
    {
      label: locale === "es" ? "Facturación Fiscal GST" : locale === "pt" ? "Faturamento Fiscal GST" : "Tax Invoicing",
      value: "100% Tax Invoice",
      desc: locale === "es" ? "Factura legal con GSTIN registrado" : locale === "pt" ? "Fatura legal com GSTIN registrado" : "Issued under GSTIN 08ACIFM3516H1Z7 for all bookings.",
      icon: <FileCheck2 className="w-5 h-5" />
    }
  ];

  const contentObj = pageData?.content || {};
  const sectionKeys = Object.keys(contentObj);

  let sections: LegalSectionItem[] = [];

  const iconsList = [
    <CreditCard key="1" className="w-5 h-5" />,
    <RefreshCw key="2" className="w-5 h-5" />,
    <Compass key="3" className="w-5 h-5" />,
    <UserCheck key="4" className="w-5 h-5" />,
    <ShieldCheck key="5" className="w-5 h-5" />
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
      let sectionTitle = key === "body" ? (locale === "es" ? "Visión General del Servicio" : locale === "pt" ? "Visão Geral do Serviço" : "Service Overview & Scope") : key;
      
      return {
        id: `section-${idx + 1}`,
        title: sectionTitle,
        icon: iconsList[idx % iconsList.length],
        htmlContent: formattedHtml,
        keyTakeaway: idx === 0 ? [
          "Private custom itineraries with dedicated English-speaking chauffeurs.",
          "Official GST invoice provided for all client bookings under GSTIN 08ACIFM3516H1Z7.",
          "24/7 direct WhatsApp concierge line during on-ground travel."
        ] : undefined
      };
    }).filter(s => s.htmlContent.trim().length > 0);
  }

  if (sections.length === 0) {
    sections = [
      {
        id: "booking-payments",
        title: locale === "es" ? "1. Reservas y Pagos" : locale === "pt" ? "1. Reservas e Pagamentos" : "1. Booking & Deposit Terms",
        icon: <CreditCard className="w-5 h-5" />,
        keyTakeaway: [
          "25% advance deposit secures hotel bookings & private luxury vehicles.",
          "Remaining 75% balance due 15 days before arrival date.",
          "Official Tax Invoices provided under registered GSTIN 08ACIFM3516H1Z7."
        ],
        htmlContent: `<p>A 25% deposit is required to confirm your booking. The remaining balance is due 15 days before the trip start date. All payments are processed securely through authorized banking channels with official tax invoices issued under registered GSTIN <strong>08ACIFM3516H1Z7</strong>.</p>`
      },
      {
        id: "cancellation-refunds",
        title: locale === "es" ? "2. Política de Cancelación y Reembolsos" : locale === "pt" ? "2. Cancelamentos e Reembolsos" : "2. Cancellations & Refund Schedule",
        icon: <RefreshCw className="w-5 h-5" />,
        timeline: [
          { label: "60+ Days Prior", value: "100% Refund", desc: "Full refund minus minor banking processing fee." },
          { label: "30-59 Days Prior", value: "50% Refund", desc: "50% refund returned within 7 business days.", highlight: true },
          { label: "Less than 14 Days", value: "Non-Refundable", desc: "Pre-committed hotel deposits and private transport fees." }
        ],
        htmlContent: `<p>Cancellations made 30+ days before departure qualify for a full refund minus minimal payment gateway transaction charges. Cancellations between 15-29 days before arrival receive a 50% refund. Cancellations made less than 14 days before arrival are non-refundable due to non-recoverable hotel reservations and luxury transport commitments.</p>`
      },
      {
        id: "itinerary-modifications",
        title: locale === "es" ? "3. Modificaciones e Itinerarios" : locale === "pt" ? "3. Modificações de Roteiro" : "3. Itinerary Changes & Unforeseen Events",
        icon: <Compass className="w-5 h-5" />,
        keyTakeaway: [
          "Tailor-made itineraries allow flexible stops during daily private drives.",
          "Equal or higher category hotel substitutions guaranteed in rare weather delays.",
          "Government monument schedule updates managed directly by licensed guides."
        ],
        htmlContent: `<p>We reserve the right to modify tour routes or hotel choices due to weather conditions, road closures, or government regulations. In any such case, equal or higher quality arrangements will be provided without compromising client comfort or safety.</p>`
      },
      {
        id: "traveler-responsibilities",
        title: locale === "es" ? "4. Responsabilidades del Viajero" : locale === "pt" ? "4. Responsabilidades do Viajante" : "4. Passports, E-Visas & Insurance",
        icon: <UserCheck className="w-5 h-5" />,
        htmlContent: `<p>Travelers are responsible for securing valid passports (minimum 6 months validity), Indian e-visas, and personal travel insurance. MH India Trips provides guidance for visa requirements and state regulations.</p>`
      },
      {
        id: "third-party-liability",
        title: locale === "es" ? "5. Proveedores y Limitación Legal" : locale === "pt" ? "5. Fornecedores e Responsabilidade" : "5. Partner Operators & Liability Limits",
        icon: <ShieldCheck className="w-5 h-5" />,
        htmlContent: `<p>MH India Trips coordinates with hand-picked palace hotels, licensed local guides, and private transport chauffeurs. While we strictly audit all partners, we are not liable for third-party airline delays or force majeure events beyond our direct operational control.</p>`
      }
    ];
  }

  const faqs = [
    {
      q: "Can I request an official GST tax invoice for corporate reimbursement?",
      a: "Yes. MH India Trips is a government tax-compliant enterprise under GSTIN 08ACIFM3516H1Z7. We issue official GST tax invoices for all client bookings upon final settlement."
    },
    {
      q: "What happens if I need to change my travel dates after booking?",
      a: "Date changes requested 30+ days prior to arrival are free of charge, subject to hotel availability and seasonal tariff adjustments."
    },
    {
      q: "Is travel insurance included in private packages?",
      a: "We strongly recommend comprehensive international travel insurance covering medical expenses and trip interruptions, as insurance is the traveler's personal responsibility."
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
