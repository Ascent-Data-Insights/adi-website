import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Insights - Ascent Data Insights',
  description:
    'Customer segmentation, price optimization, and demand forecasting for consumer goods and retail companies in the Greater Cincinnati region.',
};

export default function CustomerInsightsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary to-brand-secondary pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl sm:text-6xl font-bold text-white mb-6 mt-8">
            Customer Insights
          </h1>
          <p className="text-2xl text-brand-accent font-semibold mb-6">
            Your customers are telling you something. <br />
            We help you hear it.
          </p>
          <p className="text-xl text-white/90 leading-relaxed">
            Every transaction, every click, every return tells a story. Most companies are sitting
            on a goldmine of customer data but lack the tools to extract real insight
            from it. We help you close that gap.
          </p>
          <br />
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-brand-primary hover:bg-gray-100 rounded-lg font-semibold transition-colors"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-brand-primary mb-4">
              The Data Is There. The Insight Isn&apos;t.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You&apos;re collecting more customer data than ever. But turning that data into
              decisions that actually grow the business? That&apos;s where it gets hard.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-brand-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-brand-primary mb-3">
                You Know Who Buys, Not Why
              </h3>
              <p className="text-gray-600">
                Transaction data tells you what sold. Understanding why customers choose you, what
                drives loyalty, and where you&apos;re losing them requires connecting dots across
                multiple data sources.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-brand-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-brand-primary mb-3">
                Pricing Feels Like Guesswork
              </h3>
              <p className="text-gray-600">
                You&apos;re leaving money on the table or losing customers, but you&apos;re not sure
                which. Understanding price sensitivity, competitive dynamics, and willingness to pay
                requires more than intuition.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-brand-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-brand-primary mb-3">
                Forecasting Is Reactive
              </h3>
              <p className="text-gray-600">
                Demand planning based on last year&apos;s numbers isn&apos;t enough. You need models
                that account for seasonality, promotions, market shifts, and customer behavior
                changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-brand-primary mb-4">How We Help</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We start by understanding your business, your customers, and the decisions you&apos;re
              trying to make. Then we build the analytics and models that make those decisions
              easier.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-brand-secondary mb-4">
                Customer Segmentation & Behavior
              </h3>
              <p className="text-gray-600 mb-4">
                Not all customers are the same, and treating them that way leaves value on the
                table. We build segmentation models that group customers by behavior, value, and
                preferences, so you can tailor your approach to your most valuable customers.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Behavioral clustering and customer lifetime value
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Purchase pattern and basket analysis
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Churn prediction and retention modeling
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-brand-secondary mb-4">
                Price Optimization
              </h3>
              <p className="text-gray-600 mb-4">
                Pricing is one of the highest-leverage decisions in business. We build models that
                analyze demand elasticity, competitive positioning, and customer willingness to
                pay, helping you find the prices that maximize revenue without sacrificing volume.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Price elasticity and sensitivity analysis
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Competitive pricing intelligence
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Promotion effectiveness and cannibalization modeling
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-brand-secondary mb-4">
                Demand Forecasting
              </h3>
              <p className="text-gray-600 mb-4">
                Plan with confidence, not just history. We build forecasting models that incorporate
                seasonality, promotional lifts, market trends, and external signals to give you
                accurate, actionable demand predictions.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  SKU-level and category-level forecasting
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Promotional lift and cannibalization modeling
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Inventory optimization and replenishment signals
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-brand-secondary mb-4">
                Measurement & Experimentation
              </h3>
              <p className="text-gray-600 mb-4">
                Know what&apos;s actually working. We design rigorous test-vs-control frameworks
                and causal inference models that tell you whether your initiatives are driving
                results, or just coinciding with them.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  A/B testing design and analysis
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Causal inference and incrementality measurement
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Test-vs-control frameworks for promotions, pricing, and campaigns
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-brand-primary mb-4">
              Why We Know This Space
            </h2>
            <p className="text-xl text-gray-600">
              Our team has years of experience building sciences and deriving insights on national retail data.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-10 border border-gray-200">
            <p className="text-gray-700 text-lg mb-6">
              Before starting Ascent, our founders spent years at the data science arm of one of the
              largest retailers in the country. We worked on price optimization, customer 
              segmentation, demand forecasting, and personalization at a massive scale.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              That experience taught us something important: the techniques that work at
              scale also work for mid-size companies. The difference is that mid-size businesses
              often don't have the in-house infrastructure and data expertise. Every important 
              business decision can be informed by concrete data with the right structure in place.
            </p>
            <p className="text-gray-700 text-lg">
              That&apos;s exactly what we do. We bring enterprise-level customer analytics expertise
              to companies that are ready to move beyond gut feel and spreadsheets, but don&apos;t
              need a team of 50 data scientists to get there.
            </p>
          </div>
        </div>
      </section>

      {/* Data Sources Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-brand-primary mb-4">
              We Work With Your Data
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Customer insights come from connecting data across systems. We integrate with what you
              have and build a unified view of your customers.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'POS & Transaction', desc: 'Sales data, baskets, and purchase history' },
              { name: 'CRM & Loyalty', desc: 'Customer profiles and engagement data' },
              { name: 'E-Commerce', desc: 'Shopify, BigCommerce, custom platforms' },
              { name: 'Marketing Platforms', desc: 'Email, paid media, and campaign data' },
              { name: 'ERP & Inventory', desc: 'Product, supply, and cost data' },
              { name: 'Syndicated Data', desc: 'Nielsen, IRI, and market panel data' },
              { name: 'Web Analytics', desc: 'Google Analytics, Mixpanel, Amplitude' },
              { name: 'Custom & Legacy', desc: 'Proprietary systems and databases' },
            ].map((source) => (
              <div key={source.name} className="bg-white rounded-lg p-5 shadow-sm">
                <p className="font-semibold text-brand-primary">{source.name}</p>
                <p className="text-sm text-gray-500 mt-1">{source.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-brand-primary mb-4">How We Work</h2>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-brand-primary mb-2">
                  We start with the business question, not the data
                </h3>
                <p className="text-gray-600">
                  What decisions are you trying to make? What&apos;s driving revenue, and what&apos;s
                  costing you? We get clear on the outcomes you need before we touch a dataset.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-brand-primary mb-2">
                  We build models you can act on
                </h3>
                <p className="text-gray-600">
                  A segmentation model that sits in a slide deck doesn&apos;t help anyone. We build
                  analytics that plug into your workflow, dashboards your team actually uses, and
                  models that drive real decisions.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-brand-primary mb-2">
                  We make sure your team can run with it
                </h3>
                <p className="text-gray-600">
                  We don&apos;t just hand over a report. We make sure your team understands the
                  models, trusts the outputs, and knows how to apply the insights. When we&apos;re
                  done, you&apos;re not dependent on us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">
            Ready to understand your customers better?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Let&apos;s talk about the customer questions you&apos;re trying to answer and how data
            can help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 text-brand-primary bg-white hover:bg-gray-100 rounded-lg font-semibold text-lg transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
