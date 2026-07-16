import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];
    let mouse = { x: -9999, y: -9999 };
    let raf = 0;

    function resize() {
      const canvasEl = canvasRef.current;
      if (!canvasEl) return;
      width = canvasEl.offsetWidth;
      height = canvasEl.offsetHeight;
      canvasEl.width = width * dpr;
      canvasEl.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(70, Math.floor((width * height) / 18000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.6,
      }));
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    function handleMouseLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.x -= (dx / dist) * force * 0.6;
          p.y -= (dy / dist) * force * 0.6;
        }

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = "rgba(168, 85, 247, 0.55)";
        ctx!.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const ddx = p.x - q.x;
          const ddy = p.y - q.y;
          const d = Math.sqrt(ddx * ddx + ddy * ddy);
          if (d < 110) {
            ctx!.beginPath();
            ctx!.moveTo(p.x, p.y);
            ctx!.lineTo(q.x, q.y);
            ctx!.strokeStyle = `rgba(34, 211, 238, ${0.12 * (1 - d / 110)})`;
            ctx!.lineWidth = 1;
            ctx!.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);

    if (!reduceMotion) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseleave", handleMouseLeave);
      raf = requestAnimationFrame(draw);
    } else {
      draw();
      cancelAnimationFrame(raf);
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />;
}
