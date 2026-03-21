import ScrollReveal from "./ScrollReveal";
import aboutImg from "../assets/about/about-us.png";

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Who We <span className="gradient-text">Are</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <ScrollReveal>
          <div className="flex justify-center lg:justify-end">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group max-w-4xl">
              <img 
                src={aboutImg} 
                alt="GenpandaZ Team collaborating" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-xs font-medium">Fueled by curiosity, driven by technology.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="space-y-6">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                GenpandaZ is a technology startup driven by a group of young, motivated technologists who believe the future of business is powered by intelligent digital systems. We simplify the complex, removing friction through software development, automation engineering, and data intelligence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team combines deep expertise in modern tech stacks with a bold, experimental mindset to design digital products that deliver real value. Focused on curiosity and practical innovation, we don't just solve today's challenges—we build the intelligent platforms and automated systems that move industries forward and help businesses thrive in an ever-changing digital landscape.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through continuous learning and innovation, we make advanced technology accessible and impactful for businesses of all sizes, ensuring success is built together as a team.
              </p>
            </div>
            <div className="pt-4 border-t border-border">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-primary font-bold text-2xl">Practical</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-tight">Innovation</p>
                </div>
                <div>
                  <p className="text-primary font-bold text-2xl">Collective</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-tight">Growth</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AboutSection;
