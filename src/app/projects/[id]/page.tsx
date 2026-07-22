import { notFound } from 'next/navigation'
import Link from 'next/link'
import { projects, categoryMeta } from '@/lib/projects'
import { Metadata } from 'next'
import ProjectGallery from '@/components/ProjectGallery'
import { ArrowLeft, Send, Layers, Code2, Server, ExternalLink } from 'lucide-react'

const iconMap = {
  layers: Layers,
  code: Code2,
  server: Server,
}

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
    <main className="w-full bg-[#0a0a0a] min-h-screen text-white pt-[calc(80px+4rem)] pb-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <Link href="/#projects" className="inline-flex items-center gap-2 mb-10 text-neutral-400 hover:text-white transition-colors group font-semibold text-sm">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#111111] border border-neutral-800 group-hover:border-neutral-500 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          </div>
          Kembali ke Karya
        </Link>

        <div className="relative mb-16 md:mb-24">
          <div className="absolute -top-12 -right-4 md:right-10 w-32 h-32 md:w-48 md:h-48 border border-white/5 rounded-[50%_45%_60%_35%] bg-[#ff5500] blur-3xl rotate-12 -z-10 opacity-30 animate-pulse"></div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-tighter leading-[1] mb-6 max-w-4xl">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 border border-neutral-800 rounded-full bg-[#111111] text-white px-4 py-2 font-mono text-xs font-semibold shadow-md">
              {(() => {
                const Icon = iconMap[meta.icon as keyof typeof iconMap]
                return Icon ? <Icon className="w-4 h-4" style={{ color: meta.color }} aria-hidden="true" /> : null
              })()}
              {meta.label}
            </span>
            <span className="inline-flex items-center border border-neutral-800 rounded-full bg-[#111111] text-neutral-400 px-4 py-2 font-mono text-xs font-semibold shadow-md">
              📅 {project.year}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start">
          {/* Text Content */}
          <div className="lg:sticky lg:top-[120px] flex flex-col gap-10">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#ff5500]"></span> Ringkasan Proyek
              </h2>
              <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#ffaa00]"></span> Teknologi Pilihan
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="border border-neutral-800 rounded-full bg-[#111111] text-neutral-300 px-4 py-2 font-mono text-xs font-semibold shadow-sm hover:border-neutral-600 transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="pt-4 border-t border-neutral-900 flex flex-wrap gap-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white hover:bg-neutral-200 text-black px-8 py-4 rounded-full text-sm font-bold transition-all hover:-translate-y-1"
                >
                  Kunjungi Website <ExternalLink className="w-4 h-4" />
                </a>
              )}
              <Link href="/#contact" className="inline-flex items-center gap-3 bg-[#ff5500] hover:bg-[#e64d00] text-white px-8 py-4 rounded-full text-sm font-bold transition-all shadow-[0_0_30px_rgba(255,85,0,0.2)] hover:shadow-[0_0_40px_rgba(255,85,0,0.4)] hover:-translate-y-1">
                Hubungi Saya <Send className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Gallery */}
          <div className="w-full">
            <ProjectGallery images={images} title={project.title} />
          </div>
        </div>

      </div>
    </main>
  )
}
