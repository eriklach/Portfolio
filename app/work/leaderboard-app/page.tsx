import Link from 'next/link';
import Image from 'next/image';
import MobileCarousel from '@/components/MobileCarousel';

export const metadata = { title: 'Comp Leaderboard — Erik Lachapelle' };

const CAROUSEL_SLIDES = [
  { src: '/images/leaderboard-images/lead-main.png',         alt: 'Leaderboard main view' },
  { src: '/images/leaderboard-images/lead-login.png',        alt: 'Sign in screen' },
  { src: '/images/leaderboard-images/lead-submit.png',       alt: 'Submit score screen' },
  { src: '/images/leaderboard-images/lead-menu-rxpanded.png', alt: 'Navigation menu expanded' },
  { src: '/images/leaderboard-images/lead-profile.png',      alt: 'Athlete profile screen' },
];

export default function LeaderboardApp() {
  return (
    <>
      {/* INTRO */}
      <section className="cs-intro">
        <div className="rev">
          <h1 className="cs-title">Comp<br />Leader<br />board</h1>
          <p className="cs-subtitle">A leaderboard for fitness competitions.</p>
          <p className="cs-description">Using an AI-first workflow to ship a real-time competition leaderboard for a gym community — from brief to live in one month.</p>
        </div>
        <div className="cs-meta-grid rev d2">
          <div className="cs-meta-card"><div className="cs-meta-label">Role</div><div className="cs-meta-value">Product designer &amp; developer</div></div>
          <div className="cs-meta-card"><div className="cs-meta-label">Tools</div><div className="cs-meta-value">Figma, Bolt.new, Supabase, ChatGPT</div></div>
          <div className="cs-meta-card"><div className="cs-meta-label">Timeline</div><div className="cs-meta-value">1 month</div></div>
          <div className="cs-meta-card"><div className="cs-meta-label">Outcome</div><div className="cs-meta-value">A mobile-friendly leaderboard that can support hundreds of scores.</div></div>
        </div>
      </section>

      {/* BANNER 1 */}
      <div className="cs-banner rev">
        <Image src="/images/leaderboard-images/leader-banner.png" alt="Athletes in the gym" fill style={{ objectFit: 'cover', opacity: 0.85, mixBlendMode: 'multiply' }} />
      </div>

      {/* SECTION 1 */}
      <section className="cs-section">
        <div className="cs-section-heading rev">
          <div className="cs-section-num">01 —</div>
          <h2 className="cs-section-title">The<br />Problem</h2>
          <p className="cs-section-sub">We needed a way to keep score for our in-house competition.</p>
        </div>
        <div className="cs-col rev d1">
          <div>
            <div className="cs-col-label">The Context</div>
            <div className="cs-col-body">
              <p>I coach at a gym called Academy Of Lions. Every year many of us compete in the CrossFit Open — a worldwide fitness competition that requires a paid entry fee.</p>
              <p>Many of our members don&rsquo;t want to pay the fee to sign up — but still want to have fun and compete against each other.</p>
            </div>
          </div>
        </div>
        <div className="cs-col rev d2">
          <div>
            <div className="cs-col-label">The Solution</div>
            <div className="cs-col-body"><p>We needed an internal &ldquo;Shadow Leaderboard&rdquo; — a free, low-stakes platform where every member could log scores, see their friends&rsquo; results, and feel part of the event, regardless of their budget or skill level.</p></div>
          </div>
        </div>
      </section>

      {/* APP SCREENSHOTS */}
      <div className="cs-app-screens rev">
        <Image src="/images/leaderboard-images/lead-main.png" alt="Leaderboard main view" width={300} height={480} style={{ flex: 1, height: 480, objectFit: 'cover', objectPosition: 'center top' }} />
        <Image src="/images/leaderboard-images/lead-login.png" alt="Sign in" width={300} height={480} style={{ flex: 1, height: 480, objectFit: 'cover', objectPosition: 'center top' }} />
        <Image src="/images/leaderboard-images/lead-submit.png" alt="Submit score" width={300} height={480} style={{ flex: 1, height: 480, objectFit: 'cover', objectPosition: 'center top' }} />
        <Image src="/images/leaderboard-images/lead-menu-rxpanded.png" alt="Navigation menu" width={300} height={480} style={{ flex: 1, height: 480, objectFit: 'cover', objectPosition: 'center top' }} />
      </div>

      {/* SECTION 2 */}
      <section className="cs-section">
        <div className="cs-section-heading rev">
          <div className="cs-section-num">02 —</div>
          <h2 className="cs-section-title">The<br />Approach</h2>
          <p className="cs-section-sub">I used an AI-first workflow to meet a tight timeline.</p>
        </div>
        <div className="cs-col rev d1">
          <div>
            <div className="cs-col-label">The &ldquo;AI-First&rdquo; Workflow</div>
            <div className="cs-col-body">
              <p>I skipped the research, discovery, and initial design phases entirely and moved straight to code using <strong>Bolt.new</strong>.</p>
              <p>The bulk of the design work was done through iterations. AI-designed work only looks good if you don&rsquo;t look too closely — I acted as the Product Director, guiding the AI to handle most of the UI while I focused on the logic and the database structure.</p>
            </div>
          </div>
        </div>
        <div className="cs-col rev d2">
          <div>
            <div className="cs-col-label">Going Full Stack With Supabase</div>
            <div className="cs-col-body"><p>A leaderboard is useless without data. I integrated <strong>Supabase</strong> to manage the backend. Despite having no prior SQL experience, I used LLMs to help me architect the schema:</p></div>
            <ul className="cs-list">
              <li>Users (Athletes) linked to Workouts</li>
              <li>Row-Level Security — ensuring users can only edit their own scores</li>
              <li>Real-time updates for the live leaderboard view</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BANNER 3 */}
      <div className="cs-banner rev">
        <Image src="/images/leaderboard-images/leaderboard-studycover.png" alt="Athletes competing with the leaderboard" fill style={{ objectFit: 'cover', opacity: 0.85, mixBlendMode: 'multiply' }} />
      </div>

      {/* SECTION 3 */}
      <section className="cs-section">
        <div className="cs-section-heading rev">
          <div className="cs-section-num">03 —</div>
          <h2 className="cs-section-title">Testing</h2>
          <p className="cs-section-sub">I gathered 10 athletes and observed them inputting scores in real-time.</p>
        </div>
        <div className="cs-span-2 rev d2">
          <div className="cs-gap-list">
            <div className="cs-gap-item">
              <div className="cs-gap-tag">The Heuristic Fail</div>
              <div className="cs-gap-problem">Users didn&rsquo;t know how to get back to the main page. I assumed the logo was a good enough &ldquo;Home&rdquo; button.</div>
              <div className="cs-gap-fix"><strong>The Fix:</strong> I implemented a standard hamburger menu with explicit navigation labels.</div>
            </div>
            <div className="cs-gap-item">
              <div className="cs-gap-tag">The Content Design Fail</div>
              <div className="cs-gap-problem">When a user tried to overwrite a score, the app threw a generic error: &ldquo;Failed to submit.&rdquo;</div>
              <div className="cs-gap-fix"><strong>The Fix:</strong> I rewrote the error handling logic to provide specific guidance: &ldquo;You already have a score. Please delete your previous entry to submit a new one.&rdquo;</div>
              <div className="cs-gap-img">
                <Image src="/images/leaderboard-images/error-msging -compare.png" alt="Error messaging before and after" width={800} height={400} style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            </div>
            <div className="cs-gap-item">
              <div className="cs-gap-tag">The Responsive Fail</div>
              <div className="cs-gap-problem">On smaller iPhone screens, the keyboard overlapped the &ldquo;Save&rdquo; button in the profile editor.</div>
              <div className="cs-gap-fix"><strong>The Fix:</strong> I manually adjusted the CSS breakpoints and padding — a detail the AI overlooked.</div>
            </div>
            <div className="cs-gap-item">
              <div className="cs-gap-tag">The Builder Privilege Fail</div>
              <div className="cs-gap-problem">I had built the scoring system to automatically place me in first place no matter what I scored. My ungrateful users did not like this.</div>
              <div className="cs-gap-fix"><strong>The Fix:</strong> I corrected the scoring logic to be fair to everyone. It was up to me to beat them the old-fashioned way.</div>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER 4 */}
      <div className="cs-banner rev">
        <Image src="/images/leaderboard-images/leader-banner.png" alt="Live competition leaderboard in use" fill style={{ objectFit: 'cover', opacity: 0.85, mixBlendMode: 'multiply' }} />
      </div>

      {/* SECTION 4 */}
      <section className="cs-section">
        <div className="cs-section-heading rev">
          <div className="cs-section-num">04 —</div>
          <h2 className="cs-section-title">Conclusion</h2>
          <p className="cs-section-sub">The app successfully hosted our competition data, allowing members to engage without the financial barrier.</p>
        </div>
        <div className="cs-col rev d1">
          <div>
            <div className="cs-col-label">The Takeaway</div>
            <div className="cs-col-body">
              <p>This project challenged my view of the &ldquo;Design Process.&rdquo; In the past, this would have been a much longer undertaking. With AI tools and a &ldquo;Maker&rdquo; mindset, it took a fraction of the time.</p>
              <p>It proved that <strong>Product Thinking &gt; Pixel Pushing</strong>. The value wasn&rsquo;t in the UI (which is standard); the value was in identifying the user need, managing the data structure, and shipping a working solution.</p>
            </div>
          </div>
        </div>
        <div className="cs-col rev d2">
          <div>
            <div className="cs-col-label">Next Steps</div>
            <div className="cs-col-body"><p>The CrossFit Open is coming up again. We are making a bigger push this year to get people to participate through the leaderboard.</p></div>
          </div>
        </div>
      </section>

      {/* MOBILE CAROUSEL */}
      <MobileCarousel slides={CAROUSEL_SLIDES} />

      {/* NEXT */}
      <div className="cs-next rev">
        <Link href="/work/the-wod-timer" className="cs-next-btn">Next Project →</Link>
      </div>
    </>
  );
}
