import { ArrowRight, Satellite, Ship, Shield } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-maritime.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Maritime vessel at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
      </div>

      {/* Animated Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl animate-float" />
      <div className="absolute bottom-40 left-10 w-48 h-48 rounded-full bg-ocean-light/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Satellite className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">
              Maritime & Oil & Gas Satellite Solutions
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Secure Satellite
            <span className="block text-gradient-gold">Communications</span>
            For Maritime Excellence
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Greig Technologies delivers enterprise-class satellite connectivity for oil & gas exploration 
            and maritime operations across Sub-Saharan Africa with worldwide coverage via Ku, C, and Ka-Band options.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Explore Our Services
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Contact Us
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Ship className="w-5 h-5 text-accent" />
                <span className="font-heading text-3xl font-bold text-primary-foreground">500+</span>
              </div>
              <p className="text-sm text-primary-foreground/60">Vessels Connected</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Satellite className="w-5 h-5 text-accent" />
                <span className="font-heading text-3xl font-bold text-primary-foreground">24/7</span>
              </div>
              <p className="text-sm text-primary-foreground/60">Global Coverage</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-accent" />
                <span className="font-heading text-3xl font-bold text-primary-foreground">99.9%</span>
              </div>
              <p className="text-sm text-primary-foreground/60">Uptime Guarantee</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex justify-center pt-2">
          <div className="w-1 h-2 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
