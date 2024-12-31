import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Welcome to FinanceFlow',
  description: 'Your personal finance management solution',
}

export default function WelcomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-700">
          {children}
        </main>
      </body>
    </html>
  )
}

