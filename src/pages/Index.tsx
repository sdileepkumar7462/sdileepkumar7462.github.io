import { motion } from "framer-motion";
import { useState } from "react";
import { Star, ChevronRight, ChevronLeft, Users, Award, Clock, MapPin, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import anandanilayamImage from "@/assets/anandanilayam-gopuram.jpg";
import weddingImage from "@/assets/wedding-ceremony.jpg";
import mandapamImage from "@/assets/mandapam.jpg";
import cateringImage from "@/assets/catering.jpg";
import mandapamDecorationImage from "@/assets/mandapam-decoration.jpg";
import functionHallImage from "@/assets/function-hall.jpg";
import stageDecorationImage from "@/assets/stage-decoration.jpg";
import ttdVenueImage from "@/assets/ttd-venue.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

// Image Slider Component for Venue Gallery
const VenueImageSlider = ({ images, title }: { images: string[]; title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full group/slider">
      <img
        src={images[currentIndex]}
        alt={`${title} - Image ${currentIndex + 1}`}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      
      {images.length > 1 && (
        <>
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-divine-temple/80 text-divine-cream flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-divine-temple z-10"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-divine-temple/80 text-divine-cream flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-divine-temple z-10"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? "bg-divine-gold w-4" : "bg-divine-cream/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const marriageTypes = [
 /* {
    name: "Simple Group Marriage",
    subtitle: "TTD Group Marriage",
    price: "₹5,000+",
    description: "Divine group wedding at Tirumala temple",
    features: [
      "TTD organized ceremony",
      "Temple priest services",
      "Prasadam for guests",
      "Marriage certificate",
      "Traditional Vedic rituals",
    ],
    popular: false,
    icon: "🕉️",
  },*/
  {
    name: "Devasthanam Marriage",
    subtitle: "Cottage & Mandapam",
    price: "₹25,000+",
    description: "Individual TTD wedding with accommodation",
    features: [
      "Private mandapam booking",
      "Cottage accommodation",
      "Dedicated priest services",
      "Up to 200 guests",
      "VIP darshan tickets",
      "Premium temple experience",
    ],
    popular: true,
    icon: "🛕",
    // REPLACE THESE IMAGE URLs WITH YOUR OWN IMAGES FOR Devasthanam Marriage
    images: [
      "https://content.jdmagicbox.com/comp/tirupati/q9/9999px877.x877.171112133511.a7q9/catalogue/dileep-marriage-contractor-tirumala-tirupati-banquet-halls-6bx2i.jpg", // Replace with your image URL
      "https://media.weddingz.in/photologue/images/sree-tirumala-kashi-math-tirumala-tirupati-1.png", // Replace with your image URL
      "https://news.tirumala.org/wp-content/uploads/2024/09/RANGANAYAKULA-MANDAPAM.jpg", // Replace with your image URL
      "https://tirupatitirumalainfo.com/wp-content/uploads/2022/05/KALYANA-MANDAPAM.jpg"  // Replace with your image URL
    ]
  },
  {
    name: "Private Function Halls",
    subtitle: "Premium Venues",
    price: "₹75,000+",
    description: "Grand celebration at luxury venues",
    features: [
      "Choice of premium halls",
      "Complete customization",
      "Full catering services",
      "Photography & video",
      "Entertainment options",
      "Event coordination",
    ],
    popular: false,
    icon: "🏛️",
    // REPLACE THESE IMAGE URLs WITH YOUR OWN IMAGES FOR Private Function Halls
    images: [
      "https://content.jdmagicbox.com/comp/tirupati/t5/9999px877.x877.160124174516.k9t5/catalogue/ysmr-kalyana-mandapam-and-ysmr-residency-tirupathi-ho-tirupati-banquet-halls-ea7jtpe1wx.jpg", // Replace with your image URL
      "https://www.eternalweddingz.in/storage/venue_images/CnjxI6n16hF4FmMYkLTRLmlVZU7Cq76PDMTG9SD6.webp", // Replace with your image URL
      "https://content.jdmagicbox.com/comp/tirupati/f9/9999px877.x877.180215162201.t3f9/catalogue/sri-venkata-durga-marriage-contractors-tirumala-tirupati-banquet-halls-mm3rd.jpg", // Replace with your image URL
      "https://img.weddingbazaar.com/photos/pictures/006/691/438/new_large/2.PNG"  // Replace with your image URL
    ]
  },
];

const stats = [
  { icon: Users, value: "5000+", label: "Happy Couples" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: MapPin, value: "50+", label: "Venues Available" },
  { icon: Clock, value: "24/7", label: "Support" },
];

const testimonials = [
  {
    name: "Priya & Karthik",
    location: "Chennai",
    rating: 5,
    text: "Our wedding at Tirumala was absolutely magical! Divine Marriage made everything perfect from venue to catering.",
    image: weddingImage,
  },
  {
    name: "Lakshmi & Venkat",
    location: "Hyderabad",
    rating: 5,
    text: "Best wedding planners in Tirupati! They handled everything professionally. Highly recommended for temple weddings.",
    image: mandapamImage,
  },
  {
    name: "Anitha & Ravi",
    location: "Bangalore",
    rating: 5,
    text: "The kalyana mandapam was beautifully decorated. Our guests still talk about the wonderful arrangements.",
    image: cateringImage,
  },
];

const venueGallery = [
  {
    images: [
      "https://i.postimg.cc/fbYGFF2B/1067493917940393130.jpg", // Replace with your image URL
      "https://i.postimg.cc/pLH4jkXc/Kalyana-Mandapam-Decorations-TSM-kalyana-mandapam-in-tirumala-hills-ttd-kalyana-mandapam-in-tiru.jpg", // Replace with your image URL
      "https://i.postimg.cc/hG3220gV/Sree-Raam-Flower-Decorations-what-s-app-and-contact-no-9398743253.jpg", // Replace with your image URL
      "https://i.postimg.cc/65wfLPn9/tirupati-events.jpg"  // Replace with your image URL
    ],
    title: "Divine Mandapam Decoration",
    category: "Mandapam",
  },
  {
    images: [
      "https://i.postimg.cc/cLz3jkgM/Banquet-Halls-In-Najafgarh.jpg", // Replace with your image URL
      "https://i.postimg.cc/pXG5hcZb/Elegant-Red-Setup.jpg", // Replace with your image URL
      "https://i.postimg.cc/QxtH3krH/16-Elegant-Hindu-Wedding-Mandap-Decoration-Ideas.jpg", // Replace with your image URL
      "https://i.postimg.cc/tRr42ZV9/download-(1).jpg"  // Replace with your image URL
    ],
    title: "Premium Function Hall",
    category: "Venue",
  },
  {
    images: [
      "https://i.postimg.cc/J4kCZG37/Royal-Shahi-Stage-Decoration-KHUSHI-EVENT-PLANNER-H-M-T-9773029002.jpg", // Replace with your image URL
      "https://i.postimg.cc/QC5s8t0B/traditional-backdrop-(-decor-by-aditya-)-bangalorewedding-planner.jpg", // Replace with your image URL
      "https://i.postimg.cc/mZMGFPyx/ndian-wedding-mandap-adorned-with-rich-wedding-background.jpg", // Replace with your image URL
      "https://i.postimg.cc/8cd3XrZG/Royal-Red-Rose-Wedding-Stage-Dream-Wedding-Inspiration.jpg"  // Replace with your image URL
    ],
    title: "Royal Stage Setup",
    category: "Decoration",
  },
  {
    images: [
      "https://content.jdmagicbox.com/v2/comp/hyderabad/c4/040pxx40.xx40.191120201355.j4c4/catalogue/ttd-kalyana-mandapam-medchal-rangareddy-banquet-halls-9jkoar2ovz.jpg", // Replace with your image URL
      "https://content.jdmagicbox.com/comp/tirupati/p2/9999px877.x877.150305114138.s8p2/catalogue/gubba-choultry-kalyana-mandapam-tirumala-tirupati-banquet-halls-a7hnrreu2y.jpg", // Replace with your image URL
      "https://content.jdmagicbox.com/v2/comp/hyderabad/n3/040pxx40.xx40.130413110541.d1n3/catalogue/sri-venkateshwara-swamy-kalyana-mandapam-sri-nagar-colony-hyderabad-banquet-halls-kb77snd00x.jpg", // Replace with your image URL
      "https://content.jdmagicbox.com/comp/west_godavari/p3/9999p8812.8812.201123173004.m4p3/catalogue/sita-nilayam-function-hall-and-rooms-dwaraka-tirumala-west-godavari-kalyana-mandapams-07d9l3phpz.jpg"  // Replace with your image URL
    ],
    title: "TTD Temple Wedding",
    category: "Temple",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section with Anandanilayam Gopuram */}
      <section className="relative min-h-[70vh] md:min-h-[95vh] flex items-start justify-center overflow-hidden -mt-14 pt-14">
          {/* Background Image - Anandanilayam Gopuram */}
          <div className="absolute inset-0">
            <img
            src="https://i.postimg.cc/j5rqsKqt/Whats-App-Image-2026-01-23-at-4-57-57-PM.jpg"
            alt="Anandanilayam Gopuram - Divine entrance of Lord Venkateswara Temple in Tirumala"
            className="w-full h-full object-cover object-center md:object-[50%_40%] lg:object-[50%_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/20 md:from-black/40 md:via-black/20 md:to-black/10" />
        </div>


        {/* Content */}
        <div className="relative container mx-auto px-3 sm:px-4 py-2 sm:py-4 text-center flex flex-col items-center justify-start"> 
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto w-full"
          >
            {/* Highlighted Trusted Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-4 sm:mb-6"
            >
              <motion.span 
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-divine text-primary-foreground text-xs sm:text-base md:text-lg font-bold border-2 border-divine-gold shadow-xl"
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(255, 193, 7, 0.4)",
                    "0 0 40px rgba(255, 193, 7, 0.8)",
                    "0 0 20px rgba(255, 193, 7, 0.4)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨ Trusted by 5000+ Families ✨
              </motion.span>
            </motion.div>

            <h1 className="font-serif text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-divine-cream mb-3 sm:mb-4 leading-tight">
              Best Wedding Venues
            </h1>
            <motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 1.2 }}
  transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
  className="mt-2 sm:mt-3 mb-3 sm:mb-4 mx-auto block"
>
  <motion.span
    className="
      px-2 sm:px-4 md:px-8 py-2 sm:py-3
      rounded-lg
      bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-300
      text-divine-temple
      text-xs sm:text-sm md:text-lg lg:text-xl
      font-bold
      text-center
      border border-yellow-400/60
      shadow-lg
      inline-block
    "
    animate={{
      boxShadow: [
        "0 0 15px rgba(255, 193, 7, 0.3)",
        "0 0 30px rgba(255, 193, 7, 0.6)",
        "0 0 15px rgba(255, 193, 7, 0.3)"
      ]
    }}
    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
  >
    in Tirumala & Tirupati
  </motion.span>
</motion.div>

           <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-semibold text-white
  [text-shadow:-2px_-2px_0_rgba(0,0,0,0.8),2px_-2px_0_rgba(0,0,0,0.8),-2px_2px_0_rgba(0,0,0,0.8),2px_2px_0_rgba(0,0,0,0.8),0_2px_4px_rgba(0,0,0,0.9)]">
  Experience divine blessings with our premium marriage halls, TTD wedding services & expert event arrangements. Your dream temple wedding awaits!
</p>


            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Button variant="hero" size="lg" asChild>
                <Link to="/packages">
                  Explore Packages
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <a href="tel:+919440397462">Call: +91 94403 97462</a>
              </Button>
            </div>
          </motion.div>

          
        </div>
      </section>

      {/* Stats Section */}
     <section className="py-6 md:py-10 bg-gradient-to-r from-primary to-accent">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          className="text-center"
        >
          <stat.icon className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-1.5 md:mb-2 text-primary-foreground/80" />

          <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-foreground leading-tight">
            {stat.value}
          </div>

          <div className="text-primary-foreground/80 text-[11px] sm:text-xs">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/50 temple-pattern">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
              Complete Kalyana Mandapam Wedding Services
            </h2>
            <p className="text-muted-foreground text-lg">
              From affordable banquet halls to premium Tirupati wedding planners & organizers, 
              we offer everything for your divine celebration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                images: [
                  "https://i.postimg.cc/wvNTv0jn/Google.jpg", // Replace with your image URL
                  "https://i.postimg.cc/MKp2398n/download-(3).jpg", // Replace with your image URL
                   // Replace with your image URL
                ],
                title: "Marriage Halls in Tirupati & Tirumala",
                description:
                  "Premium kalyana mandapams near TTD with modern amenities and traditional charm for your sacred ceremony.",
              },
              {
                images: [
                  "https://i.postimg.cc/kMjhG9LH/Traditional-mandap.jpg", // Replace with your image URL
                
                ],
                title: "TTD Marriage Hall Booking Guide",
                description:
                  "Expert assistance with TTD venue bookings, priest arrangements, and complete ceremony coordination.",
              },
              {
                images: [
                  "https://i.postimg.cc/zf5kpP9b/download-(4).jpg", // Replace with your image URL
                // Replace with your image URL
                ],
                title: "Event Arrangements & Catering",
                description:
                  "Authentic South Indian cuisine, professional catering services, and complete event management.",
              },
            ].map((service, index) => {
              // Determine redirect path based on service title
              let redirectPath = "/packages";
              if (service.title.includes("TTD Marriage Hall Booking")) {
                redirectPath = "/blog";
              } else if (service.title.includes("Event Arrangements & Catering")) {
                redirectPath = "/packages";
              } else if (service.title.includes("Marriage Halls")) {
                redirectPath = "/function-halls";
              }

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link
                    to={redirectPath}
                    className="block glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 h-full cursor-pointer"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Carousel className="w-full h-full">
                        <CarouselContent>
                          {service.images.map((imageUrl, imgIndex) => (
                            <CarouselItem key={imgIndex}>
                              <img
                                src={imageUrl}
                                alt={`${service.title} - Image ${imgIndex + 1}`}
                                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                      </Carousel>
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Marriage Types Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Types of Marriages in Tirumala
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
              TTD Wedding Packages & Function Halls
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose from Simple Group Marriage, Devasthanam Marriage, or Private Function Halls
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {marriageTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative ${type.popular ? "md:-mt-4 md:mb-4" : ""}`}
              >
                {type.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-4 py-1 rounded-full bg-gradient-divine text-primary-foreground text-xs font-bold shadow-lg">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div
                  className={`glass-card-strong rounded-2xl p-8 h-full ${
                    type.popular ? "ring-2 ring-primary divine-glow" : ""
                  }`}
                >
                  {/* Image Carousel */}
                  <div className="mb-6">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {type.images.map((imageUrl, imgIndex) => (
                          <CarouselItem key={imgIndex}>
                            <div className="aspect-[16/10] rounded-lg overflow-hidden">
                              <img
                                src={imageUrl}
                                alt={`${type.name} - Image ${imgIndex + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                  </div>

                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-1">
                    {type.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-3">{type.subtitle}</p>
                  <p className="text-muted-foreground text-sm mb-4">{type.description}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold divine-text-gradient">{type.price}</span>
                    <span className="text-muted-foreground text-sm"> onwards</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={type.popular ? "hero" : "divineOutline"}
                    className="w-full"
                    asChild
                  >
                    <Link to="/function-halls">View Details</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Venues & Decorations
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
              Stunning Wedding Mandapams & Function Halls
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore our collection of beautifully decorated mandapams, premium function halls, 
              and stunning stage setups for your dream wedding
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {venueGallery.map((venue, index) => (
              <motion.div
                key={venue.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <VenueImageSlider images={venue.images} title={venue.title} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-divine-temple/90 via-transparent to-transparent flex flex-col justify-end p-4">
                  <span className="text-divine-gold text-xs font-semibold mb-1">{venue.category}</span>
                  <h3 className="text-divine-cream font-serif text-sm md:text-base font-semibold">
                    {venue.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="divine" size="lg" asChild>
              <Link to="/packages">
                View All Venues
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
              What Our Couples Say
            </h2>
            <p className="text-muted-foreground text-lg">
              Hear from the families who trusted us with their special day
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="glass-card rounded-2xl p-6 h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-divine-gold text-divine-gold"
                      />
                    ))}
                  </div>
                  <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground text-xs">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-divine relative overflow-hidden">
        <div className="absolute inset-0 temple-pattern opacity-10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            {...fadeInUp}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Plan Your Divine Wedding Today
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8">
              Let us help you create memories that last a lifetime. Contact us now for a free consultation!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                variant="secondary"
                size="xl"
                className="bg-divine-cream text-divine-temple hover:bg-divine-cream/90 font-bold shadow-lg px-8"
                asChild
              >
                <Link to="/packages">View All Packages</Link>
              </Button>
              <Button
                size="xl"
                className="bg-green-500 hover:bg-green-600 text-white font-bold shadow-lg px-8 border-2 border-green-400"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
