'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

// Butterfly is 120×110px; body center sits at SVG coord (0,0)
// viewBox "-50 -55 100 110" maps that to pixel-center (60, 55) in the element
const BW = 120
const BH = 110

export default function ButterflyCursor() {
  const containerRef = useRef<HTMLDivElement>(null)
  const wrapperRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const wrapper   = wrapperRef.current
    if (!container || !wrapper) return

    // Start off-screen so it doesn't flash at (0,0)
    gsap.set(wrapper, { x: -400, y: -400 })

    const move = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      gsap.to(wrapper, {
        x: e.clientX - rect.left - BW / 2,
        y: e.clientY - rect.top  - BH / 2,
        duration: 0.5,
        ease: 'power2.out',
      })
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  // Wing flap — scaleX around origin (0,0) = body center
  const flapTransition = {
    scaleX: {
      duration: 0.82,
      repeat: Infinity,
      ease: 'easeInOut' as const,
      times: [0, 0.5, 1],
    },
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <div
        ref={wrapperRef}
        className="absolute"
        style={{ width: BW, height: BH }}
      >
        <svg
          viewBox="-50 -55 100 110"
          width={BW}
          height={BH}
          overflow="visible"
        >
          {/* ── LEFT WINGS ─────────────────────────────── */}
          {/* scaleX from 1→0→1 around origin collapses left wings toward body */}
          <motion.g
            animate={{ scaleX: [1, 0.06, 1] }}
            transition={flapTransition}
            style={{ transformOrigin: '0px 0px' } as React.CSSProperties}
          >
            {/* Upper wing */}
            <path
              d="M 0,-4 C -5,-18 -32,-42 -46,-22 C -56,-4 -28,16 0,4"
              fill="#EB8258"
              fillOpacity="0.88"
            />
            {/* Lower wing */}
            <path
              d="M 0,5 C -9,15 -34,26 -28,46 C -22,58 -5,46 0,5"
              fill="#B84C1E"
              fillOpacity="0.78"
            />
            {/* Gold spot */}
            <circle cx="-20" cy="-16" r="4.2" fill="#C9A84C" fillOpacity="0.80" />
            {/* Cream highlight */}
            <circle cx="-34" cy="-8"  r="2.5" fill="#F5EFE6"  fillOpacity="0.55" />
            {/* Wing edge accent — thin inner arc */}
            <path
              d="M -4,-3 C -12,-15 -28,-32 -38,-18"
              stroke="#B84C1E"
              strokeWidth="0.8"
              strokeOpacity="0.45"
              fill="none"
              strokeLinecap="round"
            />
          </motion.g>

          {/* ── RIGHT WINGS ────────────────────────────── */}
          <motion.g
            animate={{ scaleX: [1, 0.06, 1] }}
            transition={flapTransition}
            style={{ transformOrigin: '0px 0px' } as React.CSSProperties}
          >
            {/* Upper wing */}
            <path
              d="M 0,-4 C 5,-18 32,-42 46,-22 C 56,-4 28,16 0,4"
              fill="#EB8258"
              fillOpacity="0.88"
            />
            {/* Lower wing */}
            <path
              d="M 0,5 C 9,15 34,26 28,46 C 22,58 5,46 0,5"
              fill="#B84C1E"
              fillOpacity="0.78"
            />
            {/* Gold spot */}
            <circle cx="20" cy="-16" r="4.2" fill="#C9A84C" fillOpacity="0.80" />
            {/* Cream highlight */}
            <circle cx="34" cy="-8"  r="2.5" fill="#F5EFE6"  fillOpacity="0.55" />
            {/* Wing edge accent */}
            <path
              d="M 4,-3 C 12,-15 28,-32 38,-18"
              stroke="#B84C1E"
              strokeWidth="0.8"
              strokeOpacity="0.45"
              fill="none"
              strokeLinecap="round"
            />
          </motion.g>

          {/* ── BODY ───────────────────────────────────── */}
          {/* Abdomen */}
          <ellipse cx="0" cy="12" rx="2.4" ry="18" fill="#1A1612" />
          {/* Thorax */}
          <ellipse cx="0" cy="-4" rx="3"   ry="6"  fill="#1A1612" />
          {/* Head */}
          <circle  cx="0" cy="-11" r="3.8" fill="#1A1612" />

          {/* ── ANTENNAE ───────────────────────────────── */}
          <path
            d="M -1,-14 Q -18,-36 -11,-48"
            stroke="#1A1612" strokeWidth="1.1" fill="none" strokeLinecap="round"
          />
          <path
            d="M  1,-14 Q  18,-36  11,-48"
            stroke="#1A1612" strokeWidth="1.1" fill="none" strokeLinecap="round"
          />
          {/* Antenna tips */}
          <circle cx="-11" cy="-48" r="2.8" fill="#EB8258" />
          <circle cx=" 11" cy="-48" r="2.8" fill="#EB8258" />
        </svg>
      </div>
    </div>
  )
}
