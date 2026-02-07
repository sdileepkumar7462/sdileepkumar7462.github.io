import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User, Search, MapPin, FileText, IndianRupee, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroImage from "@/assets/hero-temple.jpg";
import weddingImage from "@/assets/wedding-ceremony.jpg";
import mandapamImage from "@/assets/mandapam.jpg";
import cateringImage from "@/assets/catering.jpg";
import ttdVenueImage from "@/assets/ttd-venue.jpg";
import weddingTraditionsImage from "@/assets/wedding-traditions.jpg";
import weddingPhotographyImage from "@/assets/wedding-photography.jpg";
import mandapamDecorationImage from "@/assets/mandapam-decoration.jpg";
import functionHallImage from "@/assets/function-hall.jpg";
import stageDecorationImage from "@/assets/stage-decoration.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Complete TTD Marriage Hall Booking Guide 2025 – Step-by-Step Process",
    excerpt:
      "Everything you need to know about TTD marriage hall booking at Tirumala. Learn the complete process for booking Simple Group Marriage, individual cottages, and mandapam at Tirumala Tirupati Devasthanams. Get insider tips on documents required, online booking, costs, and availability.",
    content: `
      <h2>How to Book TTD Marriage Hall at Tirumala</h2>
      <p>Booking a marriage hall through TTD (Tirumala Tirupati Devasthanams) is a divine blessing for Hindu couples. Here's your complete guide to the booking process.</p>
      
      <h3>Types of TTD Wedding Venues</h3>
      <ul>
        <li><strong>Simple Group Marriage</strong> - Group marriages conducted by TTD</li>
        <li><strong>Nitya Kalyanam Mandapam</strong> - Individual ceremonies</li>
        <li><strong>TTD Cottages with Mandapam</strong> - Premium accommodation + venue</li>
      </ul>
      
      <h3>Documents Required</h3>
      <ul>
        <li>Photo ID proofs of bride and groom</li>
        <li>Address proof</li>
        <li>Age certificates</li>
        <li>Passport size photographs</li>
      </ul>
      
      <h3>Booking Process</h3>
      <p>Visit the TTD official website or contact authorized contractors like Dileep Marriage Contractor for hassle-free booking assistance.</p>
    `,
    image: "https://i.postimg.cc/FHttFNL3/TTD-gets-a-good-response-to-online-booking-over-2-4-lakh-tickets-book-online-in-less-than-2-hours.jpg",
    category: "TTD Guide",
    author: "Divine Marriage Team",
    date: "December 28, 2024",
    readTime: "8 min read",
    slug: "ttd-marriage-hall-booking-guide",
  },
  {
    id: 2,
    title: "Top 15 Best Marriage Halls in Tirupati & Tirumala with Prices 2025",
    excerpt:
      "Discover the best wedding venues near TTD temple. Compare Kalyana Mandapams, function halls, and banquet halls in Tirupati with complete pricing, capacity, amenities, and booking information. Find affordable to luxury venues for your dream wedding.",
    content: `
      <h2>Best Wedding Venues in Tirupati</h2>
      <p>Finding the perfect marriage hall near Tirumala temple can transform your wedding experience. Here are the top venues:</p>
      
      <h3>1. TTD Kalyana Mandapam</h3>
      <p>Located within the temple complex, offering divine atmosphere and traditional experience.</p>
      
      <h3>2. Private Function Halls</h3>
      <p>Premium venues with modern amenities, AC halls, and customizable decorations.</p>
      
      <h3>Pricing Guide</h3>
      <ul>
        <li>Budget halls: ₹25,000 - ₹50,000</li>
        <li>Mid-range: ₹50,000 - ₹1,50,000</li>
        <li>Premium: ₹1,50,000 - ₹5,00,000+</li>
      </ul>
    `,
    image: functionHallImage,
    category: "Venues",
    author: "Venue Expert",
    date: "December 25, 2024",
    readTime: "12 min read",
    slug: "best-marriage-halls-tirupati",
  },
  {
    id: 3,
    title: "Traditional South Indian Wedding Rituals at Tirumala – Complete Guide",
    excerpt:
      "A detailed guide to authentic Telugu, Tamil, Kannada, and Kerala Hindu wedding ceremonies. Learn about muhurtham, mangalsutra, saptapadi, and other sacred rituals performed at Tirumala temple weddings with their significance and traditions.",
    content: `
      <h2>Sacred Wedding Rituals at Tirumala</h2>
      <p>South Indian weddings are rich in tradition and spiritual significance. Each ritual holds deep meaning.</p>
      
      <h3>Telugu Wedding Rituals</h3>
      <ul>
        <li><strong>Pellikoduku & Pellikuthuru</strong> - Pre-wedding ceremonies</li>
        <li><strong>Kashi Yatra</strong> - Mock pilgrimage ritual</li>
        <li><strong>Mangalsutra Dharana</strong> - Tying the sacred thread</li>
        <li><strong>Talambralu</strong> - Showering rice on each other</li>
      </ul>
      
      <h3>Tamil Wedding Rituals</h3>
      <ul>
        <li><strong>Oonjal</strong> - Swing ceremony</li>
        <li><strong>Kanyadaan</strong> - Giving away the bride</li>
        <li><strong>Saptapadi</strong> - Seven sacred steps</li>
      </ul>
    `,
    image: "https://i.postimg.cc/8kHsrXbq/An-Indian-Wedding-Spanning-5-Days.jpg",
    category: "Traditions",
    author: "Temple Priest",
    date: "December 22, 2024",
    readTime: "15 min read",
    slug: "south-indian-wedding-rituals",
  },
  {
    id: 4,
    title: "Wedding Catering in Tirupati – Traditional Menu Ideas & Top Caterers",
    excerpt:
      "Plan the perfect wedding feast with our comprehensive guide to South Indian wedding catering. Explore traditional banana leaf meals, menu options for morning tiffin, lunch, dinner, and find the best caterers in Tirupati with pricing.",
    content: `
      <h2>Wedding Catering Excellence in Tirupati</h2>
      <p>Food is the heart of any South Indian wedding. Here's how to plan the perfect wedding feast.</p>
      
      <h3>Traditional Menu Structure</h3>
      <h4>Morning Tiffin</h4>
      <p>Idli, Dosa, Pongal, Vada with Sambar and Chutneys</p>
      
      <h4>Lunch Menu</h4>
      <p>Traditional banana leaf meal with Pulihora, Sambar, Rasam, multiple curries, Payasam, and Curd Rice</p>
      
      <h4>Dinner Menu</h4>
      <p>Veg Biryani, variety rice, curries, and sweets</p>
      
      <h3>Catering Costs</h3>
      <ul>
        <li>Basic package: ₹350-500 per plate</li>
        <li>Premium: ₹500-800 per plate</li>
        <li>Luxury: ₹800-1500 per plate</li>
      </ul>
    `,
    image: cateringImage,
    category: "Catering",
    author: "Chef Raman",
    date: "December 18, 2024",
    readTime: "10 min read",
    slug: "wedding-catering-tirupati",
  },
  {
    id: 5,
    title: "Budget-Friendly Wedding Planning Tips for Tirupati – Save ₹50,000+",
    excerpt:
      "How to plan an affordable yet beautiful wedding at Tirumala without compromising quality. Smart money-saving tips for venue, decoration, catering, photography, and more. Complete budget breakdown for different wedding styles.",
    content: `
      <h2>Smart Wedding Planning on a Budget</h2>
      <p>A divine wedding at Tirumala doesn't have to break the bank. Here's how to save money without compromising on quality.</p>
      
      <h3>Budget Allocation Tips</h3>
      <ul>
        <li><strong>Venue (30%)</strong> - Choose TTD Simple Group Marriage for best value</li>
        <li><strong>Catering (25%)</strong> - Opt for local caterers with fixed menus</li>
        <li><strong>Decoration (15%)</strong> - Go for traditional flower decorations</li>
        <li><strong>Photography (10%)</strong> - Book local photographers early</li>
        <li><strong>Others (20%)</strong> - Priest, music, misc expenses</li>
      </ul>
      
      <h3>Money-Saving Strategies</h3>
      <ul>
        <li>Book during off-season (avoid peak months)</li>
        <li>Choose weekday muhurthams</li>
        <li>Combine services with one contractor</li>
        <li>Limit guest count for intimate ceremony</li>
      </ul>
    `,
    image: mandapamImage,
    category: "Budget Tips",
    author: "Financial Advisor",
    date: "December 15, 2024",
    readTime: "8 min read",
    slug: "budget-wedding-tirupati",
  },
  {
    id: 6,
    title: "Wedding Photography Guide – Capturing Divine Moments at Tirumala Temple",
    excerpt:
      "Expert tips for stunning wedding photos at Tirumala temple. Best photography locations, lighting advice, poses, and how to choose the right photographer. Complete guide to pre-wedding shoots and ceremony coverage.",
    content: `
      <h2>Capturing Your Divine Wedding Moments</h2>
      <p>Tirumala offers breathtaking backdrops for wedding photography. Here's how to capture the magic.</p>
      
      <h3>Best Photo Locations</h3>
      <ul>
        <li>Temple gopuram backdrop</li>
        <li>Mandapam interiors with floral decorations</li>
        <li>Traditional ceremony moments</li>
        <li>Garden areas near accommodation</li>
      </ul>
      
      <h3>Photography Packages</h3>
      <ul>
        <li><strong>Basic</strong> - Photo only: ₹25,000-40,000</li>
        <li><strong>Standard</strong> - Photo + Video: ₹50,000-80,000</li>
        <li><strong>Premium</strong> - Full coverage + Drone: ₹1,00,000+</li>
      </ul>
      
      <h3>Tips for Best Results</h3>
      <ul>
        <li>Book photographer familiar with temple weddings</li>
        <li>Plan shots in advance with muhurtham timing</li>
        <li>Get permissions for drone photography</li>
      </ul>
    `,
    image: "https://i.postimg.cc/bJL8dWj4/Hindu-Wedding-Dates-2020-Book-Event-Z.jpg",
    category: "Photography",
    author: "Photo Expert",
    date: "December 12, 2024",
    readTime: "9 min read",
    slug: "wedding-photography-tirumala",
  },
  {
    id: 7,
    title: "Wedding Mandapam Decoration Ideas – Traditional to Modern Designs",
    excerpt:
      "Explore stunning mandapam decoration ideas for your Tirumala wedding. From traditional temple-style with marigolds to contemporary floral designs. Get inspiration for stage decoration, entrance decor, and seating arrangements.",
    content: `
      <h2>Beautiful Mandapam Decoration Ideas</h2>
      <p>The mandapam is the heart of your wedding ceremony. Here are decoration styles to consider.</p>
      
      <h3>Traditional Decorations</h3>
      <ul>
        <li>Marigold and jasmine garlands</li>
        <li>Banana tree and mango leaf torans</li>
        <li>Brass kalasams and oil lamps</li>
        <li>Traditional kolam designs</li>
      </ul>
      
      <h3>Contemporary Styles</h3>
      <ul>
        <li>White lily and rose combinations</li>
        <li>LED lighting with floral backdrops</li>
        <li>Minimalist elegant designs</li>
        <li>Pastel theme decorations</li>
      </ul>
    `,
    image: mandapamDecorationImage,
    category: "Venues",
    author: "Decor Specialist",
    date: "December 10, 2024",
    readTime: "7 min read",
    slug: "mandapam-decoration-ideas",
  },
  {
    id: 8,
    title: "Wedding Stage Decoration Trends 2025 – Royal to Minimalist Designs",
    excerpt:
      "Latest wedding stage decoration trends for Tirupati weddings. Discover royal themes, floral walls, LED setups, and modern minimalist designs. Get quotes from top decorators and planning tips.",
    content: `
      <h2>Trending Stage Decoration Styles</h2>
      <p>Your wedding stage is where all eyes will be. Make it spectacular with these trending designs.</p>
      
      <h3>2025 Trending Themes</h3>
      <ul>
        <li><strong>Royal Gold & Red</strong> - Classic and timeless</li>
        <li><strong>Pastel Dreams</strong> - Soft pinks, peaches, and creams</li>
        <li><strong>Garden Fresh</strong> - Natural greens with white flowers</li>
        <li><strong>LED Spectacular</strong> - Modern lighting with crystals</li>
      </ul>
    `,
    image: stageDecorationImage,
    category: "Venues",
    author: "Event Designer",
    date: "December 8, 2024",
    readTime: "6 min read",
    slug: "wedding-stage-decoration",
  },
];

const categories = [
  "All",
  "TTD Guide",
  "Venues",
  "Traditions",
  "Catering",
  "Budget Tips",
  "Photography",
];

// Main SEO Content for Tirumala Marriage Packages
const tirumalaMarriageContent = {
  title: "Tirumala Marriage Booking Procedure & Package Details",
  
  
  sections: [
    {
      title: "Tirumala Marriage Package Cost",
      icon: IndianRupee,
      content: `• Package cost varies with decoration, food choice, and room types
• Venue cost: Rs. 3,900 per hall (10 halls available total)
• No marriage hall specifically designated for Devasthanam
• Weddings can be performed in open space with mandapam setup
• Ideal for small guest count celebrations
• Not advisable during rainy season
• Devasthanam booking allots 1 main room with 5-6 partitioned rooms`
    },
    {
      title: "Function Halls for Large Weddings",
      icon: MapPin,
      content: `• Closed function halls available for various requirements
• Hall capacity ranges from 50 to 1,000 guests
• Separate dining hall included with each function hall
• Rooms conveniently located within the wedding hall
• For 50 guests: 8-10 rooms needed
• For 100 guests: 15-20 rooms adequate
• Maximum 50 rooms allowed per wedding booking`
    },
    {
      title: "Dining & Amenities",
      icon: FileText,
      content: `• Separate dining hall with 60-150 person capacity
• Old and newly built function halls available
• Modern function halls feature elevator facilities
• Modern lighting decorations over roof areas
• Elevator access for elderly guest mobility
• Separate parking space for 15-20 vehicles`
    },
    {
      title: "Package Cost Details",
      icon: IndianRupee,
      content: `• Package cost depends on 4 main factors:
  - Wedding hall selection
  - Mandapam decoration style
  - Food menu choice
  - Number of AC and non-AC rooms
• Devasthanam marriage hall: Starting from Rs. 45,000
• Closed function hall: Starting from Rs. 1,00,000
• Options available for rooftop weddings with hill views`
    }
  ],
  bookingProcedure: {
    title: "Tirumala Marriage Booking Procedure",
    requirements: [
      "The bride's and groom's Aadhar card photocopies are required.",
      "The bride's parents' and groom's parents' Aadhar card photocopies are required.",
      "The bride's and groom's age proof documents, such as 10th mark sheets, school transfer certificates, or birth certificate photocopies, are required.",
      "The bride's and groom's unmarried certificates are required for Devasthanam marriage halls.",
      "Unmarried certificates are not required for the Mutt marriage halls.",
      "In Tirumala, only Hindu-arranged marriages are allowed.",
      "Love cum arranged marriages are also allowed.",
      "2nd Marriages are not allowed in TTD.Only In Private halls 2nd Marriages are allowed.",
      "Interreligious marriages will not be performed in Tirumala.",
      "Inter-caste arranged marriages are allowed as well.",
      "Hall booking for devasthanam halls opens on the 90th day from the date of marriage.",
      "In contrast, booking for the mutt marriage halls is permitted for an entire year, from one Ugadi to the next.",
      "The room and marriage hall allotment follows standard allotment timings in Tirumala, i.e., 3 p.m. to 3 p.m. the next day.",
      "A simple wedding will be performed at Simple Group Marriage in Tirumala."
    ]
  },
  marriageHallInfo: {
    title: "Marriage Function Halls in Tirumala Tirupati TTD",
    details: [
      { label: "Marriage Hall allotment Timings", value: "3.00 pm to 3.00 pm (24 hours)" },
      { label: "Room allotment timings", value: "3.00 pm to 3.00 pm" },
      { label: "Hall location", value: "Located at 0.8 to 1.5 Km from the main temple" }
    ],
    note: "Only Hindu arranged marriages are allowed at Tirumala. Inter-religious marriages are not allowed at Tirumala and Tirupati Devasthanam Mandapam. There is no limit on the guests' head count as COVID rules are no more applicable at Tirumala and Tirupati. A Darshan pass is not mandatory for the devotees to enter Tirumala Hills."
  },
  marriageTypes: [
    {
      title: "Simple Group Marriage / Purohit Sangam Marriage",
      requirements: [
        "The Bride and Groom have to be majors",
        "Both Bride and Groom should be necessarily Hindus",
        "The bride's parents and Groom's parents must be available for the marriage",
        "It can be performed in Groups depending on the Muhurtham",
        "A minimal number will be allowed for the marriage",
        "One Free Rs.50 room will be allotted for the marriage",
        "All original documents will be verified a day before the marriage",
        "Bride and Groom's Aadhar Cards, Unmarried certificate (signed by Thasildhar/ MRO)",
        "Bride parents and Groom parent's Aadhar Cards are required",
        "In the case of a parent's absence, a death certificate can be produced and the second parent can perform the marriage",
        "6 members (Bride, Groom and 4 other persons) are allowed to have Special Entry Darshan after marriage",
        "A receipt will be issued after the marriage by the concerned authority, which can be used for the marriage registration"
      ]
    },
    {
      title: "SMC/ TBC Function Halls Booking in Tirumala",
      requirements: [
        "The Bride and Groom have to be majors",
        "Both Bride and Groom should be necessarily Hindus",
        "The bride's parents and Groom's parents must be available for the marriage hall booking",
        "Hall booking opens on the 90th day to the marriage date",
        "Bride parents and Groom parents are required for the hall booking",
        "Bride and Groom's Aadhar Cards, Unmarried certificate (signed by Thasildhar/ MRO) and 10th Marksheet/ Birth certificate",
        "Bride parents and Groom parent's Aadhar Cards are required",
        "In the case of a parent's absence, a death certificate can be produced and the second parent can perform the marriage",
        "6 members (Bride, Groom and 4 other persons) are allowed to have Special Entry Darshan after marriage",
        "A receipt will be issued after the marriage by the concerned authority, which can be used for the marriage registration",
        "SMC/ TBC marriages will be performed on the road with closed curtains",
        "Hall rent is not applicable as it is an open space",
        "Two rooms will be allotted for the marriage and additional rooms can be booked online",
        "SMC marriages are ideally good for 50 to 100 members",
        "All other arrangements such as Mandapam Decoration, Purohit, Sannai Melam/ Nadaswaram etc will be charged",
        "Hall and Room will be allotted from 3 pm to 3 pm"
      ]
    },
    {
      title: "Individual Marriage Function Halls Booking in Tirumala",
      requirements: [
        "The Bride and Groom have to be majors",
        "Both Bride and Groom should be necessarily Hindus",
        "Anyone can book the hall provided all required documents are valid",
        "Bride and Groom's Aadhar Cards and 10th Marksheet/ Birth certificate/ PAN Card/ Driving License photocopies are required",
        "Bride parents and Groom parent's Aadhar Cards photocopies are required",
        "In the case of a parent's absence, a death certificate can be produced and the second parent can perform the marriage",
        "A receipt will be issued after the marriage by the Hall manager, which can be used for the marriage registration",
        "Individual Marriages halls are good for 50 to 700 members",
        "It is standard Hall and Room allotment timings ie. 3 pm to 3 pm",
        "There are no restrictions on the Rooms booking, One can book 25 to 40 rooms as required"
      ]
    }
  ]
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedPostId, setExpandedPostId] = useState<number | null>(null);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [columnsCount, setColumnsCount] = useState(3);

  useEffect(() => {
    function computeCols() {
      if (!gridRef.current) return;
      const style = getComputedStyle(gridRef.current);
      const cols = style.gridTemplateColumns ? style.gridTemplateColumns.split(' ').length : 1;
      setColumnsCount(cols || 1);
    }
    computeCols();
    window.addEventListener('resize', computeCols);
    return () => window.removeEventListener('resize', computeCols);
  }, []);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Main SEO Content Section */}
      <section className="py-12 bg-[#fff4d6]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            {/* Main Title */}
            <div className="text-center mb-8">
              <div className="bg-[#b30000] text-white px-4 py-3 rounded-t-lg shadow-lg" style={{boxShadow: '0 4px 6px rgba(179, 0, 0, 0.25)'}}>
                <h2 className="font-serif text-lg md:text-2xl font-bold">{tirumalaMarriageContent.title}</h2>

      
              </div>
              
              <div className="border-2 border-[#f3c969] rounded-b-lg p-4 bg-[#fff4d6]">
                
              <div className="mt-1 pt-1 border-t border-[#f3c969]">
                <a
                  href="tel:+919440397462"
                  className="flex items-center justify-center gap-4 px-16 py-3 bg-[#b30000] text-white rounded-full font-bold hover:bg-[#8f0000] transition-colors"
                >
                  📞 For More Details Contact Us - 9440397462
                </a>
              </div>

                
              </div>
            </div>

            {/* Booking Procedure */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl p-6 md:p-8 mb-12 font-medium bg-[#fff4d6] border-2 border-[#f3c969]" style={{boxShadow: '0 4px 6px rgba(179, 0, 0, 0.15)'}}
            >
              <h3 className="font-serif text-xl md:text-2xl font-bold text-[#2b2b2b] mb-6 text-center">
                {tirumalaMarriageContent.bookingProcedure.title}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-3">
                {tirumalaMarriageContent.bookingProcedure.requirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-[#b30000] font-bold">✓</span>
                    <span className="text-[#2b2b2b] font-medium">{req}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-[#f3c969]">
                <a
                  href="tel:+919440397462"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#b30000] text-white rounded-full font-semibold hover:bg-[#8f0000] transition-colors"
                >
                  📞 For More Details Contact Us - 9440397462
                </a>
              </div>
            </motion.div>

            {/* Marriage Types Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-serif text-xl md:text-2xl font-bold text-[#2b2b2b] mb-6 text-center">
                Types of Marriages in Tirumala
              </h3>
              
              <Tabs defaultValue="kalyana" className="w-full">
                <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-6">
                  <TabsTrigger value="kalyana" className="data-[state=active]:bg-[#b30000] data-[state=active]:text-white hover:bg-[#8f0000] text-xs sm:text-sm text-[#2b2b2b]">
                    Simple Group Marriage
                  </TabsTrigger>
                  <TabsTrigger value="smc" className="data-[state=active]:bg-[#b30000] data-[state=active]:text-white hover:bg-[#8f0000] text-xs sm:text-sm text-[#2b2b2b]">
                    SMC/TBC Halls
                  </TabsTrigger>
                  <TabsTrigger value="individual" className="data-[state=active]:bg-[#b30000] data-[state=active]:text-white hover:bg-[#8f0000] text-xs sm:text-sm text-[#2b2b2b]">
                    Individual Halls
                  </TabsTrigger>
                </TabsList>
                
                {tirumalaMarriageContent.marriageTypes.map((type, typeIndex) => (
                  <TabsContent 
                    key={typeIndex} 
                    value={typeIndex === 0 ? "kalyana" : typeIndex === 1 ? "smc" : "individual"}
                    className="rounded-2xl p-6 font-medium bg-[#fff4d6] border-2 border-[#f3c969]" style={{boxShadow: '0 4px 6px rgba(179, 0, 0, 0.15)'}}
                  >
                    <h4 className="font-serif text-lg font-bold text-[#2b2b2b] mb-4">
                      {type.title}
                    </h4>
                    <div className="space-y-2">
                      {type.requirements.map((req, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-[#b30000] font-bold">✓</span>
                          <span className="text-[#2b2b2b]">{req}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-[#f3c969]">
                      <a
                        href="tel:+919440397462"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-[#b30000] text-white rounded-full font-semibold hover:bg-[#8f0000] transition-colors text-sm"
                      >
                        📞 For More Details Contact Us - 9440397462
                      </a>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </motion.div>

            {/* Marriage Hall Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl p-6 md:p-8 mb-12 font-medium bg-[#fff4d6] border-2 border-[#f3c969]" style={{boxShadow: '0 4px 6px rgba(179, 0, 0, 0.15)'}}
            >
              <h3 className="font-serif text-xl md:text-2xl font-bold text-[#2b2b2b] mb-6 text-center">
                {tirumalaMarriageContent.marriageHallInfo.title}
              </h3>
              
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {tirumalaMarriageContent.marriageHallInfo.details.map((detail, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-[#fff4d6] border-2 border-[#f3c969]" style={{boxShadow: '0 2px 4px rgba(179, 0, 0, 0.15)'}}>
                    <p className="text-xs text-[#2b2b2b] mb-1 font-medium">{detail.label}</p>
                    <p className="font-semibold text-[#b30000] text-sm">{detail.value}</p>
                  </div>
                ))}
              </div>
              
              <p className="text-[#2b2b2b] text-sm text-center bg-[#fff4d6] p-4 rounded-xl border-2 border-[#f3c969]" style={{boxShadow: '0 2px 4px rgba(179, 0, 0, 0.15)'}}>
                {tirumalaMarriageContent.marriageHallInfo.note}
              </p>
            </motion.div>

            {/* Content Sections */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {tirumalaMarriageContent.sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl p-6 font-medium bg-[#fff4d6] border-2 border-[#f3c969]" style={{boxShadow: '0 4px 6px rgba(179, 0, 0, 0.15)'}}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#b30000] flex items-center justify-center">
                      <section.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#2b2b2b]">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="text-[#2b2b2b] text-sm space-y-2">
                    {section.content.split('\n').filter(line => line.trim()).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#b30000] font-bold mt-1">•</span>
                        <span className="font-medium">{item.replace(/^[•\-\s]+/, '').trim()}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-[#fff4d6] border-b-2 border-[#f3c969] sticky top-16 z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? "bg-[#b30000] text-white shadow-md"
                    : "bg-white text-[#2b2b2b] hover:text-white hover:bg-[#8f0000] border border-[#f3c969]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {activeCategory === "All" && searchQuery === "" && (
        <section className="py-12 bg-[#fff4d6]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div
                onClick={() => setExpandedPostId(expandedPostId === blogPosts[0].id ? null : blogPosts[0].id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setExpandedPostId(expandedPostId === blogPosts[0].id ? null : blogPosts[0].id); }}
                className="block group cursor-pointer"
              >
                <div className="rounded-2xl overflow-hidden font-medium border-2 border-[#f3c969]" style={{boxShadow: '0 4px 6px rgba(179, 0, 0, 0.25)'}}>
                  <div className="grid md:grid-cols-2 gap-0 bg-white">
                    <div className="relative h-64 md:h-80">
                      <img
                        src={blogPosts[0].image}
                        alt={blogPosts[0].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-[#b30000] text-white text-xs font-bold">
                          FEATURED
                        </span>
                      </div>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <span className="text-[#b30000] font-semibold text-sm mb-2">
                        {blogPosts[0].category}
                      </span>
                      <h2 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-[#2b2b2b] mb-4 group-hover:text-[#b30000] transition-colors">
                        {blogPosts[0].title}
                      </h2>
                      <p className="text-[#2b2b2b] text-sm md:text-base mb-6 line-clamp-3">
                        {blogPosts[0].excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-[#2b2b2b]">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {blogPosts[0].date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {blogPosts[0].readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {expandedPostId === blogPosts[0].id && (
                  <div className="mt-4 rounded-b-2xl p-6 bg-white border-2 border-t-0 border-[#f3c969]" style={{boxShadow: '0 2px 4px rgba(179, 0, 0, 0.12)'}}>
                    <div className="prose max-w-none text-[#2b2b2b]" dangerouslySetInnerHTML={{ __html: blogPosts[0].content }} />
                    <div className="text-right mt-4">
                      <button
                        onClick={(e) => { e.stopPropagation(); setExpandedPostId(null); }}
                        className="px-4 py-2 bg-[#b30000] text-white rounded-full text-sm"
                      >
                        Read less
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12 bg-[#fff4d6]">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#2b2b2b]">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {(() => {
                const visiblePosts = (activeCategory === "All" && searchQuery === "" ? filteredPosts.slice(1) : filteredPosts);
                return visiblePosts.map((post, index) => {
                  const rowIndex = Math.floor(index / columnsCount);
                  const isHidden = expandedRow !== null && expandedRow !== rowIndex;
                  return (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      data-row={rowIndex}
                      className={isHidden ? 'hidden' : ''}
                    >
                      <div
                        className="block group h-full cursor-pointer"
                        onClick={() => {
                          // toggle expanded post and mark the row to show
                          const willExpand = expandedPostId !== post.id;
                          setExpandedPostId(willExpand ? post.id : null);
                          setExpandedRow(willExpand ? rowIndex : null);
                        }}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { const willExpand = expandedPostId !== post.id; setExpandedPostId(willExpand ? post.id : null); setExpandedRow(willExpand ? rowIndex : null); } }}
                      >
                        <div className="rounded-2xl overflow-hidden h-full hover:shadow-xl transition-all duration-300 font-medium border-2 border-[#f3c969] bg-white relative" style={{boxShadow: '0 2px 4px rgba(179, 0, 0, 0.15)'}}>
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-3 left-3">
                              <span className="px-2 py-1 rounded-full bg-[#b30000] text-white text-xs font-medium">
                                {post.category}
                              </span>
                            </div>
                          </div>
                          <div className="p-5">
                            <h3 className="font-serif text-lg font-semibold text-[#2b2b2b] mb-2 group-hover:text-[#b30000] transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-[#2b2b2b] text-sm mb-4 line-clamp-2">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between text-xs text-[#2b2b2b]">
                              <span className="flex items-center gap-1">
                                <User className="w-3 h-3" />
                                {post.author}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {post.readTime}
                              </span>
                            </div>
                          </div>

                          {/* overlay content fits inside card and does not affect layout */}
                          {expandedPostId === post.id && (
                            <div className="absolute inset-0 bg-white p-5 overflow-auto rounded-2xl" style={{ zIndex: 30 }} onClick={(e) => e.stopPropagation()}>
                              <div className="prose max-w-none text-[#2b2b2b]" dangerouslySetInnerHTML={{ __html: post.content }} />
                              <div className="text-right mt-4">
                                <button
                                  onClick={(e) => { e.stopPropagation(); setExpandedPostId(null); setExpandedRow(null); }}
                                  className="px-4 py-2 bg-[#b30000] text-white rounded-full text-sm"
                                >
                                  Read less
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                });
              })()}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
     <section className="py-16 bg-gradient-divine">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Get Wedding Planning Tips
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Subscribe to receive expert advice, venue updates, and exclusive offers for your Tirumala wedding
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <button className="px-6 py-2 bg-divine-cream text-divine-temple rounded-lg font-semibold hover:bg-divine-cream/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
};

export default Blog;
