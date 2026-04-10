import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  // ================= WEBSITE PLANS =================
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
      "Advanced Contact Forms",
      "WhatsApp + Call Button (Sticky)",
      "Basic On-Page SEO Optimization",
      "Google Analytics + Search Console Setup",
      "Social Media Feed Integration",
      "Basic Animations",
      "Lead Inquiry Dashboard",
      "2 Revision Rounds",
      "2 Months Support",
    ],
    popular: true,
  },

  // ================= DIGITAL MARKETING =================
  {
    name: "DM Growth",
    price: "₹25,000 / Month",
    desc: "Brand visibility + social media growth + basic leads",
    features: [
      "5 Social Media Posts",
      "Professional captions + hashtag strategy",
      "Basic SEO (Meta + Image Optimization)",
      "1 Blog Writing",
      "Online Reputation Management",
      "5 Targeted Leads",
    ],
    popular: false,
  },
  {
    name: "DM Advanced Growth",
    price: "₹35,000 / Month",
    desc: "Strong brand visibility + better lead generation",
    features: [
      "15 Posts + 4 Reels",
      "Social media calendar planning",
      "Keyword research + On-page SEO",
      "SEO-friendly blog content",
      "20 Targeted Leads",
      "WhatsApp Marketing (1 Campaign)",
      "Monthly Performance Report",
    ],
    popular: true,
  },
  {
    name: "DM Premium",
    price: "₹45,000 / Month",
    desc: "Full-scale marketing + branding + high leads",
    features: [
      "20 Posts + 6 Reels",
      "Advanced SEO + competitor analysis",
      "4 SEO Blogs",
      "Influencer Collaboration",
      "Up to 50 Leads",
      "WhatsApp + Email Marketing",
      "GMB Optimization",
      "Analytics + Monthly Report",
    ],
    popular: true,
  },

  // ================= APP DEVELOPMENT =================
  {
    name: "Starter App",
    price: "₹35,000 – ₹70,000",
    desc: "Best for: Small businesses / MVP",
    features: [
      "Android + iOS App",
      "6–10 Screens",
      "Login/Signup + OTP",
      "Push Notifications",
      "Basic Admin Panel",
      "Google Maps Integration",
      "Basic Analytics",
      "1 Month Support",
    ],
    popular: false,
  },
  {
    name: "Growth App",
    price: "₹70,000 – ₹1,80,000",
    desc: "Best for: Startups & growing businesses",
    features: [
      "10–18 Screens",
      "Custom UI/UX",
      "Payment Gateway",
      "Dynamic Admin Panel",
      "In-App Chat",
      "Referral System",
      "Multi-language Support",
      "3 Months Support",
    ],
    popular: true,
  },
  {
    name: "Pro App",
    price: "₹1,80,000 – ₹3,50,000",
    desc: "Best for: Scaling startups",
    features: [
      "20+ Screens",
      "Advanced UI/UX",
      "Live Tracking",
      "Subscription System",
      "CRM Integration",
      "AI Chatbot",
      "Advanced Analytics",
      "6 Months Support",
    ],
    popular: false,
  },

  // ================= WORDPRESS =================
  {
    name: "Starter (WordPress)",
    price: "₹9,999",
    desc: "Best for: Small businesses",
    features: [
      "4–6 Pages Website",
      "Premium Theme Setup",
      "Mobile Responsive",
      "WhatsApp Chat",
      "Basic SEO Setup",
      "1 Month Support",
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
