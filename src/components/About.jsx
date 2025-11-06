import { motion } from 'framer-motion'
import { Code, Cpu, Database, Sparkles } from 'lucide-react'

const skills = [
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Python', level: 88 },
  { name: 'TypeScript', level: 82 },
  { name: 'GraphQL', level: 75 },
  { name: 'Docker', level: 78 },
]

export default function About() {
  return (
    <section id="about" className="relative w-full bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">About</h2>
            <p className="mt-3 max-w-prose text-white/70">Full‑stack engineer with a product mindset. I craft performant interfaces and reliable services, from design systems to distributed backends.</p>
          </div>
          <div className="hidden gap-3 md:flex">
            <Badge icon={Code} label="Frontend" />
            <Badge icon={Database} label="Backend" />
            <Badge icon={Cpu} label="Systems" />
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h3 className="mb-6 flex items-center gap-2 text-lg font-medium"><Sparkles className="h-4 w-4"/> Skill Signal</h3>
            <div className="space-y-4">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="mb-2 flex items-center justify-between text-sm text-white/70">
                    <span>{s.name}</span>
                    <span>{s.level}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6"
          >
            <h3 className="mb-6 text-lg font-medium">Highlights</h3>
            <ul className="space-y-4 text-white/80">
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                Led end‑to‑end delivery of data‑driven products used by thousands of users.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-400" />
                Built design systems and component libraries with accessibility in mind.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-400" />
                Architected scalable services, CI/CD pipelines, and observability.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Badge({ icon: Icon, label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
      <Icon className="h-3.5 w-3.5"/>
      {label}
    </span>
  )
}
