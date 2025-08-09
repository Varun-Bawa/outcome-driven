import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Workflow, Database, Bot } from "lucide-react";

export const Capabilities = () => {
  const capabilities = [
    {
      icon: Workflow,
      title: "Digital Transformation Delivery",
      description: "End-to-end transformation programs that actually deliver value",
      skills: [
        "Requirements & process mapping",
        "Value tracking & governance (RACI, OKRs)",
        "Change & enablement programs",
        "Stakeholder alignment"
      ]
    },
    {
      icon: Database,
      title: "ERP & PLM Solution Consulting",
      description: "Enterprise system modernisation with proven methodologies",
      skills: [
        "SAP, Teamcenter, Centric PLM migrations",
        "Workflow design & optimisation",
        "Data integration & governance",
        "Test strategy & cutover readiness"
      ]
    },
    {
      icon: Bot,
      title: "AI-Enabled Ways of Working",
      description: "Pragmatic AI implementation that enhances human decision-making",
      skills: [
        "Use-case discovery for ops/PMO",
        "Lightweight agentic assistants",
        "Power BI decision dashboards",
        "Process automation"
      ]
    }
  ];

  return (
    <section className="py-section bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-section mb-4">Core Capabilities</h2>
            <p className="text-large text-muted-foreground">
              Three pillars of technology transformation expertise
            </p>
          </div>
          
          {/* Capabilities Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card
                key={index}
                className="hover-lift animate-fade-up border-border/50 group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg border border-accent/20 group-hover:bg-accent/20 transition-colors">
                      <capability.icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{capability.title}</CardTitle>
                  <CardDescription className="text-body">
                    {capability.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2">
                    {capability.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="skill" className="mr-2 mb-2">
                        {skill}
                      </Badge>
                    ))}
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