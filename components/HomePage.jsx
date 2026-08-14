import React from 'react';
import { Play } from 'lucide-react';

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
          <div style={{ maxWidth: 760 }}>
            <h1 style={{ fontSize: 'clamp(32px, 5.5vw, 56px)', fontWeight: 700, color: 'white', lineHeight: 1.15, letterSpacing: '-0.01em', textShadow: '0 2px 24px rgba(0,0,0,0.35)' }}>
              Keeping the <span style={{ color: GREEN, fontStyle: 'italic' }}>living</span> alive.
            </h1>
            <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.95)', lineHeight: 1.65, marginTop: '1.5rem', maxWidth: 640, marginLeft: 'auto', marginRight: 'auto', textShadow: '0 1px 12px rgba(0,0,0,0.35)' }}>
              Living products die before they arrive. Seco Bio's proprietary AI and robotics-driven formulation platform keeps them alive from the factory to the moment they're used — so what's on the label is what's inside.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
              <button
                onClick={() => onNavigate && onNavigate('platform-science')}
                style={{ padding: '14px 28px', borderRadius: '999px', border: 'none', background: 'linear-gradient(90deg, #3B60E4 0%, #2F4FC9 100%)', color: 'white', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}
              >
                Learn more
              </button>
              <button
                onClick={onWatchFilm}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '999px', border: '1.5px solid rgba(255,255,255,0.7)', background: 'transparent', color: 'white', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}
              >
                <Play size={16} fill="white" />
                Watch Our Story
              </button>
            </div>
          </div>
        </div>
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%', height: 'clamp(70px, 13vw, 200px)', display: 'block' }}>
          <path d="M0,200 L0,8 C360,150 1080,150 1440,8 L1440,200 Z" fill={BG} />
        </svg>
      </section>

      {/* Quiet nav row — where "Meet Our Team" / "Investor Partners" used to live before that
          whole content block was cut (its message duplicated Platform & Science, and the video
          was redundant with the hero's own "Watch Our Story" button). */}
      <section style={{ backgroundColor: 'white', padding: '2.5rem 1.5rem' }}>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => onNavigate && onNavigate('about')}
            style={{ padding: '13px 26px', borderRadius: '999px', border: 'none', background: `linear-gradient(90deg, ${GREEN} 0%, ${GREEN_DEEP} 100%)`, color: 'white', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}
          >
            Our Story
          </button>
          <button
            onClick={() => onNavigate && onNavigate('partners')}
            style={{ padding: '13px 26px', borderRadius: '999px', border: `1.5px solid rgba(30,142,90,0.35)`, background: 'transparent', color: GREEN_DEEP, fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}
          >
            For Partners
          </button>
        </div>
      </section>
    </div>
  );
}
