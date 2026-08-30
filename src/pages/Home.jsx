import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import ScrollVideo from "@/components/ScrollVideo";
import ShowcaseGrow from "@/components/ShowcaseGrow";
import VelocityBand from "@/components/VelocityBand";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Hours from "@/components/Hours";
import Location from "@/components/Location";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ScrollVideo />
        <Hero />
        <Concept />
        <ShowcaseGrow />
        <Team />
        <Services />
        <Hours />
        <VelocityBand />
        <Location />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
