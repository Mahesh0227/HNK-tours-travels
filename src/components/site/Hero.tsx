import { useEffect, useState } from "react";
import { Phone, Calendar, ShieldCheck, Clock, BadgeCheck, Wallet } from "lucide-react";

const slides = [
  "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1920&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&auto=format&fit=crop&q=80",
];

export function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {slides.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ${i === idx ? "opacity-100" : "opacity-0"}`}
        >
          <img src={src} alt="Vizag highway" className="w-full h-full object-cover kenburns" loading={i === 0 ? "eager" : "lazy"} />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
      <div className="absolute inset-0 speed-lines opacity-40" />

      <div className="absolute top-28 right-5 md:right-10 z-10 float-y">
        <div className="glass-card rounded-full px-4 py-2 text-xs uppercase tracking-widest text-hnk-gold flex items-center gap-2">
          <span>⭐</span> Vizag's #1 Cab Service · Est. 2026
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-40 pb-24 min-h-screen flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="font-bebas text-hnk-gold text-6xl md:text-8xl leading-none">
            RIDE BEYOND
            <span className="block font-display italic text-white text-4xl md:text-6xl mt-2 normal-case tracking-normal">Your Destination</span>
            <span className="sr-only"> — HNK Tours & Travels, premium cab service in Visakhapatnam</span>
          </h1>
          <p className="mt-6 text-gray-300 max-w-xl font-light">
            Premium cab services across Vizag, Araku & beyond — available 24/7
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:9912360321"
              className="inline-flex items-center justify-center gap-2 bg-hnk-red hover:bg-[#b8031f] text-white px-7 py-4 rounded-full font-semibold transition-all glow-red"
            >
              <Phone className="w-5 h-5" /> Call Now — 9912360321
            </a>
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 border-2 border-hnk-gold text-hnk-gold hover:bg-hnk-gold hover:text-black px-7 py-4 rounded-full font-semibold transition-all"
            >
              <Calendar className="w-5 h-5" /> Book a Ride
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-hnk-off/80">
            {[
              { Icon: Clock, t: "24/7 Service" },
              { Icon: BadgeCheck, t: "Professional Drivers" },
              { Icon: ShieldCheck, t: "Safe Travel" },
              { Icon: Wallet, t: "No Hidden Charges" },
            ].map(({ Icon, t }) => (
              <div key={t} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-hnk-gold" /> {t}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block absolute bottom-10 right-8 w-[340px] glass-card rounded-2xl p-5 border-t-2 border-t-hnk-gold">
          <div className="font-bebas text-hnk-red text-lg tracking-widest">QUICK QUOTE</div>
          <div className="grid grid-cols-2 gap-2 mt-3">
            <input aria-label="Pickup location" placeholder="Pickup" className="bg-black/40 border border-white/10 rounded-md px-3 py-2 text-sm placeholder:text-white/40" />
            <input aria-label="Drop location" placeholder="Drop" className="bg-black/40 border border-white/10 rounded-md px-3 py-2 text-sm placeholder:text-white/40" />
            <input aria-label="Travel date" type="date" className="bg-black/40 border border-white/10 rounded-md px-3 py-2 text-sm text-white/70" />
            <select aria-label="Trip type" className="bg-black/40 border border-white/10 rounded-md px-3 py-2 text-sm text-white/70">
              <option>One Way</option>
              <option>Round Trip</option>
              <option>Hourly</option>
            </select>
          </div>
          <a href="#contact" className="mt-3 block text-center bg-hnk-red hover:bg-[#b8031f] text-white py-2.5 rounded-md font-semibold text-sm">
            Get Quote →
          </a>
        </div>
      </div>
    </section>
  );
}