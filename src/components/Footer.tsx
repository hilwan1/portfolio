'use client';

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import styles from './Footer.module.css'

export default function Footer() {
  const pathname = usePathname()
  const year = new Date().getFullYear()

  if (pathname === '/chat') return null;
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <div className={styles.brand}>
          <Image 
            src="/logo-gue.jpg" 
            alt="Mohammad Hilwan Logo" 
            width={56} 
            height={56} 
            className={styles.logoImage} 
          />
          <h2 className={styles.brandName}>Mohammad Hilwan.</h2>
        </div>

        <div className={styles.socialIcons}>
          <a href="https://github.com/hilwan1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/mohhilwan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://behance.net/mohammadhilwan" target="_blank" rel="noopener noreferrer" aria-label="Behance">
            <i className="fa-brands fa-behance"></i>
          </a>
          <a href="https://instagram.com/onedesignnn" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>

      <div className={`${styles.bottom} container`}>
        <p>&copy; {year} Mohammad Hilwan. All rights reserved.</p>
        <p>Designed & built with <span className="text-accent"> ME</span></p>
      </div>
    </footer>
  )
}
