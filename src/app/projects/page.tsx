'use client'

import { useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import { projects, categoryMeta, ProjectCategory } from '@/lib/projects'

type Filter = 'all' | ProjectCategory

const filters: { value: Filter; label: string; icon?: string }[] = [
  { value: 'all',       label: 'Semua Projek' },
  { value: 'fullstack', label: categoryMeta.fullstack.label, icon: categoryMeta.fullstack.icon },
  { value: 'frontend',  label: categoryMeta.frontend.label,  icon: categoryMeta.frontend.icon  },
  { value: 'backend',   label: categoryMeta.backend.label,   icon: categoryMeta.backend.icon   },
]

export default function ProjectsPage() {
  const [active, setActive] = useState<Filter>('all')

  const visible = active === 'all'
    ? projects
    : projects.filter((p) => p.category === active)

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-[calc(80px+4rem)] pb-24 overflow-x-hidden font-sans">
      
      {/* PAGE HEADER */}
      <section className="relative px-6 max-w-7xl mx-auto mb-16 md:mb-20">
        <div className="absolute top-0 right-10 w-48 h-48 md:w-64 md:h-64 border border-white/5 rounded-[50%_45%_60%_35%] bg-[#ff5500] blur-3xl rotate-12 -z-10 opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-10 left-10 w-32 h-32 border border-white/5 rounded-[40%_50%_30%_60%] bg-[#ffaa00] blur-2xl -rotate-12 -z-10 opacity-10"></div>
        
        <div className="max-w-4xl">
          <span className="inline-block px-4 py-1.5 rounded-full border border-neutral-800 bg-[#111111] text-xs font-bold tracking-widest text-[#ffaa00] mb-6 uppercase">
            Portfolio
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-6">
            Karya <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] to-[#ffaa00]">Terbaik</span> Saya
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Koleksi sistem dan aplikasi web terbaik yang saya bangun — dari perancangan arsitektur backend, manajemen database, hingga antarmuka pengguna yang responsif.
          </p>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="px-6 max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap items-center gap-3" role="tablist" aria-label="Project categories">
          {filters.map((f) => (
            <button
              key={f.value}
              role="tab"
              aria-selected={active === f.value}
              className={`px-5 py-2.5 rounded-full border font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                active === f.value 
                  ? 'bg-[#ff5500] border-[#ff5500] text-white shadow-[0_4px_15px_rgba(255,85,0,0.3)]' 
                  : 'bg-[#111111] border-neutral-800 text-neutral-400 hover:border-neutral-500 hover:text-white'
              }`}
              onClick={() => setActive(f.value)}
              id={`filter-${f.value}`}
            >
              {f.icon && <i className={f.icon} aria-hidden="true"></i>}
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="px-6 max-w-7xl mx-auto" aria-live="polite">
        <div className="flex justify-between items-center mb-8 border-b border-neutral-900 pb-4">
          <p className="text-neutral-400 text-sm">
            Menampilkan <strong className="text-white">{visible.length}</strong> proyek
            {active !== 'all' && <span className="text-[#ff5500]"> dalam {categoryMeta[active as ProjectCategory]?.label}</span>}
          </p>
        </div>

        {visible.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-[#111111] border border-neutral-800 rounded-[2.5rem]">
            <i className="fa-solid fa-folder-open text-5xl text-neutral-700 mb-4"></i>
            <p className="text-neutral-400 font-medium">Belum ada proyek di kategori ini.</p>
          </div>
        )}
      </section>
    </main>
  )
}
