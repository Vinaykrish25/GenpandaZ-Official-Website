const Footer = () => (
  <footer className="border-t border-border py-12 bg-card">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <img 
            src="/Gen PandaZ logo.png" 
            alt="GenpandaZ" 
            className="h-40 w-auto mb-4" 
          />
          <p className="mt-3 text-sm text-muted-foreground max-w-sm leading-relaxed">
            A young, bold digital agency building brands through design, development, and data-driven marketing.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["About", "Services", "Portfolio", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-foreground transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Web Development", "Digital Marketing", "Automation", "Web Analytics", "Graphic & Poster Design"].map((s) => (
              <li key={s}><span>{s}</span></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} GenpandaZ. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
