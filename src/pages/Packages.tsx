import { motion } from "framer-motion";
import { Check, ChevronRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { ContractorCard } from "@/components/ContractorCard";
import { CustomPackageForm } from "@/components/CustomPackageForm";

const marriageTypes = [
  {
    id: "kalyana-vedika",
    name: "Simple Group Marriage",
    subtitle: "TTD & Private Group Marriages ",
    price: "₹5,000 - ₹70,000",
    description: "Blessed group wedding ceremony conducted by TTD at Tirumala with temple rituals",
    capacity: "Multiple couples per session",
    highlights: [
      "TTD organized group marriage",
      "Temple priests conduct ceremony",
      "Divine blessings at Tirumala",
      "Traditional Vedic rituals",
      "Marriage certificate from TTD",
    ],
    includes: [
      "Temple ceremony slot",
      "Basic priest services",
      "Traditional rituals & mantras",
      "Maximum 20 people",
    ],
    mandapamNote: "Mandapam provided for ceremony duration (2-3 hours)",
    bestFor: "Budget-conscious couples seeking divine blessings",
    popular: false,
    color: "from-divine-saffron to-divine-gold",
    icon: "🕉️",
  },
  {
    id: "devasthanam",
    name: "Devasthanam Individual Marriage",
    subtitle: "With Cottage & Mandapam",
    price: "Starts from 25,000/- ",
    description: "Exclusive individual wedding at TTD venue with cottage accommodation and private mandapam booking",
    capacity: "Up to 200 guests",
    highlights: [
      "Private mandapam at TTD venue",
      "Cottage accommodation included",
      "Individual ceremony timing",
      "Dedicated priest for your wedding",
      "Flexible guest arrangements",
      "Premium temple experience",
    ],
    includes: [
      "🕐 Mandapam for 24 Hours",
      "Stage & mandapam setup",
      "Flower decoration for mandapam",
      "AC cottage accommodation (1-2 nights)",
      "Senior TTD priest services",
      "Seating for up to 200 guests",
      "Only bride and bride groom with parents inside temple ",
      "Marriage Performance certificate",
      "Parking facilities",
      "Lighting decoration",
      "Carpets & foot rolls",
    ],
    mandapamNote: "✨ Mandapam available for full 24 hours – setup to cleanup included",
    bestFor: "Families wanting authentic TTD wedding experience",
    popular: true,
    color: "from-primary to-accent",
    icon: "🛕",
  },
  {
    id: "private-halls",
    name: "Private Function Halls",
    subtitle: "Premium Wedding Venues",
    price: "Starts from 1,25,000/-",
    description: "Luxurious private marriage halls & banquet venues near Tirupati for grand celebrations",
    capacity: "100 to 2000+ guests",
    highlights: [
      "Choice of premium venues",
      "Full customization options",
      "Grand celebration setup",
      "Complete wedding services",
      "Modern amenities with tradition",
      "Flexible timing & arrangements",
    ],
    includes: [
      "🕐 Venue for 24 Hours (full day booking)",
      "Stage with royal decoration",
      "Mandapam with flower decoration",
      "Complete lighting & building decoration",
      "Roof decoration & screen curtains",
      "Professional priest arrangements",
      "Complete catering (all meals)",
      "Photography & videography",
      "Nadaswaram & music",
      "Flower garlands & bouquets",
      "Guest seating (VIP chairs + plastic chairs)",
      "Tent, shamiyana & shamiana setup",
      "Bridal room & green room",
      "Valet parking & security",
      "Dedicated event coordinator",
    ],
    
    mandapamNote: "✨ Complete venue for 24 hours – morning setup to night cleanup",
    bestFor: "Grand weddings with complete customization",
    popular: false,
    color: "from-slate-700 to-slate-900",
    icon: "🏛️",
  },
];

const includedFacilities = [
  "Stage",
  "Mandapam",
  "Carpets",
  "Plastic Chairs & Tables",
  "Swamivari Photo",
  "Mandapam Miscellaneous Items",
  "Foot Rolls",
  "Screen Curtains",
  "Lighting Decoration",
  "Roof Decoration",
  "Purohit & Pooja Articles",
  "Bhajanthreelu",
  "Mango Leaves & Plantain Trees",
  "Building Lighting",
  "Name Board",
  "Flower Decoration for Mandapam",
  "Flower for Ladies (20 Murala)",
  "2 Rose Garlands",
  "2 Muhurtha / Lilly Garlands",
  "1 Jada",
  "2 Bouquets",
  "Video",
  "Photos",
  "Tent Permission & Electrical Charges",
  "Shamiyana",
  "VIP Chairs",
];

const addons = [
  { name: "Mehendi Artist"},
  { name: "Pre-wedding Shoot"},
  { name: "Drone Photography" },
  { name: "LED Screen & Stage" },
  { name: "Fireworks Display"},
  { name: "Guest Transport" },
  { name: "Live Music Band" },
  { name: "Nadaswaram Team"},
];

const Packages = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-temple">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Marriage Types in Tirumala
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
              TTD & Private Kalyana Mandapams
            </h1>
            <p className="text-muted-foreground text-base md:text-lg">
              Choose from three types of divine marriages at Tirumala – Simple Group Marriages, 
              Devasthanam individual marriage halls with cottage & mandapam, or premium private mandapams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contractor Details Card */}
      <ContractorCard />

      {/* 24 Hour Mandapam Highlight */}
      <section className="py-8 bg-gradient-divine">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left"
          >
            <Clock className="w-10 h-10 text-primary-foreground" />
            <div>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-primary-foreground">
                24 Hours Mandapam & Venue Access
              </h3>
              <p className="text-primary-foreground/90 text-sm md:text-base">
                All our packages include full 24-hour venue access – from morning setup to night cleanup
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marriage Types Grid */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-10 md:space-y-12 max-w-6xl mx-auto">
            {marriageTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {type.popular && (
                  <div className="absolute -top-4 left-8 z-10">
                    <span className="px-4 py-1 rounded-full bg-gradient-divine text-primary-foreground text-xs font-bold shadow-lg">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div
                  className={`glass-card-strong rounded-2xl overflow-hidden ${
                    type.popular ? "ring-2 ring-primary divine-glow" : ""
                  }`}
                >
                  {/* Header */}
                  <div className={`p-5 md:p-6 bg-gradient-to-r ${type.color}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl md:text-4xl">{type.icon}</span>
                      <div>
                        <h3 className="font-serif text-xl md:text-3xl font-bold text-primary-foreground">
                          {type.name}
                        </h3>
                        <p className="text-primary-foreground/80 text-sm">{type.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-8">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                      {/* Left Column */}
                      <div>
                        <p className="text-muted-foreground mb-4 text-sm md:text-base">{type.description}</p>
                        <div className="mb-4 md:mb-6">
                          <span className="text-2xl md:text-4xl font-bold divine-text-gradient">{type.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Capacity:</strong> {type.capacity}
                        </p>
                        
                        {/* Mandapam Note */}
                        <div className="bg-secondary/50 rounded-lg p-3 mb-4">
                          <p className="text-sm font-semibold text-primary flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {type.mandapamNote}
                          </p>
                        </div>

                        <p className="text-sm text-primary font-medium mb-4 md:mb-6">
                          ✨ {type.bestFor}
                        </p>

                        {/* Sub-packages if available */}
                        {/* {type.packages && (
                          <div className="mb-6">
                            <h4 className="font-semibold text-foreground mb-3 text-sm">Package Options:</h4>
                            <div className="space-y-2">
                              {type.packages.map((pkg) => (
                                <div key={pkg.name} className="flex justify-between items-center text-sm glass-card rounded-lg px-3 py-2">
                                  <span className="text-foreground/80 text-xs md:text-sm">{pkg.name}</span>
                                  <span className="font-semibold text-primary text-xs md:text-sm">{pkg.price}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )} */}
                      </div>

                      {/* Right Column - Features */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-sm">Key Highlights:</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 md:mb-6">
                          {type.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-2 text-xs md:text-sm">
                              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span className="text-foreground/80">{highlight}</span>
                            </li>
                          ))}
                        </ul>

                        <h4 className="font-semibold text-foreground mb-3 text-sm">What's Included:</h4>
                        <ul className="space-y-1.5 md:space-y-2 mb-6 max-h-48 overflow-y-auto pr-2">
                          {type.includes.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-xs md:text-sm">
                              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span className="text-foreground/80">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 pt-6 border-t border-border">
                      <Button
                        variant={type.popular ? "hero" : "divine"}
                        size="lg"
                        className="flex-1"
                        asChild
                      >
                        <Link to="/contact">
                          Get Quote for {type.name}
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="divineOutline"
                        size="lg"
                        asChild
                      >
                        <a href="https://wa.me/919440397462?text=Hello! I'm interested in your {type.name} package." target="_blank" rel="noopener noreferrer">
                          WhatsApp Inquiry
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Included Facilities */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
          >
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-4">
              Complete Wedding Services Included
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              All our premium packages include these 26 essential wedding services by Dileep Marriage Contractor
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3 max-w-6xl mx-auto">
            {includedFacilities.map((facility, index) => (
              <motion.div
                key={facility}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                className="glass-card rounded-lg p-2 md:p-3 text-center hover:shadow-md transition-shadow"
              >
                <Check className="w-4 h-4 text-primary mx-auto mb-1" />
                <span className="text-foreground/80 text-[10px] md:text-xs">{facility}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
          >
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-4">
              Customize Your Package
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Add these premium services to any package for a complete wedding experience
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
            {addons.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card-strong rounded-xl p-3 md:p-4 text-center hover:shadow-lg hover:scale-105 transition-all"
              >
                <h4 className="font-semibold text-foreground text-xs md:text-sm mb-1">{addon.name}</h4>
              
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package Form */}
      <CustomPackageForm />

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-divine">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-xl md:text-3xl font-bold text-primary-foreground mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-primary-foreground/90 mb-6 text-sm md:text-base">
            Contact us for personalized wedding solutions tailored to your requirements
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="glass"
              size="lg"
              className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/30"
              asChild
            >
              <Link to="/contact">Request Custom Quote</Link>
            </Button>
            <Button
              variant="glass"
              size="lg"
              className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20"
              asChild
            >
              <a href="https://wa.me/919440397462" target="_blank" rel="noopener noreferrer">
                WhatsApp: 94403 97462
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Packages;
