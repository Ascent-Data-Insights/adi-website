'use client';

import { useEffect, useRef } from 'react';

export default function ClimbingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Define THREE mountain paths (3 peaks)
    const mountainPaths = [
      // Mountain 1 - Left peak
      [
        { x: 0, y: canvas.height },
        { x: canvas.width * 0.08, y: canvas.height * 0.75 },
        { x: canvas.width * 0.15, y: canvas.height * 0.55 },
        { x: canvas.width * 0.2, y: canvas.height * 0.35 },
        { x: canvas.width * 0.25, y: canvas.height * 0.5 },
        { x: canvas.width * 0.3, y: canvas.height * 0.65 },
      ],
      // Mountain 2 - Center peak (tallest)
      [
        { x: canvas.width * 0.35, y: canvas.height },
        { x: canvas.width * 0.4, y: canvas.height * 0.65 },
        { x: canvas.width * 0.45, y: canvas.height * 0.4 },
        { x: canvas.width * 0.5, y: canvas.height * 0.2 },
        { x: canvas.width * 0.55, y: canvas.height * 0.4 },
        { x: canvas.width * 0.6, y: canvas.height * 0.6 },
        { x: canvas.width * 0.65, y: canvas.height * 0.75 },
      ],
      // Mountain 3 - Right peak
      [
        { x: canvas.width * 0.7, y: canvas.height },
        { x: canvas.width * 0.75, y: canvas.height * 0.7 },
        { x: canvas.width * 0.8, y: canvas.height * 0.5 },
        { x: canvas.width * 0.85, y: canvas.height * 0.3 },
        { x: canvas.width * 0.9, y: canvas.height * 0.55 },
        { x: canvas.width * 0.95, y: canvas.height * 0.7 },
        { x: canvas.width, y: canvas.height * 0.8 },
      ],
    ];

    const particles: Array<{
      pathIndex: number;
      progress: number;
      speed: number;
      size: number;
      color: string;
      offset: number;
    }> = [];

    const colors = ['#FFFFFF', '#FB8500', '#4785BF'];

    // Create particles for each mountain
    mountainPaths.forEach((_, pathIndex) => {
      const particlesPerPath = 12;
      for (let i = 0; i < particlesPerPath; i++) {
        particles.push({
          pathIndex,
          progress: Math.random(),
          speed: 0.0003 + Math.random() * 0.0004,
          size: Math.random() * 3 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          offset: (Math.random() - 0.5) * 20,
        });
      }
    });

    function getPointOnPath(pathIndex: number, progress: number) {
      const path = mountainPaths[pathIndex];
      const totalSegments = path.length - 1;
      const segment = Math.floor(progress * totalSegments);
      const segmentProgress = (progress * totalSegments) % 1;

      if (segment >= totalSegments) {
        return path[path.length - 1];
      }

      const start = path[segment];
      const end = path[segment + 1];

      return {
        x: start.x + (end.x - start.x) * segmentProgress,
        y: start.y + (end.y - start.y) * segmentProgress,
      };
    }

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw all mountain paths
      mountainPaths.forEach((path) => {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        path.forEach((point, i) => {
          if (i === 0) {
            ctx.moveTo(point.x, point.y);
          } else {
            ctx.lineTo(point.x, point.y);
          }
        });
        ctx.stroke();
      });

      // Update and draw particles
      particles.forEach((particle) => {
        particle.progress += particle.speed;
        if (particle.progress > 1) {
          particle.progress = 0;
        }

        const pos = getPointOnPath(particle.pathIndex, particle.progress);

        ctx.beginPath();
        ctx.arc(pos.x + particle.offset, pos.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + 'CC';
        ctx.fill();

        // Glow effect
        const gradient = ctx.createRadialGradient(
          pos.x + particle.offset,
          pos.y,
          0,
          pos.x + particle.offset,
          pos.y,
          particle.size * 3
        );
        gradient.addColorStop(0, particle.color + '40');
        gradient.addColorStop(1, particle.color + '00');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(pos.x + particle.offset, pos.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-primary">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
