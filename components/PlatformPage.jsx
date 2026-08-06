import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  PageHero, Accent, Eyebrow, SplitFeature, NumberStrip, HighlightGrid, StatementBlock,
  SLATE, MUTED, BLUE, BLUE_DEEP, GREEN, INK
} from './ui';

export default function PlatformPage({ onContactClick }) {
  return (
    <div>
      <PageHero
        eyebrow="Platform"
        tone="green"
        image="/images/stills/robotics.jpg"
        title={<>A formulation engine, <Accent>not a one-off service.</Accent></>}
        subtitle="Robots run the experiments. Models learn what works. Every strain we solve makes the next one faster."
      />

      {/* The loop */}
      <SplitFeature
        eyebrow="The loop"
        title={<>Millions of combinations. <Accent tone="dark">No lab does that by hand.</Accent></>}
        image="/images/stills/lab-blue.jpg"
        quote="What took a research team years takes weeks — and every run makes the next strain faster to solve."
      >
        <p className="mb-5">
          Every organism needs a different protective formula, and the combinations run into the
          millions. Automated systems build and test thousands of formulations in parallel, then read
          the results without a human counting anything.
        </p>
        <p>
          Every experiment feeds a dataset that maps which materials protect which organisms. Partners
          get the formulation and the proof. We keep what the platform learned.
        </p>
      </SplitFeature>

      <NumberStrip
        items={[
          { title: 'You tell us what you need', body: 'The organism, the format, the shelf life you\u2019re targeting, your markets and manufacturing constraints.' },
          { title: 'We find the formula', body: 'Parallel testing until we have the protective system for that specific strain, with full stability data.' },
          { title: 'We prove it on your line', body: 'Scaled up and transferred into your process, on your equipment, at commercial volume.' },
          { title: 'You launch', body: 'Licensed per strain and per product. You sell it. We keep it working.' }
        ]}
      />

      {/* Why it compounds */}
      <StatementBlock
        tone="green"
        lines={[
          'A service gets used up.',
          'A platform gets better.',
          'Every strain solved makes the next one faster.'
        ]}
        title="Why it compounds"
        subtitle="Partners get the formulation and the stability data. Seco keeps the underlying dataset."
        cards={[
          {
            eyebrow: 'Protected',
            lead: 'Not a one-off.',
            body: 'Every strain solved becomes protected intellectual property and a product a partner can license.'
          },
          {
            eyebrow: 'Cumulative',
            lead: 'Not linear.',
            body: 'The more strains we solve, the better the system gets at predicting the next one before a single experiment runs.'
          },
          {
            eyebrow: 'Defensible',
            lead: 'Not replicable.',
            body: 'The dataset mapping materials to organisms is the asset. It cannot be reverse-engineered from a finished product.'
          }
        ]}
      />

      {/* Timelines — flagged as direction, per spec */}
      <SplitFeature
        flip
        eyebrow="Where it's headed"
        title={<>Industry runs five to seven years. <Accent tone="dark">We're targeting twelve to eighteen months.</Accent></>}
        image="/images/science/probiotic.jpg"
        ratio="1 / 1"
      >
        <p className="mb-5">
          That capability is in development. We're building the computational and robotic
          infrastructure to compress formulation discovery from years to months.
        </p>
        <p style={{ fontSize: '15px', opacity: 0.85 }}>
          Full AI-native formulation and automated validation are roadmap items. Robotic
          high-throughput screening is running today.
        </p>
      </SplitFeature>

      {/* Deal structure */}
      <HighlightGrid
        eyebrow="How deals are structured"
        title="Licensed per strain. Terms set case by case."
        intro="No terms published. Every program is scoped to the organism, the format, and the markets involved."
        cards={[
          { title: 'Standard licensing', body: 'Licensed per strain and format, with development milestones tied to progress and exclusivity within your category.' },
          { title: 'Joint development', body: 'For proprietary strains you own. Shared IP where applicable, co-commercialization rights, custom terms.' },
          { title: 'How it starts', body: 'An NDA and a technical call. Bring the organism and the target; we\u2019ll tell you what\u2019s realistic.' }
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
