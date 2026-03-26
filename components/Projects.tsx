'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    id: 'linkzy',
    tag: '案件 01',
    title: 'Linkzy',
    description: 'A link-in-bio SaaS platform. One link, everything you are.',
    stack: ['Next.js', 'TypeScript', 'CSS Modules', 'Vercel'],
    status: '開発中',
    links: { github: '#', preview: '#' },
    featured: true,
  },
  {
    id: 'divcam',
    tag: '案件 02',
    title: 'Div Cam',
    description: 'Android camera app with tactile dial UI and cinematic LUT filters.',
    stack: ['Kotlin', 'CameraX', 'Jetpack Compose'],
    status: '開発中',
    links: { github: '#', preview: '#' },
    featured: false,
  },
  {
    id: 'neo-tactile',
    tag: '案件 03',
    title: 'Neo-Tactile UI',
    description: 'Pixel-accurate HTML/CSS recreation of a glassmorphism UI kit.',
    stack: ['HTML', 'CSS'],
    status: '完成',
    links: { github: '#', preview: '#' },
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-[#4a4540] font-jp text-0.65rem letter-spacing-0.2em mb-4 block">
            作品
          </div>
          <h2 className="text-[#e8e0d4] font-display font-semibold italic text-[clamp(2.8rem,5vw,4.5rem)] -tracking-[0.01em]">
            Selected Works
          </h2>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          data-cursor="project"
          className="mb-12 h-125 border border-[rgba(255,255,255,0.06)] rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
            <div className="lg:col-span-3 bg-gradient-to-br from-[#0f0e1a] via-[#1a1535] to-[#0c0b14] relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-32 h-20 bg-white rounded-lg transform rotate-12" />
                <div className="absolute top-1/2 right-1/4 w-24 h-16 bg-white rounded-lg transform -rotate-6" />
                <div className="absolute bottom-1/4 left-1/2 w-28 h-18 bg-white rounded-lg transform rotate-3" />
              </div>
            </div>
            <div className="lg:col-span-2 p-12 bg-[#0c0b09] border-l border-[rgba(255,255,255,0.06)]">
              <div className="text-[#c0392b] font-mono text-0.6rem mb-4">
                {projects[0].tag}
              </div>
              <h3 className="text-[#e8e0d4] font-display font-bold text-2.8rem mb-4">
                {projects[0].title}
              </h3>
              <p className="text-[#8a8078] font-body line-height-1.7 mb-6">
                {projects[0].description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[0].stack.map((tech) => (
                  <span key={tech} className="text-[#8a8078] font-mono text-0.72rem px-3 py-1 border border-[rgba(255,255,255,0.08)] rounded-0.5">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center mb-6">
                <div className="w-2 h-2 bg-[#c0392b] rounded-full mr-2 animate-pulse" />
                <span className="text-[#8a8078] font-mono text-0.6rem">
                  {projects[0].status}
                </span>
              </div>
              <div className="flex space-x-4">
                <Link href={projects[0].links.github} className="text-[#8a8078] hover:text-[#e8e0d4] font-mono text-0.7rem">
                  GitHub ↗
                </Link>
                <Link href={projects[0].links.preview} className="text-[#8a8078] hover:text-[#e8e0d4] font-mono text-0.7rem">
                  Preview ↗
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.id}
              data-cursor="project"
              className="h-96 border border-[rgba(255,255,255,0.06)] rounded-lg overflow-hidden hover:border-[rgba(255,255,255,0.08)] transition-all duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.2 }}
            >
              <div className={`h-full ${project.id === 'divcam' ? 'bg-gradient-to-br from-[#0a1628] to-[#0d2040]' : 'bg-gradient-to-br from-[#1a0a2e] to-[#250d40]'} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                  {project.id === 'divcam' ? (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border border-[rgba(255,255,255,0.1)]" />
                      <div className="absolute inset-[12px] rounded-full border border-[rgba(255,255,255,0.1)]" />
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-2">
                        {Array.from({ length: 9 }).map((_, i) => (
                          <div key={i} className="w-[40px] h-[40px] bg-[rgba(255,255,255,0.08)] rounded-lg" />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="text-[#c0392b] font-mono text-0.6rem mb-2">
                    {project.tag}
                  </div>
                  <h4 className="text-[#e8e0d4] font-display font-bold text-1.8rem mb-2">
                    {project.title}
                  </h4>
                  <p className="text-[#8a8078] font-body text-0.9rem line-height-1.6 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.stack.map((tech) => (
                      <span key={tech} className="text-[#8a8078] font-mono text-0.65rem px-2 py-1 border border-[rgba(255,255,255,0.08)] rounded-0.5">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center mb-4">
                    <div className={`w-2 h-2 rounded-full mr-2 ${project.status === '完成' ? 'bg-green-500' : 'bg-[#c0392b] animate-pulse'}`} />
                    <span className="text-[#8a8078] font-mono text-0.6rem">
                      {project.status}
                    </span>
                  </div>
                  <div className="flex space-x-3">
                    <Link href={project.links.github} className="text-[#8a8078] hover:text-[#e8e0d4] font-mono text-0.7rem">
                      GitHub ↗
                    </Link>
                    <Link href={project.links.preview} className="text-[#8a8078] hover:text-[#e8e0d4] font-mono text-0.7rem">
                      Preview ↗
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}