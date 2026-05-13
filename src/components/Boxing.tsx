'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const images = [
  { src: '/Assets/boxingmac6.webp',  alt: 'Mack in gloves' },
  { src: '/Assets/boxingmack.webp',  alt: 'Mack boxing' },
  { src: '/Assets/boxingmack2.webp', alt: 'Mack in the ring' },
  { src: '/Assets/boxingmac3.webp',  alt: 'Mack training' },
  { src: '/Assets/boxingmac4.webp',  alt: 'Mack fighting' },
  { src: '/Assets/boxingmac5.webp',  alt: 'Mack sparring' },
]

function mod(n: number, m: number) { return ((n % m) + m) % m }

export default function Boxing() {
  const [curr, setCurr] = useState(0)
  const n = images.length
  const prevIdx = mod(curr - 1, n)
  const nextIdx = mod(curr + 1, n)

  return (
    <section id="boxing" className="relative bg-black overflow-hidden">

      {/* ── MOBILE: Full-bleed immersive card ───────────── */}
      <div className="md:hidden relative h-screen">

        {/* Background image — full bleed */}
        <AnimatePresence mode="wait">
          <motion.div
            key={curr}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={images[curr].src}
              alt={images[curr].alt}
              fill
              className="object-cover object-top"
              sizes="100vw"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient: dark top bar + heavy bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black pointer-events-none" />

        {/* Top bar: label + counter */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 pt-5 z-20">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-atl-rust block" />
            <span className="text-white/60 text-[9px] tracking-[0.55em] uppercase font-mono">Fighter</span>
          </div>
          <span className="text-white/40 text-[9px] tracking-[0.3em] font-mono tabular-nums">
            {String(curr + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
          </span>
        </div>

        {/* Tap zones — left half prev, right half next */}
        <button
          className="absolute left-0 top-0 w-1/2 h-full z-10"
          onClick={() => setCurr(prevIdx)}
          aria-label="Previous image"
        />
        <button
          className="absolute right-0 top-0 w-1/2 h-full z-10"
          onClick={() => setCurr(nextIdx)}
          aria-label="Next image"
        />

        {/* Subtle chevron hints */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 pointer-events-none select-none">
          <span className="text-white/15 text-3xl leading-none">‹</span>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 pointer-events-none select-none">
          <span className="text-white/15 text-3xl leading-none">›</span>
        </div>

        {/* Bottom: title + caption + progress bar */}
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-10 z-20">
          <motion.h2
            className="text-white leading-[0.85] select-none mb-3"
            style={{ fontFamily: 'var(--font-milker)', fontSize: 'clamp(64px, 20vw, 96px)' }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            SMACK
          </motion.h2>

          <p className="text-white/35 text-[9px] tracking-[0.35em] uppercase mb-5">
            {images[curr].alt} &nbsp;·&nbsp; Atlanta, GA
          </p>

          {/* Progress bar strip */}
          <div className="flex items-center gap-1">
            {images.map((_, i) => (
              <div
                key={i}
                className={`h-[2px] rounded-full transition-all duration-500 ${
                  i === curr ? 'bg-atl-rust flex-[2]' : 'bg-white/15 flex-1'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP: original editorial layout ──────────── */}
      <div className="hidden md:block">

        <div className="px-14 pt-16 pb-0">
          <div className="w-16 h-[3px] bg-atl-rust mb-6" />
          <h2
            className="text-white leading-[0.85] select-none"
            style={{ fontFamily: 'var(--font-milker)', fontSize: 'clamp(80px, 18vw, 300px)' }}
          >
            SMACK
          </h2>
          <div className="flex items-center gap-6 mt-5">
            <span className="text-atl-rust text-[10px] tracking-[0.5em] uppercase">Fighter</span>
            <span className="text-white/20 text-sm">|</span>
            <span className="text-white/40 text-[10px] tracking-[0.4em] uppercase">Atlanta, GA</span>
          </div>
        </div>

        <div className="relative mt-10 pb-16">
          <div className="relative w-full" style={{ height: 'clamp(420px, 72vh, 720px)' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={curr}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <Image
                  src={images[curr].src}
                  alt={images[curr].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between px-14 mt-6">
            <div className="flex items-baseline gap-1.5">
              <span className="text-white text-xl leading-none" style={{ fontFamily: 'var(--font-milker)' }}>
                {String(curr + 1).padStart(2, '0')}
              </span>
              <span className="text-white/20 text-[10px] tracking-widest font-mono">
                / {String(n).padStart(2, '0')}
              </span>
            </div>

            <div className="flex items-center gap-1">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurr(i)}
                  aria-label={`Go to image ${i + 1}`}
                  className="w-8 h-8 flex items-center justify-center"
                >
                  <span className={`block rounded-full transition-all duration-300 ${
                    i === curr ? 'w-5 h-[3px] bg-atl-rust' : 'w-[3px] h-[3px] bg-white/20'
                  }`} />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setCurr(prevIdx)}
                aria-label="Previous"
                className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:border-atl-rust hover:bg-atl-rust/10 transition-all duration-250 group"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M9 2.5L4.5 7L9 11.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" className="group-hover:opacity-100 transition-opacity" />
                </svg>
              </button>
              <button
                onClick={() => setCurr(nextIdx)}
                aria-label="Next"
                className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:border-atl-rust hover:bg-atl-rust/10 transition-all duration-250 group"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M5 2.5L9.5 7L5 11.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" className="group-hover:opacity-100 transition-opacity" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
