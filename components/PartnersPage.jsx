import React from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import {
  PageHero, Accent, Eyebrow, SplitFeature, NumberStrip, CircleGrid, HighlightGrid,
  SLATE, MUTED, BLUE, BLUE_DEEP, GREEN, GREEN_DEEP, INK
} from './ui';

export default function PartnersPage({ onContactClick }) {
  const requestDeck = () => onContactClick('Investment', 'Requesting the Investment Deck.');
  const exploreLicensing = () => onContactClick('Partnership', 'Exploring licensing my strain.');

  return (
    <div>
      <PageHero
        eyebrow="Partners"
        image="/images/photo/wellness.jpg"
        tone="green"
        title={<>Two ways in. <Accent>One conversation to start.</Accent></>}
        subtitle="Whether you make a living product or you're looking at where this industry goes next, it begins with an NDA and a technical call — with partners in the US and internationally."
      />

      {/* Two-panel positioning — Capital vs Business, leading with capital per updated flow */}
      <section className="pt-24 pb-4 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div
            className="rounded-2xl p-10"
            style={{ backgroundColor: '#E1F4EE', borderTop: `4px solid ${GREEN}` }}
          >
            <Eyebrow color={GREEN_DEEP} className="mb-3">Capital Partners</Eyebrow>
            <h3 className="font-bold mb-4" style={{ color: SLATE, fontSize: '19px' }}>
              Partners scaling the platform with us
            </h3>
            <p style={{ color: MUTED, fontSize: '15px', lineHeight: 1.7, marginBottom: 20 }}>
              Every strain solved becomes protected IP that compounds. We work with capital
              partners aligned to the long-term platform opportunity.
            </p>
            <div
              className="text-sm font-semibold px-4 py-3 rounded-md mb-3"
              style={{ backgroundColor: 'white', color: SLATE, borderLeft: `3px solid ${GREEN}` }}
            >
              Platform IP · Vertical expansion · Global portfolio
            </div>
            <button
              onClick={requestDeck}
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: GREEN_DEEP, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              Request the Investment Deck <ArrowRight size={14} />
            </button>
          </div>

          <div
            className="rounded-2xl p-10"
            style={{ backgroundColor: '#EEF2FE', borderTop: `4px solid ${BLUE}` }}
          >
            <Eyebrow className="mb-3">Business Partners</Eyebrow>
            <h3 className="font-bold mb-4" style={{ color: SLATE, fontSize: '19px' }}>
              Brands, manufacturers, and ingredient partners
            </h3>
            <p style={{ color: MUTED, fontSize: '15px', lineHeight: 1.7, marginBottom: 20 }}>
              Bring us a strain and a target. We formulate the protection and license it to you —
              so your product delivers what the label promises. Built to scale with you, not
              around you.
            </p>
            <div
              className="text-sm font-semibold px-4 py-3 rounded-md mb-3"
              style={{ backgroundColor: 'white', color: SLATE, borderLeft: `3px solid ${BLUE}` }}
            >
              Licensed by Strain · Field · Formula
            </div>
            <button
              onClick={exploreLicensing}
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: BLUE, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              Explore Licensing Your Strain <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* FOR CAPITAL PARTNERS — track divider */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-4">
        <div
          className="inline-flex items-center px-5 py-2 rounded-full"
          style={{ backgroundColor: GREEN_DEEP, color: 'white' }}
        >
          <span className="text-xs font-bold uppercase" style={{ letterSpacing: '0.16em' }}>For Capital Partners</span>
        </div>
      </div>

      <HighlightGrid
        tone="green"
        eyebrow="For capital partners"
        title="Every strain solved is protected IP that compounds."
        intro="Capital partners scaling the platform from strategic to institutional growth capital. We work with investors aligned to the long-term platform opportunity. Speak with us by introduction, under NDA."
        cards={[
          { title: 'Formulation engine', body: 'AI-driven discovery that gets faster with every strain solved. The platform doesn\u2019t get used up.' },
          { title: 'Platform IP', body: 'Every strain solved becomes protected intellectual property that compounds and can be licensed.' },
          { title: 'Defensible moat', body: 'The dataset mapping materials to organisms cannot be reverse-engineered from a finished product.' }
        ]}
      />

      {/* Unlock wedge — novel IP, acquisition-target framing */}
      <section className="pt-4 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl p-10" style={{ backgroundColor: '#E1F4EE', borderTop: `4px solid ${GREEN}` }}>
            <Eyebrow color={GREEN_DEEP} className="mb-2">Unlock the novel</Eyebrow>
            <div className="italic font-bold mb-1" style={{ color: SLATE, fontSize: '22px' }}>Akkermansia muciniphila</div>
            <p style={{ color: MUTED, fontSize: '13px', marginBottom: 20 }}>GLP-1 adjacent · improves insulin sensitivity & metabolic health</p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="rounded-md p-4" style={{ backgroundColor: 'white' }}>
                <div className="uppercase font-bold" style={{ color: MUTED, fontSize: '10px', letterSpacing: '0.5px', marginBottom: 6 }}>Today's market</div>
                <div className="font-bold" style={{ color: SLATE, fontSize: '14px' }}>Pasteurized only</div>
                <div className="italic" style={{ color: MUTED, fontSize: '12px', marginBottom: 6 }}>(dead bacteria)</div>
                <div style={{ color: MUTED, fontSize: '12px' }}><strong>Danone</strong> acquired the leading pasteurized player (2025). <strong>IFF</strong> has live fermentation but no dry format.</div>
              </div>
              <div className="rounded-md p-4 text-white" style={{ backgroundColor: GREEN_DEEP }}>
                <div className="uppercase font-bold" style={{ fontSize: '10px', letterSpacing: '0.5px', opacity: 0.85, marginBottom: 6 }}>Seco</div>
                <div className="font-bold" style={{ fontSize: '14px', marginBottom: 6 }}>First shelf-stable, <span className="italic">live Akkermansia</span></div>
                <div style={{ fontSize: '12px', opacity: 0.9 }}><strong>Owned NGP</strong><br />Seco Proprietary IP Generation</div>
              </div>
            </div>
            <div className="font-bold text-center py-3 px-4 rounded-md text-white text-sm" style={{ backgroundColor: GREEN_DEEP }}>
              Novel category → first-mover IP & strategic acquisition target
            </div>
          </div>

          {/* Capital partnership — plain-language positioning, no deal terms published */}
          <div className="mt-8 rounded-2xl p-10" style={{ backgroundColor: INK, color: 'white' }}>
            <Eyebrow color="#8CE0B8" className="mb-3">How to invest</Eyebrow>
            <p style={{ fontSize: '16px', lineHeight: 1.75, opacity: 0.9, marginBottom: 16 }}>
              Seco is raising through a dedicated investment vehicle built around the platform's
              growth — one structure, one point of contact, no fragmented terms. Capital partners
              get exposure to the platform's compounding IP as it scales toward a strategic exit.
            </p>
            <p style={{ fontSize: '14px', lineHeight: 1.7, opacity: 0.7, marginBottom: 24 }}>
              Full structure, terms, and return scenarios are available in the Investment Deck, on
              request, under NDA.
            </p>
            <button
              onClick={requestDeck}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold"
              style={{ backgroundColor: 'white', color: INK, border: 'none', cursor: 'pointer' }}
            >
              Request the Investment Deck <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* FOR BUSINESS PARTNERS — track divider */}
      <div className="max-w-6xl mx-auto px-6 pt-4 pb-4">
        <div
          className="inline-flex items-center px-5 py-2 rounded-full"
          style={{ backgroundColor: BLUE, color: 'white' }}
        >
          <span className="text-xs font-bold uppercase" style={{ letterSpacing: '0.16em' }}>For Business Partners</span>
        </div>
      </div>

      <SplitFeature
        eyebrow="For brands &amp; manufacturers"
        title={<>You already pay for die-off. <Accent tone="dark">You just pay for it upstream.</Accent></>}
        image="/images/stills/formats.jpg"
        quote="A program is scoped to one strain and one format. We formulate, prove it at your scale, and transfer it to your line."
      >
        <p className="mb-6">
          Overfilling is a tax. Every unit absorbs the cost of what you can't control.
        </p>
        <ul className="space-y-3 mb-6">
          {[
            'You buy more organism than you sell',
            "You carry shelf life you can't fully predict",
            "You make a claim you can't verify at the moment of consumption"
          ].map((t) => (
            <li key={t} className="flex gap-3 items-start">
              <X size={16} style={{ color: '#D1226B', flexShrink: 0, marginTop: 3 }} />
              <span>{t}</span>
            </li>
          ))}
          {[
            'A program with Seco removes the guesswork from all three',
            "Without changing your strain, your ingredients, or your line"
          ].map((t) => (
            <li key={t} className="flex gap-3 items-start">
              <Check size={16} style={{ color: GREEN_DEEP, flexShrink: 0, marginTop: 3 }} />
              <span>{t}</span>
            </li>
          ))}
        </ul>
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
            What the first ninety days look like.
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

      {/* Enhance wedge — closes out the business track */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl p-10 flex flex-col md:flex-row md:items-center gap-8" style={{ backgroundColor: '#EEF2FE', borderTop: `4px solid ${BLUE}` }}>
            <div className="flex-1">
              <Eyebrow className="mb-2">Enhance the standard</Eyebrow>
              <div className="italic font-bold mb-1" style={{ color: SLATE, fontSize: '22px' }}>L. plantarum</div>
              <p className="italic" style={{ color: MUTED, fontSize: '13px', marginBottom: 14 }}>One of the most widely used commercial probiotic strains</p>
              <p style={{ color: MUTED, fontSize: '14px', lineHeight: 1.6 }}>
                Stable potency and drastically lower overage — the same strain your partners already
                trust, with the economics a protected formulation makes possible.
              </p>
            </div>
            <div className="flex gap-8 flex-shrink-0">
              <div>
                <div className="font-bold" style={{ color: '#D1226B', fontSize: '32px' }}>20×</div>
                <div className="uppercase font-bold" style={{ color: MUTED, fontSize: '10px', letterSpacing: '0.5px' }}>Industry overfill</div>
              </div>
              <div>
                <div className="font-bold" style={{ color: GREEN_DEEP, fontSize: '32px' }}>17×</div>
                <div className="uppercase font-bold" style={{ color: MUTED, fontSize: '10px', letterSpacing: '0.5px' }}>Seco COGS reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          For business and capital partners.
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
