import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Ayush Singh | Backend Engineer & Systems Architect',
  description:
    'Backend engineer focused on scalable systems, distributed architecture, and production-grade engineering. Top 0.1% technical talent.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://ayushsingh.dev" />
      </head>

      <body className="dark bg-background text-foreground overflow-x-hidden">
        <div className="noise-texture" />

        <SmoothScroll>
          <Navigation />
          <ScrollProgress />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}