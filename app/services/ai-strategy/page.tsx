import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import TypesOfWorkCarousel from './TypesOfWorkCarousel';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Strategy & Implementation | Ascent Data Insights',
  description: 'Cut through the AI hype and get real results with our AI strategy and implementation services.',
};

export default function AIStrategyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-primary to-brand-secondary pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-5xl sm:text-6xl font-bold text-white mb-6 mt-8">
              AI Strategy & Implementation
            </h1>
            <p className="text-2xl text-brand-accent font-semibold mb-6">
              Cut through the hype. Get real results.
            </p>
            <p className="text-xl text-white/90 leading-relaxed">
              AI is everywhere right now—and so is the noise. We've spent years working hands-on
              with machine learning and AI systems, so we know where it creates genuine value and
              where it's just a shiny distraction. We'll help you figure out what's right for your
              business and then actually build it.
            </p>
          </div>
        </section>

        {/* Our Perspective */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-4xl font-bold text-brand-primary mb-8 text-center">
              Our Take on AI
            </h2>
            <div className="bg-gray-50 rounded-xl p-8 space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                We're not here to sell you AI for AI's sake. The reality is that AI isn't the right
                answer for every problem—and a lot of companies are wasting money finding that out
                the hard way.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                We've been in this space long enough to know the difference between a breakthrough
                and a buzzword. Our job is to be honest with you: if AI isn't the right fit, we'll
                tell you. If it is, we'll build it right.
              </p>
            </div>
          </div>
        </section>

        {/* Types of Work */}
        <TypesOfWorkCarousel />

        {/* Case Study Highlight */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-4xl font-bold text-brand-primary mb-12 text-center">
              See It in Action
            </h2>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-brand-accent flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="font-heading text-2xl font-bold text-brand-primary mb-2">
                    AI-Powered Review Automation
                  </h3>
                  <p className="text-gray-600 mb-6 italic">Professional Services</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">The Problem:</h4>
                      <p className="text-gray-700">
                        A manual review process was consuming hours of staff time every week,
                        creating bottlenecks and slowing down operations.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">What We Did:</h4>
                      <p className="text-gray-700">
                        Developed an AI-powered workflow to automate the review process and
                        intelligently flag exceptions for human review.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">The Result:</h4>
                      <p className="text-gray-700">
                        Manual review time reduced by 60%, freeing the team to focus on
                        higher-value work and faster turnaround times.
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/case-studies"
                    className="inline-flex items-center text-brand-secondary hover:text-brand-accent font-semibold transition-colors group"
                  >
                    Read the full case study
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
                    You're curious about AI but not sure where to start
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
                    You've seen demos and pilots but haven't gotten real business value yet
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
                    You want to automate manual, repetitive processes
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
                    You need an honest assessment before making a big investment
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-4xl font-bold text-white mb-6">
              Ready to explore AI?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Let's have an honest conversation about where AI fits in your business—and where it
              doesn't.
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
