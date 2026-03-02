import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text-primary overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Expertise />
      <Footer />
    </main>
  );
}
