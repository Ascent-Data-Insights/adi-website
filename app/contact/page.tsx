'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Script from 'next/script';
import { useState, FormEvent } from 'react';

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Submit to Netlify Forms endpoint for Next.js apps
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setFormState('success');
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormState('error');
      setErrorMessage('Something went wrong. Please try emailing us directly at info@ascentdi.com');
    }
  };

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-primary to-brand-secondary pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-5xl sm:text-6xl font-bold text-white mb-6">
              Connect with Us!
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Let's build something great together.
            </p>
          </div>
        </section>

        {/* Two-Column Contact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column - Calendly */}
              <div>
                <h2 className="font-heading text-3xl font-bold text-brand-primary mb-6">
                  Schedule a Call
                </h2>
                <p className="text-gray-700 mb-8">
                  Book a time that works for you and we'll have a conversation about your needs.
                </p>

                {/* Calendly Embed */}
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/parker-ascentdi/30min"
                  style={{ minWidth: '320px', height: '700px' }}
                />
              </div>

              {/* Right Column - Contact Form */}
              <div>
                <h2 className="font-heading text-3xl font-bold text-brand-primary mb-6">
                  Send Us a Message
                </h2>
                <p className="text-gray-700 mb-8">
                  Prefer to write? Fill out the form below and we'll get back to you soon.
                </p>

                {formState === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <svg
                      className="w-16 h-16 text-green-500 mx-auto mb-4"
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
                    <h3 className="font-heading text-2xl font-bold text-green-800 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-green-700 mb-4">
                      Thanks for reaching out. We'll get back to you soon.
                    </p>
                    <button
                      onClick={() => setFormState('idle')}
                      className="text-brand-secondary hover:text-brand-primary font-semibold transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    name="contact"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <input type="hidden" name="form-name" value="contact" />

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        disabled={formState === 'submitting'}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        disabled={formState === 'submitting'}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={8}
                        disabled={formState === 'submitting'}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition-colors resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="Tell us about your project or question..."
                      />
                    </div>

                    {formState === 'error' && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-red-700 text-sm">{errorMessage}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="w-full bg-brand-secondary hover:bg-brand-primary text-white font-semibold py-4 px-6 rounded-lg transition-colors shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Contact Info */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xl text-gray-700">
              Or, email us at{' '}
              <a
                href="mailto:info@ascentdi.com"
                className="text-brand-secondary hover:text-brand-accent font-semibold transition-colors"
              >
                info@ascentdi.com
              </a>
            </p>
          </div>
        </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
