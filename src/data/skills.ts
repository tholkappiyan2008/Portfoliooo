export interface SkillGroup {
  name: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: 'Programming',
    skills: ['Python', 'C++', 'JavaScript', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    name: 'Frontend',
    skills: ['React.js', 'Next.js', 'Vite', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'Backend & APIs',
    skills: ['Node.js', 'Express', 'FastAPI', 'REST APIs'],
  },
  {
    name: 'Databases',
    skills: ['PostgreSQL', 'Supabase'],
  },
  {
    name: 'AI & Automation',
    skills: ['LLMs', 'Groq API', 'AI Agents', 'Agentic Workflows', 'n8n'],
  },
  {
    name: 'Developer Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Render', 'Vercel'],
  },
];
