'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, ChevronDown } from 'lucide-react'

const ADDITIONAL_CARDS = [
  {
    id: 1, title: 'Neon Rain', tool: 'Kling AI · VIDEO',
    prompt: 'Tokyo street at 3am, heavy rain, neon reflections, cinematic wide shot, Blade Runner style...',
    gradient: 'linear-gradient(135deg, #150a0a, #251010)', badge: 'KLING'
  },
  {
    id: 2, title: 'Ancient Light', tool: 'Leonardo AI · IMAGE',
    prompt: 'Temple ruins at golden hour, dramatic god rays, intricate carvings, hyper-realistic...',
    gradient: 'linear-gradient(135deg, #0a0a15, #101025)', badge: 'LEONARDO'
  },
  {
    id: 3, title: 'Forest Dawn', tool: 'Veo 3 · VIDEO',
    prompt: 'Misty bamboo forest, morning light filtering through, cinematic slow motion, peaceful vibe...',
    gradient: 'linear-gradient(135deg, #0a150a, #102510)', badge: 'VEO'
  }
]

const FRAMES = [
  { id: '01', src: '/frames/frame01.jpeg' },
  { id: '02', src: '/frames/frame02.jpeg' },
  { id: '03', src: '/frames/frame03.png' },
  { id: '04', src: '/frames/frame04.png' }
]

const TOOLS = ['✦ Midjourney', '🎬 Kling AI', '🎥 Veo 3', '🎨 Leonardo AI']

const anim = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
}

export default function AICreations() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showFrames, setShowFrames] = useState(false)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section id="ai-creations" className="relative overflow-hidden py-20">
      <div className="max-w-6xl mx-auto px-12">

        {/* ── Header Row ── */}
        <motion.div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12" {...anim}>
          <div>
            <span className="font-jp text-[var(--text-secondary)] text-[10px] tracking-[0.3em] uppercase mb-3 block">
              生成芸術 / AI CREATIONS
            </span>
            <h2 className="text-[var(--text-primary)] font-display font-bold text-[clamp(2.5rem,5vw,4rem)] tracking-tight leading-none">
              AI <span className="text-[#c0392b]">Creations</span>.
            </h2>
            <p className="font-body text-[#6a6058] text-[0.92rem] leading-relaxed max-w-md mt-3">
              Cinematic images &amp; videos generated with AI — every piece starts with a carefully written prompt.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 lg:pb-1">
            {TOOLS.map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.07)] rounded-full font-mono text-[0.7rem] text-[#8a8078] hover:border-[rgba(192,57,43,0.3)] hover:text-[#e8e0d4] transition-all duration-300 cursor-default">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Featured Case Study ── */}
        <motion.div
          className="border border-[rgba(255,255,255,0.07)] rounded-[16px] overflow-hidden mb-10"
          {...anim}
          transition={{ ...anim.transition, delay: 0.1 }}
        >
          {/* Label bar */}
          <div className="bg-[rgba(192,57,43,0.08)] border-b border-[rgba(192,57,43,0.12)] px-6 py-2.5 flex justify-between items-center">
            <span className="font-mono text-[0.65rem] text-[#c0392b] tracking-[0.15em] font-medium">✦ FEATURED AI VIDEO</span>
            <span className="font-mono text-[0.65rem] text-[#4a4540]">Kling AI · Veo 3</span>
          </div>

          {/* Main content — vertical stack: prompt → video → frames */}
          <div className="flex flex-col">

            {/* Video — full width, landscape */}
            <div 
              className="relative aspect-video bg-[#080806] flex items-center justify-center group/video overflow-hidden cursor-pointer"
              onClick={togglePlay}
            >
              <video 
                ref={videoRef}
                src="/frames/video.mp4" 
                poster="/frames/thumbnail.png"
                playsInline 
                onEnded={() => {
                  setIsPlaying(false)
                  if (videoRef.current) videoRef.current.load()
                }}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${isPlaying ? '' : 'group-hover:scale-105 opacity-80'}`}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.2)] to-transparent opacity-80 pointer-events-none transition-opacity duration-500" />
              
              {/* Custom Play/Pause Button */}
              <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                <motion.div
                  className="w-16 h-16 rounded-full bg-[rgba(192,57,43,0.15)] border border-[rgba(192,57,43,0.4)] backdrop-blur-sm flex items-center justify-center hover:bg-[rgba(192,57,43,0.25)] transition-all duration-300 pointer-events-auto shadow-[0_0_30px_rgba(192,57,43,0.15)]"
                  whileHover={{ scale: 1.05 }}
                  onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-[#e8e0d4] fill-[#e8e0d4]" />
                  ) : (
                    <Play className="w-6 h-6 text-[#e8e0d4] fill-[#e8e0d4] ml-1" />
                  )}
                </motion.div>
              </div>

              {/* Bottom Labels */}
              <div className={`absolute bottom-5 left-6 right-6 flex items-end justify-between pointer-events-none transition-opacity duration-500 ${isPlaying ? 'opacity-0 lg:group-hover:opacity-100' : 'opacity-100'}`}>
                <div>
                  <span className="block font-mono text-[0.65rem] text-white/60 tracking-[0.1em] uppercase drop-shadow-md">01 / AI GENERATED VIDEO</span>
                  <span className="block font-body text-[0.85rem] text-white/90 drop-shadow-md mt-1">Cinematic Output</span>
                </div>
                <div className="px-2 py-1 bg-[rgba(0,0,0,0.5)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-[4px] font-mono text-[10px] text-[#e8e0d4]">
                  {isPlaying ? 'PLAYING' : 'PAUSED'}
                </div>
              </div>
            </div>
          </div>

          {/* Frames Drawer Toggle */}
          <button 
            onClick={() => setShowFrames(!showFrames)}
            className="w-full flex items-center justify-center gap-2 py-4 bg-[rgba(255,255,255,0.01)] hover:bg-[rgba(255,255,255,0.03)] border-t border-[rgba(255,255,255,0.03)] text-[#8a8078] hover:text-[#e8e0d4] transition-colors font-mono text-[0.65rem] tracking-[0.15em] uppercase"
          >
            {showFrames ? 'Hide Selected Frames' : 'View Selected Frames'}
            <motion.div animate={{ rotate: showFrames ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown className="w-3.5 h-3.5" />
            </motion.div>
          </button>

          {/* Frames strip (Drawer) */}
          <AnimatePresence>
            {showFrames && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden border-t border-[rgba(255,255,255,0.03)] bg-[#0a0908]"
              >
                <div className="p-6">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
                    {FRAMES.map((frame, i) => (
                      <div key={i} className="group/frame relative aspect-video rounded-[6px] border border-[rgba(255,255,255,0.06)] overflow-hidden hover:border-[rgba(192,57,43,0.3)] transition-all duration-500">
                        <img
                          src={frame.src}
                          alt={`Frame ${frame.id}`}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/frame:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover/frame:bg-transparent transition-colors duration-500" />
                        <div className="absolute bottom-1.5 left-2.5 font-mono text-[0.55rem] text-white/50 group-hover/frame:text-white/80 transition-colors">
                          Frame {frame.id}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ── More Creations ── */}
        <motion.h4
          className="font-body text-[#6a6058] text-[0.78rem] uppercase tracking-[0.12em] mb-5"
          {...anim}
          transition={{ ...anim.transition, delay: 0.15 }}
        >
          More Creations
        </motion.h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ADDITIONAL_CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              className="bg-[#0e0d0b] border border-[rgba(255,255,255,0.06)] rounded-[12px] overflow-hidden group/card hover:border-[rgba(255,255,255,0.12)] transition-all duration-500"
              {...anim}
              transition={{ ...anim.transition, delay: 0.2 + i * 0.08 }}
            >
              <div className="aspect-[16/9] relative overflow-hidden" style={{ background: card.gradient }}>
                <div className="absolute top-2.5 right-2.5 px-2 py-1 bg-[rgba(0,0,0,0.5)] rounded-[4px] font-mono text-[0.58rem] text-[#8a8078]">
                  {card.badge}
                </div>
              </div>
              <div className="p-5">
                <span className="block font-mono text-[0.62rem] text-[#c0392b] tracking-[0.1em] mb-1.5">{card.tool}</span>
                <h6 className="text-[#e8e0d4] font-display italic font-[600] text-[1.1rem] mb-2">{card.title}</h6>
                <p className="font-body text-[#6a6058] text-[0.8rem] line-clamp-1 mb-3">{card.prompt}</p>
                <span className="font-mono text-[0.68rem] text-[#4a4540] group-hover/card:text-[#c0392b] transition-colors">
                  View Prompt →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
