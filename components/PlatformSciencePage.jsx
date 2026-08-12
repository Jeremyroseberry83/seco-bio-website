import React from 'react';
import { CountUp } from './ui';

const BLUE = '#3B60E4';
const GREEN = '#1E8E5A';
const SLATE = '#3D4654';
const MUTED = '#6B7280';
const INK = '#2E4259';
const BG = '#FAFBFD';

// Dark, bold section backgrounds — 85-90% opacity of the site's darker brand colors,
// used to break up the all-white page with alternating color blocks.
const DARK_GREEN_BG = 'rgba(13, 68, 41, 0.88)';   // matches the footer's dark green gradient stop
const DARK_INK_BG = 'rgba(46, 66, 89, 0.9)';      // matches INK, deepened for a bold block
const LIGHT_GREEN_ACCENT = '#7FE3A8';             // eyebrow/accent tint legible on DARK_GREEN_BG
const LIGHT_BLUE_ACCENT = '#8FADFF';              // eyebrow/accent tint legible on DARK_INK_BG

// Light tints used for the in-page comparison/stat cards
const BLUE_BG_LIGHT = '#EEF1FD';
const GREEN_BG_LIGHT = '#EAF7EF';
const GRAY_BG_LIGHT = '#F3F4F6';
const PINK = '#D1226B';
const PINK_BG = '#FDECF2';

export default function PlatformSciencePage({ onNavigate }) {
  return (
    <div>
      {/* HERO WITH IMAGE */}
      <section style={{ padding: '0', backgroundColor: 'white', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: 'url(/images/lab-blue.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.65)' }} />
        <div className="max-w-6xl mx-auto" style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'white', padding: '4rem 1.5rem' }}>
          <h3 style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)', marginBottom: '1rem' }}>Science & Evidence</h3>
          <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.1 }}>Our peer-reviewed <span style={{ color: GREEN }}>publications.</span></h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.95)', lineHeight: 1.8 }}>Every ingredient we develop is backed by rigorous science. Browse our growing library of peer-reviewed research across clinical trials, AI discovery, and nutritional interventions.</p>
        </div>
      </section>

      {/* 1. THE PLATFORM */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: GREEN, marginBottom: '1rem' }}>The Platform</h3>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: SLATE, marginBottom: '1.5rem', lineHeight: 1.2 }}>This is published science, not a pitch.</h2>
            <p style={{ fontSize: '16px', color: MUTED, lineHeight: 1.8, marginBottom: '2rem' }}>The underlying research was funded by NASA and DARPA, carried out at MIT, and published in Nature Materials with full methods and data. Anyone can check it.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: 60, height: 60, borderRadius: '50%', backgroundColor: GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, flexShrink: 0 }}>✓</div>
                <div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: SLATE, marginBottom: '0.25rem' }}><CountUp end={10000} suffix="×" /></div>
                  <div style={{ fontSize: '14px', color: MUTED }}>more surviving cells than an uncoated commercial strain</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: 60, height: 60, borderRadius: '50%', backgroundColor: GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, flexShrink: 0 }}>✓</div>
                <div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: SLATE, marginBottom: '0.25rem' }}><CountUp end={6.5} decimals={1} suffix=" months" /></div>
                  <div style={{ fontSize: '14px', color: MUTED }}>at body temperature, and still alive</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: 60, height: 60, borderRadius: '50%', backgroundColor: GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, flexShrink: 0 }}>✓</div>
                <div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: SLATE, marginBottom: '0.25rem' }}><CountUp end={2080} /></div>
                  <div style={{ fontSize: '14px', color: MUTED }}>formulations tested to find what works</div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a href="https://www.nature.com/articles/s41563-024-01937-6" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: BLUE, color: 'white', padding: '12px 24px', borderRadius: '24px', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
                Read the research in Nature Materials →
              </a>
              <a href="/papers/Nature-Materials-Seco.pdf" download style={{ display: 'inline-block', backgroundColor: 'white', color: BLUE, border: `2px solid ${BLUE}`, padding: '10px 24px', borderRadius: '24px', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
                Download the paper (PDF)
              </a>
            </div>
          </div>
          <div style={{ aspectRatio: '1', backgroundColor: GRAY_BG_LIGHT, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <img src="/images/microscope-bench.jpg" alt="Microscope" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* 2. THE GAP */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <h3 style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: GREEN, marginBottom: '1rem' }}>The Gap</h3>
          <h2 style={{ fontSize: '36px', fontWeight: 700, color: SLATE, marginBottom: '1rem', lineHeight: 1.2 }}>Today's probiotics reach a tiny fraction of what actually lives in a healthy gut.</h2>
          <p style={{ fontSize: '16px', color: MUTED, lineHeight: 1.8, marginBottom: '2.5rem', fontStyle: 'italic' }}>The bacteria linked to long-term gut health go far beyond the handful of strains that survive today's manufacturing process.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ backgroundColor: GRAY_BG_LIGHT, borderRadius: '12px', borderTop: `4px solid ${MUTED}`, padding: '2rem' }}>
              <h4 style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: MUTED, marginBottom: '1rem' }}>On the Shelf Today</h4>
              <div style={{ fontSize: '40px', fontWeight: 700, color: SLATE, marginBottom: '0.5rem' }}>~10–20 <span style={{ fontSize: '18px', fontWeight: 600, color: MUTED }}>strains</span></div>
              <p style={{ fontSize: '14px', color: MUTED, lineHeight: 1.7 }}>Commercially deployed live strains, dominated by just three genera: <em>Lactobacillus</em>, <em>Bifidobacterium</em>, <em>Saccharomyces</em>.</p>
            </div>
            <div style={{ backgroundColor: GREEN_BG_LIGHT, borderRadius: '12px', borderTop: `4px solid ${GREEN}`, padding: '2rem' }}>
              <h4 style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: GREEN, marginBottom: '1rem' }}>Inside a Healthy Gut</h4>
              <div style={{ fontSize: '40px', fontWeight: 700, color: SLATE, marginBottom: '0.5rem' }}><CountUp end={1000} prefix="~" /> <span style={{ fontSize: '18px', fontWeight: 600, color: MUTED }}>species</span></div>
              <p style={{ fontSize: '14px', color: MUTED, lineHeight: 1.7 }}>Bacterial species found in a healthy human gut microbiome, per the NIH Human Microbiome Project.</p>
            </div>
          </div>

          <div style={{ backgroundColor: INK, color: 'white', borderRadius: '10px', padding: '1.5rem 2rem', textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ fontSize: '28px', fontWeight: 700, color: LIGHT_GREEN_ACCENT, marginRight: '0.5rem' }}><CountUp end={50} prefix="~" suffix="×" /></span>
            gap at the species level alone.
          </div>

          <p style={{ fontSize: '16px', color: SLATE, lineHeight: 1.8 }}>
            <strong>The bottleneck is delivery, not biology.</strong>{' '}
            <span style={{ color: MUTED }}>Seco's ruggedization platform is built to unlock the species today's live, dry formats can't reach.</span>
          </p>
        </div>
      </section>

      {/* 3. BEYOND THE SHELF */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: DARK_GREEN_BG }}>
        <div className="max-w-6xl mx-auto">
          <h3 style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: LIGHT_GREEN_ACCENT, marginBottom: '1rem' }}>Beyond the Shelf</h3>
          <h2 style={{ fontSize: '36px', fontWeight: 700, color: 'white', marginBottom: '1rem', lineHeight: 1.2 }}>Anything alive that has to survive a journey.</h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: '3rem' }}>Probiotics are where we start, because the need is immediate and the market is large. The same protection applies anywhere a living organism has to survive being processed, stored, and transported.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'People', desc: 'Supplements and live medicines', img: '/images/family.jpg' },
              { title: 'Animals', desc: 'Pet and livestock health', img: '/images/pets-feeding.jpg' },
              { title: 'Farming', desc: 'Seed and soil treatments', img: '/images/nutrition.jpg' },
              { title: 'Early life', desc: 'Infant and maternal health', img: '/images/earlylife.jpg' }
            ].map(({ title, desc, img }) => (
              <div key={title}>
                <div style={{ aspectRatio: '1', backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: '8px', marginBottom: '1rem', overflow: 'hidden' }}>
                  <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h4 style={{ fontSize: '16px', fontWeight: 600, color: 'white', marginBottom: '0.5rem' }}>{title}</h4>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE TECHNOLOGY */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <h3 style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: BLUE, marginBottom: '1rem' }}>The Technology</h3>
          <h2 style={{ fontSize: '36px', fontWeight: 700, color: SLATE, marginBottom: '1rem', lineHeight: 1.2 }}>A protective coat of safe ingredients <span style={{ color: BLUE, fontStyle: 'italic' }}>wrapped around every living cell.</span></h2>
          <p style={{ fontSize: '16px', color: MUTED, lineHeight: 1.8, marginBottom: '2.5rem', fontStyle: 'italic' }}>No genetic modification — only safe, GRAS / FDA-approved ingredients shield the bacterium from manufacturing to consumption.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', minHeight: '340px' }}>
              <img src="/images/science/bacteria.jpg" alt="Live probiotic cell" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
              <div style={{ position: 'absolute', top: '8%', right: '5%', backgroundColor: 'white', border: `2px solid ${BLUE}`, borderRadius: '8px', padding: '10px 16px', maxWidth: 200 }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: BLUE }}>LIVE CELL</div>
                <div style={{ fontSize: '12px', color: SLATE }}>The probiotic bacterium</div>
              </div>
              <div style={{ position: 'absolute', bottom: '6%', left: '5%', backgroundColor: 'white', border: `2px solid ${BLUE}`, borderRadius: '8px', padding: '10px 16px', maxWidth: 220 }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: BLUE }}>SAFE COATING</div>
                <div style={{ fontSize: '12px', color: SLATE }}>Proprietary GRAS / FDA approved ingredients</div>
              </div>
            </div>

            <div style={{ backgroundColor: BLUE_BG_LIGHT, borderRadius: '12px', borderTop: `4px solid ${BLUE}`, padding: '2rem' }}>
              <h4 style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: BLUE, marginBottom: '1.5rem' }}>How It Works</h4>
              <div style={{ backgroundColor: 'rgba(59,96,228,0.15)', border: `1px solid ${BLUE}`, borderRadius: '999px', padding: '14px 10px', textAlign: 'center' }}>
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.5px', color: BLUE, marginBottom: '8px' }}>SAFE COATING</div>
                <div style={{ backgroundColor: BLUE, color: 'white', borderRadius: '999px', padding: '10px 20px', fontSize: '13px', fontWeight: 700, display: 'inline-block' }}>LIVE CELL</div>
              </div>
              <p style={{ fontSize: '13px', color: MUTED, fontStyle: 'italic', textAlign: 'center', margin: '1rem 0 1.5rem' }}>Shields the cell through milling, drying, shelf life & digestion</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { title: 'No genetic modification', desc: 'The strain is never altered' },
                  { title: 'GRAS / FDA-approved only', desc: 'Already-approved compounds — no new approvals' },
                  { title: 'Keeps cells alive', desc: 'Viable to point of consumption' }
                ].map(({ title, desc }) => (
                  <div key={title} style={{ display: 'flex', gap: '0.75rem' }}>
                    <div style={{ width: 26, height: 26, borderRadius: '50%', backgroundColor: GREEN, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, flexShrink: 0 }}>✓</div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: SLATE }}>{title}</div>
                      <div style={{ fontSize: '13px', color: MUTED }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'stretch', justifyContent: 'center' }}>
            <div style={{ flex: '1 1 300px', backgroundColor: PINK_BG, borderRadius: '10px', padding: '1.5rem' }}>
              <h4 style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: PINK, marginBottom: '0.75rem' }}>Today's Industry Fix: Overfill</h4>
              <p style={{ fontSize: '14px', color: SLATE, lineHeight: 1.7 }}>Brands load <strong>200%–36,000%+ above label</strong> to survive die-off — yet viability stays unpredictable and can <strong>miss the claim by end of shelf life.</strong></p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', fontSize: '28px', color: MUTED }}>→</div>
            <div style={{ flex: '1 1 300px', backgroundColor: GREEN_BG_LIGHT, borderRadius: '10px', padding: '1.5rem' }}>
              <h4 style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: GREEN, marginBottom: '0.75rem' }}>The Seco Coating</h4>
              <p style={{ fontSize: '14px', color: SLATE, lineHeight: 1.7 }}>The cell stays alive on its own, so brands <strong>slash overfill, cut COGS (cost of goods sold),</strong> and <strong>meet the label claim at consumption.</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE PROBLEM */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <h3 style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: BLUE, marginBottom: '1rem' }}>The Problem</h3>
          <h2 style={{ fontSize: '36px', fontWeight: 700, color: SLATE, marginBottom: '1rem', lineHeight: 1.2 }}>Living products <span style={{ color: BLUE, fontStyle: 'italic' }}>die</span> on the way to you.</h2>
          <p style={{ fontSize: '16px', color: MUTED, lineHeight: 1.8, marginBottom: '0.5rem' }}>Probiotics are alive. That's the entire point of them — and it's also the problem. Bacteria have to survive being dried, pressed into tablets, sealed in bottles, shipped through heat, and stored for months before anyone opens the package.</p>
          <p style={{ fontSize: '22px', fontWeight: 700, color: SLATE, marginBottom: '2.5rem' }}>Most of them don't.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
            {[
              { label: 'Matched the label', value: '7 of 13', caption: 'probiotic products tested contained the number of living cells printed on the label' },
              { label: 'Alive on arrival', value: '1 in 50', caption: 'cells in the average product was still alive when the consumer opened it' },
              { label: 'Overfilled to compensate', value: '360×', caption: 'more bacteria loaded at the factory than the label promises, to compensate for the die-off' }
            ].map(({ label, value, caption }) => (
              <div key={label} style={{ backgroundColor: 'white', borderRadius: '12px', borderTop: `4px solid ${BLUE}`, padding: '1.5rem' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', color: BLUE, marginBottom: '0.75rem' }}>{label}</div>
                <div style={{ fontSize: '32px', fontWeight: 700, color: SLATE, marginBottom: '0.5rem' }}>{value}</div>
                <div style={{ fontSize: '13px', color: MUTED, lineHeight: 1.6 }}>{caption}</div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '13px', color: MUTED, fontStyle: 'italic' }}>These findings come from peer-reviewed research published in <em>Nature Materials</em> — see the full results below.</p>
        </div>
      </section>

      {/* 6. PLATFORM & SCIENCE — Predict / Prove / Scale */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: DARK_INK_BG }}>
        <div className="max-w-6xl mx-auto">
          <h3 style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: LIGHT_BLUE_ACCENT, marginBottom: '1rem' }}>Platform & Science</h3>
          <h2 style={{ fontSize: '36px', fontWeight: 700, color: 'white', marginBottom: '1rem', lineHeight: 1.2 }}>Predict the winning formula <span style={{ color: LIGHT_BLUE_ACCENT, fontStyle: 'italic' }}>before</span> a single cell enters the lab.</h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '2rem' }}>AI-native formulation. Autonomous wet-lab. Every strain we solve trains the platform — and the platform gets faster with every loop.</p>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1.5rem', backgroundColor: 'white', padding: '1rem 1.5rem', borderRadius: '10px', marginBottom: '2rem' }}>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', color: MUTED, marginBottom: '4px' }}>Industry</div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#C13B3B', textDecoration: 'line-through' }}>5–7 years</div>
            </div>
            <div style={{ fontSize: '22px', color: BLUE, fontWeight: 700 }}>→</div>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', color: MUTED, marginBottom: '4px' }}>Seco</div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: BLUE }}>12–18 months</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            {[
              { num: '01', label: 'Predict', title: 'AI-native formulation', body: 'AI models forecast the optimal protective ingredients — sugars, proteins, lipids — for any live bioproduct, before a single wet-lab experiment is run.' },
              { num: '02', label: 'Prove', title: 'Autonomous wet-lab', body: 'Closed-loop robotics run hundreds of formulation trials in parallel — validating shelf-stability in days, not years.' },
              { num: '03', label: 'Scale', title: 'Kilogram-scale PoC in months', body: 'Every candidate moves from concept to kilogram-scale commercial proof-of-concept in months, then licensed per strain.' }
            ].map(({ num, label, title, body }) => (
              <div key={num} style={{ backgroundColor: 'white', borderRadius: '12px', borderTop: `4px solid ${BLUE}`, padding: '1.5rem' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: BLUE, marginBottom: '0.25rem' }}>{num}</div>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', color: BLUE, marginBottom: '0.5rem' }}>{label}</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: SLATE, marginBottom: '0.5rem' }}>{title}</div>
                <div style={{ fontSize: '13px', color: MUTED, lineHeight: 1.6 }}>{body}</div>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px', padding: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '15px', fontWeight: 700, color: 'white', marginBottom: '0.5rem' }}>Partner launches. Seco keeps the data.</div>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>Every customer engagement runs the same closed loop — and every loop trains the AI/ML database. The moat compounds with every program.</p>
          </div>

          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, fontStyle: 'italic' }}>Formulations are built exclusively from ingredients already broadly accepted for food and dietary-supplement use across major global frameworks — including the US (FDA GRAS), the EU (EFSA), Canada, Japan, and equivalent regimes. Partners retain product-level regulatory ownership in their markets.</p>
        </div>
      </section>

      {/* 7. INTELLECTUAL PROPERTY */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: 'white' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: BLUE, marginBottom: '1rem' }}>Intellectual Property</h3>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: SLATE, marginBottom: '1.5rem', lineHeight: 1.2 }}>Patent-pending, <span style={{ fontWeight: 700 }}>filed by MIT.</span></h2>
            <p style={{ fontSize: '16px', color: MUTED, lineHeight: 1.8, marginBottom: '1.5rem' }}>US patent application 18/477,970, covering strain-specific protective formulations and the manufacturing processes around them.</p>
            <p style={{ fontSize: '16px', color: MUTED, lineHeight: 1.8 }}>Beyond the filing, the platform's defensible assets are the formulation dataset, the predictive models trained on it, and the scale-up protocols — none of which can be reverse-engineered from a finished product.</p>
            <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #DCE3F7' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: MUTED }}>Status</div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: SLATE }}>Patent-pending</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: MUTED }}>Assignee</div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: SLATE }}>MIT</div>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: MUTED, marginBottom: '0.25rem' }}>Application</div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: SLATE }}>18/477,970</div>
              </div>
            </div>
          </div>
          <div style={{ aspectRatio: '1', backgroundColor: '#E8E8E8', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <img src="/images/mitimage.jpg" alt="Lab" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* 8. WHAT KILLS LIVING CELLS */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: DARK_GREEN_BG }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: LIGHT_GREEN_ACCENT, marginBottom: '1rem' }}>What Kills Living Cells</h3>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: 'white', marginBottom: '1.5rem', lineHeight: 1.2 }}>Four stages. <span style={{ color: LIGHT_GREEN_ACCENT }}>Every one takes a share.</span></h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: '1.5rem' }}>A living product has to get from a fermenter to a person's gut without dying on the way. Between those two points sit four distinct kinds of stress, and each one kills a share of the population.</p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontStyle: 'italic' }}>Protection has to survive all four. A formulation that handles drying but fails in gastric acid delivers nothing at the moment of consumption.</p>
          </div>
          <div style={{ aspectRatio: '1', backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <img src="/images/Probitic.avif" alt="Product" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* WHERE DO YOU FIT IN */}
      <section style={{ backgroundColor: 'white', padding: '4rem 1.5rem 5rem' }}>
        <div className="max-w-4xl mx-auto text-center" style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 700, color: SLATE, lineHeight: 1.2 }}>Where do you fit in?</h2>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div
            onClick={() => onNavigate && onNavigate('partners')}
            className="transition-colors"
            style={{ cursor: 'pointer', border: '2px solid rgba(59,96,228,0.2)', borderTop: `3px solid ${BLUE}`, borderRadius: '12px', padding: '2rem' }}
          >
            <h3 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: BLUE, marginBottom: '0.75rem' }}>Business Partners</h3>
            <p style={{ fontSize: '16px', color: MUTED, lineHeight: 1.7 }}>Brands, manufacturers, and ingredient partners bringing us a strain to protect — licensed back to you once it's solved.</p>
          </div>
          <div
            onClick={() => onNavigate && onNavigate('partners')}
            className="transition-colors"
            style={{ cursor: 'pointer', border: '2px solid rgba(30,142,90,0.2)', borderTop: `3px solid ${GREEN}`, borderRadius: '12px', padding: '2rem' }}
          >
            <h3 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: GREEN, marginBottom: '0.75rem' }}>Capital Partners</h3>
            <p style={{ fontSize: '16px', color: MUTED, lineHeight: 1.7 }}>Investors scaling the platform's compounding IP toward a strategic exit.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
