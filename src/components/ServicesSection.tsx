import ScrollReveal from "./ScrollReveal";
import {
  Globe, Wrench, Megaphone, Video, Palette, BarChart3, Bot,
} from "lucide-react";

const services = [
  { icon: Globe, title: "Website Development", desc: "E-commerce, SaaS, and portfolio sites built with modern tech stacks for speed and scalability." },
  { icon: Wrench, title: "Website Maintenance", desc: "Ongoing support, updates, and performance monitoring to keep your site running flawlessly." },
  { icon: Megaphone, title: "Digital Marketing", desc: "SEO, social media marketing, and paid campaigns that drive real, measurable results." },
  { icon: Video, title: "Video Editing", desc: "Professional video editing for ads, reels, and brand storytelling that captivates audiences." },
  { icon: Palette, title: "Graphic & Poster Design", desc: "Eye-catching visuals, brand identity, and marketing materials that stand out." },
  { icon: BarChart3, title: "Website Analytics", desc: "Data-driven insights and reporting to understand user behavior and optimize conversions." },
  { icon: Bot, title: "Automation", desc: "Email, call, and form automation to streamline workflows and boost efficiency." },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            End-to-end digital solutions tailored to grow your business.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 0.08}>
            <div className="glass-card rounded-2xl p-6 h-full group hover:scale-[1.03] transition-transform duration-300">
              <div className="h-12 w-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
