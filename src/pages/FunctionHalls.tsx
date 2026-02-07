import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Users, Home, Building2, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

interface FunctionHall {
  id: number;
  name: string;
  hallsAvailable: number | string;
  capacity: string;
  rooms: string;
  category: "near-temple" | "nearby";
  images: string[]; // Array of image URLs for this specific hall
}

const functionHalls: FunctionHall[] = [
  // Near Temple
  {
    id: 1,
    name: "Lakshmi Narayana Mandir",
    hallsAvailable: 1,
    capacity: "50-100",
    rooms: "8-10",
    category: "near-temple",
    // REPLACE THESE IMAGE URLs WITH YOUR OWN IMAGES FOR Lakshmi Narayana Mandir
    images: [
      "https://content.jdmagicbox.com/comp/tirupati/t8/9999p8581.8581.110128000844.m5t8/catalogue/laxmi-narayana-mandir-tirumala-tirupati-temples-2cfe2.jpg", // Replace with your image URL
"https://img.weddingbazaar.com/photos/pictures/006/723/908/new_thumb/3.jpg",
      "https://bookwedgo-prod.s3.amazonaws.com/Mandapam_Images/2be76e0d-001.jpg"  // Replace with your image URL
    ]
  },
  {
    id: 2,
    name: "Ahobila Mutt",
    hallsAvailable: 1,
    capacity: "150-200",
    rooms: "7-10",
    category: "near-temple",
    // REPLACE THESE IMAGE URLs WITH YOUR OWN IMAGES FOR Ahobila Mutt
    images: [
      "https://content3.jdmagicbox.com/v2/comp/tirupati/d1/9999px877.x877.200627210952.d7d1/catalogue/ahobila-mutt-sri-lakshminarasimha-swamy-temple-tirumala-tirupati-temples-LyR8biIT85.jpg", // Replace with your image URL
      "https://bookwedgo-prod.s3.amazonaws.com/Mandapam_Images/e2e1ecdf-2df.jpg", // Replace with your image URL
      "https://5.imimg.com/data5/FR/WR/MY-12633963/tirumala-marriage-services-500x500.jpg"  // Replace with your image URL
    ]
  },
  {
    id: 3,
    name: "Vyasaraja Mutt",
    hallsAvailable: 2,
    capacity: "100-150",
    rooms: "10-15",
    category: "near-temple",
    // REPLACE THESE IMAGE URLs WITH YOUR OWN IMAGES FOR Vyasaraja Mutt
    images: [
      "https://content.jdmagicbox.com/comp/tirupati/b1/9999px877.x877.170601104547.b4b1/catalogue/sri-sri-vyasa-raja-mutt-tirumala-tirupati-charitable-trusts-tqnQPVBWvP.jpg", // Replace with your image URL
      "https://content3.jdmagicbox.com/comp/udupi/n8/0820px820.x820.221123212407.a8n8/catalogue/vyasaraja-kalyana-mantapa-kundapura-udupi-banquet-halls-njG39MPIat.jpg", // Replace with your image URL
      "https://content.jdmagicbox.com/comp/udupi/n8/0820px820.x820.221123212407.a8n8/catalogue/vyasaraja-kalyana-mantapa-kundapura-udupi-banquet-halls-udNwOONBgq-250.jpg", // Replace with your image URL
      "https://content.jdmagicbox.com/comp/udupi/q8/0820px820.x820.181127220913.k8q8/catalogue/vyasaraya-mutt-kundapura-udupi-banquet-halls-z6tiwtwsc9.jpg"  // Replace with your image URL
    ]
  },
  {
    id: 4,
    name: "Vyakanasram Mutt",
    hallsAvailable: 1,
    capacity: "80-120",
    rooms: "10",
    category: "near-temple",
    // REPLACE THESE IMAGE URLs WITH YOUR OWN IMAGES FOR Vyakanasram Mutt
    images: [
      "https://i.postimg.cc/Hs4yt4Ct/Whats-App-Image-2026-02-05-at-7-36-00-PM.jpg", // Replace with your image URL
      "https://i.postimg.cc/d3ch2DHG/Whats-App-Image-2026-02-05-at-7-36-02-PM.jpg", // Replace with your image URL
      "https://i.postimg.cc/FK2zv74K/Whats-App-Image-2026-02-04-at-4-06-24-PM.jpg",
      "https://i.postimg.cc/rwDqpMgm/Whats-App-Image-2026-02-05-at-7-35-58-PM.jpg"  // Replace with your image URL
    ]
  },
  {
    id: 5,
    name: "Kanchi Kamakoti Mutt",
    hallsAvailable: 3,
    capacity: "100",
    rooms: "45",
    category: "near-temple",
    // REPLACE THESE IMAGE URLs WITH YOUR OWN IMAGES FOR Kanchi Kamakoti Mutt
    images: [
      "https://content3.jdmagicbox.com/comp/tirupati/z1/9999px877.x877.170929045422.q2z1/catalogue/sri-kanchi-kamakoti-peetam-tirumala-tirupati-guest-house-dmcck.jpg", // Replace with your image URL
      "https://images.jdmagicbox.com/comp/tirupati/b3/9999px877.x877.170114091659.s6b3/catalogue/tirumala-marriage-contractors-tirumala-tirupati-kalyana-mandapams-bs0ukx4.jpg", // Replace with your image URL
      "https://imagewedz.oyoroomscdn.com/medium/photologue/images/tirumala-srinivasa-marriage-hall-tirumala-tirupati.png", // Replace with your image URL
      "https://media.weddingz.in/photologue/images/sri-kanchi-kamkoti-peetam-sankara-matam-tirumala-tirupati.png"  // Replace with your image URL
    ]
  },
  {
    id: 6,
    name: "All India Vysya Mutt",
    hallsAvailable: 4,
    capacity: "100-200",
    rooms: "56",
    category: "near-temple",
    // REPLACE THESE IMAGE URLs WITH YOUR OWN IMAGES FOR All India Vysya Mutt
    images: [
      "https://i.postimg.cc/3RTTpBv8/Whats-App-Image-2026-01-23-at-5-04-26-PM-(1).jpg", // Replace with your image URL
      "https://images.jdmagicbox.com/comp/west_godavari/t5/9999p8812.8812.180505114954.r8t5/catalogue/s-s-vedika-dwaraka-tirumala-west-godavari-banquet-halls-vhb37kizp6.jpg", // Replace with your image URL
      "https://content3.jdmagicbox.com/v2/comp/west_godavari/v2/9999p8812.8812.171231073314.a6v2/catalogue/arya-vysya-choultry-dwaraka-tirumala-west-godavari-hotels-wPILasJ3y9.jpg", // Replace with your image URL
      "https://content3.jdmagicbox.com/v2/comp/tirupati/j4/9999px877.x877.240814211733.z8j4/catalogue/raghavendra-swamy-mutt-tirumala-tirumala-tirupati-banquet-halls-hKqKzTNpmg.jpg"  // Replace with your image URL
    ]
  },
  {
    id: 7,
    name: "Chittore Choultry",
    hallsAvailable: 1,
    capacity: "50-120",
    rooms: "25",
    category: "near-temple",
    // REPLACE THESE IMAGE URLs WITH YOUR OWN IMAGES FOR Chittore Choultry
    images: [
      "https://images.jdmagicbox.com/comp/tirupati/c2/9999px877.x877.231221160838.k8c2/catalogue/vasvi-bhavan-tirumala-tirupati-hotels-09s3a0pjuw.jpg", // Replace with your image URL
      "https://imagewedz.oyoroomscdn.com/medium/photologue/images/tirumala-srinivasa-marriage-hall-tirumala-tirupati.png", // Replace with your image URL
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymeHUaCbnCJEZ91JDaYOfObewW_4BfSBzMw&s"  // Replace with your image URL
    ]
  },
  {
    id: 8,
    name: "Gubba Choultry",
    hallsAvailable: 1,
    capacity: "120-150",
    rooms: "45",
    category: "near-temple",
    // REPLACE THESE IMAGE URLs WITH YOUR OWN IMAGES FOR Gubba Choultry
    images: [
      "https://cdn.yatradham.org/media/catalog/product/2/0/2021-09-11.jpg", // Replace with your image URL
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYn88tKLTgaI2uvaMuy0ocGlKGJXYUsEtSzw&s", // Replace with your image URL
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQR6bxaQ2tcFL5Jc46RnPjWmpucAPiiOQV8A&s"  // Replace with your image URL
    ]
  },
  {
    id: 9,
    name: "Karnataka Choultry",
    hallsAvailable: 3,
    capacity: "100-300",
    rooms: "80",
    category: "near-temple",
    // REPLACE THESE IMAGE URLs WITH YOUR OWN IMAGES FOR Karnataka Choultry
    images: [
      "https://content.jdmagicbox.com/comp/tirupati/s4/9999px877.x877.170712151545.f1s4/catalogue/tirrupathi-karnataka-bhavana-tirumala-tirupati-guest-house-vurutsza5f.jpg",
      "https://content.jdmagicbox.com/comp/tirupati/k6/9999px877.x877.220310000738.x5k6/catalogue/karnataka-kalyana-mandapam-tirumala-tirupati-banquet-halls-bvc16wsn0d.jpg", // Replace with your image URL
      "https://content3.jdmagicbox.com/v2/comp/tirupati/k6/9999px877.x877.220310000738.x5k6/catalogue/karnataka-kalyana-mandapam-tirumala-tirupati-banquet-halls-Q6rchswm2n.jpg", // Replace with your image URL
      "https://content3.jdmagicbox.com/v2/comp/tirupati/k6/9999px877.x877.220310000738.x5k6/catalogue/karnataka-kalyana-mandapam-tirumala-tirupati-banquet-halls-f3VfPCMpmE.jpg", // Replace with your image URL
      // Replace with your image URL
    ]
  },
  {
    id: 10,
    name: "Raghavendra Mutt",
    hallsAvailable: 2,
    capacity: "80-160",
    rooms: "35",
    category: "near-temple",
    // REPLACE THESE IMAGE URLs WITH YOUR OWN IMAGES FOR Raghavendra Mutt
    images: [
      // Replace with your image URL
      "https://content3.jdmagicbox.com/v2/comp/tirupati/j4/9999px877.x877.240814211733.z8j4/catalogue/raghavendra-swamy-mutt-tirumala-tirumala-tirupati-banquet-halls-hKqKzTNpmg.jpg", // Replace with your image URL
      "https://media.weddingz.in/photologue/images/raghavendra-kalyana-mandapam-pudipatla-tirupati.png"  // Replace with your image URL
    ]
  },
  // Nearby Temple
  {
    id: 11,
    name: "Govinda Nilayam",
    hallsAvailable: 2,
    capacity: "100-150",
    rooms: "35",
    category: "nearby",
    // REPLACE THESE IMAGE URLs WITH YOUR OWN IMAGES FOR Govinda Nilayam
    images: [
      "https://content3.jdmagicbox.com/v2/comp/tirupati/t8/9999px877.x877.170502115811.w7t8/catalogue/govinda-nilayam-tirumala-tirupati-trustees-nlh5e8cjyr.jpg", // Replace with your image URL
      "https://content.jdmagicbox.com/v2/comp/tirupati/t8/9999px877.x877.170502115811.w7t8/catalogue/govinda-nilayam-tirumala-tirupati-trustees-gklpk8pfh3.jpg", // Replace with your image URL
      "https://img.weddingbazaar.com/photos/pictures/007/341/460/new_medium/Screenshot_2023-07-14_150922.png?1689328093"  // Replace with your image URL
    ]
  },
  {
    id: 12,
    name: "Datta Pitam",
    hallsAvailable: 1,
    capacity: "80-160",
    rooms: "34",
    category: "nearby",
    // REPLACE THESE IMAGE URLs WITH YOUR OWN IMAGES FOR Datta Pitam
    images: [
   
      "https://dattapeetham.s3.amazonaws.com/content/event_images/4462/dattapeetham_event_4462_f3bdebf85e95a2e4.jpg"  // Replace with your image URL
    ]
  },
  {
    id: 13, 
    name: "Mouna Swamy Mutt",
    hallsAvailable: 2,
    capacity: "80-160",
    rooms: "28",
    category: "nearby",
    // REPLACE THESE IMAGE URLs WITH YOUR OWN IMAGES FOR Mouna Swamy Mutt
    images: [
      "https://i.postimg.cc/4xmCsPPF/Whats-App-Image-2026-02-05-at-10-42-08-PM.jpg",
      "https://i.postimg.cc/90WSSYrQ/Whats-App-Image-2026-02-05-at-10-42-08-P.jpg", // Replace with your image URL
      "https://i.postimg.cc/sXJHpGKn/Whats-App-Image-2026-02-05-at-10-42-07-PM.jpg",
      "https://i.postimg.cc/L4N05fJt/Whats-App-Image-2026-02-05-at-10-42-08.jpg" // Replace with your image URL
     
    ]
  },
  {
    id: 14,
    name: "Vanamamalai Mutt",
    hallsAvailable: 1,
    capacity: "100-150",
    rooms: "20",
    category: "nearby",
    // REPLACE THESE IMAGE URLs WITH YOUR OWN IMAGES FOR Vanamamalai Mutt
    images: [
      "https://i.postimg.cc/6qmwwPst/Whats-App-Image-2026-02-05-at-9-41-40-PM.jpg", // Replace with your image URL
      "https://i.postimg.cc/Pq2RBwnH/Whats-App-Image-2026-02-05-at-9-41-41-PM.jpg", // Replace with your image URL
      "https://i.postimg.cc/XNGnkVdh/m.jpg" ,
      "https://i.postimg.cc/7ZDD40dx/Whats-App-Image-2026-02-05-at-9-41-42-PM.jpg" // Replace with your image URL
    ]
  },
  {
    id: 15,
    name: "Hampi Mutt",
    hallsAvailable: 3,
    capacity: "100-160",
    rooms: "33",
    category: "nearby",
    // REPLACE THESE IMAGE URLs WITH YOUR OWN IMAGES FOR Hampi Mutt
    images: [
      "https://i.postimg.cc/htHLh48c/Whats-App-Image-2026-02-05-at-10-30-39-PM.jpg",
      "https://i.postimg.cc/c1XfwBMx/Whats-App-Image-2026-02-05-at-10-30-40-P.jpg", // Replace with your image URL
      "https://i.postimg.cc/7h6Gmj1K/Whats-App-Image-2026-02-05-at-10-30-41-P.jpg",
      "https://i.postimg.cc/FswdVWfQ/Whats-App-Image-2026-02-05-at-10-30-41-PM.jpg" // Replace with your image URL
    ]
  },
];

const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
      <img
        src={images[currentIndex]}
        alt="Function Hall"
        className="w-full h-full object-cover transition-all duration-500"
      />
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-all"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-all"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const HallCard = ({ hall }: { hall: FunctionHall }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-primary/20 bg-card/80 backdrop-blur-sm">
        <ImageSlider images={hall.images} />
        
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-lg font-serif text-primary leading-tight">
              {hall.name}
            </CardTitle>
            <Badge 
              variant={hall.category === "near-temple" ? "default" : "secondary"}
              className="shrink-0 text-xs"
            >
              <MapPin className="w-3 h-3 mr-1" />
              {hall.category === "near-temple" ? "Near Temple" : "Nearby"}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-3 pb-4">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-secondary/50 rounded-lg p-2">
              <Building2 className="w-4 h-4 mx-auto text-primary mb-1" />
              <p className="text-xs text-muted-foreground">Halls</p>
              <p className="font-bold text-foreground">{hall.hallsAvailable}</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-2">
              <Users className="w-4 h-4 mx-auto text-primary mb-1" />
              <p className="text-xs text-muted-foreground">Capacity</p>
              <p className="font-bold text-foreground text-sm">{hall.capacity}</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-2">
              <Home className="w-4 h-4 mx-auto text-primary mb-1" />
              <p className="text-xs text-muted-foreground">Rooms</p>
              <p className="font-bold text-foreground">{hall.rooms}</p>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="pt-0 pb-4 px-4">
          <div className="w-full space-y-2">
            <p className="text-xs text-center text-muted-foreground mb-2">
              Contact for more info
            </p>
            <div className="flex gap-2">
              <Button
                size="sm"
                className="flex-1 bg-primary hover:bg-primary/90"
                asChild
              >
                <a href="tel:+919440397462">
                  <Phone className="w-4 h-4 mr-1" />
                  Quick Call
                </a>
              </Button>
              <Button
                size="sm"
                className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                asChild
              >
                <a
                  href={`https://wa.me/919440397462?text=Hello! I want to inquire about ${hall.name} function hall.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-1" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const FunctionHalls = () => {
  const nearTempleHalls = functionHalls.filter(h => h.category === "near-temple");
  const nearbyHalls = functionHalls.filter(h => h.category === "nearby");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-divine overflow-hidden">
        <div className="absolute inset-0 temple-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
              Function Halls in Tirumala
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-6">
              Discover the best marriage function halls near Sri Venkateswara Temple. 
              Choose from traditional mutts, choultries, and modern venues for your divine wedding.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Building2 className="w-4 h-4 mr-2" />
                15+ Venues Available
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                50-300 Guest Capacity
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Home className="w-4 h-4 mr-2" />
                500+ Rooms Combined
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Near Temple Halls */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              <MapPin className="w-4 h-4 mr-2" />
              Walking Distance from Temple
            </Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Function Halls Near Temple
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These venues are located within 0.8 to 1.5 km from Sri Venkateswara Temple, 
              offering convenient access for your wedding guests.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {nearTempleHalls.map((hall) => (
              <HallCard key={hall.id} hall={hall} />
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Halls */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              <MapPin className="w-4 h-4 mr-2" />
              Short Drive from Temple
            </Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Nearby Function Halls
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These venues are located slightly farther but offer excellent facilities 
              and competitive pricing for your wedding celebration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {nearbyHalls.map((hall) => (
              <HallCard key={hall.id} hall={hall} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-divine">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
              Need Help Choosing the Right Venue?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Our team will help you find the perfect function hall based on your guest count, 
              budget, and preferences. Contact us for personalized assistance!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="xl"
                className="bg-divine-cream text-divine-temple hover:bg-divine-cream/90 font-bold shadow-lg px-8"
                asChild
              >
                <a href="tel:+919440397462">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +91 94403 97462
                </a>
              </Button>
              <Button
                size="xl"
                className="bg-green-500 hover:bg-green-600 text-white font-bold shadow-lg px-8"
                asChild
              >
                <a
                  href="https://wa.me/919440397462?text=Hello! I need help choosing a function hall in Tirumala."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FunctionHalls;
