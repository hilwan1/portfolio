'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bot, X, MessageSquare, Sparkles } from 'lucide-react'

export default function FloatingWidgets() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const widgetRef = useRef<HTMLDivElement>(null)

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Hide widgets on /chat and /links pages
  if (pathname === '/chat' || pathname === '/links') {
    return null
  }

  const waMessage = encodeURIComponent(
    'Halo Mas Hilwan, saya ingin menanyakan tentang jasa pembuatan website.'
  )
  const waUrl = `https://wa.me/6283865157423?text=${waMessage}`

  return (
    <div ref={widgetRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Pop-up options menu */}
      {isOpen && (
        <div className="mb-4 w-[290px] sm:w-[320px] bg-[#121212]/95 backdrop-blur-xl border border-white/10 p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-white animate-in fade-in slide-in-from-bottom-4 duration-300 relative overflow-hidden">
          {/* Ambient background glows */}
          <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#ff5500]/20 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-12 -left-12 w-28 h-28 bg-[#25D366]/20 rounded-full blur-2xl pointer-events-none"></div>

          {/* Header */}
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
            <div>
              <h3 className="text-sm font-bold text-white tracking-tight">Hubungi Saya</h3>
              <p className="text-[11px] text-neutral-400">Pilih opsi komunikasi yang Anda inginkan</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Tutup menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Option 1: WhatsApp */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 mb-2 rounded-2xl bg-white/[0.03] hover:bg-[#25D366]/10 border border-white/5 hover:border-[#25D366]/40 transition-all group"
          >
            <div className="w-11 h-11 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 2C6.477 2 2 6.477 2 12c0 2.159.684 4.16 1.848 5.804L2.3 21.7s.24.08.4.08c.11 0 .22-.03.32-.08l4.032-1.414C8.618 21.282 10.264 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.573 0-3.056-.445-4.327-1.215l-.31-.188-2.571.902.9-2.512-.206-.326C4.654 15.344 4.14 13.722 4.14 12c0-4.334 3.526-7.86 7.86-7.86s7.86 3.526 7.86 7.86S16.334 20 12 20z"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-0.5">
                <span className="font-semibold text-xs sm:text-sm text-white group-hover:text-[#25D366] transition-colors">
                  WhatsApp
                </span>
                <span className="text-[10px] bg-[#25D366]/20 text-[#25D366] px-2 py-0.5 rounded-full font-medium">
                  Online
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 truncate">
                Tanya Jasa Website & Konsultasi
              </p>
            </div>
          </a>

          {/* Option 2: AI Chatbot */}
          <Link
            href="/chat"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] hover:bg-[#ff5500]/10 border border-white/5 hover:border-[#ff5500]/40 transition-all group"
          >
            <div className="w-11 h-11 rounded-xl bg-[#ff5500]/20 text-[#ff5500] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Bot className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-0.5">
                <span className="font-semibold text-xs sm:text-sm text-white group-hover:text-[#ff5500] transition-colors">
                  AI Assistant
                </span>
                <span className="text-[10px] bg-[#ff5500]/20 text-[#ff5500] px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" /> 24/7
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 truncate">
                Tanya Jawab Seputar Hilwan & Portfolio
              </p>
            </div>
          </Link>
        </div>
      )}

      {/* Main Floating Action Button (FAB) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Tutup pilihan kontak" : "Buka pilihan kontak"}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 relative text-white group ${
          isOpen
            ? 'bg-[#222222] border border-white/20 scale-105'
            : 'bg-gradient-to-br from-[#ff7700] via-[#e63900] to-[#cc2200] hover:scale-110 shadow-lg shadow-[#ff5500]/30 border border-white/10'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 transition-transform duration-300" />
        ) : (
          <>
            <MessageSquare className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
            {/* Notification pulse dot */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#25D366] border-2 border-black"></span>
            </span>
          </>
        )}
      </button>
    </div>
  )
}
