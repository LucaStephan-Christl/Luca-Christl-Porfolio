import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="fixed bg-gradient-to-t from-accent to-transparent opacity-10 size-full -z-10"></div>
      <Navbar />
      <Hero />
      <div className="container mx-auto lg:px-32 px-8 flex flex-col gap-24">
        <Experience />
        <Projects />
        <div className="divider"></div>
      </div>
      <Footer />
    </ThemeProvider>
  );
}
