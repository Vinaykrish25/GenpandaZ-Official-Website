import ScrollReveal from "./ScrollReveal";
import { CheckCircle } from "lucide-react";

const reasons = [
  "Young & Agile Team",
  "Data-Driven Decisions",
  "Transparent Communication",
  "Fast Turnaround Times",
  "Modern Tech Stack",
  "Dedicated Support",
];

const WhyChooseUsSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose GenpandaZ?</h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            We don't just build websites — we build growth engines. Our team combines creativity, strategy, and technology to deliver results you can measure.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r) => (
              <div key={r} className="flex items-center gap-3 glass-card rounded-xl p-4">
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span className="font-medium text-sm">{r}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
