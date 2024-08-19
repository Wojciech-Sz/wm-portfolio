import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'Wojciech Szczygielski | W&M | Fullstack Web Developer',
  description:
    'Tworzę nowoczesne, responsywne strony internetowe z pełną optymalizacją i hostingiem. Zapewniam stałą analizę dla lepszego pozycjonowania.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
