import Link from 'next/link';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Innovation Engineering with Lucho | Case Study | Ascent Data Insights',
    description: 'How we accelerated development across iOS, web, and backend for a field service platform.',
};

export default function LuchoCaseStudyPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-brand-primary to-brand-secondary pt-32 pb-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-6">
                            <span className="inline-block px-4 py-2 text-sm font-semibold text-brand-primary bg-brand-accent rounded-full">
                                Innovation Engineering
                            </span>
                        </div>

                        {/* Lucho Logo */}
                        <div className="mb-8">
                            <Image
                                src="/images/lucho.svg"
                                alt="Lucho"
                                width={200}
                                height={60}
                                className="h-12 w-auto"
                            />
                        </div>

                        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
                            Rapid Engineering Across the Stack for Lucho
                        </h1>

                        <p className="text-xl text-white/90 mb-4">
                            Accelerating development across iOS, web, and backend infrastructure for a field service platform
                        </p>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-lg text-white/80">
                            <div>
                                <strong>Industry:</strong> Field Service / SaaS
                            </div>
                            <div className="hidden sm:block text-white/40">•</div>
                            <div>
                                <strong>Timeline:</strong> 3-month engagement
                            </div>
                            <div className="hidden sm:block text-white/40">•</div>
                            <div>
                                <a
                                    href="https://getlucho.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-brand-accent hover:text-white transition-colors underline"
                                >
                                    Visit Lucho →
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Overview */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="font-heading text-3xl font-bold text-brand-primary mb-6">
                            The Challenge
                        </h2>
                        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                            <a
                                href="https://getlucho.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-secondary hover:text-brand-primary transition-colors underline font-semibold"
                            >
                                Lucho
                            </a>
                            , a Cincinnati-based startup building a crew management platform for landscaping companies,
                            had technical founders working on their app, but still needed to move faster. With a complex
                            product spanning iOS, web, and sophisticated backend infrastructure, they needed a partner
                            who could accelerate development across the entire stack without slowing down to get up to speed.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <h3 className="font-heading text-lg font-bold text-brand-primary mb-2">
                                    The Problem
                                </h3>
                                <p className="text-gray-700">
                                    Building across iOS, web, backend APIs, and search infrastructure simultaneously—a broad technical scope requiring rapid context switching
                                </p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <h3 className="font-heading text-lg font-bold text-brand-primary mb-2">
                                    The Goal
                                </h3>
                                <p className="text-gray-700">
                                    Accelerate toward launch by shipping features faster across the entire platform
                                </p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <h3 className="font-heading text-lg font-bold text-brand-primary mb-2">
                                    The Timeline
                                </h3>
                                <p className="text-gray-700">
                                    3-month engagement delivering capabilities across multiple platforms
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solution */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="font-heading text-3xl font-bold text-brand-primary mb-6">
                            What We Did
                        </h2>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 mb-6">
                                Over three months, we worked across every layer of Lucho's tech stack. We jumped between
                                iOS development, React web frontends, backend API work, database design, and search
                                infrastructure. The value we brought wasn't just writing code, it was the ability to
                                rapidly ship features across domains without needing months of onboarding.
                            </p>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="font-heading text-xl font-bold text-brand-primary mb-3">
                                        1. Elasticsearch Implementation Across the Stack
                                    </h3>
                                    <p className="text-gray-700 mb-3">
                                        The most impactful work was building search infrastructure using Elasticsearch—and
                                        making it work seamlessly across the backend, React web app, and iOS app. For a
                                        platform where crews need to quickly find jobs, messages, photos, and location
                                        data, search is absolutely core to the product.
                                    </p>
                                    <p className="text-gray-700">
                                        In addiiton to being core to search in the short-term, our Elasticsearch implementation
                                        serves as the founation for future AI capabilities within Lucho, enabling intelligent recommendations
                                        and automation in the future.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-heading text-xl font-bold text-brand-primary mb-3">
                                        2. iOS, Web, and Backend Development
                                    </h3>
                                    <p className="text-gray-700">
                                        We contributed across every part of the platform: native iOS features, React
                                        frontend work, backend API endpoints, and database architecture. The team could
                                        focus on product design and strategy while we brought their vision to life in code.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-heading text-xl font-bold text-brand-primary mb-3">
                                        3. Agile, Rapid Iteration
                                    </h3>
                                    <p className="text-gray-700">
                                        Because we're comfortable context-switching between technologies and frameworks,
                                        we could move fast without getting blocked. Whether it was Swift for iOS,
                                        TypeScript for the web, or optimizing Elasticsearch queries, we picked up what
                                        we needed and kept shipping.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Results */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="font-heading text-3xl font-bold text-brand-primary mb-6">
                            The Results
                        </h2>

                        <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-8 md:p-12 text-white mb-8">
                            <div className="grid md:grid-cols-3 gap-8 text-center">
                                <div>
                                    <div className="text-4xl font-bold text-brand-accent mb-2">3 Months</div>
                                    <div className="text-white/90">Rapid delivery cycle</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-brand-accent mb-2">5 Platforms</div>
                                    <div className="text-white/90">iOS, Web, API, DB, Search</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-brand-accent mb-2">1 Team</div>
                                    <div className="text-white/90">Breadth without specialists</div>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none mb-12">
                            <p className="text-gray-700 mb-6">
                                In just three months, we delivered features and infrastructure across every layer of
                                Lucho's platform, helping to accelerate their progress toward launch significantly.
                            </p>

                            <ul className="space-y-4 text-gray-700">
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
                                    <span>
                                        Built Elasticsearch infrastructure from scratch and integrated it across backend,
                                        React web app, and native iOS app
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
                                    <span>
                                        Delivered features across iOS, web frontend, backend APIs, and their database. This demonstrated
                                        the value of a team with broad technical range
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
                                    <span>
                                        Laid groundwork for future AI capabilities by architecting search infrastructure
                                        with extensibility in mind
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
                                    <span>
                                        Enabled the Lucho team to focus on product design and strategy while we handled
                                        technical execution
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Testimonial */}
                        <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border-l-4 border-brand-accent">
                            <div className="flex items-start mb-4">
                                <svg
                                    className="w-10 h-10 text-brand-accent opacity-50 mr-4 flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                                </svg>
                                <div>
                                    <p className="text-lg text-gray-700 italic leading-relaxed mb-4">
                                        [Testimonial placeholder - to be filled with quote from Lucho founder]
                                    </p>
                                    <div className="text-sm text-gray-600">
                                        <div className="font-semibold text-brand-primary">[Name], [Title]</div>
                                        <div>Lucho</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="font-heading text-3xl font-bold text-brand-primary mb-4">
                            Need a team that can work across your entire stack?
                        </h2>
                        <p className="text-xl text-gray-700 mb-8">
                            Whether you're building an MVP, accelerating toward launch, or need to ship features
                            faster, let's talk about how we can help.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-brand-primary hover:bg-brand-secondary rounded-lg transition-colors shadow-lg"
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
