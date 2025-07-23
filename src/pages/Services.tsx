import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Building, 
  Hammer, 
  PaintBucket, 
  Layers, 
  TreePine, 
  Home,
  CheckCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const Services = () => {
  const [expandedServiceId, setExpandedServiceId] = useState(null);
  
  const services = [
    {
      id: 1,
      icon: <Building className="h-12 w-12 text-riftyellow" />,
      title: "Project Management",
      shortDescription: "Professional oversight of construction projects from inception to completion.",
      fullDescription: "Our comprehensive project management services ensure your construction project is completed on time, within budget, and to the highest standards. We handle everything from initial planning and resource allocation to coordination of subcontractors, quality control, and final inspections. Our experienced project managers serve as your single point of contact, keeping you informed at every stage and addressing any issues promptly.",
      features: [
        "Detailed project planning and scheduling",
        "Budget development and management",
        "Contractor and vendor coordination",
        "Regular progress reports and updates",
        "Quality assurance and control",
        "Risk assessment and mitigation"
      ],
      image: "https://i.ibb.co/sdsQRmh6/IMG-20250526-WA0022-1.jpg"
    },
    {
      id: 2,
      icon: <Home className="h-12 w-12 text-riftyellow" />,
      title: "Residential Construction",
      shortDescription: "Building beautiful, functional homes with precision and attention to detail.",
      fullDescription: "From custom luxury homes to affordable housing developments, our residential construction services deliver quality living spaces that meet your specific needs and preferences. We work closely with you throughout the design and construction process, ensuring your new home reflects your lifestyle while incorporating efficient use of space, energy-efficient systems, and quality materials that stand the test of time.",
      features: [
        "Custom home design and construction",
        "Home additions and extensions",
        "Energy-efficient and sustainable building practices",
        "High-quality finishes and materials",
        "Integrated technology and smart home features",
        "Comprehensive warranties on all work"
      ],
      image: "https://i.ibb.co/TyNxtTp/IMG-20250526-WA0018.jpg"
    },
    {
      id: 3,
      icon: <Building className="h-12 w-12 text-riftyellow" />,
      title: "Commercial Construction",
      shortDescription: "Creating efficient, impressive commercial spaces designed to enhance business operations.",
      fullDescription: "Our commercial construction services deliver functional, attractive, and durable spaces for businesses of all types. Whether you need a new office building, retail space, restaurant, or warehouse, we understand that your commercial property is crucial to your business success. We focus on creating spaces that work for your specific business needs, with attention to workflow efficiency, customer experience, and your brand identity.",
      features: [
        "Office buildings and corporate headquarters",
        "Retail and restaurant spaces",
        "Healthcare and educational facilities",
        "Industrial and warehouse construction",
        "Tenant improvements and build-outs",
        "Compliance with all commercial building codes"
      ],
      image: "https://i.ibb.co/rKz4s0Yv/IMG-20250723-WA0009.jpg"
    },
    {
      id: 4,
      icon: <Hammer className="h-12 w-12 text-riftyellow" />,
      title: "Renovation & Remodeling",
      shortDescription: "Transforming existing structures with innovative designs and quality craftsmanship.",
      fullDescription: "Our renovation and remodeling services breathe new life into existing spaces. Whether you're updating a dated kitchen, adding a bathroom, creating an open-concept living area, or completely transforming a commercial space, our team combines creative design with quality construction to maximize the potential of your property. We handle everything from minor updates to major structural changes, always with minimal disruption to your daily life or business operations.",
      features: [
        "Kitchen and bathroom remodeling",
        "Basement and attic conversions",
        "Commercial space renovations",
        "Historic building restoration",
        "Structural modifications and repairs",
        "Interior and exterior upgrades"
      ],
      image: "https://i.ibb.co/5W5CJq76/IMG-20250723-WA0006.jpg"
    },
    {
      id: 5,
      icon: <TreePine className="h-12 w-12 text-riftyellow" />,
      title: "Landscaping",
      shortDescription: "Designing and implementing beautiful outdoor environments that enhance your property.",
      fullDescription: "Our landscaping services create beautiful, functional outdoor spaces that complement your property and lifestyle. From initial design concepts to final installation, we focus on creating sustainable landscapes that enhance curb appeal, provide enjoyable outdoor living areas, and require appropriate maintenance for your needs. Our designs incorporate native plants, efficient irrigation systems, and hardscape elements that work together harmoniously.",
      features: [
        "Landscape design and planning",
        "Hardscape installation (patios, walkways, retaining walls)",
        "Garden design and installation",
        "Irrigation and drainage systems",
        "Outdoor living spaces and kitchens",
        "Commercial and residential landscaping"
      ],
      image: "https://i.ibb.co/TDXq2cbC/istockphoto-483785475-612x612.jpg"
    },
    {
      id: 6,
      icon: <Layers className="h-12 w-12 text-riftyellow" />,
      title: "Architectural & Structural Design",
      shortDescription: "Expert design services that blend creativity with technical precision.",
      fullDescription: "Our architectural and structural design services merge creativity with technical expertise to create buildings that are both beautiful and structurally sound. Our team of experienced architects and structural engineers works closely with you to understand your vision, requirements, and budget, then translates these into detailed plans that guide the construction process. We focus on innovative designs that maximize space, enhance functionality, and reflect your aesthetic preferences.",
      features: [
        "Concept development and schematic design",
        "Detailed architectural drawings and specifications",
        "Structural engineering and analysis",
        "3D renderings and visualizations",
        "Permit preparation and submission",
        "Sustainable and energy-efficient design"
      ],
      image: "https://i.ibb.co/ymvyV7bs/IMG-20250526-WA0019.jpg"
    }
  ];

  const toggleExpand = (id) => {
    setExpandedServiceId(expandedServiceId === id ? null : id);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        {/* Page Header */}
        <div className="relative h-80 md:h-96">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070')" }}
          ></div>
          <div className="absolute inset-0 bg-riftblack/70"></div>
          <div className="relative z-10 container-custom h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
            <div className="flex items-center text-gray-300">
              <a href="/" className="hover:text-riftyellow">Home</a>
              <span className="mx-2">/</span>
              <span className="text-riftyellow">Services</span>
            </div>
          </div>
        </div>
        
        {/* Services Overview */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Comprehensive Construction & Design Solutions
              </h2>
              <div className="w-20 h-1 bg-riftyellow mb-6 mx-auto"></div>
              <p className="text-gray-700">
                At RiftWorkmanship, we offer a complete range of construction and design services 
                to meet all your project needs. From initial concept to final completion, our experienced 
                team ensures exceptional quality and client satisfaction.
              </p>
            </div>
            
            {/* Detailed Services */}
            <div className="space-y-16">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div 
                    className={`${
                      index % 2 !== 0 ? 'lg:order-2' : ''
                    }`}
                  >
                    <div className="mb-6">{service.icon}</div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                    <div className="w-16 h-1 bg-riftyellow mb-6"></div>
                    
                    <p className="text-gray-700 mb-6">
                      {service.fullDescription}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 mb-8">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-riftyellow mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className="btn-primary"
                      onClick={() => toggleExpand(service.id)}
                    >
                      {expandedServiceId === service.id ? "Hide Details" : "Request Quote"}
                    </Button>
                    
                    {expandedServiceId === service.id && (
                      <div className="mt-6 p-5 bg-gray-50 rounded-lg border border-gray-200 animate-fade-in">
                        <h4 className="font-bold mb-3">Additional Services Include:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Free initial consultation and site assessment</li>
                          <li>Detailed project proposals with transparent pricing</li>
                          <li>Regular progress updates and site visits</li>
                          <li>Post-completion support and maintenance advice</li>
                          <li>Quality assurance and satisfaction guarantee</li>
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  <div 
                    className={`${
                      index % 2 !== 0 ? 'lg:order-1' : ''
                    }`}
                  >
                    <img 
                      src={service.image}
                      alt={service.title} 
                      className="rounded-lg shadow-lg w-full h-auto object-cover aspect-[4/3]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Service Process
              </h2>
              <div className="w-20 h-1 bg-riftyellow mb-6 mx-auto"></div>
              <p className="text-gray-700">
                We follow a systematic approach to ensure your project progresses smoothly 
                from initial consultation to final completion.
              </p>
            </div>
            
            <div className="relative">
              {/* Process Timeline Line */}
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-riftyellow"></div>
              
              {/* Process Steps */}
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-12 mb-6 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
                    <p className="text-gray-600">
                      We meet to discuss your vision, requirements, and budget to understand the scope of your project.
                    </p>
                  </div>
                  
                  <div className="hidden md:flex h-12 w-12 rounded-full bg-riftyellow text-black font-bold items-center justify-center relative z-10">
                    1
                  </div>
                  
                  <div className="md:hidden h-12 w-12 rounded-full bg-riftyellow text-black font-bold flex items-center justify-center mb-4">
                    1
                  </div>
                  
                  <div className="flex-1 md:pl-12">
                    <img 
                      src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070" 
                      alt="Consultation" 
                      className="rounded-lg shadow-md h-40 object-cover w-full"
                    />
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-12 mb-6 md:mb-0 md:order-2">
                    <img 
                      src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070" 
                      alt="Design Phase" 
                      className="rounded-lg shadow-md h-40 object-cover w-full"
                    />
                  </div>
                  
                  <div className="hidden md:flex h-12 w-12 rounded-full bg-riftyellow text-black font-bold items-center justify-center relative z-10">
                    2
                  </div>
                  
                  <div className="md:hidden h-12 w-12 rounded-full bg-riftyellow text-black font-bold flex items-center justify-center mb-4">
                    2
                  </div>
                  
                  <div className="flex-1 md:pl-12 md:order-1">
                    <h3 className="text-xl font-bold mb-2">Design & Planning</h3>
                    <p className="text-gray-600">
                      We develop detailed designs and plans, creating a roadmap for your project's execution.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-12 mb-6 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">Cost Estimation</h3>
                    <p className="text-gray-600">
                      We provide a detailed cost breakdown and timeline for your project, ensuring transparency.
                    </p>
                  </div>
                  
                  <div className="hidden md:flex h-12 w-12 rounded-full bg-riftyellow text-black font-bold items-center justify-center relative z-10">
                    3
                  </div>
                  
                  <div className="md:hidden h-12 w-12 rounded-full bg-riftyellow text-black font-bold flex items-center justify-center mb-4">
                    3
                  </div>
                  
                  <div className="flex-1 md:pl-12">
                    <img 
                      src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2022" 
                      alt="Cost Estimation" 
                      className="rounded-lg shadow-md h-40 object-cover w-full"
                    />
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-12 mb-6 md:mb-0 md:order-2">
                    <img 
                      src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1740" 
                      alt="Construction" 
                      className="rounded-lg shadow-md h-40 object-cover w-full"
                    />
                  </div>
                  
                  <div className="hidden md:flex h-12 w-12 rounded-full bg-riftyellow text-black font-bold items-center justify-center relative z-10">
                    4
                  </div>
                  
                  <div className="md:hidden h-12 w-12 rounded-full bg-riftyellow text-black font-bold flex items-center justify-center mb-4">
                    4
                  </div>
                  
                  <div className="flex-1 md:pl-12 md:order-1">
                    <h3 className="text-xl font-bold mb-2">Construction</h3>
                    <p className="text-gray-600">
                      Our skilled team executes the project according to plan, with regular updates on progress.
                    </p>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-12 mb-6 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
                    <p className="text-gray-600">
                      Throughout construction, our quality control team ensures all work meets our high standards.
                    </p>
                  </div>
                  
                  <div className="hidden md:flex h-12 w-12 rounded-full bg-riftyellow text-black font-bold items-center justify-center relative z-10">
                    5
                  </div>
                  
                  <div className="md:hidden h-12 w-12 rounded-full bg-riftyellow text-black font-bold flex items-center justify-center mb-4">
                    5
                  </div>
                  
                  <div className="flex-1 md:pl-12">
                    <img 
                      src="https://images.unsplash.com/photo-1606676539940-12768ce0e762?q=80&w=1974" 
                      alt="Quality Assurance" 
                      className="rounded-lg shadow-md h-40 object-cover w-full"
                    />
                  </div>
                </div>
                
                {/* Step 6 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-12 mb-6 md:mb-0 md:order-2">
                    <img 
  src="https://i.ibb.co/tw5sLYkY/images.jpg" 
  alt="Project Completion" 
  className="rounded-lg shadow-md h-40 object-cover w-full"
/>
                  </div>
                  
                  <div className="hidden md:flex h-12 w-12 rounded-full bg-riftyellow text-black font-bold items-center justify-center relative z-10">
                    6
                  </div>
                  
                  <div className="md:hidden h-12 w-12 rounded-full bg-riftyellow text-black font-bold flex items-center justify-center mb-4">
                    6
                  </div>
                  
                  <div className="flex-1 md:pl-12 md:order-1">
                    <h3 className="text-xl font-bold mb-2">Project Completion</h3>
                    <p className="text-gray-600">
                      We finalize all details, conduct a thorough inspection, and ensure your complete satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-riftblack">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Next Construction Project?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your specific needs and discover how our services 
              can help bring your vision to life.
            </p>
            <Button className="btn-primary text-lg py-6 px-8">
              Get a Free Consultation
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
