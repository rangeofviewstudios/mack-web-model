'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

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

      {/* ── Hero body — stable grid, no absolute text block ── */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-[52fr_48fr] min-h-0 relative">

        {/* Left: all text content */}
        <div className="flex flex-col justify-center px-6 md:px-14 py-10 md:py-0 relative z-10">

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
              className="group inline-flex items-center gap-4 bg-atl-charcoal text-atl-cream px-10 py-4 text-[11px] tracking-[0.35em] uppercase hover:bg-atl-rust transition-colors duration-400"
              style={{ fontFamily: 'var(--font-milker)' }}
            >
              Let&apos;s Collaborate
              <span className="text-sm leading-none transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
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
          {[
            { label: 'INSTAGRAM', href: 'https://www.instagram.com/mackeroni_8/' },
            { label: 'EMAIL',     href: 'mailto:mack@thecagedbutterfly.com' },
          ].map(({ label, href }, i) => (
            <span key={label} className="flex flex-col items-center gap-3">
              <a
                href={href}
                className="text-[8px] tracking-[0.4em] uppercase text-atl-stone/50 hover:text-atl-rust transition-colors duration-200"
                style={{ writingMode: 'vertical-rl' }}
              >
                {label}
              </a>
              {i < 1 && <span className="w-px h-4 bg-atl-sand" />}
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
