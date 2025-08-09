export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Sambhavi Gami</h3>
            <p className="text-primary-foreground/80">Technology Consultant • London, UK</p>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-4">
            <p className="text-sm text-primary-foreground/60">
              © 2024 Sambhavi Gami. Available for consulting & permanent opportunities.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};