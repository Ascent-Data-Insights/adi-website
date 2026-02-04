'use client';

export default function MountainSilhouette() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-primary">
      {/* Stars in the sky */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 60}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Mountain Layer 1 - Back */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full" viewBox="0 0 1440 400" preserveAspectRatio="none">
          <path
            className="animate-drift-slow"
            fill="rgba(71, 133, 191, 0.3)"
            d="M0,200 L240,100 L480,150 L720,80 L960,120 L1200,90 L1440,140 L1440,400 L0,400 Z"
          />
        </svg>
      </div>

      {/* Mountain Layer 2 - Middle */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full" viewBox="0 0 1440 350" preserveAspectRatio="none">
          <path
            className="animate-drift-medium"
            fill="rgba(71, 133, 191, 0.5)"
            d="M0,250 L360,120 L720,80 L1080,140 L1440,100 L1440,350 L0,350 Z"
          />
        </svg>
      </div>

      {/* Mountain Layer 3 - Front */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full" viewBox="0 0 1440 300" preserveAspectRatio="none">
          <path
            fill="rgba(3, 52, 78, 0.7)"
            d="M0,200 L200,120 L400,80 L600,140 L800,60 L1000,110 L1200,90 L1440,150 L1440,300 L0,300 Z"
          />
          {/* Snow caps */}
          <path
            fill="rgba(255, 255, 255, 0.9)"
            d="M380,80 L400,80 L390,95 Z M780,60 L800,60 L790,75 Z M1180,90 L1200,90 L1190,105 Z"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes drift-slow {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-10px); }
        }
        @keyframes drift-medium {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        .animate-drift-slow {
          animation: drift-slow 20s ease-in-out infinite;
        }
        .animate-drift-medium {
          animation: drift-medium 15s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
