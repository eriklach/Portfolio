import Link from 'next/link';
import Image from 'next/image';
import MobileCarousel from '@/components/MobileCarousel';

export const metadata = { title: 'The WOD Timer — Erik Lachapelle' };

const CAROUSEL_SLIDES = [
  { src: '/images/timer-images/timer-home.png',         alt: 'WOD Timer home screen' },
  { src: '/images/timer-images/timer-work.png',         alt: 'Work interval timer' },
  { src: '/images/timer-images/timer-rest.png',         alt: 'Rest interval timer' },
  { src: '/images/timer-images/timer-countup.png',      alt: 'Count-up timer' },
  { src: '/images/timer-images/timer-setup.png',        alt: 'Timer setup screen' },
  { src: '/images/timer-images/timer-tabata-setup.png', alt: 'Tabata timer setup' },
];

export default function WodTimer() {
  return (
    <>
      {/* INTRO */}
      <section className="cs-intro">
        <div className="rev">
          <h1 className="cs-title">The<br />WOD<br />Timer</h1>
          <p className="cs-subtitle">A timer for working out.</p>
          <p className="cs-description">Going from zero-to-shipped on the App Store using SwiftUI &amp; AI-acceleration.</p>
          <a href="#" className="cs-cta">See it on the App Store →</a>
        </div>
        <div className="cs-meta-grid rev d2">
          <div className="cs-meta-card"><div className="cs-meta-label">Role</div><div className="cs-meta-value">Product designer &amp; developer</div></div>
          <div className="cs-meta-card"><div className="cs-meta-label">Tools</div><div className="cs-meta-value">Figma, SwiftUI, Xcode, Github, ChatGPT</div></div>
          <div className="cs-meta-card"><div className="cs-meta-label">Timeline</div><div className="cs-meta-value">6 months (design to App Store approval)</div></div>
          <div className="cs-meta-card"><div className="cs-meta-label">Outcome</div><div className="cs-meta-value">Live on the App Store with over 100 active users and 5 star reviews.</div></div>
        </div>
      </section>

      {/* BANNER 1 */}
      <div className="cs-banner rev">
        <Image src="/images/timer-images/wod-timer-banner.png" alt="WOD Timer" fill style={{ objectFit: 'cover', opacity: 0.85, mixBlendMode: 'multiply' }} />
      </div>

      {/* SECTION 1 */}
      <section className="cs-section">
        <div className="cs-section-heading rev">
          <div className="cs-section-num">01 —</div>
          <h2 className="cs-section-title">The<br />Problem</h2>
          <p className="cs-section-sub">Current workout timers are poorly designed or are riddled with ads.</p>
          <div className="cs-pullquote"><p>&ldquo;Ads don&rsquo;t belong in a heavy squat session.&rdquo;</p></div>
        </div>
        <div className="cs-col rev d1">
          <div>
            <div className="cs-col-label">The Context</div>
            <div className="cs-col-body">
              <p>As a CrossFit coach, I witness the user journey firsthand.</p>
              <p>Athletes rely on their phones to time their workouts, current timers prioritize ad revenue over user experience.</p>
            </div>
          </div>
        </div>
        <div className="cs-col rev d2">
          <div>
            <div className="cs-col-label">The Friction</div>
            <div className="cs-col-body">
              <p>Imagine you are about to attempt a max-effort lift on a timed interval to qualify for a competition.</p>
              <p>You look at your phone, and suddenly a full-screen video ad for a mobile game pops up. It&rsquo;s annoying, it disrupts the flow, and ruins the workout.</p>
            </div>
          </div>
        </div>
        <div className="cs-span-2 rev d3">
          <div className="cs-card">
            <div className="cs-card-label">The Hypothesis</div>
            <div className="cs-card-body"><p>Athletes don&rsquo;t need &ldquo;more features.&rdquo; They need reliability, high-contrast visibility, and zero friction. I set out to build a tool that does its job and gets out of the way.</p></div>
          </div>
        </div>
      </section>

      {/* BANNER 2 */}
      <div className="cs-banner rev" style={{ background: '#13110d' }}>
        <Image src="/images/timer-images/timer-mood-board.png" alt="WOD Timer UI" fill style={{ objectFit: 'contain' }} />
      </div>

      {/* SECTION 2 */}
      <section className="cs-section">
        <div className="cs-section-heading rev">
          <div className="cs-section-num">02 —</div>
          <h2 className="cs-section-title">Research<br />&amp; Design</h2>
          <p className="cs-section-sub">Designing for a gym is different than designing for a desk.</p>
        </div>
        <div className="cs-col rev d1">
          <div>
            <div className="cs-col-label">Designing for &ldquo;The Red Zone&rdquo;</div>
            <ul className="cs-list">
              <li><strong>Physical Constraint:</strong> Users have shaky hands, chalky fingers, and high heart rates (160bpm+).</li>
              <li><strong>Visual Constraint:</strong> The phone is often on the floor, or 6+ feet away from their eyes.</li>
              <li><strong>Auditory Constraint:</strong> Gyms are loud. The timer needs to cut through background noise, or play in sync with their headphone music.</li>
            </ul>
          </div>
        </div>
        <div className="cs-col rev d2">
          <div>
            <div className="cs-col-label">Visual Direction</div>
            <div className="cs-col-body"><p>Mood board + style guide.</p></div>
          </div>
        </div>
        <div className="cs-span-2 rev d3">
          <div className="cs-card">
            <div className="cs-card-label">Research Based Design Decisions</div>
            <div className="cs-card-body">
              <ul className="cs-list">
                <li><strong>Typography:</strong> I moved away from the standard &ldquo;digital clock&rdquo; font to a massive, high-contrast sans-serif that is readable from 10 feet away.</li>
                <li><strong>Gestures:</strong> There are very few small buttons, precision tapping is impossible when you are exhausted. Most are quite large, and users can swipe back as well.</li>
                <li><strong>Orientation:</strong> Added landscape mode support for athletes who want an even larger timer display.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER 3 */}
      <div className="cs-banner rev">
        <Image src="/images/timer-images/timer-ideation.png" alt="Mood board and style guide" fill style={{ objectFit: 'cover', opacity: 0.85, mixBlendMode: 'multiply' }} />
      </div>

      {/* SECTION 3 */}
      <section className="cs-section">
        <div className="cs-section-heading rev">
          <div className="cs-section-num">03 —</div>
          <h2 className="cs-section-title">Development</h2>
          <p className="cs-section-sub">The &ldquo;WOD&rdquo; ready of AI in Engineering.</p>
        </div>
        <div className="cs-col rev d1">
          <div>
            <div className="cs-col-label">The Stack</div>
            <div className="cs-col-body"><p>Built natively in <strong>SwiftUI</strong> for iOS. Choosing SwiftUI meant the app could take full advantage of Apple&rsquo;s ecosystem — background audio sessions, haptics, screen locking behaviour — without workarounds.</p></div>
          </div>
        </div>
        <div className="cs-col rev d2">
          <div>
            <div className="cs-col-label">AI-Accelerated Workflow</div>
            <div className="cs-col-body"><p>I used <strong>ChatGPT</strong> as a pairing partner for Swift logic I hadn&rsquo;t encountered before. Rather than replacing the engineering, it accelerated the learning loop — I understood every line before it shipped.</p></div>
          </div>
        </div>
      </section>

      {/* BANNER 4 */}
      <div className="cs-banner rev">
        <Image src="/images/timer-images/timer-banner-two.png" alt="WOD Timer mobile landscape view" fill style={{ objectFit: 'cover', opacity: 0.85, mixBlendMode: 'multiply' }} />
      </div>

      {/* SECTION 4 */}
      <section className="cs-section">
        <div className="cs-section-heading rev">
          <div className="cs-section-num">04 —</div>
          <h2 className="cs-section-title">Testing &amp;<br />Iteration</h2>
        </div>
        <div className="cs-span-2 rev d2">
          <div className="cs-card">
            <div className="cs-card-body">
              <p>As a coach at a gym I was lucky to have plenty of eager testers readily available. I sent them links to the beta using Test Flight and collected their feedback.</p>
              <p>The WOD Timer went through <strong>6 iterations</strong> through testing.</p>
              <p>Testers found bugs, and other required features that I had missed (like having the timer play when the screen is locked, or having music audio play at the same time as the timer audio.)</p>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER 5 */}
      <div className="cs-banner rev" style={{ background: '#eae4da' }}>
        <Image src="/images/timer-images/design-ideation- mobile.png" alt="Design ideation" fill style={{ objectFit: 'contain' }} />
      </div>

      {/* SECTION 5 */}
      <section className="cs-section">
        <div className="cs-section-heading rev">
          <div className="cs-section-num">05 —</div>
          <h2 className="cs-section-title">Results<br />&amp; Roadmap</h2>
        </div>
        <div className="cs-col rev d1">
          <div>
            <div className="cs-col-label">The Launch</div>
            <div className="cs-col-body"><p>The app passed Apple&rsquo;s strict App Store review process on the first submission. It is now the primary timer used by many members at my gym.</p></div>
          </div>
        </div>
        <div className="cs-col rev d2">
          <div>
            <div className="cs-col-label">What&rsquo;s Next?</div>
            <ul className="cs-list">
              <li><strong>Android Port:</strong> Recreating the experience for the Google Play Store.</li>
              <li><strong>WearOS/WatchOS:</strong> I had a user request for Apple Watch integration.</li>
              <li><strong>Monetization:</strong> Keep the core timer free forever, with a &ldquo;premium&rdquo; tier for additional features.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MOBILE CAROUSEL */}
      <MobileCarousel slides={CAROUSEL_SLIDES} />

      {/* NEXT */}
      <div className="cs-next rev">
        <Link href="/work/custom-sales-funnel" className="cs-next-btn">Next Project →</Link>
      </div>
    </>
  );
}
