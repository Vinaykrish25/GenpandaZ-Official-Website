import ScrollReveal from "./ScrollReveal";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  { title: "10 SEO Strategies That Actually Work in 2025", date: "Jan 15, 2025", tag: "SEO" },
  { title: "Why Every Business Needs a Fast Website", date: "Feb 3, 2025", tag: "Development" },
  { title: "Social Media Trends to Watch This Year", date: "Feb 10, 2025", tag: "Marketing" },
];

const BlogSection = () => (
  <section id="blog" className="py-24">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">Stay ahead with our expert articles and resources.</p>
        </div>
      </ScrollReveal>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 0.1}>
            <article className="glass-card rounded-2xl p-6 h-full flex flex-col hover:scale-[1.03] transition-transform duration-300">
              <span className="inline-block text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 w-fit">{p.tag}</span>
              <h3 className="font-display text-lg font-semibold mt-4 flex-1">{p.title}</h3>
              <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{p.date}</span>
                <span className="flex items-center gap-1 text-primary font-medium">Read <ArrowRight className="h-3.5 w-3.5" /></span>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
