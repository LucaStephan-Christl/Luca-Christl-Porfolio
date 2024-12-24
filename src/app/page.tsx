import Experience from "@/components/Experience/Experience";
import Technologies from "@/components/Experience/Technologies";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Experience/Projects";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import ObserverProvider from "@/components/ui/ObserverProvider";

export default function Home() {
  return (
    <ObserverProvider>
      <ThemeProvider>
        <div className="fixed bg-gradient-to-t opacity-10 from-accent to-transparent size-full -z-10"></div>
        <Navbar />
        <Hero />
        <div className="flex flex-col gap-48">
          <div className="container mx-auto lg:px-32 px-8 flex flex-col gap-48">
            <Experience />
          </div>
          <Technologies />
          <div className="container mx-auto lg:px-32 px-8 flex flex-col gap-48">
            <Projects />
            <div className="divider divider-primary" />
          </div>
        </div>
        <Footer />
      </ThemeProvider>
    </ObserverProvider>
  );
}
