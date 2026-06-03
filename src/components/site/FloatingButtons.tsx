import { Phone, MessageCircle } from "lucide-react";

export function FloatingButtons() {
  return (
    <>
      <a
        href="https://wa.me/919912360321"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-xl pulse-ring hover:bg-green-600 transition"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href="tel:9912360321"
        aria-label="Call now"
        className="fixed bottom-5 left-5 z-50 w-14 h-14 rounded-full bg-hnk-red text-white flex items-center justify-center shadow-xl hover:bg-[#b8031f] transition"
      >
        <Phone className="w-6 h-6" />
      </a>
    </>
  );
}