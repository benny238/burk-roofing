import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Roof Inspection",
  description:
    "Schedule a free roof inspection with Burk Roofing. Serving Boerne, San Antonio, and the Texas Hill Country. Call (210) 214-0476 or fill out our form.",
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-charcoal text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Get a Free Inspection</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            No pressure. No obligation. Just an honest assessment of your roof from a team you can trust.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-charcoal mb-6">Request Your Free Inspection</h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-3">Call Us Directly</h3>
                  <a
                    href="tel:2102140476"
                    className="inline-flex items-center gap-3 text-2xl font-bold text-green hover:text-green-dark transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (210) 214-0476
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-3">Email Us</h3>
                  <a
                    href="mailto:info@burkroofing.com"
                    className="text-green hover:text-green-dark transition-colors font-medium"
                  >
                    info@burkroofing.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-3">Location</h3>
                  <p className="text-gray-600">Boerne, Texas</p>
                  <p className="text-gray-500 text-sm mt-1">
                    Serving Boerne, San Antonio, and the Texas Hill Country
                  </p>
                </div>

                <div className="bg-light-gray rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-3">What to Expect</h3>
                  <ul className="space-y-3">
                    {[
                      "A real person will contact you within 24 hours",
                      "We'll schedule a convenient time for your inspection",
                      "A thorough, honest assessment — no pressure",
                      "Clear explanation of findings and options",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
