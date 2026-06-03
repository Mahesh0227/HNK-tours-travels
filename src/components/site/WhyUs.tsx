import { Car, ShieldCheck, Clock, Wallet } from "lucide-react";
import { Reveal, CountUp } from "./reveal";

const pills = [
  { Icon: Car, t: "Reliable Taxi Service" },
  { Icon: ShieldCheck, t: "Safe & Verified Drivers" },
  { Icon: Clock, t: "On-Time Pickup" },
  { Icon: Wallet, t: "No Hidden Charges" },
];

const stats = [
  { n: 20000, s: "+", l: "Happy Customers" },
  { n: 10, s: "+", l: "Years Experience" },
  { n: 50, s: "+", l: "Destinations Covered" },
  { n: 24, s: "/7", l: "Always Available" },
];

export function WhyUs() {
  return (
    <section id="about" className="relative bg-hnk-bg py-28 overflow-hidden">
      <div className="absolute inset-0 speed-lines opacity-50" />
      <div className="absolute -left-20 top-1/3 w-[400px] h-[400px] rounded-full bg-hnk-red/10 blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <Reveal>
            <div className="font-bebas text-hnk-red text-3xl tracking-[0.25em]">WHY HNK</div>
            <h2 className="font-display text-4xl md:text-5xl text-white mt-3">Driven by trust. <span className="italic text-hnk-gold">Defined by detail.</span></h2>
          </Reveal>
          <div className="mt-9 space-y-4">
            {pills.map(({ Icon, t }, i) => (
              <Reveal key={t} delay={i * 100}>
                <div className="flex items-center gap-4 bg-hnk-card border border-white/5 hover:border-hnk-gold/40 rounded-xl px-5 py-4 transition-all">
                  <div className="w-11 h-11 rounded-full bg-hnk-red/15 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-hnk-gold" />
                  </div>
                  <span className="text-hnk-off font-medium">{t}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {stats.map(({ n, s, l }, i) => (
            <Reveal key={l} delay={i * 100}>
              <div className="bg-hnk-card border border-white/5 rounded-2xl p-7 text-center hover:border-hnk-gold/40 transition glow-gold">
                <div className="font-bebas text-5xl md:text-6xl text-gradient-rg">
                  <CountUp end={n} suffix={s} />
                </div>
                <div className="mt-2 text-sm uppercase tracking-widest text-hnk-off/60">{l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <Reveal>
        <p className="mt-16 text-center font-display italic text-2xl md:text-3xl text-hnk-gold px-5">
          "Your comfort is our commitment."
        </p>
      </Reveal>
    </section>
  );
}