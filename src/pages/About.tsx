import { motion } from "framer-motion";
import { Star, Users, Award, Clock, Heart, Shield, MapPin, Phone, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import heroImage from "@/assets/hero-temple.jpg";
import mandapamDecorationImage from "@/assets/mandapam-decoration.jpg";
import functionHallImage from "@/assets/function-hall.jpg";
import stageDecorationImage from "@/assets/stage-decoration.jpg";

const stats = [
  { icon: Users, value: "5000+", label: "Weddings Organized" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Star, value: "4.9", label: "Rating on Google" },
  { icon: Heart, value: "100%", label: "Customer Satisfaction" },
];

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "Honest pricing with no hidden charges. We provide detailed quotations upfront.",
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description: "Every wedding is unique. We customize our services to match your vision and budget.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "From decorations to catering, we maintain the highest standards in every aspect.",
  },
  {
    icon: Clock,
    title: "Timely Execution",
    description: "We understand the importance of muhurtham. Everything is perfectly timed.",
  },
];

const teamMembers = [
  {
    name: "S. Dileep Kumar",
    role: "Founder & Chief Contractor",
    experience: "15+ years in wedding planning",
    image: heroImage,
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Divine wedding at Tirumala temple"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-divine-temple/80 via-divine-temple/60 to-background" />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="px-4 py-2 rounded-full bg-divine-gold/20 text-divine-gold text-sm font-semibold border border-divine-gold/30 backdrop-blur-sm">
              About Divine Marriage
            </span>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-divine-cream mt-6 mb-6">
              Making Your Dream Wedding a Divine Reality
            </h1>
            <p className="text-divine-cream/90 text-lg md:text-xl">
              Tirupati's most trusted wedding contractors with 15+ years of experience 
              in organizing divine marriages at Tirumala, Tirupati, and Tiruchanoor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-primary to-accent -mt-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary-foreground/80" />
                <div className="text-2xl md:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80 text-xs md:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                15 Years of Creating Beautiful Wedding Memories
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded by S. Dileep Kumar, Divine Marriage Contractor has been the cornerstone 
                  of wedding planning in Tirupati since 2009. What started as a small family business 
                  has grown into the region's most trusted wedding contractor.
                </p>
                <p>
                  Our mission is simple: to make the journey to your dream wedding at Tirumala 
                  as joyous and stress-free as possible. We understand the sacred significance 
                  of a temple wedding and handle every detail with devotion.
                </p>
                <p>
                  From TTD Simple Group Marriage bookings to grand private function halls, from traditional 
                  decorations to modern catering - we offer complete wedding solutions under one roof.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="hero" asChild>
                  <Link to="/packages">View Our Packages</Link>
                </Button>
                <Button variant="divineOutline" asChild>
                  <a href="tel:+919440397462">Call: 94403 97462</a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <img
                  src={mandapamDecorationImage}
                  alt="Beautiful mandapam decoration"
                  className="rounded-2xl w-full h-40 md:h-48 object-cover shadow-lg"
                />
                <img
                  src={stageDecorationImage}
                  alt="Wedding stage decoration"
                  className="rounded-2xl w-full h-32 md:h-40 object-cover shadow-lg"
                />
              </div>
              <div className="pt-8">
                <img
                  src={functionHallImage}
                  alt="Premium function hall"
                  className="rounded-2xl w-full h-56 md:h-72 object-cover shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-20 bg-secondary/30 temple-pattern">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground">
              What sets us apart from other wedding contractors in Tirupati
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-strong rounded-2xl p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-divine flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Complete Wedding Solutions
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Marriage Choultries with Accommodation",
              "Mandapam Decorations (24 Hours)",
              "Flower Decoration & Garlands",
              "Nadaswaram & Music",
              "Purohit & Pooja Articles",
              "Complete Catering Services",
              "Video Coverage & Photography",
              "Stage & Lighting Setup",
              "Guest Transport & Parking",
              "TTD Booking Assistance",
              "Tent & Shamiyana Setup",
              "VIP Chair & Furniture Rental",
            ].map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 glass-card rounded-xl p-4"
              >
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="text-foreground/90 text-sm">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gradient-divine">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Plan Your Divine Wedding?
            </h2>
            <p className="text-primary-foreground/90 mb-8 text-lg">
              Contact S. Dileep Kumar for personalized wedding planning assistance
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
              <a
                href="tel:+919440397462"
                className="flex items-center gap-2 text-primary-foreground hover:underline"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">94403 97462</span>
              </a>
              <a
                href="tel:+917993434511"
                className="flex items-center gap-2 text-primary-foreground hover:underline"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">79934 34511</span>
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <MapPin className="w-5 h-5" />
                <span className="text-sm">Tirupati, Andhra Pradesh</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="glass"
                size="lg"
                className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30"
                asChild
              >
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button
                variant="glass"
                size="lg"
                className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20"
                asChild
              >
                <a
                  href="https://wa.me/919440397462?text=Hello! I want to know more about your wedding services."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
