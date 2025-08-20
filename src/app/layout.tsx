import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";

// ✅ Montserrat font setup
const montserrat = Montserrat({
 subsets: ["latin"],
 variable: "--font-montserrat",
 display: "swap",
});

export const metadata: Metadata = {
 title: {
  default: "DXB Asset Guard",
  template: "%s | DXB Asset Guard",
 },
 description: "Secure and manage your assets with DXB Asset Guard Web.",
 keywords: [
  "DXB",
  "Asset Management",
  "Security",
  "Next.js",
  "GSAP",
  "Tailwind CSS",
 ],
 authors: [{ name: "DXB Asset Guard Team" }],
 openGraph: {
  title: "DXB Asset Guard",
  description: "Secure and manage your assets with DXB Asset Guard Web.",
  url: "https://dxb-asset-guard.com",
  siteName: "DXB Asset Guard",
  images: [
   {
    url: "/og-image.png",
    width: 1200,
    height: 630,
    alt: "DXB Asset Guard Preview",
   },
  ],
  locale: "en_US",
  type: "website",
 },
 twitter: {
  card: "summary_large_image",
  title: "DXB Asset Guard",
  description: "Secure and manage your assets with DXB Asset Guard Web.",
  images: ["/og-image.png"],
 },
 metadataBase: new URL("https://dxb-asset-guard.com"),
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <body
    className={`${montserrat.variable} ${montserrat.className} font-sans antialiased`}
   >
    {children}
    <Footer />
   </body>
  </html>
 );
}
