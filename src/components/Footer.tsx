import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const footerLinks = [
    {
      title: "Our Work",
      links: [
        { label: "Book Club", action: () => scrollToSection('our-work') },
        { label: "Research Center", action: () => scrollToSection('our-work') },
        { label: "Public Library", action: () => scrollToSection('our-work') },
        { label: "Academy", action: () => scrollToSection('our-work') },
        { label: "Innovation Hub", action: () => scrollToSection('our-work') }
      ]
    },
    {
      title: "About",
      links: [
        { label: "Mission & Vision", action: () => scrollToSection('about') },
        { label: "Impact", action: () => scrollToSection('impact') },
        { label: "Partnerships", action: () => scrollToSection('about') },
        { label: "Governance", action: () => scrollToSection('about') }
      ]
    },
    {
      title: "Connect",
      links: [
        { label: "Contact Us", action: () => scrollToSection('contact') },
        { label: "Join Our Movement", action: () => scrollToSection('contact') },
        { label: "Newsletter", action: () => scrollToSection('contact') },
        { label: "Social Media", action: () => scrollToSection('contact') }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Garaadkobac</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Empowering Somali communities through education, research, innovation, and culture. Building a knowledge-based society for sustainable development.
            </p>
            <Button 
              variant="outline" 
              onClick={scrollToTop}
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <ArrowUp className="mr-2 h-4 w-4" />
              Back to Top
            </Button>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={link.action}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
            <span>© 2025 Garaadkobac Social Enterprise</span>
            <span>•</span>
            <button className="hover:text-primary-foreground transition-colors">Privacy Policy</button>
            <span>•</span>
            <button className="hover:text-primary-foreground transition-colors">Terms of Use</button>
            <span>•</span>
            <button className="hover:text-primary-foreground transition-colors">Accessibility</button>
          </div>
          
          <div className="flex items-center text-sm text-primary-foreground/80">
            Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> for Somalia's future
          </div>
        </div>
      </div>
    </footer>
  );
};