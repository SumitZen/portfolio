'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'CSS Modules', 'GSAP'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Firebase'],
  },
  {
    category: 'Mobile',
    skills: ['Kotlin', 'CameraX', 'Jetpack Compose', 'Android Studio'],
  },
  {
    category: 'Tools',
    skills: ['Figma', 'Git', 'GitHub', 'VS Code', 'Vercel'],
  },
  {
    category: 'AI Tools',
    skills: ['Midjourney', 'Kling AI', 'Veo 3', 'Runway', 'ChatGPT'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-12">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-jp text-[var(--text-secondary)] text-[10px] tracking-[0.3em] uppercase mb-4 block">
            スキル / CAPABILITIES
          </span>
          <h2 className="text-[var(--text-primary)] font-display font-bold text-[clamp(2.5rem,5vw,4rem)] tracking-tight leading-none">
            Technical <span className="text-[var(--accent)]">Stack</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              className="bg-[var(--surface)] border border-[rgba(255,255,255,0.04)] rounded-[16px] p-8 hover:border-[rgba(255,255,255,0.08)] transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: catIndex * 0.1 }}
            >
              <h3 className="text-[var(--text-primary)] font-display font-bold text-xl mb-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full" />
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[10px] tracking-[0.1em] text-[var(--text-secondary)] px-3 py-1.5 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-[6px] hover:text-[var(--text-primary)] hover:border-[rgba(255,255,255,0.1)] transition-all duration-300 uppercase"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}