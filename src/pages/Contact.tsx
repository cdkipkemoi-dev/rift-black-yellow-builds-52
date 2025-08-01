
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('submit-contact', {
        body: formState
      });

      if (error) {
        throw error;
      }

      if (data?.success) {
        toast({
          title: "Message Sent!",
          description: (
            <div className="flex items-center">
              <Check className="h-4 w-4 mr-2" />
              {data.message}
            </div>
          ),
        });
        setFormState({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error(data?.error || 'Failed to send message');
      }
    } catch (error: any) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        {/* Page Header */}
        <div className="relative h-80 md:h-96">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1570126688035-1e6adbd61053?q=80&w=2071')" }}
          ></div>
          <div className="absolute inset-0 bg-riftblack/70"></div>
          <div className="relative z-10 container-custom h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <div className="flex items-center text-gray-300">
              <a href="/" className="hover:text-riftyellow">Home</a>
              <span className="mx-2">/</span>
              <span className="text-riftyellow">Contact</span>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <div className="w-16 h-1 bg-riftyellow mb-6"></div>
                <p className="text-gray-700 mb-8">
                  Have questions about our services or ready to start your next construction project? 
                  Contact our team for a consultation. We're here to help bring your vision to life.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 bg-riftyellow/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-riftyellow" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Office Location</h3>
                      <p className="text-gray-600">Eldoret, Kenya</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-riftyellow/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-riftyellow" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Phone</h3>
                      <p className="text-gray-600">+254 704 694052</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-riftyellow/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-riftyellow" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-gray-600">info@riftworkmanship.com</p>
                      <p className="text-gray-600">projects@riftworkmanship.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-riftyellow/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-riftyellow" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Working Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 8:00 AM - 1:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="mt-8">
                  <h3 className="font-bold mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-riftyellow hover:text-white transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="#" className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-riftyellow hover:text-white transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a href="#" className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-riftyellow hover:text-white transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="#" className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-riftyellow hover:text-white transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 mb-2">Your Name <span className="text-red-500">*</span></label>
                        <Input 
                          id="name" 
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">Your Email <span className="text-red-500">*</span></label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                        <Input 
                          id="phone" 
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="+254 700 000000"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-gray-700 mb-2">Subject <span className="text-red-500">*</span></label>
                        <Input 
                          id="subject" 
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="Project Inquiry"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 mb-2">Your Message <span className="text-red-500">*</span></label>
                      <Textarea 
                        id="message" 
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="Tell us about your project or inquiry..."
                        rows={6}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="bg-riftyellow text-riftblack hover:bg-amber-400 py-6 px-8 font-bold text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="section-padding bg-gray-50 pt-0">
          <div className="container-custom">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.75772079434!2d35.2188861708768!3d0.5142307728278078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178101ae37f9f535%3A0xe2db337df0fc0d1b!2sEldoret!5e0!3m2!1sen!2ske!4v1651234567890!5m2!1sen!2ske"
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="RiftWorkmanship Location"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1 bg-riftyellow mb-6 mx-auto"></div>
              <p className="text-gray-700">
                Find answers to common questions about our services, process, and company.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {/* FAQ Items */}
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-3">What areas do you serve?</h3>
                  <p className="text-gray-700">
                    While we're based in Eldoret, we provide construction services throughout Kenya, with a focus on the Rift Valley region. For larger projects, we're willing to travel nationwide.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-3">How long does a typical construction project take?</h3>
                  <p className="text-gray-700">
                    Project timelines vary significantly based on scope, size, and complexity. A small renovation might take a few weeks, while a large commercial building could take 12-18 months. During our initial consultation, we'll provide a detailed timeline specific to your project.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-3">Do you provide free estimates?</h3>
                  <p className="text-gray-700">
                    Yes, we offer free initial consultations and estimates for all construction projects. Once we understand your needs, we'll provide a detailed quote outlining all costs involved.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-3">Are you licensed and insured?</h3>
                  <p className="text-gray-700">
                    Absolutely. RiftWorkmanship Limited is fully licensed, registered, and insured. We maintain comprehensive insurance coverage to protect our clients, employees, and projects throughout the construction process.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-3">What warranties do you offer on your work?</h3>
                  <p className="text-gray-700">
                    We stand behind our quality with comprehensive warranties. Typically, we provide a 1-year warranty on workmanship, while many materials and systems come with their own manufacturer warranties which we pass on to you. Extended warranty options are also available for certain projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
