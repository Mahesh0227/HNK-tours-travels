import { Reveal } from "./reveal";
import { Check } from "lucide-react";

const pkgs = [
  {
    name: "Araku Valley Day Trip",
    duration: "1 Day",
    price: "₹2,500",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&auto=format&fit=crop&q=80",
    highlights: ["Borra Caves", "Coffee Plantations", "Tribal Museum", "Lunch stops"],
  },
  {
    name: "Vizag Full City Tour",
    duration: "1 Day",
    price: "₹1,800",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&auto=format&fit=crop&q=80",
    highlights: ["8 major attractions", "Kailasagiri ropeway", "RK Beach", "Submarine museum"],
  },
  {
    name: "Vizag → Hyderabad Outstation",
    duration: "2 Days",
    price: "₹6,500",
    img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1400&auto=format&fit=crop&q=80",
    highlights: ["AC Sedan or SUV", "Driver allowance incl.", "Fuel & tolls", "Flexible halts"],
  },
];

export function Packages() {
  return (
    <section className="bg-hnk-bg py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <div className="font-bebas text-hnk-gold text-4xl md:text-5xl tracking-[0.2em]">POPULAR PACKAGES</div>
            <div className="h-0.5 w-20 bg-hnk-red mx-auto mt-4" />
          </div>
        </Reveal>
        <div className="space-y-7">
          {pkgs.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div className="relative grid md:grid-cols-2 rounded-2xl overflow-hidden border border-white/5 bg-hnk-card glow-gold transition-all">
                <div className="relative h-64 md:h-auto">
                  <img src={p.img} alt={p.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:from-transparent md:to-black/70" />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="inline-flex w-fit items-center bg-hnk-gold text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">{p.duration}</span>
                  <h3 className="font-display text-3xl text-white mt-3">{p.name}</h3>
                  <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-hnk-off/80">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2"><Check className="w-4 h-4 text-hnk-gold" />{h}</li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-hnk-off/50">Starting from</div>
                      <div className="font-bebas text-4xl text-gradient-rg">{p.price}</div>
                    </div>
                    <a href="#contact" className="bg-hnk-red hover:bg-[#b8031f] text-white px-6 py-3 rounded-full font-semibold">Enquire Now →</a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}