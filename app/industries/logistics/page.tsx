import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Logistics & Supply Chain Solutions - Ascent Data Insights',
  description:
    'Mathematical optimization, route planning, and load building solutions for 3PLs, freight brokers, and logistics companies in the Greater Cincinnati region.',
};

export default function LogisticsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary to-brand-secondary pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl sm:text-6xl font-bold text-white mb-6 mt-8">
            Logistics
          </h1>
          <p className="text-2xl text-brand-accent font-semibold mb-6">
            Every mile matters. <br />
            We help you find the ones you don&apos;t need.
          </p>
          <p className="text-xl text-white/90 leading-relaxed">
            In logistics, the difference between profitable and unprofitable often comes down to
            optimization. We build mathematical models that shave miles, maximize utilization, and navigate
            operational constraints gracefully.
          </p>
          <br/>
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
              Risks & Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The margin is in the details, cost savings at scale come from thousands of small decisions made well. The challenge
              is getting the data and models in place to make those decisions consistently.
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
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-brand-primary mb-3">
                Suboptimal Routes & Loads
              </h3>
              <p className="text-gray-600">
                Every extra mile is money left on the table. Every half-empty trailer is wasted capacity. The math to fix this exists, it just needs to be applied.
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
                Fragmented Data Sources
              </h3>
              <p className="text-gray-600">
                Your TMS says one thing, carrier data says another, and the actual delivery times
                don&apos;t match either. We focus on constructing strong data foundations first, 
                so that the optimal answers become clear.
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
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-brand-primary mb-3">
                From Reactive to Predictive
              </h3>
              <p className="text-gray-600">
                When an order is going to be late, do you find out after the fact? Understanding why it happened,
                and preventing the next one, requires robust accurate real-time data.
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
              We start by learning from you: understanding your unique constraints, visiting your DCs, and learning how
              decisions actually get made. Then we build solutions that work in your world, not just
              on a whiteboard.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-brand-secondary mb-4">
                Mathematical Optimization
              </h3>
              <p className="text-gray-600 mb-4">
                We build optimization models that deliver real savings, at scale. Route
                optimization, load building, pallet configuration, carrier selection: we translate
                your business constraints into mathematical models that find solutions humans
                can&apos;t.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Route optimization with time windows and sequencing
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Load building that respects weight, cube, and compatibility
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Cost minimization across carriers and modes
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-brand-secondary mb-4">
                Data Integration & Quality
              </h3>
              <p className="text-gray-600 mb-4">
                Optimization is only as good as the data feeding it. We connect your TMS, WMS,
                carrier feeds, and operational systems into a unified, reliable foundation so you can
                trust the inputs and act on the outputs.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Real-time data pipelines from multiple sources
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Data quality monitoring and alerting
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Single source of truth for operational metrics
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-brand-secondary mb-4">
                Simulation & What-If Analysis
              </h3>
              <p className="text-gray-600 mb-4">
                Before you change how you operate, understand what will happen. We build simulation
                models that let you test scenarios: What if we added a DC? Changed carrier mix?
                Adjusted promise times?
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Network design and DC placement analysis
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Service level vs. cost tradeoff modeling
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Capacity planning and demand scenarios
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-brand-secondary mb-4">
                Visibility & Performance Analytics
              </h3>
              <p className="text-gray-600 mb-4">
                Know what&apos;s happening across your network, in real time. We build dashboards
                that track on-time performance, cost per unit, and utilization, and help you
                understand why orders are late before customers call to ask.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Real-time shipment tracking and ETA prediction
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Root cause analysis for service failures
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  KPI dashboards for operations and leadership
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Optimization Deep Dive Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-brand-primary mb-4">
              Our Approach to Optimization
            </h2>
            <p className="text-xl text-gray-600">
              We&apos;ve built optimization systems for Fortune 25 companies. Here&apos;s how we
              think about the problem.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-10 border border-gray-200">
            <p className="text-gray-700 text-lg mb-6">
              Logistics optimization isn&apos;t just about finding the shortest path. It&apos;s about
              balancing competing constraints: promise times, driver hours, truck capacity, customer
              preferences, carrier contracts, and dozens of business rules that don&apos;t fit neatly
              into a textbook solution.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              The challenge is often twofold: first, constructing an efficient initial state that
              respect all the constraints (weight limits, compatibility rules,
              delivery windows). Then, minimizing total cost while still meeting service
              commitments and sequencing requirements.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              We use mathematical optimization techniques (mixed-integer programming, constraint
              programming, metaheuristics) to find solutions that would take humans weeks to
              discover, and we do it in minutes. The result? Millions of dollars in savings at
              scale, from tweaks that appear small to the naked eye but add up across thousands of
              shipments.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600 mb-4">
                <span className="font-semibold text-brand-primary">
                  Where optimization delivers the biggest impact:
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
                  Multi-stop route sequencing
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
                  Load consolidation and truck fill
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
                  Carrier and mode selection
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
                  Appointment scheduling
                </li>
              </ul>
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
              Whether you&apos;re on Blue Yonder, Manhattan, or a homegrown system held together with
              spreadsheets and determination, we integrate with what you have.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'TMS Platforms', desc: 'Blue Yonder, Oracle TM, MercuryGate, McLeod' },
              { name: 'WMS Systems', desc: 'Manhattan, SAP EWM, Körber, Infor' },
              { name: 'Carrier & EDI', desc: 'API integrations, EDI 204/214/990' },
              { name: 'Telematics & GPS', desc: 'Real-time location and ETA feeds' },
              { name: 'ERP Systems', desc: 'SAP, Oracle, NetSuite order data' },
              { name: 'Rate Management', desc: 'Contract rates, spot market feeds' },
              { name: 'Yard Management', desc: 'Dock scheduling and trailer tracking' },
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
                  We start at your side, not at a computer
                </h3>
                <p className="text-gray-600">
                  We&apos;ll walk your distribution centers, watch loads get built, talk to
                  dispatchers and planners, and understand the constraints that don&apos;t show up in
                  system documentation. The best optimization respects how work actually gets done.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-brand-primary mb-2">
                  We quantify the opportunity before we build
                </h3>
                <p className="text-gray-600">
                  Not every optimization project is worth doing. We analyze your data to identify
                  where the savings actually are, whether it&apos;s route miles, carrier spend, or
                  load utilization. And we&apos;re honest if the juice isn&apos;t worth the squeeze.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-brand-primary mb-2">
                  We build solutions your team can trust and maintain
                </h3>
                <p className="text-gray-600">
                  We don&apos;t just hand over a black box. We make sure your team understands how
                  the models work, when to trust them, and when to override them. When we&apos;re
                  done, you&apos;re not dependent on us. You&apos;re empowered.
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
            Ready to find the miles you don&apos;t need?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            We&apos;re Cincinnati-based, and we know the logistics landscape here. Let&apos;s talk
            about where optimization can move the needle for your operation.
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
