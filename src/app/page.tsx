import Image from "next/image";
import Link from "next/link";
import { GafBadgeRow } from "@/components/GafBadges";

const services = [
  {
    title: "Residential Roofing",
    desc: "GAF Timberline HDZ shingles — America's #1-selling shingle.",
    href: "/residential-roofing",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Roof Repair",
    desc: "Fast, honest, no-pressure repairs when you need them most.",
    href: "/roof-repair",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Commercial Roofing",
    desc: "GAF EverGuard TPO & PVC systems for long-term performance.",
    href: "/commercial-roofing",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Roof Coatings",
    desc: "Extend your roof's life with proven coating systems.",
    href: "/roof-coatings",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const trustItems = [
  "Licensed & Insured",
  "GAF Certified Contractor",
  "Residential & Commercial",
  "Local Texas Company",
];

const processSteps = [
  { num: "01", title: "Inspect Thoroughly", desc: "We perform a detailed, honest assessment of your roof's condition." },
  { num: "02", title: "Explain Clearly", desc: "You'll understand exactly what's needed, with no surprises or pressure." },
  { num: "03", title: "Build It Right", desc: "Quality materials, expert installation, and attention to every detail." },
  { num: "04", title: "Follow Through", desc: "We stand behind our work long after the project is complete." },
];

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative bg-charcoal text-white pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1920&q=80"
          alt="Residential roof with premium shingles in Texas Hill Country"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/60" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Do What We Say.{" "}
              <span className="text-green">Build It Right.</span>{" "}
              Take Care of People.
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Residential and Commercial Roofing in the Texas Hill Country.
              Built on relationships. Backed by process. Done right the first time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-green hover:bg-green-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
              >
                Get a Free Inspection
              </Link>
              <a
                href="tel:2102140476"
                className="border-2 border-white text-white hover:bg-white hover:text-charcoal px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-3 justify-center">
                <div className="w-10 h-10 bg-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-charcoal">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GAF BADGES */}
      <section className="py-10 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GafBadgeRow />
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Roofing Services You Can Count On
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              From residential homes to commercial properties, we deliver quality roofing solutions
              backed by integrity and experience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group p-8 bg-light-gray rounded-2xl hover:bg-charcoal transition-colors duration-300"
              >
                <div className="text-green group-hover:text-green-light mb-5 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold text-charcoal group-hover:text-white mb-2 transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed transition-colors">
                  {s.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="bg-light-gray py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6">
                Built on Relationships. Driven by Doing What&apos;s Right.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Gary Burk founded this company on a simple idea: do what you say you&apos;re going
                to do, and take care of people along the way. With over 15 years of experience in
                roofing and the insurance industry, Gary brings a unique perspective that puts
                homeowners and property managers first.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Burk Roofing isn&apos;t about quick sales or cutting corners. It&apos;s about
                building something that lasts &mdash; in the roofs we install, and in the
                relationships we build.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-green font-semibold hover:text-green-dark transition-colors"
              >
                Learn more about us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative rounded-2xl h-80 lg:h-96 overflow-hidden">
              <Image
                src="/images/gary-burk.jpg"
                alt="Gary Burk, founder of Burk Roofing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAMILY SECTION */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative rounded-2xl h-80 lg:h-96 overflow-hidden">
              <Image
                src="/images/burk-family.jpg"
                alt="The Burk family in the Texas Hill Country"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6">
                This Company Is Bigger Than Roofing
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                At the end of the day, this is about legacy. It&apos;s about building something
                your family can be proud of. It&apos;s about showing your kids what it looks like
                to work hard, keep your word, and serve others well.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                That&apos;s what drives Burk Roofing. Not the bottom line &mdash; but the people
                behind it and the responsibility to do things the right way, every single time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-charcoal text-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">A Simple Process That Works</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              No surprises. No runaround. Just a straightforward approach that puts you first.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {processSteps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="text-green text-4xl font-bold mb-3">{step.num}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMERCIAL AUTHORITY */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6">
                Commercial Roofing You Can Rely On
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                From GAF EverGuard TPO and PVC single-ply membranes to advanced coating systems,
                Burk Roofing delivers commercial solutions built for long-term performance. We work
                with property owners, facility managers, and building operators who need a partner
                they can trust.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our commercial roofing services are backed by manufacturer warranties, detailed
                documentation, and a commitment to doing the job right &mdash; every time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/commercial-roofing"
                  className="bg-green hover:bg-green-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Commercial Roofing
                </Link>
                <Link
                  href="/tpo-roofing"
                  className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  TPO Roofing
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl h-80 lg:h-96 overflow-hidden">
              <Image
                src="/images/commercial-tpo-install.jpg"
                alt="GAF EverGuard TPO installation on commercial building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-light-gray py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Gary and his team were professional from start to finish. They did exactly what they said they would do, on time, and the roof looks incredible.",
                name: "Sarah M.",
                loc: "Boerne, TX",
              },
              {
                quote: "After dealing with two other contractors who overpromised and underdelivered, Burk Roofing was a breath of fresh air. Honest, reliable, and quality work.",
                name: "David R.",
                loc: "San Antonio, TX",
              },
              {
                quote: "We've used Burk Roofing for multiple commercial properties. Their TPO installations are top-notch and the follow-through is exceptional.",
                name: "Mark T.",
                loc: "New Braunfels, TX",
              },
            ].map((t) => (
              <div key={t.name} className="bg-white p-8 rounded-2xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-charcoal">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-green py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Get a Roof Inspection You Can Trust
          </h2>
          <p className="text-white/80 text-lg mb-10">
            No pressure. No gimmicks. Just an honest assessment from a team that cares.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get a Free Inspection
            </Link>
            <a
              href="tel:2102140476"
              className="border-2 border-white text-white hover:bg-white hover:text-green px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
