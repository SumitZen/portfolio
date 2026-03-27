'use client'

import { motion } from 'framer-motion'

const infoCards = [
  {
    label: 'LOCATION',
    value: 'Bhopal, India 🇮🇳',
  },
  {
    label: 'EDUCATION',
    value: 'B.Tech CS, 2nd Year',
  },
  {
    label: '学習中',
    value: 'Japanese N5 🇯🇵',
  },
  {
    label: 'FUN FACT',
    value: 'Genius at Napping 💤',
  },
]

import { Sparkles } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-12">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-jp text-[var(--text-secondary)] text-[10px] tracking-[0.3em] uppercase mb-4 block">
            私について / BACKGROUND
          </span>
          <h2 className="text-[var(--text-primary)] font-display text-[clamp(2.5rem,5vw,4rem)] tracking-tight leading-none mb-8">
            The Philosophy of <span className="text-[var(--accent)]">Craft</span>.
          </h2>
          <div className="w-20 h-[1px] bg-[var(--accent)] opacity-30" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="space-y-6 text-[var(--text-secondary)] font-body text-[1rem] leading-[1.8] max-w-2xl font-normal">
              <p>
                Building for the web, Android, and creating AI-generated art from Bhopal, India.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-4 group cursor-default">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.2)] rounded-full">
                <div className="relative w-2 h-2">
                  <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-40" />
                  <div className="relative w-2 h-2 bg-emerald-500 rounded-full" />
                </div>
                <span className="font-mono text-[9px] tracking-[0.1em] text-emerald-500 uppercase font-medium">
                  Available
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            {infoCards.map((card, index) => (
              <div
                key={card.label}
                className="group relative bg-[var(--surface)] border border-[rgba(255,255,255,0.04)] rounded-[16px] p-6 hover:border-[rgba(255,255,255,0.08)] transition-all duration-500"
              >
                <span className="block font-mono text-[0.68rem] tracking-[0.12em] text-[#504840] uppercase mb-3 font-normal">
                  {card.label}
                </span>
                <p className="text-[#d8d0c8] font-body font-medium text-[0.95rem] leading-[1.5]">
                  {card.value}
                </p>
              </div>
            ))}
            
            {/* Philosophy Card */}
            <div className="bg-[var(--surface)] border border-[rgba(255,255,255,0.04)] rounded-[16px] p-6 transition-all duration-500">
              <span className="block font-mono text-[0.68rem] tracking-[0.12em] text-[#504840] uppercase mb-3 font-normal">
                PHILOSOPHY
              </span>
              <p className="text-[#8a8078] font-display italic text-lg leading-snug font-light">
                &quot;Code is poetry, debugging is therapy.&quot;
              </p>
            </div>

            {/* AI Artist Card */}
            <div className="bg-[var(--surface)] border border-[rgba(255,255,255,0.04)] rounded-[16px] p-6 transition-all duration-500">
              <div className="flex justify-between items-start mb-3">
                <span className="block font-mono text-[0.68rem] tracking-[0.12em] text-[#504840] uppercase font-normal">
                  AI アーティスト
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[#c0392b]" />
              </div>
              <p className="text-[#d8d0c8] font-body font-medium text-[0.95rem] leading-[1.5] mb-4">
                Cinematic Images & Videos
              </p>
              <div className="flex gap-2">
                {['MJ', 'KLING', 'VEO'].map(pill => (
                  <span key={pill} className="px-2 py-0.5 bg-[rgba(192,57,43,0.08)] border border-[rgba(192,57,43,0.15)] rounded-full font-mono text-[0.6rem] text-[#c0392b] uppercase">
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}