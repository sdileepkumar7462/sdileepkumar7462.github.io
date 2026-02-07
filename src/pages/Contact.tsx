import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    details: ["HT shopping complex", "Near Rambagicha circle ⭕️", "Tirumala 517504", "", "Branch: Sai Krupa function hall, Near old toruchanoor road, Lakshmi Puram circle ⭕️, Tirupathi - 517501"],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+91 94403 97462", "+91 79934 34511", "Open 24/7"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["dileepmctml@gmail.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Sunday", "Open 24/7 for inquiries", "Office: 9 AM - 9 PM"],
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    guests: "",
    package: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent Successfully!",
      description: "Our team will contact you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      guests: "",
      package: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="py-20 bg-cover bg-center bg-no-repeat relative min-h-96"
        style={{
          backgroundImage: "url('https://i.postimg.cc/d1Q9rs1X/Whats-App-Image-2026-02-06-at-12-37-40-AM.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay - Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-white font-bold text-sm uppercase tracking-wider drop-shadow-lg">
              Contact Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mt-2 mb-4 drop-shadow-xl">
              Plan Your Divine Wedding Today
            </h1>
            <p className="text-white font-semibold text-lg drop-shadow-lg">
              Get in touch with our expert Tirupati wedding planners & organizers for a free consultation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                Get In Touch
              </h2>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-xl p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-divine flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                      {info.details.map((detail) => (
                        <p key={detail} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Quick WhatsApp */}
              <motion.a
                href="https://wa.me/919440397462?text=Hello! I'm interested in your wedding services."
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors"
              >
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
                <div>
                  <p className="font-semibold text-foreground">Quick Chat on WhatsApp</p>
                  <p className="text-sm text-muted-foreground">Get instant responses</p>
                </div>
              </motion.a>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="glass-card-strong rounded-2xl p-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Request a Quote
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address 
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Event Date *
                      </label>
                      <Input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="h-12"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Expected Guests
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full h-12 px-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select guest count</option>
                        <option value="50-100">50 - 100 guests</option>
                        <option value="100-200">100 - 200 guests</option>
                        <option value="200-300">200 - 300 guests</option>
                        <option value="300-500">300 - 500 guests</option>
                        <option value="500+">500+ guests</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Interested Package
                      </label>
                      <select
                        name="package"
                        value={formData.package}
                        onChange={handleChange}
                        className="w-full h-12 px-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select a package</option>
                        <option value="silver">Silver Package - ₹75,000</option>
                        <option value="gold">Gold Package - ₹1,50,000</option>
                        <option value="platinum">Platinum Package - ₹3,00,000</option>
                        <option value="diamond">Diamond Package - ₹5,00,000+</option>
                        <option value="custom">Custom Package</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your wedding requirements, special requests, or any questions..."
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="glass-card rounded-2xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.5783714926197!2d79.34894427406311!3d13.683382798875892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb2b56205b18157%3A0x2f298fe36d73e2f9!2sH%20T%20SHOPPING%20COMPLEX!5e0!3m2!1sen!2sin!4v1770352089632!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Divine Marriage Services Location - Tirupati"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
