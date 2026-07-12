'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface ProjectGalleryProps {
  images: string[]
  title: string
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (!images || images.length === 0) return null

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <div className="flex flex-col gap-4 min-w-0">
        <div 
          className="relative w-full aspect-video overflow-hidden cursor-zoom-in rounded-3xl border-2 border-neutral-800 bg-[#111111] shadow-xl group"
          onClick={toggleModal} 
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              toggleModal()
            }
          }}
          role="button" 
          tabIndex={0}
          aria-label="Perbesar gambar proyek"
        >
          <Image
            src={images[currentIndex]}
            alt={`${title} screenshot ${currentIndex + 1}`}
            fill
            className="object-cover md:object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="border border-white/20 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full font-mono text-xs font-semibold shadow-lg">
              Klik untuk perbesar
            </span>
          </div>
        </div>

        {images.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x">
            {images.map((img, idx) => (
              <button
                key={idx}
                className={`relative w-24 h-16 shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-300 snap-center ${
                  idx === currentIndex 
                    ? 'border-[#ff5500] opacity-100 shadow-[0_0_15px_rgba(255,85,0,0.3)]' 
                    : 'border-neutral-800 opacity-50 hover:opacity-100 hover:border-neutral-600'
                }`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`View image ${idx + 1}`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="100px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm" onClick={toggleModal}>
          <button 
            className="absolute top-6 right-6 z-[10000] flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-[#ff5500] text-white transition-colors" 
            onClick={toggleModal} 
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative flex items-center justify-center w-[95vw] h-[85vh] md:w-[90vw]" onClick={(e) => e.stopPropagation()}>
            {images.length > 1 && (
              <button 
                className="absolute left-0 md:-left-4 z-[10000] flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-[#ff5500] text-white transition-colors backdrop-blur-md" 
                onClick={handlePrev} 
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            <div className="relative w-full h-full">
              <Image
                src={images[currentIndex]}
                alt={`${title} fullscreen screenshot ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>

            {images.length > 1 && (
              <button 
                className="absolute right-0 md:-right-4 z-[10000] flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-[#ff5500] text-white transition-colors backdrop-blur-md" 
                onClick={handleNext} 
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/60 font-mono text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </>
  )
}
