'use client';

export default function AnimatedGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary animate-gradient-shift" />
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1) rotate(5deg);
            opacity: 0.9;
          }
        }
        .animate-gradient-shift {
          animation: gradient-shift 15s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
