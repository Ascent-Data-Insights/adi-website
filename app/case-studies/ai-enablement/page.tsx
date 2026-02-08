import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Enterprise AI Infrastructure at Scale | Case Study | Ascent Data Insights',
    description: 'How we built AI infrastructure to enable thousands of users across a Fortune 500 company.',
};

export default function AIEnablementCaseStudyPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-brand-primary to-brand-secondary pt-32 pb-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-6">
                            <span className="inline-block px-4 py-2 text-sm font-semibold text-brand-primary bg-brand-accent rounded-full">
                                AI Strategy & Implementation
                            </span>
                        </div>

                        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
                            Enterprise AI Infrastructure at Scale
                        </h1>

                        <p className="text-xl text-white/90 mb-4">
                            Building a unified AI gateway to enable thousands of users across a Fortune 500 organization
                        </p>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-lg text-white/80">
                            <div>
                                <strong>Industry:</strong> Fortune 500 Consumer Goods
                            </div>
                            <div>
                                <strong>Scale:</strong> Thousands of users, enterprise-wide deployment
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
                            A Fortune 500 consumer goods company was experiencing rapid, ungoverned adoption of AI
                            tools across the organization. Teams were managing their own API keys, using different
                            models with no standardization, and costs were impossible to track. Security and compliance
                            teams were concerned, and new teams faced a steep learning curve to even get started with AI.
                            The company needed infrastructure that could enable innovation while maintaining control.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <h3 className="font-heading text-lg font-bold text-brand-primary mb-2">
                                    The Problem
                                </h3>
                                <p className="text-gray-700">
                                    Ungoverned AI usage, scattered API keys, zero cost visibility, and long onboarding times
                                </p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <h3 className="font-heading text-lg font-bold text-brand-primary mb-2">
                                    The Goal
                                </h3>
                                <p className="text-gray-700">
                                    Enable enterprise-wide AI adoption with governance, cost control, and flexibility
                                </p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <h3 className="font-heading text-lg font-bold text-brand-primary mb-2">
                                    The Scale
                                </h3>
                                <p className="text-gray-700">
                                    Support thousands of users across diverse use cases and teams
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solution */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="font-heading text-3xl font-bold text-brand-primary mb-6">
                            What We Built
                        </h2>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 mb-6">
                                As part of the engineering team, we built a unified AI gateway that became the
                                central infrastructure for all LLM usage across the enterprise. The system needed
                                to be flexible, performant, and scalable enough to handle the demands of thousands
                                of users with diverse needs.
                            </p>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="font-heading text-xl font-bold text-brand-primary mb-3">
                                        1. Unified Gateway Architecture
                                    </h3>
                                    <p className="text-gray-700">
                                        We built a centralized AI gateway that routed requests to multiple LLM
                                        providers—including OpenAI, Claude, and internally developed models. Teams got
                                        a single, consistent interface regardless of which model they were using,
                                        dramatically simplifying development and reducing onboarding time.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-heading text-xl font-bold text-brand-primary mb-3">
                                        2. Enterprise-Scale Infrastructure
                                    </h3>
                                    <p className="text-gray-700 mb-3">
                                        Using LiteLLM and Kubernetes, we built infrastructure that could handle
                                        enterprise-scale load with high availability and performance. The system needed
                                        to be reliable enough to power mission-critical applications across the
                                        organization.
                                    </p>
                                    <p className="text-gray-700">
                                        We also integrated Nvidia Triton to serve internally developed models, ensuring
                                        the company could deploy proprietary AI capabilities alongside commercial
                                        offerings—all through the same unified interface.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-heading text-xl font-bold text-brand-primary mb-3">
                                        3. Governance and Cost Control
                                    </h3>
                                    <p className="text-gray-700">
                                        The gateway provided centralized visibility into usage patterns, costs, and
                                        model selection across the organization. Security and compliance teams could
                                        ensure proper governance while teams retained the flexibility to experiment
                                        and innovate.
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
                                    <div className="text-4xl font-bold text-brand-accent mb-2">Thousands</div>
                                    <div className="text-white/90">Users enabled</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-brand-accent mb-2">Enterprise</div>
                                    <div className="text-white/90">Scale deployment</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-brand-accent mb-2">Live</div>
                                    <div className="text-white/90">In production today</div>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 mb-6">
                                The AI gateway transformed how the organization approached AI adoption—moving from
                                chaos to control while accelerating innovation:
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
                                        <strong>Thousands of users</strong> gained access to multiple AI models through a
                                        single, unified interface
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
                                        <strong>Dramatically reduced onboarding time</strong> for teams wanting to use AI, lowering from
                                        weeks of setup to immediate access
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
                                        <strong>Full cost visibility and control</strong> across all AI usage, enabling
                                        data-driven decisions about model selection and spend
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
                                        <strong>Seamless integration of internal models</strong> alongside commercial providers,
                                        giving the organization maximum flexibility
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
                                        <strong>Continues to power enterprise-wide AI workloads</strong> today, handling
                                        mission-critical applications at scale
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="font-heading text-3xl font-bold text-brand-primary mb-4">
                            Need AI infrastructure that scales?
                        </h2>
                        <p className="text-xl text-gray-700 mb-8">
                            Whether you're building AI capabilities from scratch or trying to wrangle existing chaos,
                            let's talk about how to do it right.
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
