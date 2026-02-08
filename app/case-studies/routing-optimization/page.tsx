import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Routing Optimization | Case Study | Ascent Data Insights',
  description: 'How we unified data from multiple sources to enable real-time business decisions.',
};

export default function RoutingOptimizationCaseStudyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-primary to-brand-secondary pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 text-sm font-semibold text-brand-primary bg-brand-accent rounded-full">
                Data Modernization
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
              Unified Data Platform for Routing Optimization
            </h1>

            <p className="text-xl text-white/90 mb-4">
              Transforming disconnected data into real-time business intelligence
            </p>

            <p className="text-lg text-white/80">
              <strong>Industry:</strong> Manufacturing & Distribution
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
              A manufacturing and distribution company was struggling with data scattered across
              disconnected spreadsheets and legacy systems. Reporting was slow, unreliable, and
              required days of manual work. Leadership couldn't get accurate answers to basic
              business questions without significant effort.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-heading text-lg font-bold text-brand-primary mb-2">
                  The Problem
                </h3>
                <p className="text-gray-700">
                  Data in spreadsheets and legacy systems making reporting slow and unreliable
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-heading text-lg font-bold text-brand-primary mb-2">
                  The Goal
                </h3>
                <p className="text-gray-700">
                  Create a single source of truth with real-time access to business metrics
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-heading text-lg font-bold text-brand-primary mb-2">
                  The Impact
                </h3>
                <p className="text-gray-700">
                  Enable faster, data-driven decisions across the organization
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
                We built a modern cloud data platform following our proven three-step framework:
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-xl font-bold text-brand-primary mb-3">
                    1. Collect — Unified Data Foundation
                  </h3>
                  <p className="text-gray-700">
                    We built automated pipelines to integrate data from multiple sources—legacy
                    systems, spreadsheets, and operational databases. Data was cleaned,
                    standardized, and consolidated into a cloud-based data warehouse, creating a
                    reliable single source of truth.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-brand-primary mb-3">
                    2. Describe — Self-Service Analytics
                  </h3>
                  <p className="text-gray-700">
                    We created intuitive dashboards and reporting tools that made data visible and
                    accessible to the entire team. Leadership could now see real-time metrics
                    without waiting days for manual reports.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-brand-primary mb-3">
                    3. Prescribe — Routing Optimization
                  </h3>
                  <p className="text-gray-700">
                    With clean, accessible data in place, we built optimization models to improve
                    routing efficiency—turning insights into automated recommendations that saved
                    time and reduced costs.
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
                  <div className="text-4xl font-bold text-brand-accent mb-2">Days → Minutes</div>
                  <div className="text-white/90">Reporting time reduced</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-accent mb-2">Real-time</div>
                  <div className="text-white/90">Business metrics access</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-accent mb-2">Single</div>
                  <div className="text-white/90">Source of truth</div>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                The modern data platform transformed how the organization operates:
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
                    Reporting time cut from days to minutes with automated pipelines
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
                    Leadership gained real-time access to accurate business metrics
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
                    Single source of truth eliminated conflicting reports and manual reconciliation
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
                    Routing optimization models enabled faster, data-driven operational decisions
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
              Ready to modernize your data?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Let's talk about turning your data into a competitive advantage.
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
