import React, { useEffect } from 'react';
import { Languages } from 'lucide-react';

// Google Translate widget.
// Covers the markets Joe flagged: Brazil (pt), Germany (de), Switzerland (de/fr/it),
// Japan (ja), SEA (id/th/vi/ms), MENA (ar). Full language list is available in the dropdown.
export default function Translate() {
  useEffect(() => {
    if (document.getElementById('google-translate-script')) return;

    window.googleTranslateElementInit = () => {
      if (!window.google || !window.google.translate) return;
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages:
            'ar,de,en,es,fr,id,it,ja,ko,ms,pt,th,vi,zh-CN',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        },
        'google_translate_element'
      );
    };

    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src =
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    // The pill chrome lives here, on our own wrapper — not on Google's
    // .goog-te-gadget-simple, which only exists once its script has loaded
    // and previously left the button looking like bare unstyled text until
    // (or unless) that happened.
    <div
      className="translate-widget"
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        background: '#f1f3fb',
        border: '1px solid #dce3f7',
        borderRadius: 999,
        padding: '7px 14px',
        fontSize: 13,
        fontWeight: 600,
        color: '#3d4654',
        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
      }}
    >
      {/* Google's own gadget renders here, invisible but clickable, filling the pill. */}
      <div id="google_translate_element" style={{ position: 'absolute', inset: 0 }} />
      <Languages size={14} strokeWidth={2} style={{ pointerEvents: 'none' }} />
      <span style={{ pointerEvents: 'none' }}>Translate</span>
    </div>
  );
}
