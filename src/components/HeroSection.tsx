import { motion } from "framer-motion";
import HeroScene from "./HeroScene";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <HeroScene />
    <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background z-[1]" />
    <div className="relative z-[2] container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
          Digital Innovation Studio
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
          We Build{" "}
          <span className="gradient-text">Digital</span>
          <br />
          Experiences
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Transforming ideas into world-class web and mobile applications with cutting-edge technology and stunning design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full font-semibold text-primary-foreground"
            style={{ background: "var(--gradient-primary)" }}
          >
            Start Your Project
          </motion.a>
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full font-semibold glass border border-border text-foreground"
          >
            View Our Work
          </motion.a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
