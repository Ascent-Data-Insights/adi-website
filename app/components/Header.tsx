'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Ascent Data Insights" width={140} height={47} className="h-12 w-auto" priority />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-700 hover:text-brand-secondary font-medium transition-colors flex items-center space-x-1"
                aria-label="Services menu"
                aria-expanded="false"
              >
                <span>Services</span>
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                <Link
                  href="/services/data-modernization"
                  className="block px-4 py-3 text-gray-700 hover:bg-brand-secondary/10 hover:text-brand-secondary transition-colors"
                >
                  <div className="font-semibold">Data Modernization</div>
                  <div className="text-sm text-gray-500">Turn data into an advantage</div>
                </Link>
                <Link
                  href="/services/ai-strategy"
                  className="block px-4 py-3 text-gray-700 hover:bg-brand-secondary/10 hover:text-brand-secondary transition-colors"
                >
                  <div className="font-semibold">AI Strategy & Implementation</div>
                  <div className="text-sm text-gray-500">Cut through the hype</div>
                </Link>
                <Link
                  href="/services/innovation-engineering"
                  className="block px-4 py-3 text-gray-700 hover:bg-brand-secondary/10 hover:text-brand-secondary transition-colors"
                >
                  <div className="font-semibold">Innovation Engineering</div>
                  <div className="text-sm text-gray-500">Your idea. Built and shipped.</div>
                </Link>
              </div>
            </div>
            {/* Industries Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-700 hover:text-brand-secondary font-medium transition-colors flex items-center space-x-1"
                aria-label="Industries menu"
                aria-expanded="false"
              >
                <span>Industries</span>
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                <Link
                  href="/industries/manufacturing"
                  className="block px-4 py-3 text-gray-700 hover:bg-brand-secondary/10 hover:text-brand-secondary transition-colors"
                >
                  <div className="font-semibold">Manufacturing</div>
                  <div className="text-sm text-gray-500">Optimize production & maintenance</div>
                </Link>
                <Link
                  href="/industries/logistics"
                  className="block px-4 py-3 text-gray-700 hover:bg-brand-secondary/10 hover:text-brand-secondary transition-colors"
                >
                  <div className="font-semibold">Logistics</div>
                  <div className="text-sm text-gray-500">Streamline supply chains</div>
                </Link>
                <Link
                  href="/industries/consumer-goods"
                  className="block px-4 py-3 text-gray-700 hover:bg-brand-secondary/10 hover:text-brand-secondary transition-colors"
                >
                  <div className="font-semibold">Consumer Goods</div>
                  <div className="text-sm text-gray-500">Understand customer behavior</div>
                </Link>
                <Link
                  href="/industries/startups"
                  className="block px-4 py-3 text-gray-700 hover:bg-brand-secondary/10 hover:text-brand-secondary transition-colors"
                >
                  <div className="font-semibold">Startups</div>
                  <div className="text-sm text-gray-500">Build & ship fast</div>
                </Link>
              </div>
            </div>
            <Link
              href="/about"
              className="text-gray-700 hover:text-brand-secondary font-medium transition-colors"
            >
              About
            </Link>
            {/* Our Work Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-700 hover:text-brand-secondary font-medium transition-colors flex items-center space-x-1"
                aria-label="Our Work menu"
                aria-expanded="false"
              >
                <span>Our Work</span>
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                <Link
                  href="/case-studies/innovation-engineering-lucho"
                  className="block px-4 py-3 text-gray-700 hover:bg-brand-secondary/10 hover:text-brand-secondary transition-colors"
                >
                  <div className="font-semibold">Innovation Engineering with Lucho</div>
                  <div className="text-sm text-gray-500">Field Service / SaaS</div>
                </Link>
                <Link
                  href="/case-studies/ai-enablement"
                  className="block px-4 py-3 text-gray-700 hover:bg-brand-secondary/10 hover:text-brand-secondary transition-colors"
                >
                  <div className="font-semibold">Enterprise AI Infrastructure</div>
                  <div className="text-sm text-gray-500">Fortune 500 Consumer Goods</div>
                </Link>
                <Link
                  href="/case-studies/routing-optimization"
                  className="block px-4 py-3 text-gray-700 hover:bg-brand-secondary/10 hover:text-brand-secondary transition-colors"
                >
                  <div className="font-semibold">Routing Optimization</div>
                  <div className="text-sm text-gray-500">Manufacturing & Distribution</div>
                </Link>
              </div>
            </div>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-brand-secondary font-medium transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-2.5 text-white bg-brand-accent hover:bg-brand-accent/90 rounded-lg font-semibold transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-200">
            <div>
              <div className="font-medium text-gray-900 px-2 mb-2">Services</div>
              <div className="pl-4 space-y-2">
                <Link
                  href="/services/data-modernization"
                  className="block text-gray-700 hover:text-brand-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Data Modernization
                </Link>
                <Link
                  href="/services/ai-strategy"
                  className="block text-gray-700 hover:text-brand-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  AI Strategy & Implementation
                </Link>
                <Link
                  href="/services/innovation-engineering"
                  className="block text-gray-700 hover:text-brand-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Innovation Engineering
                </Link>
              </div>
            </div>
            <div>
              <div className="font-medium text-gray-900 px-2 mb-2">Industries</div>
              <div className="pl-4 space-y-2">
                <Link
                  href="/industries/manufacturing"
                  className="block text-gray-700 hover:text-brand-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Manufacturing
                </Link>
                <Link
                  href="/industries/logistics"
                  className="block text-gray-700 hover:text-brand-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Logistics
                </Link>
                <Link
                  href="/industries/consumer-goods"
                  className="block text-gray-700 hover:text-brand-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Consumer Goods
                </Link>
                <Link
                  href="/industries/startups"
                  className="block text-gray-700 hover:text-brand-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Startups
                </Link>
              </div>
            </div>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-brand-secondary font-medium px-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <div>
              <div className="font-medium text-gray-900 px-2 mb-2">Our Work</div>
              <div className="pl-4 space-y-2">
                <Link
                  href="/case-studies/innovation-engineering-lucho"
                  className="block text-gray-700 hover:text-brand-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Innovation Engineering with Lucho
                </Link>
                <Link
                  href="/case-studies/ai-enablement"
                  className="block text-gray-700 hover:text-brand-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Enterprise AI Infrastructure
                </Link>
                <Link
                  href="/case-studies/routing-optimization"
                  className="block text-gray-700 hover:text-brand-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Routing Optimization
                </Link>
              </div>
            </div>
            <Link
              href="/blog"
              className="block text-gray-700 hover:text-brand-secondary font-medium px-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block px-6 py-2.5 text-white bg-brand-accent hover:bg-brand-accent/90 rounded-lg font-semibold text-center mx-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
