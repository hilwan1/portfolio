'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bot, X, MessageCircle } from 'lucide-react'

export default function FloatingWidgets() {
  const pathname = usePathname()
  const [showWaPopup, setShowWaPopup] = useState(true)

  // Hide widgets on /chat and /links pages
  if (pathname === '/chat' || pathname === '/links') {
    return null
  }

  const waMessage = encodeURIComponent(
    'Halo Mas Hilwan, saya ingin menanyakan tentang jasa pembuatan website.'
  )
  const waUrl = `https://wa.me/6283865157423?text=${waMessage}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* WhatsApp Section (Pop-up Card & Toggle Button) */}
      <div className="relative flex flex-col items-end pointer-events-auto">
        {/* WhatsApp Speech Bubble Pop-up */}
        {showWaPopup && (
          <div className="mb-3 max-w-[270px] sm:max-w-[310px] bg-[#121212]/95 backdrop-blur-md border border-[#25D366]/40 p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] text-white text-sm animate-in fade-in slide-in-from-bottom-3 duration-300 relative">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setShowWaPopup(false)
              }}
              aria-label="Tutup pop-up WhatsApp"
              className="absolute top-2.5 right-2.5 text-neutral-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
              </span>
              <span className="font-semibold text-[11px] sm:text-xs text-[#25D366] uppercase tracking-wider">
                Online • Tanya Jasa Website
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-200 leading-snug font-normal">
              Butuh pembuatan website bisnis atau aplikasi web custom? Konsultasi gratis via WhatsApp!
            </p>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 w-full py-2.5 px-3 bg-[#25D366] hover:bg-[#20ba5a] text-black font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-[#25D366]/20 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-black text-[#25D366]" />
              <span>Chat WhatsApp</span>
            </a>

            {/* Speech bubble tail pointing down to WA button */}
            <div className="absolute -bottom-2 right-5 w-4 h-4 bg-[#121212]/95 border-r border-b border-[#25D366]/40 rotate-45"></div>
          </div>
        )}

        {/* WhatsApp Floating Button */}
        <div className="relative group">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Tanya Jasa Website via WhatsApp"
            title="Tanya Jasa Website via WhatsApp"
            className="w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba5a] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 text-black hover:scale-110 transition-all duration-300 block relative"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 sm:w-7 sm:h-7 fill-white stroke-none"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 2C6.477 2 2 6.477 2 12c0 2.159.684 4.16 1.848 5.804L2.3 21.7s.24.08.4.08c.11 0 .22-.03.32-.08l4.032-1.414C8.618 21.282 10.264 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.573 0-3.056-.445-4.327-1.215l-.31-.188-2.571.902.9-2.512-.206-.326C4.654 15.344 4.14 13.722 4.14 12c0-4.334 3.526-7.86 7.86-7.86s7.86 3.526 7.86 7.86S16.334 20 12 20z"/>
            </svg>
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#25D366] border-2 border-black"></span>
            </span>
          </a>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-[#181818]/90 border border-white/10 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
            Tanya Jasa Website
          </span>
        </div>
      </div>

      {/* AI Chatbot Floating Button (Bottom) */}
      <div className="pointer-events-auto relative group">
        <Link
          href="/chat"
          aria-label="Tanya AI Chatbot"
          title="Tanya AI Chatbot"
          className="w-13 h-13 sm:w-14 sm:h-14 bg-[#ff5500] hover:bg-[#e64d00] rounded-full flex items-center justify-center shadow-lg shadow-[#ff5500]/30 text-white hover:scale-110 transition-all duration-300 block relative"
        >
          <Bot className="w-6 h-6 sm:w-7 sm:h-7" />
        </Link>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-[#181818]/90 border border-white/10 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
          AI Assistant
        </span>
      </div>
    </div>
  )
}
