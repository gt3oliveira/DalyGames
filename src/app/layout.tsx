import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Daly Games - Descubra jogos incríveis para se divertir.',
  description: 'Mais de 10 mil jogos separados e organizados',
  keywords: ['jogos', 'games', 'steam', 'x-box', 'pc', 'playstation'],
  openGraph:{
    images: [`${process.env.PROJECT_URL}/preview.png`]
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot:{
      index: true,
      follow: true,
      noimageindex: true,
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}        
      </body>
    </html>
  )
}
