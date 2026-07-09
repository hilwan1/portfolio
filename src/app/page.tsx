import type { Metadata } from 'next'
import PortfolioHome from '@/components/PortfolioHome'

export const metadata: Metadata = {
  title: 'Jasa Pembuatan Website & Aplikasi Web Profesional — Mohammad Hilwan',
  description:
    'Butuh website bisnis atau aplikasi custom? Mohammad Hilwan menyediakan jasa pembuatan website profesional, sistem informasi manajemen, portal layanan publik, dan e-commerce berbasis Laravel, CodeIgniter, & Next.js.',
}

export default function HomePage() {
  return <PortfolioHome />
}
