import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import {
  PageHero, Accent, Eyebrow, SplitFeature, HighlightGrid,
  SLATE, MUTED, BLUE, BLUE_DEEP, GREEN, GREEN_DEEP, INK
} from './ui';

const BLUE_LIGHT = '#EEF2FE';
const GREEN_LIGHT = '#E1F4EE';

export default function PlatformSciencePage({ onContactClick }) {
  return (
    <div>
      {/* HERO */}
      <PageHero
        eyebrow="Platform & Science"
        tone="green"
        image="/images/stills/robotics.jpg"
        title={<>Predict the winning formula <Accent>before a single cell enters the lab.</Accent></>}
        subtitle="AI-native formulation. Autonomous wet-lab. Every strain we solve trains the platform — and the platform gets faster with every loop."
      />

      {/* PREDICT / PROVE / SCALE */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-20">
            <Eyebrow>How the platform works</Eyebrow>
            <h2
              className="font-bold"
              style={{
                color: SLATE,
                fontSize: 'clamp(1.9rem, 3.4vw, 2.9rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em'
              }}
            >
              Three steps. Every strain.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div style={{ color: BLUE, fontSize: '32px', fontWeight: 700, marginBottom: '1rem', fontFamily: 'ui-monospace' }}>01</div>
              <h4 style={{ color: SLATE, fontSize: '18px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '1rem' }}>Predict</h4>
              <p style={{ fontSize: '13px', color: MUTED, lineHeight: 1.7, marginBottom: '1rem' }}>AI-native formulation</p>
              <p style={{ color: MUTED, fontSize: '15px', lineHeight: 1.7 }}>
                AI models forecast the optimal protective ingredients—sugars, proteins, lipids—for any live bioproduct, before a single wet-lab experiment is run.
              </p>
            </div>

            <div>
              <div style={{ color: BLUE, fontSize: '32px', fontWeight: 700, marginBottom: '1rem', fontFamily: 'ui-monospace' }}>02</div>
              <h4 style={{ color: SLATE, fontSize: '18px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '1rem' }}>Prove</h4>
              <p style={{ fontSize: '13px', color: MUTED, lineHeight: 1.7, marginBottom: '1rem' }}>Autonomous wet-lab</p>
              <p style={{ color: MUTED, fontSize: '15px', lineHeight: 1.7 }}>
                Closed-loop robotics run hundreds of formulation trials in parallel—validating shelf-stability in days, not years.
              </p>
            </div>

            <div>
              <div style={{ color: BLUE, fontSize: '32px', fontWeight: 700, marginBottom: '1rem', fontFamily: 'ui-monospace' }}>03</div>
              <h4 style={{ color: SLATE, fontSize: '18px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '1rem' }}>Scale</h4>
              <p style={{ fontSize: '13px', color: MUTED, lineHeight: 1.7, marginBottom: '1rem' }}>Kilogram-scale PoC in months</p>
              <p style={{ color: MUTED, fontSize: '15px', lineHeight: 1.7 }}>
                Every candidate moves from concept to kilogram-scale commercial proof-of-concept in months. Then licensed by Strain, Field, and Formula.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MOAT BANNER */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto" style={{ backgroundColor: BLUE_LIGHT, padding: '3rem', borderRadius: '12px', borderLeft: '4px solid ' + BLUE }}>
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
      </section>

      {/* THE TECHNOLOGY */}
      <SplitFeature
        eyebrow="The Technology"
        title={<>A protective coat of safe ingredients <Accent tone="dark">wrapped around every living cell.</Accent></>}
        image="/images/stills/lab-blue.jpg"
      >
        <p className="mb-5">
          No genetic modification — only safe, GRAS / FDA-approved ingredients shield the bacterium from manufacturing to consumption.
        </p>
        <p>
          The cell stays alive on its own, so brands slash overfill, cut COGS, and meet the label claim at consumption.
        </p>
      </SplitFeature>

      {/* COMPARISON */}
      <section className="py-28 px-6" style={{ backgroundColor: '#F7F8FA' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div style={{ backgroundColor: '#FFF3E0', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #FF9800', textAlign: 'center' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', color: SLATE, marginBottom: '1rem' }}>Today's Industry Fix: Overfill</div>
              <p style={{ fontSize: '15px', color: SLATE, lineHeight: 1.7 }}>Brands load 200%–36,000%+ above label to survive die-off — yet viability stays unpredictable and can miss the claim by end of shelf life.</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', color: MUTED }}>→</div>
            </div>

            <div style={{ backgroundColor: GREEN_LIGHT, padding: '2rem', borderRadius: '12px', borderLeft: '4px solid ' + GREEN, textAlign: 'center' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', color: GREEN_DEEP, marginBottom: '1rem' }}>The Seco Coating</div>
              <p style={{ fontSize: '15px', color: SLATE, lineHeight: 1.7 }}>The cell stays alive on its own, so brands slash overfill, cut COGS, and meet the label claim at consumption.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT COMPOUNDS */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-20">
            <Eyebrow color={GREEN}>Why it compounds</Eyebrow>
            <h2
              className="font-bold"
              style={{
                color: SLATE,
                fontSize: 'clamp(1.9rem, 3.4vw, 2.9rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em'
              }}
            >
              Every strain solved becomes protected IP that doesn't depreciate.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div style={{ backgroundColor: GREEN_LIGHT, padding: '2rem', borderRadius: '12px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', color: GREEN_DEEP, marginBottom: '1rem' }}>Protected</h4>
              <p style={{ fontSize: '15px', color: SLATE, marginBottom: '1rem', fontWeight: 600 }}>Not a one-off.</p>
              <p style={{ fontSize: '14px', color: MUTED, lineHeight: 1.7 }}>Every strain solved becomes protected intellectual property and a product a partner can license.</p>
            </div>

            <div style={{ backgroundColor: GREEN_LIGHT, padding: '2rem', borderRadius: '12px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', color: GREEN_DEEP, marginBottom: '1rem' }}>Cumulative</h4>
              <p style={{ fontSize: '15px', color: SLATE, marginBottom: '1rem', fontWeight: 600 }}>Not linear.</p>
              <p style={{ fontSize: '14px', color: MUTED, lineHeight: 1.7 }}>The more strains we solve, the better the system gets at predicting the next one before a single experiment runs.</p>
            </div>

            <div style={{ backgroundColor: GREEN_LIGHT, padding: '2rem', borderRadius: '12px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', color: GREEN_DEEP, marginBottom: '1rem' }}>Defensible</h4>
              <p style={{ fontSize: '15px', color: SLATE, marginBottom: '1rem', fontWeight: 600 }}>Not replicable.</p>
              <p style={{ fontSize: '14px', color: MUTED, lineHeight: 1.7 }}>The dataset mapping materials to organisms is the asset. It cannot be reverse-engineered from a finished product.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW DEALS ARE STRUCTURED */}
      <HighlightGrid
        eyebrow="How deals are structured"
        title="Licensed per strain. Terms set case by case."
        intro="No terms published. Every program is scoped to the organism, the format, and the markets involved."
        cards={[
          { title: 'Standard licensing', body: 'Licensed per strain and format, with development milestones tied to progress and exclusivity within your category.' },
          { title: 'Joint development', body: 'For proprietary strains you own. Shared IP where applicable, co-commercialization rights, custom terms.' },
          { title: 'How it starts', body: 'An NDA and a technical call. Bring the organism and the target; we'll tell you what's realistic.' }
        ]}
      />

      {/* CTA */}
      <section
        className="py-28 px-6 text-center"
        style={{ backgroundColor: INK }}
      >
        <span
          aria-hidden="true"
          style={{
            display: 'block',
            width: 46,
            height: 3,
            borderRadius: 2,
            backgroundColor: GREEN,
            margin: '0 auto 34px'
          }}
        />
        <h2
          className="text-white font-bold mb-6"
          style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.8rem)', letterSpacing: '-0.03em' }}
        >
          Ready to talk about your strain?
        </h2>
        <button
          onClick={onContactClick}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-sm font-semibold"
          style={{ color: BLUE_DEEP }}
        >
          Bring us a strain <ArrowRight size={16} />
        </button>
      </section>
    </div>
  );
}
