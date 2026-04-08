import { notFound } from 'next/navigation'
import Link from 'next/link'
import { projects, categoryMeta } from '@/lib/projects'
import styles from './page.module.css'
import { Metadata } from 'next'
import ProjectGallery from '@/components/ProjectGallery'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export function generateStaticParams() {
  return projects.map((p) => ({
    id: p.id.toString(),
  }))
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const project = projects.find((p) => p.id.toString() === params.id)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} — Portfolio Mohammad Hilwan`,
    description: project.description,
  }
}

export default async function ProjectDetail(props: PageProps) {
  const params = await props.params;
  const project = projects.find((p) => p.id.toString() === params.id)

  if (!project) return notFound()

  const meta = categoryMeta[project.category]
  const images = project.gallery?.length ? project.gallery : [project.image]

  return (
    <main className={styles.container}>
      <Link href="/projects" className={styles.backBtn}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to Projects
      </Link>

      <div className={styles.header}>
        <h1 className={styles.title}>{project.title}</h1>
        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <i className={meta.icon} style={{ color: meta.color }} aria-hidden="true" />
            {meta.label}
          </span>
          <span className={styles.metaItem}>📅 {project.year}</span>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        {/* Sticky Text Side */}
        <div className={styles.textContent}>
          <div>
            <h2 className={styles.descriptionTitle}>Project Overview</h2>
            <p className={styles.description}>{project.description}</p>
          </div>
          
          <div>
            <h3 className={styles.descriptionTitle}>Technologies Used</h3>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
          
          <div className={styles.projectAction}>
            <Link href="/contact" className={`btn btn-primary ${styles.visitBtn}`}>
              Hubungi Saya
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Interactive Gallery Side */}
        <ProjectGallery images={images} title={project.title} />
      </div>
    </main>
  )
}
