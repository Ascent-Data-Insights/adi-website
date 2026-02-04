'use client';

import { useEffect, useRef } from 'react';

export default function AscentTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      color: string;
      trail: Array<{ x: number; y: number; alpha: number }>;
    }> = [];

    const colors = ['#FFFFFF', '#FB8500', '#4785BF'];

    // Create particles that rise from bottom
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 200,
        size: Math.random() * 3 + 2,
        speed: 0.5 + Math.random() * 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        trail: [],
      });
    }

    function animate() {
      if (!ctx || !canvas) return;

      // Fade effect for trails
      ctx.fillStyle = 'rgba(3, 52, 78, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Move particle up
        particle.y -= particle.speed;

        // Reset if off screen
        if (particle.y < -50) {
          particle.y = canvas.height + 50;
          particle.x = Math.random() * canvas.width;
          particle.trail = [];
        }

        // Add to trail
        particle.trail.push({
          x: particle.x,
          y: particle.y,
          alpha: 1,
        });

        // Limit trail length
        if (particle.trail.length > 20) {
          particle.trail.shift();
        }

        // Draw trail
        particle.trail.forEach((point, i) => {
          const alpha = (i / particle.trail.length) * 0.5;
          ctx.beginPath();
          ctx.arc(point.x, point.y, particle.size * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = particle.color + Math.floor(alpha * 255).toString(16).padStart(2, '0');
          ctx.fill();
        });

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + 'EE';
        ctx.fill();

        // Glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 4
        );
        gradient.addColorStop(0, particle.color + '60');
        gradient.addColorStop(1, particle.color + '00');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
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
      {/* Mountain silhouette at bottom */}
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        <path
          fill="rgba(3, 52, 78, 0.5)"
          d="M0,150 L240,80 L480,60 L720,40 L960,70 L1200,50 L1440,90 L1440,200 L0,200 Z"
        />
        {/* Snow cap on peak */}
        <path fill="rgba(255, 255, 255, 0.7)" d="M700,40 L720,40 L710,55 Z" />
      </svg>

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
