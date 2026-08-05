import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function PartnersPage({ onContactClick }) {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#3D4654' }}>
          Two ways in.
        </h1>
        <p className="text-lg" style={{ color: '#6B7280' }}>
          Whether you're a brand, manufacturer, or investor.
        </p>
      </section>

      {/* For Brands & Manufacturers */}
      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: '#EEF2FE' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#3D4654' }}>
            For brands & manufacturers
          </h2>
          <h3 className="text-2xl mb-12" style={{ color: '#6B7280' }}>
            Make your product deliver what the label promises.
          </h3>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h4 className="font-bold mb-4 text-lg" style={{ color: '#3D4654' }}>
                If you sell something alive, you already know the problem.
              </h4>
              <ul className="space-y-3" style={{ color: '#6B7280' }}>
                {[
                  'Overfilling to cover die-off',
                  'Shelf life you can\'t fully predict',
                  'A claim you can\'t verify at moment of consumption',
                  'Regulatory uncertainty on stability'
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span style={{ color: '#3B60E4' }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg" style={{ color: '#3D4654' }}>
                A program with Seco targets all three.
              </h4>
              <ul className="space-y-3" style={{ color: '#6B7280' }}>
                {[
                  'Formulation designed for your exact strain',
                  'Stability data under your storage conditions',
                  'Manufacturing transfer to your line',
                  'Confidence in what\'s on the shelf'
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span style={{ color: '#3B60E4' }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* What We Need */}
          <div
            className="p-8 rounded mb-8"
            style={{ backgroundColor: 'white' }}
          >
            <h4 className="font-bold mb-4" style={{ color: '#3D4654' }}>
              What we need from you:
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'The organism (strain name, source)',
                'The format (tablets, capsules, powder)',
                'The claim and shelf life you\'re targeting',
                'Your markets and volume requirements',
                'Manufacturing constraints and equipment',
                'Your timeline for commercialization'
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <span style={{ color: '#3B60E4' }}>›</span>
                  <span style={{ color: '#6B7280' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What You Get Back */}
          <div
            className="p-8 rounded mb-12"
            style={{ backgroundColor: 'white' }}
          >
            <h4 className="font-bold mb-4" style={{ color: '#3D4654' }}>
              What you get back:
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'A protective formulation built for your strain',
                'A transfer package for your manufacturing line',
                'Stability data under your storage conditions',
                'A license to sell it in your markets',
                'Technical support through launch',
                'Documentation for regulatory filings'
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <span style={{ color: '#3B60E4' }}>✓</span>
                  <span style={{ color: '#6B7280' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <a
            href="mailto:joe@seco.bio"
            className="inline-flex items-center gap-2 px-8 py-3 rounded font-semibold text-white"
            style={{ backgroundColor: '#3B60E4' }}
          >
            <span>Start a program</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* For Investors */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#3D4654' }}>
            For investors
          </h2>
          <h3 className="text-2xl mb-12" style={{ color: '#6B7280' }}>
            Back a platform, not a product.
          </h3>

          <div
            className="p-12 rounded border-l-4"
            style={{
              backgroundColor: '#E1F4EE',
              borderColor: '#1E8E5A'
            }}
          >
            <h4 className="text-2xl font-bold mb-8" style={{ color: '#3D4654' }}>
              What we're building
            </h4>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <div
                  className="text-4xl font-bold mb-4"
                  style={{ color: '#1E8E5A' }}
                >
                  01
                </div>
                <h5 className="font-bold mb-3" style={{ color: '#3D4654' }}>
                  Formulation engine
                </h5>
                <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.6' }}>
                  AI-driven formulation discovery that gets faster with every strain solved.
                </p>
              </div>
              <div>
                <div
                  className="text-4xl font-bold mb-4"
                  style={{ color: '#1E8E5A' }}
                >
                  02
                </div>
                <h5 className="font-bold mb-3" style={{ color: '#3D4654' }}>
                  Compound revenue
                </h5>
                <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.6' }}>
                  Licensing fees and royalties that scale without linear cost growth.
                </p>
              </div>
              <div>
                <div
                  className="text-4xl font-bold mb-4"
                  style={{ color: '#1E8E5A' }}
                >
                  03
                </div>
                <h5 className="font-bold mb-3" style={{ color: '#3D4654' }}>
                  Defensible IP
                </h5>
                <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.6' }}>
                  Patents, datasets, and proprietary models that competitors can't replicate.
                </p>
              </div>
            </div>

            <p style={{ color: '#3D4654', lineHeight: '1.8', marginBottom: '20px' }}>
              <strong>Every strain we solve</strong> becomes protected intellectual property. Partners license the formulation; we keep the underlying dataset. The platform compounds.
            </p>

            <h4 className="text-xl font-bold mb-6" style={{ color: '#3D4654' }}>
              Market opportunity
            </h4>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: 'Probiotics',
                  size: '$65B+ market',
                  issue: 'Almost entirely commoditized'
                },
                {
                  title: 'Live medicines',
                  size: '$10B+ pipeline',
                  issue: 'Viability is the bottleneck'
                },
                {
                  title: 'Agricultural biologics',
                  size: '$5B+ emerging',
                  issue: 'Never been to scale'
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded"
                  style={{ backgroundColor: 'white' }}
                >
                  <p style={{ color: '#6B7280', fontSize: '12px', marginBottom: '4px' }}>
                    {item.title}
                  </p>
                  <p
                    className="font-bold mb-2"
                    style={{ color: '#1E8E5A' }}
                  >
                    {item.size}
                  </p>
                  <p style={{ color: '#6B7280', fontSize: '14px' }}>
                    {item.issue}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p style={{ color: '#6B7280', marginTop: '16px' }}>
            Seco Bio is not conducting a public offering. We speak with a small number of aligned investors, by introduction, under NDA.
          </p>

          <div className="mt-12">
            <a
              href="mailto:joe@seco.bio"
              className="inline-flex items-center gap-2 px-8 py-3 rounded font-semibold text-white"
              style={{ backgroundColor: '#3B60E4' }}
            >
              <span>Get in touch</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 md:py-24 px-6 text-center"
        style={{ backgroundColor: '#3D4A5B', color: 'white' }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Which describes you?
          </h2>
          <p style={{ marginBottom: '24px', opacity: '0.9' }}>
            Let's figure it out in a conversation.
          </p>
          <a
            href="mailto:joe@seco.bio?subject=Seco%20Bio%20Inquiry"
            className="inline-block px-8 py-3 rounded font-semibold text-white"
            style={{ backgroundColor: '#3B60E4' }}
          >
            Contact us
          </a>
        </div>
      </section>
    </div>
  );
}
