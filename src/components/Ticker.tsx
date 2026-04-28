'use client'

import { motion } from 'framer-motion'

const ALIAS = 'MAC11'
const COUNT = 14

interface TickerProps {
  bg?:         string
  labelColor?: string
  speed?:      number
  direction?:  'left' | 'right'
  border?:     boolean
}

function CrescentMoon() {
  return (
    <svg
      width="11"
      height="13"
      viewBox="0 0 11 13"
      style={{ display: 'block', flexShrink: 0 }}
      aria-hidden="true"
    >
      {/* Rotate for classic 🌙 tilt */}
      <g transform="rotate(-28, 5.5, 6.5)">
        <circle cx="5.5" cy="6.5" r="5.5" fill="url(#ticker-moon-grad)" />
        {/* Black mask circle creates the crescent bite */}
        <circle cx="8.1" cy="6.5" r="4.45" fill="#000000" />
      </g>
    </svg>
  )
}

export default function Ticker({
  bg        = 'bg-atl-charcoal',
  labelColor = 'text-atl-cream/30',
  speed     = 22,
  direction = 'left',
  border    = false,
}: TickerProps) {
  const items = Array(COUNT * 2).fill(null)
  const from  = direction === 'left' ? '0%'   : '-50%'
  const to    = direction === 'left' ? '-50%' : '0%'

  return (
    <div
      className={`${bg} h-10 overflow-hidden flex items-center relative ${
        border ? 'border-y border-white/[0.06]' : ''
      }`}
    >
      {/* Shared gradient definition — one per page, referenced by all moons */}
      <svg width="0" height="0" style={{ position: 'absolute', overflow: 'hidden' }}>
        <defs>
          <radialGradient
            id="ticker-moon-grad"
            cx="3.5"
            cy="3"
            r="7"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%"   stopColor="#FBD96E" />
            <stop offset="18%"  stopColor="#F5A840" />
            <stop offset="42%"  stopColor="#E07030" />
            <stop offset="68%"  stopColor="#B84520" />
            <stop offset="88%"  stopColor="#8A2808" />
            <stop offset="100%" stopColor="#5C1400" />
          </radialGradient>
        </defs>
      </svg>

      <motion.div
        className="flex items-center shrink-0"
        style={{ width: 'max-content' }}
        animate={{ x: [from, to] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((_, i) => (
          <span key={i} className="flex items-center gap-0 shrink-0">
            <span
              className={`${labelColor} text-[10px] tracking-[0.65em] uppercase px-5 shrink-0`}
              style={{ fontFamily: 'var(--font-milker)' }}
            >
              {ALIAS}
            </span>
            <CrescentMoon />
          </span>
        ))}
      </motion.div>
    </div>
  )
}
