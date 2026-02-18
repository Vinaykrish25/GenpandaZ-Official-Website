import ScrollReveal from "./ScrollReveal";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "E-Commerce Platform", category: "Web Development", color: "from-primary to-accent" },
  { title: "Brand Identity Design", category: "Graphic Design", color: "from-accent to-primary" },
  { title: "SEO Campaign", category: "Digital Marketing", color: "from-primary/80 to-accent/80" },
  { title: "SaaS Dashboard", category: "Web Development", color: "from-accent/80 to-primary" },
  { title: "Social Media Strategy", category: "Marketing", color: "from-primary to-accent/70" },
  { title: "Video Ad Campaign", category: "Video Editing", color: "from-accent/70 to-primary/80" },
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
            <div className="group glass-card rounded-2xl overflow-hidden hover:scale-[1.03] transition-transform duration-300">
              <div className={`h-48 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                <ExternalLink className="h-8 w-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium text-primary uppercase tracking-wider">{p.category}</p>
                <h3 className="font-display text-lg font-semibold mt-1">{p.title}</h3>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
