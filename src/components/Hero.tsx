'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const navLinks = ['Home', 'About', 'Gallery', 'Boxing']

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col min-h-screen overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 20% 70%, #EB825820 0%, #FFFFFF 55%, #BEB8EB14 100%)',
      }}
    >
      {/* ── Nav ─────────────────────────────────── */}
      <motion.header
        className="relative z-30 flex items-center justify-between px-8 md:px-14 py-6 shrink-0"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <span
          className="text-xl tracking-widest text-atl-charcoal select-none"
          style={{ fontFamily: 'var(--font-milker)' }}
        >
          MACK
        </span>

        <nav className="hidden md:flex items-center gap-6 text-[11px] tracking-[0.22em] uppercase text-atl-stone">
          {navLinks.map((link, i) => (
            <span key={link} className="flex items-center gap-6">
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-atl-charcoal transition-colors duration-200"
              >
                {link}
              </a>
              {i < navLinks.length - 1 && (
                <span className="text-atl-sand select-none">—</span>
              )}
            </span>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-[11px] tracking-widest text-atl-stone">
          <span className="hidden md:block uppercase">ATL</span>
          <span className="hidden md:block text-atl-sand">—</span>
          <div className="w-7 h-7 rounded-full border border-atl-sand flex items-center justify-center text-sm text-atl-charcoal">
            ◐
          </div>
        </div>
      </motion.header>

      {/* ── Hero body — stable grid, no absolute text block ── */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-[52fr_48fr] min-h-0 relative">

        {/* Left: all text content */}
        <div className="flex flex-col justify-center px-8 md:px-14 py-10 md:py-0 relative z-10">

          {/* Eyebrow */}
          <motion.p
            className="text-[10px] tracking-[0.5em] uppercase text-atl-stone mb-6 flex items-center gap-3"
            style={{ fontFamily: 'Georgia, serif' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Model
            <span className="text-atl-sand">·</span>
            <span className="text-atl-rust" style={{ fontFamily: 'var(--font-milker)' }}>
              Fighter
            </span>
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-atl-charcoal leading-[0.88] mb-5"
            style={{
              fontFamily: 'var(--font-milker)',
              fontSize: 'clamp(68px, 15vw, 230px)',
            }}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            Mack
          </motion.h1>

          {/* ATL label */}
          <motion.p
            className="text-[10px] tracking-[0.4em] uppercase text-atl-stone mb-5 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="text-atl-gold">✦</span>
            Atlanta, Georgia
          </motion.p>

          {/* Body copy */}
          <motion.p
            className="text-atl-stone text-sm leading-relaxed mb-8"
            style={{ fontFamily: 'Georgia, serif', maxWidth: '30ch' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62 }}
          >
            I move through every room like I own it. Camera-ready, ring-tested.
            Let&apos;s make something worth watching.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
          >
            <a
              href="#contact"
              className="inline-block border border-atl-rust text-atl-rust px-8 py-3 text-[11px] tracking-[0.25em] uppercase hover:bg-atl-rust hover:text-atl-cream transition-all duration-300"
            >
              Let&apos;s Collaborate
            </a>
          </motion.div>
        </div>

        {/* Right: image — fills the grid cell edge-to-edge */}
        <motion.div
          className="relative hidden md:block"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <Image
            src="/Assets/blueorangemack.webp"
            alt="Mack, Atlanta model"
            fill
            priority
            quality={95}
            className="object-cover object-top"
            sizes="48vw"
          />
          {/* Feather left edge so split feels seamless */}
          <div
            className="absolute inset-y-0 left-0 w-28 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #FFFFFF, transparent)' }}
          />
        </motion.div>

        {/* Vertical socials — far right rail */}
        <motion.div
          className="absolute right-3 inset-y-0 hidden lg:flex flex-col items-center justify-center gap-6 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {['INSTAGRAM', 'TIKTOK', 'EMAIL'].map((label, i) => (
            <span key={label} className="flex flex-col items-center gap-3">
              <a
                href={label === 'EMAIL' ? 'mailto:hello@mack.com' : '#'}
                className="text-[8px] tracking-[0.4em] uppercase text-atl-stone/50 hover:text-atl-rust transition-colors duration-200"
                style={{ writingMode: 'vertical-rl' }}
              >
                {label}
              </a>
              {i < 2 && <span className="w-px h-4 bg-atl-sand" />}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Mobile: image below text */}
      <div className="md:hidden relative w-full aspect-[3/4] shrink-0">
        <Image
          src="/Assets/blueorangemack.webp"
          alt="Mack, Atlanta model"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>
    </section>
  )
}
