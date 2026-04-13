import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Food Cafe | Taste That Stays With You',
  description: 'Premium dining experience with flame-kissed flavors and artisanal spirits.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body suppressHydrationWarning className="font-sans bg-surface text-on-surface">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
