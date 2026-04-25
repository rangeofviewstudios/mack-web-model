'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const navLinks = ['Home', 'About', 'Gallery', 'Boxing']

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 15% 60%, #E8946A28 0%, #F5EFE6 50%, #DDD0BE22 100%)',
      }}
    >
      {/* ── Nav ─────────────────────────────────────────── */}
      <motion.header
        className="relative z-30 flex items-center justify-between px-8 md:px-14 py-7"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <span
          className="text-2xl tracking-widest text-atl-charcoal select-none"
          style={{ fontFamily: 'var(--font-migae)' }}
        >
          MACK
        </span>

        <nav className="hidden md:flex items-center gap-6 text-sm tracking-[0.18em] uppercase text-atl-stone">
          {navLinks.map((link, i) => (
            <span key={link} className="flex items-center gap-6">
              <a href={`#${link.toLowerCase()}`} className="hover:text-atl-charcoal transition-colors duration-200">
                {link}
              </a>
              {i < navLinks.length - 1 && <span className="text-atl-sand select-none">—</span>}
            </span>
          ))}
        </nav>

        <div className="flex items-center gap-5 text-sm tracking-widest text-atl-stone">
          <span className="hidden md:block uppercase">ATL</span>
          <span className="hidden md:block text-atl-sand">—</span>
          <button
            aria-label="Toggle theme"
            className="w-8 h-8 rounded-full border border-atl-sand flex items-center justify-center hover:border-atl-rust transition-colors"
          >
            <span className="text-base">◐</span>
          </button>
        </div>
      </motion.header>

      {/* ── Main content area ───────────────────────────── */}
      <div className="relative min-h-[calc(100vh-88px)]">

        {/* ── Text block — left side, fills vertically ────── */}
        <div className="absolute inset-y-0 left-0 flex flex-col justify-center pl-8 md:pl-14 z-10 pointer-events-none">
          <div className="pointer-events-auto">

            {/* Line 1: Modeling — small, light */}
            <div className="overflow-hidden mb-1">
              <motion.p
                className="text-3xl md:text-4xl lg:text-5xl font-light text-atl-stone leading-tight"
                style={{ fontFamily: 'Georgia, serif' }}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              >
                Modeling.
              </motion.p>
            </div>

            {/* Line 2: Boxing — medium, Migae rust, indented */}
            <div className="overflow-hidden mb-2">
              <motion.p
                className="text-4xl md:text-5xl lg:text-6xl text-atl-rust leading-tight ml-6 md:ml-10"
                style={{ fontFamily: 'var(--font-migae)' }}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
              >
                Boxing.
              </motion.p>
            </div>

            {/* Line 3: MACK — massive, charcoal, the hero word */}
            <div className="overflow-hidden mb-6">
              <motion.h1
                className="text-[22vw] md:text-[18vw] lg:text-[17vw] leading-none tracking-tight text-atl-charcoal"
                style={{ fontFamily: 'var(--font-migae)', lineHeight: 0.88 }}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.36 }}
              >
                MACK
              </motion.h1>
            </div>

            {/* ATL label */}
            <motion.p
              className="text-xs md:text-sm tracking-[0.35em] uppercase text-atl-stone mb-5 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <span className="text-atl-gold">✦</span>
              Atlanta, Georgia
            </motion.p>

            {/* Body copy */}
            <motion.p
              className="text-atl-stone text-sm md:text-base leading-relaxed max-w-xs mb-8"
              style={{ fontFamily: 'Georgia, serif' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
            >
              I move through every room like I own it. Camera-ready, ring-tested. Let&apos;s make something worth watching.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.78 }}
            >
              <a
                href="#contact"
                className="inline-block border-2 border-atl-rust text-atl-rust px-8 py-3 text-sm tracking-[0.2em] uppercase font-medium hover:bg-atl-rust hover:text-atl-cream transition-all duration-300"
              >
                Let&apos;s Collaborate
              </a>
            </motion.div>
          </div>
        </div>

        {/* ── Gold Saturn blob — left, near "Boxing" line ── */}
        <motion.div
          className="absolute left-[1%] md:left-[3%] top-[44%] z-20 pointer-events-none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55, type: 'spring', stiffness: 160 }}
        >
          {/* Sphere */}
          <div
            className="w-16 h-16 md:w-20 md:h-20 rounded-full relative"
            style={{
              background: 'radial-gradient(circle at 35% 32%, #e8d07a, #C9A84C, #a8883a)',
              boxShadow: '0 8px 32px #C9A84C50, inset 0 -6px 12px rgba(0,0,0,0.2)',
            }}
          >
            {/* Saturn ring — oval border rotated */}
            <div
              className="absolute inset-0 m-auto"
              style={{
                width: '160%',
                height: '40%',
                top: '30%',
                left: '-30%',
                border: '3px solid #8B6914',
                borderRadius: '50%',
                transform: 'rotate(-20deg)',
                opacity: 0.75,
              }}
            />
          </div>
        </motion.div>

        {/* ── Hero image — center-right, overlaps text ───── */}
        <motion.div
          className="absolute top-0 bottom-0 z-20 hidden md:block overflow-hidden"
          style={{ left: '42%', right: '14%' }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <Image
            src="/Assets/blueorangemack.webp"
            alt="Mack — Atlanta model"
            fill
            priority
            quality={95}
            className="object-cover object-top"
            sizes="44vw"
          />
        </motion.div>

        {/* ── Green gem blob — right of image ─────────────── */}
        <motion.div
          className="absolute z-30 hidden md:block pointer-events-none"
          style={{ right: '8%', top: '30%' }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.85, type: 'spring', stiffness: 160 }}
        >
          <div
            className="w-16 h-16 lg:w-20 lg:h-20 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 28%, #6aab8e, #2D4A3E, #1a2e26)',
              boxShadow: '0 8px 28px rgba(45,74,62,0.5), inset 0 -4px 10px rgba(0,0,0,0.35)',
            }}
          />
        </motion.div>

        {/* ── Vertical socials — far right ─────────────────── */}
        <motion.div
          className="absolute right-3 inset-y-0 hidden lg:flex flex-col items-center justify-center gap-7 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {['INSTAGRAM', 'TIKTOK', 'EMAIL'].map((label, i) => (
            <span key={label} className="flex flex-col items-center gap-3">
              <a
                href={label === 'EMAIL' ? 'mailto:hello@mack.com' : '#'}
                className="text-[9px] tracking-[0.35em] uppercase text-atl-stone hover:text-atl-rust transition-colors duration-200"
                style={{ writingMode: 'vertical-rl' }}
              >
                {label}
              </a>
              {i < 2 && <span className="w-px h-5 bg-atl-sand" />}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Mobile: image below text ─────────────────────── */}
      <div className="md:hidden relative w-full aspect-[3/4]">
        <Image
          src="/Assets/blueorangemack.webp"
          alt="Mack — Atlanta model"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>
    </section>
  )
}
