import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import {
  PageHero, Accent, Eyebrow, SplitFeature, NumberStrip, CircleGrid, HighlightGrid,
  SLATE, MUTED, BLUE, BLUE_DEEP, GREEN, GREEN_DEEP, INK
} from './ui';

export default function PartnersPage({ onContactClick }) {
  return (
    <div>
      <PageHero
        eyebrow="Partners"
        image="/images/photo/wellness.jpg"
        tone="green"
        title={<>Two ways in. <Accent>One conversation to start.</Accent></>}
        subtitle="Whether you make a living product or you're looking at where this industry goes next, it begins with an NDA and a technical call."
      />

      {/* For brands — the primary audience */}
      <SplitFeature
        eyebrow="For brands &amp; manufacturers"
        title={<>Make your product <Accent tone="dark">deliver what the label promises.</Accent></>}
        image="/images/stills/formats.jpg"
        quote="Bring us a strain and a target. We formulate the protection, prove it at scale, and hand it to your manufacturing line."
      >
        <p className="mb-6">
          If you sell something alive, you already know what it costs: overfilling to cover die-off,
          shelf life you can't fully predict, and a claim you can't verify at the moment of
          consumption.
        </p>
        <p>A program with Seco targets all three.</p>
      </SplitFeature>

      {/* What we need / what you get */}
      <section className="pb-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-10" style={{ backgroundColor: '#F7F8FA' }}>
            <Eyebrow className="mb-6">What we need from you</Eyebrow>
            <ul className="space-y-4">
              {[
                'The organism — strain name and source',
                'The format — tablets, capsules, powder',
                'The claim and shelf life you\u2019re targeting',
                'Your markets and regulatory requirements',
                'Volume and manufacturing constraints'
              ].map((t) => (
                <li key={t} className="flex gap-3" style={{ color: SLATE, fontSize: '16px', lineHeight: 1.6 }}>
                  <span style={{ color: BLUE, flexShrink: 0 }}>›</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl p-10" style={{ backgroundColor: '#E1F4EE' }}>
            <Eyebrow color={GREEN_DEEP} className="mb-6">What you get back</Eyebrow>
            <ul className="space-y-4">
              {[
                'A protective formulation built for your strain',
                'A transfer package for your line',
                'Stability data under your storage conditions',
                'A license to sell it in your markets',
                'Documentation for regulatory filings'
              ].map((t) => (
                <li key={t} className="flex gap-3" style={{ color: SLATE, fontSize: '16px', lineHeight: 1.6 }}>
                  <Check size={17} style={{ color: GREEN_DEEP, flexShrink: 0, marginTop: 3 }} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How a program runs */}
      <section className="pb-6 px-6">
        <div className="max-w-6xl mx-auto max-w-2xl mb-12">
          <Eyebrow className="mb-4">How a program runs</Eyebrow>
          <h2
            className="font-bold"
            style={{ color: SLATE, fontSize: 'clamp(1.8rem, 3.2vw, 2.7rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
          >
            Four steps, one strain at a time.
          </h2>
        </div>
      </section>

      <NumberStrip
        items={[
          { title: 'You tell us what you need', body: 'The organism, the format, the shelf life, the markets.' },
          { title: 'We find the formula', body: 'Parallel testing until we have the protective system for that specific strain.' },
          { title: 'We prove it on your line', body: 'Scaled up, transferred into your process, on your equipment.' },
          { title: 'You launch', body: 'Licensed per strain and per product. You sell it. We keep it working.' }
        ]}
      />

      {/* Formats */}
      <CircleGrid
        eyebrow="Formats"
        title="It runs in the formats you already make."
        intro="Protection is formulation-level, not equipment-level. If you can manufacture it today, you can manufacture the protected version on the same line."
        items={[
          { image: '/images/stills/formats.jpg', label: 'Capsules & tablets' },
          { image: '/images/science/probiotic.jpg', label: 'Powders & sachets' },
          { image: '/images/photo/pets-feeding.jpg', label: 'Pet & livestock' },
          { image: '/images/photo/nutrition.jpg', label: 'Functional foods' }
        ]}
      />

      {/* For investors — deliberately understated per spec */}
      <HighlightGrid
        tone="green"
        eyebrow="For investors"
        title="Back a platform, not a product."
        intro="Seco Bio is not conducting a public offering. We speak with a small number of aligned investors, by introduction, under NDA."
        cards={[
          { title: 'Formulation engine', body: 'AI-driven discovery that gets faster with every strain solved. The platform doesn\u2019t get used up.' },
          { title: 'Compounding IP', body: 'Every strain solved becomes protected intellectual property a partner can license.' },
          { title: 'Defensible dataset', body: 'The mapping of materials to organisms is the asset, and it can\u2019t be reverse-engineered.' }
        ]}
      />

      {/* Closing */}
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
          className="text-white font-bold mb-12"
          style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.8rem)', letterSpacing: '-0.03em' }}
        >
          Which describes you?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onContactClick}
            className="px-8 py-3.5 rounded-full bg-white text-sm font-semibold"
            style={{ color: INK }}
          >
            I'm a potential partner
          </button>
          <button
            onClick={onContactClick}
            className="px-8 py-3.5 rounded-full text-sm font-semibold text-white border"
            style={{ borderColor: 'rgba(255,255,255,0.6)' }}
          >
            I'm an investor
          </button>
        </div>
      </section>
    </div>
  );
}
