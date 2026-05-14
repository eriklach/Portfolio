'use client';
import Image from 'next/image';

interface PhoneSlide {
  src: string;
  alt: string;
}

export default function MobileCarousel({ slides }: { slides: PhoneSlide[] }) {
  const doubled = [...slides, ...slides];

  return (
    <div className="carousel-wrap">
      <div className="carousel-track" style={{ '--count': slides.length } as React.CSSProperties}>
        {doubled.map((s, i) => (
          <div className="carousel-phone" key={i}>
            <div className="phone-frame">
              <div className="phone-notch" />
              <div className="phone-screen">
                <Image src={s.src} alt={s.alt} fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
