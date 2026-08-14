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
    <div className="translate-widget" style={{ position: 'relative', display: 'inline-block' }}>
      {/* Google's own gadget renders here, full-size and clickable. */}
      <div id="google_translate_element" />
      {/* This label paints on top of it purely for legibility — Google's own
          "Select Language" text was too easy to miss. Clicks pass through
          (pointerEvents: none) to the real widget underneath. */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          pointerEvents: 'none',
          fontSize: 13,
          fontWeight: 600,
          color: '#3d4654',
          fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
        }}
      >
        <Languages size={14} strokeWidth={2} />
        Translate
      </div>
    </div>
  );
}
