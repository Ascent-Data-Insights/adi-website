import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
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

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative">
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

              {/* Step 2 */}
              <div className="relative">
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

              {/* Step 3 */}
              <div className="relative">
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

        {/* Our Approach */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-4xl font-bold text-brand-primary mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              We don't just build infrastructure and hand over the keys. We make sure your data
              platform is intuitive, documented, and understood by your team. When we're done,
              you'll have a foundation that lasts—and the knowledge to maintain it.
            </p>
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
