'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/lib/projects'

interface Props {
  project: Project
  index?:  number
}

export default function ProjectCard({ project, index = 0 }: Props) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transformStyle, setTransformStyle] = useState('')

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const maxTilt = 8 // Maksimal kemiringan dalam derajat
    const rotateX = ((centerY - y) / centerY) * maxTilt
    const rotateY = ((x - centerX) / centerX) * maxTilt

    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`)
  }

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group cursor-pointer animate-fadeUp opacity-0"
      style={{
        animationDelay: `${index * 100}ms`,
        animationFillMode: 'forwards',
        transform: transformStyle,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.15s ease-out', // Transisi halus saat miring-miring
      }}
    >
      <Link href={`/projects/${project.id || '#'}`} className="block h-full flex flex-col p-4 md:p-5 rounded-[2rem] bg-[#111111] border border-neutral-800 hover:border-neutral-600 transition-all duration-300">
        <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6" style={{ transform: 'translateZ(20px)' }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="flex-1 flex flex-col px-2" style={{ transform: 'translateZ(10px)' }}>
          <h3 className="text-xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
          <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-neutral-800">
            {project.tags.slice(0, 3).map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full bg-[#1a1a1a] text-[11px] font-semibold text-neutral-300 tracking-wider">
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-3 py-1 rounded-full bg-[#1a1a1a] text-[11px] font-semibold text-neutral-500 tracking-wider">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  )
}
