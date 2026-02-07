import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Layout } from "@/components/Layout";
import weddingImage from "@/assets/wedding-ceremony.jpg";
import mandapamImage from "@/assets/mandapam.jpg";
import cateringImage from "@/assets/catering.jpg";

const testimonials = [
  {
    name: "Priya & Karthik Sharma",
    location: "Chennai, Tamil Nadu",
    date: "December 2024",
    rating: 5,
    package: "Gold Package",
    text: "Our wedding at Tirumala was absolutely magical! Divine Marriage Services made everything perfect from the venue selection to catering. The decoration was stunning with traditional marigolds and the priest conducted beautiful rituals. We highly recommend them for any temple wedding!",
    image: weddingImage,
  },
  {
    name: "Lakshmi & Venkatesh Reddy",
    location: "Hyderabad, Telangana",
    date: "November 2024",
    rating: 5,
    package: "Platinum Package",
    text: "Best wedding planners in Tirupati! They handled everything professionally - from TTD marriage hall booking to guest accommodation. The kalyana mandapam was beautifully set up and our 400 guests were all impressed. The food was authentic and delicious!",
    image: mandapamImage,
  },
  {
    name: "Anitha & Ravi Kumar",
    location: "Bangalore, Karnataka",
    date: "October 2024",
    rating: 5,
    package: "Gold Package",
    text: "The kalyana mandapam decoration exceeded our expectations. Traditional yet elegant! The team was responsive and accommodating to all our requests. Our guests still talk about the wonderful arrangements and authentic South Indian feast.",
    image: cateringImage,
  },
  {
    name: "Meena & Suresh Naidu",
    location: "Vijayawada, Andhra Pradesh",
    date: "September 2024",
    rating: 5,
    package: "Silver Package",
    text: "Even with a budget-friendly silver package, the quality was excellent. The marriage hall was clean, spacious and the basic decoration looked beautiful. Perfect for our intimate family wedding. Great value for money!",
    image: weddingImage,
  },
  {
    name: "Divya & Aravind Rao",
    location: "Mumbai, Maharashtra",
    date: "August 2024",
    rating: 5,
    package: "Diamond Package",
    text: "We wanted a royal wedding experience and Divine Marriage delivered beyond our dreams! The helicopter entry, 5-star accommodation, and celebrity entertainment made our wedding unforgettable. Worth every rupee spent!",
    image: mandapamImage,
  },
  {
    name: "Kavitha & Prasad Murthy",
    location: "Coimbatore, Tamil Nadu",
    date: "July 2024",
    rating: 5,
    package: "Gold Package",
    text: "Coordinating a wedding from another city seemed daunting, but the Divine Marriage team made it seamless. Regular updates, video calls for approvals, and on-ground execution was flawless. Truly professional!",
    image: cateringImage,
  },
];

const stats = [
  { value: "5000+", label: "Happy Couples" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "98%", label: "Would Recommend" },
  { value: "15+", label: "Years Experience" },
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-temple">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
              Trusted by Thousands of Families
            </h1>
            <p className="text-muted-foreground text-lg">
              Read what our couples have to say about their divine wedding experience at Tirupati & Tirumala
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gradient-divine">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="glass-card rounded-2xl p-6 h-full flex flex-col">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-foreground/80 text-sm leading-relaxed mb-6 flex-1">
                    "{testimonial.text}"
                  </p>

                  {/* Package Badge */}
                  <div className="mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {testimonial.package}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.location} • {testimonial.date}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Create Your Own Story?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join thousands of happy couples who trusted us with their special day
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="/packages"
              className="inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold h-12 px-8 bg-gradient-to-r from-[hsl(38,85%,50%)] to-[hsl(25,90%,55%)] text-[hsl(40,30%,98%)] shadow-lg hover:shadow-xl hover:scale-105 transform transition-all"
            >
              View Packages
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold h-12 px-8 border-2 border-primary bg-transparent text-primary hover:bg-primary/10 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
