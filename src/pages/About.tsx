import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: <Award className="h-10 w-10 text-riftyellow" />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our work, from planning to execution."
    },
    {
      icon: <Users className="h-10 w-10 text-riftyellow" />,
      title: "Integrity",
      description: "We uphold the highest standards of honesty and ethical conduct in all our dealings."
    },
    {
      icon: <Clock className="h-10 w-10 text-riftyellow" />,
      title: "Timeliness",
      description: "We respect deadlines and deliver projects on schedule without compromising quality."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        {/* Page Header */}
        <div className="relative h-80 md:h-96">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=2071')" }}
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
                  src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac" 
                  alt="RiftWorkmanship History" 
                  className="rounded-lg shadow-md h-64 object-cover w-full"
                />
                <img 
                  src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f" 
                  alt="RiftWorkmanship Projects" 
                  className="rounded-lg shadow-md h-64 object-cover w-full mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1493962853295-0fd70327578a" 
                  alt="RiftWorkmanship Team" 
                  className="rounded-lg shadow-md h-64 object-cover w-full"
                />
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
                  alt="RiftWorkmanship Services" 
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
              {values.map((value, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
                  <div className="flex justify-center mb-6">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Leadership Team</h2>
              <div className="w-20 h-1 bg-riftyellow mb-6 mx-auto"></div>
              <p className="text-gray-700">
                Meet the experienced professionals who lead RiftWorkmanship's operations and 
                ensure we maintain our high standards of excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover-card-rise">
                <img 
                  src="https://images.unsplash.com/photo-1507152832244-10d45c7eda57?q=80&w=1974&auto=format&fit=crop" 
                  alt="CEO" 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">David Kimani</h3>
                  <p className="text-riftyellow font-medium mb-3">Founder & CEO</p>
                  <p className="text-gray-600">
                    With over 20 years of experience in construction, David leads our company with vision and expertise.
                  </p>
                </div>
              </div>
              
              {/* Team Member 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover-card-rise">
                <img 
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1974&auto=format&fit=crop" 
                  alt="Operations Director" 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Sarah Omondi</h3>
                  <p className="text-riftyellow font-medium mb-3">Operations Director</p>
                  <p className="text-gray-600">
                    Sarah ensures our projects run smoothly, coordinating teams and resources with precision.
                  </p>
                </div>
              </div>
              
              {/* Team Member 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover-card-rise">
                <img 
                  src="https://images.unsplash.com/photo-1506277886164-e25976267a10?q=80&w=2070&auto=format&fit=crop" 
                  alt="Chief Architect" 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">James Mwangi</h3>
                  <p className="text-riftyellow font-medium mb-3">Chief Architect</p>
                  <p className="text-gray-600">
                    James brings creative vision to our projects, designing spaces that are both beautiful and functional.
                  </p>
                </div>
              </div>
              
              {/* Team Member 4 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover-card-rise">
                <img 
                  src="https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?q=80&w=1974&auto=format&fit=crop" 
                  alt="Project Manager" 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Daniel Kiprop</h3>
                  <p className="text-riftyellow font-medium mb-3">Lead Project Manager</p>
                  <p className="text-gray-600">
                    Daniel oversees our most complex projects, ensuring they meet our high standards of quality.
                  </p>
                </div>
              </div>
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
