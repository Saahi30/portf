import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import Navigation from '@/components/Navigation/Navigation'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })

export const metadata: Metadata = {
  title: 'Saahi Dubey | Builder & Operator',
  description: 'First-year B.Tech CSE (AI/ML) student, Co-founder of Hero’s United, and full-stack engineer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <SmoothScroll>
          <Navigation />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
