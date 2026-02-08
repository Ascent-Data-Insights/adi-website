import Link from 'next/link';

export default function AboutBrief() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-primary mb-8">
                        Who We Are
                    </h2>

                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                        <p>
                            Ascent Data Insights was founded by Parker and Aaron, two data scientists who spent
                            years solving complex problems at one of the country's leading analytics companies. We
                            started Ascent because we believe growing businesses deserve the same quality of data
                            and AI expertise that big enterprises get, while bringing the agility that small companies can.
                        </p>

                        <p>
                            We're based in Cincinnati, and we work with companies across Ohio, Kentucky, and
                            Indiana. We're here to listen, understand your problem, and build the right solution to
                            bring you value that lasts.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/about"
                        className="inline-flex items-center text-brand-primary hover:text-brand-accent font-semibold text-lg transition-colors group"
                    >
                        Meet the Team
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
            </div>
        </section>
    );
}
