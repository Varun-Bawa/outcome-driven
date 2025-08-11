import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Download, MapPin } from "lucide-react";
import { NetworkAnimation } from "./NetworkAnimation";
import fileDownload from "js-file-download";

export const Hero = () => {
  const handleDownloadCV = () => {
    fetch('/cv-sambhavi-gami.pdf')
      .then(response => response.blob())
      .then(blob => {
        fileDownload(blob, 'Sambhavi-Gami-CV.pdf');
      })
      .catch(error => {
        console.error('Error downloading CV:', error);
      });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Network Animation Background */}
      <NetworkAnimation />
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary-glow/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent-glow/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-small">London, UK</span>
              </div>
              
              <h1 className="text-hero font-bold leading-tight">
                I turn complex{" "}
                <span className="gradient-text">tech change</span>{" "}
                into business outcomes
              </h1>
              
              <p className="text-large text-muted-foreground leading-relaxed max-w-lg">
                Technology consultant with 7+ years delivering digital transformation and enterprise system modernisation across apparel, fashion, retail, and consumer goods.
              </p>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">10+</div>
                <div className="text-small text-muted-foreground">PLM & ERP Programmes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">+29%</div>
                <div className="text-small text-muted-foreground">Profitability Contribution</div>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" className="group" asChild>
                <a href="mailto:Sam15Gami@gmail.com">
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Get in Touch
                </a>
              </Button>
              <Button variant="professional" size="lg" className="group" onClick={handleDownloadCV}>
                <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>
              <Button variant="outline" size="lg" asChild className="group">
                <a href="https://linkedin.com/in/sambhavigami" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="relative animate-fade-in lg:justify-self-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-accent rounded-full opacity-20 animate-pulse"></div>
              <div className="relative bg-card rounded-full p-1 shadow-lg">
                <img
                  src="/lovable-uploads/8878c9fb-3497-44c1-a144-b1e42badec83.png"
                  alt="Sambhavi Gami - Technology Consultant"
                  className="w-80 h-80 object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
