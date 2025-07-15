import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Microscope, Library, GraduationCap, Lightbulb, Phone, Mail, ChevronDown, ChevronUp, Calendar, Users, Building, Target, Globe, FileText } from "lucide-react";

export const SubOrganizations = () => {
  const [expandedOrg, setExpandedOrg] = useState<string | null>(null);

  const organizations = [
    {
      id: "book-club",
      name: "Garaadkobac Book Club",
      tagline: "Igniting Minds, One Book at a Time",
      established: "2018 (Origin Organization)",
      icon: BookOpen,
      color: "bg-gradient-hero",
      overview: "The Book Club is our founding initiative, born in 2018 as a youth reading circle that grew into a grassroots movement promoting literacy, literature, and civic dialogue.",
      mission: "To revive the Somali reading culture, develop critical consciousness, and connect youth through literature and dialogue.",
      programs: [
        "Weekly Book Circles - Small-group sessions where selected books are read and debated",
        "Author Dialogues - Inviting Somali and international authors for virtual or physical Q&A events",
        "Themed Reading Campaigns - Monthly themes like Women's Voices, Somali History Month, or Global African Literature",
        "Annual Somali Readers Conference - A national gathering of readers, authors, publishers, and educators",
        "Youth-Led Branches - Members run localized book clubs across universities and neighborhoods",
        "Book Exchange Network - Circulating books in peer-to-peer lending format",
        "Reading for Peace Initiative - Dialogues on conflict, justice, and reconciliation through fiction and nonfiction"
      ],
      governance: "Democratically governed with annual elections for leadership roles. Volunteer-led committees for logistics, content curation, and outreach. Members vote on book lists, event themes, and club policies.",
      impact: [
        "Over 6,000 books circulated",
        "2,000+ youth participants engaged in sessions",
        "Book clubs established in 8 Somali districts and schools"
      ],
      contact: {
        email: "bookclub@garaadkobac.com",
        phone: "+252 61 835 2771"
      }
    },
    {
      id: "research-center",
      name: "Garaadkobac Research and Development Center (GRDC)",
      tagline: "Researching for a Stronger Somalia",
      established: "2022",
      icon: Microscope,
      color: "bg-gradient-warm",
      overview: "Established 2022, GRDC is a Somali-led think tank providing policy research, data services, and capacity building to support evidence-based decision-making.",
      mission: "To contribute to Somalia's sustainable development by producing quality research, building institutional and individual capacities, and supporting evidence-based decision-making in government, civil society, and development sectors.",
      vision: "To become Somalia's leading center for research excellence, human capital development, and policy-oriented knowledge production by 2030.",
      coreActivities: [
        "Research & policy studies on governance, education, health, climate, economy",
        "Trainings and workshops",
        "Monitoring & evaluation systems",
        "Data collection and analysis services",
        "Public engagement and dissemination"
      ],
      services: [
        {
          category: "Research Services",
          items: ["Policy research", "Applied field research", "Impact studies", "Academic partnerships"]
        },
        {
          category: "Trainings & Workshops", 
          items: ["Research Methods (Quant, Qual, Mixed)", "Monitoring & Evaluation", "Data Visualization", "Proposal Writing", "Digital Literacy", "Policy Brief Writing", "Leadership & Public Speaking"]
        },
        {
          category: "Monitoring & Evaluation",
          items: ["Project Evaluation", "Indicator Frameworks", "M&E System Design", "Theory of Change development"]
        },
        {
          category: "Capacity Building",
          items: ["Institutional strengthening", "Organizational strategy", "Human resource planning"]
        },
        {
          category: "Consulting & Advisory",
          items: ["Government advisory", "NGO program strategy", "Private sector impact advisory"]
        },
        {
          category: "Publications",
          items: ["Annual State of Somalia Reports", "Sectoral Policy Briefs", "Research Journals and Working Papers"]
        }
      ],
      impact: [
        "15 research projects completed",
        "500+ professionals trained",
        "25+ partner organizations"
      ],
      contact: {
        email: "research@garaadkobac.com", 
        phone: "+252 61 835 2772"
      }
    },
    {
      id: "library",
      name: "Garaadkobac Public Library",
      tagline: "Access to Knowledge, Access to Power",
      established: "2025",
      icon: Library,
      color: "bg-primary",
      overview: "Launched in 2025, the Public Library provides inclusive access to multilingual books, study spaces, and digital resources.",
      mission: "To democratize access to knowledge and information by building a public learning infrastructure in Somalia.",
      programs: [
        "Book lending (Somali, Arabic, English)",
        "Quiet reading zones and study halls",
        "Mobile library programs to underserved communities", 
        "Digital library access via tablets and community WiFi",
        "Literacy and storytelling programs for children",
        "Special collections in Somali history and literature",
        "Heritage archiving and oral history projects"
      ],
      technology: [
        "Free public internet and computer terminals",
        "E-library subscriptions and digital borrowing",
        "Access to academic databases for students and researchers"
      ],
      inclusivePrograms: [
        "'Qiso iyo Qoraal' – Storytelling for early literacy",
        "Family Reading Nights",
        "School visits and outreach to madrasas and IDP camps"
      ],
      impact: [
        "First public Somali-led library with open community management",
        "2,000+ library users in first year",
        "Plans for 5 mobile branches by 2027"
      ],
      contact: {
        email: "library@garaadkobac.com",
        phone: "+252 61 835 2773"
      }
    },
    {
      id: "academy", 
      name: "Garaadkobac Academy",
      tagline: "Educate to Elevate",
      established: "2025",
      icon: GraduationCap,
      color: "bg-accent",
      overview: "The Academy offers non-formal, practical education and training focused on youth and professional development.",
      mission: "To offer transformative education and training programs that prepare individuals to become thinkers, doers, and leaders in their communities.",
      programs: [
        "Certificate in Research Methods & Data Analysis",
        "Digital Literacy & Online Tools", 
        "CV Writing & Interview Preparation",
        "Communication Skills & Public Speaking",
        "Somali Language Writing and Grammar",
        "Peacebuilding, Leadership & Civic Engagement",
        "Proposal Writing, Grant Management, and Reporting"
      ],
      pedagogy: [
        "Blended learning (in-person + online)",
        "Peer learning, mentorship, and project-based assignments",
        "Partnerships with Somali educators, diaspora trainers, and universities"
      ],
      impact: [
        "1,200+ youth trained",
        "15 courses offered",
        "90% completion rate"
      ],
      contact: {
        email: "academy@garaadkobac.com",
        phone: "+252 61 835 2774"
      }
    },
    {
      id: "innovation-hub",
      name: "Garaadkobac Knowledge & Innovation Hub (GKiHub)", 
      tagline: "Ideas. Technology. Impact.",
      established: "2025",
      icon: Lightbulb,
      color: "bg-secondary",
      overview: "The GKiHub fosters Somali tech talent and digital creators to develop innovative solutions for social change.",
      mission: "To empower Somali youth to become creators of technology, solutions, and systems that drive social change.",
      programs: [
        "Co-working space with internet, desks, and resources",
        "Innovation sprints and design thinking workshops",
        "Startup incubation (3–6 months cycles)",
        "Hackathons on education, governance, health, and climate",
        "Mentorship from Somali and African tech professionals",
        "Business modeling and pitching",
        "Prototype development",
        "Access to angel investors and microgrants",
        "Somali YouTube Creators program",
        "Photography, podcasting, video editing",
        "Digital art and storytelling"
      ],
      startupSupport: [
        "Business modeling and pitching",
        "Prototype development", 
        "Access to angel investors and microgrants",
        "Peer learning and networking events"
      ],
      creativePrograms: [
        "Photography, podcasting, video editing",
        "Somali YouTube Creators program",
        "Digital art and storytelling"
      ],
      impact: [
        "12 youth-led ventures launched", 
        "100+ digital creators trained",
        "National recognition as a youth-friendly innovation space"
      ],
      contact: {
        email: "gkihub@garaadkobac.com",
        phone: "+252 61 835 2775"
      }
    }
  ];

  const toggleExpanded = (id: string) => {
    setExpandedOrg(expandedOrg === id ? null : id);
  };

  return (
    <section id="our-work" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Work - Five Pillars
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Five interconnected organizations working together to empower Somali communities through knowledge, innovation, and sustainable development.
          </p>
        </div>

        {/* Organizations Grid */}
        <div className="space-y-8">
          {organizations.map((org, index) => (
            <Card 
              key={org.id} 
              className="hover-lift shadow-soft overflow-hidden fade-in-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Organization Header */}
                <div className="p-8 border-b border-border">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-6">
                      <div className={`w-16 h-16 ${org.color} rounded-xl flex items-center justify-center shadow-glow`}>
                        <org.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{org.name}</h3>
                        <p className="text-lg text-primary font-medium mb-2">{org.tagline}</p>
                        <p className="text-sm text-muted-foreground mb-4">Established: {org.established}</p>
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                          {org.overview}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleExpanded(org.id)}
                      className="flex-shrink-0"
                    >
                      {expandedOrg === org.id ? 
                        <ChevronUp className="h-6 w-6" /> : 
                        <ChevronDown className="h-6 w-6" />
                      }
                    </Button>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedOrg === org.id && (
                  <div className="p-8 bg-card/50 animate-accordion-down">
                    <div className="space-y-8">
                      {/* Mission & Vision */}
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-semibold mb-4 text-foreground flex items-center">
                            <Target className="h-5 w-5 mr-2 text-primary" />
                            Mission
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">{org.mission}</p>
                          {org.vision && (
                            <div className="mt-6">
                              <h4 className="text-xl font-semibold mb-4 text-foreground flex items-center">
                                <Globe className="h-5 w-5 mr-2 text-primary" />
                                Vision
                              </h4>
                              <p className="text-muted-foreground leading-relaxed">{org.vision}</p>
                            </div>
                          )}
                        </div>

                        {/* Contact & Impact */}
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-xl font-semibold mb-4 text-foreground flex items-center">
                              <Building className="h-5 w-5 mr-2 text-primary" />
                              Impact
                            </h4>
                            <ul className="space-y-2">
                              {org.impact.map((item, idx) => (
                                <li key={idx} className="flex items-center">
                                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                                  <span className="text-muted-foreground font-medium">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-xl font-semibold mb-4 text-foreground">Contact</h4>
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <Mail className="h-4 w-4 text-primary mr-2" />
                                <a 
                                  href={`mailto:${org.contact.email}`}
                                  className="text-primary hover:text-primary-glow transition-colors"
                                >
                                  {org.contact.email}
                                </a>
                              </div>
                              <div className="flex items-center">
                                <Phone className="h-4 w-4 text-primary mr-2" />
                                <a 
                                  href={`tel:${org.contact.phone}`}
                                  className="text-primary hover:text-primary-glow transition-colors"
                                >
                                  {org.contact.phone}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Programs/Services - Special handling for GRDC */}
                      {org.id === 'research-center' && org.services ? (
                        <div>
                          <h4 className="text-xl font-semibold mb-6 text-foreground flex items-center">
                            <FileText className="h-5 w-5 mr-2 text-primary" />
                            Services We Offer
                          </h4>
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {org.services.map((service, idx) => (
                              <Card key={idx} className="border border-border">
                                <CardContent className="p-4">
                                  <h5 className="font-semibold mb-3 text-foreground">{service.category}</h5>
                                  <ul className="space-y-1">
                                    {service.items.map((item, itemIdx) => (
                                      <li key={itemIdx} className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                                        <span className="text-sm text-muted-foreground">{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      ) : (
                        /* Regular Programs */
                        <div>
                          <h4 className="text-xl font-semibold mb-4 text-foreground flex items-center">
                            <Calendar className="h-5 w-5 mr-2 text-primary" />
                            {org.id === 'academy' ? 'Courses & Programs' : 'Programs & Activities'}
                          </h4>
                          <ul className="grid md:grid-cols-2 gap-3">
                            {org.programs.map((program, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                                <span className="text-muted-foreground">{program}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Special sections for specific organizations */}
                      {org.governance && (
                        <div>
                          <h4 className="text-xl font-semibold mb-4 text-foreground flex items-center">
                            <Users className="h-5 w-5 mr-2 text-primary" />
                            Governance & Structure
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">{org.governance}</p>
                        </div>
                      )}

                      {org.technology && (
                        <div>
                          <h4 className="text-xl font-semibold mb-4 text-foreground">Technology & Digital Access</h4>
                          <ul className="space-y-2">
                            {org.technology.map((tech, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                                <span className="text-muted-foreground">{tech}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {org.pedagogy && (
                        <div>
                          <h4 className="text-xl font-semibold mb-4 text-foreground">Pedagogy & Learning Style</h4>
                          <ul className="space-y-2">
                            {org.pedagogy.map((method, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                                <span className="text-muted-foreground">{method}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};