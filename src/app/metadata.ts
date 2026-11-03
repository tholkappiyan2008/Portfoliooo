import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Tholkappiyan S. | AI Engineer & Full-Stack Developer',
    template: '%s | Tholkappiyan S.',
  },
  description:
    'Explore the projects, technical skills, and engineering journey of Tholkappiyan S., a Computer Science student building AI-powered applications and intelligent software.',
  keywords: [
    'Tholkappiyan S',
    'THOLS',
    'AI Engineer',
    'Full-Stack Developer',
    'Portfolio',
    'Computer Science',
    'Data Science',
    'React',
    'Next.js',
    'AI',
  ],
  authors: [{ name: 'Tholkappiyan S.', url: 'https://github.com/tholkappiyan2008' }],
  creator: 'Tholkappiyan S.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Tholkappiyan S. Portfolio',
    title: 'Tholkappiyan S. | AI Engineer & Full-Stack Developer',
    description:
      'Explore the projects, technical skills, and engineering journey of Tholkappiyan S., a Computer Science student building AI-powered applications and intelligent software.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tholkappiyan S. | AI Engineer & Full-Stack Developer',
    description:
      'Explore the projects, technical skills, and engineering journey of Tholkappiyan S.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#101113',
};
