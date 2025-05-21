
import { 
  Building, 
  Hammer, 
  PaintBucket, 
  Layers, 
  TreePine, 
  Home 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from 'react';

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

  const cardsRef = useRef([]);

  useEffect(() => {
    // Initialize the refs array
    cardsRef.current = cardsRef.current.slice(0, services.length);
    
    // Set a small timeout to ensure cards are visible
    setTimeout(() => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          // Remove opacity-0 and apply animations
          card.classList.remove('opacity-0');
          card.classList.remove('translate-y-4');
          // Apply animations with staggered delay
          card.style.transition = 'all 0.6s ease';
          card.style.transitionDelay = `${index * 0.1}s`;
          card.style.opacity = '1';
          card.style.transform = 'translateY(0) scale(1)';
        }
      });
    }, 300);

    return () => {
      // Cleanup
      cardsRef.current.forEach(card => {
        if (card) {
          card.style.transition = '';
          card.style.transitionDelay = '';
        }
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
              className="border-none shadow-md opacity-0 transform translate-y-4"
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
