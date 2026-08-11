import React from 'react';

const BLUE = '#3B60E4';
const GREEN = '#1E8E5A';
const SLATE = '#3D4654';
const MUTED = '#6B7280';
const INK = '#2E4259';
const BG = '#FAFBFD';

export default function PlatformSciencePage() {
  return (
    <div>
      {/* HERO */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <h1 style={{ fontSize: '42px', fontWeight: 700, color: SLATE, marginBottom: '1rem', lineHeight: 1.1 }}>Platform & Science</h1>
          <p style={{ fontSize: '18px', color: MUTED, lineHeight: 1.8 }}>Learn how our platform works and the science behind protecting living organisms.</p>
        </div>
      </section>

      {/* THE PROOF */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: 'white' }}>
        <div className="max-w-6xl mx-auto" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: GREEN, marginBottom: '1rem' }}>The Proof</h3>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: SLATE, marginBottom: '1.5rem', lineHeight: 1.2 }}>This is published science, not a pitch.</h2>
            <p style={{ fontSize: '16px', color: MUTED, lineHeight: 1.8, marginBottom: '2rem' }}>The underlying research was funded by NASA and DARPA, carried out at MIT, and published in Nature Materials with full methods and data. Anyone can check it.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: 60, height: 60, borderRadius: '50%', backgroundColor: GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, flexShrink: 0 }}>✓</div>
                <div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: SLATE, marginBottom: '0.25rem' }}>10,000×</div>
                  <div style={{ fontSize: '14px', color: MUTED }}>more surviving cells than the commercial version</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: 60, height: 60, borderRadius: '50%', backgroundColor: GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, flexShrink: 0 }}>✓</div>
                <div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: SLATE, marginBottom: '0.25rem' }}>6½ months</div>
                  <div style={{ fontSize: '14px', color: MUTED }}>at body temperature, and still alive</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: 60, height: 60, borderRadius: '50%', backgroundColor: GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, flexShrink: 0 }}>✓</div>
                <div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: SLATE, marginBottom: '0.25rem' }}>2,080</div>
                  <div style={{ fontSize: '14px', color: MUTED }}>formulations tested to find what works</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ aspectRatio: '1', backgroundColor: '#E8E8E8', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '14px', color: MUTED }}>[Microscope image]</span>
          </div>
        </div>
      </section>

      {/* BEYOND THE SHELF */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <h3 style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: GREEN, marginBottom: '1rem' }}>Beyond the Shelf</h3>
          <h2 style={{ fontSize: '36px', fontWeight: 700, color: SLATE, marginBottom: '1rem', lineHeight: 1.2 }}>Anything alive that has to survive a journey.</h2>
          <p style={{ fontSize: '16px', color: MUTED, lineHeight: 1.8, marginBottom: '3rem' }}>Probiotics are where we start, because the need is immediate and the market is large. The same protection applies anywhere a living organism has to survive being processed, stored, and transported.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'People', desc: 'Supplements and live medicines' },
              { title: 'Animals', desc: 'Pet and livestock health' },
              { title: 'Farming', desc: 'Seed and soil treatments' },
              { title: 'Early life', desc: 'Infant and maternal health' }
            ].map(({ title, desc }) => (
              <div key={title}>
                <div style={{ aspectRatio: '1', backgroundColor: '#E8E8E8', borderRadius: '8px', marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '16px', fontWeight: 600, color: SLATE, marginBottom: '0.5rem' }}>{title}</h4>
                <p style={{ fontSize: '14px', color: MUTED }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTELLECTUAL PROPERTY */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: 'white' }}>
        <div className="max-w-6xl mx-auto" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: BLUE, marginBottom: '1rem' }}>Intellectual Property</h3>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: SLATE, marginBottom: '1.5rem', lineHeight: 1.2 }}>Patent-pending, <span style={{ fontWeight: 700 }}>filed by MIT.</span></h2>
            <p style={{ fontSize: '16px', color: MUTED, lineHeight: 1.8, marginBottom: '1.5rem' }}>US patent application 18/477,970, covering strain-specific protective formulations and the manufacturing processes around them.</p>
            <p style={{ fontSize: '16px', color: MUTED, lineHeight: 1.8 }}>Beyond the filing, the platform's defensible assets are the formulation dataset, the predictive models trained on it, and the scale-up protocols — none of which can be reverse-engineered from a finished product.</p>
            <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #DCE3F7' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: MUTED }}>Status</div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: SLATE }}>Patent-pending</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: MUTED }}>Assignee</div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: SLATE }}>MIT</div>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: MUTED, marginBottom: '0.25rem' }}>Application</div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: SLATE }}>18/477,970</div>
              </div>
            </div>
          </div>
          <div style={{ aspectRatio: '1', backgroundColor: '#E8E8E8', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '14px', color: MUTED }}>[Lab image]</span>
          </div>
        </div>
      </section>

      {/* WHAT KILLS LIVING CELLS */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: BLUE, marginBottom: '1rem' }}>What Kills Living Cells</h3>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: SLATE, marginBottom: '1.5rem', lineHeight: 1.2 }}>Four stages. <span style={{ color: BLUE }}>Every one takes a share.</span></h2>
            <p style={{ fontSize: '16px', color: MUTED, lineHeight: 1.8, marginBottom: '1.5rem' }}>A living product has to get from a fermenter to a person's gut without dying on the way. Between those two points sit four distinct kinds of stress, and each one kills a share of the population.</p>
            <p style={{ fontSize: '14px', color: MUTED, lineHeight: 1.8, fontStyle: 'italic' }}>Protection has to survive all four. A formulation that handles drying but fails in gastric acid delivers nothing at the moment of consumption.</p>
          </div>
          <div style={{ aspectRatio: '1', backgroundColor: '#E8E8E8', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '14px', color: MUTED }}>[Product image]</span>
          </div>
        </div>
      </section>

      {/* CTA + FOOTER */}
      <section style={{ backgroundColor: INK, color: 'white', padding: '4rem 1.5rem', textAlign: 'center' }}>
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
