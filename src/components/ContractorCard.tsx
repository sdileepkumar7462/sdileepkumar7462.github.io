import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const contractorServices = [
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

const cateringMenu = {
  eveningSnacks: [
    "White Kesari",
    "Bonda",
    "Chutny",
    "Tea & Coffee",
    "Garam Pakoda",
  ],
  nightMeals: [
    "Sweet",
    "Hot",
    "Veg. Biriyani",
    "Onion Rytha",
    "Appalam",
    "Pickle",
    "Boil Curry",
    "Oil Fry",
    "White Rice",
    "Tomato Pappu",
    "Sambar",
    "Rasam",
    "Curd",
    "Banana",
    "Pan",
    "Ice cream",
  ],
  morningTiffin: [
    "Sweet",
    "Idly",
    "Pongal",
    "Vada",
    "Chutny",
    "Sambar",
    "Karam Chutny",
    "Coffee / Tea",
  ],
  afternoonMeals: [
    "Sweet",
    "Hot",
    "Pulihora",
    "Appalam",
    "Pickle",
    "Boil Curry",
    "Oil Fry",
    "Dosakaya Pappu",
    "Sambar",
    "Rasam",
    "Curd",
    "White Rice",
    "Banana",
    "Pan",
    "Ice cream",
  ],
};

export const ContractorCard = () => {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          {/* Main Contractor Card */}
          <div className="glass-card-strong rounded-2xl overflow-hidden divine-glow">
            {/* Header */}
            <div className="bg-gradient-to-r from-divine-saffron via-divine-gold to-divine-saffron p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <p className="text-primary-foreground/80 text-sm mb-1">
                    ॐ नमो वेंकटेशाय नमः
                  </p>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground">
                    S. Dileep Kumar
                  </h2>
                  <p className="text-primary-foreground/90 text-sm mt-1">Proprietor</p>
                </div>
                <div className="text-center md:text-right">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-primary-foreground">
                    DILEEP MARRIAGE CONTRACTOR
                  </h3>
                  <div className="flex items-center justify-center md:justify-end gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary-foreground text-primary-foreground" />
                    ))}
                    <span className="text-primary-foreground/90 text-sm ml-2">15+ Years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info Bar */}
            <div className="bg-card/90 backdrop-blur-sm border-b border-border/50 p-4">
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                <a
                  href="tel:+919440397462"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="font-semibold">94403 97462</span>
                </a>
                <a
                  href="tel:+917993434511"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="font-semibold">79934 34511</span>
                </a>
                <a
                  href="mailto:dileepmctml@gmail.com"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">dileepmctml@gmail.com</span>
                </a>
              </div>
              <div className="flex items-center justify-center gap-2 mt-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">HT shopping complex ,
Near Rambagicha circle ⭕️ ,
Tirumala -  517504</span>
              </div>
            </div>

            {/* Description */}
            <div className="p-6 bg-secondary/30">
              <p className="text-center text-foreground/90 text-sm md:text-base">
                We arrange Marriage Choultries with Accommodation, Decorations, Flower Decoration, 
                Nadaswaram, Purohit and Articles, Lunch, Dinner, Tiffin, Video Coverage & Photos at{" "}
                <span className="font-bold text-primary">TIRUMALA - TIRUPATI - TIRUCHANOOR</span>
              </p>
            </div>

            {/* Services & Menu Grid */}
            <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
              {/* Wedding Services */}
              <div className="glass-card rounded-xl p-6">
                <h4 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-gradient-divine flex items-center justify-center text-primary-foreground text-sm">
                    🛕
                  </span>
                  Wedding Services (26 Items)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-80 overflow-y-auto pr-2">
                  {contractorServices.map((service, idx) => (
                    <div
                      key={service}
                      className="flex items-start gap-2 text-sm"
                    >
                      <span className="text-primary font-semibold shrink-0">{String(idx + 1).padStart(2, '0')}.</span>
                      <span className="text-foreground/80">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Catering Menu */}
              <div className="glass-card rounded-xl p-6">
                <h4 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-gradient-divine flex items-center justify-center text-primary-foreground text-sm">
                    🍽️
                  </span>
                  Catering Menu
                </h4>
                <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
                  {/* Morning Tiffin */}
                  <div>
                    <h5 className="text-sm font-bold text-primary mb-2">Morning Tiffin / ఉదయం టిఫిన్</h5>
                    <div className="flex flex-wrap gap-1">
                      {cateringMenu.morningTiffin.map((item) => (
                        <span key={item} className="text-xs bg-secondary/60 px-2 py-1 rounded-full text-foreground/80">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Afternoon Meals */}
                  <div>
                    <h5 className="text-sm font-bold text-primary mb-2">Afternoon Meals / మధ్యాహ్నం భోజనం</h5>
                    <div className="flex flex-wrap gap-1">
                      {cateringMenu.afternoonMeals.map((item) => (
                        <span key={item} className="text-xs bg-secondary/60 px-2 py-1 rounded-full text-foreground/80">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Evening Snacks */}
                  <div>
                    <h5 className="text-sm font-bold text-primary mb-2">Evening Snacks / సాయంత్రం టిఫిన్</h5>
                    <div className="flex flex-wrap gap-1">
                      {cateringMenu.eveningSnacks.map((item) => (
                        <span key={item} className="text-xs bg-secondary/60 px-2 py-1 rounded-full text-foreground/80">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Night Meals */}
                  <div>
                    <h5 className="text-sm font-bold text-primary mb-2">Night Meals / రాత్రి భోజనం</h5>
                    <div className="flex flex-wrap gap-1">
                      {cateringMenu.nightMeals.map((item) => (
                        <span key={item} className="text-xs bg-secondary/60 px-2 py-1 rounded-full text-foreground/80">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 bg-secondary/30 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="tel:+919440397462">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now: 94403 97462
                </a>
              </Button>
              <Button variant="divineOutline" size="lg" asChild>
                <a
                  href="https://wa.me/919440397462?text=Hello! I'm interested in your marriage contractor services."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Inquiry
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
