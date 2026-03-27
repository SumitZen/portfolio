'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    id: 'linkzy',
    tag: '案件 01',
    title: 'Linkzy',
    description: 'A sophisticated, typography-first link-in-bio platform for creators who demand elegance. One link — your entire identity.',
    stack: ['Next.js', 'TypeScript', 'CSS Modules', 'Vercel'],
    status: '完成',
    image: '/projects/linkzy.png',
    live: 'https://linkzy-app.vercel.app/',
    featured: true,
  },
  {
    id: 'scriptai',
    tag: '案件 02',
    title: 'ScriptAI',
    description: 'AI-powered script generator that engineers retention-first narratives for creators and the viral economy.',
    stack: ['Next.js', 'OpenAI', 'TypeScript', 'Vercel'],
    status: '完成',
    image: '/projects/scriptai.png',
    live: 'https://scriptai-viral-script-generator.vercel.app/',
    featured: false,
  },
  {
    id: 'portfolio',
    tag: '案件 03',
    title: 'Portfolio',
    description: 'This very site — a Japanese-editorial, dark-mode portfolio showcasing both my Developer and AI Artist identities.',
    stack: ['Next.js', 'Framer Motion', 'TypeScript', 'Vercel'],
    status: '開発中',
    image: '/projects/portfolio.png',
    live: 'https://sumit-nyx.vercel.app/',
    featured: false,
  },
]

export default function Projects() {
  const featured = projects[0]
  const rest = projects.slice(1)

  return (
    <section id="work" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-12">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-jp text-[var(--text-secondary)] text-[10px] tracking-[0.3em] uppercase mb-4 block">
            作品 / SELECTED WORKS
          </span>
          <h2 className="text-[var(--text-primary)] font-display font-bold text-[clamp(2.5rem,5vw,4rem)] tracking-tight leading-none">
            Digital <span className="text-[var(--accent)]">Craftsmanship</span>.
          </h2>
        </motion.div>

        {/* Featured Project */}
        <motion.a
          href={featured.live}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="project"
          className="group relative mb-12 bg-[var(--surface)] border border-[rgba(255,255,255,0.04)] rounded-[24px] overflow-hidden hover:border-[rgba(255,255,255,0.08)] transition-all duration-700 block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Screenshot */}
            <div className="relative h-[400px] lg:h-auto overflow-hidden bg-[#0a0a0a]">
              <img
                src={featured.image}
                alt={`${featured.title} screenshot`}
                className="absolute inset-0 w-full h-full object-cover object-top transform group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--surface)] opacity-60 pointer-events-none" />
            </div>
            {/* Info */}
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--accent)] uppercase mb-6 block">
                {featured.tag} — FEATURED
              </span>
              <h3 className="text-[var(--text-primary)] font-display font-bold text-4xl mb-6 tracking-tight">
                {featured.title}
              </h3>
              <p className="text-[var(--text-secondary)] font-body text-lg leading-relaxed mb-8 max-w-md">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {featured.stack.map((tech) => (
                  <span key={tech} className="font-mono text-[9px] tracking-[0.1em] text-[var(--text-secondary)] px-3 py-1.5 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-md uppercase">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-[var(--text-primary)] font-mono text-[11px] tracking-widest uppercase group-hover:translate-x-1 transition-transform duration-300 w-fit">
                <span>LIVE SITE</span>
                <span>↗</span>
              </div>
            </div>
          </div>
        </motion.a>

        {/* Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rest.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="project"
              className="group relative bg-[var(--surface)] border border-[rgba(255,255,255,0.04)] rounded-[24px] overflow-hidden hover:border-[rgba(255,255,255,0.08)] transition-all duration-700 block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.2 }}
            >
              {/* Screenshot */}
              <div className="h-64 relative overflow-hidden bg-[#0a0a0a]">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="absolute inset-0 w-full h-full object-cover object-top transform group-hover:scale-[1.04] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--surface)] opacity-60 pointer-events-none" />
              </div>
              {/* Info */}
              <div className="p-10">
                <span className="font-mono text-[9px] tracking-[0.3em] text-[var(--text-secondary)] uppercase mb-4 block">
                  {project.tag}
                </span>
                <h4 className="text-[var(--text-primary)] font-display font-bold text-2xl mb-4 tracking-tight">
                  {project.title}
                </h4>
                <p className="text-[var(--text-secondary)] font-body text-[15px] leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech) => (
                    <span key={tech} className="font-mono text-[8px] tracking-[0.1em] text-[var(--text-secondary)] px-2 py-1 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] rounded-sm uppercase">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-[rgba(255,255,255,0.03)]">
                  <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] font-mono text-[10px] tracking-widest transition-colors">
                    LIVE SITE ↗
                  </span>
                  <div className={`w-1.5 h-1.5 rounded-full ${project.status === '完成' ? 'bg-emerald-500' : 'bg-[var(--accent)] animate-pulse'}`} title={project.status} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}