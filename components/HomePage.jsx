import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const BLUE = '#3B60E4';
const GREEN = '#1E8E5A';
const SLATE = '#3D4654';
const MUTED = '#6B7280';
const INK = '#2E4259';
const BG = '#FAFBFD';

export default function HomePage({ onContactClick }) {
  const [videoReady, setVideoReady] = React.useState(false);

  return (
    <div>
      {/* HERO */}
      <section className="relative w-full" style={{ height: '100vh', minHeight: 560, backgroundColor: INK, backgroundImage: 'url(/images/hero-poster.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <video autoPlay muted loop playsInline preload="auto" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: videoReady ? 1 : 0, transition: 'opacity 700ms' }} onPlaying={() => setVideoReady(true)} onLoadedData={() => setVideoReady(true)}>
          <source src="/videos/secobio2.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,16,24,0.72) 0%, rgba(12,16,24,0.34) 26%, rgba(12,16,24,0) 55%)' }} />
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%', height: 'clamp(70px, 13vw, 200px)', display: 'block' }}>
          <path d="M0,200 L0,8 C360,150 1080,150 1440,8 L1440,200 Z" fill={BG} />
        </svg>
      </section>

      {/* EIGHT YEARS */}
      <section style={{ backgroundColor: BG, padding: '4rem 1.5rem' }}>
        <div className="max-w-6xl mx-auto">
          <h2 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: MUTED, marginBottom: '3rem' }}>Eight Years of Research Behind It</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {[{ name: 'NASA', desc: 'Research funding' }, { name: 'DARPA', desc: 'Research funding' }, { name: 'MIT', desc: 'Where the work was done' }, { name: 'Nature Materials', desc: 'Peer-reviewed, 2024' }].map(({ name, desc }) => (
              <div key={name} style={{ textAlign: 'center' }}>
                <div style={{ width: 100, height: 100, borderRadius: '50%', backgroundColor: '#E8E8E8', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: '12px', color: MUTED }}>[LOGO]</span></div>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {[{ name: 'Joe Collura', role: 'Cofounder & CEO', org: 'Seco Bio' }, { name: 'Miguel Jimenez, PhD', role: 'Cofounder & Inventor', org: 'Boston University' }, { name: 'Giovanni Traverso, MD, PhD', role: 'Cofounder & Inventor', org: 'MIT' }, { name: 'Peter Luther', role: 'Executive Advisor', org: 'Atrium Innovations' }, { name: 'Martin Hendrix', role: 'Executive Advisor', org: 'Nestlé Health Science' }, { name: 'Dan Stroud', role: 'Executive Advisor', org: 'Nestlé Health Science' }].map(({ name, role, org }) => (
              <div key={name} style={{ textAlign: 'center' }}>
                <div style={{ width: '100%', aspectRatio: '1', backgroundColor: '#E8E8E8', borderRadius: '8px', marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '15px', fontWeight: 600, color: SLATE, marginBottom: '0.5rem' }}>{name}</h4>
                <p style={{ fontSize: '12px', color: BLUE, fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase' }}>{role}</p>
                <p style={{ fontSize: '12px', color: MUTED }}>{org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + FOOTER */}
      <section style={{ backgroundColor: INK, color: 'white', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <h3 style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '1rem' }}>Start a Conversation</h3>
        <h2 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.1 }}>For business and <span style={{ fontStyle: 'italic' }}>capital</span> partners.</h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>Tell us what you're working on. We'll write back.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
          <div style={{ border: '2px solid rgba(59, 96, 228, 0.4)', padding: '2rem', borderRadius: '12px', borderTop: '3px solid #3B60E4' }}>
            <h4 style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: 'white', marginBottom: '0.5rem' }}>Business Partners</h4>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>Brands, manufacturers, ingredient partners</p>
          </div>
          <div style={{ border: '2px solid rgba(30, 142, 90, 0.4)', padding: '2rem', borderRadius: '12px', borderTop: '3px solid #1E8E5A' }}>
            <h4 style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: 'white', marginBottom: '0.5rem' }}>Capital Partners</h4>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>Partners scaling the platform with us</p>
          </div>
        </div>
        <div style={{ marginBottom: '0.5rem' }}><a href="mailto:info@seco.bio" style={{ fontSize: '18px', fontWeight: 600, color: 'white', textDecoration: 'underline' }}>info@seco.bio</a></div>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>Include your company, your role, and what you'd like to discuss.</p>
      </section>

      <footer style={{ backgroundColor: BG, borderTop: '1px solid #DCE3F7', padding: '3rem 1.5rem' }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            <div><div style={{ fontSize: '16px', fontWeight: 700, color: BLUE, marginBottom: '0.5rem' }}>SECO BIO</div><p style={{ fontSize: '13px', color: MUTED }}>Protecting what matters.</p></div>
            <div><h4 style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: SLATE, marginBottom: '1rem' }}>Site</h4><a href="#platform" style={{ fontSize: '13px', color: SLATE, textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}>Platform & Science</a><a href="#partners" style={{ fontSize: '13px', color: SLATE, textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}>For Partners</a><a href="#about" style={{ fontSize: '13px', color: SLATE, textDecoration: 'none', display: 'block' }}>About</a></div>
            <div><h4 style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: SLATE, marginBottom: '1rem' }}>Connect</h4><a href="mailto:info@seco.bio" style={{ fontSize: '13px', color: SLATE, textDecoration: 'none' }}>info@seco.bio</a></div>
          </div>
          <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #DCE3F7', display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: MUTED, flexWrap: 'wrap' }}><div>© 2026 Seco Bio, Inc.</div><div>Cambridge, Massachusetts</div></div>
        </div>
      </footer>
    </div>
  );
}
