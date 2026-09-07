"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// SVG Paintbrush cursor data URI with tip at hotspot (4, 32)
const BRUSH_CURSOR_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M6 30L14 22L11 19L3 27C2 28 2 30 3 31C4 32 6 32 7 31L6 30Z" fill="%2384cc16" stroke="%230f172a" stroke-width="1.5"/><path d="M14 22L27 9C28.5 7.5 30.5 7.5 32 9C33.5 10.5 33.5 12.5 32 14L19 27L14 22Z" fill="%230284c7" stroke="%230f172a" stroke-width="1.5"/><circle cx="5" cy="30" r="2" fill="%2306b6d4"/></svg>`;

interface Point {
  x: number;
  y: number;
  time: number;
}

export default function PaintBrushCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  const isDrawingRef = useRef(false);
  const pointsRef = useRef<Point[]>([]);
  const hueRef = useRef(180); // Starts in cool cyan/blue (180-210) to lime (90-130)

  // Activate paint mode
  const enablePaintMode = useCallback(() => {
    setIsActive(true);
  }, []);

  const disablePaintMode = useCallback(() => {
    setIsActive(false);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, []);

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, []);

  // Listen to custom event or portrait hover
  useEffect(() => {
    const handlePortraitTrigger = () => {
      enablePaintMode();
    };

    window.addEventListener("activate-brush", handlePortraitTrigger);

    // Attach to any element with [data-portrait-trigger]
    const portraitElements = document.querySelectorAll("[data-portrait-trigger]");
    portraitElements.forEach((el) => {
      el.addEventListener("mouseenter", handlePortraitTrigger);
    });

    return () => {
      window.removeEventListener("activate-brush", handlePortraitTrigger);
      portraitElements.forEach((el) => {
        el.removeEventListener("mouseenter", handlePortraitTrigger);
      });
    };
  }, [enablePaintMode]);

  // Handle cursor style on body when active
  useEffect(() => {
    if (isActive) {
      document.body.style.cursor = `url('${BRUSH_CURSOR_SVG}') 4 32, crosshair`;
    } else {
      document.body.style.cursor = "";
    }

    return () => {
      document.body.style.cursor = "";
    };
  }, [isActive]);

  // Handle window resizing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Drawing logic with smooth bezier curves and cool blue-lime gradient
  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handlePointerDown = (e: PointerEvent) => {
      isDrawingRef.current = true;
      pointsRef.current = [{ x: e.clientX, y: e.clientY, time: Date.now() }];
    };

    const handlePointerUp = () => {
      isDrawingRef.current = false;
      pointsRef.current = [];
    };

    const handlePointerMove = (e: PointerEvent) => {
      // Draw either continuously on move or on drag
      const now = Date.now();
      const currentPoint: Point = { x: e.clientX, y: e.clientY, time: now };
      pointsRef.current.push(currentPoint);

      if (pointsRef.current.length < 2) return;

      const p1 = pointsRef.current[pointsRef.current.length - 2];
      const p2 = pointsRef.current[pointsRef.current.length - 1];

      // Calculate speed for responsive stroke width
      const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y);
      const timeDiff = Math.max(p2.time - p1.time, 1);
      const speed = dist / timeDiff;
      const strokeWidth = Math.max(8, Math.min(28, 32 - speed * 4));

      // Oscillate hue between cool blue (200) and zesty lime (95)
      hueRef.current = (hueRef.current + 1.5) % 360;
      // Map oscillation strictly to the Cool Blue (195-215) and Zesty Lime (85-115) range
      const cycle = Math.sin(Date.now() * 0.003); // -1 to 1
      // Interpolate between cool blue (hsl 205, 95%, 48%) and vibrant lime (hsl 90, 85%, 45%)
      const h = cycle > 0 ? 200 + cycle * 15 : 95 + (1 + cycle) * 15;
      const s = 90;
      const l = cycle > 0 ? 46 : 42; // slightly deeper for crisp contrast on light theme

      ctx.save();
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // Subtle translucent watercolor glow
      ctx.shadowColor = `hsla(${h}, ${s}%, ${l}%, 0.4)`;
      ctx.shadowBlur = 10;

      // Create linear gradient along the stroke segment
      const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
      grad.addColorStop(0, `hsla(${h}, ${s}%, ${l}%, 0.75)`);
      grad.addColorStop(1, `hsla(${h > 150 ? 95 : 205}, ${s}%, ${l}%, 0.85)`);

      ctx.strokeStyle = grad;
      ctx.lineWidth = strokeWidth;

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();

      // Subtle decorative watercolor splatter dots
      if (Math.random() > 0.65) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * (strokeWidth + 12);
        const dotX = p2.x + Math.cos(angle) * radius;
        const dotY = p2.y + Math.sin(angle) * radius;
        const dotSize = Math.random() * 3.5 + 1;

        ctx.fillStyle = `hsla(${h}, ${s}%, ${l}%, 0.6)`;
        ctx.beginPath();
        ctx.arc(dotX, dotY, dotSize, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      // Trim points buffer
      if (pointsRef.current.length > 20) {
        pointsRef.current.shift();
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [isActive]);

  return (
    <>
      {/* Canvas Layer */}
      <canvas
        ref={canvasRef}
        className={`paintbrush-canvas ${isActive ? "paintbrush-active" : ""}`}
        aria-hidden="true"
      />

      {/* Floating control pill when active */}
      {isActive && (
        <aside className="paint-control-pill" role="toolbar" aria-label="Paint mode controls">
          <div className="paint-badge-info">
            <span className="paint-dot" aria-hidden="true"></span>
            <span>Paint mode active (Cool Blue & Lime)</span>
          </div>
          <div className="paint-actions">
            <button
              type="button"
              onClick={clearCanvas}
              className="paint-btn paint-btn-subtle"
              title="Clear drawings"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={disablePaintMode}
              className="paint-btn paint-btn-exit"
              title="Exit paint mode"
            >
              Done &times;
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
