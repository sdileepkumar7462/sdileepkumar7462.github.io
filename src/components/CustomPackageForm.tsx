import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const marriageTypes = [
  { value: "", label: "Select Marriage Type" },
  { value: "hindu-tamil", label: "Hindu – Tamil" },
  { value: "hindu-telugu", label: "Hindu – Telugu" },
  { value: "hindu-kannada", label: "Hindu – Kannada" },
  { value: "hindu-kerala", label: "Hindu – Kerala" },
];

const communityOptions = [
  { value: "", label: "Select Community" },
  { value: "brahmins", label: "Brahmins" },
  { value: "vyshyas", label: "Vyshyas" },
  { value: "others", label: "Others" },
];

const priestOptions = [
  { value: "", label: "Select Priest Option" },
  { value: "own", label: "Own Priest" },
  { value: "contractor", label: "From Contractor" },
];

const packageTypes = [
  { value: "", label: "Select Package" },
  { value: "kalyana-vedika", label: "Simple Group Marriage (Group Marriage)" },
  { value: "devasthanam", label: "Devasthanam (Cottage & Mandapam)" },
  { value: "private-halls", label: "Private Function Halls" },
  { value: "custom", label: "Custom Package" },
];

export const CustomPackageForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventDate: "",
    muhurthamStart: "",
    muhurthamEnd: "",
    guests: "",
    packageType: "",
    marriageType: "",
    community: "",
    priestOption: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const {
      name,
      phone,
      email,
      eventDate,
      muhurthamStart,
      muhurthamEnd,
      guests,
      packageType,
      marriageType,
      community,
      priestOption,
      message,
    } = formData as Record<string, string>;

    const muhurthamText = muhurthamStart || muhurthamEnd ? `${muhurthamStart || ''}${muhurthamStart && muhurthamEnd ? ' - ' : ''}${muhurthamEnd || ''}` : 'N/A';

    const lines = [
      'New Custom Package Request',
      `Name: ${name || 'N/A'}`,
      `Phone: ${phone || 'N/A'}`,
      `Email: ${email || 'N/A'}`,
      `Event Date: ${eventDate || 'N/A'}`,
      `Muhurtham: ${muhurthamText}`,
      `Guests: ${guests || 'N/A'}`,
      `Package: ${packageType || 'N/A'}`,
      `Marriage Type: ${marriageType || 'N/A'}`,
      `Community: ${community || 'N/A'}`,
      `Priest Option: ${priestOption || 'N/A'}`,
      `Special Requirements: ${message || 'N/A'}`,
    ];

    const text = lines.join('\n');
    const phoneNumber = '919440397462';
    const waUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(text)}`;

    try {
      window.open(waUrl, '_blank');
      toast({
        title: 'WhatsApp Opened',
        description: 'WhatsApp has been opened with your request. Please send the message to complete.',
      });
    } catch (err) {
      toast({
        title: 'Unable to open WhatsApp',
        description: 'Please ensure pop-ups are allowed or copy details manually.',
      });
    }

    setFormData({
      name: "",
      phone: "",
      email: "",
      eventDate: "",
      muhurthamStart: "",
      muhurthamEnd: "",
      guests: "",
      packageType: "",
      marriageType: "",
      community: "",
      priestOption: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const selectClassName = "w-full h-12 px-4 rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm";
  const labelClassName = "block text-sm font-medium text-foreground mb-2";

  return (
    <section className="py-16 bg-background temple-pattern">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Get Your Custom Quote
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Request Custom Package
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tell us your requirements and we'll create a personalized wedding package for you
            </p>
          </div>

          <div className="glass-card-strong rounded-2xl p-6 md:p-10 divine-glow">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name & Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClassName}>Full Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="h-12 rounded-xl bg-card/50 backdrop-blur-sm border-border/60"
                  />
                </div>
                <div>
                  <label className={labelClassName}>Phone Number *</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="h-12 rounded-xl bg-card/50 backdrop-blur-sm border-border/60"
                  />
                </div>
              </div>

              {/* Muhurtham Time Range */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClassName}>Muhurtham Start</label>
                  <Input
                    type="time"
                    name="muhurthamStart"
                    value={formData.muhurthamStart}
                    onChange={handleChange}
                    className="h-12 rounded-xl bg-card/50 backdrop-blur-sm border-border/60"
                  />
                </div>
                <div>
                  <label className={labelClassName}>Muhurtham End</label>
                  <Input
                    type="time"
                    name="muhurthamEnd"
                    value={formData.muhurthamEnd}
                    onChange={handleChange}
                    className="h-12 rounded-xl bg-card/50 backdrop-blur-sm border-border/60"
                  />
                </div>
              </div>

              {/* Row 2: Email & Event Date */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClassName}>Email Address</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="h-12 rounded-xl bg-card/50 backdrop-blur-sm border-border/60"
                  />
                </div>
                <div>
                  <label className={labelClassName}>Event Date *</label>
                  <Input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                    className="h-12 rounded-xl bg-card/50 backdrop-blur-sm border-border/60"
                  />
                </div>
              </div>

              {/* Row 3: Guests & Package Type */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClassName}>Expected Guests</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className={selectClassName}
                  >
                    <option value="">Select guest count</option>
                    <option value="50-100">50 - 100 guests</option>
                    <option value="100-200">100 - 200 guests</option>
                    <option value="200-300">200 - 300 guests</option>
                    <option value="300-500">300 - 500 guests</option>
                    <option value="500+">500+ guests</option>
                  </select>
                </div>
                <div>
                  <label className={labelClassName}>Package Type *</label>
                  <select
                    name="packageType"
                    value={formData.packageType}
                    onChange={handleChange}
                    required
                    className={selectClassName}
                  >
                    {packageTypes.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Marriage Type & Community */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClassName}>Marriage Type *</label>
                  <select
                    name="marriageType"
                    value={formData.marriageType}
                    onChange={handleChange}
                    required
                    className={selectClassName}
                  >
                    {marriageTypes.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClassName}>Community</label>
                  <select
                    name="community"
                    value={formData.community}
                    onChange={handleChange}
                    className={selectClassName}
                  >
                    {communityOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 5: Priest Option */}
              <div>
                <label className={labelClassName}>Priest Option *</label>
                <select
                  name="priestOption"
                  value={formData.priestOption}
                  onChange={handleChange}
                  required
                  className={selectClassName}
                >
                  {priestOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className={labelClassName}>Special Requirements</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about any special requirements, decorations, catering preferences..."
                  rows={4}
                  className="rounded-xl bg-card/50 backdrop-blur-sm border-border/60"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Submit Request
                    </>
                  )}
                </Button>
                <Button
                  type="button"
                  variant="divineOutline"
                  size="lg"
                  asChild
                >
                  <a href="tel:+919440397462">
                    <Phone className="w-4 h-4 mr-2" />
                    Call: 94403 97462
                  </a>
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
