'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Floating, { FloatingElement } from '@/components/ui/parallax-floating'

const images = [
  { src: '/Assets/fuegreen1.webp',            alt: 'Mack editorial',      pos: 'top-[4%] left-[3%]',   w: 'w-24 md:w-32', depth: 0.5 },
  { src: '/Assets/fuemodel.webp',             alt: 'Mack portrait',       pos: 'top-[2%] left-[22%]',  w: 'w-20 md:w-28', depth: 1   },
  { src: '/Assets/mackdark.webp',             alt: 'Mack dark',           pos: 'top-[5%] left-[79%]',  w: 'w-20 md:w-28', depth: 0.5 },
  { src: '/Assets/blueorangemackstairs.webp', alt: 'Mack on stairs',      pos: 'top-[35%] left-[1%]',  w: 'w-28 md:w-36', depth: 1   },
  { src: '/Assets/fuemodel2.webp',            alt: 'Mack portrait 2',     pos: 'top-[26%] left-[17%]', w: 'w-16 md:w-24', depth: 2   },
  { src: '/Assets/img_4641.webp',             alt: 'Mack lifestyle',      pos: 'top-[22%] left-[77%]', w: 'w-24 md:w-32', depth: 2   },
  { src: '/Assets/pinkhall.webp',             alt: 'Mack pink hallway',   pos: 'top-[46%] left-[84%]', w: 'w-20 md:w-28', depth: 1   },
  { src: '/Assets/stairs.webp',               alt: 'Mack stairs',         pos: 'top-[56%] left-[10%]', w: 'w-16 md:w-24', depth: 1.5 },
  { src: '/Assets/redcabinet.webp',           alt: 'Mack red cabinet',    pos: 'top-[52%] left-[68%]', w: 'w-16 md:w-20', depth: 1.5 },
  { src: '/Assets/dreessbrown.webp',          alt: 'Mack brown dress',    pos: 'top-[70%] left-[5%]',  w: 'w-24 md:w-32', depth: 1.5 },
  { src: '/Assets/schoolmodel.webp',          alt: 'Mack school shoot',   pos: 'top-[68%] left-[26%]', w: 'w-20 md:w-28', depth: 0.5 },
  { src: '/Assets/livingroom.webp',           alt: 'Mack interior',       pos: 'top-[74%] left-[52%]', w: 'w-32 md:w-44', depth: 1   },
  { src: '/Assets/loli (1 of 1).webp',        alt: 'Mack editorial 2',    pos: 'top-[66%] left-[76%]', w: 'w-20 md:w-28', depth: 2   },
  { src: '/Assets/whitedress.webp',           alt: 'Mack white dress',    pos: 'top-[1%] left-[54%]',  w: 'w-28 md:w-36', depth: 1.5 },
]

function mod(n: number, m: number) { return ((n % m) + m) % m }

// ── Toggle icons ─────────────────────────────────────────────────────────────

function ScatterIcon({ active }: { active: boolean }) {
  const fill = active ? '#FFFFFF' : '#7B74C4'
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <rect x="0" y="0" width="5" height="5" rx="1" fill={fill} />
      <rect x="7" y="0" width="5" height="5" rx="1" fill={fill} />
      <rect x="0" y="7" width="5" height="5" rx="1" fill={fill} />
      <rect x="7" y="7" width="5" height="5" rx="1" fill={fill} />
    </svg>
  )
}

function ListIcon({ active }: { active: boolean }) {
  const fill = active ? '#FFFFFF' : '#7B74C4'
  return (
    <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
      <rect x="0" y="0" width="13" height="2" rx="1" fill={fill} />
      <rect x="0" y="4" width="13" height="2" rx="1" fill={fill} />
      <rect x="0" y="8" width="13" height="2" rx="1" fill={fill} />
    </svg>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export default function ModelingPortfolio() {
  const [mode, setMode] = useState<'scatter' | 'carousel'>('scatter')
  const [idx,  setIdx]  = useState(0)

  const sectionRef = useRef<HTMLElement>(null)
  const inView     = useInView(sectionRef, { once: true, margin: '-100px' })

  // Keyboard nav in carousel
  useEffect(() => {
    if (mode !== 'carousel') return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') setIdx(i => mod(i + 1, images.length))
      if (e.key === 'ArrowLeft')  setIdx(i => mod(i - 1, images.length))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mode])

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative h-screen overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 22% 32%, rgba(235,130,88,0.22) 0%, transparent 52%), ' +
          'radial-gradient(ellipse at 78% 70%, rgba(190,184,235,0.20) 0%, transparent 52%), ' +
          '#000000',
      }}
    >

      {/* ── View toggle ─────────────────────────────────── */}
      <div className="absolute top-5 right-5 z-30 flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1">
        <button
          onClick={() => setMode('scatter')}
          aria-label="Scatter view"
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
            mode === 'scatter' ? 'bg-atl-rust' : 'hover:bg-white/10'
          }`}
        >
          <ScatterIcon active={mode === 'scatter'} />
        </button>
        <button
          onClick={() => setMode('carousel')}
          aria-label="Carousel view"
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
            mode === 'carousel' ? 'bg-atl-rust' : 'hover:bg-white/10'
          }`}
        >
          <ListIcon active={mode === 'carousel'} />
        </button>
      </div>

      {/* ── SCATTER VIEW ────────────────────────────────── */}
      <AnimatePresence mode="wait">
        {mode === 'scatter' && (
          <motion.div
            key="scatter"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {/* Center heading */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center pointer-events-none px-4">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-atl-rust text-xs tracking-[0.4em] uppercase mb-4 block"
              >
                Portfolio
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.35 }}
                className="text-6xl md:text-8xl lg:text-9xl leading-none"
                style={{
                  fontFamily: 'var(--font-milker)',
                  background: 'linear-gradient(135deg, #EB8258 0%, #BEB8EB 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                The Work.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="text-atl-sand/60 text-xs tracking-[0.3em] uppercase mt-6"
              >
                move your cursor
              </motion.p>
            </div>

            {/* Parallax images — natural aspect ratios (no forced height) */}
            <div className="absolute inset-0">
              <Floating sensitivity={-1} easingFactor={0.04} className="overflow-hidden">
                {images.map(({ src, alt, pos, w, depth }, i) => (
                  <FloatingElement key={src} depth={depth} className={pos}>
                    <motion.div
                      className={w}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: i * 0.07, ease: 'easeOut' }}
                    >
                      <Image
                        src={src}
                        alt={alt}
                        width={400}
                        height={600}
                        sizes="15vw"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                        className="hover:scale-105 transition-transform duration-300 cursor-pointer"
                        onClick={() => { setIdx(i); setMode('carousel') }}
                      />
                    </motion.div>
                  </FloatingElement>
                ))}
              </Floating>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── CAROUSEL VIEW ───────────────────────────────── */}
      <AnimatePresence mode="wait">
        {mode === 'carousel' && (
          <motion.div
            key="carousel"
            className="absolute inset-0 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 md:px-14 pt-8 pb-3 shrink-0">
              <div>
                <span className="text-atl-rust text-[9px] tracking-[0.4em] uppercase block mb-1">Portfolio</span>
                <span className="text-atl-stone/50 text-[9px] tracking-[0.25em] font-mono">
                  {String(idx + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                </span>
              </div>
              <span className="text-atl-stone/30 text-[8px] tracking-[0.3em] uppercase hidden md:block">
                ← → to navigate
              </span>
            </div>

            {/* Main image — object-contain preserves OG crop */}
            <div className="flex-1 relative min-h-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={idx}
                  className="absolute inset-0 flex items-center justify-center px-16 py-2"
                  initial={{ opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -28 }}
                  transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={images[idx].src}
                      alt={images[idx].alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 90vw, 75vw"
                      priority
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Caption + arrows + thumbnails */}
            <div className="shrink-0 px-8 md:px-14 pb-6 pt-1">
              <div className="flex items-center justify-between mb-3">
                <p className="text-atl-stone/40 text-[9px] tracking-[0.25em] uppercase">
                  {images[idx].alt}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIdx(i => mod(i - 1, images.length))}
                    className="w-9 h-9 rounded-full border border-atl-stone/25 flex items-center justify-center text-atl-stone text-sm hover:border-atl-cream hover:text-atl-cream transition-all duration-200"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => setIdx(i => mod(i + 1, images.length))}
                    className="w-9 h-9 rounded-full border border-atl-stone/25 flex items-center justify-center text-atl-stone text-sm hover:border-atl-cream hover:text-atl-cream transition-all duration-200"
                  >
                    →
                  </button>
                </div>
              </div>

              {/* Thumbnail strip */}
              <div
                className="flex gap-1.5 overflow-x-auto pb-1"
                style={{ scrollbarWidth: 'none' }}
              >
                {images.map((img, i) => (
                  <button
                    key={img.src}
                    onClick={() => setIdx(i)}
                    className={`relative shrink-0 w-10 h-14 overflow-hidden transition-all duration-200 ${
                      i === idx
                        ? 'ring-1 ring-atl-rust opacity-100'
                        : 'opacity-25 hover:opacity-55'
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover object-top"
                      sizes="40px"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
