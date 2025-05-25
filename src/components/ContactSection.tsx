
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
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

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-riftyellow" />,
      title: "Phone Number",
      details: ["+254 704 694052"]
    },
    {
      icon: <Mail className="h-6 w-6 text-riftyellow" />,
      title: "Email Address",
      details: ["info@riftworkmanship.com", "projects@riftworkmanship.com"]
    },
    {
      icon: <MapPin className="h-6 w-6 text-riftyellow" />,
      title: "Office Location",
      details: ["Eldoret, Kenya"]
    },
    {
      icon: <Clock className="h-6 w-6 text-riftyellow" />,
      title: "Working Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 8:00 AM - 1:00 PM"]
    }
  ];

  return (
    <section className="section-padding bg-gray-50" id="contact">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-riftyellow font-bold text-lg mb-2">CONTACT US</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get In Touch For Your Next Project
          </h2>
          <div className="w-20 h-1 bg-riftyellow mb-6 mx-auto"></div>
          <p className="text-gray-700">
            Have a construction or design project in mind? We'd love to hear from you. 
            Reach out to us for a consultation or quote, and we'll respond promptly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
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
                  <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
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
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <Input 
                    id="subject" 
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Consultation Request"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                <Textarea 
                  id="message" 
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Describe your project or inquiry..."
                  rows={5}
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-riftyellow text-riftblack hover:bg-amber-400 w-full py-6 font-bold text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  {item.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              ))}
            </div>
            
            {/* Map */}
            <div className="mt-6 bg-white p-2 rounded-lg shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.75772079434!2d35.2188861708768!3d0.5142307728278078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178101ae37f9f535%3A0xe2db337df0fc0d1b!2sEldoret!5e0!3m2!1sen!2ske!4v1651234567890!5m2!1sen!2ske"
                width="100%" 
                height="250" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="RiftWorkmanship Location"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
