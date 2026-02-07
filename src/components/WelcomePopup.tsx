import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Calendar, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Show popup on mount
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("welcomePopupSeen");
    if (!hasSeenPopup) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
        // Try to play audio
        if (audioRef.current) {
          audioRef.current.volume = 0.3;
          audioRef.current.play().catch(() => {});
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Auto-close popup after 5 seconds and redirect to home
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        handleClose();
        navigate("/");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, navigate]);

  // Show popup on user interaction if not already seen
  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        const hasSeenPopup = sessionStorage.getItem("welcomePopupSeen");
        if (!hasSeenPopup && !isOpen) {
          setIsOpen(true);
          if (audioRef.current) {
            audioRef.current.volume = 0.3;
            audioRef.current.play().catch(() => {});
          }
        }
      }
    };

    window.addEventListener("click", handleInteraction, { once: true });
    window.addEventListener("scroll", handleInteraction, { once: true });
    
    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };
  }, [hasInteracted, isOpen]);

  // Flow: Home (15s) -> Blog (10s) -> Toast -> Home
  useEffect(() => {
    const hasCompletedFlow = sessionStorage.getItem("welcomeFlowCompleted");
    const hasSeenPopup = sessionStorage.getItem("welcomePopupSeen");
    
    if (hasSeenPopup && !hasCompletedFlow && !isOpen) {
      // Start the flow after popup is closed
      if (location.pathname === "/") {
        // On home page, wait 15 seconds then go to blog
        const timer = setTimeout(() => {
          navigate("/blog");
        }, 15000);
        return () => clearTimeout(timer);
      } else if (location.pathname === "/blog") {
        // On blog page, wait 10 seconds then show toast and go home
        const timer = setTimeout(() => {
          toast({
            title: "🏛️ Explore Our Venues!",
            description: "Discover stunning wedding mandapams and function halls in Tirumala",
            duration: 5000,
          });
          
          // After toast, redirect to home
          setTimeout(() => {
            sessionStorage.setItem("welcomeFlowCompleted", "true");
            navigate("/");
          }, 3000);
        }, 10000);
        return () => clearTimeout(timer);
      }
    }
  }, [location.pathname, isOpen, navigate]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("welcomePopupSeen", "true");
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handleBookNow = () => {
    handleClose();
    navigate("/packages");
  };

  const quickLinks = [
    {
      icon: Calendar,
      title: "Book Venue",
      description: "Reserve date",
      action: "/blog",
      isExternal: false,
    },
    {
      icon: Phone,
      title: "Call Now",
      description: "Instant help",
      action: "tel:+919440397462",
      isExternal: true,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick chat",
      action: "https://wa.me/919440397462",
      isExternal: true,
    },
  ];

  return (
    <>
      <audio
        ref={audioRef}
        src="https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3"
        preload="auto"
      />

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop - semi-transparent, click to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-divine-temple/30 backdrop-blur-sm z-[100]"
            />

            {/* Small Popup Card - Right Side, Responsive */}
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.8 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed z-[101]
                bottom-20 right-4 left-4
                sm:left-auto sm:bottom-auto sm:top-24 sm:right-4 sm:w-64
                md:w-72 md:right-6 md:top-28
                lg:w-72 lg:right-8"
            >
              <div className="glass-card-strong rounded-xl overflow-hidden divine-glow shadow-2xl border border-divine-gold/30">
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-2 right-2 w-6 h-6 rounded-full bg-secondary/80 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-all z-10"
                  aria-label="Close popup"
                >
                  <X className="w-3 h-3" />
                </button>

                {/* Header Image */}
                <div className="w-full h-24 bg-gradient-divine overflow-hidden">
                  <img
                    src="https://i.postimg.cc/xCzkj0nP/Whats-App-Image-2025-12-30-at-12-21-18-PM.jpg"
                    alt="Divine Wedding"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content - Compact */}
                <div className="p-3 space-y-2">
                  <div className="text-center">
                    <h3 className="font-serif text-sm font-semibold text-foreground">
                      Divine Wedding Services
                    </h3>
                    <p className="text-muted-foreground text-[10px] mt-0.5">
                      Divine Wedding halls  at Tirumala & Tirupati
                    </p>
                  </div>

                  {/* Quick Help Links - Horizontal */}
                  <div className="grid grid-cols-3 gap-1.5">
                    {quickLinks.map((link, index) => (
                      <motion.a
                        key={link.title}
                        href={link.action}
                        target={link.isExternal ? "_blank" : undefined}
                        rel={link.isExternal ? "noopener noreferrer" : undefined}
                        onClick={handleClose}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="flex flex-col items-center p-1.5 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-divine flex items-center justify-center mb-0.5 group-hover:scale-110 transition-transform">
                          <link.icon className="w-3 h-3 text-primary-foreground" />
                        </div>
                        <span className="text-[9px] font-semibold text-foreground">
                          {link.title}
                        </span>
                      </motion.a>
                    ))}
                  </div>

                  {/* CTA Button - Now redirects to WhatsApp */}
                  <Button
                    variant="hero"
                    size="sm"
                    className="w-full text-xs py-2"
                    onClick={handleBookNow}
                  >
                    <MessageCircle className="w-3 h-3 mr-1" />
                    Book Now on WhatsApp
                  </Button>

                  <p className="text-center text-[9px] text-muted-foreground">
                    Trusted by 5000+ families
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
