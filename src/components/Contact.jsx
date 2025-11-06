import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Thanks! Your message has been sent.')
  }

  return (
    <section id="contact" className="relative w-full bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Let’s build something</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">Have a project in mind or just want to say hi? I’d love to hear from you.</p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-white/70">Name</label>
              <input required className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none ring-0 placeholder:text-white/40 focus:border-white/30" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/70">Email</label>
              <input required type="email" className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none ring-0 placeholder:text-white/40 focus:border-white/30" placeholder="jane@company.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm text-white/70">Message</label>
              <textarea required rows={5} className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none ring-0 placeholder:text-white/40 focus:border-white/30" placeholder="Tell me about your project..." />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <button className="rounded-xl bg-white px-5 py-3 font-medium text-gray-900 transition hover:-translate-y-0.5">Send Message</button>
            <p className="text-sm text-emerald-300/90">{status}</p>
          </div>
        </motion.form>

        <div className="mt-10 flex items-center justify-center gap-6 text-white/70">
          <a className="rounded-full border border-white/10 p-2 transition hover:border-white/30 hover:text-white" href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a className="rounded-full border border-white/10 p-2 transition hover:border-white/30 hover:text-white" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a className="rounded-full border border-white/10 p-2 transition hover:border-white/30 hover:text-white" href="mailto:hello@example.com" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
