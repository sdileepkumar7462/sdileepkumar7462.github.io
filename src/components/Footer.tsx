import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Wedding Packages", path: "/packages" },
  { name: "Function Halls", path: "/function-halls" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

const services = [
  "Marriage Halls in Tirumala , Tirupati & Tiruchanoor",
  "TTD Marriage Halls & Private Function Halls Booking",
  "Kalyana Mandapam Services",
  "Wedding Catering Services in Tirumala & Tirupati",
  "Event Arrangements & Ear boring Arrangements",
  "Any Function Overall Arrangements(Functions like Engagement, Baby Shower, Birthday, etc)",
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@DileepKumar-ef2qo/featured", label: "YouTube" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export const Footer = () => {
  return (
    <footer className="bg-divine-temple text-divine-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="https://i.postimg.cc/jqHwngBk/Whats-App-Image-2026-01-23-at-5-03-40-PM.jpg"
                alt="Divine Symbol"
                className="w-14 h-14 rounded-full object-cover shadow-lg"
              />
              <div>
                <h3 className="font-serif text-xl font-bold text-divine-gold">
                  Divine Marriage
                </h3>
                <p className="text-sm text-divine-cream/70">Tirumala & Tirupathi</p>
              </div>
            </div>
            <p className="text-divine-cream/80 text-sm leading-relaxed">
              Providing divine wedding experiences at Tirumala & Tirupati since 2010. 
              Your trusted partner for memorable temple weddings and traditional ceremonies.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-divine-cream/10 flex items-center justify-center text-divine-cream hover:bg-divine-gold hover:text-divine-temple transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-divine-gold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-divine-cream/80 hover:text-divine-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-divine-gold mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-divine-cream/80 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-divine-gold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">

                <MapPin className="w-5 h-5 text-divine-gold shrink-0 mt-0.5" />
                <span className="text-divine-cream/80 text-sm">
                 Ht shopping complex 
Near Rambagicha circle ⭕️ 
Tirumala 517504
                </span>
                <MapPin className="w-5 h-5 text-divine-gold shrink-0 mt-0.5" />
                <span className="text-divine-cream/80 text-sm">
                 Sai Krupa function hall

Near old toruchanoor road

Lakshmi Puram circle ⭕️

Tirupathi - 517501
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-divine-gold shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+919440397462"
                    className="text-divine-cream/80 text-sm hover:text-divine-gold transition-colors"
                  >
                    +91 94403 97462
                  </a>
                  <a
                    href="tel:+919793434511"
                    className="text-divine-cream/80 text-sm hover:text-divine-gold transition-colors"
                  >
                    +91 79934 34511
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-divine-gold shrink-0" />
                <a
                  href="mailto:dileepmctml@gmail.com"
                  className="text-divine-cream/80 text-sm hover:text-divine-gold transition-colors"
                >
                  dileepmctml@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-divine-gold shrink-0" />
                <span className="text-divine-cream/80 text-sm">
                  Open 24/7 for Inquiries
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-divine-cream/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-divine-cream/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Divine Marriage Services Tirumala,Tirupati & Tiruchanoor. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="text-divine-cream/60 text-sm hover:text-divine-gold transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-divine-cream/60 text-sm hover:text-divine-gold transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
