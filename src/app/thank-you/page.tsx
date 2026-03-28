import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for contacting Burk Roofing. We'll be in touch shortly.",
};

export default function ThankYouPage() {
  return (
    <main className="pt-20">
      <section className="py-28 lg:py-40">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-4">Thank You</h1>
          <p className="text-lg text-gray-500 mb-8 leading-relaxed">
            We&apos;ve received your request and a member of our team will be in touch within 24
            hours. If you need immediate assistance, please call us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2102140476"
              className="bg-green hover:bg-green-dark text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
            >
              Call (210) 214-0476
            </a>
            <Link
              href="/"
              className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
