import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Areas | Boerne, San Antonio & Texas Hill Country",
  description:
    "Burk Roofing serves Boerne, San Antonio, New Braunfels, Fredericksburg, Kerrville, and the greater Texas Hill Country. Residential and commercial roofing services.",
};

const areas = [
  {
    name: "Boerne",
    desc: "Our home base. We know Boerne's neighborhoods, building codes, and weather patterns like the back of our hand.",
  },
  {
    name: "San Antonio",
    desc: "Serving residential and commercial properties throughout the greater San Antonio metro area.",
  },
  {
    name: "Fair Oaks Ranch",
    desc: "Premium roofing services for the homes and properties of Fair Oaks Ranch.",
  },
  {
    name: "Helotes",
    desc: "Reliable roofing solutions for Helotes homeowners and businesses.",
  },
  {
    name: "New Braunfels",
    desc: "Quality roofing for one of Texas's fastest-growing communities.",
  },
  {
    name: "Fredericksburg",
    desc: "Serving the heart of the Hill Country with residential and commercial expertise.",
  },
  {
    name: "Kerrville",
    desc: "Trusted roofing services for Kerrville and the surrounding area.",
  },
  {
    name: "Comfort",
    desc: "Dependable roofing for the Comfort community and nearby properties.",
  },
];

export default function ServiceAreasPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-charcoal text-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Service Areas</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Proudly serving Boerne, San Antonio, and communities throughout the Texas Hill Country.
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area) => (
              <div key={area.name} className="bg-light-gray rounded-2xl p-6">
                <div className="w-10 h-10 bg-green/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">{area.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Area Image */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="relative rounded-2xl h-72 lg:h-96 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1531218150217-54595bc2b934?auto=format&fit=crop&w=1200&q=80"
            alt="Aerial view of Texas Hill Country landscape"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            In Your Area? Let&apos;s Talk.
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Not sure if we serve your location? Give us a call — we&apos;re happy to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green hover:bg-gray-100 px-8 py-3.5 rounded-lg font-semibold transition-colors"
            >
              Get a Free Inspection
            </Link>
            <a
              href="tel:2102140476"
              className="border-2 border-white text-white hover:bg-white hover:text-green px-8 py-3.5 rounded-lg font-semibold transition-colors"
            >
              Call (210) 214-0476
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
