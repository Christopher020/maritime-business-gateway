import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import intellianLogo from "@/assets/cisco-meraki-logo.png";
import inmarsatLogo from "@/assets/inmarsat-logo.png";
import iridiumLogo from "@/assets/iridium-logo.png";
import starlinkLogo from "@/assets/starlink-logo.png";

const partners = [
  {
    name: "Intellian",
    logo: "https://greigtechnologies.com/static/media/intellian.79f1f09a180a63277b91.png",
  },
  {
    name: "OneWeb",
    logo: "https://greigtechnologies.com/static/media/OneWeb_Logo.9c501a0063bb525710f7.png",
  },
  {
    name: "Starlink",
    logo: starlinkLogo,
  },
  {
    name: "Cisco Meraki",
    logo: intellianLogo,
  },
  {
    name: "Inmarsat",
    logo: inmarsatLogo,
  },
  {
    name: "Iridium",
    logo: iridiumLogo,
  },
];

const Partners = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  // Duplicate partners for seamless loop
  const allPartners = [...partners, ...partners];

  return (
    <section id="partners" className="py-20 bg-background overflow-hidden">
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

        {/* Auto-scrolling Carousel */}
        <div className="relative" ref={carouselRef}>
          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -(partners.length * 232)],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {allPartners.map((partner, index) => (
                <motion.div
                key={`${partner.name}-${index}`}
                whileHover={{ y: -4 }}
                className="group relative min-w-[240px] h-32 flex items-center justify-center p-6 bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 shrink-0"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  style={{ height: '80px', width: 'auto' }}
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </motion.div>
            ))}
          </motion.div>
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
