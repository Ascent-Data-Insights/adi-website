import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Startup Solutions - Ascent Data Insights',
  description:
    'Full-stack development, rapid prototyping, and technical partnership for startups in the Greater Cincinnati region. Move fast without breaking things.',
};

export default function StartupsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary to-brand-secondary pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl sm:text-6xl font-bold text-white mb-6 mt-8">
            Startups
          </h1>
          <p className="text-2xl text-brand-accent font-semibold mb-6">
            You have the vision. <br />
            We help you ship it.
          </p>
          <p className="text-xl text-white/90 leading-relaxed">
            Startups don&apos;t have the luxury of months of planning before execution. You need a
            technical partner who can move fast, work across the entire stack, and help you get from
            idea to working product without burning through your runway.
          </p>
          <br />
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-brand-primary hover:bg-gray-100 rounded-lg font-semibold transition-colors"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-brand-primary mb-4">
              The Startup Reality
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You&apos;re moving fast, resources are tight, and you need to prove your concept
              before you can scale. We get it.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-brand-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-brand-primary mb-3">
                Too Much to Build, Not Enough Hands
              </h3>
              <p className="text-gray-600">
                You need cloud infrastructure, web, AI, backend, maybe some data science, and you needed it
                yesterday. Hiring specialists for each piece isn&apos;t realistic at your stage.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-brand-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-brand-primary mb-3">
                Speed vs. Quality Trade-offs
              </h3>
              <p className="text-gray-600">
                You need to move fast, but you also can&apos;t afford to rebuild everything in six
                months. Finding the right balance between shipping quickly and building something
                that lasts is hard.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-brand-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-brand-primary mb-3">
                Technical Decisions Without a CTO
              </h3>
              <p className="text-gray-600">
                Which framework? Build or buy? How do you architect for scale without
                over-engineering? You need someone who can make these calls confidently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-brand-primary mb-4">How We Help</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We become an extension of your team, moving fast across whatever needs to get built.
              No long onboarding, no waiting for specialists, just shipping.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-brand-secondary mb-4">
                Full-Stack Development
              </h3>
              <p className="text-gray-600 mb-4">
                We work across the entire stack: web frontends, backend APIs, cloud infrastructure, database
                architecture, iOS, Android. You don&apos;t need to hire five different people. You need
                one team that can context-switch and keep shipping.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Cloud deployment and DevOps
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  AI integration, backend APIs and data infrastructure
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Web & native mobile apps
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-brand-secondary mb-4">
                Rapid Prototyping & MVPs
              </h3>
              <p className="text-gray-600 mb-4">
                Get your idea in front of users fast. We build working software you can test, demo,
                and iterate on, not slide decks. Rapid feedback is everything.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Functional prototypes in weeks, not months
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Built for iteration as you learn
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Demo-ready for users and investors
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-brand-secondary mb-4">
                AI & Data Exploration
              </h3>
              <p className="text-gray-600 mb-4">
                Thinking about AI-powered features? We can help you explore what&apos;s possible,
                build quick proofs of concept, and figure out where AI actually adds value versus
                where it&apos;s just hype.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  AI feasibility assessments
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Quick experiments and proofs of concept
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Search, recommendations, and intelligent features
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-brand-secondary mb-4">
                Technical Partnership
              </h3>
              <p className="text-gray-600 mb-4">
                More than just writing code: we help with architecture decisions, technical
                strategy, and building in a way that won&apos;t create massive tech debt down the
                road. We keep the long-term vision in mind while moving fast.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Architecture and technology decisions
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Build vs. buy guidance
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  Scalable foundations without over-engineering
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-brand-primary mb-4">
              How We Work With Startups
            </h2>
            <p className="text-xl text-gray-600">
              We&apos;ve built products from scratch. We know the constraints.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-10 border border-gray-200">
            <p className="text-gray-700 text-lg mb-6">
              Startups can&apos;t afford to spend months in planning mode. You need to ship, learn,
              and iterate. But moving fast doesn&apos;t mean building something you&apos;ll have to
              throw away in six months.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              We&apos;re comfortable jumping between technologies and domains, picking up whatever
              framework or language makes sense for your problem, and keeping things moving without
              getting blocked. When you need iOS work done on Monday, backend work on Wednesday, and
              data pipeline work on Friday, we can handle that.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              At the same time, we keep the longer-term vision in mind. We make pragmatic
              trade-offs: ship the MVP, but structure the code so it can evolve. Use the right
              amount of architecture, not too much, not too little.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600 mb-4">
                <span className="font-semibold text-brand-primary">What this looks like:</span>
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-brand-accent mr-2 mt-0.5 flex-shrink-0"
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
                  Fast ramp-up, no onboarding lag
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-brand-accent mr-2 mt-0.5 flex-shrink-0"
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
                  Work across multiple platforms simultaneously
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-brand-accent mr-2 mt-0.5 flex-shrink-0"
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
                  Ship incrementally, learn continuously
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-brand-accent mr-2 mt-0.5 flex-shrink-0"
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
                  Pragmatic architecture decisions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Highlight - Lucho */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-primary mb-12 text-center">
            See It in Action
          </h2>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200">
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="flex-shrink-0">
                <Image
                  src="/images/lucho.svg"
                  alt="Lucho"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>

              <div className="flex-grow">
                <h3 className="font-heading text-2xl font-bold text-brand-primary mb-2">
                  Rapid Engineering Across the Stack
                </h3>
                <p className="text-gray-600 mb-6 italic">
                  Cincinnati-based startup • Field Service / SaaS
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">The Situation:</h4>
                    <p className="text-gray-700">
                      Lucho, a Cincinnati startup building a crew management platform for
                      landscaping companies, had technical founders but needed to move faster. With a
                      complex product spanning iOS, web, and backend infrastructure, they needed a
                      partner who could accelerate development across the entire stack.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What We Did:</h4>
                    <p className="text-gray-700">
                      Over three months, we worked across every layer of their stack: native iOS
                      development, React web frontend, backend APIs, database design, and
                      Elasticsearch implementation. The most impactful work was building search
                      infrastructure that now powers the entire platform, and lays the foundation for
                      future AI capabilities.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">The Result:</h4>
                    <p className="text-gray-700">
                      Features shipped across five platforms in three months, all from one team. The
                      Lucho founders could focus on product strategy while we handled technical
                      execution.
                    </p>
                  </div>
                </div>

                <Link
                  href="/case-studies/innovation-engineering-lucho"
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

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-brand-primary mb-4">
              We Work Across Modern Stacks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tech-stack agnostic means we use what&apos;s right for your problem, not what&apos;s
              familiar to us. Here&apos;s a sample of what we work with.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Mobile', desc: 'Swift, Kotlin, React Native' },
              { name: 'Web Frontend', desc: 'React, Next.js, TypeScript' },
              { name: 'Backend', desc: 'Python, Node.js, Go' },
              { name: 'Databases', desc: 'PostgreSQL, MongoDB, Redis' },
              { name: 'Search & AI', desc: 'Elasticsearch, OpenAI, LangChain' },
              { name: 'Cloud', desc: 'AWS, GCP, Vercel' },
              { name: 'Data', desc: 'Spark, dbt, Airflow' },
              { name: 'DevOps', desc: 'Docker, Kubernetes, CI/CD' },
            ].map((tech) => (
              <div key={tech.name} className="bg-gray-50 rounded-lg p-5">
                <p className="font-semibold text-brand-primary">{tech.name}</p>
                <p className="text-sm text-gray-500 mt-1">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-brand-primary mb-4">
              Why Cincinnati Startups Work With Us
            </h2>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-brand-primary mb-2">
                  We&apos;re local and invested in the ecosystem
                </h3>
                <p className="text-gray-600">
                  We&apos;re based in Cincinnati and we care about the startup scene here. We&apos;ve
                  worked with local startups, we understand the landscape, and we&apos;re not going
                  anywhere. When you need to meet in person, we&apos;re here.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-brand-primary mb-2">
                  We move at startup speed
                </h3>
                <p className="text-gray-600">
                  No lengthy proposals, no bureaucracy, no waiting weeks for someone to get up to
                  speed. We understand that time is your most constrained resource and we operate
                  accordingly.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-brand-primary mb-2">
                  We&apos;re honest about what will work
                </h3>
                <p className="text-gray-600">
                  If your idea needs refinement, we&apos;ll tell you. If a simpler approach will get
                  you to market faster, we&apos;ll suggest it. We&apos;re not here to maximize
                  billable hours. We&apos;re here to help you succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">Ready to start building?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Tell us about your idea. We&apos;ll have an honest conversation about how we can help
            you ship it.
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
