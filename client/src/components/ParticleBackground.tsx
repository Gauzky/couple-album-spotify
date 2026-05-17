import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Particle[] = [];

    const createParticle = () => {
      const size = Math.random() * 2 + 0.5;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const vx = (Math.random() - 0.5) * 0.5;
      const vy = (Math.random() - 0.5) * 0.5;
      const maxLife = Math.random() * 100 + 50;

      particles.push({
        x,
        y,
        size,
        opacity: Math.random() * 0.5 + 0.3,
        vx,
        vy,
        life: 0,
        maxLife,
      });
    };

    // Create initial particles
    for (let i = 0; i < 30; i++) {
      createParticle();
    }

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(15, 15, 15, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Update position
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        // Calculate opacity based on life
        const lifeRatio = p.life / p.maxLife;
        const opacity = p.opacity * (1 - lifeRatio);

        // Draw particle
        ctx.fillStyle = `rgba(255, 107, 157, ${opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Remove dead particles
        if (p.life > p.maxLife) {
          particles.splice(i, 1);
        }
      }

      // Create new particles occasionally
      if (Math.random() < 0.3) {
        createParticle();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 1,
      }}
    />
  );
};

