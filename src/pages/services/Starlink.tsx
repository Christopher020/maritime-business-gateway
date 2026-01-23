import { ArrowLeft, Satellite, Zap, Wifi, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Starlink = () => {
  const features = [
    {
      icon: Zap,
      title: "High-Speed Internet",
      description: "Experience download speeds up to 220 Mbps with Starlink's advanced phased array antenna technology designed for maritime environments."
    },
    {
      icon: Satellite,
      title: "Easy Setup",
      description: "Flat, compact Starlink Maritime antenna with simple installation. Self-orienting design means no complex pointing or alignment required."
    },
    {
      icon: Wifi,
      title: "Reliable Connection",
      description: "Thousands of satellites ensure redundant coverage, automatically switching between satellites for uninterrupted connectivity."
    },
    {
      icon: Shield,
      title: "Built for Maritime",
      description: "IP56-rated hardware designed to withstand harsh marine conditions including salt spray, extreme temperatures, and high winds."
    }
  ];

  const specifications = [
    { label: "Download Speed", value: "Up to 220 Mbps" },
    { label: "Upload Speed", value: "Up to 25 Mbps" },
    { label: "Latency", value: "~25-50ms" },
    { label: "Coverage", value: "Coastal & Ocean" },
    { label: "Antenna Type", value: "Flat Phased Array" },
    { label: "Weather Rating", value: "IP56" }
  ];

  const useCases = [
    "Unlimited high-speed data for crew welfare and entertainment",
    "Business operations including cloud applications and email",
    "Video streaming and video calls with minimal buffering",
    "Remote work capabilities for crew and passengers",
    "Navigation updates and real-time weather data",
    "Remote vessel monitoring and diagnostics"
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
                <Satellite className="w-8 h-8 text-accent" />
              </div>
              <span className="text-accent font-heading font-semibold tracking-widest uppercase text-sm">
                LEO Satellite Internet
              </span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Starlink Maritime
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
              Starlink Maritime is a satellite communication service specifically designed for 
              maritime applications, offering high-speed, low-latency internet connectivity 
              anywhere on the water.
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
              Why Choose Starlink Maritime?
            </h2>
            <p className="text-muted-foreground text-lg">
              Revolutionary satellite technology bringing land-like connectivity to your vessel.
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

      {/* Specifications */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block font-heading font-semibold text-accent text-sm tracking-widest uppercase mb-4">
                Technical Specifications
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Purpose-Built for Ocean
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Starlink Maritime hardware is engineered specifically for the demanding 
                conditions at sea, with a compact form factor and exceptional performance.
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-3xl p-10 lg:p-16 shadow-medium text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Experience High-Speed Internet at Sea
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of vessels already connected with Starlink Maritime. 
              Get in touch to learn about installation and service plans.
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

export default Starlink;
