import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and tagline */}
          <div className="md:col-span-2">
            <Image src="/logo.png" alt="Ascent Data Insights" width={180} height={60} className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-white/80 max-w-md">
              Cincinnati-based data and AI consultancy helping businesses build what matters.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/data-modernization"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Data Modernization
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-strategy"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  AI Strategy
                </Link>
              </li>
              <li>
                <Link
                  href="/services/innovation-engineering"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Innovation Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#case-studies" className="text-white/80 hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Ascent Data Insights. All rights reserved.
          </p>
          <p className="text-white/60 text-sm">Cincinnati, OH</p>
        </div>
      </div>
    </footer>
  );
}
