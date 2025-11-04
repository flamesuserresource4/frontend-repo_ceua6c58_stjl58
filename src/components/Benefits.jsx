import { motion } from 'framer-motion';
import { Shield, Clock, Code, Layers, Users, Zap } from 'lucide-react';

const benefits = [
  {
    title: 'End-to-End Digitalization',
    desc: 'From discovery and UX to deployment and support, we handle the full product lifecycle.',
    icon: Layers,
  },
  {
    title: 'Experienced Team',
    desc: 'A cross-disciplinary crew of engineers, designers, and 3D specialists.',
    icon: Users,
  },
  {
    title: 'Reliable Delivery',
    desc: 'Transparent timelines, agile sprints, and production-grade quality.',
    icon: Clock,
  },
  {
    title: 'Custom Software',
    desc: 'Modern web apps, APIs, and internal tools tailored to your business.',
    icon: Code,
  },
  {
    title: 'Security First',
    desc: 'Best practices, reviews, and monitoring baked into every release.',
    icon: Shield,
  },
  {
    title: '3D Modeling & Printing',
    desc: 'Fast, precise 3D assets and prints for prototypes and production.',
    icon: Zap,
  },
];

export default function Benefits() {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-x-0 -top-16 h-40 bg-gradient-to-b from-[#77CD20]/10 to-transparent" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold text-white"
            >
              Why choose Nirmalabs
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-4 text-white/70 max-w-xl"
            >
              We combine software craftsmanship with creative 3D solutions to accelerate your digital transformation.
            </motion.p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {benefits.map((b, idx) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
                >
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-[#77CD20] to-emerald-400 text-black grid place-items-center shadow shadow-emerald-500/30">
                    <b.icon size={18} />
                  </div>
                  <h3 className="mt-4 font-semibold text-white">{b.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative mt-6 md:mt-0">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#77CD20]/40 to-emerald-400/30 blur-xl" aria-hidden />
            <div className="relative rounded-3xl border border-white/10 bg-black/60 p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: 'Custom Web Apps', k: 'A' },
                  { title: 'Business Automation', k: 'B' },
                  { title: '3D Modeling', k: 'C' },
                  { title: '3D Printing', k: 'D' },
                ].map((s) => (
                  <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-xs text-white/50">Service</div>
                    <div className="mt-1 font-medium text-white">{s.title}</div>
                    <div className="mt-4 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-1/2 bg-gradient-to-r from-[#77CD20] to-emerald-400" />
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-tr from-[#77CD20] to-emerald-400 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-emerald-500/20"
              >
                Start your project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
