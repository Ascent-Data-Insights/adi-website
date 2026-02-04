import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
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

        {/* What We Do */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-4xl font-bold text-brand-primary mb-12 text-center">
              How We Help
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
                <h3 className="font-heading text-xl font-bold text-brand-primary mb-3">
                  AI Readiness Assessments
                </h3>
                <p className="text-gray-700">
                  Understand where you are and what's possible before you invest
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
                <h3 className="font-heading text-xl font-bold text-brand-primary mb-3">
                  Use Case Identification
                </h3>
                <p className="text-gray-700">
                  Find the opportunities where AI will actually move the needle
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
                <h3 className="font-heading text-xl font-bold text-brand-primary mb-3">
                  Pilot Development
                </h3>
                <p className="text-gray-700">
                  Test ideas quickly with low-risk, high-learning experiments
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
                <h3 className="font-heading text-xl font-bold text-brand-primary mb-3">
                  Production Deployment
                </h3>
                <p className="text-gray-700">
                  Scale what works into reliable, maintainable systems
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
                <h3 className="font-heading text-xl font-bold text-brand-primary mb-3">
                  Agentic Workflows
                </h3>
                <p className="text-gray-700">
                  Build AI that doesn't just inform decisions—it takes action
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Perspective */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-4xl font-bold text-brand-primary mb-8 text-center">
              Our Take on AI
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-sm space-y-6">
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

        {/* Who This Is For */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-4xl font-bold text-brand-primary mb-8 text-center">
              Is This Right for You?
            </h2>
            <div className="bg-gray-50 rounded-xl p-8">
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

        {/* Our Approach */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-4xl font-bold text-brand-primary mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              We start by listening—understanding your business, your goals, and your constraints.
              From there, we identify opportunities, build fast, and iterate based on what we learn.
              And like everything we do, we make sure your team understands what we've built so it
              lasts beyond our engagement.
            </p>
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
