'use client';

import { useEffect, useRef } from 'react';

export default function MountainPeaks() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Define three mountain peaks
    const peaks = [
      { x: canvas.width * 0.25, y: canvas.height * 0.4, radius: 180 },
      { x: canvas.width * 0.5, y: canvas.height * 0.25, radius: 220 },
      { x: canvas.width * 0.75, y: canvas.height * 0.35, radius: 190 },
    ];

    const particles: Array<{
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      size: number;
      color: string;
      peakIndex: number;
      angle: number;
      distance: number;
    }> = [];

    const colors = ['#FFFFFF', '#FB8500', '#4785BF'];

    // Create particles around each peak
    peaks.forEach((peak, peakIndex) => {
      const particlesPerPeak = 40;
      for (let i = 0; i < particlesPerPeak; i++) {
        const angle = (Math.PI * 2 * i) / particlesPerPeak + Math.random() * 0.2;
        const distance = Math.random() * peak.radius;
        const x = peak.x + Math.cos(angle) * distance;
        const y = peak.y + Math.sin(angle) * distance;

        particles.push({
          x,
          y,
          targetX: x,
          targetY: y,
          size: Math.random() * 3 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          peakIndex,
          angle,
          distance,
        });
      }
    });

    let frame = 0;

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      particles.forEach((particle) => {
        const peak = peaks[particle.peakIndex];

        // Gently orbit and pulse
        const newAngle = particle.angle + frame * 0.0005;
        const pulse = Math.sin(frame * 0.01 + particle.angle) * 10;
        const newDistance = particle.distance + pulse;

        particle.x = peak.x + Math.cos(newAngle) * newDistance;
        particle.y = peak.y + Math.sin(newAngle) * newDistance;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + 'DD';
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
        gradient.addColorStop(0, particle.color + '30');
        gradient.addColorStop(1, particle.color + '00');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections between nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          if (p1.peakIndex === p2.peakIndex) {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 60) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance / 60)})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });
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
      {/* Particles behind mountains */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Mountain Silhouettes - Full width at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2/3 pointer-events-none">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          {/* Left Mountain - smooth curves */}
          <path
            fill="rgba(3, 52, 78, 0.7)"
            d="M0,600 Q100,500 200,400 Q280,300 360,250 Q420,300 480,350 Q540,450 600,600 Z"
          />

          {/* Center Mountain (tallest) - smooth curves */}
          <path
            fill="rgba(3, 52, 78, 0.8)"
            d="M400,600 Q500,475 600,350 Q660,250 720,150 Q780,250 840,350 Q940,475 1040,600 Z"
          />

          {/* Right Mountain - smooth curves */}
          <path
            fill="rgba(3, 52, 78, 0.7)"
            d="M840,600 Q920,490 1000,380 Q1040,330 1080,280 Q1140,340 1200,400 Q1320,500 1440,600 Z"
          />
        </svg>
      </div>
    </div>
  );
}
