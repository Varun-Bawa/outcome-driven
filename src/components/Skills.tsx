import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, Settings, Target, Users } from "lucide-react";

import { NetworkAnimation } from "./NetworkAnimation";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Technology & Platforms",
      icon: Brain,
      gradient: "from-primary to-accent",
      skills: [
        "Agentic AI & GenAI use-cases for business",
        "ERP & PLM systems (SAP, Teamcenter, Centric)",
        "Python for automation & AI prototyping",
        "Cloud platforms (AWS, Azure, GCP)",
        "Data analytics & visualization tools (Power BI, SQL)",
        "Project management tools (JIRA, Confluence)"
      ]
    },
    {
      category: "Project Management & Delivery", 
      icon: Settings,
      gradient: "from-accent to-primary-light",
      skills: [
        "End-to-end project lifecycle management",
        "Agile & Scrum frameworks, sprint & retro planning",
        "Stakeholder governance, reporting, and KPI tracking",
        "Process mapping, requirements gathering, and optimization",
        "Change enablement & adoption planning for new systems",
        "Waterfall delivery for structured implementation"
      ]
    },
    {
      category: "Consulting & Strategy",
      icon: Target,
      gradient: "from-primary-light to-accent-light",
      skills: [
        "Digital transformation & technology roadmaps",
        "AI/automation opportunity identification & scoping",
        "Value-driven solution design for client impact",
        "Digital adoption and operational improvement strategies",
        "Operating model alignment with business objectives",
        "Industry expertise in CPG, retail, and manufacturing"
      ]
    },
    {
      category: "Leadership & Communication",
      icon: Users,
      gradient: "from-accent-light to-primary",
      skills: [
        "C-suite engagement & strategic relationship building",
        "Cross-functional team leadership across global teams",
        "Workshop facilitation & stakeholder alignment sessions",
        "Storytelling & structured top-down communication",
        "Client-facing presentations & negotiation skills",
        "Problem solving & critical thinking in complex contexts"
      ]
    }
  ];

  return (
    <section className="py-section bg-background relative overflow-hidden">
      {/* Network Animation Background */}
      <NetworkAnimation />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-section mb-4 gradient-text">Technical & Professional Skills</h2>
            <p className="text-large text-muted-foreground">
              Comprehensive expertise across technology, business, and leadership domains
            </p>
          </div>
          
          {/* Skills Grid */}
          <div className="grid gap-6 lg:grid-cols-4">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden hover-lift animate-fade-up border-border/50"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Electric Glow Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  <div className={`absolute -inset-0.5 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500`}></div>
                  
                  <CardContent className="relative p-8 h-full">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`relative p-4 rounded-xl bg-gradient-to-br ${category.gradient} shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white drop-shadow-sm" />
                        <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {category.category}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Skills with Interactive Design */}
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="group/skill relative"
                        >
                          {/* Skill Item */}
                          <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/30 transition-all duration-300 cursor-default">
                            {/* Electric Indicator */}
                            <div className="relative">
                              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.gradient} shadow-sm`}></div>
                              <div className={`absolute inset-0 w-3 h-3 rounded-full bg-gradient-to-r ${category.gradient} blur-sm opacity-0 group-hover/skill:opacity-70 transition-opacity duration-300`}></div>
                            </div>
                            
                            {/* Skill Text */}
                            <span className="text-sm text-muted-foreground group-hover/skill:text-foreground transition-colors duration-300 flex-1">
                              {skill}
                            </span>
                            
                          </div>
                          
                          {/* Hover Effect Line */}
                          <div className={`h-px bg-gradient-to-r ${category.gradient} scale-x-0 group-hover/skill:scale-x-100 transition-transform duration-300 origin-left`}></div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};