
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const About = () => {
  const [expandedValue, setExpandedValue] = useState(null);
  
  const values = [
    {
      id: 1,
      icon: <Award className="h-10 w-10 text-riftyellow" />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our work, from planning to execution.",
      extendedDescription: "Excellence is not just a goal but a standard we uphold daily. Our team continuously refines their skills, stays updated with industry advancements, and implements best practices to deliver work that exceeds expectations."
    },
    {
      id: 2,
      icon: <Users className="h-10 w-10 text-riftyellow" />,
      title: "Integrity",
      description: "We uphold the highest standards of honesty and ethical conduct in all our dealings.",
      extendedDescription: "Integrity forms the foundation of our business relationships. We maintain transparency in our processes, provide honest assessments of projects, and ensure that our actions align with our commitments to clients, partners, and regulatory standards."
    },
    {
      id: 3,
      icon: <Clock className="h-10 w-10 text-riftyellow" />,
      title: "Timeliness",
      description: "We respect deadlines and deliver projects on schedule without compromising quality.",
      extendedDescription: "Timeliness is crucial in construction. Our systematic project management approach includes detailed scheduling, regular progress monitoring, and proactive problem-solving to ensure we complete every project within the agreed timeframe while maintaining our quality standards."
    }
  ];

  const toggleExpand = (id) => {
    setExpandedValue(expandedValue === id ? null : id);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        {/* Page Header */}
        <div className="relative h-80 md:h-96">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070')" }}
          ></div>
          <div className="absolute inset-0 bg-riftblack/70"></div>
          <div className="relative z-10 container-custom h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
            <div className="flex items-center text-gray-300">
              <a href="/" className="hover:text-riftyellow">Home</a>
              <span className="mx-2">/</span>
              <span className="text-riftyellow">About Us</span>
            </div>
          </div>
        </div>
        
        {/* Company History */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <div className="w-20 h-1 bg-riftyellow mb-6"></div>
                
                <p className="text-gray-700 mb-6">
                  RiftWorkmanship Limited was founded in 2008 with a vision to transform the construction landscape in Eldoret and across Kenya. Our founder, with over 20 years of experience in the industry, saw an opportunity to create a company that would deliver not just buildings, but exceptional craftsmanship and unmatched service.
                </p>
                
                <p className="text-gray-700 mb-6">
                  Starting with a small team of dedicated professionals, we quickly built a reputation for quality and reliability. Over the years, we've grown into a full-service construction and design company, expanding our expertise to include project management, architectural design, and landscaping.
                </p>
                
                <p className="text-gray-700 mb-6">
                  Today, with over 50 employees and hundreds of successful projects completed, we remain committed to our original vision: delivering excellence in every aspect of construction and design, creating spaces that inspire, function perfectly, and stand the test of time.
                </p>
                
                <div className="flex items-center">
                  <Button className="btn-primary" asChild>
                    <Link to="/services">Our Services</Link>
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" 
                  alt="RiftWorkmanship Office Building" 
                  className="rounded-lg shadow-md h-64 object-cover w-full"
                />
                <img 
                  src="https://i.ibb.co/dTXWspy/1000049867.png" 
                  alt="RiftWorkmanship Construction Team" 
                  className="rounded-lg shadow-md h-64 object-cover w-full mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1541976590-125431b923de?q=80&w=2070" 
                  alt="RiftWorkmanship Construction Site" 
                  className="rounded-lg shadow-md h-64 object-cover w-full"
                />
                <img 
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070" 
                  alt="RiftWorkmanship Equipment" 
                  className="rounded-lg shadow-md h-64 object-cover w-full mt-8"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <div className="w-16 h-1 bg-riftyellow mb-6"></div>
                <p className="text-gray-700">
                  Our mission at RiftWorkmanship is to deliver construction and design services of the highest quality, exceeding client expectations through innovative solutions, exceptional craftsmanship, and unwavering commitment to excellence. We aim to create spaces that not only meet functional requirements but also enhance the quality of life for those who use them.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-riftyellow mr-2 mt-0.5" />
                    <span className="text-gray-700">Deliver projects on time and within budget</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-riftyellow mr-2 mt-0.5" />
                    <span className="text-gray-700">Prioritize safety and sustainability in all operations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-riftyellow mr-2 mt-0.5" />
                    <span className="text-gray-700">Foster long-term relationships with clients through trust and reliability</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <div className="w-16 h-1 bg-riftyellow mb-6"></div>
                <p className="text-gray-700">
                  We envision RiftWorkmanship as the premier construction and design company in Kenya, recognized for transforming the built environment through innovation, quality, and sustainable practices. Our aim is to be the first choice for clients seeking exceptional construction services, while fostering a supportive workplace where talented professionals thrive.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-riftyellow mr-2 mt-0.5" />
                    <span className="text-gray-700">Lead the industry in adoption of innovative construction technologies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-riftyellow mr-2 mt-0.5" />
                    <span className="text-gray-700">Set new standards for quality and client satisfaction</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-riftyellow mr-2 mt-0.5" />
                    <span className="text-gray-700">Expand our impact through community-focused projects</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
              <div className="w-20 h-1 bg-riftyellow mb-6 mx-auto"></div>
              <p className="text-gray-700">
                These principles guide everything we do at RiftWorkmanship, shaping our approach to 
                projects, clients, and our team members.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.id} className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
                  <div className="flex justify-center mb-6">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600 mb-4">{value.description}</p>
                  
                  <Button 
                    variant="link" 
                    className="text-riftyellow hover:text-amber-600 mt-2"
                    onClick={() => toggleExpand(value.id)}
                  >
                    {expandedValue === value.id ? "Show Less" : "Learn More"}
                  </Button>
                  
                  {expandedValue === value.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200 animate-fade-in">
                      <p className="text-gray-600">{value.extendedDescription}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-riftblack">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work with Our Expert Team?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project needs and discover how RiftWorkmanship 
              can bring your vision to life.
            </p>
            <Button className="btn-primary text-lg py-6 px-8" asChild>
              <Link to="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
