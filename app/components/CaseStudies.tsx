import Link from 'next/link';
import Image from 'next/image';
import { Bot, Truck } from 'lucide-react';

const caseStudies = [
  {
    title: 'Lucho',
    industry: 'Field Service / SaaS',
    description: 'Rapid engineering across iOS, web, and backend for a field service platform',
    href: '/case-studies/innovation-engineering-lucho',
    visual: 'lucho-logo',
  },
  {
    title: 'Enterprise AI Infrastructure',
    industry: 'Fortune 500 Consumer Goods',
    description: 'Built AI gateway infrastructure enabling thousands of users across the enterprise',
    href: '/case-studies/ai-enablement',
    visual: 'robot',
  },
  {
    title: 'Routing Optimization',
    industry: 'Fortune 500 Logistics',
    description: 'Drove millions in cost savings by improving data quality and optimizing routing across thousands of locations',
    href: '/case-studies/routing-optimization',
    visual: 'truck',
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-primary mb-4">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A few examples of how we've helped businesses like yours.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Link
              key={study.title}
              href={study.href}
              className="group block rounded-xl overflow-hidden bg-gray-50 hover:shadow-xl transition-all duration-300"
            >
              {/* Card visual */}
              <div className="aspect-video relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-brand-secondary to-brand-primary">
                {study.visual === 'lucho-logo' && (
                  <Image
                    src="/images/lucho.svg"
                    alt="Lucho"
                    width={400}
                    height={120}
                    className="w-[60%] h-auto"
                  />
                )}
                {study.visual === 'robot' && (
                  <Bot className="w-36 h-36 text-white/80" strokeWidth={1} />
                )}
                {study.visual === 'truck' && (
                  <Truck className="w-36 h-36 text-white/80" strokeWidth={1} />
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-sm font-bold text-brand-primary/70 mb-2 uppercase tracking-wide">
                  {study.industry}
                </div>
                <h3 className="font-heading text-xl font-bold text-brand-primary mb-3 group-hover:text-brand-secondary transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-700 mb-4">{study.description}</p>

                <div className="inline-flex items-center text-brand-primary font-semibold group-hover:text-brand-accent transition-colors">
                  Read case study
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
  );
}
