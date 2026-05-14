'use client';
import { useEffect } from 'react';
import OrbCanvas from './OrbCanvas';

export function OrbWrapper() {
  return <OrbCanvas />;
}

export function HomepageScripts() {
  useEffect(() => {
    // Counters
    const cio = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        const target = parseInt(el.dataset.target ?? '0');
        const suffix = el.dataset.suffix ?? '';
        const dur = 1400, start = performance.now();
        (function tick(now: number) {
          const p = Math.min((now - start) / dur, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(ease * target) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        })(performance.now());
        cio.unobserve(el);
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('.counter').forEach(el => cio.observe(el));

    // Accordions
    const triggers = document.querySelectorAll('.acc-trigger');
    function handleClick(this: HTMLElement) {
      const item = this.closest('.acc-item');
      if (!item) return;
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.acc-item.open').forEach(el => el.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    }
    triggers.forEach(btn => btn.addEventListener('click', handleClick as EventListener));

    return () => {
      cio.disconnect();
      triggers.forEach(btn => btn.removeEventListener('click', handleClick as EventListener));
    };
  }, []);

  return null;
}
