'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="w-full bg-atl-cream">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">

        {/* Left: Image */}
        <div className="relative h-[70vh] md:h-auto overflow-hidden">
          <Image
            src="/Assets/fuegreen2.webp"
            alt="Mack — editorial portrait"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-atl-cream/10 hidden md:block" />
        </div>

        {/* Right: Text */}
        <div className="flex flex-col justify-center px-10 md:px-16 lg:px-24 py-16 md:py-24 bg-atl-cream">

          <FadeIn delay={0}>
            <span className="text-atl-rust text-xs tracking-[0.4em] uppercase mb-6 block">
              About
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              className="text-6xl md:text-7xl lg:text-8xl leading-none text-atl-charcoal mb-10"
              style={{ fontFamily: 'var(--font-migae)' }}
            >
              Born
              <br />
              &amp; Raised
              <br />
              <span className="text-atl-rust">ATL.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-atl-stone text-lg md:text-xl leading-relaxed mb-6 max-w-md" style={{ fontFamily: 'Georgia, serif' }}>
              Mack is a 23-year-old model and boxer from Atlanta, Georgia — a city that shaped her edge, her grace, and her drive to move through every room like she owns it.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-atl-stone text-base leading-relaxed mb-10 max-w-md" style={{ fontFamily: 'Georgia, serif' }}>
              Her work lives at the intersection of editorial elegance and raw power. In front of a camera or in the ring, Mack brings the same presence: deliberate, unapologetic, Atlanta.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex gap-12 border-t border-atl-sand pt-8">
              {[
                { label: 'Hometown', value: 'Atlanta, GA' },
                { label: 'Age', value: '23' },
                { label: 'Focus', value: 'Modeling' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-atl-stone text-xs tracking-[0.3em] uppercase mb-1">{label}</p>
                  <p
                    className="text-2xl text-atl-charcoal"
                    style={{ fontFamily: 'var(--font-migae)' }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
