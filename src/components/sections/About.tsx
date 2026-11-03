'use client';

import { motion } from 'motion/react';
import { BookOpen, Award, Target } from 'lucide-react';
import { education } from '@/data/content';

const statItems = [
  {
    icon: Award,
    value: education.semesterScore,
    label: 'Semester Score',
    description: 'Outstanding academic standing',
  },
  {
    icon: BookOpen,
    value: education.expectedGraduation,
    label: 'Expected Graduation',
    description: 'B.Tech Computer Science & Data Science',
  },
  {
    icon: Target,
    value: 'AI + Full Stack',
    label: 'Focus Areas',
    description: 'Autonomous systems & product engineering',
  },
];

export function About() {
  return (
    <section
      id="about"
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) 2rem',
        background: 'var(--color-background)',
        position: 'relative',
      }}
    >
      {/* Decorative vertical line */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '1px',
          height: '100%',
          background:
            'linear-gradient(to bottom, transparent, var(--color-border) 20%, var(--color-border) 80%, transparent)',
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
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-label" style={{ marginBottom: '0.75rem' }}>
            02 — About
          </p>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--color-primary)',
              marginBottom: '2.5rem',
              maxWidth: '22ch',
            }}
          >
            Curiosity drives everything I build.
          </h2>
        </motion.div>

        {/* Two-column content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left column — Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="md:col-span-7 space-y-5"
          >
            <p className="text-[clamp(1.05rem,1.4vw,1.15rem)] font-normal text-[#F4F0E9] leading-relaxed">
              I&apos;m Tholkappiyan, a B.Tech Computer Science and Engineering (Data
              Science) student at Takshashila University.
            </p>
            <p className="text-[clamp(1rem,1.3vw,1.08rem)] font-normal text-[#B4B3B0] leading-relaxed">
              I&apos;m passionate about turning ideas into useful software products,
              especially those powered by artificial intelligence, autonomous agent workflows,
              and intelligent document analysis.
            </p>
            <p className="text-[clamp(1rem,1.3vw,1.08rem)] font-normal text-[#B4B3B0] leading-relaxed">
              My work spans end-to-end full-stack applications, real-time distributed systems,
              large language model integrations, and thoughtfully engineered digital experiences.
            </p>
            <p className="text-[clamp(1rem,1.3vw,1.08rem)] font-normal text-[#B4B3B0] leading-relaxed">
              I believe in learning by shipping real software, testing hypotheses against user needs,
              and continually refining performance and accessibility.
            </p>

            {/* Divider */}
            <div
              style={{
                width: '40px',
                height: '1px',
                background: 'var(--color-accent)',
                marginTop: '2rem',
              }}
            />
          </motion.div>

          {/* Right column — Academic & Focus Stat Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="md:col-span-5 flex flex-col gap-4"
          >
            {statItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.3 + index * 0.1,
                }}
                className="bg-[#1C1D20] border border-[#303136] hover:border-[#DDA875] p-5 transition-colors flex items-start gap-4"
              >
                {/* Icon */}
                <div className="w-10 h-10 border border-[#303136] bg-[#17181A] flex items-center justify-center flex-shrink-0 text-[#DDA875]">
                  <item.icon size={18} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.4rem, 2.2vw, 1.8rem)',
                      letterSpacing: '-0.02em',
                      color: 'var(--color-primary)',
                      lineHeight: 1.2,
                      fontWeight: 500,
                    }}
                  >
                    {item.value}
                  </div>
                  <div className="font-mono text-[0.68rem] tracking-wider uppercase text-[#B4B3B0] mt-1">
                    {item.label}
                  </div>
                  <div className="font-mono text-[0.72rem] text-[#888A8E] mt-0.5">
                    {item.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
