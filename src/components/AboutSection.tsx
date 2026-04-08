import { motion } from "framer-motion";
import { Rocket, Target, Eye } from "lucide-react";

const items = [
  {
    icon: Rocket,
    label: "Our Story",
    text: "Founded by a team of passionate engineers and designers, VEENUSS GROWTH LAB was born from a simple belief: technology should empower, not complicate. We've grown from a small studio into a full-service digital agency.",
  },
  {
    icon: Target,
    label: "Our Mission",
    text: "To deliver world-class digital products that drive real business results. We combine technical excellence with creative vision to build solutions that stand out.",
  },
  {
    icon: Eye,
    label: "Our Vision",
    text: "A world where every business, regardless of size, has access to premium digital experiences that rival the best in the industry.",
  },
];

const AboutSection = () => (
  <section id="about" className="py-32 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
          Who We Are
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          About VEENUSS GROWTH LAB
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="text-center"
          >
            <div
              className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
              style={{ background: "var(--gradient-glow)" }}
            >
              <item.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-4">
              {item.label}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
