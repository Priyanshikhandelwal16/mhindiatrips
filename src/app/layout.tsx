import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "MHIndiaTrips | Premium Custom Private Tours to India",
    description: "Experience Incredible India with bespoke luxury itineraries, custom heritage palace accommodations, private transfers, and curated local guides.",
    keywords: ["India travel guide", "luxury India tour", "private tour India", "Golden Triangle tour", "Rajasthan custom travel"],
    robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return children;
}
