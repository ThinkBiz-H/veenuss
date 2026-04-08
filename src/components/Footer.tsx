import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border pt-16 pb-8 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold gradient-text mb-4">
              VEENUSS GROWTH LAB
            </h2>

            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              We build modern, high-performing websites that help businesses
              grow, generate leads, and stand out in the digital world.
            </p>

            {/* 🔥 SOCIAL ICONS */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="p-2 rounded-lg glass hover:scale-110 transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg glass hover:scale-110 transition"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg glass hover:scale-110 transition"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg glass hover:scale-110 transition"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Home", "About", "Services", "Pricing", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-primary transition"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Website Development</li>
              <li>WordPress Websites</li>
              <li>Landing Pages</li>
              <li>SEO Optimization</li>
              <li>Automation Setup</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a
                href="mailto:veenussgrowthlab@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition"
              >
                <Mail size={16} /> veenussgrowthlab@gmail.com
              </a>

              <a
                href="tel:+991871388897"
                className="flex items-center gap-2 hover:text-primary transition"
              >
                <Phone size={16} /> +91 987-138-8897
              </a>

              <a
                href="https://www.google.com/maps?q=San+Francisco,+CA"
                target="_blank"
                className="flex items-center gap-2 hover:text-primary transition"
              >
                <MapPin size={16} /> San Francisco, CA
              </a>
            </div>
          </div>
        </div>

        {/* 🔥 BOTTOM BAR */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 VEENUSS GROWTH LAB. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:text-primary transition">
              Instagram
            </a>
            <a href="#" className="hover:text-primary transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-primary transition">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
