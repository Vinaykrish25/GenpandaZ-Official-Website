import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/mvzbqaqr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({ title: "Message sent!", description: "We'll get back to you shortly." });
        (e.target as HTMLFormElement).reset();
      } else {
        const errorData = await response.json();
        toast({ 
          title: "Error", 
          description: errorData.error || "Failed to send message. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({ 
        title: "Error", 
        description: "Something went wrong. Please check your connection.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Let's <span className="gradient-text">Talk</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">Ready to start your project? Reach out today.</p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input name="name" placeholder="Your Name" required maxLength={100} className="bg-card" />
              <Input name="email" type="email" placeholder="Your Email" required maxLength={255} className="bg-card" />
              <Input name="subject" placeholder="Subject" required maxLength={200} className="bg-card" />
              <Textarea name="message" placeholder="Your Message" required maxLength={1000} rows={5} className="bg-card" />
              <Button type="submit" variant="gradient" size="lg" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <p className="text-muted-foreground text-sm">genpandaztech@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <p className="text-muted-foreground text-sm">+91 98942 75856</p>
                  <p className="text-muted-foreground text-sm">+91 86105 75439</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold">Visit Us</h4>
                  <p className="text-muted-foreground text-sm">Remote-first, India</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
