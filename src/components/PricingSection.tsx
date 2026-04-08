import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹12,999",
    desc: "Best for: Small businesses, startups, personal brands",
    features: [
      "5 Pages Website (Home, About, Services, Contact, Gallery)",
      "Mobile Responsive Design",
      "Clean & Professional UI",
      "WhatsApp Chat Integration",
      "Contact Form with Email Notification",
      "Basic SEO Setup (Meta Tags, Titles)",
      "Google Map Integration",
      "Social Media Links Integration",
      "Image Optimization (Faster Loading)",
      "SSL Setup (HTTPS Security)",
      "1 Revision Round",
      "1 Month Support",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "₹24,999",
    desc: "Best for: Businesses that want more visibility & engagement",
    features: [
      "8–12 Pages Website",
      "Custom UI Design (Brand-focused)",
      "Mobile + Tablet Optimization",
      "Speed Optimization (Fast Loading)",
      "Blog Section (for SEO growth)",
      "Advanced Contact Forms (Multi-step / Inquiry forms)",
      "WhatsApp + Call Button (Sticky)",
      "Basic On-Page SEO Optimization",
      "Google Analytics + Search Console Setup",
      "Social Media Feed Integration",
      "Basic Animations (Modern feel)",
      "Lead Inquiry Dashboard (Basic tracking)",
      "2 Revision Rounds",
      "2 Months Support",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹49,999 – ₹79,999",
    desc: "Best for: Serious businesses that want leads, automation & growth",
    features: [
      "12–20 Pages Fully Custom Website",
      "Premium UI/UX (Conversion-Focused Design)",
      "Advanced Speed Optimization (Core Web Vitals Ready)",
      "High-Converting Landing Page Included",
      "Lead Capture System (Forms + CTA Strategy)",
      "WhatsApp, Call & Email Automation Integration",
      "Funnel Setup (Landing → Thank You Page → Follow-up)",
      "Advanced SEO Structure (Keyword-based pages)",
      "Blog + Dynamic Content System",
      "Admin Panel (Manage content easily)",
      "CRM Integration (Lead Management System)",
      "Payment Gateway Integration (Razorpay / Stripe)",
      "Email Automation (Auto replies, lead nurturing)",
      "Advanced Security + Backup System",
      "Performance Monitoring Setup",
      "3 Revision Rounds",
      "3 Months Support + Maintenance",
      "Training Session (How to use website)",
    ],
    popular: false,
  },

  {
    name: "Starter (WordPress)",
    price: "₹9,999",
    desc: "Best for: Small businesses / personal use",
    features: [
      "WordPress Setup & Installation",
      "Premium Theme Setup (customized)",
      "4–6 Pages Website",
      "Mobile Responsive Design",
      "Contact Form Integration",
      "WhatsApp Chat Button",
      "Basic SEO Setup (Yoast/RankMath)",
      "Security Plugin Setup",
      "Speed Optimization (Basic)",
      "1 Revision Round",
      "1 Month Support",
    ],
    popular: false,
  },
  {
    name: "Growth (WordPress)",
    price: "₹19,999",
    desc: "Best for: Businesses that want a strong online presence",
    features: [
      "Everything in Starter +",
      "8–12 Pages Website",
      "Custom Design (Theme customization + branding)",
      "Blog Setup (SEO-friendly)",
      "Advanced Forms (Lead capture)",
      "Speed Optimization (Advanced)",
      "On-Page SEO Optimization",
      "Google Analytics + Search Console Setup",
      "Social Media Integration",
      "Basic UI Animations",
      "Backup Setup",
      "2 Revision Rounds",
      "2 Months Support",
    ],
    popular: true,
  },
  {
    name: "Premium (WordPress)",
    price: "₹39,999 – ₹69,999",
    desc: "Best for: Businesses that want leads, automation & scalability",
    features: [
      "Everything in Growth +",
      "Fully Custom WordPress Design (No template feel)",
      "Elementor / Gutenberg Advanced Customization",
      "Custom Landing Page (High Conversion)",
      "Lead Funnel Setup (Form → Thank You → Follow-up)",
      "CRM Integration (Lead Management)",
      "Email Automation (Auto replies)",
      "Payment Gateway Integration (Razorpay / Stripe)",
      "WooCommerce Setup (if required)",
      "Advanced Security Hardening",
      "Daily/Weekly Backup System",
      "Advanced Speed Optimization (Core Web Vitals)",
      "Role-Based Admin Access",
      "3 Revision Rounds",
      "3 Months Support + Maintenance",
      "Training Session (How to manage website)",
    ],
    popular: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-32 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
          Pricing
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Simple, Transparent Pricing
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name + i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className={`rounded-2xl p-8 relative flex flex-col h-full ${
              plan.popular ? "gradient-border glass glow-border" : "glass"
            }`}
          >
            {plan.popular && (
              <span
                className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
              >
                Most Popular
              </span>
            )}

            <h3 className="font-display text-xl font-semibold mb-1">
              {plan.name}
            </h3>

            <p className="text-muted-foreground text-sm mb-4">{plan.desc}</p>

            <div className="mb-6">
              <span className="font-display text-4xl font-bold">
                {plan.price}
              </span>
              <span className="text-muted-foreground text-sm">/project</span>
            </div>

            <ul className="space-y-3 mb-8 flex-1 overflow-y-auto pr-2 max-h-[320px]">
              {plan.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-sm text-foreground/80"
                >
                  <Check size={16} className="text-primary mt-1 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const section = document.getElementById("contact");
                if (section) {
                  section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className={`w-full py-3 rounded-xl font-semibold text-sm mt-auto ${
                plan.popular
                  ? "text-primary-foreground"
                  : "glass border border-border text-foreground"
              }`}
              style={
                plan.popular
                  ? { background: "var(--gradient-primary)" }
                  : undefined
              }
            >
              Get Started
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
