'use client';

export default function GeometricLines() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-brand-primary to-brand-secondary">
      {/* Diagonal lines */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-white animate-slide-right"
            style={{
              top: `${i * 5}%`,
              left: '-100%',
              width: '200%',
              transform: `rotate(-15deg)`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${15 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Accent shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-brand-accent/10 animate-pulse-slow" />
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-brand-secondary/10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <style jsx>{`
        @keyframes slide-right {
          0% {
            transform: translateX(-50%) rotate(-15deg);
          }
          100% {
            transform: translateX(0%) rotate(-15deg);
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.2;
          }
        }
        .animate-slide-right {
          animation: slide-right 15s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
