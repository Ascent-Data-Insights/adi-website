import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consumer Goods Solutions - Ascent Data Insights',
  description: 'Customer analytics, pricing optimization, and digital experience solutions for consumer goods companies in the Greater Cincinnati region.',
};

export default function ConsumerGoodsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-5xl font-bold mb-6">
              Consumer Goods Solutions
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Understand your customers, optimize your pricing, and create digital experiences that convert. We help consumer goods brands make data-driven decisions that drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-primary mb-12 text-center">
            Common Consumer Goods Challenges We Solve
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-heading text-xl font-semibold text-brand-primary mb-3">
                Understanding Customers
              </h3>
              <p className="text-gray-600">
                Who's buying and why? We turn scattered customer data into clear insights about behavior, preferences, and lifetime value.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-heading text-xl font-semibold text-brand-primary mb-3">
                Pricing Strategy
              </h3>
              <p className="text-gray-600">
                Finding the right price is part art, part science. We build models that test pricing scenarios and maximize revenue without losing customers.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-heading text-xl font-semibold text-brand-primary mb-3">
                Digital Presence
              </h3>
              <p className="text-gray-600">
                Your website and e-commerce platform are your storefront. We build digital experiences that are fast, intuitive, and designed to convert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-primary mb-12 text-center">
            How We Help Consumer Goods Companies
          </h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <h3 className="font-heading text-2xl font-semibold text-brand-secondary mb-4">
                  Customer Analytics
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  Know who your customers are and what drives them. We unify data from your e-commerce platform, CRM, and marketing tools to create a single view of customer behavior—so you can segment, target, and personalize effectively.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <h3 className="font-heading text-2xl font-semibold text-brand-secondary mb-4">
                  Pricing Optimization
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  Stop guessing on price. We analyze competitor pricing, demand elasticity, and customer willingness to pay—then build models that recommend optimal pricing strategies across your product line.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <h3 className="font-heading text-2xl font-semibold text-brand-secondary mb-4">
                  E-Commerce & Web Development
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  Your digital storefront should work as hard as you do. We build fast, mobile-friendly e-commerce experiences that make it easy for customers to find what they need and complete a purchase.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <h3 className="font-heading text-2xl font-semibold text-brand-secondary mb-4">
                  Marketing Attribution
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  Know what's actually driving sales. We connect your marketing spend to outcomes, track customer journeys, and identify which channels deliver the best ROI.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <h3 className="font-heading text-2xl font-semibold text-brand-secondary mb-4">
                  Personalization
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  One-size-fits-all doesn't work anymore. We build recommendation systems and personalized experiences that show customers the products they're most likely to buy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-primary mb-12 text-center">
            We Work With Your Tools
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            From Shopify to custom platforms, from HubSpot to Salesforce—we integrate with your existing stack and make it all work together.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {['E-Commerce Platforms', 'CRM Systems', 'Marketing Automation', 'Analytics Tools'].map((tech) => (
              <div key={tech} className="bg-gray-50 rounded-lg p-6 text-center">
                <p className="font-semibold text-brand-primary">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">
            Ready to Grow Your Consumer Brand?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Let's talk about how data and digital tools can help you understand customers and drive sales.
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
