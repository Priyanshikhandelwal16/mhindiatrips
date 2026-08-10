import React from "react";
import TripPlannerWizard from "@/components/planner/TripPlannerWizard";

interface PlanPageProps {
  params: Promise<{ locale: string }>;
}

export default async function PlanYourTripPage({ params }: PlanPageProps) {
  const { locale } = await params;

  return <TripPlannerWizard locale={locale} />;
}
