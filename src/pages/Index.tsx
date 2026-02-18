import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import PortfolioSection from "@/components/PortfolioSection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="scroll-smooth">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <WhyChooseUsSection />
    <PortfolioSection />
    {/* <BlogSection /> */}
    <TestimonialsSection />
    <ContactSection />
    <Footer />
  </main>
);

export default Index;
