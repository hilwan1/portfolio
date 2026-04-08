'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
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

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={`${styles.nav} container`} aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="Mohammad Hilwan – Home">
          <img src="/logo-gue.jpg" alt="Logo" className={styles.logoMark} />
          <span className={styles.logoText}>
            Mohammad Hilwan<span className={styles.logoTextDot}>.</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className={styles.navLinks} role="list">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.navLink} ${pathname === href ? styles.active : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link href="/contact" className={`btn btn-primary ${styles.ctaBtn}`}>
          Hire Me
        </Link>

        {/* Mobile hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`} aria-hidden={!menuOpen}>
        <ul role="list">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.drawerLink} ${pathname === href ? styles.active : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
          Hire Me
        </Link>
      </div>
    </header>
  )
}
