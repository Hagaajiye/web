import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Abdiqasim Street, Hodan District, Mogadishu, Somalia"
    },
    {
      icon: Phone,
      title: "Phone", 
      content: "+252 618 352 775"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@garaadkobac.com"
    }
  ];

  const subOrgContacts = [
    { name: "Book Club", email: "bookclub@garaadkobac.com", phone: "+252 61 835 2771" },
    { name: "Research Center", email: "research@garaadkobac.com", phone: "+252 61 835 2772" },
    { name: "Public Library", email: "library@garaadkobac.com", phone: "+252 61 835 2773" },
    { name: "Academy", email: "academy@garaadkobac.com", phone: "+252 61 835 2774" },
    { name: "Innovation Hub", email: "gkihub@garaadkobac.com", phone: "+252 61 835 2775" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to join our movement? Have questions about our work? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="shadow-glow fade-in-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">Name</label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">Email</label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">Subject</label>
                  <Select value={formData.subject} onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="book-club">Book Club</SelectItem>
                      <SelectItem value="research">Research Center</SelectItem>
                      <SelectItem value="library">Public Library</SelectItem>
                      <SelectItem value="academy">Academy</SelectItem>
                      <SelectItem value="innovation">Innovation Hub</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">Message</label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full group">
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Main Contact */}
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <p className="text-muted-foreground">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sub-Organizations */}
            <Card className="shadow-soft fade-in-up" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4 text-foreground">Sub-Organization Contacts</h4>
                <div className="space-y-4">
                  {subOrgContacts.map((org, index) => (
                    <div key={index} className="border-b border-border pb-3 last:border-b-0">
                      <h5 className="font-medium text-foreground mb-2">{org.name}</h5>
                      <div className="text-sm space-y-1">
                        <div className="flex items-center">
                          <Mail className="h-3 w-3 text-primary mr-2" />
                          <a href={`mailto:${org.email}`} className="text-primary hover:text-primary-glow transition-colors">
                            {org.email}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-3 w-3 text-primary mr-2" />
                          <a href={`tel:${org.phone}`} className="text-primary hover:text-primary-glow transition-colors">
                            {org.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <div className="fade-in-up" style={{ animationDelay: '0.6s' }}>
              <h4 className="text-xl font-semibold mb-4 text-foreground">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center hover:shadow-glow transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6 text-primary-foreground" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <Card className="gradient-warm border-0 shadow-warm fade-in-up" style={{ animationDelay: '0.8s' }}>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-accent-foreground">Stay Updated</h4>
                <p className="text-accent-foreground/80 mb-4">Subscribe for updates on Garaadkobac news and events</p>
                <div className="flex space-x-2">
                  <Input placeholder="Your email" className="flex-1 bg-white/20 border-white/30 text-accent-foreground placeholder:text-accent-foreground/60" />
                  <Button variant="secondary" size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};