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

function Person({ name, title, bio, photo, accent, linkedin }) {
  return (
    <div>
      <div
        className="rounded-2xl overflow-hidden mb-6"
        style={{ aspectRatio: '1 / 1', backgroundColor: '#E9EDF6' }}
      >
        <img src={photo} alt={name} className="w-full h-full object-cover" loading="lazy" />
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

      {/* Origin */}
      <section className="py-24 px-6" style={{ backgroundColor: '#F7F8FA' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div
            className="rounded-2xl overflow-hidden"
            style={{ aspectRatio: '4 / 3', backgroundColor: INK }}
          >
            <img
              src="/images/photo/scientist.jpg"
              alt="Research in progress"
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
              From 2017 to 2024, NASA and DARPA funded the research at MIT — work aimed at keeping
              bacteria alive for soldiers in the field and astronauts on long missions. It published
              in <em>Nature Materials</em> in 2024.
            </p>
            <p style={{ color: MUTED, fontSize: '17px', lineHeight: 1.75 }}>
              Seco Bio exists to bring it to the industries that need it now.
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
              accent={BLUE}
              photo="/images/team/joe.jpg"
              bio="Built and commercialized MIT technology; launched medicines in neurology and oncology."
            />
            <Person
              name="Miguel Jimenez, PhD"
              linkedin="https://www.linkedin.com/in/miguel-jimenez/"
              title="Cofounder &amp; Inventor"
              accent={BLUE}
              photo="/images/team/miguel.jpg"
              bio="Led the original research and its publication in Nature Materials. Professor at Boston University."
            />
            <Person
              name="Giovanni Traverso, MD, PhD"
              linkedin="https://www.linkedin.com/in/giovanni-traverso-84386742/"
              title="Cofounder &amp; Inventor"
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
            <Eyebrow color={GREEN}>Advisors</Eyebrow>
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
              accent={GREEN}
              photo="/images/team/hendrix.jpg"
              bio="Built the company's M&amp;A function from 2012 and led its venture investment strategy. Board seats at Prometheus Biosciences, Evelo, Enterome, and Kaleido."
            />
            <Person
              name="Dan Stroud"
              linkedin="https://www.linkedin.com/in/danstroud1/"
              title="Founding CFO, Nestlé Health Science"
              accent={GREEN}
              photo="/images/team/stroud.jpg"
              bio="Former CFO of Nestlé USA. Thirty-four years at Nestlé, leading financial strategy for its major acquisitions. Senior Advisor, New Mountain Capital."
            />
            <Person
              name="Peter Luther, MBA"
              linkedin="https://www.linkedin.com/in/peterluther/"
              title="Former President &amp; CEO, Atrium Innovations"
              accent={GREEN}
              photo="/images/team/luther.jpg"
              bio="Led the consumer health group behind Garden of Life and Pure Encapsulations."
            />
          </div>

          {/* The line that does the work — only lands as a group statement. */}
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

      {/* Funders */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-16">
            <Eyebrow>Research funding &amp; affiliations</Eyebrow>
            <h2
              className="font-bold"
              style={{
                color: SLATE,
                fontSize: 'clamp(1.8rem, 3.2vw, 2.7rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em'
              }}
            >
              Where the work was funded and done.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-14">
            {[
              { name: 'NASA', file: '/images/logos/nasa.png', h: 52, role: 'Original research funding' },
              { name: 'DARPA', file: '/images/logos/darpa.png', h: 44, role: 'Research funding' },
              { name: 'MIT', file: '/images/logos/mit.png', h: 34, role: 'Research institution' },
              { name: 'Nature Materials', file: '/images/logos/nature.png', h: 44, role: 'Published 2024' }
            ].map((org, i) => (
              <div
                key={org.name}
                className="px-6 flex flex-col items-center text-center"
                style={{ borderLeft: i % 4 === 0 ? 'none' : '1px solid #E4E8F2' }}
              >
                <div className="flex items-center justify-center" style={{ height: 60, marginBottom: 18 }}>
                  <img
                    src={org.file}
                    alt={org.name}
                    style={{
                      height: org.h,
                      width: 'auto',
                      objectFit: 'contain',
                      filter: 'grayscale(100%)',
                      opacity: 0.72
                    }} loading="lazy"
                  />
                </div>
                <div style={{ color: SLATE, fontWeight: 700, fontSize: '14px', marginBottom: 5 }}>
                  {org.name}
                </div>
                <div style={{ color: MUTED, fontSize: '12px', letterSpacing: '0.04em', lineHeight: 1.5 }}>
                  {org.role}
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
          Questions?
        </h2>
        <p
          className="text-white mb-10 mx-auto"
          style={{ maxWidth: '40ch', fontSize: '17px', opacity: 0.9, lineHeight: 1.7 }}
        >
          Reach out to Joe directly. He responds to every inquiry.
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
