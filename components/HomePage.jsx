import React from 'react';
import { Play, FileText, Clock3, Award } from 'lucide-react';

const BLUE = '#3B60E4';
const GREEN = '#1E8E5A';
const GREEN_DEEP = '#176E46';
const SLATE = '#3D4654';
const MUTED = '#6B7280';
const INK = '#2E4259';
const BG = '#FAFBFD';

export default function HomePage({ onContactClick, onNavigate, onWatchFilm }) {
  const [videoReady, setVideoReady] = React.useState(false);

  React.useEffect(() => {
    // Auto-open the promo video 2s after landing on Home, once per browser session.
    if (sessionStorage.getItem('secoIntroPlayed')) return;
    const timer = setTimeout(() => {
      sessionStorage.setItem('secoIntroPlayed', '1');
      onWatchFilm && onWatchFilm();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onWatchFilm]);

  return (
    <div>
      {/* HERO */}
      <section className="relative w-full" style={{ height: '100vh', minHeight: 560, backgroundColor: INK, backgroundImage: 'url(/images/hero-poster.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <video autoPlay muted loop playsInline preload="auto" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: videoReady ? 1 : 0, transition: 'opacity 700ms' }} onPlaying={() => setVideoReady(true)} onLoadedData={() => setVideoReady(true)}>
          <source src="/videos/secobio2.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,16,24,0.72) 0%, rgba(12,16,24,0.34) 26%, rgba(12,16,24,0) 55%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 1.5rem 8vh' }}>
          <div style={{ maxWidth: 720 }}>
            <h1 style={{ fontSize: 'clamp(32px, 5.5vw, 56px)', fontWeight: 700, color: 'white', lineHeight: 1.15, letterSpacing: '-0.01em', textShadow: '0 2px 24px rgba(0,0,0,0.35)' }}>
              Keeping the <span style={{ color: GREEN, fontStyle: 'italic' }}>living</span> alive.
            </h1>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.7, marginTop: '1.25rem', maxWidth: 560, marginLeft: 'auto', marginRight: 'auto', textShadow: '0 1px 12px rgba(0,0,0,0.35)' }}>
              Live bacteria don't survive the shelf. Our platform makes them survive it — and puts strains that never could on it for the first time.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
              <button
                onClick={() => onNavigate && onNavigate('platform-science')}
                style={{ padding: '14px 28px', borderRadius: '999px', border: 'none', background: 'linear-gradient(90deg, #3B60E4 0%, #2F4FC9 100%)', color: 'white', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}
              >
                Learn more about the platform
              </button>
              <button
                onClick={onWatchFilm}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '999px', border: '1.5px solid rgba(255,255,255,0.7)', background: 'transparent', color: 'white', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}
              >
                <Play size={16} fill="white" />
                Play Seco Promo Video
              </button>
            </div>
          </div>
        </div>
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%', height: 'clamp(70px, 13vw, 200px)', display: 'block' }}>
          <path d="M0,200 L0,8 C360,150 1080,150 1440,8 L1440,200 Z" fill={BG} />
        </svg>
      </section>

      {/* SECO BIO — People & Research */}
      <section style={{ backgroundColor: 'white', padding: '5rem 1.5rem' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: GREEN, marginBottom: '1rem' }}>Seco Bio</h3>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: SLATE, lineHeight: 1.2, marginBottom: '1.5rem' }}>This is published science, <span style={{ color: GREEN, fontStyle: 'italic' }}>not a pitch.</span></h2>
            <p style={{ fontSize: '16px', color: MUTED, lineHeight: 1.8, marginBottom: '2rem' }}>Some of nature's most potent bacteria never make it into a product, because they die before they reach you. Seco Bio's platform keeps them alive — from manufacturing to the moment they're used — so the strongest strains in medicine, probiotics, animal health, and food can finally deliver on what they were always capable of.</p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <button
                onClick={() => onNavigate && onNavigate('about')}
                style={{ padding: '13px 26px', borderRadius: '999px', border: 'none', background: `linear-gradient(90deg, ${GREEN} 0%, ${GREEN_DEEP} 100%)`, color: 'white', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}
              >
                Meet Our Team
              </button>
              <button
                onClick={() => onNavigate && onNavigate('partners')}
                style={{ padding: '13px 26px', borderRadius: '999px', border: `1.5px solid rgba(30,142,90,0.35)`, background: 'transparent', color: GREEN_DEEP, fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}
              >
                Partners
              </button>
            </div>

            <div style={{ borderTop: '1px solid #E4E8F2', paddingTop: '2rem' }}>
              <h4 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: MUTED, marginBottom: '1.5rem' }}>Published Science and Eight Years of Research Behind It</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1.5rem' }}>
                {[
                  { icon: FileText, value: '1', label: 'Published Paper' },
                  { icon: Clock3, value: '8', label: 'Years of Research' },
                  { icon: Award, value: '1', label: 'Patent Pending' }
                ].map(({ icon: Icon, value, label }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ width: 52, height: 52, borderRadius: '50%', flexShrink: 0, background: `linear-gradient(135deg, ${GREEN} 0%, ${GREEN_DEEP} 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={22} color="white" strokeWidth={2} />
                    </div>
                    <div>
                      <div style={{ fontSize: '22px', fontWeight: 700, color: SLATE, lineHeight: 1.1 }}>{value}</div>
                      <div style={{ fontSize: '13px', color: MUTED }}>{label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            onClick={onWatchFilm}
            style={{
              position: 'relative',
              aspectRatio: '4 / 3',
              borderRadius: '20px',
              overflow: 'hidden',
              cursor: 'pointer',
              backgroundImage: 'url(/images/Modern_Laboratory_Setup.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '16px 26px', borderRadius: '999px', backgroundColor: 'rgba(23,45,35,0.88)' }}>
                <div style={{ width: 30, height: 30, borderRadius: '50%', border: '1.5px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Play size={13} color="white" fill="white" />
                </div>
                <span style={{ color: 'white', fontSize: '15px', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>See Our Story</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
