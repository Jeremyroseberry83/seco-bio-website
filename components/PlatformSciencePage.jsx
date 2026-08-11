import React from 'react';

const BLUE = '#3B60E4';
const GREEN = '#1E8E5A';
const SLATE = '#3D4654';
const MUTED = '#6B7280';
const BG = '#FAFBFD';

export default function PlatformSciencePage({ onContactClick }) {
  return (
    <div>
      <section style={{ padding: '4rem 1.5rem', backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <h1 style={{ fontSize: '48px', fontWeight: 700, color: SLATE, marginBottom: '2rem' }}>Platform & Science</h1>
          <p style={{ fontSize: '18px', color: MUTED, lineHeight: 1.8 }}>Learn how our platform works and the science behind it.</p>
        </div>
      </section>

      {/* CTA + FOOTER */}
      <section style={{ backgroundColor: '#2E4259', color: 'white', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <h3 style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '1rem' }}>Start a Conversation</h3>
        <h2 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.1 }}>For business and <span style={{ fontStyle: 'italic' }}>capital</span> partners.</h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>Tell us what you are working on. We will write back.</p>
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
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>Include your company, your role, and what you would like to discuss.</p>
      </section>

      <footer style={{ backgroundColor: BG, borderTop: '1px solid #DCE3F7', padding: '3rem 1.5rem' }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            <div><div style={{ fontSize: '16px', fontWeight: 700, color: BLUE, marginBottom: '0.5rem' }}>SECO BIO</div><p style={{ fontSize: '13px', color: MUTED }}>Protecting what matters.</p></div>
            <div><h4 style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: SLATE, marginBottom: '1rem' }}>Site</h4><a href="/" style={{ fontSize: '13px', color: SLATE, textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}>Home</a><a href="#platform" style={{ fontSize: '13px', color: SLATE, textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}>Platform & Science</a><a href="#about" style={{ fontSize: '13px', color: SLATE, textDecoration: 'none', display: 'block' }}>About</a></div>
            <div><h4 style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: SLATE, marginBottom: '1rem' }}>Connect</h4><a href="mailto:info@seco.bio" style={{ fontSize: '13px', color: SLATE, textDecoration: 'none' }}>info@seco.bio</a></div>
          </div>
          <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #DCE3F7', display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: MUTED, flexWrap: 'wrap' }}><div>© 2026 Seco Bio, Inc.</div><div>Cambridge, Massachusetts</div></div>
        </div>
      </footer>
    </div>
  );
}
