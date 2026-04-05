import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Store Detail | Korean Snack',
  description: 'Cold, functional store detail page prototype.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
