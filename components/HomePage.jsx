import React from 'react';
import { Play } from 'lucide-react';

const BLUE = '#3B60E4';
const GREEN = '#1E8E5A';
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

      {/* TWO PATHS */}
      <section style={{ backgroundColor: 'white', padding: '4rem 1.5rem 0' }}>
        <div className="max-w-4xl mx-auto text-center" style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 700, color: SLATE, lineHeight: 1.2 }}>Where do you fit in?</h2>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div
            onClick={() => onNavigate && onNavigate('partners')}
            className="transition-colors"
            style={{ cursor: 'pointer', border: '2px solid rgba(59,96,228,0.2)', borderTop: `3px solid ${BLUE}`, borderRadius: '12px', padding: '2rem' }}
          >
            <h3 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: BLUE, marginBottom: '0.75rem' }}>Business Partners</h3>
            <p style={{ fontSize: '16px', color: MUTED, lineHeight: 1.7 }}>Brands, manufacturers, and ingredient partners bringing us a strain to protect — licensed back to you once it's solved.</p>
          </div>
          <div
            onClick={() => onNavigate && onNavigate('partners')}
            className="transition-colors"
            style={{ cursor: 'pointer', border: '2px solid rgba(30,142,90,0.2)', borderTop: `3px solid ${GREEN}`, borderRadius: '12px', padding: '2rem' }}
          >
            <h3 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: GREEN, marginBottom: '0.75rem' }}>Capital Partners</h3>
            <p style={{ fontSize: '16px', color: MUTED, lineHeight: 1.7 }}>Investors scaling the platform's compounding IP toward a strategic exit.</p>
          </div>
        </div>
      </section>

      {/* EIGHT YEARS */}
      <section style={{ backgroundColor: BG, padding: '4rem 1.5rem' }}>
        <div className="max-w-6xl mx-auto">
          <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 700, color: SLATE, lineHeight: 1.2, marginBottom: '3rem' }}>Published <span style={{ color: GREEN, fontStyle: 'italic' }}>science</span> and Eight Years of <span style={{ color: GREEN, fontStyle: 'italic' }}>Research</span> Behind It</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
            {[{ name: 'NASA', desc: 'Research funding', logo: '/images/logos/nasa.png' }, { name: 'DARPA', desc: 'Research funding', logo: '/images/logos/darpa.png' }, { name: 'MIT', desc: 'Where the work was done', logo: '/images/logos/mit.png' }, { name: 'Nature Materials', desc: 'Peer-reviewed, 2024', logo: '/images/logos/nature.png' }].map(({ name, desc, logo }) => (
              <div key={name} style={{ textAlign: 'center' }}>
                <div style={{ width: 100, height: 100, borderRadius: '50%', backgroundColor: '#E8E8E8', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <img src={logo} alt={name} style={{ width: '60%', height: '60%', objectFit: 'contain' }} />
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: SLATE, marginBottom: '0.5rem' }}>{name}</h3>
                <p style={{ fontSize: '13px', color: MUTED }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
