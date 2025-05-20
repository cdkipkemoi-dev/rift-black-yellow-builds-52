
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import CtaSection from "@/components/CtaSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PhoneCall } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <div className="container-custom py-8 flex justify-center">
          <Button 
            className="bg-white text-black border border-gray-200 shadow-md hover:bg-gray-100 font-bold py-4 px-6 rounded-md animate-scale-in flex items-center gap-2"
            asChild
          >
            <Link to="/contact">
              <PhoneCall size={20} />
              Contact Us Now
            </Link>
          </Button>
        </div>
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
