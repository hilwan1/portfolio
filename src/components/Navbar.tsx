'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight } from 'lucide-react'
 
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
     <div className={`fixed left-0 right-0 z-[100] flex justify-center transition-all duration-500 ease-out px-4 ${isScrolled ? 'top-2 md:top-3' : 'top-6 md:top-12 lg:top-14'}`}>
       <div className={`relative w-full transition-all duration-500 max-w-3xl`}>
         <nav 
           className={`
             relative transition-all duration-500 overflow-hidden w-full bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-full
             ${isScrolled ? 'shadow-[0_8px_30px_rgb(0,0,0,0.5)]' : 'shadow-lg'}
           `}
         >
           <div className={`flex items-center justify-between transition-all duration-300 mx-auto pl-6 pr-3 py-3 md:pl-7 md:pr-3 md:py-3`}>
             <Link href="/" className="font-bold text-xl md:text-2xl tracking-tighter text-white">
               MH<span className="text-[#ff5500]">.</span>
             </Link>
 
             <div className="hidden md:flex items-center gap-6 lg:gap-8">
               <Link href="/#about" className="group relative overflow-hidden inline-block text-xs md:text-sm font-medium uppercase tracking-widest text-neutral-400 py-1">
                 <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                   Tentang
                 </span>
                 <span className="absolute inset-0 block transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0 text-[#ff5500] font-semibold py-1">
                   Tentang
                 </span>
               </Link>
               <Link href="/#projects" className="group relative overflow-hidden inline-block text-xs md:text-sm font-medium uppercase tracking-widest text-neutral-400 py-1">
                 <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                   Karya
                 </span>
                 <span className="absolute inset-0 block transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0 text-[#ff5500] font-semibold py-1">
                   Karya
                 </span>
               </Link>
               <Link href="/#contact" className="group relative overflow-hidden inline-block text-xs md:text-sm font-medium uppercase tracking-widest text-neutral-400 py-1">
                 <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                   Kontak
                 </span>
                 <span className="absolute inset-0 block transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0 text-[#ff5500] font-semibold py-1">
                   Kontak
                 </span>
               </Link>
               <Link 
                 href="/#contact" 
                 className="group relative inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-[#ff5500] to-[#ff7700] hover:from-[#ff6600] hover:to-[#ff4400] shadow-[0_0_15px_rgba(255,85,0,0.35)] hover:shadow-[0_0_25px_rgba(255,85,0,0.65)] hover:scale-[1.04] active:scale-[0.96] transition-all duration-300 overflow-hidden"
               >
                 <span className="relative z-10">Hubungi Saya</span>
                 <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                 <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
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
             <Link 
               href="/#contact" 
               onClick={() => setMenuOpen(false)} 
               className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#ff5500] to-[#ff7700] text-white px-8 py-4 rounded-full text-center text-lg font-bold hover:scale-105 active:scale-95 transition-all duration-300 mt-4 shadow-xl shadow-[#ff5500]/30 overflow-hidden"
             >
               <span className="relative z-10">Hubungi Saya</span>
               <ArrowUpRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
               <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
             </Link>
           </div>
         </div>
       </div>
     </div>
   )
 }
