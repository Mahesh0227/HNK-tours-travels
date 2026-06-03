import { Plane, Mountain, Waves, Car, Route, Building2 } from "lucide-react";
import { Reveal } from "./reveal";

const services = [
  { Icon: Plane, title: "Airport Transfers", desc: "On-time pickups and drops at Visakhapatnam Airport, 24/7" },
  { Icon: Mountain, title: "Araku Valley Tours", desc: "Scenic day trips to Araku, Borra Caves & tribal villages" },
  { Icon: Waves, title: "Vizag City Tours", desc: "Rushikonda, Kailasagiri, RK Beach & all 8 city highlights" },
  { Icon: Car, title: "Local Cab Hire", desc: "Hourly or half-day local cab for errands and meetings" },
  { Icon: Route, title: "Outstation Trips", desc: "Hyderabad, Vijayawada, Tirupati, Chennai & beyond" },
  { Icon: Building2, title: "Corporate Travel", desc: "Dedicated fleet for IT companies and business travel" },
];

export function Services() {
  return (
    <section id="services" className="relative bg-hnk-black py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-bebas text-hnk-gold text-4xl md:text-5xl tracking-[0.2em]">OUR SERVICES</h2>
            <div className="h-0.5 w-20 bg-hnk-red mx-auto mt-4" />
            <p className="mt-5 text-hnk-off/60 max-w-xl mx-auto">Tailored journeys across Andhra Pradesh — from quick airport runs to multi-day mountain getaways.</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="group h-full bg-hnk-card rounded-2xl p-8 border-t-2 border-t-hnk-red/70 border border-white/5 transition-all duration-500 hover:-translate-y-2 glow-red relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-hnk-red/10 blur-3xl group-hover:bg-hnk-red/20 transition" />
                <Icon className="w-10 h-10 text-hnk-gold relative z-10" />
                <h3 className="mt-5 font-display text-2xl text-white relative z-10">{title}</h3>
                <p className="mt-3 text-hnk-off/70 relative z-10">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}