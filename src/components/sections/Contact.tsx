'use client';

import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Mail, FolderGit2, Users, Check, Copy, ExternalLink, ArrowUpRight } from 'lucide-react';
import { contact } from '@/data/content';

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    href: contact.github,
    icon: FolderGit2,
    color: '#DDA875',
    label: 'github.com/tholkappiyan2008',
  },
  {
    name: 'LinkedIn',
    href: contact.linkedin,
    icon: Users,
    color: '#B4B3B0',
    label: 'linkedin.com/in/tholkappiyan-s',
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);
  const emailRef = useRef<HTMLSpanElement>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      const range = document.createRange();
      range.selectNodeContents(emailRef.current ?? document.body);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
      document.execCommand('copy');
      sel?.removeAllRanges();
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(6rem, 12vw, 11rem) 2rem',
        background: 'var(--color-surface)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative vertical guide line */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '0',
          top: '0',
          bottom: '0',
          width: '1px',
          background:
            'linear-gradient(to bottom, transparent, var(--color-accent) 15%, var(--color-accent) 85%, transparent)',
          opacity: 0.35,
        }}
      />

      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '850px',
          width: '100%',
          margin: '0 auto',
          padding: '0 clamp(1.5rem, 4vw, 2.5rem)',
          textAlign: 'center',
          boxSizing: 'border-box',
        }}
      >
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}
        >
          <p className="text-label" style={{ marginBottom: '0.75rem' }}>
            07 — Contact
          </p>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 4.8rem)',
              letterSpacing: '-0.035em',
              lineHeight: 1.05,
              color: 'var(--color-primary)',
              marginBottom: '1.5rem',
            }}
          >
            Let&apos;s build something meaningful.
          </h2>
        </motion.div>

        {/* Supporting copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-[clamp(1rem,1.4vw,1.18rem)] font-normal text-[#B4B3B0] max-w-xl mx-auto leading-relaxed mb-10"
        >
          I&apos;m interested in collaborating on thoughtful software, high-impact AI applications,
          and building technology that solves genuine problems.
        </motion.p>

        {/* Primary Email CTA & Interactive Copy Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#DDA875] hover:bg-[#E9B98F] text-[#101113] font-medium text-[0.875rem] tracking-wide transition-all shadow-xl shadow-[#DDA875]/15 hover:-translate-y-0.5"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <span>Write an Email</span>
            <Mail size={16} strokeWidth={2} />
          </a>

          {/* Copyable Email Box */}
          <div
            onClick={handleCopyEmail}
            role="button"
            tabIndex={0}
            aria-label="Click to copy email address"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCopyEmail();
              }
            }}
            className="inline-flex items-center gap-3 px-5 py-3 bg-[#1C1D20] hover:bg-[#24252A] border border-[#303136] hover:border-[#DDA875] cursor-pointer transition-all hover:-translate-y-0.5"
          >
            <span
              ref={emailRef}
              className="font-mono text-[0.85rem] text-[#F4F0E9] select-all"
            >
              {contact.emailDisplay}
            </span>

            <span className="font-mono text-[0.7rem] uppercase tracking-wider text-[#DDA875] flex items-center gap-1">
              {copied ? (
                <>
                  <Check size={12} strokeWidth={2.5} />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy size={12} strokeWidth={1.8} />
                  <span>Copy</span>
                </>
              )}
            </span>
          </div>
        </motion.div>

        {/* Social Links Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#1C1D20] border border-[#303136] hover:border-[#DDA875] text-[#B4B3B0] hover:text-[#F4F0E9] font-mono text-[0.78rem] tracking-wider uppercase transition-all hover:-translate-y-0.5"
            >
              <social.icon size={15} strokeWidth={1.5} className="text-[#DDA875]" />
              <span>{social.name}</span>
              <ArrowUpRight size={13} strokeWidth={2} />
            </a>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="w-16 h-[1px] bg-[#DDA875] mx-auto mt-12"
        />
      </div>
    </section>
  );
}
