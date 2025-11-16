import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const specializations = [
  'User Experiences',
  'Visual Systems',
  'Product Strategy',
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % specializations.length)
    }, 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" className="relative w-full min-h-[88vh] overflow-hidden bg-[#080808]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay gradient for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 pt-28 pb-24">
        <motion.p 
          initial={{ opacity: 0, y: 8 }} 
          animate={{ opacity: 0.9, y: 0 }} 
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="uppercase tracking-widest text-sm text-zinc-400">
          Aryan Gupta — Design Researcher / UI/UX Designer
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, y: 12 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
          className="mt-4 text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          Hi, I’m Aryan — I design
          <span className="block mt-2 text-zinc-300 font-semibold">
            <AnimatePresence mode="wait">
              <motion.span 
                key={index}
                initial={{ opacity: 0, y: 8 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="inline-block">
                {specializations[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 8 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="mt-6 max-w-2xl text-zinc-400 text-lg leading-relaxed">
          Modern, minimal, and research-driven design across interfaces, visuals, and products.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 8 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#work" className="text-white/90 border border-white/10 hover:border-white/25 hover:text-white px-5 py-2.5 rounded-full transition-colors">
            View Work
          </a>
          <a href="https://drive.google.com" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white underline-offset-4 hover:underline transition-colors">
            Download Resume
          </a>
        </motion.div>

        <div className="mt-8 text-sm text-zinc-500">
          <span>Bhiwadi, Alwar, Rajasthan • English, Hindi</span>
        </div>
      </div>
    </section>
  )
}
