'use client'

import Image from 'next/image'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const boxingImages = [
  { src: '/Assets/boxingmack.webp',  alt: 'Mack boxing' },
  { src: '/Assets/boxingmack2.webp', alt: 'Mack boxing 2' },
  { src: '/Assets/boxingmac3.webp',  alt: 'Mack boxing 3' },
  { src: '/Assets/boxingmac4.webp',  alt: 'Mack boxing 4' },
  { src: '/Assets/boxingmac5.webp',  alt: 'Mack boxing 5' },
  { src: '/Assets/boxingmac6.webp',  alt: 'Mack boxing 6' },
]

export default function Boxing() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true, margin: '-80px' })

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  // Start at 0% so "FIGHTER" is fully visible, drift right on scroll
  const titleX = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])

  return (
    <section ref={sectionRef} id="boxing" className="relative bg-black py-24 md:py-32 overflow-hidden">

      {/* Scrolling background text */}
      <div className="overflow-hidden mb-12 md:mb-20">
        <motion.div style={{ x: titleX }}>
          <h2
            className="text-[18vw] md:text-[14vw] leading-none text-white/[0.05] whitespace-nowrap select-none"
            style={{ fontFamily: 'var(--font-migae)' }}
          >
            FIGHTER
          </h2>
        </motion.div>
      </div>

      <div ref={contentRef} className="px-6 md:px-16">

        {/* Section label + copy */}
        <div className="mb-12">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-atl-rust text-xs tracking-[0.4em] uppercase block mb-4"
          >
            In The Ring
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-white/60 text-lg md:text-xl max-w-md leading-relaxed"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Before the camera, there was the ring. Boxing built the discipline, the poise, and the punch that you see in every frame.
          </motion.p>
        </div>

        {/* Featured 3-col + side strip */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4">

          {/* Hero boxing image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={contentInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="md:col-span-3 relative aspect-[3/4] md:aspect-auto md:h-[70vh] overflow-hidden"
          >
            <Image
              src={boxingImages[0].src}
              alt={boxingImages[0].alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </motion.div>

          {/* Side strip */}
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-4">
            {boxingImages.slice(1, 4).map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.12 }}
                className="relative aspect-square md:aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 768px) 50vw, 40vw"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {boxingImages.slice(4).map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 + i * 0.1 }}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
