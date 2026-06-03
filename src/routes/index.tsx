import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Booking } from "@/components/site/Booking";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Destinations } from "@/components/site/Destinations";
import { Packages } from "@/components/site/Packages";
import { Fleet } from "@/components/site/Fleet";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingButtons } from "@/components/site/FloatingButtons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HNK Tours & Travels — Premium Cab Service in Vizag" },
      { name: "description", content: "HNK Tours & Travels — Vizag's #1 premium cab service. Airport transfers, Araku Valley tours, outstation trips & corporate travel. 24/7. Call 9912360321." },
      { property: "og:title", content: "HNK Tours & Travels — Ride Beyond Your Destination" },
      { property: "og:description", content: "Premium cabs across Visakhapatnam, Araku, Lambasingi & beyond. 24/7 reliable service." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vizag-ride-luxury.lovable.app/" },
    ],
    links: [
      { rel: "canonical", href: "https://vizag-ride-luxury.lovable.app/" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TaxiService",
        name: "HNK Tours & Travels",
        image: "https://vizag-ride-luxury.lovable.app/og-image.jpg",
        telephone: ["+919912360321", "+917396024204"],
        email: "hnktourstravels15@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Simhachalam",
          addressLocality: "Visakhapatnam",
          addressRegion: "Andhra Pradesh",
          addressCountry: "IN",
        },
        areaServed: "Visakhapatnam, Andhra Pradesh",
        priceRange: "₹₹",
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-hnk-bg text-hnk-off">
      <Navbar />
      <main>
        <Hero />
        <Booking />
        <Services />
        <WhyUs />
        <Destinations />
        <Packages />
        <Fleet />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
