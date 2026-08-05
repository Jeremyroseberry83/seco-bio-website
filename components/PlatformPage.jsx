import React from 'react';

export default function PlatformPage({ onContactClick }) {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#3D4654' }}>
          A formulation engine, not a one-off service.
        </h1>
        <p className="text-lg" style={{ color: '#6B7280' }}>
          How we build, scale, and keep improving.
        </p>
      </section>

      {/* The Loop Expanded */}
      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: '#EEF2FE' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12" style={{ color: '#3D4654' }}>
            The loop, expanded.
          </h2>

          <div className="space-y-8">
            {[
              {
                num: '01',
                title: 'You tell us what you need',
                details: [
                  'The organism (strain name, source)',
                  'The format (tablets, capsules, powder)',
                  'The claim and shelf life you\'re targeting',
                  'Your markets and regulatory requirements',
                  'Volume and manufacturing constraints'
                ],
                timeline: '[CONFIRM TIMELINE]'
              },
              {
                num: '02',
                title: 'We find the formula',
                details: [
                  'AI models predict promising formulations',
                  'Robots test formulations in parallel',
                  'Validation on your specific strain',
                  'Iteration until we match your shelf-life target',
                  'Full stability data under your storage conditions'
                ],
                timeline: '[CONFIRM TIMELINE]'
              },
              {
                num: '03',
                title: 'We prove it on your line',
                details: [
                  'Technology transfer to your facility',
                  'Scaled-up batch testing on your equipment',
                  'Manufacturing process validation',
                  'Stability confirmation at commercial scale',
                  'Documentation for regulatory filing (if needed)'
                ],
                timeline: '[CONFIRM TIMELINE]'
              },
              {
                num: '04',
                title: 'You launch',
                details: [
                  'Licensed per strain and per product',
                  'You own and sell the product',
                  'We provide ongoing technical support',
                  'Continuous improvement through field data',
                  'No time limits on license'
                ],
                timeline: '[CONFIRM TIMELINE]'
              }
            ].map((step, idx) => (
              <div
                key={idx}
                className="p-8 rounded border-l-4"
                style={{
                  backgroundColor: idx % 2 === 0 ? 'white' : '#F9FAFB',
                  borderColor: '#3B60E4'
                }}
              >
                <div className="flex items-start gap-6">
                  <div
                    className="text-4xl font-bold flex-shrink-0"
                    style={{ color: '#3B60E4' }}
                  >
                    {step.num}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-4" style={{ color: '#3D4654' }}>
                      {step.title}
                    </h3>
                    <ul className="space-y-2 mb-4">
                      {step.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex gap-3"
                          style={{ color: '#6B7280' }}
                        >
                          <span style={{ color: '#3B60E4' }}>•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: '#3B60E4' }}
                    >
                      Timeline: {step.timeline}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Compounds */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12" style={{ color: '#3D4654' }}>
          Why it compounds.
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#3D4654' }}>
              Every strain solved becomes an asset.
            </h3>
            <p style={{ color: '#6B7280', lineHeight: '1.8' }}>
              Partners get the formulation and the stability data. We keep what the platform learned — the underlying dataset mapping which materials protect which organisms.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#3D4654' }}>
              The platform doesn't get used up.
            </h3>
            <p style={{ color: '#6B7280', lineHeight: '1.8' }}>
              As we solve more strains, the AI gets better at predicting what will work next. Timelines shrink. Cost per formulation drops. Both partners win.
            </p>
          </div>
        </div>

        {/* Compounding Illustration */}
        <div className="mt-12 p-8 rounded" style={{ backgroundColor: '#E1F4EE' }}>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: '#1E8E5A', fontFamily: 'monospace' }}
              >
                24-36 weeks
              </div>
              <p style={{ color: '#6B7280', fontSize: '14px' }}>
                Strain 1: Full development cycle
              </p>
            </div>
            <div>
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: '#1E8E5A', fontFamily: 'monospace' }}
              >
                18-24 weeks
              </div>
              <p style={{ color: '#6B7280', fontSize: '14px' }}>
                Strain 5: AI models trained, faster iteration
              </p>
            </div>
            <div>
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: '#1E8E5A', fontFamily: 'monospace' }}
              >
                12-18 weeks
              </div>
              <p style={{ color: '#6B7280', fontSize: '14px' }}>
                Strain 10: Predictive capability deployed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where It's Headed */}
      <section
        className="py-16 md:py-24 px-6"
        style={{ backgroundColor: '#F9FAFB' }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12" style={{ color: '#3D4654' }}>
            Where it's headed.
          </h2>

          <div
            className="p-8 rounded border-l-4"
            style={{
              backgroundColor: 'white',
              borderColor: '#3B60E4'
            }}
          >
            <p
              className="text-lg font-semibold mb-4"
              style={{ color: '#3D4654' }}
            >
              Industry timelines for a new stabilized live product run 5–7 years.
            </p>
            <p
              className="text-lg font-semibold mb-6"
              style={{ color: '#3B60E4' }}
            >
              Our target is 12–18 months.
            </p>
            <p style={{ color: '#6B7280', lineHeight: '1.8' }}>
              That capability is in development. We're building the computational and robotic infrastructure to compress formulation discovery from years to months. Full AI-native formulation and automated validation are roadmap items for 2027–28.
            </p>
          </div>
        </div>
      </section>

      {/* Deal Structure */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12" style={{ color: '#3D4654' }}>
          How deals are structured.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div
            className="p-8 rounded"
            style={{ backgroundColor: '#EEF2FE' }}
          >
            <h3 className="text-xl font-bold mb-4" style={{ color: '#3D4654' }}>
              Standard licensing
            </h3>
            <ul className="space-y-3">
              {[
                'Licensed per strain and format',
                'Development milestones tied to progress',
                'Royalties on net sales (if applicable)',
                'Exclusive within your category'
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3" style={{ color: '#6B7280' }}>
                  <span style={{ color: '#3B60E4' }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="p-8 rounded"
            style={{ backgroundColor: '#E1F4EE' }}
          >
            <h3 className="text-xl font-bold mb-4" style={{ color: '#3D4654' }}>
              Joint development
            </h3>
            <ul className="space-y-3">
              {[
                'For proprietary strains you own',
                'Shared IP ownership if applicable',
                'Co-commercialization rights',
                'Custom terms case-by-case'
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3" style={{ color: '#6B7280' }}>
                  <span style={{ color: '#1E8E5A' }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-center" style={{ color: '#6B7280' }}>
          No terms published. Each deal is unique.{' '}
          <a href="mailto:joe@seco.bio" style={{ color: '#3B60E4', textDecoration: 'underline' }}>
            Get in touch to discuss your situation.
          </a>
        </p>
      </section>

      {/* CTA */}
      <section
        className="py-16 md:py-24 px-6 text-center"
        style={{ backgroundColor: '#3D4A5B', color: 'white' }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Ready to talk about your strain?
          </h2>
          <a
            href="mailto:joe@seco.bio"
            className="inline-block px-8 py-3 rounded font-semibold text-white transition-colors"
            style={{ backgroundColor: '#3B60E4' }}
          >
            Explore a partnership
          </a>
        </div>
      </section>
    </div>
  );
}
