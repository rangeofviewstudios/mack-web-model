'use client'

import { motion } from 'framer-motion'

const ALIAS = 'MAC11'
const SEP   = '◆'
const COUNT = 14 // items per set — doubled internally for seamless loop

interface TickerProps {
  bg?:          string
  labelColor?:  string
  sepColor?:    string
  speed?:       number
  direction?:   'left' | 'right'
  border?:      boolean
}

export default function Ticker({
  bg          = 'bg-atl-charcoal',
  labelColor  = 'text-atl-cream/30',
  sepColor    = 'text-atl-rust/70',
  speed       = 22,
  direction   = 'left',
  border      = false,
}: TickerProps) {
  const items = Array(COUNT * 2).fill(null) // doubled → seamless at -50%

  const from = direction === 'left' ? '0%' : '-50%'
  const to   = direction === 'left' ? '-50%' : '0%'

  return (
    <div
      className={`${bg} h-10 overflow-hidden flex items-center ${
        border ? 'border-y border-white/[0.06]' : ''
      }`}
    >
      <motion.div
        className="flex items-center shrink-0"
        style={{ width: 'max-content' }}
        animate={{ x: [from, to] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((_, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span
              className={`${labelColor} text-[10px] tracking-[0.65em] uppercase px-5 shrink-0`}
              style={{ fontFamily: 'var(--font-milker)' }}
            >
              {ALIAS}
            </span>
            <span className={`${sepColor} text-[7px] shrink-0`}>{SEP}</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
