'use client';

export default function RisingOrbs() {
  const orbs = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    delay: i * 1.5,
    left: Math.random() * 100,
    size: Math.random() * 40 + 20,
    duration: Math.random() * 5 + 15,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-brand-primary to-brand-secondary">
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute -bottom-20 animate-rise"
          style={{
            left: `${orb.left}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            animationDelay: `${orb.delay}s`,
            animationDuration: `${orb.duration}s`,
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-white/20 to-brand-accent/20 backdrop-blur-sm" />
        </div>
      ))}

      <style jsx>{`
        @keyframes rise {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh) scale(0.5);
            opacity: 0;
          }
        }
        .animate-rise {
          animation: rise 20s ease-in infinite;
        }
      `}</style>
    </div>
  );
}
