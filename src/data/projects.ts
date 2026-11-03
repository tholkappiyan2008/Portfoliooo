export interface Project {
  id: number;
  name: string;
  category: string;
  headline: string;
  description: string;
  features: string[];
  technologies: string[];
  github?: string;
  live?: string;
  image?: string;
  details: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'ClearDoc',
    category: 'AI / Accessibility / Full Stack',
    headline: 'Making complex information easier to understand.',
    description:
      'ClearDoc is an AI-powered document accessibility platform that transforms complex documents into clear, understandable explanations.',
    features: [
      'AI-powered document explanation',
      'Key information extraction',
      'Document-grounded follow-up questions',
      'Read-aloud support',
      'Persistent document history',
      'Secure user authentication',
      'Multilingual functionality where implemented',
    ],
    technologies: [
      'React',
      'Vite',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'Supabase',
      'PostgreSQL',
      'Groq API',
      'JWT',
      'bcrypt',
      'Render',
      'Vercel',
    ],
    github: 'https://github.com/tholkappiyan2008/LucidDocs_S',
    image: '/images/projects/cleardoc.png',
    details:
      'ClearDoc helps users understand complex documents like medical bills, bank statements, and legal notices by explaining them in plain language. The platform integrates Groq LLM APIs to generate concise explanations and identify key details including amounts, due dates, reference numbers, and suggested actions. It implements document-grounded question answering, read-aloud support, and persistent document history. The backend uses Express REST APIs with custom JWT authentication and bcrypt password hashing, with Supabase PostgreSQL for user-specific document storage. The frontend is deployed on Vercel and the backend on Render.',
  },
  {
    id: 2,
    name: 'AI Business OS',
    category: 'AI Agents / SaaS / Business Automation',
    headline: 'An intelligent operating system for modern businesses.',
    description:
      'A centralized business management platform bringing together CRM, finance, inventory, analytics, and AI-driven workflows.',
    features: [
      'CRM management',
      'Financial ledgering',
      'Inventory management',
      'Business analytics',
      'Sales and marketing AI workflows',
      'Financial forecasting',
      'Executive decision support',
    ],
    technologies: [
      'Next.js',
      'React.js',
      'Supabase',
      'PostgreSQL',
      'AI/LLM APIs',
      'n8n',
    ],
    image: '/images/projects/ai-business-os.png',
    details:
      'AI Business OS is a centralized platform integrating CRM, financial ledgering, inventory control, and business analytics. It implements AI-agent workflows for sales, marketing outreach, financial forecasting, and executive decision support, bringing together frontend UI, database services, and LLM capabilities to automate operations and support data-driven decisions.',
  },
  {
    id: 3,
    name: 'NewsTrack',
    category: 'Full Stack / Real-Time Systems',
    headline: 'Bringing clarity to newspaper distribution.',
    description:
      'An end-to-end system for tracking newspaper production, inventory dispatch, distribution, and delivery operations.',
    features: [
      'Production tracking',
      'Inventory dispatch',
      'Delivery tracking',
      'Operational dashboards',
      'REST APIs',
      'Real-time communication',
    ],
    technologies: [
      'FastAPI',
      'React',
      'JavaScript',
      'PostgreSQL',
      'WebSockets',
      'REST APIs',
    ],
    image: '/images/projects/newstrack.png',
    details:
      'NewsTrack is an end-to-end platform for newspaper production, inventory dispatch, and end-route delivery tracking. It provides REST APIs and centralized dashboards for distribution workflows, inventory tracking, and operational analytics, with real-time communication via WebSockets.',
  },
];
