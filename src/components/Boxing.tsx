'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const images = [
  { src: '/Assets/boxingmack.webp',  alt: 'Mack boxing' },
  { src: '/Assets/boxingmack2.webp', alt: 'Mack in the ring' },
  { src: '/Assets/boxingmac3.webp',  alt: 'Mack training' },
  { src: '/Assets/boxingmac4.webp',  alt: 'Mack fighting' },
  { src: '/Assets/boxingmac5.webp',  alt: 'Mack sparring' },
  { src: '/Assets/boxingmac6.webp',  alt: 'Mack in gloves' },
]

const LABELS = ['Boxing', 'Atlanta, GA', 'Ring Ready', 'In The Ring']

function mod(n: number, m: number) { return ((n % m) + m) % m }

export default function Boxing() {
  const [curr, setCurr] = useState(0)
  const n = images.length

  const prevIdx = mod(curr - 1, n)
  const nextIdx = mod(curr + 1, n)

  return (
    <section id="boxing" className="bg-black overflow-hidden">

      {/* ── TITLE BLOCK ─────────────────────────────────── */}
      <div className="px-8 md:px-14 pt-20 pb-0">
        <h2
          className="text-atl-cream leading-[0.85] select-none"
          style={{ fontFamily: 'var(--font-migae)', fontSize: 'clamp(72px, 16vw, 260px)' }}
        >
          FIGHTER
        </h2>
        <div className="w-full h-px bg-atl-stone/20 mt-5 mb-4" />
        <div className="flex justify-between text-[9px] tracking-[0.45em] uppercase text-atl-stone/40">
          {LABELS.map(label => <span key={label}>{label}</span>)}
        </div>
      </div>

      {/* ── 3-D CAROUSEL ────────────────────────────────── */}
      {/*
        All three cards are absolutely positioned inside a perspective container.
        Flexbox was causing layout conflicts with rotateY — absolute positioning
        gives each card a precise geometric slot and lets z-index work correctly.

        Geometry (percentages of container width):
          Center: spans 31% → 69%  (width 38%, centered at 50%)
          Prev:   spans  4% → 38%  (width 34%, right edge at 38%)
                  rotateY(48deg) origin:right-center  → visible ~16%→38%, behind center
          Next:   spans 62% → 96%  (width 34%, left edge at 62%)
                  rotateY(-48deg) origin:left-center  → visible 62%→84%, behind center
      */}
      <div className="relative px-0 pt-10 pb-4">

        {/* Perspective container — fixed height so absolute children have a reference */}
        <div
          className="relative mx-auto"
          style={{
            perspective: '1100px',
            height: 'clamp(280px, 50vh, 540px)',
            maxWidth: '1200px',
          }}
        >
          {/* ── Prev card ── */}
          <div
            className="absolute inset-y-0 cursor-pointer"
            style={{
              right: '62%',   /* right edge at 38% from left */
              width: '34%',
              transform: 'rotateY(48deg)',
              transformOrigin: 'right center',
              zIndex: 1,
            }}
            onClick={() => setCurr(prevIdx)}
          >
            <div className="relative h-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={prevIdx}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Image
                    src={images[prevIdx].src}
                    alt={images[prevIdx].alt}
                    fill
                    className="object-cover object-top"
                    sizes="34vw"
                  />
                  <div className="absolute inset-0 bg-black/55" />
                </motion.div>
              </AnimatePresence>

              {/* Button — centered in card's own 3D space */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-[4.5rem] h-[4.5rem] rounded-full border border-white/20 bg-black/40 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-[7px] tracking-[0.4em] uppercase text-white/50">Prev</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Center card ── */}
          <div
            className="absolute inset-y-0"
            style={{
              left: '50%',
              transform: 'translateX(-50%)',
              width: '38%',
              zIndex: 10,
            }}
          >
            <div className="relative h-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={curr}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={images[curr].src}
                    alt={images[curr].alt}
                    fill
                    className="object-cover object-top"
                    sizes="38vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ── Next card ── */}
          <div
            className="absolute inset-y-0 cursor-pointer"
            style={{
              left: '62%',    /* left edge at 62% from left */
              width: '34%',
              transform: 'rotateY(-48deg)',
              transformOrigin: 'left center',
              zIndex: 1,
            }}
            onClick={() => setCurr(nextIdx)}
          >
            <div className="relative h-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={nextIdx}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Image
                    src={images[nextIdx].src}
                    alt={images[nextIdx].alt}
                    fill
                    className="object-cover object-top"
                    sizes="34vw"
                  />
                  <div className="absolute inset-0 bg-black/55" />
                </motion.div>
              </AnimatePresence>

              {/* Button */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-[4.5rem] h-[4.5rem] rounded-full border border-white/20 bg-black/40 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-[7px] tracking-[0.4em] uppercase text-white/50">Next</span>
                </div>
              </div>
            </div>
          </div>

          {/* Edge fades — hide where side cards run off screen */}
          <div className="absolute inset-y-0 left-0 w-[5%] bg-gradient-to-r from-black to-transparent pointer-events-none z-20" />
          <div className="absolute inset-y-0 right-0 w-[5%] bg-gradient-to-l from-black to-transparent pointer-events-none z-20" />
        </div>

        {/* Dot / pill indicators — below center card */}
        <div className="flex justify-center items-center gap-1.5 mt-5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurr(i)}
              className={`rounded-full transition-all duration-300 ${
                i === curr
                  ? 'w-5 h-[3px] bg-atl-rust'
                  : 'w-[3px] h-[3px] bg-atl-stone/30 hover:bg-atl-stone/55'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── COPY ─────────────────────────────────────────── */}
      <div className="px-8 md:px-14 pb-24 mt-6">
        <div className="w-10 h-px bg-atl-gold mb-6" />
        <p
          className="text-atl-stone text-sm leading-relaxed max-w-[32ch]"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          I came to boxing late and fell in love with it fast. Nobody handed me
          a foundation. I built one, round by round. When I commit to something,
          I don&apos;t do it halfway.
        </p>
      </div>

    </section>
  )
}
