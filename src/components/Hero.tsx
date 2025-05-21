
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1541976590-125431b923de?q=80&w=2070')",
          filter: "brightness(0.5)"
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-riftblack/90 to-riftblack/70 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 container-custom mx-auto flex flex-col justify-center h-screen px-4 sm:px-6">
        <div className="max-w-3xl">
          <h3 className="text-riftyellow text-lg md:text-2xl font-medium mb-3 md:mb-4">Excellence in Construction</h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Building Dreams, <br/>
            <span className="text-riftyellow">Crafting Excellence</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 md:mb-8 max-w-2xl">
            RiftWorkmanship Limited is a premier construction company in Eldoret, Kenya, 
            delivering exceptional construction, renovation, and design services tailored to exceed your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="w-full sm:w-auto bg-riftyellow text-riftblack hover:bg-amber-400 font-bold py-3 px-6 text-base"
              asChild
            >
              <Link to="/services">Our Services</Link>
            </Button>
            <Button 
              variant="outline" 
              className="w-full sm:w-auto border-riftyellow text-white hover:bg-riftyellow/10 text-base py-3 px-6"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
          
          {/* Stats - Responsive grid */}
          <div className="mt-10 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            <div className="text-center p-3 md:p-4 bg-riftblack/60 backdrop-blur-sm rounded-lg border border-riftyellow/20">
              <div className="text-2xl md:text-4xl font-bold text-riftyellow mb-1">5+</div>
              <div className="text-white text-xs sm:text-sm">Years Experience</div>
            </div>
            <div className="text-center p-3 md:p-4 bg-riftblack/60 backdrop-blur-sm rounded-lg border border-riftyellow/20">
              <div className="text-2xl md:text-4xl font-bold text-riftyellow mb-1">100+</div>
              <div className="text-white text-xs sm:text-sm">Projects Completed</div>
            </div>
            <div className="text-center p-3 md:p-4 bg-riftblack/60 backdrop-blur-sm rounded-lg border border-riftyellow/20">
              <div className="text-2xl md:text-4xl font-bold text-riftyellow mb-1">50+</div>
              <div className="text-white text-xs sm:text-sm">Expert Employees</div>
            </div>
            <div className="text-center p-3 md:p-4 bg-riftblack/60 backdrop-blur-sm rounded-lg border border-riftyellow/20">
              <div className="text-2xl md:text-4xl font-bold text-riftyellow mb-1">98%</div>
              <div className="text-white text-xs sm:text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator - Hide on smaller screens */}
      <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-ping"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
