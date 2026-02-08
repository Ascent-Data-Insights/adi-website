import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Routing Optimization | Case Study | Ascent Data Insights',
  description:
    'Driving millions in cost savings at a Fortune 500 company by improving data quality and optimizing routing across thousands of locations.',
};

export default function RoutingOptimizationCaseStudyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-primary to-brand-secondary pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex gap-3">
              <span className="inline-block px-4 py-2 text-sm font-semibold text-brand-primary bg-brand-accent rounded-full">
                Data Modernization
              </span>
              <span className="inline-block px-4 py-2 text-sm font-semibold text-brand-primary bg-white rounded-full">
                Optimization
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
              Routing Optimization for a Fortune 500 Company
            </h1>

            <p className="text-xl text-white/90 mb-4">
              Fixing the data foundation, then optimizing what runs on top of it.
            </p>

            <div className="flex flex-wrap gap-6 text-lg text-white/80">
              <p>
                <strong>Industry:</strong> Fortune 500 Retailer
              </p>
              <p>
                <strong>Scale:</strong> National Real-Time Optimization
              </p>
            </div>
          </div>
        </section>

        {/* The Headline Numbers */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-brand-accent mb-2">Millions</div>
                  <div className="text-white/90">Annual savings in operational costs</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-accent mb-2">Thousands</div>
                  <div className="text-white/90">Locations optimized</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-accent mb-2">Billions</div>
                  <div className="text-white/90">Potential optimization solutions considered</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-brand-primary mb-6">
              The Challenge
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              A Fortune 500 company needed to improve operational efficiency through routing.
              The existing routing solution provided a single fixed path through each location,
              regardless of which locations needed to be visited.
            </p>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              The opportunity was clear: optimized routing could dramatically reduce travel distance
              and time. But the real challenge wasn&apos;t just the algorithm. It was the data.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-heading text-lg font-bold text-brand-primary mb-2">
                  The Routing Problem
                </h3>
                <p className="text-gray-700">
                  A one-size-fits-all approach meant that every route followed the same path, 
                  an inefficiency costing distance and time.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-heading text-lg font-bold text-brand-primary mb-2">
                  The Data Problem
                </h3>
                <p className="text-gray-700">
                  Floorplan layouts existed for other purposes and had never been validated for
                  routing. Outdated configurations, missing sections, and inconsistencies were
                  a significant challenge.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-heading text-lg font-bold text-brand-primary mb-2">
                  The Process Problem
                </h3>
                <p className="text-gray-700">
                  The teams that owned the layouts had never needed to maintain them for routing
                  accuracy. Bringing them along required careful stakeholder management and new
                  processes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Data Foundation */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-brand-primary mb-6">
              Step 1: Fix the Foundation
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Before we could optimize anything, we had to solve the data quality problem. The
              floorplan layouts were originally built for planning and merchandising purposes, not
              for high-stakes operational routing. When we started using them as inputs to a routing
              algorithm, quality issues that had been invisible suddenly became critical.
            </p>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h3 className="font-heading text-xl font-semibold text-brand-secondary mb-4">
                What We Found
              </h3>
              <p className="text-gray-700 mb-4">
                Layouts that had been &ldquo;good enough&rdquo; for their original purpose were
                full of problems when used for routing: outdated fixture configurations, missing
                sections, inconsistencies between the digital layout and the physical reality.
                And any one of them could produce an invalid or inefficient route.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h3 className="font-heading text-xl font-semibold text-brand-secondary mb-4">
                What We Built
              </h3>
              <p className="text-gray-700 mb-4">
                We built automated validation checks and reporting that flagged invalid or suspect
                configurations before they could impact production routing. This gave the layout
                teams clear, actionable feedback: here&apos;s what&apos;s wrong, here&apos;s where
                it is, here&apos;s what needs to change.
              </p>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-brand-accent mr-3 flex-shrink-0 mt-0.5"
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
                    Automated checks that validated layout configurations against routing
                    requirements
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-brand-accent mr-3 flex-shrink-0 mt-0.5"
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
                    Reporting dashboards that surfaced issues to layout teams before they hit
                    production
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-brand-accent mr-3 flex-shrink-0 mt-0.5"
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
                    New processes and quality standards for layout maintenance, built collaboratively
                    with the teams that owned them
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-brand-secondary mb-4">
                The Stakeholder Challenge
              </h3>
              <p className="text-gray-700">
                This was as much a process problem as a data problem. The layout teams had maintained
                their data for years without issues because the old routing system didn&apos;t need
                precision. Now we were asking them to meet a higher standard for a use case
                they&apos;d never supported. Success required close collaboration: understanding
                their workflows, building tools that fit into their process, and demonstrating that
                the quality improvements would benefit everyone, not just the routing team.
              </p>
            </div>
          </div>
        </section>

        {/* The Optimization */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-brand-primary mb-6">
              Step 2: Optimize the Routing
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              With clean, validated layout data in place, we could tackle the routing problem
              itself. The existing solution was straightforward: a single predetermined path through
              the floorplan. Every route followed the same path regardless of which locations needed to be
              visited. For smaller routes, this meant walking unnecssary sections. Across
              thousands of locations and millions of routes, the small inefficiencies added up.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="font-heading text-lg font-bold text-red-600 mb-3">Before</h3>
                <p className="text-gray-700 mb-3">
                  One fixed path through the entire floorplan. Every route, regardless of size or
                  locations, followed the same general route from start to finish.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="font-heading text-lg font-bold text-green-600 mb-3">After</h3>
                <p className="text-gray-700 mb-3">
                  Optimized routes tailored to each need, minimizing travel distance based on the
                  specific locations the route needed to visit.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-10 border border-gray-200">
              <h3 className="font-heading text-xl font-semibold text-brand-primary mb-4">
                Understanding the Constraints
              </h3>
              <p className="text-gray-700 text-lg mb-6">
                Routing optimization at this scale isn&apos;t just about finding the shortest path.
                We had to carefully understand the constraints of the problem: physical layout
                limitations, operational rules, equipment restrictions, and crucially, which
                operational changes were actually on the table.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                The best theoretical solution doesn&apos;t matter if it requires changes the
                operation can&apos;t support. We spent significant time with operational teams
                understanding what was feasible, what was flexible, and what was non-negotiable.
                That understanding shaped the optimization approach and ultimately made the
                difference between a model that works on paper and one that works in practice.
              </p>
              <p className="text-gray-700 text-lg">
                The result was a solution that respected real-world constraints while still
                capturing the vast majority of the theoretical savings. Optimized routes reduced
                travel distance significantly across every location, translating directly into
                reduced operational costs.
              </p>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-brand-primary mb-6">
              The Results
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-brand-secondary mb-3">
                  Millions of Dollars in Annual Savings
                </h3>
                <p className="text-gray-700">
                  Optimized routing reduced travel distance across thousands of locations. At
                  scale, even small per-route improvements compound into massive savings. The
                  primary driver was straightforward: less walking means less time, which
                  means lower operational costs.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-brand-secondary mb-3">
                  A Data Foundation That Didn&apos;t Exist Before
                </h3>
                <p className="text-gray-700">
                  The automated validation and reporting we built didn&apos;t just enable this
                  project. It created an ongoing quality assurance process for layout data that the
                  organization didn&apos;t have before. Layout issues are now caught and fixed
                  proactively, not discovered in production.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-brand-secondary mb-3">
                  Operational Teams Brought Along
                </h3>
                <p className="text-gray-700">
                  The layout teams went from maintaining data for passive planning purposes to
                  owning a critical input for production routing. They have the tools, the
                  processes, and the understanding to maintain quality on their own. The
                  improvement is sustainable because the people closest to the data own it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Made This Work */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-brand-primary mb-6">
              What Made This Work
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              This project could have been approached as a pure optimization problem. But the
              millions in savings only materialized because we treated it as a data and process problem
              first.
            </p>

            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0 text-2xl w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-brand-primary mb-2">
                    Data quality before optimization
                  </h3>
                  <p className="text-gray-600">
                    The best algorithm in the world produces garbage if the inputs are wrong. We
                    invested heavily in understanding and fixing the data foundation before writing
                    a single line of optimization code.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 text-2xl w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-brand-primary mb-2">
                    Stakeholder management as a first-class concern
                  </h3>
                  <p className="text-gray-600">
                    We didn&apos;t just build tools and hand them over. We worked alongside the
                    layout teams to understand their workflow, build solutions that fit their
                    process, and make sure the new quality standards felt achievable rather than
                    imposed.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 text-2xl w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-brand-primary mb-2">
                    Understanding real-world constraints
                  </h3>
                  <p className="text-gray-600">
                    We spent time with operational teams to understand which changes were feasible
                    and which weren&apos;t. That shaped an optimization approach that captured
                    maximum value while respecting the realities of how the operation runs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-brand-primary to-brand-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Have a similar challenge?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Whether it&apos;s a data quality problem, an optimization opportunity, or both, we&apos;d
              love to hear about it.
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
