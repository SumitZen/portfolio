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
    const email = 'hello@sumit.dev'
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    } catch {
      // no-op
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-[#4a4540] font-jp text-0.65rem letter-spacing-0.2em mb-4 block">
            連絡
          </div>
          <h2 className="text-[#e8e0d4] font-display font-semibold italic text-[clamp(2.8rem,5vw,4.5rem)] -tracking-[0.01em]">
            Let&apos;s <span className="text-[#c0392b]">Connect</span>
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
            <p className="text-[#8a8078] font-body line-height-1.7 mb-8">
              I&apos;m always interested in new opportunities and collaborations. Whether you have a project in mind or just want to chat about tech, feel free to reach out.
            </p>
            <div className="flex items-center mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse" />
              <span className="text-[#8a8078] font-mono text-0.72rem">
                ⚡ Responds within 24hrs
              </span>
            </div>
            <div className="mb-8 relative">
              <p className="text-[#e8e0d4] font-body font-500 mb-1">Email</p>
              <p
                className={`font-mono text-0.9rem cursor-pointer transition-colors ${
                  copied ? 'text-[#c0392b]' : 'text-[#8a8078] hover:text-[#e8e0d4]'
                }`}
                onClick={copyEmail}
              >
                hello@sumit.dev
              </p>
              {copied && (
                <span className="absolute top-0 left-0 -translate-y-6 text-[#c0392b] font-mono text-0.75rem">
                  コピー済み ✓
                </span>
              )}
            </div>
            <div>
              <p className="text-[#e8e0d4] font-body font-500 mb-4">Follow me</p>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="text-[#8a8078] hover:text-[#c0392b] transition-colors duration-200"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-transparent border-0 border-b border-[rgba(255,255,255,0.1)] pb-3 text-[#e8e0d4] font-body focus:border-[#c0392b] transition-colors duration-200 placeholder-[#4a4540]"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-0 border-b border-[rgba(255,255,255,0.1)] pb-3 text-[#e8e0d4] font-body focus:border-[#c0392b] transition-colors duration-200 placeholder-[#4a4540]"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-transparent border-0 border-b border-[rgba(255,255,255,0.1)] pb-3 text-[#e8e0d4] font-body focus:border-[#c0392b] transition-colors duration-200 placeholder-[#4a4540] resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#c0392b] text-[#e8e0d4] py-3 rounded-0.5 font-display font-semibold text-0.85rem hover:bg-[#a93226] transition-colors duration-200"
              >
                送信 / Send Message →
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}