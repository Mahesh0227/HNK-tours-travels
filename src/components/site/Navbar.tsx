import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#fleet", label: "Fleet" },
  { href: "#tours", label: "Tours" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0d0d0d]/85 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-baseline gap-2">
          <span className="font-bebas text-3xl text-gradient-rg leading-none">HNK</span>
          <span className="text-xs tracking-[0.25em] uppercase text-hnk-off/70 font-body">Tours & Travels</span>
        </a>
        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-hnk-off/80 hover:text-hnk-gold transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 hover:after:w-full after:bg-hnk-gold after:transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="tel:9912360321"
            className="hidden md:inline-flex items-center gap-2 bg-hnk-red hover:bg-[#b8031f] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all glow-red"
          >
            <Phone className="w-4 h-4" /> Book Now
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-hnk-off p-2"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-[#0a0a0a] border-t border-white/5 animate-fade-in">
          <div className="px-5 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-hnk-off/80 hover:text-hnk-gold py-2 border-b border-white/5"
              >
                {l.label}
              </a>
            ))}
            <a href="tel:9912360321" className="bg-hnk-red text-white text-center px-5 py-3 rounded-full font-semibold">
              📞 Book Now — 9912360321
            </a>
          </div>
        </div>
      )}
    </header>
  );
}