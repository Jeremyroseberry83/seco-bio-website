import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Menu, X, Mail } from 'lucide-react';
import HomePage from '../components/HomePage';
import TechnologyPage from '../components/TechnologyPage';
import PlatformPage from '../components/PlatformPage';
import SciencePage from '../components/SciencePage';
import PartnersPage from '../components/PartnersPage';
import AboutPage from '../components/AboutPage';
import ContactForm from '../components/ContactForm';
import Translate from '../components/Translate';

export default function Site() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const overHero = currentPage === 'home' && !scrolled;

  const navItems = [
    { name: 'Technology', id: 'technology' },
    { name: 'Platform', id: 'platform' },
    { name: 'Science', id: 'science' },
    { name: 'Partners', id: 'partners' },
    { name: 'About', id: 'about' }
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const openContact = () => setShowContactModal(true);

  const renderPage = () => {
    switch (currentPage) {
      case 'technology': return <TechnologyPage onContactClick={openContact} />;
      case 'platform':   return <PlatformPage onContactClick={openContact} />;
      case 'science':    return <SciencePage onContactClick={openContact} />;
      case 'partners':   return <PartnersPage onContactClick={openContact} />;
      case 'about':      return <AboutPage onContactClick={openContact} />;
      default:           return <HomePage onContactClick={openContact} />;
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
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3"
            aria-label="Seco Bio home"
          >
            <img
              src={overHero ? '/images/seco-mark-white.png' : '/images/seco-mark.png'}
              alt="Seco Bio"
              style={{ height: 34, width: 'auto', display: 'block' }}
            />
            <span
              className="text-lg font-bold"
              style={{ color: overHero ? '#FFFFFF' : '#2E3A8C', letterSpacing: '0.08em' }}
            >
              SECO BIO
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-sm font-medium transition-colors"
                style={{
                  color: overHero
                    ? 'rgba(255,255,255,0.92)'
                    : currentPage === item.id
                    ? '#3B60E4'
                    : '#6B7280'
                }}
              >
                {item.name}
              </button>
            ))}
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

      <main style={{ paddingTop: currentPage === 'home' ? 0 : 76 }}>{renderPage()}</main>

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

      {showContactModal && <ContactForm onClose={() => setShowContactModal(false)} />}

      <footer
        className="py-16 px-6"
        style={{
          background: 'linear-gradient(125deg, #22272F 0%, #2F4FC9 55%, #3B60E4 100%)',
          color: 'white'
        }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <img
              src="/images/seco-lockup-white.png"
              alt="Seco Bio"
              style={{ height: 74, width: 'auto', display: 'block', marginBottom: 18 }}
            />
            <p className="text-sm opacity-75">Protecting what matters.</p>
          </div>
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
          <div>
            <h4 className="font-bold mb-3 text-sm">Contact</h4>
            <a href="mailto:joe@seco.bio" className="text-sm opacity-75 hover:opacity-100">
              joe@seco.bio
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
