'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Ascent Data Insights" width={180} height={60} className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/services/data-modernization"
              className="text-gray-700 hover:text-brand-secondary font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-brand-secondary font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="#case-studies"
              className="text-gray-700 hover:text-brand-secondary font-medium transition-colors"
            >
              Our Work
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
            <Link
              href="/services/data-modernization"
              className="block text-gray-700 hover:text-brand-secondary font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-brand-secondary font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#case-studies"
              className="block text-gray-700 hover:text-brand-secondary font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Work
            </Link>
            <Link
              href="/contact"
              className="block px-6 py-2.5 text-white bg-brand-accent hover:bg-brand-accent/90 rounded-lg font-semibold text-center"
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
