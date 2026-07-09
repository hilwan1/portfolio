import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,500;0,700;1,500;1,700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>

      <body className="noise-overlay">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
