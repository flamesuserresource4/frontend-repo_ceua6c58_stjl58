import { useState } from 'react';
import { Menu, X, Rocket, Phone, Layers } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Team', href: '#team' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-[#77CD20] to-emerald-400 grid place-items-center text-black">
              <Rocket size={18} />
            </div>
            <span className="text-white font-semibold tracking-tight group-hover:text-emerald-200 transition-colors">Nirmalabs</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-tr from-[#77CD20] to-emerald-400 px-4 py-2 text-sm font-medium text-black shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/30 transition-all"
            >
              <Phone size={16} /> Get Quote
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg border border-white/10 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-2 text-white/90 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center gap-2 rounded-lg bg-gradient-to-tr from-[#77CD20] to-emerald-400 px-4 py-2 text-sm font-medium text-black shadow-lg shadow-emerald-500/20"
            >
              <Layers size={16} /> Start Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
