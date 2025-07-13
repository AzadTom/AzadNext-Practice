import type { Metadata } from 'next';
import './globals.css';
import QueryProvider from '@/queryprovider/queryprovider';

export const metadata: Metadata = {
  title: 'NextJS Projects',
  description: 'This website is for my project space.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
