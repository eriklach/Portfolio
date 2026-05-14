import type { Metadata } from 'next';
import './globals.css';
import Grain from '@/components/Grain';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Erik Lachapelle — Product Designer & AI Magician',
  description: 'Portfolio of Erik Lachapelle, Product Designer & AI Magician based in Toronto.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <canvas id="grain" />
        <div id="vignette" />
        <div id="scanline" />
        <Grain />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
