import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container mx-auto lg:px-32">
        <Experience />
      </div>
      <Footer />
    </div>
  );
}
