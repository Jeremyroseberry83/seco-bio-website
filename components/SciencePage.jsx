import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

export default function SciencePage({ onContactClick }) {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#3D4654' }}>
          Don't take our word for it.
        </h1>
        <p className="text-lg" style={{ color: '#6B7280' }}>
          This is published, peer-reviewed science.
        </p>
      </section>

      {/* The Paper */}
      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: '#EEF2FE' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-6 items-start">
            <div
              className="w-16 h-16 flex-shrink-0 rounded flex items-center justify-center"
              style={{ backgroundColor: '#3B60E4' }}
            >
              <FileText size={32} className="text-white" />
            </div>
            <div className="flex-grow">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: '#3B60E4' }}>
                Featured Publication
              </h3>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#3D4654' }}>
                Synthetic extremophiles via species-specific formulations improve microbial therapeutics
              </h2>
              <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
                <strong>Jimenez, M., Traverso, G., et al.</strong> <em>Nature Materials</em>, 2024.
              </p>
              <p style={{ color: '#6B7280', lineHeight: '1.6', marginBottom: '16px' }}>
                This study demonstrates that protective formulations tailored to specific bacterial strains can improve viability through drying, storage, and transit by up to 10,000-fold, with applications across probiotics, therapeutics, and agricultural biologics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded font-semibold text-white"
                  style={{ backgroundColor: '#3B60E4' }}
                >
                  <span>Read the paper</span>
                  <ExternalLink size={16} />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded border-2 font-semibold"
                  style={{ borderColor: '#3B60E4', color: '#3B60E4' }}
                >
                  <span>Download PDF</span>
                  <FileText size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12" style={{ color: '#3D4654' }}>
          Five key findings.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'The shelf survey',
              finding: '7 of 13 probiotic products tested did not contain the number of living cells printed on the label.'
            },
            {
              title: 'Species-specificity',
              finding: 'Protective materials effective for one strain failed on another, even among closely related species.'
            },
            {
              title: 'The 10,000× improvement',
              finding: 'Protected formulations maintained 10,000× higher cell counts under accelerated storage conditions.'
            },
            {
              title: 'Manufacturing resilience',
              finding: 'Formulations survived spray drying, tablet pressing, enteric coating, and commercial sterilization (30 kGy).'
            },
            {
              title: 'In vivo efficacy',
              finding: 'Protected cells retained viability through simulated gastric transit and demonstrated biological function in live animal models.'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded border-l-4"
              style={{
                backgroundColor: '#F9FAFB',
                borderColor: '#3B60E4'
              }}
            >
              <h3 className="text-lg font-bold mb-3" style={{ color: '#3D4654' }}>
                {item.title}
              </h3>
              <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                {item.finding}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Intellectual Property */}
      <section
        className="py-16 md:py-24 px-6"
        style={{ backgroundColor: '#E1F4EE' }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12" style={{ color: '#3D4654' }}>
            Intellectual property.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="p-8 rounded border-l-4"
              style={{
                backgroundColor: 'white',
                borderColor: '#1E8E5A'
              }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ color: '#3D4654' }}>
                Patent Status
              </h3>
              <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                US Patent Application <strong>18/477,970</strong> filed by MIT, covering strain-specific protective formulations and manufacturing processes.
              </p>
              <p style={{ color: '#6B7280', marginTop: '12px' }}>
                Status: Patent-pending | Assignee: MIT | Exclusive license: Seco Bio
              </p>
            </div>

            <div
              className="p-8 rounded border-l-4"
              style={{
                backgroundColor: 'white',
                borderColor: '#1E8E5A'
              }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ color: '#3D4654' }}>
                Protected Assets
              </h3>
              <ul className="space-y-2">
                {[
                  'Formulation methods and data',
                  'AI/ML predictive models',
                  'Proprietary datasets',
                  'Process optimization techniques',
                  'Scale-up protocols'
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3" style={{ color: '#6B7280' }}>
                    <span style={{ color: '#1E8E5A' }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Index */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12" style={{ color: '#3D4654' }}>
          All publications.
        </h2>

        <div className="space-y-4">
          <div
            className="p-6 rounded border"
            style={{
              backgroundColor: '#F9FAFB',
              borderColor: '#DCE3F7'
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '4px' }}>
                  <strong>2024</strong>
                </p>
                <h4 className="font-bold mb-2" style={{ color: '#3D4654' }}>
                  Synthetic extremophiles via species-specific formulations improve microbial therapeutics
                </h4>
                <p style={{ color: '#6B7280', fontSize: '14px' }}>
                  Nature Materials | Jimenez, M., Traverso, G., et al.
                </p>
              </div>
              <a
                href="#"
                className="px-4 py-2 rounded text-sm font-semibold flex-shrink-0"
                style={{
                  backgroundColor: '#3B60E4',
                  color: 'white'
                }}
              >
                Read
              </a>
            </div>
          </div>
        </div>

        <p style={{ color: '#6B7280', marginTop: '16px', fontSize: '14px' }}>
          More publications coming as we scale. Follow our{' '}
          <a href="#" style={{ color: '#3B60E4', textDecoration: 'underline' }}>
            research roadmap
          </a>
          .
        </p>
      </section>

      {/* CTA */}
      <section
        className="py-16 md:py-24 px-6 text-center"
        style={{ backgroundColor: '#F9FAFB' }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#3D4654' }}>
            Questions about the science?
          </h2>
          <a
            href="mailto:joe@seco.bio"
            className="inline-block px-8 py-3 rounded font-semibold text-white"
            style={{ backgroundColor: '#3B60E4' }}
          >
            Get in touch
          </a>
        </div>
      </section>
    </div>
  );
}
