"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    label: "Services",
    children: [
      { href: "/residential-roofing", label: "Residential Roofing" },
      { href: "/commercial-roofing", label: "Commercial Roofing" },
      { href: "/roof-repair", label: "Roof Repair" },
      { href: "/tpo-roofing", label: "TPO Roofing" },
      { href: "/roof-coatings", label: "Roof Coatings" },
    ],
  },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center">
              <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="mr-2">
                <path d="M16 2L2 14h4v8h20v-8h4L16 2z" stroke="#2E5E4E" strokeWidth="2.5" fill="none" />
              </svg>
              <span className="text-xl font-bold tracking-wide text-charcoal">
                BURK ROOFING
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button className="text-sm font-medium text-gray-600 hover:text-charcoal transition-colors flex items-center gap-1">
                    {link.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[220px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-charcoal hover:bg-light-gray transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className="text-sm font-medium text-gray-600 hover:text-charcoal transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:2102140476"
              className="text-sm font-semibold text-charcoal hover:text-green transition-colors"
            >
              (210) 214-0476
            </a>
            <Link
              href="/contact"
              className="bg-green hover:bg-green-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Get a Free Inspection
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-charcoal"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full flex items-center justify-between py-3 text-base font-medium text-gray-700"
                  >
                    {link.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2.5 text-sm text-gray-600 hover:text-charcoal"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-base font-medium text-gray-700 hover:text-charcoal"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4 space-y-3 border-t border-gray-200">
              <a
                href="tel:2102140476"
                className="block w-full text-center py-3 border-2 border-charcoal text-charcoal font-semibold rounded-lg"
              >
                Call (210) 214-0476
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center py-3 bg-green text-white font-semibold rounded-lg"
              >
                Get a Free Inspection
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
