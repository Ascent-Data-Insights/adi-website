'use client';

import Link from 'next/link';

// Hero Animation Options - uncomment ONE of these to use:

// ORIGINAL OPTIONS:
import { AnimatedGradient } from './hero-animations';        // Subtle gradient shift
import { FloatingParticles } from './hero-animations';          // Floating particles with connected network (CURRENT)
// import { GeometricLines } from './hero-animations';          // Diagonal lines with pulse accents
// import { WavePattern } from './hero-animations';             // Layered animated waves
// import { DotGrid } from './hero-animations';                 // Dot grid with floating accents

// NEW OPTIONS:
import { MorphingBlobs } from './hero-animations';           // Soft morphing blob shapes
import { RisingOrbs } from './hero-animations';              // Bubbles rising from bottom
import { DataStream } from './hero-animations';              // Matrix-style data stream
import { Constellation } from './hero-animations';           // Pulsing stars with constellation lines
import { ParallaxLayers } from './hero-animations';          // Layered parallax movement

// Set which animation to use:
const HeroAnimation = FloatingParticles;

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Animation Background */}
            <HeroAnimation />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
                <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                    We Help You Build What's Next
                </h1>

                <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
                    Ascent Data Insights is a Cincinnati-based consultancy helping startups and mid-size
                    companies turn messy data into insight, navigate AI with clarity, and ship products
                    that matter. You know your business best—we use technology to accelerate it.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-brand-accent hover:bg-brand-accent/90 rounded-lg transition-colors shadow-lg"
                    >
                        Let's Talk
                    </Link>
                    <Link
                        href="#case-studies"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg transition-colors border border-white/30"
                    >
                        See Our Work
                    </Link>
                </div>
            </div>

            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10 pointer-events-none" />
        </section>
    );
}
