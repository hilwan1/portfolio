'use client'

import { useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import { projects, categoryMeta, ProjectCategory } from '@/lib/projects'
import styles from './page.module.css'

type Filter = 'all' | ProjectCategory

const filters: { value: Filter; label: string; icon?: string }[] = [
  { value: 'all',    label: 'All Projects' },
  { value: 'web',    label: categoryMeta.web.label,    icon: categoryMeta.web.icon    },
  { value: 'logo',   label: categoryMeta.logo.label,   icon: categoryMeta.logo.icon   },
  { value: 'uiux',   label: categoryMeta.uiux.label,   icon: categoryMeta.uiux.icon   },
  { value: 'poster', label: categoryMeta.poster.label, icon: categoryMeta.poster.icon },
]

export default function ProjectsPage() {
  const [active, setActive] = useState<Filter>('all')

  const visible = active === 'all'
    ? projects
    : projects.filter((p) => p.category === active)

  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className={styles.pageHeader}>
        <div className={styles.headerOrb1} aria-hidden="true" />
        <div className={styles.headerOrb2} aria-hidden="true" />

        <div className={`container ${styles.headerContent}`}>
          <span className="label">Portfolio</span>
          <h1 className={styles.pageTitle}>
            My <span className={styles.pageTitleAccent}>Projects</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Koleksi karya terbaik dari berbagai projek —
            dari kode hingga desain, setiap proyek bercerita.
          </p>
        </div>
      </section>



      {/* ── FILTER TABS ── */}
      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.filterBar} role="tablist" aria-label="Project categories">
            {filters.map((f) => (
              <button
                key={f.value}
                role="tab"
                aria-selected={active === f.value}
                className={`${styles.filterBtn} ${active === f.value ? styles.filterActive : ''}`}
                onClick={() => setActive(f.value)}
                id={`filter-${f.value}`}
              >
                {f.icon && <i className={f.icon} aria-hidden="true"></i>}
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS GRID ── */}
      <section className={styles.gridSection} aria-live="polite">
        <div className="container">
          <p className={styles.resultCount}>
            Showing <strong>{visible.length}</strong> project{visible.length !== 1 ? 's' : ''}
            {active !== 'all' && ` in ${categoryMeta[active as ProjectCategory]?.label}`}
          </p>

          {visible.length > 0 ? (
            <div className={styles.projectsGrid}>
              {visible.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              <i className="fa-solid fa-folder-open" style={{ fontSize: '3rem', opacity: 0.3 }}></i>
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
