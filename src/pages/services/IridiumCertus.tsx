import { ArrowLeft, Radio, Globe, Shield, Anchor, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const IridiumCertus = () => {
  const features = [
    {
      icon: Globe,
      title: "True Global Coverage",
      description: "The only satellite network providing pole-to-pole coverage. Stay connected anywhere on Earth, including Arctic and Antarctic waters."
    },
    {
      icon: Radio,
      title: "L-Band Technology",
      description: "Weather-resistant L-band frequency provides reliable connectivity even in severe weather conditions where other systems fail."
    },
    {
      icon: Shield,
      title: "Reliable Backup",
      description: "Perfect as a primary system for smaller vessels or as a reliable backup for VSAT-equipped ships, ensuring always-on connectivity."
    },
    {
      icon: Anchor,
      title: "Compact & Rugged",
      description: "Small form-factor antenna easily installs on any vessel type, from yachts to offshore supply vessels and icebreakers."
    }
  ];

  const specifications = [
    { label: "Download Speed", value: "Up to 704 Kbps" },
    { label: "Upload Speed", value: "Up to 352 Kbps" },
    { label: "Latency", value: "~750ms (LEO)" },
    { label: "Coverage", value: "100% Global" },
    { label: "Frequency Band", value: "L-Band" },
    { label: "Constellation", value: "66 satellites" }
  ];

  const useCases = [
    "GMDSS-approved maritime safety communications",
    "Backup connectivity for primary VSAT systems",
    "Polar route navigation and operations",
    "Remote vessel tracking and monitoring",
    "Emergency communication capabilities",
    "IoT and M2M data applications"
  ];

  const certusModels = [
    {
      name: "Certus 100",
      speed: "88 Kbps",
      description: "Compact solution for basic connectivity and IoT"
    },
    {
      name: "Certus 200",
      speed: "176 Kbps",
      description: "Mid-tier solution for smaller vessels"
    },
    {
      name: "Certus 350",
      speed: "352 Kbps",
      description: "Enhanced connectivity for commercial vessels"
    },
    {
      name: "Certus 700",
      speed: "704 Kbps",
      description: "Maximum performance for demanding operations"
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
                <Radio className="w-8 h-8 text-accent" />
              </div>
              <span className="text-accent font-heading font-semibold tracking-widest uppercase text-sm">
                L-Band Satellite
              </span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Iridium Certus
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
              With Iridium Certus onboard, your vessels benefit from ocean-wide L-band connectivity 
              designed for maritime operations worldwide. True pole-to-pole coverage where no other 
              satellite network can reach.
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
              Why Choose Iridium Certus?
            </h2>
            <p className="text-muted-foreground text-lg">
              The world's only truly global satellite network, designed for reliability when it matters most.
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

      {/* Certus Models */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block font-heading font-semibold text-accent text-sm tracking-widest uppercase mb-4">
              Service Tiers
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Iridium Certus Models
            </h2>
            <p className="text-muted-foreground text-lg">
              Scalable solutions from IoT connectivity to high-performance broadband.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certusModels.map((model, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:border-accent/20 transition-all"
              >
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {model.name}
                </h3>
                <p className="text-2xl font-heading font-bold text-accent mb-3">
                  {model.speed}
                </p>
                <p className="text-muted-foreground text-sm">
                  {model.description}
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
                Global L-Band Network
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Iridium's unique cross-linked satellite constellation provides the only 
                truly global coverage, with weather-resistant L-band technology that 
                maintains connectivity in conditions that disable other systems.
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
              Stay Connected Anywhere on Earth
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Contact us to learn how Iridium Certus can provide reliable backup 
              connectivity or serve as your primary communication system.
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

export default IridiumCertus;
