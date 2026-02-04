import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Logistics Solutions - Ascent Data Insights',
  description: 'Supply chain optimization, route planning, and real-time tracking solutions for logistics companies in the Greater Cincinnati region.',
};

export default function LogisticsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-5xl font-bold mb-6">
              Logistics Solutions
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Move faster and smarter. We help logistics companies optimize routes, reduce costs, and gain real-time visibility across their supply chain.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-primary mb-12 text-center">
            Common Logistics Challenges We Solve
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-heading text-xl font-semibold text-brand-primary mb-3">
                Route Inefficiency
              </h3>
              <p className="text-gray-600">
                Wasted miles mean wasted money. We build optimization systems that find the most efficient routes and adapt to real-time conditions.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-heading text-xl font-semibold text-brand-primary mb-3">
                Lack of Visibility
              </h3>
              <p className="text-gray-600">
                Customers want to know where their shipments are. We create tracking solutions that provide real-time updates across your entire network.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-heading text-xl font-semibold text-brand-primary mb-3">
                Capacity Planning
              </h3>
              <p className="text-gray-600">
                Balancing demand and resources is complex. We build forecasting models that help you allocate capacity and avoid bottlenecks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-primary mb-12 text-center">
            How We Help Logistics Companies
          </h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <h3 className="font-heading text-2xl font-semibold text-brand-secondary mb-4">
                  Route Optimization
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  Cut miles and save fuel. We develop algorithms that optimize delivery routes based on distance, traffic patterns, time windows, and vehicle capacity—adjusting dynamically as conditions change.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <h3 className="font-heading text-2xl font-semibold text-brand-secondary mb-4">
                  Real-Time Tracking
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  Know where everything is, always. We build tracking dashboards that integrate GPS data, warehouse systems, and carrier feeds to give you complete visibility.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <h3 className="font-heading text-2xl font-semibold text-brand-secondary mb-4">
                  Demand Forecasting
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  Plan ahead with confidence. We analyze historical patterns, seasonality, and market trends to predict demand and help you allocate resources efficiently.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <h3 className="font-heading text-2xl font-semibold text-brand-secondary mb-4">
                  Performance Analytics
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  Understand what's working. We create dashboards that track KPIs like on-time delivery, cost per mile, and utilization rates—so you can spot problems early.
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
            We Integrate With Your Stack
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            From TMS and WMS systems to GPS trackers and carrier APIs—we connect the dots and make your data work together.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {['TMS/WMS Systems', 'GPS & Telematics', 'Carrier APIs', 'Order Management'].map((tech) => (
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
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Let's discuss how data and AI can help you move faster and more efficiently.
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
