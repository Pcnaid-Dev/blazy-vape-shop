// app/layout.tsx
import type { Metadata } from 'next'; // Import Metadata type for better type checking
import { Inter } from 'next/font/google'; // Example: Using the Inter font from Google Fonts
import './globals.css'; // <-- **CRITICAL: Import the global CSS file**
import type { ReactNode } from 'react'; // Type import is fine

// Initialize the font (adjust subsets if needed)
const inter = Inter({ subsets: ['latin'] });

// Metadata object (looks good!)
export const metadata: Metadata = {
  title: 'Blazy Vape Shop',
  description: 'Premium Smoking Accessories & Welcoming Vibes',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/* 
        The <head> tag is automatically managed by Next.js based on your `metadata` object 
        and any <Head> components used within pages/child layouts. 
        You should NOT include an empty <head /> tag here.
      */}
      {/* Apply the font class to the body for optimized loading and styling */}
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
