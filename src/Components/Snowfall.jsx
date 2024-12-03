import React, { useEffect, useRef } from 'react';

const Snowfall = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const snowflakes = [];
    const maxSnowflakes = 120;

    class Snowflake {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 2; // Snowflake size
        this.speedY = Math.random() * 1.5 + 1; // Falling speed
        this.speedX = Math.random() * 1.2 - 0.6; // Horizontal drift
        this.opacity = Math.random() * 0.4 + 0.6; // Semi-transparent
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;

        if (this.y > canvas.height || this.x > canvas.width || this.x < 0) {
          this.reset();
          this.y = 0; // Reset snowflake to the top
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);

        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize snowflakes
    for (let i = 0; i < maxSnowflakes; i++) {
      snowflakes.push(new Snowflake());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      snowflakes.forEach((flake) => {
        flake.update();
        flake.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const resizeHandler = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-10 w-full h-full pointer-events-none" />;
};

export default Snowfall;
