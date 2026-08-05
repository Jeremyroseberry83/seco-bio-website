import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const BLUE = '#3B60E4';
const BLUE_DEEP = '#2F4FC9';
const GREEN = '#1E8E5A';
const GREEN_DEEP = '#176E46';
const SLATE = '#3D4654';
const MUTED = '#6B7280';
const INK = '#2E4259'; // warm slate-navy: reads clinical without going severe
const BLUE_LIGHT = '#9DB2FF'; // legible tint of brand blue on dark grounds

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

function PillButton({ children, onClick, tone = 'blue' }) {
  const bg =
    tone === 'green'
      ? `linear-gradient(90deg, ${GREEN} 0%, ${GREEN_DEEP} 100%)`
      : `linear-gradient(90deg, ${BLUE} 0%, ${BLUE_DEEP} 100%)`;
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white text-sm font-semibold transition-transform hover:-translate-y-0.5"
      style={{ background: bg }}
    >
      {children}
    </button>
  );
}

function StatBadge({ value, label, tone = 'blue' }) {
  const bg =
    tone === 'green'
      ? `linear-gradient(135deg, ${GREEN} 0%, ${GREEN_DEEP} 100%)`
      : `linear-gradient(135deg, ${BLUE} 0%, ${BLUE_DEEP} 100%)`;
  return (
    <div className="flex gap-5 items-start">
      <div
        className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center"
        style={{ background: bg }}
      >
        <div className="w-6 h-6 rounded-full border-2 border-white opacity-90" />
      </div>
      <div>
        <div
          className="text-3xl font-bold mb-1"
          style={{ color: SLATE, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}
        >
          {value}
        </div>
        <p style={{ color: MUTED, fontSize: '15px', lineHeight: 1.6 }}>{label}</p>
      </div>
    </div>
  );
}

export default function HomePage({ onContactClick }) {
  return (
    <div>
      {/* ---------------- HERO ---------------- */}
      {/* Per spec: full viewport, film plays on load silent, edge to edge.
          Overlay is bottom-left, small and quiet, fading in at ~1.5s so the
          footage owns the first beat. */}
      <section className="relative w-full" style={{ height: '100vh', minHeight: 560 }}>
        <div className="absolute inset-0 overflow-hidden" style={{ backgroundColor: INK }}>
          <video
            className="w-full h-full object-cover"
            src="/videos/seco-video.mp4"
            poster="/images/hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          {/* Light scrim only at the lower left, where the type sits.
              The rest of the frame stays clean. */}
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
          <div className="hero-reveal" style={{ maxWidth: 620 }}>
            <h1
              className="text-white font-bold mb-4"
              style={{
                fontSize: 'clamp(1.95rem, 3.6vw, 3.1rem)',
                lineHeight: 1.06,
                letterSpacing: '-0.028em'
              }}
            >
              Keeping the living alive.
            </h1>

            <p
              className="text-white mb-8"
              style={{ fontSize: 'clamp(0.98rem, 1.25vw, 1.13rem)', lineHeight: 1.6, opacity: 0.9 }}
            >
              Bacteria that survive the factory, the shelf, and the journey to you.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-white text-sm font-semibold transition-transform hover:-translate-y-0.5"
                style={{ color: SLATE }}
              >
                <Play size={15} fill={SLATE} />
                Watch the film (2 min)
              </button>
              <button
                onClick={onContactClick}
                className="px-7 py-3 rounded-full text-sm font-semibold text-white border transition-colors hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.5)' }}
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>

        {/* Scroll cue, bottom centre */}
        <div
          className="hero-reveal absolute left-1/2 pointer-events-none"
          style={{ bottom: 'clamp(74px, 12vw, 168px)', transform: 'translateX(-50%)' }}
        >
          <div className="scroll-cue" style={{ width: 22, height: 36, borderRadius: 11, border: '1.5px solid rgba(255,255,255,0.5)', position: 'relative' }}>
            <span
              style={{
                position: 'absolute', left: '50%', top: 8, width: 3, height: 7,
                borderRadius: 2, background: 'rgba(255,255,255,0.85)', transform: 'translateX(-50%)'
              }}
            />
          </div>
        </div>

        {/* Curved bottom edge */}
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

      {/* ---------------- CREDIBILITY BAR ---------------- */}
      {/* Marks used with permission. Heights are tuned per logo rather than
          shared: a circular mark reads far heavier than a wide wordmark at the
          same pixel height, so NASA sits smaller than DARPA and MIT. */}
      <section className="pt-6 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p
            className="text-center text-xs font-bold uppercase mb-14"
            style={{ color: MUTED, letterSpacing: '0.24em' }}
          >
            Eight years of research behind it
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-14">
            {[
              { name: 'NASA', file: '/images/logos/nasa.png', h: 46, role: 'Research funding' },
              { name: 'DARPA', file: '/images/logos/darpa.png', h: 40, role: 'Research funding' },
              { name: 'MIT', file: '/images/logos/mit.png', h: 30, role: 'Where the work was done' },
              { name: 'Nature Materials', file: '/images/logos/nature.png', h: 40, role: 'Peer-reviewed, 2024' }
            ].map((org, i) => (
              <div
                key={org.name}
                className="px-6 flex flex-col items-center text-center"
                style={{ borderLeft: i % 4 === 0 ? 'none' : '1px solid #E4E8F2' }}
              >
                <div className="flex items-center justify-center" style={{ height: 56, marginBottom: 16 }}>
                  <img
                    src={org.file}
                    alt={org.name}
                    style={{
                      height: org.h,
                      width: 'auto',
                      objectFit: 'contain',
                      filter: 'grayscale(100%)',
                      opacity: 0.72
                    }}
                  />
                </div>
                <div
                  style={{
                    color: SLATE,
                    fontWeight: 700,
                    fontSize: '13px',
                    letterSpacing: '0.02em',
                    marginBottom: 5
                  }}
                >
                  {org.name}
                </div>
                <div style={{ color: MUTED, fontSize: '12px', letterSpacing: '0.04em', lineHeight: 1.5 }}>
                  {org.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- THE ONE SENTENCE ---------------- */}
      {/* Dark ground so this reads as the anchor statement. Key phrases carry
          a lighter tint of the brand blue — dark enough on white to be
          unreadable, so it only appears here. */}
      <section
        className="py-32 px-6 relative overflow-hidden"
        style={{ backgroundColor: INK }}
      >
        <img
          src="/images/seco-mark-white-lg.png"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none hidden md:block"
          style={{ height: '150%', width: 'auto', left: '-6%', top: '-25%', opacity: 0.045 }}
        />

        <div className="max-w-4xl mx-auto text-center relative">
          <h2
            className="font-bold text-white"
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.5rem)',
              lineHeight: 1.32,
              letterSpacing: '-0.02em'
            }}
          >
            Seco Bio uses AI and robotics to keep{' '}
            <span style={{ color: BLUE_LIGHT }}>living organisms alive</span> — making the
            probiotics people already buy{' '}
            <span style={{ color: BLUE_LIGHT }}>actually work</span>, and putting the ones that{' '}
            <span style={{ color: BLUE_LIGHT }}>never survived a pill</span> on the shelf for the
            first time.
          </h2>
        </div>
      </section>

      {/* ---------------- THE PROBLEM ---------------- */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-20">
            <Eyebrow>The problem</Eyebrow>
            <h2
              className="font-bold mb-8"
              style={{
                color: SLATE,
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.025em'
              }}
            >
              Living products die on the way to you.
            </h2>
            <p style={{ color: MUTED, fontSize: '18px', lineHeight: 1.75 }}>
              Probiotics are alive. That's the entire point of them — and it's also the problem.
              Bacteria have to survive being dried, pressed into tablets, sealed in bottles,
              shipped through heat, and stored for months before anyone opens the package.
            </p>
            <p className="mt-6 font-semibold" style={{ color: SLATE, fontSize: '22px' }}>
              Most of them don't.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-x-12 gap-y-14">
            <StatBadge
              value="7 of 13"
              label="probiotic products tested contained the number of living cells printed on the label"
            />
            <StatBadge value="1 in 50" label="cells in the average product was still alive" />
            <StatBadge
              value="360×"
              label="more bacteria loaded at the factory than the label promises, to compensate"
            />
          </div>

          <p className="mt-14" style={{ color: MUTED, fontSize: '14px' }}>
            Published findings, Nature Materials, 2024.
          </p>
        </div>
      </section>

      {/* ---------------- HOW IT WORKS ---------------- */}
      <section className="py-28 px-6" style={{ backgroundColor: '#F7F8FA' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div
            className="rounded-2xl overflow-hidden relative"
            style={{ aspectRatio: '4 / 3', backgroundColor: INK }}
          >
            <img
              src="/images/stills/robotics.jpg"
              alt="Automated formulation screening"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <Eyebrow>How it works</Eyebrow>
            <h2
              className="font-bold mb-7"
              style={{
                color: SLATE,
                fontSize: 'clamp(1.9rem, 3.4vw, 2.9rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em'
              }}
            >
              AI designs the protection.
              <br />
              Robots prove it.
            </h2>
            <p className="mb-10" style={{ color: MUTED, fontSize: '17px', lineHeight: 1.75 }}>
              Every organism needs a different protective formula, and the combinations run into
              the millions — far more than any lab can work through by hand. So we don't do it by
              hand.
            </p>

            <div className="space-y-8 mb-10">
              {[
                [
                  'Robots run the experiments.',
                  'Automated systems build and test thousands of formulations in parallel. What took a research team years takes weeks.'
                ],
                [
                  'Models learn what works.',
                  'Every experiment feeds a dataset mapping which materials protect which organisms.'
                ],
                [
                  'The data is the asset.',
                  'Partners get the formulation and the proof. We keep what the platform learned.'
                ]
              ].map(([title, body]) => (
                <div key={title}>
                  <h4 className="font-bold mb-2" style={{ color: SLATE, fontSize: '17px' }}>
                    {title}
                  </h4>
                  <p style={{ color: MUTED, fontSize: '16px', lineHeight: 1.7 }}>{body}</p>
                </div>
              ))}
            </div>

            <PillButton onClick={onContactClick}>
              How it works in detail <ArrowRight size={16} />
            </PillButton>
          </div>
        </div>
      </section>

      {/* ---------------- THE PROOF ---------------- */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <Eyebrow color={GREEN}>The proof</Eyebrow>
            <h2
              className="font-bold mb-7"
              style={{
                color: SLATE,
                fontSize: 'clamp(1.9rem, 3.4vw, 2.9rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em'
              }}
            >
              This is published science,
              <br />
              not a pitch.
            </h2>
            <p className="mb-12" style={{ color: MUTED, fontSize: '17px', lineHeight: 1.75 }}>
              The underlying research was funded by NASA and DARPA, carried out at MIT, and
              published in Nature Materials with full methods and data. Anyone can check it.
            </p>

            <div className="space-y-10">
              <StatBadge
                tone="green"
                value="10,000×"
                label="more surviving cells than the commercial version of the same organism"
              />
              <StatBadge tone="green" value="6½ months" label="at body temperature, and still alive" />
              <StatBadge tone="green" value="2,080" label="formulations tested to find what works" />
            </div>
          </div>

          <div
            className="order-1 md:order-2 rounded-2xl overflow-hidden relative"
            style={{ aspectRatio: '3 / 4', backgroundColor: INK }}
          >
            <img
              src="/images/stills/microscopy.jpg"
              alt="Protected cells under magnification"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------------- TWO DOORS ---------------- */}
      <section className="pb-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div
            className="rounded-2xl p-12 flex flex-col justify-end"
            style={{
              minHeight: 400,
              background: `linear-gradient(150deg, ${BLUE} 0%, ${BLUE_DEEP} 100%)`
            }}
          >
            <p
              className="text-xs font-bold uppercase mb-4 text-white"
              style={{ letterSpacing: '0.22em', opacity: 0.85 }}
            >
              For brands &amp; manufacturers
            </p>
            <h3
              className="text-white font-bold mb-5"
              style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', lineHeight: 1.15 }}
            >
              Make your product deliver what the label promises.
            </h3>
            <p className="text-white mb-9" style={{ opacity: 0.88, fontSize: '16px', lineHeight: 1.7 }}>
              Bring us a strain and a target. We formulate the protection, prove it at scale, and
              hand it to your manufacturing line.
            </p>
            <button
              onClick={onContactClick}
              className="self-start inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-sm font-semibold"
              style={{ color: BLUE_DEEP }}
            >
              Explore a partnership <ArrowRight size={16} />
            </button>
          </div>

          <div
            className="rounded-2xl p-12 flex flex-col justify-end"
            style={{
              minHeight: 400,
              background: `linear-gradient(150deg, ${GREEN} 0%, ${GREEN_DEEP} 100%)`
            }}
          >
            <p
              className="text-xs font-bold uppercase mb-4 text-white"
              style={{ letterSpacing: '0.22em', opacity: 0.85 }}
            >
              For investors
            </p>
            <h3
              className="text-white font-bold mb-5"
              style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', lineHeight: 1.15 }}
            >
              Back a platform, not a product.
            </h3>
            <p className="text-white mb-9" style={{ opacity: 0.88, fontSize: '16px', lineHeight: 1.7 }}>
              Seco isn't a supplement company. Every strain we solve becomes protected
              intellectual property that compounds.
            </p>
            <button
              onClick={onContactClick}
              className="self-start inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-sm font-semibold"
              style={{ color: GREEN_DEEP }}
            >
              Get in touch <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- PARTNERSHIP PROCESS ---------------- */}
      <section className="py-28 px-6" style={{ backgroundColor: '#F7F8FA' }}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-20">
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

          <div className="grid md:grid-cols-4 gap-12">
            {[
              ['01', 'You tell us what you need', 'The organism, the format, the shelf life, the markets.'],
              ['02', 'We find the formula', 'Parallel testing until we have the protective system for that specific strain.'],
              ['03', 'We prove it on your line', 'Scaled up, transferred into your process, on your equipment.'],
              ['04', 'You launch', 'Licensed per strain and per product. You sell it. We keep it working.']
            ].map(([num, title, body]) => (
              <div key={num}>
                <div
                  className="font-bold mb-5"
                  style={{ color: BLUE, fontSize: '15px', letterSpacing: '0.1em' }}
                >
                  {num}
                </div>
                <div className="h-px w-full mb-6" style={{ backgroundColor: '#DCE3F7' }} />
                <h4 className="font-bold mb-3" style={{ color: SLATE, fontSize: '17px' }}>
                  {title}
                </h4>
                <p style={{ color: MUTED, fontSize: '15px', lineHeight: 1.7 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- BEYOND THE SHELF ---------------- */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-20">
            <Eyebrow color={GREEN}>Beyond the shelf</Eyebrow>
            <h2
              className="font-bold mb-7"
              style={{
                color: SLATE,
                fontSize: 'clamp(1.9rem, 3.4vw, 2.9rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em'
              }}
            >
              Anything alive that has to survive a journey.
            </h2>
            <p style={{ color: MUTED, fontSize: '17px', lineHeight: 1.75 }}>
              Probiotics are where we start, because the need is immediate and the market is
              large. The same protection applies anywhere a living organism has to survive being
              processed, stored, and transported.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              ['People', 'Supplements and live medicines', '/images/stills/people.jpg'],
              ['Animals', 'Pet and livestock health', '/images/stills/animals.jpg'],
              ['Farming', 'Seed and soil treatments', '/images/stills/formats.jpg'],
              ['Early life', 'Infant and maternal health', '/images/stills/earlylife.jpg']
            ].map(([title, body, img]) => (
              <div key={title}>
                <div
                  className="rounded-xl overflow-hidden mb-5"
                  style={{ aspectRatio: '4 / 3', backgroundColor: INK }}
                >
                  <img src={img} alt={title} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold mb-2" style={{ color: SLATE, fontSize: '17px' }}>
                  {title}
                </h4>
                <p style={{ color: MUTED, fontSize: '15px', lineHeight: 1.65 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CLOSING BAND ---------------- */}
      <section
        className="py-32 px-6 text-center relative overflow-hidden"
        style={{ background: `linear-gradient(125deg, ${INK} 0%, ${BLUE_DEEP} 40%, ${BLUE} 100%)` }}
      >
        {/* Oversized mark bleeding off the right edge. Depth, not branding. */}
        <img
          src="/images/seco-mark-white-lg.png"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none hidden md:block"
          style={{ height: '155%', width: 'auto', right: '-4%', top: '-28%', opacity: 0.06 }}
        />
        <div className="relative">
        <h2
          className="text-white font-bold mb-6"
          style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.03em' }}
        >
          Let's talk.
        </h2>
        <p
          className="text-white mb-12 mx-auto"
          style={{ maxWidth: '46ch', fontSize: '18px', opacity: 0.92, lineHeight: 1.7 }}
        >
          Whether you make a living product or you're looking at where this industry goes next —
          start here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onContactClick}
            className="px-9 py-3.5 rounded-full bg-white text-sm font-semibold"
            style={{ color: BLUE_DEEP }}
          >
            I'm a potential partner
          </button>
          <button
            onClick={onContactClick}
            className="px-9 py-3.5 rounded-full text-sm font-semibold text-white border"
            style={{ borderColor: 'rgba(255,255,255,0.6)' }}
          >
            I'm an investor
          </button>
          </div>
        </div>
      </section>
    </div>
  );
}
