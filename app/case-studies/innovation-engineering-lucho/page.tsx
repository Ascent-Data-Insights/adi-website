import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Innovation Engineering with Lucho | Case Study | Ascent Data Insights',
  description: 'How we built a scalable digital platform for a growing consumer brand.',
};

export default function LuchoCaseStudyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-primary to-brand-secondary pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 text-sm font-semibold text-brand-primary bg-brand-accent rounded-full">
                Innovation Engineering
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
              Innovation Engineering with Lucho
            </h1>

            <p className="text-xl text-white/90 mb-4">
              Building a scalable digital platform for a growing consumer brand
            </p>

            <p className="text-lg text-white/80">
              <strong>Industry:</strong> Consumer Products
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-brand-primary mb-6">
              The Challenge
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Lucho, a rapidly growing consumer brand, needed a custom digital platform to support
              their expansion. Without in-house engineering capacity, they were looking for a
              partner who could not only build the platform but also ensure their team could
              maintain and evolve it over time.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-heading text-lg font-bold text-brand-primary mb-2">
                  The Problem
                </h3>
                <p className="text-gray-700">
                  No in-house engineering team to build and maintain a custom digital platform
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-heading text-lg font-bold text-brand-primary mb-2">
                  The Goal
                </h3>
                <p className="text-gray-700">
                  Create a scalable platform that supports rapid business growth
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-heading text-lg font-bold text-brand-primary mb-2">
                  The Timeline
                </h3>
                <p className="text-gray-700">
                  Delivered on schedule with ongoing support and knowledge transfer
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-brand-primary mb-6">
              Our Approach
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                We took a comprehensive approach to building Lucho's digital platform, focusing on
                three key areas:
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-xl font-bold text-brand-primary mb-3">
                    1. Full-Stack Development
                  </h3>
                  <p className="text-gray-700">
                    Built a complete web presence and backend systems from the ground up, using
                    modern technologies that would scale with the business. We designed the
                    architecture to be maintainable and extensible.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-brand-primary mb-3">
                    2. Knowledge Transfer
                  </h3>
                  <p className="text-gray-700">
                    As we built, we documented everything and conducted regular knowledge-sharing
                    sessions with Lucho's team. Our goal was to ensure they could confidently
                    manage and evolve the platform after our engagement.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-brand-primary mb-3">
                    3. Scalable Architecture
                  </h3>
                  <p className="text-gray-700">
                    We built the platform with growth in mind—choosing technologies and patterns
                    that could handle increasing traffic and feature complexity without requiring a
                    complete rebuild.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-brand-primary mb-6">
              The Results
            </h2>

            <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-8 md:p-12 text-white mb-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-brand-accent mb-2">100%</div>
                  <div className="text-white/90">On-time delivery</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-accent mb-2">Scalable</div>
                  <div className="text-white/90">Platform architecture</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-accent mb-2">Ready</div>
                  <div className="text-white/90">For continued growth</div>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                The platform we built for Lucho is now supporting their continued growth as a
                brand. Key outcomes include:
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-brand-accent mr-3 flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    A robust, scalable platform delivered on time and within budget
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-brand-accent mr-3 flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    Comprehensive documentation and knowledge transfer enabling team independence
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-brand-accent mr-3 flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    Architecture designed for long-term growth and feature expansion
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl font-bold text-brand-primary mb-4">
              Have a product idea that needs building?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Let's talk about how we can bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-brand-primary hover:bg-brand-secondary rounded-lg transition-colors shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
