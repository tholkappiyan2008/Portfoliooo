'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ExternalLink,
  FolderGit2,
  FileText,
  Volume2,
  CheckCircle2,
  Bot,
  Activity,
  Layers,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  Radio,
  Clock,
  Server,
  Cpu,
} from 'lucide-react';
import { projects, Project } from '@/data/projects';

function ProjectNumber({ number }: { number: number }) {
  return (
    <span
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.72rem',
        letterSpacing: '0.12em',
        color: 'var(--color-accent)',
        border: '1px solid var(--color-border)',
        padding: '0.25rem 0.6rem',
        display: 'inline-block',
        background: 'rgba(221, 168, 117, 0.05)',
      }}
    >
      0{number}
    </span>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        letterSpacing: '0.02em',
        color: 'var(--color-secondary)',
        background: 'var(--color-card)',
        border: '1px solid var(--color-border)',
        padding: '0.28rem 0.65rem',
        display: 'inline-block',
        transition: 'all 0.2s ease',
      }}
      className="hover:border-accent hover:text-primary"
    >
      {label}
    </span>
  );
}

// Sophisticated CSS preview representing ClearDoc's accessibility interface
function ClearDocPreview() {
  return (
    <div className="w-full h-full bg-[#141518] p-3 sm:p-5 flex flex-col justify-between font-sans text-left select-none overflow-hidden relative">
      {/* Background radial highlight */}
      <div
        className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
        }}
      />

      {/* App Window Top Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-[#28292E]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#3A3B40]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#3A3B40]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#3A3B40]" />
          </div>
          <div className="hidden xs:flex items-center gap-1.5 ml-2 text-[0.68rem] text-[#B4B3B0] font-mono">
            <FileText size={12} className="text-[#DDA875]" />
            <span>Document_Explanation_v2.pdf</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[0.62rem] font-mono bg-[#1E2620] text-[#78D38E] border border-[#2B4731]">
            <CheckCircle2 size={10} />
            <span>AI Grounded</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[0.62rem] font-mono bg-[#201D1A] text-[#DDA875] border border-[#423425]">
            <Sparkles size={10} />
            <span>Groq LLM</span>
          </span>
        </div>
      </div>

      {/* Main UI simulation */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 my-3">
        {/* Document Explanation Panel */}
        <div className="sm:col-span-7 bg-[#1A1B1F] border border-[#2D2E34] p-3.5 rounded flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[0.65rem] font-mono tracking-wider uppercase text-[#888A8E]">
              Plain English Summary
            </span>
            <div className="flex items-center gap-1 text-[0.65rem] text-[#DDA875] font-mono">
              <Volume2 size={12} />
              <span>Read-Aloud</span>
            </div>
          </div>

          <p className="text-[0.78rem] text-[#F4F0E9] leading-relaxed font-normal">
            Your laboratory diagnostics from Oct 12 totaled <strong className="text-[#DDA875] font-medium">$552.50</strong>.
            Insurance paid $410.00. Your remaining co-pay is <strong className="text-[#F4F0E9] font-medium">$142.50</strong> due by Nov 15.
          </p>

          {/* Key Extracted Info Chips */}
          <div className="grid grid-cols-3 gap-1.5 pt-1">
            <div className="bg-[#121316] p-1.5 rounded border border-[#27282D]">
              <div className="text-[0.58rem] font-mono text-[#888A8E] uppercase">Amount Due</div>
              <div className="text-[0.75rem] font-medium text-[#F4F0E9]">$142.50</div>
            </div>
            <div className="bg-[#121316] p-1.5 rounded border border-[#27282D]">
              <div className="text-[0.58rem] font-mono text-[#888A8E] uppercase">Due Date</div>
              <div className="text-[0.75rem] font-medium text-[#DDA875]">Nov 15, 2026</div>
            </div>
            <div className="bg-[#121316] p-1.5 rounded border border-[#27282D]">
              <div className="text-[0.58rem] font-mono text-[#888A8E] uppercase">Confidence</div>
              <div className="text-[0.75rem] font-medium text-[#78D38E]">99.4%</div>
            </div>
          </div>
        </div>

        {/* Grounded Follow-up Chat Simulation */}
        <div className="hidden sm:flex sm:col-span-5 bg-[#17181C] border border-[#2D2E34] p-3 rounded flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-[0.65rem] font-mono uppercase text-[#888A8E] pb-2 border-b border-[#26272D]">
              <Bot size={12} className="text-[#DDA875]" />
              <span>Grounded Q&A</span>
            </div>

            <div className="mt-2 space-y-2">
              <div className="bg-[#202126] p-2 rounded text-[0.7rem] text-[#B4B3B0]">
                "Is the diagnostic fee eligible for reimbursement?"
              </div>
              <div className="bg-[#121316] p-2 rounded border border-[#2B2C33] text-[0.68rem] text-[#F4F0E9] space-y-1">
                <div>Yes. Under Section 4B of your policy, outpatient diagnostics qualify with code DX-409.</div>
                <div className="text-[0.58rem] font-mono text-[#DDA875]">Source: Page 2, Paragraph 3</div>
              </div>
            </div>
          </div>

          <div className="text-[0.6rem] font-mono text-[#888A8E] pt-2 border-t border-[#26272D] flex items-center justify-between">
            <span>Supabase PostgreSQL Grounded</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#78D38E]" />
          </div>
        </div>
      </div>

      {/* Audio Playback Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-[#17181B] border border-[#2B2C32] rounded">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[#DDA875] text-[#101113] flex items-center justify-center text-[0.65rem] font-bold">
            ▶
          </div>
          <span className="text-[0.68rem] text-[#B4B3B0] font-mono">
            Audio Synthesizer: "Playing Plain English Summary"
          </span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-1 h-3 bg-[#DDA875] animate-pulse" />
          <div className="w-1 h-4 bg-[#DDA875]" />
          <div className="w-1 h-2 bg-[#DDA875] animate-pulse" />
          <div className="w-1 h-5 bg-[#DDA875]" />
          <div className="w-1 h-3 bg-[#888A8E]" />
          <div className="w-1 h-2 bg-[#888A8E]" />
        </div>
      </div>
    </div>
  );
}

// Sophisticated CSS preview representing AI Business OS
function AIBusinessOSPreview() {
  return (
    <div className="w-full h-full bg-[#141518] p-3 sm:p-5 flex flex-col justify-between font-sans text-left select-none overflow-hidden relative">
      <div
        className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, #78D38E 0%, transparent 70%)',
        }}
      />

      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#28292E]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#3A3B40]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#3A3B40]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#3A3B40]" />
          </div>
          <div className="flex items-center gap-1.5 ml-2 text-[0.68rem] text-[#B4B3B0] font-mono">
            <Layers size={12} className="text-[#DDA875]" />
            <span>AI Business OS — Executive Center</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[0.62rem] font-mono bg-[#1E2620] text-[#78D38E] border border-[#2B4731]">
            <Activity size={10} />
            <span>6/6 AI Agents Live</span>
          </span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-2.5 my-3">
        <div className="bg-[#1A1B1F] border border-[#2D2E34] p-3 rounded">
          <div className="flex items-center justify-between text-[0.62rem] font-mono text-[#888A8E]">
            <span>MRR VELOCITY</span>
            <TrendingUp size={12} className="text-[#78D38E]" />
          </div>
          <div className="text-[1.1rem] font-medium text-[#F4F0E9] mt-1">$48,250</div>
          <div className="text-[0.62rem] text-[#78D38E] font-mono mt-0.5">+24.8% vs last mo</div>
        </div>

        <div className="bg-[#1A1B1F] border border-[#2D2E34] p-3 rounded">
          <div className="flex items-center justify-between text-[0.62rem] font-mono text-[#888A8E]">
            <span>PIPELINE (CRM)</span>
            <Bot size={12} className="text-[#DDA875]" />
          </div>
          <div className="text-[1.1rem] font-medium text-[#F4F0E9] mt-1">$420,000</div>
          <div className="text-[0.62rem] text-[#B4B3B0] font-mono mt-0.5">38 Deals Active</div>
        </div>

        <div className="bg-[#1A1B1F] border border-[#2D2E34] p-3 rounded">
          <div className="flex items-center justify-between text-[0.62rem] font-mono text-[#888A8E]">
            <span>AUTOMATIONS</span>
            <Cpu size={12} className="text-[#DDA875]" />
          </div>
          <div className="text-[1.1rem] font-medium text-[#F4F0E9] mt-1">1,420</div>
          <div className="text-[0.62rem] text-[#DDA875] font-mono mt-0.5">n8n Workflows</div>
        </div>
      </div>

      {/* Orchestration Log Feed */}
      <div className="bg-[#17181C] border border-[#2B2C33] p-3 rounded space-y-2">
        <div className="flex items-center justify-between text-[0.62rem] font-mono uppercase text-[#888A8E] pb-1 border-b border-[#24252A]">
          <span>Multi-Agent Stream (n8n + Supabase)</span>
          <span className="text-[#DDA875]">Autonomous Mode</span>
        </div>
        <div className="space-y-1.5 font-mono text-[0.68rem]">
          <div className="flex items-center justify-between text-[#B4B3B0]">
            <span className="text-[#DDA875]">Agent:Outreach</span>
            <span className="text-[#F4F0E9] truncate max-w-[220px]">Dispatched 18 personalized proposals</span>
            <span className="text-[#888A8E]">Just now</span>
          </div>
          <div className="flex items-center justify-between text-[#B4B3B0]">
            <span className="text-[#78D38E]">Agent:Ledger</span>
            <span className="text-[#F4F0E9] truncate max-w-[220px]">Auto-reconciled invoices via Stripe webhook</span>
            <span className="text-[#888A8E]">2m ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sophisticated CSS preview representing NewsTrack
function NewsTrackPreview() {
  return (
    <div className="w-full h-full bg-[#141518] p-3 sm:p-5 flex flex-col justify-between font-sans text-left select-none overflow-hidden relative">
      <div
        className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
        }}
      />

      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#28292E]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#3A3B40]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#3A3B40]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#3A3B40]" />
          </div>
          <div className="flex items-center gap-1.5 ml-2 text-[0.68rem] text-[#B4B3B0] font-mono">
            <Radio size={12} className="text-[#DDA875]" />
            <span>NewsTrack — Distribution Central Dispatch</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[0.62rem] font-mono bg-[#1E2620] text-[#78D38E] border border-[#2B4731]">
            <Server size={10} />
            <span>WebSockets Active (8ms)</span>
          </span>
        </div>
      </div>

      {/* Route Status Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-3">
        <div className="bg-[#1A1B1F] border border-[#2D2E34] p-3 rounded">
          <div className="text-[0.62rem] font-mono text-[#888A8E]">ROUTE 01 — METRO CORE</div>
          <div className="text-[1.1rem] font-medium text-[#78D38E] mt-1">98.5%</div>
          <div className="text-[0.62rem] text-[#B4B3B0] font-mono mt-0.5">4,925 / 5,000 delivered</div>
        </div>

        <div className="bg-[#1A1B1F] border border-[#2D2E34] p-3 rounded">
          <div className="text-[0.62rem] font-mono text-[#888A8E]">ROUTE 02 — NORTH HUB</div>
          <div className="text-[1.1rem] font-medium text-[#DDA875] mt-1">IN TRANSIT</div>
          <div className="text-[0.62rem] text-[#B4B3B0] font-mono mt-0.5">Fleet #14 • GPS synced</div>
        </div>

        <div className="bg-[#1A1B1F] border border-[#2D2E34] p-3 rounded">
          <div className="text-[0.62rem] font-mono text-[#888A8E]">PRODUCTION RUN</div>
          <div className="text-[1.1rem] font-medium text-[#F4F0E9] mt-1">45,000</div>
          <div className="text-[0.62rem] text-[#78D38E] font-mono mt-0.5">FastAPI batch logged</div>
        </div>
      </div>

      {/* Live WebSocket Event Stream */}
      <div className="bg-[#17181C] border border-[#2B2C33] p-3 rounded font-mono text-[0.65rem] space-y-1.5">
        <div className="flex items-center justify-between text-[#888A8E] pb-1 border-b border-[#24252A] uppercase">
          <span>Real-Time Distribution Log</span>
          <span className="flex items-center gap-1 text-[#78D38E]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#78D38E] animate-ping" />
            Live Polling
          </span>
        </div>
        <div className="flex items-center gap-2 text-[#B4B3B0]">
          <span className="text-[#888A8E]">[12:15:02]</span>
          <span className="text-[#DDA875]">DEPOT-02:</span>
          <span>Batch #882 released for morning delivery round</span>
        </div>
        <div className="flex items-center gap-2 text-[#B4B3B0]">
          <span className="text-[#888A8E]">[12:15:19]</span>
          <span className="text-[#78D38E]">WS-BROADCAST:</span>
          <span>Delivery confirmation recorded for South Station kiosk</span>
        </div>
      </div>
    </div>
  );
}

// Visual Preview Container that checks for real images and falls back to rich CSS representations
function ProjectVisualPreview({ project }: { project: Project }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="relative w-full overflow-hidden border border-[#303136] bg-[#1C1D20] group transition-all duration-500 hover:border-[#DDA875]"
      style={{
        aspectRatio: '16 / 10',
      }}
    >
      {/* If a valid project image exists and loads */}
      {project.image && !imageError ? (
        <>
          <img
            src={project.image}
            alt={`${project.name} interface dashboard screenshot`}
            loading="lazy"
            decoding="async"
            className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0">
              {project.id === 1 && <ClearDocPreview />}
              {project.id === 2 && <AIBusinessOSPreview />}
              {project.id === 3 && <NewsTrackPreview />}
            </div>
          )}
        </>
      ) : (
        /* Sophisticated CSS preview representing the real interface */
        <div className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.01]">
          {project.id === 1 && <ClearDocPreview />}
          {project.id === 2 && <AIBusinessOSPreview />}
          {project.id === 3 && <NewsTrackPreview />}
        </div>
      )}

      {/* Subtle border shine & interactive badge on hover */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          boxShadow: 'inset 0 0 0 1px rgba(221, 168, 117, 0.25)',
        }}
      />
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.08 + index * 0.1,
      }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
    >
      {/* Visual Preview Side (7 cols on large desktop for prominence) */}
      <div className="lg:col-span-7 w-full">
        <ProjectVisualPreview project={project} />
      </div>

      {/* Project Details Side (5 cols on large desktop) */}
      <div className="lg:col-span-5 flex flex-col gap-4 text-left">
        <div className="flex items-center gap-3">
          <ProjectNumber number={project.id} />
          <span className="text-[0.68rem] font-mono tracking-widest uppercase text-[#B4B3B0]">
            {project.category}
          </span>
        </div>

        <div>
          <h3 className="text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium tracking-tight text-[#F4F0E9] leading-tight">
            {project.name}
          </h3>
          <p className="text-[clamp(0.95rem,1.2vw,1.05rem)] text-[#DDA875] font-normal leading-relaxed mt-1">
            {project.headline}
          </p>
        </div>

        {/* Clear, highly readable project description */}
        <p className="text-[0.92rem] text-[#B4B3B0] leading-relaxed font-normal">
          {project.description}
        </p>

        {/* Key Features Bullet List with high contrast */}
        <div className="space-y-1.5 py-1">
          {project.features.slice(0, 4).map((feature) => (
            <div key={feature} className="flex items-start gap-2.5 text-[0.84rem] text-[#B4B3B0]">
              <span className="w-2.5 h-[1.5px] bg-[#DDA875] mt-2 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* ALL Technology Tags — Responsive Flex Wrap, no hidden '+6' */}
        <div className="pt-2">
          <div className="text-[0.65rem] font-mono tracking-wider uppercase text-[#888A8E] mb-2">
            Technologies &amp; Architecture
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <Tag key={tech} label={tech} />
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[0.82rem] font-mono tracking-wider text-[#DDA875] hover:text-[#E9B98F] transition-colors py-1.5 px-3 border border-[#303136] hover:border-[#DDA875] bg-[#1C1D20]"
            >
              <FolderGit2 size={15} strokeWidth={1.5} />
              <span>View Source</span>
              <ArrowUpRight size={13} strokeWidth={2} />
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[0.82rem] font-mono tracking-wider text-[#F4F0E9] hover:text-[#DDA875] transition-colors py-1.5 px-3 border border-[#303136] hover:border-[#DDA875] bg-[#1C1D20]"
            >
              <span>Live Demonstration</span>
              <ExternalLink size={13} strokeWidth={2} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Work() {
  return (
    <section
      id="work"
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) 2rem',
        background: 'var(--color-surface)',
        position: 'relative',
      }}
    >
      {/* Subtle background grid */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-primary) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
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
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 'clamp(3rem, 6vw, 4.5rem)' }}
        >
          <p className="text-label" style={{ marginBottom: '0.75rem' }}>
            03 — Selected Work
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--color-primary)',
              marginBottom: '1rem',
            }}
          >
            Selected Work.
          </h2>
          <p
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              color: 'var(--color-secondary)',
              maxWidth: '38ch',
              lineHeight: 1.6,
            }}
          >
            A collection of production-grade systems, AI workflows, and functional platforms.
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

        {/* Projects List */}
        <div className="flex flex-col gap-16 lg:gap-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={index > 0 ? 'pt-16 lg:pt-24 border-t border-[#303136]' : ''}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
