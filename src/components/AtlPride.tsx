'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AtlPride() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="atl"
      className="relative bg-atl-rust overflow-hidden py-32 md:py-48 px-8 md:px-16"
    >
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="text-[25vw] text-black/10 leading-none tracking-tight whitespace-nowrap"
          style={{ fontFamily: 'var(--font-migae)' }}
        >
          ATL
        </span>
      </div>

      {/* Glow decoration */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-atl-peach/20 blur-3xl pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: '4rem' } : {}}
          transition={{ duration: 0.8 }}
          className="h-px bg-atl-gold mb-10"
        />

        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          <p
            className="text-5xl md:text-7xl lg:text-8xl text-atl-cream leading-tight"
            style={{ fontFamily: 'var(--font-migae)' }}
          >
            &ldquo;Atlanta
            <br />
            didn&apos;t make me
            <br />
            soft. It made me
            <br />
            <span className="text-atl-gold italic">exact.&rdquo;</span>
          </p>
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 text-atl-cream/60 text-sm tracking-[0.3em] uppercase"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          — Mack &nbsp;·&nbsp; Atlanta, Georgia
        </motion.p>
      </div>
    </section>
  )
}
