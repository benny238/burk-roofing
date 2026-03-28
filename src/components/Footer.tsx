import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <svg width="28" height="20" viewBox="0 0 32 24" fill="none">
                <path d="M16 2L2 14h4v8h20v-8h4L16 2z" stroke="#2E5E4E" strokeWidth="2.5" fill="none" />
              </svg>
              <span className="text-lg font-bold tracking-wide">BURK ROOFING</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Residential and commercial roofing in the Texas Hill Country. Built on
              relationships. Done right the first time.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/residential-roofing", label: "Residential Roofing" },
                { href: "/commercial-roofing", label: "Commercial Roofing" },
                { href: "/roof-repair", label: "Roof Repair" },
                { href: "/tpo-roofing", label: "TPO Roofing" },
                { href: "/roof-coatings", label: "Roof Coatings" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About Us" },
                { href: "/service-areas", label: "Service Areas" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a href="tel:2102140476" className="hover:text-white transition-colors">
                  (210) 214-0476
                </a>
              </li>
              <li>
                <a href="mailto:info@burkroofing.com" className="hover:text-white transition-colors">
                  info@burkroofing.com
                </a>
              </li>
              <li>Boerne, Texas</li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-block bg-green hover:bg-green-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                >
                  Get a Free Inspection
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Burk Roofing. All rights reserved. | Licensed &amp; Insured | Boerne, TX
        </div>
      </div>
    </footer>
  );
}
