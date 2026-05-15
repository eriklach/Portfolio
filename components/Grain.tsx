'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Grain() {
  const pathname = usePathname();

  // Grain canvas + scanline — mount once, never re-run
  useEffect(() => {
    const cv = document.getElementById('grain') as HTMLCanvasElement;
    const cx = cv.getContext('2d')!;
    let f = 0;
    let animId: number;

    function resize() {
      cv.width = window.innerWidth;
      cv.height = window.innerHeight;
    }
    function draw() {
      const w = cv.width, h = cv.height;
      const img = cx.createImageData(w, h);
      const d = img.data;
      for (let i = 0; i < d.length; i += 4) {
        const v = (Math.random() * 190) | 0;
        d[i]   = Math.min(255, (v + 28) | 0);
        d[i+1] = Math.min(255, (v + 12) | 0);
        d[i+2] = (v * 0.55) | 0;
        d[i+3] = 15 + ((Math.random() * 10) | 0);
      }
      cx.putImageData(img, 0, 0);
    }
    function loop() { if (++f % 3 === 0) draw(); animId = requestAnimationFrame(loop); }
    resize();
    window.addEventListener('resize', resize);
    loop();

    const sl = document.getElementById('scanline') as HTMLElement;
    function sweep() {
      sl.style.transition = 'none';
      sl.style.top = '0px';
      sl.style.opacity = '1';
      const h = document.body.scrollHeight;
      requestAnimationFrame(() => {
        sl.style.transition = `top ${h / 420}s linear, opacity .3s`;
        sl.style.top = h + 'px';
        setTimeout(() => { sl.style.opacity = '0'; }, (h / 420) * 1000 - 300);
      });
    }
    const t1 = setTimeout(sweep, 2000);
    const iv = setInterval(sweep, 9000);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      clearTimeout(t1);
      clearInterval(iv);
    };
  }, []);

  // Scroll reveal — re-runs on every route change so new page elements are observed
  useEffect(() => {
    const revEls = Array.from(document.querySelectorAll<Element>('.rev'));

    // Synchronously mark already-visible elements as .in BEFORE enabling the hide,
    // so in-viewport content is never invisible regardless of JS timing.
    revEls.forEach(el => {
      const { top, bottom } = el.getBoundingClientRect();
      if (top < window.innerHeight && bottom > 0) el.classList.add('in');
    });
    document.body.classList.add('js-ready');

    // IntersectionObserver handles below-fold elements as user scrolls
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.07 });

    revEls.forEach(el => { if (!el.classList.contains('in')) io.observe(el); });

    return () => {
      io.disconnect();
      // Reset before next route renders so it starts fresh
      document.body.classList.remove('js-ready');
      document.querySelectorAll('.rev').forEach(el => el.classList.remove('in'));
    };
  }, [pathname]);

  return null;
}
