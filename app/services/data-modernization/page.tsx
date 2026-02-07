import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import TypesOfWorkCarousel from './TypesOfWorkCarousel';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Modernization | Ascent Data Insights',
  description: 'Turn your data into a competitive advantage with our data modernization services.',
};

export default function DataModernizationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-primary to-brand-secondary pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-5xl sm:text-6xl font-bold text-white mb-6 mt-8">
              Data Modernization
            </h1>
            <p className="text-2xl text-brand-accent font-semibold mb-6">
              Turn your data into a competitive advantage.
            </p>
            <p className="text-xl text-white/90 leading-relaxed">
              Great data strategy isn't just about collecting information—it's about making that
              information work for you. We help you build a modern data foundation that takes you
              from raw data to real decisions.
            </p>
          </div>
        </section>

        {/* Three-Step Framework */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-primary mb-4">
                From Data to Decisions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our approach follows a clear progression—each step building on the last.
              </p>
            </div>

            <div className="relative flex flex-col md:flex-row md:items-start gap-8 md:gap-4">
              {/* Step 1 */}
              <div className="flex-1">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent text-white font-heading text-2xl font-bold mb-6 mx-auto">
                  1
                </div>
                <h3 className="font-heading text-2xl font-bold text-brand-primary mb-4 text-center">
                  Collect
                </h3>
                <p className="text-gray-700 text-center">
                  Bring your data together. We build pipelines and integrations that pull from your
                  systems, clean the mess, and create a reliable, unified foundation.
                </p>
              </div>

              {/* Arrow 1 */}
              <div className="hidden md:flex items-center justify-center flex-shrink-0 pt-8">
                <svg
                  className="w-12 h-12 text-brand-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>

              {/* Step 2 */}
              <div className="flex-1">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent text-white font-heading text-2xl font-bold mb-6 mx-auto">
                  2
                </div>
                <h3 className="font-heading text-2xl font-bold text-brand-primary mb-4 text-center">
                  Describe
                </h3>
                <p className="text-gray-700 text-center">
                  See what's happening. We create dashboards and reporting tools that make your data
                  visible, understandable, and accessible to your team.
                </p>
              </div>

              {/* Arrow 2 */}
              <div className="hidden md:flex items-center justify-center flex-shrink-0 pt-8">
                <svg
                  className="w-12 h-12 text-brand-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>

              {/* Step 3 */}
              <div className="flex-1">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent text-white font-heading text-2xl font-bold mb-6 mx-auto">
                  3
                </div>
                <h3 className="font-heading text-2xl font-bold text-brand-primary mb-4 text-center">
                  Prescribe
                </h3>
                <p className="text-gray-700 text-center">
                  Know what to do next. We build forecasting models, optimization tools, and
                  decision-support systems that turn insight into action.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Work */}
        <TypesOfWorkCarousel />

        {/* Case Study Highlight */}
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="font-heading text-2xl font-bold text-brand-primary mb-2">
                    Unified Data Platform for Growing Business
                  </h3>
                  <p className="text-gray-600 mb-6 italic">Manufacturing & Distribution</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">The Problem:</h4>
                      <p className="text-gray-700">
                        Data lived in disconnected spreadsheets and legacy systems, making reporting
                        slow and unreliable. Leadership couldn't get accurate answers without days of
                        manual work.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">What We Did:</h4>
                      <p className="text-gray-700">
                        Built a modern cloud data platform with automated pipelines and self-serve
                        dashboards. Integrated multiple data sources into a single source of truth.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">The Result:</h4>
                      <p className="text-gray-700">
                        Reporting time cut from days to minutes. Leadership now has real-time access to
                        accurate business metrics, enabling faster, data-driven decisions.
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/case-studies/routing-optimization"
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
                    You're making decisions based on gut feel because you don't trust your data
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
                    Your team spends too much time wrangling spreadsheets
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
                    You've outgrown your current tools but aren't sure what's next
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
                    You want a single source of truth across your business
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
              Ready to modernize?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Let's talk about where your data is today and where it could take you.
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
