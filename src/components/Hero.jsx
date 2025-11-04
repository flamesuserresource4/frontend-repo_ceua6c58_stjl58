import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 overflow-hidden bg-[#0B0B0B]">
      {/* Soft ambient glows */}
      <div className="absolute inset-0 opacity-40 pointer-events-none" aria-hidden>
        <div className="absolute top-[-10%] left-[-10%] h-[24rem] w-[24rem] bg-fuchsia-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[28rem] w-[28rem] bg-cyan-500/20 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
          >
            Nirmalabs — Building the Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-4 text-lg sm:text-xl text-white/80"
          >
            Software, automation, and 3D innovation with a clean, futuristic aesthetic.
          </motion.p>
        </div>

        {/* Centered Spline aura with animated border ring */}
        <div className="mt-10 sm:mt-14 mx-auto max-w-[820px]">
          <div className="relative">
            {/* Animated border wrapper */}
            <div className="pointer-events-none absolute -inset-[2px] rounded-[2rem] p-[2px]">
              <div className="h-full w-full rounded-[2rem] animate-[spin_12s_linear_infinite] bg-[conic-gradient(var(--tw-gradient-stops))] from-[#77CD20] via-[#6B5BFF] via-50% to-[#FF9D47]" aria-hidden />
            </div>
            <div className="relative rounded-[2rem] border border-white/10 bg-black/60 backdrop-blur-sm overflow-hidden">
              <div className="relative aspect-square">
                <Spline
                  scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
                  style={{ width: '100%', height: '100%' }}
                />
                {/* Subtle radial gradient overlay for depth (no pointer events) */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.06),rgba(0,0,0,0))]" aria-hidden />
              </div>
            </div>
          </div>
        </div>

        {/* CTA buttons centered */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-[#77CD20] to-emerald-400 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/30 transition-all"
          >
            Explore Services
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
