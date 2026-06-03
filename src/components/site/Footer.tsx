import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-bebas text-3xl text-gradient-rg">HNK</span>
            <span className="text-xs uppercase tracking-[0.25em] text-hnk-off/70">Tours & Travels</span>
          </div>
          <p className="mt-4 italic font-display text-hnk-gold">"Ride Beyond Your Destination"</p>
          <p className="mt-3 text-sm text-hnk-off/60">Premium cab & tour operator serving Visakhapatnam and Andhra Pradesh with reliable, comfortable, professionally driven journeys since 2026.</p>
        </div>
        <div>
          <div className="font-bebas text-hnk-gold tracking-[0.2em] mb-4">QUICK LINKS</div>
          <ul className="space-y-2 text-sm text-hnk-off/70">
            {["Home","About","Services","Fleet","Gallery","Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-hnk-gold">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-bebas text-hnk-gold tracking-[0.2em] mb-4">SERVICES</div>
          <ul className="space-y-2 text-sm text-hnk-off/70">
            <li>Airport Transfers</li>
            <li>Araku Tours</li>
            <li>City Tours</li>
            <li>Outstation</li>
            <li>Corporate Travel</li>
          </ul>
        </div>
        <div>
          <div className="font-bebas text-hnk-gold tracking-[0.2em] mb-4">CONTACT</div>
          <ul className="space-y-3 text-sm text-hnk-off/70">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-hnk-red" /><a href="tel:9912360321" className="hover:text-hnk-gold">9912360321</a> / <a href="tel:7396024204" className="hover:text-hnk-gold">7396024204</a></li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-hnk-red" /><a href="mailto:hnktourstravels15@gmail.com" className="hover:text-hnk-gold break-all">hnktourstravels15@gmail.com</a></li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-hnk-red" />Simhachalam, Visakhapatnam</li>
          </ul>
          <div className="flex gap-3 mt-5">
            {[
              { href: "https://wa.me/919912360321", Icon: MessageCircle, label: "WhatsApp" },
              { href: "https://instagram.com", Icon: Instagram, label: "Instagram" },
              { href: "https://facebook.com", Icon: Facebook, label: "Facebook" },
              { href: "mailto:hnktourstravels15@gmail.com", Icon: Mail, label: "Gmail" },
            ].map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-hnk-off/70 hover:border-hnk-gold hover:text-hnk-gold transition">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between gap-3 text-xs text-hnk-off/50">
        <div>© 2026 HNK Tours & Travels · Visakhapatnam · All Rights Reserved</div>
        <div>Designed with <span className="text-hnk-red">❤</span> for Vizag</div>
      </div>
    </footer>
  );
}