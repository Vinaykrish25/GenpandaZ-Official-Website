import ScrollReveal from "./ScrollReveal";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah Chen", role: "CEO, TechVentures", text: "GenPandaZ transformed our online presence completely. Their data-driven approach delivered a 3x increase in conversions." },
  { name: "Marcus Johnson", role: "Founder, GrowFast", text: "The team is incredibly talented and responsive. Our new website exceeded all expectations in design and performance." },
  { name: "Emily Rodriguez", role: "Marketing Director", text: "Their SEO and marketing strategies helped us dominate search rankings. Truly a game-changer for our business." },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 0.1}>
            <div className="glass-card rounded-2xl p-6 h-full">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed italic">"{t.text}"</p>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
