import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Roof Repair in Boerne & San Antonio, TX",
  description:
    "Fast, honest roof repair services in Boerne, San Antonio, and the Texas Hill Country. Storm damage, leaks, and emergency repairs. No-pressure assessments.",
};

export default function RoofRepairPage() {
  return (
    <ServicePageLayout
      title="Roof Repair"
      subtitle="Fast, honest, no-pressure repairs when you need them most."
      image="https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&w=1200&q=80"
      imageAlt="Roof repair work being performed on residential home"
      description="A damaged roof doesn't wait for a convenient time. Whether it's storm damage, a persistent leak, or wear and tear that's caught up with your roof, Burk Roofing responds quickly with honest assessments and reliable repairs. We'll tell you exactly what needs to be fixed, what can wait, and what your options are — without pressure or upselling."
      whoItsFor="Homeowners and property managers in Boerne, San Antonio, and the Texas Hill Country dealing with roof damage, leaks, or deterioration. If you've had storm damage, noticed water stains on your ceiling, or your roof is simply showing its age, we'll give you an honest evaluation and a clear path forward."
      benefits={[
        "Rapid response for urgent repairs",
        "Honest assessment — we won't sell you a new roof if a repair will do",
        "Storm damage and insurance claim expertise",
        "Quality materials for lasting repairs",
        "Transparent pricing with no hidden fees",
        "Follow-up to ensure the repair holds",
      ]}
      process={[
        { step: "Quick Response", desc: "We prioritize repair calls and schedule promptly." },
        { step: "Honest Assessment", desc: "We identify the issue and explain your options clearly." },
        { step: "Quality Repair", desc: "Reliable fixes using proven materials and techniques." },
        { step: "Verification", desc: "We confirm the repair is solid and your roof is protected." },
      ]}
    />
  );
}
