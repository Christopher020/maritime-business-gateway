import { ArrowLeft, Settings, Network, Shield, Headphones, CheckCircle, ArrowRight, Server, Cloud, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ValueAddedServices = () => {
  const features = [
    {
      icon: Network,
      title: "Hybrid Network Management",
      description: "Seamlessly manage multiple connectivity solutions (VSAT, LEO, L-band) through a single platform with intelligent traffic routing."
    },
    {
      icon: Server,
      title: "IT Infrastructure",
      description: "Complete onboard IT infrastructure design, deployment, and management including servers, networking, and endpoint devices."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Maritime-specific cybersecurity solutions including threat detection, firewall management, and compliance with IMO guidelines."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical support from our Network Operations Center with remote monitoring and proactive issue resolution."
    }
  ];

  const services = [
    {
      icon: Cloud,
      title: "Cloud Connectivity",
      description: "Secure, optimized connections to major cloud platforms for fleet management, ERP systems, and business applications.",
      items: ["Microsoft 365 optimization", "Cloud backup solutions", "SaaS application acceleration"]
    },
    {
      icon: Lock,
      title: "Network Security",
      description: "Comprehensive cybersecurity solutions designed for the unique challenges of maritime environments.",
      items: ["Unified threat management", "VPN & encrypted communications", "IMO 2021 compliance support"]
    },
    {
      icon: Settings,
      title: "Managed Services",
      description: "End-to-end management of your vessel's IT and communications infrastructure.",
      items: ["24/7 NOC monitoring", "Remote diagnostics", "Proactive maintenance"]
    }
  ];

  const managedCapabilities = [
    "Multi-WAN failover and load balancing",
    "Bandwidth optimization and QoS policies",
    "Crew welfare management and access control",
    "Real-time vessel performance monitoring",
    "Automated reporting and analytics",
    "Remote configuration and updates",
    "Incident response and escalation",
    "Compliance documentation and auditing"
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
                <Settings className="w-8 h-8 text-accent" />
              </div>
              <span className="text-accent font-heading font-semibold tracking-widest uppercase text-sm">
                Managed IT Services
              </span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Value Added Services
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
              Managing your hybrid networks and delivering your fleet's onboard IT infrastructure. 
              Complete IT solutions for maritime operations, from network management to cybersecurity.
            </p>
            <Button variant="hero" size="lg">
              Request a Consultation
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
              Complete Maritime IT Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              Beyond connectivity – comprehensive IT services designed for the maritime industry.
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

      {/* Services Detail */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block font-heading font-semibold text-accent text-sm tracking-widest uppercase mb-4">
              Our Services
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive IT Management
            </h2>
            <p className="text-muted-foreground text-lg">
              Full-spectrum IT services tailored for maritime operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-soft border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-ocean-gradient flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Managed Capabilities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block font-heading font-semibold text-accent text-sm tracking-widest uppercase mb-4">
                Managed Capabilities
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your IT Partner at Sea
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our managed services platform provides complete visibility and control over your 
                fleet's IT infrastructure. From the Network Operations Center to the vessel, 
                we ensure your systems run optimally.
              </p>
              
              <Button variant="gold" size="lg">
                Schedule a Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="bg-ocean-gradient rounded-3xl p-10">
              <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-6">
                What We Manage
              </h3>
              <ul className="space-y-4">
                {managedCapabilities.map((capability, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-primary-foreground/90">{capability}</span>
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
              Optimize Your Maritime IT Operations
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let us handle your IT infrastructure so you can focus on your core business. 
              Contact us to learn how our value-added services can benefit your fleet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg">
                Get Started
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

export default ValueAddedServices;
