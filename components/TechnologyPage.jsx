import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  PageHero, Accent, Eyebrow, SplitFeature, NumberStrip, HighlightGrid, StatBand,
  SLATE, MUTED, BLUE, BLUE_DEEP, GREEN, GREEN_DEEP, INK
} from './ui';

export default function TechnologyPage({ onContactClick }) {
  return (
    <div>
      <PageHero
        eyebrow="Technology"
        image="/images/science/bacteria.jpg"
        title={<>Living products die on the way to you. <Accent>We changed that.</Accent></>}
        subtitle="Bacteria have to survive drying, processing, storage, and digestion. Most of them don't. Here is what kills them, and what we do about it."
      />

      {/* Four stages — image + copy, then the numbered strip */}
      <SplitFeature
        eyebrow="What kills living cells"
        title={<>Four stages. <Accent tone="dark">Every one takes a share.</Accent></>}
        image="/images/stills/formats.jpg"
        quote="Protection has to survive all four. A formulation that handles drying but fails in gastric acid delivers nothing at the moment of consumption."
      >
        <p className="mb-5">
          A living product has to get from a fermenter to a person's gut without dying on the way.
          Between those two points sit four distinct kinds of stress, and each one kills a share of
          the population.
        </p>
        <p>
          The industry's answer has been to overfill — put in far more than needed and hope enough
          survive. It's expensive, it's imprecise, and it still doesn't guarantee what the label says.
        </p>
      </SplitFeature>

      <NumberStrip
        items={[
          { title: 'Drying', body: 'Water removal and osmotic stress. Bacteria need water to function; removing it damages cellular structures.' },
          { title: 'Processing', body: 'Shear, pressure, solvents, and heat during formulation. Each mechanical step causes die-off.' },
          { title: 'Storage', body: 'Time, temperature, and humidity across shelf life. Oxidative stress accumulates for months.' },
          { title: 'Digestion', body: 'Gastric acid and bile salts. Most strains cannot survive pH below 3 unprotected.' }
        ]}
      />

      {/* Why no universal fix */}
      <SplitFeature
        flip
        dark
        eyebrow="The core finding"
        title={<>There is no <Accent>universal fix.</Accent></>}
        image="/images/science/cell.jpg"
        ratio="1 / 1"
      >
        <p className="mb-5">
          The material that protects one organism fails on another — even between close relatives.
          Each species has its own cell wall composition, lipid profile, and metabolic dependencies.
        </p>
        <p>
          A formula that works for <em>Lactobacillus acidophilus</em> may damage{' '}
          <em>Bifidobacterium longum</em>. Protection has to be formulated per strain, which is
          precisely why nobody had solved it at scale before.
        </p>
      </SplitFeature>

      {/* Three constraints */}
      <HighlightGrid
        eyebrow="Designed around three constraints"
        title="Built so a manufacturer can actually adopt it."
        intro="Most stabilization approaches fail commercially, not scientifically — they require a new organism, a new ingredient approval, or a new production line. We ruled all three out at the start."
        cards={[
          { title: 'The bacteria aren\u2019t modified', body: 'We don\u2019t engineer the organism. What a partner licenses is the same strain they already sell.' },
          { title: 'The ingredients are approved', body: 'Everything we use is already permitted in food. Nothing new to clear.' },
          { title: 'The factory doesn\u2019t change', body: 'It runs on equipment manufacturers already own. No capital expenditure.' }
        ]}
      />

      {/* Survival results */}
      <StatBand
        image="/images/stills/robotics.jpg"
        stats={[
          { value: '10,000×', label: 'More surviving cells than the commercial version of the same organism' },
          { value: '6½ mo', label: 'At body temperature, and still alive' },
          { value: '2,080', label: 'Formulations tested to find what works' },
          { value: '30 kGy', label: 'Survives commercial sterilizing radiation' }
        ]}
      />

      {/* Process table */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-14">
            <Eyebrow className="mb-4">What it survives</Eyebrow>
            <h2
              className="font-bold"
              style={{ color: SLATE, fontSize: 'clamp(1.8rem, 3.2vw, 2.7rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
            >
              Process by process.
            </h2>
          </div>

          <div className="overflow-x-auto rounded-xl" style={{ border: '1px solid #E4E8F2' }}>
            <table className="w-full" style={{ fontSize: '15px', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#F7F8FA' }}>
                  {['Process', 'Stress type', 'Result'].map((h) => (
                    <th
                      key={h}
                      className="text-left py-5 px-6 font-bold"
                      style={{ color: SLATE, fontSize: '13px', letterSpacing: '0.06em', textTransform: 'uppercase' }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Spray drying', 'Temperature, osmotic', '95%+ viability maintained'],
                  ['Tablet pressing', 'Mechanical shear', '89% viability post-press'],
                  ['Enteric coating', 'Solvent, temperature', '92% viability through coating'],
                  ['Storage, 6 months', 'Oxidative, time', '10,000× higher recovery'],
                  ['Gastric pH 1.5', 'Acid', '78% survival in simulated gastric juice'],
                  ['Radiation, 30 kGy', 'Ionizing', '85%+ viability post-sterilization']
                ].map((row, i) => (
                  <tr key={row[0]} style={{ borderTop: '1px solid #E4E8F2' }}>
                    <td className="py-5 px-6 font-semibold" style={{ color: SLATE }}>{row[0]}</td>
                    <td className="py-5 px-6" style={{ color: MUTED }}>{row[1]}</td>
                    <td className="py-5 px-6">
                      <span
                        className="px-3 py-1.5 rounded-full font-semibold"
                        style={{ backgroundColor: '#E1F4EE', color: GREEN_DEEP, fontSize: '13px' }}
                      >
                        {row[2]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-28 px-6 text-center"
        style={{ background: `linear-gradient(125deg, ${INK} 0%, ${BLUE_DEEP} 40%, ${BLUE} 100%)` }}
      >
        <h2
          className="text-white font-bold mb-6"
          style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.8rem)', letterSpacing: '-0.03em' }}
        >
          Bring us a strain.
        </h2>
        <p className="text-white mb-10 mx-auto" style={{ maxWidth: '44ch', fontSize: '17px', opacity: 0.9, lineHeight: 1.7 }}>
          Tell us the organism, the format, and the shelf life you need. We'll tell you what's possible.
        </p>
        <button
          onClick={onContactClick}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-sm font-semibold"
          style={{ color: BLUE_DEEP }}
        >
          Explore a partnership <ArrowRight size={16} />
        </button>
      </section>
    </div>
  );
}
