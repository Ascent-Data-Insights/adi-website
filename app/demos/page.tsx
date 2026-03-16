import { Metadata } from 'next';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
    title: 'Demos | Ascent Data Insights',
    description:
        'Try our interactive demos — explore routing optimization in real time.',
};

export default function DemosPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                {/* Hero */}
                <section className="pt-32 pb-16 bg-gradient-to-br from-brand-primary to-brand-secondary">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Interactive Demos
                        </h1>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto">
                            See our work in action. These demos showcase the kinds of solutions we build, try them out for yourself!
                        </p>
                    </div>
                </section>

                {/* Demo Cards */}
                <section className="py-24 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Routing Optimization */}
                            <a
                                href="https://routing.ascentdi.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block rounded-xl overflow-hidden bg-gray-50 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="aspect-video relative overflow-hidden">
                                    <Image
                                        src="/routing_demo.png"
                                        alt="Routing Optimization Demo"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <h2 className="font-heading text-xl font-bold text-brand-primary mb-3 group-hover:text-brand-secondary transition-colors">
                                        Routing Optimization
                                    </h2>
                                    <p className="text-gray-700 mb-4">
                                        Watch a routing optimization run in real time. Explore how we solve vehicle routing problems across multiple stops — see the solver work, compare routes, and dig into the results.
                                    </p>
                                    <div className="inline-flex items-center text-brand-primary font-semibold group-hover:text-brand-accent transition-colors">
                                        Try it out
                                        <svg
                                            className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </a>

                            {/* Aurora — Portfolio AI (uncomment when ready to make public)
              <a
                href="https://aurora.ascentdi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl overflow-hidden bg-gray-50 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-brand-secondary to-brand-primary">
                  <MessageSquare className="w-36 h-36 text-white/80 group-hover:scale-110 transition-transform duration-300" strokeWidth={1} />
                </div>
                <div className="p-6">
                  <h2 className="font-heading text-xl font-bold text-brand-primary mb-3 group-hover:text-brand-secondary transition-colors">
                    Aurora — Portfolio AI
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Have a conversation with Aurora, our AI assistant for portfolio management. Talk through potential portfolio items and get them assessed for value, feasibility, and scalability.
                  </p>
                  <div className="inline-flex items-center text-brand-primary font-semibold group-hover:text-brand-accent transition-colors">
                    Try it out
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
              */}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
