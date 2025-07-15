import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, Target, Globe, Eye, Heart, Shield, Rocket } from "lucide-react";
import studentsImage from "@/assets/students-reading.jpg";

export const About = () => {
  const socialEnterpriseFeatures = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Uses business tools to create lasting social value, not private profit"
    },
    {
      icon: Users,
      title: "Community Programs", 
      description: "Builds and funds community-driven programs and initiatives"
    },
    {
      icon: Lightbulb,
      title: "Learning Culture",
      description: "Reinforces culture of learning, research, and entrepreneurship"
    },
    {
      icon: Rocket,
      title: "Youth Pathways",
      description: "Creates employment and leadership opportunities for Somali youth"
    }
  ];

  const coreValues = [
    {
      icon: Eye,
      title: "Indho Qaran",
      subtitle: "Seeing Beyond, Leading Forward",
      description: "Visionary leadership that looks beyond current challenges to future possibilities"
    },
    {
      icon: Users,
      title: "Community Ownership",
      subtitle: "Designed with and for Somali people",
      description: "Programs built through authentic community participation and leadership"
    },
    {
      icon: Shield,
      title: "Accountability", 
      subtitle: "Transparent governance and impact",
      description: "Open reporting, measurable outcomes, and responsible stewardship"
    },
    {
      icon: Lightbulb,
      title: "Critical Thinking",
      subtitle: "Ideas, dialogue, and innovation",
      description: "Fostering creative problem-solving and intellectual discourse"
    },
    {
      icon: Globe,
      title: "Sustainability",
      subtitle: "Self-sustaining social systems",
      description: "Building lasting impact through sustainable organizational models"
    },
    {
      icon: Heart,
      title: "Youth-Driven Change",
      subtitle: "Youth as builders, not beneficiaries", 
      description: "Empowering young people as leaders and creators of change"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Garaadkobac
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A Somali social enterprise committed to advancing a knowledge-based society through education, research, innovation, and cultural development.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="fade-in slide-in-left">
            <img 
              src={studentsImage} 
              alt="Students reading together"
              className="rounded-2xl shadow-glow w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold mb-6 text-foreground">Who We Are</h3>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Garaadkobac is a Somali social enterprise committed to advancing a knowledge-based society through education, research, innovation, and cultural development. Officially founded in 2025, but rooted in a grassroots book club from 2018, Garaadkobac has grown into a multi-dimensional intellectual movement empowering communities, nurturing youth, and transforming institutions.
              </p>
              
              <div className="bg-card p-6 rounded-xl border border-border shadow-soft">
                <h4 className="text-xl font-semibold mb-3 text-primary">Our Name</h4>
                <p className="mb-3">The name "Garaadkobac" combines two Somali words:</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <strong>"Garaad"</strong> meaning wisdom, intellect, and consciousness
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <strong>"Kobac"</strong> meaning growth, development, and flourishing
                  </li>
                </ul>
                <p className="mt-3 text-primary font-medium">
                  Together, representing our core philosophy: that knowledge is the seed of sustainable growth and Somalia's future depends on conscious, skilled, and informed citizens.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Enterprise Section */}
        <div className="mb-20">
          <div className="text-center mb-12 fade-in-up">
            <h3 className="text-3xl font-bold mb-4 text-foreground">What is a Social Enterprise?</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Garaadkobac is not a charity, nor a traditional NGO, nor a purely commercial business — it is a social enterprise: a mission-driven organization that uses business tools and organizational strategy to create lasting social value rather than private profit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialEnterpriseFeatures.map((feature, index) => (
              <Card key={index} className="hover-lift fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-warm rounded-xl flex items-center justify-center mx-auto mb-4 shadow-warm">
                    <feature.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12 fade-in-up">
            <h3 className="text-3xl font-bold mb-4 text-foreground">Core Values</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our values guide everything we do, from program design to community engagement, ensuring authentic and sustainable impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="hover-lift fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mb-4 shadow-glow">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-foreground">{value.title}</h4>
                  <p className="text-sm font-medium text-primary mb-3">{value.subtitle}</p>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Purpose Section */}
        <div className="mb-20">
          <div className="text-center mb-12 fade-in-up">
            <h3 className="text-3xl font-bold mb-4 text-foreground">Purpose of Garaadkobac</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Garaadkobac exists to answer four fundamental needs in Somali society
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                number: "01",
                title: "Accessible Knowledge",
                description: "Where schools are lacking, libraries are scarce, and intellectual dialogue is fading, Garaadkobac builds spaces for public reading, research, and education."
              },
              {
                number: "02", 
                title: "Indigenous Research",
                description: "Where foreign narratives dominate data about Somalia, Garaadkobac equips Somali researchers to generate their own evidence, studies, and policy insights."
              },
              {
                number: "03",
                title: "Youth-Centered Innovation", 
                description: "Where unemployment and under-skilling dominate, Garaadkobac trains, equips, and empowers young people with modern tools and thinking."
              },
              {
                number: "04",
                title: "Cultural Reclamation",
                description: "In a post-conflict context where identity is fragmented, Garaadkobac promotes Somali literature, heritage, language, and knowledge systems."
              }
            ].map((purpose, index) => (
              <Card key={index} className="hover-lift fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
                      {purpose.number}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-foreground">{purpose.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{purpose.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="hover-lift fade-in-up gradient-warm border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-accent-foreground">Mission</h3>
              <p className="text-lg text-accent-foreground/80">
                To empower Somali communities—especially youth—with access to knowledge, skills, and tools that foster critical thinking, innovation, and sustainable development.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift fade-in-up gradient-hero border-0" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">Vision</h3>
              <p className="text-lg text-primary-foreground/90">
                A thriving Somali society where intellectual growth, cultural identity, and social innovation are at the heart of national development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};