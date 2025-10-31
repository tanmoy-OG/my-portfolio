"use client";

import { useEffect, useRef } from "react";

type TrailPoint = {
  x: number;
  y: number;
  dx: number;
  dy: number;
};

export default function CursorTrail() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let mouseMoved = false;
    const pointer = {
      x: 0.5 * container.clientWidth,
      y: 0.5 * container.clientHeight,
    };

    const params = {
      pointsNumber: 40,
      widthFactor: 0.3,
      baseSpring: 0.4,
      baseFriction: 0.5,
      unifiedHeadLength: 8, // Number of points that stay unified at the start
    };

    // Define multiple stroke layers with different colors and path variations
    const strokeLayers = [
      { color: "#5eead4", widthScale: 0.5, alpha: 0.9, springOffset: 0.0, frictionOffset: 0.0, positionOffset: { x: 0, y: 0 } },      // sky blue - main
      { color: "#0ea5e9", widthScale: 0.4, alpha: 0.7, springOffset: 0.02, frictionOffset: 0.01, positionOffset: { x: -2, y: -1 } }, // cyan - slightly different
      { color: "#5eead4", widthScale: 0.3, alpha: 0.6, springOffset: -0.01, frictionOffset: 0.02, positionOffset: { x: 2, y: 1 } },   // violet
      { color: "#0ea5e9", widthScale: 0.2, alpha: 0.55, springOffset: 0.03, frictionOffset: -0.01, positionOffset: { x: -1, y: 2 } }, // pink
      { color: "#5eead4", widthScale: 0.1, alpha: 0.5, springOffset: -0.02, frictionOffset: 0.03, positionOffset: { x: 1, y: -2 } },  // rose
    ];

    // Create a trail array for each stroke layer
    const trails: TrailPoint[][] = strokeLayers.map(() =>
      new Array(params.pointsNumber)
        .fill(0)
        .map(() => ({ x: pointer.x, y: pointer.y, dx: 0, dy: 0 }))
    );

    const getLocalCoords = (pageX: number, pageY: number) => {
      const rect = container.getBoundingClientRect();
      const x = pageX - (rect.left + window.scrollX);
      const y = pageY - (rect.top + window.scrollY);
      return { x, y };
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseMoved = true;
      const { x, y } = getLocalCoords(e.pageX, e.pageY);
      pointer.x = x;
      pointer.y = y;
    };

    const onClick = (e: MouseEvent) => {
      const { x, y } = getLocalCoords(e.pageX, e.pageY);
      pointer.x = x;
      pointer.y = y;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.targetTouches.length === 0) return;
      mouseMoved = true;
      const t = e.targetTouches[0];
      if (!t) return;
      const { x, y } = getLocalCoords(t.pageX, t.pageY);
      pointer.x = x;
      pointer.y = y;
    };

    const setupCanvas = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      const width = container.clientWidth;
      const height = container.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setupCanvas();

    let rafId = 0;
    const update = (t: number) => {
      // intro motion if user hasn't moved
      if (!mouseMoved) {
        pointer.x = (0.5 + 0.3 * Math.cos(0.002 * t) * Math.sin(0.005 * t)) * container.clientWidth;
        pointer.y = (0.5 + 0.2 * Math.cos(0.005 * t) + 0.1 * Math.cos(0.01 * t)) * container.clientHeight;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // Step 1: Calculate base trail (first layer) - this defines the unified head
      const baseTrail = trails[0]!;
      const baseLayer = strokeLayers[0]!;
      const baseSpring = params.baseSpring + baseLayer.springOffset;
      const baseFriction = params.baseFriction + baseLayer.frictionOffset;

      // Update base trail - all layers will follow this for the unified head
      baseTrail.forEach((p, i) => {
        if (i === 0) {
          // First point always follows cursor directly (no offset)
          const springFactor = 0.4 * baseSpring;
          p.dx += (pointer.x - p.x) * springFactor;
          p.dy += (pointer.y - p.y) * springFactor;
        } else {
          // Subsequent points follow the previous point
          const prev = baseTrail[i - 1]!;
          p.dx += (prev.x - p.x) * baseSpring;
          p.dy += (prev.y - p.y) * baseSpring;
        }
        p.dx *= baseFriction;
        p.dy *= baseFriction;
        p.x += p.dx;
        p.y += p.dy;
      });

      // Step 2: Process other layers - unified head, then diverge
      strokeLayers.forEach((layer, layerIdx) => {
        if (layerIdx === 0) return; // Skip base layer, already processed

        const trail = trails[layerIdx]!;
        const spring = params.baseSpring + layer.springOffset;
        const friction = params.baseFriction + layer.frictionOffset;

        // Physics for trail points
        trail.forEach((p, i) => {
          if (i === 0) {
            // First point always follows cursor directly (unified)
            const springFactor = 0.4 * spring;
            p.dx += (pointer.x - p.x) * springFactor;
            p.dy += (pointer.y - p.y) * springFactor;
          } else if (i < params.unifiedHeadLength) {
            // Unified head section - follow the base trail
            const basePoint = baseTrail[i]!;
            p.dx += (basePoint.x - p.x) * spring;
            p.dy += (basePoint.y - p.y) * spring;
          } else {
            // Diverging tail section - use offset position and layer-specific physics
            const prev = trail[i - 1]!;
            // Gradually apply position offset based on distance from unified head
            const divergenceProgress = (i - params.unifiedHeadLength) / (params.pointsNumber - params.unifiedHeadLength);
            const offsetX = layer.positionOffset.x * divergenceProgress;
            const offsetY = layer.positionOffset.y * divergenceProgress;

            const targetX = prev.x + offsetX;
            const targetY = prev.y + offsetY;

            p.dx += (targetX - p.x) * spring;
            p.dy += (targetY - p.y) * spring;
          }
          p.dx *= friction;
          p.dy *= friction;
          p.x += p.dx;
          p.y += p.dy;
        });

        // Draw the stroke with layer-specific styling
        ctx.strokeStyle = layer.color;
        ctx.globalAlpha = layer.alpha;

        if (trail.length >= 2) {
          ctx.beginPath();
          ctx.moveTo(trail[0]!.x, trail[0]!.y);
          for (let i = 1; i < trail.length - 1; i++) {
            const curr = trail[i]!;
            const next = trail[i + 1]!;
            const xc = 0.5 * (curr.x + next.x);
            const yc = 0.5 * (curr.y + next.y);
            ctx.quadraticCurveTo(curr.x, curr.y, xc, yc);
            ctx.lineWidth = layer.widthScale * params.widthFactor * (params.pointsNumber - i);
            ctx.stroke();
          }
          const last = trail[trail.length - 1]!;
          ctx.lineTo(last.x, last.y);
          ctx.stroke();
        }
      });

      // Draw base layer (first layer)
      const baseLayerStyle = strokeLayers[0]!;
      ctx.strokeStyle = baseLayerStyle.color;
      ctx.globalAlpha = baseLayerStyle.alpha;

      if (baseTrail.length >= 2) {
        ctx.beginPath();
        ctx.moveTo(baseTrail[0]!.x, baseTrail[0]!.y);
        for (let i = 1; i < baseTrail.length - 1; i++) {
          const curr = baseTrail[i]!;
          const next = baseTrail[i + 1]!;
          const xc = 0.5 * (curr.x + next.x);
          const yc = 0.5 * (curr.y + next.y);
          ctx.quadraticCurveTo(curr.x, curr.y, xc, yc);
          ctx.lineWidth = baseLayerStyle.widthScale * params.widthFactor * (params.pointsNumber - i);
          ctx.stroke();
        }
        const last = baseTrail[baseTrail.length - 1]!;
        ctx.lineTo(last.x, last.y);
        ctx.stroke();
      }

      // Reset alpha
      ctx.globalAlpha = 1.0;

      rafId = window.requestAnimationFrame(update);
    };

    rafId = window.requestAnimationFrame(update);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("click", onClick, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    const onResize = () => {
      setupCanvas();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("mousemove", onMouseMove as any);
      window.removeEventListener("click", onClick as any);
      window.removeEventListener("touchmove", onTouchMove as any);
      window.removeEventListener("resize", onResize);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none select-none z-0">
      <canvas ref={canvasRef} className="w-full h-full -z-10 opacity-50" />
    </div>
  );
}


