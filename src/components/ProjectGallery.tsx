'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './ProjectGallery.module.css'

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
      <div className={styles.galleryContainer}>
        <div className={styles.mainImageWrap} onClick={toggleModal} role="button" tabIndex={0}>
          <Image
            src={images[currentIndex]}
            alt={`${title} screenshot ${currentIndex + 1}`}
            fill
            className={styles.mainImage}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className={styles.imageOverlay}>
            <span className={styles.overlayText}>Klik untuk perbesar</span>
          </div>
        </div>

        {images.length > 1 && (
          <div className={styles.thumbnailRow}>
            {images.map((img, idx) => (
              <button
                key={idx}
                className={`${styles.thumbnailWrap} ${idx === currentIndex ? styles.activeThumbnail : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`View image ${idx + 1}`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className={styles.thumbnailImage}
                  sizes="100px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className={styles.modalBackdrop} onClick={toggleModal}>
          <button className={styles.closeBtn} onClick={toggleModal} aria-label="Close">
             ✕
          </button>
          
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            {images.length > 1 && (
              <button className={styles.modalPrev} onClick={handlePrev} aria-label="Previous image">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            )}

            <div className={styles.modalImageWrap}>
              <Image
                src={images[currentIndex]}
                alt={`${title} fullscreen screenshot ${currentIndex + 1}`}
                fill
                className={styles.modalImage}
                sizes="100vw"
              />
            </div>

            {images.length > 1 && (
              <button className={styles.modalNext} onClick={handleNext} aria-label="Next image">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            )}

            <div className={styles.modalCounter}>
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
