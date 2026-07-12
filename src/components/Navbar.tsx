'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Logic for Pill-Shape
      setIsScrolled(window.scrollY > 50)

      // Logic for Progress Bar
      const totalScroll = document.documentElement.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0
      setScrollProgress(scroll * 100)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  if (pathname === '/chat' || pathname === '/links') return null

  return (
    <div className={`fixed top-0 left-0 right-0 z-[100] flex justify-center transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isScrolled ? 'pt-4 md:pt-6 px-4' : 'pt-0 px-0'}`}>
      <div className={`relative w-full transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isScrolled ? 'max-w-4xl' : 'max-w-full'}`}>
        <nav 
          className={`
            relative transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden w-full
            ${isScrolled 
              ? 'bg-[#111111]/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full' 
              : 'bg-[#0a0a0a]/95 backdrop-blur-md border border-transparent border-b-neutral-900 rounded-none'
            }
          `}
        >
          <div className={`flex items-center justify-between transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] mx-auto ${isScrolled ? 'px-6 py-3 md:px-8 md:py-4' : 'px-6 md:px-12 py-5 max-w-[1400px] w-full'}`}>
            <Link href="/" className="font-bold text-xl md:text-2xl tracking-tighter text-white">
              MH<span className="text-[#ff5500]">.</span>
            </Link>

            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              <Link href="/#about" className="text-sm font-light uppercase tracking-widest text-neutral-400 hover:text-white transition-colors">Tentang</Link>
              <Link href="/#projects" className="text-sm font-light uppercase tracking-widest text-neutral-400 hover:text-white transition-colors">Karya</Link>
              <Link href="/#contact" className="text-sm font-light uppercase tracking-widest text-neutral-400 hover:text-white transition-colors">Kontak</Link>
              <Link href="/#contact" className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-colors ${isScrolled ? 'bg-[#ff5500] text-white hover:bg-[#e64d00]' : 'bg-white text-black hover:bg-neutral-200'}`}>
                Hubungi Saya
              </Link>
            </div>

            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="md:hidden text-white focus:outline-none"
              aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Scroll Progress Bar at the bottom of the nav */}
          <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#ff5500] to-[#ffaa00] transition-all duration-100 ease-out z-10" 
               style={{ width: `${scrollProgress}%` }} 
          />
        </nav>

        {/* Full-screen mobile menu overlay */}
        <div 
          className={`md:hidden fixed inset-0 w-screen h-screen bg-[#0a0a0a]/98 backdrop-blur-3xl z-[90] flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-8 pointer-events-none'}`}
        >
          {/* Header inside overlay */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-5 max-w-[1400px] mx-auto w-full">
            <Link href="/" onClick={() => setMenuOpen(false)} className="font-bold text-xl tracking-tighter text-white">
              MH<span className="text-[#ff5500]">.</span>
            </Link>
            <button 
              onClick={() => setMenuOpen(false)} 
              className="text-white focus:outline-none"
              aria-label="Tutup menu navigasi"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col items-center gap-8 text-center animate-fadeUp">
            <Link href="/#about" onClick={() => setMenuOpen(false)} className="text-3xl font-bold tracking-tight text-neutral-400 hover:text-white transition-colors uppercase">Tentang</Link>
            <Link href="/#projects" onClick={() => setMenuOpen(false)} className="text-3xl font-bold tracking-tight text-neutral-400 hover:text-white transition-colors uppercase">Karya</Link>
            <Link href="/#contact" onClick={() => setMenuOpen(false)} className="text-3xl font-bold tracking-tight text-neutral-400 hover:text-white transition-colors uppercase">Kontak</Link>
            <Link href="/#contact" onClick={() => setMenuOpen(false)} className="bg-[#ff5500] text-white px-8 py-4 rounded-full text-center text-lg font-bold hover:bg-[#e64d00] transition-colors mt-4 shadow-lg shadow-[#ff5500]/20">
              Hubungi Saya
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
