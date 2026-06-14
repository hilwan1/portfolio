import type { Metadata } from 'next'
import PortfolioHome from '@/components/PortfolioHome'

export const metadata: Metadata = {
  title: 'Mohammad Hilwan — Full-Stack Developer',
  description:
    'Portfolio Mohammad Hilwan, Full-Stack Developer yang berpengalaman dalam pengembangan sistem manajemen, portal layanan, dan arsitektur sistem yang efisien.',
}

export default function HomePage() {
  return <PortfolioHome />
}
