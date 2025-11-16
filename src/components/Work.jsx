import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Ecommerce Redesign',
    type: 'Freelance',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'AR Museum Guide',
    type: 'Academic Project',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Personal Finance App',
    type: 'Personal',
    image: 'https://images.unsplash.com/photo-1758519292135-2af0ad50f552?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQZXJzb25hbCUyMEZpbmFuY2UlMjBBcHB8ZW58MHwwfHx8MTc2MzMxMjU5OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

export default function Work() {
  return (
    <section id="work" className="bg-[#080808] text-white py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase text-white/90">Work</h2>
        <p className="mt-4 text-zinc-400 max-w-2xl">Selected projects spanning product design, visuals, and UX strategy.</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href="#"
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
                  Explore the process, flows, and outcomes behind this project.
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
