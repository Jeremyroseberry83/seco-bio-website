import React from 'react';

// Shared tokens. Every page imports from here so the palette can't drift.
export const BLUE = '#3B60E4';
export const BLUE_DEEP = '#2F4FC9';
export const BLUE_LIGHT = '#9DB2FF'; // legible tint for dark grounds only
export const GREEN = '#1E8E5A';
export const GREEN_DEEP = '#176E46';
export const GREEN_LIGHT = '#6FD3A3';
export const SLATE = '#3D4654';
export const MUTED = '#6B7280';
export const INK = '#2E4259';

/**
 * Accent — highlights a phrase inside a heading.
 * On dark grounds pass tone="light"; on white leave the default.
 */
export function Accent({ children, tone = 'light' }) {
  return (
    <span style={{ color: tone === 'light' ? BLUE_LIGHT : BLUE }}>{children}</span>
  );
}

export function Eyebrow({ children, color = BLUE, className = '' }) {
  return (
    <p
      className={`text-xs font-bold uppercase ${className}`}
      style={{ color, letterSpacing: '0.24em' }}
    >
      {children}
    </p>
  );
}

/**
 * PageHero — full-bleed image under a heavy brand-colour wash.
 * The wash is what makes a stock-looking frame read as brand rather than
 * decoration, and it guarantees text contrast regardless of the photo.
 */
export function PageHero({ eyebrow, title, subtitle, image, stats, tone = 'blue' }) {
  const wash =
    tone === 'green'
      ? `linear-gradient(180deg, rgba(23,110,70,0.93) 0%, rgba(23,110,70,0.88) 100%)`
      : `linear-gradient(180deg, rgba(46,66,89,0.94) 0%, rgba(46,66,89,0.88) 100%)`;
  const accent = tone === 'green' ? GREEN_LIGHT : BLUE_LIGHT;

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: INK }}>
      {image && (
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0" style={{ background: wash }} />

      <div
        className="relative max-w-4xl mx-auto px-6 text-center"
        style={{ paddingTop: 'clamp(110px, 14vw, 180px)', paddingBottom: 'clamp(90px, 12vw, 150px)' }}
      >
        {eyebrow && (
          <p
            className="text-xs font-bold uppercase mb-7"
            style={{ color: accent, letterSpacing: '0.28em' }}
          >
            {eyebrow}
          </p>
        )}

        <h1
          className="text-white font-bold mb-7 mx-auto"
          style={{
            fontSize: 'clamp(2rem, 4.2vw, 3.4rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            maxWidth: '20ch'
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="text-white mx-auto"
            style={{ fontSize: 'clamp(1rem, 1.35vw, 1.13rem)', lineHeight: 1.75, opacity: 0.82, maxWidth: '58ch' }}
          >
            {subtitle}
          </p>
        )}

        {stats && (
          <div
            className="mt-14 mx-auto grid grid-cols-1 sm:grid-cols-3 rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.22)', maxWidth: 680 }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="py-8 px-5"
                style={{ borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.22)' }}
              >
                <div
                  className="text-white font-bold mb-2"
                  style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2.1rem)', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}
                >
                  {s.value}
                </div>
                <div
                  className="text-white uppercase"
                  style={{ fontSize: '10.5px', letterSpacing: '0.14em', opacity: 0.72, lineHeight: 1.6 }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ============================================================
   Section patterns. Each maps to one of the reference layouts,
   rebuilt in Seco's palette so they read as one system.
   ============================================================ */

/** SplitFeature — image one side, copy the other. Alternates via `flip`. */
export function SplitFeature({ eyebrow, title, children, image, flip, quote, dark, ratio = '4 / 3' }) {
  const bg = dark ? INK : 'transparent';
  const heading = dark ? '#FFFFFF' : SLATE;
  const body = dark ? 'rgba(255,255,255,0.78)' : MUTED;
  return (
    <section className="py-28 px-6" style={{ backgroundColor: bg }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className={flip ? 'order-2' : 'order-2 md:order-1'}>
          {eyebrow && <Eyebrow color={dark ? BLUE_LIGHT : BLUE} className="mb-4">{eyebrow}</Eyebrow>}
          <h2
            className="font-bold mb-7"
            style={{
              color: heading,
              fontSize: 'clamp(1.7rem, 3vw, 2.5rem)',
              lineHeight: 1.12,
              letterSpacing: '-0.025em'
            }}
          >
            {title}
          </h2>
          <div style={{ color: body, fontSize: '17px', lineHeight: 1.78 }}>{children}</div>
        </div>

        <div className={flip ? 'order-1' : 'order-1 md:order-2'}>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ aspectRatio: ratio, backgroundColor: '#E9EDF6' }}
          >
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>
          {quote && (
            <div
              className="rounded-xl px-7 py-6 mt-0"
              style={{
                backgroundColor: dark ? 'rgba(255,255,255,0.07)' : '#EEF2FE',
                borderTop: `3px solid ${BLUE}`,
                borderRadius: '0 0 12px 12px',
                marginTop: -4
              }}
            >
              <p
                style={{
                  color: dark ? 'rgba(255,255,255,0.9)' : SLATE,
                  fontSize: '15px',
                  lineHeight: 1.7,
                  fontStyle: 'italic'
                }}
              >
                {quote}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/** NumberStrip — bordered 01/02/03/04 row. Sits under a SplitFeature. */
export function NumberStrip({ items }) {
  return (
    <div className="max-w-6xl mx-auto px-6 pb-28">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-xl overflow-hidden"
        style={{ border: '1px solid #E4E8F2' }}
      >
        {items.map((it, i) => (
          <div
            key={it.title}
            className="p-8"
            style={{ borderLeft: i === 0 ? 'none' : '1px solid #E4E8F2' }}
          >
            <div
              className="mb-4"
              style={{
                color: BLUE,
                fontSize: '13px',
                letterSpacing: '0.14em',
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace'
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </div>
            <h4 className="font-bold mb-3" style={{ color: SLATE, fontSize: '16px' }}>
              {it.title}
            </h4>
            <p style={{ color: MUTED, fontSize: '15px', lineHeight: 1.7 }}>{it.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** HighlightGrid — cards on a dark ground, first one filled. Lifts on hover. */
export function HighlightGrid({ eyebrow, title, intro, cards, tone = 'blue' }) {
  const accent = tone === 'green' ? GREEN_LIGHT : BLUE_LIGHT;
  const fill = tone === 'green' ? GREEN : BLUE;
  return (
    <section className="py-28 px-6" style={{ backgroundColor: INK }}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          {eyebrow && <Eyebrow color={accent} className="mb-4">{eyebrow}</Eyebrow>}
          <h2
            className="text-white font-bold mb-6"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.7rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
          >
            {title}
          </h2>
          {intro && (
            <p style={{ color: 'rgba(255,255,255,0.76)', fontSize: '17px', lineHeight: 1.78 }}>
              {intro}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="rounded-xl p-8 transition-transform hover:-translate-y-1"
              style={{ backgroundColor: i === 0 ? fill : '#FFFFFF' }}
            >
              <h4
                className="font-bold mb-3"
                style={{ color: i === 0 ? '#FFFFFF' : SLATE, fontSize: '17px' }}
              >
                {c.title}
              </h4>
              <p
                style={{
                  color: i === 0 ? 'rgba(255,255,255,0.92)' : MUTED,
                  fontSize: '15px',
                  lineHeight: 1.7
                }}
              >
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** StatBand — full-bleed image with oversized figures across it. */
export function StatBand({ image, stats, tone = 'blue' }) {
  const accent = tone === 'green' ? GREEN_LIGHT : BLUE_LIGHT;
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: INK }}>
      <img src={image} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(46,66,89,0.72)' }} />
      <div className="relative max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div
                className="font-bold mb-3"
                style={{
                  color: accent,
                  fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace'
                }}
              >
                {s.value}
              </div>
              <p className="text-white" style={{ fontSize: '14px', opacity: 0.88, lineHeight: 1.6 }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** CircleGrid — round images with labels. For formats and applications. */
export function CircleGrid({ eyebrow, title, intro, items, dark }) {
  const bg = dark ? INK : '#F7F8FA';
  const heading = dark ? '#FFFFFF' : SLATE;
  return (
    <section className="py-28 px-6" style={{ backgroundColor: bg }}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          {eyebrow && <Eyebrow color={dark ? BLUE_LIGHT : BLUE} className="mb-4">{eyebrow}</Eyebrow>}
          <h2
            className="font-bold mb-6"
            style={{
              color: heading,
              fontSize: 'clamp(1.8rem, 3.2vw, 2.7rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em'
            }}
          >
            {title}
          </h2>
          {intro && (
            <p style={{ color: dark ? 'rgba(255,255,255,0.76)' : MUTED, fontSize: '17px', lineHeight: 1.78 }}>
              {intro}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {items.map((it) => (
            <div key={it.label} className="text-center">
              <div
                className="rounded-full overflow-hidden mx-auto mb-5"
                style={{ width: '100%', maxWidth: 190, aspectRatio: '1 / 1', backgroundColor: '#E9EDF6' }}
              >
                <img src={it.image} alt="" className="w-full h-full object-cover" />
              </div>
              <p className="font-bold" style={{ color: heading, fontSize: '15px' }}>
                {it.label}
              </p>
              {it.note && (
                <p className="mt-1" style={{ color: dark ? 'rgba(255,255,255,0.6)' : MUTED, fontSize: '13px' }}>
                  {it.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** StatementBlock — dark centred statement with supporting cards. */
export function StatementBlock({ lines, title, subtitle, cards, tone = 'blue' }) {
  const accent = tone === 'green' ? GREEN_LIGHT : BLUE_LIGHT;
  return (
    <section className="py-28 px-6" style={{ backgroundColor: INK }}>
      <div className="max-w-5xl mx-auto text-center">
        {lines && (
          <div className="mb-8">
            {lines.map((l) => (
              <p key={l} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '17px', lineHeight: 1.85 }}>
                {l}
              </p>
            ))}
          </div>
        )}

        <div className="flex items-center justify-center gap-3 mb-8">
          <span style={{ width: 22, height: 1, backgroundColor: accent, opacity: 0.6 }} />
          <span style={{ color: accent, fontSize: 13 }}>◆</span>
          <span style={{ width: 22, height: 1, backgroundColor: accent, opacity: 0.6 }} />
        </div>

        <h2
          className="text-white font-bold mb-5"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.1rem)', letterSpacing: '-0.03em', lineHeight: 1.08 }}
        >
          {title}
        </h2>

        {subtitle && (
          <p
            className="mb-16 mx-auto"
            style={{
              color: accent,
              fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
              letterSpacing: '0.04em',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
              maxWidth: '54ch'
            }}
          >
            {subtitle}
          </p>
        )}

        {cards && (
          <div className="grid md:grid-cols-3 gap-5 text-left">
            {cards.map((c) => (
              <div key={c.eyebrow} className="rounded-xl p-8" style={{ backgroundColor: '#F2F5FC' }}>
                <p
                  className="font-bold uppercase mb-4"
                  style={{ color: BLUE, fontSize: '11px', letterSpacing: '0.2em' }}
                >
                  {c.eyebrow}
                </p>
                <p className="font-bold mb-3" style={{ color: SLATE, fontSize: '17px' }}>
                  {c.lead}
                </p>
                <p style={{ color: MUTED, fontSize: '15px', lineHeight: 1.7 }}>{c.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
