import Header from '@/components/layout/Header';
import type { Metadata } from 'next';
import { League_Spartan } from 'next/font/google';
import './globals.css';

const spartan = League_Spartan({
  variable: '--font-spartan',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Arch Studio',
  description: 'This is Arch Studio landing page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${spartan.variable} antialiased overflow-x-hidden min-h-screen h-[1000px]`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
