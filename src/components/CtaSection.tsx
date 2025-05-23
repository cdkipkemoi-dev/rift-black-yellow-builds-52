
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1575290970649-8490709215ef?q=80&w=2070')",
          filter: "brightness(0.3)"
        }}
      ></div>
      
      {/* Overlay with Black and Yellow Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-riftblack/90 to-riftblack/80 z-10"></div>
      
      {/* Content */}
      <div className="container-custom relative z-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Build Your <span className="text-riftyellow">Next Project</span> with Us?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            From concept to completion, we're committed to bringing your vision to life 
            with exceptional craftsmanship and attention to detail. 
            Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="btn-primary text-lg py-6 px-8">
              Request a Quote
            </Button>
            <Button 
              className="w-full sm:w-auto border-riftyellow text-black bg-white hover:bg-gray-100 text-lg py-6 px-8"
              asChild
            >
              <Link to="/projects">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
