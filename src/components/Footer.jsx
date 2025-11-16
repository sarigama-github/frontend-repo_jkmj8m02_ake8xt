export default function Footer() {
  return (
    <footer className="bg-[#080808] text-white pt-16 pb-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">Let’s work together</h3>
            <p className="mt-2 text-zinc-400">Available for freelance and product collaborations.</p>
          </div>
          <div className="space-x-6">
            <a href="mailto:you@example.com" className="text-zinc-300 hover:text-white underline-offset-4 hover:underline transition-colors">you@example.com</a>
            <a href="#" className="text-zinc-300 hover:text-white underline-offset-4 hover:underline transition-colors">LinkedIn</a>
            <a href="#" className="text-zinc-300 hover:text-white underline-offset-4 hover:underline transition-colors">Dribbble</a>
            <a href="#" className="text-zinc-300 hover:text-white underline-offset-4 hover:underline transition-colors">GitHub</a>
          </div>
        </div>
        <div className="mt-12 h-px bg-white/10" />
        <div className="mt-6 text-xs text-zinc-500">© {new Date().getFullYear()} Your Name. All rights reserved.</div>
      </div>
    </footer>
  )
}
