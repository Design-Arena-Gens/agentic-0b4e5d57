import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ramblings - Thoughts Unfiltered',
  description: 'A place for wandering thoughts and scattered musings',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
