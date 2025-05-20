
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const categories = ["All", "Residential", "Commercial", "Renovation", "Design"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const projects = [
    {
      id: 1,
      title: "Luxury Villa Complex",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070",
      description: "A collection of high-end residential villas featuring modern architecture and premium finishes."
    },
    {
      id: 2,
      title: "Corporate Office Building",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070",
      description: "A state-of-the-art office complex designed for optimal workflow and employee comfort."
    },
    {
      id: 3,
      title: "Historic Home Renovation",
      category: "Renovation",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
      description: "Careful restoration of a heritage property, preserving historical elements while adding modern amenities."
    },
    {
      id: 4,
      title: "Garden Complex Design",
      category: "Design",
      image: "https://images.unsplash.com/photo-1558521558-037f1cb027c5?q=80&w=2070",
      description: "Comprehensive landscape architecture for a community garden and recreational space."
    },
    {
      id: 5,
      title: "Modern Apartment Building",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073",
      description: "Contemporary multi-family housing with sustainable features and community amenities."
    },
    {
      id: 6,
      title: "Shopping Center Expansion",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1577277625082-36df4915ebeb?q=80&w=2070",
      description: "Major expansion of an existing retail center, adding new storefronts and public spaces."
    }
  ];
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="section-padding bg-white" id="projects">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-riftyellow font-bold text-lg mb-2">OUR PROJECTS</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Recent Construction Success Stories
          </h2>
          <div className="w-20 h-1 bg-riftyellow mb-6 mx-auto"></div>
          <p className="text-gray-700 mb-8">
            Browse through our portfolio of completed projects showcasing our expertise, 
            attention to detail, and commitment to excellence in construction and design.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
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
                <div className="bg-riftyellow text-riftblack text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Button variant="link" className="text-riftyellow p-0 hover:text-amber-600">
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <Button className="btn-primary">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
