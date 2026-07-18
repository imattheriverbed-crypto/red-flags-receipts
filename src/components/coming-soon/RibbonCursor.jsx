import React, { useEffect, useRef } from 'react';

export default function RibbonCursor() {
  const svgRef = useRef(null);
  const pointsRef = useRef([]);
  const rafRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const MAX_POINTS = 24;

    const handleMove = (e) => {
      pointsRef.current.push({ x: e.clientX, y: e.clientY });
      if (pointsRef.current.length > MAX_POINTS) pointsRef.current.shift();
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(draw);
      }
    };

    const draw = () => {
      rafRef.current = null;
      const pts = pointsRef.current;
      if (pts.length < 2 || !svgRef.current) return;

      let d = `M ${pts[0].x} ${pts[0].y}`;
      for (let i = 1; i < pts.length; i++) {
        const mid = { x: (pts[i].x + pts[i - 1].x) / 2, y: (pts[i].y + pts[i - 1].y) / 2 };
        d += ` Q ${pts[i - 1].x} ${pts[i - 1].y} ${mid.x} ${mid.y}`;
      }

      const path = svgRef.current.querySelector('#ribbon-path');
      if (path) path.setAttribute('d', d);
    };

    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return null;















}