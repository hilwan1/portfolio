'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Tentang', href: '/#about' },
  { label: 'Keahlian', href: '/#skills' },
  { label: 'Karya', href: '/#projects' },
  { label: 'Kontak', href: '/#contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32)

      const totalScroll = document.documentElement.scrollTop
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0
      setScrollProgress(scroll * 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }

    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
      window.addEventListener('resize', handleResize)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [menuOpen])

  if (pathname === '/chat' || pathname === '/links') return null

  return (
    <header
      className={`fixed left-0 right-0 z-[100] flex justify-center transition-all duration-300 ease-out px-3 sm:px-4 ${
        isScrolled ? 'top-2.5 md:top-3' : 'top-3 sm:top-4 md:top-6'
      }`}
    >
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/65 backdrop-blur-xs z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className="relative z-50 w-full max-w-3xl">
        <nav
          aria-label="Navigasi utama"
          className={`relative w-full overflow-hidden rounded-full bg-[#111111]/90 backdrop-blur-xl border border-white/10 transition-shadow duration-300 ${
            isScrolled
              ? 'shadow-[0_10px_30px_rgba(0,0,0,0.65)]'
              : 'shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
          }`}
        >
          <div className="flex items-center justify-between pl-5 pr-2.5 py-2 md:pl-7 md:pr-2.5 md:py-2.5">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center min-h-[44px] pr-2 font-bold text-xl md:text-2xl tracking-tighter text-white rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5500]"
            >
              MH<span className="text-[#ff5500]">.</span>
            </Link>

            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center min-h-[44px] px-3.5 rounded-full text-xs lg:text-sm font-medium uppercase tracking-wider text-neutral-300 hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5500]"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/#contact"
                className="ml-2 inline-flex items-center gap-1.5 min-h-[44px] px-5 rounded-full text-xs lg:text-sm font-bold text-white bg-[#ff5500] hover:bg-[#ff7733] active:scale-[0.98] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Hubungi Saya</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden inline-flex items-center gap-2 min-h-[44px] px-4 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-white/[0.06] hover:bg-white/10 active:bg-white/15 border border-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5500]"
              aria-label={menuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-menu"
            >
              <span>{menuOpen ? 'Tutup' : 'Menu'}</span>
              {menuOpen ? (
                <X className="w-4 h-4 text-[#ff5500]" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>

          <div
            className="absolute bottom-0 left-0 h-[2px] bg-[#ff5500] transition-all duration-100 ease-out pointer-events-none"
            style={{ width: `${scrollProgress}%` }}
          />
        </nav>

        {/* Mobile Dropdown Drawer */}
        {menuOpen && (
          <div
            id="mobile-nav-menu"
            role="dialog"
            aria-label="Menu navigasi mobile"
            className="md:hidden mt-2.5 w-full rounded-3xl bg-[#111111] border border-white/10 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="min-h-[48px] px-4 rounded-2xl flex items-center justify-between text-base font-semibold text-neutral-200 hover:text-white hover:bg-white/5 active:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5500]"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                </Link>
              ))}
            </div>

            <div className="mt-2 pt-2 border-t border-white/10">
              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="min-h-[48px] w-full rounded-2xl bg-[#ff5500] hover:bg-[#ff7733] active:scale-[0.99] text-[#0a0a0a] text-base font-bold flex items-center justify-center gap-2 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Hubungi Saya</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
