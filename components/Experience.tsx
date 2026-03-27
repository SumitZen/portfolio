'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    year: '2025',
    title: 'Building Linkzy (SaaS)',
    description: 'Developing a link-in-bio platform with Next.js and TypeScript.',
  },
  {
    year: '2025',
    title: 'Building Div Cam (Android)',
    description: 'Creating a camera app with tactile UI and cinematic filters.',
  },
  {
    year: '2024',
    title: 'Launched YouTube Channel',
    description: 'Started content creation about web development and tech.',
  },
  {
    year: '2024',
    title: 'Started B.Tech Computer Science',
    description: 'Began undergraduate studies in Lucknow.',
  },
  {
    year: '2023',
    title: 'Started Self-Learning Web Development',
    description: 'Began journey into frontend and backend technologies.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-12">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-jp text-[var(--text-secondary)] text-[10px] tracking-[0.3em] uppercase mb-4 block">
            経歴 / CHRONOLOGY
          </span>
          <h2 className="text-[var(--text-primary)] font-display font-bold text-[clamp(2.5rem,5vw,4rem)] tracking-tight leading-none">
            The <span className="text-[var(--accent)]">Journey</span>.
          </h2>
        </motion.div>

        <div className="relative pl-8 sm:pl-0">
          {/* Vertical Line */}
          <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.1)] to-transparent hidden sm:block" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-0 ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              >
                {/* Desktop Connection Line/Dot */}
                <div className="absolute left-1/2 -ml-[4px] w-2 h-2 bg-[var(--accent)] rounded-full hidden sm:block z-10" />

                {/* Mobile Dot */}
                <div className="absolute left-0 -ml-[4px] w-2 h-2 bg-[var(--accent)] rounded-full sm:hidden z-10" />

                <div className={`sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-16 sm:text-right' : 'sm:pl-16 sm:text-left'}`}>
                  <span className="font-mono text-[11px] tracking-[0.2em] text-[var(--accent)] uppercase mb-2 block">
                    {exp.year}
                  </span>
                  <h3 className="text-[var(--text-primary)] font-display font-bold text-xl mb-3 tracking-tight">
                    {exp.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] font-body text-[15px] leading-relaxed max-w-md ml-auto mr-0">
                    {exp.description}
                  </p>
                </div>
                <div className="sm:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}