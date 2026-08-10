import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MH India Trips | Admin Console",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        body > header,
        body > div > header,
        nav[class*="header"],
        header,
        footer,
        [class*="ConciergeSeal"],
        [class*="concierge"] {
          display: none !important;
        }
        main {
          padding-top: 0 !important;
          margin-top: 0 !important;
        }
      `}} />
      {children}
    </>
  );
}
