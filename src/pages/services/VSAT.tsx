import { ArrowLeft, Wifi, Globe, Shield, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const VSAT = () => {
  const features = [
    {
      icon: Wifi,
      title: "Unlimited Usage",
      description: "No data caps or throttling. Enjoy truly unlimited high-speed satellite connectivity for all your maritime operations."
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Comprehensive coverage across all major shipping routes with seamless beam switching as your vessel travels."
    },
    {
      icon: Shield,
      title: "Enterprise SLA",
      description: "Service Level Agreements guaranteeing uptime, bandwidth, and priority support for mission-critical operations."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support from our Network Operations Center with remote diagnostics and troubleshooting."
    }
  ];

  const specifications = [
    { label: "Download Speed", value: "Up to 20 Mbps" },
    { label: "Upload Speed", value: "Up to 5 Mbps" },
    { label: "Latency", value: "~600ms (GEO)" },
    { label: "Coverage", value: "Global Maritime" },
    { label: "Antenna Sizes", value: "60cm - 2.4m" },
    { label: "Frequency Band", value: "Ku-Band / C-Band" }
  ];

  const plans = [
    {
      name: "Essential",
      description: "For vessels requiring reliable basic connectivity",
      features: ["Up to 4 Mbps download", "Unlimited data", "Email & basic web", "Standard support"]
    },
    {
      name: "Professional",
      description: "For commercial vessels with operational demands",
      features: ["Up to 10 Mbps download", "Unlimited data", "VoIP ready", "Priority support", "Crew welfare packages"]
    },
    {
      name: "Enterprise",
      description: "For large vessels requiring maximum performance",
      features: ["Up to 20 Mbps download", "Unlimited data", "Dedicated bandwidth", "24/7 premium support", "Custom SLA", "Multi-WAN failover"]
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
                <Wifi className="w-8 h-8 text-accent" />
              </div>
              <span className="text-accent font-heading font-semibold tracking-widest uppercase text-sm">
                Satellite Broadband
              </span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Maritime VSAT
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
              Experience unlimited usage and reliable Maritime VSAT internet with Greig Technologies. 
              Our High Speed VSAT ensures seamless connectivity for your fleet with enterprise-grade 
              service level agreements.
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
              Why Choose Maritime VSAT?
            </h2>
            <p className="text-muted-foreground text-lg">
              Proven, reliable satellite technology trusted by commercial fleets worldwide.
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

      {/* Plans */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block font-heading font-semibold text-accent text-sm tracking-widest uppercase mb-4">
              Service Plans
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your VSAT Package
            </h2>
            <p className="text-muted-foreground text-lg">
              Flexible plans tailored to your vessel's operational requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`bg-card rounded-2xl p-8 shadow-soft border ${
                  index === 1 ? 'border-accent ring-2 ring-accent/20' : 'border-border'
                }`}
              >
                {index === 1 && (
                  <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={index === 1 ? "gold" : "outline"} 
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-ocean-gradient rounded-3xl p-10">
              <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-6">
                Technical Specifications
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="bg-primary-foreground/10 rounded-xl p-4 backdrop-blur-sm">
                    <p className="text-sm text-primary-foreground/70 mb-1">{spec.label}</p>
                    <p className="font-heading font-bold text-primary-foreground">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <span className="inline-block font-heading font-semibold text-accent text-sm tracking-widest uppercase mb-4">
                Enterprise Solutions
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Designed for Commercial Maritime
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Our VSAT solutions are built for the demanding requirements of commercial shipping, 
                offshore operations, and passenger vessels. With multiple antenna options and 
                customizable service plans, we can tailor a solution for any fleet.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From small workboats to large container vessels, our VSAT services scale to 
                meet your needs while providing consistent, reliable connectivity worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-3xl p-10 lg:p-16 shadow-medium text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Connect Your Fleet Today
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Get in touch to discuss your fleet's connectivity needs and discover 
              how our VSAT solutions can transform your operations.
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

export default VSAT;
