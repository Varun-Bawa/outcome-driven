import { Badge } from "@/components/ui/badge";

export const About = () => {
  const credentials = [
    "MBA (Merit) — University of Bath",
    "Organiser — Women in Entrepreneurship (Bath)"
  ];

  return (
    <section className="py-section bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-section mb-4">About</h2>
            <p className="text-large text-muted-foreground">
              Bridging people, process, and platforms across ERP, PLM, and AI
            </p>
          </div>
          
          {/* Bio Content */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            
            {/* Main Bio */}
            <div className="lg:col-span-2 space-y-6 animate-fade-up">
              <div className="prose prose-lg text-foreground max-w-none">
                <p className="text-body leading-relaxed">
                  I connect business needs with technology delivery through structured change, clear communication, and cross-functional coordination. Comfortable running requirements and process mapping, translating them into user stories, governance, and value tracking.
                </p>
                
                <p className="text-body leading-relaxed">
                  I've led PLM/ERP initiatives, cost-optimisation through licence rationalisation, and adoption programs that actually land with users. Recently, I've focused on pragmatic AI enablement—lightweight assistants, smarter documentation, and analytics that help teams decide faster.
                </p>
                
                <p className="text-body leading-relaxed">
                  Tools I use include SAP, Teamcenter, Centric PLM, Power BI, JIRA/Confluence/Monday.com, SQL, and Python.
                </p>
              </div>
            </div>
            
            {/* Credentials & Trust Signals */}
            <div className="space-y-6 animate-fade-up">
              <div>
                <h3 className="text-lg font-semibold mb-3">Credentials</h3>
                <div className="space-y-2">
                  {credentials.map((credential, index) => (
                    <Badge key={index} variant="skill" className="block w-full text-left py-2 px-3">
                      {credential}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Key Positioning */}
              <div className="bg-gradient-subtle p-6 rounded-lg border border-border/50">
                <h4 className="font-semibold mb-2 text-accent">Core Approach</h4>
                <p className="text-small text-muted-foreground">
                  Digital transformation that sticks—strategy to adoption, end to end.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};