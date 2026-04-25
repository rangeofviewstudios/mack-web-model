"use client"

import { useEffect, useRef } from "react"
import { motion, stagger, useAnimate, useInView } from "framer-motion"
import Image from "next/image"

import Floating, { FloatingElement } from "@/components/ui/parallax-floating"

const images = [
  // ── Top row ──────────────────────────────────────────
  { src: "/Assets/fuegreen1.webp",            alt: "Mack editorial",       pos: "top-[4%] left-[3%]",   size: "w-24 h-32 md:w-32 md:h-44",  depth: 0.5 },
  { src: "/Assets/fuemodel.webp",             alt: "Mack portrait",        pos: "top-[2%] left-[22%]",  size: "w-20 h-28 md:w-28 md:h-40",  depth: 1   },
  { src: "/Assets/whitedress.webp",           alt: "Mack white dress",     pos: "top-[1%] left-[54%]",  size: "w-28 h-40 md:w-36 md:h-52",  depth: 1.5 },
  { src: "/Assets/mackdark.webp",             alt: "Mack dark editorial",  pos: "top-[5%] left-[79%]",  size: "w-20 h-28 md:w-28 md:h-38",  depth: 0.5 },

  // ── Left flank ───────────────────────────────────────
  { src: "/Assets/blueorangemackstairs.webp", alt: "Mack on stairs",       pos: "top-[35%] left-[1%]",  size: "w-28 h-36 md:w-36 md:h-48",  depth: 1   },
  { src: "/Assets/fuemodel2.webp",            alt: "Mack portrait 2",      pos: "top-[26%] left-[17%]", size: "w-16 h-24 md:w-24 md:h-32",  depth: 2   },

  // ── Right flank ──────────────────────────────────────
  { src: "/Assets/img_4641.webp",             alt: "Mack lifestyle",       pos: "top-[22%] left-[77%]", size: "w-24 h-24 md:w-32 md:h-32",  depth: 2   },
  { src: "/Assets/pinkhall.webp",             alt: "Mack pink hallway",    pos: "top-[46%] left-[84%]", size: "w-20 h-28 md:w-28 md:h-36",  depth: 1   },

  // ── Lower mid ────────────────────────────────────────
  { src: "/Assets/stairs.webp",               alt: "Mack stairs",          pos: "top-[56%] left-[10%]", size: "w-16 h-24 md:w-24 md:h-32",  depth: 1.5 },
  { src: "/Assets/redcabinet.webp",           alt: "Mack red cabinet",     pos: "top-[52%] left-[68%]", size: "w-16 h-20 md:w-20 md:h-28",  depth: 1.5 },

  // ── Bottom row ───────────────────────────────────────
  { src: "/Assets/dreessbrown.webp",          alt: "Mack brown dress",     pos: "top-[70%] left-[5%]",  size: "w-24 h-32 md:w-32 md:h-44",  depth: 1.5 },
  { src: "/Assets/schoolmodel.webp",          alt: "Mack school shoot",    pos: "top-[68%] left-[26%]", size: "w-20 h-28 md:w-28 md:h-36",  depth: 0.5 },
  { src: "/Assets/livingroom.webp",           alt: "Mack interior",        pos: "top-[74%] left-[52%]", size: "w-32 h-20 md:w-44 md:h-28",  depth: 1   },
  { src: "/Assets/loli (1 of 1).webp",        alt: "Mack editorial",       pos: "top-[66%] left-[76%]", size: "w-20 h-28 md:w-28 md:h-40",  depth: 2   },
]

export default function ModelingPortfolio() {
  const [scope, animate] = useAnimate()
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!inView) return
    // Target the img wrappers directly — no motion.div opacity blocking them
    animate(
      ".float-img",
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.6, delay: stagger(0.07), ease: "easeOut" }
    )
  }, [inView, animate])

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative h-screen bg-atl-charcoal overflow-hidden"
    >
      {/* Center content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center pointer-events-none px-4">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-atl-rust text-xs tracking-[0.4em] uppercase mb-4 block"
        >
          Portfolio
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="text-6xl md:text-8xl lg:text-9xl text-atl-cream leading-none"
          style={{ fontFamily: "var(--font-migae)" }}
        >
          The Work.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="text-atl-stone/60 text-xs tracking-[0.3em] uppercase mt-6"
        >
          move your cursor
        </motion.p>
      </div>

      {/* Parallax layer — scope wraps this so useAnimate can target .float-img */}
      <div ref={scope} className="absolute inset-0">
        <Floating sensitivity={-1} easingFactor={0.04} className="overflow-hidden">
          {images.map(({ src, alt, pos, size, depth }) => (
            <FloatingElement key={src} depth={depth} className={pos}>
              {/* .float-img starts visible in DOM, useAnimate animates from opacity:0 */}
              <div className="float-img opacity-0">
                <Image
                  src={src}
                  alt={alt}
                  width={400}
                  height={600}
                  className={`${size} object-cover object-top hover:scale-105 transition-transform duration-300 cursor-pointer`}
                  sizes="15vw"
                />
              </div>
            </FloatingElement>
          ))}
        </Floating>
      </div>
    </section>
  )
}
