import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Metrics } from "@/components/Metrics";
import { Capabilities } from "@/components/Capabilities";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
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
