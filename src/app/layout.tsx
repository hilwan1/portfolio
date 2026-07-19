import type { Metadata } from 'next'
import { Inter, Space_Grotesk, DM_Mono, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmMono = DM_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  weight: ['500', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jasa Pembuatan Website & Aplikasi Web Custom — Mohammad Hilwan',
  description:
    'Jasa pembuatan website profesional, aplikasi web custom, sistem informasi manajemen perusahaan, e-commerce, & integrasi API oleh Mohammad Hilwan, Full-Stack Web Developer berpengalaman (Laravel, CI4, Next.js).',
  keywords: [
    'jasa pembuatan website',
    'jasa pembuatan aplikasi web',
    'pembuatan website custom',
    'jasa web developer',
    'programmer laravel',
    'jasa sistem informasi',
    'jasa pembuatan website bandung',
    'jasa pembuatan aplikasi custom',
    'fullstack developer indonesia',
    'Laravel',
    'CodeIgniter',
    'Next.js',
    'React',
    'Mohammad Hilwan'
  ],
  authors: [{ name: 'Mohammad Hilwan' }],
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    type: 'website',
    title: 'Jasa Pembuatan Website & Aplikasi Web Custom — Mohammad Hilwan',
    description: 'Solusi pembuatan website profesional, aplikasi custom, dan sistem informasi manajemen berbasis Laravel, CodeIgniter, & Next.js.',
    siteName: 'Mohammad Hilwan Portfolio',
    images: [
      {
        url: '/foto-hero.jpeg',
        width: 1200,
        height: 630,
        alt: 'Jasa Pembuatan Website & Aplikasi Web Custom — Mohammad Hilwan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jasa Pembuatan Website & Aplikasi Web Custom — Mohammad Hilwan',
    description: 'Solusi pembuatan website profesional, aplikasi custom, dan sistem informasi manajemen berbasis Laravel, CodeIgniter, & Next.js.',
    images: ['/foto-hero.jpeg'],
  },
  verification: {
    google: 'IatQjsOhMKECaqrpw3Yx3-MRHgOEJ08gT59PnNvsy5Y',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${inter.variable} ${spaceGrotesk.variable} ${dmMono.variable} ${playfairDisplay.variable}`}>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>

      <body className="noise-overlay">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
