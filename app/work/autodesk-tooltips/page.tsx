import Link from 'next/link';
import Image from 'next/image';

export const metadata = { title: 'Tooltips For Maya — Erik Lachapelle' };

export default function AutodeskTooltips() {
  return (
    <>
      {/* INTRO */}
      <section className="cs-intro">
        <div className="rev">
          <h1 className="cs-title">Tooltips<br />For<br />Maya</h1>
          <p className="cs-subtitle">Reducing friction in high-end VFX workflows through contextual guidance.</p>
        </div>
        <div className="cs-meta-grid rev d2">
          <div className="cs-meta-card"><div className="cs-meta-label">Role</div><div className="cs-meta-value">Content Designer at Autodesk</div></div>
          <div className="cs-meta-card"><div className="cs-meta-label">Tools</div><div className="cs-meta-value">Figma, Google Sheets</div></div>
          <div className="cs-meta-card"><div className="cs-meta-label">Timeline</div><div className="cs-meta-value">1 month</div></div>
          <div className="cs-meta-card"><div className="cs-meta-label">Outcome</div><div className="cs-meta-value">Tooltips to bridge the gap between legacy knowledge and new tech.</div></div>
        </div>
      </section>

      {/* BANNER 1 */}
      <div className="cs-banner rev">
        <Image src="/images/tooltip-images/maya-banner.png" alt="Living room scene created using Maya" fill style={{ objectFit: 'cover', opacity: 0.85, mixBlendMode: 'multiply' }} />
      </div>

      {/* SECTION 1 */}
      <section className="cs-section">
        <div className="cs-section-heading rev">
          <div className="cs-section-num">01 —</div>
          <h2 className="cs-section-title">The<br />Problem</h2>
          <p className="cs-section-sub">The complexity gap.</p>
        </div>
        <div className="cs-col rev d1">
          <div>
            <div className="cs-col-label">The Context</div>
            <div className="cs-col-body"><p>Maya is the industry standard for 3D animation, but it is notoriously complex. With the release of <strong>LookdevX</strong>, we introduced a powerful new way to handle materials using USD (Universal Scene Description).</p></div>
          </div>
          <div>
            <div className="cs-col-label">The Friction</div>
            <div className="cs-col-body"><p>While powerful, LookdevX introduced new workflows and terms that alienated users familiar with the previous workflow.</p></div>
          </div>
        </div>
        <div className="cs-col rev d2">
          <div>
            <div className="cs-col-label">The Hypothesis</div>
            <div className="cs-col-body"><p>If users couldn&rsquo;t understand the feature, they would abandon and revert to older, less efficient tools.</p></div>
          </div>
        </div>
      </section>

      {/* BANNER 2 */}
      <div className="cs-banner rev">
        <Image src="/images/tooltip-images/lookdev-tooltip-demo.png" alt="LookdevX tooltip demo" fill style={{ objectFit: 'cover', opacity: 0.85, mixBlendMode: 'multiply' }} />
      </div>

      {/* SECTION 2 */}
      <section className="cs-section">
        <div className="cs-section-heading rev">
          <div className="cs-section-num">02 —</div>
          <h2 className="cs-section-title">Research</h2>
          <p className="cs-section-sub">Tooltips aren&rsquo;t going to save a new user — but they can give a regular Maya user the right context at the right time.</p>
        </div>
        <div className="cs-col rev d1">
          <div>
            <div className="cs-col-label">User Analysis</div>
            <div className="cs-col-body"><p>I bypassed my assumptions and went directly to our internal beta forum and Reddit. I needed to understand:</p></div>
            <ul className="cs-list">
              <li>How senior artists talk about materials</li>
              <li>How junior artists are using terminology</li>
              <li>Whether people are widely talking about USD yet</li>
            </ul>
          </div>
        </div>
        <div className="cs-col rev d2">
          <div>
            <div className="cs-col-label">The Insight</div>
            <div className="cs-col-body"><p>Users didn&rsquo;t need textbook definitions.</p></div>
            <div className="cs-tooltip-example">
              <div className="cs-tooltip-before">Textbook (before)</div>
              <div className="cs-tooltip-text">&ldquo;This is a compound node.&rdquo;</div>
              <hr className="cs-tooltip-divider" />
              <div className="cs-tooltip-before">Functional (after)</div>
              <div className="cs-tooltip-text after">&ldquo;Groups nodes together to simplify your graph.&rdquo;</div>
            </div>
            <div className="cs-col-body" style={{ marginTop: 16 }}><p>They needed functional context — a knowledgeable colleague, not a manual.</p></div>
          </div>
        </div>
      </section>

      {/* BANNER 3 */}
      <div className="cs-banner rev">
        <Image src="/images/tooltip-images/lookdev-timelapse.gif" alt="LookdevX graph editor timelapse" fill style={{ objectFit: 'cover', opacity: 0.85, mixBlendMode: 'multiply' }} />
      </div>

      {/* SECTION 3 */}
      <section className="cs-section">
        <div className="cs-section-heading rev">
          <div className="cs-section-num">03 —</div>
          <h2 className="cs-section-title">Strategy<br />&amp; Build</h2>
          <p className="cs-section-sub">Designing for clarity.</p>
        </div>
        <div className="cs-col rev d1">
          <div>
            <div className="cs-col-label">Information Architecture</div>
            <div className="cs-col-body"><p>I audited every interactable element in the LookdevX interface. Working with the Product Owner, we established a clear strategy:</p></div>
            <ul className="cs-list">
              <li><strong>Obvious UI:</strong> Buttons that explain themselves (e.g., &ldquo;Save&rdquo;) get no tooltips — to reduce visual noise</li>
              <li><strong>Complex UI:</strong> Jargon-heavy elements get &ldquo;helper&rdquo; tooltips</li>
            </ul>
          </div>
        </div>
        <div className="cs-col rev d2">
          <div>
            <div className="cs-col-label">Collaboration &amp; Engineering</div>
            <div className="cs-col-body">
              <p>I worked directly with the engineering team to implement. Our developers were also users of the product, and had additional feedback that we incorporated.</p>
              <p>I also ensured the tooltips aligned with the broader documentation I authored, creating a cohesive &ldquo;help ecosystem&rdquo; from the UI to the manual.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER 4 */}
      <div className="cs-banner rev">
        <Image src="/images/tooltip-images/lookdev-tooltip-demo.png" alt="LookdevX in production" fill style={{ objectFit: 'cover', opacity: 0.85, mixBlendMode: 'multiply' }} />
      </div>

      {/* SECTION 4 */}
      <section className="cs-section">
        <div className="cs-section-heading rev">
          <div className="cs-section-num">04 —</div>
          <h2 className="cs-section-title">Impact</h2>
        </div>
        <div className="cs-col rev d1">
          <div>
            <div className="cs-col-label">The Outcome</div>
            <div className="cs-col-body">
              <p>Since its release, the overall reception of LookdevX has been overwhelmingly positive. I am proud of the small part I had to play in bringing this feature to market.</p>
              <p>By embedding the education directly into the interface, we reduced the need for users to leave Maya to search for answers.</p>
            </div>
          </div>
        </div>
        <div className="cs-col rev d2">
          <div>
            <div className="cs-col-label">Reflection</div>
            <div className="cs-col-body">
              <p>This project highlighted the importance of <strong>Content-First Design</strong>. Even though my role has since shifted into product design, I still use a content-first approach.</p>
              <p>In complex software, the text isn&rsquo;t an accessory — it is usually the primary interface.</p>
              <p>A button is useless if the user is afraid to click it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT */}
      <div className="cs-next rev">
        <Link href="/work/leaderboard-app" className="cs-next-btn">Next Project →</Link>
      </div>
    </>
  );
}
