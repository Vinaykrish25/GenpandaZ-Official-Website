import ScrollReveal from "./ScrollReveal";
import { Target, Zap, TrendingUp } from "lucide-react";

const stats = [
  { icon: Target, label: "Projects Delivered", value: "50+" },
  { icon: Zap, label: "Happy Clients", value: "30+" },
  { icon: TrendingUp, label: "Growth Rate", value: "200%" },
];

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Who We <span className="gradient-text">Are</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            GenpandaZ is a young, data-driven digital agency passionate about crafting exceptional digital experiences. We combine creativity with analytics to deliver solutions that look stunning and perform even better.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((s, i) => (
          <ScrollReveal key={s.label} delay={i * 0.1}>
            <div className="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
              <s.icon className="h-10 w-10 mx-auto text-primary mb-4" />
              <p className="font-display text-4xl font-bold gradient-text">{s.value}</p>
              <p className="mt-2 text-muted-foreground">{s.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
