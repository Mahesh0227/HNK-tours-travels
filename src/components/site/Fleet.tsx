import { Reveal } from "./reveal";
import { Users, Briefcase, Snowflake } from "lucide-react";

const fleet = [
  { name: "Swift Dzire / Honda Amaze", cat: "Sedan", seats: 4, rate: "₹12/km", img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=900&auto=format&fit=crop&q=80" },
  { name: "Toyota Ertiga", cat: "MUV", seats: 6, rate: "₹14/km", img: "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=900&auto=format&fit=crop&q=80" },
  { name: "Toyota Innova Crysta", cat: "Premium", seats: 7, rate: "₹18/km", img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=900&auto=format&fit=crop&q=80" },
  { name: "Tempo Traveller", cat: "Group", seats: 12, rate: "₹22/km", img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=900&auto=format&fit=crop&q=80" },
  { name: "Force Urbania / Mini Bus", cat: "Group+", seats: 17, rate: "₹25/km", img: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=900&auto=format&fit=crop&q=80" },
];

export function Fleet() {
  return (
    <section id="fleet" className="bg-hnk-black py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <h2 className="font-bebas text-hnk-gold text-4xl md:text-5xl tracking-[0.2em]">OUR FLEET</h2>
            <div className="h-0.5 w-20 bg-hnk-red mx-auto mt-4" />
            <p className="mt-5 text-hnk-off/60 max-w-xl mx-auto">A spotless, professionally maintained fleet — choose the ride that fits your journey.</p>
          </div>
        </Reveal>
        <div className="flex lg:grid lg:grid-cols-4 gap-5 overflow-x-auto pb-4 lg:overflow-visible snap-x">
          {fleet.map((v, i) => (
            <Reveal key={v.name} delay={i * 60}>
              <div className="min-w-[280px] lg:min-w-0 snap-start bg-hnk-card border border-white/5 rounded-2xl overflow-hidden hover:-translate-y-1 transition-all glow-red h-full flex flex-col">
                <div className="relative h-44">
                  <img src={v.img} alt={v.name} loading="lazy" className="w-full h-full object-cover" />
                  <span className="absolute top-3 right-3 bg-hnk-gold text-black text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">{v.cat}</span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-display text-xl text-white">{v.name}</h3>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-hnk-off/70">
                    <span className="flex items-center gap-1 bg-black/40 border border-white/10 rounded-full px-2.5 py-1"><Users className="w-3 h-3" />{v.seats} Seater</span>
                    <span className="flex items-center gap-1 bg-black/40 border border-white/10 rounded-full px-2.5 py-1"><Briefcase className="w-3 h-3" />Luggage</span>
                    <span className="flex items-center gap-1 bg-black/40 border border-white/10 rounded-full px-2.5 py-1"><Snowflake className="w-3 h-3" />AC</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between mt-auto pt-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-hnk-off/50">Starting</div>
                      <div className="font-bebas text-2xl text-hnk-gold">{v.rate}</div>
                    </div>
                    <a href="#contact" className="bg-hnk-red hover:bg-[#b8031f] text-white text-xs font-semibold px-4 py-2 rounded-full">Book →</a>
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