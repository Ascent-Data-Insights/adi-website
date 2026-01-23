import Link from 'next/link';

const pillars = [
  {
    title: 'Data Modernization',
    tagline: 'Turn your data into a competitive advantage.',
    description:
      'Scattered spreadsheets. Legacy systems. Reports no one trusts. We help you build a modern data foundation—so you can finally make decisions with confidence.',
    href: '/services/data-modernization',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
  },
  {
    title: 'AI Strategy & Implementation',
    tagline: 'Cut through the hype. Get real results.',
    description:
      'We\'ve worked in AI for years—we know what\'s real and what\'s noise. Whether you need a readiness assessment, a pilot, or a production-ready solution, we\'ll help you move from curiosity to value.',
    href: '/services/ai-strategy',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: 'Innovation Engineering',
    tagline: 'Your idea. Built and shipped.',
    description:
      'Got a product idea, internal tool, or prototype that doesn\'t exist yet? We\'re tech-stack agnostic problem solvers who love building things from scratch.',
    href: '/services/innovation-engineering',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
];

export default function ThreePillars() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-primary mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three ways we help businesses move forward.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group p-8 rounded-xl bg-gray-50 hover:bg-brand-primary hover:shadow-xl transition-all duration-300"
            >
              <div className="text-brand-secondary group-hover:text-brand-accent transition-colors mb-6">
                {pillar.icon}
              </div>

              <h3 className="font-heading text-2xl font-bold text-brand-primary group-hover:text-white mb-3 transition-colors">
                {pillar.title}
              </h3>

              <p className="text-brand-accent group-hover:text-white/90 font-medium mb-4 transition-colors">
                {pillar.tagline}
              </p>

              <p className="text-gray-700 group-hover:text-white/80 mb-6 transition-colors">
                {pillar.description}
              </p>

              <Link
                href={pillar.href}
                className="inline-flex items-center text-brand-secondary group-hover:text-brand-accent font-semibold transition-colors"
              >
                Learn More
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
