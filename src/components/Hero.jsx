import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 50, damping: 20 })
  const springY = useSpring(y, { stiffness: 50, damping: 20 })
  const rotateX = useTransform(springY, [ -50, 50 ], [ 8, -8 ])
  const rotateY = useTransform(springX, [ -50, 50 ], [ -8, 8 ])
  const containerRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      const posX = e.clientX - (rect.left + rect.width / 2)
      const posY = e.clientY - (rect.top + rect.height / 2)
      x.set(Math.max(-50, Math.min(50, posX / 10)))
      y.set(Math.max(-50, Math.min(50, posY / 10)))
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [x, y])

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft vignette and gradient glow overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />
        <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_50%_20%,rgba(99,102,241,0.25),transparent_60%)]" />
      </div>

      <motion.div
        style={{ rotateX, rotateY }}
        className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-widest text-white/80 backdrop-blur-md"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" /> Available for select projects
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-5xl font-semibold leading-tight md:text-7xl"
        >
          I build
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-indigo-300 via-white to-indigo-200 bg-clip-text px-3 text-transparent"
          >
            intelligent web experiences
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 max-w-2xl text-lg text-white/70"
        >
          Full‑stack engineer focused on performant, elegant interfaces and resilient systems. I turn complex ideas into delightful products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-10 flex items-center gap-4"
        >
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-gray-900 shadow/20 shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-lg">
            View Work
            <svg className="h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/20">
            Contact
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center text-white/60">
          <span className="text-xs">Scroll</span>
          <span className="mt-2 h-8 w-[1px] overflow-hidden bg-white/20">
            <span className="block h-8 w-[1px] animate-[scroll_2s_ease_infinite] bg-white/70" />
          </span>
        </div>
      </div>
      <style>{`@keyframes scroll{0%{transform:translateY(-100%)}100%{transform:translateY(100%)}}`}</style>
    </section>
  )
}
