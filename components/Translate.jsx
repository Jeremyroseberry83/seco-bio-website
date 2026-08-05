import React, { useEffect } from 'react';

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

  return <div id="google_translate_element" className="translate-widget" />;
}
