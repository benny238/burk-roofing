import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Commercial Roofing in Texas | GAF TPO, PVC & Flat Roof Systems",
  description:
    "Commercial roofing contractor serving Boerne, San Antonio, and Central Texas. GAF EverGuard TPO and PVC systems, roof coatings, and flat roof solutions. Licensed, insured, and reliable.",
};

export default function CommercialRoofingPage() {
  return (
    <ServicePageLayout
      title="Commercial Roofing"
      subtitle="Reliable roofing systems for property owners and facility managers across Texas."
      image="/images/commercial-tpo-install.jpg"
      imageAlt="GAF EverGuard TPO installation on commercial building in Texas Hill Country"
      description="Commercial roofing demands a different level of expertise, accountability, and follow-through. Burk Roofing installs GAF EverGuard TPO and PVC single-ply membrane systems, advanced roof coatings, and comprehensive flat roof solutions designed to protect your investment for decades. As a GAF-certified contractor, we deliver manufacturer-backed systems with full warranty coverage. We work closely with property owners, facility managers, and building operators to deliver projects on time, on budget, and built to perform."
      whoItsFor="Property owners, facility managers, and commercial building operators in the Texas Hill Country and Central Texas who need a roofing partner — not just a contractor. Whether you manage a single building or a portfolio of properties, Burk Roofing brings consistency, transparency, and long-term reliability to every engagement."
      benefits={[
        "GAF EverGuard TPO and PVC single-ply expertise",
        "Advanced coating systems for roof life extension",
        "GAF manufacturer-backed warranties",
        "Detailed documentation and project reporting",
        "Minimal disruption to your operations",
        "Long-term maintenance partnerships",
      ]}
      process={[
        { step: "Assessment", desc: "Comprehensive evaluation of your commercial roof system." },
        { step: "Recommendation", desc: "Tailored solution based on your building's needs and budget." },
        { step: "Execution", desc: "Professional installation with minimal operational disruption." },
        { step: "Ongoing Support", desc: "Maintenance programs and warranty documentation." },
      ]}
    />
  );
}
