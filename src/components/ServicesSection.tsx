
import { 
  Building, 
  Hammer, 
  PaintBucket, 
  Layers, 
  TreePine, 
  Home 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useRef, useEffect } from 'react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Building className="h-12 w-12 text-riftyellow" />,
      title: "Project Management",
      description: "Professional oversight of construction projects from inception to completion, ensuring timely delivery, budget adherence, and quality control."
    },
    {
      icon: <Home className="h-12 w-12 text-riftyellow" />,
      title: "Residential Construction",
      description: "Building beautiful, functional homes with precision and attention to detail, creating living spaces that reflect your lifestyle and preferences."
    },
    {
      icon: <Building className="h-12 w-12 text-riftyellow" />,
      title: "Commercial Construction",
      description: "Creating efficient, impressive commercial spaces designed to enhance business operations and make a lasting impression on clients and customers."
    },
    {
      icon: <Hammer className="h-12 w-12 text-riftyellow" />,
      title: "Renovation & Remodeling",
      description: "Transforming existing structures with innovative designs and quality craftsmanship to breathe new life into your space."
    },
    {
      icon: <TreePine className="h-12 w-12 text-riftyellow" />,
      title: "Landscaping",
      description: "Designing and implementing beautiful outdoor environments that enhance the aesthetics and functionality of your property."
    },
    {
      icon: <Layers className="h-12 w-12 text-riftyellow" />,
      title: "Architectural & Structural Design",
      description: "Expert design services that blend creativity with technical precision to create spaces that are both beautiful and structurally sound."
    }
  ];

  // Function to check if an element is in the viewport
  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const cardsRef = useRef([]);

  useEffect(() => {
    // Initialize the refs array
    cardsRef.current = cardsRef.current.slice(0, services.length);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in', 'animate-scale-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Observe all card elements
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [services.length]);

  return (
    <section className="section-padding bg-gray-50" id="services">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h3 className="text-riftyellow font-bold text-lg mb-2">OUR SERVICES</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comprehensive Construction & Design Solutions
          </h2>
          <div className="w-20 h-1 bg-riftyellow mb-6 mx-auto"></div>
          <p className="text-gray-700">
            We offer a wide range of professional services to meet all your construction and design needs, 
            delivering excellence with every project regardless of size or complexity.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover-card-rise border-none shadow-md opacity-0 transform translate-y-4"
              ref={el => cardsRef.current[index] = el}
            >
              <CardContent className="p-8">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
