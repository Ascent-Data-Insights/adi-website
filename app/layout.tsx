import type { Metadata } from 'next';
import { Manrope, Kodchasan } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  preload: true,
});

const kodchasan = Kodchasan({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-kodchasan',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Ascent Data Insights - Cincinnati Data & AI Consultancy',
  description: 'We help startups and mid-size companies turn messy data into insight, navigate AI with clarity, and ship products that matter.',
  icons: {
    icon: '/favicon.svg',
  },
  other: {
    'format-detection': 'telephone=no',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${kodchasan.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
