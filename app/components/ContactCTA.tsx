import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
          Let's Figure It Out Together
        </h2>

        <p className="text-xl text-white/90 mb-10 leading-relaxed">
          Tell us what you're working on. We'll have an honest conversation about whether we can
          help—and if we're not the right fit, we'll tell you that too.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-brand-primary bg-white hover:bg-gray-50 rounded-lg transition-colors shadow-lg"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
