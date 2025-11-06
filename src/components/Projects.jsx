import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CATEGORIES = ['All', 'Frontend', 'Backend', 'AI', 'Full‑stack']

const items = [
  {
    id: 1,
    title: 'Realtime Collaboration Suite',
    category: 'Full‑stack',
    media: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
    stack: ['React', 'WebRTC', 'Node', 'Postgres']
  },
  {
    id: 2,
    title: 'Vision AI Dashboard',
    category: 'AI',
    media: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop',
    stack: ['Python', 'FastAPI', 'PyTorch']
  },
  {
    id: 3,
    title: 'Design System & UI Kit',
    category: 'Frontend',
    media: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1600&auto=format&fit=crop',
    stack: ['React', 'Tailwind', 'Storybook']
  },
  {
    id: 4,
    title: 'Streaming Analytics Platform',
    category: 'Backend',
    media: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1600&auto=format&fit=crop',
    stack: ['Kafka', 'Go', 'Docker']
  },
]

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = items.filter((i) => filter === 'All' || i.category === filter)

  return (
    <section id="projects" className="relative w-full bg-neutral-980 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold md:text-4xl">Projects</h2>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full border px-4 py-1.5 text-sm transition ${filter === c ? 'border-white/30 bg-white/10' : 'border-white/10 hover:bg-white/5'}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={p.media} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-4">
                  <div className="mb-2 text-sm text-white/60">{p.category}</div>
                  <h3 className="text-lg font-medium">{p.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-white/70">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 hidden place-items-center bg-black/60 p-6 text-center opacity-0 transition group-hover:grid group-hover:opacity-100">
                  <button className="rounded-xl bg-white px-4 py-2 text-gray-900 shadow transition hover:-translate-y-0.5">View Case Study</button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
