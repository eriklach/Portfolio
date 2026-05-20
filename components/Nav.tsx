'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Nav() {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const full = 'Erik Lachapelle — Product Designer';
    let i = 0;
    function type() {
      if (i <= full.length) {
        el!.textContent = full.slice(0, i++);
        setTimeout(type, i < 8 ? 70 : 36);
      } else {
        el!.classList.add('done');
      }
    }
    const t = setTimeout(type, 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <nav>
      <Link href="/" className="nav-badge">
        <Image src="/images/coffee-mug.png" alt="logo" width={22} height={22} className="badge-icon-img" />
        <span className="badge-text" ref={textRef} />
      </Link>
      <div className="nav-status">
        <div className="pulse" />
        Toronto, CA &nbsp;·&nbsp; Available
      </div>
    </nav>
  );
}
