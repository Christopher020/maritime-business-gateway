import { ArrowLeft, Ship, Globe, Shield, Headphones, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FleetBroadband = () => {
  const features = [
    {
      icon: Shield,
      title: "Reliable Backup",
      description: "Inmarsat Fleet Broadband provides essential backup service for maritime VSAT, ensuring you stay connected when primary systems fail."
    },
    {
      icon: Globe,
      title: "Inmarsat Network",
      description: "Backed by Inmarsat's proven global network with decades of maritime satellite communication expertise."
    },
    {
      icon: Ship,
      title: "Seamless Connectivity",
      description: "Automatic failover from VSAT to Fleet Broadband ensures your operations never lose connectivity."
    },
    {
      icon: Headphones,
      title: "Voice & Data",
      description: "Simultaneous voice and data services with prioritized bandwidth for critical communications."
    }
  ];

  const specifications = [
    { label: "Download Speed", value: "Up to 432 Kbps" },
    { label: "Upload Speed", value: "Up to 432 Kbps" },
    { label: "Coverage", value: "Global Maritime" },
    { label: "Frequency Band", value: "L-Band" },
    { label: "Terminal Types", value: "FB150, FB250, FB500" },
    { label: "Voice Channels", value: "Up to 9 simultaneous" }
  ];

  const useCases = [
    "GMDSS distress and safety communications",
    "Primary backup for VSAT connectivity",
    "Voice calls to shore and other vessels",
    "Crew calling and welfare services",
    "Fleet management and reporting",
    "Chart and weather updates"
  ];

  const terminals = [
    {
      name: "Fleet Broadband 150",
      speed: "Up to 150 Kbps",
      voice: "1 voice channel",
      description: "Compact solution for smaller vessels and yachts"
    },
    {
      name: "Fleet Broadband 250",
      speed: "Up to 284 Kbps",
      voice: "2 voice channels",
      description: "Mid-range solution for commercial vessels"
    },
    {
      name: "Fleet Broadband 500",
      speed: "Up to 432 Kbps",
      voice: "9 voice channels",
      description: "High-performance solution for large vessels"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-ocean-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            to="/#services" 
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center">
                <Ship className="w-8 h-8 text-accent" />
              </div>
              <span className="text-accent font-heading font-semibold tracking-widest uppercase text-sm">
                Inmarsat L-Band
              </span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Fleet Broadband
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
              Seamless and flawless connectivity. Inmarsat Fleet Broadband provides reliable 
              backup service for maritime VSAT, ensuring you stay connected even when your 
              primary systems are unavailable.
            </p>
            <Button variant="hero" size="lg">
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Fleet Broadband?
            </h2>
            <p className="text-muted-foreground text-lg">
              Proven Inmarsat technology delivering reliable connectivity when you need it most.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border hover:border-accent/20"
              >
                <div className="w-14 h-14 rounded-xl bg-ocean-gradient flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminals */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block font-heading font-semibold text-accent text-sm tracking-widest uppercase mb-4">
              Terminal Options
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fleet Broadband Terminals
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose the right terminal for your vessel's size and operational requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {terminals.map((terminal, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:border-accent/20 transition-all"
              >
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  {terminal.name}
                </h3>
                <div className="space-y-2 mb-4">
                  <p className="text-accent font-heading font-bold">
                    {terminal.speed}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {terminal.voice}
                  </p>
                </div>
                <p className="text-muted-foreground">
                  {terminal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block font-heading font-semibold text-accent text-sm tracking-widest uppercase mb-4">
                Technical Specifications
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Inmarsat Quality & Reliability
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Fleet Broadband leverages Inmarsat's proven I-4 satellite constellation, 
                delivering consistent connectivity across global shipping lanes with 
                weather-resistant L-band technology.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="bg-card rounded-xl p-4 shadow-soft">
                    <p className="text-sm text-muted-foreground mb-1">{spec.label}</p>
                    <p className="font-heading font-bold text-foreground">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-ocean-gradient rounded-3xl p-10">
              <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-6">
                Use Cases
              </h3>
              <ul className="space-y-4">
                {useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-primary-foreground/90">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-3xl p-10 lg:p-16 shadow-medium text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ensure Your Fleet Stays Connected
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Contact us to add Fleet Broadband backup to your existing VSAT solution 
              or as a standalone connectivity option for your vessels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg">
                Get a Quote
              </Button>
              <Link to="/#contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FleetBroadband;
