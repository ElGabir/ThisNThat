import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ThisNThat - AI SaaS Platform',
  description: 'Your AI all in one site. Unlock unlimited AI access with our comprehensive platform.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
