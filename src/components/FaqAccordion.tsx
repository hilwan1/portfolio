'use client'

import React, { useState } from 'react'
import styles from '@/app/page.module.css'

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(1)

  const faqs = [
    {
      question: "What industries have you worked in as a Web Developer?",
      answer: "I have worked across various industries including Goverment and Industries Telecommunication."
    },
    {
      question: "Can I download your resume/CV for information ?",
      answer: "Certainly! You can download my resume/CV directly from my website. It provides a comprehensive overview of my education, work experience, and design achievements."
    },
    {
      question: "Are you available for freelance work ?",
      answer: "Yes, I am actively open to taking up exciting freelance projects. Please feel free to reach out to me via the contact form to discuss further."
    },
    {
      question: "What tools do you use for your work?",
      answer: "My primary stack includes Figma for UI/UX, Adobe Illustrator for vectors, Adobe Photoshop for image editing, and VS Code for web development."
    },
    {
      question: "How do I navigate through your portfolio projects?",
      answer: "You can visit the 'Projects' section from the top navigation to view a detailed showcase of all my recent and past works."
    }
  ]

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={styles.faqList}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        return (
          <div key={index} className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}>
            <button 
              className={styles.faqItemHeader} 
              onClick={() => toggleOpen(index)}
              aria-expanded={isOpen}
            >
              <span className={styles.faqQuestion}>{faq.question}</span>
              <span className={styles.faqIcon}>
                {isOpen ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                )}
              </span>
            </button>
            <div 
              className={styles.faqBody} 
              style={{ 
                maxHeight: isOpen ? '500px' : '0px', 
                opacity: isOpen ? 1 : 0 
              }}
            >
              <div className={styles.faqContent}>
                {faq.answer}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
