import { ArrowRight, Satellite, Ship, Shield } from "lucide-react";
import { motion } from "framer-motion";
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
      <motion.div 
        className="absolute top-20 right-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-40 left-10 w-48 h-48 rounded-full bg-ocean-light/10 blur-3xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-8"
          >
            <Satellite className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">
              Maritime & Oil & Gas Satellite Solutions
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Secure Satellite
            <span className="block text-gradient-gold">Communications</span>
            For Maritime Excellence
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-10"
          >
            Greig Technologies delivers enterprise-class satellite connectivity for oil & gas exploration 
            and maritime operations across Sub-Saharan Africa with worldwide coverage via Ku, C, and Ka-Band options.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button variant="hero" size="xl">
              Explore Our Services
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Contact Us
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20"
          >
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
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex justify-center pt-2">
          <motion.div 
            className="w-1 h-2 bg-accent rounded-full"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
