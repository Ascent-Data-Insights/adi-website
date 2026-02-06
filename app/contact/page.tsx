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

    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormState('success');
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormState('error');
      setErrorMessage('Something went wrong. Please try emailing us directly at hello@ascentdatainsights.com');
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

        {/* Hidden form for Netlify Forms detection */}
        <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>

        <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-primary to-brand-secondary py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-5xl sm:text-6xl font-bold text-white mb-6">
              Let's Figure It Out Together
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Tell us what you're working on. We'll have an honest conversation about whether we
              can help—and if we're not the right fit, we'll tell you that too.
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
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >

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
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl font-bold text-brand-primary mb-8">
              Other Ways to Reach Us
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-brand-accent/20 mx-auto mb-4 flex items-center justify-center">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-brand-primary mb-2">
                  Email
                </h3>
                <a
                  href="mailto:hello@ascentdatainsights.com"
                  className="text-brand-secondary hover:text-brand-accent transition-colors"
                >
                  hello@ascentdatainsights.com
                </a>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-brand-accent/20 mx-auto mb-4 flex items-center justify-center">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-brand-primary mb-2">
                  Location
                </h3>
                <p className="text-gray-700">
                  Cincinnati, OH
                </p>
              </div>
            </div>
          </div>
        </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
