import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Impact } from "@/components/Impact";
import { SubOrganizations } from "@/components/SubOrganizations";
import { Governance } from "@/components/Governance";
import { Partnerships } from "@/components/Partnerships";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Impact />
        <SubOrganizations />
        <Governance />
        <Partnerships />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
