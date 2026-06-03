import { Reveal } from "./reveal";

const dests = [
  { name: "Araku Valley", desc: "Coffee hills, tribal culture & misty valleys", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&auto=format&fit=crop&q=80" },
  { name: "Lambasingi", desc: "AP's Kashmir — foggy hilltop retreat", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&auto=format&fit=crop&q=80" },
  { name: "Borra Caves", desc: "Ancient limestone caves near Araku", img: "https://images.unsplash.com/photo-1520637836862-4d197d17c63a?w=900&auto=format&fit=crop&q=80" },
  { name: "RK Beach", desc: "Vizag's iconic seafront promenade", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80" },
  { name: "Kailasagiri", desc: "Hill park with stunning bay views", img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&auto=format&fit=crop&q=80" },
  { name: "Simhachalam Temple", desc: "Sacred 11th century Vishnu temple", img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80" },
  { name: "Annavaram", desc: "Famous Sri Veera Venkata Satyanarayana temple", img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=900&auto=format&fit=crop&q=80" },
  { name: "Tirupati", desc: "World's most visited Hindu pilgrimage", img: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=900&auto=format&fit=crop&q=80" },
];

export function Destinations() {
  return (
    <section id="tours" className="bg-hnk-black py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <h2 className="font-bebas text-hnk-gold text-4xl md:text-5xl tracking-[0.2em]">EXPLORE WITH US</h2>
            <div className="h-0.5 w-20 bg-hnk-red mx-auto mt-4" />
            <p className="mt-5 text-hnk-off/60 max-w-xl mx-auto">Eight signature destinations curated by locals who know every turn of the road.</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {dests.map((d, i) => (
            <Reveal key={d.name} delay={i * 60}>
              <div className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer">
                <img src={d.img} alt={d.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-2xl text-white">{d.name}</h3>
                  <p className="text-xs text-hnk-off/70 mt-1 mb-3">{d.desc}</p>
                  <a href="#contact" className="inline-block bg-hnk-red hover:bg-[#b8031f] text-white text-xs font-semibold px-4 py-2 rounded-full">Book Tour</a>
                </div>
                <div className="absolute inset-0 ring-0 ring-hnk-gold/0 group-hover:ring-2 group-hover:ring-hnk-gold/60 transition-all rounded-2xl" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}