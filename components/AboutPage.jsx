import React from 'react';
import { Mail } from 'lucide-react';

export default function AboutPage({ onContactClick }) {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#3D4654' }}>
          Eight years of science. Six months as a company.
        </h1>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: '#EEF2FE' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12" style={{ color: '#3D4654' }}>
            Where this came from.
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#3D4654' }}>
                2017–2024: Research at MIT
              </h3>
              <p style={{ color: '#6B7280', lineHeight: '1.8' }}>
                NASA and DARPA funded the original research to keep bacteria alive for soldiers in the field and astronauts on long missions. The work happened at MIT under Prof. Giovanni Traverso, with Miguel Jimenez leading the development of strain-specific protective formulations. Results published in <em>Nature Materials</em>, 2024.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#3D4654' }}>
                2024–Present: Seco Bio
              </h3>
              <p style={{ color: '#6B7280', lineHeight: '1.8' }}>
                The research is now the platform. Seco Bio exists to commercialize the technology for the industries that need it now: probiotics, live medicines, agricultural biologics, and beyond. We're building the robotic and AI infrastructure to take formulation discovery from years to months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12" style={{ color: '#3D4654' }}>
          The team.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              name: 'Joe Collura',
              title: 'Cofounder & CEO',
              bio: 'Built and commercialized MIT technology; launched medicines in neurology and oncology. Business and partnership lead.'
            },
            {
              name: 'Miguel Jimenez, PhD',
              title: 'Cofounder & Inventor',
              bio: 'Led the original research and its publication in Nature Materials. Professor at Boston University. Scientific vision.'
            },
            {
              name: 'Giovanni Traverso, MD, PhD',
              title: 'Cofounder & Inventor',
              bio: 'MIT professor, practising physician, founder of four biotech companies. Strategic oversight and clinical validation.'
            }
          ].map((member, idx) => (
            <div
              key={idx}
              className="p-8 rounded border-l-4"
              style={{
                backgroundColor: '#F9FAFB',
                borderColor: '#3B60E4'
              }}
            >
              <div
                className="w-16 h-16 rounded-full bg-gray-300 mb-4"
                style={{ backgroundColor: '#DCE3F7' }}
              />
              <h3 className="text-lg font-bold mb-1" style={{ color: '#3D4654' }}>
                {member.name}
              </h3>
              <p
                className="text-sm font-semibold mb-4"
                style={{ color: '#3B60E4' }}
              >
                {member.title}
              </p>
              <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.6' }}>
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        <p
          className="text-center text-lg font-semibold mb-12"
          style={{ color: '#3D4654' }}
        >
          Two of the executives who built Nestlé Health Science's acquisition strategy, and the chief executive of one of the companies they acquired.
        </p>
      </section>

      {/* Advisors */}
      <section
        className="py-16 md:py-24 px-6"
        style={{ backgroundColor: '#E1F4EE' }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12" style={{ color: '#3D4654' }}>
            Advisors.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Martin Hendrix, PhD',
                title: 'Former Head of Global Business Development & M&A, Nestlé Health Science',
                bio: 'Built the company\'s M&A function from 2012 and led its venture investment strategy, including partnership with Flagship Pioneering. Board seats at Prometheus Biosciences, Evelo, Enterome, and Kaleido.'
              },
              {
                name: 'Dan Stroud',
                title: 'CFO, Nestlé Health Science (retired)',
                bio: 'Founding CFO of Nestlé Health Science, and former CFO of Nestlé USA. Thirty-four years at Nestlé, leading financial strategy for major acquisitions. Senior Advisor, New Mountain Capital.'
              },
              {
                name: 'Peter Luther, MBA',
                title: 'Former CEO, Atrium Innovations',
                bio: 'Former President & CEO of Atrium Innovations, the consumer health group behind Garden of Life and Pure Encapsulations. Deep expertise in brand scaling and M&A strategy.'
              }
            ].map((member, idx) => (
              <div
                key={idx}
                className="p-8 rounded border-l-4"
                style={{
                  backgroundColor: 'white',
                  borderColor: '#1E8E5A'
                }}
              >
                <div
                  className="w-16 h-16 rounded-full bg-gray-300 mb-4"
                  style={{ backgroundColor: '#BFE3CF' }}
                />
                <h3 className="text-lg font-bold mb-1" style={{ color: '#3D4654' }}>
                  {member.name}
                </h3>
                <p
                  className="text-sm font-semibold mb-4"
                  style={{ color: '#1E8E5A' }}
                >
                  {member.title}
                </p>
                <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.6' }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding & Affiliations */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12" style={{ color: '#3D4654' }}>
          Research funding & affiliations.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              name: 'NASA',
              desc: 'Original research funding for astrobiology applications'
            },
            {
              name: 'DARPA',
              desc: 'Defense Advanced Research Projects Agency funding'
            },
            {
              name: 'MIT',
              desc: 'Research institution and ongoing academic collaboration'
            }
          ].map((org, idx) => (
            <div key={idx}>
              <div
                className="text-5xl font-bold mb-4"
                style={{ color: '#3B60E4' }}
              >
                {org.name.charAt(0)}
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#3D4654' }}>
                {org.name}
              </h3>
              <p style={{ color: '#6B7280', fontSize: '14px' }}>
                {org.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        className="py-16 md:py-24 px-6 text-center"
        style={{ backgroundColor: '#F9FAFB' }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#3D4654' }}>
            Questions?
          </h2>
          <p style={{ color: '#6B7280', marginBottom: '24px' }}>
            Reach out to Joe directly. He responds to every inquiry.
          </p>
          <a
            href="mailto:joe@seco.bio"
            className="inline-flex items-center gap-2 px-8 py-3 rounded font-semibold text-white"
            style={{ backgroundColor: '#3B60E4' }}
          >
            <Mail size={18} />
            <span>joe@seco.bio</span>
          </a>
        </div>
      </section>
    </div>
  );
}
