'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';

const words = ['Intelligent', 'Experiences', 'Through', 'Code.'];

function AnimatedHeading() {
  return (
    <span className="inline-flex flex-wrap gap-x-3 gap-y-1">
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: i * 0.12,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            display: 'inline-block',
            fontSize: 'clamp(2.6rem, 7vw, 6.2rem)',
            fontFamily: 'var(--font-display)',
            letterSpacing: '-0.035em',
            lineHeight: 1.05,
            fontWeight: 500,
            color:
              i === words.length - 1
                ? 'var(--color-accent)'
                : 'var(--color-primary)',
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden bg-[#101113]"
    >
      {/* Background Ambience */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div
          className="absolute top-1/4 -right-20 w-[550px] h-[550px] rounded-full blur-[100px] opacity-25"
          style={{
            background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-[450px] h-[450px] rounded-full blur-[90px] opacity-15"
          style={{
            background: 'radial-gradient(circle, #F4F0E9 0%, transparent 70%)',
          }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #F4F0E9 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Main Container — Exact Alignment Matching Header */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1240px',
          width: '100%',
          margin: '0 auto',
          padding: 'clamp(7.5rem, 14vh, 9.5rem) clamp(1.5rem, 4vw, 2.5rem) clamp(4.5rem, 9vh, 6.5rem)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '100vh',
          boxSizing: 'border-box',
        }}
      >
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4"
        >
          <p className="text-label">
            THOLKAPPIYAN S. / AI &amp; SOFTWARE ENGINEERING
          </p>
        </motion.div>

        {/* Main Display Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="mb-6 max-w-4xl"
        >
          <h1 className="m-0">
            <AnimatedHeading />
          </h1>
        </motion.div>

        {/* Supporting Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-[clamp(1.05rem,1.5vw,1.25rem)] text-[#B4B3B0] max-w-2xl leading-relaxed mb-8 font-normal"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          I&apos;m Thols, a Computer Science and Data Science student exploring the
          intersection of artificial intelligence, autonomous workflows, and modern
          full-stack engineering.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 sm:gap-6"
        >
          <Link
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#DDA875] hover:bg-[#E9B98F] text-[#101113] font-medium text-[0.875rem] tracking-wide transition-all shadow-lg shadow-[#DDA875]/10 hover:-translate-y-0.5"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <span>Explore Selected Work</span>
            <ArrowRight size={16} strokeWidth={2} />
          </Link>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1D20] hover:bg-[#24252A] text-[#F4F0E9] hover:text-[#DDA875] border border-[#303136] hover:border-[#DDA875] text-[0.875rem] font-normal tracking-wide transition-all hover:-translate-y-0.5"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <span>Let&apos;s Connect</span>
          </a>

          {/* Availability Status */}
          <div className="flex items-center gap-3 sm:ml-auto pt-2 sm:pt-0">
            <div className="flex items-center gap-1.5 text-[0.72rem] font-mono text-[#B4B3B0]">
              <MapPin size={13} className="text-[#888A8E]" />
              <span>India</span>
            </div>
            <div className="h-3 w-[1px] bg-[#303136]" />
            <div className="flex items-center gap-1.5 text-[0.72rem] font-mono text-[#DDA875]">
              <span className="w-2 h-2 rounded-full bg-[#DDA875] animate-pulse" />
              <span>Available for Collaboration</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll Cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
          aria-hidden="true"
        >
          <span className="font-mono text-[0.65rem] tracking-widest uppercase text-[#888A8E]">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1px] h-7 bg-gradient-to-b from-[#888A8E] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
