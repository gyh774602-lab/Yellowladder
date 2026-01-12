import { useState } from "react";
import { MessageCircle, MapPin, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

const inquiryTypes = [
  { id: "counseling", label: "Career Counselling" },
  { id: "training", label: "Skill Training" },
  { id: "general", label: "General Inquiry" },
];

const Contact = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedType) {
      toast.error("Please select an inquiry type");
      return;
    }
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setSelectedType(null);
  };

  return (
    <main className="pt-16 sm:pt-20 pb-32">
      {/* Hero */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 text-center">
        <div className="container max-w-4xl mx-auto">
          <span className="text-accent text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3 sm:mb-4 block">
            Start Your Climb
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
            Get in <span className="text-golden">Touch</span>
          </h1>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Your ladder is ready. Are you?
          </p>
        </div>
      </section>

      {/* Inquiry Type Selection */}
      <section className="px-4 sm:px-6 mb-8 sm:mb-12">
        <div className="container max-w-2xl mx-auto">
          <p className="text-center text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">How can we help?</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {inquiryTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all active:scale-95 ${selectedType === type.id
                  ? "bg-gradient-golden text-primary-foreground shadow-[0_0_30px_rgba(255,215,0,0.4)]"
                  : "glass-card text-foreground/70 hover:text-foreground hover:border-primary/50"
                  }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 mb-16">
        <div className="container max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="group">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-transparent border-b-2 border-muted py-4 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors text-lg"
              />
            </div>

            <div className="group">
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-transparent border-b-2 border-muted py-4 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors text-lg"
              />
            </div>

            <div className="group">
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-transparent border-b-2 border-muted py-4 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors text-lg"
              />
            </div>

            <div className="group">
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="w-full bg-transparent border-b-2 border-muted py-4 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors text-lg resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-golden py-4 rounded-full text-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Direct Connect */}
      <section className="px-6">
        <div className="container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="mailto:hello@yellowladder.in"
              className="glass-card rounded-2xl p-8 text-center group hover:border-primary/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-golden flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Email Us
              </h3>
              <p className="text-muted-foreground text-sm">hello@yellowladder.in</p>
            </a>

            <a
              href="tel:9847766268"
              className="glass-card rounded-2xl p-8 text-center group hover:border-primary/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-golden flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Call Us
              </h3>
              <p className="text-muted-foreground text-sm">+91 98477 66268</p>
            </a>

            <div className="glass-card rounded-2xl p-8 text-center group hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-gradient-golden flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Visit Us
              </h3>
              <p className="text-muted-foreground text-sm">Thiruvananthapuram</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Signature */}
      <section className="py-24 px-6 text-center">
        <p className="font-display text-xl text-muted-foreground italic">
          "Your ladder is ready. <span className="text-golden">Are you?</span>"
        </p>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919847766268"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 md:bottom-8 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform z-40"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </main>
  );
};

export default Contact;
