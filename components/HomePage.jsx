import React from 'react';
import { Play, ArrowRight, ClipboardList, FlaskConical, Factory, Rocket } from 'lucide-react';

const BLUE = '#3B60E4';
const BLUE_DEEP = '#2F4FC9';
const GREEN = '#1E8E5A';
const GREEN_DEEP = '#176E46';
const SLATE = '#3D4654';
const MUTED = '#6B7280';
const INK = '#2E4259';
const BLUE_LIGHT = '#EEF2FE';
const GREEN_LIGHT = '#E1F4EE';

function Eyebrow({ children, color = BLUE }) {
  return (
    <p
      className="text-xs font-bold uppercase mb-4"
      style={{ color, letterSpacing: '0.22em' }}
    >
      {children}
    </p>
  );
}

export default function HomePage({ onContactClick, onWatchFilm, onNavigate }) {
  const [videoReady, setVideoReady] = React.useState(false);

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative w-full" style={{ height: '100vh', minHeight: 560 }}>
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            backgroundColor: INK,
            backgroundImage: 'url(/images/hero-poster.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <video
            className="w-full h-full object-cover"
            poster="/images/hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onPlaying={() => setVideoReady(true)}
            onLoadedData={(e) => { if (e.currentTarget.readyState >= 3) setVideoReady(true); }}
            style={{
              opacity: videoReady ? 1 : 0,
              transition: 'opacity 700ms ease-in-out'
            }}
          >
            <source src="/videos/secobio2.mp4" type="video/mp4" />
            <source src="/videos/secobio.mov" type="video/quicktime" />
          </video>
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(12,16,24,0.72) 0%, rgba(12,16,24,0.34) 26%, rgba(12,16,24,0) 55%)'
            }}
          />
        </div>

        <div
          className="relative h-full flex flex-col justify-end items-start text-left px-6 md:px-14"
          style={{ paddingBottom: 'clamp(120px, 17vw, 230px)' }}
        >
          <div style={{ maxWidth: 620 }}>
            <h1
              className="text-white font-bold mb-4"
              style={{
                fontSize: 'clamp(1.95rem, 3.6vw, 3.1rem)',
                lineHeight: 1.06,
                letterSpacing: '-0.028em'
              }}
            >
              Keeping the <span style={{ color: GREEN }}>living</span> alive.
            </h1>

            <p
              className="text-white mb-7"
              style={{ fontSize: 'clamp(0.98rem, 1.25vw, 1.13rem)', lineHeight: 1.6, opacity: 0.9 }}
            >
              Live bacteria don't survive the shelf. Our platform makes them survive it — and puts strains that never could on it for the first time.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => onNavigate('platform')}
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-white text-sm font-semibold transition-transform hover:-translate-y-0.5"
                style={{ color: SLATE }}
              >
                Learn more about the platform
              </button>
              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center px-7 py-3 rounded-full border-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{ borderColor: 'rgba(255,255,255,0.5)' }}
              >
                Talk to us
              </button>
            </div>

            <div>
              <button
                onClick={onWatchFilm}
                aria-label="Watch the Seco Bio promo video"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-full text-xs font-semibold transition-opacity hover:opacity-100"
                style={{ color: 'rgba(255,255,255,0.85)', fontSize: '13px' }}
              >
                <Play size={14} fill="rgba(255,255,255,0.85)" />
                Watch Seco promo video
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            style={{ display: 'block', width: '100%', height: 'clamp(70px, 13vw, 200px)' }}
          >
            <path d="M0,200 L0,8 C360,150 1080,150 1440,8 L1440,200 Z" fill="#FFFFFF" />
          </svg>
        </div>
      </section>

      {/* ===== WHERE THIS CAME FROM ===== */}
      <section className="py-28 px-6" style={{ backgroundColor: '#F7F8FA' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div
            className="rounded-2xl overflow-hidden"
            style={{ aspectRatio: '4 / 3', backgroundColor: INK }}
          >
            <img
              src="/images/photo/space-1.jpg"
              alt="Research funded for long-duration missions"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <Eyebrow>Where this came from</Eyebrow>
            <h2
              className="font-bold mb-7"
              style={{
                color: SLATE,
                fontSize: 'clamp(1.7rem, 3vw, 2.5rem)',
                lineHeight: 1.12,
                letterSpacing: '-0.025em'
              }}
            >
              Built to keep bacteria alive where nothing else could.
            </h2>
            <p className="mb-6" style={{ color: MUTED, fontSize: '17px', lineHeight: 1.75 }}>
              From 2017 to 2024, NASA and DARPA funded research at MIT aimed at keeping bacteria alive for soldiers in the field and astronauts on long missions. It published in <em>Nature Materials</em> in 2024.
            </p>
            <p style={{ color: MUTED, fontSize: '17px', lineHeight: 1.75 }}>
              Seco Bio exists to bring it to the industries that need it now.
            </p>
          </div>
        </div>
      </section>

      {/* ===== THE PROBLEM ===== */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Eyebrow>The Problem</Eyebrow>
          <h2
            className="font-bold mb-7"
            style={{
              color: SLATE,
              fontSize: 'clamp(1.9rem, 3.4vw, 2.9rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em'
            }}
          >
            Living products die on the way to you.
          </h2>
          <p style={{ color: MUTED, fontSize: '17px', lineHeight: 1.75, maxWidth: '800px', marginBottom: '3rem' }}>
            Probiotics are alive. That's the entire point of them — and it's also the problem. Bacteria have to survive being dried, pressed into tablets, sealed in bottles, shipped through heat, and stored for months before anyone opens the package. Most of them don't.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div style={{ color: BLUE, fontSize: '32px', fontWeight: 700, marginBottom: '8px', fontFamily: 'ui-monospace' }}>7 of 13</div>
              <div style={{ color: SLATE, fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>Matched the label</div>
              <p style={{ color: MUTED, fontSize: '15px', lineHeight: 1.6 }}>probiotic products tested contained the number of living cells printed on the label</p>
            </div>
            <div className="text-center">
              <div style={{ color: BLUE, fontSize: '32px', fontWeight: 700, marginBottom: '8px', fontFamily: 'ui-monospace' }}>1 in 50</div>
              <div style={{ color: SLATE, fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>Alive on arrival</div>
              <p style={{ color: MUTED, fontSize: '15px', lineHeight: 1.6 }}>cells in the average product was still alive when the consumer opened it</p>
            </div>
            <div className="text-center">
              <div style={{ color: BLUE, fontSize: '32px', fontWeight: 700, marginBottom: '8px', fontFamily: 'ui-monospace' }}>360×</div>
              <div style={{ color: SLATE, fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>Overfilled to compensate</div>
              <p style={{ color: MUTED, fontSize: '15px', lineHeight: 1.6 }}>more bacteria loaded at the factory than the label promises, to compensate for the die-off</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE OPPORTUNITY ===== */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <Eyebrow style={{ justifyContent: 'center', display: 'flex' }}>The Opportunity</Eyebrow>
            <h2
              className="font-bold"
              style={{
                color: SLATE,
                fontSize: 'clamp(1.9rem, 3.4vw, 2.9rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                marginBottom: '1rem'
              }}
            >
              Today's live probiotics reach a <span style={{ color: BLUE, fontStyle: 'italic' }}>tiny fraction</span> of the gut microbiome.
            </h2>
            <p style={{ color: MUTED, fontSize: '17px', lineHeight: 1.75, maxWidth: '800px', margin: '0 auto' }}>
              The bottleneck is delivery, not biology. Our platform unlocks the &gt;98% of longevity-relevant species today's live, dry formats cannot reach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* On the shelf today */}
            <div style={{ backgroundColor: BLUE_LIGHT, padding: '3rem', borderRadius: '12px', textAlign: 'center', borderTop: '3px solid ' + BLUE }}>
              <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: SLATE, marginBottom: '1rem' }}>On the shelf today</div>
              <p style={{ fontSize: '13px', color: MUTED, marginBottom: '2rem' }}>Commercially deployed live "fragile" strains</p>
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${BLUE} 0%, ${BLUE_DEEP} 100%)`,
                  margin: '0 auto 2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div style={{ color: 'white', textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: 700, lineHeight: 1 }}>~10–20</div>
                  <div style={{ fontSize: '13px', opacity: 0.9 }}>strains</div>
                </div>
              </div>
              <p style={{ fontSize: '14px', color: SLATE, lineHeight: 1.7 }}>Dominated by 3 genera: Lactobacillus, Bifidobacterium, Saccharomyces</p>
            </div>

            {/* Gap indicator */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: '2px dashed ' + MUTED, margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 700, color: MUTED }}>
                ~50×
              </div>
              <p style={{ fontSize: '13px', fontWeight: 600, color: MUTED, lineHeight: 1.5 }}>at the species<br />level alone</p>
            </div>

            {/* Inside a healthy gut */}
            <div style={{ backgroundColor: GREEN_LIGHT, padding: '3rem', borderRadius: '12px', textAlign: 'center', borderTop: '3px solid ' + GREEN }}>
              <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: GREEN_DEEP, marginBottom: '1rem' }}>Inside a healthy gut</div>
              <p style={{ fontSize: '13px', color: MUTED, marginBottom: '2rem' }}>Bacterial species per individual (NIH HMP / MetaHIT)</p>
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${GREEN} 0%, ${GREEN_DEEP} 100%)`,
                  margin: '0 auto 2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div style={{ color: 'white', textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: 700, lineHeight: 1 }}>~1,000</div>
                  <div style={{ fontSize: '13px', opacity: 0.9 }}>species</div>
                </div>
              </div>
              <p style={{ fontSize: '14px', color: SLATE, lineHeight: 1.7 }}>5,414 prokaryotic species cataloged across the human gut. 3.3M unique microbial genes — <strong>150× the human genome.</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PLATFORM & SCIENCE ===== */}
      <section className="py-28 px-6" style={{ backgroundColor: '#F7F8FA' }}>
        <div className="max-w-6xl mx-auto">
          <Eyebrow>Platform & Science</Eyebrow>
          <h2
            className="font-bold mb-7"
            style={{
              color: SLATE,
              fontSize: 'clamp(1.9rem, 3.4vw, 2.9rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em'
            }}
          >
            Predict the winning formula before a single cell enters the lab.
          </h2>
          <p style={{ color: MUTED, fontSize: '17px', lineHeight: 1.75, maxWidth: '800px', marginBottom: '3rem' }}>
            AI-native formulation. Autonomous wet-lab. Every strain we solve trains the platform — and the platform gets faster with every loop.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { n: '01', title: 'Predict', desc: 'AI-native formulation. AI models forecast the optimal protective ingredients—sugars, proteins, lipids—for any live bioproduct, before a single wet-lab experiment is run.' },
              { n: '02', title: 'Prove', desc: 'Autonomous wet-lab. Closed-loop robotics run hundreds of formulation trials in parallel—validating shelf-stability in days, not years.' },
              { n: '03', title: 'Scale', desc: 'Kilogram-scale PoC in months. Every candidate moves from concept to kilogram-scale commercial proof-of-concept in months. Then licensed by Strain, Field, and Formula.' }
            ].map(({ n, title, desc }) => (
              <div key={n}>
                <div style={{ color: BLUE, fontSize: '32px', fontWeight: 700, marginBottom: '1rem', fontFamily: 'ui-monospace' }}>{n}</div>
                <h4 style={{ color: SLATE, fontSize: '16px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '1rem' }}>{title}</h4>
                <p style={{ color: MUTED, fontSize: '15px', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Moat Banner */}
          <div style={{ backgroundColor: BLUE_LIGHT, padding: '3rem', borderRadius: '12px', borderLeft: '4px solid ' + BLUE }}>
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-around', gap: '2rem', marginBottom: '2rem' }}>
                <div>
                  <div style={{ fontSize: '28px', fontWeight: 700, color: SLATE, marginBottom: '0.5rem' }}>Industry</div>
                  <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.8px', textTransform: 'uppercase', color: MUTED }}>5–7 years</div>
                </div>
                <div>
                  <div style={{ fontSize: '28px', fontWeight: 700, color: SLATE, marginBottom: '0.5rem' }}>Seco</div>
                  <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.8px', textTransform: 'uppercase', color: MUTED }}>12–18 months</div>
                </div>
              </div>
              <p style={{ fontSize: '16px', color: SLATE, lineHeight: 1.8, marginBottom: '2rem' }}>Partner launches. Seco keeps the data. Every customer engagement runs the same closed loop — and every loop trains the AI/ML database. The moat compounds with every program.</p>
              <p style={{ fontSize: '13px', color: MUTED, lineHeight: 1.7, paddingTop: '2rem', borderTop: '1px solid #DCE3F7' }}>Formulations are built exclusively from ingredients already broadly accepted for food and dietary-supplement use across major global frameworks — including the US (FDA GRAS), the EU (EFSA), Canada, Japan, and equivalent regimes. Partners retain product-level regulatory ownership in their markets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE TECHNOLOGY ===== */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Eyebrow color={GREEN}>The Technology</Eyebrow>
          <h2
            className="font-bold mb-7"
            style={{
              color: SLATE,
              fontSize: 'clamp(1.9rem, 3.4vw, 2.9rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em'
            }}
          >
            A protective coat of safe ingredients wrapped around every living cell.
          </h2>
          <p style={{ color: MUTED, fontSize: '17px', lineHeight: 1.75, maxWidth: '800px', marginBottom: '3rem' }}>
            No genetic modification — only safe, GRAS / FDA-approved ingredients shield the bacterium from manufacturing to consumption.
          </p>

          <div
            style={{
              aspectRatio: '16/9',
              backgroundColor: '#f5f5f5',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#999',
              fontSize: '14px',
              marginBottom: '3rem'
            }}
          >
            [Microscopy hero shot · protective coat + live cell]
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center mb-6">
            <div style={{ backgroundColor: '#FFF3E0', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #FF9800' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', color: SLATE, marginBottom: '1rem' }}>Today's industry fix: overfill</div>
              <p style={{ fontSize: '15px', color: SLATE, lineHeight: 1.7 }}>Brands load 200%–36,000%+ above label to survive die-off — yet viability stays unpredictable and can miss the claim by end of shelf life.</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', color: MUTED }}>→</div>
            </div>

            <div style={{ backgroundColor: GREEN_LIGHT, padding: '2rem', borderRadius: '12px', borderLeft: '4px solid ' + GREEN }}>
              <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', color: GREEN_DEEP, marginBottom: '1rem' }}>The Seco coating</div>
              <p style={{ fontSize: '15px', color: SLATE, lineHeight: 1.7 }}>The cell stays alive on its own, so brands slash overfill, cut COGS, and meet the label claim at consumption.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PEER-REVIEWED PROOF ===== */}
      <section className="py-28 px-6" style={{ backgroundColor: '#F7F8FA' }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <Eyebrow style={{ display: 'flex', justifyContent: 'center' }}>Peer-reviewed proof</Eyebrow>
            <h2
              className="font-bold"
              style={{
                color: SLATE,
                fontSize: 'clamp(1.9rem, 3.4vw, 2.9rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em'
              }}
            >
              One study. Every number on this site.
            </h2>
          </div>

          {/* Two-column findings */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div style={{ backgroundColor: BLUE_LIGHT, padding: '3rem', borderRadius: '12px' }}>
              <h4 style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', color: BLUE_DEEP, marginBottom: '2rem' }}>What the research documented</h4>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '32px', fontWeight: 700, color: SLATE, marginBottom: '0.5rem', fontFamily: 'ui-monospace' }}>7 of 13</div>
                <p style={{ fontSize: '14px', color: MUTED }}>commercial products matched their label claim</p>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '32px', fontWeight: 700, color: SLATE, marginBottom: '0.5rem', fontFamily: 'ui-monospace' }}>1 in 50</div>
                <p style={{ fontSize: '14px', color: MUTED }}>cells still alive when the product was opened</p>
              </div>
              <div>
                <div style={{ fontSize: '32px', fontWeight: 700, color: SLATE, marginBottom: '0.5rem', fontFamily: 'ui-monospace' }}>360×</div>
                <p style={{ fontSize: '14px', color: MUTED }}>overfill at the factory to compensate for die-off</p>
              </div>
            </div>

            <div style={{ backgroundColor: GREEN_LIGHT, padding: '3rem', borderRadius: '12px' }}>
              <h4 style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', color: GREEN_DEEP, marginBottom: '2rem' }}>What Seco proved</h4>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '32px', fontWeight: 700, color: SLATE, marginBottom: '0.5rem', fontFamily: 'ui-monospace' }}>10,000×</div>
                <p style={{ fontSize: '14px', color: MUTED }}>more surviving cells vs. the commercial version</p>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '32px', fontWeight: 700, color: SLATE, marginBottom: '0.5rem', fontFamily: 'ui-monospace' }}>6½ months</div>
                <p style={{ fontSize: '14px', color: MUTED }}>at body temperature, still alive</p>
              </div>
              <div>
                <div style={{ fontSize: '32px', fontWeight: 700, color: SLATE, marginBottom: '0.5rem', fontFamily: 'ui-monospace' }}>2,080</div>
                <p style={{ fontSize: '14px', color: MUTED }}>formulations tested across four organisms</p>
              </div>
            </div>
          </div>

          <p style={{ textAlign: 'center', fontSize: '13px', color: MUTED, lineHeight: 1.7 }}>
            Jimenez, M., L'Heureux, J., Kolaya, E., et al. <em>Nature Materials</em>, 2024. Funded by NASA + DARPA. Full methods and data available.
          </p>
        </div>
      </section>

      {/* ===== WHO WE WORK WITH ===== */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div style={{ marginBottom: '3rem' }}>
            <Eyebrow>Who We Work With</Eyebrow>
            <h2
              className="font-bold mb-4"
              style={{
                color: SLATE,
                fontSize: 'clamp(1.9rem, 3.4vw, 2.9rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em'
              }}
            >
              Two kinds of partners. One platform.
            </h2>
            <p style={{ color: MUTED, fontSize: '17px', lineHeight: 1.75, maxWidth: '900px' }}>
              Seco is a technology licensing platform, built to serve global partners across nutrition, biopharma, consumer health, and animal health — in the US and internationally. We partner with brands and manufacturers who make live bioproducts, and with capital partners who help us scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: 600, color: SLATE, marginBottom: '1rem' }}>Business Partners</h4>
              <p style={{ color: MUTED, fontSize: '16px', lineHeight: 1.8, marginBottom: '1rem' }}>
                Brands, manufacturers, and ingredient partners bringing us a strain and a target. We formulate the protection and license it to you — so your product delivers what the label promises. Built to scale with you, not around you.
              </p>
              <p style={{ color: MUTED, fontSize: '13px' }}><strong>Licensed by Strain · Field · Formula</strong></p>
            </div>

            <div>
              <h4 style={{ fontSize: '16px', fontWeight: 600, color: SLATE, marginBottom: '1rem' }}>Capital Partners</h4>
              <p style={{ color: MUTED, fontSize: '16px', lineHeight: 1.8, marginBottom: '1rem' }}>
                Partners scaling the platform from strategic to institutional growth capital. Every strain solved becomes protected IP that compounds. We work with capital partners aligned to the long-term platform opportunity.
              </p>
              <p style={{ color: MUTED, fontSize: '13px' }}><strong>Platform IP · Vertical expansion · Global portfolio</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW WE WORK ===== */}
      <section className="py-28 px-6" style={{ backgroundColor: '#F7F8FA' }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ marginBottom: '3rem' }}>
            <Eyebrow>How we work</Eyebrow>
            <h2
              className="font-bold"
              style={{
                color: SLATE,
                fontSize: 'clamp(1.9rem, 3.4vw, 2.9rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em'
              }}
            >
              Four steps, one strain at a time.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { n: '01', title: 'You tell us', desc: 'Share the strain, the target, and the format. Under mutual NDA.' },
              { n: '02', title: 'We find the formula', desc: 'High-throughput screen across the GRAS material library. Species-specific.' },
              { n: '03', title: 'We prove it on your line', desc: 'We formulate against your equipment specs from day one. Batch-scale validation.' },
              { n: '04', title: 'You launch', desc: 'Commercial license. You sell it. We keep the platform working.' }
            ].map(({ n, title, desc }, i, arr) => (
              <div key={n} className="flex flex-col">
                <div
                  style={{
                    backgroundColor: ['#6B8BF0', '#4A6DE8', '#3355D8', '#2440B4'][i],
                    color: 'white',
                    padding: '16px 20px',
                    borderRadius: '6px 6px 0 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  <span style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.1em', fontFamily: 'ui-monospace' }}>{n}</span>
                </div>
                <div style={{ padding: '20px', backgroundColor: '#FAFBFC', flex: 1 }}>
                  <h4 style={{ fontSize: '15px', fontWeight: 600, color: SLATE, marginBottom: '12px' }}>{title}</h4>
                  <p style={{ fontSize: '14px', color: MUTED, lineHeight: 1.6 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHERE WE FOCUS ===== */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div style={{ marginBottom: '3rem' }}>
            <Eyebrow color={GREEN}>Where We Focus</Eyebrow>
            <h2
              className="font-bold"
              style={{
                color: SLATE,
                fontSize: 'clamp(1.9rem, 3.4vw, 2.9rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em'
              }}
            >
              Probiotics today. Broader living products tomorrow.
            </h2>
          </div>

          {/* Core Focus */}
          <div style={{ marginBottom: '3rem' }}>
            <h4 style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1.2px', textTransform: 'uppercase', color: MUTED, marginBottom: '2rem' }}>Core Focus</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: 'H', title: 'Human Probiotics', desc: 'Supplements and live bioproducts' },
                { icon: 'E', title: 'Early Life', desc: 'Infant & maternal health' },
                { icon: 'A', title: 'Animal Probiotics', desc: 'Pet & livestock health' }
              ].map(({ icon, title, desc }) => (
                <div key={icon} style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '3px solid ' + BLUE }}>
                  <div style={{ fontSize: '32px', fontWeight: 700, color: BLUE, marginBottom: '1rem' }}>{icon}</div>
                  <h5 style={{ fontSize: '16px', fontWeight: 600, color: SLATE, marginBottom: '0.5rem' }}>{title}</h5>
                  <p style={{ fontSize: '13px', color: MUTED }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Prospective Expansion */}
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1.2px', textTransform: 'uppercase', color: MUTED, marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #DCE3F7' }}>Prospective Expansion</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: 'P', title: 'Pharmaceuticals & Medical Devices' },
                { icon: 'G', title: 'Agriculture' },
                { icon: 'I', title: 'Industrial' },
                { icon: 'S', title: 'Space Exploration' }
              ].map(({ icon, title }) => (
                <div key={icon} style={{ border: '1px solid #DCE3F7', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '24px', fontWeight: 700, color: MUTED, marginBottom: '1rem' }}>{icon}</div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: SLATE }}>{title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== START A CONVERSATION ===== */}
      <section className="py-32 px-6 text-center" style={{ backgroundColor: INK }}>
        <h3 style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1.2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem' }}>Start a conversation</h3>
        <h2
          className="text-white font-bold mb-6"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.03em' }}
        >
          For business and <span style={{ fontStyle: 'italic' }}>capital</span> partners.
        </h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
          Tell us what you're working on. We'll write back.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
          <div style={{ border: '2px solid rgba(59, 96, 228, 0.4)', padding: '2rem', borderRadius: '12px', borderTop: '3px solid #3B60E4' }}>
            <h4 style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.8px', textTransform: 'uppercase', color: 'white', marginBottom: '0.5rem' }}>Business Partners</h4>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', marginBottom: 0 }}>Brands, manufacturers, ingredient partners</p>
          </div>
          <div style={{ border: '2px solid rgba(30, 142, 90, 0.4)', padding: '2rem', borderRadius: '12px', borderTop: '3px solid #1E8E5A' }}>
            <h4 style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.8px', textTransform: 'uppercase', color: 'white', marginBottom: '0.5rem' }}>Capital Partners</h4>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', marginBottom: 0 }}>Partners scaling the platform with us</p>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <a href="mailto:info@seco.bio" style={{ fontSize: '18px', fontWeight: 600, color: 'white', textDecoration: 'underline', cursor: 'pointer' }}>
            info@seco.bio
          </a>
        </div>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>Include your company, your role, and what you'd like to discuss.</p>
      </section>
    </div>
  );
}
