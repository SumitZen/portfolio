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
    <section id="experience" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-[#4a4540] font-jp text-0.65rem letter-spacing-0.2em mb-4 block">
            経歴
          </div>
          <h2 className="text-[#e8e0d4] font-display font-semibold italic text-[clamp(2.8rem,5vw,4.5rem)] -tracking-[0.01em]">
            Journey
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.1)] to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative flex items-start mb-12 pl-16 max-w-[700px] mx-auto"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
            >
              <div className="absolute left-0 w-3 h-3 bg-[#c0392b] rounded-full -translate-x-1.5" />
              <div className="flex-1">
                <div className="text-[#c0392b] font-mono text-0.75rem mb-1">
                  {exp.year}
                </div>
                <div className="text-[#e8e0d4] font-body font-500 text-1rem mb-1">
                  {exp.title}
                </div>
                <div className="text-[#8a8078] font-body text-0.9rem">
                  {exp.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}