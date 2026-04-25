'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'TikTok',    href: '#' },
  { label: 'Email',     href: 'mailto:hello@mack.com' },
]

export default function ContactFooter() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <footer id="contact" ref={ref} className="bg-atl-cream pt-24 md:pt-32 pb-12 px-8 md:px-16">

      <div className="border-t border-atl-sand pt-16 grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <h2
            className="text-6xl md:text-8xl text-atl-charcoal leading-none mb-6"
            style={{ fontFamily: 'var(--font-migae)' }}
          >
            Let&apos;s
            <br />
            Work.
          </h2>
          <p className="text-atl-stone text-lg max-w-sm leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
            Available for editorial, commercial, and brand projects. Based in Atlanta — willing to travel.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="flex flex-col justify-end gap-6"
        >
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="group flex items-center justify-between border-b border-atl-sand pb-4 text-atl-charcoal hover:text-atl-rust transition-colors duration-300"
            >
              <span className="text-lg tracking-wide">{label}</span>
              <span className="text-atl-stone group-hover:text-atl-rust transition-colors duration-300 text-sm tracking-[0.2em]">
                ↗
              </span>
            </a>
          ))}
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <span
          className="text-[14vw] md:text-[7vw] text-atl-sand leading-none select-none"
          style={{ fontFamily: 'var(--font-migae)' }}
        >
          MACK
        </span>
        <p className="text-atl-stone/60 text-xs tracking-[0.2em] uppercase">
          © {new Date().getFullYear()} Mack &nbsp;·&nbsp; Atlanta, Georgia
        </p>
      </div>
    </footer>
  )
}
