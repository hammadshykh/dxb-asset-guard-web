import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import { ReactLenis } from "@/lib/lenis";
// import LoadingScreen from "@/components/LoadingScreen";

// Montserrat font setup
const montserrat = Montserrat({
 subsets: ["latin"],
 variable: "--font-montserrat",
 display: "swap",
});

// Inter font setup
const inter = Inter({
 subsets: ["latin"],
 variable: "--font-inter",
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
}: Readonly<{ children: React.ReactNode }>) {
 return (
  <html lang="en" suppressHydrationWarning>
   <body
    className={`
          ${montserrat.variable} 
          ${inter.variable} 
          font-sans antialiased
          ${montserrat.className}
        `}
   >
    <ReactLenis options={{ duration: 1.5 }} root>
     {children}
     {/* <LoadingScreen /> */}
    </ReactLenis>
    <NextTopLoader color="var(--primary)" height={3} showSpinner={false} />
    <Footer />
   </body>
  </html>
 );
}
