import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Reveal } from "./reveal";

const items = [
  { n: "Ravi K.", loc: "Hyderabad", c: "RK", color: "bg-hnk-red", text: "Best Araku trip ever! Driver was knowledgeable and spotlessly clean car." },
  { n: "Priya M.", loc: "Vizag", c: "PM", color: "bg-hnk-gold", text: "Airport pickup at 3 AM — perfectly on time. Absolutely reliable!" },
  { n: "Suresh R.", loc: "Bangalore", c: "SR", color: "bg-hnk-orange", text: "Corporate travel for 15 people. Zero issues, very professional team." },
  { n: "Anitha V.", loc: "Chennai", c: "AV", color: "bg-hnk-red", text: "Tirupati trip was smooth and comfortable. Highly recommend HNK!" },
  { n: "Mohammed S.", loc: "Hyderabad", c: "MS", color: "bg-hnk-gold", text: "The Innova Crysta was immaculate. Great driver, great experience." },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 4500);
    return () => clearInterval(t);
  }, []);
  const visible = [0, 1, 2].map((o) => items[(idx + o) % items.length]);
  return (
    <section className="relative bg-hnk-bg py-28 overflow-hidden">
      <div className="absolute inset-0 speed-lines opacity-40" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <div className="font-bebas text-hnk-gold text-4xl md:text-5xl tracking-[0.2em]">WHAT OUR CLIENTS SAY</div>
            <div className="h-0.5 w-20 bg-hnk-red mx-auto mt-4" />
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <div key={t.n + i} className="bg-hnk-card border border-white/5 rounded-2xl p-7 hover:border-hnk-gold/40 transition-all">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${t.color} text-black font-bold flex items-center justify-center`}>{t.c}</div>
                <div>
                  <div className="font-semibold text-white">{t.n}</div>
                  <div className="text-xs text-hnk-off/60">{t.loc}</div>
                </div>
              </div>
              <div className="flex gap-1 mt-4 text-hnk-gold">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="mt-4 text-hnk-off/80 italic font-display">"{t.text}"</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Slide ${i + 1}`} className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-hnk-gold" : "w-3 bg-white/20"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}