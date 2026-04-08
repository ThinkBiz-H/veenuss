import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Let's Build Something Great
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl font-semibold mb-6">
              Contact Info
            </h3>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: "veenussgrowthlab@gmail.com",
                  link: "mailto:veenussgrowthlab@gmail.com",
                },
                {
                  icon: Phone,
                  label: "+91 9871388897",
                  link: "tel:+919871388897",
                },
                {
                  icon: MapPin,
                  label: "San Francisco, CA",
                  link: "https://www.google.com/maps?q=San+Francisco,+CA",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition group-hover:scale-110"
                    style={{ background: "var(--gradient-glow)" }}
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>

                  <span className="text-foreground/80 group-hover:text-primary transition">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />

            <textarea
              placeholder="Tell us about your project"
              required
              maxLength={1000}
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-4 rounded-xl font-semibold text-primary-foreground flex items-center justify-center gap-2"
              style={{ background: "var(--gradient-primary)" }}
            >
              Send Message <Send size={18} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
