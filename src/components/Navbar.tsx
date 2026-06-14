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

  if (pathname === '/chat' || pathname === '/links') return null

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isScrolled ? 'pt-4 md:pt-6 px-4' : 'pt-0 px-0'}`}>
      <div className={`relative w-full transition-all duration-500 ${isScrolled ? 'max-w-4xl' : ''}`}>
        <nav 
          className={`
            relative transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden w-full
            ${isScrolled 
              ? 'bg-[#111111]/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full' 
              : 'bg-[#0a0a0a] border-b border-neutral-900 rounded-none'
            }
          `}
        >
          <div className={`flex items-center justify-between transition-all duration-500 mx-auto ${isScrolled ? 'px-6 py-3 md:px-8 md:py-4' : 'px-6 md:px-12 py-6 max-w-[1400px] w-full'}`}>
            <Link href="/" className="font-bold text-xl md:text-2xl tracking-tighter text-white">
              MH<span className="text-[#ff5500]">.</span>
            </Link>

            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              <Link href="/#about" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Tentang</Link>
              <Link href="/#projects" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Karya</Link>
              <Link href="/#contact" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Kontak</Link>
            </div>

            <div className="hidden md:block">
              <Link href="/#contact" className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-colors ${isScrolled ? 'bg-[#ff5500] text-white hover:bg-[#e64d00]' : 'bg-white text-black hover:bg-neutral-200'}`}>
                Hubungi Saya
              </Link>
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white focus:outline-none">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Scroll Progress Bar at the bottom of the nav */}
          <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#ff5500] to-[#ffaa00] transition-all duration-100 ease-out z-10" 
               style={{ width: `${scrollProgress}%` }} 
          />
        </nav>

        {/* Mobile menu dropdown */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out origin-top z-40 ${menuOpen ? 'opacity-100 scale-y-100 translate-y-2' : 'opacity-0 scale-y-0 translate-y-0 pointer-events-none'}`}
        >
          <div className={`bg-[#111111]/95 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-4 px-6 py-6 ${isScrolled ? 'rounded-[2rem]' : 'rounded-b-[2rem] border-t-0'}`}>
            <Link href="/#about" onClick={() => setMenuOpen(false)} className="text-base font-medium text-neutral-400 hover:text-white transition-colors">Tentang</Link>
            <Link href="/#projects" onClick={() => setMenuOpen(false)} className="text-base font-medium text-neutral-400 hover:text-white transition-colors">Karya</Link>
            <Link href="/#contact" onClick={() => setMenuOpen(false)} className="text-base font-medium text-neutral-400 hover:text-white transition-colors">Kontak</Link>
            <Link href="/#contact" onClick={() => setMenuOpen(false)} className="bg-[#ff5500] text-white px-6 py-3 rounded-full text-center text-sm font-semibold hover:bg-[#e64d00] transition-colors mt-2">
              Hubungi Saya
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
