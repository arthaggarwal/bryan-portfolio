import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google'; // Changed from Inter
import './globals.css';
import MainLayout from '@/components/layout/main-layout';
import { Toaster } from "@/components/ui/toaster";

// Initialize Montserrat font with subsets and a variable name
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat', // Changed variable name
});

export const metadata: Metadata = {
  title: 'Bryan Goh Portfolio',
  description: 'A personal portfolio website for Bryan, showcasing experience and achievements.',
  // Ensuring no explicit icons are defined in metadata.
  // If a favicon.ico exists in the /public folder, Next.js might still pick it up.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the Montserrat font variable to the body */}
      <body className={`${montserrat.variable} antialiased`}>
        <MainLayout>{children}</MainLayout>
        <Toaster />
      </body>
    </html>
  );
}
