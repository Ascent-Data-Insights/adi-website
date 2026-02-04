import Header from './components/Header';
import Hero from './components/Hero';
import ThreePillars from './components/ThreePillars';
import Industries from './components/Industries';
import WhyWorkWithUs from './components/WhyWorkWithUs';
import Testimonials from './components/Testimonials';
import CaseStudies from './components/CaseStudies';
import AboutBrief from './components/AboutBrief';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

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
