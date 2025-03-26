import Experience from "@/components/Experience/Experience";
import Technologies from "@/components/Experience/Technologies";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Experience/Projects";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import ObserverProvider from "@/components/ui/ObserverProvider";
import Background from "@/components/ui/Background";
import About from "@/components/About/About";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <ObserverProvider>
      <ThemeProvider>
        <Navbar />
        <div className="fixed bg-gradient-to-t opacity-10 from-accent to-transparent size-full -z-10" />
        <Background />
        <div className="flex flex-col gap-48">
          <Hero />
          <div className="container mx-auto xl:px-0 px-8">
            <Experience />
          </div>
          <Technologies />
          <div className="container mx-auto xl:px-0 px-8 flex flex-col gap-96">
            <Projects />
            <About />
          </div>
          <div>
            <div className="container mx-auto xl:px-0 px-8 flex flex-col gap-96">
              <Contact />
            </div>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </ObserverProvider>
  );
}
