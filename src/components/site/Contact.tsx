import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #1a0205 0%, #0d0d0d 60%)" }}>
      <div className="absolute inset-0 speed-lines opacity-30" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14">
        <Reveal>
          <div>
            <div className="font-bebas text-hnk-gold text-3xl tracking-[0.25em]">GET IN TOUCH</div>
            <h2 className="font-display text-4xl md:text-5xl text-white mt-3">Let's plan your <span className="italic text-hnk-gold">next ride.</span></h2>
            <div className="mt-8 space-y-5">
              <a href="tel:9912360321" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-hnk-red/20 flex items-center justify-center"><Phone className="w-5 h-5 text-hnk-red" /></div>
                <div><div className="text-xs uppercase tracking-widest text-hnk-off/50">Call</div><div className="text-xl text-white group-hover:text-hnk-gold transition">9912360321</div></div>
              </a>
              <a href="tel:7396024204" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-hnk-red/20 flex items-center justify-center"><Phone className="w-5 h-5 text-hnk-red" /></div>
                <div><div className="text-xs uppercase tracking-widest text-hnk-off/50">Alt</div><div className="text-xl text-white group-hover:text-hnk-gold transition">7396024204</div></div>
              </a>
              <a href="mailto:hnktourstravels15@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-hnk-gold/20 flex items-center justify-center"><Mail className="w-5 h-5 text-hnk-gold" /></div>
                <div><div className="text-xs uppercase tracking-widest text-hnk-off/50">Email</div><div className="text-lg text-white group-hover:text-hnk-gold transition">hnktourstravels15@gmail.com</div></div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-hnk-gold/20 flex items-center justify-center"><MapPin className="w-5 h-5 text-hnk-gold" /></div>
                <div><div className="text-xs uppercase tracking-widest text-hnk-off/50">Location</div><div className="text-lg text-white">Simhachalam, Visakhapatnam, AP</div></div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:9912360321" className="bg-hnk-red hover:bg-[#b8031f] text-white px-5 py-3 rounded-full font-semibold flex items-center gap-2"><Phone className="w-4 h-4" />Call Now</a>
              <a href="https://wa.me/919912360321" target="_blank" rel="noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full font-semibold flex items-center gap-2"><MessageCircle className="w-4 h-4" />WhatsApp</a>
              <a href="#booking" className="bg-hnk-gold hover:brightness-110 text-black px-5 py-3 rounded-full font-semibold">Book Now</a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <form className="bg-hnk-card border border-white/5 rounded-2xl p-7 space-y-4">
            <div className="font-bebas text-hnk-red text-2xl tracking-[0.25em]">BOOKING ENQUIRY</div>
            <input aria-label="Full name" placeholder="Full Name" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 placeholder:text-white/40" />
            <input aria-label="Phone number" placeholder="Phone Number" type="tel" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 placeholder:text-white/40" />
            <select aria-label="Trip type" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white/70">
              <option>Trip Type — Airport</option>
              <option>City Tour</option>
              <option>Araku</option>
              <option>Outstation</option>
              <option>Corporate</option>
              <option>Other</option>
            </select>
            <div className="grid grid-cols-2 gap-3">
              <input aria-label="Travel date" type="date" className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white/70" />
              <input aria-label="Passengers" type="number" placeholder="Passengers" className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 placeholder:text-white/40" />
            </div>
            <textarea aria-label="Message" placeholder="Message / Special requests" rows={3} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 placeholder:text-white/40" />
            <button type="button" className="w-full bg-hnk-red hover:bg-[#b8031f] text-white py-4 rounded-lg font-semibold glow-red">Send Enquiry →</button>
          </form>
        </Reveal>
      </div>
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 mt-14">
        <Reveal>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <iframe
              title="HNK Tours Location"
              src="https://www.google.com/maps?q=Simhachalam,Visakhapatnam&output=embed"
              className="w-full h-80"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}