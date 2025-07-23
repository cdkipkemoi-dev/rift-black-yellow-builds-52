import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";

const Projects = () => {
  const categories = ["All", "Residential", "Commercial", "Renovation", "Design", "Landscaping"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const projects = [
    {
      id: 1,
      title: "Luxury Villa Complex",
      category: "Residential",
      location: "Eldoret",
      year: "2023",
      image: "https://i.ibb.co/DfvH772g/IMG-20250310-WA0006.jpg",
      description: "A collection of high-end residential villas featuring modern architecture and premium finishes."
    },
    {
      id: 2,
      title: "Corporate Office Building",
      category: "Commercial",
      location: "Nairobi",
      year: "2022",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070",
      description: "A state-of-the-art office complex designed for optimal workflow and employee comfort."
    },
    {
      id: 3,
      title: "Historic Home Renovation",
      category: "Renovation",
      location: "Nakuru",
      year: "2023",
      image: "https://i.ibb.co/gZwfrgB2/IMG-20250723-WA0018.jpg",
      description: "Careful restoration of a heritage property, preserving historical elements while adding modern amenities."
    },
    {
      id: 4,
      title: "Garden Complex Design",
      category: "Design",
      location: "Eldoret",
      year: "2022",
      image: "https://images.unsplash.com/photo-1558521558-037f1cb027c5?q=80&w=2070",
      description: "Comprehensive landscape architecture for a community garden and recreational space."
    },
    {
      id: 5,
      title: "Modern Apartment Building",
      category: "Residential",
      location: "Eldoret",
      year: "2021",
      image: "https://i.ibb.co/xqVLYzYG/IMG-20250723-WA0012.jpg",
      description: "Contemporary multi-family housing with sustainable features and community amenities."
    },
    {
      id: 6,
      title: "Shopping Center Expansion",
      category: "Commercial",
      location: "Nairobi",
      year: "2021",
      image: "https://images.unsplash.com/photo-1577277625082-36df4915ebeb?q=80&w=2070",
      description: "Major expansion of an existing retail center, adding new storefronts and public spaces."
    },
    {
      id: 7,
      title: "Hillside Garden Transformation",
      category: "Landscaping",
      location: "Eldoret",
      year: "2022",
      image: "https://images.unsplash.com/photo-1605800982630-8c9f549f1b3e?q=80&w=2071",
      description: "Complete redesign of challenging hillside terrain into a beautiful multi-level garden with water features."
    },
    {
      id: 8,
      title: "Office Interior Redesign",
      category: "Design",
      location: "Nairobi",
      year: "2023",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069",
      description: "Modern, ergonomic workspace design focused on employee productivity and wellbeing."
    },
    {
      id: 9,
      title: "Resort Hotel Construction",
      category: "Commercial",
      location: "Mombasa",
      year: "2022",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
      description: "Luxury beachfront resort featuring sustainable design, local materials, and state-of-the-art amenities."
    }
  ];
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        {/* Page Header */}
        <div className="relative h-80 md:h-96">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541976590-125431b923de?q=80&w=2070')" }}
          ></div>
          <div className="absolute inset-0 bg-riftblack/70"></div>
          <div className="relative z-10 container-custom h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Projects</h1>
            <div className="flex items-center text-gray-300">
              <a href="/" className="hover:text-riftyellow">Home</a>
              <span className="mx-2">/</span>
              <span className="text-riftyellow">Projects</span>
            </div>
          </div>
        </div>
        
        {/* Projects Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Construction Portfolio
              </h2>
              <div className="w-20 h-1 bg-riftyellow mb-6 mx-auto"></div>
              <p className="text-gray-700 mb-8">
                Browse through our diverse portfolio of projects showcasing our expertise in 
                residential construction, commercial buildings, renovations, and more.
              </p>
              
              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    className={
                      activeCategory === category 
                        ? "bg-riftyellow text-riftblack hover:bg-amber-400 border-riftyellow" 
                        : "border-gray-300 text-gray-700 hover:bg-gray-100"
                    }
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover-card-rise border-none shadow-md">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <div className="bg-riftyellow text-riftblack text-xs font-bold px-3 py-1 rounded-full inline-block">
                        {project.category}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {project.year} | {project.location}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <Button variant="link" className="text-riftyellow p-0 hover:text-amber-600">
                      View Project Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="flex items-center space-x-2">
                <Button variant="outline" className="w-10 h-10 p-0">
                  &lt;
                </Button>
                <Button variant="outline" className="w-10 h-10 p-0 bg-riftyellow text-riftblack border-riftyellow">
                  1
                </Button>
                <Button variant="outline" className="w-10 h-10 p-0">
                  2
                </Button>
                <Button variant="outline" className="w-10 h-10 p-0">
                  3
                </Button>
                <Button variant="outline" className="w-10 h-10 p-0">
                  &gt;
                </Button>
              </nav>
            </div>
          </div>
        </section>
        
        {/* Featured Projects */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Featured Projects
              </h2>
              <div className="w-20 h-1 bg-riftyellow mb-6 mx-auto"></div>
              <p className="text-gray-700">
                Take a closer look at some of our most challenging and rewarding projects that showcase 
                our commitment to excellence in construction.
              </p>
            </div>
            
            {/* Featured Project Items */}
            <div className="space-y-16">
              {/* Featured Project 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="bg-riftyellow text-riftblack text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    Residential
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Luxury Villa Complex</h3>
                  <div className="w-16 h-1 bg-riftyellow mb-6"></div>
                  
                  <p className="text-gray-700 mb-6">
                    This prestigious residential development features 12 luxury villas, each with unique design elements while maintaining a cohesive aesthetic throughout the complex. The project incorporated sustainable building practices, energy-efficient systems, and premium materials to create homes that are as environmentally responsible as they are beautiful.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-bold mb-1">Client</h4>
                      <p className="text-gray-600">Elite Developments Ltd</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Location</h4>
                      <p className="text-gray-600">Eldoret, Kenya</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Project Size</h4>
                      <p className="text-gray-600">25,000 sq. meters</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Completion</h4>
                      <p className="text-gray-600">January 2023</p>
                    </div>
                  </div>
                  
                  <Button className="btn-primary">
                    View Full Case Study
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="https://i.ibb.co/DfvH772g/IMG-20250310-WA0006.jpg" 
                    alt="Luxury Villa Exterior" 
                    className="rounded-lg shadow-lg h-48 md:h-64 w-full object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1600563438938-a9a27216b4e6?q=80&w=2070" 
                    alt="Luxury Villa Interior" 
                    className="rounded-lg shadow-lg h-48 md:h-64 w-full object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1600566753104-685f4f24cb4d?q=80&w=2070" 
                    alt="Luxury Villa Pool" 
                    className="rounded-lg shadow-lg h-48 md:h-64 w-full object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2070" 
                    alt="Luxury Villa Garden" 
                    className="rounded-lg shadow-lg h-48 md:h-64 w-full object-cover"
                  />
                </div>
              </div>
              
              {/* Featured Project 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="grid grid-cols-2 gap-4">
                    <img 
                      src="https://images.unsplash.com/photo-1577416412292-3c8918c00977?q=80&w=1964" 
                      alt="Office Building Exterior" 
                      className="rounded-lg shadow-lg h-48 md:h-64 w-full object-cover"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070" 
                      alt="Office Building Interior" 
                      className="rounded-lg shadow-lg h-48 md:h-64 w-full object-cover"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069" 
                      alt="Office Building Workspace" 
                      className="rounded-lg shadow-lg h-48 md:h-64 w-full object-cover"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=2070" 
                      alt="Office Building Lobby" 
                      className="rounded-lg shadow-lg h-48 md:h-64 w-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <div className="bg-riftyellow text-riftblack text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    Commercial
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Corporate Office Building</h3>
                  <div className="w-16 h-1 bg-riftyellow mb-6"></div>
                  
                  <p className="text-gray-700 mb-6">
                    This corporate headquarters building combines cutting-edge design with practical functionality. The 10-story structure features a striking glass facade, energy-efficient systems, flexible workspace configurations, and state-of-the-art technology infrastructure. The design prioritizes natural light and employee wellbeing while making a bold architectural statement.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-bold mb-1">Client</h4>
                      <p className="text-gray-600">Horizon Corporations</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Location</h4>
                      <p className="text-gray-600">Nairobi, Kenya</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Project Size</h4>
                      <p className="text-gray-600">15,000 sq. meters</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Completion</h4>
                      <p className="text-gray-600">December 2022</p>
                    </div>
                  </div>
                  
                  <Button className="btn-primary">
                    View Full Case Study
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* CTA Section */}
        <section className="py-20 bg-riftblack">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your construction needs and how RiftWorkmanship can help bring 
              your vision to reality with our expertise and craftsmanship.
            </p>
            <Button className="btn-primary text-lg py-6 px-8">
              Start Your Project
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
