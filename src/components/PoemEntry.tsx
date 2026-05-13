'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

function MiniButterfly({ color = '#EB8258', size = 48, delay = 0 }: { color?: string; size?: number; delay?: number }) {
  const s = size / 100
  return (
    <motion.div
      style={{ width: size, height: size * 0.9 }}
      initial={{ y: 0, rotate: -2 }}
      animate={{ y: [0, -6, 0], rotate: [-2, 2, -2] }}
      transition={{ duration: 4, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg viewBox="-50 -55 100 110" width={size} height={size * 0.9} overflow="visible">
        <motion.g
          initial={{ scaleX: 1 }}
          animate={{ scaleX: [1, 0.05, 1] }}
          transition={{ duration: 0.85, repeat: Infinity, ease: 'easeInOut', delay }}
          style={{ transformOrigin: '0px 0px' }}
        >
          <path d="M 0,-4 C -5,-18 -32,-42 -46,-22 C -56,-4 -28,16 0,4" fill={color} fillOpacity="0.9" />
          <path d="M 0,5 C -9,15 -34,26 -28,46 C -22,58 -5,46 0,5" fill={color} fillOpacity="0.72" />
          <circle cx="-20" cy="-16" r="4" fill="#C9A84C" fillOpacity="0.8" />
        </motion.g>
        <motion.g
          initial={{ scaleX: 1 }}
          animate={{ scaleX: [1, 0.05, 1] }}
          transition={{ duration: 0.85, repeat: Infinity, ease: 'easeInOut', delay }}
          style={{ transformOrigin: '0px 0px' }}
        >
          <path d="M 0,-4 C 5,-18 32,-42 46,-22 C 56,-4 28,16 0,4" fill={color} fillOpacity="0.9" />
          <path d="M 0,5 C 9,15 34,26 28,46 C 22,58 5,46 0,5" fill={color} fillOpacity="0.72" />
          <circle cx="20" cy="-16" r="4" fill="#C9A84C" fillOpacity="0.8" />
        </motion.g>
        <ellipse cx="0" cy="12" rx="2" ry="14" fill="#1A1612" />
        <ellipse cx="0" cy="-4" rx="2.6" ry="5" fill="#1A1612" />
        <circle cx="0" cy="-11" r="3.2" fill="#1A1612" />
        <path d="M -1,-14 Q -14,-30 -9,-40" stroke="#1A1612" strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M  1,-14 Q  14,-30  9,-40" stroke="#1A1612" strokeWidth="1" fill="none" strokeLinecap="round" />
        <circle cx="-9" cy="-40" r="2.2" fill={color} />
        <circle cx=" 9" cy="-40" r="2.2" fill={color} />
      </svg>
    </motion.div>
  )
}

export default function PoemEntry() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 md:py-32 px-6 md:px-16"
      style={{ background: '#0E0C0A' }}
    >
      {/* Faint radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 60%, rgba(235,130,88,0.10) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-xl mx-auto text-center">
        {/* Butterflies row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-center gap-6 mb-10"
        >
          <MiniButterfly color="#B84C1E" size={36} delay={0.4} />
          <MiniButterfly color="#EB8258" size={58} delay={0} />
          <MiniButterfly color="#C9A84C" size={40} delay={0.9} />
        </motion.div>

        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-atl-rust text-[9px] tracking-[0.5em] uppercase block mb-5"
        >
          The poem behind the name
        </motion.span>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-atl-cream leading-[0.9] mb-8"
          style={{ fontFamily: 'var(--font-milker)', fontSize: 'clamp(38px, 7vw, 88px)' }}
        >
          The Caged<br />
          <span style={{ color: '#EB8258' }}>Butterfly</span>
        </motion.h2>

        {/* First line teaser */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="text-atl-stone/60 leading-relaxed mb-10 italic"
          style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(13px, 1.8vw, 17px)', maxWidth: '36ch', margin: '0 auto 2.5rem' }}
        >
          &ldquo;They say every time a butterfly flaps its wings it rains,<br />
          But for this one that&apos;s not true…&rdquo;
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.72 }}
        >
          <Link
            href="/poem"
            className="group inline-flex items-center gap-3 border border-atl-sand/25 hover:border-atl-rust text-atl-cream/70 hover:text-atl-cream px-8 py-4 text-[10px] tracking-[0.4em] uppercase transition-all duration-300"
            style={{ fontFamily: 'var(--font-milker)' }}
          >
            Read the poem
            <span className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </Link>
        </motion.div>

        {/* Author */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-atl-stone/30 text-[9px] tracking-[0.3em] uppercase mt-10"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          — Makena Maple
        </motion.p>
      </div>
    </section>
  )
}
