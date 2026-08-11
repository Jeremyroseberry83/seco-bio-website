import React from 'react';

const BLUE = '#3B60E4';
const GREEN = '#1E8E5A';
const SLATE = '#3D4654';
const MUTED = '#6B7280';
const INK = '#2E4259';
const BG = '#FAFBFD';

export default function HomePage({ onContactClick, onNavigate }) {
  const [videoReady, setVideoReady] = React.useState(false);

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
              Keeping the <span style={{ color: '#8FADFF', fontStyle: 'italic' }}>living</span> alive.
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
                onClick={onContactClick}
                style={{ padding: '14px 28px', borderRadius: '999px', border: '1.5px solid rgba(255,255,255,0.7)', background: 'transparent', color: 'white', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}
              >
                Talk to us
              </button>
            </div>
          </div>
        </div>
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%', height: 'clamp(70px, 13vw, 200px)', display: 'block' }}>
          <path d="M0,200 L0,8 C360,150 1080,150 1440,8 L1440,200 Z" fill={BG} />
        </svg>
      </section>

      {/* EIGHT YEARS */}
      <section style={{ backgroundColor: BG, padding: '4rem 1.5rem' }}>
        <div className="max-w-6xl mx-auto">
          <h2 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: MUTED, marginBottom: '3rem' }}>Eight Years of Research Behind It</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
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
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: BLUE, marginBottom: '1rem' }}>Where This Came From</h3>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: SLATE, marginBottom: '1.5rem', lineHeight: 1.2 }}>Built to keep bacteria alive where <span style={{ color: GREEN }}>nothing else</span> could.</h2>
            <p style={{ fontSize: '16px', color: MUTED, lineHeight: 1.8, marginBottom: '1rem' }}>From 2017 to 2024, NASA and DARPA funded research at MIT aimed at keeping bacteria alive for soldiers in the field and astronauts on long missions. The findings were published in <em>Nature Materials</em> in 2024.</p>
            <p style={{ fontSize: '16px', color: MUTED, lineHeight: 1.8 }}>Seco Bio exists to bring it to the industries that need it now.</p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <h3 style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: MUTED, marginBottom: '3rem', textAlign: 'center' }}>Meet the Team</h3>
          <div className="grid md:grid-cols-3" style={{ gap: '2rem' }}>
            {[{ name: 'Joe Collura', role: 'Cofounder & CEO', org: 'Seco Bio', photo: '/images/team/joe.jpg' }, { name: 'Miguel Jimenez, PhD', role: 'Cofounder & Inventor', org: 'Boston University', photo: '/images/team/miguel.jpg' }, { name: 'Giovanni Traverso, MD, PhD', role: 'Cofounder & Inventor', org: 'MIT', photo: '/images/team/giovanni.jpg' }, { name: 'Peter Luther', role: 'Executive Advisor', org: 'Atrium Innovations', photo: '/images/team/luther.jpg' }, { name: 'Martin Hendrix', role: 'Executive Advisor', org: 'Nestlé Health Science', photo: '/images/team/hendrix.jpg' }, { name: 'Dan Stroud', role: 'Executive Advisor', org: 'Nestlé Health Science', photo: '/images/team/stroud.jpg' }].map(({ name, role, org, photo }) => (
              <div key={name} style={{ textAlign: 'center' }}>
                <div style={{ width: '100%', aspectRatio: '1', backgroundColor: '#E8E8E8', borderRadius: '8px', marginBottom: '1rem', overflow: 'hidden' }}>
                  <img src={photo} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h4 style={{ fontSize: '15px', fontWeight: 600, color: SLATE, marginBottom: '0.5rem' }}>{name}</h4>
                <p style={{ fontSize: '12px', color: BLUE, fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase' }}>{role}</p>
                <p style={{ fontSize: '12px', color: MUTED }}>{org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
