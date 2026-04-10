import Image from 'next/image'
import Link from 'next/link'
import styles from './links.module.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Links | Mohammad Hilwan',
  description: 'Temukan semua tautan untuk memesan layanan, melihat portofolio, dan menghubungi Mohammad Hilwan.',
  openGraph: {
    title: 'Links | Mohammad Hilwan',
    description: 'Temukan semua tautan untuk memesan layanan, melihat portofolio, dan menghubungi Mohammad Hilwan.',
    images: ['/foto-hero.jpeg'],
  },
}

export default function LinksPage() {
  const linkItems = [
    {
      title: 'ORDER (WhatsApp)',
      url: 'https://wa.me/6283865157423',
      icon: 'fa-solid fa-cart-shopping',
      primary: true
    },
    {
      title: 'PORTFOLIO',
      url: 'https://drive.google.com/file/d/18hPz3Wdp19p5zqgpnmIG3qLEccQv_pwF/view?usp=sharing',
      iconText: 'P',
    },
    {
      title: 'FASTWORK',
      url: 'https://fastwork.id/user/mohhilwan',
      icon: 'fa-solid fa-bolt',
    },
    {
      title: 'FIVERR',
      url: 'https://www.fiverr.com/mohhilwan',
      iconText: 'fi',
      iconClass: 'fa-solid fa-f'
    }
  ]

  return (
    <section className={styles.linksSection}>
      <div className={styles.linksContainer}>
        {/* Profile Area */}
        <div className={styles.profileArea}>
          <div className={styles.profileImageWrap}>
            <Image 
              src="/foto-hero.jpeg"
              alt="Mohammad Hilwan"
              fill
              className={styles.profileImage}
            />
          </div>
          <h1 className={styles.name}>Mohammad Hilwan</h1>
          <p className={styles.bio}>oneproject | Logo Designer & Web Developer</p>
          
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/onedesignnn" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/mohhilwan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Links Area */}
        <div className={styles.linksWrapper}>
          {linkItems.map((item, index) => (
            <a 
              key={index} 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${styles.linkCard} ${item.primary ? styles.linkCardPrimary : ''} animate-fadeUp`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className={styles.linkIconWrap}>
                {item.icon ? (
                  <i className={`${item.icon} ${styles.linkIcon}`}></i>
                ) : item.iconClass ? (
                  <i className={`${item.iconClass} ${styles.linkIcon}`}></i>
                ) : (
                  <span className={styles.iconText}>{item.iconText}</span>
                )}
              </div>
              <div className={styles.linkTitle}>{item.title}</div>
              <div className={styles.linkSpacer}></div>
            </a>
          ))}
        </div>
        
        {/* Footer Area of the Links Page */}
        <div className={styles.linksFooter}>
          <Link href="/" className={styles.backLink}>
            <i className="fa-solid fa-arrow-left"></i> Back to Website
          </Link>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        footer { display: none !important; }
      `}} />
    </section>
  )
}
