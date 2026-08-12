import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { PageHero, Accent } from './ui';

const BLUE = '#3B60E4';
const BLUE_DEEP = '#2F4FC9';
const GREEN = '#1E8E5A';
const SLATE = '#3D4654';
const MUTED = '#6B7280';
const INK = '#2E4259';

function Eyebrow({ children, color = BLUE }) {
  return (
    <p className="text-xs font-bold uppercase mb-4" style={{ color, letterSpacing: '0.22em' }}>
      {children}
    </p>
  );
}

function Person({ name, title, bio, photo, accent, linkedin, category }) {
  return (
    <div>
      <div
        className="relative rounded-2xl overflow-hidden mb-6"
        style={{ aspectRatio: '1 / 1', backgroundColor: '#E9EDF6' }}
      >
        <img src={photo} alt={name} className="w-full h-full object-cover" loading="lazy" />
        {category && (
          <span
            className="absolute top-3 left-3 text-xs font-bold uppercase"
            style={{
              color: 'white',
              backgroundColor: accent,
              padding: '4px 10px',
              borderRadius: '999px',
              letterSpacing: '0.08em'
            }}
          >
            {category}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2.5 mb-1">
        <h3 className="font-bold" style={{ color: SLATE, fontSize: '19px' }}>
          {name}
        </h3>
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on LinkedIn`}
            className="inline-flex items-center justify-center rounded-full transition-colors"
            style={{
              width: 24,
              height: 24,
              color: accent,
              backgroundColor: 'rgba(0,0,0,0.04)',
              flexShrink: 0
            }}
          >
            <Linkedin size={13} strokeWidth={2} />
          </a>
        )}
      </div>

      <p className="font-semibold mb-4" style={{ color: accent, fontSize: '13px' }}>
        {title}
      </p>
      <p style={{ color: MUTED, fontSize: '15px', lineHeight: 1.7 }}>{bio}</p>
    </div>
  );
}

export default function AboutPage({ onContactClick }) {
  return (
    <div>
      <PageHero
        eyebrow="About"
        image="/images/stills/lab-blue.jpg"
        title={<>Eight years of science. <Accent>Six months as a company.</Accent></>}
        subtitle="Research funded by NASA and DARPA, carried out at MIT, and published in Nature Materials. Seco Bio exists to bring it to the industries that need it now."
      />

      {/* Origin — matches the "Where This Came From" block on Platform & Science */}
      <section className="py-24 px-6" style={{ backgroundColor: 'white' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div
            className="rounded-2xl overflow-hidden"
            style={{ aspectRatio: '4 / 3', background: 'linear-gradient(135deg, #171B33 0%, #2E4259 100%)' }}
          >
            <img
              src="/images/space-1.jpg"
              alt="Research funded for long-duration space and defense missions"
              className="w-full h-full object-cover" loading="lazy"
            />
          </div>
          <div>
            <Eyebrow>Where this came from</Eyebrow>
            <h2
              className="font-bold mb-7"
              style={{
                color: SLATE,
                fontSize: 'clamp(1.7rem, 3vw, 2.5rem)',
                lineHeight: 1.12,
                letterSpacing: '-0.025em'
              }}
            >
              Built to keep bacteria alive where nothing else could.
            </h2>
            <p className="mb-6" style={{ color: MUTED, fontSize: '17px', lineHeight: 1.75 }}>
              From 2017 to 2024, NASA and DARPA funded research at MIT aimed at keeping bacteria
              alive for soldiers in the field and astronauts on long missions. The findings were
              published in <em>Nature Materials</em> in 2024.
            </p>
            <p className="mb-8" style={{ color: MUTED, fontSize: '17px', lineHeight: 1.75 }}>
              Seco Bio exists to bring it to the industries that need it now.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 pt-6" style={{ borderTop: '1px solid #E4E8F2' }}>
              <img src="/images/logos/nasa.png" alt="NASA" style={{ height: 32, width: 'auto' }} />
              <img src="/images/logos/darpa.png" alt="DARPA" style={{ height: 28, width: 'auto' }} />
              <img src="/images/logos/mit.png" alt="MIT" style={{ height: 24, width: 'auto' }} />
              <img src="/images/logos/nature.png" alt="Nature Materials" style={{ height: 30, width: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

      {/* The line that does the work — only lands as a group statement. */}
      <section className="pb-16 px-6" style={{ backgroundColor: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-2xl p-10 md:p-14 text-center"
            style={{ backgroundColor: INK }}
          >
            <p
              className="text-white font-bold mx-auto"
              style={{
                fontSize: 'clamp(1.15rem, 2.1vw, 1.7rem)',
                lineHeight: 1.4,
                letterSpacing: '-0.015em',
                maxWidth: '38ch'
              }}
            >
              Two of the executives who <Accent>built Nestlé Health Science's acquisition
              strategy</Accent>, and the <Accent>chief executive of one of the companies they
              acquired</Accent>.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <Eyebrow>The team</Eyebrow>
            <h2
              className="font-bold"
              style={{
                color: SLATE,
                fontSize: 'clamp(1.8rem, 3.2vw, 2.7rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em'
              }}
            >
              The people who invented it.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <Person
              name="Joe Collura"
              linkedin="https://www.linkedin.com/in/jvcollura/"
              title="Cofounder &amp; CEO"
              category="Founder"
              accent={BLUE}
              photo="/images/team/joe.jpg"
              bio="Built and commercialized MIT technology; launched medicines in neurology and oncology."
            />
            <Person
              name="Miguel Jimenez, PhD"
              linkedin="https://www.linkedin.com/in/miguel-jimenez/"
              title="Cofounder &amp; Inventor"
              category="Founder"
              accent={BLUE}
              photo="/images/team/miguel.jpg"
              bio="Led the original research and its publication in Nature Materials. Professor at Boston University."
            />
            <Person
              name="Giovanni Traverso, MD, PhD"
              linkedin="https://www.linkedin.com/in/giovanni-traverso-84386742/"
              title="Cofounder &amp; Inventor"
              category="Founder"
              accent={BLUE}
              photo="/images/team/giovanni.jpg"
              bio="MIT professor, practising physician, and founder of four biotech companies."
            />
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-28 px-6" style={{ backgroundColor: '#F7F8FA' }}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <Eyebrow color={GREEN}>Executive Advisory Board</Eyebrow>
            <h2
              className="font-bold"
              style={{
                color: SLATE,
                fontSize: 'clamp(1.8rem, 3.2vw, 2.7rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em'
              }}
            >
              The people who have bought companies like this one.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <Person
              name="Martin Hendrix, PhD"
              linkedin="https://www.linkedin.com/in/martin-hendrix-17b963b/"
              title="Former Head of Global BD &amp; M&amp;A, Nestlé Health Science"
              category="Advisor"
              accent={GREEN}
              photo="/images/team/hendrix.jpg"
              bio="Built the company's M&amp;A function from 2012 and led its venture investment strategy. Board seats at Prometheus Biosciences, Evelo, Enterome, and Kaleido."
            />
            <Person
              name="Dan Stroud"
              linkedin="https://www.linkedin.com/in/danstroud1/"
              title="Founding CFO, Nestlé Health Science"
              category="Advisor"
              accent={GREEN}
              photo="/images/team/stroud.jpg"
              bio="Former CFO of Nestlé USA. Thirty-four years at Nestlé, leading financial strategy for its major acquisitions. Senior Advisor, New Mountain Capital."
            />
            <Person
              name="Peter Luther, MBA"
              linkedin="https://www.linkedin.com/in/peterluther/"
              title="Former President &amp; CEO, Atrium Innovations"
              category="Advisor"
              accent={GREEN}
              photo="/images/team/luther.jpg"
              bio="Led the consumer health group behind Garden of Life and Pure Encapsulations."
            />
          </div>
        </div>
      </section>

      {/* Where We Focus */}
      <section className="py-28 px-6" style={{ backgroundColor: '#F7F8FA' }}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <Eyebrow>Where we focus</Eyebrow>
            <h2
              className="font-bold"
              style={{
                color: SLATE,
                fontSize: 'clamp(1.8rem, 3.2vw, 2.7rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em'
              }}
            >
              Probiotics today. Broader living products tomorrow.
            </h2>
            <p className="mt-5" style={{ color: MUTED, fontSize: '16px', lineHeight: 1.7 }}>
              Our core focus is human, early life, and animal probiotics. The platform reaches
              everywhere living products need to arrive alive.
            </p>
          </div>

          <div
            className="text-xs font-bold uppercase mb-6 pb-2"
            style={{ color: BLUE, letterSpacing: '0.16em', borderBottom: '1px solid #E4E8F2' }}
          >
            Core focus
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { title: 'Human Probiotics', body: 'Supplements and live bioproducts', img: '/images/family.jpg' },
              { title: 'Early Life', body: 'Infant & maternal health', img: '/images/earlylife.jpg' },
              { title: 'Animal Probiotics', body: 'Pet & livestock health', img: '/images/pets-feeding.jpg' }
            ].map(({ title, body, img }) => (
              <div key={title} className="rounded-xl overflow-hidden text-center" style={{ backgroundColor: 'white', borderTop: `3px solid ${BLUE}` }}>
                <div style={{ aspectRatio: '4 / 3', overflow: 'hidden' }}>
                  <img src={img} alt={title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <h4 className="font-bold mb-2" style={{ color: SLATE, fontSize: '16px' }}>{title}</h4>
                  <p style={{ color: MUTED, fontSize: '13px' }}>{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="text-xs font-bold uppercase mb-6 pb-2"
            style={{ color: MUTED, letterSpacing: '0.16em', borderBottom: '1px solid #E4E8F2' }}
          >
            Prospective expansion
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'Pharmaceuticals & Medical Devices', img: '/images/scientist.jpg' },
              { title: 'Agriculture', img: '/images/nutrition.jpg' },
              { title: 'Industrial', img: '/images/robotics.jpg' },
              { title: 'Space Exploration', img: '/images/space-1.jpg' }
            ].map(({ title, img }) => (
              <div key={title} className="rounded-lg overflow-hidden text-center" style={{ backgroundColor: 'white', border: '1px solid #E4E8F2' }}>
                <div style={{ aspectRatio: '1', overflow: 'hidden' }}>
                  <img src={img} alt={title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-4">
                  <h4 style={{ color: SLATE, fontSize: '13px' }}>{title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-28 px-6 text-center"
        style={{ backgroundColor: INK }}
      >
        <span
          aria-hidden="true"
          style={{
            display: 'block',
            width: 46,
            height: 3,
            borderRadius: 2,
            backgroundColor: GREEN,
            margin: '0 auto 34px'
          }}
        />
        <h2
          className="text-white font-bold mb-6"
          style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.8rem)', letterSpacing: '-0.03em' }}
        >
          Talk to the people who built it.
        </h2>
        <p
          className="text-white mb-10 mx-auto"
          style={{ maxWidth: '40ch', fontSize: '17px', opacity: 0.9, lineHeight: 1.7 }}
        >
          Joe answers every inquiry himself. Partnership, investment, or press — start here.
        </p>
        <button
          onClick={onContactClick}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-sm font-semibold"
          style={{ color: BLUE_DEEP }}
        >
          <Mail size={17} />
          Get in touch
        </button>
      </section>
    </div>
  );
}
