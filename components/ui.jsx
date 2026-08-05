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
