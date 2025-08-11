import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import { NetworkAnimation } from "./NetworkAnimation";

export const Experience = () => {
  const projects = [
    {
      title: "ERP Migration (UK FMCG)",
      type: "Enterprise Systems",
      description: "Led end-to-end requirements workshops, mapped as-is/to-be processes, and introduced robust data governance frameworks.",
      outcome: "30% better data governance & forecasting accuracy",
      highlights: [
        "Cross-functional workshop facilitation",
        "Process mapping & optimisation",
        "Data governance implementation",
        "Cutover coordination"
      ]
    },
    {
      title: "AI-Integrated PLM (Global Fashion)",
      type: "Digital Innovation",
      description: "Delivered comprehensive PLM rollout with AI insights, defined detailed user stories, and streamlined workflows across tech/ops/finance.",
      outcome: "+29% profitability contribution post go-live",
      highlights: [
        "AI integration strategy",
        "User story definition",
        "Cross-functional alignment",
        "Adoption & enablement"
      ]
    },
    {
      title: "Licence Rationalisation (ERP/PLM)",
      type: "Cost Optimisation",
      description: "Analysed software usage patterns, consolidated entitlements, updated access controls, and managed vendor negotiations.",
      outcome: "25% opex reduction",
      highlights: [
        "Usage pattern analysis",
        "Entitlement consolidation",
        "Access management",
        "Vendor negotiations"
      ]
    },
    {
      title: "Public-Sector Health-Tech",
      type: "Process Innovation",
      description: "Structured requirements gathering, defined acceptance criteria, and implemented analytics-informed content workflows.",
      outcome: "30% faster releases; 32% productivity lift",
      highlights: [
        "Requirements structuring",
        "Analytics implementation",
        "Content workflow design",
        "Performance optimisation"
      ]
    }
  ];

  return (
    <section className="py-section bg-surface relative overflow-hidden">
      {/* Network Animation Background */}
      <NetworkAnimation />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-section mb-4">Selected Work</h2>
            <p className="text-large text-muted-foreground">
              Results-first case studies across industries
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="hover-lift animate-fade-up border-border/50 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {project.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-body">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Outcome Highlight */}
                  <div className="bg-gradient-subtle p-4 rounded-lg border border-accent/20">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span className="text-small font-medium text-accent">Result</span>
                    </div>
                    <p className="text-body font-medium">{project.outcome}</p>
                  </div>
                  
                  {/* Key Highlights */}
                  <div>
                    <h4 className="text-small font-medium mb-3 text-muted-foreground">Key Activities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <Badge key={highlightIndex} variant="skill" className="text-xs py-1">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};