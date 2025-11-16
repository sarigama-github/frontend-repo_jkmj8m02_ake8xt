import Hero from './components/Hero'
import Work from './components/Work'
import Skills from './components/Skills'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#080808] text-white selection:bg-white/10 selection:text-white">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#080808]/60 bg-[#080808]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 h-14 flex items-center justify-between">
          <a href="#home" className="text-sm tracking-widest text-zinc-300 hover:text-white transition-colors uppercase">Your Name</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-300">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Work />
        <Skills />
        <About />
        <div id="contact" />
      </main>

      <Footer />
    </div>
  )
}

export default App
