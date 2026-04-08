'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '@/app/page.module.css'

export default function TestimonialsSlider() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = () => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const containerCenter = container.getBoundingClientRect().left + container.clientWidth / 2

    let minDiff = Infinity
    let active = activeIndex

    Array.from(container.children).forEach((child, index) => {
      const childRect = child.getBoundingClientRect()
      const childCenter = childRect.left + childRect.width / 2
      const diff = Math.abs(containerCenter - childCenter)
      if (diff < minDiff) {
        minDiff = diff
        active = index
      }
    })

    if (active !== activeIndex) {
      setActiveIndex(active)
    }
  }

  // initialize active state
  useEffect(() => {
    // Adding a slight delay allows the layout to finish rendering before we check the center element
    const timeout = setTimeout(() => handleScroll(), 100)
    return () => clearTimeout(timeout)
  }, [])

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.clientWidth || 420
      const gap = 24 // 1.5rem
      scrollRef.current.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.clientWidth || 420
      const gap = 24 // 1.5rem
      scrollRef.current.scrollBy({ left: cardWidth + gap, behavior: 'smooth' })
    }
  }

  const clients = [
    { 
      name: 'Fotomora', 
      review: 'Menarik untuk bekerjasama',
      rating: '5,0'
    },
    { 
      name: 'Yusuf Maulana', 
      review: 'hasil logo sangat bagus! akan pesan lagi!',
      rating: '5,0'
    },
    { 
      name: 'Fahmi Sidiq', 
      review: 'Very talented, understanding, highly recommended. Thank you so much!',
      rating: '5,0'
    },
    { 
      name: 'Imam Sidik', 
      review: 'Pekerjaan cepat, respon cepat, hasil memuaskan. Bakalan repeat order nih',
      rating: '5,0'
    },
    { 
      name: 'PT. Duta Global Mandiri', 
      review: 'Mantap.... Balas pesan cepat, sangat gampang berkomunikasi, memberikan solusi dan revisi sesuai dengan permintaan. Recommended.',
      rating: '5,0'
    },
  ]

  return (
    <>
      <div className={styles.testiGrid} ref={scrollRef} onScroll={handleScroll}>
        {clients.map((client, idx) => (
          <div key={idx} className={`${styles.testiCard} ${idx === activeIndex ? styles.testiCardActive : ''}`}>
            <div className={styles.testiBigQuotes}>&rdquo;</div>
            <div className={styles.testiRating}>
              <div className={styles.testiStars}>
                ★★★★★
              </div>
              {client.rating}
            </div>
            <p className={styles.testiText}>
              {client.review}
            </p>
            <div className={styles.testiAuthor}>
              <Image 
                src="/ava.jpg" 
                alt={`${client.name} avatar`} 
                width={48} 
                height={48} 
                className={styles.testiAvatar} 
              />
              <div>
                <div className={styles.testiAuthorName}>{client.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.testiControls}>
        <button onClick={scrollLeft} className={`${styles.testiBtn} ${styles.testiBtnLeft}`} aria-label="Previous testimonial">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={scrollRight} className={`${styles.testiBtn} ${styles.testiBtnRight}`} aria-label="Next testimonial">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </>
  )
}
