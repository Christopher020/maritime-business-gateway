import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const partners = [
  {
    name: "Intellian",
    logo: "https://greigtechnologies.com/static/media/intellian.79f1f09a180a63277b91.png",
  },
  {
    name: "Comtech",
    logo: "https://greigtechnologies.com/static/media/comtech.c034db2e55ed8ccd814d.png",
  },
  {
    name: "OneWeb",
    logo: "https://greigtechnologies.com/static/media/OneWeb_Logo.9c501a0063bb525710f7.png",
  },
  {
    name: "Starlink",
    logo: "https://greigtechnologies.com/static/media/Starlink_Logo.svg.9d7726d700fde5838a60.png",
  },
];

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-heading font-semibold text-accent text-sm tracking-widest uppercase mb-4">
            Trusted Partners
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Technological Partners
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            We partner with the world's leading satellite and communication technology providers
            to deliver the best solutions for our clients.
          </p>
        </ScrollReveal>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative w-full max-w-[200px] h-24 flex items-center justify-center p-6 bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Trust Banner */}
        <ScrollReveal delay={0.4} className="mt-16 text-center">
          <p className="text-muted-foreground">
            Trusted by leading oil & gas companies and maritime operators across Africa
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Partners;
