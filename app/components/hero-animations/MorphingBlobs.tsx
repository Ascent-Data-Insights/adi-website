'use client';

export default function MorphingBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-brand-primary to-brand-secondary">
      {/* Blob 1 */}
      <div className="absolute top-0 -left-20 w-96 h-96 animate-blob">
        <div className="w-full h-full bg-brand-accent/20 rounded-full blur-3xl" />
      </div>

      {/* Blob 2 */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 animate-blob animation-delay-2000">
        <div className="w-full h-full bg-white/10 rounded-full blur-3xl" />
      </div>

      {/* Blob 3 */}
      <div className="absolute -bottom-20 left-1/3 w-96 h-96 animate-blob animation-delay-4000">
        <div className="w-full h-full bg-brand-secondary/30 rounded-full blur-3xl" />
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 15s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
