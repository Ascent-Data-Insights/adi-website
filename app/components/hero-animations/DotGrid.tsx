'use client';

export default function DotGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary" />

      {/* Animated dot grid pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      >
        <div className="absolute inset-0 animate-drift" />
      </div>

      {/* Floating accent circles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-brand-accent animate-float-slow" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-brand-accent/60 animate-float-medium" />
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-white/40 animate-float-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-4 h-4 rounded-full bg-white/20 animate-float-medium" style={{ animationDelay: '2s' }} />

      <style jsx>{`
        @keyframes drift {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(25px) translateY(25px);
          }
        }
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-medium {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-30px) translateX(10px);
          }
        }
        .animate-drift {
          animation: drift 20s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
