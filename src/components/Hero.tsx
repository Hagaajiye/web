import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-landscape.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 parallax-bg opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-accent/10 animate-bounce" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-32 right-16 w-16 h-16 rounded-full bg-primary/10 animate-bounce" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-20 w-12 h-12 rounded-full bg-accent/15 animate-bounce" style={{ animationDelay: '1.5s' }} />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center fade-in-up">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 fade-in">
            Garaadkobac Social Enterprise
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="block">Knowledge is the seed</span>
          <span className="block bg-gradient-hero bg-clip-text text-transparent">
            of sustainable growth
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed fade-in-up" style={{ animationDelay: '0.4s' }}>
          Empowering Somali communities through education, research, innovation, and culture.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection('our-work')}
            className="group"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Explore Our Work
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="group"
          >
            Join Our Movement
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};