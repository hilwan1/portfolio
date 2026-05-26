import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FloatingChat from '@/components/FloatingChat'
import TestimonialsSlider from '@/components/TestimonialsSlider'
import { projects } from '@/lib/projects'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Mohammad Hilwan - Designer & Developer',
  description:
    'Portfolio Mohammad Hilwan, designer dan developer yang membangun brand visual, poster, logo, dan website yang berani.',
}

const services = [
  {
    number: '01',
    title: 'Graphic Design',
    description: 'Editorial layout, social kit, merchandise, dan eksperimen visual yang punya karakter.',
    className: styles.lime,
  },
  {
    number: '02',
    title: 'Logo Design',
    description: 'Wordmark, monogram, dan identitas visual yang mudah diingat tanpa terasa generik.',
    className: styles.pink,
  },
  {
    number: '03',
    title: 'Poster Design',
    description: 'Poster print dan digital yang layered, loud, dan siap berhentiin scroll.',
    className: styles.purple,
  },
  {
    number: '04',
    title: 'Web Development',
    description: 'Website cepat, accessible, dan design-led dengan React, Next.js, Laravel, dan motion.',
    className: styles.orange,
  },
]

const marqueeItems = [
  'logo design',
  'poster design',
  'web development',
  'brand identity',
  'creative direction',
  'graphic design',
]

const workColors = [styles.pink, styles.purple, styles.lime, styles.orange]
const featuredWorks = projects.filter((project) => project.featured).slice(0, 4)

const tools = ['Figma', 'Illustrator', 'Photoshop', 'React', 'Tailwind', 'After Effects']

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  )
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8Z" />
      <path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8Z" />
    </svg>
  )
}

export default function HomePage() {
  return (
    <>
      <section className={styles.hero} aria-label="Introduction">
        <div className={styles.heroOrbit} aria-hidden="true">
          <svg viewBox="0 0 100 100">
            <path id="hero-circle" d="M50 50m-38 0a38 38 0 1 1 76 0a38 38 0 1 1-76 0" />
            <text>
              <textPath href="#hero-circle">portfolio 2026 - mohammad hilwan - </textPath>
            </text>
          </svg>
        </div>

        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <div className={styles.availability}>
              <span />
              available for freelance - q3 &apos;26
            </div>

            <h1 className={styles.heroTitle}>
              <span className={`${styles.titleLine} ${styles.titleLineNowrap}`}>
                hey, i&apos;m{' '}
                <span className={styles.nameHighlight}>
                  <span>Hilwan</span>
                </span>
              </span>
              <span className={`${styles.titleLine} ${styles.titleLineNowrap}`}>
                a designer<span className={styles.plus}>+</span>dev
              </span>
              <span className={styles.titleLine}>building</span>
              <span className={styles.titleLine}>
                <span className={styles.wavy}>loud</span> brands.
              </span>
            </h1>

            <p className={styles.heroText}>
              Logos, posters, graphics & websites with a gen-z punch. I help brands break the
              timeline and actually get remembered.
            </p>

            <div className={styles.heroActions}>
              <Link href="#work" className={styles.primaryButton}>
                see the work
                <ArrowIcon />
              </Link>
              <Link href="#about" className={styles.secondaryButton}>
                about me
              </Link>
            </div>

            <div className={styles.heroStats} aria-label="Portfolio statistics">
              <div>
                <strong>350+</strong>
                <span>projects shipped</span>
              </div>
              <div>
                <strong>6y</strong>
                <span>designing</span>
              </div>
              <div>
                <strong>oo</strong>
                <span>cups of coffee</span>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.pinkBlob} aria-hidden="true" />
            <div className={`${styles.sticker} ${styles.stickerTop}`}>creative coder</div>
            <div className={`${styles.sticker} ${styles.stickerBottom}`}>logo wizard</div>
            <div className={styles.photoCard}>
              <Image
                src="/foto-gue.png"
                alt="Mohammad Hilwan"
                width={820}
                height={980}
                priority
                className={styles.heroImage}
              />
              <div className={styles.cardTop}>
                <span>live</span>
                <span>04:20 PM</span>
              </div>
              <div className={styles.cardBottom}>
                <span>mohammad hilwan</span>
                <span>designer / dev</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`}>
              {item}
              <b>*</b>
            </span>
          ))}
        </div>
      </div>

      <section id="services" className={styles.section} aria-label="Services">
        <div className={styles.sectionHeader}>
          <h2>
            what i make<span>.</span>
          </h2>
          <p>/ services 04</p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <article key={service.title} className={`${styles.serviceCard} ${service.className}`}>
              <div className={styles.cardMeta}>
                <span>[ {service.number} ]</span>
                <ArrowIcon />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className={styles.section} aria-label="Selected work">
        <div className={styles.sectionHeader}>
          <h2>
            selected work<span className={styles.purpleDot}>.</span>
          </h2>
          <Link href="/projects">view archive</Link>
        </div>

        <div className={styles.workGrid}>
          {featuredWorks.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className={`${styles.workCard} ${workColors[index % workColors.length]}`}
            >
              <span className={styles.workNumber}>0{index + 1}</span>
              <h3>{project.title}</h3>
              <div>
                <span>{project.category}</span>
                <span>&apos;{String(project.year).slice(-2)}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="about" className={styles.about} aria-label="About Mohammad Hilwan">
        <div className={styles.aboutPhoto}>
          <div className={styles.aboutPhotoFrame}>
            <Image
              src="/foto-gue.png"
              alt="Mohammad Hilwan portrait"
              width={720}
              height={720}
              className={styles.aboutImage}
            />
          </div>
          <span>@hilwan</span>
        </div>

        <div className={styles.aboutCopy}>
          <p className={styles.kicker}>/ about me</p>
          <h2>
            a designer who codes - making brands look{' '}
            <span>unforgettable</span>.
          </h2>
          <p>
            I&apos;m Mohammad Hilwan, a multidisciplinary designer & developer mixing logos, posters,
            graphics, and the web into one big creative playground. Always chasing the weird, the
            loud, the iconic.
          </p>
          <div className={styles.toolList}>
            {tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.testiSection} aria-label="Client testimonials">
        <div className={styles.sectionHeader}>
          <h2>
            client words<span className={styles.purpleDot}>.</span>
          </h2>
          <p>/ testimonials 05</p>
        </div>
        <TestimonialsSlider />
      </section>

      <section id="contact" className={styles.contact} aria-label="Contact">
        <SparkleIcon />
        <SparkleIcon />
        <p>/ let&apos;s collab</p>
        <h2>
          got a wild idea<span>?</span>
        </h2>
        <p>Drop a line - I reply faster than your group chat.</p>
        <a href="mailto:hilwan1.dd@gmail.com" className={styles.emailButton}>
          hilwan1.dd@gmail.com
          <ArrowIcon />
        </a>
        <div className={styles.socialLinks}>
          <a href="https://instagram.com/onedesignnn" target="_blank" rel="noopener noreferrer">
            instagram
          </a>
          <a href="https://behance.net/mohammadhilwan" target="_blank" rel="noopener noreferrer">
            behance
          </a>
          <a href="https://github.com/hilwan1" target="_blank" rel="noopener noreferrer">
            github
          </a>
        </div>
      </section>

      <FloatingChat />
    </>
  )
}
