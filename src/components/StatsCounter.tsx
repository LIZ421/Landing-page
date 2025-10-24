import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

interface Stat {
  label: string;
  value: number;
  suffix?: string;
  icon: string;
}

const stats: Stat[] = [
  { label: "Active Members", value: 1000, suffix: "+", icon: "👥" },
  { label: "Events Hosted", value: 25, suffix: "+", icon: "🎪" },
  { label: "Startups Supported", value: 100, suffix: "+", icon: "🚀" },
  { label: "Years of Impact", value: 4, suffix: "+", icon: "⭐" },
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let current = 0;
    const increment = value / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatsCounter() {
  return (
    <section className="py-20 bg-[#0a0a0a]" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-5xl mb-4 text-[#f5f5f5]">
            About our <span className="text-[#ff2ec4]">community</span>
          </h2>
        </motion.div>

        {/* Manifesto paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-lg text-[#a0a0a0] max-w-3xl mx-auto mb-12"
        >
          We are a growing collective of bold founders, builders, and dreamers. Together, we host, support, and scale startups that thrive beyond borders rooted in Nairobi, powered by purpose, and united by a vision of remote-first success.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-[#1a1a1a] border border-[#ff2ec4]/30 rounded-[30px] p-8 shadow-lg hover:shadow-2xl hover:border-[#ff2ec4] transition-all"
            >
              <div className="text-5xl mb-4 text-center">{stat.icon}</div>
              <div className="text-4xl text-center mb-2 text-white">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-center text-white">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}