import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./reveal";

const imgs = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1520637836862-4d197d17c63a?w=1200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&auto=format&fit=crop&q=80",
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const close = () => setOpen(null);
  const next = () => setOpen((i) => (i === null ? null : (i + 1) % imgs.length));
  const prev = () => setOpen((i) => (i === null ? null : (i - 1 + imgs.length) % imgs.length));
  return (
    <section className="bg-hnk-black py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <div className="font-bebas text-hnk-gold text-4xl md:text-5xl tracking-[0.2em]">OUR MOMENTS</div>
            <div className="h-0.5 w-20 bg-hnk-red mx-auto mt-4" />
          </div>
        </Reveal>
        <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {imgs.map((src, i) => (
            <button
              key={src + i}
              onClick={() => setOpen(i)}
              className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl group relative"
            >
              <img src={src} alt="HNK gallery" loading="lazy" className="w-full transition-transform duration-700 group-hover:scale-110" style={{ aspectRatio: i % 3 === 0 ? "3/4" : i % 3 === 1 ? "1/1" : "4/3" }} />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
            </button>
          ))}
        </div>
      </div>
      {open !== null && (
        <div className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-5" onClick={close}>
          <button onClick={close} className="absolute top-5 right-5 text-white p-2"><X /></button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-5 text-white p-3 bg-white/10 rounded-full"><ChevronLeft /></button>
          <img src={imgs[open]} alt="" className="max-h-[85vh] max-w-[90vw] rounded-xl" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-5 text-white p-3 bg-white/10 rounded-full"><ChevronRight /></button>
        </div>
      )}
    </section>
  );
}