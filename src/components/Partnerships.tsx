import { Card, CardContent } from "@/components/ui/card";
import { HandHeart, GraduationCap, Globe, Building, Users, BookOpen } from "lucide-react";

export const Partnerships = () => {
  const partnerCategories = [
    {
      icon: GraduationCap,
      title: "Academic Institutions",
      description: "Somali universities and research centers",
      color: "bg-gradient-hero"
    },
    {
      icon: BookOpen,
      title: "Local Organizations",
      description: "Schools, libraries, and municipalities",
      color: "bg-gradient-warm"
    },
    {
      icon: Globe,
      title: "International NGOs",
      description: "Global development and donor agencies",
      color: "bg-primary"
    },
    {
      icon: Building,
      title: "Innovation Hubs",
      description: "Tech centers across East Africa",
      color: "bg-accent"
    },
    {
      icon: Users,
      title: "Cultural Institutions",
      description: "Heritage preservation organizations",
      color: "bg-secondary"
    },
    {
      icon: HandHeart,
      title: "Diaspora Networks",
      description: "Global Somali volunteer groups",
      color: "bg-muted"
    }
  ];

  return (
    <section className="py-16 bg-card/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 fade-in-up">
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            Partnerships & Collaborations
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We collaborate with diverse organizations to amplify our impact across research, publishing, education, heritage preservation, and youth empowerment.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {partnerCategories.map((category, index) => (
            <Card key={index} className="hover-lift shadow-soft fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-foreground">{category.title}</h4>
                <p className="text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership CTA */}
        <Card className="gradient-warm border-0 shadow-warm fade-in-up">
          <CardContent className="p-8 text-center">
            <h4 className="text-2xl font-bold mb-4 text-accent-foreground">
              Ready to Partner with Us?
            </h4>
            <p className="text-lg text-accent-foreground/80 mb-6 max-w-2xl mx-auto">
              We welcome partnerships in research, publishing, education, heritage preservation, and youth empowerment. Together, we can build a stronger Somalia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <span className="text-accent-foreground font-medium">
                Contact us at: <a href="mailto:info@garaadkobac.com" className="underline hover:no-underline">info@garaadkobac.com</a>
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};