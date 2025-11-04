import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-24 overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -left-32 h-96 w-96 bg-[#77CD20]/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] bg-emerald-500/20 blur-3xl rounded-full" />
      </div>

      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
            >
              Nirmalabs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl"
            >
              Empowering Businesses Through Digital Innovation
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-white/70 max-w-xl"
            >
              We craft custom software, drive business digitalization, and create precise 3D models & prints. From strategy to delivery, we turn complex ideas into elegant products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-[#77CD20] to-emerald-400 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/30 transition-all"
              >
                Our Services
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                See Projects
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
