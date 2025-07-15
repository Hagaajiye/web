import { Card, CardContent } from "@/components/ui/card";
import { Users, Shield, Target, CheckCircle, UserCheck, Calendar } from "lucide-react";

export const Governance = () => {
  const governanceFeatures = [
    {
      icon: Users,
      title: "Board of Directors",
      description: "Composed of educators, researchers, youth leaders, and cultural experts ensuring mission alignment"
    },
    {
      icon: Shield,
      title: "Independent Leadership",
      description: "Each sub-organization has independent program leads and youth-led volunteer committees"
    },
    {
      icon: Target,
      title: "Operational Autonomy",
      description: "Autonomous operations with shared financial accountability and transparency"
    },
    {
      icon: CheckCircle,
      title: "Performance Review",
      description: "Annual performance reviews, community feedback loops, and impact reporting"
    },
    {
      icon: UserCheck,
      title: "Participatory Governance",
      description: "Regular member consultations, elections (especially in Book Club), and community input"
    },
    {
      icon: Calendar,
      title: "Community Values",
      description: "Strategy alignment with mission and community values through democratic processes"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 fade-in-up">
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            Governance Model
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Garaadkobac is governed with transparency, accountability, and community participation at its core. Our structure ensures both operational effectiveness and democratic values.
          </p>
        </div>

        {/* Governance Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {governanceFeatures.map((feature, index) => (
            <Card key={index} className="hover-lift shadow-soft fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};