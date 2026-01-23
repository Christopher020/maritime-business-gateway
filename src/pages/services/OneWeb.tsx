import { ArrowLeft, Globe, Zap, Signal, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OneWeb = () => {
  const features = [
    {
      icon: Zap,
      title: "Low Latency",
      description: "Experience near-real-time communications with latency as low as 32ms, enabling video conferencing, VoIP, and real-time applications at sea."
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "OneWeb's constellation of 648 satellites provides truly global coverage, including polar regions where traditional GEO satellites cannot reach."
    },
    {
      icon: Signal,
      title: "High Throughput",
      description: "Deliver enterprise-grade bandwidth with speeds up to 195 Mbps download, ensuring your crew and operations stay connected."
    },
    {
      icon: MapPin,
      title: "Seamless Handover",
      description: "Automatic satellite-to-satellite handover ensures uninterrupted connectivity as your vessel moves across the globe."
    }
  ];

  const specifications = [
    { label: "Download Speed", value: "Up to 195 Mbps" },
    { label: "Upload Speed", value: "Up to 32 Mbps" },
    { label: "Latency", value: "~32ms" },
    { label: "Coverage", value: "Global including polar" },
    { label: "Satellite Altitude", value: "1,200 km (LEO)" },
    { label: "Constellation Size", value: "648 satellites" }
  ];

  const useCases = [
    "Real-time vessel monitoring and fleet management",
    "High-definition video conferencing for remote meetings",
    "Crew welfare with streaming and social media access",
    "Telemedicine consultations with shore-based specialists",
    "IoT sensor data transmission for predictive maintenance",
    "Electronic chart updates and weather routing"
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
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <span className="text-accent font-heading font-semibold tracking-widest uppercase text-sm">
                LEO Satellite Internet
              </span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              OneWeb Maritime
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
              With OneWeb, we bring fibre-like speeds to maritime connectivity. Our Low Earth Orbit 
              satellite network delivers unprecedented low latency connections, enabling real-time 
              applications and seamless communication at sea.
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
              Why Choose OneWeb?
            </h2>
            <p className="text-muted-foreground text-lg">
              Next-generation LEO satellite technology designed for the demands of modern maritime operations.
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
                Enterprise-Grade Performance
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                OneWeb's advanced LEO constellation delivers consistent, high-speed connectivity 
                that rivals terrestrial broadband, revolutionizing what's possible at sea.
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
              Ready to Upgrade Your Maritime Connectivity?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Contact our team to learn how OneWeb can transform your vessel's communications 
              and unlock new possibilities for your operations.
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

export default OneWeb;
