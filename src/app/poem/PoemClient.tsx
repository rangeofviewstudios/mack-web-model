'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

// Each butterfly has a unique floating path
const BUTTERFLIES = [
  { id: 1, x: '8%',  y: '12%', scale: 0.55, delay: 0,    dur: 14, dx: 40,  dy: 25,  color: '#EB8258', opacity: 0.55 },
  { id: 2, x: '78%', y: '8%',  scale: 0.75, delay: 2.5,  dur: 18, dx: -30, dy: 40,  color: '#B84C1E', opacity: 0.45 },
  { id: 3, x: '88%', y: '55%', scale: 0.45, delay: 1,    dur: 12, dx: -25, dy: -20, color: '#C9A84C', opacity: 0.50 },
  { id: 4, x: '5%',  y: '65%', scale: 0.65, delay: 3.5,  dur: 16, dx: 50,  dy: -30, color: '#EB8258', opacity: 0.40 },
  { id: 5, x: '50%', y: '5%',  scale: 0.35, delay: 0.8,  dur: 10, dx: 20,  dy: 35,  color: '#BEB8EB', opacity: 0.45 },
  { id: 6, x: '15%', y: '88%', scale: 0.80, delay: 4,    dur: 20, dx: 35,  dy: -45, color: '#EB8258', opacity: 0.35 },
  { id: 7, x: '65%', y: '80%', scale: 0.50, delay: 1.8,  dur: 13, dx: -40, dy: -25, color: '#C9A84C', opacity: 0.50 },
  { id: 8, x: '40%', y: '92%', scale: 0.60, delay: 5,    dur: 17, dx: 15,  dy: -50, color: '#B84C1E', opacity: 0.30 },
]

function ButterflyDecor({
  color,
  scale = 1,
  delay = 0,
  dur = 14,
  dx = 30,
  dy = 20,
  opacity = 0.5,
}: {
  color: string
  scale?: number
  delay?: number
  dur?: number
  dx?: number
  dy?: number
  opacity?: number
}) {
  const BW = 100
  const BH = 90

  return (
    <motion.div
      style={{ width: BW * scale, height: BH * scale, opacity }}
      initial={{ x: 0, y: 0, rotate: -3 }}
      animate={{
        x: [0, dx, dx * 0.5, 0],
        y: [0, dy * 0.6, dy, 0],
        rotate: [-3, 3, -2, -3],
      }}
      transition={{
        duration: dur,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg
        viewBox="-50 -55 100 110"
        width={BW * scale}
        height={BH * scale}
        overflow="visible"
      >
        {/* Left wings */}
        <motion.g
          initial={{ scaleX: 1 }}
          animate={{ scaleX: [1, 0.05, 1] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '0px 0px' }}
        >
          <path d="M 0,-4 C -5,-18 -32,-42 -46,-22 C -56,-4 -28,16 0,4" fill={color} fillOpacity="0.88" />
          <path d="M 0,5 C -9,15 -34,26 -28,46 C -22,58 -5,46 0,5" fill={color} fillOpacity="0.70" />
          <circle cx="-20" cy="-16" r="4" fill="#C9A84C" fillOpacity="0.75" />
        </motion.g>
        {/* Right wings */}
        <motion.g
          initial={{ scaleX: 1 }}
          animate={{ scaleX: [1, 0.05, 1] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '0px 0px' }}
        >
          <path d="M 0,-4 C 5,-18 32,-42 46,-22 C 56,-4 28,16 0,4" fill={color} fillOpacity="0.88" />
          <path d="M 0,5 C 9,15 34,26 28,46 C 22,58 5,46 0,5" fill={color} fillOpacity="0.70" />
          <circle cx="20" cy="-16" r="4" fill="#C9A84C" fillOpacity="0.75" />
        </motion.g>
        {/* Body */}
        <ellipse cx="0" cy="12" rx="2.2" ry="16" fill="#1A1612" />
        <ellipse cx="0" cy="-4" rx="2.8" ry="5.5" fill="#1A1612" />
        <circle cx="0" cy="-11" r="3.5" fill="#1A1612" />
        {/* Antennae */}
        <path d="M -1,-14 Q -16,-34 -10,-44" stroke="#1A1612" strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M  1,-14 Q  16,-34  10,-44" stroke="#1A1612" strokeWidth="1" fill="none" strokeLinecap="round" />
        <circle cx="-10" cy="-44" r="2.5" fill={color} />
        <circle cx=" 10" cy="-44" r="2.5" fill={color} />
      </svg>
    </motion.div>
  )
}

const stanzas = [
  [
    "They say every time a butterfly flaps its wings it rains,",
    "But for this one that's not true,",
    "For every time she tries is only pain,",
    "And shackles that won't break loose.",
  ],
  [
    "The caged butterfly is deemed crazy,",
    "So they shoot her up with meds,",
    "Her vision always hazy",
    "As they send her off to bed.",
  ],
  [
    "They finally release the butterfly,",
    "But alas she must return.",
    "For with a handful of nectar she utters a cry,",
    "And her throat begins to burn.",
  ],
  [
    "So the butterfly is caged once more,",
    "But this time with no shackles.",
    "This time her meds are right unlike before,",
    "And no problem she can't tackle.",
  ],
  [
    "The butterfly will soon be free,",
    "Stronger than before",
    "All the non believers shall soon see",
    "She will return nevermore.",
  ],
]

function Stanza({ lines, index }: { lines: string[]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="mb-10 md:mb-14"
    >
      {lines.map((line, i) => (
        <p
          key={i}
          className="text-atl-cream/85 leading-relaxed"
          style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(15px, 2.2vw, 20px)' }}
        >
          {line}
        </p>
      ))}
    </motion.div>
  )
}

export default function PoemClient() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <main
      className="min-h-screen relative overflow-hidden"
      style={{ background: '#0E0C0A' }}
    >
      {/* Butterflies — scattered around, pointer-events-none */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        {BUTTERFLIES.map(b => (
          <div
            key={b.id}
            style={{ position: 'absolute', left: b.x, top: b.y }}
          >
            <ButterflyDecor
              color={b.color}
              scale={b.scale}
              delay={b.delay}
              dur={b.dur}
              dx={b.dx}
              dy={b.dy}
              opacity={b.opacity}
            />
          </div>
        ))}
      </div>

      {/* Subtle radial glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background:
            'radial-gradient(ellipse at 20% 30%, rgba(235,130,88,0.08) 0%, transparent 55%), ' +
            'radial-gradient(ellipse at 80% 70%, rgba(190,184,235,0.06) 0%, transparent 55%)',
        }}
      />

      {/* Back link */}
      <div className="relative" style={{ zIndex: 10 }}>
        <div className="px-6 md:px-16 pt-8 pb-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-atl-stone/60 hover:text-atl-rust transition-colors duration-200 text-[10px] tracking-[0.4em] uppercase"
            style={{ fontFamily: 'var(--font-milker)' }}
          >
            <span className="text-base leading-none">←</span>
            Back
          </Link>
        </div>

        {/* Header */}
        <div ref={titleRef} className="px-6 md:px-16 pt-12 md:pt-20 pb-16 md:pb-24 max-w-2xl mx-auto md:mx-0 md:ml-16 lg:ml-32">
          {/* Butterfly icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <ButterflyDecor color="#EB8258" scale={0.9} delay={0} dur={8} dx={8} dy={4} opacity={0.9} />
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-atl-rust text-[9px] tracking-[0.5em] uppercase block mb-5"
          >
            The poem behind the name
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-atl-cream leading-[0.88] mb-6"
            style={{ fontFamily: 'var(--font-milker)', fontSize: 'clamp(44px, 8vw, 110px)' }}
          >
            The Caged<br />
            <span className="text-atl-rust">Butterfly</span>
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={titleInView ? { width: '3rem' } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="h-px bg-atl-gold mb-6"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-atl-stone/70 text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            By Makena Maple
          </motion.p>
        </div>

        {/* Poem body */}
        <div className="px-6 md:px-16 pb-24 max-w-2xl mx-auto md:mx-0 md:ml-16 lg:ml-32">
          {stanzas.map((lines, i) => (
            <Stanza key={i} lines={lines} index={i} />
          ))}

          {/* Closing rule */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 flex items-center gap-4"
          >
            <div className="h-px bg-atl-sand/30 flex-1" />
            <span className="text-atl-gold text-base">✦</span>
            <div className="h-px bg-atl-sand/30 flex-1" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-atl-stone/50 text-xs tracking-[0.3em] uppercase mt-8 text-center"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Makena Maple &nbsp;·&nbsp; Atlanta, Georgia
          </motion.p>

          {/* CTA back to portfolio */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 text-center"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-3 border border-atl-sand/30 text-atl-cream/60 hover:text-atl-cream hover:border-atl-rust px-8 py-3.5 text-[10px] tracking-[0.4em] uppercase transition-all duration-300"
              style={{ fontFamily: 'var(--font-milker)' }}
            >
              View the work
              <span className="text-sm">↗</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
