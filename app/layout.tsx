import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Backend Engineer Portfolio | Muhammad Fajrian',
  description: 'Backend Engineer specializing in API development, performance optimization, and scalable systems. Expert in Java, TypeScript, Go, and PHP.',
  keywords: ['Backend Engineer', 'API Development', 'Java', 'TypeScript', 'Go', 'PHP', 'Microservices', 'Performance Optimization'],
  authors: [{ name: 'Muhammad Fajrian Eko Putra' }],
  openGraph: {
    title: 'Backend Engineer Portfolio',
    description: 'Backend Engineer specializing in API development and scalable systems',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
