'use client';

export default function WavePattern() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-brand-primary">
      {/* Layered waves */}
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            className="animate-wave-1"
            fill="#4785BF"
            fillOpacity="0.3"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            className="animate-wave-2"
            fill="#4785BF"
            fillOpacity="0.2"
            d="M0,192L48,197.3C96,203,192,213,288,202.7C384,192,480,160,576,170.7C672,181,768,235,864,234.7C960,235,1056,181,1152,181.3C1248,181,1344,235,1392,261.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            className="animate-wave-3"
            fill="#FB8500"
            fillOpacity="0.15"
            d="M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,165.3C672,171,768,213,864,213.3C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes wave-1 {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(-25px) translateY(-10px);
          }
        }
        @keyframes wave-2 {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(25px) translateY(-15px);
          }
        }
        @keyframes wave-3 {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(-20px) translateY(-8px);
          }
        }
        .animate-wave-1 {
          animation: wave-1 10s ease-in-out infinite;
        }
        .animate-wave-2 {
          animation: wave-2 12s ease-in-out infinite;
        }
        .animate-wave-3 {
          animation: wave-3 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
