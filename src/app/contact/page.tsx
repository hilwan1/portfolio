'use client'

import { useState, FormEvent } from 'react'
import styles from './page.module.css'
import { Mail, Linkedin, Github } from 'lucide-react'

const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" {...props}>
    <path d="M8.2 5c1.8 0 3 .6 3.7 1.8.4.6.6 1.4.6 2.3 0 1.6-.7 2.7-2 3.1 1.6.4 2.4 1.7 2.4 3.5 0 .9-.2 1.7-.7 2.4-.7 1.1-2 1.9-4.2 1.9H2V5h6.2zm-2.4 6h2.2c.6 0 1.1-.1 1.4-.4.3-.3.4-.7.4-1.2s-.1-.8-.4-1.1c-.3-.3-.8-.4-1.4-.4H5.8v3.1zm0 5.6h2.4c.7 0 1.2-.1 1.5-.4.3-.3.5-.8.5-1.3s-.2-.9-.5-1.2c-.3-.3-.8-.4-1.5-.4H5.8v3.3zm13.1-6.1c1.8 0 3 .7 3.6 2 .4.7.5 1.5.5 2.5H15.6c0 1.1.3 1.9.9 2.4.6.5 1.3.8 2.3.8 1.4 0 2.2-.6 2.5-1.8h2.3c-.4 2.1-2.1 3.8-4.8 3.8-2 0-3.6-.6-4.6-1.8-1-1.2-1.5-2.8-1.5-4.8 0-2 1.5-5.9 6.2-5.9zm-2.2 4h4.3c-.1-.7-.3-1.3-.8-1.6-.4-.4-1-.6-1.5-.6s-1.1.2-1.5.6c-.3.3-.5.9-.5 1.6zm.9-6.9h3.3v.9h-3.3v-.9z"/>
  </svg>
)

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
    icon: Mail,
    label: 'Email',
    value: 'hilwan1.dd@gmail.com',
    href: 'mailto:hilwan1.dd@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/mohhilwan',
    href: 'https://linkedin.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/hilwan1',
    href: 'https://github.com/hilwan1',
  },
  {
    icon: BehanceIcon,
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
                      <item.icon className="w-5 h-5" />
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
                    <option value="fullstack">Full-Stack Web Application</option>
                    <option value="frontend">Front-End Development</option>
                    <option value="backend">Back-End / API Development</option>
                    <option value="uiux">UI/UX Design for Web</option>
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
