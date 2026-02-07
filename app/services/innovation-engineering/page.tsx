import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import TypesOfWorkCarousel from './TypesOfWorkCarousel';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Innovation Engineering | Ascent Data Insights',
  description: 'Your idea. Built and shipped. Tech-stack agnostic development for MVPs, tools, and prototypes.',
};

export default function InnovationEngineeringPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-primary to-brand-secondary pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-5xl sm:text-6xl font-bold text-white mb-6 mt-8">
              Innovation Engineering
            </h1>
            <p className="text-2xl text-brand-accent font-semibold mb-6">
              Your idea. Built and shipped.
            </p>
            <p className="text-xl text-white/90 leading-relaxed">
              Got a product idea, an internal tool, or a prototype that doesn't exist yet? We're
              tech-stack agnostic problem solvers who love building from scratch. You bring the
              vision—we'll figure out how to make it real.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-4xl font-bold text-brand-primary mb-12 text-center">
              How We Help
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
                <h3 className="font-heading text-2xl font-bold text-brand-primary mb-4">
                  MVPs & Prototypes
                </h3>
                <p className="text-gray-700 text-lg">
                  Validate ideas fast with working software, not slide decks
                </p>
              </div>

              <div className="p-8 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
                <h3 className="font-heading text-2xl font-bold text-brand-primary mb-4">
                  Internal Tools
                </h3>
                <p className="text-gray-700 text-lg">
                  Custom apps that solve the problems off-the-shelf software can't
                </p>
              </div>

              <div className="p-8 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
                <h3 className="font-heading text-2xl font-bold text-brand-primary mb-4">
                  Full-Stack Development
                </h3>
                <p className="text-gray-700 text-lg">
                  Frontend, backend, APIs, integrations—we do it all
                </p>
              </div>

              <div className="p-8 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
                <h3 className="font-heading text-2xl font-bold text-brand-primary mb-4">
                  R&D Partnerships
                </h3>
                <p className="text-gray-700 text-lg">
                  Collaborate on exploratory projects where the answer isn't obvious yet
                </p>
              </div>

              <div className="p-8 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow md:col-span-2">
                <h3 className="font-heading text-2xl font-bold text-brand-primary mb-4">
                  Tech-Stack Flexibility
                </h3>
                <p className="text-gray-700 text-lg">
                  We work across languages, frameworks, and platforms—whatever fits your needs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Work */}
        <TypesOfWorkCarousel />

        {/* Case Study Highlight - Lucho */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-4xl font-bold text-brand-primary mb-12 text-center">
              See It in Action
            </h2>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-brand-accent flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="font-heading text-2xl font-bold text-brand-primary mb-2">Lucho</h3>
                  <p className="text-gray-600 mb-6 italic">Consumer Products</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">The Problem:</h4>
                      <p className="text-gray-700">
                        A growing consumer brand needed a custom digital platform but didn't have
                        in-house engineering capacity to build it.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">What We Did:</h4>
                      <p className="text-gray-700">
                        Full-stack development across their web presence and backend systems,
                        delivering a scalable solution tailored to their unique needs.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">The Result:</h4>
                      <p className="text-gray-700">
                        A scalable platform that supports the brand's growth—built on time and built
                        to last, with their team trained to maintain it.
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/case-studies"
                    className="inline-flex items-center text-brand-secondary hover:text-brand-accent font-semibold transition-colors group"
                  >
                    Read the full case study
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-4xl font-bold text-brand-primary mb-8 text-center">
              Is This Right for You?
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-xl text-gray-700 mb-6">This service is a good fit if:</p>
              <ul className="space-y-4">
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
                  <span className="text-gray-700">
                    You have an idea but no technical team to build it
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
                  <span className="text-gray-700">
                    You need a working prototype to test with users or pitch to investors
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
                  <span className="text-gray-700">
                    Your team is stretched thin and needs extra engineering capacity
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
                  <span className="text-gray-700">
                    You've got a problem that existing tools don't solve
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-4xl font-bold text-white mb-6">
              Got something to build?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Tell us about your idea. We'll figure out how to make it happen.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-brand-primary bg-white hover:bg-gray-50 rounded-lg transition-colors shadow-lg"
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
