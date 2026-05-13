'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
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

function ScatterIcon({ active }: { active: boolean }) {
  const fill = active ? '#FFFFFF' : '#9CA3AF'
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
  const fill = active ? '#FFFFFF' : '#9CA3AF'
  return (
    <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
      <rect x="0" y="0" width="13" height="2" rx="1" fill={fill} />
      <rect x="0" y="4" width="13" height="2" rx="1" fill={fill} />
      <rect x="0" y="8" width="13" height="2" rx="1" fill={fill} />
    </svg>
  )
}

function TogglePill({
  mode,
  onScatter,
  onCarousel,
}: {
  mode: 'scatter' | 'carousel'
  onScatter: () => void
  onCarousel: () => void
}) {
  return (
    <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1">
      <button
        onClick={onScatter}
        aria-label="Scatter view"
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
          mode === 'scatter' ? 'bg-atl-rust' : 'hover:bg-white/10'
        }`}
      >
        <ScatterIcon active={mode === 'scatter'} />
      </button>
      <button
        onClick={onCarousel}
        aria-label="Carousel view"
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
          mode === 'carousel' ? 'bg-atl-rust' : 'hover:bg-white/10'
        }`}
      >
        <ListIcon active={mode === 'carousel'} />
      </button>
    </div>
  )
}

export default function ModelingPortfolio() {
  const [mode, setMode] = useState<'scatter' | 'carousel'>('carousel')
  const [idx,  setIdx]  = useState(0)

  const sectionRef = useRef<HTMLElement>(null)
  const inView     = useInView(sectionRef, { once: true, margin: '-100px' })

  // Upgrade to scatter on desktop only
  useEffect(() => {
    if (window.innerWidth >= 768) setMode('scatter')
  }, [])

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
      className="relative overflow-hidden"
      style={{
        height: '100vh',
        background:
          'radial-gradient(ellipse at 22% 32%, rgba(235,130,88,0.22) 0%, transparent 52%), ' +
          'radial-gradient(ellipse at 78% 70%, rgba(190,184,235,0.20) 0%, transparent 52%), ' +
          '#000000',
      }}
    >
      {/* ── SCATTER VIEW (desktop only — never renders on mobile) ── */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        <AnimatePresence mode="wait">
          {mode === 'scatter' && (
            <motion.div
              key="scatter"
              className="absolute inset-0 pointer-events-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              {/* Toggle */}
              <div className="absolute top-4 right-4 z-30">
                <TogglePill mode={mode} onScatter={() => setMode('scatter')} onCarousel={() => setMode('carousel')} />
              </div>

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
                  className="text-5xl md:text-8xl lg:text-9xl leading-none"
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

              {/* Parallax images */}
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
      </div>

      {/* ── CAROUSEL VIEW (unified — one layout for all viewports, no dual-div stacking) ── */}
      <AnimatePresence mode="wait">
        {mode === 'carousel' && (
          <motion.div
            key="carousel"
            style={{ position: 'absolute', inset: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {/* Full-bleed background image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                style={{ position: 'absolute', inset: 0 }}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={images[idx].src}
                  alt={images[idx].alt}
                  fill
                  className="object-cover object-top"
                  sizes="100vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Gradient overlay */}
            <div
              style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
              className="bg-gradient-to-b from-black/60 via-transparent to-black/90"
            />

            {/* Top bar: label + counter + toggle */}
            <div
              style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 20 }}
              className="flex items-center justify-between px-5 md:px-14 pt-5 md:pt-8"
            >
              <div>
                <span className="text-atl-rust text-[9px] tracking-[0.5em] uppercase block mb-0.5">
                  Portfolio
                </span>
                <span className="text-white/40 text-[9px] tracking-[0.25em] font-mono tabular-nums">
                  {String(idx + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                </span>
              </div>
              <TogglePill mode={mode} onScatter={() => setMode('scatter')} onCarousel={() => setMode('carousel')} />
            </div>

            {/* Tap zones */}
            <button
              style={{ position: 'absolute', left: 0, top: 0, width: '50%', height: '100%', zIndex: 10 }}
              onClick={() => setIdx(i => mod(i - 1, images.length))}
              aria-label="Previous image"
            />
            <button
              style={{ position: 'absolute', right: 0, top: 0, width: '50%', height: '100%', zIndex: 10 }}
              onClick={() => setIdx(i => mod(i + 1, images.length))}
              aria-label="Next image"
            />

            {/* Chevron hints */}
            <div
              style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', zIndex: 20, pointerEvents: 'none', userSelect: 'none' }}
              className="md:left-6"
            >
              <span className="text-white/20 text-3xl leading-none">‹</span>
            </div>
            <div
              style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', zIndex: 20, pointerEvents: 'none', userSelect: 'none' }}
              className="md:right-6"
            >
              <span className="text-white/20 text-3xl leading-none">›</span>
            </div>

            {/* Bottom: heading (desktop) + caption + thumbnail strip */}
            <div
              style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 20 }}
              className="px-5 md:px-14 pb-8 md:pb-10"
            >
              <h2
                className="hidden md:block text-white leading-none mb-3"
                style={{ fontFamily: 'var(--font-milker)', fontSize: 'clamp(32px, 5vw, 72px)' }}
              >
                The Work.
              </h2>
              <p className="text-white/35 text-[9px] tracking-[0.35em] uppercase mb-4">
                {images[idx].alt}
              </p>
              <div
                className="flex gap-1.5 overflow-x-auto"
                style={{ scrollbarWidth: 'none' }}
              >
                {images.map((img, i) => (
                  <button
                    key={img.src}
                    onClick={(e) => { e.stopPropagation(); setIdx(i) }}
                    aria-label={`View ${img.alt}`}
                    style={{ position: 'relative', flexShrink: 0, zIndex: 30 }}
                    className={`w-10 h-14 overflow-hidden transition-all duration-200 ${
                      i === idx
                        ? 'ring-1 ring-atl-rust opacity-100'
                        : 'opacity-30 hover:opacity-60'
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
