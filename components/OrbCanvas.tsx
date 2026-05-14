'use client';
import { useEffect, useRef } from 'react';

export default function OrbCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animId: number;
    let cleanup: (() => void) | undefined;

    async function init() {
      const THREE = await import('three');
      const canvas = canvasRef.current;
      if (!canvas) return;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
      camera.position.z = 2.9;

      function setSize() {
        if (!canvas) return;
        const w = canvas.clientWidth, h = canvas.clientHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mk = (geo: any, col: number, wire: boolean, op: number) =>
        new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: col, wireframe: wire, opacity: op, transparent: true }));

      const outer = mk(new THREE.IcosahedronGeometry(1, 2), 0xb07828, true, 0.2);
      const mid   = mk(new THREE.IcosahedronGeometry(0.7, 3), 0xc49038, true, 0.11);
      const inner = mk(new THREE.SphereGeometry(0.42, 16, 16), 0xd4a040, false, 0.04);
      scene.add(outer, mid, inner);

      const mkRing = (r: number, op: number, rx: number, ry = 0) => {
        const m = new THREE.Mesh(
          new THREE.TorusGeometry(r, 0.003, 2, 90),
          new THREE.MeshBasicMaterial({ color: 0xb07828, opacity: op, transparent: true })
        );
        m.rotation.x = rx; m.rotation.y = ry; return m;
      };
      const r1 = mkRing(1.18, 0.32, Math.PI / 2.4, 0);
      const r2 = mkRing(1.18, 0.16, Math.PI / 2.4, Math.PI / 3);
      const r3 = mkRing(0.85, 0.12, 0, Math.PI / 5);
      scene.add(r1, r2, r3);

      const pts: number[] = [];
      for (let i = 0; i < 200; i++) {
        const th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1), r = 0.88 + Math.random() * 0.4;
        pts.push(r * Math.sin(ph) * Math.cos(th), r * Math.sin(ph) * Math.sin(th), r * Math.cos(ph));
      }
      const ptGeo = new THREE.BufferGeometry();
      ptGeo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
      scene.add(new THREE.Points(ptGeo, new THREE.PointsMaterial({ color: 0xc49038, size: 0.016, transparent: true, opacity: 0.5 })));

      setSize();
      window.addEventListener('resize', setSize);

      let t = 0;
      function animate() {
        animId = requestAnimationFrame(animate);
        t += 0.004;
        outer.rotation.y = t * 0.27; outer.rotation.x = t * 0.1;
        mid.rotation.y = -t * 0.17;  mid.rotation.z = t * 0.08;
        r1.rotation.z = t * 0.13;    r2.rotation.z = -t * 0.07;
        r3.rotation.y = t * 0.11;
        renderer.render(scene, camera);
      }
      animate();

      cleanup = () => {
        cancelAnimationFrame(animId);
        window.removeEventListener('resize', setSize);
        renderer.dispose();
      };
    }

    init();
    return () => cleanup?.();
  }, []);

  return <canvas id="orb-canvas" ref={canvasRef} />;
}
