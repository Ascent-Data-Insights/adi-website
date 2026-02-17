import dynamic from 'next/dynamic';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy load below-the-fold components
const ThreePillars = dynamic(() => import('./components/ThreePillars'));
const Industries = dynamic(() => import('./components/Industries'));
const WhyWorkWithUs = dynamic(() => import('./components/WhyWorkWithUs'));
const Testimonials = dynamic(() => import('./components/Testimonials')); // Ready to show when testimonials are ready
const CaseStudies = dynamic(() => import('./components/CaseStudies'));
const AboutBrief = dynamic(() => import('./components/AboutBrief'));
const ContactCTA = dynamic(() => import('./components/ContactCTA'));
const Footer = dynamic(() => import('./components/Footer'));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ThreePillars />
      <Industries />
      <WhyWorkWithUs />
      <Testimonials />
      <CaseStudies />
      <AboutBrief />
      <ContactCTA />
      <Footer />
    </main>
  );
}
