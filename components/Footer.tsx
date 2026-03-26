'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="border-t border-b border-[rgba(255,255,255,0.06)] h-[44px] overflow-hidden bg-[#080806]" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="marquee-row h-full flex items-center whitespace-nowrap text-[0.72rem] font-mono font-medium tracking-[0.18em]">
            <span className="text-[#8a8078]">AVAILABLE FOR FREELANCE</span>
            <span className="mx-3 text-[#c0392b]">〇</span>
            <span className="text-[#3a3530]">WEB DEVELOPMENT</span>
            <span className="mx-3 text-[#c0392b]">〇</span>
            <span className="text-[#3a3530]">ANDROID APPS</span>
            <span className="mx-3 text-[#c0392b]">〇</span>
            <span className="text-[#3a3530]">スミット</span>
            <span className="mx-3 text-[#c0392b]">〇</span>
            <span className="text-[#3a3530]">CONTENT CREATION</span>
            <span className="mx-3 text-[#c0392b]">〇</span>
            <span className="text-[#3a3530]">LUCKNOW · INDIA</span>
            <span className="mx-3 text-[#c0392b]">〇</span>
            <span className="text-[#3a3530]">日本語学習中</span>
            <span className="mx-3 text-[#c0392b]">〇</span>
            <span className="text-[#3a3530]">OPEN TO REMOTE</span>
            <span className="mx-3 text-[#c0392b]">〇</span>
          </div>
          <div className="marquee-row-reverse h-full flex items-center whitespace-nowrap text-[0.72rem] font-mono font-medium tracking-[0.18em] opacity-40">
            <span className="text-[#8a8078]">AVAILABLE FOR FREELANCE</span>
            <span className="mx-3 text-[#c0392b]">〇</span>
            <span className="text-[#3a3530]">WEB DEVELOPMENT</span>
            <span className="mx-3 text-[#c0392b]">〇</span>
            <span className="text-[#3a3530]">ANDROID APPS</span>
            <span className="mx-3 text-[#c0392b]">〇</span>
            <span className="text-[#3a3530]">スミット</span>
            <span className="mx-3 text-[#c0392b]">〇</span>
            <span className="text-[#3a3530]">CONTENT CREATION</span>
            <span className="mx-3 text-[#c0392b]">〇</span>
            <span className="text-[#3a3530]">LUCKNOW · INDIA</span>
            <span className="mx-3 text-[#c0392b]">〇</span>
            <span className="text-[#3a3530]">日本語学習中</span>
            <span className="mx-3 text-[#c0392b]">〇</span>
            <span className="text-[#3a3530]">OPEN TO REMOTE</span>
            <span className="mx-3 text-[#c0392b]">〇</span>
          </div>
        </div>
      </div>

      <div className="bg-[#080806] border-t border-[rgba(255,255,255,0.06)] py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-xl font-bold font-display mb-2 block">
              S<span className="text-[#c0392b]">.</span>
            </Link>
            <p className="text-[#8a8078] font-body text-0.9rem">
              Building things that matter — one commit at a time.
            </p>
          </div>
          <div>
            <h4 className="text-[#e8e0d4] font-body font-500 mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="#about" className="block text-[#8a8078] hover:text-[#e8e0d4] font-body text-0.9rem transition-colors">
                About
              </Link>
              <Link href="#work" className="block text-[#8a8078] hover:text-[#e8e0d4] font-body text-0.9rem transition-colors">
                Work
              </Link>
              <Link href="#contact" className="block text-[#8a8078] hover:text-[#e8e0d4] font-body text-0.9rem transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-[#e8e0d4] font-body font-500 mb-4">Connect</h4>
            <p className="text-[#8a8078] font-body text-0.9rem mb-2">
              hello@sumit.dev
            </p>
            <p className="text-[#8a8078] font-mono text-0.8rem">
              © 2026 Sumit
            </p>
            <p className="text-[#8a8078] font-mono text-0.8rem">
              Built with Next.js
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </footer>
  )
}