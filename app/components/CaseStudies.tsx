import Link from 'next/link';

const caseStudies = [
  {
    title: 'Lucho',
    industry: 'Field Service / SaaS',
    description: 'Rapid engineering across iOS, web, and backend for a field service platform',
    image: '/placeholder-lucho.jpg',
    href: '/case-studies/innovation-engineering-lucho',
  },
  {
    title: 'Enterprise AI Infrastructure',
    industry: 'Fortune 500 Consumer Goods',
    description: 'Built AI gateway infrastructure enabling thousands of users across the enterprise',
    image: '/placeholder-ai.jpg',
    href: '/case-studies/ai-enablement',
  },
  {
    title: 'Data Modernization Project',
    industry: 'TBD',
    description: 'Unified data from multiple sources into a single source of truth',
    image: '/placeholder-data.jpg',
    href: '#',
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
              {/* Image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-brand-secondary to-brand-primary relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white/50 text-sm">
                  Image Placeholder
                </div>
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
