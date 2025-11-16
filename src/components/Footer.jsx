export default function Footer() {
  return (
    <footer className="bg-[#080808] text-white pt-16 pb-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">Let’s work together</h3>
            <p className="mt-2 text-zinc-400">Available for internships, freelance, and research-led product roles.</p>
          </div>
          <div className="space-x-6">
            <a href="mailto:guptaaryan130@gmail.com" className="text-zinc-300 hover:text-white underline-offset-4 hover:underline transition-colors">guptaaryan130@gmail.com</a>
            <a href="https://www.behance.net/aryangupta34" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white underline-offset-4 hover:underline transition-colors">Behance</a>
            <a href="https://guptaaryan130.wixstudio.com/aryansportfolio" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white underline-offset-4 hover:underline transition-colors">Portfolio</a>
          </div>
        </div>
        <div className="mt-12 h-px bg-white/10" />
        <div className="mt-6 text-xs text-zinc-500">© {new Date().getFullYear()} Aryan Gupta. All rights reserved.</div>
      </div>
    </footer>
  )
}
