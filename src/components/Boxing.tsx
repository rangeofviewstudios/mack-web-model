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

      {/* ── TITLE BLOCK ─────────────────────────────────── */}
      <div className="px-8 md:px-14 pt-16 pb-0">
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

      {/* ── IMAGE SLIDER ────────────────────────────────── */}
      <div className="relative mt-10 pb-16">

        {/* Main image */}
        <div
          className="relative w-full"
          style={{ height: 'clamp(420px, 72vh, 720px)' }}
        >
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

        {/* Nav row: counter + arrows + dots */}
        <div className="flex items-center justify-between px-8 md:px-14 mt-6">

          {/* Counter */}
          <div className="flex items-baseline gap-1.5">
            <span
              className="text-white text-xl leading-none"
              style={{ fontFamily: 'var(--font-milker)' }}
            >
              {String(curr + 1).padStart(2, '0')}
            </span>
            <span className="text-white/20 text-[10px] tracking-widest font-mono">
              / {String(n).padStart(2, '0')}
            </span>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurr(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === curr
                    ? 'w-5 h-[3px] bg-atl-rust'
                    : 'w-[3px] h-[3px] bg-white/20 hover:bg-white/45'
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurr(prevIdx)}
              aria-label="Previous"
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-atl-rust hover:bg-atl-rust/10 transition-all duration-250 group"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M9 2.5L4.5 7L9 11.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" className="group-hover:opacity-100 transition-opacity duration-250" />
              </svg>
            </button>
            <button
              onClick={() => setCurr(nextIdx)}
              aria-label="Next"
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-atl-rust hover:bg-atl-rust/10 transition-all duration-250 group"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M5 2.5L9.5 7L5 11.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" className="group-hover:opacity-100 transition-opacity duration-250" />
              </svg>
            </button>
          </div>

        </div>
      </div>

    </section>
  )
}
