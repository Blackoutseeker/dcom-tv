import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UFCA - Campus Juazeiro do Norte',
  description: 'Universidade Federal do Cariri - Campus Juazeiro do Norte'
}

export default function RootLayout({
  children
}: {
  children: ReactNode | ReactNode[]
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
