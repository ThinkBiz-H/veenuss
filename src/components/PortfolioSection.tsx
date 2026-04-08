import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "FinTrack Pro",
    category: "Web App",
    desc: "AI-powered financial dashboard for enterprise clients",
    image: "https://axcdn.prebuiltecom.com/images/home/fintrack.png",
  },
  {
    title: "MediConnect",
    category: "Mobile App",
    desc: "Telemedicine platform connecting patients with doctors globally",
    image: "https://cdn.dribbble.com/userupload/14925792/file/original-b4e4f6fd0cf94de032f8707038fcbb53.png?resize=752x&vertical=center",
  },
  {
    title: "EcoShop",
    category: "E-Commerce",
    desc: "Sustainable marketplace with carbon-neutral shipping integration",
    image: "https://magesolution.com/wp-content/uploads/2022/07/ecommerce-website-design-examples-1024x768.jpg",
  },
  {
    title: "LearnVerse",
    category: "EdTech",
    desc: "Immersive learning platform with AR/VR integration",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0VUtBWB9zQlIKhBL1jPsQXyHngTBKLNxC3g&s",
  },
  {
    title: "CloudSync",
    category: "SaaS",
    desc: "Enterprise file management with real-time collaboration",
    image: "https://global.synologydownload.com/download/Package/img/CloudSync/2.7.2-2714/cloudsync_1660141665_1.png",
  },
  {
    title: "FoodFleet",
    category: "Mobile App",
    desc: "On-demand food delivery with AI route optimization",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  },
];
const PortfolioSection = () => (
  <section id="portfolio" className="py-32 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
          Our Work
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Featured Projects
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass rounded-2xl overflow-hidden group cursor-pointer"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* 🔥 Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white text-sm flex items-center gap-2">
                  View Project <ExternalLink size={16} />
                </span>
              </div>
            </div>
            <div className="p-6">
              <span className="text-primary text-xs font-medium uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="font-display text-lg font-semibold mt-2 mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm">{project.desc}</p>
              <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                View Project <ExternalLink size={14} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
