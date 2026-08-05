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
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => setStickyNav(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        className={
          stickyNav
            ? 'fixed top-0 left-0 right-0 bg-white shadow-sm z-50 transition-all duration-300'
            : 'relative transition-all duration-300'
        }
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => handleNavClick('home')}
            className="text-xl font-bold tracking-tight"
            style={{ color: '#3D4654' }}
          >
            SECO BIO
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-sm font-medium transition-colors"
                style={{ color: currentPage === item.id ? '#3B60E4' : '#6B7280' }}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Translate />
            <button
              onClick={openContact}
              className="px-4 py-2 text-sm font-medium text-white rounded"
              style={{ backgroundColor: '#3B60E4' }}
            >
              Get in touch
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: '#3D4654' }}
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
                className="px-4 py-2 text-sm font-medium text-white rounded w-full"
                style={{ backgroundColor: '#3B60E4' }}
              >
                Get in touch
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className={stickyNav ? 'pt-16' : ''}>{renderPage()}</main>

      {currentPage !== 'home' && (
        <button
          onClick={openContact}
          className="fixed bottom-8 right-8 p-4 rounded-full text-white shadow-lg z-40"
          style={{ backgroundColor: '#3B60E4' }}
          aria-label="Get in touch"
        >
          <Mail size={24} />
        </button>
      )}

      {showContactModal && <ContactForm onClose={() => setShowContactModal(false)} />}

      <footer className="py-12 px-6" style={{ backgroundColor: '#3D4A5B', color: 'white' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">SECO BIO</h3>
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
