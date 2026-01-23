'use client';

import { useEffect, useRef } from 'react';

export default function DataStream() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = Array(columns).fill(1);

    const chars = '01';

    function draw() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(3, 52, 78, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = '15px monospace';

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];

        // Randomly use different colors for variation
        const colors = ['rgba(71, 133, 191, 0.5)', 'rgba(251, 133, 0, 0.5)', 'rgba(255, 255, 255, 0.3)'];
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];

        ctx.fillText(char, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-secondary">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
