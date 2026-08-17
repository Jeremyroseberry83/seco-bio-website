import React, { useEffect } from 'react';
import { Languages } from 'lucide-react';

// Google Translate widget.
// Covers the markets Joe flagged: Brazil (pt), Germany (de), Switzerland (de/fr/it),
// Japan (ja), SEA (id/th/vi/ms), MENA (ar). Full language list is available in the dropdown.
const INCLUDED_LANGUAGES = 'ar,de,en,es,fr,id,it,ja,ko,ms,pt,th,vi,zh-CN';

// This component renders twice (desktop nav + mobile menu). Google's script
// only ever populates the FIRST DOM element with a given id — so if both
// instances shared one hardcoded id, the second (whichever is actually
// visible on mobile) would sit there empty and unclickable while the other
// quietly worked. Each instance gets its own id, and the script-load is a
// shared promise so both instances can independently initialize once it's
// ready, regardless of mount order.
let scriptLoadPromise = null;
function loadGoogleTranslateScript() {
  if (scriptLoadPromise) return scriptLoadPromise;
  scriptLoadPromise = new Promise((resolve) => {
    window.googleTranslateElementInit = resolve;
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
  });
  return scriptLoadPromise;
}

export default function Translate({ instanceId = 'default' }) {
  const elementId = `google_translate_element_${instanceId}`;

  useEffect(() => {
    let cancelled = false;
    loadGoogleTranslateScript().then(() => {
      if (cancelled || !window.google || !window.google.translate) return;
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: INCLUDED_LANGUAGES,
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        },
        elementId
      );
    });
    return () => { cancelled = true; };
  }, [elementId]);

  return (
    // Icon-only, deliberately secondary to "Get in touch" — a language
    // switcher is a utility, not the primary action. The chrome lives on our
    // own wrapper, not on Google's .goog-te-gadget-simple, which only exists
    // once its script has loaded.
    <div
      className="translate-widget"
      aria-label="Translate this page"
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        flexShrink: 0,
        background: '#f1f3fb',
        border: '1px solid #dce3f7',
        borderRadius: '50%',
        color: '#3d4654'
      }}
    >
      {/* Google's own gadget renders here, invisible but clickable, filling the button. */}
      <div id={elementId} style={{ position: 'absolute', inset: 0 }} />
      <Languages size={16} strokeWidth={2} style={{ pointerEvents: 'none' }} />
    </div>
  );
}
