'use client';

import { useEffect, useRef } from 'react';

export default function FloatingParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        // ========== TWEAKABLE PARAMETERS ==========
        const PARTICLE_COUNT = 40;              // Number of particles (try: 30-100)
        const PARTICLE_SPEED = 0.5;             // Speed multiplier (try: 0.3-1.0)
        const PARTICLE_SIZE_MIN = 2;            // Min particle size in px (try: 1-3)
        const PARTICLE_SIZE_MAX = 6;            // Max particle size in px (try: 4-8)
        const PARTICLE_OPACITY = 'CC';          // Particle opacity in hex (try: '99', 'CC', 'FF')

        const CONNECTION_DISTANCE = 150;        // Max distance for connections (try: 100-200)
        const CONNECTION_OPACITY = 0.4;         // Connection line opacity (try: 0.2-0.6)
        const CONNECTION_WIDTH = 1.5;           // Connection line width (try: 1-3)

        const PARTICLE_COLORS = [
            '#FFFFFF',  // White
            '#FB8500',  // Orange accent
            '#4785BF',  // Light blue
        ];
        // ==========================================

        const particles: Array<{
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;
        }> = [];

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * PARTICLE_SPEED,
                vy: (Math.random() - 0.5) * PARTICLE_SPEED,
                size: Math.random() * (PARTICLE_SIZE_MAX - PARTICLE_SIZE_MIN) + PARTICLE_SIZE_MIN,
                color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
            });
        }

        function animate() {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = particle.color + PARTICLE_OPACITY;
                ctx.fill();
            });

            // Draw connections
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach((p2) => {
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < CONNECTION_DISTANCE) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${CONNECTION_OPACITY * (1 - distance / CONNECTION_DISTANCE)})`;
                        ctx.lineWidth = CONNECTION_WIDTH;
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
