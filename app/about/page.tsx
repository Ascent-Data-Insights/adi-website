import Link from 'next/link';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Ascent Data Insights',
  description: 'Data & AI expertise, rooted in Cincinnati. Meet the team behind Ascent Data Insights.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-primary to-brand-secondary pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-5xl sm:text-6xl font-bold text-white mb-6 mt-8">
              Data & AI Expertise, Rooted in Cincinnati
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              We bring enterprise-grade data and AI expertise to growing businesses—with the speed
              and focus that only a small, dedicated team can offer.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-4xl font-bold text-brand-primary mb-8 text-center">
              Our Story
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Ascent Data Insights started with a simple idea: bring world-class data and AI
                expertise to the businesses that are shaping the Greater Cincinnati region.
              </p>

              <p>
                Our founders, Parker and Aaron, spent years working at 84.51°—one of the country's
                leading analytics companies—where they saw firsthand what great data strategy, AI
                implementation, and engineering can do at scale. They started Ascent to bring that
                same level of rigor and quality to startups and mid-size businesses closer to home.
              </p>

              <p>
                We're based in Cincinnati and work with companies across Ohio, Kentucky, and
                Indiana. We're growing, but no matter our size, our approach stays the same: listen
                first, build solutions that last, and make sure your team is set up to succeed long
                after the project ends.
              </p>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl font-bold text-brand-primary mb-4">
                The Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Ascent was founded by two data scientists who believe great work comes from
                curiosity, honesty, and craft.
              </p>

              {/* Team Photo */}
              <div className="flex justify-center mb-8">
                <div className="relative w-full max-w-2xl rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/both.jpg"
                    alt="Parker and Aaron, Co-Founders of Ascent Data Insights"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Experience Text */}
              <div className="max-w-3xl mx-auto mb-16">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Together, we have over a decade of experience in creating solutions that meet our
                  clients where they are. We've worked with two-person startups and Fortune 20
                  companies alike, and we'd be thrilled to partner with your organization as well!
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Parker */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                  <Image
                    src="/parker.jpg"
                    alt="Parker, Co-Founder of Ascent Data Insights"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-heading text-2xl font-bold text-brand-primary text-center mb-2">
                  Parker
                </h3>
                <p className="text-brand-accent text-center mb-6 font-semibold">Co-Founder</p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Former Data Scientist and Engineer at 84.51°. Loves untangling messy problems,
                  building things that work, and explaining complex ideas in plain English.
                </p>
                <div className="text-center">
                  <a
                    href="https://www.linkedin.com/in/parkerkain/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-brand-secondary hover:text-brand-accent transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Aaron */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                  <Image
                    src="/aaron.jpg"
                    alt="Aaron, Co-Founder of Ascent Data Insights"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-heading text-2xl font-bold text-brand-primary text-center mb-2">
                  Aaron
                </h3>
                <p className="text-brand-accent text-center mb-6 font-semibold">Co-Founder</p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Former Data Scientist at 84.51°. Driven by curiosity and a belief that good data
                  work should make people's jobs easier, not harder.
                </p>
                <div className="text-center">
                  <a
                    href="https://www.linkedin.com/in/aaron-robeson/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-brand-secondary hover:text-brand-accent transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-4xl font-bold text-brand-primary mb-12 text-center">
              How We Work
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-accent/20 mx-auto mb-6 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-brand-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-brand-primary mb-3">
                  Understand your business
                </h3>
                <p className="text-gray-700">
                  Every business is different, and we'll start by interviewing key stakeholders to understand your existing processes, differentiators, and pain points.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-accent/20 mx-auto mb-6 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-brand-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-brand-primary mb-3">
                  Fine-tune our approach
                </h3>
                <p className="text-gray-700">
                  Customize our solution to your exact needs, whether that's optimizing to keep costs low or helping you to plan for future growth.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-accent/20 mx-auto mb-6 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-brand-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-brand-primary mb-3">
                  Create Solutions that last
                </h3>
                <p className="text-gray-700">
                  We make your team a part of the process, ensuring you continue seeing returns long after the project is complete.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-4xl font-bold text-white mb-6">
              Want to work together?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              We'd love to hear what you're building. Reach out and let's see if we're a good fit.
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
