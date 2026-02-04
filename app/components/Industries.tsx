import Link from 'next/link';

const industries = [
  {
    name: 'Manufacturing',
    description: 'Optimize operations, predict maintenance needs, and modernize production data.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    href: '/industries/manufacturing',
  },
  {
    name: 'Logistics',
    description: 'Streamline supply chains, route optimization, and real-time tracking solutions.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    href: '/industries/logistics',
  },
  {
    name: 'Consumer Goods',
    description: 'Understand customer behavior, optimize pricing, and enhance digital experiences.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    href: '/industries/consumer-goods',
  },
  {
    name: 'Startups',
    description: 'Build your data foundation, validate AI opportunities, and ship MVPs fast.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    href: '/industries/startups',
  },
];

export default function Industries() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-brand-primary mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We bring expertise across diverse sectors—helping businesses solve industry-specific challenges with data and AI.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry) => (
            <Link
              key={industry.name}
              href={industry.href}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-brand-secondary mb-4 group-hover:text-brand-accent transition-colors">
                {industry.icon}
              </div>
              <h3 className="font-heading text-xl font-semibold text-brand-primary mb-3 group-hover:text-brand-secondary transition-colors">
                {industry.name}
              </h3>
              <p className="text-gray-600 mb-4">
                {industry.description}
              </p>
              <div className="text-brand-secondary font-medium flex items-center group-hover:text-brand-accent transition-colors">
                Learn more
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
