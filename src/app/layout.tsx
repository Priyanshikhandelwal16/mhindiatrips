import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "MHIndiaTrips | Premium Custom Private Tours to India",
    description: "Experience Incredible India with bespoke luxury itineraries, custom heritage palace accommodations, private transfers, and curated local guides.",
    keywords: ["India travel guide", "luxury India tour", "private tour India", "Golden Triangle tour", "Rajasthan custom travel"],
    robots: { index: true, follow: true },
    verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "ndlbpsyV01lZ9W_Nsgup3JMk1RTg55FY9q9eZ6Trf2A",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return children;
}
