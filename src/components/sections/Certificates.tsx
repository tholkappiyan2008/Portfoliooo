'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ExternalLink, Calendar, Award } from 'lucide-react';
import { certificates, Certificate } from '@/data/certificates';

function CertificateCard({
  cert,
  index,
  onOpen,
}: {
  cert: Certificate;
  index: number;
  onOpen: (cert: Certificate) => void;
}) {
  const [imgSrc, setImgSrc] = useState(cert.imageUrl);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleError = () => {
    // If local path fails, fall back to remote URL
    if (imgSrc !== cert.fallbackUrl) {
      setImgSrc(cert.fallbackUrl);
    } else {
      setError(true);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-6% 0px' }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.07,
      }}
      className="group flex flex-col justify-between bg-[#1C1D20] border border-[#303136] hover:border-[#DDA875] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 overflow-hidden"
    >
      {/* Certificate Image Viewport (Contain mode with subtle framing) */}
      <div
        className="relative w-full bg-[#141518] p-3 flex items-center justify-center cursor-pointer overflow-hidden border-b border-[#303136]"
        style={{ aspectRatio: '1.414 / 1' }}
        onClick={() => onOpen(cert)}
      >
        {/* Shimmer skeleton while loading */}
        {!loaded && !error && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#17181A] via-[#24252A] to-[#17181A] animate-pulse" />
        )}

        {error ? (
          <div className="flex flex-col items-center justify-center text-center p-4 text-[#888A8E]">
            <Award size={28} className="text-[#DDA875] mb-2 opacity-60" />
            <span className="text-[0.7rem] font-mono uppercase tracking-wider text-[#F4F0E9]">
              {cert.title}
            </span>
            <span className="text-[0.62rem] text-[#888A8E] mt-1">
              Image loading fallback
            </span>
          </div>
        ) : (
          <img
            src={imgSrc}
            alt={`${cert.title} — Certificate awarded to Tholkappiyan S`}
            loading="lazy"
            decoding="async"
            className={`w-full h-full object-contain transition-all duration-500 group-hover:scale-[1.02] ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setLoaded(true)}
            onError={handleError}
          />
        )}

        {/* Number Badge */}
        <div className="absolute top-2.5 left-2.5 z-10 font-mono text-[0.65rem] tracking-wider text-[#DDA875] bg-[#101113]/90 border border-[#303136] px-2 py-0.5">
          {cert.number}
        </div>

        {/* Hover quick preview button overlay */}
        <div className="absolute inset-0 bg-[#101113]/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <span className="inline-flex items-center gap-1.5 text-[0.72rem] font-mono tracking-wider uppercase text-[#F4F0E9] bg-[#1C1D20] border border-[#DDA875] px-3.5 py-1.5 shadow-lg">
            <ZoomIn size={13} className="text-[#DDA875]" />
            <span>Expand Certificate</span>
          </span>
        </div>
      </div>

      {/* Card Info & Details */}
      <div className="p-4 flex flex-col justify-between flex-1 gap-3">
        <div>
          <div className="flex items-center justify-between gap-2 text-[0.65rem] font-mono uppercase text-[#888A8E] tracking-wider">
            <span>{cert.category}</span>
            <span className="inline-flex items-center gap-1 text-[#B4B3B0]">
              <Calendar size={11} className="text-[#DDA875]" />
              <span>{cert.issueDate}</span>
            </span>
          </div>

          <h3 className="text-[0.98rem] font-medium text-[#F4F0E9] mt-1.5 leading-snug group-hover:text-[#DDA875] transition-colors">
            {cert.title}
          </h3>

          <p className="text-[0.75rem] text-[#888A8E] mt-1 font-mono">
            {cert.issuer}
          </p>
        </div>

        {/* View Action */}
        <div className="pt-2 border-t border-[#2B2C32] flex items-center justify-between">
          <button
            type="button"
            onClick={() => onOpen(cert)}
            className="inline-flex items-center gap-1.5 text-[0.72rem] font-mono tracking-wider uppercase text-[#DDA875] hover:text-[#E9B98F] transition-colors cursor-pointer"
          >
            <span>View Certificate</span>
            <ExternalLink size={11} />
          </button>

          <span className="text-[0.62rem] font-mono text-[#888A8E] uppercase">
            Verified Document
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function CertificateLightbox({
  cert,
  onClose,
}: {
  cert: Certificate;
  onClose: () => void;
}) {
  const [imgSrc, setImgSrc] = useState(cert.imageUrl);
  const [loaded, setLoaded] = useState(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      role="dialog"
      aria-modal="true"
      aria-label={`${cert.title} full-size view`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#101113]/95 backdrop-blur-md"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close certificate lightbox"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 bg-[#1C1D20] border border-[#303136] hover:border-[#DDA875] text-[#B4B3B0] hover:text-[#F4F0E9] p-2.5 transition-colors cursor-pointer"
      >
        <X size={20} strokeWidth={1.5} />
      </button>

      {/* Lightbox content card */}
      <div className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center bg-[#17181A] border border-[#303136] p-4 sm:p-6 shadow-2xl overflow-y-auto">
        {/* Certificate Display (object-contain, preserving full fidelity) */}
        <div className="w-full flex justify-center items-center bg-[#101113] border border-[#2B2C32] p-2 sm:p-4 rounded-sm min-h-[300px]">
          {!loaded && (
            <div className="w-full h-80 flex items-center justify-center text-[#888A8E] font-mono text-sm">
              Loading high-resolution certificate...
            </div>
          )}
          <img
            src={imgSrc}
            alt={cert.title}
            className={`max-w-full max-h-[70vh] object-contain transition-opacity duration-300 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setLoaded(true)}
            onError={() => {
              if (imgSrc !== cert.fallbackUrl) {
                setImgSrc(cert.fallbackUrl);
              }
            }}
          />
        </div>

        {/* Certificate Information Bar */}
        <div className="w-full mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-[#303136]">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[0.68rem] text-[#DDA875] border border-[#303136] px-2 py-0.5 bg-[#1C1D20]">
                CERTIFICATE {cert.number}
              </span>
              <span className="text-[0.72rem] font-mono text-[#888A8E]">
                {cert.issueDate}
              </span>
            </div>
            <h4 className="text-[1.1rem] font-medium text-[#F4F0E9] mt-1">
              {cert.title}
            </h4>
            <p className="text-[0.78rem] text-[#B4B3B0] font-mono mt-0.5">
              Issued by {cert.issuer}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={imgSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[0.75rem] font-mono uppercase tracking-wider text-[#F4F0E9] hover:text-[#DDA875] border border-[#303136] hover:border-[#DDA875] bg-[#1C1D20] px-3.5 py-2 transition-colors"
            >
              <span>Open Original</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Certificates() {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  return (
    <section
      id="certificates"
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) 2rem',
        background: 'var(--color-background)',
        position: 'relative',
      }}
    >
      {/* Decorative vertical guide line */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '1px',
          height: '100%',
          background:
            'linear-gradient(to bottom, transparent, var(--color-border) 15%, var(--color-border) 85%, transparent)',
          opacity: 0.35,
        }}
      />

      <div
        style={{
          maxWidth: '1240px',
          width: '100%',
          margin: '0 auto',
          padding: '0 clamp(1.5rem, 4vw, 2.5rem)',
          boxSizing: 'border-box',
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 'clamp(3rem, 6vw, 4.5rem)' }}
        >
          <p className="text-label" style={{ marginBottom: '0.75rem' }}>
            06 — Certificates &amp; Achievements
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--color-primary)',
              marginBottom: '1rem',
              maxWidth: '24ch',
            }}
          >
            Learning beyond the classroom.
          </h2>
          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              color: 'var(--color-secondary)',
              maxWidth: '48ch',
              lineHeight: 1.6,
            }}
          >
            A record of courses, programs, and achievements that have shaped my learning journey.
          </p>

          <div
            style={{
              width: '40px',
              height: '1px',
              background: 'var(--color-accent)',
              marginTop: '1.5rem',
            }}
          />
        </motion.div>

        {/* Responsive Three-Column Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {certificates.map((cert, index) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              index={index}
              onOpen={(selected) => setActiveCert(selected)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeCert && (
          <CertificateLightbox
            cert={activeCert}
            onClose={() => setActiveCert(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
