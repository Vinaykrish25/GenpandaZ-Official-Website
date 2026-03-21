import ScrollReveal from "./ScrollReveal";
import { Mail, Layout, ExternalLink } from "lucide-react";
import mailproImg from "../assets/products/mailpro.png";

const products = [
  {
    title: "MailPro",
    description: "AI-powered email generator and sender via Gmail.",
    category: "AI Tool",
    image: mailproImg,
    icon: Mail,
    link: "https://genmail-pro-ai.vercel.app/",
    status: "Active"
  },
  {
    title: "Portfolio Generator",
    description: "Generate professional portfolios tailored to your needs.",
    category: "Builder",
    color: "from-cyan-500 to-blue-600",
    icon: Layout,
    link: "#",
    status: "Coming Soon"
  }
];

const ProductsSection = () => (
  <section id="products" className="py-12 bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Our <span className="gradient-text">Products</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Innovative tools and solutions built to enhance your productivity.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {products.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 0.1}>
            <div className="group relative glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300">
              <div className={`h-56 flex items-center justify-center relative overflow-hidden ${!p.image ? `bg-gradient-to-br ${p.color}` : ''}`}>
                {p.image ? (
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <p.icon className="h-16 w-16 text-white relative z-10" />
                )}
                
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                   <div className="bg-white/20 p-3 rounded-full backdrop-blur-md">
                    <p.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {p.status === "Active" ? (
                   <a 
                   href={p.link} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="absolute top-4 right-4 bg-white/20 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity z-20"
                 >
                   <ExternalLink className="h-5 w-5 text-white" />
                 </a>
                ) : (
                  <span className="absolute top-4 right-4 bg-primary/20 text-primary-foreground text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter backdrop-blur-md border border-primary/30 z-20">
                    {p.status}
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-xs font-medium text-primary uppercase tracking-wider">{p.category}</p>
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {p.description}
                </p>
                {p.status === "Active" && (
                   <a 
                   href={p.link} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:underline group/link"
                 >
                   Check it out
                   <ExternalLink className="ml-1 h-3 w-3 transition-transform group-hover/link:translate-x-0.5" />
                 </a>
                )}
              </div>
              {p.status === "Coming Soon" && (
                <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px] pointer-events-none flex items-center justify-center z-30">
                  <span className="bg-primary/90 text-primary-foreground px-4 py-1 rounded-full font-bold text-sm transform -rotate-12 shadow-xl">
                    Coming Soon
                  </span>
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
