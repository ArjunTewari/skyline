import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Skyline Exports Pvt Ltd | Pharmaceutical Sourcing & Export',
  description:
    'India-based pharmaceutical and healthcare sourcing partner in formation. Explore product categories, manufacturer collaboration and international B2B inquiries.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
