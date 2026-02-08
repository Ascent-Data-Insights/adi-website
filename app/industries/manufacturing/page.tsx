import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manufacturing Solutions - Ascent Data Insights',
  description:
    'Data modernization, predictive maintenance, and AI solutions for manufacturing companies in the Greater Cincinnati region.',
};

export default function ManufacturingPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-brand-accent font-semibold text-4xl mb-4">Manufacturing</p>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
              Your shop builds what matters. <br/>Our data expertise keeps you ahead.
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Your production lines, ERP systems, and sensors generate millions of data points
              daily. Most companies treat this as operational overhead. We help you turn it into
              your most powerful competitive advantage.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-brand-primary hover:bg-gray-100 rounded-lg font-semibold transition-colors"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-brand-primary mb-4">
              The Real Costs Are Hidden in Your Data
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The obvious expenses are on the P&L sheet. The real opportunities lie in the patterns
              hidden within your operational data.
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-brand-primary mb-3">
                Unplanned Downtime
              </h3>
              <p className="text-gray-600">
                When equipment fails unexpectedly, you&apos;re not just paying for repairs—you&apos;re
                paying for missed production, overtime, and expedited parts. The warning signs are
                often already in your sensor data.
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
                Invisible Bottlenecks
              </h3>
              <p className="text-gray-600">
                You know throughput could be better, but pinpointing why is another story. Root
                causes hide across shifts, machines, and product mixes—visible only when you connect
                the dots across your systems.
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
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-brand-primary mb-3">
                Disconnected Systems
              </h3>
              <p className="text-gray-600">
                Your ERP says one thing, your MES says another, and your quality system has its own
                version of the truth. Without a single source of truth, every report requires manual
                reconciliation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-brand-primary mb-4">
              How We Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We start by walking your floor, understanding your processes, and listening to the
              people who run them. Then we put data to work on the problems that actually matter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-brand-secondary mb-4">
                Connect Your Data
              </h3>
              <p className="text-gray-600 mb-4">
                We integrate and consolidate data from across your operation (ERP, MES, QMS, MRP, and
                machine/IoT sensors) into a unified, reliable foundation. No more spreadsheet
                wrangling or manual data pulls.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Automated data pipelines from shop floor to cloud
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Single source of truth across systems
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Scalable, secure cloud infrastructure
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-brand-secondary mb-4">
                Automate Reporting & Metrics
              </h3>
              <p className="text-gray-600 mb-4">
                Stop chasing numbers. We build dashboards and automated reports that give your team
                real-time visibility into what matters: OEE (Availability × Performance × Quality), throughput, scrap rates, yield, and
                on-time delivery.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Real-time production dashboards
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Automated KPI tracking and alerting
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Self-serve analytics for your team
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-brand-secondary mb-4">
                Predict & Prevent Problems
              </h3>
              <p className="text-gray-600 mb-4">
                We build predictive models that flag equipment issues before they cause unplanned
                downtime, identify quality risks before they become scrap, and optimize scheduling
                before bottlenecks form.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Predictive maintenance models
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Quality anomaly detection
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Production scheduling optimization
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-brand-secondary mb-4">
                Optimize Operations
              </h3>
              <p className="text-gray-600 mb-4">
                Visibility is key, with connected data and predictive insights, we help you squeeze more value from
                your existing capacity—optimizing sequencing, reducing changeover time, and
                identifying hidden inefficiencies.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Capacity and sequencing optimization
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Root cause analysis for bottlenecks
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Data-driven continuous improvement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Perspective Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-brand-primary mb-4">
              Our Take on AI in Manufacturing
            </h2>
            <p className="text-xl text-gray-600">
              We&apos;ve worked with AI for years. We know what it&apos;s good at—and where it falls
              short.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-10 border border-gray-200">
            <p className="text-gray-700 text-lg mb-6">
              In manufacturing, the stakes are high. A chatbot giving a slightly off answer is an
              annoyance. A production line doing something slightly off can mean scrapped material,
              missed deadlines, or worse.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              AI is great at getting you 95% of the way there—but that last 5% of polish and
              predictability? That&apos;s where a lot of promising projects fail. We call it the{' '}
              <span className="text-brand-accent font-semibold">final 5% trap</span>: a demo that
              detects defects 95% of the time is exciting, but on the production line, that 5% error
              rate can still mean hundreds of faulty parts escaping detection each day.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              That&apos;s why we&apos;re selective about where we deploy AI. We keep humans in the loop where precision is
              non-negotiable, and use AI to support and suplement. Think of AI as a tireless assistant that watches, suggests, and
              flags—while your people make the final calls.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600 mb-4">
                <span className="font-semibold text-brand-primary">
                  Where AI excels in manufacturing:
                </span>
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-brand-accent mr-2 mt-0.5 flex-shrink-0"
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
                  24/7 process monitoring without fatigue
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-brand-accent mr-2 mt-0.5 flex-shrink-0"
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
                  Flagging anomalies in vibration, energy, temperature
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-brand-accent mr-2 mt-0.5 flex-shrink-0"
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
                  Exploring scheduling and routing scenarios
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-brand-accent mr-2 mt-0.5 flex-shrink-0"
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
                  Identifying bottlenecks across complex data
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Link
                href="/blog/ai-in-manufacturing"
                className="inline-flex items-center text-brand-secondary hover:text-brand-accent font-semibold transition-colors group"
              >
                Read more: AI in Manufacturing—What&apos;s Working, What&apos;s Not
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
      </section>

      {/* Systems Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-brand-primary mb-4">
              We Work With Your Systems
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you&apos;re modernizing legacy systems from the early 2000s, integrating modern IoT
              sensors, or a patchwork of everything in between, we integrate with what you have and
              make it work together.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'ERP Systems', desc: 'SAP, Oracle, NetSuite, and others' },
              { name: 'MES & SCADA', desc: 'Shop floor execution and control' },
              { name: 'IoT & Sensors', desc: 'Machine data, PLCs, and edge devices' },
              { name: 'QMS', desc: 'Quality management and inspection data' },
              { name: 'MRP', desc: 'Material requirements and planning' },
              { name: 'Maintenance Systems', desc: 'CMMS and work order history' },
              { name: 'Inventory & WMS', desc: 'Warehouse and stock management' },
              { name: 'Custom & Legacy', desc: 'Proprietary systems and databases' },
            ].map((system) => (
              <div key={system.name} className="bg-white rounded-lg p-5 shadow-sm">
                <p className="font-semibold text-brand-primary">{system.name}</p>
                <p className="text-sm text-gray-500 mt-1">{system.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-brand-primary mb-4">
              How We Work
            </h2>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-brand-primary mb-2">
                  We start on the floor, not in a conference room
                </h3>
                <p className="text-gray-600">
                  We&apos;ll walk your production lines, talk to operators and supervisors, and see
                  how things actually run—not just how the org chart says they should. The best
                  insights come from the people closest to the work.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-brand-primary mb-2">
                  We focus on problems that move the needle
                </h3>
                <p className="text-gray-600">
                  Not every data project is worth doing. We help you prioritize the opportunities
                  that will have the biggest impact on throughput, quality, or cost—and we&apos;re
                  honest when something isn&apos;t worth pursuing.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-brand-primary mb-2">
                  We build solutions your team can own
                </h3>
                <p className="text-gray-600">
                  We don&apos;t just drop a dashboard and disappear. We make sure your team
                  understands what we&apos;ve built, how to use it, and how to maintain it. When
                  we&apos;re done, you&apos;re not dependent on us—you&apos;re empowered.
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
            Ready to turn shop floor data into a competitive edge?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            We&apos;re Cincinnati-based, agile, and built to partner with manufacturers who want to
            run smarter, faster, and more profitably. Let&apos;s talk about what&apos;s possible.
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
