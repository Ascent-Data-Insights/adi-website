import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manufacturing Solutions - Ascent Data Insights',
  description: 'Data modernization, predictive maintenance, and AI solutions for manufacturing companies in the Greater Cincinnati region.',
};

export default function ManufacturingPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-5xl font-bold mb-6">
              Manufacturing Solutions
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Turn production data into actionable insights. From predictive maintenance to quality optimization, we help manufacturers modernize their operations with data and AI.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-primary mb-12 text-center">
            Common Manufacturing Challenges We Solve
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-heading text-xl font-semibold text-brand-primary mb-3">
                Equipment Downtime
              </h3>
              <p className="text-gray-600">
                Unplanned maintenance costs time and money. We build predictive models that identify failure patterns before they happen.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-heading text-xl font-semibold text-brand-primary mb-3">
                Quality Control
              </h3>
              <p className="text-gray-600">
                Manual inspection is slow and inconsistent. We implement AI-powered quality detection systems that catch defects in real-time.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-heading text-xl font-semibold text-brand-primary mb-3">
                Data Silos
              </h3>
              <p className="text-gray-600">
                Production data scattered across systems. We unify your data so you can see the full picture and make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-primary mb-12 text-center">
            How We Help Manufacturing Companies
          </h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <h3 className="font-heading text-2xl font-semibold text-brand-secondary mb-4">
                  Predictive Maintenance
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  Stop waiting for equipment to fail. We analyze sensor data, maintenance logs, and operational patterns to predict when machines need attention—reducing downtime and extending equipment life.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <h3 className="font-heading text-2xl font-semibold text-brand-secondary mb-4">
                  Production Optimization
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  Understand what drives efficiency on your floor. We create dashboards and analytics that reveal bottlenecks, track OEE, and help you make data-driven decisions about production scheduling.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <h3 className="font-heading text-2xl font-semibold text-brand-secondary mb-4">
                  Quality Analytics
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  Move beyond reactive inspection. We build systems that monitor quality metrics in real-time, identify root causes of defects, and help you maintain consistent standards.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <h3 className="font-heading text-2xl font-semibold text-brand-secondary mb-4">
                  Supply Chain Visibility
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  Know where materials are and when they'll arrive. We integrate data from suppliers, inventory systems, and production schedules to give you end-to-end visibility.
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
            We Work With Your Systems
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Whether you're running legacy SCADA systems, modern IoT sensors, or ERPs—we integrate with what you have and make it work together.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {['IoT & Sensor Data', 'ERP Systems', 'MES/SCADA', 'Quality Management'].map((tech) => (
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
            Ready to Modernize Your Manufacturing Operations?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Let's talk about the challenges you're facing and how data and AI can help.
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
