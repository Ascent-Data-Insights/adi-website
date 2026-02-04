'use client';

export default function AuroraMountains() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-primary">
      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 70}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Aurora Borealis Waves */}
      <div className="absolute top-0 left-0 right-0 h-2/3">
        {/* Aurora Layer 1 */}
        <div
          className="absolute inset-0 animate-aurora-1"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(71, 133, 191, 0.3) 25%, rgba(71, 133, 191, 0.5) 50%, rgba(71, 133, 191, 0.3) 75%, transparent 100%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Aurora Layer 2 */}
        <div
          className="absolute inset-0 animate-aurora-2"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(251, 133, 0, 0.2) 30%, rgba(251, 133, 0, 0.4) 60%, rgba(251, 133, 0, 0.2) 90%, transparent 100%)',
            filter: 'blur(50px)',
          }}
        />

        {/* Aurora Layer 3 */}
        <div
          className="absolute inset-0 animate-aurora-3"
          style={{
            background:
              'linear-gradient(90deg, transparent 10%, rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 60%, transparent 90%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Mountain Silhouettes */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Back Mountain */}
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 400" preserveAspectRatio="none">
          <path
            fill="rgba(3, 52, 78, 0.4)"
            d="M0,300 L360,200 L720,180 L1080,220 L1440,190 L1440,400 L0,400 Z"
          />
        </svg>

        {/* Middle Mountain */}
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 350" preserveAspectRatio="none">
          <path
            fill="rgba(3, 52, 78, 0.6)"
            d="M0,280 L240,160 L480,140 L720,120 L960,150 L1200,130 L1440,170 L1440,350 L0,350 Z"
          />
          {/* Snow cap */}
          <path fill="rgba(255, 255, 255, 0.6)" d="M700,120 L720,120 L710,135 Z" />
        </svg>

        {/* Front Mountain */}
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 300" preserveAspectRatio="none">
          <path
            fill="rgba(3, 52, 78, 0.8)"
            d="M0,250 L200,150 L400,100 L600,130 L800,80 L1000,120 L1200,110 L1440,160 L1440,300 L0,300 Z"
          />
          {/* Snow caps */}
          <path
            fill="rgba(255, 255, 255, 0.9)"
            d="M380,100 L400,100 L390,115 Z M780,80 L800,80 L790,95 Z M1180,110 L1200,110 L1190,125 Z"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes aurora-1 {
          0%, 100% {
            transform: translateX(-50%) translateY(0) scaleX(1);
            opacity: 0.3;
          }
          50% {
            transform: translateX(-30%) translateY(-20px) scaleX(1.2);
            opacity: 0.5;
          }
        }
        @keyframes aurora-2 {
          0%, 100% {
            transform: translateX(-30%) translateY(-10px) scaleX(1.1);
            opacity: 0.2;
          }
          50% {
            transform: translateX(-50%) translateY(0) scaleX(1);
            opacity: 0.4;
          }
        }
        @keyframes aurora-3 {
          0%, 100% {
            transform: translateX(-40%) translateY(-5px);
            opacity: 0.15;
          }
          50% {
            transform: translateX(-60%) translateY(-15px);
            opacity: 0.25;
          }
        }
        .animate-aurora-1 {
          animation: aurora-1 15s ease-in-out infinite;
        }
        .animate-aurora-2 {
          animation: aurora-2 12s ease-in-out infinite;
        }
        .animate-aurora-3 {
          animation: aurora-3 18s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
