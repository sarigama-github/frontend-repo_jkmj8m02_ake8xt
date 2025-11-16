import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Specta Surfaces Website',
    type: 'Internship — Medea Agency',
    link: '#',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop',
    desc: 'Led UI/UX design: layouts, wireframes, and infographics to improve engagement.'
  },
  {
    title: 'Netflix — New Feature UX',
    type: 'Case Study',
    link: '#',
    image: 'https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?q=80&w=1600&auto=format&fit=crop',
    desc: 'Audit + research with surveys and journeys. Proposed group watch and smart filtering.'
  },
  {
    title: 'Industrial Textile Park — TexConnect',
    type: 'Research / Systems',
    link: '#',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop',
    desc: 'Digital framework integrating infrastructure, sustainability, compliance, and skills.'
  },
  {
    title: 'Cross-Stitch Embroidery — Sangrur',
    type: 'Craft Research',
    link: '#',
    image: 'https://images.unsplash.com/photo-1756361771453-6bce7c2cf539?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDcm9zcy1TdGl0Y2glMjBFbWJyb2lkZXJ5JTIwJUUyJTgwJTk0JTIwU2FuZ3J1cnxlbnwwfDB8fHwxNzYzMzEzMTMwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    desc: 'Ethnographic research, interviews, and causal loop analysis to support craft.'
  },
  {
    title: 'Krishnam Restaurant System Study',
    type: 'System Design Research',
    link: '#',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop',
    desc: 'Mapped stakeholders and sustainability to inform strategic improvements.'
  },
  {
    title: 'Canteen Redesign',
    type: 'Service Design',
    link: '#',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1600&auto=format&fit=crop',
    desc: 'Enhanced communication, workflows, and journeys using design thinking.'
  },
]

export default function Work() {
  return (
    <section id="work" className="bg-[#080808] text-white py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase text-white/90">Work</h2>
        <p className="mt-4 text-zinc-400 max-w-2xl">Selected projects across design research, product, and visual systems.</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group block overflow-hidden rounded-xl border border-white/10 bg-[#0c0c0c]">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <span className="text-xs text-zinc-400 border border-white/10 px-2 py-1 rounded-full">{p.type}</span>
                </div>
                <div className="mt-3 h-px bg-white/10" />
                <p className="mt-3 text-zinc-400 text-sm">
                  {p.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
