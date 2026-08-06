import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

/**
 * VideoModal — plays the full film with sound.
 * Autoplay-with-audio is only permitted because the user clicked to get here.
 */
export default function VideoModal({ onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    // Escape closes, and the page behind shouldn't scroll while this is open.
    const onKey = (e) => e.key === 'Escape' && onClose();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);

    // Muted background videos elsewhere on the page shouldn't compete.
    const others = Array.from(document.querySelectorAll('video')).filter(
      (v) => v !== videoRef.current
    );
    others.forEach((v) => v.pause());

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
      others.forEach((v) => v.play().catch(() => {}));
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8"
      style={{ backgroundColor: 'rgba(10,14,20,0.92)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Seco Bio film"
    >
      <button
        onClick={onClose}
        aria-label="Close video"
        className="absolute top-5 right-5 sm:top-7 sm:right-7 p-2 rounded-full transition-opacity hover:opacity-70"
        style={{ color: '#fff', backgroundColor: 'rgba(255,255,255,0.12)' }}
      >
        <X size={22} />
      </button>

      <div
        className="w-full"
        style={{ maxWidth: 1180 }}
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          className="w-full rounded-xl"
          style={{ aspectRatio: '16 / 9', backgroundColor: '#000', display: 'block' }}
          controls
          autoPlay
          playsInline
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/secobio2.mp4" type="video/mp4" />
          <source src="/videos/secobio.mov" type="video/quicktime" />
        </video>
      </div>
    </div>
  );
}
