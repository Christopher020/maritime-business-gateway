import { Target, Eye, Compass, CheckCircle2 } from "lucide-react";
import satelliteImage from "@/assets/satellite-equipment.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "We provide innovative business and telecom solutions through consulting, integration, enhancing performance, and meeting requirements with independent, value-added services for optimal results.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To become the leading satellite communication solutions and services firm that empowers businesses in Sub-Saharan Africa to meet and exceed their clients' expectations.",
    },
    {
      icon: Compass,
      title: "Our Plan",
      description:
        "To deliver global satellite solutions for oil and gas. Ku, C, and Ka-Band options with enterprise SLA's and custom QoS ensure reliable communication tailored to your business needs.",
    },
  ];

  const highlights = [
    "Enterprise-class SLA's with custom Quality of Service",
    "Worldwide coverage via Ku, C, and Ka-Band satellites",
    "Point-to-point SCPC links to Mesh networks",
    "Single-hop access between multiple remote sites",
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-heading font-semibold text-accent text-sm tracking-widest uppercase mb-4">
            About Us
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Powering Maritime Connectivity
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            Greig Technologies Limited delivers a complete range of satellite communications 
            solutions for the oil and gas industry – for exploration and production sites.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative animate-fade-in-left">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src={satelliteImage}
                alt="Maritime VSAT Equipment"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-card rounded-xl p-6 shadow-strong max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground">15+ Years</p>
                  <p className="text-sm text-muted-foreground">Industry Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-right">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              Enterprise-Grade Satellite Solutions for Maritime Operations
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We provide secure Oil & Gas satellite communications – from point-to-point SCPC links 
              to Mesh networks delivering single-hop access between multiple remote sites. Our satellite 
              services feature virtually worldwide coverage via Ku, C, and Ka-Band options.
            </p>
            
            {/* Highlights */}
            <ul className="space-y-4 mb-8">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Values Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <value.icon className="w-7 h-7 text-accent" />
              </div>
              <h4 className="font-heading text-xl font-bold text-foreground mb-4">
                {value.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
