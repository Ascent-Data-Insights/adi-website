const values = [
    {
        title: 'Intuitive by design',
        description: 'Solutions your team can actually use',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
            </svg>
        ),
    },
    {
        title: 'Knowledge transfer built in',
        description: 'We teach as we build',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
            </svg>
        ),
    },
    {
        title: 'Long-term value',
        description: 'Not just a deliverable, but a lasting capability',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
            </svg>
        ),
    },
];

export default function WhyWorkWithUs() {
    return (
        <section className="py-24 bg-gradient-to-br from-brand-primary to-brand-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
                        Built to Last. Built With You.
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-4 text-lg text-white/90">
                        <p>
                            We build intuitive solutions and bring your team along for the journey. When we're done, you're not dependent
                            on us. You're empowered.
                        </p>
                        <p>
                            You know your business. We know data, AI, and software. Together, we create solutions
                            that stick.
                        </p>
                    </div>
                </div>

                {/* Values Grid */}
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    {values.map((value) => (
                        <div
                            key={value.title}
                            className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/20 text-brand-accent mb-4">
                                {value.icon}
                            </div>
                            <h3 className="font-heading text-xl font-bold text-white mb-2">{value.title}</h3>
                            <p className="text-white/80">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
