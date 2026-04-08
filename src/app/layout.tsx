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
  openGraph: {
    type: 'website',
    title: 'Mohammad Hilwan — Designer & Developer',
    description: 'Creative portfolio of Mohammad Hilwan — Web Dev, Logo, UI/UX & Poster Design.',
    siteName: 'Mohammad Hilwan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammad Hilwan — Designer & Developer',
    description: 'Creative portfolio of Mohammad Hilwan — Web Dev, Logo, UI/UX & Poster Design.',
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
