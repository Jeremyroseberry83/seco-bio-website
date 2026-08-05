import React from 'react';
import { PageHero, Accent } from './ui';

export default function TechnologyPage({ onContactClick }) {
  return (
    <div>
      <PageHero
        eyebrow="Technology"
        image="/images/science/bacteria.jpg"
        title={<>Living products die on the way to you. <Accent>We changed that.</Accent></>}
        subtitle="Bacteria have to survive drying, processing, storage, and digestion. Most of them don't. Here is what kills them, and what we do about it."
        stats={[
          { value: '10,000×', label: 'More surviving cells' },
          { value: '6½ mo', label: 'At body temperature' },
          { value: '2,080', label: 'Formulations tested' }
        ]}
      />

      {/* What Kills Living Cells */}
      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12" style={{ color: '#3D4654' }}>
            What kills living cells.
          </h2>

          <div className="space-y-8">
            {[
              {
                stage: 'Drying',
                desc: 'Water removal and osmotic stress. Bacteria need water to function — removing it damages cellular structures.'
              },
              {
                stage: 'Processing',
                desc: 'Shear forces, pressure, solvents, and heat during formulation. Each mechanical step causes cell death.'
              },
              {
                stage: 'Storage',
                desc: 'Time, temperature, and humidity during shelf life. Oxidative stress and reactive oxygen species (ROS) accumulate.'
              },
              {
                stage: 'Digestion',
                desc: 'Gastric acid and bile salts in the human GI tract. Most strains cannot survive pH < 3 without protection.'
              }
            ].map((item, idx) => (
              <div key={idx} className="border-l-4 pl-6" style={{ borderColor: '#3B60E4' }}>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#3D4654' }}>
                  {item.stage}
                </h3>
                <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why No Universal Fix */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12" style={{ color: '#3D4654' }}>
          Why there's no universal fix.
        </h2>

        <div
          className="p-8 rounded mb-8"
          style={{ backgroundColor: '#E1F4EE' }}
        >
          <p style={{ color: '#3D4654', lineHeight: '1.8' }}>
            <strong>The core finding:</strong> The material that protects one organism fails on another, even between close relatives. Protection has to be formulated per strain. This is why the industry overfills instead — it's the cheaper workaround for a problem nobody had solved until now.
          </p>
        </div>

        <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
          Each bacterial species has unique cell wall composition, lipid profiles, and metabolic dependencies. A protective formula that works for Lactobacillus acidophilus may damage Bifidobacterium longum. The only solution at scale is strain-specific design.
        </p>
      </section>

      {/* Three Constraints */}
      <section
        className="py-16 md:py-24 px-6"
        style={{ backgroundColor: '#EEF2FE' }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12" style={{ color: '#3D4654' }}>
            Three constraints we designed around.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div
                className="text-4xl font-bold mb-4"
                style={{ color: '#3B60E4' }}
              >
                ✓
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#3D4654' }}>
                No genetic modification
              </h3>
              <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                We don't engineer the organism. Protection is entirely formulation-based.
              </p>
            </div>
            <div>
              <div
                className="text-4xl font-bold mb-4"
                style={{ color: '#1E8E5A' }}
              >
                ✓
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#3D4654' }}>
                Food-approved ingredients only
              </h3>
              <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                Everything we use is already permitted in food. Nothing new to clear.
              </p>
            </div>
            <div>
              <div
                className="text-4xl font-bold mb-4"
                style={{ color: '#2F4FC9' }}
              >
                ✓
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#3D4654' }}>
                No factory floor changes
              </h3>
              <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                It runs on equipment manufacturers already own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What It Survives */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12" style={{ color: '#3D4654' }}>
          What it survives.
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: '2px solid #DCE3F7' }}>
                <th
                  className="text-left py-4 px-4 font-bold"
                  style={{ color: '#3D4654' }}
                >
                  Process
                </th>
                <th
                  className="text-left py-4 px-4 font-bold"
                  style={{ color: '#3D4654' }}
                >
                  Stress Type
                </th>
                <th
                  className="text-left py-4 px-4 font-bold"
                  style={{ color: '#3D4654' }}
                >
                  Result
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  process: 'Spray drying',
                  stress: 'Temperature, osmotic',
                  result: '95%+ viability maintained'
                },
                {
                  process: 'Tablet pressing',
                  stress: 'Mechanical shear',
                  result: '89% viability post-press'
                },
                {
                  process: 'Coating',
                  stress: 'Solvent, temperature',
                  result: '92% viability through enteric coating'
                },
                {
                  process: 'Storage (6 months)',
                  stress: 'Oxidative, time',
                  result: '10,000× higher recovery vs. unprotected'
                },
                {
                  process: 'Gastric pH 1.5',
                  stress: 'Acid',
                  result: '78% survival in simulated gastric juice'
                },
                {
                  process: 'Radiation (30kGy)',
                  stress: 'Ionizing',
                  result: '85%+ viability post-sterilization'
                }
              ].map((row, idx) => (
                <tr
                  key={idx}
                  style={{ borderBottom: '1px solid #DCE3F7' }}
                >
                  <td className="py-4 px-4" style={{ color: '#3D4654' }}>
                    {row.process}
                  </td>
                  <td className="py-4 px-4" style={{ color: '#6B7280' }}>
                    {row.stress}
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className="px-3 py-1 rounded text-xs font-semibold"
                      style={{
                        backgroundColor: '#E1F4EE',
                        color: '#1E8E5A'
                      }}
                    >
                      {row.result}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* The Film */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8" style={{ color: '#3D4654' }}>
          The full film.
        </h2>
        <div className="bg-gray-900 rounded aspect-video flex items-center justify-center">
          <p className="text-white opacity-75">Full 2:11 captioned video with sound will appear here</p>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 md:py-24 px-6 text-center"
        style={{ backgroundColor: '#F9FAFB' }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#3D4654' }}>
            Ready to explore a partnership?
          </h2>
          <a
            href="mailto:joe@seco.bio"
            className="inline-block px-8 py-3 rounded font-semibold text-white transition-colors"
            style={{ backgroundColor: '#3B60E4' }}
          >
            Get in touch
          </a>
        </div>
      </section>
    </div>
  );
}
