import { Badge } from "@/components/ui/badge";
import { Brain, Cog, Users } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      category: "AI & Tech",
      icon: Brain,
      gradient: "from-primary to-accent",
      skills: ["Agentic AI", "ERP & PLM systems", "PowerPoint", "Excel", "Data Analysis (Power BI, SQL)", "Cloud (AWS, Azure)", "Project Management tools (JIRA, Confluence, Monday.com)"]
    },
    {
      category: "Business & Project Management", 
      icon: Cog,
      gradient: "from-accent to-primary-light",
      skills: ["Process mapping", "requirements gathering", "stakeholder reporting", "change enablement", "Agile methodology", "dashboard creation", "AI & GenAI business use-cases development"]
    },
    {
      category: "Soft Skills",
      icon: Users,
      gradient: "from-primary-light to-accent-light",
      skills: ["Workshop facilitation", "cross-functional collaboration", "C-suite interaction", "storytelling", "top-down communication", "problem solving"]
    }
  ];

  return (
    <section className="py-section bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-section mb-4 gradient-text">Technical & Professional Skills</h2>
            <p className="text-large text-muted-foreground">
              Comprehensive expertise across technology, business, and leadership domains
            </p>
          </div>
          
          {/* Skills Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="group relative animate-fade-up hover-lift"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Card Background with Gradient Border */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`}></div>
                  <div className="relative bg-card border border-border rounded-lg p-6 h-full backdrop-blur-sm">
                    
                    {/* Icon & Title */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${category.gradient} shadow-glow`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {category.category}
                      </h3>
                    </div>
                    
                    {/* Skills as Interactive Tags */}
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="flex items-center gap-2 p-2 rounded-md hover:bg-muted/50 transition-colors group/skill cursor-default"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient} shadow-sm`}></div>
                          <span className="text-sm text-muted-foreground group-hover/skill:text-foreground transition-colors">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Skill Count Badge */}
                    <div className="mt-6 pt-4 border-t border-border/50">
                      <Badge variant="outline" className={`bg-gradient-to-r ${category.gradient} text-white border-0 shadow-md`}>
                        {category.skills.length} capabilities
                      </Badge>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};