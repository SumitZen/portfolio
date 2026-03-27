'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Youtube } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    const email = 'sumitbhalse121@gmail.com'
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    } catch {
      // no-op
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-12">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-jp text-[var(--text-secondary)] text-[10px] tracking-[0.3em] uppercase mb-4 block">
            連絡 / GET IN TOUCH
          </span>
          <h2 className="text-[var(--text-primary)] font-display font-bold text-[clamp(2.5rem,5vw,4rem)] tracking-tight leading-none">
            Let&apos;s Build <span className="text-[var(--accent)]">Together</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <motion.div
            className="lg:col-span-4 space-y-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <p className="text-[var(--text-secondary)] font-body text-lg leading-relaxed mb-8">
                Currently open to freelance opportunities, full-time roles, or just high-level technical discussions.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="font-mono text-[10px] tracking-[0.1em] text-[var(--text-primary)] uppercase">
                  ACTIVE & RESPONSIVE
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="group cursor-pointer" onClick={copyEmail}>
                <span className="block font-mono text-[9px] tracking-[0.2em] text-[var(--text-secondary)] uppercase mb-2">
                  Email
                </span>
                <span className={`text-xl font-display font-bold transition-colors duration-300 ${copied ? 'text-[var(--accent)]' : 'text-[var(--text-primary)] group-hover:text-[var(--accent)]'}`}>
                  sumitbhalse121@gmail.com
                </span>
                {copied && (
                  <motion.span 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="ml-4 font-jp text-[10px] text-[var(--accent)] tracking-widest"
                  >
                    コピー済み
                  </motion.span>
                )}
              </div>

              <div>
                <span className="block font-mono text-[9px] tracking-[0.2em] text-[var(--text-secondary)] uppercase mb-4">
                  Social Channels
                </span>
                <div className="flex gap-6">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300"
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5 stroke-[1.5px]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-8 p-12 bg-[var(--surface)] border border-[rgba(255,255,255,0.04)] rounded-[24px]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-mono text-[9px] tracking-[0.2em] text-[var(--text-secondary)] uppercase">Name</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-[rgba(255,255,255,0.1)] py-3 text-[var(--text-primary)] font-body focus:border-[var(--accent)] outline-none transition-all duration-300"
                    placeholder="E.g. Sumit Zen"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[9px] tracking-[0.2em] text-[var(--text-secondary)] uppercase">Email</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-[rgba(255,255,255,0.1)] py-3 text-[var(--text-primary)] font-body focus:border-[var(--accent)] outline-none transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[9px] tracking-[0.2em] text-[var(--text-secondary)] uppercase">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-[rgba(255,255,255,0.1)] py-3 text-[var(--text-primary)] font-body focus:border-[var(--accent)] outline-none transition-all duration-300 resize-none"
                  placeholder="What's on your mind?"
                />
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-[var(--text-primary)] text-[var(--bg)] rounded-[12px] font-bold text-[12px] tracking-[0.3em] uppercase hover:bg-[var(--accent)] hover:text-white transition-all duration-500 shadow-2xl"
              >
                Send Message / 伝言
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}