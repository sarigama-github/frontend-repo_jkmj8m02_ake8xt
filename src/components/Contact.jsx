import { Mail, Globe, Palette, FileText } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="bg-[#080808] text-white py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase text-white/90">Contact</h2>
        <p className="mt-4 text-zinc-400 max-w-2xl">Have a project or role in mind? I’m open to freelance collaborations and research-led product design engagements.</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a href="mailto:guptaaryan130@gmail.com" className="group rounded-xl border border-white/10 bg-[#0c0c0c] p-5 hover:border-white/20 transition-colors flex items-center gap-3">
            <span className="rounded-md bg-white/5 p-2.5"><Mail className="w-5 h-5 text-zinc-200" /></span>
            <div>
              <div className="font-medium">Email</div>
              <div className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">guptaaryan130@gmail.com</div>
            </div>
          </a>

          <a href="https://www.behance.net/aryangupta34" target="_blank" rel="noreferrer" className="group rounded-xl border border-white/10 bg-[#0c0c0c] p-5 hover:border-white/20 transition-colors flex items-center gap-3">
            <span className="rounded-md bg-white/5 p-2.5"><Palette className="w-5 h-5 text-zinc-200" /></span>
            <div>
              <div className="font-medium">Behance</div>
              <div className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">behance.net/aryangupta34</div>
            </div>
          </a>

          <a href="https://guptaaryan130.wixstudio.com/aryansportfolio" target="_blank" rel="noreferrer" className="group rounded-xl border border-white/10 bg-[#0c0c0c] p-5 hover:border-white/20 transition-colors flex items-center gap-3">
            <span className="rounded-md bg-white/5 p-2.5"><Globe className="w-5 h-5 text-zinc-200" /></span>
            <div>
              <div className="font-medium">Portfolio Website</div>
              <div className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">View selected work</div>
            </div>
          </a>

          <a href="https://drive.google.com" target="_blank" rel="noreferrer" className="group rounded-xl border border-white/10 bg-[#0c0c0c] p-5 hover:border-white/20 transition-colors flex items-center gap-3">
            <span className="rounded-md bg-white/5 p-2.5"><FileText className="w-5 h-5 text-zinc-200" /></span>
            <div>
              <div className="font-medium">Resume</div>
              <div className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">PDF link</div>
            </div>
          </a>
        </div>

        <div className="mt-8 text-sm text-zinc-500">Phone: +91 8875446262 • Bhiwadi, Alwar, Rajasthan (301019)</div>
      </div>
    </section>
  )
}
