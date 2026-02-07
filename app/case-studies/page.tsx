import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | Ascent Data Insights',
  description: 'See how we\'ve helped businesses transform their data, implement AI, and build innovative solutions.',
};

const caseStudies = [
  {
    title: 'Innovation Engineering with Lucho',
    slug: 'innovation-engineering-lucho',
    industry: 'Consumer Products',
    service: 'Innovation Engineering',
    summary: 'Full-stack development for a growing consumer brand, delivering a scalable digital platform.',
    image: '🚀',
  },
  {
    title: 'AI-Powered Review Automation',
    slug: 'ai-enablement',
    industry: 'Professional Services',
    service: 'AI Strategy & Implementation',
    summary: 'Reduced manual review time by 60% with intelligent automation and exception flagging.',
    image: '🤖',
  },
  {
    title: 'Routing Optimization',
    slug: 'routing-optimization',
    industry: 'Manufacturing & Distribution',
    service: 'Data Modernization',
    summary: 'Unified data platform enabling real-time business metrics and faster decision-making.',
    image: '📊',
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-primary to-brand-secondary pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-5xl sm:text-6xl font-bold text-white mb-6 mt-8">
              Our Work
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Real projects. Real results. See how we've helped businesses like yours turn data
              into decisions, navigate AI with clarity, and ship products that matter.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="group block"
                >
                  <div className="bg-gray-50 rounded-xl p-8 hover:bg-brand-primary hover:shadow-xl transition-all duration-300 h-full">
                    <div className="text-6xl mb-6">{study.image}</div>

                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-secondary group-hover:text-brand-accent bg-white rounded-full transition-colors">
                        {study.service}
                      </span>
                    </div>

                    <h2 className="font-heading text-2xl font-bold text-brand-primary group-hover:text-white mb-3 transition-colors">
                      {study.title}
                    </h2>

                    <p className="text-gray-600 group-hover:text-white/90 mb-4 transition-colors italic">
                      {study.industry}
                    </p>

                    <p className="text-gray-700 group-hover:text-white/80 mb-6 transition-colors">
                      {study.summary}
                    </p>

                    <div className="flex items-center text-brand-secondary group-hover:text-brand-accent font-semibold transition-colors">
                      Read the case study
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
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-4xl font-bold text-white mb-6">
              Ready to create your own success story?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Let's talk about what we can build together.
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
