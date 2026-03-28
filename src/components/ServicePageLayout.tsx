import Image from "next/image";
import Link from "next/link";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  whoItsFor: string;
  benefits: string[];
  process: { step: string; desc: string }[];
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}

export default function ServicePageLayout({
  title,
  subtitle,
  description,
  whoItsFor,
  benefits,
  process,
  image = "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1200&q=80",
  imageAlt = "Roofing project",
}: ServicePageLayoutProps) {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative bg-charcoal text-white py-20 lg:py-28 overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/70" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">Overview</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">Who It&apos;s For</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{whoItsFor}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="relative rounded-2xl h-72 lg:h-96 overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-light-gray py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-10 text-center">Why Choose Burk Roofing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-lg">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-10 text-center">Our Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-green text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-charcoal mb-2">{p.step}</h3>
                <p className="text-gray-500 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Schedule a free inspection and see why property owners trust Burk Roofing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green hover:bg-green-dark text-white px-8 py-3.5 rounded-lg font-semibold text-base transition-colors"
            >
              Get a Free Inspection
            </Link>
            <a
              href="tel:2102140476"
              className="border-2 border-white text-white hover:bg-white hover:text-charcoal px-8 py-3.5 rounded-lg font-semibold text-base transition-colors"
            >
              Call (210) 214-0476
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
