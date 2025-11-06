import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="border-t border-white/10 bg-neutral-950/80 py-10 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Your Name — All rights reserved.</p>
          <a href="#" className="rounded-full border border-white/10 px-3 py-1 transition hover:border-white/30">Back to top</a>
        </div>
      </footer>
    </div>
  )
}

export default App
