import Link from 'next/link';
import Image from 'next/image';
import MobileCarousel from '@/components/MobileCarousel';

export const metadata = { title: 'Influencer Quiz Funnel — Erik Lachapelle' };

const CAROUSEL_SLIDES = [
  { src: '/images/quiz-images/quiz-mobile-start.png',    alt: 'Quiz start screen' },
  { src: '/images/quiz-images/quiz-mobile-question.png', alt: 'Quiz question' },
  { src: '/images/quiz-images/quiz-mobile-vid.png',      alt: 'Quiz video intro' },
  { src: '/images/quiz-images/quiz-mobile-results.png',  alt: 'Quiz results' },
  { src: '/images/quiz-images/quiz-mobile-graph.png',    alt: 'Athlete level graph' },
  { src: '/images/quiz-images/quiz-mobile-skills.png',   alt: 'Skills breakdown' },
  { src: '/images/quiz-images/quiz-mobile-accurate.png', alt: 'Accuracy rating' },
  { src: '/images/quiz-images/quiz-mobile-cta.png',      alt: 'Call to action' },
];

export default function QuizFunnel() {
  return (
    <>
      {/* INTRO */}
      <section className="cs-intro">
        <div className="rev">
          <h1 className="cs-title">Influencer<br />Quiz<br />Funnel</h1>
          <p className="cs-subtitle">Turning Instagram traffic into qualified leads.</p>
          <a href="https://aaacrossfitlevelquiz.com/" className="cs-cta" target="_blank" rel="noopener noreferrer">Take The Quiz →</a>
        </div>
        <div className="cs-meta-grid rev d2">
          <div className="cs-meta-card"><div className="cs-meta-label">Role</div><div className="cs-meta-value">Product designer &amp; developer</div></div>
          <div className="cs-meta-card"><div className="cs-meta-label">Tools</div><div className="cs-meta-value">Figma, Bolt.new, Claude</div></div>
          <div className="cs-meta-card"><div className="cs-meta-label">Timeline</div><div className="cs-meta-value">2 months</div></div>
          <div className="cs-meta-card"><div className="cs-meta-label">Outcome</div><div className="cs-meta-value">200+ leads and 15 conversions in the first month post-launch.</div></div>
        </div>
      </section>

      {/* BANNER 1 */}
      <div className="cs-banner rev">
        <Image src="/images/quiz-images/quiz-screenshot-banner.png" alt="Quiz Funnel" fill style={{ objectFit: 'cover', opacity: 0.85, mixBlendMode: 'multiply' }} />
      </div>

      {/* SECTION 1 */}
      <section className="cs-section">
        <div className="cs-section-heading rev">
          <div className="cs-section-num">01 —</div>
          <h2 className="cs-section-title">The<br />Problem</h2>
          <p className="cs-section-sub">Struggling to turn followers into customers.</p>
          <div className="cs-pullquote">
            <p>&ldquo;I built a large audience in my niche, but I&rsquo;m having trouble monetizing them.&rdquo;</p>
            <cite>— JD (the client)</cite>
          </div>
        </div>
        <div className="cs-col rev d1">
          <div>
            <div className="cs-col-label">The Context</div>
            <div className="cs-col-body">
              <p>I worked with a CrossFit coach to design and build a quiz-based sales funnel.</p>
              <p>The business had grown through Instagram, building an audience of engaged followers. But converting those followers into paying customers relied on manual processes.</p>
            </div>
          </div>
        </div>
        <div className="cs-col rev d2">
          <div>
            <div className="cs-col-label">The Friction</div>
            <div className="cs-col-body"><p>The gap between follower and paying customer was inefficient and time-consuming.</p></div>
            <ul className="cs-list">
              <li>Every lead required direct interaction</li>
              <li>Many leads were unqualified</li>
              <li>There was no structured way to assess an athlete before a call</li>
            </ul>
          </div>
        </div>
        <div className="cs-span-2 rev d3">
          <div className="cs-card">
            <div className="cs-card-label">The Hypothesis</div>
            <div className="cs-card-body">
              <p>JD needed an engaging way to go from follower to customer. People like to take quizzes, and JD&rsquo;s followers are a niche audience who can take the quiz to learn more about their unique interests. A quiz allows us to:</p>
              <ul className="cs-list">
                <li>Pre-qualify athletes before sales conversations</li>
                <li>Reduce time spent on unqualified calls</li>
                <li>Create a scalable lead funnel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER 2 */}
      <div className="cs-banner rev">
        <Image src="/images/quiz-images/jd-brand-mark.png" alt="JD logo" fill style={{ objectFit: 'cover', opacity: 0.85, mixBlendMode: 'multiply' }} />
      </div>

      {/* SECTION 2 */}
      <section className="cs-section">
        <div className="cs-section-heading rev">
          <div className="cs-section-num">02 —</div>
          <h2 className="cs-section-title">Research<br />&amp; Design</h2>
          <p className="cs-section-sub">Why A Quiz?</p>
        </div>
        <div className="cs-col rev d1">
          <div>
            <div className="cs-col-label">Why A Quiz?</div>
            <div className="cs-col-body">
              <p>Quizzes turn passive followers into active participants. They create a quick, personalized experience that builds investment, while helping users self-identify their needs.</p>
              <p>It makes the final offer feel relevant and easier to buy into.</p>
            </div>
          </div>
        </div>
        <div className="cs-col rev d2">
          <div>
            <div className="cs-col-label">Building The Quiz</div>
            <div className="cs-col-body">
              <p>Between the client and myself, we brought over a decade of CrossFit coaching experience. We used that to define what different levels of athletes actually look like in practice.</p>
              <p>We translated those mental models into measurable benchmarks and scoring logic.</p>
              <p>As the quiz evolved, the scoring system became more complex. Getting this right required understanding how the logic should work and shaping the system accordingly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER 3 */}
      <div className="cs-banner rev">
          <Image src="/images/quiz-images/jd-charlie-split.png" alt="JD logo" fill style={{ objectFit: 'cover', opacity: 0.85, mixBlendMode: 'multiply' }} />
      </div>

      {/* SECTION 3 */}
      <section className="cs-section">
        <div className="cs-section-heading rev">
          <div className="cs-section-num">03 —</div>
          <h2 className="cs-section-title">Build<br />&amp; Iterate</h2>
          <p className="cs-section-sub">Fast iteration without losing control of the experience.</p>
        </div>
        <div className="cs-col rev d1">
          <div>
            <div className="cs-col-label">Development</div>
            <div className="cs-col-body">
              <p>The product was designed and built using <strong>Bolt.new</strong>, with support from <strong>Claude</strong>. Figma was used selectively to define UI components and guide specific changes.</p>
              <p>The workflow was iterative:</p>
            </div>
            <ul className="cs-list">
              <li>Define structure and logic</li>
              <li>Build directly in the product</li>
              <li>Test and refine in real time</li>
            </ul>
            <div className="cs-col-body" style={{ marginTop: 14 }}>
              <p>This allowed for fast iteration while maintaining control over the experience.</p>
            </div>
          </div>
        </div>
        <div className="cs-col rev d2">
          <div>
            <div className="cs-col-label">Handling the Data</div>
            <div className="cs-col-body"><p>I built a data pipeline for the client to view the quiz leads and results.</p></div>
            <div className="cs-pipeline">
              <div className="cs-pipeline-step"><span className="cs-pipeline-num">01</span><span className="cs-pipeline-body">User completes quiz — data sends to <strong>Supabase</strong></span></div>
              <div className="cs-pipeline-step"><span className="cs-pipeline-num">02</span><span className="cs-pipeline-body">Supabase triggers a webhook that populates a <strong>Google Sheet</strong></span></div>
              <div className="cs-pipeline-step"><span className="cs-pipeline-num">03</span><span className="cs-pipeline-body">Client opens the Sheet — sees the lead&rsquo;s name, email, and their level</span></div>
            </div>
          </div>
        </div>
        <div className="cs-span-2 rev d3">
          <div className="cs-card">
            <div className="cs-card-label">Test &amp; Repeat</div>
            <div className="cs-card-body"><p>The quiz went through multiple versions as the client&rsquo;s offering evolved. We tested the flow dozens of times, refining question clarity, scoring accuracy, and overall usability. Each pass brought the quiz closer to how athletes actually think about their performance.</p></div>
          </div>
        </div>
      </section>

      {/* BANNER 4 */}
      <div className="cs-banner rev">
          <Image src="/images/quiz-images/Intro-Video-Thumbnail.jpg" alt="JD logo" fill style={{ objectFit: 'cover', opacity: 0.85, mixBlendMode: 'multiply' }} />
      </div>

      {/* SECTION 4 */}
      <section className="cs-section">
        <div className="cs-section-heading rev">
          <div className="cs-section-num">04 —</div>
          <h2 className="cs-section-title">Data<br />&amp; Analytics</h2>
          <p className="cs-section-sub">Tracking what matters to optimize what comes next.</p>
        </div>
        <div className="cs-col rev d1">
          <div>
            <div className="cs-col-label">What I&rsquo;m Tracking</div>
            <div className="cs-col-body"><p>I built in lightweight analytics (Google Analytics and Microsoft Clarity) to track both behavior and perceived accuracy.</p></div>
            <ul className="cs-list">
              <li><strong>Quiz completion rate</strong> — where users drop off in the flow</li>
              <li><strong>Results page behavior (heatmaps)</strong> — how users interact with the most important conversion point</li>
              <li><strong>User feedback</strong> (&ldquo;Was this quiz accurate?&rdquo;) — whether the output aligns with user expectations</li>
              <li><strong>Lead capture</strong> (submissions + conversions) — how many users move from quiz → customer</li>
            </ul>
          </div>
        </div>
        <div className="cs-col rev d2">
          <div>
            <div className="cs-col-label">Why?</div>
            <div className="cs-col-body"><p>The goal isn&rsquo;t just to get users through the quiz — it&rsquo;s to understand:</p></div>
            <ul className="cs-list">
              <li>Where friction exists</li>
              <li>Whether the scoring feels credible and accurate</li>
              <li>Where users hesitate before converting</li>
            </ul>
            <div className="cs-col-body" style={{ marginTop: 14 }}><p>The more analytics I can gather over time, the more I can optimize the funnel.</p></div>
          </div>
        </div>
      </section>

          {/* MOBILE CAROUSEL */}
          <MobileCarousel slides={CAROUSEL_SLIDES} />

      {/* SECTION 5 */}
      <section className="cs-section">
        <div className="cs-section-heading rev">
          <div className="cs-section-num">05 —</div>
          <h2 className="cs-section-title">Results<br />&amp; Roadmap</h2>
        </div>
        <div className="cs-col rev d1">
          <div>
            <div className="cs-col-label">The Launch</div>
            <div className="cs-col-body"><p>The quiz launched on April 12, 2026.</p></div>
            <ul className="cs-list">
              <li>~100 quiz completions in the first few days</li>
              <li>Immediate lead capture through submissions</li>
              <li>5 confirmed conversions</li>
            </ul>
          </div>
        </div>
        <div className="cs-col rev d2">
          <div>
            <div className="cs-col-label">What&rsquo;s Next?</div>
            <div className="cs-col-body"><p>Early results suggest strong engagement, with clear opportunities to improve conversion at the results stage. The next phase is optimization.</p></div>
            <ul className="cs-list">
              <li>Analyze drop-off and completion rates</li>
              <li>Review heatmaps and user behavior</li>
              <li>Evaluate perceived accuracy through post-quiz feedback</li>
              <li>Refine scoring and results experience</li>
            </ul>
          </div>
        </div>
      </section>

     

      {/* NEXT */}
      <div className="cs-next rev">
        <Link href="/work/autodesk-tooltips" className="cs-next-btn">Next Project →</Link>
      </div>
    </>
  );
}
