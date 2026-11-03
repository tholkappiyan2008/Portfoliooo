import type { Metadata } from 'next';
import './globals.css';
import { metadata as rootMetadata, viewport as rootViewport } from './metadata';

export const metadata = rootMetadata;
export const viewport = rootViewport;
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GrainOverlay } from '@/components/layout/GrainOverlay';
import { ScrollProgress } from '@/components/layout/ScrollProgress';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <GrainOverlay />
        <ScrollProgress />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
