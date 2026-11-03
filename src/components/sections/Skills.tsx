'use client';

import { motion } from 'motion/react';
import { skillGroups } from '@/data/skills';
import { Terminal, Layout, Cpu, Database, Sparkles, Wrench } from 'lucide-react';

const icons: Record<string, any> = {
  'Programming': Terminal,
  'Frontend': Layout,
  'Backend & APIs': Cpu,
  'Databases': Database,
  'AI & Automation': Sparkles,
  'Developer Tools': Wrench,
};

export function Skills() {
  return (
    <section
      id="skills"
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
          top: 0,
          left: 0,
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
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 'clamp(3rem, 6vw, 4.5rem)' }}
        >
          <p className="text-label" style={{ marginBottom: '0.75rem' }}>
            04 — Engineering Capabilities
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--color-primary)',
              marginBottom: '1rem',
              maxWidth: '24ch',
            }}
          >
            Tools I use to turn ideas into reality.
          </h2>
          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              color: 'var(--color-secondary)',
              maxWidth: '36ch',
              lineHeight: 1.6,
            }}
          >
            No percentage bars. Just the production tools and frameworks I actually use.
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

        {/* Skill grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gIndex) => {
            const GroupIcon = icons[group.name] ?? Terminal;

            return (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8% 0px' }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: gIndex * 0.06,
                }}
                className="bg-[#1C1D20] border border-[#303136] hover:border-[#DDA875] p-6 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 border border-[#303136] bg-[#17181A] flex items-center justify-center text-[#DDA875] flex-shrink-0">
                      <GroupIcon size={16} strokeWidth={1.5} />
                    </div>

                    <div>
                      <h3 className="font-sans text-[1.05rem] font-medium text-[#F4F0E9] m-0">
                        {group.name}
                      </h3>
                      <p className="font-mono text-[0.65rem] tracking-wider uppercase text-[#888A8E] m-0">
                        {group.skills.length} competencies
                      </p>
                    </div>
                  </div>

                  {/* Skills tags list */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={`${group.name}-${skill}`}
                        className="font-mono text-[0.72rem] text-[#B4B3B0] hover:text-[#F4F0E9] bg-[#141518] border border-[#2B2C32] hover:border-[#DDA875] px-2.5 py-1 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
