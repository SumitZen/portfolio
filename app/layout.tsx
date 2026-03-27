import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, JetBrains_Mono, Noto_Serif_JP } from 'next/font/google'
import ScrollProgress from '../components/ScrollProgress'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jp',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sumit - CS Student & Web Developer',
  description: 'Building things that matter — one commit at a time.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable} ${mono.variable} ${notoSerifJP.variable}`}>
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}