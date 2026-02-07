import clsx from 'clsx';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: "Professional portfolio showcasing skills, projects, and experience.",
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      {/* <head>
        <link rel='icon' href='/icon.svg' type='image/svg+xml' />
        <link rel='alternate icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/icon.svg' />
      </head> */}
      <body className={clsx(poppins.variable, 'antialiased')}>{children}</body>
    </html>
  );
}
