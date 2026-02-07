import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI-Powered Review Automation | Case Study | Ascent Data Insights',
  description: 'How we reduced manual review time by 60% with intelligent AI automation.',
};

export default function AIEnablementCaseStudyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-primary to-brand-secondary pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Case Studies
            </Link>

            <div className="mb-6">
              <span className="inline-block px-4 py-2 text-sm font-semibold text-brand-primary bg-brand-accent rounded-full">
                AI Strategy & Implementation
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
              AI-Powered Review Automation
            </h1>

            <p className="text-xl text-white/90 mb-4">
              Cutting manual review time by 60% with intelligent automation
            </p>

            <p className="text-lg text-white/80">
              <strong>Industry:</strong> Professional Services
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
              A professional services firm was spending countless hours each week on manual review
              processes. Staff were bogged down in repetitive work, creating bottlenecks that
              slowed operations and prevented the team from focusing on higher-value activities.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-heading text-lg font-bold text-brand-primary mb-2">
                  The Problem
                </h3>
                <p className="text-gray-700">
                  Manual review process consuming hours of staff time weekly
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-heading text-lg font-bold text-brand-primary mb-2">
                  The Goal
                </h3>
                <p className="text-gray-700">
                  Automate repetitive tasks while maintaining accuracy and quality
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-heading text-lg font-bold text-brand-primary mb-2">
                  The Impact
                </h3>
                <p className="text-gray-700">
                  Free the team to focus on strategic, high-value work
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
                We took a pragmatic approach to AI implementation, focusing on delivering real
                business value rather than chasing hype:
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-xl font-bold text-brand-primary mb-3">
                    1. Process Analysis
                  </h3>
                  <p className="text-gray-700">
                    We started by deeply understanding the existing review process—identifying
                    which parts were truly repetitive and rule-based versus which required human
                    judgment. This analysis revealed clear opportunities for automation.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-brand-primary mb-3">
                    2. AI Workflow Development
                  </h3>
                  <p className="text-gray-700">
                    We built an AI-powered workflow that could handle the bulk of routine reviews
                    while intelligently flagging exceptions that needed human attention. The system
                    learned to recognize patterns and edge cases, improving over time.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-brand-primary mb-3">
                    3. Human-in-the-Loop Design
                  </h3>
                  <p className="text-gray-700">
                    Rather than attempting full automation, we designed a system that augmented
                    human decision-making. The AI handled the straightforward cases while routing
                    complex or unusual situations to the team for review.
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
                  <div className="text-4xl font-bold text-brand-accent mb-2">60%</div>
                  <div className="text-white/90">Reduction in review time</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-accent mb-2">100%</div>
                  <div className="text-white/90">Accuracy maintained</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-accent mb-2">Faster</div>
                  <div className="text-white/90">Turnaround times</div>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                The AI automation delivered measurable business impact from day one:
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
                    Manual review time reduced by 60%, freeing staff for higher-value work
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
                    Exception flagging ensured quality and accuracy remained at 100%
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
                    Faster turnaround times improved overall operational efficiency
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
                    Team morale improved as repetitive tasks were eliminated
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
              Ready to explore AI for your business?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Let's have an honest conversation about where AI can create real value.
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
