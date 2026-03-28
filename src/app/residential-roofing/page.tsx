import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Residential Roofing | GAF Timberline HDZ Shingles | Boerne & San Antonio, TX",
  description:
    "Premium residential roofing with GAF Timberline HDZ shingles in Boerne and San Antonio. America's #1-selling shingle, expert installation, and WindProven warranty eligible. Free inspections.",
};

export default function ResidentialRoofingPage() {
  return (
    <ServicePageLayout
      title="Residential Roofing"
      subtitle="GAF Timberline HDZ shingles and designer roofing systems for Texas Hill Country homes."
      image="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200&q=80"
      imageAlt="Steep slope residential roof with GAF Timberline shingles"
      description="Your home deserves a roof that protects your family and stands the test of time. Burk Roofing installs GAF Timberline HDZ shingles — America's #1-selling shingle — along with premium designer options like Timberline UHDZ and Camelot II. With LayerLock technology, StrikeZone nailing area, and Dura Grip adhesive, these systems deliver unmatched durability, wind resistance, and curb appeal. Whether you're building new, re-roofing, or upgrading after storm damage, we bring the same level of care and craftsmanship to every project."
      whoItsFor="Homeowners in Boerne, San Antonio, and the surrounding Texas Hill Country who want a roofing contractor they can trust. Whether you need a full roof replacement, an upgrade to a GAF designer shingle system, or help navigating an insurance claim, we're here to guide you through the process with honesty and expertise."
      benefits={[
        "GAF Certified Contractor — maximum warranty protection",
        "GAF Timberline HDZ — America's #1-selling shingle",
        "Eligible for GAF WindProven Limited Wind Warranty",
        "StainGuard Plus algae protection technology",
        "Insurance claim assistance and expertise",
        "Built to withstand Texas heat, wind, and storms",
      ]}
      process={[
        { step: "Free Inspection", desc: "Thorough assessment of your roof's current condition." },
        { step: "Clear Proposal", desc: "Detailed scope, timeline, and pricing with no hidden costs." },
        { step: "Expert Installation", desc: "GAF-certified crews with quality materials." },
        { step: "Final Walkthrough", desc: "We walk the project with you to ensure complete satisfaction." },
      ]}
    />
  );
}
