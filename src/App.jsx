import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Highlights from './components/Highlights';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Highlights />

        <section id="contact" className="relative py-20">
          <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#77CD20]/10 to-transparent" />
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold">Let’s build something great</h2>
                <p className="mt-3 text-white/70">Tell us about your goals and we’ll get back to you within one business day.</p>
                <div className="mt-6 grid gap-3 text-sm text-white/70">
                  <div>
                    <span className="text-white">Email:</span> hello@nirmalabs.com
                  </div>
                  <div>
                    <span className="text-white">Phone:</span> +1 (000) 000-0000
                  </div>
                </div>
              </div>
              <form className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-white/70">Name</label>
                    <input className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="text-sm text-white/70">Email</label>
                    <input type="email" className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="jane@company.com" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="text-sm text-white/70">Project details</label>
                  <textarea rows={4} className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="Tell us about your idea, goals, and timeline..." />
                </div>
                <button type="button" className="mt-5 w-full rounded-xl bg-gradient-to-tr from-[#77CD20] to-emerald-400 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-emerald-500/20">
                  Request a quote
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <div>© {new Date().getFullYear()} Nirmalabs. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#team" className="hover:text-white">Team</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
