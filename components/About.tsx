'use client'

import { motion } from 'framer-motion'

const infoCards = [
  {
    label: 'LOCATION',
    value: 'Lucknow, India',
    sub: '🇮🇳 UTC +5:30',
  },
  {
    label: 'EDUCATION',
    value: 'B.Tech CS, 2nd Year',
    sub: 'Lucknow',
  },
  {
    label: '学習中',
    value: 'Japanese 🇯🇵 N5',
    sub: 'Enrolled at institute',
  },
  {
    label: 'FUN FACT',
    value: 'Genshin addict 🎮',
    sub: 'Aspiring cat dad 🐱',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-[#4a4540] font-jp text-0.65rem letter-spacing-0.2em mb-4 block">
            私について
          </div>
          <h2 className="text-[#e8e0d4] font-display font-semibold italic text-[clamp(2.8rem,5vw,4.5rem)] -tracking-[0.01em]">
            About
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <blockquote className="text-[#e8e0d4] font-display font-light italic text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.3] mb-6">
              &quot;I don&apos;t wait for <span className="text-[#c0392b] font-semibold italic">permission</span> to build.&quot;
            </blockquote>
            <p className="text-[#8a8078] font-body text-[clamp(0.9rem,1.4vw,1rem)] leading-[1.75] mb-6">
              Self-driven CS student based in Lucknow. I go deep on the things I care about — web development, Android apps, Japanese culture, and building in public.
            </p>
            <div className="ink-divider mb-6" />
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#c0392b] rounded-full mr-3 animate-pulse" />
              <span className="text-[#8a8078] font-mono text-0.72rem">Available for freelance</span>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-3">
              {infoCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  className="bg-[#141210] border border-[rgba(255,255,255,0.05)] rounded-lg p-5 hover:border-[rgba(255,255,255,0.1)] hover:bg-[#161412] transition-all duration-200"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 + index * 0.08 }}
                >
                  <div className="text-[#4a4540] font-mono text-0.6rem letter-spacing-0.15em uppercase mb-2">
                    {card.label}
                  </div>
                  <div className="text-[#e8e0d4] font-body font-500 text-0.9rem mb-1">
                    {card.value}
                  </div>
                  <div className="text-[#8a8078] font-body text-0.8rem">
                    {card.sub}
                  </div>
                </motion.div>
              ))}
              <motion.div
                className="col-span-2 bg-[rgba(192,57,43,0.05)] border border-[rgba(192,57,43,0.12)] rounded-lg p-5"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 + 4 * 0.08 }}
              >
                <div className="text-[#4a4540] font-mono text-0.6rem letter-spacing-0.15em uppercase mb-2">
                  PHILOSOPHY
                </div>
                <div className="text-[#e8e0d4] font-display font-light italic text-1.1rem line-height-1.4">
                  &quot;Code is poetry, debugging is therapy.&quot;
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}