import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Roof Coatings | Extend Your Roof's Life | Boerne & San Antonio, TX",
  description:
    "Professional roof coating services in Central Texas. Silicone and acrylic coatings that extend roof life, improve energy efficiency, and save on replacement costs.",
};

export default function RoofCoatingsPage() {
  return (
    <ServicePageLayout
      title="Roof Coatings"
      subtitle="Extend your roof's life and performance with proven coating systems."
      image="/images/roof-coatings.jpg"
      imageAlt="Roof coating application on commercial rooftop"
      description="Roof coatings are one of the smartest investments a property owner can make. A properly applied coating system can add years to your existing roof's lifespan, improve energy efficiency, and eliminate leaks — all at a fraction of the cost of a full replacement. Burk Roofing applies silicone and acrylic coating systems that are engineered for the Texas climate and backed by manufacturer warranties."
      whoItsFor="Property owners with aging commercial or flat roofs that still have structural integrity but need restoration. Roof coatings are ideal if your roof has minor deterioration, you want to avoid the cost and disruption of a full replacement, or you're looking to improve your building's energy efficiency."
      benefits={[
        "Extend roof life by 10-20 years",
        "Fraction of the cost of full replacement",
        "Seamless, waterproof membrane",
        "Significant energy savings from reflective properties",
        "Minimal disruption to building operations",
        "Environmentally friendly — reduces landfill waste",
      ]}
      process={[
        { step: "Roof Evaluation", desc: "We assess your roof's condition and coating candidacy." },
        { step: "System Selection", desc: "We recommend the right coating system for your roof type." },
        { step: "Surface Prep & Application", desc: "Thorough preparation and professional application." },
        { step: "Inspection & Warranty", desc: "Final inspection with full warranty documentation." },
      ]}
    />
  );
}
