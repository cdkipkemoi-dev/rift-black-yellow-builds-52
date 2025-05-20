
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const features = [
    "Professional team of experts",
    "Quality construction materials",
    "Transparent project management",
    "Timely project delivery",
    "Attention to detail",
    "Excellent craftsmanship"
  ];

  return (
    <section className="section-padding bg-white" id="about">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="RiftWorkmanship Team" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-riftyellow text-riftblack p-6 rounded-lg shadow-lg">
              <div className="text-5xl font-bold">5+</div>
              <div className="text-lg font-medium">Years Experience</div>
            </div>
          </div>
          
          {/* Content Side */}
          <div>
            <h3 className="text-riftyellow font-bold text-lg mb-2">ABOUT US</h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Kenya's Premier Construction & Design Company
            </h2>
            <div className="w-20 h-1 bg-riftyellow mb-6"></div>
            
            <p className="text-gray-700 mb-6">
              At RiftWorkmanship Limited, we believe in bringing architectural visions to life with 
              precision, creativity, and the highest standards of craftsmanship. Established in Eldoret, 
              Kenya, our company has grown to become a trusted name in the construction industry, known 
              for our unwavering commitment to quality and client satisfaction.
            </p>
            
            <p className="text-gray-700 mb-8">
              Our experienced team combines technical expertise with innovative approaches to 
              deliver exceptional results across residential, commercial, and landscaping projects. 
              From initial concept to final completion, we ensure that every detail is executed with 
              perfection, creating spaces that are both functional and aesthetically pleasing.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-riftyellow mr-2" />
                  <span className="text-gray-800">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button className="btn-primary" asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
