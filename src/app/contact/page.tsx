'use client'

import { useState, FormEvent } from 'react'
import styles from './page.module.css'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

const initialForm: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const contactInfo = [
  {
    icon: 'fa-regular fa-envelope',
    label: 'Email',
    value: 'hilwan1.dd@gmail.com',
    href: 'mailto:hilwan1.dd@gmail.com',
  },
  {
    icon: 'fa-brands fa-linkedin-in',
    label: 'LinkedIn',
    value: 'linkedin.com/in/mohhilwan',
    href: 'https://linkedin.com',
  },
  {
    icon: 'fa-brands fa-github',
    label: 'GitHub',
    value: 'github.com/hilwan1',
    href: 'https://github.com/hilwan1',
  },
  {
    icon: 'fa-brands fa-behance',
    label: 'Behance',
    value: 'behance.net/mohammadhilwan',
    href: 'https://www.behance.net/mohammadhilwan',
  },
]

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('https://formsubmit.co/ajax/hilwan1.dd@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `Pesan baru dari ${form.name} - portfolio`,
          Name: form.name,
          Email: form.email,
          Topic: form.subject,
          Message: form.message,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setForm(initialForm)
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form', error)
      setStatus('error')
    }
  }

  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className={styles.pageHeader}>
        <div className={styles.orb1} aria-hidden="true" />
        <div className={styles.orb2} aria-hidden="true" />
        <div className={`container ${styles.headerContent}`}>
          <span className="label">Get in Touch</span>
          <h1 className={styles.pageTitle}>
            Let&apos;s <span className="text-gradient">Collaborate</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Punya proyek atau ide yang ingin diwujudkan? Saya siap mendengarkan dan berkontribusi.
          </p>
        </div>
      </section>

      {/* ── CONTACT BODY ── */}
      <section className={`section ${styles.contactSection}`}>
        <div className={`container ${styles.contactGrid}`}>

          {/* INFO PANEL */}
          <aside className={styles.infoPanel}>
            <div className={styles.infoPanelInner}>
              <h2 className={styles.infoTitle}>Hubungi Saya</h2>
              <p className={styles.infoDesc}>
                Saya terbuka untuk proyek freelance, peluang kolaboratif, dan diskusi kreatif.
                Respons biasanya dalam 24 jam.
              </p>

              <ul className={styles.contactList}>
                {contactInfo.map((item) => (
                  <li key={item.label} className={styles.contactItem}>
                    <span className={styles.contactIcon} aria-hidden="true">
                      <i className={item.icon}></i>
                    </span>
                    <div>
                      <span className={styles.contactLabel}>{item.label}</span>
                      <a
                        href={item.href}
                        className={styles.contactValue}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {item.value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Availability Badge */}
              <div className={styles.availability}>
                <span className={styles.dot} aria-hidden="true" />
                <span>Available for new projects</span>
              </div>
            </div>
          </aside>

          {/* FORM */}
          <div className={styles.formWrap}>
            {status === 'success' ? (
              <div className={styles.successState} role="alert">
                <span className={styles.successIcon}>✓</span>
                <h3>Pesan Terkirim!</h3>
                <p>Terima kasih sudah menghubungi saya. Saya akan merespons secepatnya.</p>
                <button
                  className="btn btn-outline"
                  onClick={() => setStatus('idle')}
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form
                className={styles.form}
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Nama Lengkap *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={styles.input}
                      autoComplete="name"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className={styles.input}
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.label}>Subjek *</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="" disabled>Pilih topik...</option>
                    <option value="web">Web Development Project</option>
                    <option value="logo">Logo Design</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="poster">Poster / Graphic Design</option>
                    <option value="collab">Collaboration</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Pesan *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Ceritakan proyek atau ideamu di sini..."
                    className={styles.textarea}
                  />
                </div>

                {status === 'error' && (
                  <div style={{ color: 'red', marginBottom: '1rem', fontSize: '0.9rem' }}>
                    Terjadi kesalahan saat mengirim pesan. Pastikan Anda terhubung ke internet atau coba lagi nanti.
                  </div>
                )}
                <button
                  type="submit"
                  id="contact-submit"
                  className={`btn btn-primary ${styles.submitBtn}`}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <span className={styles.spinner} aria-hidden="true" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      Kirim Pesan
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
