
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "James Muthoni",
      role: "Property Developer",
      quote: "RiftWorkmanship delivered our commercial complex ahead of schedule and beyond our expectations. Their attention to detail and commitment to quality is unmatched in the industry."
    },
    {
      id: 2,
      name: "Sarah Kiprop",
      role: "Homeowner",
      quote: "The team at RiftWorkmanship transformed our house into a dream home. Their creative solutions to our space challenges and the craftsmanship they displayed was exceptional."
    },
    {
      id: 3,
      name: "Daniel Otieno",
      role: "CEO, Horizon Offices",
      quote: "Working with RiftWorkmanship on our office renovation was a seamless experience. They understood our vision perfectly and executed it with professional precision."
    },
    {
      id: 4,
      name: "Elizabeth Wanjiku",
      role: "Hotel Manager",
      quote: "The landscaping project RiftWorkmanship completed for our hotel has received countless compliments from our guests. Their design expertise and execution were flawless."
    },
    {
      id: 5,
      name: "Robert Kimani",
      role: "Architect",
      quote: "As an architect, I have high standards for construction partners. RiftWorkmanship consistently exceeds those standards with their technical knowledge and commitment to excellence."
    }
  ];
  
  return (
    <section className="section-padding bg-riftblack text-white" id="testimonials">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-riftyellow font-bold text-lg mb-2">TESTIMONIALS</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Clients Say About Us
          </h2>
          <div className="w-20 h-1 bg-riftyellow mb-6 mx-auto"></div>
          <p className="text-gray-300">
            Don't just take our word for it. Here's what some of our satisfied clients 
            have to say about their experience working with RiftWorkmanship Limited.
          </p>
        </div>
        
        {/* Testimonials Carousel */}
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-gray-900 border-gray-800 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4">
                      {/* Quote icon */}
                      <svg className="h-8 w-8 text-riftyellow" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zM10 26c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zM24 8c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zM24 26c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"></path>
                      </svg>
                    </div>
                    
                    <p className="text-gray-300 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                    
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 bg-riftyellow text-riftblack border-none hover:bg-amber-400 hover:text-riftblack" />
            <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 bg-riftyellow text-riftblack border-none hover:bg-amber-400 hover:text-riftblack" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
