import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Startup Solutions - Ascent Data Insights',
  description: 'MVP development, data foundation building, and AI strategy for startups in the Greater Cincinnati region.',
};

export default function StartupsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-5xl font-bold mb-6">
              Solutions for Startups
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Move fast and build smart. We help startups build data foundations, validate ideas with MVPs, and figure out where AI actually fits—all without breaking the bank.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-primary mb-12 text-center">
            Common Startup Challenges We Solve
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-heading text-xl font-semibold text-brand-primary mb-3">
                No Tech Team Yet
              </h3>
              <p className="text-gray-600">
                You have a great idea but no developers to build it. We become your technical team—building MVPs, prototypes, and production systems.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-heading text-xl font-semibold text-brand-primary mb-3">
                Limited Budget
              </h3>
              <p className="text-gray-600">
                Enterprise consultants are too expensive. We bring the same expertise at startup-friendly prices—no overhead, no bureaucracy.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-heading text-xl font-semibold text-brand-primary mb-3">
                AI Uncertainty
              </h3>
              <p className="text-gray-600">
                Everyone's talking about AI but you're not sure if it's right for you. We help you figure out where it makes sense—and where it doesn't.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-primary mb-12 text-center">
            How We Help Startups
          </h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <h3 className="font-heading text-2xl font-semibold text-brand-secondary mb-4">
                  MVP Development
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  Get your idea in front of users fast. We build working prototypes and MVPs that you can test, pitch, and iterate on—without spending months or burning through your runway.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <h3 className="font-heading text-2xl font-semibold text-brand-secondary mb-4">
                  Data Foundation
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  Build it right from day one. We help you set up analytics, tracking, and data infrastructure that scales with your business—so you're not scrambling to rebuild later.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <h3 className="font-heading text-2xl font-semibold text-brand-secondary mb-4">
                  AI Validation
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  Before you build an AI-powered product, make sure it's actually possible. We run quick pilots and proofs-of-concept to validate your idea before you commit serious resources.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <h3 className="font-heading text-2xl font-semibold text-brand-secondary mb-4">
                  Technical Co-Pilot
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  You need someone who can speak tech. We work alongside your team as advisors, reviewers, and strategic partners—helping with architecture decisions, vendor evaluation, and technical due diligence.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <h3 className="font-heading text-2xl font-semibold text-brand-secondary mb-4">
                  Fundraising Support
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  Investors want to see working demos and solid tech. We help you build the prototypes and technical materials you need to make a compelling pitch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Startups Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-primary mb-12 text-center">
            Why Startups Choose Ascent
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-brand-accent text-4xl font-bold mb-3">Fast</div>
              <p className="text-gray-600">We move at startup speed—no red tape, no bureaucracy</p>
            </div>
            <div className="text-center">
              <div className="text-brand-accent text-4xl font-bold mb-3">Flexible</div>
              <p className="text-gray-600">Tech-stack agnostic—we use what's right for your problem</p>
            </div>
            <div className="text-center">
              <div className="text-brand-accent text-4xl font-bold mb-3">Honest</div>
              <p className="text-gray-600">We'll tell you when something won't work—no overselling</p>
            </div>
            <div className="text-center">
              <div className="text-brand-accent text-4xl font-bold mb-3">Local</div>
              <p className="text-gray-600">Based in Cincinnati—we're part of your community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-primary mb-12 text-center">
            We Work With Modern Stacks
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            React, Python, Node, Next.js, AWS, GCP—we're comfortable across the full stack and choose the right tools for your needs.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {['Web & Mobile Apps', 'Cloud Infrastructure', 'APIs & Integrations', 'Data Pipelines'].map((tech) => (
              <div key={tech} className="bg-white rounded-lg p-6 text-center">
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
            Ready to Build Your Startup?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Let's talk about your idea and how we can help bring it to life.
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
