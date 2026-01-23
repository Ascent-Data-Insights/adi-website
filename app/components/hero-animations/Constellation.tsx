'use client';

import { useEffect, useRef } from 'react';

export default function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const stars: Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      pulseSpeed: number;
      pulsePhase: number;
    }> = [];

    // Create stars
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    let frame = 0;

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      frame++;

      // Draw stars
      stars.forEach((star) => {
        const pulse = Math.sin(frame * star.pulseSpeed + star.pulsePhase);
        const opacity = star.opacity + pulse * 0.3;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();

        // Add a subtle glow
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3);
        gradient.addColorStop(0, `rgba(251, 133, 0, ${opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(251, 133, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw constellation lines
      stars.forEach((star1, i) => {
        stars.slice(i + 1).forEach((star2) => {
          const dx = star1.x - star2.x;
          const dy = star1.y - star2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(star1.x, star1.y);
            ctx.lineTo(star2.x, star2.y);
            ctx.strokeStyle = `rgba(71, 133, 191, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
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
    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-secondary">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
