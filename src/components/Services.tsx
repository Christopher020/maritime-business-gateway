import { Satellite, Wifi, Globe, Radio, Ship, Settings, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import navigationImage from "@/assets/navigation-bridge.jpg";

const services = [
  {
    icon: Globe,
    title: "OneWeb",
    description:
      "With OneWeb we bring fibre-like speeds to maritime connectivity. Low latency connection enabling real-time applications and seamless communication at sea.",
    features: ["Low Latency", "Global Coverage", "High-Speed"],
  },
  {
    icon: Satellite,
    title: "Starlink Maritime",
    description:
      "Starlink Maritime is a satellite communication service specifically designed for maritime applications offering high-speed, low-latency internet.",
    features: ["High-Speed Internet", "Easy Setup", "Reliable"],
  },
  {
    icon: Wifi,
    title: "Maritime VSAT",
    description:
      "Experience unlimited usage and reliable Maritime VSAT internet with Greig Technologies. Our High Speed VSAT ensures seamless connectivity for your fleet.",
    features: ["Unlimited Usage", "Enterprise SLA", "24/7 Support"],
  },
  {
    icon: Radio,
    title: "Iridium Certus",
    description:
      "With Iridium Certus onboard, your vessels benefit from oceanwide L-band connectivity designed for maritime operations worldwide.",
    features: ["L-Band", "Global Reach", "Reliable Backup"],
  },
  {
    icon: Ship,
    title: "Fleet Broadband",
    description:
      "Seamless and flawless connectivity. Inmarsat Fleet Broadband provides backup service for maritime VSAT, ensuring you stay connected.",
    features: ["Backup Service", "Inmarsat Network", "Reliable"],
  },
  {
    icon: Settings,
    title: "Value Added Services",
    description:
      "Managing your hybrid networks and delivering your fleet's onboard IT infrastructure. Complete IT solutions for maritime operations.",
    features: ["IT Management", "Hybrid Networks", "Full Support"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-heading font-semibold text-accent text-sm tracking-widest uppercase mb-4">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Connectivity Solutions
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            Empower your connectivity with our unparalleled service, delivering seamless solutions 
            that cater to your needs, ensuring reliability, speed, and a superior user experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-accent/20"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-ocean-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium bg-accent/10 text-accent px-3 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Feature Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-ocean-gradient">
          <div className="absolute inset-0">
            <img
              src={navigationImage}
              alt="Ship Navigation Bridge"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-10 lg:p-16 items-center">
            <div>
              <h3 className="font-heading text-2xl md:text-4xl font-bold text-primary-foreground mb-6">
                Navigation & Security Solutions
              </h3>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                Our ERP systems can collect and send more information between ship and shore 
                in real-time to provide valuable insight into operations. Complete visibility 
                and control for your maritime fleet.
              </p>
              <Button variant="hero" size="lg">
                Request A Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "100%", label: "Real-time Data" },
                { number: "50+", label: "Countries Covered" },
                { number: "1000+", label: "Sites Connected" },
                { number: "24/7", label: "Technical Support" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-primary-foreground/10 rounded-2xl backdrop-blur-sm">
                  <p className="font-heading text-3xl md:text-4xl font-bold text-accent mb-2">
                    {stat.number}
                  </p>
                  <p className="text-sm text-primary-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
