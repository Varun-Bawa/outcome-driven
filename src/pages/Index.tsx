import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Metrics } from "@/components/Metrics";
import { Capabilities } from "@/components/Capabilities";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      
      <Hero />
      <About />
      <Metrics />
      <Capabilities />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
