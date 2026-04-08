import { motion } from "framer-motion";
import { Globe, Smartphone, Palette, Settings } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "High-performance web applications built with modern frameworks, optimized for speed and scalability.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile apps that deliver seamless experiences on every device.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Human-centered design that converts. Beautiful interfaces backed by research and data.",
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    description: "Ongoing optimization, monitoring, and support to keep your digital products performing at their best.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-32 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">What We Do</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">Our Services</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="glass rounded-2xl p-8 group cursor-pointer glow-border hover:border-primary/30 transition-all"
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
              style={{ background: "var(--gradient-glow)" }}
            >
              <service.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
