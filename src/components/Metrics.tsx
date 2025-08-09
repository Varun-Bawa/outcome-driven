import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Zap, Users } from "lucide-react";

export const Metrics = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "+29%",
      label: "profitability contribution",
      description: "from an AI-integrated PLM rollout",
      color: "text-accent"
    },
    {
      icon: Target,
      value: "25%",
      label: "reduction in opex",
      description: "via licence rationalisation across ERP/PLM",
      color: "text-accent"
    },
    {
      icon: Zap,
      value: "30%",
      label: "faster release cycle",
      description: "& 32% productivity gain in public-sector health-tech",
      color: "text-accent"
    },
    {
      icon: Users,
      value: "70%",
      label: "manual effort reduction",
      description: "via process automation",
      color: "text-accent"
    }
  ];

  const additionalMetrics = [
    "30% improvement in data governance & forecasting after ERP→SAP migration"
  ];

  return (
    <section className="py-section bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-section mb-4">Measurable Impact</h2>
            <p className="text-large text-muted-foreground">
              Results that matter to your bottom line
            </p>
          </div>
          
          {/* Main Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border/50 hover-lift animate-fade-up text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-3">
                  <metric.icon className={`w-8 h-8 ${metric.color} group-hover:scale-110 transition-transform`} />
                </div>
                <div className="space-y-2">
                  <div className={`text-3xl font-bold ${metric.color}`}>
                    {metric.value}
                  </div>
                  <div className="font-medium text-foreground">
                    {metric.label}
                  </div>
                  <p className="text-small text-muted-foreground">
                    {metric.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Metrics */}
          <div className="text-center animate-fade-up">
            {additionalMetrics.map((metric, index) => (
              <Badge key={index} variant="metric" className="mx-1 mb-2 py-2 px-4">
                {metric}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};