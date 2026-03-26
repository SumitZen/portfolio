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
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-[#4a4540] font-jp text-0.65rem letter-spacing-0.2em mb-4 block">
            スキル
          </div>
          <h2 className="text-[#e8e0d4] font-display font-semibold italic text-[clamp(2.8rem,5vw,4.5rem)] -tracking-[0.01em]">
            Stack
          </h2>
        </motion.div>

        <div className="space-y-8">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              className="flex flex-col md:flex-row items-start md:items-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: catIndex * 0.1 }}
            >
              <div className="text-[#e8e0d4] font-display font-semibold italic text-1.3rem min-w-36 mb-4 md:mb-0">
                {cat.category}
              </div>
              <div className="w-px h-4 bg-[rgba(255,255,255,0.08)] mx-6 hidden md:block" />
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="text-[#8a8078] font-mono text-0.72rem px-3 py-1.5 border border-[rgba(255,255,255,0.08)] rounded-0.5 hover:border-[rgba(192,57,43,0.4)] hover:text-[#e8e0d4] transition-all duration-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: catIndex * 0.1 + skillIndex * 0.08 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 bg-[rgba(192,57,43,0.05)] border border-[rgba(192,57,43,0.12)] rounded-lg p-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        >
          <div className="text-[#4a4540] font-mono text-0.6rem letter-spacing-0.15em uppercase mb-3">
            現在学習中
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-[#8a8078] font-mono text-0.72rem px-3 py-1.5 border border-[rgba(255,255,255,0.08)] rounded-0.5">
              Japanese N5 🇯🇵
            </span>
            <span className="text-[#8a8078] font-mono text-0.72rem px-3 py-1.5 border border-[rgba(255,255,255,0.08)] rounded-0.5">
              Razorpay
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}