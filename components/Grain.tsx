'use client';
import { useEffect } from 'react';

export default function Grain() {
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

    // Scanline
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
    const t1 = setTimeout(() => { sweep(); }, 2000);
    const iv = setInterval(sweep, 9000);

    // Scroll reveal — add .in to already-visible elements BEFORE enabling the hide,
    // so content is never invisible if JS is slow to boot.
    const revEls = Array.from(document.querySelectorAll('.rev'));
    let initialBatchDone = false;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
      if (!initialBatchDone) {
        initialBatchDone = true;
        document.body.classList.add('js-ready');
      }
    }, { threshold: 0.07 });
    revEls.forEach(el => io.observe(el));

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      clearTimeout(t1);
      clearInterval(iv);
      io.disconnect();
    };
  }, []);

  return null;
}
