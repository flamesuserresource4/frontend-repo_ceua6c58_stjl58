import { motion } from 'framer-motion';
import { Users, Briefcase, Box } from 'lucide-react';

const team = [
  {
    name: 'Nirmal R.',
    role: 'Founder & Principal Engineer',
    img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Aisha K.',
    role: '3D Artist & Modeler',
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Liam P.',
    role: 'Software Engineer',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Sophia M.',
    role: 'Product Designer',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
  },
];

const projects = [
  {
    title: 'Inventory Automation Suite',
    summary: 'Workflow automation and analytics dashboard for a retail chain.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    category: 'Software Development',
  },
  {
    title: 'Architectural Mockup',
    summary: 'Parametric 3D model to validate spatial layout and ergonomics.',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop',
    category: '3D Modeling',
  },
  {
    title: 'Rapid Prototyping Prints',
    summary: 'High-precision printed parts for a hardware startup.',
    img: 'https://images.unsplash.com/photo-1581091014534-6a28f0d5d07f?q=80&w=1200&auto=format&fit=crop',
    category: '3D Printing',
  },
];

export default function Highlights() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div id="team" className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center gap-3">
              <Users className="text-emerald-300" /> Team Preview
            </h2>
            <p className="mt-2 text-white/70">The people behind exceptional products.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-sm text-white hover:bg-white/10">
            Work with us
          </a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative"
            >
              <div className="absolute -inset-[1px] rounded-2xl p-[1px]">
                <div className="h-full w-full rounded-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-300 animate-[spin_14s_linear_infinite] bg-[conic-gradient(var(--tw-gradient-stops))] from-[#77CD20] via-[#6B5BFF] via-50% to-[#FF9D47]" aria-hidden />
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={m.img} alt={m.name} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-4">
                  <div className="font-semibold text-white">{m.name}</div>
                  <div className="text-sm text-white/70">{m.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 text-right">
          <a href="#team" className="text-sm text-emerald-300 hover:text-emerald-200">View all team members →</a>
        </div>

        <div id="projects" className="mt-16 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center gap-3">
              <Briefcase className="text-emerald-300" /> Project Highlights
            </h2>
            <p className="mt-2 text-white/70">Selected work across software, 3D modeling, and printing.</p>
          </div>
          <a href="#projects" className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-sm text-white hover:bg-white/10">
            See all projects
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative"
            >
              <div className="absolute -inset-[1px] rounded-2xl p-[1px]">
                <div className="h-full w-full rounded-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-300 animate-[spin_12s_linear_infinite] bg-[conic-gradient(var(--tw-gradient-stops))] from-[#77CD20] via-[#6B5BFF] via-50% to-[#FF9D47]" aria-hidden />
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
                <div className="aspect-video overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2 py-1 text-emerald-300">
                      <Box size={14} /> {p.category}
                    </span>
                  </div>
                  <h3 className="mt-3 font-semibold text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{p.summary}</p>
                  <a href="#projects" className="mt-3 inline-flex items-center text-sm text-emerald-300 hover:text-emerald-200">Read case study →</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
