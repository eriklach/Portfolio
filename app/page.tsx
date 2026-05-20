import Link from 'next/link';
import Image from 'next/image';
import { OrbWrapper, HomepageScripts } from '@/components/HomepageClient';

export default function Home() {
  return (
    <>
      <HomepageScripts />

      {/* ══ HERO ══ */}
      <section className="hero">
        <div className="drift-bar" />
        <OrbWrapper />
        <div className="orb-readout">
          <span className="hi">ORB-7 ACTIVE</span>
          <span>GEOMETRY: ICOSAHEDRON</span>
          <span>NODES: 200</span>
          <span>ROT: 0.27 rad/s</span>
        </div>

        <div className="hero-bio">
          <p className="hero-bio-text">
            Formerly a UX writer — now a product designer and<br />
            vibe-coder. I use design, code, and content to solve
            problems end-to-end.
          </p>
        </div>

        <div className="hero-footer">
          <div className="work-label">
            Work <span className="work-arrow">↓</span>
          </div>
          <div className="hero-coords">
            43°40′N 79°24′W<br />
            Toronto, Canada<br />
            UTC − 05:00
          </div>
        </div>
      </section>

      {/* ══ WORK ══ */}
      <div className="work-section">
        <div className="work-heading-col rev">
          <div className="work-sub-label">Selected Work</div>
          <div className="work-count">04</div>
          <div className="work-year">2022 — 2024</div>
        </div>

        <div className="cards-grid">
          <Link href="/work/the-wod-timer" className="card rev d1">
            <div className="card-thumb" style={{ minHeight: 280 }}>
              <Image src="/images/timer-images/wod-timer-banner.png" alt="Workout Timer" fill style={{ objectFit: 'cover', opacity: 0.82, mixBlendMode: 'multiply' }} />
              <div className="card-cross" />
              <div className="reticle">
                <div className="rc tl" /><div className="rc tr" /><div className="rc bl" /><div className="rc br" />
                <div className="reticle-dot" />
              </div>
              <div className="card-scan" />
              <div className="card-arrow">→</div>
            </div>
            <div className="card-caption">
              <div className="card-title">Workout Timer App</div>
              <div className="card-desc">Designed &amp; vibe-coded an app, now live on the App Store</div>
            </div>
          </Link>

          <Link href="/work/custom-sales-funnel" className="card rev d2">
            <div className="card-thumb">
              <Image src="/images/quiz-images/Intro-Video-Thumbnail.jpg" alt="Quiz Funnel" fill style={{ objectFit: 'cover', opacity: 0.82, mixBlendMode: 'multiply' }} />
              <div className="card-cross" />
              <div className="reticle">
                <div className="rc tl" /><div className="rc tr" /><div className="rc bl" /><div className="rc br" />
                <div className="reticle-dot" />
              </div>
              <div className="card-scan" />
              <div className="card-arrow">→</div>
            </div>
            <div className="card-caption">
              <div className="card-title">Custom Sales Funnel</div>
              <div className="card-desc">Created a quiz for an influencer to turn followers into customers</div>
            </div>
          </Link>

          <Link href="/work/autodesk-tooltips" className="card rev d3">
            <div className="card-thumb">
              <Image src="/images/tooltip-images/maya-banner.png" alt="Autodesk Tooltips" fill style={{ objectFit: 'cover', opacity: 0.82, mixBlendMode: 'multiply' }} />
              <div className="reticle">
                <div className="rc tl" /><div className="rc tr" /><div className="rc bl" /><div className="rc br" />
                <div className="reticle-dot" />
              </div>
              <div className="card-scan" />
              <div className="card-arrow">→</div>
            </div>
            <div className="card-caption">
              <div className="card-title">Autodesk: Tooltips</div>
              <div className="card-desc">Created tooltips for a complex 3-D modelling software</div>
            </div>
          </Link>

          <Link href="/work/leaderboard-app" className="card rev d4">
            <div className="card-thumb">
              <Image src="/images/leaderboard-images/leaderboard-cover.png" alt="Leaderboard App" fill style={{ objectFit: 'cover', opacity: 0.82, mixBlendMode: 'multiply' }} />
              <div className="card-cross" />
              <div className="reticle">
                <div className="rc tl" /><div className="rc tr" /><div className="rc bl" /><div className="rc br" />
                <div className="reticle-dot" />
              </div>
              <div className="card-scan" />
              <div className="card-arrow">→</div>
            </div>
            <div className="card-caption">
              <div className="card-title">Leaderboard App</div>
              <div className="card-desc">Used an AI-first workflow to build a leaderboard for a competition</div>
            </div>
          </Link>
        </div>
      </div>

      {/* ══ ABOUT ══ */}
      <div className="about-section">
        <div className="rev">
          <h2 className="about-heading">About<br /><em>Me</em></h2>
          <div className="about-body">
            <p>Formerly a UX Writer, now a <strong>Product Designer and vibe-coder</strong>. I use design, code, and content to solve problems from end-to-end.</p>
            <p>Based in Toronto. In my spare time I coach cross-training, bike around, drink coffee, and read. Some favourites below.</p>
          </div>

          <div className="reading-label">What I am reading now</div>
          <div style={{ width: 60, border: '1px solid var(--border-mid)', overflow: 'hidden', aspectRatio: '2/3', marginBottom: 26, position: 'relative' }}>
            <Image src="/images/book-covers/book-wind-and-t.jpg" alt="Current reading" fill style={{ objectFit: 'cover' }} />
          </div>

          <div className="accordions">
            <div className="acc-item">
              <button className="acc-trigger"><span>Design Related Books</span><span className="acc-icon">+</span></button>
              <div className="acc-body">
                <div className="acc-book"><span className="acc-book-num">01</span>The Design of Everyday Things — Don Norman</div>
                <div className="acc-book"><span className="acc-book-num">02</span>Thinking, Fast and Slow — Daniel Kahneman</div>
                <div className="acc-book"><span className="acc-book-num">03</span>Shape Up — Ryan Singer</div>
                <div className="acc-book"><span className="acc-book-num">04</span>Refactoring UI — Wathan &amp; Schoger</div>
              </div>
            </div>
            <div className="acc-item">
              <button className="acc-trigger"><span>Non-Fiction</span><span className="acc-icon">+</span></button>
              <div className="acc-body">
                <div className="acc-book"><span className="acc-book-num">01</span>Deep Work — Cal Newport</div>
                <div className="acc-book"><span className="acc-book-num">02</span>The Lean Startup — Eric Ries</div>
                <div className="acc-book"><span className="acc-book-num">03</span>Atomic Habits — James Clear</div>
              </div>
            </div>
            <div className="acc-item">
              <button className="acc-trigger"><span>Fiction</span><span className="acc-icon">+</span></button>
              <div className="acc-body">
                <div className="acc-book"><span className="acc-book-num">01</span>The Strength of the Few — James Islington</div>
                <div className="acc-book"><span className="acc-book-num">02</span>Dune — Frank Herbert</div>
                <div className="acc-book"><span className="acc-book-num">03</span>The Name of the Wind — Patrick Rothfuss</div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-photo-col rev d2">
          <div className="photo-frame">
            <div className="pc tl" /><div className="pc br" />
            <Image src="/images/erik.png" alt="Erik Lachapelle" fill style={{ objectFit: 'cover', mixBlendMode: 'multiply', opacity: 0.85 }} />
          </div>
          <div className="photo-caption">Erik Lachapelle — Toronto</div>
          <div className="photo-stats">
            <div className="photo-stat">
              <div className="photo-stat-label">Projects</div>
              <div className="photo-stat-val counter" data-target="40" data-suffix="+">0</div>
            </div>
            <div className="photo-stat">
              <div className="photo-stat-label">Years</div>
              <div className="photo-stat-val counter" data-target="6" data-suffix="">0</div>
            </div>
          </div>
          <div className="readout-strip">
            <div className="readout-row"><span className="readout-key">Discipline</span><span className="readout-val">Product Design</span></div>
            <div className="readout-row"><span className="readout-key">Location</span><span className="readout-val">YYZ / Remote</span></div>
            <div className="readout-row"><span className="readout-key">Stack</span><span className="readout-val">Figma · Claude · Code</span></div>
            <div className="readout-row"><span className="readout-key">Status</span><span className="readout-val blink">● Available</span></div>
          </div>
        </div>
      </div>
    </>
  );
}
