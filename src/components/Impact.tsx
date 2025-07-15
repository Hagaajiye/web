import { Card, CardContent } from "@/components/ui/card";
import { ImpactCounter } from "./ImpactCounter";
import { Users, BookOpen, GraduationCap, Building, Rocket, Calendar } from "lucide-react";

export const Impact = () => {
  const impactData = [
    { end: 2500, label: "Active Members", suffix: "+", icon: Users },
    { end: 1200, label: "Youth Trained", suffix: "+", icon: GraduationCap },
    { end: 15, label: "Research Projects", suffix: "", icon: BookOpen },
    { end: 1000, label: "Books Donated", suffix: "+", icon: BookOpen },
    { end: 200, label: "Book Club Sessions", suffix: "+", icon: Calendar },
    { end: 25, label: "Partner Organizations", suffix: "+", icon: Building },
    { end: 12, label: "Startups Supported", suffix: "", icon: Rocket },
    { end: 100, label: "Public Events", suffix: "+", icon: Calendar },
    { end: 18, label: "Somali Books Archived", suffix: "", icon: BookOpen }
  ];

  const goals = [
    "Establish reading and innovation centers in 5 Somali regions",
    "Build the largest open-access Somali research archive", 
    "Support 100+ youth in creating community-impact startups",
    "Translate and publish 50 high-impact books in Somali",
    "Train 10,000 youth in digital, research, and leadership skills",
    "Become a recognized regional model for youth-led social innovation"
  ];

  return (
    <section id="impact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Impact Snapshot
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Measuring our progress in empowering communities and fostering growth across Somalia.
          </p>
          <div className="text-sm text-muted-foreground mt-4 font-medium">Mid-2025</div>
        </div>

        {/* Impact Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {impactData.map((item, index) => (
            <Card key={index} className="hover-lift shadow-soft" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <ImpactCounter 
                  end={item.end} 
                  label={item.label} 
                  suffix={item.suffix}
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Strategic Goals */}
        <div className="fade-in-up">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Strategic Goals (2025–2030)
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {goals.map((goal, index) => (
                <Card 
                  key={index} 
                  className="hover-lift fade-in-up shadow-soft" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-warm rounded-full flex items-center justify-center mr-4 text-accent-foreground font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-lg text-foreground">{goal}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};