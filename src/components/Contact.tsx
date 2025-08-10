import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Download, MapPin, MessageCircle } from "lucide-react";
import fileDownload from "js-file-download";

export const Contact = () => {
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
    <section className="py-section bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-section mb-4">Let's Connect</h2>
            <p className="text-large text-muted-foreground max-w-2xl mx-auto">
              Ready to turn your complex tech challenges into measurable business outcomes? 
              Let's discuss your transformation goals.
            </p>
          </div>
          
          {/* Contact Card */}
          <Card className="glass border-border/50 hover-lift animate-fade-up">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                
                {/* Contact Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>London, UK</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Mail className="w-4 h-4" />
                        <a 
                          href="mailto:Sam15Gami@gmail.com" 
                          className="hover:text-accent transition-colors"
                        >
                          Sam15Gami@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Linkedin className="w-4 h-4" />
                        <a 
                          href="https://linkedin.com/in/sambhavigami" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-accent transition-colors"
                        >
                          linkedin.com/in/sambhavigami
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Availability */}
                  <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
                    <div className="flex items-center gap-2 mb-1">
                      <MessageCircle className="w-4 h-4 text-accent" />
                      <span className="font-medium text-accent">Open to Opportunities</span>
                    </div>
                    <p className="text-small text-muted-foreground">
                      Available for consulting projects and permanent roles in London
                    </p>
                  </div>
                </div>
                
                {/* CTAs */}
                <div className="space-y-4">
                  <Button variant="cta" size="xl" className="w-full group" asChild>
                    <a href="mailto:Sam15Gami@gmail.com">
                      <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      Send Email
                    </a>
                  </Button>
                  
                  <Button variant="professional" size="xl" className="w-full group" onClick={handleDownloadCV}>
                    <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Download CV
                  </Button>
                  
                  <Button variant="outline" size="xl" className="w-full group" asChild>
                    <a href="https://linkedin.com/in/sambhavigami" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Quick Note */}
          <div className="text-center mt-8 animate-fade-up">
            <p className="text-small text-muted-foreground">
              Hiring managers & practice leads: I respond to all relevant enquiries within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};