import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/lib/projects'
import styles from './ProjectCard.module.css'

interface Props {
  project: Project
  index?:  number
}

export default function ProjectCard({ project, index = 0 }: Props) {
  return (
    <article
      className={styles.card}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <Link href={`/projects/${project.id || '#'}`} className={styles.cardLink}>
        {/* Image */}
        <div className={styles.imageWrap}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            className={styles.image}
          />
        </div>

        {/* Body */}
        <div className={styles.body}>
          {/* Tags */}
          <ul className={styles.tags} aria-label="Technologies used">
            {project.tags.slice(0, 3).map((tag) => (
              <li key={tag} className={styles.tag}>{tag}</li>
            ))}
          </ul>
          
          <div className={styles.titleRow}>
            <h3 className={styles.title}>{project.title}</h3>
            <div className={styles.arrowBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}

