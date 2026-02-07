import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

export const FloatingButtons = () => {
  const whatsappNumber = "919440397462";
  const phoneNumber = "+919440397462";
  const [showContactText, setShowContactText] = useState(false);

  // Blinking Contact Text (appears randomly)
  useEffect(() => {
    const showText = () => {
      setShowContactText(true);
      setTimeout(() => setShowContactText(false), 3000);
    };

    const initialTimer = setTimeout(showText, 2000);

    const interval = setInterval(() => {
      const randomDelay = Math.floor(Math.random() * 3000) + 5000;
      setTimeout(showText, randomDelay);
    }, 10000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Blinking Contact Text */}
      <AnimatePresence>
        {showContactText && (
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.8 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="absolute right-16 bottom-8 whitespace-nowrap"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 10px rgba(255, 193, 7, 0.3)",
                  "0 0 25px rgba(255, 193, 7, 0.6)",
                  "0 0 10px rgba(255, 193, 7, 0.3)"
                ]
              }}
              transition={{ duration: 1, repeat: Infinity }}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold text-sm shadow-lg border border-green-400/50"
            >
              📞 For More Details Contact Us
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Phone Button */}
      <motion.a
        href={`tel:${phoneNumber}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-11 h-11 rounded-full bg-divine-saffron text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Call us"
      >
        <Phone className="w-7 h-7" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=Hello! I'm interested in your wedding services at Tirupati.`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-lg transition-all"
        aria-label="Chat on WhatsApp"
      >

        {/* Official WhatsApp Icon */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Kcp66SU64bRGZxhAQFdq0KvS77VjdWKkEw&s"
          alt="WhatsApp"
          className="w-9 h-9 object-cover rounded-full"
        />
      </motion.a>
    </div>
  );
};
