import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import TestimonialsSlider from '@/components/TestimonialsSlider'
import FaqAccordion from '@/components/FaqAccordion'
import { projects, categoryMeta } from '@/lib/projects'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Mohammad Hilwan — Designer & Developer',
  description:
    'Selamat datang di portfolio Mohammad Hilwan — desainer dan developer kreatif yang menghadirkan solusi visual dan digital yang elegan.',
}

const featuredProjects = [...projects.filter((p) => p.featured)]
  .sort(() => 0.5 - Math.random())
  .slice(0, 4)

const marqueeItems = [
  'Web Development',
  'Logo Design',
  'UI/UX Design',
  'Poster Design',
  'Web Development',
  'Logo Design',
  'UI/UX Design',
  'Poster Design',
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero} aria-label="Introduction">
        <div className={`container ${styles.heroInner}`}>

          {/* Left Content */}
          <div className={styles.heroLeft}>
            <div className={`${styles.heroGreetingTransform} animate-fadeUp`}>
              Hello There!
              <span className={`${styles.transformHandle} ${styles.tl}`} />
              <span className={`${styles.transformHandle} ${styles.tr}`} />
              <span className={`${styles.transformHandle} ${styles.bl}`} />
              <span className={`${styles.transformHandle} ${styles.br}`} />
            </div>

            <h1 className={`${styles.heroTitle} animate-fadeUp animate-delay-1`}>
              I&apos;m{' '}
              <span className={styles.heroTitleAccent} aria-label="Mohammad Hilwan">
                {"Mohammad Hilwan".split('').map((char, index) => (
                  <span
                    key={index}
                    className={styles.nameLetter}
                    style={{ transitionDelay: `${index * 30}ms` }}
                    aria-hidden="true"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </span>,
            </h1>

            <p className={`${styles.heroSubtitle} animate-fadeUp animate-delay-2`}>
              I&apos;m a creative designer and developer with experience across multiple disciplines,
              building elegant digital experiences from code to canvas.
            </p>

            <div className={`${styles.heroCtas} animate-fadeUp animate-delay-3`}>
              <Link href="/projects" className={styles.projectsViewAllBtn} id="hero-view-portfolio">
                View My Portfolio
                <div className={styles.projectsViewAllIcon}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
              <Link href="/contact" className="btn btn-outline" id="hero-hire-me" style={{ borderRadius: 'var(--radius-full)' }}>
                Hire Me
              </Link>
            </div>

            {/* Skill badges
            <div className={`${styles.heroBadges} animate-fadeUp animate-delay-4`}>
              {Object.values(categoryMeta).map((m) => (
                <span key={m.label} className={styles.badge}>
                  <span className={styles.badgeDot} />
                  {m.label}
                </span>
              ))}
            </div> */}
          </div>

          {/* Right — Photo */}
          <div className={`${styles.heroRight} animate-fadeUp animate-delay-2`}>
            <div className={styles.heroPhotoWrap}>
              {/* DESKTOP: simple circle background */}
              <div className={styles.heroPhotoBg} />

              {/* DESKTOP: full photo */}
              <Image
                src="/foto-gue.png"
                alt="Mohammad Hilwan"
                width={1000}
                height={1300}
                priority
                className={styles.heroPhoto}
              />

              {/* MOBILE: pop-out effect — body inside circle */}
              <div className={styles.heroMobileCircle}>
                <div className={styles.heroMobileImgWrap}>
                  <Image
                    src="/foto-gue.png"
                    alt="Mohammad Hilwan"
                    fill
                    className={styles.heroMobileImgFill}
                    sizes="(max-width: 768px) 65vw, 0vw"
                    priority
                  />
                </div>
              </div>

              {/* MOBILE: pop-out effect — head above circle */}
              <div className={styles.heroMobileTopHalf}>
                <div className={styles.heroMobileImgWrap}>
                  <Image
                    src="/foto-gue.png"
                    alt=""
                    fill
                    className={styles.heroMobileImgFill}
                    sizes="(max-width: 768px) 65vw, 0vw"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Floating Pill Left */}
              <div className={`${styles.heroPill} ${styles.pillLeft}`}>
                Web Developer
                <svg className={styles.pillLeftArrow} width="20" height="20" viewBox="0 0 24 29" fill="#354433" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12l20-10-5 20L2 12z" />
                </svg>
              </div>

              {/* Floating Pill Right */}
              <div className={`${styles.heroPill} ${styles.pillRight}`}>
                Graphic Designer
                <svg className={styles.pillRightArrow} width="20" height="20" viewBox="0 0 24 24" fill="var(--clr-accent)" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12l20-10-5 20L2 12z" />
                </svg>
              </div>

              {/* Rotating HIRE ME badge */}
              <div className={styles.heroHireSpin}>
                <svg viewBox="0 0 100 100" width="110" height="110">
                  <defs>
                    <path id="hireCircle" d="M 50,50 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" />
                  </defs>
                  <circle cx="50" cy="50" r="42" fill="#354433" />
                  <text fill="white" fontSize="12.5" fontWeight="700" letterSpacing="2.8">
                    <textPath href="#hireCircle">HIRE ME •  HIRE ME • </textPath>
                  </text>
                  <circle cx="50" cy="50" r="14" fill="#e8b84b" />
                  <path d="M46 54 L54 46 M48 46 L54 46 L54 52" stroke="#1a1f15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE TICKER ── */}
      <div className={styles.marqueeSection} aria-hidden="true">
        <div className={styles.marqueeInner}>
          <div className={styles.marqueeTrack}>
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className={styles.marqueeItem}>
                {item}
                <span className={styles.marqueeSeparator}>✱</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── STATS ── */}
      <section className={styles.statsSection} aria-label="Statistics">
        <div className={`container ${styles.statsGrid}`}>
          {[
            { value: '350+', label: 'Projects Completed' },
            { value: '5+',  label: 'Years Experience'   },
            { value: '300+', label: 'Happy Clients'       },
            { value: '6',   label: 'Web Completed'  },
          ].map((s) => (
            <div key={s.label} className={styles.statCard}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className={styles.servicesSection} aria-label="Services I provide">
        <div className="container">
          <div className={styles.projectsHeaderWrap}>
            <div className={styles.projectsHeaderLeft}>
              <span className={styles.projectsLabel}>
                <span className={styles.projectsLabelLine}></span>
                Services
              </span>
              <h2 className={styles.aboutTitle} style={{ lineHeight: '1.2' }}>
              Services <span className={styles.aboutTitleAccent}>I Provide</span>
            </h2>
            </div>
            
            <Link href="/projects" className={styles.projectsViewAllBtn} id="home-view-all-services">
              View All Projects
              <div className={styles.projectsViewAllIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>

          <div className={styles.servicesGrid}>
            {(Object.entries(categoryMeta) as [string, typeof categoryMeta[keyof typeof categoryMeta]][]).map(([key, meta]) => (
              <div key={key} className={styles.serviceCard}>
                <div className={styles.serviceIconWrap}>
                  <i className={meta.icon} style={{ fontSize: '1.4rem', color: 'white' }}></i>
                </div>
                <h3 className={styles.serviceTitle}>{meta.label}</h3>
                <p className={styles.serviceDesc}>{meta.desc}</p>
                <Link href="/projects" className={styles.serviceLink}>
                  Learn more
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ── ABOUT ── */}
      <section className={styles.aboutSection} aria-label="About me">
        <div className={`container ${styles.aboutGrid}`}>
          {/* Left Image (Circular with Pills) */}
          <div className={styles.aboutImageCircleWrap}>
            <div className={styles.aboutCircleBg}>
              <div className={styles.aboutImageClip}>
                <Image
                  src="/foto-gue.png"
                  alt="Mohammad Hilwan"
                  fill
                  className={styles.aboutImageCircle}
                />
              </div>
            </div>
            
            {/* Top Half Unmasked (Allows head to pop out cleanly) */}
            <div className={styles.aboutImageTopHalf}>
               <div className={styles.aboutImageClip}>
                <Image
                  src="/foto-gue.png"
                  alt="Mohammad Hilwan"
                  fill
                  className={styles.aboutImageCircle}
                />
              </div>
            </div>
            
            {/* Overlapping Pills */}
            <div className={`${styles.aboutPill} ${styles.pillYellow}`} style={{ top: '55%', left: '20%' }}>UX/UI Design</div>
            <div className={`${styles.aboutPill} ${styles.pillGreen}`} style={{ top: '65%', left: '0%' }}>Mobile App Design</div>
            <div className={`${styles.aboutPill} ${styles.pillYellow}`} style={{ top: '65%', right: '10%' }}>Website Design</div>
            <div className={`${styles.aboutPill} ${styles.pillYellow}`} style={{ top: '78%', left: '5%' }}>Design System</div>
            <div className={`${styles.aboutPill} ${styles.pillGreen}`} style={{ top: '75%', left: '40%' }}>Prototype</div>
            <div className={`${styles.aboutPill} ${styles.pillGreen}`} style={{ top: '80%', right: '-8%' }}>Website Development</div>
            <div className={`${styles.aboutPill} ${styles.pillYellow}`} style={{ top: '90%', left: '25%' }}>Wireframe Design</div>
          </div>

          {/* Right Text */}
          <div className={styles.aboutText}>
            <span className="label">About Me</span>

            <h2 className={styles.aboutTitle}>
              Who is{' '}
              <span className={styles.aboutTitleAccent}>Mohammad Hilwan?</span>
            </h2>

            <p>
              Saya adalah seorang desainer dan developer berbasis di Indonesia, dengan keahlian
              lintas disiplin mencakup pengembangan web, desain logo, UI/UX, dan desain grafis.
            </p>

            <p>
              Saya percaya bahwa karya terbaik lahir dari pemahaman mendalam terhadap masalah,
              dipadukan dengan eksekusi teknis yang presisi dan intuisi visual yang tajam.
            </p>

            <div className={styles.aboutStats}>
              {[
                { num: '350+', label: 'Projects Completed' },
                { num: '300+', label: 'Happy Clients' },
                { num: '5+',  label: 'Years of Experience' },
                { num: '6',   label: 'Web Completed' },
              ].map((s) => (
                <div key={s.label} className={styles.aboutStatItem}>
                  <div className={styles.aboutStatNum}>{s.num}</div>
                  <div className={styles.aboutStatLabel}>{s.label}</div>
                </div>
              ))}
            </div>

            <div className={styles.aboutActions}>
              <a href="/cv-mohammad-hilwan.pdf" className="btn btn-primary" download>
                Download CV
              </a>
              <Link href="/projects" className="btn btn-outline">
                See My Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS / TOOLS ── */}
      <section className={styles.skillsSection} aria-label="My Skills">
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <span className={styles.skillsLabel}>
              <span className={styles.skillsLabelLine}></span>
              My Skills
            </span>
            <h2 className={styles.aboutTitle} style={{ lineHeight: '1.2' }}>
              <span className={styles.aboutTitleAccent}>Exploring the Skills</span>
              <br />
              Behind My Works
            </h2>
          </div>

          <div className={styles.skillsGrid}>
            {[
              { name: 'Figma', percent: '90%', type: 'icon', iconClass: 'fa-brands fa-figma', color: '#F24E1E' },
              { name: 'Photoshop', percent: '95%', type: 'adobe', text: 'Ps', color: '#31A8FF', bg: '#001E36' },
              { name: 'Illustrator', percent: '95%', type: 'adobe', text: 'Ai', color: '#FF9A00', bg: '#330000' },
              { name: 'Laravel', percent: '90%', type: 'icon', iconClass: 'fa-brands fa-laravel', color: '#FF2D20' },
              { name: 'CodeIgniter 4', percent: '89%', type: 'ci', text: 'CI', bg: '#EF4223', color: 'white' },
              { name: 'Next JS', percent: '65%', type: 'next', text: 'N' },
            ].map((tool) => (
              <div key={tool.name} className={styles.skillCard}>
                <div className={styles.skillPill}>
                  <div className={styles.skillIconWrap}>
                    {tool.type === 'icon' && (
                      <i className={tool.iconClass} style={{ color: tool.color, fontSize: '2.5rem' }}></i>
                    )}
                    {tool.type === 'adobe' && (
                      <div style={{ background: tool.bg, color: tool.color, borderRadius: '8px', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 600, fontFamily: 'Arial, sans-serif', letterSpacing: '-0.5px' }}>
                        {tool.text}
                      </div>
                    )}
                    {tool.type === 'next' && (
                      <div style={{ background: 'black', color: 'white', borderRadius: '50%', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', fontWeight: 800 }}>
                        {tool.text}
                      </div>
                    )}
                    {tool.type === 'ci' && (
                      <div style={{ background: tool.bg, color: tool.color, borderRadius: '50%', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', fontWeight: 800 }}>
                        {tool.text}
                      </div>
                    )}
                  </div>
                  <div className={styles.skillPercent}>{tool.percent}</div>
                </div>
                <div className={styles.skillName}>{tool.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE TICKER ── */}
      <div className={styles.marqueeSection} aria-hidden="true">
        <div className={styles.marqueeInner}>
          <div className={styles.marqueeTrack}>
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className={styles.marqueeItem}>
                {item}
                <span className={styles.marqueeSeparator}>✱</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── FEATURED PROJECTS ── */}
      <section className={styles.projectsSection} aria-label="Featured projects">
        <div className="container">
          <div className={styles.projectsHeaderWrap}>
            <div className={styles.projectsHeaderLeft}>
              <span className={styles.projectsLabel}>
                <span className={styles.projectsLabelLine}></span>
                My Portfolio
              </span>
              <h2 className={styles.aboutTitle}>
                My Latest <span className={styles.aboutTitleAccent}>Projects</span>
              </h2>
            </div>
            
            <Link href="/projects" className={styles.projectsViewAllBtn} id="home-all-projects">
              View All Projects
              <div className={styles.projectsViewAllIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>

          <div className={styles.projectsGrid}>
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION & WORK ── */}
      <section className={styles.resumeSection} aria-label="Education and Work Experience">
        <div className="container" style={{ padding: '0 1rem' }}>
          <div className={styles.resumeHeader}>
            <span className={styles.projectsLabel}>
              <span className={styles.projectsLabelLine}></span>
              Education &amp; Work
            </span>
            <h2 className={styles.aboutTitle} style={{ textAlign: 'center' }}>
              My <span className={styles.aboutTitleAccent}>Academic and</span>
              <br />
              <span className={styles.aboutTitleAccent}>Professional</span> Journey
            </h2>
          </div>

          <div className={styles.resumeGrid}>
            {/* Education Column */}
            <div className={styles.resumeColumn}>
              <div className={styles.resumeColHeader}>
                <div className={styles.resumeIconWrap}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <h3 className={styles.resumeColTitle}>Education</h3>
              </div>
              
              <div className={styles.resumeList}>
                <div className={styles.resumeItem}>
                  <div className={styles.resumeYear}>2017 - 2020</div>
                  <div className={styles.resumeTitle}>SMK Bina Insan Mulia</div>
                  <div className={styles.resumeDesc}>Broadcasting and Communication</div>
                </div>
                <div className={styles.resumeItem}>
                  <div className={styles.resumeYear}>2022 - 2025</div>
                  <div className={styles.resumeTitle}>Diploma of Informatics Engineering</div>
                  <div className={styles.resumeDesc}>University Logistics and Business International</div>
                </div>
              </div>
            </div>

            {/* Work Column */}
            <div className={styles.resumeColumn}>
              <div className={styles.resumeColHeader}>
                <div className={styles.resumeIconWrap}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                </div>
                <h3 className={styles.resumeColTitle}>Work Experience</h3>
              </div>
              
              <div className={styles.resumeList}>
                <div className={styles.resumeItem}>
                  <div className={styles.resumeYear}>2021 - NOW</div>
                  <div className={styles.resumeTitle}>onestudio.</div>
                  <div className={styles.resumeDesc}>Freelance Graphic Designer</div>
                </div>
                <div className={styles.resumeItem}>
                  <div className={styles.resumeYear}>2023 - 2023</div>
                  <div className={styles.resumeTitle}>PT. INTI</div>
                  <div className={styles.resumeDesc}>Intership Front end Web Developer</div>
                </div>
                <div className={styles.resumeItem}>
                  <div className={styles.resumeYear}>2025 - NOW</div>
                  <div className={styles.resumeTitle}>BBPMP Provinsi Jawa Barat</div>
                  <div className={styles.resumeDesc}>Internship IT & Web Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQS ── */}
      <section className={styles.faqSection} aria-label="Frequently Asked Questions">
        <div className="container" style={{ padding: '0 1rem' }}>
          <div className={styles.faqLabelWrap}>
            <span className={styles.faqLabelLine}></span>
            FAQs
          </div>
          <h2 className={styles.faqTitle}>
            Questions? <span className={styles.faqTitleAccent}>Look here.</span>
          </h2>

          <FaqAccordion />
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className={styles.testiSection} aria-label="Client Testimonials">
        <div className="container" style={{ padding: '0 1rem' }}>
          <div className={styles.testiHeader}>
            <span className={styles.projectsLabel}>
              <span className={styles.projectsLabelLine}></span>
              Clients Testimonials
            </span>
            <h2 className={styles.aboutTitle} style={{ textAlign: 'center' }}>
              The Impact of My Work:
              <br />
              <span className={styles.aboutTitleAccent}>Client Testimonials</span>
            </h2>
          </div>

          <TestimonialsSlider />
        </div>
      </section>

       {/* ── MARQUEE TICKER ── */}
      <div className={styles.marqueeSection} aria-hidden="true">
        <div className={styles.marqueeInner}>
          <div className={styles.marqueeTrack}>
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className={styles.marqueeItem}>
                {item}
                <span className={styles.marqueeSeparator}>✱</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA BANNER ── */}
      <section className={styles.ctaBanner} aria-label="Call to action">
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <p className={styles.ctaLabel}>My Vision &amp; Mission</p>
            <h2 className={styles.ctaTitle}>
              Punya proyek menarik?{' '}
              <span className={styles.ctaTitleAccent}>Mari berkolaborasi.</span>
            </h2>
            <p className={styles.ctaDesc}>
              Saya terbuka untuk proyek freelance, kolaborasi kreatif, dan peluang full-time.
            </p>
          </div>
          <Link href="/contact" className="btn btn-accent" id="home-cta-contact" style={{ flexShrink: 0 }}>
            Start a Conversation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
