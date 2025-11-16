import { Mail, Linkedin, Github, Globe } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="bg-[#080808] text-white py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase text-white/90">Contact</h2>
        <p className="mt-4 text-zinc-400 max-w-2xl">Have a project or role in mind? I’m open to freelance collaborations and product design engagements.</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a href="mailto:you@example.com" className="group rounded-xl border border-white/10 bg-[#0c0c0c] p-5 hover:border-white/20 transition-colors flex items-center gap-3">
            <span className="rounded-md bg-white/5 p-2.5"><Mail className="w-5 h-5 text-zinc-200" /></span>
            <div>
              <div className="font-medium">Email</div>
              <div className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">you@example.com</div>
            </div>
          </a>

          <a href="#" target="_blank" rel="noreferrer" className="group rounded-xl border border-white/10 bg-[#0c0c0c] p-5 hover:border-white/20 transition-colors flex items-center gap-3">
            <span className="rounded-md bg-white/5 p-2.5"><Linkedin className="w-5 h-5 text-zinc-200" /></span>
            <div>
              <div className="font-medium">LinkedIn</div>
              <div className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">Add your profile URL</div>
            </div>
          </a>

          <a href="#" target="_blank" rel="noreferrer" className="group rounded-xl border border-white/10 bg-[#0c0c0c] p-5 hover:border-white/20 transition-colors flex items-center gap-3">
            <span className="rounded-md bg-white/5 p-2.5"><Github className="w-5 h-5 text-zinc-200" /></span>
            <div>
              <div className="font-medium">GitHub</div>
              <div className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">Add your profile URL</div>
            </div>
          </a>

          <a href="#" target="_blank" rel="noreferrer" className="group rounded-xl border border-white/10 bg-[#0c0c0c] p-5 hover:border-white/20 transition-colors flex items-center gap-3">
            <span className="rounded-md bg-white/5 p-2.5"><Globe className="w-5 h-5 text-zinc-200" /></span>
            <div>
              <div className="font-medium">Resume</div>
              <div className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">Link to your PDF</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
