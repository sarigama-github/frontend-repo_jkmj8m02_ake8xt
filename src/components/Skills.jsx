import { Figma, Ruler, BarChart3, Palette, PenTool, Code2, Images, Cpu, Layers, FileText, Globe, Search } from 'lucide-react'

const skills = [
  { icon: Figma, name: 'Figma', desc: 'Wireframes, components, interactive prototyping' },
  { icon: Search, name: 'Design Research', desc: 'Ethnography, qualitative synthesis, heuristic evaluation' },
  { icon: BarChart3, name: 'Analytics', desc: 'Stakeholder mapping, causal loops, insight frameworks' },
  { icon: PenTool, name: 'UI/Visual Design', desc: 'Typography, layout, systems and motion' },
  { icon: Code2, name: 'Web', desc: 'HTML/CSS basics, UI design collaboration' },
  { icon: Layers, name: 'System Thinking', desc: 'Sustainable systems, socio-economic research' },
  { icon: Images, name: 'Motion/Assets', desc: 'Rive basics, asset pipelines, micro-interactions' },
  { icon: FileText, name: 'Documentation', desc: 'Case studies, research reports, presentations' },
  { icon: Globe, name: 'Tools', desc: 'Photoshop, Illustrator, InDesign, Blender, DaVinci, Canva' },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-[#080808] text-white py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase text-white/90">Skills</h2>
        <p className="mt-4 text-zinc-400 max-w-2xl">A focused toolkit across research, systems, and interface design.</p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ icon: Icon, name, desc }) => (
            <div key={name} className="rounded-xl border border-white/10 bg-[#0c0c0c] p-5 hover:border-white/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-lg bg-white/5 p-3">
                  <Icon className="w-5 h-5 text-zinc-200" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{name}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
