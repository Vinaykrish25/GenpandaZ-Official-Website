import ScrollReveal from "./ScrollReveal";
import { ExternalLink, School, Utensils, HardHat } from "lucide-react";

const projects = [
  { 
    title: "School Management", 
    category: "Web Application", 
    color: "from-blue-500 to-indigo-600",
    icon: School,
    link: "https://school-management-demo-eta.vercel.app/"
  },
  { 
    title: "Restaurant Booking", 
    category: "Booking System", 
    color: "from-orange-500 to-red-600",
    icon: Utensils,
    link: "https://restaurantbooking-8h7iu56.public.builtwithrocket.new/"
  },
  { 
    title: "Construction Company", 
    category: "Portfolio Website", 
    color: "from-yellow-600 to-orange-700",
    icon: HardHat,
    link: "https://constructionpro-ryvs519.public.builtwithrocket.new/"
  },
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A selection of projects that showcase our expertise.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 0.08}>
            <a 
              href={p.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block glass-card rounded-2xl overflow-hidden hover:scale-[1.03] transition-transform duration-300"
            >
              <div className={`h-48 bg-gradient-to-br ${p.color} flex flex-col items-center justify-center relative`}>
                <p.icon className="h-16 w-16 text-white mb-2" />
                <div className="absolute top-4 right-4 bg-white/20 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs font-medium text-primary uppercase tracking-wider">{p.category}</p>
                <h3 className="font-display text-lg font-semibold mt-1">{p.title}</h3>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
