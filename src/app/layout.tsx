import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Burk Roofing | Residential & Commercial Roofing in Boerne, TX",
    template: "%s | Burk Roofing",
  },
  description:
    "Trusted roofing contractor in Boerne and San Antonio, TX. Residential and commercial roofing, roof repair, TPO systems, and roof coatings. Licensed & insured. Get a free inspection.",
  keywords: [
    "roofing contractor Boerne TX",
    "roofing San Antonio TX",
    "commercial roofing Texas",
    "TPO roofing contractor",
    "roof repair near me",
    "residential roofing Boerne",
  ],
  openGraph: {
    title: "Burk Roofing | Residential & Commercial Roofing in Boerne, TX",
    description:
      "Trusted roofing contractor in the Texas Hill Country. Built on relationships. Done right the first time.",
    type: "website",
    locale: "en_US",
    siteName: "Burk Roofing",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
