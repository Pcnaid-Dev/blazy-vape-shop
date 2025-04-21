// app/layout.tsx
import React from 'react'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Blazy Vape Shop',
  description: 'Premium Smoking Accessories & Welcoming Vibes',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
