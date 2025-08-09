import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Platforms & Systems",
      skills: ["SAP", "Teamcenter", "Centric PLM", "Power BI", "JIRA", "Confluence", "Monday.com"]
    },
    {
      category: "Technical",
      skills: ["SQL", "Python", "Data Integration", "Process Automation", "Analytics", "Reporting"]
    },
    {
      category: "Methodologies",
      skills: ["Agile", "Change Management", "Requirements Analysis", "Process Mapping", "Stakeholder Management"]
    },
    {
      category: "Governance",
      skills: ["RACI", "OKRs", "Risk Management", "Compliance", "Quality Assurance", "Testing Strategy"]
    }
  ];

  return (
    <section className="py-section bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-section mb-4">Skills & Tools</h2>
            <p className="text-large text-muted-foreground">
              Technical expertise across the transformation stack
            </p>
          </div>
          
          {/* Skills Grid */}
          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold mb-4 text-accent">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="skill" className="hover:bg-accent hover:text-accent-foreground transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};