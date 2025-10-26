import { motion } from "motion/react";

interface Partner {
  name: string;
  logo: string;
  url: string;
}

const partners: Partner[] = [
  {
    name: "Mangrove",
    logo: "https://i.imgur.com/T4eanjV.png",
    url: "#",
  },
  {
    name: "DIBA Studios",
    logo: "https://imgur.com/tTfzqQX.png",
    url: "#",
  },
  {
    name: "Bortopra Group",
    logo: "https://i.imgur.com/Q9VYYwl.png",
    url: "#",
  },
  {
    name: "ProDG",
    logo: "https://imgur.com/aRulIVn.png",
    url: "#",
  },
  {
    name: "Zidi",
    logo: "https://imgur.com/FPhu77L.png",
    url: "#",
  },
];

// Duplicate once for seamless loop illusion
const infinitePartners = [...partners, ...partners];

export function PartnersCarousel() {
  return (
    <section className="py-20 bg-[#0a0a0a] border-t border-b border-[#ff2ec4]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl text-[#ff2ec4]">Our Partners</h2>
        </motion.div>

        {/* Horizontal scrolling carousel */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-12 md:gap-16 w-max"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {infinitePartners.map((partner, index) => (
                <motion.a
                  key={`${partner.name}-${index}`}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1a1a1a] border-2 border-[#ff2ec4]/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-[#00e0ff] transition-all flex-shrink-0"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index % partners.length) * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-48 h-32 object-contain"
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
