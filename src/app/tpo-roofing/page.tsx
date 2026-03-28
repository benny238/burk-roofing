import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "GAF EverGuard TPO Roofing | Boerne & San Antonio, TX",
  description:
    "GAF EverGuard TPO roofing installation and repair in Central Texas. Energy-efficient single-ply membrane systems for commercial buildings. Free assessments available.",
};

export default function TpoRoofingPage() {
  return (
    <ServicePageLayout
      title="TPO Roofing"
      subtitle="Energy-efficient single-ply membrane systems built for Texas commercial properties."
      image="/images/commercial-tpo-install.jpg"
      imageAlt="GAF EverGuard TPO installation on commercial building in Texas Hill Country"
      description="GAF EverGuard TPO (Thermoplastic Polyolefin) roofing is one of the most reliable and cost-effective solutions for flat and low-slope commercial roofs. Burk Roofing brings specialized expertise in GAF EverGuard TPO installation, delivering systems that reflect heat, resist UV damage, and perform for decades in the demanding Texas climate. As a GAF-certified contractor, our installations meet manufacturer specifications for full warranty coverage."
      whoItsFor="Commercial property owners and facility managers looking for a durable, energy-efficient roofing solution for flat or low-slope buildings. TPO is ideal for warehouses, retail spaces, office buildings, and multi-unit properties throughout Boerne, San Antonio, and Central Texas."
      benefits={[
        "Superior energy efficiency with heat-reflective properties",
        "Excellent resistance to UV, ozone, and chemical exposure",
        "GAF manufacturer-backed warranties up to 30 years",
        "Lightweight system that reduces structural stress",
        "Proven performance in extreme Texas heat",
        "Cost-effective long-term roofing investment",
      ]}
      process={[
        { step: "Roof Assessment", desc: "Detailed evaluation of your existing roof and building needs." },
        { step: "System Design", desc: "Custom TPO specification based on your building's requirements." },
        { step: "Professional Install", desc: "Expert installation to manufacturer standards." },
        { step: "Warranty & Support", desc: "Full documentation and ongoing maintenance options." },
      ]}
    />
  );
}
