import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Mohammad Hilwan — Designer & Developer',
  description:
    'Portfolio of Mohammad Hilwan, a creative designer and developer specializing in Web Development, Logo Design, UI/UX Design, and Poster Design.',
  keywords: ['portfolio', 'designer', 'developer', 'UI/UX', 'logo design', 'web development', 'Mohammad Hilwan'],
  authors: [{ name: 'Mohammad Hilwan' }],
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    type: 'website',
    title: 'Mohammad Hilwan — Designer & Developer',
    description: 'Saya adalah seorang desainer grafis dan web developer kreatif. Menghadirkan solusi visual dan digital yang elegan (Web, Logo, UI/UX, Poster).',
    siteName: 'Mohammad Hilwan Portfolio',
    images: [
      {
        url: '/foto-hero.jpeg',
        width: 1200,
        height: 630,
        alt: 'Mohammad Hilwan Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammad Hilwan — Designer & Developer',
    description: 'Saya adalah seorang desainer grafis dan web developer kreatif. Menghadirkan solusi visual dan digital yang elegan (Web, Logo, UI/UX, Poster).',
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
