'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const [showTop, setShowTop] = useState(false);
  const backToTopRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border)',
        padding: '5rem 2rem 3.5rem',
        background: 'var(--color-surface)',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          width: '100%',
          margin: '0 auto',
          padding: '0 clamp(1.5rem, 4vw, 2.5rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          boxSizing: 'border-box',
        }}
      >
        {/* Subtle Back-to-Top Button */}
        <button
          ref={backToTopRef}
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className={`flex items-center gap-2 text-[0.72rem] font-mono tracking-wider uppercase text-[#B4B3B0] hover:text-[#DDA875] bg-[#1C1D20] border border-[#303136] hover:border-[#DDA875] px-4 py-2 transition-all duration-300 mb-8 cursor-pointer ${
            showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
        >
          <span>Back to Top</span>
          <ArrowUp size={13} strokeWidth={2} />
        </button>

        {/* Branding & Attribution */}
        <div className="flex flex-col items-center gap-3">
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1,
              color: 'var(--color-primary)',
            }}
          >
            THOLS.
          </div>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.92rem',
              color: 'var(--color-secondary)',
              letterSpacing: '0.01em',
              fontWeight: 400,
            }}
          >
            Designed &amp; Built by Tholkappiyan S.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--color-muted)',
              letterSpacing: '0.04em',
              marginTop: '0.5rem',
            }}
          >
            &copy; 2026 Tholkappiyan S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
