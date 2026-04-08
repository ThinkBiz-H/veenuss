import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder, FinEdge India",
    text: "VEENUSS GROWTH LAB ne hamari idea ko ek powerful product me convert kar diya. Design aur performance dono next level hain.",
  },
  {
    name: "Priya Verma",
    role: "CEO, HealthBridge",
    text: "Team ka support aur professionalism outstanding tha. Unhone exactly wahi deliver kiya jo hume chahiye tha — on time.",
  },
  {
    name: "Arjun Mehta",
    role: "CTO, GreenKart",
    text: "Website rebuild ke baad hamari performance aur conversions dono improve hue. Clean code aur fast delivery — highly recommended.",
  },
];

const TestimonialsSection = () => (
  <section className="py-32 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
          Testimonials
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          What Clients Say
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground/90 text-sm leading-relaxed mb-6">
              "{t.text}"
            </p>
            <div>
              <p className="font-semibold text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
