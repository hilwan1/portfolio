'use client'

import { usePathname } from 'next/navigation'
import styles from './Footer.module.css'

export default function Footer() {
  const pathname = usePathname()
  const year = new Date().getFullYear()

  if (pathname === '/chat') return null

  return (
    <footer className={styles.footer}>
      <div className={styles.bottom}>
        <span>&copy; {year} Mohammad Hilwan - all rights reserved</span>
        <span>made with coffee + heart in the studio</span>
      </div>
    </footer>
  )
}
