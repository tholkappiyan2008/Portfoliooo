'use client';

import { motion } from 'motion/react';
import { Award, MapPin } from 'lucide-react';
import { education } from '@/data/content';

const timelineItems = [
  {
    year: education.expectedGraduation,
    title: 'Takshashila University',
    subtitle: 'B.Tech — Computer Science and Engineering (Data Science)',
    detail: education.location,
    highlight: education.semesterScore,
    highlightLabel: 'Semester Score',
    isCurrent: true,
  },
  {
    year: '2026',
    title: 'Smart India Hackathon 2026',
    subtitle: 'Participant',
    detail: 'National-level innovation challenge',
    highlight: 'SIH 2026',
    highlightLabel: 'Participation',
    isCurrent: false,
  },
  {
    year: 'Present',
    title: 'Independent Software Development',
    subtitle: 'Full-stack & Autonomous AI systems',
    detail: 'Engineering and shipping production software',
    highlight: '3 Systems',
    highlightLabel: 'Shipped',
    isCurrent: false,
  },
];

export function Education() {
  return (
    <section
      id="education"
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) 2rem',
        background: 'var(--color-surface)',
        position: 'relative',
      }}
    >
      {/* Subtle dot pattern */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.02,
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-primary) 1px, transparent 0)`,
          backgroundSize: '36px 36px',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
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
            05 — Education &amp; Journey
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
            Always learning. Always building.
          </h2>
          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              color: 'var(--color-secondary)',
              maxWidth: '34ch',
              lineHeight: 1.6,
            }}
          >
            A record of academic foundation and milestones achieved along the journey.
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

        {/* Timeline items list */}
        <div className="flex flex-col gap-6">
          {timelineItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.08,
              }}
              className="bg-[#1C1D20] border border-[#303136] hover:border-[#DDA875] p-6 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              {/* Year badge column */}
              <div className="md:col-span-3 flex flex-col items-start gap-2">
                <span className="font-mono text-[0.72rem] tracking-wider uppercase text-[#DDA875] border border-[#303136] px-3 py-1 bg-[#141518]">
                  {item.year}
                </span>
                <span className="font-mono text-[0.65rem] text-[#888A8E] uppercase">
                  {item.isCurrent ? 'Current Program' : 'Milestone'}
                </span>
              </div>

              {/* Title & subtitle column */}
              <div className="md:col-span-6 flex flex-col gap-1">
                <h3 className="text-[1.25rem] font-medium text-[#F4F0E9] m-0">
                  {item.title}
                </h3>
                <p className="text-[0.92rem] text-[#B4B3B0] font-normal m-0">
                  {item.subtitle}
                </p>
                <div className="flex items-center gap-1.5 text-[0.72rem] font-mono text-[#888A8E] mt-1">
                  <MapPin size={12} className="text-[#DDA875]" />
                  <span>{item.detail}</span>
                </div>
              </div>

              {/* Stat highlight column */}
              <div className="md:col-span-3 flex md:flex-col items-center md:items-end justify-between md:justify-center gap-1 border-t md:border-t-0 md:border-l border-[#303136] pt-3 md:pt-0 md:pl-6">
                <span className="font-mono text-[0.65rem] tracking-wider uppercase text-[#888A8E] flex items-center gap-1">
                  <Award size={12} className="text-[#DDA875]" />
                  {item.highlightLabel}
                </span>
                <span className="text-[1.15rem] font-medium text-[#DDA875] font-sans">
                  {item.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
