'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

const navLinks = [
  { href: '/#work', label: 'work' },
  { href: '/#services', label: 'services' },
  { href: '/#about', label: 'about' },
  { href: '/#contact', label: 'contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (pathname === '/chat') return null

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link href="/" className={styles.logo} aria-label="Mohammad Hilwan home">
          <span className={styles.logoDot} />
          <span className={styles.logoText}>hilwan&copy;</span>
        </Link>

        <ul className={styles.navLinks} role="list">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={styles.navLink}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className={styles.ctaBtn}>
          hire me
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </Link>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`} aria-hidden={!menuOpen}>
        <ul role="list">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={styles.drawerLink} onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className={styles.drawerCta} onClick={() => setMenuOpen(false)}>
          hire me
        </Link>
      </div>
    </header>
  )
}
