'use client';

export default function ParallaxLayers() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-brand-primary">
      {/* Layer 1 - Slowest */}
      <div className="absolute inset-0 animate-drift-slow">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-brand-secondary/20 blur-3xl" />
          <div className="absolute bottom-32 right-20 w-80 h-80 rounded-full bg-brand-secondary/15 blur-3xl" />
        </div>
      </div>

      {/* Layer 2 - Medium */}
      <div className="absolute inset-0 animate-drift-medium">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-40 right-32 w-48 h-48 rounded-full bg-brand-accent/15 blur-2xl" />
          <div className="absolute bottom-20 left-1/4 w-56 h-56 rounded-full bg-white/10 blur-2xl" />
        </div>
      </div>

      {/* Layer 3 - Fastest */}
      <div className="absolute inset-0 animate-drift-fast">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/3 left-1/3 w-40 h-40 rounded-full bg-brand-accent/20 blur-xl" />
          <div className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-white/15 blur-xl" />
        </div>
      </div>

      {/* Subtle geometric accents */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse-slow" />
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-brand-accent rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-white rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <style jsx>{`
        @keyframes drift-slow {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-20px, 30px);
          }
        }
        @keyframes drift-medium {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, -20px);
          }
        }
        @keyframes drift-fast {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-40px, -30px);
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }
        .animate-drift-slow {
          animation: drift-slow 25s ease-in-out infinite;
        }
        .animate-drift-medium {
          animation: drift-medium 18s ease-in-out infinite;
        }
        .animate-drift-fast {
          animation: drift-fast 12s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
