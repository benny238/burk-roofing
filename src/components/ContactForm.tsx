"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot check
    if (data.get("website")) {
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          address: data.get("address"),
          service: data.get("service"),
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        router.push("/thank-you");
      } else {
        setError("Something went wrong. Please call us at (210) 214-0476.");
      }
    } catch {
      setError("Something went wrong. Please call us at (210) 214-0476.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent transition"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent transition"
            placeholder="(210) 555-0123"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent transition"
          placeholder="you@email.com"
        />
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1.5">
          Property Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent transition"
          placeholder="123 Main St, Boerne, TX"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent transition bg-white"
        >
          <option value="">Select a service</option>
          <option value="residential">Residential Roofing</option>
          <option value="commercial">Commercial Roofing</option>
          <option value="repair">Roof Repair</option>
          <option value="tpo">TPO Roofing</option>
          <option value="coatings">Roof Coatings</option>
          <option value="inspection">Free Inspection</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent transition resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green hover:bg-green-dark text-white py-3.5 px-6 rounded-lg font-semibold text-base transition-colors disabled:opacity-60"
      >
        {loading ? "Sending..." : "Get a Free Inspection"}
      </button>
    </form>
  );
}
