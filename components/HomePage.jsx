import React, { useState, useEffect } from 'react';
import { Play, ArrowDown } from 'lucide-react';

export default function HomePage({ onContactClick }) {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.3);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative w-full h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
        {/* Video background. Drop your file at /public/videos/seco-video.mp4 and it plays automatically. */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900">
          <video
            className="w-full h-full object-cover"
            src="/videos/seco-video.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-black opacity-40" />
        </div>

        {/* Hero Text Overlay */}
        <div className="absolute bottom-16 left-6 md:left-12 z-10 animate-fadeIn" style={{ animationDelay: '1.5s' }}>
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-4"
            style={{ color: 'white', fontFamily: 'system-ui' }}
          >
            Keeping the living alive.
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Bacteria that survive the factory, the shelf, and the journey to you.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => setVideoPlaying(true)}
              className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded hover:bg-gray-100 transition"
            >
              <Play size={18} />
              Watch the film (2 min)
            </button>
            <button
              onClick={onContactClick}
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-gray-900 transition"
            >
              Get in touch
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-50 animate-bounce">
          <ArrowDown size={24} />
        </div>
      </section>

      {/* ONE SENTENCE */}
      <section className="py-16 md:py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#3D4654' }}>
          Seco Bio uses AI and robotics to keep living organisms alive — making the probiotics people already buy actually work, and putting the ones that never survived a pill on the shelf for the first time.
        </h2>
        <p className="text-sm opacity-75" style={{ color: '#6B7280' }}>
          Eight years of research at MIT, funded by NASA and DARPA. Published in Nature Materials.
        </p>
      </section>

      {/* THE PROBLEM */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
        <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#3B60E4' }}>
          The Problem
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#3D4654' }}>
          Living products die on the way to you.
        </h2>

        <p
          className="text-lg leading-relaxed mb-12"
          style={{ color: '#3D4654' }}
        >
          Probiotics are alive. That's the entire point of them — and it's also the problem. Bacteria have to survive being dried, pressed into tablets, sealed in bottles, shipped through heat, and stored for months before anyone opens the package.
        </p>
        <p className="text-lg font-semibold mb-12" style={{ color: '#3D4654' }}>
          Most of them don't.
        </p>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div
            className="p-8 rounded"
            style={{ backgroundColor: '#EEF2FE' }}
          >
            <div
              className="text-3xl font-bold mb-2"
              style={{
                color: '#2F4FC9',
                fontFamily: 'monospace'
              }}
            >
              7 of 13
            </div>
            <p style={{ color: '#3D4654' }}>
              probiotic products tested contained the number of living cells printed on the label
            </p>
            <p className="text-xs mt-4 opacity-60">Published findings, Nature Materials, 2024</p>
          </div>

          <div
            className="p-8 rounded"
            style={{ backgroundColor: '#EEF2FE' }}
          >
            <div
              className="text-3xl font-bold mb-2"
              style={{
                color: '#2F4FC9',
                fontFamily: 'monospace'
              }}
            >
              1 in 50
            </div>
            <p style={{ color: '#3D4654' }}>
              cells in the average product was still alive
            </p>
          </div>

          <div
            className="p-8 rounded"
            style={{ backgroundColor: '#EEF2FE' }}
          >
            <div
              className="text-3xl font-bold mb-2"
              style={{
                color: '#2F4FC9',
                fontFamily: 'monospace'
              }}
            >
              up to 360×
            </div>
            <p style={{ color: '#3D4654' }}>
              more bacteria loaded at the factory than the label promises
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        className="py-16 md:py-24 px-6"
        style={{ backgroundColor: '#EEF2FE' }}
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#3B60E4' }}>
            How It Works
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#3D4654' }}>
            AI designs the protection. Robots prove it.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h4 className="font-bold mb-4" style={{ color: '#3D4654' }}>
                Robots run the experiments.
              </h4>
              <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                Automated systems build and test thousands of formulations in parallel, then read the results without a human counting anything. What took years takes weeks.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ color: '#3D4654' }}>
                Models learn what works.
              </h4>
              <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                Every experiment feeds a dataset that maps which materials protect which organisms. The more strains we solve, the better the system gets.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ color: '#3D4654' }}>
                The data is the asset.
              </h4>
              <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                Partners get the formulation and the proof. We keep what the platform learned.
              </p>
            </div>
          </div>

          {/* Why It Works */}
          <div className="border-t pt-12" style={{ borderColor: '#C9D6FB' }}>
            <h3 className="text-xl font-bold mb-8" style={{ color: '#3D4654' }}>
              Three reasons a manufacturer can actually adopt it
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex gap-4">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#3B60E4' }}
                >
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h5 className="font-bold mb-2" style={{ color: '#3D4654' }}>
                    No genetic modification
                  </h5>
                  <p style={{ color: '#6B7280', fontSize: '14px' }}>
                    We don't engineer the organism.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#3B60E4' }}
                >
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h5 className="font-bold mb-2" style={{ color: '#3D4654' }}>
                    Already approved ingredients
                  </h5>
                  <p style={{ color: '#6B7280', fontSize: '14px' }}>
                    Everything is already permitted in food.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#3B60E4' }}
                >
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h5 className="font-bold mb-2" style={{ color: '#3D4654' }}>
                    No factory floor changes
                  </h5>
                  <p style={{ color: '#6B7280', fontSize: '14px' }}>
                    It runs on equipment they already own.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROOF */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
        <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#3B60E4' }}>
          The Proof
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#3D4654' }}>
          This is published science, not a pitch.
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div
            className="p-8 rounded text-center border-2"
            style={{
              backgroundColor: '#EEF2FE',
              borderColor: '#C9D6FB'
            }}
          >
            <div
              className="text-3xl font-bold mb-3"
              style={{
                color: '#2F4FC9',
                fontFamily: 'monospace'
              }}
            >
              10,000×
            </div>
            <p style={{ color: '#6B7280', fontSize: '14px' }}>
              more surviving cells than commercial version
            </p>
          </div>

          <div
            className="p-8 rounded text-center border-2"
            style={{
              backgroundColor: '#EEF2FE',
              borderColor: '#C9D6FB'
            }}
          >
            <div
              className="text-3xl font-bold mb-3"
              style={{
                color: '#2F4FC9',
                fontFamily: 'monospace'
              }}
            >
              6½ mo.
            </div>
            <p style={{ color: '#6B7280', fontSize: '14px' }}>
              at body temperature and still alive
            </p>
          </div>

          <div
            className="p-8 rounded text-center border-2"
            style={{
              backgroundColor: '#EEF2FE',
              borderColor: '#C9D6FB'
            }}
          >
            <div
              className="text-3xl font-bold mb-3"
              style={{
                color: '#2F4FC9',
                fontFamily: 'monospace'
              }}
            >
              2,080
            </div>
            <p style={{ color: '#6B7280', fontSize: '14px' }}>
              formulations tested to find what works
            </p>
          </div>

          <div
            className="p-8 rounded text-center border-2"
            style={{
              backgroundColor: '#EEF2FE',
              borderColor: '#C9D6FB'
            }}
          >
            <div
              className="text-3xl font-bold mb-3"
              style={{
                color: '#2F4FC9',
                fontFamily: 'monospace'
              }}
            >
              ✓
            </div>
            <p style={{ color: '#6B7280', fontSize: '14px' }}>
              Survives all major steps
            </p>
          </div>
        </div>

        <p style={{ color: '#6B7280', fontSize: '14px' }}>
          The underlying research was funded by NASA and DARPA, carried out at MIT, and published in Nature Materials with full methods and data.{' '}
          <a href="#" style={{ color: '#3B60E4', textDecoration: 'underline' }}>
            Read the science →
          </a>
        </p>
      </section>

      {/* TWO DOORS - CONVERSION */}
      <section
        className="py-16 md:py-24 px-6"
        style={{ backgroundColor: '#F9FAFB' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Brands Card */}
            <div
              className="p-8 rounded"
              style={{ backgroundColor: '#EEF2FE' }}
            >
              <div
                className="text-sm font-bold uppercase tracking-widest mb-2"
                style={{ color: '#3B60E4' }}
              >
                For Brands & Manufacturers
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#3D4654' }}>
                Make your product deliver what the label promises
              </h3>
              <p style={{ color: '#6B7280', lineHeight: '1.6', marginBottom: '20px' }}>
                Bring us a strain and a target. We formulate the protection, prove it at scale, and hand it to your manufacturing line.
              </p>
              <button
                onClick={onContactClick}
                className="text-sm font-semibold transition-colors"
                style={{ color: '#3B60E4' }}
              >
                Explore a partnership →
              </button>
            </div>

            {/* Investors Card */}
            <div
              className="p-8 rounded"
              style={{ backgroundColor: '#E1F4EE' }}
            >
              <div
                className="text-sm font-bold uppercase tracking-widest mb-2"
                style={{ color: '#1E8E5A' }}
              >
                For Investors
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#3D4654' }}>
                Back a platform, not a product
              </h3>
              <p style={{ color: '#6B7280', lineHeight: '1.6', marginBottom: '20px' }}>
                Seco isn't a supplement company. Every strain we solve becomes protected intellectual property that compounds.
              </p>
              <button
                onClick={onContactClick}
                className="text-sm font-semibold transition-colors"
                style={{ color: '#1E8E5A' }}
              >
                Get in touch →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* HOW A PARTNERSHIP WORKS */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
        <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#3B60E4' }}>
          Partnership Process
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#3D4654' }}>
          Four steps, one strain at a time.
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              num: '01',
              title: 'You tell us what you need',
              desc: 'The organism, the format, the shelf life, the markets.'
            },
            {
              num: '02',
              title: 'We find the formula',
              desc: 'Parallel testing until we have the protective system for that specific strain.'
            },
            {
              num: '03',
              title: 'We prove it on your line',
              desc: 'Scaled up, transferred into your process, on your equipment.'
            },
            {
              num: '04',
              title: 'You launch',
              desc: 'Licensed per strain and per product. You sell it. We keep it working.'
            }
          ].map((step, idx) => (
            <div key={idx}>
              <div
                className="text-3xl font-bold mb-4"
                style={{ color: '#3B60E4' }}
              >
                {step.num}
              </div>
              <h4 className="font-bold mb-3" style={{ color: '#3D4654' }}>
                {step.title}
              </h4>
              <p style={{ color: '#6B7280', fontSize: '14px' }}>
                {step.desc}
              </p>
              {idx < 3 && (
                <div
                  className="mt-6 h-16 flex items-center justify-center text-3xl"
                  style={{ color: '#DCE3F7' }}
                >
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* BEYOND THE SHELF */}
      <section
        className="py-16 md:py-24 px-6"
        style={{ backgroundColor: '#F9FAFB' }}
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#1E8E5A' }}>
            Beyond the Shelf
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#3D4654' }}>
            Anything alive that has to survive a journey.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'People',
                desc: 'Supplements and live medicines'
              },
              {
                title: 'Animals',
                desc: 'Pet and livestock health'
              },
              {
                title: 'Farming',
                desc: 'Seed and soil treatments'
              },
              {
                title: 'Defense',
                desc: 'Biologics in the field, without refrigeration'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white"
                  style={{ backgroundColor: '#1E8E5A' }}
                >
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: '#3D4654' }}>
                    {item.title}
                  </h4>
                  <p style={{ color: '#6B7280', fontSize: '14px' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING BAND */}
      <section
        className="py-24 px-6 text-center text-white"
        style={{ backgroundColor: '#3D4A5B' }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's talk.
        </h2>
        <p className="text-lg mb-12 max-w-2xl mx-auto opacity-90">
          Whether you make a living product or you're looking at where this industry goes next — start here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onContactClick}
            className="px-8 py-3 rounded text-sm font-semibold transition-colors"
            style={{
              backgroundColor: '#3B60E4',
              color: 'white'
            }}
          >
            I'm a potential partner
          </button>
          <button
            onClick={onContactClick}
            className="px-8 py-3 rounded text-sm font-semibold border-2 border-white transition-colors hover:bg-white hover:text-gray-900"
          >
            I'm an investor
          </button>
        </div>
      </section>
    </div>
  );
}
