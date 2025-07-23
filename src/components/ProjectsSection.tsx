import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

const ProjectsSection = () => {
  const categories = ["All", "Residential", "Commercial", "Renovation", "Design"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "Luxury Villa Complex",
      category: "Residential",
      image: "https://i.ibb.co/DfvH772g/IMG-20250310-WA0006.jpg",
      description: "A collection of high-end residential villas featuring modern architecture and premium finishes.",
      extendedDescription: "This exclusive development includes 12 custom villas, each with unique floor plans ranging from 3 to 5 bedrooms. The project incorporated sustainable building materials, energy-efficient systems, and smart home technology throughout. Our team managed everything from site preparation to interior finishes."
    },
    {
      id: 2,
      title: "Corporate Office Building",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
      description: "A state-of-the-art office complex designed for optimal workflow and employee comfort.",
      extendedDescription: "This 10-story corporate headquarters features an open-concept design with flexible workspace configurations, collaborative zones, and state-of-the-art conference facilities. The building includes sustainable features like rainwater harvesting, solar panels, and a green roof garden accessible to employees."
    },
    {
      id: 3,
      title: "Historic Home Renovation",
      category: "Renovation",
      image: "https://i.ibb.co/gZwfrgB2/IMG-20250723-WA0018.jpg",
      description: "Careful restoration of a heritage property, preserving historical elements while adding modern amenities.",
      extendedDescription: "This heritage home renovation required careful preservation of original architectural features while incorporating modern systems and conveniences. We worked with conservation specialists to restore intricate woodwork, refurbish original windows, and recreate period-appropriate details while adding modern plumbing, electrical, and climate control systems."
    },
    {
      id: 4,
      title: "Garden Complex Design",
      category: "Design",
      image: "https://images.unsplash.com/photo-1558521558-037f1cb027c5?q=80&w=2070",
      description: "Comprehensive landscape architecture for a community garden and recreational space.",
      extendedDescription: "This community garden project transformed an unused urban lot into a vibrant public space with raised garden beds, walking paths, seating areas, and a children's play zone. The design incorporated native plants, efficient irrigation systems, and solar lighting to create a sustainable community asset."
    },
    {
      id: 5,
      title: "Modern Apartment Building",
      category: "Residential",
      image: "https://i.ibb.co/xqVLYzYG/IMG-20250723-WA0012.jpg",
      description: "Contemporary multi-family housing with sustainable features and community amenities.",
      extendedDescription: "This 24-unit apartment complex prioritizes community living with shared amenities including a rooftop garden, fitness center, and co-working spaces. The building utilizes passive solar design, rainwater collection, and energy-efficient systems throughout. Each unit features modern finishes, open floor plans, and private balconies."
    },
    {
      id: 6,
      title: "Shopping Center Expansion",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=2070",
      description: "Major expansion of an existing retail center, adding new storefronts and public spaces.",
      extendedDescription: "This commercial project expanded an existing shopping center by 15,000 square feet, adding 12 new retail spaces and a central food court with outdoor seating. The design seamlessly integrated with the existing structure while modernizing the entire facility with updated facades, improved traffic flow, and enhanced landscaping throughout the property."
    }
  ];
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
    
  const toggleExpand = (id) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

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
                
                {expandedProjectId === project.id && (
                  <div className="mt-4 mb-4 text-gray-700 bg-gray-50 p-4 rounded-md animate-fade-in">
                    {project.extendedDescription}
                  </div>
                )}
                
                <Button 
                  variant="link" 
                  className="text-riftyellow p-0 hover:text-amber-600 flex items-center"
                  onClick={() => toggleExpand(project.id)}
                >
                  {expandedProjectId === project.id ? (
                    <>View Less <ChevronUp className="ml-2 h-4 w-4" /></>
                  ) : (
                    <>View Details <ChevronDown className="ml-2 h-4 w-4" /></>
                  )}
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
