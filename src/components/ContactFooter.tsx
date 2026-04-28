'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import ButterflyCursor from '@/components/ui/ButterflyCursor'

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/mackeroni_8/' },
  { label: 'Email',     href: 'mailto:mack@thecagedbutterfly.com' },
]

function AtlantaTime() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString('en-US', {
          timeZone: 'America/New_York',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      )
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return <span className="font-mono tabular-nums tracking-widest">{time || '--:--:--'}</span>
}

export default function ContactFooter() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <footer id="contact" ref={ref} className="relative bg-atl-cream overflow-hidden">

      <ButterflyCursor />

      {/* ── Status bar ── */}
      <div className="px-8 md:px-14 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-[9px] tracking-[0.4em] uppercase text-atl-stone">Available for work</span>
        </div>
        <div className="flex items-center gap-2 text-[9px] tracking-[0.3em] uppercase text-atl-stone">
          <span>Atlanta, EST</span>
          <span className="text-atl-sand">·</span>
          <AtlantaTime />
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="px-8 md:px-14 pt-16 pb-10 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 md:gap-8">

        {/* Left: heading */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-between gap-10"
        >
          <h2
            className="text-atl-charcoal leading-[0.86] select-none"
            style={{ fontFamily: 'var(--font-milker)', fontSize: 'clamp(60px, 9vw, 140px)' }}
          >
            Let&apos;s<br />Work.
          </h2>
          <p
            className="text-atl-stone text-sm leading-relaxed"
            style={{ fontFamily: 'Georgia, serif', maxWidth: '28ch' }}
          >
            Available for editorial, commercial, and brand projects.
            Based in Atlanta — willing to travel.
          </p>
        </motion.div>

        {/* Right: social links */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-end"
        >
          {socials.map(({ label, href }, i) => (
            <motion.a
              key={label}
              href={href}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.28 + i * 0.09 }}
              className="group relative flex items-center justify-between py-5 px-4 border-b border-atl-sand/70 overflow-hidden"
            >
              <span className="absolute inset-0 bg-atl-rust scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" aria-hidden="true" />

              <span
                className="relative z-10 text-xl md:text-2xl text-atl-charcoal group-hover:text-white transition-colors duration-500"
                style={{ fontFamily: 'var(--font-milker)' }}
              >
                {label}
              </span>
              <span className="relative z-10 text-atl-stone group-hover:text-white text-base transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="px-8 md:px-14 pt-6 pb-8 border-t border-atl-sand/40 flex items-center justify-between">
        <span
          className="text-[10px] tracking-[0.45em] uppercase text-atl-stone/50 select-none"
          style={{ fontFamily: 'var(--font-milker)' }}
        >
          Mack
        </span>
        <p className="text-atl-stone/40 text-[9px] tracking-[0.25em] uppercase">
          © {new Date().getFullYear()} &nbsp;·&nbsp; Atlanta, Georgia
        </p>
      </div>

    </footer>
  )
}
