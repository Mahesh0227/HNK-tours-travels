import { MapPin, Plane, Route } from "lucide-react";
import { Reveal } from "./reveal";

export function Booking() {
  return (
    <section id="booking" className="relative bg-hnk-bg py-24">
      <div className="max-w-4xl mx-auto px-5">
        <Reveal>
          <div className="bg-hnk-card rounded-2xl p-8 md:p-10 border-t-4 border-t-hnk-gold shadow-[0_30px_80px_-30px_rgba(217,4,41,0.45)]">
            <div className="text-center mb-8">
              <div className="font-bebas text-hnk-red text-3xl tracking-[0.25em]">BOOK YOUR RIDE</div>
              <div className="h-px w-16 bg-hnk-gold mx-auto mt-3" />
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input aria-label="Pickup location" placeholder="Pickup Location" className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 placeholder:text-white/40" />
              <input aria-label="Drop location" placeholder="Drop Location" className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 placeholder:text-white/40" />
              <input aria-label="Pickup date" type="date" className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white/70" />
              <input aria-label="Pickup time" type="time" className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white/70" />
              <select aria-label="Vehicle type" className="md:col-span-2 bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white/70">
                <option>Vehicle Type — Sedan (Swift Dzire)</option>
                <option>MUV — Toyota Ertiga</option>
                <option>Premium — Innova Crysta</option>
                <option>Group — Tempo Traveller</option>
                <option>Mini Bus — Force Urbania</option>
              </select>
              <button type="button" className="md:col-span-2 bg-hnk-red hover:bg-[#b8031f] text-white py-4 rounded-lg font-semibold tracking-wide glow-red transition-all">
                Get Instant Quote →
              </button>
            </form>
            <div className="flex flex-wrap justify-center gap-3 mt-7">
              {[
                { Icon: MapPin, t: "City Cabs" },
                { Icon: Plane, t: "Airport" },
                { Icon: Route, t: "Outstation" },
              ].map(({ Icon, t }) => (
                <div key={t} className="flex items-center gap-2 bg-black/40 border border-hnk-gold/30 text-hnk-off/90 rounded-full px-4 py-1.5 text-sm">
                  <Icon className="w-4 h-4 text-hnk-gold" /> {t}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}