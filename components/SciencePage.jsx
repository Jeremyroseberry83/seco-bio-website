import React from 'react';
import { FileText, ExternalLink, ArrowRight } from 'lucide-react';
import {
  PageHero, Accent, Eyebrow, SplitFeature, HighlightGrid, StatBand,
  SLATE, MUTED, BLUE, BLUE_DEEP, GREEN, INK
} from './ui';

export default function SciencePage({ onContactClick }) {
  return (
    <div>
      <PageHero
        eyebrow="Science &amp; evidence"
        video="/videos/science-header.mp4"
        videoOpacity={0.2}
        image="/images/science/cell.jpg"
        title={<>Don't take our word for it. <Accent>Read the paper.</Accent></>}
        subtitle="Published in Nature Materials in 2024 with full methods and data. Funded by NASA and DARPA, carried out at MIT. Anyone can check it."
      />

      {/* The paper */}
      <SplitFeature
        eyebrow="The publication"
        title={<>Synthetic extremophiles via <Accent tone="dark">species-specific formulations.</Accent></>}
        image="/images/photo/scientist.jpg"
        ratio="4 / 3"
      >
        <p className="mb-6">
          <strong style={{ color: SLATE }}>Jimenez, M., Traverso, G., et al.</strong>{' '}
          <em>Nature Materials</em>, 2024.
        </p>
        <p className="mb-8">
          The study shows that protective formulations tailored to specific bacterial strains improve
          viability through drying, storage, and transit by up to 10,000-fold, with applications
          across probiotics, therapeutics, and agricultural biologics.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://www.nature.com/articles/s41563-024-01937-6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-white text-sm font-semibold"
            style={{ background: `linear-gradient(90deg, ${BLUE} 0%, ${BLUE_DEEP} 100%)` }}
          >
            Read the paper <ExternalLink size={15} />
          </a>
          <a
            href="/documents/seco-nature-materials-2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-semibold"
            style={{ border: `1.5px solid ${BLUE}`, color: BLUE }}
          >
            Download PDF <FileText size={15} />
          </a>
        </div>
      </SplitFeature>

      {/* Headline results */}
      <StatBand
        image="/images/photo/microscope-macro.jpg"
        stats={[
          { value: '10,000×', label: 'More surviving cells than the commercial version' },
          { value: '6½ mo', label: 'At body temperature, still viable' },
          { value: '2,080', label: 'Formulations screened' },
          { value: '7 of 13', label: 'Shelf products missed their own label claim' }
        ]}
      />

      {/* Five key findings */}
      <HighlightGrid
        eyebrow="Five key findings"
        title="What the study actually showed."
        intro="Each finding is reproducible from the published methods. Nothing here depends on data we hold privately."
        cards={[
          { title: 'The shelf survey', body: '7 of 13 probiotic products tested did not contain the number of living cells printed on the label.' },
          { title: 'Species-specificity', body: 'Materials effective for one strain failed on another, even among closely related species.' },
          { title: 'The 10,000× improvement', body: 'Protected formulations maintained 10,000× higher cell counts under accelerated storage.' }
        ]}
      />

      <section className="pb-28 px-6" style={{ backgroundColor: INK, marginTop: -1 }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5">
          {[
            { title: 'Manufacturing resilience', body: 'Survived spray drying, tablet pressing, enteric coating, and commercial sterilization at 30 kGy.' },
            { title: 'In vivo efficacy', body: 'Protected cells retained viability through simulated gastric transit and demonstrated biological function in live animal models.' }
          ].map((c) => (
            <div key={c.title} className="rounded-xl p-8 bg-white transition-transform hover:-translate-y-1">
              <h4 className="font-bold mb-3" style={{ color: SLATE, fontSize: '17px' }}>{c.title}</h4>
              <p style={{ color: MUTED, fontSize: '15px', lineHeight: 1.7 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IP */}
      <SplitFeature
        flip
        eyebrow="Intellectual property"
        title={<>Patent-pending, <Accent tone="dark">filed by MIT.</Accent></>}
        image="/images/photo/microscope-bench.jpg"
      >
        <p className="mb-5">
          US patent application <strong style={{ color: SLATE }}>18/477,970</strong>, covering
          strain-specific protective formulations and the manufacturing processes around them.
        </p>
        <p className="mb-6">
          Beyond the filing, the platform's defensible assets are the formulation dataset, the
          predictive models trained on it, and the scale-up protocols — none of which can be
          reverse-engineered from a finished product.
        </p>
        <p style={{ fontSize: '14px', opacity: 0.8 }}>
          Status: patent-pending. Assignee: MIT.
        </p>
      </SplitFeature>

      {/* Publications index */}
      <section className="py-28 px-6" style={{ backgroundColor: '#F7F8FA' }}>
        <div className="max-w-4xl mx-auto">
          <Eyebrow className="mb-4">Publications</Eyebrow>
          <h2
            className="font-bold mb-12"
            style={{ color: SLATE, fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
          >
            The index.
          </h2>

          <div
            className="rounded-xl p-8 bg-white flex flex-col sm:flex-row sm:items-center gap-6 justify-between"
            style={{ border: '1px solid #E4E8F2' }}
          >
            <div>
              <p
                className="mb-2"
                style={{ color: BLUE, fontSize: '13px', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}
              >
                2024
              </p>
              <h4 className="font-bold mb-2" style={{ color: SLATE, fontSize: '17px', lineHeight: 1.4 }}>
                Synthetic extremophiles via species-specific formulations improve microbial therapeutics
              </h4>
              <p style={{ color: MUTED, fontSize: '14px' }}>
                Nature Materials · Jimenez, M., Traverso, G., et al.
              </p>
            </div>
            <a
              href="/documents/seco-nature-materials-2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold flex-shrink-0"
              style={{ background: `linear-gradient(90deg, ${BLUE} 0%, ${BLUE_DEEP} 100%)` }}
            >
              Read <ArrowRight size={15} />
            </a>
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
          Questions about the science?
        </h2>
        <button
          onClick={onContactClick}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-sm font-semibold"
          style={{ color: BLUE_DEEP }}
        >
          Get in touch <ArrowRight size={16} />
        </button>
      </section>
    </div>
  );
}
