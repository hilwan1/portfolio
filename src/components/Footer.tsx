'use client'

import React, { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { Github, Linkedin, ArrowUpRight } from 'lucide-react'

const FooterFadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })

    const current = domRef.current
    if (current) observer.observe(current)
    return () => { if (current) observer.unobserve(current) }
  }, [])

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function Footer() {
  const pathname = usePathname()
  const year = new Date().getFullYear()

  if (pathname === '/chat' || pathname === '/links') return null

  return (
    <footer id="contact" className="py-24 px-6 border-t border-neutral-900 bg-[#050505] text-white">
      <FooterFadeIn>
        <div className="max-w-7xl mx-auto py-20 flex flex-col items-center text-center">
          <h2 className="text-[5rem] sm:text-[7rem] md:text-[9rem] leading-[0.9] font-black text-white tracking-tighter uppercase mb-12">
            Let's Work <br /> Together
          </h2>
          <a 
            href="https://wa.me/6283865157423" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#ff5500] hover:bg-[#e64d00] flex items-center justify-center transition-all duration-300 shadow-[0_0_50px_rgba(255,85,0,0.15)] hover:shadow-[0_0_80px_rgba(255,85,0,0.3)] hover:scale-105"
          >
            <ArrowUpRight className="w-10 h-10 md:w-12 md:h-12 text-white group-hover:rotate-45 transition-transform duration-300" strokeWidth={2.5} />
          </a>
        </div>
      </FooterFadeIn>

      <FooterFadeIn delay={300}>
        <div className="max-w-7xl mx-auto mt-24 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-neutral-900 pt-8">
          <div className="flex items-center gap-2 font-bold text-white">
            MH<span className="text-[#ff5500]">.</span> <span className="text-neutral-600 font-normal ml-2">© {year} Mohammad Hilwan</span>
          </div>
          
          <div className="flex gap-6">
            <a href="https://github.com/hilwan1" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors" aria-label="Github">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/mohammadhilwan" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-[#0077b5] transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </FooterFadeIn>
    </footer>
  )
}
