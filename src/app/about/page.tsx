import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Burk Roofing",
  description:
    "Learn about Gary Burk and the team behind Burk Roofing. 15+ years of experience in roofing and insurance. Built on integrity, relationships, and doing things right.",
};

const values = [
  {
    title: "We Before Me",
    desc: "Every decision starts with what's best for the customer, the team, and the community — not what's easiest for us.",
  },
  {
    title: "Do What You Said",
    desc: "If we commit to something, it gets done. Period. Our word is the foundation of every relationship we build.",
  },
  {
    title: "Humble Stewards",
    desc: "We've been entrusted with people's homes and businesses. That's a responsibility we take seriously, with humility and care.",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-charcoal text-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Burk Roofing</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We don&apos;t just install roofs. We take care of people.
          </p>
        </div>
      </section>

      {/* Gary's Story */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl h-80 lg:h-[28rem] overflow-hidden">
              <Image
                src="/images/gary-burk.jpg"
                alt="Gary Burk, founder of Burk Roofing"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6">
                Built on Integrity. Backed by Experience.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Gary Burk didn&apos;t start a roofing company to get rich. He started it because
                he saw an industry full of broken promises — and he knew he could do better.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                With over 15 years of experience spanning both the roofing industry and insurance
                sector, Gary brings a perspective that most contractors simply don&apos;t have. He
                understands what it takes to build a roof that performs, and he knows how to
                navigate the complexities of insurance claims so his clients are protected.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                But more than anything, Gary is known for one thing: keeping his word. When he
                says the job will be done right, it gets done right. When he says he&apos;ll
                follow through, he follows through. That consistency is what Burk Roofing is
                built on — and it&apos;s what sets this company apart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-light-gray rounded-2xl p-8 text-center">
                <div className="w-12 h-12 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Whether it&apos;s your home or your business, we&apos;d be honored to earn your trust.
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
