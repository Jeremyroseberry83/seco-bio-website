import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Menu, X, Mail, Linkedin, Globe } from 'lucide-react';
import HomePage from '../components/HomePage';
import PlatformSciencePage from '../components/PlatformSciencePage';
import PartnersPage from '../components/PartnersPage';
import AboutPage from '../components/AboutPage';
import ContactForm from '../components/ContactForm';
import VideoModal from '../components/VideoModal';
import Translate from '../components/Translate';

export default function Site() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactContext, setContactContext] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const overHero = !scrolled;

  const navItems = [
    { name: 'Platform & Science', id: 'platform-science' },
    { name: 'For Partners', id: 'partners' },
    { name: 'About', id: 'about' }
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const openContact = (type, message) => {
    // Guard against onClick={openContact} passing the DOM click event as `type`.
    setContactContext(typeof type === 'string' ? { type, message: message || '' } : null);
    setShowContactModal(true);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // No email service is connected yet — this just confirms the signup locally.
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'platform-science': return <PlatformSciencePage onContactClick={openContact} />;
      case 'partners':   return <PartnersPage onContactClick={openContact} />;
      case 'about':      return <AboutPage onContactClick={openContact} />;
      default:           return <HomePage onContactClick={openContact} onWatchFilm={() => setShowVideo(true)} onNavigate={handleNavClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Seco Bio — Keeping the living alive</title>
        <meta
          name="description"
          content="Seco Bio uses AI and robotics to keep living organisms alive, making probiotics deliver what the label promises."
        />
      </Head>

      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: overHero ? 'transparent' : '#FFFFFF',
          boxShadow: overHero ? 'none' : '0 1px 3px rgba(0,0,0,0.06)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label="Seco Bio home"
          >
            <div style={{ position: 'relative', height: 34, width: 28, flexShrink: 0 }}>
              {/* Both variants render from mount and crossfade via opacity — swapping
                  the `src` directly caused a flicker while the other file loaded. */}
              <img
                src="/images/seco-mark-white.png"
                alt="Seco Bio"
                style={{ position: 'absolute', inset: 0, height: 34, width: 28, display: 'block', opacity: overHero ? 1 : 0, transition: 'opacity 250ms ease' }}
              />
              <img
                src="/images/seco-mark.png"
                alt=""
                aria-hidden="true"
                style={{ position: 'absolute', inset: 0, height: 34, width: 28, display: 'block', opacity: overHero ? 0 : 1, transition: 'opacity 250ms ease' }}
              />
            </div>
            <div>
              <div
                className="text-lg font-bold"
                style={{ color: overHero ? '#FFFFFF' : '#3B60E4', letterSpacing: '0.08em', lineHeight: 1 }}
              >
                SECO BIO
              </div>
              <div
                style={{ 
                  fontSize: '9px', 
                  fontWeight: 600, 
                  letterSpacing: '1.2px',
                  textTransform: 'uppercase',
                  color: overHero ? 'rgba(255,255,255,0.8)' : '#3D4654',
                  lineHeight: 1
                }}
              >
                Protecting What Matters
              </div>
            </div>
          </button>
        </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              const activeUnderline = overHero ? 'rgba(255,255,255,0.95)' : '#3B60E4';
              const hoverColor = overHero ? 'rgba(255,255,255,0.7)' : '#3B60E4';
              return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-sm font-semibold transition-colors"
                style={{
                  color: overHero
                    ? isActive ? '#FFFFFF' : 'rgba(255,255,255,0.75)'
                    : isActive ? '#3B60E4' : '#6B7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  paddingBottom: '4px',
                  borderBottom: `2px solid ${isActive ? activeUnderline : 'transparent'}`,
                  transition: 'color 0.2s, border-color 0.2s'
                }}
                onMouseOver={(e) => { if (!isActive) e.currentTarget.style.borderBottomColor = hoverColor; }}
                onMouseOut={(e) => { if (!isActive) e.currentTarget.style.borderBottomColor = 'transparent'; }}
              >
                {item.name}
              </button>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Translate />
            <button
              onClick={openContact}
              className="px-6 py-2.5 text-sm font-semibold text-white rounded-full"
              style={{ background: 'linear-gradient(90deg, #3B60E4 0%, #2F4FC9 100%)' }}
            >
              Get in touch
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: overHero ? '#FFFFFF' : '#3D4654' }}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t" style={{ borderColor: '#DCE3F7' }}>
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-sm font-medium text-left"
                  style={{ color: '#3D4654' }}
                >
                  {item.name}
                </button>
              ))}
              <Translate />
              <button
                onClick={() => { openContact(); setMobileMenuOpen(false); }}
                className="px-4 py-2.5 text-sm font-semibold text-white rounded-full w-full"
                style={{ background: 'linear-gradient(90deg, #3B60E4 0%, #2F4FC9 100%)' }}
              >
                Get in touch
              </button>
            </div>
          </div>
        )}
      </nav>

      <main style={{ paddingTop: 0 }}>{renderPage()}</main>

      {currentPage !== 'home' && (
        <button
          onClick={openContact}
          className="fixed bottom-8 right-8 p-4 rounded-full text-white shadow-lg z-40"
          style={{ background: 'linear-gradient(135deg, #3B60E4 0%, #2F4FC9 100%)' }}
          aria-label="Get in touch"
        >
          <Mail size={24} />
        </button>
      )}

      {showContactModal && (
        <ContactForm
          onClose={() => setShowContactModal(false)}
          initialType={contactContext?.type}
          initialMessage={contactContext?.message}
        />
      )}
      {showVideo && <VideoModal onClose={() => setShowVideo(false)} />}

      <footer
        className="py-16 px-6"
        style={{
          background: 'linear-gradient(120deg, #0D4429 0%, #125A39 55%, #176E46 100%)',
          color: 'white',
          borderTop: '3px solid #1E8E5A'
        }}
      >
        {/* STAY INSPIRED — newsletter signup */}
        <div
          className="max-w-7xl mx-auto"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2.5rem',
            paddingBottom: '3rem',
            marginBottom: '3rem',
            borderBottom: '1px solid rgba(255,255,255,0.2)'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <img
              src="/images/seco-lockup-white.png"
              alt="Seco Bio"
              style={{ height: 74, width: 'auto', display: 'block', margin: '0 auto 18px' }}
            />
            <p className="text-sm opacity-75">Protecting what matters.</p>
          </div>

          <div style={{ textAlign: 'center', flex: '1 1 320px', maxWidth: 460 }}>
            <h3 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Stay Inspired</h3>
            <p style={{ fontSize: 14, opacity: 0.85, marginBottom: 20 }}>
              Get regular insights and updates from Seco Bio
            </p>

            {newsletterSubscribed ? (
              <p style={{ fontSize: 14, fontWeight: 600 }}>Thanks — you're on the list.</p>
            ) : (
              <form
                onSubmit={handleNewsletterSubmit}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email"
                  style={{
                    flex: '1 1 auto',
                    minWidth: 0,
                    padding: '12px 20px',
                    borderRadius: '24px 0 0 24px',
                    border: 'none',
                    outline: 'none',
                    fontSize: 14,
                    color: '#3D4654'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    flexShrink: 0,
                    padding: '12px 28px',
                    borderRadius: '0 24px 24px 0',
                    border: 'none',
                    backgroundColor: '#0D2A1B',
                    color: 'white',
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Subscribe
                </button>
              </form>
            )}

            <p style={{ fontSize: 11, opacity: 0.6, marginTop: 14 }}>
              By providing your details, you agree to be contacted by Seco Bio. You may unsubscribe at any time.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold mb-3 text-sm">Pages</h4>
            <div className="flex flex-col gap-2 text-sm items-start">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="opacity-75 hover:opacity-100 text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <h4 className="font-bold mb-4 text-sm">Contact</h4>

            <p className="font-semibold" style={{ fontSize: 15, marginBottom: 3 }}>
              Joe Collura
            </p>
            <p style={{ fontSize: 13, opacity: 0.65, lineHeight: 1.5, marginBottom: 18 }}>
              CEO &amp; Founder, Seco Bio
            </p>

            <a
              href="mailto:joe@seco.bio"
              className="flex items-center gap-2.5 opacity-80 hover:opacity-100 transition-opacity"
              style={{ fontSize: 14, marginBottom: 11, justifyContent: 'flex-end' }}
            >
              <Mail size={15} strokeWidth={1.8} style={{ flexShrink: 0 }} />
              joe@seco.bio
            </a>

            <a
              href="https://www.linkedin.com/in/jvcollura/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 opacity-80 hover:opacity-100 transition-opacity"
              style={{ fontSize: 14, justifyContent: 'flex-end' }}
            >
              <Linkedin size={15} strokeWidth={1.8} style={{ flexShrink: 0 }} />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t opacity-50 text-xs text-center">
          © 2026 Seco Bio. Privacy · Terms
        </div>
      </footer>
    </div>
  );
}
