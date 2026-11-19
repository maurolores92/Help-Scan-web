import React, { useEffect, useRef } from 'react';

interface ParticleNode {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
  isCyan: boolean;
}

/**
 * Fondo interactivo tecnológico de nodos y conexiones neuronales (60 FPS).
 * Los puntos flotan suavemente y reaccionan al movimiento del cursor generando
 * desplazamiento físico elástico, iluminación verde/cian y enlaces dinámicos.
 */
export const TechBackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const mouse = {
      x: -9999,
      y: -9999,
      smoothX: -9999,
      smoothY: -9999,
      active: false,
    };

    let nodes: ParticleNode[] = [];

    const initNodes = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Densidad adaptativa según tamaño de pantalla
      const spacing = width < 768 ? 64 : 54;
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;
      const nextNodes: ParticleNode[] = [];

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          // Ligero offset orgánico para aspecto de red neuronal/tecnológica
          const jitterX = ((r * 37 + c * 17) % 15) - 7;
          const jitterY = ((r * 23 + c * 41) % 15) - 7;
          const bx = c * spacing + jitterX;
          const by = r * spacing + jitterY;

          nextNodes.push({
            baseX: bx,
            baseY: by,
            x: bx,
            y: by,
            vx: 0,
            vy: 0,
            radius: ((r + c) % 4 === 0 ? 2.1 : 1.45),
            phase: (r * 0.4 + c * 0.6),
            isCyan: (r + c) % 3 === 0,
          });
        }
      }

      nodes = nextNodes;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
      if (mouse.smoothX < -1000) {
        mouse.smoothX = e.clientX;
        mouse.smoothY = e.clientY;
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    let resizeTimer: number | undefined;
    const handleResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(initNodes, 120);
    };

    initNodes();
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    const interactionRadius = 175;
    const connectDistance = 88;
    let time = 0;

    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      // Suavizado del cursor para transición orgánica
      if (mouse.active) {
        mouse.smoothX += (mouse.x - mouse.smoothX) * 0.16;
        mouse.smoothY += (mouse.y - mouse.smoothY) * 0.16;

        // Halo sutil de escaneo siguiendo el puntero
        const spotlight = ctx.createRadialGradient(
          mouse.smoothX,
          mouse.smoothY,
          0,
          mouse.smoothX,
          mouse.smoothY,
          interactionRadius * 1.25,
        );
        spotlight.addColorStop(0, 'rgba(50, 160, 72, 0.08)');
        spotlight.addColorStop(0.55, 'rgba(2, 132, 199, 0.045)');
        spotlight.addColorStop(1, 'rgba(2, 132, 199, 0)');
        ctx.fillStyle = spotlight;
        ctx.fillRect(0, 0, width, height);
      }

      const activeNearMouse: Array<{ node: ParticleNode; factor: number }> = [];

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Respiración suave autónoma
        const floatX = prefersReducedMotion ? 0 : Math.sin(time * 0.9 + n.phase) * 2.4;
        const floatY = prefersReducedMotion ? 0 : Math.cos(time * 0.8 + n.phase) * 2.4;
        const targetX = n.baseX + floatX;
        const targetY = n.baseY + floatY;

        let proximity = 0;
        if (mouse.active && !prefersReducedMotion) {
          const dx = n.x - mouse.smoothX;
          const dy = n.y - mouse.smoothY;
          const dist = Math.hypot(dx, dy);

          if (dist < interactionRadius && dist > 0.001) {
            proximity = 1 - dist / interactionRadius;
            // Fuerza elástica de desplazamiento al pasar el mouse
            const force = proximity * 2.6;
            n.vx += (dx / dist) * force;
            n.vy += (dy / dist) * force;
          }
        }

        // Retorno elástico a la posición base + amortiguación
        n.vx += (targetX - n.x) * 0.08;
        n.vy += (targetY - n.y) * 0.08;
        n.vx *= 0.82;
        n.vy *= 0.82;

        n.x += n.vx;
        n.y += n.vy;

        if (proximity > 0.05) {
          activeNearMouse.push({ node: n, factor: proximity });
        }

        // Dibujar nodo
        ctx.beginPath();
        const currentRadius = n.radius + proximity * 1.75;
        ctx.arc(n.x, n.y, currentRadius, 0, Math.PI * 2);

        if (proximity > 0.08) {
          ctx.fillStyle = n.isCyan
            ? `rgba(2, 132, 199, ${0.32 + proximity * 0.58})`
            : `rgba(50, 160, 72, ${0.35 + proximity * 0.6})`;
        } else {
          ctx.fillStyle = 'rgba(15, 23, 42, 0.14)';
        }
        ctx.fill();
      }

      // Dibujar conexiones dinámicas entre nodos cercanos al mouse (efecto malla IA)
      if (mouse.active && activeNearMouse.length > 1) {
        ctx.lineWidth = 1;
        for (let i = 0; i < activeNearMouse.length; i++) {
          const a = activeNearMouse[i];

          // Línea sutil hacia el cursor si está muy cerca
          const distCursor = Math.hypot(a.node.x - mouse.smoothX, a.node.y - mouse.smoothY);
          if (distCursor < interactionRadius * 0.68) {
            const alpha = (1 - distCursor / (interactionRadius * 0.68)) * 0.28;
            ctx.beginPath();
            ctx.moveTo(a.node.x, a.node.y);
            ctx.lineTo(mouse.smoothX, mouse.smoothY);
            ctx.strokeStyle = a.node.isCyan
              ? `rgba(2, 132, 199, ${alpha})`
              : `rgba(50, 160, 72, ${alpha})`;
            ctx.stroke();
          }

          for (let j = i + 1; j < activeNearMouse.length; j++) {
            const b = activeNearMouse[j];
            const dist = Math.hypot(a.node.x - b.node.x, a.node.y - b.node.y);
            if (dist < connectDistance) {
              const strength = (1 - dist / connectDistance) * Math.min(a.factor, b.factor);
              ctx.beginPath();
              ctx.moveTo(a.node.x, a.node.y);
              ctx.lineTo(b.node.x, b.node.y);
              ctx.strokeStyle = a.node.isCyan
                ? `rgba(2, 132, 199, ${strength * 0.55})`
                : `rgba(50, 160, 72, ${strength * 0.55})`;
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = window.requestAnimationFrame(render);
    };

    animationFrameId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.clearTimeout(resizeTimer);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};
